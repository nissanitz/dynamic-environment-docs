"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[821],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||a;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_label:"Custom Settings",sidebar_position:1},o="Custom Settings",s={unversionedId:"references/custom-settings",id:"references/custom-settings",title:"Custom Settings",description:"This page provides an overview of custom settings that can be applied to your manifest or Helm chart",source:"@site/docs/references/custom-settings.md",sourceDirName:"references",slug:"/references/custom-settings",permalink:"/dynamic-environment-docs/references/custom-settings",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/references/custom-settings.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Custom Settings",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Extensions",permalink:"/dynamic-environment-docs/advanced/extensions"},next:{title:"DynamicEnv CRD Reference",permalink:"/dynamic-environment-docs/references/crd"}},l={},c=[{value:"<em>VersionLabel</em> and <em>DefaultVersion</em>",id:"versionlabel-and-defaultversion",level:3},{value:"Labels to Remove (when creating overriding deployments)",id:"labels-to-remove-when-creating-overriding-deployments",level:3}],m={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"custom-settings"},"Custom Settings"),(0,i.kt)("p",null,"This page provides an overview of custom settings that can be applied to your manifest or Helm chart\nbefore deploying."),(0,i.kt)("h3",{id:"versionlabel-and-defaultversion"},(0,i.kt)("em",{parentName:"h3"},"VersionLabel")," and ",(0,i.kt)("em",{parentName:"h3"},"DefaultVersion")),(0,i.kt)("p",null,"To create a custom subset ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/reference/config/networking/destination-rule/"},(0,i.kt)("em",{parentName:"a"},"Destination Rule")),", it's essential to identify the ",(0,i.kt)("em",{parentName:"p"},"default")," version\nof the application. This identification is crucial for duplicating the appropriate ",(0,i.kt)("em",{parentName:"p"},"Destination\nRule"),". This is achieved through two settings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"VersionLabel")," - This label signifies the version of the application (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"version"),"). It\nshould maintain consistency across all ",(0,i.kt)("em",{parentName:"li"},"deployments")," and ",(0,i.kt)("em",{parentName:"li"},"destination rules"),". This setting can\nonly be configured globally."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"DefaultVersion")," - This setting designates the value of the ",(0,i.kt)("em",{parentName:"li"},"VersionLabel")," that identifies the\n",(0,i.kt)("strong",{parentName:"li"},"default version")," (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"shared"),"). It can be set individually for each subset when a global\ndefault version is not applicable. Refer to the ",(0,i.kt)("inlineCode",{parentName:"li"},"defaultVersion")," field in\nthe ",(0,i.kt)("a",{parentName:"li",href:"/dynamic-environment-docs/references/crd#subset"},"subset documentation")," for details.")),(0,i.kt)("h3",{id:"labels-to-remove-when-creating-overriding-deployments"},"Labels to Remove (when creating overriding deployments)"),(0,i.kt)("p",null,"In scenarios where you are creating a custom version of a ",(0,i.kt)("em",{parentName:"p"},"Deployment"),", there might be a need to\neliminate specific labels from the duplicated deployment. This could be a label used by third-party\ntools (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"argocd.argoproj.io/instance"),") or any other label that could potentially interfere with\nyour workflow."),(0,i.kt)("p",null,"This removal process is configurable on a global scale for the entire controller installation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When deploying using ",(0,i.kt)("em",{parentName:"li"},"Kustomize"),", you can customize the labels to remove by modifying\nthe ",(0,i.kt)("inlineCode",{parentName:"li"},"--remove-labels")," flag (and the corresponding parameter). Additional labels can be added to\nthe list as needed. Detailed instructions are available on\nthe ",(0,i.kt)("a",{parentName:"li",href:"/dynamic-environment-docs/getting-started/installation#deploy-using-kustomize"},"installation page"),"."),(0,i.kt)("li",{parentName:"ul"},"When deploying via ",(0,i.kt)("a",{parentName:"li",href:"/dynamic-environment-docs/getting-started/installation#deploy-using-helm"},"Helm"),", you can specify\nthe ",(0,i.kt)("inlineCode",{parentName:"li"},"labelsToRemove")," setting.")))}d.isMDXComponent=!0}}]);