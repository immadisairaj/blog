"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[2497],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>y});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(o),h=a,y=s["".concat(l,".").concat(h)]||s[h]||m[h]||r;return o?n.createElement(y,i(i({ref:t},u),{},{components:o})):n.createElement(y,i({ref:t},u))}));function y(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},2469:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var n=o(7462),a=(o(7294),o(3905));const r={slug:"2019/git-with-open-source/",title:"Git with Open-Source",date:"2019-02-24 18:00:00 +0530",tags:["Tech","Open-Source"],authors:["immadisairaj"],comments:!0},i=void 0,c={permalink:"/blog/2019/git-with-open-source/",source:"@site/blog/2019-02-24-git-with-open-source/index.md",title:"Git with Open-Source",description:"Here in this blog, I will be giving an overview of using the git version control system while contributing to open-source projects.",date:"2019-02-24T18:00:00.000Z",formattedDate:"February 24, 2019",tags:[{label:"Tech",permalink:"/blog/tags/tech"},{label:"Open-Source",permalink:"/blog/tags/open-source"}],readingTime:4.505,hasTruncateMarker:!0,authors:[{name:"Sai Rajendra Immadi",title:"Flutter Developer",url:"https://github.com/immadisairaj",imageURL:"https://github.com/immadisairaj.png",key:"immadisairaj"}],frontMatter:{slug:"2019/git-with-open-source/",title:"Git with Open-Source",date:"2019-02-24 18:00:00 +0530",tags:["Tech","Open-Source"],authors:["immadisairaj"],comments:!0},prevItem:{title:"Port The Blog",permalink:"/blog/2020/port-the-blog/"},nextItem:{title:"KWoC Experience as a Mentor",permalink:"/blog/2019/kwoc-experience/"}},l={authorsImageUrls:[void 0]},p=[{value:"Forking and Cloning a repo into your local system",id:"forking-and-cloning-a-repo-into-your-local-system",level:3},{value:"Working on the project",id:"working-on-the-project",level:3},{value:"Playing with git",id:"playing-with-git",level:3},{value:"You can check your commits in a particular branch by",id:"you-can-check-your-commits-in-a-particular-branch-by",level:4},{value:"If you have some changes and want to add to the previous commit or change the commit message of the previous commit. Then you have to stage the changes then",id:"if-you-have-some-changes-and-want-to-add-to-the-previous-commit-or-change-the-commit-message-of-the-previous-commit-then-you-have-to-stage-the-changes-then",level:4},{value:"You can check all your recent activities by using",id:"you-can-check-all-your-recent-activities-by-using",level:4},{value:"You can revert your work to a specific commit and work again by using",id:"you-can-revert-your-work-to-a-specific-commit-and-work-again-by-using",level:4},{value:"You can even delete your commit or any activity by referring to the history of what you did.",id:"you-can-even-delete-your-commit-or-any-activity-by-referring-to-the-history-of-what-you-did",level:4},{value:"You can show the same changes of your local-repo into your account-repo even if it is completely different by force pushing",id:"you-can-show-the-same-changes-of-your-local-repo-into-your-account-repo-even-if-it-is-completely-different-by-force-pushing",level:4},{value:"If you want to squash some commits into one then one of the ways which you can use is",id:"if-you-want-to-squash-some-commits-into-one-then-one-of-the-ways-which-you-can-use-is",level:4}],u={toc:p},s="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(s,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here in this blog, I will be giving an overview of using the ",(0,a.kt)("strong",{parentName:"p"},"git version control system")," while contributing to ",(0,a.kt)("em",{parentName:"p"},"open-source projects"),"."),(0,a.kt)("h3",{id:"forking-and-cloning-a-repo-into-your-local-system"},"Forking and Cloning a repo into your local system"),(0,a.kt)("p",null,"Initially, choose an open-source project on the domain of your interest for which you would like to contribute. Let the project repository be \u201c",(0,a.kt)("em",{parentName:"p"},"project-repo"),"\u201c."),(0,a.kt)("p",null,"Go to the project-repo site in GitHub. Click the ",(0,a.kt)("strong",{parentName:"p"},"Fork")," button which is located in the top right corner. This action forks the project to your GitHub account. Let\u2019s call it the \u201c",(0,a.kt)("em",{parentName:"p"},"account-repo"),"\u201c."),(0,a.kt)("p",null,"Now direct to a folder in your machine where you want to clone the repo. Open the terminal in that folder. Now before going to next step make sure there is git installed in your machine. If not you can download it from ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"this")," link."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ git clone https://github.com/<username>/<project-name>.git")),(0,a.kt)("p",null,"Use this command to clone the project in your local machine. Here ",(0,a.kt)("em",{parentName:"p"},"username")," is your GitHub handle and project-name is the project you are going to contribute."),(0,a.kt)("p",null,"Let this repo be \u201c",(0,a.kt)("em",{parentName:"p"},"local-repo"),"\u201c."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ cd <project-name>")),(0,a.kt)("p",null,"Now you have a link between ",(0,a.kt)("em",{parentName:"p"},"local-repo")," and ",(0,a.kt)("em",{parentName:"p"},"account-repo")," as \u201c",(0,a.kt)("strong",{parentName:"p"},"origin"),"\u201c. You also need to add the ",(0,a.kt)("em",{parentName:"p"},"project-repo"),". You can do by the following command."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ git remote add upstream https://github.com/<company-name>/<project-name>.git")),(0,a.kt)("p",null,"Here ",(0,a.kt)("em",{parentName:"p"},"company-name")," is the handle of the ",(0,a.kt)("em",{parentName:"p"},"project-repo")," and ",(0,a.kt)("em",{parentName:"p"},"project-name")," is the name of the project."),(0,a.kt)("p",null,"This you have a link between local-repo and project-repo as \u201cupstream\u201c."),(0,a.kt)("p",null,"You can check the remote repo\u2019s of your ",(0,a.kt)("em",{parentName:"p"},"local-repo")," by"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ git remote -v")),(0,a.kt)("p",null,"Now you can pull the updated project of the ",(0,a.kt)("em",{parentName:"p"},"project-repo")," into your ",(0,a.kt)("em",{parentName:"p"},"local-repo"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ git pull upstream <branch> --rebase")),(0,a.kt)("p",null,"Here ",(0,a.kt)("em",{parentName:"p"},"branch")," is the branch name you want to pull. It will be \u201cdevelopment\u201d for most of the Open-Source projects. And now you can push the changes from local-repo to account-repo."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ git push origin <branch>")),(0,a.kt)("p",null,"This can be done every time you start working for the day. And make sure you are in the proper branch while you do this. You can check your branch by"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ git branch")),(0,a.kt)("p",null,"Now you have all set for working on the project without any issues."),(0,a.kt)("h3",{id:"working-on-the-project"},"Working on the project"),(0,a.kt)("p",null,"You find some issue and want to work on it. So, the first thing you do is create a new branch for working on the issue. You can create a new branch by"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ git branch <new-branch-name>")),(0,a.kt)("p",null,"Here ",(0,a.kt)("em",{parentName:"p"},"new-branch-name")," can be anything you give name related to the issue."),(0,a.kt)("p",null,"After creating a new branch you should check out to that branch to work on the issue. It can be done by"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ git checkout <branch-name>")),(0,a.kt)("p",null,"Here ",(0,a.kt)("em",{parentName:"p"},"branch-name")," is the name of the branch which you want to work on."),(0,a.kt)("p",null,"While you are working you can save your changes so if it is disturbed by any mistake then you can get it back. You can save like"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ git add -A")),(0,a.kt)("p",null,"or"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ git add <file-name>")),(0,a.kt)("p",null,"Here you are staging the files you change. The changes can be looked at by"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ git status")),(0,a.kt)("p",null,"Now you can directly commit if you feel this is what to be saved by using"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'$ git commit -m "<commit-message>"')),(0,a.kt)("p",null,"Here ",(0,a.kt)("em",{parentName:"p"},"commit-message")," can be related to what you\u2019ve worked on."),(0,a.kt)("p",null,"After this process when you want to push the changes to ",(0,a.kt)("em",{parentName:"p"},"account-repo")," then"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ git push -u origin <branch-name>")),(0,a.kt)("p",null,"if the branch is not present in your ",(0,a.kt)("em",{parentName:"p"},"account-repo")),(0,a.kt)("p",null,"or"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ git push origin <branch-name>")),(0,a.kt)("p",null,"if the branch is present in your ",(0,a.kt)("em",{parentName:"p"},"account-repo")),(0,a.kt)("p",null,"Now you can check your updated ",(0,a.kt)("em",{parentName:"p"},"account-repo")," and send a PR for the issue you worked on."),(0,a.kt)("h3",{id:"playing-with-git"},"Playing with git"),(0,a.kt)("h4",{id:"you-can-check-your-commits-in-a-particular-branch-by"},"You can check your commits in a particular branch by"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ git log")),(0,a.kt)("p",null,"You can add \u201c",(0,a.kt)("em",{parentName:"p"},"\u2013oneline"),"\u201d to the command if you want the commits in one line."),(0,a.kt)("p",null,"You can add \u201c",(0,a.kt)("em",{parentName:"p"},"\u2013all"),"\u201d to the command if you want to see all the commits."),(0,a.kt)("p",null,"You can add \u201c",(0,a.kt)("em",{parentName:"p"},"\u2013graph"),"\u201d to the command to see the commits in a graph style."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ git log --oneling --all --graph")),(0,a.kt)("h4",{id:"if-you-have-some-changes-and-want-to-add-to-the-previous-commit-or-change-the-commit-message-of-the-previous-commit-then-you-have-to-stage-the-changes-then"},"If you have some changes and want to add to the previous commit or change the commit message of the previous commit. Then you have to stage the changes then"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ git commit --amend")),(0,a.kt)("h4",{id:"you-can-check-all-your-recent-activities-by-using"},"You can check all your recent activities by using"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ git reflog")),(0,a.kt)("h4",{id:"you-can-revert-your-work-to-a-specific-commit-and-work-again-by-using"},"You can revert your work to a specific commit and work again by using"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ git revert <some-commit>")),(0,a.kt)("p",null,"Here ",(0,a.kt)("em",{parentName:"p"},"some-commit")," is the name of the commit you want to go back or if you want to use the position you can use \u201cHEAD~$position\u201d replace the $position  with the point where you want to go back."),(0,a.kt)("h4",{id:"you-can-even-delete-your-commit-or-any-activity-by-referring-to-the-history-of-what-you-did"},"You can even delete your commit or any activity by referring to the history of what you did."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ git reset <type> <some-commit>")),(0,a.kt)("p",null,"Here type can be \u201c",(0,a.kt)("em",{parentName:"p"},"\u2013hard"),"\u201d or \u201c",(0,a.kt)("em",{parentName:"p"},"\u2013soft"),"\u201d based on you want to completely change the working tree or want to keep it as it is."),(0,a.kt)("h4",{id:"you-can-show-the-same-changes-of-your-local-repo-into-your-account-repo-even-if-it-is-completely-different-by-force-pushing"},"You can show the same changes of your local-repo into your account-repo even if it is completely different by force pushing"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ git push -f origin <branch-name>")),(0,a.kt)("h4",{id:"if-you-want-to-squash-some-commits-into-one-then-one-of-the-ways-which-you-can-use-is"},"If you want to squash some commits into one then one of the ways which you can use is"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ git rebase -i <some-commit>")),(0,a.kt)("p",null,"Then you can choose which commit to squash and which to pick and finally can edit the commit message."),(0,a.kt)("p",null,"There are even many more things you can learn about \u201c",(0,a.kt)("strong",{parentName:"p"},"git"),"\u201c. You can go through ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/"},"this")," link."))}m.isMDXComponent=!0}}]);