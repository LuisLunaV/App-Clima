(()=>{"use strict";function e(e,n,t,r,a,c,o){try{var i=e[c](o),s=i.value}catch(e){return void t(e)}i.done?n(s):Promise.resolve(s).then(r,a)}var n=function(){var n,t=(n=regeneratorRuntime.mark((function e(n){var t,r,c,o,i,s,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=").concat("1af1874b3ade00c4a0eff7608bd6f58c"),e.prev=1,e.next=4,fetch(t);case 4:if(!(r=e.sent).ok){e.next=16;break}return e.next=8,r.json();case 8:return c=e.sent,o=c.main,i=c.name,s=c.sys,u=c.weather,e.abrupt("return",{main:o,name:i,sys:s,weather:u});case 16:throw a.innerHTML="<li>Ciudad no valida</li>","Ciudad no valida";case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(1),e.t0;case 23:case"end":return e.stop()}}),e,null,[[1,20]])})),function(){var t=this,r=arguments;return new Promise((function(a,c){var o=n.apply(t,r);function i(n){e(o,a,c,i,s,"next",n)}function s(n){e(o,a,c,i,s,"throw",n)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}();function t(e,n,t,r,a,c,o){try{var i=e[c](o),s=i.value}catch(e){return void t(e)}i.done?n(s):Promise.resolve(s).then(r,a)}function r(e){return function(){var n=this,r=arguments;return new Promise((function(a,c){var o=e.apply(n,r);function i(e){t(o,a,c,i,s,"next",e)}function s(e){t(o,a,c,i,s,"throw",e)}i(void 0)}))}}var a=document.querySelector(".ul-list"),c=document.querySelector("#button-addon1"),o=document.querySelector("#textBox"),i=new Date,s=function(e){var n=e.main,t=e.name,r=e.sys,c=e.weather,o='<li>\n    <p class="fs-5">Hora actual</p>\n    <p class="fs-4">'.concat(i.getHours(),":").concat(i.getMinutes(),"</p>\n    <img src='").concat("http://openweathermap.org/img/wn","/").concat(c[0].icon,'@2x.png\'/>\n    <p class="fs-1">').concat(parseFloat(n.temp-273.15,10).toFixed(2),'&#x2103</p>\n    <p class="fs-4">').concat(r.country,'</p>\n    <p class="fs-4">').concat(t,"</p>\n    </li>\n    "),s=document.createElement("div");return s.innerHTML=o,a.append(s.firstElementChild),s.firstElementChild};c.addEventListener("click",r(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=document.querySelector("li"),""!=!o.value){e.next=13;break}if(!a.removeChild(t)){e.next=10;break}return e.t0=s,e.next=6,n(o.value);case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 10:console.log("no hay nodos");case 11:e.next=14;break;case 13:a.innerHTML="<li>Ingresa el nombre de tu ciudad</li>";case 14:case"end":return e.stop()}}),e)}))))})();