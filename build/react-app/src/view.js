!function(){"use strict";var e=window.wp.element;function a(a){let{title:t,className:n,children:l}=a;return(0,e.createElement)("section",{className:n+" card"},(0,e.createElement)("h2",null,t),l)}function t(e){const a={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};let t="";for(let n in a){const l=Math.floor(e/a[n]);if(0!==l&&(t+=n.repeat(l)),0==(e%=a[n]))return t}return t}function n(e){return e%4==0&&(e%100!=0||e%400==0)}function l(e,a,t,n){return a=Number(a),e=Number(e),"A.D. / C.E."!==n&&(t>753||!(t<753)&&(753===t?a<4||!(a>4)&&e<21:void 0))}function r(e){const{day:a,displayYear:l,era:r,month:c,year:i,yearDisplayOption:o}=e,u=function(e,a,l){const r={1:{acc:"Ianuarias",abl:"Ianuariis"},2:{acc:"Februarias",abl:"Februariis"},3:{acc:"Martias",abl:"Martiis"},4:{acc:"Apriles",abl:"Aprilibus"},5:{acc:"Maias",abl:"Maiis"},6:{acc:"Iunias",abl:"Iuniis"},7:{acc:"Iulias",abl:"Iuliis"},8:{acc:"Augustas",abl:"Augustis"},9:{acc:"Septembres",abl:"Septembribus"},10:{acc:"Octobres",abl:"Octobribus"},11:{acc:"Novembres",abl:"Novembribus"},12:{acc:"Decembres",abl:"Decembribus"}},c=function(e,a,t){const l={};switch(a){case 3:case 5:case 7:case 10:l.ides=15,l.nones=7;break;default:l.ides=13,l.nones=5}switch(a){case 4:case 6:case 9:case 11:l.kalends=31;break;case 2:l.kalends=n(t)&&e>24?30:29;break;default:l.kalends=32}return l}(e,a,l);let i;switch(e){case 1:i=`Kalendis ${r[a].abl}`;break;case c.nones:i=`Nonis ${r[a].abl}`;break;case c.ides:i=`Idibus ${r[a].abl}`;break;default:let o;if(e<c.nones?(o=c.nones-e+1,i=`Nonas ${r[a].acc}`):e<c.ides?(o=c.ides-e+1,i=`Idus ${r[a].acc}`):(o=c.kalends-e+1,i=`Kalendas ${r[12===a?1:a+1].acc}`),2===o)i=`pridie ${i}`;else{const a=t(o).toLowerCase();i=`ante diem ${n(l)&&25===e?"bis ":""}${a} ${i}`}}return i}(a,c,i),s=l?function(e,a,n){let l;return"AUCNotation"===n&&("A.D. / C.E."===a?e+=753:e=754-e,l="ab urbe condita"),"secularNotation"===n&&(l="B.C. / B.C.E."===a?"ante aeram vulgarem":"aerae vulgaris"),"christianNotation"===n&&(l="B.C. / B.C.E."===a?"ante Christum natum":"post Christum natum"),`${t(e)} ${l}`}(i,r,o):"";return`${u} ${s}`}function c(a){let{month:t,day:l,year:r,handleMonthChange:c,handleDayChange:i,handleYearChange:o,era:u,handleEraChange:s}=a;const m=Array.from({length:function(){let e=31;return 4!==t&&6!==t&&9!==t&&11!==t||(e=30),2===t&&(e=n(r)?29:28),e}()},((a,t)=>(0,e.createElement)("option",{key:t+1,value:t+1},t+1)));return(0,e.createElement)("fieldset",null,(0,e.createElement)("label",null,(0,e.createElement)("span",{className:"sr-only"},"Month"),(0,e.createElement)("select",{name:"month",value:t,onChange:c},(0,e.createElement)("option",{value:"1"},"January"),(0,e.createElement)("option",{value:"2"},"February"),(0,e.createElement)("option",{value:"3"},"March"),(0,e.createElement)("option",{value:"4"},"April"),(0,e.createElement)("option",{value:"5"},"May"),(0,e.createElement)("option",{value:"6"},"June"),(0,e.createElement)("option",{value:"7"},"July"),(0,e.createElement)("option",{value:"8"},"August"),(0,e.createElement)("option",{value:"9"},"September"),(0,e.createElement)("option",{value:"10"},"October"),(0,e.createElement)("option",{value:"11"},"November"),(0,e.createElement)("option",{value:"12"},"December"))),(0,e.createElement)("label",null,(0,e.createElement)("span",{className:"sr-only"},"Day"),(0,e.createElement)("select",{name:"day",value:l,onChange:i},m)),(0,e.createElement)("label",null,(0,e.createElement)("span",{className:"sr-only"},"Year"),(0,e.createElement)("input",{name:"year",type:"number",min:"1",max:"3999",step:"1",value:r,onChange:o})),(0,e.createElement)("label",null,(0,e.createElement)("span",{className:"sr-only"},"Era"),(0,e.createElement)("select",{name:"era",value:u,onChange:s},(0,e.createElement)("option",{value:"A.D. / C.E."},"A.D. / C.E."),(0,e.createElement)("option",{value:"B.C. / B.C.E."},"B.C. / B.C.E."))))}function i(a){let{isBeforeRomeFounded:t,isDisplayYearChecked:n,handleDisplayYearChange:l,yearDisplayOption:r,handleYearDisplayOptionChange:c}=a;const i=(0,e.createElement)(e.Fragment,null,(0,e.createElement)("label",null,(0,e.createElement)("input",{required:!0,type:"radio",name:"yearDisplayOption",value:"secularNotation",checked:"secularNotation"===r,onChange:c}),"display year in secular notation"),(0,e.createElement)("label",null,(0,e.createElement)("input",{required:!0,type:"radio",name:"yearDisplayOption",value:"christianNotation",checked:"christianNotation"===r,onChange:c}),"display year in Christian notation"),(0,e.createElement)("label",null,(0,e.createElement)("input",{required:!0,type:"radio",name:"yearDisplayOption",value:"AUCNotation",checked:"AUCNotation"===r,onChange:c,disabled:t||!n}),"display year ",(0,e.createElement)("span",{className:"italics"},"ab urbe condita")));return(0,e.createElement)("fieldset",{className:"options-fieldset"},(0,e.createElement)("label",null,(0,e.createElement)("input",{type:"checkbox",name:"displayYear",onChange:l,checked:n}),"display year"),n?i:null)}function o(a){let{type:t,buttonText:n,onClick:l}=a;return(0,e.createElement)("button",{type:t,onClick:l},n)}function u(){const t=new Date,[n,u]=(0,e.useState)(t.getMonth()+1),[s,m]=(0,e.useState)(t.getDate()),[p,d]=(0,e.useState)(t.getFullYear()),[b,y]=(0,e.useState)("A.D. / C.E."),[h,E]=(0,e.useState)(!1),[C,g]=(0,e.useState)("secularNotation"),[v,f]=(0,e.useState)(!1),[N,D]=(0,e.useState)(null),[k,A]=(0,e.useState)(!1),O=N?r(N):null;return v?(0,e.createElement)(a,{className:"results-card",title:"Roman date:"},(0,e.createElement)("p",null,k?function(e){let a=e;return a=a.replace("ante diem","a.d."),a=a.replace(/(prid|Kal|Id|Non|Ian|Feb|Mart|Apr|Aug|Sept|Oct|Nov|Dec)\w+/g,"$1."),a=a.replace("ab urbe condita","A.U.C."),a=a.replace("ante aeram vulgarem","ante aer. vulg."),a=a.replace("aerae vulgaris","aer. vulg."),a=a.replace("ante Christum natum","a.C.n."),a=a.replace("post Christum natum","p.C.n."),a}(O):O),(0,e.createElement)("label",null,(0,e.createElement)("input",{type:"checkbox",name:"abbreviated",checked:k,onChange:e=>A(!k)}),"display abbreviated date"),(0,e.createElement)("div",{className:"btn-group"},(0,e.createElement)(o,{type:"button",buttonText:"Change options",onClick:function(){m(N.day),u(N.month),d(N.year),y(N.era),E(N.displayYear),g(N.yearDisplayOption),A(!1),f(!1)}}),(0,e.createElement)(o,{type:"button",buttonText:"Convert another date",onClick:()=>{f(!1),m(t.getDate()),u(t.getMonth()+1),d(t.getFullYear()),y("A.D. / C.E."),E(!1),g(null),A(!1),D(null)}}))):(0,e.createElement)(a,{className:"form-card",title:"Find the Roman date for:"},(0,e.createElement)("form",{method:"post",onSubmit:function(e){e.preventDefault();const a=new FormData(e.target);D(function(e){const a={...Object.fromEntries(e.entries())};return a.day=Number(a.day),a.month=Number(a.month),a.year=Number(a.year),a.displayYear?a.displayYear=!0:a.displayYear=!1,a.yearDisplayOption||(a.yearDisplayOption=null),a}(a)),f(!0)}},(0,e.createElement)(c,{month:n,handleMonthChange:function(e){l(s,e.target.value,p,b)&&g(null),u(Number(e.target.value))},day:s,handleDayChange:function(e){l(e.target.value,n,p,b)&&g(null),m(Number(e.target.value))},year:p,handleYearChange:function(e){l(s,n,e.target.value,b)&&g(null),d(Number(e.target.value))},era:b,handleEraChange:function(e){l(s,n,p,e.target.value)&&g(null),y(e.target.value)}}),(0,e.createElement)(i,{isBeforeRomeFounded:l(s,n,p,b),isDisplayYearChecked:h,handleDisplayYearChange:function(e){e.target.checked||g(null),l(s,n,p,b)&&g(null),E(!h)},yearDisplayOption:C,handleYearDisplayOptionChange:function(e){g(e.target.value)}}),(0,e.createElement)("div",{className:"btn-group"},(0,e.createElement)(o,{type:"submit",buttonText:"Submit"}))))}function s(){return(0,e.createElement)(u,null)}addEventListener("DOMContentLoaded",(a=>{const t=document.getElementById("react-app"),n=(0,e.createElement)(s);e.createRoot?(0,e.createRoot)(t).render(n):(0,e.render)(n,t)}))}();