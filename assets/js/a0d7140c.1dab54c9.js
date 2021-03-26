(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{188:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return p})),n.d(r,"toc",(function(){return i})),n.d(r,"default",(function(){return l}));var t=n(3),s=n(7),a=(n(0),n(261)),o={id:"server-setup",title:"Setup an HTTP server",sidebar_label:"Setup an HTTP server"},p={unversionedId:"server-setup",id:"server-setup",isDocsHomePage:!1,title:"Setup an HTTP server",description:"Here's an example using express-graphql:",source:"@site/docs/server-setup.md",slug:"/server-setup",permalink:"/docs/server-setup",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/server-setup.md",version:"current",sidebar_label:"Setup an HTTP server",sidebar:"someSidebar",previous:{title:"Stitching API",permalink:"/docs/stitch-api"},next:{title:"Loading GraphQL Schemas from different sources",permalink:"/docs/schema-loading"}},i=[{value:"Adding Subscriptions support",id:"adding-subscriptions-support",children:[]}],c={toc:i};function l(e){var r=e.components,n=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},c,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Here's an example using express-graphql:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const express = require('express');\nconst { graphqlHTTP } = require('express-graphql');\n\nconst typeDefs = require('./graphql/types');\nconst resolvers = require('./graphql/resolvers');\n\nconst { makeExecutableSchema } = require('@graphql-tools/schema');\n\nconst schema = makeExecutableSchema({\n    typeDefs,\n    resolvers,\n});\n\nconst app = express();\napp.use('/graphql', graphqlHTTP({\n  schema,\n  graphiql: true,\n}));\n\napp.listen(3000, () => {\n    console.info('Listening on http://localhost:3000/graphql');\n});\n")),Object(a.b)("p",null,"And you can test your queries using built-in ",Object(a.b)("a",{parentName:"p",href:"https://github.com/graphql/graphiql/tree/master/packages/graphiql"},"GraphiQL"),";"),Object(a.b)("iframe",{src:"https://codesandbox.io/embed/angry-night-e3x06?autoresize=1&fontsize=14&hidenavigation=1&theme=dark",style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},title:"express-graphql-tools-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),Object(a.b)("h2",{id:"adding-subscriptions-support"},"Adding Subscriptions support"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/enisdenjo/graphql-ws"},Object(a.b)("inlineCode",{parentName:"a"},"graphql-ws"))," offers a server and client implementation for transporting subscription events over WebSockets."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const http = require('http');\nconst express = require('express');\nconst { graphqlHTTP } = require('express-graphql');\nconst { execute, subscribe } = require('graphql');\nconst ws = require('ws'); // yarn add ws\nconst { useServer } = require('graphql-ws/lib/use/ws');\n\nconst typeDefs = require('./graphql/types');\nconst resolvers = require('./graphql/resolvers');\n\nconst { makeExecutableSchema } = require('@graphql-tools/schema');\n\nconst schema = makeExecutableSchema({\n  typeDefs,\n  resolvers,\n});\n\nconst app = express();\napp.use(\n  '/graphql',\n  graphqlHTTP({\n    schema,\n    graphiql: true,\n  })\n);\n\nconst server = http.createServer(app);\n\nconst wsServer = new ws.Server({\n  server,\n  path: '/graphql',\n});\n\nserver.listen(3000, () => {\n  useServer(\n    {\n      schema,\n      execute,\n      subscribe,\n    },\n    wsServer,\n  );\n  console.info('Listening on http://localhost:3000/graphql');\n});\n")))}l.isMDXComponent=!0},261:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return m}));var t=n(0),s=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=s.a.createContext({}),l=function(e){var r=s.a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},u=function(e){var r=l(e.components);return s.a.createElement(c.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return s.a.createElement(s.a.Fragment,{},r)}},h=s.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),h=t,m=u["".concat(o,".").concat(h)]||u[h]||b[h]||a;return n?s.a.createElement(m,p(p({ref:r},c),{},{components:n})):s.a.createElement(m,p({ref:r},c))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,o=new Array(a);o[0]=h;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:t,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);