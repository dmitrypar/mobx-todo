(this["webpackJsonpmobx-todo"]=this["webpackJsonpmobx-todo"]||[]).push([[0],{31:function(n,t,e){"use strict";e.r(t);var r=e(2),o=e(1),c=e.n(o),i=e(17),a=e.n(i),u=e(7),d=e(21),b=e(3),l=e(4);function s(){var n=Object(b.a)(["\n  margin: 0 10px -2px 0;\n"]);return s=function(){return n},n}function f(){var n=Object(b.a)(["\n  background-color: ",";\n"]);return f=function(){return n},n}function j(){var n=Object(b.a)(["\n  display: flex;\n  margin: 0 0 10px 0;\n  align-items: center;\n  color: ",";\n"]);return j=function(){return n},n}function x(){var n=Object(b.a)(["\n  padding: 5px;\n  border: 2px solid ",";\n  border-radius: 3px;\n  color: ",";\n  background-color: Transparent;\n"]);return x=function(){return n},n}function p(){var n=Object(b.a)(["\n  display: flex;\n  margin: 50px 0 50px 0;\n"]);return p=function(){return n},n}function O(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n"]);return O=function(){return n},n}function g(){var n=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 20px;\n  margin: 10px;\n"]);return g=function(){return n},n}function v(){var n=Object(b.a)(["\n  padding: 5px;\n  border: 2px solid ",";\n  margin-right: 20px;\n"]);return v=function(){return n},n}var h="blue",m=l.a.input(v(),h),T=l.a.div(g()),k=l.a.div(O()),y=l.a.form(p()),C=l.a.button(x(),h,h),F=l.a.div(j(),h),w=Object(l.a)(F)(f(),(function(n){return n.checked?"#F3FFD5":"Transparent"})),N=l.a.input(s()),L=Object(u.b)("rootTree")(Object(u.c)((function(n){var t=n.rootTree,e=o.useState(""),c=Object(d.a)(e,2),i=c[0],a=c[1];if(!t)return null;var u=t.todos.filter((function(n){return n.labelNote.toLowerCase().indexOf(i.toLowerCase())>-1}));return Object(r.jsx)(T,{children:Object(r.jsxs)(k,{children:[Object(r.jsxs)(y,{onSubmit:function(n){if(n.preventDefault(),!t)return null;t.newTask(i),a("")},children:[Object(r.jsx)(m,{value:i,onChange:function(n){var t=n.target.value;a(t)},type:"text"}),Object(r.jsx)(C,{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]}),u.map((function(n){var e=n.id,o=n.labelNote,c=n.done;return Object(r.jsxs)(w,{checked:c,children:[Object(r.jsx)(N,{onClick:function(){return function(n){t.toggle(n)}(e)},type:"checkbox"}),o]},e)}))]})})}))),S=e(22),D=e(15),B=e(5),E=e(33),I=B.b.model("Notes",{id:B.b.identifier,labelNote:B.b.string,done:B.b.boolean}),J=B.b.model("List",{todos:B.b.array(I)}).actions((function(n){return{newTask:function(t){var e=Object(E.a)();Object(B.a)(n,Object(D.a)(Object(D.a)({},n),{},{todos:[].concat(Object(S.a)(n.todos),[{id:e,labelNote:t,done:!1}])}))}}})).actions((function(n){return{toggle:function(t){n.todos.forEach((function(n){t===n.id&&(n.done=!n.done)}))}}})),P=function(){var n={rootTree:J.create({todos:[{id:"1",labelNote:"\u043a\u0443\u043f\u0438\u0442\u044c \u043a\u043e\u0444\u0435",done:!1}]})}.rootTree;return n?Object(r.jsx)(u.a,{rootTree:n,children:Object(r.jsx)(L,{})}):null},M=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,34)).then((function(t){var e=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;e(n),r(n),o(n),c(n),i(n)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(P,{})}),document.getElementById("root")),M()}},[[31,1,2]]]);
//# sourceMappingURL=main.438aa64a.chunk.js.map