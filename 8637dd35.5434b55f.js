(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{194:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var i=n(2),r=(n(0),n(301)),l=n(305),a=n(306);const o={title:"Linked List Cycle"},c={unversionedId:"linear-list/linked-list/linked-list-cycle",id:"linear-list/linked-list/linked-list-cycle",isDocsHomePage:!1,title:"Linked List Cycle",description:"\u63cf\u8ff0",source:"@site/docs/linear-list/linked-list/linked-list-cycle.md",slug:"/linear-list/linked-list/linked-list-cycle",permalink:"/linear-list/linked-list/linked-list-cycle",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linear-list/linked-list/linked-list-cycle.md",version:"current",sidebar:"someSidebar",previous:{title:"Copy List with Random Pointer",permalink:"/linear-list/linked-list/copy-list-with-random-pointer"},next:{title:"Linked List Cycle II",permalink:"/linear-list/linked-list/linked-list-cycle-ii"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],u={rightToc:s};function d({components:e,...t}){return Object(r.b)("wrapper",Object(i.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(r.b)("p",null,"Given a linked list, determine if it has a cycle in it."),Object(r.b)("p",null,"Follow up:\nCan you solve it without using extra space?"),Object(r.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(r.b)("p",null,"\u6700\u5bb9\u6613\u60f3\u5230\u7684\u65b9\u6cd5\u662f\uff0c\u7528\u4e00\u4e2a\u54c8\u5e0c\u8868",Object(r.b)("inlineCode",{parentName:"p"},"unordered_map<int, bool> visited"),"\uff0c\u8bb0\u5f55\u6bcf\u4e2a\u5143\u7d20\u662f\u5426\u88ab\u8bbf\u95ee\u8fc7\uff0c\u4e00\u65e6\u51fa\u73b0\u67d0\u4e2a\u5143\u7d20\u88ab\u91cd\u590d\u8bbf\u95ee\uff0c\u8bf4\u660e\u5b58\u5728\u73af\u3002\u7a7a\u95f4\u590d\u6742\u5ea6",Object(r.b)("inlineCode",{parentName:"p"},"O(n)"),"\uff0c\u65f6\u95f4\u590d\u6742\u5ea6",Object(r.b)("inlineCode",{parentName:"p"},"O(N)"),"\u3002"),Object(r.b)("p",null,"\u6700\u597d\u7684\u65b9\u6cd5\u662f\u65f6\u95f4\u590d\u6742\u5ea6",Object(r.b)("inlineCode",{parentName:"p"},"O(n)"),"\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6",Object(r.b)("inlineCode",{parentName:"p"},"O(1)"),"\u7684\u3002\u8bbe\u7f6e\u4e24\u4e2a\u6307\u9488\uff0c\u4e00\u4e2a\u5feb\u4e00\u4e2a\u6162\uff0c\u5feb\u7684\u6307\u9488\u6bcf\u6b21\u8d70\u4e24\u6b65\uff0c\u6162\u7684\u6307\u9488\u6bcf\u6b21\u8d70\u4e00\u6b65\uff0c\u5982\u679c\u5feb\u6307\u9488\u548c\u6162\u6307\u9488\u76f8\u9047\uff0c\u5219\u8bf4\u660e\u6709\u73af\u3002\u53c2\u8003\\myurl{ ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"http://leetcode.com/2010/09/detecting-loop-in-singly-linked-list.html%7D"}),"http://leetcode.com/2010/09/detecting-loop-in-singly-linked-list.html}")),Object(r.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(r.b)(l.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(a.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"// Linked List Cycle\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\n    public boolean hasCycle(ListNode head) {\n        // \u8bbe\u7f6e\u4e24\u4e2a\u6307\u9488\uff0c\u4e00\u4e2a\u5feb\u4e00\u4e2a\u6162\n        ListNode slow = head, fast = head;\n        while (fast != null && fast.next != null) {\n            slow = slow.next;\n            fast = fast.next.next;\n            if (slow == fast) return true;\n        }\n        return false;\n    }\n};\n"))),Object(r.b)(a.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),"// Linked List Cycle\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    bool hasCycle(ListNode *head) {\n        // \u8bbe\u7f6e\u4e24\u4e2a\u6307\u9488\uff0c\u4e00\u4e2a\u5feb\u4e00\u4e2a\u6162\n        ListNode *slow = head, *fast = head;\n        while (fast && fast->next) {\n            slow = slow->next;\n            fast = fast->next->next;\n            if (slow == fast) return true;\n        }\n        return false;\n    }\n};\n")))),Object(r.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/linear-list/linked-list/linked-list-cycle-ii"}),"Linked List Cycle II"))))}d.isMDXComponent=!0},301:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var i=n(0),r=n.n(i);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=i,f=d["".concat(a,".").concat(p)]||d[p]||b[p]||l;return n?r.a.createElement(f,o(o({ref:t},s),{},{components:n})):r.a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},302:function(e,t,n){"use strict";function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}},303:function(e,t,n){"use strict";var i=n(0);const r=Object(i.createContext)(void 0);t.a=r},304:function(e,t,n){"use strict";var i=n(0),r=n(303);t.a=function(){const e=Object(i.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},305:function(e,t,n){"use strict";var i=n(0),r=n.n(i),l=n(304),a=n(302),o=n(49),c=n.n(o);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:o,values:d,groupId:b}=e,{tabGroupChoices:p,setTabGroupChoices:f}=Object(l.a)(),[m,y]=Object(i.useState)(o),[O,v]=Object(i.useState)(!1);if(null!=b){const e=p[b];null!=e&&e!==m&&d.some((t=>t.value===e))&&y(e)}const j=e=>{y(e),null!=b&&f(b,e)},h=[],w=e=>{e.metaKey||e.altKey||e.ctrlKey||v(!0)},g=()=>{v(!1)};return Object(i.useEffect)((()=>{window.addEventListener("keydown",w),window.addEventListener("mousedown",g)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(a.a)("tabs",{"tabs--block":t})},d.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===e,className:Object(a.a)("tabs__item",c.a.tabItem,{"tabs__item--active":m===e}),style:O?{}:{outline:"none"},key:e,ref:e=>h.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e),w(e)},onFocus:()=>j(e),onClick:()=>{j(e),v(!1)},onPointerDown:()=>v(!1)},t)))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(n).filter((e=>e.props.value===m))[0]))}},306:function(e,t,n){"use strict";var i=n(0),r=n.n(i);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);