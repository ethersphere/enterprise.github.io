(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{112:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return f}));var n=t(0),i=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),u=function(e){var r=i.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=u(e.components);return i.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},b=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),b=n,f=d["".concat(o,".").concat(b)]||d[b]||p[b]||a;return t?i.a.createElement(f,s(s({ref:r},l),{},{components:t})):i.a.createElement(f,s({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=b;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},113:function(e,r,t){"use strict";var n=t(0),i=t(20);r.a=function(){var e=Object(n.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},114:function(e,r,t){"use strict";t.d(r,"b",(function(){return a})),t.d(r,"a",(function(){return o}));var n=t(113),i=t(116);function a(){var e=Object(n.a)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,t=void 0===r?"/":r,a=e.url;return{withBaseUrl:function(e,r){return function(e,r,t,n){var a=void 0===n?{}:n,o=a.forcePrependBaseUrl,s=void 0!==o&&o,c=a.absolute,l=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if(Object(i.b)(t))return t;if(s)return r+t;var u=t.startsWith(r)?t:r+t.replace(/^\//,"");return l?e+u:u}(a,t,e,r)}}}function o(e,r){return void 0===r&&(r={}),(0,a().withBaseUrl)(e,r)}},116:function(e,r,t){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}t.d(r,"b",(function(){return n})),t.d(r,"a",(function(){return i}))},83:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return d}));var n=t(2),i=t(6),a=(t(0),t(112)),o=t(114),s={id:"fairdrive",title:"Fairdrive",sidebar_label:"Fairdrive - personal data store",slug:"/fairdrive",draft:!1},c={unversionedId:"fairdrive",id:"fairdrive",isDocsHomePage:!1,title:"Fairdrive",description:"The current data economy allows large corporations to make profits by leveraging the private data of consumers, while the respect for their privacy is under question. Users willingly hand over their own, generated data in order to receive services and emotional wellbeing. We can enable users to experience the same services and emotional feedback without handing over the control over their being. Encryption and decentralized infrastructure give way to a future where people are truly free in choice and expression. In order to easily manage one\u2019s digital avatars and their earnings, Fairdrive is being created.",source:"@site/docs/fairdrive.md",slug:"/fairdrive",permalink:"/docs/fairdrive",editUrl:"https://github.com/ethersphere/enterprise.github.io/edit/master/docs/fairdrive.md",version:"current",sidebar_label:"Fairdrive - personal data store",sidebar:"someSidebar",previous:{title:"FairOS decentralized file storage",permalink:"/docs/fairos"},next:{title:"Personium",permalink:"/docs/personium"}},l=[{value:"Fairdrive features",id:"fairdrive-features",children:[]},{value:"Future possibilities",id:"future-possibilities",children:[]},{value:"References",id:"references",children:[]}],u={rightToc:l};function d(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The current data economy allows large corporations to make profits by leveraging the private data of consumers, while the respect for their privacy is under question. Users willingly hand over their own, generated data in order to receive services and emotional wellbeing. We can enable users to experience the same services and emotional feedback without handing over the control over their being. Encryption and decentralized infrastructure give way to a future where people are truly free in choice and expression. In order to easily manage one\u2019s digital avatars and their earnings, Fairdrive is being created."),Object(a.b)("p",null,"Fairdrive is a dApp that enables decentralized storage on Swarm. It consists of a typical \u201cDrive\u201d interface with files and folders, and a BZZ wallet to manage token balances and keypairs. Under the hood, an engine is running a filesystem on top of Ethereum Swarm."),Object(a.b)("p",null,"Fairdrive consists of these parts:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Fairdrive ",">"," a dapp.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Fairdrive.js ",">"," a lightweight javascript library enabling (d)apps to use Fairdrive Connect.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Fairdrive Engine ",">"," a filesystem running on Swarm (this is Fairdrive stripped down of any UI, to enable fast development of own personal data storage solutions)."))),Object(a.b)("p",null,"Enterprises can provide their own solution based on Fairdrive Engine, or the other parts."),Object(a.b)("h3",{id:"fairdrive-features"},"Fairdrive features"),Object(a.b)("p",null,"Fairdrive offers basic feature comparable to some well known more centralized solutions, but with some important differences:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Data is encrypted out-of-the box")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Data is controlled by the user of Fairdrive")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Data is stored in Swarm decentralized network"))),Object(a.b)("p",null,"The layer immediately below Fairdrive is FairOS-dfs, providing file system functionality. A layer below is Swarm chunk storage."),Object(a.b)("p",null,"A user account can be opened or restored by using a 12 word mnemonic seed phrase. A password is used to protect the generated private key."),Object(a.b)("img",{src:Object(o.a)("images/image3.png")}),Object(a.b)("p",null,"Fairdrive presents a folder structure in a user interface."),Object(a.b)("h3",{id:"future-possibilities"},"Future possibilities"),Object(a.b)("p",null,"Fairdrive is open source and will be maintained as the interface to the underlying FairOS-dfs."),Object(a.b)("p",null,"The possibilities for upgrades are many, but the direction will be in enabling easy sharing to individual accounts and groups - in the sense of teams."),Object(a.b)("h3",{id:"references"},"References"),Object(a.b)("p",null,"Fairdrive github page: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/fairDataSociety/Fairdrive"}),Object(a.b)("em",{parentName:"a"},"https://github.com/fairDataSociety/Fairdrive"))))}d.isMDXComponent=!0}}]);