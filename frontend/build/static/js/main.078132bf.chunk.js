(this.webpackJsonpreveal=this.webpackJsonpreveal||[]).push([[0],{48:function(e,t,a){e.exports=a(94)},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},81:function(e,t){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(13),o=a.n(i),l=(a(53),a(54),a(6)),r=a(4),u=(a(55),a(108)),s=a(44),b=a.n(s),g=a(7),d=a(23),m=a.n(d);a(84),a(87);m.a.initializeApp({apiKey:"AIzaSyBVzegGCeKj4egAu1MNhq6hKxJdqegHN1c",authDomain:"virtual-launch.firebaseapp.com",databaseURL:"https://virtual-launch.firebaseio.com",projectId:"virtual-launch",storageBucket:"virtual-launch.appspot.com",messagingSenderId:"184963675978",appId:"1:184963675978:web:6ae29733659b51950af3b3"});var p=m.a.firestore(),f=(m.a.performance(),{button:{background:"#f50057",color:"white",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"},buttonGreen:{background:"linear-gradient(164deg, rgba(2,0,36,1) 0%, rgba(13,121,9,1) 0%, rgba(8,182,5,1) 37%, rgba(49,196,3,1) 72%, rgba(1,255,0,1) 100%)",boxShadow:"0 3px 5px 2px rgba(33, 203, 243, .30)"}}),h=b()("https://inaugurate.herokuapp.com");var y=function(){var e=Object(n.useState)("Karthik"),t=Object(r.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)("Abhijith"),s=Object(r.a)(o,2),b=s[0],d=s[1],m=Object(n.useState)("Atul"),y=Object(r.a)(m,2),k=y[0],j=y[1],O=Object(n.useState)("Anubhav"),v=Object(r.a)(O,2),E=v[0],w=v[1],x=Object(n.useState)("secondary"),S=Object(r.a)(x,2),A=S[0],K=S[1],N=Object(n.useState)("secondary"),C=Object(r.a)(N,2),I=C[0],M=C[1],X=Object(n.useState)("secondary"),z=Object(r.a)(X,2),D=z[0],J=z[1],G=Object(n.useState)("secondary"),R=Object(r.a)(G,2),q=R[0],F=R[1],W=Object(g.b)((function(){return{opacity:0}})),Y=Object(r.a)(W,2),_=Y[0],B=Y[1],Q=Object(g.b)((function(){return{opacity:0}})),H=Object(r.a)(Q,2),L=H[0],U=H[1],V=Object(g.b)((function(){return{opacity:0}})),P=Object(r.a)(V,2),T=P[0],Z=P[1],$=Object(g.b)((function(){return{opacity:0}})),ee=Object(r.a)($,2),te=ee[0],ae=ee[1],ne=function(e){"single"===e?(K("green"),i("Karthik says yes!"),B({opacity:1,config:{duration:5e3}})):(K("primary"),i("Karthik"),B({opacity:0,config:{duration:1e3}}))},ce=function(e){"single"===e?(M("green"),d("Abhijith says yes!"),U({opacity:1,config:{duration:5e3}})):(M("primary"),d("Abhijith"),U({opacity:0,config:{duration:1e3}}))},ie=function(e){"single"===e?(J("green"),j("Atul says yes!"),Z({opacity:1,config:{duration:5e3}})):(J("primary"),j("Atul"),Z({opacity:0,config:{duration:1e3}}))},oe=function(e){"single"===e?(F("green"),w("Anubhav says yes!"),ae({opacity:1,config:{duration:5e3}})):(F("primary"),w("Anubhav"),ae({opacity:0,config:{duration:1e3}}))};Object(n.useEffect)((function(){p.collection("buttons").get().then((function(e){e.forEach((function(e){1===e.get("index")&&e.get("onclick")?ne("single"):2===e.get("index")&&e.get("onclick")?ce("single"):3===e.get("index")&&e.get("onclick")?ie("single"):4===e.get("index")&&e.get("onclick")&&oe("single")}))}))}),[]);var le=function(e,t){h.emit("button-click",e),1===t?p.collection("buttons").doc("4FmDWawKs8m7lXilAXxK").update({onclick:!0}):2===t?p.collection("buttons").doc("JYEQc1CRKe8WlRkwMFOh").update({onclick:!0}):3===t?p.collection("buttons").doc("rspMIEbINXlMlSghlXYo").update({onclick:!0}):4===t&&p.collection("buttons").doc("wahmmxw4mxySc1Jvqdf1").update({onclick:!0})};h.on("button-clicked",(function(e){switch(e){case a:ne("single");break;case b:ce("single");break;case k:ie("single");break;case E:oe("single")}}));var re=function(e,t){h.emit("button-doubleclick",e),1===t?p.collection("buttons").doc("4FmDWawKs8m7lXilAXxK").update({onclick:!1}):2===t?p.collection("buttons").doc("JYEQc1CRKe8WlRkwMFOh").update({onclick:!1}):3===t?p.collection("buttons").doc("rspMIEbINXlMlSghlXYo").update({onclick:!1}):4===t&&p.collection("buttons").doc("wahmmxw4mxySc1Jvqdf1").update({onclick:!1})};return h.on("button-doubleclicked",(function(e){switch(e){case a:ne("double");break;case b:ce("double");break;case k:ie("double");break;case E:oe("double")}})),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"buttonwithgif"},c.a.createElement(g.a.img,{src:"https://webstockreview.net/images/flame-clipart-oil-18.gif",alt:"diya",style:_}),c.a.createElement(u.a,{variant:"contained",style:Object(l.a)(Object(l.a)({},f.button),"green"===A?f.buttonGreen:{}),size:"large",onClick:function(){le(a,1)},onDoubleClick:function(){re(a,1)}},a," ",c.a.createElement("br",null))),c.a.createElement("div",{className:"buttonwithgif"},c.a.createElement(g.a.img,{src:"https://webstockreview.net/images/flame-clipart-oil-18.gif",alt:"diya",style:L}),c.a.createElement(u.a,{variant:"contained",style:Object(l.a)(Object(l.a)({},f.button),"green"===I?f.buttonGreen:{}),size:"large",onClick:function(){le(b,2)},onDoubleClick:function(){re(b,2)}},b," ",c.a.createElement("br",null))),c.a.createElement("div",{className:"buttonwithgif"},c.a.createElement(g.a.img,{src:"https://webstockreview.net/images/flame-clipart-oil-18.gif",alt:"diya",style:T}),c.a.createElement(u.a,{variant:"contained",style:Object(l.a)(Object(l.a)({},f.button),"green"===D?f.buttonGreen:{}),size:"large",onClick:function(){le(k,3)},onDoubleClick:function(){re(k,3)}},k," ",c.a.createElement("br",null))),c.a.createElement("div",{className:"buttonwithgif"},c.a.createElement(g.a.img,{src:"https://webstockreview.net/images/flame-clipart-oil-18.gif",alt:"diya",style:te}),c.a.createElement(u.a,{variant:"contained",style:Object(l.a)(Object(l.a)({},f.button),"green"===q?f.buttonGreen:{}),size:"large",onClick:function(){le(E,4)},onDoubleClick:function(){re(E,4)}},E," ",c.a.createElement("br",null))))};var k=function(){return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"app__body"},c.a.createElement("div",{className:"app__buttoncard"},c.a.createElement(y,null))))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.078132bf.chunk.js.map