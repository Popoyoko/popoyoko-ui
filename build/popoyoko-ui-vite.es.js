import e from "react";
const d = ({ background: t, backgroundColor: i, label: a, mention: M, subTitle: c, price: n, ...I }) => {
  const l = (a ? "media" : "simple") === "simple" ? "card" : "card media";
  return /* @__PURE__ */ e.createElement("div", { className: "card" }, /* @__PURE__ */ e.createElement("div", { className: l, style: { background: t }, ...I }), a && /* @__PURE__ */ e.createElement("div", { className: "card-section", style: { backgroundColor: i } }, /* @__PURE__ */ e.createElement("div", { className: "card-group" }, /* @__PURE__ */ e.createElement("p", null, M), /* @__PURE__ */ e.createElement("div", { className: "card-information" }, /* @__PURE__ */ e.createElement("div", { className: "card-title" }, /* @__PURE__ */ e.createElement("p", null, a), /* @__PURE__ */ e.createElement("p", null, c)), n))));
};
const m = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDQgMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yIDRDMy4xMDQ1NyA0IDQgMy4xMDQ1NyA0IDJDNCAwLjg5NTQzMSAzLjEwNDU3IDAgMiAwQzAuODk1NDMxIDAgMCAwLjg5NTQzMSAwIDJDMCAzLjEwNDU3IDAuODk1NDMxIDQgMiA0WiIgZmlsbD0iI0VERjFGQSIvPgo8cGF0aCBkPSJNNCAxN1Y2SDBWMTdINFoiIGZpbGw9IiNFREYxRkEiLz4KPC9zdmc+Cg==", r = ({
  background: t,
  label: i
  // ...props
}) => /* @__PURE__ */ e.createElement("div", { className: "container-information", style: { background: t } }, /* @__PURE__ */ e.createElement("h2", null, "Information"), /* @__PURE__ */ e.createElement("div", { className: "information-section" }, /* @__PURE__ */ e.createElement("div", { className: "information-svg" }, /* @__PURE__ */ e.createElement("img", { src: m, alt: "Information" })), /* @__PURE__ */ e.createElement("div", { className: "information-content" }, i)));
const E = ({ title: t, description: i, onChange: a }) => /* @__PURE__ */ e.createElement("div", { className: "text-layout" }, /* @__PURE__ */ e.createElement("p", { className: "text-title" }, t), /* @__PURE__ */ e.createElement("textarea", {
  value: i,
  onChange: a,
  className: "text-description"
}));
const o = ({ src: t }) => /* @__PURE__ */ e.createElement("div", { className: "logo" }, /* @__PURE__ */ e.createElement("img", { src: t }));
const g = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDE2QzE5LjMxMzcgMTYgMjIgMTMuMzEzNyAyMiAxMEMyMiA2LjY4NjI5IDE5LjMxMzcgNCAxNiA0QzEyLjY4NjMgNCAxMCA2LjY4NjI5IDEwIDEwQzEwIDEzLjMxMzcgMTIuNjg2MyAxNiAxNiAxNloiIGZpbGw9IiMzMjU2OEYiLz4KPHBhdGggZD0iTTQgMjhDNCAyMy4wMjk0IDkuMzcyNTggMTkgMTYgMTlDMjIuNjI3NCAxOSAyOCAyMy4wMjk0IDI4IDI4SDRaIiBmaWxsPSIjMzI1NjhGIi8+Cjwvc3ZnPgo=", j = ({ small: t, medium: i, large: a }) => {
  let M = "icon";
  return t && (M += " icon-small"), i && (M += " icon-medium"), a && (M += " icon-large"), /* @__PURE__ */ e.createElement("div", { className: M }, /* @__PURE__ */ e.createElement("img", { src: g, alt: "Icon" }));
};
const s = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxOSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjU2MzMgMEg1LjQzNjc0TDMuNzcwMDcgMi43NUgwVjEzSDRWMTFIMlY0Ljc1SDQuODk2NTlMNi41NjMyNiAySDEwLjQzNjdMMTIuMTAzNCA0Ljc1SDE1VjdIMTdWMi43NUgxMy4yMjk5TDExLjU2MzMgMFoiIGZpbGw9IiMxQjYwNDIiLz4KPHBhdGggZD0iTTE1IDE1VjEzSDEzVjExSDE1VjlIMTdWMTFIMTlWMTNIMTdWMTVIMTVaIiBmaWxsPSIjMUI2MDQyIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMgOC41QzEzIDEwLjk4NTMgMTAuOTg1MyAxMyA4LjUgMTNDNi4wMTQ3MiAxMyA0IDEwLjk4NTMgNCA4LjVDNCA2LjAxNDcyIDYuMDE0NzIgNCA4LjUgNEMxMC45ODUzIDQgMTMgNi4wMTQ3MiAxMyA4LjVaTTExIDguNUMxMSA5Ljg4MDcxIDkuODgwNzEgMTEgOC41IDExQzcuMTE5MjkgMTEgNiA5Ljg4MDcxIDYgOC41QzYgNy4xMTkyOSA3LjExOTI5IDYgOC41IDZDOS44ODA3MSA2IDExIDcuMTE5MjkgMTEgOC41WiIgZmlsbD0iIzFCNjA0MiIvPgo8L3N2Zz4K", A = ({ small: t, background: i }) => {
  let a = "avatar";
  return t && (a += " avatar-small"), /* @__PURE__ */ e.createElement("div", { className: a, style: { background: i } }, t ? /* @__PURE__ */ e.createElement("div", { className: "badge" }) : /* @__PURE__ */ e.createElement("div", { className: "edit" }, /* @__PURE__ */ e.createElement("button", { className: "btn-edit" }, /* @__PURE__ */ e.createElement("p", null, "Edit"), /* @__PURE__ */ e.createElement("img", { src: s, alt: "edit" }))));
};
export {
  A as Avatar,
  d as Card,
  j as Icon,
  r as Information,
  o as Logo,
  E as Text
};
//# sourceMappingURL=popoyoko-ui-vite.es.js.map
