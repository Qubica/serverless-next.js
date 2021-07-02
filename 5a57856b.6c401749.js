(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(6),a=(n(0),n(95)),o={id:"cdkconstruct",title:"CDK Construct (experimental)",sidebar_label:"CDK Construct"},l={unversionedId:"cdkconstruct",id:"cdkconstruct",isDocsHomePage:!1,title:"CDK Construct (experimental)",description:"AWS CDK (Cloud Development Kit) makes it possible to write infrastructure in",source:"@site/docs/cdkconstruct.md",slug:"/cdkconstruct",permalink:"/docs/cdkconstruct",editUrl:"https://github.com/serverless-nextjs/serverless-next.js/documentation/docs/docs/cdkconstruct.md",version:"current",sidebar_label:"CDK Construct",sidebar:"someSidebar",previous:{title:"Examples/Samples",permalink:"/docs/examples"}},c=[{value:"Adding a Custom Domain",id:"adding-a-custom-domain",children:[]},{value:"Available Props",id:"available-props",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"AWS CDK (Cloud Development Kit) makes it possible to write infrastructure in\ncode using familiar languages such as JavaScript or Python, and provision via\nCloudformation. The tool is growing in popularity and so it seems fitting to\nenable Next.js users to be able to deploy their apps using it. The\n",Object(a.b)("inlineCode",{parentName:"p"},"NextJSLambdaEdge")," construct will provision the same infrastructure as the\n",Object(a.b)("inlineCode",{parentName:"p"},"serverless-component"),"."),Object(a.b)("p",null,"It's simple to include the Next.js construct in your app, the following will\ndeploy your Next app using a Cloudfront domain:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'// stack.ts\nimport { NextJSLambdaEdge } from "@sls-next/cdk-construct";\nimport * as cdk from "@aws-cdk/core";\n\nexport class MyStack extends cdk.Stack {\n  constructor(scope: cdk.Construct, id: string, props: cdk.StackProps) {\n    super(scope, id, props);\n    new NextJSLambdaEdge(this, "NextJsApp", {\n      serverlessBuildOutDir: "./build"\n    });\n  }\n}\n\n// bin.ts\nimport * as cdk from "@aws-cdk/core";\nimport { Builder } from "@sls-next/lambda-at-edge";\nimport { MyStack } from "./stack";\n\n// Run the serverless builder, this could be done elsewhere in your workflow\nconst builder = new Builder(".", "./build", { args: ["build"] });\n\nbuilder\n  .build()\n  .then(() => {\n    const app = new cdk.App();\n    new MyStack(app, `MyStack`);\n  })\n  .catch((e) => {\n    console.log(e);\n    process.exit(1);\n  });\n')),Object(a.b)("p",null,"To deploy your stack, use the ",Object(a.b)("inlineCode",{parentName:"p"},"cdk")," CLI as normal."),Object(a.b)("h2",{id:"adding-a-custom-domain"},"Adding a Custom Domain"),Object(a.b)("p",null,"Now you've deployed your app, you'll likely want to add a custom domain:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'new NextJSLambdaEdge(this, "NextJsApp", {\n  serverlessBuildOutDir: "./build",\n  // `Certificate.fromCertificateArn` & `HostedZone.fromHostedZoneAttributes`\n  // retrieve existing resources, however you could create a new ones in your\n  // stack via the relevant constructs\n  domain: {\n    domainName: "example.com",\n    hostedZone: HostedZone.fromHostedZoneAttributes(this, "Zone", {\n      hostedZoneId: "123ABC",\n      zoneName: "example.com"\n    }),\n    certificate: Certificate.fromCertificateArn(this, "Cert", "...arn...")\n  }\n});\n')),Object(a.b)("h2",{id:"available-props"},"Available Props"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"serverlessBuildOutDir")," - the output directory of the ",Object(a.b)("inlineCode",{parentName:"li"},"Builder"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"domain?: Object")," - if you'd like to add a custom domain, provide the\nfollowing three fields on the ",Object(a.b)("inlineCode",{parentName:"li"},"domain")," object.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"hostedZone: IHostedZone;")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"certificate: ICertificate;")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"domainName: string;")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"memory?: number | Record<string, number>")," - configure memory on all lambdas\nor individually."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"timeout?: number | Record<string, number>")," - configure timeout on all lambdas\nor individually."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"name?: string | Record<string, string>")," - configure the name of all lambdas\nor individually."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"runtime?: lambda.Runtime | Record<string, lambda.Runtime>")," - configure the runtime of all lambdas\nor individually."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"withLogging?: boolean")," - set debug logging on the lambda."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"s3Props?: Partial<BucketProps>")," - pass custom s3 props"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"whiteListedCookies?: string[]")," - provide a list of cookies to forward to the\nCloudFront origin."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"defaultBehavior?: Partial<cloudfront.Behaviour>")," - provide overrides for the\ndefault behavior"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"behaviours?: Array<cloudfront.Behaviour>")," - an array of Cloudfront\ndistribution behaviours."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"invalidationPaths?: string[]")," - an array of invalidation paths, by default we\ninvalidate all pages found in manifest"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"cachePolicyName?: Object"),": configure the name given to the cache policies")))}u.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||a;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);