(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(e,t,a){e.exports=a(168)},114:function(e,t,a){},157:function(e,t){},168:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),s=a.n(l),o=(a(114),a(16)),i=a(34),c=a(38),u=a(26),m=a(27),d=a(30),h=a(28),g=a(21),p=a(31),b=a(202),E=a(209),f=a(203),v=a(57),y=a(197),j=a(22),I=a.n(j),w=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).signInRequest=a.signInRequest.bind(Object(g.a)(a)),a.handleInputChange=a.handleInputChange.bind(Object(g.a)(a)),a.state={authorized:!1,user:I.a.auth().currentUser},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(c.a)({},n,a))}},{key:"signInRequest",value:function(e){var t=this;e.preventDefault(),I.a.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((function(e){P.collection("users").doc(e.user.uid).get().then((function(e){var a=e.data();a&&(window.localStorage.setItem("authorized",!0),window.localStorage.setItem("name",a.name),t.setState({authorized:!0}))}))})).catch((function(e){t.setState({error:e.message})}))}},{key:"render",value:function(){return this.state.authorized?r.a.createElement(i.a,{to:"/chat"}):r.a.createElement(y.a,{component:"main",maxWidth:"xs"},r.a.createElement("p",null,this.state.error),r.a.createElement("div",null,r.a.createElement(v.a,{component:"h1",variant:"h5",align:"center"},"Login"),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.signInRequest},r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",type:"email",autoComplete:"email",autoFocus:!0,onChange:this.handleInputChange}),r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:this.handleInputChange}),r.a.createElement(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Sign In"),r.a.createElement(f.a,{container:!0},r.a.createElement(f.a,{item:!0},r.a.createElement(o.b,{to:"/signup",variant:"body2"},"Don't have an account? Sign Up"))))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"align-center"},r.a.createElement("p",null,"or you can chat as anonymous"),r.a.createElement(b.a,{variant:"outlined",color:"primary"},r.a.createElement(o.b,{to:"/chat"},"Go to Chat"))))}}]),t}(r.a.Component),S=a(204),O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={},a.signUpRequest=a.signUpRequest.bind(Object(g.a)(a)),a.handleInputChange=a.handleInputChange.bind(Object(g.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"signUpRequest",value:function(e){var t=this;e.preventDefault(),I.a.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((function(e){P.collection("users").doc(e.user.uid).set({name:t.state.name}).then((function(){t.setState({succsess:!0})}))}),(function(e){t.setState({error:e.message})}))}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(c.a)({},n,a))}},{key:"render",value:function(){return this.state.succsess?r.a.createElement(i.a,{to:"/login"}):r.a.createElement(y.a,{component:"main",maxWidth:"xs"},r.a.createElement("p",null,this.state.error),r.a.createElement(S.a,null),r.a.createElement("div",null,r.a.createElement(v.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("br",null),r.a.createElement("form",{noValidate:!0,onSubmit:this.signUpRequest},r.a.createElement(f.a,{container:!0,spacing:2},r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(E.a,{variant:"outlined",required:!0,fullWidth:!0,id:"text",label:"Your name",name:"name",onChange:this.handleInputChange})),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(E.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:this.handleInputChange})),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(E.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:this.handleInputChange}))),r.a.createElement("br",null),r.a.createElement(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Sign Up"),r.a.createElement(f.a,{container:!0,justify:"flex-end"},r.a.createElement(f.a,{item:!0},r.a.createElement(o.b,{to:"/login",variant:"body2"},"Already have an account? Sign in"))))))}}]),t}(r.a.Component),C=a(97),k=a(95),N=a.n(k),z=a(201),q=a(207),x=a(208),B=a(96),W=a(94),M=a(205),R=a(206),U=Object(W.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function D(e){var t=U(),a=r.a.useState(e.authorized),n=Object(B.a)(a,1)[0];return r.a.createElement("div",{className:t.root},r.a.createElement(M.a,{position:"static"},r.a.createElement(R.a,null,r.a.createElement(v.a,{variant:"h6",className:t.title},e.title),n&&r.a.createElement(v.a,null," Your are logged in as ",e.userName),r.a.createElement(b.a,{variant:"contained",color:"default"},n?r.a.createElement(o.b,{to:"/logout"},"logout"):r.a.createElement(o.b,{to:"/login"},"login")),n&&r.a.createElement(b.a,{variant:"contained",color:"default"}," ",r.a.createElement(o.b,{to:"/history"},"history")," "),n&&r.a.createElement(b.a,{variant:"contained",color:"default"}," ",r.a.createElement(o.b,{to:"/chat"},"Chat")," "))))}var T=a(55),A=a(56),F=a.n(A),G=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).sendMessage=a.sendMessage.bind(Object(g.a)(a)),a.handleInputChange=a.handleInputChange.bind(Object(g.a)(a)),a.socket=N.a.connect(),a.getMessages().then((function(e){a.setState({messages:e.reverse()})})),a.socket.on("chat message",(function(e){var t=JSON.parse(e);a.setState((function(e){return{messages:[].concat(Object(C.a)(e.messages),[t])}}))})),a.state={messages:[],userName:window.localStorage.getItem("name"),authorized:window.localStorage.getItem("authorized")},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"scrollToBottom",value:function(){T.animateScroll.scrollToBottom({containerId:"messages-block"})}},{key:"getMessages",value:function(){return P.collection("messages").orderBy("date","desc").limit(30).get().then((function(e){return e.docs.map((function(e){return e.data()}))}))}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(c.a)({},n,a))}},{key:"sendMessage",value:function(){var e={name:this.state.authorized?this.state.userName:null,message:this.state.msg,date:new Date};this.socket.emit("chat message",JSON.stringify(e))}},{key:"render",value:function(){var e=this.state.messages;return r.a.createElement("div",null,r.a.createElement(D,{userName:this.state.userName,authorized:this.state.authorized,title:"Chat"}),r.a.createElement(z.a,{id:"messages-block",className:"messages-block"},e.map((function(e){return r.a.createElement(q.a,null,r.a.createElement("span",null),r.a.createElement(x.a,{primary:e.message,secondary:"by ".concat(e.name||"anonymous","  ").concat(F()(e.date).fromNow())}))}))),r.a.createElement("div",{className:"footer"},r.a.createElement("div",null,r.a.createElement(E.a,{className:"message-input",fullWidth:!0,label:"Type here your message...",name:"msg",onChange:this.handleInputChange,autoFocus:!0,autoCmplete:!1,autocomplete:"off"}),r.a.createElement(b.a,{variant:"outlined",className:"send-button",onClick:this.sendMessage},"Send"))))}}]),t}(r.a.Component);var H=function(){return I.a.auth().signOut().then((function(){window.localStorage.clear()})).catch((function(e){})),r.a.createElement(i.a,{to:"/login"})},J=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).getMessages().then((function(e){a.setState({messages:e.reverse()})})),a.state={messages:[],userName:window.localStorage.getItem("name"),authorized:window.localStorage.getItem("authorized")},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"scrollToBottom",value:function(){T.animateScroll.scrollToBottom({containerId:"messages-block"})}},{key:"getMessages",value:function(){return P.collection("messages").orderBy("date","desc").get().then((function(e){return e.docs.map((function(e){return e.data()}))}))}},{key:"render",value:function(){var e=this.state.messages;return r.a.createElement("div",null,r.a.createElement(D,{userName:this.state.userName,authorized:this.state.authorized,title:"History"}),r.a.createElement(z.a,{id:"messages-block",className:"messages-block history"},e.map((function(e){return r.a.createElement(q.a,null,r.a.createElement("span",null),r.a.createElement(x.a,{primary:e.message,secondary:"by ".concat(e.name||"anonymous","  ").concat(F()(e.date).fromNow())}))}))))}}]),t}(r.a.Component);a.d(t,"db",(function(){return P})),I.a.initializeApp({apiKey:"AIzaSyBfxjNjjsQKIoSHSj1ZNMIQ18HS1m0h6F4",authDomain:"lab7-chat.firebaseapp.com",databaseURL:"https://lab7-chat.firebaseio.com",projectId:"lab7-chat",storageBucket:"lab7-chat.appspot.com",messagingSenderId:"698623761262",appId:"1:698623761262:web:d47d37a0d755339d887f7f",measurementId:"G-12FSK5YH7F"});var P=I.a.firestore();s.a.render(r.a.createElement((function(){return r.a.createElement(o.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/login"},r.a.createElement(w,null)),r.a.createElement(i.b,{path:"/signup"},r.a.createElement(O,null)),r.a.createElement(i.b,{path:"/logout"},r.a.createElement(H,null)),r.a.createElement(i.b,{path:"/history"},r.a.createElement(J,null)),r.a.createElement(i.b,{path:"/"},r.a.createElement(G,null))))}),null),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.0c338bd3.chunk.js.map