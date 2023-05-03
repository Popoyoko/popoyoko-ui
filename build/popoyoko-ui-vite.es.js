import e from "react";
const N = ({ primary: t = !1, size: a = "medium", backgroundColor: n, label: o, ...c }) => {
  const r = t ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ e.createElement("button", {
    type: "button",
    className: ["storybook-button", `storybook-button--${a}`, r].join(" "),
    style: { backgroundColor: n },
    ...c
  }, o);
};
const I = ({ background: t, backgroundColor: a, label: n, mention: o, subTitle: c, price: r, ...s }) => {
  const m = (n ? "media" : "simple") === "simple" ? "card" : "card media";
  return /* @__PURE__ */ e.createElement("div", { className: "card" }, /* @__PURE__ */ e.createElement("div", { className: m, style: { background: t }, ...s }), n && /* @__PURE__ */ e.createElement("div", { className: "card-section", style: { backgroundColor: a } }, /* @__PURE__ */ e.createElement("div", { className: "card-group" }, /* @__PURE__ */ e.createElement("p", null, o), /* @__PURE__ */ e.createElement("div", { className: "card-information" }, /* @__PURE__ */ e.createElement("div", { className: "card-title" }, /* @__PURE__ */ e.createElement("p", null, n), /* @__PURE__ */ e.createElement("p", null, c)), r))));
};
const i = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDQgMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yIDRDMy4xMDQ1NyA0IDQgMy4xMDQ1NyA0IDJDNCAwLjg5NTQzMSAzLjEwNDU3IDAgMiAwQzAuODk1NDMxIDAgMCAwLjg5NTQzMSAwIDJDMCAzLjEwNDU3IDAuODk1NDMxIDQgMiA0WiIgZmlsbD0iI0VERjFGQSIvPgo8cGF0aCBkPSJNNCAxN1Y2SDBWMTdINFoiIGZpbGw9IiNFREYxRkEiLz4KPC9zdmc+Cg==", E = ({
  background: t,
  label: a
  // ...props
}) => /* @__PURE__ */ e.createElement("div", { className: "container-information", style: { background: t } }, /* @__PURE__ */ e.createElement("h2", null, "Information"), /* @__PURE__ */ e.createElement("div", { className: "information-section" }, /* @__PURE__ */ e.createElement("div", { className: "information-svg" }, /* @__PURE__ */ e.createElement("img", { src: i, alt: "Information" })), /* @__PURE__ */ e.createElement("div", { className: "information-content" }, a)));
const D = ({ title: t, description: a, onChange: n }) => /* @__PURE__ */ e.createElement("div", { className: "text-layout" }, /* @__PURE__ */ e.createElement("p", { className: "text-title" }, t), /* @__PURE__ */ e.createElement("textarea", {
  value: a,
  onChange: n,
  className: "text-description"
}));
const y = ({ src: t }) => /* @__PURE__ */ e.createElement("div", { className: "logo" }, /* @__PURE__ */ e.createElement("img", { src: t }));
export {
  N as Button,
  I as Card,
  E as Information,
  y as Logo,
  D as Text
};
//# sourceMappingURL=popoyoko-ui-vite.es.js.map
