import e from "react";
const N = ({ primary: a = !1, size: n = "medium", backgroundColor: t, label: o, ...c }) => {
  const r = a ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ e.createElement("button", {
    type: "button",
    className: ["storybook-button", `storybook-button--${n}`, r].join(" "),
    style: { backgroundColor: t },
    ...c
  }, o);
};
const I = ({ background: a, backgroundColor: n, label: t, mention: o, subTitle: c, price: r, ...s }) => {
  const i = (t ? "media" : "simple") === "simple" ? "card" : "card media";
  return /* @__PURE__ */ e.createElement("div", { className: "card" }, /* @__PURE__ */ e.createElement("div", { className: i, style: { background: a }, ...s }), t && /* @__PURE__ */ e.createElement("div", { className: "card-section", style: { backgroundColor: n } }, /* @__PURE__ */ e.createElement("div", { className: "card-group" }, /* @__PURE__ */ e.createElement("p", null, o), /* @__PURE__ */ e.createElement("div", { className: "card-information" }, /* @__PURE__ */ e.createElement("div", { className: "card-title" }, /* @__PURE__ */ e.createElement("p", null, t), /* @__PURE__ */ e.createElement("p", null, c)), r))));
};
const m = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDQgMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yIDRDMy4xMDQ1NyA0IDQgMy4xMDQ1NyA0IDJDNCAwLjg5NTQzMSAzLjEwNDU3IDAgMiAwQzAuODk1NDMxIDAgMCAwLjg5NTQzMSAwIDJDMCAzLjEwNDU3IDAuODk1NDMxIDQgMiA0WiIgZmlsbD0iI0VERjFGQSIvPgo8cGF0aCBkPSJNNCAxN1Y2SDBWMTdINFoiIGZpbGw9IiNFREYxRkEiLz4KPC9zdmc+Cg==", D = ({ background: a, label: n, ...t }) => /* @__PURE__ */ e.createElement("div", { className: "container-information", style: { background: a } }, /* @__PURE__ */ e.createElement("h2", null, "Information"), /* @__PURE__ */ e.createElement("div", { className: "information-section" }, /* @__PURE__ */ e.createElement("div", { className: "information-svg" }, /* @__PURE__ */ e.createElement("img", { src: m, alt: "Information" })), /* @__PURE__ */ e.createElement("div", { className: "information-content" }, n)));
const E = ({ title: a, description: n, onChange: t }) => /* @__PURE__ */ e.createElement("div", { className: "text-layout" }, /* @__PURE__ */ e.createElement("p", { className: "text-title" }, a), /* @__PURE__ */ e.createElement("textarea", {
  value: n,
  onChange: t,
  className: "text-description"
}));
export {
  N as Button,
  I as Card,
  D as Information,
  E as Text
};
//# sourceMappingURL=popoyoko-ui-vite.es.js.map
