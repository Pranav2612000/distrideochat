(this.webpackJsonpmilap=this.webpackJsonpmilap||[]).push([[27],{575:function(n,e,t){},594:function(n,e,t){"use strict";(function(n){t.d(e,"c",(function(){return s})),t.d(e,"b",(function(){return u})),t.d(e,"a",(function(){return m}));var a=t(66),o=(t(527),t(523)),i=t.n(o),l=t(169),r=t.n(l),c={title:"Error",message:"Invalid Username or Password",position:"tr",autoDismiss:2},s=function(){return{type:a.e}},u=function(){return{type:a.d}},m=function(e,t){console.log("loggin in...");var o={username:e,password:t};return function(t){t({type:a.b}),i.a.post("".concat(n.config.backendURL,"/api/login"),o).then((function(n){console.log(n.data),localStorage.setItem("milaap-auth-token",n.data.token),t(function(n){return{type:a.c,username:n}}(e))})).catch((function(n){var e;t((e=n,{type:a.a,error:e})),t(r.a.error(c))}))}}}).call(this,t(60))},611:function(n,e,t){"use strict";var a=t(538),o=t(163),i=t(164),l=t(167),r=t(166),c=t(165),s=t(1),u=t.n(s),m=t(612),p=t(613),h=t(656),d=t(542),f=t(918),b=t(574),g=t.n(b),z=t(527);u.a.Component},732:function(n,e){},735:function(n,e){function t(n){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id=735},745:function(n,e,t){"use strict";var a=t(1),o=t.n(a),i=o.a.lazy((function(){return t.e(45).then(t.bind(null,872))})),l=o.a.lazy((function(){return Promise.all([t.e(0),t.e(32)]).then(t.bind(null,873))})),r=o.a.lazy((function(){return Promise.all([t.e(0),t.e(46)]).then(t.bind(null,909))})),c=o.a.lazy((function(){return Promise.all([t.e(0),t.e(33)]).then(t.bind(null,874))})),s=o.a.lazy((function(){return Promise.all([t.e(1),t.e(20)]).then(t.bind(null,875))})),u=o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(14),t.e(54)]).then(t.bind(null,876))})),m=o.a.lazy((function(){return t.e(47).then(t.bind(null,877))})),p=o.a.lazy((function(){return t.e(19).then(t.bind(null,913))})),h=o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(24)]).then(t.bind(null,911))})),d=o.a.lazy((function(){return Promise.all([t.e(1),t.e(26)]).then(t.bind(null,878))})),f=o.a.lazy((function(){return t.e(34).then(t.bind(null,879))})),b=o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(36)]).then(t.bind(null,912))})),g=o.a.lazy((function(){return t.e(40).then(t.bind(null,883))})),z=o.a.lazy((function(){return t.e(41).then(t.bind(null,885))})),v=o.a.lazy((function(){return t.e(29).then(t.bind(null,886))})),y=o.a.lazy((function(){return t.e(42).then(t.bind(null,887))})),E=o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(30)]).then(t.bind(null,888))})),k=o.a.lazy((function(){return t.e(48).then(t.bind(null,889))})),P=o.a.lazy((function(){return Promise.all([t.e(1),t.e(21)]).then(t.bind(null,890))})),O=o.a.lazy((function(){return Promise.all([t.e(1),t.e(18)]).then(t.bind(null,914))})),x=o.a.lazy((function(){return t.e(49).then(t.bind(null,892))})),w=o.a.lazy((function(){return Promise.all([t.e(2),t.e(43)]).then(t.bind(null,916))})),R=o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(12)]).then(t.bind(null,893))})),I=o.a.lazy((function(){return t.e(50).then(t.bind(null,894))})),S=o.a.lazy((function(){return t.e(51).then(t.bind(null,895))})),j=o.a.lazy((function(){return Promise.all([t.e(0),t.e(37)]).then(t.bind(null,896))})),D=o.a.lazy((function(){return t.e(52).then(t.bind(null,898))})),N=o.a.lazy((function(){return Promise.all([t.e(0),t.e(38)]).then(t.bind(null,899))})),B=o.a.lazy((function(){return t.e(44).then(t.bind(null,900))})),C=o.a.lazy((function(){return Promise.all([t.e(0),t.e(25)]).then(t.bind(null,901))})),L=o.a.lazy((function(){return Promise.all([t.e(57),t.e(55)]).then(t.bind(null,902))})),U=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:R},{path:"/theme",exact:!0,name:"Theme",component:L},{path:"/theme/colors",name:"Colors",component:L},{path:"/theme/typography",name:"Typography",component:o.a.lazy((function(){return t.e(56).then(t.bind(null,903))}))},{path:"/base",exact:!0,name:"Base",component:l},{path:"/base/cards",name:"Cards",component:l},{path:"/base/forms",name:"Forms",component:u},{path:"/base/switches",name:"Switches",component:z},{path:"/base/tables",name:"Tables",component:v},{path:"/base/tabs",name:"Tabs",component:y},{path:"/base/breadcrumbs",name:"Breadcrumbs",component:i},{path:"/base/carousels",name:"Carousel",component:r},{path:"/base/collapses",name:"Collapse",component:c},{path:"/base/dropdowns",name:"Dropdowns",component:s},{path:"/base/jumbotrons",name:"Jumbotrons",component:m},{path:"/base/list-groups",name:"List Groups",component:p},{path:"/base/navbars",name:"Navbars",component:h},{path:"/base/navs",name:"Navs",component:d},{path:"/base/paginations",name:"Paginations",component:f},{path:"/base/popovers",name:"Popovers",component:b},{path:"/base/progress-bar",name:"Progress Bar",component:g},{path:"/base/tooltips",name:"Tooltips",component:E},{path:"/buttons",exact:!0,name:"Buttons",component:x},{path:"/buttons/buttons",name:"Buttons",component:x},{path:"/buttons/button-dropdowns",name:"Button Dropdowns",component:P},{path:"/buttons/button-groups",name:"Button Groups",component:O},{path:"/buttons/brand-buttons",name:"Brand Buttons",component:k},{path:"/icons",exact:!0,name:"Icons",component:I},{path:"/icons/coreui-icons",name:"CoreUI Icons",component:I},{path:"/icons/flags",name:"Flags",component:S},{path:"/icons/font-awesome",name:"Font Awesome",component:j},{path:"/icons/simple-line-icons",name:"Simple Line Icons",component:D},{path:"/notifications",exact:!0,name:"Notifications",component:N},{path:"/notifications/alerts",name:"Alerts",component:N},{path:"/notifications/badges",name:"Badges",component:B},{path:"/notifications/modals",name:"Modals",component:C},{path:"/widgets",name:"Widgets",component:o.a.lazy((function(){return Promise.all([t.e(2),t.e(22)]).then(t.bind(null,910))}))},{path:"/charts",name:"Charts",component:w},{path:"/users",exact:!0,name:"Users",component:o.a.lazy((function(){return t.e(39).then(t.bind(null,904))}))},{path:"/users/:id",exact:!0,name:"User Details",component:o.a.lazy((function(){return t.e(35).then(t.bind(null,905))}))},{path:"/rooms/:roomname",exact:!0,name:"Room",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(10)]).then(t.bind(null,906))}))}];e.a=U},917:function(n,e,t){"use strict";t.r(e),function(n){var a=t(539),o=t.n(a),i=t(538),l=t(12),r=t(540),c=t(163),s=t(164),u=t(419),m=t(166),p=t(165),h=t(1),d=t.n(h),f=t(20),b=t(168),g=t(614),z=t(523),v=t.n(z),y=t(530),E=t.n(y),k=(t(611),t(112)),P=t(527),O=t.n(P),x=t(594),w=(t(575),t(533)),R=t(745),I=E()("".concat(n.config.backendURL,"/")),S=(d.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(13)]).then(t.bind(null,546))})),d.a.lazy((function(){return t.e(53).then(t.bind(null,868))})),d.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(9)]).then(t.bind(null,869))})));d.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(11)]).then(t.bind(null,870))}));function j(n){var e=[];return void 0===n?{}:(n.forEach((function(n,t){var a={};a.name=n,a.url="/rooms/"+n,a.icon="icon-screen-desktop",a.state=!0,e.push(a)})),e)}function D(n){var e=[];return void 0===n?{}:(n.forEach((function(n,t){var a={};a.name=n,a.icon="icon-user",a.state=!1,e.push(a)})),e)}var N=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var s;Object(c.a)(this,a),(s=t.call(this,e)).getRooms=Object(r.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("milaap-auth-token"),a={"milaap-auth-token":t},e.next=4,v.a.post("".concat(n.config.backendURL,"/api/user/getrooms"),{},{headers:a}).then((function(e){if(201!==e.status){console.log(e);var t=e.data.rooms;s.setState({rooms:t});var a=j(t);v.a.post("".concat(n.config.backendURL,"/api/room/getActive"),{},{headers:{"milaap-auth-token":localStorage.getItem("milaap-auth-token")}}).then((function(n){console.log(n);var e=n.data.active;console.log(e);var t=D(e);console.log(Object(l.a)({},a)),s.setState({navigation:{items:[{title:!0,name:"Friends",icon:"icon-puzzle"}].concat(Object(i.a)(t),[{title:!0,name:"Rooms",icon:"icon-puzzle",children:[{name:"No Messages Yet.",icon:"icon-puzzle",badge:{variant:"info",text:"Add"},class:""}]}],Object(i.a)(a))}})})).catch((function(n){console.log(n)}))}else s.setState({navigation:{items:[{title:!0,name:"Rooms",icon:"icon-puzzle"},{icon:"icon-user",name:"Login To View Rooms",url:"/login"}]}})})).catch((function(n){console.log(n)}));case 4:case"end":return e.stop()}}),e)}))),s.loading=function(){return d.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")};var m=D(void 0),p=j(void 0);return s.state={rooms:[],userToken:localStorage.getItem("milaap-auth-token"),navigation:{items:[{title:!0,name:"Friends",icon:"icon-puzzle"},m,{title:!0,name:"Rooms",icon:"icon-puzzle",children:[{name:"No Messages Yet.",icon:"icon-puzzle",badge:{variant:"info",text:"Add"},class:""}]},p]}},null===s.state.userToken?Object(u.a)(s):(s.getRooms(),s.state={navigation:{items:[{title:!0,name:"Friends",icon:"icon-puzzle"},m,{title:!0,name:"Rooms",icon:"icon-puzzle",children:[{name:"No Messages Yet.",icon:"icon-puzzle",badge:{variant:"info",text:"Add"},class:""}]},p]}},I.on("newRoom",(function(n){console.log("ROOM ADDED"),console.log(n),s.getRooms()})),s)}return Object(s.a)(a,[{key:"signOut",value:function(n){n.preventDefault(),this.props.logout(),localStorage.removeItem("milaap-auth-token"),this.props.history.push("/login")}},{key:"componentDidMount",value:function(){void 0!==this.props.location.state&&P.store.addNotification({title:"Hi ".concat(this.props.location.state),message:"Welcome to Dashboard",type:"success",container:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:3e3,pauseOnHover:!0}})}},{key:"render",value:function(){var n=this;if(null===localStorage.getItem("milaap-auth-token")){if(this.props.location.pathname.match("/rooms/")){var e=this.props.location.pathname.split("/")[2];return d.a.createElement(f.c,{to:{pathname:"/join",room:e}})}return d.a.createElement(f.c,{to:{pathname:"/login"}})}return console.log(this.props),d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"app"},d.a.createElement(w.b,{className:"navbar navbar-dark bg-dark",fixed:!0},d.a.createElement(h.Suspense,{fallback:this.loading()},d.a.createElement(S,{onLogout:function(e){return n.signOut(e)}}))),d.a.createElement("div",{className:"app-body"},d.a.createElement(O.a,null),d.a.createElement(w.d,{fixed:!0,display:"lg"},d.a.createElement(w.g,null),d.a.createElement(w.f,null),d.a.createElement(h.Suspense,null,d.a.createElement(w.i,Object.assign({navConfig:this.state.navigation},this.props,{router:b}))),d.a.createElement(w.e,null),d.a.createElement(w.h,null)),d.a.createElement(g.a,{fluid:!0,id:"main-container"},d.a.createElement(h.Suspense,{fallback:this.loading()},d.a.createElement(f.g,null,R.a.map((function(n,e){return n.component?d.a.createElement(f.d,{key:e,path:n.path,exact:n.exact,name:n.name,render:function(e){return d.a.createElement(n.component,e)}}):null})),d.a.createElement(f.c,{from:"/",to:"/dashboard"})))))))}}]),a}(h.Component);e.default=Object(k.connect)((function(n){return{}}),(function(n){return{logout:function(){return n(x.b())}}}))(N)}.call(this,t(60))}}]);
//# sourceMappingURL=27.fb549733.chunk.js.map