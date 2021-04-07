(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{198:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return u}));var o=t(3),r=t(7),a=(t(0),t(262)),c={id:"documents-loading",title:"Loading GraphQL operation documents from different sources",sidebar_label:"Documents loading"},l={unversionedId:"documents-loading",id:"documents-loading",isDocsHomePage:!1,title:"Loading GraphQL operation documents from different sources",description:"Similar to schema loading - but meant to use for GraphQL documents (query/mutation/subscription/fragment).",source:"@site/docs/documents-loading.md",slug:"/documents-loading",permalink:"/docs/documents-loading",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/documents-loading.md",version:"current",sidebar_label:"Documents loading",sidebar:"someSidebar",previous:{title:"Loading GraphQL Schemas from different sources",permalink:"/docs/schema-loading"},next:{title:"Extracting GraphQL definitions from code files",permalink:"/docs/graphql-tag-pluck"}},i=[{value:"Usage",id:"usage",children:[]}],s={toc:i};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Similar to schema loading - but meant to use for GraphQL documents (query/mutation/subscription/fragment)."),Object(a.b)("p",null,"Any input provided as a source will be recognized by utils automatically."),Object(a.b)("p",null,"It also extracts usages of ",Object(a.b)("inlineCode",{parentName:"p"},"gql")," from code files using ",Object(a.b)("a",{parentName:"p",href:"/docs/graphql-tag-pluck"},Object(a.b)("inlineCode",{parentName:"a"},"@graphql-tools/graphql-tag-pluck")),"."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"const { loadDocuments } = require('@graphql-tools/load');\nconst { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');\nconst { CodeFileLoader } = require('@graphql-tools/code-file-loader');\n\nconst document1 = loadDocuments('query { f }'); // load from string\n\nconst document2 = loadDocuments('./users.query.graphql', {  // load from a single file\n    loaders: [\n        new GraphQLFileLoader()\n    ]\n});\n\nconst document3 = loadDocuments('./src/**/*.graphql', { // load from multiple files using glob\n    loaders: [\n        new GraphQLFileLoader()\n    ]\n});\n\nconst document4 = loadDocuments('./src/my-component.ts', {  // load from code file\n    loaders: [\n        new CodeFileLoader()\n    ]\n});\n\n\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"loadDocuments")," returns an array of document sources. Each source object has the following structure:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"interface DocumentSource {\n  document: DocumentNode; // Object representation of GraphQL Content\n  rawSDL: string; // SDL in text\n  location: string; // Way to access to that source\n}\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"loadDocuments")," takes in additional configuration via the ",Object(a.b)("inlineCode",{parentName:"p"},"options")," object (the second argument). There are some defaults to be aware of - to learn more, see ",Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/load/#loaddocuments"},"the full API documentation"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You can learn more about ",Object(a.b)("a",{parentName:"p",href:"/docs/loaders"},"loaders")," to load documents from different sources.")))}u.isMDXComponent=!0},262:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return t?r.a.createElement(b,l(l({ref:n},s),{},{components:t})):r.a.createElement(b,l({ref:n},s))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);