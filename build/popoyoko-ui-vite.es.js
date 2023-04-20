import e from "react";
const l = ({ primary: a = !1, size: t = "medium", backgroundColor: n, label: o, ...i }) => {
  const c = a ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ e.createElement("button", {
    type: "button",
    className: ["storybook-button", `storybook-button--${t}`, c].join(" "),
    style: { backgroundColor: n },
    ...i
  }, o);
};
const N = ({ background: a, label: t, mention: n, subTitle: o, price: i, ...c }) => {
  const r = (t ? "media" : "simple") === "simple" ? "card" : "card media";
  return /* @__PURE__ */ e.createElement("div", { className: "card" }, /* @__PURE__ */ e.createElement("div", { className: r, style: { background: a }, ...c }), t && /* @__PURE__ */ e.createElement("div", { className: "card-section" }, /* @__PURE__ */ e.createElement("div", { className: "card-groud" }, n, /* @__PURE__ */ e.createElement("div", { className: "card-information" }, /* @__PURE__ */ e.createElement("div", { className: "card-title" }, t, o), i))));
};
const s = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDQgMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yIDRDMy4xMDQ1NyA0IDQgMy4xMDQ1NyA0IDJDNCAwLjg5NTQzMSAzLjEwNDU3IDAgMiAwQzAuODk1NDMxIDAgMCAwLjg5NTQzMSAwIDJDMCAzLjEwNDU3IDAuODk1NDMxIDQgMiA0WiIgZmlsbD0iI0VERjFGQSIvPgo8cGF0aCBkPSJNNCAxN1Y2SDBWMTdINFoiIGZpbGw9IiNFREYxRkEiLz4KPC9zdmc+Cg==", I = ({ background: a, label: t, ...n }) => /* @__PURE__ */ e.createElement("div", { className: "container-information", style: { background: a } }, /* @__PURE__ */ e.createElement("h2", null, "Information"), /* @__PURE__ */ e.createElement("div", { className: "information-section" }, /* @__PURE__ */ e.createElement("div", { className: "information-svg" }, /* @__PURE__ */ e.createElement("img", { src: s, alt: "Information" })), /* @__PURE__ */ e.createElement("div", { className: "information-content" }, t)));
export {
  l as Button,
  N as Card,
  I as Information
};
//# sourceMappingURL=popoyoko-ui-vite.es.js.map
