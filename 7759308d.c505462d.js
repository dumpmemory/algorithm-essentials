(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{190:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return b})),t.d(a,"metadata",(function(){return p})),t.d(a,"rightToc",(function(){return i})),t.d(a,"default",(function(){return l}));var n=t(2),s=t(7),r=(t(0),t(333)),c=t(337),m=t(338),b={title:"Pow(x,n)"},p={unversionedId:"divide-and-conquer/pow",id:"divide-and-conquer/pow",isDocsHomePage:!1,title:"Pow(x,n)",description:"\u63cf\u8ff0",source:"@site/docs/divide-and-conquer/pow.md",slug:"/divide-and-conquer/pow",permalink:"/divide-and-conquer/pow",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/divide-and-conquer/pow.md",version:"current",sidebar:"someSidebar",previous:{title:"\u5c0f\u7ed3",permalink:"/dfs/dfs-summary"},next:{title:"Sqrt(x)",permalink:"/divide-and-conquer/sqrt"}},i=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],o={rightToc:i};function l(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(r.b)("p",null,"Implement ",Object(r.b)("inlineCode",{parentName:"p"},"pow(x, n)"),"."),Object(r.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(r.b)("p",null,"\u4e8c\u5206\u6cd5\uff0c",Object(r.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(r.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(r.b)("semantics",{parentName:"math"},Object(r.b)("mrow",{parentName:"semantics"},Object(r.b)("msup",{parentName:"mrow"},Object(r.b)("mi",{parentName:"msup"},"x"),Object(r.b)("mi",{parentName:"msup"},"n")),Object(r.b)("mo",{parentName:"mrow"},"="),Object(r.b)("msup",{parentName:"mrow"},Object(r.b)("mi",{parentName:"msup"},"x"),Object(r.b)("mrow",{parentName:"msup"},Object(r.b)("mi",{parentName:"mrow"},"n"),Object(r.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"/"),Object(r.b)("mn",{parentName:"mrow"},"2"))),Object(r.b)("mo",{parentName:"mrow"},"\xd7"),Object(r.b)("msup",{parentName:"mrow"},Object(r.b)("mi",{parentName:"msup"},"x"),Object(r.b)("mrow",{parentName:"msup"},Object(r.b)("mi",{parentName:"mrow"},"n"),Object(r.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"/"),Object(r.b)("mn",{parentName:"mrow"},"2"))),Object(r.b)("mo",{parentName:"mrow"},"\xd7"),Object(r.b)("msup",{parentName:"mrow"},Object(r.b)("mi",{parentName:"msup"},"x"),Object(r.b)("mrow",{parentName:"msup"},Object(r.b)("mi",{parentName:"mrow"},"n"),Object(r.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"%"),Object(r.b)("mn",{parentName:"mrow"},"2")))),Object(r.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"x^n = x^{n/2} \\times x^{n/2} \\times x^{n\\%2}")))),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.664392em",verticalAlign:"0em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"x"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.664392em"}}),Object(r.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-3.063em",marginRight:"0.05em"}}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal mtight"}),"n")))))))),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"="),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.9713299999999999em",verticalAlign:"-0.08333em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"x"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.8879999999999999em"}}),Object(r.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-3.063em",marginRight:"0.05em"}}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mtight"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal mtight"}),"n"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mtight"}),"/"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mtight"}),"2"))))))))),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"\xd7"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}}))),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.9713299999999999em",verticalAlign:"-0.08333em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"x"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.8879999999999999em"}}),Object(r.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-3.063em",marginRight:"0.05em"}}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mtight"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal mtight"}),"n"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mtight"}),"/"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mtight"}),"2"))))))))),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"\xd7"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}}))),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.8879999999999999em",verticalAlign:"0em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"x"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.8879999999999999em"}}),Object(r.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-3.063em",marginRight:"0.05em"}}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mtight"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal mtight"}),"n"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mtight"}),"%"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mtight"}),"2")))))))))))))),Object(r.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(r.b)(c.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(m.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// Pow(x, n)\n// \u4e8c\u5206\u6cd5\uff0c$x^n = x^{n/2} * x^{n/2} * x^{n\\%2}$\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public double myPow(double x, int n) {\n        if (n < 0) return 1.0 / power(x, -n);\n        else return power(x, n);\n    }\n    private static double power(double x, int n) {\n        if (n == 0) return 1;\n        double v = power(x, n / 2);\n        if (n % 2 == 0) return v * v;\n        else return v * v * x;\n    }\n}\n"))),Object(r.b)(m.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"// Pow(x, n)\n// \u4e8c\u5206\u6cd5\uff0c$x^n = x^{n/2} * x^{n/2} * x^{n\\%2}$\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    double myPow(double x, int n) {\n        if (n < 0) return 1.0 / power(x, -n);\n        else return power(x, n);\n    }\nprivate:\n    double power(double x, int n) {\n        if (n == 0) return 1;\n        double v = power(x, n / 2);\n        if (n % 2 == 0) return v * v;\n        else return v * v * x;\n    }\n};\n")))),Object(r.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/divide-and-conquer/sqrt"}),"Sqrt(x)"))))}l.isMDXComponent=!0},333:function(e,a,t){"use strict";t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return u}));var n=t(0),s=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function b(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=s.a.createContext({}),i=function(e){var a=s.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},o=function(e){var a=i(e.components);return s.a.createElement(p.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return s.a.createElement(s.a.Fragment,{},a)}},O=s.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),o=i(t),O=n,u=o["".concat(c,".").concat(O)]||o[O]||l[O]||r;return t?s.a.createElement(u,m(m({ref:a},p),{},{components:t})):s.a.createElement(u,m({ref:a},p))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,c=new Array(r);c[0]=O;var m={};for(var b in a)hasOwnProperty.call(a,b)&&(m[b]=a[b]);m.originalType=e,m.mdxType="string"==typeof e?e:n,c[1]=m;for(var p=2;p<r;p++)c[p]=t[p];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"},334:function(e,a,t){"use strict";function n(e){var a,t,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(s&&(s+=" "),s+=t);else for(a in e)e[a]&&(s&&(s+=" "),s+=a);return s}a.a=function(){for(var e,a,t=0,s="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(s&&(s+=" "),s+=a);return s}},335:function(e,a,t){"use strict";var n=t(0),s=t(336);a.a=function(){var e=Object(n.useContext)(s.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},336:function(e,a,t){"use strict";var n=t(0),s=Object(n.createContext)(void 0);a.a=s},337:function(e,a,t){"use strict";var n=t(0),s=t.n(n),r=t(335),c=t(334),m=t(49),b=t.n(m),p=37,i=39;a.a=function(e){var a=e.block,t=e.children,m=e.defaultValue,o=e.values,l=e.groupId,O=e.className,u=Object(r.a)(),j=u.tabGroupChoices,N=u.setTabGroupChoices,d=Object(n.useState)(m),f=d[0],h=d[1],v=Object(n.useState)(!1),g=v[0],w=v[1];if(null!=l){var y=j[l];null!=y&&y!==f&&o.some((function(e){return e.value===y}))&&h(y)}var x=function(e){h(e),null!=l&&N(l,e)},P=[],E=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},k=function(){w(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",E),window.addEventListener("mousedown",k),function(){window.removeEventListener("keydown",E),window.removeEventListener("mousedown",k)}}),[]),s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},O)},o.map((function(e){var a=e.value,t=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===a,className:Object(c.a)("tabs__item",b.a.tabItem,{"tabs__item--active":f===a}),style:g?{}:{outline:"none"},key:a,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case i:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case p:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(P,e.target,e),E(e)},onFocus:function(){return x(a)},onClick:function(){x(a),w(!1)},onPointerDown:function(){return w(!1)}},t)}))),s.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter((function(e){return e.props.value===f}))[0]))}},338:function(e,a,t){"use strict";var n=t(0),s=t.n(n);a.a=function(e){return s.a.createElement("div",null,e.children)}}}]);