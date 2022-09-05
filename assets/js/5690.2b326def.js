"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[5690],{9058:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(7294),o=n(6010),a=n(127),i=n(7524),l=n(9960),c=n(5999);const s="sidebar_re4s",u="sidebarItemTitle_pO2u",f="sidebarItemList_Yudw",m="sidebarItem__DBe",d="sidebarItemLink_mo7H",p="sidebarItemLinkActive_I1ZP";function h(e){let{sidebar:t}=e;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,o.Z)(s,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,o.Z)(u,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,o.Z)(f,"clean-list")},t.items.map((e=>r.createElement("li",{key:e.permalink,className:m},r.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:p},e.title)))))))}var y=n(3102);function g(e){let{sidebar:t}=e;return r.createElement("ul",{className:"menu__list"},t.items.map((e=>r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function b(e){return r.createElement(y.Zo,{component:g,props:e})}function v(e){let{sidebar:t}=e;const n=(0,i.i)();return null!=t&&t.items.length?"mobile"===n?r.createElement(b,{sidebar:t}):r.createElement(h,{sidebar:t}):null}function E(e){const{sidebar:t,toc:n,children:i,...l}=e,c=t&&t.items.length>0;return r.createElement(a.Z,l,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(v,{sidebar:t}),r.createElement("main",{className:(0,o.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},i),n&&r.createElement("div",{className:"col col--2"},n))))}},2438:(e,t,n)=>{n.d(t,{Z:()=>L});var r=n(7294),o=n(6010),a=n(9460),i=n(4996);function l(e){let{children:t,className:n}=e;const{frontMatter:o,assets:l}=(0,a.C)(),{withBaseUrl:c}=(0,i.C)(),s=l.image??o.image;return r.createElement("article",{className:n,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},s&&r.createElement("meta",{itemProp:"image",content:c(s,{absolute:!0})}),t)}var c=n(9960);const s="title_f1Hy";function u(e){let{className:t}=e;const{metadata:n,isBlogPostPage:i}=(0,a.C)(),{permalink:l,title:u}=n,f=i?"h1":"h2";return r.createElement(f,{className:(0,o.Z)(s,t),itemProp:"headline"},i?u:r.createElement(c.Z,{itemProp:"url",to:l},u))}var f=n(5999),m=n(8824);const d="container_mt6G";function p(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,m.c)();return t=>{const n=Math.ceil(t);return e(n,(0,f.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return r.createElement(r.Fragment,null,n(t))}function h(e){let{date:t,formattedDate:n}=e;return r.createElement("time",{dateTime:t,itemProp:"datePublished"},n)}function y(){return r.createElement(r.Fragment,null," \xb7 ")}function g(e){let{className:t}=e;const{metadata:n}=(0,a.C)(),{date:i,formattedDate:l,readingTime:c}=n;return r.createElement("div",{className:(0,o.Z)(d,"margin-vert--md",t)},r.createElement(h,{date:i,formattedDate:l}),void 0!==c&&r.createElement(r.Fragment,null,r.createElement(y,null),r.createElement(p,{readingTime:c})))}function b(e){return e.href?r.createElement(c.Z,e):r.createElement(r.Fragment,null,e.children)}function v(e){let{author:t,className:n}=e;const{name:a,title:i,url:l,imageURL:c,email:s}=t,u=l||s&&`mailto:${s}`||void 0;return r.createElement("div",{className:(0,o.Z)("avatar margin-bottom--sm",n)},c&&r.createElement(b,{href:u,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:c,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(b,{href:u,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),i&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},i)))}const E="authorCol_Hf19",_="imageOnlyAuthorRow_pa_O",w="imageOnlyAuthorCol_G86a";function O(e){let{className:t}=e;const{metadata:{authors:n},assets:i}=(0,a.C)();if(0===n.length)return null;const l=n.every((e=>{let{name:t}=e;return!t}));return r.createElement("div",{className:(0,o.Z)("margin-top--md margin-bottom--sm",l?_:"row",t)},n.map(((e,t)=>r.createElement("div",{className:(0,o.Z)(!l&&"col col--6",l?w:E),key:t},r.createElement(v,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})))))}function I(){return r.createElement("header",null,r.createElement(u,null),r.createElement(g,null),r.createElement(O,null))}var S=n(8780),C=n(4048);function N(e){let{children:t,className:n}=e;const{isBlogPostPage:i}=(0,a.C)();return r.createElement("div",{id:i?S.blogPostContainerID:void 0,className:(0,o.Z)("markdown",n),itemProp:"articleBody"},r.createElement(C.Z,null,t))}var P=n(5281),D=n(7462);const T="iconEdit_Z9Sw";function M(e){let{className:t,...n}=e;return r.createElement("svg",(0,D.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(T,t),"aria-hidden":"true"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function R(e){let{editUrl:t}=e;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:P.k.common.editThisPage},r.createElement(M,null),r.createElement(f.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var k=n(3008);const j="tags_jXut",A="tag_QGVx";function Z(e){let{tags:t}=e;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(f.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,o.Z)(j,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return r.createElement("li",{key:n,className:A},r.createElement(k.Z,{label:t,permalink:n}))}))))}function U(){return r.createElement("b",null,r.createElement(f.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function q(e){const{blogPostTitle:t,...n}=e;return r.createElement(c.Z,(0,D.Z)({"aria-label":(0,f.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},n),r.createElement(U,null))}const B="blogPostFooterDetailsFull_mRVl";function x(){const{metadata:e,isBlogPostPage:t}=(0,a.C)(),{tags:n,title:i,editUrl:l,hasTruncateMarker:c}=e,s=!t&&c,u=n.length>0;return u||s||l?r.createElement("footer",{className:(0,o.Z)("row docusaurus-mt-lg",t&&B)},u&&r.createElement("div",{className:(0,o.Z)("col",{"col--9":s})},r.createElement(Z,{tags:n})),t&&l&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(R,{editUrl:l})),s&&r.createElement("div",{className:(0,o.Z)("col text--right",{"col--3":u})},r.createElement(q,{blogPostTitle:i,to:e.permalink}))):null}function L(e){let{children:t,className:n}=e;const i=function(){const{isBlogPostPage:e}=(0,a.C)();return e?void 0:"margin-bottom--xl"}();return r.createElement(l,{className:(0,o.Z)(i,n)},r.createElement(I,null),r.createElement(N,null,t),r.createElement(x,null))}},2244:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),o=n(6010),a=n(9960);function i(e){const{permalink:t,title:n,subLabel:i,isNext:l}=e;return r.createElement(a.Z,{className:(0,o.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&r.createElement("div",{className:"pagination-nav__sublabel"},i),r.createElement("div",{className:"pagination-nav__label"},n))}},3008:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),o=n(6010),a=n(9960);const i="tag_zVej",l="tagRegular_sFm0",c="tagWithCount_h2kH";function s(e){let{permalink:t,label:n,count:s}=e;return r.createElement(a.Z,{href:t,className:(0,o.Z)(i,s?c:l)},n,s&&r.createElement("span",null,s))}},9460:(e,t,n)=>{n.d(t,{C:()=>l,n:()=>i});var r=n(7294),o=n(902);const a=r.createContext(null);function i(e){let{children:t,content:n,isBlogPostPage:o=!1}=e;const i=function(e){let{content:t,isBlogPostPage:n}=e;return(0,r.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:o});return r.createElement(a.Provider,{value:i},t)}function l(){const e=(0,r.useContext)(a);if(null===e)throw new o.i6("BlogPostProvider");return e}},8824:(e,t,n)=>{n.d(t,{c:()=>s});var r=n(7294),o=n(2263);const a=["zero","one","two","few","many","other"];function i(e){return a.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function s(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),a=n.pluralForms.indexOf(o);return r[Math.min(a,r.length-1)]}(n,t,e)}}},2449:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r=l(n(7294)),o=l(n(5697)),a=n(6674),i=n(7990);function l(e){return e&&e.__esModule?e:{default:e}}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var g=(0,a.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(c,e);var t,n,o,l=p(c);function c(){return f(this,c),l.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,a.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById(i.COMMENT_COUNT_SCRIPT_ID)?g():(0,a.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),i.COMMENT_COUNT_SCRIPT_ID,e.body)}},{key:"cleanInstance",value:function(){var e=window.document;(0,a.removeScript)(i.COMMENT_COUNT_SCRIPT_ID,e.body),window.DISQUSWIDGETS=void 0,(0,a.removeResources)()}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config),n=e.children,o=e.className,a=u(e,["shortname","config","children","className"]),l=o?" ".concat(o):"";return r.default.createElement("span",s({},a,{className:"".concat(i.COMMENT_COUNT_CLASS).concat(l),"data-disqus-identifier":t.identifier,"data-disqus-url":t.url}),n)}}])&&m(t.prototype,n),o&&m(t,o),c}(r.default.Component);t.CommentCount=b,b.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired,className:o.default.string,children:o.default.node}},5890:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r=i(n(7294)),o=i(n(5697)),a=n(7990);function i(e){return e&&e.__esModule?e:{default:e}}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(i,e);var t,n,o,a=d(i);function i(){return u(this,i),a.apply(this,arguments)}return t=i,(n=[{key:"getSrc",value:function(){var e=Number(this.props.commentId).toString(36),t=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(e,"?p=").concat(t,"&m=").concat(n)}},{key:"render",value:function(){var e=this.props,t=e.width,n=e.height,o=(e.commentId,e.showMedia,e.showParentComment,s(e,["width","height","commentId","showMedia","showParentComment"]));return r.default.createElement("iframe",c({},o,{src:this.getSrc(),width:t,height:n,seamless:"seamless",scrolling:"no",frameBorder:"0"}))}}])&&f(t.prototype,n),o&&f(t,o),i}(r.default.Component);t.CommentEmbed=y,y.defaultProps={showMedia:!0,showParentComment:!0,width:a.COMMENT_EMBED_WIDTH,height:a.COMMENT_EMBED_HEIGHT},y.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number,className:o.default.string}},4811:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r=l(n(7294)),o=l(n(5697)),a=n(6674),i=n(7990);function l(e){return e&&e.__esModule?e:{default:e}}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(c,e);var t,n,o,l=p(c);function c(){return f(this,c),l.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,a.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById(i.EMBED_SCRIPT_ID)?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,a.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),i.EMBED_SCRIPT_ID,e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,a.removeScript)(i.EMBED_SCRIPT_ID,e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById(i.THREAD_ID);if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild);(0,a.removeResources)()}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.category_id=e.categoryID,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,e.language&&(this.language=e.language),i.CALLBACKS.forEach((function(n){t.callbacks[n]=[e[n]]}))}}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config,u(e,["shortname","config"]));return r.default.createElement("div",s({},t,{id:i.THREAD_ID}))}}])&&m(t.prototype,n),o&&m(t,o),c}(r.default.Component);t.DiscussionEmbed=g,g.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func}).isRequired}},4573:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Recommendations=void 0;var r=l(n(7294)),o=l(n(5697)),a=n(6674),i=n(7990);function l(e){return e&&e.__esModule?e:{default:e}}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(c,e);var t,n,o,l=p(c);function c(){return f(this,c),l.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,a.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.language=e.language}}},{key:"loadInstance",value:function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById(i.RECOMMENDATIONS_SCRIPT_ID)?this.reloadInstance():(0,a.insertScript)("https://".concat(this.props.shortname,".disqus.com/recommendations.js"),i.RECOMMENDATIONS_SCRIPT_ID,window.document.body))}},{key:"reloadInstance",value:function(){window&&window.DISQUS_RECOMMENDATIONS&&window.DISQUS_RECOMMENDATIONS.reset({reload:!0})}},{key:"cleanInstance",value:function(){(0,a.removeScript)(i.RECOMMENDATIONS_SCRIPT_ID,window.document.body);try{delete window.DISQUS_RECOMMENDATIONS}catch(t){window.DISQUS_RECOMMENDATIONS=void 0}var e=window.document.getElementById(i.RECOMMENDATIONS_ID);if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);(0,a.removeResources)()}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config,u(e,["shortname","config"]));return r.default.createElement("div",s({},t,{id:i.RECOMMENDATIONS_ID}))}}])&&m(t.prototype,n),o&&m(t,o),c}(r.default.Component);t.Recommendations=g,g.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string})}},7990:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CALLBACKS=t.RECOMMENDATIONS_SCRIPT_ID=t.RECOMMENDATIONS_ID=t.COMMENT_EMBED_HEIGHT=t.COMMENT_EMBED_WIDTH=t.COMMENT_COUNT_SCRIPT_ID=t.COMMENT_COUNT_CLASS=t.EMBED_SCRIPT_ID=t.THREAD_ID=void 0;t.THREAD_ID="disqus_thread";t.EMBED_SCRIPT_ID="dsq-embed-scr";t.COMMENT_COUNT_CLASS="disqus-comment-count";t.COMMENT_COUNT_SCRIPT_ID="dsq-count-scr";t.COMMENT_EMBED_WIDTH=420;t.COMMENT_EMBED_HEIGHT=320;t.RECOMMENDATIONS_ID="disqus_recommendations";t.RECOMMENDATIONS_SCRIPT_ID="dsq-recs-scr";t.CALLBACKS=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"]},3944:(e,t,n)=>{Object.defineProperty(t,"qw",{enumerable:!0,get:function(){return a.DiscussionEmbed}});var r=n(2449),o=n(5890),a=n(4811),i=n(4573);r.CommentCount,o.CommentEmbed,a.DiscussionEmbed,i.Recommendations},6674:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.removeResources=function(){window.document.querySelectorAll('link[href*="disquscdn.com/next/embed"], link[href*="disquscdn.com/next/recommendations"], link[href*="disqus.com/next/config.js"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]').forEach((function(e){return e.remove()}))},t.debounce=function(e,t,n){var r;return function(){var o=this,a=arguments,i=function(){r=null,n||e.apply(o,a)},l=n&&!r;window.clearTimeout(r),r=setTimeout(i,t),l&&e.apply(o,a)}},t.isReactElement=l,t.shallowComparison=function e(t,n){var r,o=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,a=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){l=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw o}}}}(new Set(Object.keys(t),Object.keys(n)));try{for(o.s();!(r=o.n()).done;){var c=r.value;if("object"===a(t[c])){if(e(t[c],n[c]))return!0}else if(t[c]!==n[c]&&!l(t[c]))return!0}}catch(s){o.e(s)}finally{o.f()}return!1};var r,o=(r=n(7294))&&r.__esModule?r:{default:r};function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}}}]);