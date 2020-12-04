(this.webpackJsonpverbs=this.webpackJsonpverbs||[]).push([[4],{95:function(n,e,t){"use strict";t.d(e,"a",(function(){return b}));var a=t(3),i=(t(0),t(48)),r=t(24),c=t(20);function s(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n  font-size: 1rem;\n  color: ",";\n\n  &.disabled {\n    color: ",";\n  }\n"]);return s=function(){return n},n}var l=t(22).a.text,o=c.c.div(s(),l.accent,l.main),b=function(n){var e=n.value,t=n.disabled,r=void 0!==t&&t,c=Object(i.a)({disabled:r});return Object(a.jsx)(o,{className:c,children:e})}},96:function(n,e,t){"use strict";var a=t(0),i=function(n){Object(a.useEffect)(n,[])};e.a=function(n){i((function(){n()}))}},98:function(n,e,t){"use strict";t.r(e),t.d(e,"IrregularRuEn",(function(){return un}));var a=t(61),i=t(3),r=t(0),c=t(25),s=t(96),l=t(19),o=t(27),b=t(62),d=t(35),j=t(15),u=t(31),f=t(28),p=t(95),O=t(37),m=t(24),x=t(20),v=t(22);function h(){var n=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  padding: 0.5rem 1rem;\n\n  .label {\n    width: 40%;\n    font-size: ",";\n  }\n\n  .control {\n    width: 60%;\n  }\n"]);return h=function(){return n},n}var g=v.a.size,k=x.c.div(h(),g.mini),w=function(n){var e=n.label,t=n.children,a=n.icon,r="error"===a,c="success"===a||r,s=r?"close":"check",l=r?"error":"success";return Object(i.jsxs)(k,{children:[Object(i.jsx)("div",{className:"label",children:e}),Object(i.jsx)("div",{className:"control",children:t}),c&&Object(i.jsx)(O.a,{name:s,size:"small",color:l})]})},N=t(48);function S(){var n=Object(m.a)(["\n  display: block;\n  position: relative;\n  width: 100%;\n\n  input {\n    width: 100%;\n    box-sizing: border-box;\n    border: 2px solid ",";\n    border-radius: 4px;\n    font-size: ",";\n    padding: 0.5rem;\n    font-family: inherit;\n    background-color: ",";\n\n    &::placeholder {\n      color: ",";\n    }\n\n    &.error {\n      color: ",";\n      text-decoration: line-through;\n    }\n\n    &:focus {\n      outline: 0;\n      border: 2px solid ",";\n    }\n\n    &:disabled {\n      background-color: ",";\n    }\n  }\n\n  .icon {\n    position: absolute;\n    right: 0.5rem;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n\n  .message {\n    position: absolute;\n    right: 1.8rem;\n    top: 50%;\n    transform: translateY(-50%);\n    color: ",";\n    font-size: ",";\n  }\n"]);return S=function(){return n},n}var P=v.a.border,y=v.a.size,z=v.a.text,C=v.a.bg,I=x.c.div(S(),P.input,y.mini,C.input,z.main,z.main,P.focus,C.input,z.error,y.mini),R=Object(r.forwardRef)((function(n,e){var t=n.value,a=n.placeholder,c=n.onChange,s=n.name,l=void 0===s?"":s,o=n.status,b=void 0===o?"normal":o,d=n.message,j=void 0===d?"":d,u=n.disabled,f=void 0!==u&&u,p=n.tabIndex,m=Object(r.useCallback)((function(n){c(n.target.value)}),[c]),x="success"===b,v="error"===b,h=v&&!!j,g=Object(N.a)("input",{error:v});return Object(i.jsxs)(I,{children:[Object(i.jsx)("input",{ref:e,name:l,value:t,disabled:f,placeholder:a,onChange:m,className:g,tabIndex:p}),x&&Object(i.jsx)(O.a,{name:"check",size:"small",color:"success"}),v&&Object(i.jsx)(O.a,{name:"close",size:"small",color:"error"}),h&&Object(i.jsx)("span",{className:"message",children:j})]})}));function E(){var n=Object(m.a)(["\n  font-size: 0.9rem;\n  font-weight: 500;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 0.7rem 1.5rem;\n  min-width: 6rem;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n\n  &:disabled {\n    background-color: ",";\n    color: ",";\n    pointer-events: none;\n  }\n\n  &:focus {\n    outline: 0;\n    border: 1px solid ",";\n  }\n"]);return E=function(){return n},n}var F=v.a.bg,J=v.a.text,Y=v.a.border,A=x.c.button(E(),F.secondaryAccent,J.accent,F.secondary,J.main,Y.focus),B=Object(r.forwardRef)((function(n,e){var t=n.onClick,a=n.children,r=n.tabIndex,c=n.disabled,s=void 0!==c&&c;return Object(i.jsx)(A,{ref:e,tabIndex:r,disabled:s,onClick:t,children:a})}));B.displayName="Button";function W(){var n=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1rem;\n"]);return W=function(){return n},n}var q=x.c.div(W()),D=function(n){var e=n.children;return Object(i.jsx)(q,{children:e})};function G(){var n=Object(m.a)(["\n  display: block;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  border-radius: 4px;\n  background: linear-gradient(90deg, ",", ",", ",");\n  background-size: 400% 100%;\n  animation: loading 1.5s ease infinite;\n\n  @keyframes loading {\n    0% {\n      background-position: 100% 50%;\n    }\n    100% {\n      background-position: 0 50%;\n    }\n  }\n"]);return G=function(){return n},n}var H=v.a.skeleton,K=H.start,L=H.middle,M=H.end,Q=Object(x.b)(G(),K,L,M);function T(){var n=Object(m.a)(["\n  ",";\n\n  height: 2rem;\n"]);return T=function(){return n},n}var U=x.c.div(T(),Q);function V(){var n=Object(m.a)(["\n  ",";\n\n  height: 1rem;\n"]);return V=function(){return n},n}var X=x.c.div(V(),Q);function Z(){var n=Object(m.a)(["\n  display: block;\n\n  .label-01 {\n    max-width: 80%;\n  }\n\n  .label-02 {\n    max-width: 40%;\n  }\n\n  .label-03 {\n    max-width: 60%;\n  }\n"]);return Z=function(){return n},n}var $=x.c.div(Z()),_=function(){return Object(i.jsxs)($,{children:[Object(i.jsx)(p.a,{disabled:!0,value:"loading..."}),Object(i.jsx)(w,{label:Object(i.jsx)(X,{className:"label-01"}),children:Object(i.jsx)(U,{})}),Object(i.jsx)(w,{label:Object(i.jsx)(X,{className:"label-02"}),children:Object(i.jsx)(U,{})}),Object(i.jsx)(w,{label:Object(i.jsx)(X,{className:"label-03"}),children:Object(i.jsx)(U,{})})]})},nn=t(9);function en(){var n=Object(m.a)(["\n  display: block;\n\n  .label-01 {\n    max-width: 80%;\n  }\n\n  .label-02 {\n    max-width: 40%;\n  }\n\n  .label-03 {\n    max-width: 60%;\n  }\n"]);return en=function(){return n},n}var tn=x.c.div(en()),an={disabled:!0,value:"",onChange:function(){}},rn=function(){return Object(i.jsxs)(tn,{children:[Object(i.jsx)(p.a,{disabled:!0,value:"waiting for start..."}),Object(i.jsx)(w,{label:"Infinitive",children:Object(i.jsx)(R,Object(nn.a)({placeholder:"infinitive"},an))}),Object(i.jsx)(w,{label:"Past Simple",children:Object(i.jsx)(R,Object(nn.a)({placeholder:"past simple"},an))}),Object(i.jsx)(w,{label:"Past Participle",children:Object(i.jsx)(R,Object(nn.a)({placeholder:"past participle"},an))})]})},cn=t(51);function sn(){var n=Object(m.a)(["\n  display: block;\n  padding: 1rem 1rem;\n\n  h3 {\n    font-size: 0.9rem;\n    font-weight: 500;\n    color: ",";\n    padding-bottom: 0.5rem;\n  }\n\n  .row {\n    display: flex;\n    font-size: 0.8rem;\n    padding: 0.25rem 0;\n\n    .label {\n      width: 25%;\n    }\n  }\n"]);return sn=function(){return n},n}var ln=v.a.text,on=x.c.div(sn(),ln.accent),bn=function(){var n=Object(c.f)(cn.d),e=Object(c.f)(cn.b),t=Object(c.f)(cn.a),a=Object(c.f)(cn.e),r=Object(c.f)(cn.c);return Object(i.jsxs)(on,{children:[Object(i.jsx)("h3",{children:"Score"}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("span",{className:"label",children:"Passed"}),Object(i.jsxs)("span",{className:"value",children:[e," / ",n]})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("span",{className:"label",children:"Correct"}),Object(i.jsx)("span",{className:"value",children:t})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("span",{className:"label",children:"Wrong"}),Object(i.jsx)("span",{className:"value",children:a})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("span",{className:"label",children:"Progress"}),Object(i.jsxs)("span",{className:"value",children:[r," %"]})]})]})},dn={infinitive:"normal",pastSimple:"normal",pastParticipant:"normal"},jn={infinitive:"",pastSimple:"",pastParticipant:""},un=function(){var n=Object(c.e)(),e=Object(c.f)(u.c),t=Object(c.f)(f.d),O=Object(c.f)(f.e),m=Object(c.f)(f.a,c.d),x=Object(r.useState)(""),v=Object(a.a)(x,2),h=v[0],g=v[1],k=Object(r.useState)(""),N=Object(a.a)(k,2),S=N[0],P=N[1],y=Object(r.useState)(""),z=Object(a.a)(y,2),C=z[0],I=z[1],E=Object(r.useState)(dn),F=Object(a.a)(E,2),J=F[0],Y=F[1],A=Object(r.useState)(jn),W=Object(a.a)(A,2),q=W[0],G=W[1],H=Object(r.useRef)(null),K=Object(r.useRef)(null);Object(s.a)((function(){n(d.a.pageReload(l.b.irregular,l.a.ruEn))})),Object(r.useEffect)((function(){H.current&&H.current.focus(),g(""),P(""),I(""),Y(dn),G(jn)}),[m,g,P,I]),Object(r.useEffect)((function(){K.current&&O===o.a.results&&K.current.focus()}),[O]);var L=Object(r.useCallback)((function(){var e={infinitive:h,pastSimple:S,pastParticipant:C},t=b.a.validateRuEn(m,e),a=t.status,i=t.errors;Y(a),G(i),n(j.a.phaseSet(o.a.results))}),[n,m,h,S,C,Y,G]),M=Object(r.useCallback)((function(){var e=Object.values(J).some((function(n){return"error"===n}));n(j.a.next(e))}),[n,J]);if(e)return Object(i.jsx)(_,{});if(!t)return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(rn,{}),O===o.a.finish&&Object(i.jsx)(bn,{})]});var Q=O===o.a.validation||O===o.a.results,T=O===o.a.waiting||O===o.a.validation,U={infinitive:q.infinitive?"":"infinitive",pastSimple:q.pastSimple?"":"past simple",pastParticipant:q.pastParticipant?"":"past participant"};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(p.a,{value:m.translation}),Object(i.jsx)(w,{label:"Infinitive",children:Object(i.jsx)(R,{name:"infinitive",tabIndex:1,placeholder:U.infinitive,ref:H,value:h,status:J.infinitive,message:q.infinitive,onChange:g})}),Object(i.jsx)(w,{label:"Past Simple",children:Object(i.jsx)(R,{name:"pastSimple",tabIndex:2,placeholder:U.pastSimple,value:S,status:J.pastSimple,message:q.pastSimple,onChange:P})}),Object(i.jsx)(w,{label:"Past Participle",children:Object(i.jsx)(R,{name:"pastParticipant",tabIndex:3,placeholder:U.pastParticipant,value:C,status:J.pastParticipant,message:q.pastParticipant,onChange:I})}),Object(i.jsxs)(D,{children:[Object(i.jsx)(B,{tabIndex:4,disabled:Q,onClick:L,children:"Check"}),Object(i.jsx)(B,{tabIndex:5,ref:K,disabled:T,onClick:M,children:"Next"})]}),Object(i.jsx)(bn,{})]})};e.default=un}}]);
//# sourceMappingURL=4.8d43c4ef.chunk.js.map