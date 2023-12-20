"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[823],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[m]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_label:"Requirements",sidebar_position:1},a="Requirements",s={unversionedId:"getting-started/requirements",id:"getting-started/requirements",title:"Requirements",description:"DynamicEnvironment is distributed as a Docker image. Since we are actively developing",source:"@site/docs/getting-started/requirements.md",sourceDirName:"getting-started",slug:"/getting-started/requirements",permalink:"/getting-started/requirements",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/requirements.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Requirements",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/"},next:{title:"Installation",permalink:"/getting-started/installation"}},u={},l=[{value:"Build Requirements",id:"build-requirements",level:3},{value:"Building from Source",id:"building-from-source",level:3},{value:"Runtime Requirements",id:"runtime-requirements",level:3}],c={toc:l},m="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"DynamicEnvironment")," is distributed as a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Riskified/dynamic-environment/pkgs/container/dynamic-environment"},"Docker image"),". Since we are actively developing\nthe project, ",(0,i.kt)("strong",{parentName:"p"},"it is essential to review the ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/Riskified/dynamic-environment/releases/latest/"},"release notes")," for the specific release\nversion you intend to install to ensure there are no additional requirements.")," Additionally, you\nwill need access to the source code for generating deployment manifests and Helm charts."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Throughout this tutorial, we assume you have a basic understanding of Docker, Kubernetes, and Istio,\nincluding concepts like Docker image names and registry setup.")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"If you are upgrading your instance of ",(0,i.kt)("em",{parentName:"p"},"DynamicEnvironment"),", it's crucial to carefully read all\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Riskified/dynamic-environment/releases/latest/"},"release notes")," leading up to the version you are updating to, as there might be\nsignificant changes that require attention.")),(0,i.kt)("h3",{id:"build-requirements"},"Build Requirements"),(0,i.kt)("p",null,"As mentioned earlier, you will require access to the source code to generate the necessary\ndeployment manifests. To set up a build environment, please refer to the requirements and\ninstructions outlined in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Riskified/dynamic-environment/"},"repository's README"),". Ensure that you check out the tag\ncorresponding to the version you intend to deploy."),(0,i.kt)("h3",{id:"building-from-source"},"Building from Source"),(0,i.kt)("p",null,"There are occasions that you'll want to build the operator from source (e.g., if you want to\nuse ",(0,i.kt)("a",{parentName:"p",href:"/advanced/extensions"},"extensions"),"). For instructions on building the operator from source\nplease consult the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Riskified/dynamic-environment/"},"repository's README"),"."),(0,i.kt)("h3",{id:"runtime-requirements"},"Runtime Requirements"),(0,i.kt)("p",null,"For this controller to operate smoothly, you need recent versions of both ",(0,i.kt)("em",{parentName:"p"},"Kubernetes")," and ",(0,i.kt)("em",{parentName:"p"},"Istio"),".\nConsult the ",(0,i.kt)("a",{parentName:"p",href:"/references/supported-versions"},(0,i.kt)("em",{parentName:"a"},"Supported Versions"))," documentation for\ninformation on tested versions. Keep in mind that while other versions may work, they should undergo\ntesting to ensure compatibility."))}p.isMDXComponent=!0}}]);