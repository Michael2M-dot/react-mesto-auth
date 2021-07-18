(this["webpackJsonpreact-mesto-auth"] =
  this["webpackJsonpreact-mesto-auth"] || []).push([
  [0],
  {
    30: function (e, t, n) {},
    40: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(1),
        s = n.n(a),
        c = n(20),
        i = n.n(c),
        o = n(10),
        r = (n(30), n(4)),
        u = n(25),
        l = n(2),
        d = n(3),
        p = s.a.createContext({}),
        j = n(0),
        b = function (e) {
          var t = e.onCardClick,
            n = e.onCardLike,
            s = e.onCardDelete,
            c = e.card,
            i = Object(a.useContext)(p).currentUser,
            o = c.likes.some(function (e) {
              return e._id === i._id;
            }),
            r = "element__like ".concat(o ? "element__like_active" : ""),
            u = c.owner._id === i._id,
            l = "button element__trash ".concat(
              u ? "" : "element__trash_hidden"
            );
          return Object(j.jsxs)("li", {
            className: "element elements__list-item",
            children: [
              Object(j.jsx)("img", {
                src: c && c.link,
                alt: c && c.name,
                className: "element__image",
                onClick: function () {
                  t(c);
                },
              }),
              Object(j.jsxs)("div", {
                className: "element__heading",
                children: [
                  Object(j.jsx)("h2", {
                    className: "element__title",
                    children: c && c.name,
                  }),
                  Object(j.jsxs)("div", {
                    className: "element__like-and-count",
                    children: [
                      Object(j.jsx)("button", {
                        "arial-lable":
                          "\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c/\u0441\u043d\u044f\u0442\u044c \u043b\u0430\u0439\u043a \u043d\u0430 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0435",
                        tittle:
                          "\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c/\u0441\u043d\u044f\u0442\u044c \u043b\u0430\u0439\u043a",
                        type: "button",
                        className: r,
                        onClick: function () {
                          n(c);
                        },
                      }),
                      Object(j.jsx)("p", {
                        className: "element__count",
                        children: c.likes ? c.likes.length : "0",
                      }),
                    ],
                  }),
                ],
              }),
              Object(j.jsx)("button", {
                "arial-lable":
                  "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443 \u0441\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b",
                tittle: "\u0423\u0434\u0430\u043b\u0438\u0442\u044c",
                type: "button",
                className: l,
                id: "delete-Btn",
                onClick: function () {
                  s(c);
                },
              }),
            ],
          });
        },
        m = n.p + "static/media/mesto_logo.6331fea1.svg",
        _ = n(15),
        h = n.n(_),
        f = function (e) {
          var t = e.mix,
            n = e.buttonText,
            a = e.userEmail,
            s = e.endPoint,
            c = e.signOut;
          return Object(j.jsxs)("header", {
            className: h()(t, "header"),
            children: [
              Object(j.jsx)("a", {
                href: "/",
                className: "logo",
                target: "_self",
                children: Object(j.jsx)("img", {
                  src: m,
                  alt: "\u041b\u043e\u0433\u043e\u0442\u0438\u043f MESTO",
                  className: "header__logo",
                }),
              }),
              Object(j.jsxs)("div", {
                className: "header__menu",
                children: [
                  Object(j.jsx)("p", {
                    className: "header__item",
                    children: a,
                  }),
                  Object(j.jsx)("p", {
                    className: "header__item",
                    children: Object(j.jsx)(o.c, {
                      className: "header__link",
                      to: s,
                      onClick: c,
                      children: n,
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        O = new Date();
      var x = function (e) {
          var t = e.mix;
          return Object(j.jsx)("footer", {
            className: h()(t, "footer"),
            children: Object(j.jsxs)("p", {
              className: "footer__copyright",
              children: ["\xa9 ", O.getFullYear(), " Mesto Russia"],
            }),
          });
        },
        g = function (e) {
          var t = e.onAddPlace,
            n = e.onCardClick,
            s = e.onEditAvatar,
            c = e.onEditProfile,
            i = e.cards,
            o = e.onLikeClick,
            r = e.onDeleteClick,
            u = e.signOut,
            l = e.userEmail,
            d = Object(a.useContext)(p).currentUser;
          return Object(j.jsxs)(j.Fragment, {
            children: [
              Object(j.jsx)(f, {
                mix: "page__header section",
                userEmail: l,
                buttonText: "\u0412\u044b\u0439\u0442\u0438",
                endPoint: "/sign-in",
                signOut: u,
              }),
              Object(j.jsxs)("main", {
                className: "content page__content section section_size_narrow",
                children: [
                  Object(j.jsxs)("section", {
                    className: "profile",
                    children: [
                      Object(j.jsxs)("div", {
                        className: "profile__user",
                        children: [
                          Object(j.jsx)("div", {
                            className: "profile__user-avatar",
                            style: {
                              backgroundImage: "url(".concat(d.avatar, ")"),
                            },
                            onClick: s,
                          }),
                          Object(j.jsxs)("div", {
                            className:
                              "profile__user-info profile__user-info_margins_top-bottom profile__user-info_margins_left-right",
                            children: [
                              Object(j.jsx)("h1", {
                                className: "profile__user-name",
                                children: d.name,
                              }),
                              Object(j.jsx)("p", {
                                className: "profile__user-job",
                                children: d.about,
                              }),
                            ],
                          }),
                          Object(j.jsx)("button", {
                            "arial-lable":
                              "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435",
                            tittle:
                              "\u041e\u0442\u043a\u0440\u044b\u0442\u044c",
                            type: "button",
                            className: "button profile__button-edit",
                            id: "profile-editBtn",
                            onClick: c,
                          }),
                        ],
                      }),
                      Object(j.jsx)("button", {
                        "arial-lable":
                          "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u0434\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",
                        tittle:
                          "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",
                        type: "button",
                        className: "button profile__button-add",
                        onClick: t,
                      }),
                    ],
                  }),
                  Object(j.jsx)("section", {
                    className: "elements",
                    children: Object(j.jsx)("ul", {
                      className: "elements__list",
                      children: i.map(function (e) {
                        return Object(j.jsx)(
                          b,
                          {
                            card: e,
                            onCardClick: n,
                            onCardLike: o,
                            onCardDelete: r,
                          },
                          e._id
                        );
                      }),
                    }),
                  }),
                ],
              }),
              Object(j.jsx)(x, { mix: "page__footer" }),
            ],
          });
        };
      var v = function (e) {
          var t = e.name,
            n = e.title,
            a = e.isOpen,
            s = e.onClose,
            c = e.onSubmit,
            i = e.children,
            o = e.button,
            r = e.idSubmitted;
          return Object(j.jsx)("section", {
            className: "popup page__popup section ".concat(
              a ? "page__popup_visible" : ""
            ),
            id: "edit-".concat(t),
            onClick: s,
            children: Object(j.jsxs)("div", {
              className: "popup__window popup__window_size_s",
              children: [
                Object(j.jsx)("h2", { className: "popup__title", children: n }),
                Object(j.jsx)("button", {
                  "arial-lable":
                    "\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u0431\u0435\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445",
                  tittle: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c",
                  type: "button",
                  className: "button popup__button-close",
                  onClick: s,
                }),
                Object(j.jsxs)("form", {
                  className: "form",
                  id: "".concat(t),
                  name: "".concat(t),
                  autoComplete: "off",
                  onSubmit: c,
                  children: [
                    i,
                    Object(j.jsx)("button", {
                      "arial-lable":
                        "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",
                      type: "submit",
                      className: "button form__submit-btn ".concat(
                        r ? "form__submit-btn_disabled" : ""
                      ),
                      disabled: r,
                      children: Object(j.jsxs)("div", {
                        className: "button__wrapper",
                        children: [
                          Object(j.jsx)("div", {
                            className: "button__text",
                            children: o,
                          }),
                          Object(j.jsxs)("div", {
                            className: "button__jumping-dots ".concat(
                              r ? "" : "button__jumping-dots_visibility_hidden"
                            ),
                            children: [
                              Object(j.jsx)("span", {
                                className: "button__jumping-dots jump",
                                children: ".",
                              }),
                              Object(j.jsx)("span", {
                                className: "button__jumping-dots jump",
                                children: ".",
                              }),
                              Object(j.jsx)("span", {
                                className: "button__jumping-dots jump",
                                children: ".",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        S = function (e) {
          var t = Object(a.useContext)(p),
            n = t.setIsShowPassword,
            s = t.isShowPassword,
            c = Object(a.useState)(e.type),
            i = Object(l.a)(c, 2),
            o = i[0],
            u = i[1];
          return Object(j.jsxs)("label", {
            className: "form__fieldset",
            htmlFor: "".concat(e.id, "-input"),
            children: [
              Object(j.jsx)(
                "input",
                Object(r.a)(
                  Object(r.a)({}, e),
                  {},
                  {
                    type: o,
                    className: "form__input ".concat(e.colormodifier),
                    id: "".concat(e.id, "-input"),
                  }
                )
              ),
              "password" === e.type &&
                Object(j.jsx)("span", {
                  onClick: function () {
                    "password" === o
                      ? (n(!0), u("text"))
                      : (n(!1), u("password"));
                  },
                  className: "form__password-control ".concat(
                    s ? "form__password-control_visible" : ""
                  ),
                }),
              Object(j.jsx)("span", {
                className: "form__input-error",
                id: "".concat(e.id, "-input-error"),
              }),
            ],
          });
        },
        C = function (e) {
          var t = e.isOpen,
            n = e.onClose,
            s = e.onUpdateUser,
            c = e.isSubmitted,
            i = Object(a.useContext)(p).currentUser,
            o = Object(a.useState)(""),
            r = Object(l.a)(o, 2),
            u = r[0],
            d = r[1],
            b = Object(a.useState)(""),
            m = Object(l.a)(b, 2),
            _ = m[0],
            h = m[1];
          Object(a.useEffect)(
            function () {
              d(i.name), h(i.about);
            },
            [i, t]
          );
          return Object(j.jsxs)(v, {
            name: "user-profile",
            title:
              "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",
            button: c
              ? "\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435"
              : "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",
            isOpen: t,
            onClose: n,
            onSubmit: function (e) {
              e.preventDefault(), c || s({ name: u, about: _ });
            },
            idSubmitted: c,
            children: [
              Object(j.jsx)(S, {
                type: "text",
                value: u || "",
                id: "user-name",
                name: "userNameInput",
                placeholder: "\u0418\u043c\u044f",
                required: !0,
                maxLength: "40",
                minLength: "2",
                onChange: function (e) {
                  d(e.target.value);
                },
              }),
              Object(j.jsx)(S, {
                type: "text",
                value: _ || "",
                id: "user-job",
                name: "userNameInput",
                placeholder: "\u041e \u0441\u0435\u0431\u0435",
                required: !0,
                maxLength: "200",
                minLength: "2",
                onChange: function (e) {
                  h(e.target.value);
                },
              }),
            ],
          });
        },
        N = function (e) {
          var t = e.isOpen,
            n = e.onClose,
            s = e.onUpdateAvatar,
            c = e.isSubmitted,
            i = Object(a.useRef)("");
          return Object(j.jsx)(v, {
            name: "user-avatar",
            title:
              "\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",
            button: c
              ? "\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435"
              : "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",
            isOpen: t,
            onClose: n,
            onSubmit: function (e) {
              e.preventDefault(),
                c || (s({ avatar: i.current.value }), (i.current.value = ""));
            },
            idSubmitted: c,
            children: Object(j.jsxs)("label", {
              className: "form__fieldset",
              htmlFor: "avatar-link-input",
              children: [
                Object(j.jsx)("input", {
                  ref: i,
                  type: "url",
                  className: "form__input",
                  id: "avatar-link-input",
                  name: "avatarLinkInput",
                  placeholder:
                    "\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 (\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)",
                  required: !0,
                }),
                Object(j.jsx)("span", {
                  className: "form__input-error",
                  id: "avatar-link-input-error",
                }),
              ],
            }),
          });
        },
        k = function (e) {
          var t = e.isOpen,
            n = e.onClose,
            s = e.onAddPlace,
            c = e.isSubmitted,
            i = Object(a.useState)(""),
            o = Object(l.a)(i, 2),
            r = o[0],
            u = o[1],
            d = Object(a.useState)(""),
            p = Object(l.a)(d, 2),
            b = p[0],
            m = p[1];
          Object(a.useEffect)(
            function () {
              c || (u(""), m(""));
            },
            [c]
          );
          return Object(j.jsxs)(v, {
            name: "user-card",
            title:
              "\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",
            button: c
              ? "\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435"
              : "\u0421\u043e\u0437\u0434\u0430\u0442\u044c",
            isOpen: t,
            onClose: n,
            onSubmit: function (e) {
              e.preventDefault(), c || s({ name: r, link: b });
            },
            idSubmitted: c,
            children: [
              Object(j.jsx)(S, {
                type: "text",
                value: r || "",
                id: "place-name",
                placeholder:
                  "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)",
                name: "placeNameInput",
                required: !0,
                maxLength: "30",
                minLength: "2",
                onChange: function (e) {
                  u(e.target.value);
                },
              }),
              Object(j.jsx)(S, {
                type: "url",
                value: b || "",
                id: "place-link",
                placeholder:
                  "\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 (\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)",
                name: "placeLinkInput",
                required: !0,
                onChange: function (e) {
                  m(e.target.value);
                },
              }),
            ],
          });
        },
        w = function (e) {
          var t = e.isOpen,
            n = e.onClose,
            a = e.data;
          return Object(j.jsx)("section", {
            className: "popup page__popup section ".concat(
              t ? "page__popup_visible" : ""
            ),
            id: "picture-popup",
            onClick: n,
            children: Object(j.jsxs)("div", {
              className: "popup__window popup__window_size_l",
              children: [
                Object(j.jsx)("button", {
                  "arial-lable":
                    "\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438",
                  tittle: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c",
                  type: "button",
                  className:
                    "button popup__button-close popup__button-close_pos_inside",
                  id: "close-PicturePopup",
                  onClick: n,
                }),
                Object(j.jsxs)("figure", {
                  className: "popup__figure",
                  children: [
                    Object(j.jsx)("img", {
                      className: "popup__image",
                      src: a && a.link,
                      alt: "\u041d\u0430\u043c \u043e\u0447\u0435\u043d\u044c \u0436\u0430\u043b\u044c \u0447\u0442\u043e \u0432\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u044d\u0442\u043e\u0433\u043e \u043a\u0440\u0430\u0441\u0438\u0432\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430 ".concat(
                        a && a.name
                      ),
                    }),
                    Object(j.jsx)("figcaption", {
                      className: "popup__caption",
                      children: a && a.name,
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        y = function (e) {
          var t = e.isOpen,
            n = e.onClose,
            a = e.deleteCard,
            s = e.isSubmitted,
            c = e.data;
          return Object(j.jsx)(v, {
            name: "user-submit",
            title: "\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",
            button: s
              ? "\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435"
              : "\u0414\u0430",
            isOpen: t,
            onClose: n,
            onSubmit: function (e) {
              e.preventDefault(), s || a(c);
            },
            idSubmitted: s,
          });
        },
        T = n(11),
        P = function (e) {
          var t = e.name,
            n = e.title,
            a = e.onSubmit,
            s = e.children,
            c = e.button,
            i = e.isSubmitted,
            r = e.userSignUp;
          return Object(j.jsx)("section", {
            className: "page__login section",
            children: Object(j.jsxs)("div", {
              className: "popup popup__window_size_xs",
              children: [
                Object(j.jsx)("h2", {
                  className: "popup__title popup__title_pos_centered",
                  children: n,
                }),
                Object(j.jsxs)("form", {
                  className: "form",
                  id: "".concat(t),
                  name: "".concat(t),
                  autoComplete: "off",
                  onSubmit: a,
                  children: [
                    s,
                    Object(j.jsx)("button", {
                      "arial-lable":
                        "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",
                      type: "submit",
                      className:
                        "button form__submit-btn form__login-submit-btn ".concat(
                          i ? "form__submit-btn_disabled" : ""
                        ),
                      disabled: i,
                      children: Object(j.jsxs)("div", {
                        className: "button__wrapper",
                        children: [
                          Object(j.jsx)("div", {
                            className: "button__text",
                            children: c,
                          }),
                          Object(j.jsxs)("div", {
                            className: "button__jumping-dots ".concat(
                              i ? "" : "button__jumping-dots_visibility_hidden"
                            ),
                            children: [
                              Object(j.jsx)("span", {
                                className: "button__jumping-dots jump",
                                children: ".",
                              }),
                              Object(j.jsx)("span", {
                                className: "button__jumping-dots jump",
                                children: ".",
                              }),
                              Object(j.jsx)("span", {
                                className: "button__jumping-dots jump",
                                children: ".",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    r &&
                      Object(j.jsxs)("div", {
                        className: "popup__footer",
                        children: [
                          Object(j.jsx)("p", {
                            className: "popup__subtitle",
                            children:
                              "\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",
                          }),
                          Object(j.jsx)(o.b, {
                            className: "popup__subtitle popup__link",
                            to: "/sign-in",
                            children: r,
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          });
        },
        U = function (e) {
          var t = e.handleLogin,
            n = e.isSubmitted,
            s = Object(a.useState)({ email: "", password: "" }),
            c = Object(l.a)(s, 2),
            i = c[0],
            o = c[1],
            u = function (e) {
              var t = e.target,
                n = t.name,
                a = t.value;
              o(Object(r.a)(Object(r.a)({}, i), {}, Object(T.a)({}, n, a)));
            };
          return Object(j.jsxs)(j.Fragment, {
            children: [
              Object(j.jsx)(f, {
                mix: "page__header section",
                buttonText:
                  "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",
                endPoint: "/sign-up",
              }),
              Object(j.jsxs)(P, {
                name: "user-sign-in",
                title: "\u0412\u043e\u0439\u0442\u0438",
                button: n
                  ? "\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0432\u0445\u043e\u0434"
                  : "\u0412\u043e\u0439\u0442\u0438",
                onSubmit: function (e) {
                  e.preventDefault(),
                    i.email && i.password && t(i.password, i.email);
                },
                isSubmitted: n,
                children: [
                  Object(j.jsx)(S, {
                    type: "email",
                    value: i.email,
                    id: "email",
                    placeholder: "Email",
                    name: "email",
                    colormodifier: "form__login-input",
                    required: !0,
                    onChange: u,
                  }),
                  Object(j.jsx)(S, {
                    type: "password",
                    value: i.password,
                    id: "password",
                    placeholder: "\u041f\u0430\u0440\u043e\u043b\u044c",
                    name: "password",
                    colormodifier: "form__login-input",
                    required: !0,
                    onChange: u,
                  }),
                ],
              }),
            ],
          });
        },
        E = function (e) {
          var t = e.handleRegister,
            n = e.isSubmitted,
            s = Object(a.useState)({
              email: "",
              password: "",
              confirmPassword: "",
            }),
            c = Object(l.a)(s, 2),
            i = c[0],
            o = c[1],
            u = function (e) {
              var t = e.target,
                n = t.name,
                a = t.value;
              o(Object(r.a)(Object(r.a)({}, i), {}, Object(T.a)({}, n, a)));
            };
          return Object(j.jsxs)(j.Fragment, {
            children: [
              Object(j.jsx)(f, {
                mix: "page__header section",
                buttonText: "\u0412\u043e\u0439\u0442\u0438",
                endPoint: "/sign-in",
              }),
              Object(j.jsxs)(P, {
                name: "user-sign-up",
                title:
                  "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",
                button: n
                  ? "\u0418\u0434\u0435\u0442 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"
                  : "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",
                onSubmit: function (e) {
                  e.preventDefault(),
                    i.password &&
                      i.email &&
                      t(i.email, i.password, i.confirmPassword);
                },
                userSignUp: "\u0412\u043e\u0439\u0442\u0438",
                isSubmitted: n,
                children: [
                  Object(j.jsx)(S, {
                    type: "email",
                    value: i.email,
                    id: "email",
                    name: "email",
                    placeholder: "Email",
                    colormodifier: "form__login-input",
                    required: !0,
                    minLength: "2",
                    onChange: u,
                  }),
                  Object(j.jsx)(S, {
                    type: "password",
                    value: i.password,
                    id: "password",
                    name: "password",
                    placeholder: "\u041f\u0430\u0440\u043e\u043b\u044c",
                    colormodifier: "form__login-input",
                    required: !0,
                    onChange: u,
                  }),
                  Object(j.jsx)(S, {
                    type: "password",
                    value: i.confirmPassword,
                    id: "confirmPassword",
                    name: "confirmPassword",
                    placeholder:
                      "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",
                    colormodifier: "form__login-input",
                    required: !0,
                    onChange: u,
                  }),
                ],
              }),
            ],
          });
        },
        L = n(22),
        D = ["component"],
        I = function (e) {
          var t = e.component,
            n = Object(L.a)(e, D),
            s = Object(a.useContext)(p).isLoggedIn;
          return Object(j.jsx)(d.b, {
            children: function () {
              return s
                ? Object(j.jsx)(t, Object(r.a)({}, n))
                : Object(j.jsx)(d.a, { to: n.to });
            },
          });
        },
        A = function (e) {
          var t = e.isOpen,
            n = e.onClose,
            s = e.name,
            c = Object(a.useContext)(p),
            i = c.authUserData,
            o = c.isSignedUp;
          return Object(j.jsx)("section", {
            className: "popup page__popup section ".concat(
              t ? "page__popup_visible" : ""
            ),
            id: "edit-".concat(s),
            onClick: n,
            children: Object(j.jsxs)("div", {
              className: "popup__window popup__window_size_s",
              children: [
                Object(j.jsx)("div", {
                  className: "popup__icon ".concat(
                    o
                      ? "popup__icon_status_succeed"
                      : "popup__icon_status_fault"
                  ),
                }),
                Object(j.jsx)("h2", {
                  className: "popup__title popup__title_pos_centered",
                  children: i.message,
                }),
                Object(j.jsx)("button", {
                  "arial-lable":
                    "\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u0431\u0435\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445",
                  tittle: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c",
                  type: "button",
                  className: "button popup__button-close",
                  onClick: n,
                }),
              ],
            }),
          });
        },
        q = n(23),
        F = n(24),
        z = new ((function () {
          function e(t) {
            var n = t.serverUrl,
              a = t.headers;
            Object(q.a)(this, e), (this._serverUrl = n), (this._headers = a);
          }
          return (
            Object(F.a)(e, [
              {
                key: "_checkStatus",
                value: function (e) {
                  return e.ok
                    ? e.json()
                    : Promise.reject(
                        "".concat(e.status, " ").concat(e.statusText)
                      );
                },
              },
              {
                key: "getUserData",
                value: function () {
                  var e = this;
                  return fetch("".concat(this._serverUrl, "/users/me"), {
                    headers: this._headers,
                  }).then(function (t) {
                    return e._checkStatus(t);
                  });
                },
              },
              {
                key: "getInitialCards",
                value: function () {
                  var e = this;
                  return fetch("".concat(this._serverUrl, "/cards"), {
                    headers: this._headers,
                  }).then(function (t) {
                    return e._checkStatus(t);
                  });
                },
              },
              {
                key: "updateUserData",
                value: function (e) {
                  var t = this;
                  return fetch("".concat(this._serverUrl, "/users/me"), {
                    method: "PATCH",
                    headers: this._headers,
                    body: JSON.stringify({ name: e.name, about: e.about }),
                  }).then(function (e) {
                    return t._checkStatus(e);
                  });
                },
              },
              {
                key: "addCard",
                value: function (e) {
                  var t = this;
                  return fetch("".concat(this._serverUrl, "/cards"), {
                    method: "POST",
                    headers: this._headers,
                    body: JSON.stringify({ name: e.name, link: e.link }),
                  }).then(function (e) {
                    return t._checkStatus(e);
                  });
                },
              },
              {
                key: "deleteCard",
                value: function (e) {
                  var t = this;
                  return fetch(
                    "".concat(this._serverUrl, "/cards/").concat(e),
                    { method: "DELETE", headers: this._headers }
                  ).then(function (e) {
                    return t._checkStatus(e);
                  });
                },
              },
              {
                key: "changeLikeCardStatus",
                value: function (e, t) {
                  var n = this;
                  return fetch(
                    "".concat(this._serverUrl, "/cards/likes/").concat(e),
                    { method: t ? "PUT" : "DELETE", headers: this._headers }
                  ).then(function (e) {
                    return n._checkStatus(e);
                  });
                },
              },
              {
                key: "updateAvatar",
                value: function (e) {
                  var t = this;
                  return fetch("".concat(this._serverUrl, "/users/me/avatar"), {
                    method: "PATCH",
                    headers: this._headers,
                    body: JSON.stringify({ avatar: e.avatar }),
                  }).then(function (e) {
                    return t._checkStatus(e);
                  });
                },
              },
            ]),
            e
          );
        })())({
          serverUrl: "https://mesto.nomoreparties.co/v1/cohort-24",
          headers: {
            authorization: "99295e52-decf-4a30-8030-f17c65fb60b0",
            "Content-Type": "application/json",
          },
        }),
        J = "https://auth.nomoreparties.co",
        B = function () {
          var e = Object(a.useState)(!1),
            t = Object(l.a)(e, 2),
            n = t[0],
            s = t[1],
            c = Object(a.useState)(!1),
            i = Object(l.a)(c, 2),
            o = i[0],
            b = i[1],
            m = Object(a.useState)(!1),
            _ = Object(l.a)(m, 2),
            h = _[0],
            f = _[1],
            O = Object(a.useState)(!1),
            x = Object(l.a)(O, 2),
            v = x[0],
            S = x[1],
            T = Object(a.useState)(!1),
            P = Object(l.a)(T, 2),
            L = P[0],
            D = P[1],
            q = Object(a.useState)(!1),
            F = Object(l.a)(q, 2),
            B = F[0],
            R = F[1],
            M = Object(a.useState)(!1),
            H = Object(l.a)(M, 2),
            G = H[0],
            Y = H[1],
            K = Object(a.useState)(!1),
            Q = Object(l.a)(K, 2),
            V = Q[0],
            W = Q[1],
            X = Object(a.useState)(!1),
            Z = Object(l.a)(X, 2),
            $ = Z[0],
            ee = Z[1],
            te = Object(a.useState)({}),
            ne = Object(l.a)(te, 2),
            ae = ne[0],
            se = ne[1],
            ce = Object(a.useState)([]),
            ie = Object(l.a)(ce, 2),
            oe = ie[0],
            re = ie[1],
            ue = Object(a.useState)({}),
            le = Object(l.a)(ue, 2),
            de = le[0],
            pe = le[1],
            je = Object(a.useState)({}),
            be = Object(l.a)(je, 2),
            me = be[0],
            _e = be[1],
            he = Object(a.useState)({}),
            fe = Object(l.a)(he, 2),
            Oe = fe[0],
            xe = fe[1],
            ge = Object(a.useState)({ email: "" }),
            ve = Object(l.a)(ge, 2),
            Se = ve[0],
            Ce = ve[1],
            Ne = Object(a.useState)(!1),
            ke = Object(l.a)(Ne, 2),
            we = ke[0],
            ye = ke[1],
            Te = Object(d.g)();
          Object(a.useEffect)(function () {
            z.getInitialCards()
              .then(function (e) {
                re(e);
              })
              .catch(function (e) {
                console.log(
                  "\u041d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a: "
                    .concat(e.status, " ")
                    .concat(e.statusText)
                );
              });
          }, []),
            Object(a.useEffect)(function () {
              z.getUserData()
                .then(function (e) {
                  _e(e);
                })
                .catch(function (e) {
                  console.log(
                    "\u041d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: "
                      .concat(e.status, " ")
                      .concat(e.statusText)
                  );
                });
            }, []);
          var Pe = function (e) {
            s(!1), f(!1), b(!1), S(!1), D(!1), R(!1);
          };
          Object(a.useEffect)(
            function () {
              return (
                (n || o || h || v || L || B) &&
                  document.addEventListener("keydown", Ee),
                function () {
                  document.removeEventListener("keydown", Ee);
                }
              );
            },
            [n, o, h, v, L, B]
          );
          var Ue = function (e) {
              (e.target.classList.contains("page__popup") ||
                e.target.classList.contains("popup__button-close")) &&
                Pe();
            },
            Ee = function (e) {
              27 === e.keyCode && Pe();
            };
          Object(a.useEffect)(
            function () {
              Le();
            },
            [Te]
          );
          var Le = function () {
            var e = localStorage.getItem("jwt");
            e &&
              (function (e) {
                return fetch("".concat(J, "/users/me"), {
                  method: "GET",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer ".concat(e),
                  },
                })
                  .then(function (e) {
                    if (e.ok) return e.json();
                    localStorage.removeItem("jwt");
                  })
                  .then(function (e) {
                    return e;
                  })
                  .catch(function (e) {
                    return console.log(
                      "\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0435 \u0442\u043e\u043a\u0435\u043d\u0430:".concat(
                        e
                      )
                    );
                  });
              })(e).then(function (e) {
                var t = e.data;
                Ce(t.email), W(!0), Te.push("/main");
              });
          };
          return Object(j.jsx)(p.Provider, {
            value: {
              currentUser: me,
              authUserData: Oe,
              isLoggedIn: V,
              setIsShowPassword: ye,
              isShowPassword: we,
              isSignedUp: $,
            },
            children: Object(j.jsxs)("div", {
              className: "page",
              children: [
                Object(j.jsx)("div", {
                  className: "page__container",
                  children: Object(j.jsxs)(d.d, {
                    children: [
                      Object(j.jsx)(I, {
                        path: "/main",
                        component: g,
                        onEditProfile: function () {
                          s(!0);
                        },
                        onEditAvatar: function () {
                          f(!0);
                        },
                        onAddPlace: function () {
                          b(!0);
                        },
                        onCardClick: function (e) {
                          S(!0), se(e);
                        },
                        cards: oe,
                        onLikeClick: function (e) {
                          var t = e.likes.some(function (e) {
                            return e._id === me._id;
                          });
                          z.changeLikeCardStatus(e._id, !t)
                            .then(function (t) {
                              re(function (n) {
                                return n.map(function (n) {
                                  return n._id === e._id ? t : n;
                                });
                              });
                            })
                            .catch(function (e) {
                              console.log(
                                "\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u043b\u0430\u0439\u043a\u0430: "
                                  .concat(e.status, " ")
                                  .concat(e.statusText)
                              );
                            });
                        },
                        onDeleteClick: function (e) {
                          D(!0), pe(e);
                        },
                        signOut: function () {
                          W(!1),
                            localStorage.removeItem("jwt"),
                            Te.push("/sign-in");
                        },
                        to: "/sign-in",
                        userEmail: Se,
                      }),
                      Object(j.jsx)(d.b, {
                        path: "/sign-in",
                        children: Object(j.jsx)(U, {
                          handleLogin: function (e, t) {
                            Y(!0),
                              (function (e, t) {
                                return fetch("".concat(J, "/signin"), {
                                  method: "POST",
                                  headers: {
                                    Accept: "application/json",
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify({
                                    password: e,
                                    email: t,
                                  }),
                                })
                                  .then(function (e) {
                                    return 200 === e.status
                                      ? e.json()
                                      : Promise.reject(
                                          "\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(
                                            e.status
                                          )
                                        );
                                  })
                                  .then(function (e) {
                                    if (e.token)
                                      return (
                                        localStorage.setItem("jwt", e.token), e
                                      );
                                  })
                                  .then(function (e) {
                                    return e;
                                  })
                                  .catch(function (e) {
                                    return console.log(
                                      "\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(
                                        e
                                      )
                                    );
                                  });
                              })(e, t)
                                .then(function (e) {
                                  e
                                    ? (xe({ email: "", password: "" }),
                                      W(!0),
                                      ye(!1),
                                      Te.push("/main"),
                                      setTimeout(function () {
                                        return Y(!1);
                                      }, 3e3))
                                    : (xe(
                                        Object(r.a)(
                                          Object(r.a)({}, Oe),
                                          {},
                                          {
                                            message:
                                              "\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.",
                                          }
                                        )
                                      ),
                                      W(!1),
                                      Y(!1),
                                      R(!0),
                                      ye(!1));
                                })
                                .catch(function (e) {
                                  console.log(
                                    "\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(
                                      e.status
                                    )
                                  ),
                                    Y(!1),
                                    ye(!1);
                                });
                          },
                          isSubmitted: G,
                        }),
                      }),
                      Object(j.jsx)(d.b, {
                        path: "/sign-up",
                        children: Object(j.jsx)(E, {
                          handleRegister: function (e, t, n) {
                            t === n
                              ? (Y(!0),
                                (function (e, t) {
                                  return (
                                    console.log(e),
                                    console.log(t),
                                    fetch("".concat(J, "/signup"), {
                                      method: "POST",
                                      headers: {
                                        Accept: "application/json",
                                        "Content-type": "application/json",
                                      },
                                      body: JSON.stringify({
                                        password: e,
                                        email: t,
                                      }),
                                    })
                                      .then(function (e) {
                                        try {
                                          if (201 === e.status) return e.json();
                                        } catch (t) {
                                          return t;
                                        }
                                      })
                                      .then(function (e) {
                                        return e;
                                      })
                                      .catch(function (e) {
                                        console.log(
                                          "\u041e\u0448\u0438\u0431\u043a\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(
                                            e
                                          )
                                        );
                                      })
                                  );
                                })(t, e).then(function (e) {
                                  e
                                    ? (xe(
                                        Object(r.a)(
                                          Object(r.a)({}, Oe),
                                          {},
                                          {
                                            message:
                                              "\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!",
                                          }
                                        )
                                      ),
                                      R(!0),
                                      ee(!0),
                                      ye(!1),
                                      Te.push("/sign-in"))
                                    : (xe(
                                        Object(r.a)(
                                          Object(r.a)({}, Oe),
                                          {},
                                          {
                                            message:
                                              "\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.",
                                          }
                                        )
                                      ),
                                      R(!0),
                                      ee(!1),
                                      ye(!1),
                                      Y(!1));
                                }))
                              : (xe(
                                  Object(r.a)(
                                    Object(r.a)({}, Oe),
                                    {},
                                    {
                                      password: "",
                                      confirmPassword: "",
                                      message:
                                        "\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437",
                                    }
                                  )
                                ),
                                ee(!1),
                                ye(!1),
                                R(!0)),
                              setTimeout(function () {
                                return Y(!1);
                              }, 2e3);
                          },
                          isSubmitted: G,
                        }),
                      }),
                      Object(j.jsx)(d.b, {
                        path: "/",
                        children: V
                          ? Object(j.jsx)(d.a, { to: "/main" })
                          : Object(j.jsx)(d.a, { to: "/sign-in" }),
                      }),
                    ],
                  }),
                }),
                Object(j.jsx)(C, {
                  isOpen: n,
                  onClose: Ue,
                  onUpdateUser: function (e) {
                    Y(!0),
                      z
                        .updateUserData(e)
                        .then(function (e) {
                          _e(e),
                            s(!1),
                            setTimeout(function () {
                              return Y(!1);
                            }, 1e3);
                        })
                        .catch(function (e) {
                          console.log(
                            "\u041d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: "
                              .concat(e.status, " ")
                              .concat(e.statusText)
                          );
                        });
                  },
                  isSubmitted: G,
                }),
                Object(j.jsx)(N, {
                  isOpen: h,
                  onClose: Ue,
                  onUpdateAvatar: function (e) {
                    Y(!0),
                      z
                        .updateAvatar(e)
                        .then(function (e) {
                          _e(Object.assign(me, { avatar: e.avatar })),
                            f(!1),
                            setTimeout(function () {
                              return Y(!1);
                            }, 1e3);
                        })
                        .catch(function (e) {
                          console.log(
                            "\u041d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0430\u0432\u0430\u0442\u0430\u0440\u0430: "
                              .concat(e.status, " ")
                              .concat(e.statusText)
                          );
                        });
                  },
                  isSubmitted: G,
                }),
                Object(j.jsx)(k, {
                  isOpen: o,
                  onClose: Ue,
                  onAddPlace: function (e) {
                    Y(!0),
                      z
                        .addCard(e)
                        .then(function (e) {
                          re([e].concat(Object(u.a)(oe))),
                            b(!1),
                            setTimeout(function () {
                              return Y(!1);
                            }, 1e3);
                        })
                        .catch(function (e) {
                          console.log(
                            "\u041d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: "
                              .concat(e.status, " ")
                              .concat(e.statusText)
                          );
                        });
                  },
                  isSubmitted: G,
                }),
                Object(j.jsx)(w, { isOpen: v, data: ae, onClose: Ue }),
                Object(j.jsx)(y, {
                  isOpen: L,
                  onClose: Ue,
                  isSubmitted: G,
                  deleteCard: function (e) {
                    Y(!0),
                      z
                        .deleteCard(e._id)
                        .then(function () {
                          re(
                            oe.filter(function (t) {
                              return t._id !== e._id;
                            })
                          ),
                            D(!1),
                            setTimeout(function () {
                              return Y(!1);
                            }, 1e3);
                        })
                        .catch(function (e) {
                          console.log(
                            "\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: "
                              .concat(e.status, " ")
                              .concat(e.statusText)
                          );
                        });
                  },
                  data: de,
                }),
                Object(j.jsx)(A, {
                  isOpen: B,
                  onClose: Ue,
                  name: "infoToolTip",
                }),
              ],
            }),
          });
        },
        R = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 41))
              .then(function (t) {
                var n = t.getCLS,
                  a = t.getFID,
                  s = t.getFCP,
                  c = t.getLCP,
                  i = t.getTTFB;
                n(e), a(e), s(e), c(e), i(e);
              });
        };
      i.a.render(
        Object(j.jsx)(s.a.StrictMode, {
          children: Object(j.jsx)(o.a, { children: Object(j.jsx)(B, {}) }),
        }),
        document.getElementById("root")
      ),
        R();
    },
  },
  [[40, 1, 2]],
]);
//# sourceMappingURL=main.6785c131.chunk.js.map
