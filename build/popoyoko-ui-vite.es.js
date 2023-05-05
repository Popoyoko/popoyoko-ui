import e from "react";
const E = ({ label: t, typeSvg: a, srcIcon: n, onClick: i }) => {
  if (a === "none")
    return /* @__PURE__ */ e.createElement("button", { className: "buttonPrimary" }, t);
  if (a === "left")
    return /* @__PURE__ */ e.createElement("button", { className: "buttonPrimary" }, /* @__PURE__ */ e.createElement("img", { src: n }), t);
  if (a === "right")
    return /* @__PURE__ */ e.createElement("button", { className: "buttonPrimary" }, t, /* @__PURE__ */ e.createElement("img", { src: n }));
  if (a === "only")
    return /* @__PURE__ */ e.createElement("button", { className: "buttonPrimary" }, /* @__PURE__ */ e.createElement("img", { src: n }));
};
const D = ({ label: t, typeSvg: a, srcIcon: n, onClick: i }) => a === "none" ? /* @__PURE__ */ e.createElement("button", { className: "buttonSecondary" }, t) : a === "left" ? /* @__PURE__ */ e.createElement("button", { className: "buttonSecondary" }, /* @__PURE__ */ e.createElement("img", { src: n }), t) : a === "right" ? /* @__PURE__ */ e.createElement("button", { className: "buttonSecondary" }, t, /* @__PURE__ */ e.createElement("img", { src: n })) : a === "only" ? /* @__PURE__ */ e.createElement("button", { className: "buttonSecondary" }, /* @__PURE__ */ e.createElement("img", { src: n })) : /* @__PURE__ */ e.createElement("button", { className: "buttonSecondary" });
const u = ({ label: t, typeSvg: a, srcIcon: n, onClick: i }) => a === "none" ? /* @__PURE__ */ e.createElement("button", { className: "buttonTertiary" }, t) : a === "left" ? /* @__PURE__ */ e.createElement("button", { className: "buttonTertiary" }, /* @__PURE__ */ e.createElement("img", { src: n }), t) : a === "right" ? /* @__PURE__ */ e.createElement("button", { className: "buttonTertiary" }, t, /* @__PURE__ */ e.createElement("img", { src: n })) : a === "only" ? /* @__PURE__ */ e.createElement("button", { className: "buttonTertiary" }, /* @__PURE__ */ e.createElement("img", { src: n })) : /* @__PURE__ */ e.createElement("button", { className: "buttonTertiary" });
const d = ({ background: t, backgroundColor: a, label: n, mention: i, subTitle: c, price: r, ...m }) => {
  const M = (n ? "media" : "simple") === "simple" ? "card" : "card media";
  return /* @__PURE__ */ e.createElement("div", { className: "card" }, /* @__PURE__ */ e.createElement("div", { className: M, style: { background: t }, ...m }), n && /* @__PURE__ */ e.createElement("div", { className: "card-section", style: { backgroundColor: a } }, /* @__PURE__ */ e.createElement("div", { className: "card-group" }, /* @__PURE__ */ e.createElement("p", null, i), /* @__PURE__ */ e.createElement("div", { className: "card-information" }, /* @__PURE__ */ e.createElement("div", { className: "card-title" }, /* @__PURE__ */ e.createElement("p", null, n), /* @__PURE__ */ e.createElement("p", null, c)), r))));
};
const l = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDQgMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yIDRDMy4xMDQ1NyA0IDQgMy4xMDQ1NyA0IDJDNCAwLjg5NTQzMSAzLjEwNDU3IDAgMiAwQzAuODk1NDMxIDAgMCAwLjg5NTQzMSAwIDJDMCAzLjEwNDU3IDAuODk1NDMxIDQgMiA0WiIgZmlsbD0iI0VERjFGQSIvPgo8cGF0aCBkPSJNNCAxN1Y2SDBWMTdINFoiIGZpbGw9IiNFREYxRkEiLz4KPC9zdmc+Cg==", T = ({
  background: t,
  label: a
  // ...props
}) => /* @__PURE__ */ e.createElement("div", { className: "container-information", style: { background: t } }, /* @__PURE__ */ e.createElement("h2", null, "Information"), /* @__PURE__ */ e.createElement("div", { className: "information-section" }, /* @__PURE__ */ e.createElement("div", { className: "information-svg" }, /* @__PURE__ */ e.createElement("img", { src: l, alt: "Information" })), /* @__PURE__ */ e.createElement("div", { className: "information-content" }, a)));
const j = ({ title: t, description: a, onChange: n }) => /* @__PURE__ */ e.createElement("div", { className: "text-layout" }, /* @__PURE__ */ e.createElement("p", { className: "text-title" }, t), /* @__PURE__ */ e.createElement("textarea", {
  value: a,
  onChange: n,
  className: "text-description"
}));
const x = ({ src: t }) => /* @__PURE__ */ e.createElement("div", { className: "logo" }, /* @__PURE__ */ e.createElement("img", { src: t }));
const s = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDE2QzE5LjMxMzcgMTYgMjIgMTMuMzEzNyAyMiAxMEMyMiA2LjY4NjI5IDE5LjMxMzcgNCAxNiA0QzEyLjY4NjMgNCAxMCA2LjY4NjI5IDEwIDEwQzEwIDEzLjMxMzcgMTIuNjg2MyAxNiAxNiAxNloiIGZpbGw9IiMzMjU2OEYiLz4KPHBhdGggZD0iTTQgMjhDNCAyMy4wMjk0IDkuMzcyNTggMTkgMTYgMTlDMjIuNjI3NCAxOSAyOCAyMy4wMjk0IDI4IDI4SDRaIiBmaWxsPSIjMzI1NjhGIi8+Cjwvc3ZnPgo=", A = ({ small: t, medium: a, large: n }) => {
  let i = "icon";
  return t && (i += " icon-small"), a && (i += " icon-medium"), n && (i += " icon-large"), /* @__PURE__ */ e.createElement("div", { className: i }, /* @__PURE__ */ e.createElement("img", { src: s, alt: "Icon" }));
};
const o = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxOSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjU2MzMgMEg1LjQzNjc0TDMuNzcwMDcgMi43NUgwVjEzSDRWMTFIMlY0Ljc1SDQuODk2NTlMNi41NjMyNiAySDEwLjQzNjdMMTIuMTAzNCA0Ljc1SDE1VjdIMTdWMi43NUgxMy4yMjk5TDExLjU2MzMgMFoiIGZpbGw9IiMxQjYwNDIiLz4KPHBhdGggZD0iTTE1IDE1VjEzSDEzVjExSDE1VjlIMTdWMTFIMTlWMTNIMTdWMTVIMTVaIiBmaWxsPSIjMUI2MDQyIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMgOC41QzEzIDEwLjk4NTMgMTAuOTg1MyAxMyA4LjUgMTNDNi4wMTQ3MiAxMyA0IDEwLjk4NTMgNCA4LjVDNCA2LjAxNDcyIDYuMDE0NzIgNCA4LjUgNEMxMC45ODUzIDQgMTMgNi4wMTQ3MiAxMyA4LjVaTTExIDguNUMxMSA5Ljg4MDcxIDkuODgwNzEgMTEgOC41IDExQzcuMTE5MjkgMTEgNiA5Ljg4MDcxIDYgOC41QzYgNy4xMTkyOSA3LjExOTI5IDYgOC41IDZDOS44ODA3MSA2IDExIDcuMTE5MjkgMTEgOC41WiIgZmlsbD0iIzFCNjA0MiIvPgo8L3N2Zz4K", y = ({ small: t, background: a }) => {
  let n = "avatar";
  return t && (n += " avatar-small"), /* @__PURE__ */ e.createElement("div", { className: n, style: { background: a } }, t ? /* @__PURE__ */ e.createElement("div", { className: "badge" }) : /* @__PURE__ */ e.createElement("div", { className: "edit" }, /* @__PURE__ */ e.createElement("button", { className: "btn-edit" }, /* @__PURE__ */ e.createElement("p", null, "Edit"), /* @__PURE__ */ e.createElement("img", { src: o, alt: "edit" }))));
};
const N = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyMiAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExIDAuNDgxNDE1TDQuMTMwNDUgOC4wMTk1TDYuNTYxODUgMTAuMDYyMkw5LjM4NDYxIDYuOTY0NzNWMTYuNzk1OUgxMi42MTU0VjYuOTY0NzNMMTUuNDM4MSAxMC4wNjIyTDE3Ljg2OTUgOC4wMTk1TDExIDAuNDgxNDE1WiIgZmlsbD0iIzMyNTY4RiIvPgo8cGF0aCBkPSJNMC41IDE5Ljg5OFYyM0gyMS41VjE5Ljg5OEgwLjVaIiBmaWxsPSIjMzI1NjhGIi8+Cjwvc3ZnPgo=", z = ({ title: t, label: a }) => /* @__PURE__ */ e.createElement("div", { className: "container-section" }, /* @__PURE__ */ e.createElement("h2", null, t), /* @__PURE__ */ e.createElement("div", { className: "section-btn" }, /* @__PURE__ */ e.createElement("div", { className: "section-svg" }, /* @__PURE__ */ e.createElement("img", { src: N, alt: "section" })), /* @__PURE__ */ e.createElement("p", null, a)));
export {
  y as Avatar,
  E as ButtonPrimary,
  D as ButtonSecondary,
  u as ButtonTertiary,
  d as Card,
  A as Icon,
  T as Information,
  x as Logo,
  z as Section,
  j as Text
};
//# sourceMappingURL=popoyoko-ui-vite.es.js.map
