import t from "react";
const i = ({ primary: a = !1, size: e = "medium", backgroundColor: o, label: r, ...s }) => {
  const c = a ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ t.createElement("button", {
    type: "button",
    className: ["storybook-button", `storybook-button--${e}`, c].join(" "),
    style: { backgroundColor: o },
    ...s
  }, r);
};
const l = ({ background: a, label: e, mention: o, subTitle: r, price: s, ...c }) => {
  const n = (e ? "media" : "simple") === "simple" ? "card" : "card media";
  return /* @__PURE__ */ t.createElement("div", { className: "card" }, /* @__PURE__ */ t.createElement("div", { className: n, style: { background: a }, ...c }), e && /* @__PURE__ */ t.createElement("div", { className: "card-section" }, /* @__PURE__ */ t.createElement("div", { className: "card-groud" }, o, /* @__PURE__ */ t.createElement("div", { className: "card-information" }, /* @__PURE__ */ t.createElement("div", { className: "card-title" }, e, r), s))));
};
export {
  i as Button,
  l as Card
};
//# sourceMappingURL=popoyoko-ui-vite.es.js.map
