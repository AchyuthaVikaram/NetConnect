(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[107],{5382:function(e,s,r){"use strict";r.d(s,{Z:function(){return c}});var n=r(5893),i=r(1163),l=r(7524),a=r(5007),o=r(9023),t=function(){let e=(0,i.useRouter)(),s=(0,a.I0)(),r=(0,a.v9)(e=>e.auth);return(0,n.jsxs)("nav",{className:l.container,children:[(0,n.jsx)("div",{className:l.leftContainer,children:(0,n.jsx)("h1",{onClick:()=>e.push("/"),children:"NetConnect"})}),(0,n.jsxs)("div",{className:l.rightContainer,children:[r.profileFetched&&(0,n.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[(0,n.jsxs)("p",{className:l.userName,children:["hey,",r.user.userId.name]}),(0,n.jsx)("p",{onClick:()=>{e.push("/profile")},style:{fontWeight:"bold",cursor:"pointer"},children:"Profile"}),(0,n.jsx)("p",{onClick:()=>{localStorage.removeItem("token"),s((0,o.mc)()),e.push("/login")},style:{fontWeight:"bold",cursor:"pointer"},children:"Logout"})]}),!r.profileFetched&&(0,n.jsx)("div",{onClick:()=>e.push("/login"),children:"Be a Part"})]})]})};function c(e){let{children:s}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)(t,{}),s]})}r(7294)},7524:function(e){e.exports={container:"styles_container__zTAGv",leftContainer:"styles_leftContainer__ZTstV",rightContainer:"styles_rightContainer__Mi1_A",userName:"styles_userName__4q1JP"}},4533:function(e){e.exports={container:"styles_container__JRQAT",home_container:"styles_home_container__NSEeA",home_SideContainer:"styles_home_SideContainer__XDY_k",home_leftContainer:"styles_home_leftContainer__Ri1Oc",sidebar:"styles_sidebar__KdNlT",feed_container:"styles_feed_container__hLlJ3",extra_container:"styles_extra_container__tc5j0",mobileNavbar:"styles_mobileNavbar__znYkb",userCard:"styles_userCard__xGGn2",userImage:"styles_userImage__l0DZH",userDetails:"styles_userDetails__8vNQf",userName:"styles_userName__ZX___",userHandle:"styles_userHandle__rASw7",userBio:"styles_userBio__bnq1i",cardContainer:"styles_cardContainer__8diPI",bannerImage:"styles_bannerImage__uYe9u",profileImageWrapper:"styles_profileImageWrapper__u3p_o",profileImage:"styles_profileImage__ZTaKB",cardContent:"styles_cardContent__DUgx1"}},1163:function(e,s,r){e.exports=r(3079)},3672:function(e,s,r){"use strict";var n=r(5893),i=r(1163),l=r(4533),a=r(5007),o=r(7294),t=r(9023),c=r(7026),d=r(3422);s.Z=function(e){let{children:s}=e,r=(0,i.useRouter)(),A=(0,a.v9)(e=>e.auth),h=(0,a.I0)();return(0,o.useEffect)(()=>{localStorage.getItem("token")||r.push("/login"),h((0,t.yX)()),A.all_profiles_fetched||h((0,c.AW)())},[]),(0,o.useEffect)(()=>{h((0,c.is)())},[A.isTokenThere]),(0,n.jsx)("div",{className:l.container,children:(0,n.jsxs)("div",{className:l.home_container,children:[(0,n.jsxs)("div",{className:l.home_SideContainer,children:[(0,n.jsxs)("div",{className:l.home_leftContainer,children:[(0,n.jsxs)("div",{onClick:()=>r.push("/dashboard"),className:l.sidebar,children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"})}),(0,n.jsx)("p",{children:"Home"})]}),(0,n.jsxs)("div",{onClick:()=>r.push("/discover"),className:l.sidebar,children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),(0,n.jsx)("p",{children:"Discover"})]}),(0,n.jsxs)("div",{onClick:()=>r.push("/my_connections"),className:l.sidebar,children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"})}),(0,n.jsx)("p",{children:"My Connections"})]})]}),(0,n.jsx)("div",{className:l.home_leftContainer,children:A.user.userId&&(0,n.jsxs)("div",{className:l.cardContainer,children:[(0,n.jsx)("div",{className:l.banner,children:(0,n.jsx)("img",{src:"data:image/jpeg;base64,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",className:l.bannerImage})}),(0,n.jsx)("div",{className:l.profileImageWrapper,children:(0,n.jsx)("img",{src:"default.jpg"===A.user.userId.profilePicture?"".concat(d._,"/").concat(A.user.userId.profilePicture):A.user.userId.profilePicture,alt:"".concat(A.user.userId.name,"'s profile"),className:l.profileImage})}),(0,n.jsxs)("div",{className:l.cardContent,children:[(0,n.jsx)("h2",{className:l.authorName,children:A.user.userId.name}),(0,n.jsx)("p",{className:l.authorBio,children:A.user.bio})]})]})})]}),(0,n.jsx)("div",{className:l.feed_container,children:s}),(0,n.jsxs)("div",{className:l.extra_container,children:[(0,n.jsx)("h3",{children:"Top Profiles"}),A.all_profiles_fetched&&A.all_users.filter(e=>e.userId.token!==localStorage.getItem("token")).map((e,s)=>{var i,a,o,t,c,A;return(0,n.jsxs)("div",{onClick:()=>{var s;r.push("/view_profile/".concat(null===(s=e.userId)||void 0===s?void 0:s.username))},style:{margin:"1rem",cursor:"pointer"},className:l.userCard,children:[(0,n.jsx)("img",{className:l.userImage,src:(null===(i=e.userId)||void 0===i?void 0:i.profilePicture)==="default.jpg"?"".concat(d._,"/").concat(null===(a=e.userId)||void 0===a?void 0:a.profilePicture):null===(o=e.userId)||void 0===o?void 0:o.profilePicture,alt:"".concat(null===(t=e.userId)||void 0===t?void 0:t.name,"'s profile")}),(0,n.jsxs)("div",{className:l.userDetails,children:[(0,n.jsx)("h2",{className:l.userName,children:null===(c=e.userId)||void 0===c?void 0:c.name}),(0,n.jsxs)("p",{className:l.userHandle,children:["@",null===(A=e.userId)||void 0===A?void 0:A.username]}),(0,n.jsx)("p",{className:l.userBio,children:e.bio&&e.bio})]})]},s)})]}),(0,n.jsxs)("div",{className:l.mobileNavbar,children:[(0,n.jsx)("div",{onClick:()=>r.push("/dashboard"),className:l.mobileNavbarSingleItem,children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"})})}),(0,n.jsx)("div",{onClick:()=>r.push("/discover"),className:l.mobileNavbarSingleItem,children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})})}),(0,n.jsx)("div",{onClick:()=>r.push("/my_connections"),className:l.mobileNavbarSingleItem,children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"})})})]})]})})}}}]);