import t from "react";
const l = ({ primary: o = !1, size: e = "medium", backgroundColor: n, label: r, ...s }) => {
  const u = o ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ t.createElement("button", {
    type: "button",
    className: ["storybook-button", `storybook-button--${e}`, u].join(" "),
    style: { backgroundColor: n },
    ...s
  }, r);
};
function c() {
  return /* @__PURE__ */ t.createElement("h1", null, " Hello ");
}
export {
  l as Button,
  c as Title
};
//# sourceMappingURL=popoyoko-ui-vite.es.js.map
