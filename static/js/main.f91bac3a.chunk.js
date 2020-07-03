(this.webpackJsonpspenceryzou=this.webpackJsonpspenceryzou||[]).push([[0],{33:function(e,t,a){e.exports=a(61)},38:function(e,t,a){},39:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(29),c=a.n(i),s=(a(38),a(3)),o=a(4),l=a(6),m=a(5),u=a(17),d=a(2),p=(a(39),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).addStyling=function(){return e.props.tab.id===e.props.activeTab?{color:"rgb(143, 143, 143)"}:{color:"#EA5E76"}},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(u.b,{to:"/".concat(this.props.tab.title),className:"tab",style:this.addStyling(),onClick:this.props.changeTab.bind(this,this.props.tab.id)},this.props.tab.title)}}]),a}(n.Component)),b=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return this.props.tabs.map((function(t){return r.a.createElement(p,{tab:t,changeTab:e.props.changeTab,activeTab:e.props.activeTab})}))}}]),a}(n.Component),h=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"content",style:{marginTop:"1vw"}},r.a.createElement("div",{class:"content-body home-content-body"},r.a.createElement("div",{class:"content-body-text"},r.a.createElement("div",{class:"content-title",style:{color:"#ea5e76",lineHeight:".8em"}},"Hello!"),r.a.createElement("div",{class:"namedrop",style:{fontSize:"64px",fontWeight:"bold",lineHeight:"1.5em"}},"I'm Spencer."),"I'm a UCSB second year studying Computer Science. I'm interested in roles such as UI/UX Engineering, Web Development, Software Development, or anywhere that I can be involved in creating a product! "),r.a.createElement("div",{class:"content-body-image"},r.a.createElement("img",{src:"/images/cutoutblurcompress.jpg"}))))}}]),a}(n.Component),g=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"content",style:{marginTop:"1vw"}},r.a.createElement("div",{class:"about-content-body"},r.a.createElement("div",{id:"aboutImg",class:"content-body-image about-image"},r.a.createElement("img",{src:"/images/lobster3.png"})),r.a.createElement("div",{class:"content-body-text about-text"},r.a.createElement("div",{class:"content-title",style:{color:"#ea5e76"}},"About Me"),"Hi there, I'm Spencer! I'm a second year UC Santa Barbara Computer Science student from the Bay Area. I'm interested in Human-Computer Interaction, particularly developing media, interfaces, and graphics that serve to change a user's perception and intuition through design cues. I'm currently searching for internships for Summer 2020! If you or someone you know is interested, check out this fancy sheet of paper: ",r.a.createElement("a",{style:{fontStyle:"italic"},target:"_blank",href:"https://drive.google.com/file/d/1V1SHdTf_qteaFM_QpfKCznRibd8RXEsu/view?usp=sharing"},"r\xe9sum\xe9"),r.a.createElement("br",null),r.a.createElement("br",null),"In my free time, I like to read fashion blogs, play soccer (big Manchester City fan), drink boba, and sing!")))}}]),a}(n.Component),v=a(13);function E(e){var t=r.a.useState(!1),a=Object(v.a)(t,2),n=a[0],i=a[1],c=r.a.useRef();return r.a.useEffect((function(){var e=new IntersectionObserver((function(t){t[0].isIntersecting&&(i(!0),e.unobserve(c.current))}));return e.observe(c.current),function(){return e.unobserve(c.current)}}),[]),r.a.createElement("div",{className:"fade-in-section ".concat(n?"is-visible":""),ref:c},e.children)}var f=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"content"},r.a.createElement("div",{class:"content-body"},r.a.createElement("div",{class:"content-body-text works-text"},r.a.createElement("div",{class:"content-title"},r.a.createElement("a",{href:"https://spotifynd-friends.herokuapp.com/"},"Spotifynd Friends")),"Spotifynd Friends is a web app that utilizes the Spotify Web API to analyze and generate compatibility ratings between user's playlists using track audio features. Using this web app, users can find others who have similar music tastes! ",r.a.createElement("a",{href:"/Documentation.pdf",target:"_blank"},"Documentation"),r.a.createElement("br",null)),r.a.createElement(E,null,r.a.createElement("div",{class:"photo content-body-image"},r.a.createElement("a",{href:"https://spotifynd-friends.herokuapp.com/"},r.a.createElement("img",{id:"card",src:"/images/project.png"})))),r.a.createElement("div",{class:"content-body-text works-text"},r.a.createElement("div",{class:"content-title"},r.a.createElement("a",{href:"https://designatucsb.com/"},"Design at UCSB")),"Director of Web Development for UC Santa Barbara\u2019s premier student-run design agency, hosting design challenges, workshops, and collaborations with industry partners."),r.a.createElement(E,null,r.a.createElement("div",{class:"photo content-body-image"},r.a.createElement("a",{href:"https://spotifynd-friends.herokuapp.com/"},r.a.createElement("img",{id:"card",src:"/images/macbook.png"})))),r.a.createElement("div",{class:"content-body-text works-text"},r.a.createElement("div",{class:"content-title"},r.a.createElement("a",{href:"https://xd.adobe.com/view/f4d3444e-e071-4d75-8296-46aaa47b389e-a180/?fullscreen"},"Flix-In")),"High fidelity prototype of a web-based platform offering a community of Netflix enthusiasts to watch, discuss, and review shows and movies together. Created in a team using Adobe XD as part of the College + Netflix Adobe Creative Jam LIVE."),r.a.createElement(E,null,r.a.createElement("div",{class:"photo content-body-image"},r.a.createElement("a",{href:"https://xd.adobe.com/view/f4d3444e-e071-4d75-8296-46aaa47b389e-a180/?fullscreen"},r.a.createElement("img",{id:"card",src:"/images/flixin.png"}))))),r.a.createElement("div",{className:"footer"}))}}]),a}(n.Component),y=a(19);function j(e){var t=r.a.useState(!1),a=Object(v.a)(t,2),n=a[0],i=a[1],c=r.a.useRef();return r.a.useEffect((function(){var e=new IntersectionObserver((function(t){t[0].isIntersecting&&(i(!0),e.unobserve(c.current))}));return e.observe(c.current),function(){return e.unobserve(c.current)}}),[]),r.a.createElement("div",{className:"fade-in-section ".concat(n?"is-visible":""),ref:c},e.children)}var k=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleScroll=n.props.functions.handleScroll.bind(Object(y.a)(n)),n.toTop=n.props.functions.toTop.bind(Object(y.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll,{passive:!0})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"topBtn"},r.a.createElement("img",{src:"/images/uparrow.png",onClick:this.toTop})),r.a.createElement("div",{class:"content"},r.a.createElement("div",{class:"gallery-container"},r.a.createElement(j,null,r.a.createElement("div",{class:"photo"},r.a.createElement("img",{src:"/images/IMG_5504_1200.jpg",alt:"",id:"box",onClick:this.props.functions.openLightbox.bind(this,"/images/IMG_5504_1200.jpg")}))),r.a.createElement(j,null,r.a.createElement("div",{class:"photo"},r.a.createElement("img",{src:"/images/sagrada_1200.jpg",alt:"",id:"box",onClick:this.props.functions.openLightbox.bind(this,"/images/sagrada_1200.jpg")}))),r.a.createElement(j,null,r.a.createElement("div",{class:"photo"},r.a.createElement("img",{src:"/images/market_1200.jpg",alt:"",id:"box",onClick:this.props.functions.openLightbox.bind(this,"/images/market_1200.jpg")}))),r.a.createElement(j,null,r.a.createElement("div",{class:"photo"},r.a.createElement("img",{src:"/images/casamila_1200.jpg",alt:"",id:"box",onClick:this.props.functions.openLightbox.bind(this,"/images/casamila_1200.jpg")}))),r.a.createElement(j,null,r.a.createElement("div",{class:"photo"},r.a.createElement("img",{src:"/images/lakedad_1200.jpg",alt:"",id:"box",onClick:this.props.functions.openLightbox.bind(this,"/images/lakedad_1200.jpg")}))),r.a.createElement(j,null,r.a.createElement("div",{class:"photo"},r.a.createElement("img",{src:"/images/boats_1200.jpg",alt:"",id:"box",onClick:this.props.functions.openLightbox.bind(this,"/images/boats_1200.jpg")}))),r.a.createElement(j,null,r.a.createElement("div",{class:"photo"},r.a.createElement("img",{src:"/images/cityscape_1200.jpg",alt:"",id:"box",onClick:this.props.functions.openLightbox.bind(this,"/images/cityscape_1200.jpg")}))),r.a.createElement(j,null,r.a.createElement("div",{class:"photo"},r.a.createElement("img",{src:"/images/stain_1200.jpg",alt:"",id:"box",onClick:this.props.functions.openLightbox.bind(this,"/images/stain_1200.jpg")}))),r.a.createElement(j,null,r.a.createElement("div",{class:"photo"},r.a.createElement("img",{src:"/images/lake_1200.jpg",alt:"",id:"box",onClick:this.props.functions.openLightbox.bind(this,"/images/lake_1200.jpg")}))),r.a.createElement(j,null,r.a.createElement("div",{class:"photo"},r.a.createElement("img",{src:"/images/IMG_5604_1200.jpg",alt:"",id:"box",onClick:this.props.functions.openLightbox.bind(this,"/images/IMG_5604_1200.jpg")}))),r.a.createElement(j,null,r.a.createElement("div",{class:"photo"},r.a.createElement("img",{src:"/images/IMG_6211_1200.jpg",alt:"",id:"boxPortrait",onClick:this.props.functions.openLightbox.bind(this,"/images/IMG_6211_1200.jpg")}))),r.a.createElement(j,null,r.a.createElement("div",{class:"photo"},r.a.createElement("img",{src:"/images/street_1200.jpg",alt:"",id:"boxPortrait",onClick:this.props.functions.openLightbox.bind(this,"/images/street_1200.jpg")}))))),r.a.createElement("div",{id:"lightbox"},r.a.createElement("img",{src:"",id:"enlargedImg"})))}}]),a}(n.Component);function x(e){var t=r.a.useState(!1),a=Object(v.a)(t,2),n=a[0],i=a[1],c=r.a.useRef();return r.a.useEffect((function(){var e=new IntersectionObserver((function(t){t[0].isIntersecting&&(i(!0),e.unobserve(c.current))}));return e.observe(c.current),function(){return e.unobserve(c.current)}}),[]),r.a.createElement("div",{className:"fade-in-section ".concat(n?"is-visible":""),ref:c},e.children)}var w=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"content"},r.a.createElement("div",{class:"content-body"},r.a.createElement("div",{class:"covers-text content-body-text"},r.a.createElement("div",{class:"content-title",style:{textAlign:"center"}},"Covers"),"Nothing by Bruno Major"),r.a.createElement("div",{class:"covers-video content-body-image"},r.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/fyyVU6P9A1Y",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),r.a.createElement("div",{class:"covers-text content-body-text"},r.a.createElement("div",{class:"content-title",style:{textAlign:"center"}},"Graphics"),"Photoshop Work",r.a.createElement("br",null),r.a.createElement("br",null))),r.a.createElement("div",{class:"content-body-grid4"},r.a.createElement(x,null,r.a.createElement("div",{class:"content-body-image"},r.a.createElement("img",{src:"/images/IMG_4588.jpg"}))),r.a.createElement(x,null,r.a.createElement("div",{class:"content-body-image"},r.a.createElement("img",{src:"/images/photoshopmagic1.png"}))),r.a.createElement(x,null,r.a.createElement("div",{class:"content-body-image"},r.a.createElement("img",{src:"/images/IMG_5952.JPG"}))),r.a.createElement(x,null,r.a.createElement("div",{class:"content-body-image"},r.a.createElement("img",{src:"/images/photoshopmagic2.jpg"})))))}}]),a}(n.Component),O=a(25),C=a.n(O),S=a(31),I=a(32),T={apiKey:"AIzaSyBgKb4jkGyMo-tQJaAussIqt4MJNoY8Jb8",authDomain:"portfolio-96413.firebaseapp.com",databaseURL:"https://portfolio-96413.firebaseio.com"},_=a(28);function M(e){var t=r.a.useState(!1),a=Object(v.a)(t,2),n=a[0],i=a[1],c=r.a.useRef();return r.a.useEffect((function(){var e=new IntersectionObserver((function(t){t[0].isIntersecting&&(i(!0),e.unobserve(c.current))}));return e.observe(c.current),function(){return e.unobserve(c.current)}}),[]),r.a.createElement("div",{className:"fade-in-section ".concat(n?"is-visible":""),ref:c},e.children)}var L=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=function(e){"public"==e.target.id?n.setState({public:!0}):"private"==e.target.id?n.setState({public:!1}):n.setState(Object(I.a)({},e.target.name,e.target.value))},n.handleSubmit=function(){var e=Object(S.a)(C.a.mark((function e(t){var a,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,n.handleError();case 3:if(a=e.sent,console.log(a),!a){e.next=10;break}return n.setState({submitted:""}),e.abrupt("return",null);case 10:r={name:n.state.name,description:n.state.description,message:n.state.message,email:n.state.email,public:n.state.public,date:(new Date).toLocaleString()},_.database().ref("data").push().set(r),n.setState({submitted:" Successfully submitted!"});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={name:"",description:"",message:"",public:!1,email:"",entries:[],data:["hi","hello"],errorMessages:"",submitted:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;_.apps.length||_.initializeApp(T),_.database().ref("data").orderByChild("date").on("value",(function(t){var a=t.val(),n=[];for(var r in a)n.push({name:a[r].name,description:a[r].description,message:a[r].message,public:a[r].public,email:a[r].email,date:a[r].date});e.setState({entries:n})}))}},{key:"handleError",value:function(){var e="";return this.state.name.length<=5&&(e+="Name must be longer than 5 characters\n"),this.state.name.length>=20&&(e+="Name must be longer than 20 characters\n"),this.state.name||(e+="Name is required\n"),this.state.description.length>=100&&(e+="Description must be less than 100 characters\n"),this.state.message||(e+="Message is required\n"),this.state.message.length<=15&&(e+="Message must be longer than 15 characters\n"),this.state.message.length>=500&&(e+="Message must be less than 500 characters\n"),this.state.email||(e+="Email address is required\n"),console.log(e),this.setState({errorMessages:e}),""!=e}},{key:"render",value:function(){return r.a.createElement("div",{class:"content"},r.a.createElement("div",{class:"content-body"},r.a.createElement("div",{style:{whiteSpace:"pre-wrap"},class:"content-body-text guestbook-form"},r.a.createElement("div",{class:"content-title"},"Guestbook"),r.a.createElement("form",{onSubmit:this.handleSubmit},"*Name: ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"name",cols:"40",onChange:this.handleChange}),r.a.createElement("br",null),"Enter a description of yourself: ",r.a.createElement("br",null),r.a.createElement("textarea",{type:"text",name:"description",cols:"40",onChange:this.handleChange}),r.a.createElement("br",null),"*Message:",r.a.createElement("br",null),r.a.createElement("textarea",{rows:"4",cols:"40",name:"message",onChange:this.handleChange}),r.a.createElement("br",null),"*Display message publicly:",r.a.createElement("br",null),r.a.createElement("input",{type:"radio",id:"public",name:"public",value:this.state.public,onChange:this.handleChange,required:!0}),r.a.createElement("label",{for:"public"},"Yes"),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",id:"private",name:"public",value:this.state.public,onChange:this.handleChange}),r.a.createElement("label",{for:"private"},"No"),r.a.createElement("br",null),"Email Address: ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"email",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{value:"Submit",type:"submit"}),this.state.submitted),r.a.createElement("span",{class:"errors"},this.state.errorMessages)),r.a.createElement("div",{class:"guestbook-entries"},this.state.entries.map((function(e,t){return e.public?r.a.createElement(M,null,r.a.createElement("div",{id:t,class:"entry"},r.a.createElement("div",{class:"entry-title"},r.a.createElement("span",{style:{whiteSpace:"nowrap"}},e.name),r.a.createElement("span",{style:{marginLeft:"14px"},class:"entry-description"},e.description)),r.a.createElement("div",{class:"entry-date"},e.date),r.a.createElement("div",{class:"entry-message"},e.message),r.a.createElement("br",null))):null})))))}}]),a}(n.Component),B=(n.Component,a(28),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={activeTab:1,data:{}},n.changeTab=function(e){n.setState({activeTab:e})},n.handleScroll=function(){document.documentElement.scrollTop/document.documentElement.scrollHeight>.25||document.body.scrollTop/document.body.scrollHeight>.25?document.getElementById("topBtn").style.display="block":document.getElementById("topBtn").style.display="none"},n.toTop=function(){document.documentElement.scrollTop=0,document.body.scrollTop=0},n.openLightbox=function(e){var t=document.getElementById("enlargedImg");t.src=e,t.parentElement.style.display="block",document.getElementById("lightbox").style.display="block",window.addEventListener("click",(function e(t){"IMG"!=t.target.tagName&&(document.getElementById("lightbox").style.display="none",this.removeEventListener("click",e))}))},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t={openLightbox:this.openLightbox,toTop:this.toTop,handleScroll:this.handleScroll};return r.a.createElement("div",null,r.a.createElement("head",null,r.a.createElement("title",null,"Spencer Zou"),r.a.createElement("link",{rel:"stylesheet",href:"https://use.typekit.net/rlz2ltd.css"})),r.a.createElement("div",{className:"body"},r.a.createElement("div",{class:"header"},r.a.createElement("h1",{class:"site-title left-nav"},r.a.createElement(u.b,{to:"/home",onClick:this.changeTab.bind(this,1)},"Spencer Zou")),r.a.createElement("div",{class:"right-nav"},r.a.createElement(b,{tabs:[{id:1,title:"home"},{id:2,title:"about"},{id:3,title:"works"},{id:4,title:"photos"},{id:5,title:"fun"},{id:6,title:"contact"}],activeTab:this.state.activeTab,changeTab:this.changeTab}))),r.a.createElement("div",{className:"main-body"},r.a.createElement(d.a,{exact:!0,path:"/",render:function(a){return r.a.createElement(h,Object.assign({},a,{activeTab:e.state.activeTab,functions:t}))}}),r.a.createElement(d.a,{path:"/home",render:function(a){return r.a.createElement(h,Object.assign({},a,{activeTab:e.state.activeTab,functions:t}))}}),r.a.createElement(d.a,{path:"/about",render:function(a){return r.a.createElement(g,Object.assign({},a,{activeTab:e.state.activeTab,functions:t}))}}),r.a.createElement(d.a,{path:"/works",render:function(a){return r.a.createElement(f,Object.assign({},a,{activeTab:e.state.activeTab,functions:t}))}}),r.a.createElement(d.a,{path:"/photos",render:function(a){return r.a.createElement(k,Object.assign({},a,{activeTab:e.state.activeTab,functions:t}))}}),r.a.createElement(d.a,{path:"/fun",render:function(a){return r.a.createElement(w,Object.assign({},a,{activeTab:e.state.activeTab,functions:t}))}}),r.a.createElement(d.a,{path:"/contact",render:function(a){return r.a.createElement(L,Object.assign({},a,{activeTab:e.state.activeTab,functions:t}))}}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(u.a,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.f91bac3a.chunk.js.map