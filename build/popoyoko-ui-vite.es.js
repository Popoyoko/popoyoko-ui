import b from "react";
const m = ({ primary: t = !1, size: o = "medium", backgroundColor: e, label: n, ...r }) => {
  const s = t ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ b.createElement("button", {
    type: "button",
    className: ["storybook-button", `storybook-button--${o}`, s].join(" "),
    style: { backgroundColor: e },
    ...r
  }, n);
};
export {
  m as Button
};
//# sourceMappingURL=popoyoko-ui-vite.es.js.map
