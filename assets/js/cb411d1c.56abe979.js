"use strict";(self.webpackChunktaier_website=self.webpackChunktaier_website||[]).push([[1321],{3905:function(t,n,e){e.d(n,{Zo:function(){return m},kt:function(){return s}});var a=e(7294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function o(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=a.createContext({}),c=function(t){var n=a.useContext(p),e=n;return t&&(e="function"==typeof t?t(n):l(l({},n),t)),e},m=function(t){var n=c(t.components);return a.createElement(p.Provider,{value:n},t.children)},d={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=c(e),s=r,k=u["".concat(p,".").concat(s)]||u[s]||d[s]||i;return e?a.createElement(k,l(l({ref:n},m),{},{components:e})):a.createElement(k,l({ref:n},m))}));function s(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var i=e.length,l=new Array(i);l[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=e[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,e)}u.displayName="MDXCreateElement"},6856:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var a=e(7462),r=e(3366),i=(e(7294),e(3905)),l=["components"],o={title:"Script-On-Yarn",sidebar_label:"Script-On-Yarn"},p=void 0,c={unversionedId:"functions/component/script-on-yarn",id:"functions/component/script-on-yarn",title:"Script-On-Yarn",description:"\u914d\u7f6e Script",source:"@site/docs/functions/component/script-on-yarn.md",sourceDirName:"functions/component",slug:"/functions/component/script-on-yarn",permalink:"/Taier/docs/functions/component/script-on-yarn",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/functions/component/script-on-yarn.md",tags:[],version:"current",frontMatter:{title:"Script-On-Yarn",sidebar_label:"Script-On-Yarn"},sidebar:"docs",previous:{title:"Flink On Standalone",permalink:"/Taier/docs/functions/component/flink-on-standalone"},next:{title:"Script-On-Standalone",permalink:"/Taier/docs/functions/component/script-on-standalone"}},m=[{value:"\u914d\u7f6e Script",id:"\u914d\u7f6e-script",children:[{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",children:[],level:3}],level:2}],d={toc:m};function u(t){var n=t.components,e=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u914d\u7f6e-script"},"\u914d\u7f6e Script"),(0,i.kt)("p",null,"\u5df2\u914d\u7f6e\u524d\u7f6e\u7ec4\u4ef6"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","SFTP"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","YARN"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","HDFS")),(0,i.kt)("p",null,"Script-On-Yarn \u8ba1\u7b97\u7ec4\u4ef6\u7528\u4e8e\u8fd0\u884c Shell\u3001Python \u7b49\u811a\u672c\u4efb\u52a1\uff0c \u82e5\u60a8\u6709\u8fd0\u884c\u811a\u672c\u4efb\u52a1\u7684\u9700\u6c42\uff0c\u8bf7\u786e\u4fdd Script-On-Yarn \u7ec4\u4ef6\u6b63\u786e\u914d\u7f6e"),(0,i.kt)("h3",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u9879"),(0,i.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,i.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"script.java.opts"),(0,i.kt)("td",{parentName:"tr",align:null},"-Dfile.encoding=UTF-8"),(0,i.kt)("td",{parentName:"tr",align:null},"script container jvm \u6269\u5c55\u53c2\u6570"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"script.am.memory"),(0,i.kt)("td",{parentName:"tr",align:null},"512m"),(0,i.kt)("td",{parentName:"tr",align:null},"am container \u4f7f\u7528\u7684\u5185\u5b58\u91cf"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"script.am.cores"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"am container \u4f7f\u7528\u7684 cpu \u6838\u6570"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"script.worker.memory"),(0,i.kt)("td",{parentName:"tr",align:null},"512m"),(0,i.kt)("td",{parentName:"tr",align:null},"work container \u4f7f\u7528\u7684\u5185\u5b58\u91cf"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"script.worker.cores"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"work container \u4f7f\u7528\u7684 cpu \u6838\u6570"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"script.worker.num"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"work container \u5b9e\u4f8b\u6570\u91cf"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"container.staging.dir"),(0,i.kt)("td",{parentName:"tr",align:null},"/insight/script/staging"),(0,i.kt)("td",{parentName:"tr",align:null},"\u4efb\u52a1\u4e34\u65f6\u6587\u4ef6\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"script.container.heartbeat.interval"),(0,i.kt)("td",{parentName:"tr",align:null},"10000"),(0,i.kt)("td",{parentName:"tr",align:null},"am \u548c work \u4e4b\u95f4\u7684\u5fc3\u8df3\u95f4\u9694\uff0c\u5355\u4f4d\u6beb\u79d2"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"script.container.heartbeat.timeout"),(0,i.kt)("td",{parentName:"tr",align:null},"120000"),(0,i.kt)("td",{parentName:"tr",align:null},"am \u548c work \u4e4b\u95f4\u7684\u5fc3\u8df3\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"script.python2.path"),(0,i.kt)("td",{parentName:"tr",align:null},"/data/miniconda2/bin/python2"),(0,i.kt)("td",{parentName:"tr",align:null},"python2.x \u4e8c\u8fdb\u5236\u53ef\u6267\u884c\u6587\u4ef6\u5730\u5740"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"script.python3.path"),(0,i.kt)("td",{parentName:"tr",align:null},"/data/miniconda3/bin/python3"),(0,i.kt)("td",{parentName:"tr",align:null},"python3.x \u4e8c\u8fdb\u5236\u53ef\u6267\u884c\u6587\u4ef6\u5730\u5740"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4efb\u52a1\u8fd0\u884c\u5728Hadoop\u7684\u8ba1\u7b97\u8282\u70b9\u4e0a\uff0c\u9002\u5408\u590d\u6742\u7684\u811a\u672c\u548c\u5927\u91cf\u7684\u4efb\u52a1"))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u82e5\u60a8\u6709\u8fd0\u884c Python \u4efb\u52a1\u7684\u9700\u6c42\uff0c\u8bf7\u786e\u4fdd script.python2.path\u3001script.python3.path \u5bf9\u5e94\u7684\u4e8c\u8fdb\u5236\u53ef\u6267\u884c\u6587\u4ef6\u5b58\u5728\uff0c\u5426\u5219\u65e0\u6cd5\u8fd0\u884c Python \u4efb\u52a1"))))}u.isMDXComponent=!0}}]);