(this["webpackJsonpmarkdown-ts"]=this["webpackJsonpmarkdown-ts"]||[]).push([[0],{10:function(e,n,t){},11:function(e,n,t){},13:function(e,n,t){"use strict";t.r(n);var i=t(1),s=t.n(i),a=t(5),o=t.n(a),c=(t(10),t(11),t(2)),r=t(0);var d=function(e){var n=e.editorValueChange,t=e.input,i=e.resizeWindow,s=e.minimizeOnClick,a=e.addStyles;return Object(r.jsxs)("div",{className:"window",style:a,children:[Object(r.jsxs)("div",{className:"top-bar",children:[Object(r.jsx)("div",{className:"window-action",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{onClick:s}),Object(r.jsx)("li",{onClick:s}),Object(r.jsx)("li",{onClick:i})]})}),Object(r.jsx)("div",{className:"editor-text",children:"EDITOR"})]}),Object(r.jsx)("div",{className:"screen",children:Object(r.jsx)("textarea",{className:"Editor",value:t,onChange:function(e){return n(e)}})})]})},l=t(3),j=t.n(l);j.a.setOptions({breaks:!0});var u=new j.a.Renderer;var h=function(e){var n=e.input,t=e.resizeWindow,i=e.minimizeOnClick,s=e.addStyles;return Object(r.jsxs)("div",{className:"window",style:s,children:[Object(r.jsxs)("div",{className:"top-bar",children:[Object(r.jsx)("div",{className:"window-action",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{onClick:i}),Object(r.jsx)("li",{onClick:i}),Object(r.jsx)("li",{onClick:t})]})}),Object(r.jsx)("div",{className:"preview-text",children:"PREVIEWER"})]}),Object(r.jsx)("div",{className:"screen",children:Object(r.jsx)("div",{className:"markdown",dangerouslySetInnerHTML:{__html:j()(n,u)}})})]})};var m=function(){var e=Object(i.useState)(b),n=Object(c.a)(e,2),t=n[0],s=n[1],a=Object(i.useState)(!1),o=Object(c.a)(a,2),l=o[0],j=o[1],u={display:"grid",gridTemplateRows:"1fr",gridTemplateColumns:"1fr",justifyContent:void 0,alignItems:void 0},m=Object(i.useState)(!0),p=Object(c.a)(m,2),w=p[0],y=p[1],O=function(){j(!0),f(!1)},v=function(){j(!1),f(!0)},k=Object(i.useState)(!0),x=Object(c.a)(k,2),g=x[0],f=x[1],C=function(){j(!0),y(!1)},N=function(){j(!1),y(!0)},T={width:"100%",height:"100%"};return Object(r.jsxs)("div",{className:"App",style:l?u:void 0,children:[w&&Object(r.jsx)(d,{input:t,editorValueChange:function(e){s(e.target.value)},minimizeOnClick:l?v:C,resizeWindow:l?v:O,addStyles:w&&l?T:void 0}),g&&Object(r.jsx)(h,{input:t,minimizeOnClick:l?N:O,resizeWindow:l?N:C,addStyles:g&&l?T:void 0})]})},b="\n# Markdown Previewer App\nHi! I'm Jerome and welcome to my Markdown Previewer App!\nA markdown previewer is an app that parses markdown code into HTML styles. \nTry it out yourself! \n# How to Use\nOn the editor panel, type in the markdown code that you want to see on the preview panel on the right.\nTry the markdown code below to check it out! \n**To get a bolded text, type in these asterisks**\n> An arrow key character makes block Quotes!\n> You can have several lines of these\n> As many as you can!\n> As many as you want!\n> Isn't it cool?\nTo make a heading, try the sharp key as so!\n# Heading\n## Heading 2\n### Heading 3\nTo make bullet points, it's as simple as: \n- One!\n- Two! \n- Three!\n- Easy, right?\nYou can even include images like these from the internet! Wow! \n![React](https://logos-download.com/wp-content/uploads/2016/09/React_logo_small.png)\nTo include programming code, try typing these: `<div></div>`\nIf you want to include mulitple lines, you can do so by doing these: \n```\n  let x = 1;\n  let y = 2;\n  let z = x + y;\n```\nI hope you learn something about the fun things you can do with Markdown! If you enjoyed, please visit  [my Github](https://synerjay.github.com)\n";o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.4f0e0a7a.chunk.js.map