(this["webpackJsonpbudget-tracker"]=this["webpackJsonpbudget-tracker"]||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),u=n.n(c),l=n(5),s=n(6);var m=function(){var e=Object(a.useRef)(),t=Object(a.useReducer)((function(e,t){switch(t.type){case"add":return[].concat(Object(l.a)(e),[parseFloat(t.name)]);case"remove":return e.filter((function(e,n){return n!==t.index}));default:return e}}),[]),n=Object(s.a)(t,2),c=n[0],u=n[1],m=c.reduce((function(e,t){return e+t}),0);return r.a.createElement("div",{className:"container text-center"},r.a.createElement("h1",null,"Create a Budget List!"),r.a.createElement("form",{className:"form-group mt-5",onSubmit:function(t){t.preventDefault(),u({type:"add",name:e.current.value}),e.current.value=""}},r.a.createElement("input",{className:"form-control",ref:e,type:"number",step:".01",placeholder:"$20.00"}),r.a.createElement("button",{className:"btn btn-success mt-3 mb-5",type:"submit"},"Add to List")),r.a.createElement("h4",null,"My Transaction List:"),r.a.createElement("h6",null,"Total Amount Spent: ",m),r.a.createElement("ul",{className:"list-group"},c.map((function(e,t){return r.a.createElement("li",{className:"list-group-item"},e," ",r.a.createElement("button",{className:"btn btn-danger ml-5",onClick:function(){return u({type:"remove",index:t})}},"Remove"))}))))};u.a.render(r.a.createElement(m,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.a053db4b.chunk.js.map