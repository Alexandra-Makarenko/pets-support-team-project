"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[253],{2253:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r=t(5861),i=t(9439),a=t(7757),o=t.n(a),s=t(2791),c=t(184);var p,u,l,f,h,x,d,g,m,w,Z=function(n){var e=n.onSubmit,t=n.onChange,r=n.value;return(0,c.jsxs)("form",{onSubmit:e,children:[(0,c.jsx)("input",{type:"text",value:r||"",onChange:function(n){return t(n.target.value)}}),(0,c.jsx)("button",{type:"submit",children:(0,c.jsx)("span",{children:"Search"})})]})},v=t(5984),b=t(168),j=t(6444),y=j.ZP.ul(p||(p=(0,b.Z)(["\n  @media (min-width: 768px) {\n    display: flex;\n    flex-wrap: wrap;\n    margin-right: -30px;\n    margin-bottom: -30px;\n  }\n"]))),k=j.ZP.div(u||(u=(0,b.Z)(["\n  margin: 20px;\n"]))),P=j.ZP.li(l||(l=(0,b.Z)(["\n  margin-bottom: 40px;\n  @media (min-width: 768px) {\n    flex-basis: calc((100% - 2 * 32px) / 2);\n    margin-right: 32px;\n  }\n  @media (min-width: 1280px) {\n    flex-basis: calc((100% - 3 * 35px) / 3);\n    margin-right: 35px;\n  }\n"]))),S=j.ZP.div(f||(f=(0,b.Z)(["\n  width: 200px;\n  border-radius: 2px;\n  height: 4px;\n  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 100%);\n  @media (min-width: 768px) {\n    width: 280px;\n    border-radius: 4px;\n    height: 8px;\n  }\n  @media (min-width: 1280px) {\n    width: 340px;\n  }\n"]))),C=j.ZP.h3(h||(h=(0,b.Z)(["\n  margin-top: 4px;\n  margin-bottom: 16px;\n  font-family: 'Manrope', sans-serif;\n  font-weight: 700;\n  size: 24px;\n  line-height: 33px;\n  letter-spacing: -0.01em;\n  color: #111111;\n"]))),_=j.ZP.p(x||(x=(0,b.Z)(["\n  font-family: 'Manrope';\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  color: #111321;\n"]))),z=j.ZP.div(d||(d=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 40px;\n"]))),M=j.ZP.span(g||(g=(0,b.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  color: rgba(17, 17, 17, 0.6);\n"]))),R=j.ZP.a(m||(m=(0,b.Z)(["\n  font-family: 'Manrope';\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 22px;\n  text-align: right;\n  text-decoration-line: none;\n  color: #f59256;\n"]))),U=j.ZP.h3(w||(w=(0,b.Z)(["\n  font-family: 'Manrope', sans-serif;\n  font-weight: 700;\n  size: 36px;\n  line-height: 40px;\n  letter-spacing: -0.01em;\n  color: #111111;\n"])));function A(n){var e=n.news;return(0,c.jsxs)(k,{children:[!e&&(0,c.jsx)(U,{children:"\u041d\u043e\u0432\u0438\u043d\u0438 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e. \u0417\u043c\u0456\u043d\u0456\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438 \u043f\u043e\u0448\u0443\u043a\u0443 \u0430\u0431\u043e \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0456\u0437\u043d\u0456\u0448\u0435."}),e&&(0,c.jsx)(y,{children:e.map((function(n){return(0,c.jsxs)(P,{children:[(0,c.jsx)(S,{}),(0,c.jsx)(C,{children:n.title}),(0,c.jsx)(_,{children:n.description}),(0,c.jsxs)(z,{children:[(0,c.jsx)(M,{children:n.date}),(0,c.jsx)(R,{href:n.url,target:"_blank",rel:"noreferrer noopener",children:"Read more"})]})]},(0,v.x0)())}))})]})}var D=t(1912),E=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return D.Z.defaults.baseURL="http://localhost:3001",n.next=3,D.Z.get("/api/news",{params:{}}).then((function(n){return n.data})).catch((function(n){n.response&&(console.log(n.response.status),console.log(n.response.statusText),console.log(n.message),console.log(n.response.headers),console.log(n.response.data))}));case 3:if(t=n.sent,e){n.next=8;break}return n.abrupt("return",t);case 8:return n.abrupt("return",t.filter((function(n){return n.title.includes(e)||n.description.includes(e)})));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),L=function(){var n=(0,s.useState)([]),e=(0,i.Z)(n,2),t=e[0],a=e[1],p=(0,s.useState)(""),u=(0,i.Z)(p,2),l=u[0],f=u[1];(0,s.useEffect)((function(){h(l)}),[l]);var h=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E(e);case 2:t=n.sent,a(t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,c.jsxs)("section",{children:[(0,c.jsx)(Z,{onSubmit:function(n){n.preventDefault(),h(l)},onChange:function(n){f(n)},value:l}),(0,c.jsx)(A,{news:t})]})}},5984:function(n,e,t){t.d(e,{x0:function(){return r}});var r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=253.7daaebce.chunk.js.map