exports.id=900,exports.ids=[900],exports.modules={9061:e=>{e.exports={container:"styles_container__zTAGv",leftContainer:"styles_leftContainer__ZTstV",rightContainer:"styles_rightContainer__Mi1_A",userName:"styles_userName__4q1JP"}},5306:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(t,{_:()=>o,n:()=>l});var r=a(9648),n=e([r]);r=(n.then?(await n)():n)[0];let o="https://netconnect-y2z3.onrender.com",l=r.default.create({baseURL:o});s()}catch(e){s(e)}})},7357:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>l});var r=a(997),n=a(4616);a(6689);var o=e([n]);function l({children:e}){return(0,r.jsxs)("div",{children:[r.jsx(n.Z,{}),e]})}n=(o.then?(await o)():o)[0],s()}catch(e){s(e)}})},108:()=>{},4616:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>d});var r=a(997),n=a(1163),o=a(9061),l=a(3291),i=a(9023),c=e([l,i]);[l,i]=c.then?(await c)():c;let d=function(){let e=(0,n.useRouter)(),t=(0,l.useDispatch)(),a=(0,l.useSelector)(e=>e.auth);return(0,r.jsxs)("nav",{className:o.container,children:[r.jsx("div",{className:o.leftContainer,children:r.jsx("h1",{onClick:()=>e.push("/"),children:"NetConnect"})}),(0,r.jsxs)("div",{className:o.rightContainer,children:[a.profileFetched&&(0,r.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[(0,r.jsxs)("p",{className:o.userName,children:["hey,",a.user.userId.name]}),r.jsx("p",{onClick:()=>{e.push("/profile")},style:{fontWeight:"bold",cursor:"pointer"},children:"Profile"}),r.jsx("p",{onClick:()=>{localStorage.removeItem("token"),t((0,i.mc)()),e.push("/login")},style:{fontWeight:"bold",cursor:"pointer"},children:"Logout"})]}),!a.profileFetched&&r.jsx("div",{onClick:()=>e.push("/login"),children:"Be a Part"})]})]})};s()}catch(e){s(e)}})},7026:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(t,{AW:()=>d,Jb:()=>p,Zk:()=>u,_2:()=>h,a$:()=>i,is:()=>c,pH:()=>l,q8:()=>g});var r=a(5306),n=a(3258),o=e([r,n]);[r,n]=o.then?(await o)():o;let l=(0,n.createAsyncThunk)("user/login",async(e,t)=>{try{let a=await r.n.post("/login",{email:e.email,password:e.password});if(!a.data.token)return t.rejectWithValue({message:"token not provided"});return localStorage.setItem("token",a.data.token),t.fulfillWithValue(a.data)}catch(e){return t.rejectWithValue(e.response.data.message)}}),i=(0,n.createAsyncThunk)("user/register",async(e,t)=>{try{let a=await r.n.post("/register",{username:e.username,name:e.name,email:e.email,password:e.password});return t.fulfillWithValue(a.data.message)}catch(e){return t.rejectWithValue(e.response.data.message)}}),c=(0,n.createAsyncThunk)("user/getuserdata",async(e,t)=>{try{let e=await r.n.get("/get_user_and_profile",{params:{token:localStorage.getItem("token")}});return t.fulfillWithValue(e.data)}catch(e){return console.error(e.response?.data?.message),t.rejectWithValue(e.response?.data?.message||"Error fetching data")}}),d=(0,n.createAsyncThunk)("user/getallusers",async(e,t)=>{try{let e=await r.n.get("/user/get_all_users");return t.fulfillWithValue(e.data)}catch(e){return t.rejectWithValue(e.response.data.message)}}),u=(0,n.createAsyncThunk)("user/sendconnectionrequest",async(e,t)=>{try{let a=await r.n.post("/user/send_connection_request",{connectionId:e},{params:{token:localStorage.getItem("token")}});return t.dispatch(p()),t.fulfillWithValue(a.data)}catch(e){return t.rejectWithValue(e.response.data.message)}}),p=(0,n.createAsyncThunk)("user/sentconntectionrequests",async(e,t)=>{try{let e=await r.n.get("/user/sent_conntection_requests",{params:{token:localStorage.getItem("token")}});return t.fulfillWithValue(e.data)}catch(e){return t.rejectWithValue(e.response.data.message)}}),h=(0,n.createAsyncThunk)("user/getreceivedconnections",async(e,t)=>{try{let e=await r.n.get("/user/recieved_connection_requests",{params:{token:localStorage.getItem("token")}});return t.fulfillWithValue(e.data)}catch(e){return t.rejectWithValue(e.response.data.message)}}),g=(0,n.createAsyncThunk)("user/updatestatusofconnection",async(e,t)=>{try{let a=await r.n.post("/user/update_status",{status:e.status,requestId:e.requestId},{params:{token:localStorage.getItem("token")}});return t.fulfillWithValue(a.data)}catch(e){return t.rejectWithValue(e.response.data.message)}});s()}catch(e){s(e)}})},4178:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(t,{Bd:()=>l,YF:()=>h,fR:()=>c,h_:()=>u,oE:()=>d,qb:()=>i,w:()=>p});var r=a(5306),n=a(3258),o=e([r,n]);[r,n]=o.then?(await o)():o;let l=(0,n.createAsyncThunk)("post/getAllPost",async(e,t)=>{try{let e=await r.n.get("/posts");return t.fulfillWithValue(e.data)}catch(e){return t.rejectWithValue(e.response.data.message)}}),i=(0,n.createAsyncThunk)("post/createpost",async(e,t)=>{let{file:a,body:s}=e;try{let e=new FormData;e.append("token",localStorage.getItem("token")),e.append("body",s),e.append("media",a);let n=await r.n.post("/post",e,{headers:{"Content-Type":"multipart/formdata"},params:{token:localStorage.getItem("token")}});if(200==n.status)return t.fulfillWithValue("Post uploaded");return t.rejectWithValue("post not uploaded")}catch(e){t.rejectWithValue(e.response.data.message)}}),c=(0,n.createAsyncThunk)("post/deletepost",async(e,t)=>{let{post_id:a,token:s}=e;try{let e=await r.n.post("/delete_post",{post_id:a,token:s});t.fulfillWithValue(e.data)}catch(e){t.rejectWithValue(e.response.data.message)}}),d=(0,n.createAsyncThunk)("post/incrementlike",async(e,t)=>{try{let a=await r.n.post("/like",{postId:e._id},{params:{token:localStorage.getItem("token")}});return t.fulfillWithValue(a.data.message)}catch(e){return t.rejectWithValue(e.response.data.message)}}),u=(0,n.createAsyncThunk)("post/getallcomments",async(e,t)=>{try{let a=await r.n.get("/get/comments",{params:{postId:e}});return t.fulfillWithValue({comments:a.data||[],postId:e})}catch(a){let e=a.response?.data?.message||"Failed to fetch comments";return t.rejectWithValue(e)}}),p=(0,n.createAsyncThunk)("post/postcomment",async(e,t)=>{try{let a=await r.n.post("/comment",{post_id:e.postId,body:e.comment},{params:{token:localStorage.getItem("token")}});return t.fulfillWithValue(a.data)}catch(e){return t.rejectWithValue(e.response.data.message)}}),h=(0,n.createAsyncThunk)("post/deletecomment",async(e,t)=>{try{let a=await r.n.post("/delete_comment",{commentId:e},{params:{token:localStorage.getItem("token")}});return t.fulfillWithValue(a.data)}catch(e){return t.rejectWithValue(e.response.data.message)}});s()}catch(e){s(e)}})},9023:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(t,{ZP:()=>g,mc:()=>c});var r=a(3258),n=a(7026);a(6689);var o=e([r,n]);[r,n]=o.then?(await o)():o;let l={user:[],isError:!1,isLoading:!1,isSuccess:!1,loggedIn:!1,profileFetched:!1,isTokenThere:!1,message:"",connections:[],connectionRequest:[],all_users:[],all_profiles_fetched:!1},i=(0,r.createSlice)({name:"auth",initialState:l,reducers:{reset:()=>l,handleLoginUser:e=>e.message="hello",emptyMessage:e=>{e.message=""},setIsTokenThere:e=>{e.isTokenThere=!0},setIsTokenNotThere:e=>{e.isTokenThere=!1}},extraReducers:e=>{e.addCase(n.pH.pending,e=>{e.isLoading=!0,e.message="Knocking the door"}).addCase(n.pH.fulfilled,(e,t)=>{e.isSuccess=!0,e.isLoading=!1,e.isError=!1,e.loggedIn=!0,e.message="log in is Successful"}).addCase(n.pH.rejected,(e,t)=>{e.isLoading=!1,e.isError=!0,e.isSuccess=!1,e.loggedIn=!1,e.message=t.payload}).addCase(n.a$.pending,e=>{e.message="registering you...",e.isLoading=!0}).addCase(n.a$.fulfilled,(e,t)=>{e.isSuccess=!0,e.isLoading=!1,e.isError=!1,e.loggedIn=!0,e.message="Registration is Successful"}).addCase(n.a$.rejected,(e,t)=>{e.isLoading=!1,e.isError=!0,e.isSuccess=!1,e.loggedIn=!1,e.message=t.payload}).addCase(n.is.fulfilled,(e,t)=>{e.isLoading=!1,e.isError=!1,e.profileFetched=!0,e.user=t.payload.profile,e.message=t.payload.message}).addCase(n.is.rejected,(e,t)=>{e.isLoading=!1,e.isError=!0,e.message=t.payload}).addCase(n.AW.fulfilled,(e,t)=>{e.isLoading=!1,e.isError=!0,e.all_profiles_fetched=!0,e.all_users=t.payload.profiles}).addCase(n.AW.rejected,(e,t)=>{e.isLoading=!1,e.isError=!0,e.all_profiles_fetched=!1,e.message=t.payload}).addCase(n.Jb.fulfilled,(e,t)=>{e.isError=!1,e.connections=t.payload.requests}).addCase(n.Jb.rejected,(e,t)=>{e.isError=!0,e.message=t.payload}).addCase(n._2.fulfilled,(e,t)=>{e.connectionRequest=t.payload.requestsRecieved}).addCase(n._2.rejected,(e,t)=>{e.isError=!0,e.message=t.payload})}}),{reset:c,handleLoginUser:d,emptyMessage:u,setIsTokenNotThere:p,setIsTokenThere:h}=i.actions,g=i.reducer;s()}catch(e){s(e)}})},4156:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(t,{K:()=>c,Z:()=>d});var r=a(3258),n=a(4178),o=e([r,n]);[r,n]=o.then?(await o)():o;let l={posts:[],isError:!1,isLoading:!1,postFetched:!1,message:"",loggedIn:!1,comments:[],postid:"",postLikes:""},i=(0,r.createSlice)({name:"posts",initialState:l,reducers:{reset:()=>l,resetPostId:e=>{e.postid=""}},extraReducers:e=>{e.addCase(n.Bd.pending,e=>{e.isLoading=!0,e.postFetched=!1,e.message="fetching..."}).addCase(n.Bd.fulfilled,(e,t)=>{e.isLoading=!1,e.isError=!1,e.postFetched=!0,e.posts=t.payload.reverse(),e.message="Posts fetched "}).addCase(n.Bd.rejected,(e,t)=>{e.isError=!0,e.isLoading=!1,e.postFetched=!1,e.message=t.payload}).addCase(n.qb.rejected,(e,t)=>{e.isError=!0,e.message=t.payload}).addCase(n.qb.fulfilled,(e,t)=>{e.isError=!1,e.message=t.payload}).addCase(n.fR.rejected,(e,t)=>{e.isError=!1,e.message=t.payload}).addCase(n.fR.fulfilled,(e,t)=>{e.isError=!1,e.message=t.payload}).addCase(n.oE.rejected,(e,t)=>{e.isError=!0,e.message=t.payload}).addCase(n.oE.fulfilled,(e,t)=>{e.isError=!1,e.postLikes=t.payload}).addCase(n.h_.fulfilled,(e,t)=>{e.comments=t.payload.comments,e.postid=t.payload.postId,e.isError=!1}).addCase(n.w.rejected,(e,t)=>{e.isError=!0,e.message=t.payload}).addCase(n.w.fulfilled,(e,t)=>{e.isError=!1,e.message=t.payload}).addCase(n.YF.rejected,(e,t)=>{e.isError=!0,e.message=t.payload}).addCase(n.YF.fulfilled,(e,t)=>{e.isError=!1,e.message=t.payload})}}),{resetPostId:c}=i.actions,d=i.reducer;s()}catch(e){s(e)}})},2403:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>i});var r=a(3258),n=a(9023),o=a(4156),l=e([r,n,o]);[r,n,o]=l.then?(await l)():l;let i=(0,r.configureStore)({reducer:{auth:n.ZP,posts:o.Z}});s()}catch(e){s(e)}})},2841:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{default:()=>i});var r=a(997),n=a(2403);a(108);var o=a(3291),l=e([n,o]);function i({Component:e,pageProps:t}){return(0,r.jsxs)(o.Provider,{store:n.Z,children:[r.jsx(e,{...t})," "]})}[n,o]=l.then?(await l)():l,s()}catch(e){s(e)}})},9166:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var s=a(997),r=a(6859);function n(){return(0,s.jsxs)(r.Html,{lang:"en",children:[(0,s.jsxs)(r.Head,{children:[s.jsx("title",{children:"Pro Connect"}),s.jsx("meta",{name:"description",content:"Pro Connect"}),s.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),s.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');"}),s.jsx("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("body",{children:[s.jsx(r.Main,{}),s.jsx(r.NextScript,{})]})]})}}};