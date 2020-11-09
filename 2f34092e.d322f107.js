(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{115:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(2),o=t(7),i=(t(0),t(310)),a={title:"LCA of Binary Tree"},c={unversionedId:"binary-tree/recursion/lca-of-binary-tree",id:"binary-tree/recursion/lca-of-binary-tree",isDocsHomePage:!1,title:"LCA of Binary Tree",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/recursion/lca-of-binary-tree.md",slug:"/binary-tree/recursion/lca-of-binary-tree",permalink:"/binary-tree/recursion/lca-of-binary-tree",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/binary-tree/recursion/lca-of-binary-tree.md",version:"current",sidebar:"someSidebar",previous:{title:"Sum Root to Leaf Numbers",permalink:"/binary-tree/recursion/sum-root-to-leaf-numbers"},next:{title:"Serialize and Deserialize Binary Tree",permalink:"/binary-tree/recursion/serialize-and-deserialize-binary-tree"}},l=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],b={rightToc:l};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree."),Object(i.b)("p",null,"According to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Lowest_common_ancestor"}),"the definition of LCA on Wikipedia"),": \u201cThe lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow ",Object(i.b)("strong",{parentName:"p"},"a node to be a descendant of itself"),").\u201d"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"        _______3______\n       /              \\\n    ___5__          ___1__\n   /      \\        /      \\\n   6      _2       0       8\n         /  \\\n         7   4\n")),Object(i.b)("p",null,"For example, the lowest common ancestor (LCA) of nodes 5 and 1 is 3. Another example is LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition."),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"\u7528\u81ea\u5e95\u5411\u4e0a(bottom-up)\u7684\u601d\u8def\uff0c\u5148\u770b\u770b\u662f\u5426\u80fd\u5728",Object(i.b)("inlineCode",{parentName:"p"},"root"),"\u7684\u5de6\u5b50\u6811\u4e2d\u627e\u5230",Object(i.b)("inlineCode",{parentName:"p"},"p"),"\u6216",Object(i.b)("inlineCode",{parentName:"p"},"q"),"\uff0c\u518d\u770b\u770b\u80fd\u5426\u5728\u53f3\u5b50\u6811\u4e2d\u627e\u5230\uff0c"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u4e24\u8fb9\u90fd\u80fd\u627e\u5230\uff0c\u8bf4\u660e\u5f53\u524d\u8282\u70b9\u5c31\u662f\u6700\u8fd1\u516c\u5171\u7956\u5148"),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u5de6\u8fb9\u6ca1\u627e\u5230\uff0c\u5219\u8bf4\u660e",Object(i.b)("inlineCode",{parentName:"li"},"p"),"\u548c",Object(i.b)("inlineCode",{parentName:"li"},"q"),"\u90fd\u5728\u53f3\u5b50\u6811"),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u53f3\u8fb9\u6ca1\u627e\u5230\uff0c\u5219\u8bf4\u660e",Object(i.b)("inlineCode",{parentName:"li"},"p"),"\u548c",Object(i.b)("inlineCode",{parentName:"li"},"q"),"\u90fd\u5728\u5de6\u5b50\u6811")),Object(i.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Lowest Common Ancestor of a Binary Tree\n// Time complexity: O(n), Space complexity: O(h)\npublic class Solution {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        // if root is null or found p or q\n        if (root == null || root == p || root == q) return root;\n        // find p or q in the left subtree\n        final TreeNode left = lowestCommonAncestor(root.left, p, q);\n        // find p or q in the right subtree\n        final TreeNode right = lowestCommonAncestor(root.right, p, q);\n        if (left != null && right != null) return root;\n        else return left == null ? right : left;\n    }\n}\n")),Object(i.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/binary-tree/bst/lca-of-bst"}),"LCA of BST"))))}s.isMDXComponent=!0},310:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var b=o.a.createContext({}),s=function(e){var n=o.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return o.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,f=u["".concat(a,".").concat(d)]||u[d]||p[d]||i;return t?o.a.createElement(f,c(c({ref:n},b),{},{components:t})):o.a.createElement(f,c({ref:n},b))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var b=2;b<i;b++)a[b]=t[b];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);