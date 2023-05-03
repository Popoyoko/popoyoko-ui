import e from "react";
const d = ({ primary: t = !1, size: a = "medium", backgroundColor: n, label: i, ...c }) => {
  const o = t ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ e.createElement("button", {
    type: "button",
    className: ["storybook-button", `storybook-button--${a}`, o].join(" "),
    style: { backgroundColor: n },
    ...c
  }, i);
};
const N = ({ background: t, backgroundColor: a, label: n, mention: i, subTitle: c, price: o, ...m }) => {
  const s = (n ? "media" : "simple") === "simple" ? "card" : "card media";
  return /* @__PURE__ */ e.createElement("div", { className: "card" }, /* @__PURE__ */ e.createElement("div", { className: s, style: { background: t }, ...m }), n && /* @__PURE__ */ e.createElement("div", { className: "card-section", style: { backgroundColor: a } }, /* @__PURE__ */ e.createElement("div", { className: "card-group" }, /* @__PURE__ */ e.createElement("p", null, i), /* @__PURE__ */ e.createElement("div", { className: "card-information" }, /* @__PURE__ */ e.createElement("div", { className: "card-title" }, /* @__PURE__ */ e.createElement("p", null, n), /* @__PURE__ */ e.createElement("p", null, c)), o))));
};
const r = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDQgMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yIDRDMy4xMDQ1NyA0IDQgMy4xMDQ1NyA0IDJDNCAwLjg5NTQzMSAzLjEwNDU3IDAgMiAwQzAuODk1NDMxIDAgMCAwLjg5NTQzMSAwIDJDMCAzLjEwNDU3IDAuODk1NDMxIDQgMiA0WiIgZmlsbD0iI0VERjFGQSIvPgo8cGF0aCBkPSJNNCAxN1Y2SDBWMTdINFoiIGZpbGw9IiNFREYxRkEiLz4KPC9zdmc+Cg==", g = ({
  background: t,
  label: a
  // ...props
}) => /* @__PURE__ */ e.createElement("div", { className: "container-information", style: { background: t } }, /* @__PURE__ */ e.createElement("h2", null, "Information"), /* @__PURE__ */ e.createElement("div", { className: "information-section" }, /* @__PURE__ */ e.createElement("div", { className: "information-svg" }, /* @__PURE__ */ e.createElement("img", { src: r, alt: "Information" })), /* @__PURE__ */ e.createElement("div", { className: "information-content" }, a)));
const D = ({ title: t, description: a, onChange: n }) => /* @__PURE__ */ e.createElement("div", { className: "text-layout" }, /* @__PURE__ */ e.createElement("p", { className: "text-title" }, t), /* @__PURE__ */ e.createElement("textarea", {
  value: a,
  onChange: n,
  className: "text-description"
}));
const E = ({ src: t }) => /* @__PURE__ */ e.createElement("div", { className: "logo" }, /* @__PURE__ */ e.createElement("img", { src: t }));
const l = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDE2QzE5LjMxMzcgMTYgMjIgMTMuMzEzNyAyMiAxMEMyMiA2LjY4NjI5IDE5LjMxMzcgNCAxNiA0QzEyLjY4NjMgNCAxMCA2LjY4NjI5IDEwIDEwQzEwIDEzLjMxMzcgMTIuNjg2MyAxNiAxNiAxNloiIGZpbGw9IiMzMjU2OEYiLz4KPHBhdGggZD0iTTQgMjhDNCAyMy4wMjk0IDkuMzcyNTggMTkgMTYgMTlDMjIuNjI3NCAxOSAyOCAyMy4wMjk0IDI4IDI4SDRaIiBmaWxsPSIjMzI1NjhGIi8+Cjwvc3ZnPgo=", y = ({ small: t, medium: a, large: n }) => {
  let i = "icon";
  return t && (i += " icon-small"), a && (i += " icon-medium"), n && (i += " icon-large"), /* @__PURE__ */ e.createElement("div", { className: i }, /* @__PURE__ */ e.createElement("img", { src: l, alt: "Icon" }));
};
export {
  d as Button,
  N as Card,
  y as Icon,
  g as Information,
  E as Logo,
  D as Text
};
//# sourceMappingURL=popoyoko-ui-vite.es.js.map
