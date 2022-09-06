"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[9973],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),u=o,m=d["".concat(s,".").concat(u)]||d[u]||g[u]||l;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<l;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},346:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const l={slug:"2020/google-analytics-with-flutter-web/",title:"Google Analytics with Flutter Web",date:"2020-06-11 16:26:00 +0530",tags:["Flutter","Google-Analytics","Tech","Open-Source"],authors:["immadisairaj"],comments:!0,image:"./flutter-google-analytics.png"},r=void 0,i={permalink:"/blog/2020/google-analytics-with-flutter-web/",source:"@site/blog/2020-06-11-google-analytics-with-flutter-web/index.md",title:"Google Analytics with Flutter Web",description:"Want to add Google Analytics to your flutter web application? Then, this blog is for you.",date:"2020-06-11T16:26:00.000Z",formattedDate:"June 11, 2020",tags:[{label:"Flutter",permalink:"/blog/tags/flutter"},{label:"Google-Analytics",permalink:"/blog/tags/google-analytics"},{label:"Tech",permalink:"/blog/tags/tech"},{label:"Open-Source",permalink:"/blog/tags/open-source"}],readingTime:2.93,hasTruncateMarker:!0,authors:[{name:"Sai Rajendra Immadi",title:"Flutter Developer",url:"https://github.com/immadisairaj",imageURL:"https://github.com/immadisairaj.png",key:"immadisairaj"}],frontMatter:{slug:"2020/google-analytics-with-flutter-web/",title:"Google Analytics with Flutter Web",date:"2020-06-11 16:26:00 +0530",tags:["Flutter","Google-Analytics","Tech","Open-Source"],authors:["immadisairaj"],comments:!0,image:"./flutter-google-analytics.png"},prevItem:{title:"Journey with Chapel",permalink:"/blog/2020/journey-with-chapel/"},nextItem:{title:"Port The Blog",permalink:"/blog/2020/port-the-blog/"}},s={image:a(8546).Z,authorsImageUrls:[void 0]},c=[{value:"Steps to be followed",id:"steps-to-be-followed",level:2},{value:"Create Google Analytics",id:"create-google-analytics",level:3},{value:"Add Google Analytics to Flutter Project",id:"add-google-analytics-to-flutter-project",level:3}],p={toc:c};function g(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Want to add Google Analytics to your flutter web application? Then, this blog is for you."),(0,o.kt)("p",null,"I didn't find any direct methods to add google-analytics to my flutter-web application while I was searching. I've managed to integrate it successfully by referring to different blogs. So, I am writing this blog to make it easier."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Flutter + Google Analytics",src:a(8546).Z,width:"1920",height:"1080"})),(0,o.kt)("h2",{id:"steps-to-be-followed"},"Steps to be followed"),(0,o.kt)("h3",{id:"create-google-analytics"},"Create Google Analytics"),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://analytics.google.com"},"analytics.google.com")," and login with your account. Then, create a new property with your website domain linked. Now, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Admin -> Property -> Tracking Info -> Tracking Code")," and keep the ",(0,o.kt)("em",{parentName:"p"},"Tracking ID")," noted. (It looks something like ",(0,o.kt)("inlineCode",{parentName:"p"},"UA-XXXXXXXXX-X"),")"),(0,o.kt)("h3",{id:"add-google-analytics-to-flutter-project"},"Add Google Analytics to Flutter Project"),(0,o.kt)("p",null,"So, assuming you have already set-up the flutter-web project."),(0,o.kt)("p",null,"Create a new file named ",(0,o.kt)("inlineCode",{parentName:"p"},"app.js")," under ",(0,o.kt)("inlineCode",{parentName:"p"},"/web"),". And the copy the below code into it."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Old:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Warning: Old method, please prefer the new script (below)\n// file: /web/app.js\nfunction sendNavigation(location) {\n    ga('send', 'pageview', location);\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"New:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// file: /web/app.js\nfunction sendNavigation(location) {\n    // Replace UA-XXXXXXXXX-X with Google Analytics ID\n    gtag('config', 'UA-XXXXXXXXX-X', { page_path: location });\n}\n")),(0,o.kt)("p",null,"You might already have a file ",(0,o.kt)("inlineCode",{parentName:"p"},"/web/index.html"),". Add the following into the ",(0,o.kt)("em",{parentName:"p"},"html")," file inside ",(0,o.kt)("inlineCode",{parentName:"p"},"<head>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"</head>"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Old:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- Warning: Old method, please prefer the new script (below) --\x3e\n\x3c!-- file: /web/index.html --\x3e\n<head>\n    \x3c!-- ... --\x3e\n    <script>\n        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\n        // Replace UA-XXXXXXXXX-X with Google Analytics ID\n        ga('create', 'UA-XXXXXXXXX-X', 'auto');\n        ga('send', 'pageview');\n    <\/script>\n    \x3c!-- ... --\x3e\n    <script src=\"app.js\" defer><\/script>\n</head>\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"New:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- file: /web/index.html --\x3e\n<head>\n    \x3c!-- ... --\x3e\n    \x3c!-- Replace UA-XXXXXXXXX-X with Google Analytics ID --\x3e\n    <script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXXX-X\"><\/script>\n    <script>\n      window.dataLayer = window.dataLayer || [];\n      function gtag(){dataLayer.push(arguments);}\n      gtag('js', new Date());\n\n      // Replace UA-XXXXXXXXX-X with Google Analytics ID\n      gtag('config', 'UA-XXXXXXXXX-X', { send_page_view: false });\n    <\/script>\n    \x3c!-- ... --\x3e\n    <script src=\"app.js\" defer><\/script>\n</head>\n")),(0,o.kt)("p",null,"After adding this, you can have the Google-Analytics running. But, there is a small error you might face and which is, the whole website which has different pages be tracked under the same page ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," and it is because the whole flutter web project is being built on the root. So, the navigation pages would have something like ",(0,o.kt)("inlineCode",{parentName:"p"},"/#/<route>"),". So, the Google-Analytics doesn't track those pages due to ",(0,o.kt)("inlineCode",{parentName:"p"},"#")," coming in between. But, fear not, I might just have a fix for it."),(0,o.kt)("p",null,"I am assuming that you are using named navigation to navigate different pages."),(0,o.kt)("p",null,"The following might be the code you are already having. and I have few comments there to just add what all lines are needed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"// example file: /lib/home.dart\n\nimport 'package:flutter/material.dart';\nimport 'dart:js' as js;     // add this line if you don't have one\n\nclass Home extends StatelessWidget {\n  const Home({Key key}) : super(key: key);\n\n  static const String route = '/'; // add this line if you don't have one\n  \n  @override\n  Widget build(BuildContext context) {\n    js.context.callMethod('sendNavigation', [route]);   // add this line\n    return Scaffold(/* ... */);\n  }\n}\n")),(0,o.kt)("p",null,"The above code is an example for Home page. If you want to track other pages, have the same code added to the other pages as well. Now, you will be having all your pages tracking in Google-Analytics."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," You need to look that all the pages tracked, but this tracking will not contain ",(0,o.kt)("inlineCode",{parentName:"p"},"#")," in them. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"/#/<route>")," will be tracked as ",(0,o.kt)("inlineCode",{parentName:"p"},"/<route>"),"."),(0,o.kt)("p",null,"If you want to look into an example of how I integrated Google-Analytics into my Flutter Web Application. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/immadisairaj/CarouselPortfolio/commit/51f4e0b918a6965083e6ad687e46d27bf2326336"},"Here")," is the commit of the google-analytics integration."))}g.isMDXComponent=!0},8546:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/flutter-google-analytics-d8559500176d7cc3b98379d84b603bf3.png"}}]);