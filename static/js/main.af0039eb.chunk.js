(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{30:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(20),o=n.n(c),i=n(9),r=(n(30),n(25)),u=n(2),l=n(3),d=a.a.createContext({}),p=n(0),j=function(e){var t=e.onCardClick,n=e.onCardLike,a=e.onCardDelete,c=e.card,o=Object(s.useContext)(d).currentUser,i=c.likes.some((function(e){return e._id===o._id})),r="element__like ".concat(i?"element__like_active":""),u=c.owner._id===o._id,l="button element__trash ".concat(u?"":"element__trash_hidden");return Object(p.jsxs)("li",{className:"element elements__list-item",children:[Object(p.jsx)("img",{src:c&&c.link,alt:c&&c.name,className:"element__image",onClick:function(){t(c)}}),Object(p.jsxs)("div",{className:"element__heading",children:[Object(p.jsx)("h2",{className:"element__title",children:c&&c.name}),Object(p.jsxs)("div",{className:"element__like-and-count",children:[Object(p.jsx)("button",{"arial-lable":"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c/\u0441\u043d\u044f\u0442\u044c \u043b\u0430\u0439\u043a \u043d\u0430 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0435",tittle:"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c/\u0441\u043d\u044f\u0442\u044c \u043b\u0430\u0439\u043a",type:"button",className:r,onClick:function(){n(c)}}),Object(p.jsx)("p",{className:"element__count",children:c.likes?c.likes.length:"0"})]})]}),Object(p.jsx)("button",{"arial-lable":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443 \u0441\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b",tittle:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",type:"button",className:l,id:"delete-Btn",onClick:function(){a(c)}})]})},b=n.p+"static/media/mesto_logo.6331fea1.svg",m=n(15),h=n.n(m),_=function(e){var t=e.mix,n=e.buttonText,a=e.userEmail,c=e.endPoint,o=Object(l.g)(),r=Object(s.useContext)(d).setIsLoggedIn;return Object(p.jsxs)("header",{className:h()(t,"header"),children:[Object(p.jsx)("a",{href:"/",className:"logo",target:"_self",children:Object(p.jsx)("img",{src:b,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f MESTO",className:"header__logo"})}),Object(p.jsxs)("ul",{className:"header__menu",children:[Object(p.jsx)("li",{className:"header__item",children:a}),Object(p.jsx)("li",{children:Object(p.jsx)(i.c,{className:"header__item header__link",to:c,onClick:function(){r(!1),localStorage.removeItem("jwt"),o.push("/sign-in")},children:n})})]})]})},O=new Date;var f=function(e){var t=e.mix;return Object(p.jsx)("footer",{className:h()(t,"footer"),children:Object(p.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",O.getFullYear()," Mesto Russia"]})})},g=function(e){var t=e.onAddPlace,n=e.onCardClick,a=e.onEditAvatar,c=e.onEditProfile,o=e.cards,i=e.onLikeClick,r=e.onDeleteClick,u=Object(s.useContext)(d),l=u.currentUser,b=u.authUser;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(_,{mix:"page__header section",userEmail:b,buttonText:"\u0412\u044b\u0439\u0442\u0438",endPoint:"/sign-in"}),Object(p.jsxs)("main",{className:"content page__content section section_size_narrow",children:[Object(p.jsxs)("section",{className:"profile",children:[Object(p.jsxs)("div",{className:"profile__user",children:[Object(p.jsx)("div",{className:"profile__user-avatar",style:{backgroundImage:"url(".concat(l.avatar,")")},onClick:a}),Object(p.jsxs)("div",{className:"profile__user-info profile__user-info_margins_top-bottom profile__user-info_margins_left-right",children:[Object(p.jsx)("h1",{className:"profile__user-name",children:l.name}),Object(p.jsx)("p",{className:"profile__user-job",children:l.about})]}),Object(p.jsx)("button",{"arial-lable":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435",tittle:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c",type:"button",className:"button profile__button-edit",id:"profile-editBtn",onClick:c})]}),Object(p.jsx)("button",{"arial-lable":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u0434\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",tittle:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",type:"button",className:"button profile__button-add",onClick:t})]}),Object(p.jsx)("section",{className:"elements",children:Object(p.jsx)("ul",{className:"elements__list",children:o.map((function(e){return Object(p.jsx)(j,{card:e,onCardClick:n,onCardLike:i,onCardDelete:r},e._id)}))})})]}),Object(p.jsx)(f,{mix:"page__footer"})]})};var x=function(e){var t=e.name,n=e.title,s=e.isOpen,a=e.onClose,c=e.onSubmit,o=e.children,i=e.button,r=e.idSubmitted;return Object(p.jsx)("section",{className:"popup page__popup section ".concat(s?"page__popup_visible":""),id:"edit-".concat(t),onClick:a,children:Object(p.jsxs)("div",{className:"popup__window popup__window_size_s",children:[Object(p.jsx)("h2",{className:"popup__title",children:n}),Object(p.jsx)("button",{"arial-lable":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u0431\u0435\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445",tittle:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",type:"button",className:"button popup__button-close",onClick:a}),Object(p.jsxs)("form",{className:"form",id:"".concat(t),name:"".concat(t),autoComplete:"off",onSubmit:c,children:[o,Object(p.jsx)("button",{"arial-lable":"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",type:"submit",className:"button form__submit-btn ".concat(r?"form__submit-btn_disabled":""),disabled:r,children:Object(p.jsxs)("div",{className:"button__wrapper",children:[Object(p.jsx)("div",{className:"button__text",children:i}),Object(p.jsxs)("div",{className:"button__jumping-dots ".concat(r?"":"button__jumping-dots_visibility_hidden"),children:[Object(p.jsx)("span",{className:"button__jumping-dots jump",children:"."}),Object(p.jsx)("span",{className:"button__jumping-dots jump",children:"."}),Object(p.jsx)("span",{className:"button__jumping-dots jump",children:"."})]})]})})]})]})})},v=n(4),S=function(e){var t=Object(s.useContext)(d),n=t.setIsShowPassword,a=t.isShowPassword,c=Object(s.useState)(e.type),o=Object(u.a)(c,2),i=o[0],r=o[1];return Object(p.jsxs)("label",{className:"form__fieldset",htmlFor:"".concat(e.id,"-input"),children:[Object(p.jsx)("input",Object(v.a)(Object(v.a)({},e),{},{type:i,className:"form__input ".concat(e.colormodifier),id:"".concat(e.id,"-input")})),"password"===e.type&&Object(p.jsx)("a",{href:"/",onClick:function(){"password"===i?(n(!0),r("text")):(n(!1),r("password"))},className:"form__password-control ".concat(a?"form__password-control_visible":"")}),Object(p.jsx)("span",{className:"form__input-error",id:"".concat(e.id,"-input-error")})]})},C=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,c=e.isSubmitted,o=Object(s.useContext)(d).currentUser,i=Object(s.useState)(""),r=Object(u.a)(i,2),l=r[0],j=r[1],b=Object(s.useState)(""),m=Object(u.a)(b,2),h=m[0],_=m[1];Object(s.useEffect)((function(){j(o.name),_(o.about)}),[o,t]);return Object(p.jsxs)(x,{name:"user-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",button:c?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c||a({name:l,about:h})},idSubmitted:c,children:[Object(p.jsx)(S,{type:"text",value:l||"",id:"user-name",name:"userNameInput",placeholder:"\u0418\u043c\u044f",required:!0,maxLength:"40",minLength:"2",onChange:function(e){j(e.target.value)}}),Object(p.jsx)(S,{type:"text",value:h||"",id:"user-job",name:"userNameInput",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,maxLength:"200",minLength:"2",onChange:function(e){_(e.target.value)}})]})},N=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,c=e.isSubmitted,o=Object(s.useRef)("");return Object(p.jsx)(x,{name:"user-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",button:c?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c||(a({avatar:o.current.value}),o.current.value="")},idSubmitted:c,children:Object(p.jsxs)("label",{className:"form__fieldset",htmlFor:"avatar-link-input",children:[Object(p.jsx)("input",{ref:o,type:"url",className:"form__input",id:"avatar-link-input",name:"avatarLinkInput",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 (\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)",required:!0}),Object(p.jsx)("span",{className:"form__input-error",id:"avatar-link-input-error"})]})})},k=function(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlace,c=e.isSubmitted,o=Object(s.useState)(""),i=Object(u.a)(o,2),r=i[0],l=i[1],d=Object(s.useState)(""),j=Object(u.a)(d,2),b=j[0],m=j[1];Object(s.useEffect)((function(){c||(l(""),m(""))}),[c]);return Object(p.jsxs)(x,{name:"user-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",button:c?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c||a({name:r,link:b})},idSubmitted:c,children:[Object(p.jsx)(S,{type:"text",value:r||"",id:"place-name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)",name:"placeNameInput",required:!0,maxLength:"30",minLength:"2",onChange:function(e){l(e.target.value)}}),Object(p.jsx)(S,{type:"url",value:b||"",id:"place-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 (\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)",name:"placeLinkInput",required:!0,onChange:function(e){m(e.target.value)}})]})},w=function(e){var t=e.isOpen,n=e.onClose,s=e.data;return Object(p.jsx)("section",{className:"popup page__popup section ".concat(t?"page__popup_visible":""),id:"picture-popup",onClick:n,children:Object(p.jsxs)("div",{className:"popup__window popup__window_size_l",children:[Object(p.jsx)("button",{"arial-lable":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438",tittle:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",type:"button",className:"button popup__button-close popup__button-close_pos_inside",id:"close-PicturePopup",onClick:n}),Object(p.jsxs)("figure",{className:"popup__figure",children:[Object(p.jsx)("img",{className:"popup__image",src:s&&s.link,alt:"\u041d\u0430\u043c \u043e\u0447\u0435\u043d\u044c \u0436\u0430\u043b\u044c \u0447\u0442\u043e \u0432\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u044d\u0442\u043e\u0433\u043e \u043a\u0440\u0430\u0441\u0438\u0432\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430 ".concat(s&&s.name)}),Object(p.jsx)("figcaption",{className:"popup__caption",children:s&&s.name})]})]})})},y=function(e){var t=e.isOpen,n=e.onClose,s=e.deleteCard,a=e.isSubmitted,c=e.data;return Object(p.jsx)(x,{name:"user-submit",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",button:a?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435":"\u0414\u0430",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a||s(c)},idSubmitted:a})},T=n(11),U=function(e){var t=e.name,n=e.title,s=e.onSubmit,a=e.children,c=e.button,o=e.isSubmitted,r=e.userSignUp;return Object(p.jsx)("section",{className:"page__login section",children:Object(p.jsxs)("div",{className:"popup popup__window_size_xs",children:[Object(p.jsx)("h2",{className:"popup__title popup__title_pos_centered",children:n}),Object(p.jsxs)("form",{className:"form",id:"".concat(t),name:"".concat(t),autoComplete:"off",onSubmit:s,children:[a,Object(p.jsx)("button",{"arial-lable":"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",type:"submit",className:"button form__submit-btn form__login-submit-btn ".concat(o?"form__submit-btn_disabled":""),disabled:o,children:Object(p.jsxs)("div",{className:"button__wrapper",children:[Object(p.jsx)("div",{className:"button__text",children:c}),Object(p.jsxs)("div",{className:"button__jumping-dots ".concat(o?"":"button__jumping-dots_visibility_hidden"),children:[Object(p.jsx)("span",{className:"button__jumping-dots jump",children:"."}),Object(p.jsx)("span",{className:"button__jumping-dots jump",children:"."}),Object(p.jsx)("span",{className:"button__jumping-dots jump",children:"."})]})]})}),r&&Object(p.jsxs)("div",{className:"popup__footer",children:[Object(p.jsx)("p",{className:"popup__subtitle",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"}),Object(p.jsx)(i.b,{className:"popup__subtitle popup__link",to:"/sign-in",children:r})]})]})]})})},I="https://auth.nomoreparties.co",P=function(){var e=Object(l.g)(),t=Object(s.useContext)(d),n=t.setIsSubmitted,a=t.isSubmitted,c=t.setIsLoggedIn,o=t.authUser,i=t.setAuthUser,r=t.setIsInfoToolTipOpen,j=t.setIsShowPassword,b=Object(s.useState)({email:"",password:""}),m=Object(u.a)(b,2),h=m[0],O=m[1],f=function(e){var t=e.target,n=t.name,s=t.value;O(Object(v.a)(Object(v.a)({},h),{},Object(T.a)({},n,s)))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(_,{mix:"page__header section",buttonText:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",endPoint:"/sign-up"}),Object(p.jsxs)(U,{name:"user-sign-in",title:"\u0412\u043e\u0439\u0442\u0438",button:a?"\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0432\u0445\u043e\u0434":"\u0412\u043e\u0439\u0442\u0438",onSubmit:function(t){var s,a;(t.preventDefault(),h.email&&h.password)&&(n(!0),(s=h.password,a=h.email,fetch("".concat(I,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:s,email:a})}).then((function(e){return 200===e.status?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),e})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(e))}))).then((function(t){t?(O({email:"",password:""}),c(!0),j(!1),e.push("/main"),setTimeout((function(){return n(!1)}),5e3)):(O({email:"",password:""}),c(!1),n(!1),r(!0),j(!1),i(Object(v.a)(Object(v.a)({},o),{},{message:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."})))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(e.status)),n(!1),j(!1)})))},isSubmitted:a,children:[Object(p.jsx)(S,{type:"email",value:h.email,id:"email",placeholder:"Email",name:"email",colormodifier:"form__login-input",required:!0,maxLength:"30",minLength:"5",onChange:f}),Object(p.jsx)(S,{type:"password",value:h.password,id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",colormodifier:"form__login-input",required:!0,minLength:"6",onChange:f})]})]})},L=function(){var e=Object(s.useContext)(d),t=e.isSubmitted,n=e.setIsSubmitted,a=e.setIsInfoToolTipOpen,c=e.setIsSignUp,o=e.setAuthUser,i=e.authUser,r=e.setIsShowPassword,j=Object(s.useState)({email:"",password:"",confirmPassword:""}),b=Object(u.a)(j,2),m=b[0],h=b[1],O=Object(l.g)(),f=function(e){var t=e.target,n=t.name,s=t.value;h(Object(v.a)(Object(v.a)({},m),{},Object(T.a)({},n,s)))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(_,{mix:"page__header section",buttonText:"\u0412\u043e\u0439\u0442\u0438",endPoint:"/sign-in"}),Object(p.jsxs)(U,{name:"user-sign-up",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",button:t?"\u0418\u0434\u0435\u0442 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",onSubmit:function(e){var t,s;(e.preventDefault(),m.password&&m.email)&&(m.password===m.confirmPassword?(n(!0),(t=m.password,s=m.email,console.log(t),console.log(s),fetch("".concat(I,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify({password:t,email:s})}).then((function(e){try{if(201===e.status)return e.json()}catch(t){return t.log}console.log(e)})).then((function(e){return e})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(e)),alert(e.message)}))).then((function(e){console.log(e),e?(o(Object(v.a)(Object(v.a)({},i),{},{message:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"})),a(!0),c(!0),r(!1),O.push("/sign-in"),setTimeout((function(){return n(!1)}),2e3)):(o(Object(v.a)(Object(v.a)({},i),{},{message:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."})),a(!0),c(!1),r(!1),n(!1))}))):(h(Object(v.a)(Object(v.a)({},m),{},{password:"",confirmPassword:""})),o(Object(v.a)(Object(v.a)({},i),{},{message:"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437"})),c(!1),r(!1),a(!0)))},userSignUp:"\u0412\u043e\u0439\u0442\u0438",isSubmitted:t,children:[Object(p.jsx)(S,{type:"email",value:m.email,id:"email",name:"email",placeholder:"Email",colormodifier:"form__login-input",required:!0,minLength:"2",onChange:f}),Object(p.jsx)(S,{type:"password",value:m.password,id:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",colormodifier:"form__login-input",required:!0,onChange:f}),Object(p.jsx)(S,{type:"password",value:m.confirmPassword,id:"confirmPassword",name:"confirmPassword",placeholder:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",colormodifier:"form__login-input",required:!0,onChange:f})]})]})},E=n(22),A=["component"],D=function(e){var t=e.component,n=Object(E.a)(e,A),a=Object(s.useContext)(d).isLoggedIn;return Object(p.jsx)(l.b,{children:function(){return a?Object(p.jsx)(t,Object(v.a)({},n)):Object(p.jsx)(l.a,{to:n.to})}})},q=function(e){var t=e.isOpen,n=e.onClose,a=e.name,c=Object(s.useContext)(d),o=c.authUser,i=c.isSignedUp;return Object(p.jsx)("section",{className:"popup page__popup section ".concat(t?"page__popup_visible":""),id:"edit-".concat(a),onClick:n,children:Object(p.jsxs)("div",{className:"popup__window popup__window_size_s",children:[Object(p.jsx)("div",{className:"popup__icon ".concat(i?"popup__icon_status_succeed":"popup__icon_status_fault")}),Object(p.jsx)("h2",{className:"popup__title popup__title_pos_centered",children:o.message}),Object(p.jsx)("button",{"arial-lable":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u0431\u0435\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445",tittle:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",type:"button",className:"button popup__button-close",onClick:n})]})})},F=n(23),z=n(24),J=new(function(){function e(t){var n=t.serverUrl,s=t.headers;Object(F.a)(this,e),this._serverUrl=n,this._headers=s}return Object(z.a)(e,[{key:"_checkStatus",value:function(e){return e.ok?e.json():Promise.reject("".concat(e.status," ").concat(e.statusText))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._serverUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._checkStatus(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._serverUrl,"/cards"),{headers:this._headers}).then((function(t){return e._checkStatus(t)}))}},{key:"updateUserData",value:function(e){var t=this;return fetch("".concat(this._serverUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._checkStatus(e)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._serverUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._checkStatus(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._serverUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkStatus(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var n=this;return fetch("".concat(this._serverUrl,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers}).then((function(e){return n._checkStatus(e)}))}},{key:"updateAvatar",value:function(e){var t=this;return fetch("".concat(this._serverUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._checkStatus(e)}))}}]),e}())({serverUrl:"https://mesto.nomoreparties.co/v1/cohort-24",headers:{authorization:"99295e52-decf-4a30-8030-f17c65fb60b0","Content-Type":"application/json"}}),B=function(){var e=Object(s.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(!1),o=Object(u.a)(c,2),i=o[0],j=o[1],b=Object(s.useState)(!1),m=Object(u.a)(b,2),h=m[0],_=m[1],O=Object(s.useState)(!1),f=Object(u.a)(O,2),x=f[0],v=f[1],S=Object(s.useState)(!1),T=Object(u.a)(S,2),U=T[0],E=T[1],A=Object(s.useState)(!1),F=Object(u.a)(A,2),z=F[0],B=F[1],M=Object(s.useState)(!1),H=Object(u.a)(M,2),R=H[0],G=H[1],Y=Object(s.useState)(!1),K=Object(u.a)(Y,2),Q=K[0],V=K[1],W=Object(s.useState)(!1),X=Object(u.a)(W,2),Z=X[0],$=X[1],ee=Object(s.useState)({}),te=Object(u.a)(ee,2),ne=te[0],se=te[1],ae=Object(s.useState)([]),ce=Object(u.a)(ae,2),oe=ce[0],ie=ce[1],re=Object(s.useState)({}),ue=Object(u.a)(re,2),le=ue[0],de=ue[1],pe=Object(s.useState)({}),je=Object(u.a)(pe,2),be=je[0],me=je[1],he=Object(s.useState)({}),_e=Object(u.a)(he,2),Oe=_e[0],fe=_e[1],ge=Object(s.useState)(!1),xe=Object(u.a)(ge,2),ve=xe[0],Se=xe[1],Ce=Object(l.g)();Object(s.useEffect)((function(){J.getInitialCards().then((function(e){ie(e)})).catch((function(e){console.log("\u041d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a: ".concat(e.status," ").concat(e.statusText))}))}),[]),Object(s.useEffect)((function(){J.getUserData().then((function(e){me(e)})).catch((function(e){console.log("\u041d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(e.status," ").concat(e.statusText))}))}),[]);var Ne=function(e){a(!1),_(!1),j(!1),v(!1),E(!1),B(!1)};Object(s.useEffect)((function(){return(n||i||h||x||U||z)&&document.addEventListener("keydown",we),function(){document.removeEventListener("keydown",we)}}),[n,i,h,x,U,z]);var ke=function(e){(e.target.classList.contains("page__popup")||e.target.classList.contains("popup__button-close"))&&Ne()},we=function(e){27===e.keyCode&&Ne()};Object(s.useEffect)((function(){ye()}),[Ce]);var ye=function(){var e=localStorage.getItem("jwt");e&&function(e){return fetch("".concat(I,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){if(e.ok)return e.json();localStorage.removeItem("jwt")})).then((function(e){return e})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0435 \u0442\u043e\u043a\u0435\u043d\u0430:".concat(e))}))}(e).then((function(e){var t=e.data;fe(t.email),V(!0),Ce.push("/main")}))};return Object(p.jsx)(d.Provider,{value:{currentUser:be,isLoggedIn:Q,setIsLoggedIn:V,isSubmitted:R,setIsSubmitted:G,setAuthUser:fe,authUser:Oe,isSignedUp:Z,setIsSignUp:$,isInfoToolTipOpen:z,setIsInfoToolTipOpen:B,isShowPassword:ve,setIsShowPassword:Se},children:Object(p.jsxs)("div",{className:"page",children:[Object(p.jsx)("div",{className:"page__container",children:Object(p.jsxs)(l.d,{children:[Object(p.jsx)(D,{exact:!0,path:"/main",component:g,onEditProfile:function(){a(!0)},onEditAvatar:function(){_(!0)},onAddPlace:function(){j(!0)},onCardClick:function(e){v(!0),se(e)},cards:oe,onLikeClick:function(e){var t=e.likes.some((function(e){return e._id===be._id}));J.changeLikeCardStatus(e._id,!t).then((function(t){ie((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u043b\u0430\u0439\u043a\u0430: ".concat(e.status," ").concat(e.statusText))}))},onDeleteClick:function(e){E(!0),de(e)},to:"/sign-in"}),Object(p.jsx)(l.b,{path:"/sign-in",children:Object(p.jsx)(P,{})}),Object(p.jsx)(l.b,{path:"/sign-up",children:Object(p.jsx)(L,{})}),Object(p.jsx)(l.b,{path:"/",children:Q?Object(p.jsx)(l.a,{to:"/main"}):Object(p.jsx)(l.a,{to:"/sign-in"})})]})}),Object(p.jsx)(C,{isOpen:n,onClose:ke,onUpdateUser:function(e){G(!0),J.updateUserData(e).then((function(e){me(e),a(!1),setTimeout((function(){return G(!1)}),1e3)})).catch((function(e){console.log("\u041d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(e.status," ").concat(e.statusText))}))},isSubmitted:R}),Object(p.jsx)(N,{isOpen:h,onClose:ke,onUpdateAvatar:function(e){G(!0),J.updateAvatar(e).then((function(e){me(Object.assign(be,{avatar:e.avatar})),_(!1),setTimeout((function(){return G(!1)}),1e3)})).catch((function(e){console.log("\u041d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0430\u0432\u0430\u0442\u0430\u0440\u0430: ".concat(e.status," ").concat(e.statusText))}))},isSubmitted:R}),Object(p.jsx)(k,{isOpen:i,onClose:ke,onAddPlace:function(e){G(!0),J.addCard(e).then((function(e){ie([e].concat(Object(r.a)(oe))),j(!1),setTimeout((function(){return G(!1)}),1e3)})).catch((function(e){console.log("\u041d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(e.status," ").concat(e.statusText))}))},isSubmitted:R}),Object(p.jsx)(w,{isOpen:x,data:ne,onClose:ke}),Object(p.jsx)(y,{isOpen:U,onClose:ke,isSubmitted:R,deleteCard:function(e){G(!0),J.deleteCard(e._id).then((function(){ie(oe.filter((function(t){return t._id!==e._id}))),E(!1),setTimeout((function(){return G(!1)}),1e3)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e.status," ").concat(e.statusText))}))},data:le}),Object(p.jsx)(q,{isOpen:z,onClose:ke,isSignUp:Z,name:"infoToolTip"})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),a(e),c(e),o(e)}))};o.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(i.a,{children:Object(p.jsx)(B,{})})}),document.getElementById("root")),M()}},[[40,1,2]]]);
//# sourceMappingURL=main.af0039eb.chunk.js.map