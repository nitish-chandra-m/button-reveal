(this.webpackJsonpreveal=this.webpackJsonpreveal||[]).push([[0],{47:function(e,t,n){e.exports=n(90)},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},80:function(e,t){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(11),o=n.n(i),l=(n(52),n(53),n(7)),r=n(4),u=(n(54),n(104)),s=n(44),b=n.n(s),d=n(8),g=n(27),p=n.n(g),f=(n(83),b()("https://shielded-tor-10043.herokuapp.com/"));p.a.initializeApp({apiKey:"AIzaSyALG3r2WCr0Lzgnie3_uVZx7uv_N_X_MRs",authDomain:"button-reveal.firebaseapp.com",databaseURL:"https://button-reveal.firebaseio.com",projectId:"button-reveal",storageBucket:"button-reveal.appspot.com",messagingSenderId:"1091722635432",appId:"1:1091722635432:web:26a130b7793b16e0c2fa9d"});var m=p.a.firestore();var y=function(){var e=Object(a.useState)("Karthik"),t=Object(r.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)("Abhijith"),s=Object(r.a)(o,2),b=s[0],g=s[1],p=Object(a.useState)("Atul"),y=Object(r.a)(p,2),k=y[0],v=y[1],h=Object(a.useState)("secondary"),j=Object(r.a)(h,2),O=j[0],E=j[1],w=Object(a.useState)("secondary"),x=Object(r.a)(w,2),C=x[0],I=x[1],S=Object(a.useState)("secondary"),z=Object(r.a)(S,2),A=z[0],G=z[1],K=Object(d.b)((function(){return{opacity:0}})),N=Object(r.a)(K,2),_=N[0],B=N[1],D=Object(d.b)((function(){return{opacity:0}})),M=Object(r.a)(D,2),J=M[0],Q=M[1],L=Object(d.b)((function(){return{opacity:0}})),U=Object(r.a)(L,2),V=U[0],Z=U[1],q={button:{background:"#f50057",color:"white",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"},buttonGreen:{background:"linear-gradient(164deg, rgba(2,0,36,1) 0%, rgba(13,121,9,1) 0%, rgba(8,182,5,1) 37%, rgba(49,196,3,1) 72%, rgba(1,255,0,1) 100%)",boxShadow:"0 3px 5px 2px rgba(33, 203, 243, .30)"}},F=function(e){"single"===e?(E("green"),i("Karthik says yes!"),B({opacity:1,config:{duration:5e3}})):(E("primary"),i("Karthik"),B({opacity:0,config:{duration:1e3}}))},H=function(e){"single"===e?(I("green"),g("Abhijith says yes!"),Q({opacity:1,config:{duration:5e3}})):(I("primary"),g("Abhijith"),Q({opacity:0,config:{duration:1e3}}))},P=function(e){"single"===e?(G("green"),v("Atul says yes!"),Z({opacity:1,config:{duration:5e3}})):(G("primary"),v("Atul"),Z({opacity:0,config:{duration:1e3}}))};Object(a.useEffect)((function(){m.collection("buttons").get().then((function(e){e.forEach((function(e){1===e.get("index")&&e.get("onclick")?F("single"):2===e.get("index")&&e.get("onclick")?H("single"):3===e.get("index")&&e.get("onclick")&&P("single")}))}))})),f.on("connected-event",(function(e){console.log(e)}));var R=function(e,t){f.emit("button-click",e),1===t?m.collection("buttons").doc("1symz0Izsxf9rBtuCpUK").update({onclick:!0}):2===t?m.collection("buttons").doc("9EqgM6Q5BIOEGC0vPFKs").update({onclick:!0}):3===t&&m.collection("buttons").doc("Vmvil9D6JZbHYGvnM5IQ").update({onclick:!0})};f.on("button-clicked",(function(e){switch(e){case n:F("single");break;case b:H("single");break;case k:P("single")}}));var Y=function(e,t){f.emit("button-doubleclick",e),1===t?m.collection("buttons").doc("1symz0Izsxf9rBtuCpUK").update({onclick:!1}):2===t?m.collection("buttons").doc("9EqgM6Q5BIOEGC0vPFKs").update({onclick:!1}):3===t&&m.collection("buttons").doc("Vmvil9D6JZbHYGvnM5IQ").update({onclick:!1})};return f.on("button-doubleclicked",(function(e){switch(e){case n:F("double");break;case b:H("double");break;case k:P("double")}})),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"buttonwithgif"},c.a.createElement(d.a.img,{src:"https://webstockreview.net/images/flame-clipart-oil-18.gif",alt:"diya",style:_}),c.a.createElement(u.a,{variant:"contained",style:Object(l.a)(Object(l.a)({},q.button),"green"===O?q.buttonGreen:{}),size:"large",onClick:function(){R(n,1)},onDoubleClick:function(){Y(n,1)}},n," ",c.a.createElement("br",null))),c.a.createElement("div",{className:"buttonwithgif"},c.a.createElement(d.a.img,{src:"https://webstockreview.net/images/flame-clipart-oil-18.gif",alt:"diya",style:J}),c.a.createElement(u.a,{variant:"contained",style:Object(l.a)(Object(l.a)({},q.button),"green"===C?q.buttonGreen:{}),size:"large",onClick:function(){R(b,2)},onDoubleClick:function(){Y(b,2)}},b," ",c.a.createElement("br",null))),c.a.createElement("div",{className:"buttonwithgif"},c.a.createElement(d.a.img,{src:"https://webstockreview.net/images/flame-clipart-oil-18.gif",alt:"diya",style:V}),c.a.createElement(u.a,{variant:"contained",style:Object(l.a)(Object(l.a)({},q.button),"green"===A?q.buttonGreen:{}),size:"large",onClick:function(){R(k,3)},onDoubleClick:function(){Y(k,3)}},k," ",c.a.createElement("br",null))))};var k=function(){return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"app__body"},c.a.createElement("div",{className:"app__buttoncard"},c.a.createElement(y,null))))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.6e624363.chunk.js.map