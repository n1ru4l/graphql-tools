import { getNamedType, GraphQLOutputType, GraphQLList, GraphQLSchema, FieldNode } from 'graphql';

import DataLoader from 'dataloader';

import { delegateToSchema, SubschemaConfig } from '@graphql-tools/delegate';
import { relocatedError } from '@graphql-tools/utils';

import { BatchDelegateOptions } from './types';

const cache1: WeakMap<
  ReadonlyArray<FieldNode>,
  WeakMap<GraphQLSchema | SubschemaConfig<any, any, any, any>, Record<string, DataLoader<any, any>>>
> = new WeakMap();

function createBatchFn<K = any>(options: BatchDelegateOptions) {
  const argsFromKeys = options.argsFromKeys ?? ((keys: ReadonlyArray<K>) => ({ ids: keys }));
  const { valuesFromResults, lazyOptionsFn } = options;

  return async (keys: ReadonlyArray<K>) => {
    const results = await delegateToSchema({
      returnType: new GraphQLList(getNamedType(options.info.returnType) as GraphQLOutputType),
      onLocatedError: originalError =>
        relocatedError(originalError, originalError.path.slice(0, 0).concat(originalError.path.slice(2))),
      args: argsFromKeys(keys),
      ...(lazyOptionsFn == null ? options : lazyOptionsFn(options)),
    });

    if (results instanceof Error) {
      return keys.map(() => results);
    }

    const values = valuesFromResults == null ? results : valuesFromResults(results, keys);

    return Array.isArray(values) ? values : keys.map(() => values);
  };
}

export function getLoader<K = any, V = any, C = K>(options: BatchDelegateOptions<any>): DataLoader<K, V, C> {
  const fieldName = options.fieldName ?? options.info.fieldName;

  let cache2: WeakMap<GraphQLSchema | SubschemaConfig, Record<string, DataLoader<K, V, C>>> = cache1.get(
    options.info.fieldNodes
  );

  if (cache2 === undefined) {
    cache2 = new WeakMap();
    cache1.set(options.info.fieldNodes, cache2);
    const loaders = Object.create(null);
    cache2.set(options.schema, loaders);
    const batchFn = createBatchFn(options);
    const loader = new DataLoader<K, V, C>(keys => batchFn(keys), options.dataLoaderOptions);
    loaders[fieldName] = loader;
    return loader;
  }

  let loaders = cache2.get(options.schema);

  if (loaders === undefined) {
    loaders = Object.create(null);
    cache2.set(options.schema, loaders);
    const batchFn = createBatchFn(options);
    const loader = new DataLoader<K, V, C>(keys => batchFn(keys), options.dataLoaderOptions);
    loaders[fieldName] = loader;
    return loader;
  }

  let loader = loaders[fieldName];

  if (loader === undefined) {
    const batchFn = createBatchFn(options);
    loader = new DataLoader<K, V, C>(keys => batchFn(keys), options.dataLoaderOptions);
    loaders[fieldName] = loader;
  }

  return loader;
}
