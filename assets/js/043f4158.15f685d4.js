"use strict";(self.webpackChunktaier_website=self.webpackChunktaier_website||[]).push([[9061],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2928:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"\u5de5\u4f5c\u6d41",sidebar_label:"\u5de5\u4f5c\u6d41"},c=void 0,u={unversionedId:"functions/task/workflow",id:"functions/task/workflow",title:"\u5de5\u4f5c\u6d41",description:"\u5de5\u4f5c\u6d41",source:"@site/docs/functions/task/workflow.md",sourceDirName:"functions/task",slug:"/functions/task/workflow",permalink:"/Taier/docs/functions/task/workflow",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/functions/task/workflow.md",tags:[],version:"current",frontMatter:{title:"\u5de5\u4f5c\u6d41",sidebar_label:"\u5de5\u4f5c\u6d41"},sidebar:"docs",previous:{title:"Shell",permalink:"/Taier/docs/functions/task/shell"},next:{title:"\u865a\u8282\u70b9",permalink:"/Taier/docs/functions/task/virtual"}},p=[{value:"\u5de5\u4f5c\u6d41",id:"\u5de5\u4f5c\u6d41",children:[],level:2},{value:"\u914d\u7f6e\u8981\u6c42",id:"\u914d\u7f6e\u8981\u6c42",children:[],level:2},{value:"\u5411\u5bfc\u64cd\u4f5c",id:"\u5411\u5bfc\u64cd\u4f5c",children:[],level:2}],s={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u5de5\u4f5c\u6d41"},"\u5de5\u4f5c\u6d41"),(0,i.kt)("p",null,"\u5f53\u9700\u8981\u5c06\u4e00\u7ec4\u4efb\u52a1\u4e32\u8d77\u6765\u8fd0\u884c\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u300c\u5de5\u4f5c\u6d41\u300d\u7c7b\u578b\u7684\u4efb\u52a1"),(0,i.kt)("p",null,"\u5de5\u4f5c\u6d41\u76f8\u5f53\u4e8e\u662f\u4e00\u4e2a\u300c\u7a7a\u58f3\u300d\uff0c\u91cc\u9762\u53ef\u5305\u542b\u82e5\u5e72\u300c\u8282\u70b9\u300d\uff0c\u6bcf\u4e2a\u8282\u70b9\u76f8\u5f53\u4e8e\u4e00\u4e2a\u4efb\u52a1\uff0c\u4f8b\u5982SparkSQL\u8282\u70b9\uff0c\u5728\u8fd0\u884c\u65f6\u4e0e\u4e00\u4e2aSparkSQL\u4efb\u52a1\u6ca1\u6709\u5dee\u522b"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5de5\u4f5c\u6d41\u9002\u7528\u4e8e\u4e00\u7ec4\u76f8\u5173\u5ea6\u8f83\u9ad8\u7684\u64cd\u4f5c\uff0c\u7528\u5de5\u4f5c\u6d41\u7684\u65b9\u5f0f\u5c06\u5176\u300c\u6253\u5305\u300d\u4e3a\u4e00\u4e2a\u6574\u4f53\uff0c\u8fd0\u884c\u3001\u91cd\u8dd1\u7b49\u573a\u666f\u4e0b\u64cd\u4f5c\u6bd4\u8f83\u65b9\u4fbf\n\u6574\u4e2a\u5de5\u4f5c\u6d41\u5fc5\u987b\u4f5c\u4e3a\u6574\u4f53\u6765\u8fd0\u884c\uff0c\u5728\u914d\u7f6e\u4f9d\u8d56\u5173\u7cfb\u3001\u5c0f\u8303\u56f4\u91cd\u8dd1\u7b49\u64cd\u4f5c\u65f6\u4e0d\u591f\u7075\u6d3b"))),(0,i.kt)("h2",{id:"\u914d\u7f6e\u8981\u6c42"},"\u914d\u7f6e\u8981\u6c42"),(0,i.kt)("p",null,"\u8282\u70b9\u4f9d\u8d56\u8981\u6c42\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9700\u8bbe\u7f6e\u4e00\u4e2a\u552f\u4e00\u7684\u8d77\u70b9\uff0c\u6574\u4e2a\u5de5\u4f5c\u6d41\u4e0d\u80fd\u6709\u591a\u4e2a\u8d77\u70b9"),(0,i.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u6d41\u5185\u90e8\u4f9d\u8d56\u53ef\u4ee5\u6709\u5206\u652f\uff0c\u4f46\u4e0d\u80fd\u6210\u73af"),(0,i.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\uff1a \u5de5\u4f5c\u6d41\u9700\u8981\u5c06\u6bcf\u4e2a\u8282\u70b9\u7684\u914d\u7f6e\u4fe1\u606f\u5206\u522b\u4fdd\u5b58\u540e\u624d\u53ef\u4ee5\u63d0\u4ea4"),(0,i.kt)("li",{parentName:"ul"},"\u8c03\u5ea6\u4e0e\u4f9d\u8d56\u914d\u7f6e\uff1a\u5de5\u4f5c\u6d41\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\uff0c\u53ef\u4ee5\u914d\u7f6e\u8c03\u5ea6\u4f9d\u8d56\u3001\u4e0a\u4e0b\u6e38\u4f9d\u8d56\u7b49\u4fe1\u606f\u3002\u5de5\u4f5c\u6d41\u5185\u90e8\u7684\u6bcf\u4e2a\u8282\u70b9\uff0c\u53ef\u4ee5\u5355\u72ec\u8bbe\u7f6e\u662f\u5426\u51bb\u7ed3\u3001\u91cd\u8bd5\u914d\u7f6e\u548c\u8d77\u8c03\u65f6\u95f4"),(0,i.kt)("li",{parentName:"ul"},"\u8d77\u8c03\u65f6\u95f4\uff1a\u5de5\u4f5c\u6d41\u6574\u4f53\u6709\u542f\u52a8\u8fd0\u884c\u7684\u65f6\u95f4\uff08\u4f8b\u5982\u6bcf\u592905:00\u542f\u52a8\uff09\uff0c\u6bcf\u4e2a\u8282\u70b9\u53ef\u4ee5\u5355\u72ec\u8bbe\u7f6e\u8d77\u8c03\u65f6\u95f4\uff08\u4f8b\u5982\u5185\u90e8\u51e0\u4e2a\u8282\u70b9\u53ef\u4ee5\u572806:00\u300108:00\u300110:00\u542f\u52a8\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u8282\u70b9\u53c2\u6570\u3001\u73af\u5883\u53c2\u6570\uff1a\u6bcf\u4e2a\u8282\u70b9\u5355\u72ec\u914d\u7f6e\uff0c\u4e0e\u666e\u901a\u4efb\u52a1\u76f8\u540c")),(0,i.kt)("h2",{id:"\u5411\u5bfc\u64cd\u4f5c"},"\u5411\u5bfc\u64cd\u4f5c"),(0,i.kt)("p",null,"\u753b\u5e03\u64cd\u4f5c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u62d6\u62fd\uff1a\u53ef\u4ece\u5de6\u4fa7\u62d6\u62fd\u8282\u70b9\u81f3\u753b\u5e03\uff0c\u5728\u5f39\u7a97\u4e2d\u8865\u5145\u76f8\u5173\u4fe1\u606f\u53ef\u5efa\u7acb\u8282\u70b9  "),(0,i.kt)("li",{parentName:"ul"},"\u753b\u5e03\u64cd\u4f5c\uff1a\u652f\u6301\u81ea\u52a8\u6574\u7406\u3001\u653e\u5927\u3001\u7f29\u5c0f\u3001\u641c\u7d22\u64cd\u4f5c\uff0c\u81ea\u52a8\u6574\u7406\u65f6\u53ef\u80fd\u4f1a\u53d1\u751f\u8fde\u7ebf\u91cd\u53e0\u7684\u60c5\u51b5\uff0c\u5355\u51fb\u67d0\u4e2a\u8282\u70b9\u53ef\u9ad8\u4eae\u76f8\u5173\u8fde\u7ebf  "),(0,i.kt)("li",{parentName:"ul"},"\u8282\u70b9\u8fde\u7ebf\uff1ahover\u5728\u67d0\u4e2a\u8282\u70b9\u7684\u4e0b\u90e8\uff0c\u6309\u4f4f\u5de6\u952e\u53ef\u8fdb\u884c\u8282\u70b9\u95f4\u7684\u8fde\u7ebf\u3002\u4efb\u52a1\u5c06\u6309\u8fde\u7ebf\u7684\u4e0a\u4e0b\u4f9d\u8d56\u5173\u7cfb\u8fd0\u884c\uff0c\u4e0a\u6e38\u4efb\u52a1\u6210\u529f\u540e\uff0c\u4e0b\u6e38\u4efb\u52a1\u624d\u5177\u5907\u8fd0\u884c\u6761\u4ef6  "),(0,i.kt)("li",{parentName:"ul"},"\u53cc\u51fb\u8282\u70b9\uff1a\u8fdb\u5165\u8282\u70b9\u4fe1\u606f\u7f16\u8f91\u9875\u9762\uff0c\u4f8b\u5982\u53cc\u51fbSparkSQL\u7c7b\u578b\u7684\u8282\u70b9\uff0c\u8fdb\u5165SQL\u7f16\u8f91\u9875\u9762  "),(0,i.kt)("li",{parentName:"ul"},"\u8282\u70b9\u64cd\u4f5c\uff1a\u53f3\u952e\u5355\u51fb\u8282\u70b9\uff0c\u5f39\u51fa\u53f3\u952e\u83dc\u5355  "),(0,i.kt)("li",{parentName:"ul"},"\u4fdd\u5b58\u8282\u70b9\uff1a\u4fdd\u5b58\u5f53\u524d\u8282\u70b9\u7684\u6240\u6709\u4fe1\u606f  "),(0,i.kt)("li",{parentName:"ul"},"\u7f16\u8f91\u540d\u79f0\uff1a\u7f16\u8f91\u5f53\u524d\u8282\u70b9\u7684\u540d\u79f0  "),(0,i.kt)("li",{parentName:"ul"},"\u7f16\u8f91\u8282\u70b9\u5c5e\u6027\uff1a\u7f16\u8f91\u5f53\u524d\u8282\u70b9\u7684\u5c5e\u6027\u4fe1\u606f\uff0c\u4f8b\u5982Spark Jar\u7c7b\u578b\u7684\u8282\u70b9\uff0c\u7f16\u8f91\u7684\u5f39\u7a97\u4e0e\u65b0\u5efa\u8282\u70b9\u7684\u5f39\u7a97\u662f\u4e00\u6837\u7684\uff0c\u53ef\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u6267\u884c\u66ff\u6362Jar\u5305\u7b49\u64cd\u4f5c  "),(0,i.kt)("li",{parentName:"ul"},"\u67e5\u770b\u8282\u70b9\u5185\u5bb9\uff1a\u4e0e\u53cc\u51fb\u8282\u70b9\u76f8\u540c  "),(0,i.kt)("li",{parentName:"ul"},"\u5220\u9664\u8282\u70b9\uff1a\u5220\u9664\u672c\u8282\u70b9\u53ca\u76f8\u5173\u7684\u8fde\u7ebf\uff08\u6b64\u64cd\u4f5c\u4e0d\u53ef\u64a4\u9500\uff09  "),(0,i.kt)("li",{parentName:"ul"},"\u5220\u9664\u8fde\u7ebf\uff1a\u53f3\u952e\u5355\u51fb\u8fde\u7ebf\uff0c\u53ef\u5220\u9664\u6b64\u8fde\u7ebf  ")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6574\u4e2a\u5de5\u4f5c\u6d41\u5fc5\u987b\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\uff0c\u4f5c\u4e3a\u5176\u4ed6\u4efb\u52a1\u7684\u4e0a\u6e38\u6216\u4e0b\u6e38\uff0c\u4e0d\u652f\u6301\u5c06\u4f9d\u8d56\u5173\u7cfb\u6307\u5b9a\u5230\u5de5\u4f5c\u6d41\u5185\u90e8\u7684\u8282\u70b9",(0,i.kt)("br",{parentName:"p"}),"\n","\u6574\u4e2a\u5de5\u4f5c\u6d41\u72b6\u6001\u4f9d\u8d56\u81ea\u8eab\u5185\u90e8\u5b50\u4efb\u52a1\uff0c\u5185\u90e8\u5b50\u4efb\u52a1\u6709\u4efb\u52a1\u5931\u8d25\u65f6\uff0c\u81ea\u8eab\u4f1a\u7acb\u5373\u5931\u8d25"))))}m.isMDXComponent=!0}}]);