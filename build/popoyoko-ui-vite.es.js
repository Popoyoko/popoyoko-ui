import G from "react";
const Bs = ({ showbadge: P = !0, background: O = "url(https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg)" }) => {
  const V = O ? { backgroundImage: `url(${O})` } : {
    backgroundImage: "url(https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg)"
  };
  return /* @__PURE__ */ G.createElement("div", { className: "small" }, /* @__PURE__ */ G.createElement("img", {
    className: "small",
    src: O,
    style: V
  }), P && /* @__PURE__ */ G.createElement("div", { className: "badge" }));
};
const ko = ({ type: P = "primary", label: O, typeSvg: V, srcIcon: ee }) => {
  if (V === "none")
    return /* @__PURE__ */ G.createElement("button", { className: P }, O);
  if (V === "left")
    return /* @__PURE__ */ G.createElement("button", { className: P }, /* @__PURE__ */ G.createElement("img", { src: ee, alt: "Icon" }), O);
  if (V === "right")
    return /* @__PURE__ */ G.createElement("button", { className: P }, O, /* @__PURE__ */ G.createElement("img", { src: ee, alt: "Icon" }));
  if (V === "only")
    return /* @__PURE__ */ G.createElement("button", { className: P }, /* @__PURE__ */ G.createElement("img", { src: ee, alt: "Icon" }));
};
ko.Primary = (P) => /* @__PURE__ */ G.createElement(ko, { type: "primary", ...P });
ko.Secondary = (P) => /* @__PURE__ */ G.createElement(ko, { type: "secondary", ...P });
ko.Tertiary = (P) => /* @__PURE__ */ G.createElement(ko, { type: "tertiary", ...P });
const Ns = ({ children: P }) => /* @__PURE__ */ G.createElement("div", { className: "ratio ratio-1-1" }, P);
Ns.defaultProps = {
  children: null
};
const Os = ({ children: P }) => /* @__PURE__ */ G.createElement("div", { className: "ratio ratio-2-3" }, P);
Os.defaultProps = {
  children: null
};
const wi = ({ children: P }) => /* @__PURE__ */ G.createElement("div", null, P);
wi.L1H1 = Ns;
wi.L2H3 = Os;
const Ws = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxOSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMS41NjMzIDBINS40MzY3NEwzLjc3MDA3IDIuNzVIMFYxM0g0VjExSDJWNC43NUg0Ljg5NjU5TDYuNTYzMjYgMkgxMC40MzY3TDEyLjEwMzQgNC43NUgxNVY3SDE3VjIuNzVIMTMuMjI5OUwxMS41NjMzIDBaIiBmaWxsPSIjMUI2MDQyIi8+DQo8cGF0aCBkPSJNMTUgMTVWMTNIMTNWMTFIMTVWOUgxN1YxMUgxOVYxM0gxN1YxNUgxNVoiIGZpbGw9IiMxQjYwNDIiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMgOC41QzEzIDEwLjk4NTMgMTAuOTg1MyAxMyA4LjUgMTNDNi4wMTQ3MiAxMyA0IDEwLjk4NTMgNCA4LjVDNCA2LjAxNDcyIDYuMDE0NzIgNCA4LjUgNEMxMC45ODUzIDQgMTMgNi4wMTQ3MiAxMyA4LjVaTTExIDguNUMxMSA5Ljg4MDcxIDkuODgwNzEgMTEgOC41IDExQzcuMTE5MjkgMTEgNiA5Ljg4MDcxIDYgOC41QzYgNy4xMTkyOSA3LjExOTI5IDYgOC41IDZDOS44ODA3MSA2IDExIDcuMTE5MjkgMTEgOC41WiIgZmlsbD0iIzFCNjA0MiIvPg0KPC9zdmc+DQo=", Hs = ({ showedit: P = !0, background: O = "url(https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg)" }) => {
  const V = O ? { backgroundImage: `url(${O})` } : {
    backgroundImage: "url(https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg)"
  };
  return /* @__PURE__ */ G.createElement("div", { className: "cover" }, /* @__PURE__ */ G.createElement(wi.L1H1, null, /* @__PURE__ */ G.createElement("img", { className: "cover", src: O, style: V }), P && /* @__PURE__ */ G.createElement("div", { className: "edit" }, /* @__PURE__ */ G.createElement(ko.Tertiary, { typeSvg: "right", label: "Edit", srcIcon: Ws }))));
}, ms = ({ children: P }) => /* @__PURE__ */ G.createElement("div", null, P);
ms.Small = Bs;
ms.Cover = Hs;
const Ys = ({ label: P = "", mention: O = "", subTitle: V = "", price: ee = 0 }) => /* @__PURE__ */ G.createElement("div", null, /* @__PURE__ */ G.createElement("div", { className: "card" }, /* @__PURE__ */ G.createElement(wi.L2H3, null)), /* @__PURE__ */ G.createElement("div", { className: "card-section" }, /* @__PURE__ */ G.createElement("div", { className: "card-group" }, /* @__PURE__ */ G.createElement("p", null, O), /* @__PURE__ */ G.createElement("div", { className: "card-information" }, /* @__PURE__ */ G.createElement("div", { className: "card-title" }, /* @__PURE__ */ G.createElement("p", null, P), /* @__PURE__ */ G.createElement("p", null, V)), ee))));
const Vs = () => /* @__PURE__ */ G.createElement("div", { className: "card" }, /* @__PURE__ */ G.createElement(wi.L2H3, null)), js = ({ children: P }) => /* @__PURE__ */ G.createElement("div", null, P);
js.Default = Ys;
js.Media = Vs;
const $s = ({ src: P }) => /* @__PURE__ */ G.createElement("div", { className: "logo" }, /* @__PURE__ */ G.createElement("img", { src: P }));
function Zs(P) {
  return P && P.__esModule && Object.prototype.hasOwnProperty.call(P, "default") ? P.default : P;
}
var hs = { exports: {} }, vs = { exports: {} }, fl = { exports: {} }, _e = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ss;
function Gs() {
  if (Ss)
    return _e;
  Ss = 1;
  var P = typeof Symbol == "function" && Symbol.for, O = P ? Symbol.for("react.element") : 60103, V = P ? Symbol.for("react.portal") : 60106, ee = P ? Symbol.for("react.fragment") : 60107, g = P ? Symbol.for("react.strict_mode") : 60108, Q = P ? Symbol.for("react.profiler") : 60114, Te = P ? Symbol.for("react.provider") : 60109, K = P ? Symbol.for("react.context") : 60110, E = P ? Symbol.for("react.async_mode") : 60111, D = P ? Symbol.for("react.concurrent_mode") : 60111, ve = P ? Symbol.for("react.forward_ref") : 60112, j = P ? Symbol.for("react.suspense") : 60113, ce = P ? Symbol.for("react.suspense_list") : 60120, Re = P ? Symbol.for("react.memo") : 60115, xe = P ? Symbol.for("react.lazy") : 60116, ke = P ? Symbol.for("react.block") : 60121, $ = P ? Symbol.for("react.fundamental") : 60117, F = P ? Symbol.for("react.responder") : 60118, le = P ? Symbol.for("react.scope") : 60119;
  function _(k) {
    if (typeof k == "object" && k !== null) {
      var X = k.$$typeof;
      switch (X) {
        case O:
          switch (k = k.type, k) {
            case E:
            case D:
            case ee:
            case Q:
            case g:
            case j:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case K:
                case ve:
                case xe:
                case Re:
                case Te:
                  return k;
                default:
                  return X;
              }
          }
        case V:
          return X;
      }
    }
  }
  function Y(k) {
    return _(k) === D;
  }
  return _e.AsyncMode = E, _e.ConcurrentMode = D, _e.ContextConsumer = K, _e.ContextProvider = Te, _e.Element = O, _e.ForwardRef = ve, _e.Fragment = ee, _e.Lazy = xe, _e.Memo = Re, _e.Portal = V, _e.Profiler = Q, _e.StrictMode = g, _e.Suspense = j, _e.isAsyncMode = function(k) {
    return Y(k) || _(k) === E;
  }, _e.isConcurrentMode = Y, _e.isContextConsumer = function(k) {
    return _(k) === K;
  }, _e.isContextProvider = function(k) {
    return _(k) === Te;
  }, _e.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === O;
  }, _e.isForwardRef = function(k) {
    return _(k) === ve;
  }, _e.isFragment = function(k) {
    return _(k) === ee;
  }, _e.isLazy = function(k) {
    return _(k) === xe;
  }, _e.isMemo = function(k) {
    return _(k) === Re;
  }, _e.isPortal = function(k) {
    return _(k) === V;
  }, _e.isProfiler = function(k) {
    return _(k) === Q;
  }, _e.isStrictMode = function(k) {
    return _(k) === g;
  }, _e.isSuspense = function(k) {
    return _(k) === j;
  }, _e.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === ee || k === D || k === Q || k === g || k === j || k === ce || typeof k == "object" && k !== null && (k.$$typeof === xe || k.$$typeof === Re || k.$$typeof === Te || k.$$typeof === K || k.$$typeof === ve || k.$$typeof === $ || k.$$typeof === F || k.$$typeof === le || k.$$typeof === ke);
  }, _e.typeOf = _, _e;
}
var Le = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bs;
function Qs() {
  return bs || (bs = 1, process.env.NODE_ENV !== "production" && function() {
    var P = typeof Symbol == "function" && Symbol.for, O = P ? Symbol.for("react.element") : 60103, V = P ? Symbol.for("react.portal") : 60106, ee = P ? Symbol.for("react.fragment") : 60107, g = P ? Symbol.for("react.strict_mode") : 60108, Q = P ? Symbol.for("react.profiler") : 60114, Te = P ? Symbol.for("react.provider") : 60109, K = P ? Symbol.for("react.context") : 60110, E = P ? Symbol.for("react.async_mode") : 60111, D = P ? Symbol.for("react.concurrent_mode") : 60111, ve = P ? Symbol.for("react.forward_ref") : 60112, j = P ? Symbol.for("react.suspense") : 60113, ce = P ? Symbol.for("react.suspense_list") : 60120, Re = P ? Symbol.for("react.memo") : 60115, xe = P ? Symbol.for("react.lazy") : 60116, ke = P ? Symbol.for("react.block") : 60121, $ = P ? Symbol.for("react.fundamental") : 60117, F = P ? Symbol.for("react.responder") : 60118, le = P ? Symbol.for("react.scope") : 60119;
    function _(Z) {
      return typeof Z == "string" || typeof Z == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Z === ee || Z === D || Z === Q || Z === g || Z === j || Z === ce || typeof Z == "object" && Z !== null && (Z.$$typeof === xe || Z.$$typeof === Re || Z.$$typeof === Te || Z.$$typeof === K || Z.$$typeof === ve || Z.$$typeof === $ || Z.$$typeof === F || Z.$$typeof === le || Z.$$typeof === ke);
    }
    function Y(Z) {
      if (typeof Z == "object" && Z !== null) {
        var Ce = Z.$$typeof;
        switch (Ce) {
          case O:
            var Be = Z.type;
            switch (Be) {
              case E:
              case D:
              case ee:
              case Q:
              case g:
              case j:
                return Be;
              default:
                var ct = Be && Be.$$typeof;
                switch (ct) {
                  case K:
                  case ve:
                  case xe:
                  case Re:
                  case Te:
                    return ct;
                  default:
                    return Ce;
                }
            }
          case V:
            return Ce;
        }
      }
    }
    var k = E, X = D, fe = K, De = Te, ae = O, Pe = ve, Ne = ee, Ue = xe, nt = Re, Xe = V, vt = Q, Je = g, qe = j, et = !1;
    function Ve(Z) {
      return et || (et = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), U(Z) || Y(Z) === E;
    }
    function U(Z) {
      return Y(Z) === D;
    }
    function W(Z) {
      return Y(Z) === K;
    }
    function q(Z) {
      return Y(Z) === Te;
    }
    function ge(Z) {
      return typeof Z == "object" && Z !== null && Z.$$typeof === O;
    }
    function se(Z) {
      return Y(Z) === ve;
    }
    function re(Z) {
      return Y(Z) === ee;
    }
    function te(Z) {
      return Y(Z) === xe;
    }
    function he(Z) {
      return Y(Z) === Re;
    }
    function Se(Z) {
      return Y(Z) === V;
    }
    function me(Z) {
      return Y(Z) === Q;
    }
    function ue(Z) {
      return Y(Z) === g;
    }
    function Ee(Z) {
      return Y(Z) === j;
    }
    Le.AsyncMode = k, Le.ConcurrentMode = X, Le.ContextConsumer = fe, Le.ContextProvider = De, Le.Element = ae, Le.ForwardRef = Pe, Le.Fragment = Ne, Le.Lazy = Ue, Le.Memo = nt, Le.Portal = Xe, Le.Profiler = vt, Le.StrictMode = Je, Le.Suspense = qe, Le.isAsyncMode = Ve, Le.isConcurrentMode = U, Le.isContextConsumer = W, Le.isContextProvider = q, Le.isElement = ge, Le.isForwardRef = se, Le.isFragment = re, Le.isLazy = te, Le.isMemo = he, Le.isPortal = Se, Le.isProfiler = me, Le.isStrictMode = ue, Le.isSuspense = Ee, Le.isValidElementType = _, Le.typeOf = Y;
  }()), Le;
}
var xs;
function _s() {
  return xs || (xs = 1, process.env.NODE_ENV === "production" ? fl.exports = Gs() : fl.exports = Qs()), fl.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ls, ws;
function Xs() {
  if (ws)
    return ls;
  ws = 1;
  var P = Object.getOwnPropertySymbols, O = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
  function ee(Q) {
    if (Q == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(Q);
  }
  function g() {
    try {
      if (!Object.assign)
        return !1;
      var Q = new String("abc");
      if (Q[5] = "de", Object.getOwnPropertyNames(Q)[0] === "5")
        return !1;
      for (var Te = {}, K = 0; K < 10; K++)
        Te["_" + String.fromCharCode(K)] = K;
      var E = Object.getOwnPropertyNames(Te).map(function(ve) {
        return Te[ve];
      });
      if (E.join("") !== "0123456789")
        return !1;
      var D = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(ve) {
        D[ve] = ve;
      }), Object.keys(Object.assign({}, D)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ls = g() ? Object.assign : function(Q, Te) {
    for (var K, E = ee(Q), D, ve = 1; ve < arguments.length; ve++) {
      K = Object(arguments[ve]);
      for (var j in K)
        O.call(K, j) && (E[j] = K[j]);
      if (P) {
        D = P(K);
        for (var ce = 0; ce < D.length; ce++)
          V.call(K, D[ce]) && (E[D[ce]] = K[D[ce]]);
      }
    }
    return E;
  }, ls;
}
var ss, Ts;
function ys() {
  if (Ts)
    return ss;
  Ts = 1;
  var P = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ss = P, ss;
}
var us, Es;
function Ls() {
  return Es || (Es = 1, us = Function.call.bind(Object.prototype.hasOwnProperty)), us;
}
var cs, ks;
function Js() {
  if (ks)
    return cs;
  ks = 1;
  var P = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var O = ys(), V = {}, ee = Ls();
    P = function(Q) {
      var Te = "Warning: " + Q;
      typeof console < "u" && console.error(Te);
      try {
        throw new Error(Te);
      } catch {
      }
    };
  }
  function g(Q, Te, K, E, D) {
    if (process.env.NODE_ENV !== "production") {
      for (var ve in Q)
        if (ee(Q, ve)) {
          var j;
          try {
            if (typeof Q[ve] != "function") {
              var ce = Error(
                (E || "React class") + ": " + K + " type `" + ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof Q[ve] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw ce.name = "Invariant Violation", ce;
            }
            j = Q[ve](Te, ve, E, K, null, O);
          } catch (xe) {
            j = xe;
          }
          if (j && !(j instanceof Error) && P(
            (E || "React class") + ": type specification of " + K + " `" + ve + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof j + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), j instanceof Error && !(j.message in V)) {
            V[j.message] = !0;
            var Re = D ? D() : "";
            P(
              "Failed " + K + " type: " + j.message + (Re ?? "")
            );
          }
        }
    }
  }
  return g.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (V = {});
  }, cs = g, cs;
}
var fs, Cs;
function Ks() {
  if (Cs)
    return fs;
  Cs = 1;
  var P = _s(), O = Xs(), V = ys(), ee = Ls(), g = Js(), Q = function() {
  };
  process.env.NODE_ENV !== "production" && (Q = function(K) {
    var E = "Warning: " + K;
    typeof console < "u" && console.error(E);
    try {
      throw new Error(E);
    } catch {
    }
  });
  function Te() {
    return null;
  }
  return fs = function(K, E) {
    var D = typeof Symbol == "function" && Symbol.iterator, ve = "@@iterator";
    function j(U) {
      var W = U && (D && U[D] || U[ve]);
      if (typeof W == "function")
        return W;
    }
    var ce = "<<anonymous>>", Re = {
      array: F("array"),
      bigint: F("bigint"),
      bool: F("boolean"),
      func: F("function"),
      number: F("number"),
      object: F("object"),
      string: F("string"),
      symbol: F("symbol"),
      any: le(),
      arrayOf: _,
      element: Y(),
      elementType: k(),
      instanceOf: X,
      node: Pe(),
      objectOf: De,
      oneOf: fe,
      oneOfType: ae,
      shape: Ue,
      exact: nt
    };
    function xe(U, W) {
      return U === W ? U !== 0 || 1 / U === 1 / W : U !== U && W !== W;
    }
    function ke(U, W) {
      this.message = U, this.data = W && typeof W == "object" ? W : {}, this.stack = "";
    }
    ke.prototype = Error.prototype;
    function $(U) {
      if (process.env.NODE_ENV !== "production")
        var W = {}, q = 0;
      function ge(re, te, he, Se, me, ue, Ee) {
        if (Se = Se || ce, ue = ue || he, Ee !== V) {
          if (E) {
            var Z = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw Z.name = "Invariant Violation", Z;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ce = Se + ":" + he;
            !W[Ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            q < 3 && (Q(
              "You are manually calling a React.PropTypes validation function for the `" + ue + "` prop on `" + Se + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), W[Ce] = !0, q++);
          }
        }
        return te[he] == null ? re ? te[he] === null ? new ke("The " + me + " `" + ue + "` is marked as required " + ("in `" + Se + "`, but its value is `null`.")) : new ke("The " + me + " `" + ue + "` is marked as required in " + ("`" + Se + "`, but its value is `undefined`.")) : null : U(te, he, Se, me, ue);
      }
      var se = ge.bind(null, !1);
      return se.isRequired = ge.bind(null, !0), se;
    }
    function F(U) {
      function W(q, ge, se, re, te, he) {
        var Se = q[ge], me = Je(Se);
        if (me !== U) {
          var ue = qe(Se);
          return new ke(
            "Invalid " + re + " `" + te + "` of type " + ("`" + ue + "` supplied to `" + se + "`, expected ") + ("`" + U + "`."),
            { expectedType: U }
          );
        }
        return null;
      }
      return $(W);
    }
    function le() {
      return $(Te);
    }
    function _(U) {
      function W(q, ge, se, re, te) {
        if (typeof U != "function")
          return new ke("Property `" + te + "` of component `" + se + "` has invalid PropType notation inside arrayOf.");
        var he = q[ge];
        if (!Array.isArray(he)) {
          var Se = Je(he);
          return new ke("Invalid " + re + " `" + te + "` of type " + ("`" + Se + "` supplied to `" + se + "`, expected an array."));
        }
        for (var me = 0; me < he.length; me++) {
          var ue = U(he, me, se, re, te + "[" + me + "]", V);
          if (ue instanceof Error)
            return ue;
        }
        return null;
      }
      return $(W);
    }
    function Y() {
      function U(W, q, ge, se, re) {
        var te = W[q];
        if (!K(te)) {
          var he = Je(te);
          return new ke("Invalid " + se + " `" + re + "` of type " + ("`" + he + "` supplied to `" + ge + "`, expected a single ReactElement."));
        }
        return null;
      }
      return $(U);
    }
    function k() {
      function U(W, q, ge, se, re) {
        var te = W[q];
        if (!P.isValidElementType(te)) {
          var he = Je(te);
          return new ke("Invalid " + se + " `" + re + "` of type " + ("`" + he + "` supplied to `" + ge + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return $(U);
    }
    function X(U) {
      function W(q, ge, se, re, te) {
        if (!(q[ge] instanceof U)) {
          var he = U.name || ce, Se = Ve(q[ge]);
          return new ke("Invalid " + re + " `" + te + "` of type " + ("`" + Se + "` supplied to `" + se + "`, expected ") + ("instance of `" + he + "`."));
        }
        return null;
      }
      return $(W);
    }
    function fe(U) {
      if (!Array.isArray(U))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? Q(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : Q("Invalid argument supplied to oneOf, expected an array.")), Te;
      function W(q, ge, se, re, te) {
        for (var he = q[ge], Se = 0; Se < U.length; Se++)
          if (xe(he, U[Se]))
            return null;
        var me = JSON.stringify(U, function(Ee, Z) {
          var Ce = qe(Z);
          return Ce === "symbol" ? String(Z) : Z;
        });
        return new ke("Invalid " + re + " `" + te + "` of value `" + String(he) + "` " + ("supplied to `" + se + "`, expected one of " + me + "."));
      }
      return $(W);
    }
    function De(U) {
      function W(q, ge, se, re, te) {
        if (typeof U != "function")
          return new ke("Property `" + te + "` of component `" + se + "` has invalid PropType notation inside objectOf.");
        var he = q[ge], Se = Je(he);
        if (Se !== "object")
          return new ke("Invalid " + re + " `" + te + "` of type " + ("`" + Se + "` supplied to `" + se + "`, expected an object."));
        for (var me in he)
          if (ee(he, me)) {
            var ue = U(he, me, se, re, te + "." + me, V);
            if (ue instanceof Error)
              return ue;
          }
        return null;
      }
      return $(W);
    }
    function ae(U) {
      if (!Array.isArray(U))
        return process.env.NODE_ENV !== "production" && Q("Invalid argument supplied to oneOfType, expected an instance of array."), Te;
      for (var W = 0; W < U.length; W++) {
        var q = U[W];
        if (typeof q != "function")
          return Q(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + et(q) + " at index " + W + "."
          ), Te;
      }
      function ge(se, re, te, he, Se) {
        for (var me = [], ue = 0; ue < U.length; ue++) {
          var Ee = U[ue], Z = Ee(se, re, te, he, Se, V);
          if (Z == null)
            return null;
          Z.data && ee(Z.data, "expectedType") && me.push(Z.data.expectedType);
        }
        var Ce = me.length > 0 ? ", expected one of type [" + me.join(", ") + "]" : "";
        return new ke("Invalid " + he + " `" + Se + "` supplied to " + ("`" + te + "`" + Ce + "."));
      }
      return $(ge);
    }
    function Pe() {
      function U(W, q, ge, se, re) {
        return Xe(W[q]) ? null : new ke("Invalid " + se + " `" + re + "` supplied to " + ("`" + ge + "`, expected a ReactNode."));
      }
      return $(U);
    }
    function Ne(U, W, q, ge, se) {
      return new ke(
        (U || "React class") + ": " + W + " type `" + q + "." + ge + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + se + "`."
      );
    }
    function Ue(U) {
      function W(q, ge, se, re, te) {
        var he = q[ge], Se = Je(he);
        if (Se !== "object")
          return new ke("Invalid " + re + " `" + te + "` of type `" + Se + "` " + ("supplied to `" + se + "`, expected `object`."));
        for (var me in U) {
          var ue = U[me];
          if (typeof ue != "function")
            return Ne(se, re, te, me, qe(ue));
          var Ee = ue(he, me, se, re, te + "." + me, V);
          if (Ee)
            return Ee;
        }
        return null;
      }
      return $(W);
    }
    function nt(U) {
      function W(q, ge, se, re, te) {
        var he = q[ge], Se = Je(he);
        if (Se !== "object")
          return new ke("Invalid " + re + " `" + te + "` of type `" + Se + "` " + ("supplied to `" + se + "`, expected `object`."));
        var me = O({}, q[ge], U);
        for (var ue in me) {
          var Ee = U[ue];
          if (ee(U, ue) && typeof Ee != "function")
            return Ne(se, re, te, ue, qe(Ee));
          if (!Ee)
            return new ke(
              "Invalid " + re + " `" + te + "` key `" + ue + "` supplied to `" + se + "`.\nBad object: " + JSON.stringify(q[ge], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(U), null, "  ")
            );
          var Z = Ee(he, ue, se, re, te + "." + ue, V);
          if (Z)
            return Z;
        }
        return null;
      }
      return $(W);
    }
    function Xe(U) {
      switch (typeof U) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !U;
        case "object":
          if (Array.isArray(U))
            return U.every(Xe);
          if (U === null || K(U))
            return !0;
          var W = j(U);
          if (W) {
            var q = W.call(U), ge;
            if (W !== U.entries) {
              for (; !(ge = q.next()).done; )
                if (!Xe(ge.value))
                  return !1;
            } else
              for (; !(ge = q.next()).done; ) {
                var se = ge.value;
                if (se && !Xe(se[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function vt(U, W) {
      return U === "symbol" ? !0 : W ? W["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && W instanceof Symbol : !1;
    }
    function Je(U) {
      var W = typeof U;
      return Array.isArray(U) ? "array" : U instanceof RegExp ? "object" : vt(W, U) ? "symbol" : W;
    }
    function qe(U) {
      if (typeof U > "u" || U === null)
        return "" + U;
      var W = Je(U);
      if (W === "object") {
        if (U instanceof Date)
          return "date";
        if (U instanceof RegExp)
          return "regexp";
      }
      return W;
    }
    function et(U) {
      var W = qe(U);
      switch (W) {
        case "array":
        case "object":
          return "an " + W;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + W;
        default:
          return W;
      }
    }
    function Ve(U) {
      return !U.constructor || !U.constructor.name ? ce : U.constructor.name;
    }
    return Re.checkPropTypes = g, Re.resetWarningCache = g.resetWarningCache, Re.PropTypes = Re, Re;
  }, fs;
}
var ds, Is;
function qs() {
  if (Is)
    return ds;
  Is = 1;
  var P = ys();
  function O() {
  }
  function V() {
  }
  return V.resetWarningCache = O, ds = function() {
    function ee(Te, K, E, D, ve, j) {
      if (j !== P) {
        var ce = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw ce.name = "Invariant Violation", ce;
      }
    }
    ee.isRequired = ee;
    function g() {
      return ee;
    }
    var Q = {
      array: ee,
      bigint: ee,
      bool: ee,
      func: ee,
      number: ee,
      object: ee,
      string: ee,
      symbol: ee,
      any: ee,
      arrayOf: g,
      element: ee,
      elementType: ee,
      instanceOf: g,
      node: ee,
      objectOf: g,
      oneOf: g,
      oneOfType: g,
      shape: g,
      exact: g,
      checkPropTypes: V,
      resetWarningCache: O
    };
    return Q.PropTypes = Q, Q;
  }, ds;
}
if (process.env.NODE_ENV !== "production") {
  var eu = _s(), tu = !0;
  vs.exports = Ks()(eu.isElement, tu);
} else
  vs.exports = qs()();
var ru = vs.exports, Io = {}, To = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ms;
function nu() {
  if (Ms)
    return To;
  Ms = 1;
  var P = G;
  function O(o) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + o, h = 1; h < arguments.length; h++)
      u += "&args[]=" + encodeURIComponent(arguments[h]);
    return "Minified React error #" + o + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var V = Object.prototype.hasOwnProperty, ee = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, g = {}, Q = {};
  function Te(o) {
    return V.call(Q, o) ? !0 : V.call(g, o) ? !1 : ee.test(o) ? Q[o] = !0 : (g[o] = !0, !1);
  }
  function K(o, u, h, m, I, T, N) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = m, this.attributeNamespace = I, this.mustUseProperty = h, this.propertyName = o, this.type = u, this.sanitizeURL = T, this.removeEmptyString = N;
  }
  var E = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o) {
    E[o] = new K(o, 0, !1, o, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
    var u = o[0];
    E[u] = new K(u, 1, !1, o[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
    E[o] = new K(o, 2, !1, o.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
    E[o] = new K(o, 2, !1, o, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o) {
    E[o] = new K(o, 3, !1, o.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(o) {
    E[o] = new K(o, 3, !0, o, null, !1, !1);
  }), ["capture", "download"].forEach(function(o) {
    E[o] = new K(o, 4, !1, o, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(o) {
    E[o] = new K(o, 6, !1, o, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(o) {
    E[o] = new K(o, 5, !1, o.toLowerCase(), null, !1, !1);
  });
  var D = /[\-:]([a-z])/g;
  function ve(o) {
    return o[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o) {
    var u = o.replace(
      D,
      ve
    );
    E[u] = new K(u, 1, !1, o, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o) {
    var u = o.replace(D, ve);
    E[u] = new K(u, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(o) {
    var u = o.replace(D, ve);
    E[u] = new K(u, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(o) {
    E[o] = new K(o, 1, !1, o.toLowerCase(), null, !1, !1);
  }), E.xlinkHref = new K("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(o) {
    E[o] = new K(o, 1, !1, o.toLowerCase(), null, !0, !0);
  });
  var j = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ce = ["Webkit", "ms", "Moz", "O"];
  Object.keys(j).forEach(function(o) {
    ce.forEach(function(u) {
      u = u + o.charAt(0).toUpperCase() + o.substring(1), j[u] = j[o];
    });
  });
  var Re = /["'&<>]/;
  function xe(o) {
    if (typeof o == "boolean" || typeof o == "number")
      return "" + o;
    o = "" + o;
    var u = Re.exec(o);
    if (u) {
      var h = "", m, I = 0;
      for (m = u.index; m < o.length; m++) {
        switch (o.charCodeAt(m)) {
          case 34:
            u = "&quot;";
            break;
          case 38:
            u = "&amp;";
            break;
          case 39:
            u = "&#x27;";
            break;
          case 60:
            u = "&lt;";
            break;
          case 62:
            u = "&gt;";
            break;
          default:
            continue;
        }
        I !== m && (h += o.substring(I, m)), I = m + 1, h += u;
      }
      o = I !== m ? h + o.substring(I, m) : h;
    }
    return o;
  }
  var ke = /([A-Z])/g, $ = /^ms-/, F = Array.isArray;
  function le(o, u) {
    return { insertionMode: o, selectedValue: u };
  }
  function _(o, u, h) {
    switch (u) {
      case "select":
        return le(1, h.value != null ? h.value : h.defaultValue);
      case "svg":
        return le(2, null);
      case "math":
        return le(3, null);
      case "foreignObject":
        return le(1, null);
      case "table":
        return le(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return le(5, null);
      case "colgroup":
        return le(7, null);
      case "tr":
        return le(6, null);
    }
    return 4 <= o.insertionMode || o.insertionMode === 0 ? le(1, null) : o;
  }
  var Y = /* @__PURE__ */ new Map();
  function k(o, u, h) {
    if (typeof h != "object")
      throw Error(O(62));
    u = !0;
    for (var m in h)
      if (V.call(h, m)) {
        var I = h[m];
        if (I != null && typeof I != "boolean" && I !== "") {
          if (m.indexOf("--") === 0) {
            var T = xe(m);
            I = xe(("" + I).trim());
          } else {
            T = m;
            var N = Y.get(T);
            N !== void 0 || (N = xe(T.replace(ke, "-$1").toLowerCase().replace($, "-ms-")), Y.set(T, N)), T = N, I = typeof I == "number" ? I === 0 || V.call(j, m) ? "" + I : I + "px" : xe(("" + I).trim());
          }
          u ? (u = !1, o.push(' style="', T, ":", I)) : o.push(";", T, ":", I);
        }
      }
    u || o.push('"');
  }
  function X(o, u, h, m) {
    switch (h) {
      case "style":
        k(o, u, m);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < h.length) || h[0] !== "o" && h[0] !== "O" || h[1] !== "n" && h[1] !== "N") {
      if (u = E.hasOwnProperty(h) ? E[h] : null, u !== null) {
        switch (typeof m) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans)
              return;
        }
        switch (h = u.attributeName, u.type) {
          case 3:
            m && o.push(" ", h, '=""');
            break;
          case 4:
            m === !0 ? o.push(" ", h, '=""') : m !== !1 && o.push(" ", h, '="', xe(m), '"');
            break;
          case 5:
            isNaN(m) || o.push(" ", h, '="', xe(m), '"');
            break;
          case 6:
            !isNaN(m) && 1 <= m && o.push(" ", h, '="', xe(m), '"');
            break;
          default:
            u.sanitizeURL && (m = "" + m), o.push(" ", h, '="', xe(m), '"');
        }
      } else if (Te(h)) {
        switch (typeof m) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = h.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-")
              return;
        }
        o.push(" ", h, '="', xe(m), '"');
      }
    }
  }
  function fe(o, u, h) {
    if (u != null) {
      if (h != null)
        throw Error(O(60));
      if (typeof u != "object" || !("__html" in u))
        throw Error(O(61));
      u = u.__html, u != null && o.push("" + u);
    }
  }
  function De(o) {
    var u = "";
    return P.Children.forEach(o, function(h) {
      h != null && (u += h);
    }), u;
  }
  function ae(o, u, h, m) {
    o.push(Ue(h));
    var I = h = null, T;
    for (T in u)
      if (V.call(u, T)) {
        var N = u[T];
        if (N != null)
          switch (T) {
            case "children":
              h = N;
              break;
            case "dangerouslySetInnerHTML":
              I = N;
              break;
            default:
              X(o, m, T, N);
          }
      }
    return o.push(">"), fe(o, I, h), typeof h == "string" ? (o.push(xe(h)), null) : h;
  }
  var Pe = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ne = /* @__PURE__ */ new Map();
  function Ue(o) {
    var u = Ne.get(o);
    if (u === void 0) {
      if (!Pe.test(o))
        throw Error(O(65, o));
      u = "<" + o, Ne.set(o, u);
    }
    return u;
  }
  function nt(o, u, h, m, I) {
    switch (u) {
      case "select":
        o.push(Ue("select"));
        var T = null, N = null;
        for (ie in h)
          if (V.call(h, ie)) {
            var B = h[ie];
            if (B != null)
              switch (ie) {
                case "children":
                  T = B;
                  break;
                case "dangerouslySetInnerHTML":
                  N = B;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  X(o, m, ie, B);
              }
          }
        return o.push(">"), fe(o, N, T), T;
      case "option":
        N = I.selectedValue, o.push(Ue("option"));
        var ne = B = null, de = null, ie = null;
        for (T in h)
          if (V.call(h, T)) {
            var Ie = h[T];
            if (Ie != null)
              switch (T) {
                case "children":
                  B = Ie;
                  break;
                case "selected":
                  de = Ie;
                  break;
                case "dangerouslySetInnerHTML":
                  ie = Ie;
                  break;
                case "value":
                  ne = Ie;
                default:
                  X(o, m, T, Ie);
              }
          }
        if (N != null)
          if (h = ne !== null ? "" + ne : De(B), F(N)) {
            for (m = 0; m < N.length; m++)
              if ("" + N[m] === h) {
                o.push(' selected=""');
                break;
              }
          } else
            "" + N === h && o.push(' selected=""');
        else
          de && o.push(' selected=""');
        return o.push(">"), fe(o, ie, B), B;
      case "textarea":
        o.push(Ue("textarea")), ie = N = T = null;
        for (B in h)
          if (V.call(h, B) && (ne = h[B], ne != null))
            switch (B) {
              case "children":
                ie = ne;
                break;
              case "value":
                T = ne;
                break;
              case "defaultValue":
                N = ne;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(O(91));
              default:
                X(
                  o,
                  m,
                  B,
                  ne
                );
            }
        if (T === null && N !== null && (T = N), o.push(">"), ie != null) {
          if (T != null)
            throw Error(O(92));
          if (F(ie) && 1 < ie.length)
            throw Error(O(93));
          T = "" + ie;
        }
        return typeof T == "string" && T[0] === `
` && o.push(`
`), T !== null && o.push(xe("" + T)), null;
      case "input":
        o.push(Ue("input")), ne = ie = B = T = null;
        for (N in h)
          if (V.call(h, N) && (de = h[N], de != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(O(399, "input"));
              case "defaultChecked":
                ne = de;
                break;
              case "defaultValue":
                B = de;
                break;
              case "checked":
                ie = de;
                break;
              case "value":
                T = de;
                break;
              default:
                X(o, m, N, de);
            }
        return ie !== null ? X(o, m, "checked", ie) : ne !== null && X(o, m, "checked", ne), T !== null ? X(o, m, "value", T) : B !== null && X(o, m, "value", B), o.push("/>"), null;
      case "menuitem":
        o.push(Ue("menuitem"));
        for (var ft in h)
          if (V.call(h, ft) && (T = h[ft], T != null))
            switch (ft) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(O(400));
              default:
                X(o, m, ft, T);
            }
        return o.push(">"), null;
      case "title":
        o.push(Ue("title")), T = null;
        for (Ie in h)
          if (V.call(h, Ie) && (N = h[Ie], N != null))
            switch (Ie) {
              case "children":
                T = N;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(O(434));
              default:
                X(o, m, Ie, N);
            }
        return o.push(">"), T;
      case "listing":
      case "pre":
        o.push(Ue(u)), N = T = null;
        for (ne in h)
          if (V.call(h, ne) && (B = h[ne], B != null))
            switch (ne) {
              case "children":
                T = B;
                break;
              case "dangerouslySetInnerHTML":
                N = B;
                break;
              default:
                X(o, m, ne, B);
            }
        if (o.push(">"), N != null) {
          if (T != null)
            throw Error(O(60));
          if (typeof N != "object" || !("__html" in N))
            throw Error(O(61));
          h = N.__html, h != null && (typeof h == "string" && 0 < h.length && h[0] === `
` ? o.push(`
`, h) : o.push("" + h));
        }
        return typeof T == "string" && T[0] === `
` && o.push(`
`), T;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        o.push(Ue(u));
        for (var ot in h)
          if (V.call(h, ot) && (T = h[ot], T != null))
            switch (ot) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(O(399, u));
              default:
                X(o, m, ot, T);
            }
        return o.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return ae(
          o,
          h,
          u,
          m
        );
      case "html":
        return I.insertionMode === 0 && o.push("<!DOCTYPE html>"), ae(o, h, u, m);
      default:
        if (u.indexOf("-") === -1 && typeof h.is != "string")
          return ae(o, h, u, m);
        o.push(Ue(u)), N = T = null;
        for (de in h)
          if (V.call(h, de) && (B = h[de], B != null))
            switch (de) {
              case "children":
                T = B;
                break;
              case "dangerouslySetInnerHTML":
                N = B;
                break;
              case "style":
                k(o, m, B);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                Te(de) && typeof B != "function" && typeof B != "symbol" && o.push(" ", de, '="', xe(B), '"');
            }
        return o.push(">"), fe(o, N, T), T;
    }
  }
  function Xe(o, u, h) {
    if (o.push('<!--$?--><template id="'), h === null)
      throw Error(O(395));
    return o.push(h), o.push('"></template>');
  }
  function vt(o, u, h, m) {
    switch (h.insertionMode) {
      case 0:
      case 1:
        return o.push('<div hidden id="'), o.push(u.segmentPrefix), u = m.toString(16), o.push(u), o.push('">');
      case 2:
        return o.push('<svg aria-hidden="true" style="display:none" id="'), o.push(u.segmentPrefix), u = m.toString(16), o.push(u), o.push('">');
      case 3:
        return o.push('<math aria-hidden="true" style="display:none" id="'), o.push(u.segmentPrefix), u = m.toString(16), o.push(u), o.push('">');
      case 4:
        return o.push('<table hidden id="'), o.push(u.segmentPrefix), u = m.toString(16), o.push(u), o.push('">');
      case 5:
        return o.push('<table hidden><tbody id="'), o.push(u.segmentPrefix), u = m.toString(16), o.push(u), o.push('">');
      case 6:
        return o.push('<table hidden><tr id="'), o.push(u.segmentPrefix), u = m.toString(16), o.push(u), o.push('">');
      case 7:
        return o.push('<table hidden><colgroup id="'), o.push(u.segmentPrefix), u = m.toString(16), o.push(u), o.push('">');
      default:
        throw Error(O(397));
    }
  }
  function Je(o, u) {
    switch (u.insertionMode) {
      case 0:
      case 1:
        return o.push("</div>");
      case 2:
        return o.push("</svg>");
      case 3:
        return o.push("</math>");
      case 4:
        return o.push("</table>");
      case 5:
        return o.push("</tbody></table>");
      case 6:
        return o.push("</tr></table>");
      case 7:
        return o.push("</colgroup></table>");
      default:
        throw Error(O(397));
    }
  }
  var qe = /[<\u2028\u2029]/g;
  function et(o) {
    return JSON.stringify(o).replace(qe, function(u) {
      switch (u) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  function Ve(o, u) {
    return u = u === void 0 ? "" : u, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: u + "P:", segmentPrefix: u + "S:", boundaryPrefix: u + "B:", idPrefix: u, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: o };
  }
  function U(o, u, h, m) {
    return h.generateStaticMarkup ? (o.push(xe(u)), !1) : (u === "" ? o = m : (m && o.push("<!-- -->"), o.push(xe(u)), o = !0), o);
  }
  var W = Object.assign, q = Symbol.for("react.element"), ge = Symbol.for("react.portal"), se = Symbol.for("react.fragment"), re = Symbol.for("react.strict_mode"), te = Symbol.for("react.profiler"), he = Symbol.for("react.provider"), Se = Symbol.for("react.context"), me = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), Ee = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), Be = Symbol.for("react.scope"), ct = Symbol.for("react.debug_trace_mode"), zt = Symbol.for("react.legacy_hidden"), dn = Symbol.for("react.default_value"), mt = Symbol.iterator;
  function lr(o) {
    if (o == null)
      return null;
    if (typeof o == "function")
      return o.displayName || o.name || null;
    if (typeof o == "string")
      return o;
    switch (o) {
      case se:
        return "Fragment";
      case ge:
        return "Portal";
      case te:
        return "Profiler";
      case re:
        return "StrictMode";
      case ue:
        return "Suspense";
      case Ee:
        return "SuspenseList";
    }
    if (typeof o == "object")
      switch (o.$$typeof) {
        case Se:
          return (o.displayName || "Context") + ".Consumer";
        case he:
          return (o._context.displayName || "Context") + ".Provider";
        case me:
          var u = o.render;
          return o = o.displayName, o || (o = u.displayName || u.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
        case Z:
          return u = o.displayName || null, u !== null ? u : lr(o.type) || "Memo";
        case Ce:
          u = o._payload, o = o._init;
          try {
            return lr(o(u));
          } catch {
          }
      }
    return null;
  }
  var sr = {};
  function pn(o, u) {
    if (o = o.contextTypes, !o)
      return sr;
    var h = {}, m;
    for (m in o)
      h[m] = u[m];
    return h;
  }
  var yt = null;
  function rt(o, u) {
    if (o !== u) {
      o.context._currentValue2 = o.parentValue, o = o.parent;
      var h = u.parent;
      if (o === null) {
        if (h !== null)
          throw Error(O(401));
      } else {
        if (h === null)
          throw Error(O(401));
        rt(o, h);
      }
      u.context._currentValue2 = u.value;
    }
  }
  function Ke(o) {
    o.context._currentValue2 = o.parentValue, o = o.parent, o !== null && Ke(o);
  }
  function jr(o) {
    var u = o.parent;
    u !== null && jr(u), o.context._currentValue2 = o.value;
  }
  function _r(o, u) {
    if (o.context._currentValue2 = o.parentValue, o = o.parent, o === null)
      throw Error(O(402));
    o.depth === u.depth ? rt(o, u) : _r(o, u);
  }
  function Lr(o, u) {
    var h = u.parent;
    if (h === null)
      throw Error(O(402));
    o.depth === h.depth ? rt(o, h) : Lr(o, h), u.context._currentValue2 = u.value;
  }
  function Ge(o) {
    var u = yt;
    u !== o && (u === null ? jr(o) : o === null ? Ke(u) : u.depth === o.depth ? rt(u, o) : u.depth > o.depth ? _r(u, o) : Lr(u, o), yt = o);
  }
  var Fr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(o, u) {
    o = o._reactInternals, o.queue !== null && o.queue.push(u);
  }, enqueueReplaceState: function(o, u) {
    o = o._reactInternals, o.replace = !0, o.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function hn(o, u, h, m) {
    var I = o.state !== void 0 ? o.state : null;
    o.updater = Fr, o.props = h, o.state = I;
    var T = { queue: [], replace: !1 };
    o._reactInternals = T;
    var N = u.contextType;
    if (o.context = typeof N == "object" && N !== null ? N._currentValue2 : m, N = u.getDerivedStateFromProps, typeof N == "function" && (N = N(h, I), I = N == null ? I : W({}, I, N), o.state = I), typeof u.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function"))
      if (u = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), u !== o.state && Fr.enqueueReplaceState(o, o.state, null), T.queue !== null && 0 < T.queue.length)
        if (u = T.queue, N = T.replace, T.queue = null, T.replace = !1, N && u.length === 1)
          o.state = u[0];
        else {
          for (T = N ? u[0] : o.state, I = !0, N = N ? 1 : 0; N < u.length; N++) {
            var B = u[N];
            B = typeof B == "function" ? B.call(o, T, h, m) : B, B != null && (I ? (I = !1, T = W({}, T, B)) : W(T, B));
          }
          o.state = T;
        }
      else
        T.queue = null;
  }
  var vn = { id: 1, overflow: "" };
  function zr(o, u, h) {
    var m = o.id;
    o = o.overflow;
    var I = 32 - Sr(m) - 1;
    m &= ~(1 << I), h += 1;
    var T = 32 - Sr(u) + I;
    if (30 < T) {
      var N = I - I % 5;
      return T = (m & (1 << N) - 1).toString(32), m >>= N, I -= N, { id: 1 << 32 - Sr(u) + I | h << I | m, overflow: T + o };
    }
    return { id: 1 << T | h << I | m, overflow: o };
  }
  var Sr = Math.clz32 ? Math.clz32 : $t, Fn = Math.log, Ur = Math.LN2;
  function $t(o) {
    return o >>>= 0, o === 0 ? 32 : 31 - (Fn(o) / Ur | 0) | 0;
  }
  function Br(o, u) {
    return o === u && (o !== 0 || 1 / o === 1 / u) || o !== o && u !== u;
  }
  var gn = typeof Object.is == "function" ? Object.is : Br, st = null, It = null, Zt = null, Ae = null, Gt = !1, br = !1, ur = 0, Mt = null, xr = 0;
  function Ut() {
    if (st === null)
      throw Error(O(321));
    return st;
  }
  function $e() {
    if (0 < xr)
      throw Error(O(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Wr() {
    return Ae === null ? Zt === null ? (Gt = !1, Zt = Ae = $e()) : (Gt = !0, Ae = Zt) : Ae.next === null ? (Gt = !1, Ae = Ae.next = $e()) : (Gt = !0, Ae = Ae.next), Ae;
  }
  function Hr() {
    It = st = null, br = !1, Zt = null, xr = 0, Ae = Mt = null;
  }
  function mn(o, u) {
    return typeof u == "function" ? u(o) : u;
  }
  function Qe(o, u, h) {
    if (st = Ut(), Ae = Wr(), Gt) {
      var m = Ae.queue;
      if (u = m.dispatch, Mt !== null && (h = Mt.get(m), h !== void 0)) {
        Mt.delete(m), m = Ae.memoizedState;
        do
          m = o(m, h.action), h = h.next;
        while (h !== null);
        return Ae.memoizedState = m, [m, u];
      }
      return [Ae.memoizedState, u];
    }
    return o = o === mn ? typeof u == "function" ? u() : u : h !== void 0 ? h(u) : u, Ae.memoizedState = o, o = Ae.queue = { last: null, dispatch: null }, o = o.dispatch = zn.bind(null, st, o), [Ae.memoizedState, o];
  }
  function Yr(o, u) {
    if (st = Ut(), Ae = Wr(), u = u === void 0 ? null : u, Ae !== null) {
      var h = Ae.memoizedState;
      if (h !== null && u !== null) {
        var m = h[1];
        e:
          if (m === null)
            m = !1;
          else {
            for (var I = 0; I < m.length && I < u.length; I++)
              if (!gn(u[I], m[I])) {
                m = !1;
                break e;
              }
            m = !0;
          }
        if (m)
          return h[0];
      }
    }
    return o = o(), Ae.memoizedState = [o, u], o;
  }
  function zn(o, u, h) {
    if (25 <= xr)
      throw Error(O(301));
    if (o === st)
      if (br = !0, o = { action: h, next: null }, Mt === null && (Mt = /* @__PURE__ */ new Map()), h = Mt.get(u), h === void 0)
        Mt.set(u, o);
      else {
        for (u = h; u.next !== null; )
          u = u.next;
        u.next = o;
      }
  }
  function Un() {
    throw Error(O(394));
  }
  function Dt() {
  }
  var Vr = { readContext: function(o) {
    return o._currentValue2;
  }, useContext: function(o) {
    return Ut(), o._currentValue2;
  }, useMemo: Yr, useReducer: Qe, useRef: function(o) {
    st = Ut(), Ae = Wr();
    var u = Ae.memoizedState;
    return u === null ? (o = { current: o }, Ae.memoizedState = o) : u;
  }, useState: function(o) {
    return Qe(mn, o);
  }, useInsertionEffect: Dt, useLayoutEffect: function() {
  }, useCallback: function(o, u) {
    return Yr(function() {
      return o;
    }, u);
  }, useImperativeHandle: Dt, useEffect: Dt, useDebugValue: Dt, useDeferredValue: function(o) {
    return Ut(), o;
  }, useTransition: function() {
    return Ut(), [
      !1,
      Un
    ];
  }, useId: function() {
    var o = It.treeContext, u = o.overflow;
    o = o.id, o = (o & ~(1 << 32 - Sr(o) - 1)).toString(32) + u;
    var h = wr;
    if (h === null)
      throw Error(O(404));
    return u = ur++, o = ":" + h.idPrefix + "R" + o, 0 < u && (o += "H" + u.toString(32)), o + ":";
  }, useMutableSource: function(o, u) {
    return Ut(), u(o._source);
  }, useSyncExternalStore: function(o, u, h) {
    if (h === void 0)
      throw Error(O(407));
    return h();
  } }, wr = null, $r = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function cr(o) {
    return console.error(o), null;
  }
  function Qt() {
  }
  function Bn(o, u, h, m, I, T, N, B, ne) {
    var de = [], ie = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: m === void 0 ? 12800 : m, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ie, pingedTasks: de, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: I === void 0 ? cr : I, onAllReady: T === void 0 ? Qt : T, onShellReady: N === void 0 ? Qt : N, onShellError: B === void 0 ? Qt : B, onFatalError: ne === void 0 ? Qt : ne }, h = Tr(u, 0, null, h, !1, !1), h.parentFlushed = !0, o = Zr(u, o, null, h, ie, sr, null, vn), de.push(o), u;
  }
  function Zr(o, u, h, m, I, T, N, B) {
    o.allPendingTasks++, h === null ? o.pendingRootTasks++ : h.pendingTasks++;
    var ne = { node: u, ping: function() {
      var de = o.pingedTasks;
      de.push(ne), de.length === 1 && ut(o);
    }, blockedBoundary: h, blockedSegment: m, abortSet: I, legacyContext: T, context: N, treeContext: B };
    return I.add(ne), ne;
  }
  function Tr(o, u, h, m, I, T) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: m, boundary: h, lastPushedText: I, textEmbedded: T };
  }
  function Xt(o, u) {
    if (o = o.onError(u), o != null && typeof o != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof o + '" instead');
    return o;
  }
  function Bt(o, u) {
    var h = o.onShellError;
    h(u), h = o.onFatalError, h(u), o.destination !== null ? (o.status = 2, o.destination.destroy(u)) : (o.status = 1, o.fatalError = u);
  }
  function Rt(o, u, h, m, I) {
    for (st = {}, It = u, ur = 0, o = h(m, I); br; )
      br = !1, ur = 0, xr += 1, Ae = null, o = h(m, I);
    return Hr(), o;
  }
  function fr(o, u, h, m) {
    var I = h.render(), T = m.childContextTypes;
    if (T != null) {
      var N = u.legacyContext;
      if (typeof h.getChildContext != "function")
        m = N;
      else {
        h = h.getChildContext();
        for (var B in h)
          if (!(B in T))
            throw Error(O(108, lr(m) || "Unknown", B));
        m = W({}, N, h);
      }
      u.legacyContext = m, He(o, u, I), u.legacyContext = N;
    } else
      He(o, u, I);
  }
  function dr(o, u) {
    if (o && o.defaultProps) {
      u = W({}, u), o = o.defaultProps;
      for (var h in o)
        u[h] === void 0 && (u[h] = o[h]);
      return u;
    }
    return u;
  }
  function gt(o, u, h, m, I) {
    if (typeof h == "function")
      if (h.prototype && h.prototype.isReactComponent) {
        I = pn(h, u.legacyContext);
        var T = h.contextType;
        T = new h(m, typeof T == "object" && T !== null ? T._currentValue2 : I), hn(T, h, m, I), fr(o, u, T, h);
      } else {
        T = pn(h, u.legacyContext), I = Rt(o, u, h, m, T);
        var N = ur !== 0;
        if (typeof I == "object" && I !== null && typeof I.render == "function" && I.$$typeof === void 0)
          hn(I, h, m, T), fr(o, u, I, h);
        else if (N) {
          m = u.treeContext, u.treeContext = zr(m, 1, 0);
          try {
            He(o, u, I);
          } finally {
            u.treeContext = m;
          }
        } else
          He(o, u, I);
      }
    else if (typeof h == "string") {
      switch (I = u.blockedSegment, T = nt(I.chunks, h, m, o.responseState, I.formatContext), I.lastPushedText = !1, N = I.formatContext, I.formatContext = _(N, h, m), St(o, u, T), I.formatContext = N, h) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          I.chunks.push("</", h, ">");
      }
      I.lastPushedText = !1;
    } else {
      switch (h) {
        case zt:
        case ct:
        case re:
        case te:
        case se:
          He(o, u, m.children);
          return;
        case Ee:
          He(o, u, m.children);
          return;
        case Be:
          throw Error(O(343));
        case ue:
          e: {
            h = u.blockedBoundary, I = u.blockedSegment, T = m.fallback, m = m.children, N = /* @__PURE__ */ new Set();
            var B = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: N, errorDigest: null }, ne = Tr(o, I.chunks.length, B, I.formatContext, !1, !1);
            I.children.push(ne), I.lastPushedText = !1;
            var de = Tr(o, 0, null, I.formatContext, !1, !1);
            de.parentFlushed = !0, u.blockedBoundary = B, u.blockedSegment = de;
            try {
              if (St(
                o,
                u,
                m
              ), o.responseState.generateStaticMarkup || de.lastPushedText && de.textEmbedded && de.chunks.push("<!-- -->"), de.status = 1, Pt(B, de), B.pendingTasks === 0)
                break e;
            } catch (ie) {
              de.status = 4, B.forceClientRender = !0, B.errorDigest = Xt(o, ie);
            } finally {
              u.blockedBoundary = h, u.blockedSegment = I;
            }
            u = Zr(o, T, h, ne, N, u.legacyContext, u.context, u.treeContext), o.pingedTasks.push(u);
          }
          return;
      }
      if (typeof h == "object" && h !== null)
        switch (h.$$typeof) {
          case me:
            if (m = Rt(o, u, h.render, m, I), ur !== 0) {
              h = u.treeContext, u.treeContext = zr(h, 1, 0);
              try {
                He(o, u, m);
              } finally {
                u.treeContext = h;
              }
            } else
              He(o, u, m);
            return;
          case Z:
            h = h.type, m = dr(h, m), gt(o, u, h, m, I);
            return;
          case he:
            if (I = m.children, h = h._context, m = m.value, T = h._currentValue2, h._currentValue2 = m, N = yt, yt = m = { parent: N, depth: N === null ? 0 : N.depth + 1, context: h, parentValue: T, value: m }, u.context = m, He(o, u, I), o = yt, o === null)
              throw Error(O(403));
            m = o.parentValue, o.context._currentValue2 = m === dn ? o.context._defaultValue : m, o = yt = o.parent, u.context = o;
            return;
          case Se:
            m = m.children, m = m(h._currentValue2), He(o, u, m);
            return;
          case Ce:
            I = h._init, h = I(h._payload), m = dr(h, m), gt(
              o,
              u,
              h,
              m,
              void 0
            );
            return;
        }
      throw Error(O(130, h == null ? h : typeof h, ""));
    }
  }
  function He(o, u, h) {
    if (u.node = h, typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case q:
          gt(o, u, h.type, h.props, h.ref);
          return;
        case ge:
          throw Error(O(257));
        case Ce:
          var m = h._init;
          h = m(h._payload), He(o, u, h);
          return;
      }
      if (F(h)) {
        At(o, u, h);
        return;
      }
      if (h === null || typeof h != "object" ? m = null : (m = mt && h[mt] || h["@@iterator"], m = typeof m == "function" ? m : null), m && (m = m.call(h))) {
        if (h = m.next(), !h.done) {
          var I = [];
          do
            I.push(h.value), h = m.next();
          while (!h.done);
          At(o, u, I);
        }
        return;
      }
      throw o = Object.prototype.toString.call(h), Error(O(31, o === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : o));
    }
    typeof h == "string" ? (m = u.blockedSegment, m.lastPushedText = U(u.blockedSegment.chunks, h, o.responseState, m.lastPushedText)) : typeof h == "number" && (m = u.blockedSegment, m.lastPushedText = U(u.blockedSegment.chunks, "" + h, o.responseState, m.lastPushedText));
  }
  function At(o, u, h) {
    for (var m = h.length, I = 0; I < m; I++) {
      var T = u.treeContext;
      u.treeContext = zr(T, m, I);
      try {
        St(o, u, h[I]);
      } finally {
        u.treeContext = T;
      }
    }
  }
  function St(o, u, h) {
    var m = u.blockedSegment.formatContext, I = u.legacyContext, T = u.context;
    try {
      return He(o, u, h);
    } catch (ne) {
      if (Hr(), typeof ne == "object" && ne !== null && typeof ne.then == "function") {
        h = ne;
        var N = u.blockedSegment, B = Tr(o, N.chunks.length, null, N.formatContext, N.lastPushedText, !0);
        N.children.push(B), N.lastPushedText = !1, o = Zr(o, u.node, u.blockedBoundary, B, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, h.then(o, o), u.blockedSegment.formatContext = m, u.legacyContext = I, u.context = T, Ge(T);
      } else
        throw u.blockedSegment.formatContext = m, u.legacyContext = I, u.context = T, Ge(T), ne;
    }
  }
  function tt(o) {
    var u = o.blockedBoundary;
    o = o.blockedSegment, o.status = 3, Nt(this, u, o);
  }
  function Er(o, u, h) {
    var m = o.blockedBoundary;
    o.blockedSegment.status = 3, m === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.push(null))) : (m.pendingTasks--, m.forceClientRender || (m.forceClientRender = !0, o = h === void 0 ? Error(O(432)) : h, m.errorDigest = u.onError(o), m.parentFlushed && u.clientRenderedBoundaries.push(m)), m.fallbackAbortableTasks.forEach(function(I) {
      return Er(I, u, h);
    }), m.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (m = u.onAllReady, m()));
  }
  function Pt(o, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var h = u.children[0];
      h.id = u.id, h.parentFlushed = !0, h.status === 1 && Pt(o, h);
    } else
      o.completedSegments.push(u);
  }
  function Nt(o, u, h) {
    if (u === null) {
      if (h.parentFlushed) {
        if (o.completedRootSegment !== null)
          throw Error(O(389));
        o.completedRootSegment = h;
      }
      o.pendingRootTasks--, o.pendingRootTasks === 0 && (o.onShellError = Qt, u = o.onShellReady, u());
    } else
      u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (h.parentFlushed && h.status === 1 && Pt(u, h), u.parentFlushed && o.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(tt, o), u.fallbackAbortableTasks.clear()) : h.parentFlushed && h.status === 1 && (Pt(u, h), u.completedSegments.length === 1 && u.parentFlushed && o.partialBoundaries.push(u)));
    o.allPendingTasks--, o.allPendingTasks === 0 && (o = o.onAllReady, o());
  }
  function ut(o) {
    if (o.status !== 2) {
      var u = yt, h = $r.current;
      $r.current = Vr;
      var m = wr;
      wr = o.responseState;
      try {
        var I = o.pingedTasks, T;
        for (T = 0; T < I.length; T++) {
          var N = I[T], B = o, ne = N.blockedSegment;
          if (ne.status === 0) {
            Ge(N.context);
            try {
              He(B, N, N.node), B.responseState.generateStaticMarkup || ne.lastPushedText && ne.textEmbedded && ne.chunks.push("<!-- -->"), N.abortSet.delete(N), ne.status = 1, Nt(B, N.blockedBoundary, ne);
            } catch (at) {
              if (Hr(), typeof at == "object" && at !== null && typeof at.then == "function") {
                var de = N.ping;
                at.then(de, de);
              } else {
                N.abortSet.delete(N), ne.status = 4;
                var ie = N.blockedBoundary, Ie = at, ft = Xt(B, Ie);
                if (ie === null ? Bt(B, Ie) : (ie.pendingTasks--, ie.forceClientRender || (ie.forceClientRender = !0, ie.errorDigest = ft, ie.parentFlushed && B.clientRenderedBoundaries.push(ie))), B.allPendingTasks--, B.allPendingTasks === 0) {
                  var ot = B.onAllReady;
                  ot();
                }
              }
            } finally {
            }
          }
        }
        I.splice(0, T), o.destination !== null && Kt(o, o.destination);
      } catch (at) {
        Xt(o, at), Bt(o, at);
      } finally {
        wr = m, $r.current = h, h === Vr && Ge(u);
      }
    }
  }
  function Wt(o, u, h) {
    switch (h.parentFlushed = !0, h.status) {
      case 0:
        var m = h.id = o.nextSegmentId++;
        return h.lastPushedText = !1, h.textEmbedded = !1, o = o.responseState, u.push('<template id="'), u.push(o.placeholderPrefix), o = m.toString(16), u.push(o), u.push('"></template>');
      case 1:
        h.status = 2;
        var I = !0;
        m = h.chunks;
        var T = 0;
        h = h.children;
        for (var N = 0; N < h.length; N++) {
          for (I = h[N]; T < I.index; T++)
            u.push(m[T]);
          I = Jt(o, u, I);
        }
        for (; T < m.length - 1; T++)
          u.push(m[T]);
        return T < m.length && (I = u.push(m[T])), I;
      default:
        throw Error(O(390));
    }
  }
  function Jt(o, u, h) {
    var m = h.boundary;
    if (m === null)
      return Wt(o, u, h);
    if (m.parentFlushed = !0, m.forceClientRender)
      return o.responseState.generateStaticMarkup || (m = m.errorDigest, u.push("<!--$!-->"), u.push("<template"), m && (u.push(' data-dgst="'), m = xe(m), u.push(m), u.push('"')), u.push("></template>")), Wt(o, u, h), o = o.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), o;
    if (0 < m.pendingTasks) {
      m.rootSegmentID = o.nextSegmentId++, 0 < m.completedSegments.length && o.partialBoundaries.push(m);
      var I = o.responseState, T = I.nextSuspenseID++;
      return I = I.boundaryPrefix + T.toString(16), m = m.id = I, Xe(u, o.responseState, m), Wt(o, u, h), u.push("<!--/$-->");
    }
    if (m.byteSize > o.progressiveChunkSize)
      return m.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(m), Xe(u, o.responseState, m.id), Wt(o, u, h), u.push("<!--/$-->");
    if (o.responseState.generateStaticMarkup || u.push("<!--$-->"), h = m.completedSegments, h.length !== 1)
      throw Error(O(391));
    return Jt(o, u, h[0]), o = o.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), o;
  }
  function Gr(o, u, h) {
    return vt(u, o.responseState, h.formatContext, h.id), Jt(o, u, h), Je(u, h.formatContext);
  }
  function Qr(o, u, h) {
    for (var m = h.completedSegments, I = 0; I < m.length; I++)
      kr(o, u, h, m[I]);
    if (m.length = 0, o = o.responseState, m = h.id, h = h.rootSegmentID, u.push(o.startInlineScript), o.sentCompleteBoundaryFunction ? u.push('$RC("') : (o.sentCompleteBoundaryFunction = !0, u.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), m === null)
      throw Error(O(395));
    return h = h.toString(16), u.push(m), u.push('","'), u.push(o.segmentPrefix), u.push(h), u.push('")<\/script>');
  }
  function kr(o, u, h, m) {
    if (m.status === 2)
      return !0;
    var I = m.id;
    if (I === -1) {
      if ((m.id = h.rootSegmentID) === -1)
        throw Error(O(392));
      return Gr(o, u, m);
    }
    return Gr(o, u, m), o = o.responseState, u.push(o.startInlineScript), o.sentCompleteSegmentFunction ? u.push('$RS("') : (o.sentCompleteSegmentFunction = !0, u.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), u.push(o.segmentPrefix), I = I.toString(16), u.push(I), u.push('","'), u.push(o.placeholderPrefix), u.push(I), u.push('")<\/script>');
  }
  function Kt(o, u) {
    try {
      var h = o.completedRootSegment;
      if (h !== null && o.pendingRootTasks === 0) {
        Jt(o, u, h), o.completedRootSegment = null;
        var m = o.responseState.bootstrapChunks;
        for (h = 0; h < m.length - 1; h++)
          u.push(m[h]);
        h < m.length && u.push(m[h]);
      }
      var I = o.clientRenderedBoundaries, T;
      for (T = 0; T < I.length; T++) {
        var N = I[T];
        m = u;
        var B = o.responseState, ne = N.id, de = N.errorDigest, ie = N.errorMessage, Ie = N.errorComponentStack;
        if (m.push(B.startInlineScript), B.sentClientRenderFunction ? m.push('$RX("') : (B.sentClientRenderFunction = !0, m.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), ne === null)
          throw Error(O(395));
        if (m.push(ne), m.push('"'), de || ie || Ie) {
          m.push(",");
          var ft = et(de || "");
          m.push(ft);
        }
        if (ie || Ie) {
          m.push(",");
          var ot = et(ie || "");
          m.push(ot);
        }
        if (Ie) {
          m.push(",");
          var at = et(Ie);
          m.push(at);
        }
        if (!m.push(")<\/script>")) {
          o.destination = null, T++, I.splice(0, T);
          return;
        }
      }
      I.splice(0, T);
      var Ht = o.completedBoundaries;
      for (T = 0; T < Ht.length; T++)
        if (!Qr(o, u, Ht[T])) {
          o.destination = null, T++, Ht.splice(0, T);
          return;
        }
      Ht.splice(0, T);
      var bt = o.partialBoundaries;
      for (T = 0; T < bt.length; T++) {
        var Mr = bt[T];
        e: {
          I = o, N = u;
          var qt = Mr.completedSegments;
          for (B = 0; B < qt.length; B++)
            if (!kr(I, N, Mr, qt[B])) {
              B++, qt.splice(0, B);
              var pr = !1;
              break e;
            }
          qt.splice(0, B), pr = !0;
        }
        if (!pr) {
          o.destination = null, T++, bt.splice(0, T);
          return;
        }
      }
      bt.splice(0, T);
      var Yt = o.completedBoundaries;
      for (T = 0; T < Yt.length; T++)
        if (!Qr(o, u, Yt[T])) {
          o.destination = null, T++, Yt.splice(0, T);
          return;
        }
      Yt.splice(0, T);
    } finally {
      o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && u.push(null);
    }
  }
  function Xr(o, u) {
    try {
      var h = o.abortableTasks;
      h.forEach(function(m) {
        return Er(m, o, u);
      }), h.clear(), o.destination !== null && Kt(o, o.destination);
    } catch (m) {
      Xt(o, m), Bt(o, m);
    }
  }
  function Cr() {
  }
  function Ir(o, u, h, m) {
    var I = !1, T = null, N = "", B = { push: function(de) {
      return de !== null && (N += de), !0;
    }, destroy: function(de) {
      I = !0, T = de;
    } }, ne = !1;
    if (o = Bn(o, Ve(h, u ? u.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Cr, void 0, function() {
      ne = !0;
    }, void 0, void 0), ut(o), Xr(o, m), o.status === 1)
      o.status = 2, B.destroy(o.fatalError);
    else if (o.status !== 2 && o.destination === null) {
      o.destination = B;
      try {
        Kt(o, B);
      } catch (de) {
        Xt(o, de), Bt(o, de);
      }
    }
    if (I)
      throw T;
    if (!ne)
      throw Error(O(426));
    return N;
  }
  return To.renderToNodeStream = function() {
    throw Error(O(207));
  }, To.renderToStaticMarkup = function(o, u) {
    return Ir(o, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, To.renderToStaticNodeStream = function() {
    throw Error(O(208));
  }, To.renderToString = function(o, u) {
    return Ir(o, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, To.version = "18.2.0", To;
}
var dl = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ds;
function ou() {
  if (Ds)
    return dl;
  Ds = 1;
  var P = G;
  function O(a) {
    for (var c = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, p = 1; p < arguments.length; p++)
      c += "&args[]=" + encodeURIComponent(arguments[p]);
    return "Minified React error #" + a + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var V = null, ee = 0;
  function g(a, c) {
    if (c.length !== 0)
      if (512 < c.length)
        0 < ee && (a.enqueue(new Uint8Array(V.buffer, 0, ee)), V = new Uint8Array(512), ee = 0), a.enqueue(c);
      else {
        var p = V.length - ee;
        p < c.length && (p === 0 ? a.enqueue(V) : (V.set(c.subarray(0, p), ee), a.enqueue(V), c = c.subarray(p)), V = new Uint8Array(512), ee = 0), V.set(c, ee), ee += c.length;
      }
  }
  function Q(a, c) {
    return g(a, c), !0;
  }
  function Te(a) {
    V && 0 < ee && (a.enqueue(new Uint8Array(V.buffer, 0, ee)), V = null, ee = 0);
  }
  var K = new TextEncoder();
  function E(a) {
    return K.encode(a);
  }
  function D(a) {
    return K.encode(a);
  }
  function ve(a, c) {
    typeof a.error == "function" ? a.error(c) : a.close();
  }
  var j = Object.prototype.hasOwnProperty, ce = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Re = {}, xe = {};
  function ke(a) {
    return j.call(xe, a) ? !0 : j.call(Re, a) ? !1 : ce.test(a) ? xe[a] = !0 : (Re[a] = !0, !1);
  }
  function $(a, c, p, y, M, C, L) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = y, this.attributeNamespace = M, this.mustUseProperty = p, this.propertyName = a, this.type = c, this.sanitizeURL = C, this.removeEmptyString = L;
  }
  var F = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    F[a] = new $(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var c = a[0];
    F[c] = new $(c, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    F[a] = new $(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    F[a] = new $(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    F[a] = new $(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    F[a] = new $(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    F[a] = new $(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    F[a] = new $(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    F[a] = new $(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var le = /[\-:]([a-z])/g;
  function _(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var c = a.replace(
      le,
      _
    );
    F[c] = new $(c, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var c = a.replace(le, _);
    F[c] = new $(c, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var c = a.replace(le, _);
    F[c] = new $(c, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    F[a] = new $(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), F.xlinkHref = new $("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    F[a] = new $(a, 1, !1, a.toLowerCase(), null, !0, !0);
  });
  var Y = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, k = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Y).forEach(function(a) {
    k.forEach(function(c) {
      c = c + a.charAt(0).toUpperCase() + a.substring(1), Y[c] = Y[a];
    });
  });
  var X = /["'&<>]/;
  function fe(a) {
    if (typeof a == "boolean" || typeof a == "number")
      return "" + a;
    a = "" + a;
    var c = X.exec(a);
    if (c) {
      var p = "", y, M = 0;
      for (y = c.index; y < a.length; y++) {
        switch (a.charCodeAt(y)) {
          case 34:
            c = "&quot;";
            break;
          case 38:
            c = "&amp;";
            break;
          case 39:
            c = "&#x27;";
            break;
          case 60:
            c = "&lt;";
            break;
          case 62:
            c = "&gt;";
            break;
          default:
            continue;
        }
        M !== y && (p += a.substring(M, y)), M = y + 1, p += c;
      }
      a = M !== y ? p + a.substring(M, y) : p;
    }
    return a;
  }
  var De = /([A-Z])/g, ae = /^ms-/, Pe = Array.isArray, Ne = D("<script>"), Ue = D("<\/script>"), nt = D('<script src="'), Xe = D('<script type="module" src="'), vt = D('" async=""><\/script>'), Je = /(<\/|<)(s)(cript)/gi;
  function qe(a, c, p, y) {
    return "" + c + (p === "s" ? "\\u0073" : "\\u0053") + y;
  }
  function et(a, c, p, y, M) {
    a = a === void 0 ? "" : a, c = c === void 0 ? Ne : D('<script nonce="' + fe(c) + '">');
    var C = [];
    if (p !== void 0 && C.push(c, E(("" + p).replace(Je, qe)), Ue), y !== void 0)
      for (p = 0; p < y.length; p++)
        C.push(nt, E(fe(y[p])), vt);
    if (M !== void 0)
      for (y = 0; y < M.length; y++)
        C.push(Xe, E(fe(M[y])), vt);
    return { bootstrapChunks: C, startInlineScript: c, placeholderPrefix: D(a + "P:"), segmentPrefix: D(a + "S:"), boundaryPrefix: a + "B:", idPrefix: a, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Ve(a, c) {
    return { insertionMode: a, selectedValue: c };
  }
  function U(a) {
    return Ve(a === "http://www.w3.org/2000/svg" ? 2 : a === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function W(a, c, p) {
    switch (c) {
      case "select":
        return Ve(1, p.value != null ? p.value : p.defaultValue);
      case "svg":
        return Ve(2, null);
      case "math":
        return Ve(3, null);
      case "foreignObject":
        return Ve(1, null);
      case "table":
        return Ve(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Ve(5, null);
      case "colgroup":
        return Ve(7, null);
      case "tr":
        return Ve(6, null);
    }
    return 4 <= a.insertionMode || a.insertionMode === 0 ? Ve(1, null) : a;
  }
  var q = D("<!-- -->");
  function ge(a, c, p, y) {
    return c === "" ? y : (y && a.push(q), a.push(E(fe(c))), !0);
  }
  var se = /* @__PURE__ */ new Map(), re = D(' style="'), te = D(":"), he = D(";");
  function Se(a, c, p) {
    if (typeof p != "object")
      throw Error(O(62));
    c = !0;
    for (var y in p)
      if (j.call(p, y)) {
        var M = p[y];
        if (M != null && typeof M != "boolean" && M !== "") {
          if (y.indexOf("--") === 0) {
            var C = E(fe(y));
            M = E(fe(("" + M).trim()));
          } else {
            C = y;
            var L = se.get(C);
            L !== void 0 || (L = D(fe(C.replace(De, "-$1").toLowerCase().replace(ae, "-ms-"))), se.set(C, L)), C = L, M = typeof M == "number" ? M === 0 || j.call(Y, y) ? E("" + M) : E(M + "px") : E(fe(("" + M).trim()));
          }
          c ? (c = !1, a.push(re, C, te, M)) : a.push(he, C, te, M);
        }
      }
    c || a.push(Ee);
  }
  var me = D(" "), ue = D('="'), Ee = D('"'), Z = D('=""');
  function Ce(a, c, p, y) {
    switch (p) {
      case "style":
        Se(a, c, y);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
      if (c = F.hasOwnProperty(p) ? F[p] : null, c !== null) {
        switch (typeof y) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!c.acceptsBooleans)
              return;
        }
        switch (p = E(c.attributeName), c.type) {
          case 3:
            y && a.push(me, p, Z);
            break;
          case 4:
            y === !0 ? a.push(me, p, Z) : y !== !1 && a.push(me, p, ue, E(fe(y)), Ee);
            break;
          case 5:
            isNaN(y) || a.push(me, p, ue, E(fe(y)), Ee);
            break;
          case 6:
            !isNaN(y) && 1 <= y && a.push(me, p, ue, E(fe(y)), Ee);
            break;
          default:
            c.sanitizeURL && (y = "" + y), a.push(me, p, ue, E(fe(y)), Ee);
        }
      } else if (ke(p)) {
        switch (typeof y) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = p.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-")
              return;
        }
        a.push(me, E(p), ue, E(fe(y)), Ee);
      }
    }
  }
  var Be = D(">"), ct = D("/>");
  function zt(a, c, p) {
    if (c != null) {
      if (p != null)
        throw Error(O(60));
      if (typeof c != "object" || !("__html" in c))
        throw Error(O(61));
      c = c.__html, c != null && a.push(E("" + c));
    }
  }
  function dn(a) {
    var c = "";
    return P.Children.forEach(a, function(p) {
      p != null && (c += p);
    }), c;
  }
  var mt = D(' selected=""');
  function lr(a, c, p, y) {
    a.push(rt(p));
    var M = p = null, C;
    for (C in c)
      if (j.call(c, C)) {
        var L = c[C];
        if (L != null)
          switch (C) {
            case "children":
              p = L;
              break;
            case "dangerouslySetInnerHTML":
              M = L;
              break;
            default:
              Ce(a, y, C, L);
          }
      }
    return a.push(Be), zt(a, M, p), typeof p == "string" ? (a.push(E(fe(p))), null) : p;
  }
  var sr = D(`
`), pn = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, yt = /* @__PURE__ */ new Map();
  function rt(a) {
    var c = yt.get(a);
    if (c === void 0) {
      if (!pn.test(a))
        throw Error(O(65, a));
      c = D("<" + a), yt.set(a, c);
    }
    return c;
  }
  var Ke = D("<!DOCTYPE html>");
  function jr(a, c, p, y, M) {
    switch (c) {
      case "select":
        a.push(rt("select"));
        var C = null, L = null;
        for (be in p)
          if (j.call(p, be)) {
            var H = p[be];
            if (H != null)
              switch (be) {
                case "children":
                  C = H;
                  break;
                case "dangerouslySetInnerHTML":
                  L = H;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  Ce(a, y, be, H);
              }
          }
        return a.push(Be), zt(a, L, C), C;
      case "option":
        L = M.selectedValue, a.push(rt("option"));
        var pe = H = null, we = null, be = null;
        for (C in p)
          if (j.call(p, C)) {
            var ze = p[C];
            if (ze != null)
              switch (C) {
                case "children":
                  H = ze;
                  break;
                case "selected":
                  we = ze;
                  break;
                case "dangerouslySetInnerHTML":
                  be = ze;
                  break;
                case "value":
                  pe = ze;
                default:
                  Ce(a, y, C, ze);
              }
          }
        if (L != null)
          if (p = pe !== null ? "" + pe : dn(H), Pe(L)) {
            for (y = 0; y < L.length; y++)
              if ("" + L[y] === p) {
                a.push(mt);
                break;
              }
          } else
            "" + L === p && a.push(mt);
        else
          we && a.push(mt);
        return a.push(Be), zt(a, be, H), H;
      case "textarea":
        a.push(rt("textarea")), be = L = C = null;
        for (H in p)
          if (j.call(p, H) && (pe = p[H], pe != null))
            switch (H) {
              case "children":
                be = pe;
                break;
              case "value":
                C = pe;
                break;
              case "defaultValue":
                L = pe;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(O(91));
              default:
                Ce(a, y, H, pe);
            }
        if (C === null && L !== null && (C = L), a.push(Be), be != null) {
          if (C != null)
            throw Error(O(92));
          if (Pe(be) && 1 < be.length)
            throw Error(O(93));
          C = "" + be;
        }
        return typeof C == "string" && C[0] === `
` && a.push(sr), C !== null && a.push(E(fe("" + C))), null;
      case "input":
        a.push(rt("input")), pe = be = H = C = null;
        for (L in p)
          if (j.call(p, L) && (we = p[L], we != null))
            switch (L) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(O(399, "input"));
              case "defaultChecked":
                pe = we;
                break;
              case "defaultValue":
                H = we;
                break;
              case "checked":
                be = we;
                break;
              case "value":
                C = we;
                break;
              default:
                Ce(a, y, L, we);
            }
        return be !== null ? Ce(
          a,
          y,
          "checked",
          be
        ) : pe !== null && Ce(a, y, "checked", pe), C !== null ? Ce(a, y, "value", C) : H !== null && Ce(a, y, "value", H), a.push(ct), null;
      case "menuitem":
        a.push(rt("menuitem"));
        for (var ht in p)
          if (j.call(p, ht) && (C = p[ht], C != null))
            switch (ht) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(O(400));
              default:
                Ce(a, y, ht, C);
            }
        return a.push(Be), null;
      case "title":
        a.push(rt("title")), C = null;
        for (ze in p)
          if (j.call(p, ze) && (L = p[ze], L != null))
            switch (ze) {
              case "children":
                C = L;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(O(434));
              default:
                Ce(a, y, ze, L);
            }
        return a.push(Be), C;
      case "listing":
      case "pre":
        a.push(rt(c)), L = C = null;
        for (pe in p)
          if (j.call(p, pe) && (H = p[pe], H != null))
            switch (pe) {
              case "children":
                C = H;
                break;
              case "dangerouslySetInnerHTML":
                L = H;
                break;
              default:
                Ce(a, y, pe, H);
            }
        if (a.push(Be), L != null) {
          if (C != null)
            throw Error(O(60));
          if (typeof L != "object" || !("__html" in L))
            throw Error(O(61));
          p = L.__html, p != null && (typeof p == "string" && 0 < p.length && p[0] === `
` ? a.push(sr, E(p)) : a.push(E("" + p)));
        }
        return typeof C == "string" && C[0] === `
` && a.push(sr), C;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        a.push(rt(c));
        for (var wt in p)
          if (j.call(p, wt) && (C = p[wt], C != null))
            switch (wt) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(O(399, c));
              default:
                Ce(a, y, wt, C);
            }
        return a.push(ct), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return lr(a, p, c, y);
      case "html":
        return M.insertionMode === 0 && a.push(Ke), lr(a, p, c, y);
      default:
        if (c.indexOf("-") === -1 && typeof p.is != "string")
          return lr(a, p, c, y);
        a.push(rt(c)), L = C = null;
        for (we in p)
          if (j.call(p, we) && (H = p[we], H != null))
            switch (we) {
              case "children":
                C = H;
                break;
              case "dangerouslySetInnerHTML":
                L = H;
                break;
              case "style":
                Se(a, y, H);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                ke(we) && typeof H != "function" && typeof H != "symbol" && a.push(me, E(we), ue, E(fe(H)), Ee);
            }
        return a.push(Be), zt(a, L, C), C;
    }
  }
  var _r = D("</"), Lr = D(">"), Ge = D('<template id="'), Fr = D('"></template>'), hn = D("<!--$-->"), vn = D('<!--$?--><template id="'), zr = D('"></template>'), Sr = D("<!--$!-->"), Fn = D("<!--/$-->"), Ur = D("<template"), $t = D('"'), Br = D(' data-dgst="');
  D(' data-msg="'), D(' data-stck="');
  var gn = D("></template>");
  function st(a, c, p) {
    if (g(a, vn), p === null)
      throw Error(O(395));
    return g(a, p), Q(a, zr);
  }
  var It = D('<div hidden id="'), Zt = D('">'), Ae = D("</div>"), Gt = D('<svg aria-hidden="true" style="display:none" id="'), br = D('">'), ur = D("</svg>"), Mt = D('<math aria-hidden="true" style="display:none" id="'), xr = D('">'), Ut = D("</math>"), $e = D('<table hidden id="'), Wr = D('">'), Hr = D("</table>"), mn = D('<table hidden><tbody id="'), Qe = D('">'), Yr = D("</tbody></table>"), zn = D('<table hidden><tr id="'), Un = D('">'), Dt = D("</tr></table>"), Vr = D('<table hidden><colgroup id="'), wr = D('">'), $r = D("</colgroup></table>");
  function cr(a, c, p, y) {
    switch (p.insertionMode) {
      case 0:
      case 1:
        return g(a, It), g(a, c.segmentPrefix), g(a, E(y.toString(16))), Q(a, Zt);
      case 2:
        return g(a, Gt), g(a, c.segmentPrefix), g(a, E(y.toString(16))), Q(a, br);
      case 3:
        return g(a, Mt), g(a, c.segmentPrefix), g(a, E(y.toString(16))), Q(a, xr);
      case 4:
        return g(a, $e), g(a, c.segmentPrefix), g(a, E(y.toString(16))), Q(a, Wr);
      case 5:
        return g(a, mn), g(a, c.segmentPrefix), g(a, E(y.toString(16))), Q(a, Qe);
      case 6:
        return g(a, zn), g(a, c.segmentPrefix), g(a, E(y.toString(16))), Q(a, Un);
      case 7:
        return g(
          a,
          Vr
        ), g(a, c.segmentPrefix), g(a, E(y.toString(16))), Q(a, wr);
      default:
        throw Error(O(397));
    }
  }
  function Qt(a, c) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return Q(a, Ae);
      case 2:
        return Q(a, ur);
      case 3:
        return Q(a, Ut);
      case 4:
        return Q(a, Hr);
      case 5:
        return Q(a, Yr);
      case 6:
        return Q(a, Dt);
      case 7:
        return Q(a, $r);
      default:
        throw Error(O(397));
    }
  }
  var Bn = D('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Zr = D('$RS("'), Tr = D('","'), Xt = D('")<\/script>'), Bt = D('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), Rt = D('$RC("'), fr = D('","'), dr = D('")<\/script>'), gt = D('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), He = D('$RX("'), At = D('"'), St = D(")<\/script>"), tt = D(","), Er = /[<\u2028\u2029]/g;
  function Pt(a) {
    return JSON.stringify(a).replace(Er, function(c) {
      switch (c) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  var Nt = Object.assign, ut = Symbol.for("react.element"), Wt = Symbol.for("react.portal"), Jt = Symbol.for("react.fragment"), Gr = Symbol.for("react.strict_mode"), Qr = Symbol.for("react.profiler"), kr = Symbol.for("react.provider"), Kt = Symbol.for("react.context"), Xr = Symbol.for("react.forward_ref"), Cr = Symbol.for("react.suspense"), Ir = Symbol.for("react.suspense_list"), o = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), h = Symbol.for("react.scope"), m = Symbol.for("react.debug_trace_mode"), I = Symbol.for("react.legacy_hidden"), T = Symbol.for("react.default_value"), N = Symbol.iterator;
  function B(a) {
    if (a == null)
      return null;
    if (typeof a == "function")
      return a.displayName || a.name || null;
    if (typeof a == "string")
      return a;
    switch (a) {
      case Jt:
        return "Fragment";
      case Wt:
        return "Portal";
      case Qr:
        return "Profiler";
      case Gr:
        return "StrictMode";
      case Cr:
        return "Suspense";
      case Ir:
        return "SuspenseList";
    }
    if (typeof a == "object")
      switch (a.$$typeof) {
        case Kt:
          return (a.displayName || "Context") + ".Consumer";
        case kr:
          return (a._context.displayName || "Context") + ".Provider";
        case Xr:
          var c = a.render;
          return a = a.displayName, a || (a = c.displayName || c.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
        case o:
          return c = a.displayName || null, c !== null ? c : B(a.type) || "Memo";
        case u:
          c = a._payload, a = a._init;
          try {
            return B(a(c));
          } catch {
          }
      }
    return null;
  }
  var ne = {};
  function de(a, c) {
    if (a = a.contextTypes, !a)
      return ne;
    var p = {}, y;
    for (y in a)
      p[y] = c[y];
    return p;
  }
  var ie = null;
  function Ie(a, c) {
    if (a !== c) {
      a.context._currentValue = a.parentValue, a = a.parent;
      var p = c.parent;
      if (a === null) {
        if (p !== null)
          throw Error(O(401));
      } else {
        if (p === null)
          throw Error(O(401));
        Ie(a, p);
      }
      c.context._currentValue = c.value;
    }
  }
  function ft(a) {
    a.context._currentValue = a.parentValue, a = a.parent, a !== null && ft(a);
  }
  function ot(a) {
    var c = a.parent;
    c !== null && ot(c), a.context._currentValue = a.value;
  }
  function at(a, c) {
    if (a.context._currentValue = a.parentValue, a = a.parent, a === null)
      throw Error(O(402));
    a.depth === c.depth ? Ie(a, c) : at(a, c);
  }
  function Ht(a, c) {
    var p = c.parent;
    if (p === null)
      throw Error(O(402));
    a.depth === p.depth ? Ie(a, p) : Ht(a, p), c.context._currentValue = c.value;
  }
  function bt(a) {
    var c = ie;
    c !== a && (c === null ? ot(a) : a === null ? ft(c) : c.depth === a.depth ? Ie(c, a) : c.depth > a.depth ? at(c, a) : Ht(c, a), ie = a);
  }
  var Mr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, c) {
    a = a._reactInternals, a.queue !== null && a.queue.push(c);
  }, enqueueReplaceState: function(a, c) {
    a = a._reactInternals, a.replace = !0, a.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function qt(a, c, p, y) {
    var M = a.state !== void 0 ? a.state : null;
    a.updater = Mr, a.props = p, a.state = M;
    var C = { queue: [], replace: !1 };
    a._reactInternals = C;
    var L = c.contextType;
    if (a.context = typeof L == "object" && L !== null ? L._currentValue : y, L = c.getDerivedStateFromProps, typeof L == "function" && (L = L(p, M), M = L == null ? M : Nt({}, M, L), a.state = M), typeof c.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function"))
      if (c = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), c !== a.state && Mr.enqueueReplaceState(a, a.state, null), C.queue !== null && 0 < C.queue.length)
        if (c = C.queue, L = C.replace, C.queue = null, C.replace = !1, L && c.length === 1)
          a.state = c[0];
        else {
          for (C = L ? c[0] : a.state, M = !0, L = L ? 1 : 0; L < c.length; L++) {
            var H = c[L];
            H = typeof H == "function" ? H.call(a, C, p, y) : H, H != null && (M ? (M = !1, C = Nt({}, C, H)) : Nt(C, H));
          }
          a.state = C;
        }
      else
        C.queue = null;
  }
  var pr = { id: 1, overflow: "" };
  function Yt(a, c, p) {
    var y = a.id;
    a = a.overflow;
    var M = 32 - Jr(y) - 1;
    y &= ~(1 << M), p += 1;
    var C = 32 - Jr(c) + M;
    if (30 < C) {
      var L = M - M % 5;
      return C = (y & (1 << L) - 1).toString(32), y >>= L, M -= L, { id: 1 << 32 - Jr(c) + M | p << M | y, overflow: C + a };
    }
    return { id: 1 << C | p << M | y, overflow: a };
  }
  var Jr = Math.clz32 ? Math.clz32 : Wn, ka = Math.log, Ca = Math.LN2;
  function Wn(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (ka(a) / Ca | 0) | 0;
  }
  function Ia(a, c) {
    return a === c && (a !== 0 || 1 / a === 1 / c) || a !== a && c !== c;
  }
  var Hn = typeof Object.is == "function" ? Object.is : Ia, Vt = null, Kr = null, yn = null, je = null, er = !1, dt = !1, hr = 0, tr = null, Sn = 0;
  function rr() {
    if (Vt === null)
      throw Error(O(321));
    return Vt;
  }
  function xt() {
    if (0 < Sn)
      throw Error(O(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Yn() {
    return je === null ? yn === null ? (er = !1, yn = je = xt()) : (er = !0, je = yn) : je.next === null ? (er = !1, je = je.next = xt()) : (er = !0, je = je.next), je;
  }
  function Vn() {
    Kr = Vt = null, dt = !1, yn = null, Sn = 0, je = tr = null;
  }
  function Mo(a, c) {
    return typeof c == "function" ? c(a) : c;
  }
  function Do(a, c, p) {
    if (Vt = rr(), je = Yn(), er) {
      var y = je.queue;
      if (c = y.dispatch, tr !== null && (p = tr.get(y), p !== void 0)) {
        tr.delete(y), y = je.memoizedState;
        do
          y = a(y, p.action), p = p.next;
        while (p !== null);
        return je.memoizedState = y, [y, c];
      }
      return [je.memoizedState, c];
    }
    return a = a === Mo ? typeof c == "function" ? c() : c : p !== void 0 ? p(c) : c, je.memoizedState = a, a = je.queue = { last: null, dispatch: null }, a = a.dispatch = Ma.bind(null, Vt, a), [je.memoizedState, a];
  }
  function Ro(a, c) {
    if (Vt = rr(), je = Yn(), c = c === void 0 ? null : c, je !== null) {
      var p = je.memoizedState;
      if (p !== null && c !== null) {
        var y = p[1];
        e:
          if (y === null)
            y = !1;
          else {
            for (var M = 0; M < y.length && M < c.length; M++)
              if (!Hn(c[M], y[M])) {
                y = !1;
                break e;
              }
            y = !0;
          }
        if (y)
          return p[0];
      }
    }
    return a = a(), je.memoizedState = [a, c], a;
  }
  function Ma(a, c, p) {
    if (25 <= Sn)
      throw Error(O(301));
    if (a === Vt)
      if (dt = !0, a = { action: p, next: null }, tr === null && (tr = /* @__PURE__ */ new Map()), p = tr.get(c), p === void 0)
        tr.set(c, a);
      else {
        for (c = p; c.next !== null; )
          c = c.next;
        c.next = a;
      }
  }
  function Da() {
    throw Error(O(394));
  }
  function bn() {
  }
  var xn = { readContext: function(a) {
    return a._currentValue;
  }, useContext: function(a) {
    return rr(), a._currentValue;
  }, useMemo: Ro, useReducer: Do, useRef: function(a) {
    Vt = rr(), je = Yn();
    var c = je.memoizedState;
    return c === null ? (a = { current: a }, je.memoizedState = a) : c;
  }, useState: function(a) {
    return Do(Mo, a);
  }, useInsertionEffect: bn, useLayoutEffect: function() {
  }, useCallback: function(a, c) {
    return Ro(function() {
      return a;
    }, c);
  }, useImperativeHandle: bn, useEffect: bn, useDebugValue: bn, useDeferredValue: function(a) {
    return rr(), a;
  }, useTransition: function() {
    return rr(), [!1, Da];
  }, useId: function() {
    var a = Kr.treeContext, c = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - Jr(a) - 1)).toString(32) + c;
    var p = wn;
    if (p === null)
      throw Error(O(404));
    return c = hr++, a = ":" + p.idPrefix + "R" + a, 0 < c && (a += "H" + c.toString(32)), a + ":";
  }, useMutableSource: function(a, c) {
    return rr(), c(a._source);
  }, useSyncExternalStore: function(a, c, p) {
    if (p === void 0)
      throw Error(O(407));
    return p();
  } }, wn = null, qr = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Ra(a) {
    return console.error(a), null;
  }
  function en() {
  }
  function $n(a, c, p, y, M, C, L, H, pe) {
    var we = [], be = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: y === void 0 ? 12800 : y, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: be, pingedTasks: we, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: M === void 0 ? Ra : M, onAllReady: C === void 0 ? en : C, onShellReady: L === void 0 ? en : L, onShellError: H === void 0 ? en : H, onFatalError: pe === void 0 ? en : pe }, p = Dr(c, 0, null, p, !1, !1), p.parentFlushed = !0, a = Zn(c, a, null, p, be, ne, null, pr), we.push(a), c;
  }
  function Zn(a, c, p, y, M, C, L, H) {
    a.allPendingTasks++, p === null ? a.pendingRootTasks++ : p.pendingTasks++;
    var pe = { node: c, ping: function() {
      var we = a.pingedTasks;
      we.push(pe), we.length === 1 && _o(a);
    }, blockedBoundary: p, blockedSegment: y, abortSet: M, legacyContext: C, context: L, treeContext: H };
    return M.add(pe), pe;
  }
  function Dr(a, c, p, y, M, C) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: y, boundary: p, lastPushedText: M, textEmbedded: C };
  }
  function Rr(a, c) {
    if (a = a.onError(c), a != null && typeof a != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function Tn(a, c) {
    var p = a.onShellError;
    p(c), p = a.onFatalError, p(c), a.destination !== null ? (a.status = 2, ve(a.destination, c)) : (a.status = 1, a.fatalError = c);
  }
  function Ao(a, c, p, y, M) {
    for (Vt = {}, Kr = c, hr = 0, a = p(y, M); dt; )
      dt = !1, hr = 0, Sn += 1, je = null, a = p(y, M);
    return Vn(), a;
  }
  function Gn(a, c, p, y) {
    var M = p.render(), C = y.childContextTypes;
    if (C != null) {
      var L = c.legacyContext;
      if (typeof p.getChildContext != "function")
        y = L;
      else {
        p = p.getChildContext();
        for (var H in p)
          if (!(H in C))
            throw Error(O(108, B(y) || "Unknown", H));
        y = Nt({}, L, p);
      }
      c.legacyContext = y, pt(a, c, M), c.legacyContext = L;
    } else
      pt(a, c, M);
  }
  function Po(a, c) {
    if (a && a.defaultProps) {
      c = Nt({}, c), a = a.defaultProps;
      for (var p in a)
        c[p] === void 0 && (c[p] = a[p]);
      return c;
    }
    return c;
  }
  function En(a, c, p, y, M) {
    if (typeof p == "function")
      if (p.prototype && p.prototype.isReactComponent) {
        M = de(p, c.legacyContext);
        var C = p.contextType;
        C = new p(y, typeof C == "object" && C !== null ? C._currentValue : M), qt(C, p, y, M), Gn(a, c, C, p);
      } else {
        C = de(p, c.legacyContext), M = Ao(a, c, p, y, C);
        var L = hr !== 0;
        if (typeof M == "object" && M !== null && typeof M.render == "function" && M.$$typeof === void 0)
          qt(M, p, y, C), Gn(a, c, M, p);
        else if (L) {
          y = c.treeContext, c.treeContext = Yt(y, 1, 0);
          try {
            pt(a, c, M);
          } finally {
            c.treeContext = y;
          }
        } else
          pt(a, c, M);
      }
    else if (typeof p == "string") {
      switch (M = c.blockedSegment, C = jr(M.chunks, p, y, a.responseState, M.formatContext), M.lastPushedText = !1, L = M.formatContext, M.formatContext = W(L, p, y), kn(a, c, C), M.formatContext = L, p) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          M.chunks.push(_r, E(p), Lr);
      }
      M.lastPushedText = !1;
    } else {
      switch (p) {
        case I:
        case m:
        case Gr:
        case Qr:
        case Jt:
          pt(a, c, y.children);
          return;
        case Ir:
          pt(a, c, y.children);
          return;
        case h:
          throw Error(O(343));
        case Cr:
          e: {
            p = c.blockedBoundary, M = c.blockedSegment, C = y.fallback, y = y.children, L = /* @__PURE__ */ new Set();
            var H = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: L, errorDigest: null }, pe = Dr(a, M.chunks.length, H, M.formatContext, !1, !1);
            M.children.push(pe), M.lastPushedText = !1;
            var we = Dr(a, 0, null, M.formatContext, !1, !1);
            we.parentFlushed = !0, c.blockedBoundary = H, c.blockedSegment = we;
            try {
              if (kn(
                a,
                c,
                y
              ), we.lastPushedText && we.textEmbedded && we.chunks.push(q), we.status = 1, Cn(H, we), H.pendingTasks === 0)
                break e;
            } catch (be) {
              we.status = 4, H.forceClientRender = !0, H.errorDigest = Rr(a, be);
            } finally {
              c.blockedBoundary = p, c.blockedSegment = M;
            }
            c = Zn(a, C, p, pe, L, c.legacyContext, c.context, c.treeContext), a.pingedTasks.push(c);
          }
          return;
      }
      if (typeof p == "object" && p !== null)
        switch (p.$$typeof) {
          case Xr:
            if (y = Ao(a, c, p.render, y, M), hr !== 0) {
              p = c.treeContext, c.treeContext = Yt(p, 1, 0);
              try {
                pt(a, c, y);
              } finally {
                c.treeContext = p;
              }
            } else
              pt(a, c, y);
            return;
          case o:
            p = p.type, y = Po(p, y), En(a, c, p, y, M);
            return;
          case kr:
            if (M = y.children, p = p._context, y = y.value, C = p._currentValue, p._currentValue = y, L = ie, ie = y = { parent: L, depth: L === null ? 0 : L.depth + 1, context: p, parentValue: C, value: y }, c.context = y, pt(a, c, M), a = ie, a === null)
              throw Error(O(403));
            y = a.parentValue, a.context._currentValue = y === T ? a.context._defaultValue : y, a = ie = a.parent, c.context = a;
            return;
          case Kt:
            y = y.children, y = y(p._currentValue), pt(a, c, y);
            return;
          case u:
            M = p._init, p = M(p._payload), y = Po(p, y), En(a, c, p, y, void 0);
            return;
        }
      throw Error(O(
        130,
        p == null ? p : typeof p,
        ""
      ));
    }
  }
  function pt(a, c, p) {
    if (c.node = p, typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ut:
          En(a, c, p.type, p.props, p.ref);
          return;
        case Wt:
          throw Error(O(257));
        case u:
          var y = p._init;
          p = y(p._payload), pt(a, c, p);
          return;
      }
      if (Pe(p)) {
        No(a, c, p);
        return;
      }
      if (p === null || typeof p != "object" ? y = null : (y = N && p[N] || p["@@iterator"], y = typeof y == "function" ? y : null), y && (y = y.call(p))) {
        if (p = y.next(), !p.done) {
          var M = [];
          do
            M.push(p.value), p = y.next();
          while (!p.done);
          No(a, c, M);
        }
        return;
      }
      throw a = Object.prototype.toString.call(p), Error(O(31, a === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : a));
    }
    typeof p == "string" ? (y = c.blockedSegment, y.lastPushedText = ge(c.blockedSegment.chunks, p, a.responseState, y.lastPushedText)) : typeof p == "number" && (y = c.blockedSegment, y.lastPushedText = ge(c.blockedSegment.chunks, "" + p, a.responseState, y.lastPushedText));
  }
  function No(a, c, p) {
    for (var y = p.length, M = 0; M < y; M++) {
      var C = c.treeContext;
      c.treeContext = Yt(C, y, M);
      try {
        kn(a, c, p[M]);
      } finally {
        c.treeContext = C;
      }
    }
  }
  function kn(a, c, p) {
    var y = c.blockedSegment.formatContext, M = c.legacyContext, C = c.context;
    try {
      return pt(a, c, p);
    } catch (pe) {
      if (Vn(), typeof pe == "object" && pe !== null && typeof pe.then == "function") {
        p = pe;
        var L = c.blockedSegment, H = Dr(a, L.chunks.length, null, L.formatContext, L.lastPushedText, !0);
        L.children.push(H), L.lastPushedText = !1, a = Zn(a, c.node, c.blockedBoundary, H, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, p.then(a, a), c.blockedSegment.formatContext = y, c.legacyContext = M, c.context = C, bt(C);
      } else
        throw c.blockedSegment.formatContext = y, c.legacyContext = M, c.context = C, bt(C), pe;
    }
  }
  function Aa(a) {
    var c = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, jo(this, c, a);
  }
  function Oo(a, c, p) {
    var y = a.blockedBoundary;
    a.blockedSegment.status = 3, y === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.close())) : (y.pendingTasks--, y.forceClientRender || (y.forceClientRender = !0, a = p === void 0 ? Error(O(432)) : p, y.errorDigest = c.onError(a), y.parentFlushed && c.clientRenderedBoundaries.push(y)), y.fallbackAbortableTasks.forEach(function(M) {
      return Oo(M, c, p);
    }), y.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (y = c.onAllReady, y()));
  }
  function Cn(a, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var p = c.children[0];
      p.id = c.id, p.parentFlushed = !0, p.status === 1 && Cn(a, p);
    } else
      a.completedSegments.push(c);
  }
  function jo(a, c, p) {
    if (c === null) {
      if (p.parentFlushed) {
        if (a.completedRootSegment !== null)
          throw Error(O(389));
        a.completedRootSegment = p;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = en, c = a.onShellReady, c());
    } else
      c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (p.parentFlushed && p.status === 1 && Cn(c, p), c.parentFlushed && a.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(Aa, a), c.fallbackAbortableTasks.clear()) : p.parentFlushed && p.status === 1 && (Cn(c, p), c.completedSegments.length === 1 && c.parentFlushed && a.partialBoundaries.push(c)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function _o(a) {
    if (a.status !== 2) {
      var c = ie, p = qr.current;
      qr.current = xn;
      var y = wn;
      wn = a.responseState;
      try {
        var M = a.pingedTasks, C;
        for (C = 0; C < M.length; C++) {
          var L = M[C], H = a, pe = L.blockedSegment;
          if (pe.status === 0) {
            bt(L.context);
            try {
              pt(H, L, L.node), pe.lastPushedText && pe.textEmbedded && pe.chunks.push(q), L.abortSet.delete(L), pe.status = 1, jo(H, L.blockedBoundary, pe);
            } catch (Tt) {
              if (Vn(), typeof Tt == "object" && Tt !== null && typeof Tt.then == "function") {
                var we = L.ping;
                Tt.then(we, we);
              } else {
                L.abortSet.delete(L), pe.status = 4;
                var be = L.blockedBoundary, ze = Tt, ht = Rr(H, ze);
                if (be === null ? Tn(H, ze) : (be.pendingTasks--, be.forceClientRender || (be.forceClientRender = !0, be.errorDigest = ht, be.parentFlushed && H.clientRenderedBoundaries.push(be))), H.allPendingTasks--, H.allPendingTasks === 0) {
                  var wt = H.onAllReady;
                  wt();
                }
              }
            } finally {
            }
          }
        }
        M.splice(0, C), a.destination !== null && Qn(a, a.destination);
      } catch (Tt) {
        Rr(a, Tt), Tn(a, Tt);
      } finally {
        wn = y, qr.current = p, p === xn && bt(c);
      }
    }
  }
  function In(a, c, p) {
    switch (p.parentFlushed = !0, p.status) {
      case 0:
        var y = p.id = a.nextSegmentId++;
        return p.lastPushedText = !1, p.textEmbedded = !1, a = a.responseState, g(c, Ge), g(c, a.placeholderPrefix), a = E(y.toString(16)), g(c, a), Q(c, Fr);
      case 1:
        p.status = 2;
        var M = !0;
        y = p.chunks;
        var C = 0;
        p = p.children;
        for (var L = 0; L < p.length; L++) {
          for (M = p[L]; C < M.index; C++)
            g(c, y[C]);
          M = Mn(a, c, M);
        }
        for (; C < y.length - 1; C++)
          g(c, y[C]);
        return C < y.length && (M = Q(c, y[C])), M;
      default:
        throw Error(O(390));
    }
  }
  function Mn(a, c, p) {
    var y = p.boundary;
    if (y === null)
      return In(a, c, p);
    if (y.parentFlushed = !0, y.forceClientRender)
      y = y.errorDigest, Q(c, Sr), g(c, Ur), y && (g(c, Br), g(c, E(fe(y))), g(c, $t)), Q(c, gn), In(a, c, p);
    else if (0 < y.pendingTasks) {
      y.rootSegmentID = a.nextSegmentId++, 0 < y.completedSegments.length && a.partialBoundaries.push(y);
      var M = a.responseState, C = M.nextSuspenseID++;
      M = D(M.boundaryPrefix + C.toString(16)), y = y.id = M, st(c, a.responseState, y), In(a, c, p);
    } else if (y.byteSize > a.progressiveChunkSize)
      y.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(y), st(c, a.responseState, y.id), In(a, c, p);
    else {
      if (Q(c, hn), p = y.completedSegments, p.length !== 1)
        throw Error(O(391));
      Mn(a, c, p[0]);
    }
    return Q(c, Fn);
  }
  function Lo(a, c, p) {
    return cr(c, a.responseState, p.formatContext, p.id), Mn(a, c, p), Qt(c, p.formatContext);
  }
  function Fo(a, c, p) {
    for (var y = p.completedSegments, M = 0; M < y.length; M++)
      zo(a, c, p, y[M]);
    if (y.length = 0, a = a.responseState, y = p.id, p = p.rootSegmentID, g(c, a.startInlineScript), a.sentCompleteBoundaryFunction ? g(c, Rt) : (a.sentCompleteBoundaryFunction = !0, g(c, Bt)), y === null)
      throw Error(O(395));
    return p = E(p.toString(16)), g(c, y), g(c, fr), g(c, a.segmentPrefix), g(c, p), Q(c, dr);
  }
  function zo(a, c, p, y) {
    if (y.status === 2)
      return !0;
    var M = y.id;
    if (M === -1) {
      if ((y.id = p.rootSegmentID) === -1)
        throw Error(O(392));
      return Lo(a, c, y);
    }
    return Lo(a, c, y), a = a.responseState, g(c, a.startInlineScript), a.sentCompleteSegmentFunction ? g(c, Zr) : (a.sentCompleteSegmentFunction = !0, g(c, Bn)), g(c, a.segmentPrefix), M = E(M.toString(16)), g(c, M), g(c, Tr), g(c, a.placeholderPrefix), g(c, M), Q(c, Xt);
  }
  function Qn(a, c) {
    V = new Uint8Array(512), ee = 0;
    try {
      var p = a.completedRootSegment;
      if (p !== null && a.pendingRootTasks === 0) {
        Mn(a, c, p), a.completedRootSegment = null;
        var y = a.responseState.bootstrapChunks;
        for (p = 0; p < y.length - 1; p++)
          g(c, y[p]);
        p < y.length && Q(c, y[p]);
      }
      var M = a.clientRenderedBoundaries, C;
      for (C = 0; C < M.length; C++) {
        var L = M[C];
        y = c;
        var H = a.responseState, pe = L.id, we = L.errorDigest, be = L.errorMessage, ze = L.errorComponentStack;
        if (g(y, H.startInlineScript), H.sentClientRenderFunction ? g(y, He) : (H.sentClientRenderFunction = !0, g(
          y,
          gt
        )), pe === null)
          throw Error(O(395));
        g(y, pe), g(y, At), (we || be || ze) && (g(y, tt), g(y, E(Pt(we || "")))), (be || ze) && (g(y, tt), g(y, E(Pt(be || "")))), ze && (g(y, tt), g(y, E(Pt(ze)))), Q(y, St);
      }
      M.splice(0, C);
      var ht = a.completedBoundaries;
      for (C = 0; C < ht.length; C++)
        Fo(a, c, ht[C]);
      ht.splice(0, C), Te(c), V = new Uint8Array(512), ee = 0;
      var wt = a.partialBoundaries;
      for (C = 0; C < wt.length; C++) {
        var Tt = wt[C];
        e: {
          M = a, L = c;
          var Dn = Tt.completedSegments;
          for (H = 0; H < Dn.length; H++)
            if (!zo(
              M,
              L,
              Tt,
              Dn[H]
            )) {
              H++, Dn.splice(0, H);
              var Bo = !1;
              break e;
            }
          Dn.splice(0, H), Bo = !0;
        }
        if (!Bo) {
          a.destination = null, C++, wt.splice(0, C);
          return;
        }
      }
      wt.splice(0, C);
      var Xn = a.completedBoundaries;
      for (C = 0; C < Xn.length; C++)
        Fo(a, c, Xn[C]);
      Xn.splice(0, C);
    } finally {
      Te(c), a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && c.close();
    }
  }
  function Uo(a, c) {
    try {
      var p = a.abortableTasks;
      p.forEach(function(y) {
        return Oo(y, a, c);
      }), p.clear(), a.destination !== null && Qn(a, a.destination);
    } catch (y) {
      Rr(a, y), Tn(a, y);
    }
  }
  return dl.renderToReadableStream = function(a, c) {
    return new Promise(function(p, y) {
      var M, C, L = new Promise(function(be, ze) {
        C = be, M = ze;
      }), H = $n(a, et(c ? c.identifierPrefix : void 0, c ? c.nonce : void 0, c ? c.bootstrapScriptContent : void 0, c ? c.bootstrapScripts : void 0, c ? c.bootstrapModules : void 0), U(c ? c.namespaceURI : void 0), c ? c.progressiveChunkSize : void 0, c ? c.onError : void 0, C, function() {
        var be = new ReadableStream({ type: "bytes", pull: function(ze) {
          if (H.status === 1)
            H.status = 2, ve(ze, H.fatalError);
          else if (H.status !== 2 && H.destination === null) {
            H.destination = ze;
            try {
              Qn(H, ze);
            } catch (ht) {
              Rr(H, ht), Tn(H, ht);
            }
          }
        }, cancel: function() {
          Uo(H);
        } }, { highWaterMark: 0 });
        be.allReady = L, p(be);
      }, function(be) {
        L.catch(function() {
        }), y(be);
      }, M);
      if (c && c.signal) {
        var pe = c.signal, we = function() {
          Uo(H, pe.reason), pe.removeEventListener("abort", we);
        };
        pe.addEventListener("abort", we);
      }
      _o(H);
    });
  }, dl.version = "18.2.0", dl;
}
var Eo = {};
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rs;
function au() {
  return Rs || (Rs = 1, process.env.NODE_ENV !== "production" && function() {
    var P = G, O = "18.2.0", V = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ee(e) {
      {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          i[s - 1] = arguments[s];
        Q("warn", e, i);
      }
    }
    function g(e) {
      {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          i[s - 1] = arguments[s];
        Q("error", e, i);
      }
    }
    function Q(e, r, i) {
      {
        var s = V.ReactDebugCurrentFrame, d = s.getStackAddendum();
        d !== "" && (r += "%s", i = i.concat([d]));
        var S = i.map(function(x) {
          return String(x);
        });
        S.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, S);
      }
    }
    function Te(e) {
      e();
    }
    function K(e) {
    }
    function E(e, r) {
      D(e, r);
    }
    function D(e, r) {
      return e.push(r);
    }
    function ve(e) {
    }
    function j(e) {
      e.push(null);
    }
    function ce(e) {
      return e;
    }
    function Re(e) {
      return e;
    }
    function xe(e, r) {
      e.destroy(r);
    }
    function ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, i = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function $(e) {
      try {
        return F(e), !1;
      } catch {
        return !0;
      }
    }
    function F(e) {
      return "" + e;
    }
    function le(e, r) {
      if ($(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", r, ke(e)), F(e);
    }
    function _(e, r) {
      if ($(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", r, ke(e)), F(e);
    }
    function Y(e) {
      if ($(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", ke(e)), F(e);
    }
    var k = Object.prototype.hasOwnProperty, X = 0, fe = 1, De = 2, ae = 3, Pe = 4, Ne = 5, Ue = 6, nt = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Xe = nt + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", vt = new RegExp("^[" + nt + "][" + Xe + "]*$"), Je = {}, qe = {};
    function et(e) {
      return k.call(qe, e) ? !0 : k.call(Je, e) ? !1 : vt.test(e) ? (qe[e] = !0, !0) : (Je[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function Ve(e, r, i, s) {
      if (i !== null && i.type === X)
        return !1;
      switch (typeof r) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (s)
            return !1;
          if (i !== null)
            return !i.acceptsBooleans;
          var d = e.toLowerCase().slice(0, 5);
          return d !== "data-" && d !== "aria-";
        }
        default:
          return !1;
      }
    }
    function U(e) {
      return q.hasOwnProperty(e) ? q[e] : null;
    }
    function W(e, r, i, s, d, S, x) {
      this.acceptsBooleans = r === De || r === ae || r === Pe, this.attributeName = s, this.attributeNamespace = d, this.mustUseProperty = i, this.propertyName = e, this.type = r, this.sanitizeURL = S, this.removeEmptyString = x;
    }
    var q = {}, ge = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ge.forEach(function(e) {
      q[e] = new W(
        e,
        X,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var r = e[0], i = e[1];
      q[r] = new W(
        r,
        fe,
        !1,
        // mustUseProperty
        i,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      q[e] = new W(
        e,
        De,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      q[e] = new W(
        e,
        De,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      q[e] = new W(
        e,
        ae,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      q[e] = new W(
        e,
        ae,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      q[e] = new W(
        e,
        Pe,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      q[e] = new W(
        e,
        Ue,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      q[e] = new W(
        e,
        Ne,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var se = /[\-\:]([a-z])/g, re = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var r = e.replace(se, re);
      q[r] = new W(
        r,
        fe,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var r = e.replace(se, re);
      q[r] = new W(
        r,
        fe,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var r = e.replace(se, re);
      q[r] = new W(
        r,
        fe,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      q[e] = new W(
        e,
        fe,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var te = "xlinkHref";
    q[te] = new W(
      "xlinkHref",
      fe,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      q[e] = new W(
        e,
        fe,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var he = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Se(e, r) {
      return e + r.charAt(0).toUpperCase() + r.substring(1);
    }
    var me = ["Webkit", "ms", "Moz", "O"];
    Object.keys(he).forEach(function(e) {
      me.forEach(function(r) {
        he[Se(r, e)] = he[e];
      });
    });
    var ue = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ee(e, r) {
      ue[r.type] || r.onChange || r.onInput || r.readOnly || r.disabled || r.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), r.onChange || r.readOnly || r.disabled || r.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Z(e, r) {
      if (e.indexOf("-") === -1)
        return typeof r.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Ce = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Be = {}, ct = new RegExp("^(aria)-[" + Xe + "]*$"), zt = new RegExp("^(aria)[A-Z][" + Xe + "]*$");
    function dn(e, r) {
      {
        if (k.call(Be, r) && Be[r])
          return !0;
        if (zt.test(r)) {
          var i = "aria-" + r.slice(4).toLowerCase(), s = Ce.hasOwnProperty(i) ? i : null;
          if (s == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", r), Be[r] = !0, !0;
          if (r !== s)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", r, s), Be[r] = !0, !0;
        }
        if (ct.test(r)) {
          var d = r.toLowerCase(), S = Ce.hasOwnProperty(d) ? d : null;
          if (S == null)
            return Be[r] = !0, !1;
          if (r !== S)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", r, S), Be[r] = !0, !0;
        }
      }
      return !0;
    }
    function mt(e, r) {
      {
        var i = [];
        for (var s in r) {
          var d = dn(e, s);
          d || i.push(s);
        }
        var S = i.map(function(x) {
          return "`" + x + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", S, e) : i.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", S, e);
      }
    }
    function lr(e, r) {
      Z(e, r) || mt(e, r);
    }
    var sr = !1;
    function pn(e, r) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        r != null && r.value === null && !sr && (sr = !0, e === "select" && r.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var yt = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, rt = function() {
    };
    {
      var Ke = {}, jr = /^on./, _r = /^on[^A-Z]/, Lr = new RegExp("^(aria)-[" + Xe + "]*$"), Ge = new RegExp("^(aria)[A-Z][" + Xe + "]*$");
      rt = function(e, r, i, s) {
        if (k.call(Ke, r) && Ke[r])
          return !0;
        var d = r.toLowerCase();
        if (d === "onfocusin" || d === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Ke[r] = !0, !0;
        if (s != null) {
          var S = s.registrationNameDependencies, x = s.possibleRegistrationNames;
          if (S.hasOwnProperty(r))
            return !0;
          var R = x.hasOwnProperty(d) ? x[d] : null;
          if (R != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", r, R), Ke[r] = !0, !0;
          if (jr.test(r))
            return g("Unknown event handler property `%s`. It will be ignored.", r), Ke[r] = !0, !0;
        } else if (jr.test(r))
          return _r.test(r) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", r), Ke[r] = !0, !0;
        if (Lr.test(r) || Ge.test(r))
          return !0;
        if (d === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Ke[r] = !0, !0;
        if (d === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Ke[r] = !0, !0;
        if (d === "is" && i !== null && i !== void 0 && typeof i != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof i), Ke[r] = !0, !0;
        if (typeof i == "number" && isNaN(i))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", r), Ke[r] = !0, !0;
        var z = U(r), J = z !== null && z.type === X;
        if (yt.hasOwnProperty(d)) {
          var oe = yt[d];
          if (oe !== r)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", r, oe), Ke[r] = !0, !0;
        } else if (!J && r !== d)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", r, d), Ke[r] = !0, !0;
        return typeof i == "boolean" && Ve(r, i, z, !1) ? (i ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', i, r, r, i, r) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', i, r, r, i, r, r, r), Ke[r] = !0, !0) : J ? !0 : Ve(r, i, z, !1) ? (Ke[r] = !0, !1) : ((i === "false" || i === "true") && z !== null && z.type === ae && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", i, r, i === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', r, i), Ke[r] = !0), !0);
      };
    }
    var Fr = function(e, r, i) {
      {
        var s = [];
        for (var d in r) {
          var S = rt(e, d, r[d], i);
          S || s.push(d);
        }
        var x = s.map(function(R) {
          return "`" + R + "`";
        }).join(", ");
        s.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", x, e) : s.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", x, e);
      }
    };
    function hn(e, r, i) {
      Z(e, r) || Fr(e, r, i);
    }
    var vn = function() {
    };
    {
      var zr = /^(?:webkit|moz|o)[A-Z]/, Sr = /^-ms-/, Fn = /-(.)/g, Ur = /;\s*$/, $t = {}, Br = {}, gn = !1, st = !1, It = function(e) {
        return e.replace(Fn, function(r, i) {
          return i.toUpperCase();
        });
      }, Zt = function(e) {
        $t.hasOwnProperty(e) && $t[e] || ($t[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          It(e.replace(Sr, "ms-"))
        ));
      }, Ae = function(e) {
        $t.hasOwnProperty(e) && $t[e] || ($t[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Gt = function(e, r) {
        Br.hasOwnProperty(r) && Br[r] || (Br[r] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, r.replace(Ur, "")));
      }, br = function(e, r) {
        gn || (gn = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, ur = function(e, r) {
        st || (st = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      vn = function(e, r) {
        e.indexOf("-") > -1 ? Zt(e) : zr.test(e) ? Ae(e) : Ur.test(r) && Gt(e, r), typeof r == "number" && (isNaN(r) ? br(e, r) : isFinite(r) || ur(e, r));
      };
    }
    var Mt = vn, xr = /["'&<>]/;
    function Ut(e) {
      Y(e);
      var r = "" + e, i = xr.exec(r);
      if (!i)
        return r;
      var s, d = "", S, x = 0;
      for (S = i.index; S < r.length; S++) {
        switch (r.charCodeAt(S)) {
          case 34:
            s = "&quot;";
            break;
          case 38:
            s = "&amp;";
            break;
          case 39:
            s = "&#x27;";
            break;
          case 60:
            s = "&lt;";
            break;
          case 62:
            s = "&gt;";
            break;
          default:
            continue;
        }
        x !== S && (d += r.substring(x, S)), x = S + 1, d += s;
      }
      return x !== S ? d + r.substring(x, S) : d;
    }
    function $e(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : Ut(e);
    }
    var Wr = /([A-Z])/g, Hr = /^ms-/;
    function mn(e) {
      return e.replace(Wr, "-$1").toLowerCase().replace(Hr, "-ms-");
    }
    var Qe = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Yr = !1;
    function zn(e) {
      !Yr && Qe.test(e) && (Yr = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var Un = Array.isArray;
    function Dt(e) {
      return Un(e);
    }
    var Vr = "<script>", wr = "<\/script>", $r = '<script src="', cr = '<script type="module" src="', Qt = '" async=""><\/script>';
    function Bn(e) {
      return Y(e), ("" + e).replace(Zr, Tr);
    }
    var Zr = /(<\/|<)(s)(cript)/gi, Tr = function(e, r, i, s) {
      return "" + r + (i === "s" ? "\\u0073" : "\\u0053") + s;
    };
    function Xt(e, r, i, s, d) {
      var S = e === void 0 ? "" : e, x = r === void 0 ? Vr : '<script nonce="' + $e(r) + '">', R = [];
      if (i !== void 0 && R.push(x, Bn(i), wr), s !== void 0)
        for (var z = 0; z < s.length; z++)
          R.push($r, $e(s[z]), Qt);
      if (d !== void 0)
        for (var J = 0; J < d.length; J++)
          R.push(cr, $e(d[J]), Qt);
      return {
        bootstrapChunks: R,
        startInlineScript: x,
        placeholderPrefix: S + "P:",
        segmentPrefix: S + "S:",
        boundaryPrefix: S + "B:",
        idPrefix: S,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var Bt = 0, Rt = 1, fr = 2, dr = 3, gt = 4, He = 5, At = 6, St = 7;
    function tt(e, r) {
      return {
        insertionMode: e,
        selectedValue: r
      };
    }
    function Er(e, r, i) {
      switch (r) {
        case "select":
          return tt(Rt, i.value != null ? i.value : i.defaultValue);
        case "svg":
          return tt(fr, null);
        case "math":
          return tt(dr, null);
        case "foreignObject":
          return tt(Rt, null);
        case "table":
          return tt(gt, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return tt(He, null);
        case "colgroup":
          return tt(St, null);
        case "tr":
          return tt(At, null);
      }
      return e.insertionMode >= gt || e.insertionMode === Bt ? tt(Rt, null) : e;
    }
    var Pt = null;
    function Nt(e) {
      var r = e.nextSuspenseID++;
      return e.boundaryPrefix + r.toString(16);
    }
    function ut(e, r, i) {
      var s = e.idPrefix, d = ":" + s + "R" + r;
      return i > 0 && (d += "H" + i.toString(32)), d + ":";
    }
    function Wt(e) {
      return $e(e);
    }
    var Jt = "<!-- -->";
    function Gr(e, r, i, s) {
      return r === "" ? s : (s && e.push(Jt), e.push(Wt(r)), !0);
    }
    function Qr(e, r, i, s) {
      i && s && e.push(Jt);
    }
    var kr = /* @__PURE__ */ new Map();
    function Kt(e) {
      var r = kr.get(e);
      if (r !== void 0)
        return r;
      var i = $e(mn(e));
      return kr.set(e, i), i;
    }
    var Xr = ' style="', Cr = ":", Ir = ";";
    function o(e, r, i) {
      if (typeof i != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var s = !0;
      for (var d in i)
        if (k.call(i, d)) {
          var S = i[d];
          if (!(S == null || typeof S == "boolean" || S === "")) {
            var x = void 0, R = void 0, z = d.indexOf("--") === 0;
            z ? (x = $e(d), _(S, d), R = $e(("" + S).trim())) : (Mt(d, S), x = Kt(d), typeof S == "number" ? S !== 0 && !k.call(he, d) ? R = S + "px" : R = "" + S : (_(S, d), R = $e(("" + S).trim()))), s ? (s = !1, e.push(Xr, x, Cr, R)) : e.push(Ir, x, Cr, R);
          }
        }
      s || e.push(m);
    }
    var u = " ", h = '="', m = '"', I = '=""';
    function T(e, r, i, s) {
      switch (i) {
        case "style": {
          o(e, r, s);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(i.length > 2 && (i[0] === "o" || i[0] === "O") && (i[1] === "n" || i[1] === "N"))
      ) {
        var d = U(i);
        if (d !== null) {
          switch (typeof s) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!d.acceptsBooleans)
                return;
          }
          var S = d.attributeName, x = S;
          switch (d.type) {
            case ae:
              s && e.push(u, x, I);
              return;
            case Pe:
              s === !0 ? e.push(u, x, I) : s === !1 || e.push(u, x, h, $e(s), m);
              return;
            case Ne:
              isNaN(s) || e.push(u, x, h, $e(s), m);
              break;
            case Ue:
              !isNaN(s) && s >= 1 && e.push(u, x, h, $e(s), m);
              break;
            default:
              d.sanitizeURL && (le(s, S), s = "" + s, zn(s)), e.push(u, x, h, $e(s), m);
          }
        } else if (et(i)) {
          switch (typeof s) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var R = i.toLowerCase().slice(0, 5);
              if (R !== "data-" && R !== "aria-")
                return;
            }
          }
          e.push(u, i, h, $e(s), m);
        }
      }
    }
    var N = ">", B = "/>";
    function ne(e, r, i) {
      if (r != null) {
        if (i != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof r != "object" || !("__html" in r))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var s = r.__html;
        s != null && (Y(s), e.push("" + s));
      }
    }
    var de = !1, ie = !1, Ie = !1, ft = !1, ot = !1, at = !1, Ht = !1;
    function bt(e, r) {
      {
        var i = e[r];
        if (i != null) {
          var s = Dt(i);
          e.multiple && !s ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.", r) : !e.multiple && s && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", r);
        }
      }
    }
    function Mr(e, r, i) {
      Ee("select", r), bt(r, "value"), bt(r, "defaultValue"), r.value !== void 0 && r.defaultValue !== void 0 && !Ie && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ie = !0), e.push(dt("select"));
      var s = null, d = null;
      for (var S in r)
        if (k.call(r, S)) {
          var x = r[S];
          if (x == null)
            continue;
          switch (S) {
            case "children":
              s = x;
              break;
            case "dangerouslySetInnerHTML":
              d = x;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              T(e, i, S, x);
              break;
          }
        }
      return e.push(N), ne(e, d, s), s;
    }
    function qt(e) {
      var r = "";
      return P.Children.forEach(e, function(i) {
        i != null && (r += i, !ot && typeof i != "string" && typeof i != "number" && (ot = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), r;
    }
    var pr = ' selected=""';
    function Yt(e, r, i, s) {
      var d = s.selectedValue;
      e.push(dt("option"));
      var S = null, x = null, R = null, z = null;
      for (var J in r)
        if (k.call(r, J)) {
          var oe = r[J];
          if (oe == null)
            continue;
          switch (J) {
            case "children":
              S = oe;
              break;
            case "selected":
              R = oe, Ht || (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ht = !0);
              break;
            case "dangerouslySetInnerHTML":
              z = oe;
              break;
            case "value":
              x = oe;
            default:
              T(e, i, J, oe);
              break;
          }
        }
      if (d != null) {
        var ye;
        if (x !== null ? (le(x, "value"), ye = "" + x) : (z !== null && (at || (at = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), ye = qt(S)), Dt(d))
          for (var We = 0; We < d.length; We++) {
            le(d[We], "value");
            var lt = "" + d[We];
            if (lt === ye) {
              e.push(pr);
              break;
            }
          }
        else
          le(d, "select.value"), "" + d === ye && e.push(pr);
      } else
        R && e.push(pr);
      return e.push(N), ne(e, z, S), S;
    }
    function Jr(e, r, i) {
      Ee("input", r), r.checked !== void 0 && r.defaultChecked !== void 0 && !ie && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", r.type), ie = !0), r.value !== void 0 && r.defaultValue !== void 0 && !de && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", r.type), de = !0), e.push(dt("input"));
      var s = null, d = null, S = null, x = null;
      for (var R in r)
        if (k.call(r, R)) {
          var z = r[R];
          if (z == null)
            continue;
          switch (R) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              x = z;
              break;
            case "defaultValue":
              d = z;
              break;
            case "checked":
              S = z;
              break;
            case "value":
              s = z;
              break;
            default:
              T(e, i, R, z);
              break;
          }
        }
      return S !== null ? T(e, i, "checked", S) : x !== null && T(e, i, "checked", x), s !== null ? T(e, i, "value", s) : d !== null && T(e, i, "value", d), e.push(B), null;
    }
    function ka(e, r, i) {
      Ee("textarea", r), r.value !== void 0 && r.defaultValue !== void 0 && !ft && (g("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ft = !0), e.push(dt("textarea"));
      var s = null, d = null, S = null;
      for (var x in r)
        if (k.call(r, x)) {
          var R = r[x];
          if (R == null)
            continue;
          switch (x) {
            case "children":
              S = R;
              break;
            case "value":
              s = R;
              break;
            case "defaultValue":
              d = R;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              T(e, i, x, R);
              break;
          }
        }
      if (s === null && d !== null && (s = d), e.push(N), S != null) {
        if (g("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), s != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Dt(S)) {
          if (S.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          Y(S[0]), s = "" + S[0];
        }
        Y(S), s = "" + S;
      }
      return typeof s == "string" && s[0] === `
` && e.push(Kr), s !== null && (le(s, "value"), e.push(Wt("" + s))), null;
    }
    function Ca(e, r, i, s) {
      e.push(dt(i));
      for (var d in r)
        if (k.call(r, d)) {
          var S = r[d];
          if (S == null)
            continue;
          switch (d) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(i + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              T(e, s, d, S);
              break;
          }
        }
      return e.push(B), null;
    }
    function Wn(e, r, i) {
      e.push(dt("menuitem"));
      for (var s in r)
        if (k.call(r, s)) {
          var d = r[s];
          if (d == null)
            continue;
          switch (s) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              T(e, i, s, d);
              break;
          }
        }
      return e.push(N), null;
    }
    function Ia(e, r, i) {
      e.push(dt("title"));
      var s = null;
      for (var d in r)
        if (k.call(r, d)) {
          var S = r[d];
          if (S == null)
            continue;
          switch (d) {
            case "children":
              s = S;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              T(e, i, d, S);
              break;
          }
        }
      e.push(N);
      {
        var x = Array.isArray(s) && s.length < 2 ? s[0] || null : s;
        Array.isArray(s) && s.length > 1 ? g("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : x != null && x.$$typeof != null ? g("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : x != null && typeof x != "string" && typeof x != "number" && g("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return s;
    }
    function Hn(e, r, i, s) {
      e.push(dt(i));
      var d = null, S = null;
      for (var x in r)
        if (k.call(r, x)) {
          var R = r[x];
          if (R == null)
            continue;
          switch (x) {
            case "children":
              d = R;
              break;
            case "dangerouslySetInnerHTML":
              S = R;
              break;
            default:
              T(e, s, x, R);
              break;
          }
        }
      return e.push(N), ne(e, S, d), typeof d == "string" ? (e.push(Wt(d)), null) : d;
    }
    function Vt(e, r, i, s) {
      e.push(dt(i));
      var d = null, S = null;
      for (var x in r)
        if (k.call(r, x)) {
          var R = r[x];
          if (R == null)
            continue;
          switch (x) {
            case "children":
              d = R;
              break;
            case "dangerouslySetInnerHTML":
              S = R;
              break;
            case "style":
              o(e, s, R);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              et(x) && typeof R != "function" && typeof R != "symbol" && e.push(u, x, h, $e(R), m);
              break;
          }
        }
      return e.push(N), ne(e, S, d), d;
    }
    var Kr = `
`;
    function yn(e, r, i, s) {
      e.push(dt(i));
      var d = null, S = null;
      for (var x in r)
        if (k.call(r, x)) {
          var R = r[x];
          if (R == null)
            continue;
          switch (x) {
            case "children":
              d = R;
              break;
            case "dangerouslySetInnerHTML":
              S = R;
              break;
            default:
              T(e, s, x, R);
              break;
          }
        }
      if (e.push(N), S != null) {
        if (d != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof S != "object" || !("__html" in S))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var z = S.__html;
        z != null && (typeof z == "string" && z.length > 0 && z[0] === `
` ? e.push(Kr, z) : (Y(z), e.push("" + z)));
      }
      return typeof d == "string" && d[0] === `
` && e.push(Kr), d;
    }
    var je = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, er = /* @__PURE__ */ new Map();
    function dt(e) {
      var r = er.get(e);
      if (r === void 0) {
        if (!je.test(e))
          throw new Error("Invalid tag: " + e);
        r = "<" + e, er.set(e, r);
      }
      return r;
    }
    var hr = "<!DOCTYPE html>";
    function tr(e, r, i, s, d) {
      switch (lr(r, i), pn(r, i), hn(r, i, null), !i.suppressContentEditableWarning && i.contentEditable && i.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), d.insertionMode !== fr && d.insertionMode !== dr && r.indexOf("-") === -1 && typeof i.is != "string" && r.toLowerCase() !== r && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", r), r) {
        case "select":
          return Mr(e, i, s);
        case "option":
          return Yt(e, i, s, d);
        case "textarea":
          return ka(e, i, s);
        case "input":
          return Jr(e, i, s);
        case "menuitem":
          return Wn(e, i, s);
        case "title":
          return Ia(e, i, s);
        case "listing":
        case "pre":
          return yn(e, i, r, s);
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return Ca(e, i, r, s);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Hn(e, i, r, s);
        case "html":
          return d.insertionMode === Bt && e.push(hr), Hn(e, i, r, s);
        default:
          return r.indexOf("-") === -1 && typeof i.is != "string" ? Hn(e, i, r, s) : Vt(e, i, r, s);
      }
    }
    var Sn = "</", rr = ">";
    function xt(e, r, i) {
      switch (r) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          e.push(Sn, r, rr);
      }
    }
    function Yn(e, r) {
      for (var i = r.bootstrapChunks, s = 0; s < i.length - 1; s++)
        E(e, i[s]);
      return s < i.length ? D(e, i[s]) : !0;
    }
    var Vn = '<template id="', Mo = '"></template>';
    function Do(e, r, i) {
      E(e, Vn), E(e, r.placeholderPrefix);
      var s = i.toString(16);
      return E(e, s), D(e, Mo);
    }
    var Ro = "<!--$-->", Ma = '<!--$?--><template id="', Da = '"></template>', bn = "<!--$!-->", xn = "<!--/$-->", wn = "<template", qr = '"', Ra = ' data-dgst="', en = ' data-msg="', $n = ' data-stck="', Zn = "></template>";
    function Dr(e, r) {
      return D(e, Ro);
    }
    function Rr(e, r, i) {
      if (E(e, Ma), i === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return E(e, i), D(e, Da);
    }
    function Tn(e, r, i, s, d) {
      var S;
      return S = D(e, bn), E(e, wn), i && (E(e, Ra), E(e, $e(i)), E(e, qr)), s && (E(e, en), E(e, $e(s)), E(e, qr)), d && (E(e, $n), E(e, $e(d)), E(e, qr)), S = D(e, Zn), S;
    }
    function Ao(e, r) {
      return D(e, xn);
    }
    function Gn(e, r) {
      return D(e, xn);
    }
    function Po(e, r) {
      return D(e, xn);
    }
    var En = '<div hidden id="', pt = '">', No = "</div>", kn = '<svg aria-hidden="true" style="display:none" id="', Aa = '">', Oo = "</svg>", Cn = '<math aria-hidden="true" style="display:none" id="', jo = '">', _o = "</math>", In = '<table hidden id="', Mn = '">', Lo = "</table>", Fo = '<table hidden><tbody id="', zo = '">', Qn = "</tbody></table>", Uo = '<table hidden><tr id="', a = '">', c = "</tr></table>", p = '<table hidden><colgroup id="', y = '">', M = "</colgroup></table>";
    function C(e, r, i, s) {
      switch (i.insertionMode) {
        case Bt:
        case Rt:
          return E(e, En), E(e, r.segmentPrefix), E(e, s.toString(16)), D(e, pt);
        case fr:
          return E(e, kn), E(e, r.segmentPrefix), E(e, s.toString(16)), D(e, Aa);
        case dr:
          return E(e, Cn), E(e, r.segmentPrefix), E(e, s.toString(16)), D(e, jo);
        case gt:
          return E(e, In), E(e, r.segmentPrefix), E(e, s.toString(16)), D(e, Mn);
        case He:
          return E(e, Fo), E(e, r.segmentPrefix), E(e, s.toString(16)), D(e, zo);
        case At:
          return E(e, Uo), E(e, r.segmentPrefix), E(e, s.toString(16)), D(e, a);
        case St:
          return E(e, p), E(e, r.segmentPrefix), E(e, s.toString(16)), D(e, y);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function L(e, r) {
      switch (r.insertionMode) {
        case Bt:
        case Rt:
          return D(e, No);
        case fr:
          return D(e, Oo);
        case dr:
          return D(e, _o);
        case gt:
          return D(e, Lo);
        case He:
          return D(e, Qn);
        case At:
          return D(e, c);
        case St:
          return D(e, M);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var H = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", pe = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', we = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', be = H + ';$RS("', ze = '$RS("', ht = '","', wt = '")<\/script>';
    function Tt(e, r, i) {
      E(e, r.startInlineScript), r.sentCompleteSegmentFunction ? E(e, ze) : (r.sentCompleteSegmentFunction = !0, E(e, be)), E(e, r.segmentPrefix);
      var s = i.toString(16);
      return E(e, s), E(e, ht), E(e, r.placeholderPrefix), E(e, s), D(e, wt);
    }
    var Dn = pe + ';$RC("', Bo = '$RC("', Xn = '","', hl = '")<\/script>';
    function vl(e, r, i, s) {
      if (E(e, r.startInlineScript), r.sentCompleteBoundaryFunction ? E(e, Bo) : (r.sentCompleteBoundaryFunction = !0, E(e, Dn)), i === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var d = s.toString(16);
      return E(e, i), E(e, Xn), E(e, r.segmentPrefix), E(e, d), D(e, hl);
    }
    var gl = we + ';$RX("', ml = '$RX("', yl = '"', Sl = ")<\/script>", Pa = ",";
    function bl(e, r, i, s, d, S) {
      if (E(e, r.startInlineScript), r.sentClientRenderFunction ? E(e, ml) : (r.sentClientRenderFunction = !0, E(e, gl)), i === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return E(e, i), E(e, yl), (s || d || S) && (E(e, Pa), E(e, Na(s || ""))), (d || S) && (E(e, Pa), E(e, Na(d || ""))), S && (E(e, Pa), E(e, Na(S))), D(e, Sl);
    }
    var xl = /[<\u2028\u2029]/g;
    function Na(e) {
      var r = JSON.stringify(e);
      return r.replace(xl, function(i) {
        switch (i) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    function wl(e, r) {
      var i = Xt(r, void 0);
      return {
        // Keep this in sync with ReactDOMServerFormatConfig
        bootstrapChunks: i.bootstrapChunks,
        startInlineScript: i.startInlineScript,
        placeholderPrefix: i.placeholderPrefix,
        segmentPrefix: i.segmentPrefix,
        boundaryPrefix: i.boundaryPrefix,
        idPrefix: i.idPrefix,
        nextSuspenseID: i.nextSuspenseID,
        sentCompleteSegmentFunction: i.sentCompleteSegmentFunction,
        sentCompleteBoundaryFunction: i.sentCompleteBoundaryFunction,
        sentClientRenderFunction: i.sentClientRenderFunction,
        // This is an extra field for the legacy renderer
        generateStaticMarkup: e
      };
    }
    function Oa() {
      return {
        insertionMode: Rt,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function Ti(e, r, i, s) {
      return i.generateStaticMarkup ? (e.push($e(r)), !1) : Gr(e, r, i, s);
    }
    function Ei(e, r, i, s) {
      if (!r.generateStaticMarkup)
        return Qr(e, r, i, s);
    }
    function ja(e, r) {
      return r.generateStaticMarkup ? !0 : Dr(e);
    }
    function Ot(e, r, i, s, d) {
      return r.generateStaticMarkup ? !0 : Tn(e, r, i, s, d);
    }
    function Tl(e, r) {
      return r.generateStaticMarkup ? !0 : Ao(e);
    }
    function ki(e, r) {
      return r.generateStaticMarkup ? !0 : Po(e);
    }
    var Et = Object.assign, Ci = Symbol.for("react.element"), _a = Symbol.for("react.portal"), Wo = Symbol.for("react.fragment"), Ho = Symbol.for("react.strict_mode"), Yo = Symbol.for("react.profiler"), Jn = Symbol.for("react.provider"), Kn = Symbol.for("react.context"), qn = Symbol.for("react.forward_ref"), Rn = Symbol.for("react.suspense"), La = Symbol.for("react.suspense_list"), Fa = Symbol.for("react.memo"), Vo = Symbol.for("react.lazy"), El = Symbol.for("react.scope"), Ii = Symbol.for("react.debug_trace_mode"), kl = Symbol.for("react.legacy_hidden"), Cl = Symbol.for("react.default_value"), Mi = Symbol.iterator, Di = "@@iterator";
    function Ze(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Mi && e[Mi] || e[Di];
      return typeof r == "function" ? r : null;
    }
    function eo(e, r, i) {
      var s = e.displayName;
      if (s)
        return s;
      var d = r.displayName || r.name || "";
      return d !== "" ? i + "(" + d + ")" : i;
    }
    function za(e) {
      return e.displayName || "Context";
    }
    function Ye(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Wo:
          return "Fragment";
        case _a:
          return "Portal";
        case Yo:
          return "Profiler";
        case Ho:
          return "StrictMode";
        case Rn:
          return "Suspense";
        case La:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Kn:
            var r = e;
            return za(r) + ".Consumer";
          case Jn:
            var i = e;
            return za(i._context) + ".Provider";
          case qn:
            return eo(e, e.render, "ForwardRef");
          case Fa:
            var s = e.displayName || null;
            return s !== null ? s : Ye(e.type) || "Memo";
          case Vo: {
            var d = e, S = d._payload, x = d._init;
            try {
              return Ye(x(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var An = 0, Ua, Ba, Wa, Ha, Ya, Ri, Ai;
    function $o() {
    }
    $o.__reactDisabledLog = !0;
    function Va() {
      {
        if (An === 0) {
          Ua = console.log, Ba = console.info, Wa = console.warn, Ha = console.error, Ya = console.group, Ri = console.groupCollapsed, Ai = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: $o,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        An++;
      }
    }
    function to() {
      {
        if (An--, An === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Et({}, e, {
              value: Ua
            }),
            info: Et({}, e, {
              value: Ba
            }),
            warn: Et({}, e, {
              value: Wa
            }),
            error: Et({}, e, {
              value: Ha
            }),
            group: Et({}, e, {
              value: Ya
            }),
            groupCollapsed: Et({}, e, {
              value: Ri
            }),
            groupEnd: Et({}, e, {
              value: Ai
            })
          });
        }
        An < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ro = V.ReactCurrentDispatcher, Pn;
    function no(e, r, i) {
      {
        if (Pn === void 0)
          try {
            throw Error();
          } catch (d) {
            var s = d.stack.trim().match(/\n( *(at )?)/);
            Pn = s && s[1] || "";
          }
        return `
` + Pn + e;
      }
    }
    var oo = !1, Zo;
    {
      var Pi = typeof WeakMap == "function" ? WeakMap : Map;
      Zo = new Pi();
    }
    function $a(e, r) {
      if (!e || oo)
        return "";
      {
        var i = Zo.get(e);
        if (i !== void 0)
          return i;
      }
      var s;
      oo = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = ro.current, ro.current = null, Va();
      try {
        if (r) {
          var x = function() {
            throw Error();
          };
          if (Object.defineProperty(x.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(x, []);
            } catch (Ft) {
              s = Ft;
            }
            Reflect.construct(e, [], x);
          } else {
            try {
              x.call();
            } catch (Ft) {
              s = Ft;
            }
            e.call(x.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ft) {
            s = Ft;
          }
          e();
        }
      } catch (Ft) {
        if (Ft && s && typeof Ft.stack == "string") {
          for (var R = Ft.stack.split(`
`), z = s.stack.split(`
`), J = R.length - 1, oe = z.length - 1; J >= 1 && oe >= 0 && R[J] !== z[oe]; )
            oe--;
          for (; J >= 1 && oe >= 0; J--, oe--)
            if (R[J] !== z[oe]) {
              if (J !== 1 || oe !== 1)
                do
                  if (J--, oe--, oe < 0 || R[J] !== z[oe]) {
                    var ye = `
` + R[J].replace(" at new ", " at ");
                    return e.displayName && ye.includes("<anonymous>") && (ye = ye.replace("<anonymous>", e.displayName)), typeof e == "function" && Zo.set(e, ye), ye;
                  }
                while (J >= 1 && oe >= 0);
              break;
            }
        }
      } finally {
        oo = !1, ro.current = S, to(), Error.prepareStackTrace = d;
      }
      var We = e ? e.displayName || e.name : "", lt = We ? no(We) : "";
      return typeof e == "function" && Zo.set(e, lt), lt;
    }
    function Za(e, r, i) {
      return $a(e, !0);
    }
    function Ga(e, r, i) {
      return $a(e, !1);
    }
    function Ni(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Nn(e, r, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return $a(e, Ni(e));
      if (typeof e == "string")
        return no(e);
      switch (e) {
        case Rn:
          return no("Suspense");
        case La:
          return no("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case qn:
            return Ga(e.render);
          case Fa:
            return Nn(e.type, r, i);
          case Vo: {
            var s = e, d = s._payload, S = s._init;
            try {
              return Nn(S(d), r, i);
            } catch {
            }
          }
        }
      return "";
    }
    var Qa = {}, Go = V.ReactDebugCurrentFrame;
    function tn(e) {
      if (e) {
        var r = e._owner, i = Nn(e.type, e._source, r ? r.type : null);
        Go.setExtraStackFrame(i);
      } else
        Go.setExtraStackFrame(null);
    }
    function Xa(e, r, i, s, d) {
      {
        var S = Function.call.bind(k);
        for (var x in e)
          if (S(e, x)) {
            var R = void 0;
            try {
              if (typeof e[x] != "function") {
                var z = Error((s || "React class") + ": " + i + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              R = e[x](r, x, s, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (J) {
              R = J;
            }
            R && !(R instanceof Error) && (tn(d), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", i, x, typeof R), tn(null)), R instanceof Error && !(R.message in Qa) && (Qa[R.message] = !0, tn(d), g("Failed %s type: %s", i, R.message), tn(null));
          }
      }
    }
    var Ja;
    Ja = {};
    var Ar = {};
    Object.freeze(Ar);
    function Oi(e, r) {
      {
        var i = e.contextTypes;
        if (!i)
          return Ar;
        var s = {};
        for (var d in i)
          s[d] = r[d];
        {
          var S = Ye(e) || "Unknown";
          Xa(i, s, "context", S);
        }
        return s;
      }
    }
    function rn(e, r, i, s) {
      {
        if (typeof e.getChildContext != "function") {
          {
            var d = Ye(r) || "Unknown";
            Ja[d] || (Ja[d] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", d, d));
          }
          return i;
        }
        var S = e.getChildContext();
        for (var x in S)
          if (!(x in s))
            throw new Error((Ye(r) || "Unknown") + '.getChildContext(): key "' + x + '" is not defined in childContextTypes.');
        {
          var R = Ye(r) || "Unknown";
          Xa(s, S, "child context", R);
        }
        return Et({}, i, S);
      }
    }
    var nn;
    nn = {};
    var Ka = null, nr = null;
    function Qo(e) {
      e.context._currentValue2 = e.parentValue;
    }
    function Xo(e) {
      e.context._currentValue2 = e.value;
    }
    function ao(e, r) {
      if (e !== r) {
        Qo(e);
        var i = e.parent, s = r.parent;
        if (i === null) {
          if (s !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (s === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          ao(i, s);
        }
        Xo(r);
      }
    }
    function qa(e) {
      Qo(e);
      var r = e.parent;
      r !== null && qa(r);
    }
    function io(e) {
      var r = e.parent;
      r !== null && io(r), Xo(e);
    }
    function ji(e, r) {
      Qo(e);
      var i = e.parent;
      if (i === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      i.depth === r.depth ? ao(i, r) : ji(i, r);
    }
    function _i(e, r) {
      var i = r.parent;
      if (i === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      e.depth === i.depth ? ao(e, i) : _i(e, i), Xo(r);
    }
    function Jo(e) {
      var r = nr, i = e;
      r !== i && (r === null ? io(i) : i === null ? qa(r) : r.depth === i.depth ? ao(r, i) : r.depth > i.depth ? ji(r, i) : _i(r, i), nr = i);
    }
    function lo(e, r) {
      var i;
      i = e._currentValue2, e._currentValue2 = r, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== nn && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = nn;
      var s = nr, d = {
        parent: s,
        depth: s === null ? 0 : s.depth + 1,
        context: e,
        parentValue: i,
        value: r
      };
      return nr = d, d;
    }
    function ei(e) {
      var r = nr;
      if (r === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      r.context !== e && g("The parent context is not the expected context. This is probably a bug in React.");
      {
        var i = r.parentValue;
        i === Cl ? r.context._currentValue2 = r.context._defaultValue : r.context._currentValue2 = i, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== nn && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = nn;
      }
      return nr = r.parent;
    }
    function Il() {
      return nr;
    }
    function On(e) {
      var r = e._currentValue2;
      return r;
    }
    function Ko(e) {
      return e._reactInternals;
    }
    function ti(e, r) {
      e._reactInternals = r;
    }
    var qo = {}, ea = {}, so, ta, jn, uo, ra, _n, na, oa, aa;
    {
      so = /* @__PURE__ */ new Set(), ta = /* @__PURE__ */ new Set(), jn = /* @__PURE__ */ new Set(), na = /* @__PURE__ */ new Set(), uo = /* @__PURE__ */ new Set(), oa = /* @__PURE__ */ new Set(), aa = /* @__PURE__ */ new Set();
      var Li = /* @__PURE__ */ new Set();
      _n = function(e, r) {
        if (!(e === null || typeof e == "function")) {
          var i = r + "_" + e;
          Li.has(i) || (Li.add(i), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", r, e));
        }
      }, ra = function(e, r) {
        if (r === void 0) {
          var i = Ye(e) || "Component";
          uo.has(i) || (uo.add(i), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", i));
        }
      };
    }
    function Fi(e, r) {
      {
        var i = e.constructor, s = i && Ye(i) || "ReactClass", d = s + "." + r;
        if (qo[d])
          return;
        g(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, r, r, s), qo[d] = !0;
      }
    }
    var zi = {
      isMounted: function(e) {
        return !1;
      },
      enqueueSetState: function(e, r, i) {
        var s = Ko(e);
        s.queue === null ? Fi(e, "setState") : (s.queue.push(r), i != null && _n(i, "setState"));
      },
      enqueueReplaceState: function(e, r, i) {
        var s = Ko(e);
        s.replace = !0, s.queue = [r], i != null && _n(i, "setState");
      },
      enqueueForceUpdate: function(e, r) {
        var i = Ko(e);
        i.queue === null ? Fi(e, "forceUpdate") : r != null && _n(r, "setState");
      }
    };
    function Ml(e, r, i, s, d) {
      var S = i(d, s);
      ra(r, S);
      var x = S == null ? s : Et({}, s, S);
      return x;
    }
    function Dl(e, r, i) {
      var s = Ar, d = e.contextType;
      if ("contextType" in e) {
        var S = (
          // Allow null for conditional declaration
          d === null || d !== void 0 && d.$$typeof === Kn && d._context === void 0
        );
        if (!S && !aa.has(e)) {
          aa.add(e);
          var x = "";
          d === void 0 ? x = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof d != "object" ? x = " However, it is set to a " + typeof d + "." : d.$$typeof === Jn ? x = " Did you accidentally pass the Context.Provider instead?" : d._context !== void 0 ? x = " Did you accidentally pass the Context.Consumer instead?" : x = " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ye(e) || "Component", x);
        }
      }
      typeof d == "object" && d !== null ? s = On(d) : s = i;
      var R = new e(r, s);
      {
        if (typeof e.getDerivedStateFromProps == "function" && (R.state === null || R.state === void 0)) {
          var z = Ye(e) || "Component";
          so.has(z) || (so.add(z), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", z, R.state === null ? "null" : "undefined", z));
        }
        if (typeof e.getDerivedStateFromProps == "function" || typeof R.getSnapshotBeforeUpdate == "function") {
          var J = null, oe = null, ye = null;
          if (typeof R.componentWillMount == "function" && R.componentWillMount.__suppressDeprecationWarning !== !0 ? J = "componentWillMount" : typeof R.UNSAFE_componentWillMount == "function" && (J = "UNSAFE_componentWillMount"), typeof R.componentWillReceiveProps == "function" && R.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? oe = "componentWillReceiveProps" : typeof R.UNSAFE_componentWillReceiveProps == "function" && (oe = "UNSAFE_componentWillReceiveProps"), typeof R.componentWillUpdate == "function" && R.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ye = "componentWillUpdate" : typeof R.UNSAFE_componentWillUpdate == "function" && (ye = "UNSAFE_componentWillUpdate"), J !== null || oe !== null || ye !== null) {
            var We = Ye(e) || "Component", lt = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            jn.has(We) || (jn.add(We), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, We, lt, J !== null ? `
  ` + J : "", oe !== null ? `
  ` + oe : "", ye !== null ? `
  ` + ye : ""));
          }
        }
      }
      return R;
    }
    function Ui(e, r, i) {
      {
        var s = Ye(r) || "Component", d = e.render;
        d || (r.prototype && typeof r.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", s) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", s)), e.getInitialState && !e.getInitialState.isReactClassApproved && !e.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", s), e.getDefaultProps && !e.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", s), e.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", s), e.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", s), e.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", s), r.contextType && r.contextTypes && !oa.has(r) && (oa.add(r), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", s)), typeof e.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", s), r.prototype && r.prototype.isPureReactComponent && typeof e.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ye(r) || "A pure component"), typeof e.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", s), typeof e.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", s), typeof e.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", s), typeof e.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", s);
        var S = e.props !== i;
        e.props !== void 0 && S && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", s, s), e.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", s, s), typeof e.getSnapshotBeforeUpdate == "function" && typeof e.componentDidUpdate != "function" && !ta.has(r) && (ta.add(r), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ye(r))), typeof e.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", s), typeof e.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", s), typeof r.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", s);
        var x = e.state;
        x && (typeof x != "object" || Dt(x)) && g("%s.state: must be set to an object or null", s), typeof e.getChildContext == "function" && typeof r.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", s);
      }
    }
    function Rl(e, r) {
      var i = r.state;
      if (typeof r.componentWillMount == "function") {
        if (r.componentWillMount.__suppressDeprecationWarning !== !0) {
          var s = Ye(e) || "Unknown";
          ea[s] || (ee(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            s
          ), ea[s] = !0);
        }
        r.componentWillMount();
      }
      typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), i !== r.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ye(e) || "Component"), zi.enqueueReplaceState(r, r.state, null));
    }
    function Al(e, r, i, s) {
      if (e.queue !== null && e.queue.length > 0) {
        var d = e.queue, S = e.replace;
        if (e.queue = null, e.replace = !1, S && d.length === 1)
          r.state = d[0];
        else {
          for (var x = S ? d[0] : r.state, R = !0, z = S ? 1 : 0; z < d.length; z++) {
            var J = d[z], oe = typeof J == "function" ? J.call(r, x, i, s) : J;
            oe != null && (R ? (R = !1, x = Et({}, x, oe)) : Et(x, oe));
          }
          r.state = x;
        }
      } else
        e.queue = null;
    }
    function ia(e, r, i, s) {
      Ui(e, r, i);
      var d = e.state !== void 0 ? e.state : null;
      e.updater = zi, e.props = i, e.state = d;
      var S = {
        queue: [],
        replace: !1
      };
      ti(e, S);
      var x = r.contextType;
      if (typeof x == "object" && x !== null ? e.context = On(x) : e.context = s, e.state === i) {
        var R = Ye(r) || "Component";
        na.has(R) || (na.add(R), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", R));
      }
      var z = r.getDerivedStateFromProps;
      typeof z == "function" && (e.state = Ml(e, r, z, d, i)), typeof r.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function") && (Rl(r, e), Al(S, e, i, s));
    }
    var la = {
      id: 1,
      overflow: ""
    };
    function Pl(e) {
      var r = e.overflow, i = e.id, s = i & ~Nl(i);
      return s.toString(32) + r;
    }
    function ri(e, r, i) {
      var s = e.id, d = e.overflow, S = sa(s) - 1, x = s & ~(1 << S), R = i + 1, z = sa(r) + S;
      if (z > 30) {
        var J = S - S % 5, oe = (1 << J) - 1, ye = (x & oe).toString(32), We = x >> J, lt = S - J, Ft = sa(r) + lt, sl = R << lt, ul = sl | We, cl = ye + d;
        return {
          id: 1 << Ft | ul,
          overflow: cl
        };
      } else {
        var Ea = R << S, zs = Ea | x, Us = d;
        return {
          id: 1 << z | zs,
          overflow: Us
        };
      }
    }
    function sa(e) {
      return 32 - Ol(e);
    }
    function Nl(e) {
      return 1 << sa(e) - 1;
    }
    var Ol = Math.clz32 ? Math.clz32 : vr, jl = Math.log, _l = Math.LN2;
    function vr(e) {
      var r = e >>> 0;
      return r === 0 ? 32 : 31 - (jl(r) / _l | 0) | 0;
    }
    function ni(e, r) {
      return e === r && (e !== 0 || 1 / e === 1 / r) || e !== e && r !== r;
    }
    var ua = typeof Object.is == "function" ? Object.is : ni, Me = null, on = null, an = null, Oe = null, jt = !1, ln = !1, ca = 0, it = null, gr = 0, sn = 25, or = !1, un;
    function mr() {
      if (Me === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return or && g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Me;
    }
    function Ll(e, r) {
      if (r === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", un), !1;
      e.length !== r.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, un, "[" + e.join(", ") + "]", "[" + r.join(", ") + "]");
      for (var i = 0; i < r.length && i < e.length; i++)
        if (!ua(e[i], r[i]))
          return !1;
      return !0;
    }
    function Bi() {
      if (gr > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function fa() {
      return Oe === null ? an === null ? (jt = !1, an = Oe = Bi()) : (jt = !0, Oe = an) : Oe.next === null ? (jt = !1, Oe = Oe.next = Bi()) : (jt = !0, Oe = Oe.next), Oe;
    }
    function oi(e, r) {
      Me = r, on = e, or = !1, ca = 0;
    }
    function Fl(e, r, i, s) {
      for (; ln; )
        ln = !1, ca = 0, gr += 1, Oe = null, i = e(r, s);
      return co(), i;
    }
    function Wi() {
      var e = ca !== 0;
      return e;
    }
    function co() {
      or = !1, Me = null, on = null, ln = !1, an = null, gr = 0, it = null, Oe = null;
    }
    function zl(e) {
      return or && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), On(e);
    }
    function Hi(e) {
      return un = "useContext", mr(), On(e);
    }
    function da(e, r) {
      return typeof r == "function" ? r(e) : r;
    }
    function Ul(e) {
      return un = "useState", Yi(
        da,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function Yi(e, r, i) {
      if (e !== da && (un = "useReducer"), Me = mr(), Oe = fa(), jt) {
        var s = Oe.queue, d = s.dispatch;
        if (it !== null) {
          var S = it.get(s);
          if (S !== void 0) {
            it.delete(s);
            var x = Oe.memoizedState, R = S;
            do {
              var z = R.action;
              or = !0, x = e(x, z), or = !1, R = R.next;
            } while (R !== null);
            return Oe.memoizedState = x, [x, d];
          }
        }
        return [Oe.memoizedState, d];
      } else {
        or = !0;
        var J;
        e === da ? J = typeof r == "function" ? r() : r : J = i !== void 0 ? i(r) : r, or = !1, Oe.memoizedState = J;
        var oe = Oe.queue = {
          last: null,
          dispatch: null
        }, ye = oe.dispatch = Hl.bind(null, Me, oe);
        return [Oe.memoizedState, ye];
      }
    }
    function Vi(e, r) {
      Me = mr(), Oe = fa();
      var i = r === void 0 ? null : r;
      if (Oe !== null) {
        var s = Oe.memoizedState;
        if (s !== null && i !== null) {
          var d = s[1];
          if (Ll(i, d))
            return s[0];
        }
      }
      or = !0;
      var S = e();
      return or = !1, Oe.memoizedState = [S, i], S;
    }
    function Bl(e) {
      Me = mr(), Oe = fa();
      var r = Oe.memoizedState;
      if (r === null) {
        var i = {
          current: e
        };
        return Object.seal(i), Oe.memoizedState = i, i;
      } else
        return r;
    }
    function Wl(e, r) {
      un = "useLayoutEffect", g("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Hl(e, r, i) {
      if (gr >= sn)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === Me) {
        ln = !0;
        var s = {
          action: i,
          next: null
        };
        it === null && (it = /* @__PURE__ */ new Map());
        var d = it.get(r);
        if (d === void 0)
          it.set(r, s);
        else {
          for (var S = d; S.next !== null; )
            S = S.next;
          S.next = s;
        }
      }
    }
    function Yl(e, r) {
      return Vi(function() {
        return e;
      }, r);
    }
    function Vl(e, r, i) {
      return mr(), r(e._source);
    }
    function $l(e, r, i) {
      if (i === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return i();
    }
    function Zl(e) {
      return mr(), e;
    }
    function pa() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function $i() {
      return mr(), [!1, pa];
    }
    function ai() {
      var e = on, r = Pl(e.treeContext), i = po;
      if (i === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var s = ca++;
      return ut(i, r, s);
    }
    function fo() {
    }
    var Zi = {
      readContext: zl,
      useContext: Hi,
      useMemo: Vi,
      useReducer: Yi,
      useRef: Bl,
      useState: Ul,
      useInsertionEffect: fo,
      useLayoutEffect: Wl,
      useCallback: Yl,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: fo,
      // Effects are not run in the server environment.
      useEffect: fo,
      // Debugging effect
      useDebugValue: fo,
      useDeferredValue: Zl,
      useTransition: $i,
      useId: ai,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Vl,
      useSyncExternalStore: $l
    }, po = null;
    function ha(e) {
      po = e;
    }
    function ii(e) {
      try {
        var r = "", i = e;
        do {
          switch (i.tag) {
            case 0:
              r += no(i.type, null, null);
              break;
            case 1:
              r += Ga(i.type, null, null);
              break;
            case 2:
              r += Za(i.type, null, null);
              break;
          }
          i = i.parent;
        } while (i);
        return r;
      } catch (s) {
        return `
Error generating stack: ` + s.message + `
` + s.stack;
      }
    }
    var Pr = V.ReactCurrentDispatcher, va = V.ReactDebugCurrentFrame, ga = 0, cn = 1, Gi = 2, li = 3, fn = 4, Gl = 0, Qi = 1, ar = 2, Ql = 12800;
    function Xl(e) {
      return console.error(e), null;
    }
    function ho() {
    }
    function si(e, r, i, s, d, S, x, R, z) {
      var J = [], oe = /* @__PURE__ */ new Set(), ye = {
        destination: null,
        responseState: r,
        progressiveChunkSize: s === void 0 ? Ql : s,
        status: Gl,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: oe,
        pingedTasks: J,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: d === void 0 ? Xl : d,
        onAllReady: S === void 0 ? ho : S,
        onShellReady: x === void 0 ? ho : x,
        onShellError: R === void 0 ? ho : R,
        onFatalError: z === void 0 ? ho : z
      }, We = Nr(
        ye,
        0,
        null,
        i,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      We.parentFlushed = !0;
      var lt = vo(ye, e, null, We, oe, Ar, Ka, la);
      return J.push(lt), ye;
    }
    function ma(e, r) {
      var i = e.pingedTasks;
      i.push(r), i.length === 1 && Te(function() {
        return il(e);
      });
    }
    function yr(e, r) {
      return {
        id: Pt,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: r,
        errorDigest: null
      };
    }
    function vo(e, r, i, s, d, S, x, R) {
      e.allPendingTasks++, i === null ? e.pendingRootTasks++ : i.pendingTasks++;
      var z = {
        node: r,
        ping: function() {
          return ma(e, z);
        },
        blockedBoundary: i,
        blockedSegment: s,
        abortSet: d,
        legacyContext: S,
        context: x,
        treeContext: R
      };
      return z.componentStack = null, d.add(z), z;
    }
    function Nr(e, r, i, s, d, S) {
      return {
        status: ga,
        id: -1,
        // lazily assigned later
        index: r,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: s,
        boundary: i,
        lastPushedText: d,
        textEmbedded: S
      };
    }
    var ir = null;
    function ui() {
      return ir === null || ir.componentStack === null ? "" : ii(ir.componentStack);
    }
    function _t(e, r) {
      e.componentStack = {
        tag: 0,
        parent: e.componentStack,
        type: r
      };
    }
    function Ln(e, r) {
      e.componentStack = {
        tag: 1,
        parent: e.componentStack,
        type: r
      };
    }
    function ci(e, r) {
      e.componentStack = {
        tag: 2,
        parent: e.componentStack,
        type: r
      };
    }
    function Lt(e) {
      e.componentStack === null ? g("Unexpectedly popped too many stack frames. This is a bug in React.") : e.componentStack = e.componentStack.parent;
    }
    var Or = null;
    function fi(e, r) {
      {
        var i;
        typeof r == "string" ? i = r : r && typeof r.message == "string" ? i = r.message : i = String(r);
        var s = Or || ui();
        Or = null, e.errorMessage = i, e.errorComponentStack = s;
      }
    }
    function go(e, r) {
      var i = e.onError(r);
      if (i != null && typeof i != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
      return i;
    }
    function ya(e, r) {
      var i = e.onShellError;
      i(r);
      var s = e.onFatalError;
      s(r), e.destination !== null ? (e.status = ar, xe(e.destination, r)) : (e.status = Qi, e.fatalError = r);
    }
    function Xi(e, r, i) {
      _t(r, "Suspense");
      var s = r.blockedBoundary, d = r.blockedSegment, S = i.fallback, x = i.children, R = /* @__PURE__ */ new Set(), z = yr(e, R), J = d.chunks.length, oe = Nr(
        e,
        J,
        z,
        d.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      d.children.push(oe), d.lastPushedText = !1;
      var ye = Nr(
        e,
        0,
        null,
        d.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      ye.parentFlushed = !0, r.blockedBoundary = z, r.blockedSegment = ye;
      try {
        if (Sa(e, r, x), Ei(ye.chunks, e.responseState, ye.lastPushedText, ye.textEmbedded), ye.status = cn, So(z, ye), z.pendingTasks === 0) {
          Lt(r);
          return;
        }
      } catch (lt) {
        ye.status = fn, z.forceClientRender = !0, z.errorDigest = go(e, lt), fi(z, lt);
      } finally {
        r.blockedBoundary = s, r.blockedSegment = d;
      }
      var We = vo(e, S, s, oe, R, r.legacyContext, r.context, r.treeContext);
      We.componentStack = r.componentStack, e.pingedTasks.push(We), Lt(r);
    }
    function Ji(e, r, i, s) {
      _t(r, i);
      var d = r.blockedSegment, S = tr(d.chunks, i, s, e.responseState, d.formatContext);
      d.lastPushedText = !1;
      var x = d.formatContext;
      d.formatContext = Er(x, i, s), Sa(e, r, S), d.formatContext = x, xt(d.chunks, i), d.lastPushedText = !1, Lt(r);
    }
    function Jl(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function di(e, r, i, s, d) {
      var S = {};
      oi(r, S);
      var x = i(s, d);
      return Fl(i, s, x, d);
    }
    function mo(e, r, i, s, d) {
      var S = i.render();
      i.props !== d && (gi || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ye(s) || "a component"), gi = !0);
      {
        var x = s.childContextTypes;
        if (x != null) {
          var R = r.legacyContext, z = rn(i, s, R, x);
          r.legacyContext = z, Ct(e, r, S), r.legacyContext = R;
          return;
        }
      }
      Ct(e, r, S);
    }
    function Ki(e, r, i, s) {
      ci(r, i);
      var d = Oi(i, r.legacyContext), S = Dl(i, s, d);
      ia(S, i, s, d), mo(e, r, S, i, s), Lt(r);
    }
    var pi = {}, yo = {}, hi = {}, vi = {}, gi = !1, qi = !1, el = !1, mi = !1;
    function Kl(e, r, i, s) {
      var d;
      if (d = Oi(i, r.legacyContext), Ln(r, i), i.prototype && typeof i.prototype.render == "function") {
        var S = Ye(i) || "Unknown";
        pi[S] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", S, S), pi[S] = !0);
      }
      var x = di(e, r, i, s, d), R = Wi();
      if (typeof x == "object" && x !== null && typeof x.render == "function" && x.$$typeof === void 0) {
        var z = Ye(i) || "Unknown";
        yo[z] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", z, z, z), yo[z] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof x == "object" && x !== null && typeof x.render == "function" && x.$$typeof === void 0
      ) {
        {
          var J = Ye(i) || "Unknown";
          yo[J] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", J, J, J), yo[J] = !0);
        }
        ia(x, i, s, d), mo(e, r, x, i, s);
      } else if (ql(i), R) {
        var oe = r.treeContext, ye = 1, We = 0;
        r.treeContext = ri(oe, ye, We);
        try {
          Ct(e, r, x);
        } finally {
          r.treeContext = oe;
        }
      } else
        Ct(e, r, x);
      Lt(r);
    }
    function ql(e) {
      {
        if (e && e.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", e.displayName || e.name || "Component"), typeof e.getDerivedStateFromProps == "function") {
          var r = Ye(e) || "Unknown";
          vi[r] || (g("%s: Function components do not support getDerivedStateFromProps.", r), vi[r] = !0);
        }
        if (typeof e.contextType == "object" && e.contextType !== null) {
          var i = Ye(e) || "Unknown";
          hi[i] || (g("%s: Function components do not support contextType.", i), hi[i] = !0);
        }
      }
    }
    function tl(e, r) {
      if (e && e.defaultProps) {
        var i = Et({}, r), s = e.defaultProps;
        for (var d in s)
          i[d] === void 0 && (i[d] = s[d]);
        return i;
      }
      return r;
    }
    function es(e, r, i, s, d) {
      Ln(r, i.render);
      var S = di(e, r, i.render, s, d), x = Wi();
      if (x) {
        var R = r.treeContext, z = 1, J = 0;
        r.treeContext = ri(R, z, J);
        try {
          Ct(e, r, S);
        } finally {
          r.treeContext = R;
        }
      } else
        Ct(e, r, S);
      Lt(r);
    }
    function ts(e, r, i, s, d) {
      var S = i.type, x = tl(S, s);
      Si(e, r, S, x, d);
    }
    function yi(e, r, i, s) {
      i._context === void 0 ? i !== i.Consumer && (mi || (mi = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var d = s.children;
      typeof d != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var S = On(i), x = d(S);
      Ct(e, r, x);
    }
    function rs(e, r, i, s) {
      var d = i._context, S = s.value, x = s.children, R;
      R = r.context, r.context = lo(d, S), Ct(e, r, x), r.context = ei(d), R !== r.context && g("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function kt(e, r, i, s, d) {
      _t(r, "Lazy");
      var S = i._payload, x = i._init, R = x(S), z = tl(R, s);
      Si(e, r, R, z, d), Lt(r);
    }
    function Si(e, r, i, s, d) {
      if (typeof i == "function")
        if (Jl(i)) {
          Ki(e, r, i, s);
          return;
        } else {
          Kl(e, r, i, s);
          return;
        }
      if (typeof i == "string") {
        Ji(e, r, i, s);
        return;
      }
      switch (i) {
        case kl:
        case Ii:
        case Ho:
        case Yo:
        case Wo: {
          Ct(e, r, s.children);
          return;
        }
        case La: {
          _t(r, "SuspenseList"), Ct(e, r, s.children), Lt(r);
          return;
        }
        case El:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case Rn: {
          Xi(e, r, s);
          return;
        }
      }
      if (typeof i == "object" && i !== null)
        switch (i.$$typeof) {
          case qn: {
            es(e, r, i, s, d);
            return;
          }
          case Fa: {
            ts(e, r, i, s, d);
            return;
          }
          case Jn: {
            rs(e, r, i, s);
            return;
          }
          case Kn: {
            yi(e, r, i, s);
            return;
          }
          case Vo: {
            kt(e, r, i, s);
            return;
          }
        }
      var S = "";
      throw (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (i == null ? i : typeof i) + "." + S));
    }
    function rl(e, r) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      e[Symbol.toStringTag] === "Generator" && (qi || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), qi = !0), e.entries === r && (el || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), el = !0);
    }
    function Ct(e, r, i) {
      try {
        return bi(e, r, i);
      } catch (s) {
        throw typeof s == "object" && s !== null && typeof s.then == "function" || (Or = Or !== null ? Or : ui()), s;
      }
    }
    function bi(e, r, i) {
      if (r.node = i, typeof i == "object" && i !== null) {
        switch (i.$$typeof) {
          case Ci: {
            var s = i, d = s.type, S = s.props, x = s.ref;
            Si(e, r, d, S, x);
            return;
          }
          case _a:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Vo: {
            var R = i, z = R._payload, J = R._init, oe;
            try {
              oe = J(z);
            } catch (Ea) {
              throw typeof Ea == "object" && Ea !== null && typeof Ea.then == "function" && _t(r, "Lazy"), Ea;
            }
            Ct(e, r, oe);
            return;
          }
        }
        if (Dt(i)) {
          nl(e, r, i);
          return;
        }
        var ye = Ze(i);
        if (ye) {
          rl(i, ye);
          var We = ye.call(i);
          if (We) {
            var lt = We.next();
            if (!lt.done) {
              var Ft = [];
              do
                Ft.push(lt.value), lt = We.next();
              while (!lt.done);
              nl(e, r, Ft);
              return;
            }
            return;
          }
        }
        var sl = Object.prototype.toString.call(i);
        throw new Error("Objects are not valid as a React child (found: " + (sl === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : sl) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof i == "string") {
        var ul = r.blockedSegment;
        ul.lastPushedText = Ti(r.blockedSegment.chunks, i, e.responseState, ul.lastPushedText);
        return;
      }
      if (typeof i == "number") {
        var cl = r.blockedSegment;
        cl.lastPushedText = Ti(r.blockedSegment.chunks, "" + i, e.responseState, cl.lastPushedText);
        return;
      }
      typeof i == "function" && g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function nl(e, r, i) {
      for (var s = i.length, d = 0; d < s; d++) {
        var S = r.treeContext;
        r.treeContext = ri(S, s, d);
        try {
          Sa(e, r, i[d]);
        } finally {
          r.treeContext = S;
        }
      }
    }
    function ns(e, r, i) {
      var s = r.blockedSegment, d = s.chunks.length, S = Nr(
        e,
        d,
        null,
        s.formatContext,
        // Adopt the parent segment's leading text embed
        s.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      s.children.push(S), s.lastPushedText = !1;
      var x = vo(e, r.node, r.blockedBoundary, S, r.abortSet, r.legacyContext, r.context, r.treeContext);
      r.componentStack !== null && (x.componentStack = r.componentStack.parent);
      var R = x.ping;
      i.then(R, R);
    }
    function Sa(e, r, i) {
      var s = r.blockedSegment.formatContext, d = r.legacyContext, S = r.context, x = null;
      x = r.componentStack;
      try {
        return Ct(e, r, i);
      } catch (R) {
        if (co(), typeof R == "object" && R !== null && typeof R.then == "function") {
          ns(e, r, R), r.blockedSegment.formatContext = s, r.legacyContext = d, r.context = S, Jo(S), r.componentStack = x;
          return;
        } else
          throw r.blockedSegment.formatContext = s, r.legacyContext = d, r.context = S, Jo(S), r.componentStack = x, R;
      }
    }
    function ba(e, r, i, s) {
      var d = go(e, s);
      if (r === null ? ya(e, s) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, r.errorDigest = d, fi(r, s), r.parentFlushed && e.clientRenderedBoundaries.push(r))), e.allPendingTasks--, e.allPendingTasks === 0) {
        var S = e.onAllReady;
        S();
      }
    }
    function ol(e) {
      var r = this, i = e.blockedBoundary, s = e.blockedSegment;
      s.status = li, bo(r, i, s);
    }
    function al(e, r, i) {
      var s = e.blockedBoundary, d = e.blockedSegment;
      if (d.status = li, s === null)
        r.allPendingTasks--, r.status !== ar && (r.status = ar, r.destination !== null && j(r.destination));
      else {
        if (s.pendingTasks--, !s.forceClientRender) {
          s.forceClientRender = !0;
          var S = i === void 0 ? new Error("The render was aborted by the server without a reason.") : i;
          s.errorDigest = r.onError(S);
          {
            var x = "The server did not finish this Suspense boundary: ";
            S && typeof S.message == "string" ? S = x + S.message : S = x + String(S);
            var R = ir;
            ir = e;
            try {
              fi(s, S);
            } finally {
              ir = R;
            }
          }
          s.parentFlushed && r.clientRenderedBoundaries.push(s);
        }
        if (s.fallbackAbortableTasks.forEach(function(J) {
          return al(J, r, i);
        }), s.fallbackAbortableTasks.clear(), r.allPendingTasks--, r.allPendingTasks === 0) {
          var z = r.onAllReady;
          z();
        }
      }
    }
    function So(e, r) {
      if (r.chunks.length === 0 && r.children.length === 1 && r.children[0].boundary === null) {
        var i = r.children[0];
        i.id = r.id, i.parentFlushed = !0, i.status === cn && So(e, i);
      } else {
        var s = e.completedSegments;
        s.push(r);
      }
    }
    function bo(e, r, i) {
      if (r === null) {
        if (i.parentFlushed) {
          if (e.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          e.completedRootSegment = i;
        }
        if (e.pendingRootTasks--, e.pendingRootTasks === 0) {
          e.onShellError = ho;
          var s = e.onShellReady;
          s();
        }
      } else if (r.pendingTasks--, !r.forceClientRender) {
        if (r.pendingTasks === 0)
          i.parentFlushed && i.status === cn && So(r, i), r.parentFlushed && e.completedBoundaries.push(r), r.fallbackAbortableTasks.forEach(ol, e), r.fallbackAbortableTasks.clear();
        else if (i.parentFlushed && i.status === cn) {
          So(r, i);
          var d = r.completedSegments;
          d.length === 1 && r.parentFlushed && e.partialBoundaries.push(r);
        }
      }
      if (e.allPendingTasks--, e.allPendingTasks === 0) {
        var S = e.onAllReady;
        S();
      }
    }
    function xa(e, r) {
      var i = r.blockedSegment;
      if (i.status === ga) {
        Jo(r.context);
        var s = null;
        s = ir, ir = r;
        try {
          Ct(e, r, r.node), Ei(i.chunks, e.responseState, i.lastPushedText, i.textEmbedded), r.abortSet.delete(r), i.status = cn, bo(e, r.blockedBoundary, i);
        } catch (S) {
          if (co(), typeof S == "object" && S !== null && typeof S.then == "function") {
            var d = r.ping;
            S.then(d, d);
          } else
            r.abortSet.delete(r), i.status = fn, ba(e, r.blockedBoundary, i, S);
        } finally {
          ir = s;
        }
      }
    }
    function il(e) {
      if (e.status !== ar) {
        var r = Il(), i = Pr.current;
        Pr.current = Zi;
        var s;
        s = va.getCurrentStack, va.getCurrentStack = ui;
        var d = po;
        ha(e.responseState);
        try {
          var S = e.pingedTasks, x;
          for (x = 0; x < S.length; x++) {
            var R = S[x];
            xa(e, R);
          }
          S.splice(0, x), e.destination !== null && Ta(e, e.destination);
        } catch (z) {
          go(e, z), ya(e, z);
        } finally {
          ha(d), Pr.current = i, va.getCurrentStack = s, i === Zi && Jo(r);
        }
      }
    }
    function xo(e, r, i) {
      switch (i.parentFlushed = !0, i.status) {
        case ga: {
          var s = i.id = e.nextSegmentId++;
          return i.lastPushedText = !1, i.textEmbedded = !1, Do(r, e.responseState, s);
        }
        case cn: {
          i.status = Gi;
          for (var d = !0, S = i.chunks, x = 0, R = i.children, z = 0; z < R.length; z++) {
            for (var J = R[z]; x < J.index; x++)
              E(r, S[x]);
            d = wo(e, r, J);
          }
          for (; x < S.length - 1; x++)
            E(r, S[x]);
          return x < S.length && (d = D(r, S[x])), d;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function wo(e, r, i) {
      var s = i.boundary;
      if (s === null)
        return xo(e, r, i);
      if (s.parentFlushed = !0, s.forceClientRender)
        return Ot(r, e.responseState, s.errorDigest, s.errorMessage, s.errorComponentStack), xo(e, r, i), ki(r, e.responseState);
      if (s.pendingTasks > 0) {
        s.rootSegmentID = e.nextSegmentId++, s.completedSegments.length > 0 && e.partialBoundaries.push(s);
        var d = s.id = Nt(e.responseState);
        return Rr(r, e.responseState, d), xo(e, r, i), Gn(r, e.responseState);
      } else {
        if (s.byteSize > e.progressiveChunkSize)
          return s.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(s), Rr(r, e.responseState, s.id), xo(e, r, i), Gn(r, e.responseState);
        ja(r, e.responseState);
        var S = s.completedSegments;
        if (S.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var x = S[0];
        return wo(e, r, x), Tl(r, e.responseState);
      }
    }
    function os(e, r, i) {
      return bl(r, e.responseState, i.id, i.errorDigest, i.errorMessage, i.errorComponentStack);
    }
    function xi(e, r, i) {
      return C(r, e.responseState, i.formatContext, i.id), wo(e, r, i), L(r, i.formatContext);
    }
    function wa(e, r, i) {
      for (var s = i.completedSegments, d = 0; d < s.length; d++) {
        var S = s[d];
        ll(e, r, i, S);
      }
      return s.length = 0, vl(r, e.responseState, i.id, i.rootSegmentID);
    }
    function as(e, r, i) {
      for (var s = i.completedSegments, d = 0; d < s.length; d++) {
        var S = s[d];
        if (!ll(e, r, i, S))
          return d++, s.splice(0, d), !1;
      }
      return s.splice(0, d), !0;
    }
    function ll(e, r, i, s) {
      if (s.status === Gi)
        return !0;
      var d = s.id;
      if (d === -1) {
        var S = s.id = i.rootSegmentID;
        if (S === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return xi(e, r, s);
      } else
        return xi(e, r, s), Tt(r, e.responseState, d);
    }
    function Ta(e, r) {
      try {
        var i = e.completedRootSegment;
        i !== null && e.pendingRootTasks === 0 && (wo(e, r, i), e.completedRootSegment = null, Yn(r, e.responseState));
        var s = e.clientRenderedBoundaries, d;
        for (d = 0; d < s.length; d++) {
          var S = s[d];
          if (!os(e, r, S)) {
            e.destination = null, d++, s.splice(0, d);
            return;
          }
        }
        s.splice(0, d);
        var x = e.completedBoundaries;
        for (d = 0; d < x.length; d++) {
          var R = x[d];
          if (!wa(e, r, R)) {
            e.destination = null, d++, x.splice(0, d);
            return;
          }
        }
        x.splice(0, d);
        var z = e.partialBoundaries;
        for (d = 0; d < z.length; d++) {
          var J = z[d];
          if (!as(e, r, J)) {
            e.destination = null, d++, z.splice(0, d);
            return;
          }
        }
        z.splice(0, d);
        var oe = e.completedBoundaries;
        for (d = 0; d < oe.length; d++) {
          var ye = oe[d];
          if (!wa(e, r, ye)) {
            e.destination = null, d++, oe.splice(0, d);
            return;
          }
        }
        oe.splice(0, d);
      } finally {
        e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && (e.abortableTasks.size !== 0 && g("There was still abortable task at the root when we closed. This is a bug in React."), j(r));
      }
    }
    function is(e) {
      Te(function() {
        return il(e);
      });
    }
    function t(e, r) {
      if (e.status === Qi) {
        e.status = ar, xe(r, e.fatalError);
        return;
      }
      if (e.status !== ar && e.destination === null) {
        e.destination = r;
        try {
          Ta(e, r);
        } catch (i) {
          go(e, i), ya(e, i);
        }
      }
    }
    function n(e, r) {
      try {
        var i = e.abortableTasks;
        i.forEach(function(s) {
          return al(s, e, r);
        }), i.clear(), e.destination !== null && Ta(e, e.destination);
      } catch (s) {
        go(e, s), ya(e, s);
      }
    }
    function l() {
    }
    function f(e, r, i, s) {
      var d = !1, S = null, x = "", R = {
        push: function(ye) {
          return ye !== null && (x += ye), !0;
        },
        destroy: function(ye) {
          d = !0, S = ye;
        }
      }, z = !1;
      function J() {
        z = !0;
      }
      var oe = si(e, wl(i, r ? r.identifierPrefix : void 0), Oa(), 1 / 0, l, void 0, J, void 0, void 0);
      if (is(oe), n(oe, s), t(oe, R), d)
        throw S;
      if (!z)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return x;
    }
    function v(e, r) {
      return f(e, r, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function b(e, r) {
      return f(e, r, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function w() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function A() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    Eo.renderToNodeStream = w, Eo.renderToStaticMarkup = b, Eo.renderToStaticNodeStream = A, Eo.renderToString = v, Eo.version = O;
  }()), Eo;
}
var pl = {};
/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var As;
function iu() {
  return As || (As = 1, process.env.NODE_ENV !== "production" && function() {
    var P = G, O = "18.2.0", V = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ee(t) {
      {
        for (var n = arguments.length, l = new Array(n > 1 ? n - 1 : 0), f = 1; f < n; f++)
          l[f - 1] = arguments[f];
        Q("warn", t, l);
      }
    }
    function g(t) {
      {
        for (var n = arguments.length, l = new Array(n > 1 ? n - 1 : 0), f = 1; f < n; f++)
          l[f - 1] = arguments[f];
        Q("error", t, l);
      }
    }
    function Q(t, n, l) {
      {
        var f = V.ReactDebugCurrentFrame, v = f.getStackAddendum();
        v !== "" && (n += "%s", l = l.concat([v]));
        var b = l.map(function(w) {
          return String(w);
        });
        b.unshift("Warning: " + n), Function.prototype.apply.call(console[t], console, b);
      }
    }
    function Te(t) {
      t();
    }
    var K = 512, E = null, D = 0;
    function ve(t) {
      E = new Uint8Array(K), D = 0;
    }
    function j(t, n) {
      if (n.length !== 0) {
        if (n.length > K) {
          D > 0 && (t.enqueue(new Uint8Array(E.buffer, 0, D)), E = new Uint8Array(K), D = 0), t.enqueue(n);
          return;
        }
        var l = n, f = E.length - D;
        f < l.length && (f === 0 ? t.enqueue(E) : (E.set(l.subarray(0, f), D), t.enqueue(E), l = l.subarray(f)), E = new Uint8Array(K), D = 0), E.set(l, D), D += l.length;
      }
    }
    function ce(t, n) {
      return j(t, n), !0;
    }
    function Re(t) {
      E && D > 0 && (t.enqueue(new Uint8Array(E.buffer, 0, D)), E = null, D = 0);
    }
    function xe(t) {
      t.close();
    }
    var ke = new TextEncoder();
    function $(t) {
      return ke.encode(t);
    }
    function F(t) {
      return ke.encode(t);
    }
    function le(t, n) {
      typeof t.error == "function" ? t.error(n) : t.close();
    }
    function _(t) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, l = n && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return l;
      }
    }
    function Y(t) {
      try {
        return k(t), !1;
      } catch {
        return !0;
      }
    }
    function k(t) {
      return "" + t;
    }
    function X(t, n) {
      if (Y(t))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", n, _(t)), k(t);
    }
    function fe(t, n) {
      if (Y(t))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", n, _(t)), k(t);
    }
    function De(t) {
      if (Y(t))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", _(t)), k(t);
    }
    var ae = Object.prototype.hasOwnProperty, Pe = 0, Ne = 1, Ue = 2, nt = 3, Xe = 4, vt = 5, Je = 6, qe = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", et = qe + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ve = new RegExp("^[" + qe + "][" + et + "]*$"), U = {}, W = {};
    function q(t) {
      return ae.call(W, t) ? !0 : ae.call(U, t) ? !1 : Ve.test(t) ? (W[t] = !0, !0) : (U[t] = !0, g("Invalid attribute name: `%s`", t), !1);
    }
    function ge(t, n, l, f) {
      if (l !== null && l.type === Pe)
        return !1;
      switch (typeof n) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (f)
            return !1;
          if (l !== null)
            return !l.acceptsBooleans;
          var v = t.toLowerCase().slice(0, 5);
          return v !== "data-" && v !== "aria-";
        }
        default:
          return !1;
      }
    }
    function se(t) {
      return te.hasOwnProperty(t) ? te[t] : null;
    }
    function re(t, n, l, f, v, b, w) {
      this.acceptsBooleans = n === Ue || n === nt || n === Xe, this.attributeName = f, this.attributeNamespace = v, this.mustUseProperty = l, this.propertyName = t, this.type = n, this.sanitizeURL = b, this.removeEmptyString = w;
    }
    var te = {}, he = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    he.forEach(function(t) {
      te[t] = new re(
        t,
        Pe,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
      var n = t[0], l = t[1];
      te[n] = new re(
        n,
        Ne,
        !1,
        // mustUseProperty
        l,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
      te[t] = new re(
        t,
        Ue,
        !1,
        // mustUseProperty
        t.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
      te[t] = new re(
        t,
        Ue,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(t) {
      te[t] = new re(
        t,
        nt,
        !1,
        // mustUseProperty
        t.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      te[t] = new re(
        t,
        nt,
        !0,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      te[t] = new re(
        t,
        Xe,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      te[t] = new re(
        t,
        Je,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(t) {
      te[t] = new re(
        t,
        vt,
        !1,
        // mustUseProperty
        t.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Se = /[\-\:]([a-z])/g, me = function(t) {
      return t[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      var n = t.replace(Se, me);
      te[n] = new re(
        n,
        Ne,
        !1,
        // mustUseProperty
        t,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      var n = t.replace(Se, me);
      te[n] = new re(
        n,
        Ne,
        !1,
        // mustUseProperty
        t,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      var n = t.replace(Se, me);
      te[n] = new re(
        n,
        Ne,
        !1,
        // mustUseProperty
        t,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(t) {
      te[t] = new re(
        t,
        Ne,
        !1,
        // mustUseProperty
        t.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ue = "xlinkHref";
    te[ue] = new re(
      "xlinkHref",
      Ne,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(t) {
      te[t] = new re(
        t,
        Ne,
        !1,
        // mustUseProperty
        t.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Ee = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Z(t, n) {
      return t + n.charAt(0).toUpperCase() + n.substring(1);
    }
    var Ce = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ee).forEach(function(t) {
      Ce.forEach(function(n) {
        Ee[Z(n, t)] = Ee[t];
      });
    });
    var Be = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ct(t, n) {
      Be[n.type] || n.onChange || n.onInput || n.readOnly || n.disabled || n.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), n.onChange || n.readOnly || n.disabled || n.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function zt(t, n) {
      if (t.indexOf("-") === -1)
        return typeof n.is == "string";
      switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var dn = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, mt = {}, lr = new RegExp("^(aria)-[" + et + "]*$"), sr = new RegExp("^(aria)[A-Z][" + et + "]*$");
    function pn(t, n) {
      {
        if (ae.call(mt, n) && mt[n])
          return !0;
        if (sr.test(n)) {
          var l = "aria-" + n.slice(4).toLowerCase(), f = dn.hasOwnProperty(l) ? l : null;
          if (f == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", n), mt[n] = !0, !0;
          if (n !== f)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", n, f), mt[n] = !0, !0;
        }
        if (lr.test(n)) {
          var v = n.toLowerCase(), b = dn.hasOwnProperty(v) ? v : null;
          if (b == null)
            return mt[n] = !0, !1;
          if (n !== b)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", n, b), mt[n] = !0, !0;
        }
      }
      return !0;
    }
    function yt(t, n) {
      {
        var l = [];
        for (var f in n) {
          var v = pn(t, f);
          v || l.push(f);
        }
        var b = l.map(function(w) {
          return "`" + w + "`";
        }).join(", ");
        l.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", b, t) : l.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", b, t);
      }
    }
    function rt(t, n) {
      zt(t, n) || yt(t, n);
    }
    var Ke = !1;
    function jr(t, n) {
      {
        if (t !== "input" && t !== "textarea" && t !== "select")
          return;
        n != null && n.value === null && !Ke && (Ke = !0, t === "select" && n.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", t) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", t));
      }
    }
    var _r = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Lr = function() {
    };
    {
      var Ge = {}, Fr = /^on./, hn = /^on[^A-Z]/, vn = new RegExp("^(aria)-[" + et + "]*$"), zr = new RegExp("^(aria)[A-Z][" + et + "]*$");
      Lr = function(t, n, l, f) {
        if (ae.call(Ge, n) && Ge[n])
          return !0;
        var v = n.toLowerCase();
        if (v === "onfocusin" || v === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Ge[n] = !0, !0;
        if (f != null) {
          var b = f.registrationNameDependencies, w = f.possibleRegistrationNames;
          if (b.hasOwnProperty(n))
            return !0;
          var A = w.hasOwnProperty(v) ? w[v] : null;
          if (A != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", n, A), Ge[n] = !0, !0;
          if (Fr.test(n))
            return g("Unknown event handler property `%s`. It will be ignored.", n), Ge[n] = !0, !0;
        } else if (Fr.test(n))
          return hn.test(n) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", n), Ge[n] = !0, !0;
        if (vn.test(n) || zr.test(n))
          return !0;
        if (v === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Ge[n] = !0, !0;
        if (v === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Ge[n] = !0, !0;
        if (v === "is" && l !== null && l !== void 0 && typeof l != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof l), Ge[n] = !0, !0;
        if (typeof l == "number" && isNaN(l))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", n), Ge[n] = !0, !0;
        var e = se(n), r = e !== null && e.type === Pe;
        if (_r.hasOwnProperty(v)) {
          var i = _r[v];
          if (i !== n)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", n, i), Ge[n] = !0, !0;
        } else if (!r && n !== v)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", n, v), Ge[n] = !0, !0;
        return typeof l == "boolean" && ge(n, l, e, !1) ? (l ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', l, n, n, l, n) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', l, n, n, l, n, n, n), Ge[n] = !0, !0) : r ? !0 : ge(n, l, e, !1) ? (Ge[n] = !0, !1) : ((l === "false" || l === "true") && e !== null && e.type === nt && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", l, n, l === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', n, l), Ge[n] = !0), !0);
      };
    }
    var Sr = function(t, n, l) {
      {
        var f = [];
        for (var v in n) {
          var b = Lr(t, v, n[v], l);
          b || f.push(v);
        }
        var w = f.map(function(A) {
          return "`" + A + "`";
        }).join(", ");
        f.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", w, t) : f.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", w, t);
      }
    };
    function Fn(t, n, l) {
      zt(t, n) || Sr(t, n, l);
    }
    var Ur = function() {
    };
    {
      var $t = /^(?:webkit|moz|o)[A-Z]/, Br = /^-ms-/, gn = /-(.)/g, st = /;\s*$/, It = {}, Zt = {}, Ae = !1, Gt = !1, br = function(t) {
        return t.replace(gn, function(n, l) {
          return l.toUpperCase();
        });
      }, ur = function(t) {
        It.hasOwnProperty(t) && It[t] || (It[t] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          t,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          br(t.replace(Br, "ms-"))
        ));
      }, Mt = function(t) {
        It.hasOwnProperty(t) && It[t] || (It[t] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", t, t.charAt(0).toUpperCase() + t.slice(1)));
      }, xr = function(t, n) {
        Zt.hasOwnProperty(n) && Zt[n] || (Zt[n] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, t, n.replace(st, "")));
      }, Ut = function(t, n) {
        Ae || (Ae = !0, g("`NaN` is an invalid value for the `%s` css style property.", t));
      }, $e = function(t, n) {
        Gt || (Gt = !0, g("`Infinity` is an invalid value for the `%s` css style property.", t));
      };
      Ur = function(t, n) {
        t.indexOf("-") > -1 ? ur(t) : $t.test(t) ? Mt(t) : st.test(n) && xr(t, n), typeof n == "number" && (isNaN(n) ? Ut(t, n) : isFinite(n) || $e(t, n));
      };
    }
    var Wr = Ur, Hr = /["'&<>]/;
    function mn(t) {
      De(t);
      var n = "" + t, l = Hr.exec(n);
      if (!l)
        return n;
      var f, v = "", b, w = 0;
      for (b = l.index; b < n.length; b++) {
        switch (n.charCodeAt(b)) {
          case 34:
            f = "&quot;";
            break;
          case 38:
            f = "&amp;";
            break;
          case 39:
            f = "&#x27;";
            break;
          case 60:
            f = "&lt;";
            break;
          case 62:
            f = "&gt;";
            break;
          default:
            continue;
        }
        w !== b && (v += n.substring(w, b)), w = b + 1, v += f;
      }
      return w !== b ? v + n.substring(w, b) : v;
    }
    function Qe(t) {
      return typeof t == "boolean" || typeof t == "number" ? "" + t : mn(t);
    }
    var Yr = /([A-Z])/g, zn = /^ms-/;
    function Un(t) {
      return t.replace(Yr, "-$1").toLowerCase().replace(zn, "-ms-");
    }
    var Dt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Vr = !1;
    function wr(t) {
      !Vr && Dt.test(t) && (Vr = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(t)));
    }
    var $r = Array.isArray;
    function cr(t) {
      return $r(t);
    }
    var Qt = F("<script>"), Bn = F("<\/script>"), Zr = F('<script src="'), Tr = F('<script type="module" src="'), Xt = F('" async=""><\/script>');
    function Bt(t) {
      return De(t), ("" + t).replace(Rt, fr);
    }
    var Rt = /(<\/|<)(s)(cript)/gi, fr = function(t, n, l, f) {
      return "" + n + (l === "s" ? "\\u0073" : "\\u0053") + f;
    };
    function dr(t, n, l, f, v) {
      var b = t === void 0 ? "" : t, w = n === void 0 ? Qt : F('<script nonce="' + Qe(n) + '">'), A = [];
      if (l !== void 0 && A.push(w, $(Bt(l)), Bn), f !== void 0)
        for (var e = 0; e < f.length; e++)
          A.push(Zr, $(Qe(f[e])), Xt);
      if (v !== void 0)
        for (var r = 0; r < v.length; r++)
          A.push(Tr, $(Qe(v[r])), Xt);
      return {
        bootstrapChunks: A,
        startInlineScript: w,
        placeholderPrefix: F(b + "P:"),
        segmentPrefix: F(b + "S:"),
        boundaryPrefix: b + "B:",
        idPrefix: b,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var gt = 0, He = 1, At = 2, St = 3, tt = 4, Er = 5, Pt = 6, Nt = 7;
    function ut(t, n) {
      return {
        insertionMode: t,
        selectedValue: n
      };
    }
    function Wt(t) {
      var n = t === "http://www.w3.org/2000/svg" ? At : t === "http://www.w3.org/1998/Math/MathML" ? St : gt;
      return ut(n, null);
    }
    function Jt(t, n, l) {
      switch (n) {
        case "select":
          return ut(He, l.value != null ? l.value : l.defaultValue);
        case "svg":
          return ut(At, null);
        case "math":
          return ut(St, null);
        case "foreignObject":
          return ut(He, null);
        case "table":
          return ut(tt, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return ut(Er, null);
        case "colgroup":
          return ut(Nt, null);
        case "tr":
          return ut(Pt, null);
      }
      return t.insertionMode >= tt || t.insertionMode === gt ? ut(He, null) : t;
    }
    var Gr = null;
    function Qr(t) {
      var n = t.nextSuspenseID++;
      return F(t.boundaryPrefix + n.toString(16));
    }
    function kr(t, n, l) {
      var f = t.idPrefix, v = ":" + f + "R" + n;
      return l > 0 && (v += "H" + l.toString(32)), v + ":";
    }
    function Kt(t) {
      return Qe(t);
    }
    var Xr = F("<!-- -->");
    function Cr(t, n, l, f) {
      return n === "" ? f : (f && t.push(Xr), t.push($(Kt(n))), !0);
    }
    function Ir(t, n, l, f) {
      l && f && t.push(Xr);
    }
    var o = /* @__PURE__ */ new Map();
    function u(t) {
      var n = o.get(t);
      if (n !== void 0)
        return n;
      var l = F(Qe(Un(t)));
      return o.set(t, l), l;
    }
    var h = F(' style="'), m = F(":"), I = F(";");
    function T(t, n, l) {
      if (typeof l != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var f = !0;
      for (var v in l)
        if (ae.call(l, v)) {
          var b = l[v];
          if (!(b == null || typeof b == "boolean" || b === "")) {
            var w = void 0, A = void 0, e = v.indexOf("--") === 0;
            e ? (w = $(Qe(v)), fe(b, v), A = $(Qe(("" + b).trim()))) : (Wr(v, b), w = u(v), typeof b == "number" ? b !== 0 && !ae.call(Ee, v) ? A = $(b + "px") : A = $("" + b) : (fe(b, v), A = $(Qe(("" + b).trim())))), f ? (f = !1, t.push(h, w, m, A)) : t.push(I, w, m, A);
          }
        }
      f || t.push(ne);
    }
    var N = F(" "), B = F('="'), ne = F('"'), de = F('=""');
    function ie(t, n, l, f) {
      switch (l) {
        case "style": {
          T(t, n, f);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(l.length > 2 && (l[0] === "o" || l[0] === "O") && (l[1] === "n" || l[1] === "N"))
      ) {
        var v = se(l);
        if (v !== null) {
          switch (typeof f) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!v.acceptsBooleans)
                return;
          }
          var b = v.attributeName, w = $(b);
          switch (v.type) {
            case nt:
              f && t.push(N, w, de);
              return;
            case Xe:
              f === !0 ? t.push(N, w, de) : f === !1 || t.push(N, w, B, $(Qe(f)), ne);
              return;
            case vt:
              isNaN(f) || t.push(N, w, B, $(Qe(f)), ne);
              break;
            case Je:
              !isNaN(f) && f >= 1 && t.push(N, w, B, $(Qe(f)), ne);
              break;
            default:
              v.sanitizeURL && (X(f, b), f = "" + f, wr(f)), t.push(N, w, B, $(Qe(f)), ne);
          }
        } else if (q(l)) {
          switch (typeof f) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var A = l.toLowerCase().slice(0, 5);
              if (A !== "data-" && A !== "aria-")
                return;
            }
          }
          t.push(N, $(l), B, $(Qe(f)), ne);
        }
      }
    }
    var Ie = F(">"), ft = F("/>");
    function ot(t, n, l) {
      if (n != null) {
        if (l != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof n != "object" || !("__html" in n))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var f = n.__html;
        f != null && (De(f), t.push($("" + f)));
      }
    }
    var at = !1, Ht = !1, bt = !1, Mr = !1, qt = !1, pr = !1, Yt = !1;
    function Jr(t, n) {
      {
        var l = t[n];
        if (l != null) {
          var f = cr(l);
          t.multiple && !f ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.", n) : !t.multiple && f && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", n);
        }
      }
    }
    function ka(t, n, l) {
      ct("select", n), Jr(n, "value"), Jr(n, "defaultValue"), n.value !== void 0 && n.defaultValue !== void 0 && !bt && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), bt = !0), t.push(xt("select"));
      var f = null, v = null;
      for (var b in n)
        if (ae.call(n, b)) {
          var w = n[b];
          if (w == null)
            continue;
          switch (b) {
            case "children":
              f = w;
              break;
            case "dangerouslySetInnerHTML":
              v = w;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ie(t, l, b, w);
              break;
          }
        }
      return t.push(Ie), ot(t, v, f), f;
    }
    function Ca(t) {
      var n = "";
      return P.Children.forEach(t, function(l) {
        l != null && (n += l, !qt && typeof l != "string" && typeof l != "number" && (qt = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), n;
    }
    var Wn = F(' selected=""');
    function Ia(t, n, l, f) {
      var v = f.selectedValue;
      t.push(xt("option"));
      var b = null, w = null, A = null, e = null;
      for (var r in n)
        if (ae.call(n, r)) {
          var i = n[r];
          if (i == null)
            continue;
          switch (r) {
            case "children":
              b = i;
              break;
            case "selected":
              A = i, Yt || (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Yt = !0);
              break;
            case "dangerouslySetInnerHTML":
              e = i;
              break;
            case "value":
              w = i;
            default:
              ie(t, l, r, i);
              break;
          }
        }
      if (v != null) {
        var s;
        if (w !== null ? (X(w, "value"), s = "" + w) : (e !== null && (pr || (pr = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), s = Ca(b)), cr(v))
          for (var d = 0; d < v.length; d++) {
            X(v[d], "value");
            var S = "" + v[d];
            if (S === s) {
              t.push(Wn);
              break;
            }
          }
        else
          X(v, "select.value"), "" + v === s && t.push(Wn);
      } else
        A && t.push(Wn);
      return t.push(Ie), ot(t, e, b), b;
    }
    function Hn(t, n, l) {
      ct("input", n), n.checked !== void 0 && n.defaultChecked !== void 0 && !Ht && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", n.type), Ht = !0), n.value !== void 0 && n.defaultValue !== void 0 && !at && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", n.type), at = !0), t.push(xt("input"));
      var f = null, v = null, b = null, w = null;
      for (var A in n)
        if (ae.call(n, A)) {
          var e = n[A];
          if (e == null)
            continue;
          switch (A) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              w = e;
              break;
            case "defaultValue":
              v = e;
              break;
            case "checked":
              b = e;
              break;
            case "value":
              f = e;
              break;
            default:
              ie(t, l, A, e);
              break;
          }
        }
      return b !== null ? ie(t, l, "checked", b) : w !== null && ie(t, l, "checked", w), f !== null ? ie(t, l, "value", f) : v !== null && ie(t, l, "value", v), t.push(ft), null;
    }
    function Vt(t, n, l) {
      ct("textarea", n), n.value !== void 0 && n.defaultValue !== void 0 && !Mr && (g("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Mr = !0), t.push(xt("textarea"));
      var f = null, v = null, b = null;
      for (var w in n)
        if (ae.call(n, w)) {
          var A = n[w];
          if (A == null)
            continue;
          switch (w) {
            case "children":
              b = A;
              break;
            case "value":
              f = A;
              break;
            case "defaultValue":
              v = A;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              ie(t, l, w, A);
              break;
          }
        }
      if (f === null && v !== null && (f = v), t.push(Ie), b != null) {
        if (g("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), f != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (cr(b)) {
          if (b.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          De(b[0]), f = "" + b[0];
        }
        De(b), f = "" + b;
      }
      return typeof f == "string" && f[0] === `
` && t.push(hr), f !== null && (X(f, "value"), t.push($(Kt("" + f)))), null;
    }
    function Kr(t, n, l, f) {
      t.push(xt(l));
      for (var v in n)
        if (ae.call(n, v)) {
          var b = n[v];
          if (b == null)
            continue;
          switch (v) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(l + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              ie(t, f, v, b);
              break;
          }
        }
      return t.push(ft), null;
    }
    function yn(t, n, l) {
      t.push(xt("menuitem"));
      for (var f in n)
        if (ae.call(n, f)) {
          var v = n[f];
          if (v == null)
            continue;
          switch (f) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              ie(t, l, f, v);
              break;
          }
        }
      return t.push(Ie), null;
    }
    function je(t, n, l) {
      t.push(xt("title"));
      var f = null;
      for (var v in n)
        if (ae.call(n, v)) {
          var b = n[v];
          if (b == null)
            continue;
          switch (v) {
            case "children":
              f = b;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              ie(t, l, v, b);
              break;
          }
        }
      t.push(Ie);
      {
        var w = Array.isArray(f) && f.length < 2 ? f[0] || null : f;
        Array.isArray(f) && f.length > 1 ? g("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : w != null && w.$$typeof != null ? g("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : w != null && typeof w != "string" && typeof w != "number" && g("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return f;
    }
    function er(t, n, l, f) {
      t.push(xt(l));
      var v = null, b = null;
      for (var w in n)
        if (ae.call(n, w)) {
          var A = n[w];
          if (A == null)
            continue;
          switch (w) {
            case "children":
              v = A;
              break;
            case "dangerouslySetInnerHTML":
              b = A;
              break;
            default:
              ie(t, f, w, A);
              break;
          }
        }
      return t.push(Ie), ot(t, b, v), typeof v == "string" ? (t.push($(Kt(v))), null) : v;
    }
    function dt(t, n, l, f) {
      t.push(xt(l));
      var v = null, b = null;
      for (var w in n)
        if (ae.call(n, w)) {
          var A = n[w];
          if (A == null)
            continue;
          switch (w) {
            case "children":
              v = A;
              break;
            case "dangerouslySetInnerHTML":
              b = A;
              break;
            case "style":
              T(t, f, A);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              q(w) && typeof A != "function" && typeof A != "symbol" && t.push(N, $(w), B, $(Qe(A)), ne);
              break;
          }
        }
      return t.push(Ie), ot(t, b, v), v;
    }
    var hr = F(`
`);
    function tr(t, n, l, f) {
      t.push(xt(l));
      var v = null, b = null;
      for (var w in n)
        if (ae.call(n, w)) {
          var A = n[w];
          if (A == null)
            continue;
          switch (w) {
            case "children":
              v = A;
              break;
            case "dangerouslySetInnerHTML":
              b = A;
              break;
            default:
              ie(t, f, w, A);
              break;
          }
        }
      if (t.push(Ie), b != null) {
        if (v != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof b != "object" || !("__html" in b))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var e = b.__html;
        e != null && (typeof e == "string" && e.length > 0 && e[0] === `
` ? t.push(hr, $(e)) : (De(e), t.push($("" + e))));
      }
      return typeof v == "string" && v[0] === `
` && t.push(hr), v;
    }
    var Sn = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, rr = /* @__PURE__ */ new Map();
    function xt(t) {
      var n = rr.get(t);
      if (n === void 0) {
        if (!Sn.test(t))
          throw new Error("Invalid tag: " + t);
        n = F("<" + t), rr.set(t, n);
      }
      return n;
    }
    var Yn = F("<!DOCTYPE html>");
    function Vn(t, n, l, f, v) {
      switch (rt(n, l), jr(n, l), Fn(n, l, null), !l.suppressContentEditableWarning && l.contentEditable && l.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), v.insertionMode !== At && v.insertionMode !== St && n.indexOf("-") === -1 && typeof l.is != "string" && n.toLowerCase() !== n && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", n), n) {
        case "select":
          return ka(t, l, f);
        case "option":
          return Ia(t, l, f, v);
        case "textarea":
          return Vt(t, l, f);
        case "input":
          return Hn(t, l, f);
        case "menuitem":
          return yn(t, l, f);
        case "title":
          return je(t, l, f);
        case "listing":
        case "pre":
          return tr(t, l, n, f);
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return Kr(t, l, n, f);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return er(t, l, n, f);
        case "html":
          return v.insertionMode === gt && t.push(Yn), er(t, l, n, f);
        default:
          return n.indexOf("-") === -1 && typeof l.is != "string" ? er(t, l, n, f) : dt(t, l, n, f);
      }
    }
    var Mo = F("</"), Do = F(">");
    function Ro(t, n, l) {
      switch (n) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          t.push(Mo, $(n), Do);
      }
    }
    function Ma(t, n) {
      for (var l = n.bootstrapChunks, f = 0; f < l.length - 1; f++)
        j(t, l[f]);
      return f < l.length ? ce(t, l[f]) : !0;
    }
    var Da = F('<template id="'), bn = F('"></template>');
    function xn(t, n, l) {
      j(t, Da), j(t, n.placeholderPrefix);
      var f = $(l.toString(16));
      return j(t, f), ce(t, bn);
    }
    var wn = F("<!--$-->"), qr = F('<!--$?--><template id="'), Ra = F('"></template>'), en = F("<!--$!-->"), $n = F("<!--/$-->"), Zn = F("<template"), Dr = F('"'), Rr = F(' data-dgst="'), Tn = F(' data-msg="'), Ao = F(' data-stck="'), Gn = F("></template>");
    function Po(t, n) {
      return ce(t, wn);
    }
    function En(t, n, l) {
      if (j(t, qr), l === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return j(t, l), ce(t, Ra);
    }
    function pt(t, n, l, f, v) {
      var b;
      return b = ce(t, en), j(t, Zn), l && (j(t, Rr), j(t, $(Qe(l))), j(t, Dr)), f && (j(t, Tn), j(t, $(Qe(f))), j(t, Dr)), v && (j(t, Ao), j(t, $(Qe(v))), j(t, Dr)), b = ce(t, Gn), b;
    }
    function No(t, n) {
      return ce(t, $n);
    }
    function kn(t, n) {
      return ce(t, $n);
    }
    function Aa(t, n) {
      return ce(t, $n);
    }
    var Oo = F('<div hidden id="'), Cn = F('">'), jo = F("</div>"), _o = F('<svg aria-hidden="true" style="display:none" id="'), In = F('">'), Mn = F("</svg>"), Lo = F('<math aria-hidden="true" style="display:none" id="'), Fo = F('">'), zo = F("</math>"), Qn = F('<table hidden id="'), Uo = F('">'), a = F("</table>"), c = F('<table hidden><tbody id="'), p = F('">'), y = F("</tbody></table>"), M = F('<table hidden><tr id="'), C = F('">'), L = F("</tr></table>"), H = F('<table hidden><colgroup id="'), pe = F('">'), we = F("</colgroup></table>");
    function be(t, n, l, f) {
      switch (l.insertionMode) {
        case gt:
        case He:
          return j(t, Oo), j(t, n.segmentPrefix), j(t, $(f.toString(16))), ce(t, Cn);
        case At:
          return j(t, _o), j(t, n.segmentPrefix), j(t, $(f.toString(16))), ce(t, In);
        case St:
          return j(t, Lo), j(t, n.segmentPrefix), j(t, $(f.toString(16))), ce(t, Fo);
        case tt:
          return j(t, Qn), j(t, n.segmentPrefix), j(t, $(f.toString(16))), ce(t, Uo);
        case Er:
          return j(t, c), j(t, n.segmentPrefix), j(t, $(f.toString(16))), ce(t, p);
        case Pt:
          return j(t, M), j(t, n.segmentPrefix), j(t, $(f.toString(16))), ce(t, C);
        case Nt:
          return j(t, H), j(t, n.segmentPrefix), j(t, $(f.toString(16))), ce(t, pe);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function ze(t, n) {
      switch (n.insertionMode) {
        case gt:
        case He:
          return ce(t, jo);
        case At:
          return ce(t, Mn);
        case St:
          return ce(t, zo);
        case tt:
          return ce(t, a);
        case Er:
          return ce(t, y);
        case Pt:
          return ce(t, L);
        case Nt:
          return ce(t, we);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var ht = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", wt = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Tt = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Dn = F(ht + ';$RS("'), Bo = F('$RS("'), Xn = F('","'), hl = F('")<\/script>');
    function vl(t, n, l) {
      j(t, n.startInlineScript), n.sentCompleteSegmentFunction ? j(t, Bo) : (n.sentCompleteSegmentFunction = !0, j(t, Dn)), j(t, n.segmentPrefix);
      var f = $(l.toString(16));
      return j(t, f), j(t, Xn), j(t, n.placeholderPrefix), j(t, f), ce(t, hl);
    }
    var gl = F(wt + ';$RC("'), ml = F('$RC("'), yl = F('","'), Sl = F('")<\/script>');
    function Pa(t, n, l, f) {
      if (j(t, n.startInlineScript), n.sentCompleteBoundaryFunction ? j(t, ml) : (n.sentCompleteBoundaryFunction = !0, j(t, gl)), l === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var v = $(f.toString(16));
      return j(t, l), j(t, yl), j(t, n.segmentPrefix), j(t, v), ce(t, Sl);
    }
    var bl = F(Tt + ';$RX("'), xl = F('$RX("'), Na = F('"'), wl = F(")<\/script>"), Oa = F(",");
    function Ti(t, n, l, f, v, b) {
      if (j(t, n.startInlineScript), n.sentClientRenderFunction ? j(t, xl) : (n.sentClientRenderFunction = !0, j(t, bl)), l === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return j(t, l), j(t, Na), (f || v || b) && (j(t, Oa), j(t, $(ja(f || "")))), (v || b) && (j(t, Oa), j(t, $(ja(v || "")))), b && (j(t, Oa), j(t, $(ja(b)))), ce(t, wl);
    }
    var Ei = /[<\u2028\u2029]/g;
    function ja(t) {
      var n = JSON.stringify(t);
      return n.replace(Ei, function(l) {
        switch (l) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    var Ot = Object.assign, Tl = Symbol.for("react.element"), ki = Symbol.for("react.portal"), Et = Symbol.for("react.fragment"), Ci = Symbol.for("react.strict_mode"), _a = Symbol.for("react.profiler"), Wo = Symbol.for("react.provider"), Ho = Symbol.for("react.context"), Yo = Symbol.for("react.forward_ref"), Jn = Symbol.for("react.suspense"), Kn = Symbol.for("react.suspense_list"), qn = Symbol.for("react.memo"), Rn = Symbol.for("react.lazy"), La = Symbol.for("react.scope"), Fa = Symbol.for("react.debug_trace_mode"), Vo = Symbol.for("react.legacy_hidden"), El = Symbol.for("react.default_value"), Ii = Symbol.iterator, kl = "@@iterator";
    function Cl(t) {
      if (t === null || typeof t != "object")
        return null;
      var n = Ii && t[Ii] || t[kl];
      return typeof n == "function" ? n : null;
    }
    function Mi(t, n, l) {
      var f = t.displayName;
      if (f)
        return f;
      var v = n.displayName || n.name || "";
      return v !== "" ? l + "(" + v + ")" : l;
    }
    function Di(t) {
      return t.displayName || "Context";
    }
    function Ze(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case Et:
          return "Fragment";
        case ki:
          return "Portal";
        case _a:
          return "Profiler";
        case Ci:
          return "StrictMode";
        case Jn:
          return "Suspense";
        case Kn:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case Ho:
            var n = t;
            return Di(n) + ".Consumer";
          case Wo:
            var l = t;
            return Di(l._context) + ".Provider";
          case Yo:
            return Mi(t, t.render, "ForwardRef");
          case qn:
            var f = t.displayName || null;
            return f !== null ? f : Ze(t.type) || "Memo";
          case Rn: {
            var v = t, b = v._payload, w = v._init;
            try {
              return Ze(w(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var eo = 0, za, Ye, An, Ua, Ba, Wa, Ha;
    function Ya() {
    }
    Ya.__reactDisabledLog = !0;
    function Ri() {
      {
        if (eo === 0) {
          za = console.log, Ye = console.info, An = console.warn, Ua = console.error, Ba = console.group, Wa = console.groupCollapsed, Ha = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Ya,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        eo++;
      }
    }
    function Ai() {
      {
        if (eo--, eo === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ot({}, t, {
              value: za
            }),
            info: Ot({}, t, {
              value: Ye
            }),
            warn: Ot({}, t, {
              value: An
            }),
            error: Ot({}, t, {
              value: Ua
            }),
            group: Ot({}, t, {
              value: Ba
            }),
            groupCollapsed: Ot({}, t, {
              value: Wa
            }),
            groupEnd: Ot({}, t, {
              value: Ha
            })
          });
        }
        eo < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var $o = V.ReactCurrentDispatcher, Va;
    function to(t, n, l) {
      {
        if (Va === void 0)
          try {
            throw Error();
          } catch (v) {
            var f = v.stack.trim().match(/\n( *(at )?)/);
            Va = f && f[1] || "";
          }
        return `
` + Va + t;
      }
    }
    var ro = !1, Pn;
    {
      var no = typeof WeakMap == "function" ? WeakMap : Map;
      Pn = new no();
    }
    function oo(t, n) {
      if (!t || ro)
        return "";
      {
        var l = Pn.get(t);
        if (l !== void 0)
          return l;
      }
      var f;
      ro = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = $o.current, $o.current = null, Ri();
      try {
        if (n) {
          var w = function() {
            throw Error();
          };
          if (Object.defineProperty(w.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(w, []);
            } catch (x) {
              f = x;
            }
            Reflect.construct(t, [], w);
          } else {
            try {
              w.call();
            } catch (x) {
              f = x;
            }
            t.call(w.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            f = x;
          }
          t();
        }
      } catch (x) {
        if (x && f && typeof x.stack == "string") {
          for (var A = x.stack.split(`
`), e = f.stack.split(`
`), r = A.length - 1, i = e.length - 1; r >= 1 && i >= 0 && A[r] !== e[i]; )
            i--;
          for (; r >= 1 && i >= 0; r--, i--)
            if (A[r] !== e[i]) {
              if (r !== 1 || i !== 1)
                do
                  if (r--, i--, i < 0 || A[r] !== e[i]) {
                    var s = `
` + A[r].replace(" at new ", " at ");
                    return t.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", t.displayName)), typeof t == "function" && Pn.set(t, s), s;
                  }
                while (r >= 1 && i >= 0);
              break;
            }
        }
      } finally {
        ro = !1, $o.current = b, Ai(), Error.prepareStackTrace = v;
      }
      var d = t ? t.displayName || t.name : "", S = d ? to(d) : "";
      return typeof t == "function" && Pn.set(t, S), S;
    }
    function Zo(t, n, l) {
      return oo(t, !0);
    }
    function Pi(t, n, l) {
      return oo(t, !1);
    }
    function $a(t) {
      var n = t.prototype;
      return !!(n && n.isReactComponent);
    }
    function Za(t, n, l) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return oo(t, $a(t));
      if (typeof t == "string")
        return to(t);
      switch (t) {
        case Jn:
          return to("Suspense");
        case Kn:
          return to("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case Yo:
            return Pi(t.render);
          case qn:
            return Za(t.type, n, l);
          case Rn: {
            var f = t, v = f._payload, b = f._init;
            try {
              return Za(b(v), n, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Ga = {}, Ni = V.ReactDebugCurrentFrame;
    function Nn(t) {
      if (t) {
        var n = t._owner, l = Za(t.type, t._source, n ? n.type : null);
        Ni.setExtraStackFrame(l);
      } else
        Ni.setExtraStackFrame(null);
    }
    function Qa(t, n, l, f, v) {
      {
        var b = Function.call.bind(ae);
        for (var w in t)
          if (b(t, w)) {
            var A = void 0;
            try {
              if (typeof t[w] != "function") {
                var e = Error((f || "React class") + ": " + l + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw e.name = "Invariant Violation", e;
              }
              A = t[w](n, w, f, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (r) {
              A = r;
            }
            A && !(A instanceof Error) && (Nn(v), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", l, w, typeof A), Nn(null)), A instanceof Error && !(A.message in Ga) && (Ga[A.message] = !0, Nn(v), g("Failed %s type: %s", l, A.message), Nn(null));
          }
      }
    }
    var Go;
    Go = {};
    var tn = {};
    Object.freeze(tn);
    function Xa(t, n) {
      {
        var l = t.contextTypes;
        if (!l)
          return tn;
        var f = {};
        for (var v in l)
          f[v] = n[v];
        {
          var b = Ze(t) || "Unknown";
          Qa(l, f, "context", b);
        }
        return f;
      }
    }
    function Ja(t, n, l, f) {
      {
        if (typeof t.getChildContext != "function") {
          {
            var v = Ze(n) || "Unknown";
            Go[v] || (Go[v] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", v, v));
          }
          return l;
        }
        var b = t.getChildContext();
        for (var w in b)
          if (!(w in f))
            throw new Error((Ze(n) || "Unknown") + '.getChildContext(): key "' + w + '" is not defined in childContextTypes.');
        {
          var A = Ze(n) || "Unknown";
          Qa(f, b, "child context", A);
        }
        return Ot({}, l, b);
      }
    }
    var Ar;
    Ar = {};
    var Oi = null, rn = null;
    function nn(t) {
      t.context._currentValue = t.parentValue;
    }
    function Ka(t) {
      t.context._currentValue = t.value;
    }
    function nr(t, n) {
      if (t !== n) {
        nn(t);
        var l = t.parent, f = n.parent;
        if (l === null) {
          if (f !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (f === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          nr(l, f);
        }
        Ka(n);
      }
    }
    function Qo(t) {
      nn(t);
      var n = t.parent;
      n !== null && Qo(n);
    }
    function Xo(t) {
      var n = t.parent;
      n !== null && Xo(n), Ka(t);
    }
    function ao(t, n) {
      nn(t);
      var l = t.parent;
      if (l === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      l.depth === n.depth ? nr(l, n) : ao(l, n);
    }
    function qa(t, n) {
      var l = n.parent;
      if (l === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      t.depth === l.depth ? nr(t, l) : qa(t, l), Ka(n);
    }
    function io(t) {
      var n = rn, l = t;
      n !== l && (n === null ? Xo(l) : l === null ? Qo(n) : n.depth === l.depth ? nr(n, l) : n.depth > l.depth ? ao(n, l) : qa(n, l), rn = l);
    }
    function ji(t, n) {
      var l;
      l = t._currentValue, t._currentValue = n, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Ar && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Ar;
      var f = rn, v = {
        parent: f,
        depth: f === null ? 0 : f.depth + 1,
        context: t,
        parentValue: l,
        value: n
      };
      return rn = v, v;
    }
    function _i(t) {
      var n = rn;
      if (n === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      n.context !== t && g("The parent context is not the expected context. This is probably a bug in React.");
      {
        var l = n.parentValue;
        l === El ? n.context._currentValue = n.context._defaultValue : n.context._currentValue = l, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Ar && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Ar;
      }
      return rn = n.parent;
    }
    function Jo() {
      return rn;
    }
    function lo(t) {
      var n = t._currentValue;
      return n;
    }
    function ei(t) {
      return t._reactInternals;
    }
    function Il(t, n) {
      t._reactInternals = n;
    }
    var On = {}, Ko = {}, ti, qo, ea, so, ta, jn, uo, ra, _n;
    {
      ti = /* @__PURE__ */ new Set(), qo = /* @__PURE__ */ new Set(), ea = /* @__PURE__ */ new Set(), uo = /* @__PURE__ */ new Set(), so = /* @__PURE__ */ new Set(), ra = /* @__PURE__ */ new Set(), _n = /* @__PURE__ */ new Set();
      var na = /* @__PURE__ */ new Set();
      jn = function(t, n) {
        if (!(t === null || typeof t == "function")) {
          var l = n + "_" + t;
          na.has(l) || (na.add(l), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", n, t));
        }
      }, ta = function(t, n) {
        if (n === void 0) {
          var l = Ze(t) || "Component";
          so.has(l) || (so.add(l), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", l));
        }
      };
    }
    function oa(t, n) {
      {
        var l = t.constructor, f = l && Ze(l) || "ReactClass", v = f + "." + n;
        if (On[v])
          return;
        g(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, n, n, f), On[v] = !0;
      }
    }
    var aa = {
      isMounted: function(t) {
        return !1;
      },
      enqueueSetState: function(t, n, l) {
        var f = ei(t);
        f.queue === null ? oa(t, "setState") : (f.queue.push(n), l != null && jn(l, "setState"));
      },
      enqueueReplaceState: function(t, n, l) {
        var f = ei(t);
        f.replace = !0, f.queue = [n], l != null && jn(l, "setState");
      },
      enqueueForceUpdate: function(t, n) {
        var l = ei(t);
        l.queue === null ? oa(t, "forceUpdate") : n != null && jn(n, "setState");
      }
    };
    function Li(t, n, l, f, v) {
      var b = l(v, f);
      ta(n, b);
      var w = b == null ? f : Ot({}, f, b);
      return w;
    }
    function Fi(t, n, l) {
      var f = tn, v = t.contextType;
      if ("contextType" in t) {
        var b = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === Ho && v._context === void 0
        );
        if (!b && !_n.has(t)) {
          _n.add(t);
          var w = "";
          v === void 0 ? w = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? w = " However, it is set to a " + typeof v + "." : v.$$typeof === Wo ? w = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? w = " Did you accidentally pass the Context.Consumer instead?" : w = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ze(t) || "Component", w);
        }
      }
      typeof v == "object" && v !== null ? f = lo(v) : f = l;
      var A = new t(n, f);
      {
        if (typeof t.getDerivedStateFromProps == "function" && (A.state === null || A.state === void 0)) {
          var e = Ze(t) || "Component";
          ti.has(e) || (ti.add(e), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", e, A.state === null ? "null" : "undefined", e));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof A.getSnapshotBeforeUpdate == "function") {
          var r = null, i = null, s = null;
          if (typeof A.componentWillMount == "function" && A.componentWillMount.__suppressDeprecationWarning !== !0 ? r = "componentWillMount" : typeof A.UNSAFE_componentWillMount == "function" && (r = "UNSAFE_componentWillMount"), typeof A.componentWillReceiveProps == "function" && A.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? i = "componentWillReceiveProps" : typeof A.UNSAFE_componentWillReceiveProps == "function" && (i = "UNSAFE_componentWillReceiveProps"), typeof A.componentWillUpdate == "function" && A.componentWillUpdate.__suppressDeprecationWarning !== !0 ? s = "componentWillUpdate" : typeof A.UNSAFE_componentWillUpdate == "function" && (s = "UNSAFE_componentWillUpdate"), r !== null || i !== null || s !== null) {
            var d = Ze(t) || "Component", S = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            ea.has(d) || (ea.add(d), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, d, S, r !== null ? `
  ` + r : "", i !== null ? `
  ` + i : "", s !== null ? `
  ` + s : ""));
          }
        }
      }
      return A;
    }
    function zi(t, n, l) {
      {
        var f = Ze(n) || "Component", v = t.render;
        v || (n.prototype && typeof n.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", f) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", f)), t.getInitialState && !t.getInitialState.isReactClassApproved && !t.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", f), t.getDefaultProps && !t.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", f), t.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", f), t.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", f), t.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", f), n.contextType && n.contextTypes && !ra.has(n) && (ra.add(n), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", f)), typeof t.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", f), n.prototype && n.prototype.isPureReactComponent && typeof t.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ze(n) || "A pure component"), typeof t.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", f), typeof t.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", f), typeof t.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", f), typeof t.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", f);
        var b = t.props !== l;
        t.props !== void 0 && b && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", f, f), t.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", f, f), typeof t.getSnapshotBeforeUpdate == "function" && typeof t.componentDidUpdate != "function" && !qo.has(n) && (qo.add(n), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ze(n))), typeof t.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", f), typeof t.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", f), typeof n.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", f);
        var w = t.state;
        w && (typeof w != "object" || cr(w)) && g("%s.state: must be set to an object or null", f), typeof t.getChildContext == "function" && typeof n.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", f);
      }
    }
    function Ml(t, n) {
      var l = n.state;
      if (typeof n.componentWillMount == "function") {
        if (n.componentWillMount.__suppressDeprecationWarning !== !0) {
          var f = Ze(t) || "Unknown";
          Ko[f] || (ee(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            f
          ), Ko[f] = !0);
        }
        n.componentWillMount();
      }
      typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), l !== n.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ze(t) || "Component"), aa.enqueueReplaceState(n, n.state, null));
    }
    function Dl(t, n, l, f) {
      if (t.queue !== null && t.queue.length > 0) {
        var v = t.queue, b = t.replace;
        if (t.queue = null, t.replace = !1, b && v.length === 1)
          n.state = v[0];
        else {
          for (var w = b ? v[0] : n.state, A = !0, e = b ? 1 : 0; e < v.length; e++) {
            var r = v[e], i = typeof r == "function" ? r.call(n, w, l, f) : r;
            i != null && (A ? (A = !1, w = Ot({}, w, i)) : Ot(w, i));
          }
          n.state = w;
        }
      } else
        t.queue = null;
    }
    function Ui(t, n, l, f) {
      zi(t, n, l);
      var v = t.state !== void 0 ? t.state : null;
      t.updater = aa, t.props = l, t.state = v;
      var b = {
        queue: [],
        replace: !1
      };
      Il(t, b);
      var w = n.contextType;
      if (typeof w == "object" && w !== null ? t.context = lo(w) : t.context = f, t.state === l) {
        var A = Ze(n) || "Component";
        uo.has(A) || (uo.add(A), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", A));
      }
      var e = n.getDerivedStateFromProps;
      typeof e == "function" && (t.state = Li(t, n, e, v, l)), typeof n.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function" && (typeof t.UNSAFE_componentWillMount == "function" || typeof t.componentWillMount == "function") && (Ml(n, t), Dl(b, t, l, f));
    }
    var Rl = {
      id: 1,
      overflow: ""
    };
    function Al(t) {
      var n = t.overflow, l = t.id, f = l & ~Pl(l);
      return f.toString(32) + n;
    }
    function ia(t, n, l) {
      var f = t.id, v = t.overflow, b = la(f) - 1, w = f & ~(1 << b), A = l + 1, e = la(n) + b;
      if (e > 30) {
        var r = b - b % 5, i = (1 << r) - 1, s = (w & i).toString(32), d = w >> r, S = b - r, x = la(n) + S, R = A << S, z = R | d, J = s + v;
        return {
          id: 1 << x | z,
          overflow: J
        };
      } else {
        var oe = A << b, ye = oe | w, We = v;
        return {
          id: 1 << e | ye,
          overflow: We
        };
      }
    }
    function la(t) {
      return 32 - ri(t);
    }
    function Pl(t) {
      return 1 << la(t) - 1;
    }
    var ri = Math.clz32 ? Math.clz32 : Ol, sa = Math.log, Nl = Math.LN2;
    function Ol(t) {
      var n = t >>> 0;
      return n === 0 ? 32 : 31 - (sa(n) / Nl | 0) | 0;
    }
    function jl(t, n) {
      return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n;
    }
    var _l = typeof Object.is == "function" ? Object.is : jl, vr = null, ni = null, ua = null, Me = null, on = !1, an = !1, Oe = 0, jt = null, ln = 0, ca = 25, it = !1, gr;
    function sn() {
      if (vr === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return it && g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), vr;
    }
    function or(t, n) {
      if (n === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", gr), !1;
      t.length !== n.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, gr, "[" + t.join(", ") + "]", "[" + n.join(", ") + "]");
      for (var l = 0; l < n.length && l < t.length; l++)
        if (!_l(t[l], n[l]))
          return !1;
      return !0;
    }
    function un() {
      if (ln > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function mr() {
      return Me === null ? ua === null ? (on = !1, ua = Me = un()) : (on = !0, Me = ua) : Me.next === null ? (on = !1, Me = Me.next = un()) : (on = !0, Me = Me.next), Me;
    }
    function Ll(t, n) {
      vr = n, ni = t, it = !1, Oe = 0;
    }
    function Bi(t, n, l, f) {
      for (; an; )
        an = !1, Oe = 0, ln += 1, Me = null, l = t(n, f);
      return oi(), l;
    }
    function fa() {
      var t = Oe !== 0;
      return t;
    }
    function oi() {
      it = !1, vr = null, ni = null, an = !1, ua = null, ln = 0, jt = null, Me = null;
    }
    function Fl(t) {
      return it && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), lo(t);
    }
    function Wi(t) {
      return gr = "useContext", sn(), lo(t);
    }
    function co(t, n) {
      return typeof n == "function" ? n(t) : n;
    }
    function zl(t) {
      return gr = "useState", Hi(
        co,
        // useReducer has a special case to support lazy useState initializers
        t
      );
    }
    function Hi(t, n, l) {
      if (t !== co && (gr = "useReducer"), vr = sn(), Me = mr(), on) {
        var f = Me.queue, v = f.dispatch;
        if (jt !== null) {
          var b = jt.get(f);
          if (b !== void 0) {
            jt.delete(f);
            var w = Me.memoizedState, A = b;
            do {
              var e = A.action;
              it = !0, w = t(w, e), it = !1, A = A.next;
            } while (A !== null);
            return Me.memoizedState = w, [w, v];
          }
        }
        return [Me.memoizedState, v];
      } else {
        it = !0;
        var r;
        t === co ? r = typeof n == "function" ? n() : n : r = l !== void 0 ? l(n) : n, it = !1, Me.memoizedState = r;
        var i = Me.queue = {
          last: null,
          dispatch: null
        }, s = i.dispatch = Vi.bind(null, vr, i);
        return [Me.memoizedState, s];
      }
    }
    function da(t, n) {
      vr = sn(), Me = mr();
      var l = n === void 0 ? null : n;
      if (Me !== null) {
        var f = Me.memoizedState;
        if (f !== null && l !== null) {
          var v = f[1];
          if (or(l, v))
            return f[0];
        }
      }
      it = !0;
      var b = t();
      return it = !1, Me.memoizedState = [b, l], b;
    }
    function Ul(t) {
      vr = sn(), Me = mr();
      var n = Me.memoizedState;
      if (n === null) {
        var l = {
          current: t
        };
        return Object.seal(l), Me.memoizedState = l, l;
      } else
        return n;
    }
    function Yi(t, n) {
      gr = "useLayoutEffect", g("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Vi(t, n, l) {
      if (ln >= ca)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (t === vr) {
        an = !0;
        var f = {
          action: l,
          next: null
        };
        jt === null && (jt = /* @__PURE__ */ new Map());
        var v = jt.get(n);
        if (v === void 0)
          jt.set(n, f);
        else {
          for (var b = v; b.next !== null; )
            b = b.next;
          b.next = f;
        }
      }
    }
    function Bl(t, n) {
      return da(function() {
        return t;
      }, n);
    }
    function Wl(t, n, l) {
      return sn(), n(t._source);
    }
    function Hl(t, n, l) {
      if (l === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return l();
    }
    function Yl(t) {
      return sn(), t;
    }
    function Vl() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function $l() {
      return sn(), [!1, Vl];
    }
    function Zl() {
      var t = ni, n = Al(t.treeContext), l = ai;
      if (l === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var f = Oe++;
      return kr(l, n, f);
    }
    function pa() {
    }
    var $i = {
      readContext: Fl,
      useContext: Wi,
      useMemo: da,
      useReducer: Hi,
      useRef: Ul,
      useState: zl,
      useInsertionEffect: pa,
      useLayoutEffect: Yi,
      useCallback: Bl,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: pa,
      // Effects are not run in the server environment.
      useEffect: pa,
      // Debugging effect
      useDebugValue: pa,
      useDeferredValue: Yl,
      useTransition: $l,
      useId: Zl,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Wl,
      useSyncExternalStore: Hl
    }, ai = null;
    function fo(t) {
      ai = t;
    }
    function Zi(t) {
      try {
        var n = "", l = t;
        do {
          switch (l.tag) {
            case 0:
              n += to(l.type, null, null);
              break;
            case 1:
              n += Pi(l.type, null, null);
              break;
            case 2:
              n += Zo(l.type, null, null);
              break;
          }
          l = l.parent;
        } while (l);
        return n;
      } catch (f) {
        return `
Error generating stack: ` + f.message + `
` + f.stack;
      }
    }
    var po = V.ReactCurrentDispatcher, ha = V.ReactDebugCurrentFrame, ii = 0, Pr = 1, va = 2, ga = 3, cn = 4, Gi = 0, li = 1, fn = 2, Gl = 12800;
    function Qi(t) {
      return console.error(t), null;
    }
    function ar() {
    }
    function Ql(t, n, l, f, v, b, w, A, e) {
      var r = [], i = /* @__PURE__ */ new Set(), s = {
        destination: null,
        responseState: n,
        progressiveChunkSize: f === void 0 ? Gl : f,
        status: Gi,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: i,
        pingedTasks: r,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: v === void 0 ? Qi : v,
        onAllReady: b === void 0 ? ar : b,
        onShellReady: w === void 0 ? ar : w,
        onShellError: A === void 0 ? ar : A,
        onFatalError: e === void 0 ? ar : e
      }, d = ma(
        s,
        0,
        null,
        l,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      d.parentFlushed = !0;
      var S = si(s, t, null, d, i, tn, Oi, Rl);
      return r.push(S), s;
    }
    function Xl(t, n) {
      var l = t.pingedTasks;
      l.push(n), l.length === 1 && Te(function() {
        return So(t);
      });
    }
    function ho(t, n) {
      return {
        id: Gr,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: n,
        errorDigest: null
      };
    }
    function si(t, n, l, f, v, b, w, A) {
      t.allPendingTasks++, l === null ? t.pendingRootTasks++ : l.pendingTasks++;
      var e = {
        node: n,
        ping: function() {
          return Xl(t, e);
        },
        blockedBoundary: l,
        blockedSegment: f,
        abortSet: v,
        legacyContext: b,
        context: w,
        treeContext: A
      };
      return e.componentStack = null, v.add(e), e;
    }
    function ma(t, n, l, f, v, b) {
      return {
        status: ii,
        id: -1,
        // lazily assigned later
        index: n,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: f,
        boundary: l,
        lastPushedText: v,
        textEmbedded: b
      };
    }
    var yr = null;
    function vo() {
      return yr === null || yr.componentStack === null ? "" : Zi(yr.componentStack);
    }
    function Nr(t, n) {
      t.componentStack = {
        tag: 0,
        parent: t.componentStack,
        type: n
      };
    }
    function ir(t, n) {
      t.componentStack = {
        tag: 1,
        parent: t.componentStack,
        type: n
      };
    }
    function ui(t, n) {
      t.componentStack = {
        tag: 2,
        parent: t.componentStack,
        type: n
      };
    }
    function _t(t) {
      t.componentStack === null ? g("Unexpectedly popped too many stack frames. This is a bug in React.") : t.componentStack = t.componentStack.parent;
    }
    var Ln = null;
    function ci(t, n) {
      {
        var l;
        typeof n == "string" ? l = n : n && typeof n.message == "string" ? l = n.message : l = String(n);
        var f = Ln || vo();
        Ln = null, t.errorMessage = l, t.errorComponentStack = f;
      }
    }
    function Lt(t, n) {
      var l = t.onError(n);
      if (l != null && typeof l != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof l + '" instead');
      return l;
    }
    function Or(t, n) {
      var l = t.onShellError;
      l(n);
      var f = t.onFatalError;
      f(n), t.destination !== null ? (t.status = fn, le(t.destination, n)) : (t.status = li, t.fatalError = n);
    }
    function fi(t, n, l) {
      Nr(n, "Suspense");
      var f = n.blockedBoundary, v = n.blockedSegment, b = l.fallback, w = l.children, A = /* @__PURE__ */ new Set(), e = ho(t, A), r = v.chunks.length, i = ma(
        t,
        r,
        e,
        v.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      v.children.push(i), v.lastPushedText = !1;
      var s = ma(
        t,
        0,
        null,
        v.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      s.parentFlushed = !0, n.blockedBoundary = e, n.blockedSegment = s;
      try {
        if (bi(t, n, w), Ir(s.chunks, t.responseState, s.lastPushedText, s.textEmbedded), s.status = Pr, ba(e, s), e.pendingTasks === 0) {
          _t(n);
          return;
        }
      } catch (S) {
        s.status = cn, e.forceClientRender = !0, e.errorDigest = Lt(t, S), ci(e, S);
      } finally {
        n.blockedBoundary = f, n.blockedSegment = v;
      }
      var d = si(t, b, f, i, A, n.legacyContext, n.context, n.treeContext);
      d.componentStack = n.componentStack, t.pingedTasks.push(d), _t(n);
    }
    function go(t, n, l, f) {
      Nr(n, l);
      var v = n.blockedSegment, b = Vn(v.chunks, l, f, t.responseState, v.formatContext);
      v.lastPushedText = !1;
      var w = v.formatContext;
      v.formatContext = Jt(w, l, f), bi(t, n, b), v.formatContext = w, Ro(v.chunks, l), v.lastPushedText = !1, _t(n);
    }
    function ya(t) {
      return t.prototype && t.prototype.isReactComponent;
    }
    function Xi(t, n, l, f, v) {
      var b = {};
      Ll(n, b);
      var w = l(f, v);
      return Bi(l, f, w, v);
    }
    function Ji(t, n, l, f, v) {
      var b = l.render();
      l.props !== v && (yo || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ze(f) || "a component"), yo = !0);
      {
        var w = f.childContextTypes;
        if (w != null) {
          var A = n.legacyContext, e = Ja(l, f, A, w);
          n.legacyContext = e, kt(t, n, b), n.legacyContext = A;
          return;
        }
      }
      kt(t, n, b);
    }
    function Jl(t, n, l, f) {
      ui(n, l);
      var v = Xa(l, n.legacyContext), b = Fi(l, f, v);
      Ui(b, l, f, v), Ji(t, n, b, l, f), _t(n);
    }
    var di = {}, mo = {}, Ki = {}, pi = {}, yo = !1, hi = !1, vi = !1, gi = !1;
    function qi(t, n, l, f) {
      var v;
      if (v = Xa(l, n.legacyContext), ir(n, l), l.prototype && typeof l.prototype.render == "function") {
        var b = Ze(l) || "Unknown";
        di[b] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", b, b), di[b] = !0);
      }
      var w = Xi(t, n, l, f, v), A = fa();
      if (typeof w == "object" && w !== null && typeof w.render == "function" && w.$$typeof === void 0) {
        var e = Ze(l) || "Unknown";
        mo[e] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", e, e, e), mo[e] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof w == "object" && w !== null && typeof w.render == "function" && w.$$typeof === void 0
      ) {
        {
          var r = Ze(l) || "Unknown";
          mo[r] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", r, r, r), mo[r] = !0);
        }
        Ui(w, l, f, v), Ji(t, n, w, l, f);
      } else if (el(l), A) {
        var i = n.treeContext, s = 1, d = 0;
        n.treeContext = ia(i, s, d);
        try {
          kt(t, n, w);
        } finally {
          n.treeContext = i;
        }
      } else
        kt(t, n, w);
      _t(n);
    }
    function el(t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), typeof t.getDerivedStateFromProps == "function") {
          var n = Ze(t) || "Unknown";
          pi[n] || (g("%s: Function components do not support getDerivedStateFromProps.", n), pi[n] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var l = Ze(t) || "Unknown";
          Ki[l] || (g("%s: Function components do not support contextType.", l), Ki[l] = !0);
        }
      }
    }
    function mi(t, n) {
      if (t && t.defaultProps) {
        var l = Ot({}, n), f = t.defaultProps;
        for (var v in f)
          l[v] === void 0 && (l[v] = f[v]);
        return l;
      }
      return n;
    }
    function Kl(t, n, l, f, v) {
      ir(n, l.render);
      var b = Xi(t, n, l.render, f, v), w = fa();
      if (w) {
        var A = n.treeContext, e = 1, r = 0;
        n.treeContext = ia(A, e, r);
        try {
          kt(t, n, b);
        } finally {
          n.treeContext = A;
        }
      } else
        kt(t, n, b);
      _t(n);
    }
    function ql(t, n, l, f, v) {
      var b = l.type, w = mi(b, f);
      yi(t, n, b, w, v);
    }
    function tl(t, n, l, f) {
      l._context === void 0 ? l !== l.Consumer && (gi || (gi = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : l = l._context;
      var v = f.children;
      typeof v != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var b = lo(l), w = v(b);
      kt(t, n, w);
    }
    function es(t, n, l, f) {
      var v = l._context, b = f.value, w = f.children, A;
      A = n.context, n.context = ji(v, b), kt(t, n, w), n.context = _i(v), A !== n.context && g("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function ts(t, n, l, f, v) {
      Nr(n, "Lazy");
      var b = l._payload, w = l._init, A = w(b), e = mi(A, f);
      yi(t, n, A, e, v), _t(n);
    }
    function yi(t, n, l, f, v) {
      if (typeof l == "function")
        if (ya(l)) {
          Jl(t, n, l, f);
          return;
        } else {
          qi(t, n, l, f);
          return;
        }
      if (typeof l == "string") {
        go(t, n, l, f);
        return;
      }
      switch (l) {
        case Vo:
        case Fa:
        case Ci:
        case _a:
        case Et: {
          kt(t, n, f.children);
          return;
        }
        case Kn: {
          Nr(n, "SuspenseList"), kt(t, n, f.children), _t(n);
          return;
        }
        case La:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case Jn: {
          fi(t, n, f);
          return;
        }
      }
      if (typeof l == "object" && l !== null)
        switch (l.$$typeof) {
          case Yo: {
            Kl(t, n, l, f, v);
            return;
          }
          case qn: {
            ql(t, n, l, f, v);
            return;
          }
          case Wo: {
            es(t, n, l, f);
            return;
          }
          case Ho: {
            tl(t, n, l, f);
            return;
          }
          case Rn: {
            ts(t, n, l, f);
            return;
          }
        }
      var b = "";
      throw (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (l == null ? l : typeof l) + "." + b));
    }
    function rs(t, n) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      t[Symbol.toStringTag] === "Generator" && (hi || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), hi = !0), t.entries === n && (vi || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), vi = !0);
    }
    function kt(t, n, l) {
      try {
        return Si(t, n, l);
      } catch (f) {
        throw typeof f == "object" && f !== null && typeof f.then == "function" || (Ln = Ln !== null ? Ln : vo()), f;
      }
    }
    function Si(t, n, l) {
      if (n.node = l, typeof l == "object" && l !== null) {
        switch (l.$$typeof) {
          case Tl: {
            var f = l, v = f.type, b = f.props, w = f.ref;
            yi(t, n, v, b, w);
            return;
          }
          case ki:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Rn: {
            var A = l, e = A._payload, r = A._init, i;
            try {
              i = r(e);
            } catch (oe) {
              throw typeof oe == "object" && oe !== null && typeof oe.then == "function" && Nr(n, "Lazy"), oe;
            }
            kt(t, n, i);
            return;
          }
        }
        if (cr(l)) {
          rl(t, n, l);
          return;
        }
        var s = Cl(l);
        if (s) {
          rs(l, s);
          var d = s.call(l);
          if (d) {
            var S = d.next();
            if (!S.done) {
              var x = [];
              do
                x.push(S.value), S = d.next();
              while (!S.done);
              rl(t, n, x);
              return;
            }
            return;
          }
        }
        var R = Object.prototype.toString.call(l);
        throw new Error("Objects are not valid as a React child (found: " + (R === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : R) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof l == "string") {
        var z = n.blockedSegment;
        z.lastPushedText = Cr(n.blockedSegment.chunks, l, t.responseState, z.lastPushedText);
        return;
      }
      if (typeof l == "number") {
        var J = n.blockedSegment;
        J.lastPushedText = Cr(n.blockedSegment.chunks, "" + l, t.responseState, J.lastPushedText);
        return;
      }
      typeof l == "function" && g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function rl(t, n, l) {
      for (var f = l.length, v = 0; v < f; v++) {
        var b = n.treeContext;
        n.treeContext = ia(b, f, v);
        try {
          bi(t, n, l[v]);
        } finally {
          n.treeContext = b;
        }
      }
    }
    function Ct(t, n, l) {
      var f = n.blockedSegment, v = f.chunks.length, b = ma(
        t,
        v,
        null,
        f.formatContext,
        // Adopt the parent segment's leading text embed
        f.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      f.children.push(b), f.lastPushedText = !1;
      var w = si(t, n.node, n.blockedBoundary, b, n.abortSet, n.legacyContext, n.context, n.treeContext);
      n.componentStack !== null && (w.componentStack = n.componentStack.parent);
      var A = w.ping;
      l.then(A, A);
    }
    function bi(t, n, l) {
      var f = n.blockedSegment.formatContext, v = n.legacyContext, b = n.context, w = null;
      w = n.componentStack;
      try {
        return kt(t, n, l);
      } catch (A) {
        if (oi(), typeof A == "object" && A !== null && typeof A.then == "function") {
          Ct(t, n, A), n.blockedSegment.formatContext = f, n.legacyContext = v, n.context = b, io(b), n.componentStack = w;
          return;
        } else
          throw n.blockedSegment.formatContext = f, n.legacyContext = v, n.context = b, io(b), n.componentStack = w, A;
      }
    }
    function nl(t, n, l, f) {
      var v = Lt(t, f);
      if (n === null ? Or(t, f) : (n.pendingTasks--, n.forceClientRender || (n.forceClientRender = !0, n.errorDigest = v, ci(n, f), n.parentFlushed && t.clientRenderedBoundaries.push(n))), t.allPendingTasks--, t.allPendingTasks === 0) {
        var b = t.onAllReady;
        b();
      }
    }
    function ns(t) {
      var n = this, l = t.blockedBoundary, f = t.blockedSegment;
      f.status = ga, ol(n, l, f);
    }
    function Sa(t, n, l) {
      var f = t.blockedBoundary, v = t.blockedSegment;
      if (v.status = ga, f === null)
        n.allPendingTasks--, n.status !== fn && (n.status = fn, n.destination !== null && xe(n.destination));
      else {
        if (f.pendingTasks--, !f.forceClientRender) {
          f.forceClientRender = !0;
          var b = l === void 0 ? new Error("The render was aborted by the server without a reason.") : l;
          f.errorDigest = n.onError(b);
          {
            var w = "The server did not finish this Suspense boundary: ";
            b && typeof b.message == "string" ? b = w + b.message : b = w + String(b);
            var A = yr;
            yr = t;
            try {
              ci(f, b);
            } finally {
              yr = A;
            }
          }
          f.parentFlushed && n.clientRenderedBoundaries.push(f);
        }
        if (f.fallbackAbortableTasks.forEach(function(r) {
          return Sa(r, n, l);
        }), f.fallbackAbortableTasks.clear(), n.allPendingTasks--, n.allPendingTasks === 0) {
          var e = n.onAllReady;
          e();
        }
      }
    }
    function ba(t, n) {
      if (n.chunks.length === 0 && n.children.length === 1 && n.children[0].boundary === null) {
        var l = n.children[0];
        l.id = n.id, l.parentFlushed = !0, l.status === Pr && ba(t, l);
      } else {
        var f = t.completedSegments;
        f.push(n);
      }
    }
    function ol(t, n, l) {
      if (n === null) {
        if (l.parentFlushed) {
          if (t.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          t.completedRootSegment = l;
        }
        if (t.pendingRootTasks--, t.pendingRootTasks === 0) {
          t.onShellError = ar;
          var f = t.onShellReady;
          f();
        }
      } else if (n.pendingTasks--, !n.forceClientRender) {
        if (n.pendingTasks === 0)
          l.parentFlushed && l.status === Pr && ba(n, l), n.parentFlushed && t.completedBoundaries.push(n), n.fallbackAbortableTasks.forEach(ns, t), n.fallbackAbortableTasks.clear();
        else if (l.parentFlushed && l.status === Pr) {
          ba(n, l);
          var v = n.completedSegments;
          v.length === 1 && n.parentFlushed && t.partialBoundaries.push(n);
        }
      }
      if (t.allPendingTasks--, t.allPendingTasks === 0) {
        var b = t.onAllReady;
        b();
      }
    }
    function al(t, n) {
      var l = n.blockedSegment;
      if (l.status === ii) {
        io(n.context);
        var f = null;
        f = yr, yr = n;
        try {
          kt(t, n, n.node), Ir(l.chunks, t.responseState, l.lastPushedText, l.textEmbedded), n.abortSet.delete(n), l.status = Pr, ol(t, n.blockedBoundary, l);
        } catch (b) {
          if (oi(), typeof b == "object" && b !== null && typeof b.then == "function") {
            var v = n.ping;
            b.then(v, v);
          } else
            n.abortSet.delete(n), l.status = cn, nl(t, n.blockedBoundary, l, b);
        } finally {
          yr = f;
        }
      }
    }
    function So(t) {
      if (t.status !== fn) {
        var n = Jo(), l = po.current;
        po.current = $i;
        var f;
        f = ha.getCurrentStack, ha.getCurrentStack = vo;
        var v = ai;
        fo(t.responseState);
        try {
          var b = t.pingedTasks, w;
          for (w = 0; w < b.length; w++) {
            var A = b[w];
            al(t, A);
          }
          b.splice(0, w), t.destination !== null && wa(t, t.destination);
        } catch (e) {
          Lt(t, e), Or(t, e);
        } finally {
          fo(v), po.current = l, ha.getCurrentStack = f, l === $i && io(n);
        }
      }
    }
    function bo(t, n, l) {
      switch (l.parentFlushed = !0, l.status) {
        case ii: {
          var f = l.id = t.nextSegmentId++;
          return l.lastPushedText = !1, l.textEmbedded = !1, xn(n, t.responseState, f);
        }
        case Pr: {
          l.status = va;
          for (var v = !0, b = l.chunks, w = 0, A = l.children, e = 0; e < A.length; e++) {
            for (var r = A[e]; w < r.index; w++)
              j(n, b[w]);
            v = xa(t, n, r);
          }
          for (; w < b.length - 1; w++)
            j(n, b[w]);
          return w < b.length && (v = ce(n, b[w])), v;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function xa(t, n, l) {
      var f = l.boundary;
      if (f === null)
        return bo(t, n, l);
      if (f.parentFlushed = !0, f.forceClientRender)
        return pt(n, t.responseState, f.errorDigest, f.errorMessage, f.errorComponentStack), bo(t, n, l), Aa(n, t.responseState);
      if (f.pendingTasks > 0) {
        f.rootSegmentID = t.nextSegmentId++, f.completedSegments.length > 0 && t.partialBoundaries.push(f);
        var v = f.id = Qr(t.responseState);
        return En(n, t.responseState, v), bo(t, n, l), kn(n, t.responseState);
      } else {
        if (f.byteSize > t.progressiveChunkSize)
          return f.rootSegmentID = t.nextSegmentId++, t.completedBoundaries.push(f), En(n, t.responseState, f.id), bo(t, n, l), kn(n, t.responseState);
        Po(n, t.responseState);
        var b = f.completedSegments;
        if (b.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var w = b[0];
        return xa(t, n, w), No(n, t.responseState);
      }
    }
    function il(t, n, l) {
      return Ti(n, t.responseState, l.id, l.errorDigest, l.errorMessage, l.errorComponentStack);
    }
    function xo(t, n, l) {
      return be(n, t.responseState, l.formatContext, l.id), xa(t, n, l), ze(n, l.formatContext);
    }
    function wo(t, n, l) {
      for (var f = l.completedSegments, v = 0; v < f.length; v++) {
        var b = f[v];
        xi(t, n, l, b);
      }
      return f.length = 0, Pa(n, t.responseState, l.id, l.rootSegmentID);
    }
    function os(t, n, l) {
      for (var f = l.completedSegments, v = 0; v < f.length; v++) {
        var b = f[v];
        if (!xi(t, n, l, b))
          return v++, f.splice(0, v), !1;
      }
      return f.splice(0, v), !0;
    }
    function xi(t, n, l, f) {
      if (f.status === va)
        return !0;
      var v = f.id;
      if (v === -1) {
        var b = f.id = l.rootSegmentID;
        if (b === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return xo(t, n, f);
      } else
        return xo(t, n, f), vl(n, t.responseState, v);
    }
    function wa(t, n) {
      ve();
      try {
        var l = t.completedRootSegment;
        l !== null && t.pendingRootTasks === 0 && (xa(t, n, l), t.completedRootSegment = null, Ma(n, t.responseState));
        var f = t.clientRenderedBoundaries, v;
        for (v = 0; v < f.length; v++) {
          var b = f[v];
          il(t, n, b);
        }
        f.splice(0, v);
        var w = t.completedBoundaries;
        for (v = 0; v < w.length; v++) {
          var A = w[v];
          wo(t, n, A);
        }
        w.splice(0, v), Re(n), ve(n);
        var e = t.partialBoundaries;
        for (v = 0; v < e.length; v++) {
          var r = e[v];
          if (!os(t, n, r)) {
            t.destination = null, v++, e.splice(0, v);
            return;
          }
        }
        e.splice(0, v);
        var i = t.completedBoundaries;
        for (v = 0; v < i.length; v++) {
          var s = i[v];
          wo(t, n, s);
        }
        i.splice(0, v);
      } finally {
        Re(n), t.allPendingTasks === 0 && t.pingedTasks.length === 0 && t.clientRenderedBoundaries.length === 0 && t.completedBoundaries.length === 0 && (t.abortableTasks.size !== 0 && g("There was still abortable task at the root when we closed. This is a bug in React."), xe(n));
      }
    }
    function as(t) {
      Te(function() {
        return So(t);
      });
    }
    function ll(t, n) {
      if (t.status === li) {
        t.status = fn, le(n, t.fatalError);
        return;
      }
      if (t.status !== fn && t.destination === null) {
        t.destination = n;
        try {
          wa(t, n);
        } catch (l) {
          Lt(t, l), Or(t, l);
        }
      }
    }
    function Ta(t, n) {
      try {
        var l = t.abortableTasks;
        l.forEach(function(f) {
          return Sa(f, t, n);
        }), l.clear(), t.destination !== null && wa(t, t.destination);
      } catch (f) {
        Lt(t, f), Or(t, f);
      }
    }
    function is(t, n) {
      return new Promise(function(l, f) {
        var v, b, w = new Promise(function(d, S) {
          b = d, v = S;
        });
        function A() {
          var d = new ReadableStream(
            {
              type: "bytes",
              pull: function(S) {
                ll(r, S);
              },
              cancel: function(S) {
                Ta(r);
              }
            },
            // $FlowFixMe size() methods are not allowed on byte streams.
            {
              highWaterMark: 0
            }
          );
          d.allReady = w, l(d);
        }
        function e(d) {
          w.catch(function() {
          }), f(d);
        }
        var r = Ql(t, dr(n ? n.identifierPrefix : void 0, n ? n.nonce : void 0, n ? n.bootstrapScriptContent : void 0, n ? n.bootstrapScripts : void 0, n ? n.bootstrapModules : void 0), Wt(n ? n.namespaceURI : void 0), n ? n.progressiveChunkSize : void 0, n ? n.onError : void 0, b, A, e, v);
        if (n && n.signal) {
          var i = n.signal, s = function() {
            Ta(r, i.reason), i.removeEventListener("abort", s);
          };
          i.addEventListener("abort", s);
        }
        as(r);
      });
    }
    pl.renderToReadableStream = is, pl.version = O;
  }()), pl;
}
var Co, gs;
process.env.NODE_ENV === "production" ? (Co = nu(), gs = ou()) : (Co = au(), gs = iu());
Io.version = Co.version;
Io.renderToString = Co.renderToString;
Io.renderToStaticMarkup = Co.renderToStaticMarkup;
Io.renderToNodeStream = Co.renderToNodeStream;
Io.renderToStaticNodeStream = Co.renderToStaticNodeStream;
Io.renderToReadableStream = gs.renderToReadableStream;
var ps = { exports: {} };
/**
 * SVGInjector v1.1.3 - Fast, caching, dynamic inline SVG DOM injection library
 * https://github.com/iconic/SVGInjector
 *
 * Copyright (c) 2014-2015 Waybury <hello@waybury.com>
 * @license MIT
 */
var Ps;
function lu() {
  return Ps || (Ps = 1, function(P, O) {
    (function(V, ee) {
      var g = V.location.protocol === "file:", Q = ee.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1");
      function Te(_) {
        _ = _.split(" ");
        for (var Y = {}, k = _.length, X = []; k--; )
          Y.hasOwnProperty(_[k]) || (Y[_[k]] = 1, X.unshift(_[k]));
        return X.join(" ");
      }
      var K = Array.prototype.forEach || function(_, Y) {
        if (this === void 0 || this === null || typeof _ != "function")
          throw new TypeError();
        var k, X = this.length >>> 0;
        for (k = 0; k < X; ++k)
          k in this && _.call(Y, this[k], k, this);
      }, E = {}, D = 0, ve = [], j = [], ce = {}, Re = function(_) {
        return _.cloneNode(!0);
      }, xe = function(_, Y) {
        j[_] = j[_] || [], j[_].push(Y);
      }, ke = function(_) {
        for (var Y = 0, k = j[_].length; Y < k; Y++)
          (function(X) {
            setTimeout(function() {
              j[_][X](Re(E[_]));
            }, 0);
          })(Y);
      }, $ = function(_, Y) {
        if (E[_] !== void 0)
          E[_] instanceof SVGSVGElement ? Y(Re(E[_])) : xe(_, Y);
        else {
          if (!V.XMLHttpRequest)
            return Y("Browser does not support XMLHttpRequest"), !1;
          E[_] = {}, xe(_, Y);
          var k = new XMLHttpRequest();
          k.onreadystatechange = function() {
            if (k.readyState === 4) {
              if (k.status === 404 || k.responseXML === null)
                return Y("Unable to load SVG file: " + _), g && Y("Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver."), Y(), !1;
              if (k.status === 200 || g && k.status === 0) {
                if (k.responseXML instanceof Document)
                  E[_] = k.responseXML.documentElement;
                else if (DOMParser && DOMParser instanceof Function) {
                  var X;
                  try {
                    var fe = new DOMParser();
                    X = fe.parseFromString(k.responseText, "text/xml");
                  } catch {
                    X = void 0;
                  }
                  if (!X || X.getElementsByTagName("parsererror").length)
                    return Y("Unable to parse SVG file: " + _), !1;
                  E[_] = X.documentElement;
                }
                ke(_);
              } else
                return Y("There was a problem injecting the SVG: " + k.status + " " + k.statusText), !1;
            }
          }, k.open("GET", _), k.overrideMimeType && k.overrideMimeType("text/xml"), k.send();
        }
      }, F = function(_, Y, k, X) {
        var fe = _.getAttribute("data-src") || _.getAttribute("src");
        if (!/\.svg/i.test(fe)) {
          X("Attempted to inject a file with a non-svg extension: " + fe);
          return;
        }
        if (!Q) {
          var De = _.getAttribute("data-fallback") || _.getAttribute("data-png");
          De ? (_.setAttribute("src", De), X(null)) : k ? (_.setAttribute("src", k + "/" + fe.split("/").pop().replace(".svg", ".png")), X(null)) : X("This browser does not support SVG and no PNG fallback was defined.");
          return;
        }
        ve.indexOf(_) === -1 && (ve.push(_), _.setAttribute("src", ""), $(fe, function(ae) {
          if (typeof ae > "u" || typeof ae == "string")
            return X(ae), !1;
          var Pe = _.getAttribute("id");
          Pe && ae.setAttribute("id", Pe);
          var Ne = _.getAttribute("title");
          Ne && ae.setAttribute("title", Ne);
          var Ue = [].concat(ae.getAttribute("class") || [], "injected-svg", _.getAttribute("class") || []).join(" ");
          ae.setAttribute("class", Te(Ue));
          var nt = _.getAttribute("style");
          nt && ae.setAttribute("style", nt);
          var Xe = [].filter.call(_.attributes, function(ue) {
            return /^data-\w[\w\-]*$/.test(ue.name);
          });
          K.call(Xe, function(ue) {
            ue.name && ue.value && ae.setAttribute(ue.name, ue.value);
          });
          var vt = {
            clipPath: ["clip-path"],
            "color-profile": ["color-profile"],
            cursor: ["cursor"],
            filter: ["filter"],
            linearGradient: ["fill", "stroke"],
            marker: ["marker", "marker-start", "marker-mid", "marker-end"],
            mask: ["mask"],
            pattern: ["fill", "stroke"],
            radialGradient: ["fill", "stroke"]
          }, Je, qe, et, Ve, U;
          Object.keys(vt).forEach(function(ue) {
            Je = ue, et = vt[ue], qe = ae.querySelectorAll("defs " + Je + "[id]");
            for (var Ee = 0, Z = qe.length; Ee < Z; Ee++) {
              Ve = qe[Ee].id, U = Ve + "-" + D;
              var Ce;
              K.call(et, function(Be) {
                Ce = ae.querySelectorAll("[" + Be + '*="' + Ve + '"]');
                for (var ct = 0, zt = Ce.length; ct < zt; ct++)
                  Ce[ct].setAttribute(Be, "url(#" + U + ")");
              }), qe[Ee].id = U;
            }
          }), ae.removeAttribute("xmlns:a");
          for (var W = ae.querySelectorAll("script"), q = [], ge, se, re = 0, te = W.length; re < te; re++)
            se = W[re].getAttribute("type"), (!se || se === "application/ecmascript" || se === "application/javascript") && (ge = W[re].innerText || W[re].textContent, q.push(ge), ae.removeChild(W[re]));
          if (q.length > 0 && (Y === "always" || Y === "once" && !ce[fe])) {
            for (var he = 0, Se = q.length; he < Se; he++)
              new Function(q[he])(V);
            ce[fe] = !0;
          }
          var me = ae.querySelectorAll("style");
          K.call(me, function(ue) {
            ue.textContent += "";
          }), _.parentNode.replaceChild(ae, _), delete ve[ve.indexOf(_)], _ = null, D++, X(ae);
        }));
      }, le = function(_, Y, k) {
        Y = Y || {};
        var X = Y.evalScripts || "always", fe = Y.pngFallback || !1, De = Y.each;
        if (_.length !== void 0) {
          var ae = 0;
          K.call(_, function(Pe) {
            F(Pe, X, fe, function(Ne) {
              De && typeof De == "function" && De(Ne), k && _.length === ++ae && k(ae);
            });
          });
        } else
          _ ? F(_, X, fe, function(Pe) {
            De && typeof De == "function" && De(Pe), k && k(1), _ = null;
          }) : k && k(0);
      };
      P.exports = le;
    })(window, document);
  }(ps)), ps.exports;
}
(function(P, O) {
  Object.defineProperty(O, "__esModule", {
    value: !0
  });
  var V = Object.assign || function(le) {
    for (var _ = 1; _ < arguments.length; _++) {
      var Y = arguments[_];
      for (var k in Y)
        Object.prototype.hasOwnProperty.call(Y, k) && (le[k] = Y[k]);
    }
    return le;
  }, ee = function() {
    function le(_, Y) {
      for (var k = 0; k < Y.length; k++) {
        var X = Y[k];
        X.enumerable = X.enumerable || !1, X.configurable = !0, "value" in X && (X.writable = !0), Object.defineProperty(_, X.key, X);
      }
    }
    return function(_, Y, k) {
      return Y && le(_.prototype, Y), k && le(_, k), _;
    };
  }(), g = ru, Q = ve(g), Te = G, K = ve(Te), E = Io, D = ve(E);
  function ve(le) {
    return le && le.__esModule ? le : { default: le };
  }
  function j(le, _) {
    var Y = {};
    for (var k in le)
      _.indexOf(k) >= 0 || Object.prototype.hasOwnProperty.call(le, k) && (Y[k] = le[k]);
    return Y;
  }
  function ce(le, _) {
    if (!(le instanceof _))
      throw new TypeError("Cannot call a class as a function");
  }
  function Re(le, _) {
    if (!le)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return _ && (typeof _ == "object" || typeof _ == "function") ? _ : le;
  }
  function xe(le, _) {
    if (typeof _ != "function" && _ !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof _);
    le.prototype = Object.create(_ && _.prototype, { constructor: { value: le, enumerable: !1, writable: !0, configurable: !0 } }), _ && (Object.setPrototypeOf ? Object.setPrototypeOf(le, _) : le.__proto__ = _);
  }
  var ke = typeof window < "u", $ = ke ? lu() : void 0, F = function(le) {
    xe(_, le);
    function _() {
      var Y, k, X, fe;
      ce(this, _);
      for (var De = arguments.length, ae = Array(De), Pe = 0; Pe < De; Pe++)
        ae[Pe] = arguments[Pe];
      return fe = (k = (X = Re(this, (Y = _.__proto__ || Object.getPrototypeOf(_)).call.apply(Y, [this].concat(ae))), X), X.refCallback = function(Ne) {
        if (!Ne) {
          X.removeSVG();
          return;
        }
        X.container = Ne, X.renderSVG();
      }, k), Re(X, fe);
    }
    return ee(_, [{
      key: "renderSVG",
      value: function() {
        var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
        if (this.container instanceof Node) {
          var X = k.evalScripts, fe = k.onInjected, De = k.path, ae = k.svgClassName, Pe = k.svgStyle, Ne = document.createElement("div");
          Ne.innerHTML = D.default.renderToStaticMarkup(K.default.createElement(
            "div",
            null,
            K.default.createElement("div", { className: ae, "data-src": De, style: Pe })
          ));
          var Ue = this.container.appendChild(Ne.firstChild);
          $(Ue.firstChild, {
            each: fe,
            evalScripts: X
          });
        }
      }
    }, {
      key: "removeSVG",
      value: function() {
        this.container instanceof Node && this.container.firstChild instanceof Node && this.container.removeChild(this.container.firstChild);
      }
    }, {
      key: "componentWillReceiveProps",
      value: function(k) {
        this.removeSVG(), this.renderSVG(k);
      }
    }, {
      key: "shouldComponentUpdate",
      value: function() {
        return !1;
      }
    }, {
      key: "render",
      value: function() {
        var k = this.props;
        k.evalScripts, k.onInjected, k.path, k.svgClassName, k.svgStyle;
        var X = j(k, ["evalScripts", "onInjected", "path", "svgClassName", "svgStyle"]);
        return K.default.createElement("div", V({}, X, { ref: this.refCallback }));
      }
    }]), _;
  }(K.default.Component);
  F.defaultProps = {
    evalScripts: "never",
    onInjected: function() {
    },
    svgClassName: null,
    svgStyle: {}
  }, F.propTypes = {
    evalScripts: Q.default.oneOf(["always", "once", "never"]),
    onInjected: Q.default.func,
    path: Q.default.string.isRequired,
    svgClassName: Q.default.string,
    svgStyle: Q.default.object
  }, O.default = F, P.exports = O.default;
})(hs, hs.exports);
var su = hs.exports;
const uu = /* @__PURE__ */ Zs(su);
const cu = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMiA0SDEwVjExSDNWMTNIMTBWMjBIMTJWMTNIMTlWMTFIMTJWNFoiIGZpbGw9IiMyMDE4QjAiLz4NCjwvc3ZnPg0K", fu = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMy41NjMzIDRINy40MzY3NEw1Ljc3MDA3IDYuNzVIMlYxN0g2VjE1SDRWOC43NUg2Ljg5NjU5TDguNTYzMjYgNkgxMi40MzY3TDE0LjEwMzQgOC43NUgxN1YxMUgxOVY2Ljc1SDE1LjIyOTlMMTMuNTYzMyA0WiIgZmlsbD0iIzIwMThCMCIvPg0KPHBhdGggZD0iTTE3IDE5VjE3SDE1VjE1SDE3VjEzSDE5VjE1SDIxVjE3SDE5VjE5SDE3WiIgZmlsbD0iIzIwMThCMCIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSAxMi41QzE1IDE0Ljk4NTMgMTIuOTg1MyAxNyAxMC41IDE3QzguMDE0NzIgMTcgNiAxNC45ODUzIDYgMTIuNUM2IDEwLjAxNDcgOC4wMTQ3MiA4IDEwLjUgOEMxMi45ODUzIDggMTUgMTAuMDE0NyAxNSAxMi41Wk0xMyAxMi41QzEzIDEzLjg4MDcgMTEuODgwNyAxNSAxMC41IDE1QzkuMTE5MjkgMTUgOCAxMy44ODA3IDggMTIuNUM4IDExLjExOTMgOS4xMTkyOSAxMCAxMC41IDEwQzExLjg4MDcgMTAgMTMgMTEuMTE5MyAxMyAxMi41WiIgZmlsbD0iIzIwMThCMCIvPg0KPC9zdmc+DQo=", du = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMi41IDE0VjRIMTAuNVYxNEg4LjI3MzI0QzcuNDAzMTQgMTQgNi45NDgxNCAxNS4wMzQzIDcuNTM2MDkgMTUuNjc1N0wxMC43NjI5IDE5LjE5NThDMTEuMTU5MiAxOS42MjgyIDExLjg0MDggMTkuNjI4MiAxMi4yMzcyIDE5LjE5NThMMTUuNDYzOSAxNS42NzU3QzE2LjA1MTkgMTUuMDM0MyAxNS41OTY5IDE0IDE0LjcyNjggMTRIMTIuNVoiIGZpbGw9IiMyMDE4QjAiLz4NCjwvc3ZnPg0K", pu = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik03LjgyNDI3IDguMDM2MDhMNC4zMDQxNiAxMS4yNjI4QzMuODcxOCAxMS42NTkyIDMuODcxOCAxMi4zNDA4IDQuMzA0MTYgMTIuNzM3Mkw3LjgyNDI3IDE1Ljk2MzlDOC40NjU2NyAxNi41NTE5IDkuNSAxNi4wOTY5IDkuNSAxNS4yMjY4TDkuNSAxM0wxOS41IDEzVjExTDkuNSAxMVY4Ljc3MzI0QzkuNSA3LjkwMzEzIDguNDY1NjcgNy40NDgxMyA3LjgyNDI3IDguMDM2MDhaIiBmaWxsPSIjMjAxOEIwIi8+DQo8L3N2Zz4NCg==", hu = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNS4xNzU3IDE1Ljk2MzlMMTguNjk1OCAxMi43MzcyQzE5LjEyODIgMTIuMzQwOCAxOS4xMjgyIDExLjY1OTIgMTguNjk1OCAxMS4yNjI4TDE1LjE3NTcgOC4wMzYwOEMxNC41MzQzIDcuNDQ4MTMgMTMuNSA3LjkwMzEzIDEzLjUgOC43NzMyM0wxMy41IDExTDMuNSAxMVYxM0wxMy41IDEzVjE1LjIyNjhDMTMuNSAxNi4wOTY5IDE0LjUzNDMgMTYuNTUxOSAxNS4xNzU3IDE1Ljk2MzlaIiBmaWxsPSIjMjAxOEIwIi8+DQo8L3N2Zz4NCg==", vu = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNS40NjM5IDguMzI0MjhMMTIuMjM3MiA0LjgwNDE3QzExLjg0MDggNC4zNzE4IDExLjE1OTIgNC4zNzE4IDEwLjc2MjkgNC44MDQxN0w3LjUzNjA5IDguMzI0MjdDNi45NDgxNCA4Ljk2NTY4IDcuNDAzMTQgMTAgOC4yNzMyNCAxMEwxMC41IDEwTDEwLjUgMjBIMTIuNUwxMi41IDEwTDE0LjcyNjggMTBDMTUuNTk2OSAxMCAxNi4wNTE5IDguOTY1NjggMTUuNDYzOSA4LjMyNDI4WiIgZmlsbD0iIzIwMThCMCIvPg0KPC9zdmc+DQo=", gu = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMC43NzA1IDE1LjIyMThMNS41Nzg2OSA5LjY4Mzk0QzQuOTc5OTUgOS4wNDUyOCA1LjQzMjc5IDggNi4zMDgyMyA4SDE2LjY5MThDMTcuNTY3MiA4IDE4LjAyMDEgOS4wNDUyOCAxNy40MjEzIDkuNjgzOTRMMTIuMjI5NSAxNS4yMjE4QzExLjgzNDUgMTUuNjQzMiAxMS4xNjU1IDE1LjY0MzIgMTAuNzcwNSAxNS4yMjE4WiIgZmlsbD0iIzIwMThCMCIvPg0KPC9zdmc+DQo=", mu = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTAgM0MxMCAyLjQ0NzcyIDkuNTUyMjggMiA5IDJDOC40NDc3MiAyIDggMi40NDc3MiA4IDNWNEg3QzQuNzkwODYgNCAzIDUuNzkwODYgMyA4VjE2QzMgMTguMjA5MSA0Ljc5MDg2IDIwIDcgMjBIMTZDMTguMjA5MSAyMCAyMCAxOC4yMDkxIDIwIDE2VjhDMjAgNS43OTA4NiAxOC4yMDkxIDQgMTYgNEgxNVYzQzE1IDIuNDQ3NzIgMTQuNTUyMyAyIDE0IDJDMTMuNDQ3NyAyIDEzIDIuNDQ3NzIgMTMgM1Y0SDEwVjNaTTUgMTZWMTVIOFYxOEg3QzUuODk1NDMgMTggNSAxNy4xMDQ2IDUgMTZaTTEwIDE4SDEzVjE1SDEwVjE4Wk0xNiAxOEgxNVYxNUgxOFYxNkMxOCAxNy4xMDQ2IDE3LjEwNDYgMTggMTYgMThaTTE4IDEzSDE1VjlIMThWMTNaTTEwIDlIMTNWMTNIMTBWOVpNOCA5SDVWMTNIOFY5WiIgZmlsbD0iIzIwMThCMCIvPg0KPC9zdmc+DQo=", yu = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOSAyQzkuNTUyMjggMiAxMCAyLjQ0NzcyIDEwIDNWNEgxM1YzQzEzIDIuNDQ3NzIgMTMuNDQ3NyAyIDE0IDJDMTQuNTUyMyAyIDE1IDIuNDQ3NzIgMTUgM1Y0SDE2QzE4LjIwOTEgNCAyMCA1Ljc5MDg2IDIwIDhWMTZDMjAgMTguMjA5MSAxOC4yMDkxIDIwIDE2IDIwSDdDNC43OTA4NiAyMCAzIDE4LjIwOTEgMyAxNlY4QzMgNS43OTA4NiA0Ljc5MDg2IDQgNyA0SDhWM0M4IDIuNDQ3NzIgOC40NDc3MiAyIDkgMlpNNyA2QzUuODk1NDMgNiA1IDYuODk1NDMgNSA4SDE4QzE4IDYuODk1NDMgMTcuMTA0NiA2IDE2IDZIN1pNNSAxMFYxM0g4VjEwSDVaTTEwIDEwVjEzSDEzVjEwSDEwWk0xMCAxNUgxM1YxOEgxMFYxNVpNMTUgMTVWMThIMTZDMTcuMTA0NiAxOCAxOCAxNy4xMDQ2IDE4IDE2VjE1SDE1Wk0xNSAxMFYxM0gxOFYxMEgxNVpNOCAxNUg1VjE2QzUgMTcuMTA0NiA1Ljg5NTQzIDE4IDcgMThIOFYxNVoiIGZpbGw9IiMyMDE4QjAiLz4NCjwvc3ZnPg0K", Su = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDQgMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMiA0QzMuMTA0NTcgNCA0IDMuMTA0NTcgNCAyQzQgMC44OTU0MzEgMy4xMDQ1NyAwIDIgMEMwLjg5NTQzMSAwIDAgMC44OTU0MzEgMCAyQzAgMy4xMDQ1NyAwLjg5NTQzMSA0IDIgNFoiIGZpbGw9IiNFREYxRkEiLz4NCjxwYXRoIGQ9Ik00IDE3VjZIMFYxN0g0WiIgZmlsbD0iI0VERjFGQSIvPg0KPC9zdmc+DQo=", bu = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAgMTBDMjAgMTMuMzEzNyAxNy4zMTM3IDE2IDE0IDE2QzEyLjcwNDIgMTYgMTEuNTA0MyAxNS41ODkyIDEwLjUyMzUgMTQuODkwOEw1LjcwNzEyIDE5LjcwNzFMNC4yOTI5MSAxOC4yOTI5TDkuMTA5MjYgMTMuNDc2NUM4LjQxMDc5IDEyLjQ5NTcgOCAxMS4yOTU4IDggMTBDOCA2LjY4NjI5IDEwLjY4NjMgNCAxNCA0QzE3LjMxMzcgNCAyMCA2LjY4NjI5IDIwIDEwWk0xOCAxMEMxOCAxMi4yMDkxIDE2LjIwOTEgMTQgMTQgMTRDMTEuNzkwOSAxNCAxMCAxMi4yMDkxIDEwIDEwQzEwIDcuNzkwODYgMTEuNzkwOSA2IDE0IDZDMTYuMjA5MSA2IDE4IDcuNzkwODYgMTggMTBaIiBmaWxsPSIjMjAxOEIwIi8+DQo8L3N2Zz4NCg==", Fs = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiA+DQo8cGF0aCBkPSJNMjIwLTE2MHEtMjQgMC00Mi0xOHQtMTgtNDJ2LTE0M2g2MHYxNDNoNTIwdi0xNDNoNjB2MTQzcTAgMjQtMTggNDJ0LTQyIDE4SDIyMFptMjMwLTE1M3YtMzcxTDMzMC01NjRsLTQzLTQzIDE5My0xOTMgMTkzIDE5My00MyA0My0xMjAtMTIwdjM3MWgtNjBaIiBmaWxsPSIjMjAxOEIwIi8+DQo8L3N2Zz4=", xu = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMiAxMkMxNC4yMDkxIDEyIDE2IDEwLjIwOTEgMTYgOEMxNiA1Ljc5MDg2IDE0LjIwOTEgNCAxMiA0QzkuNzkwODYgNCA4IDUuNzkwODYgOCA4QzggMTAuMjA5MSA5Ljc5MDg2IDEyIDEyIDEyWiIgZmlsbD0iIzMyNTY4RiIvPg0KPHBhdGggZD0iTTQgMjBDNCAxNi42ODYzIDcuNTgxNzIgMTQgMTIgMTRDMTYuNDE4MyAxNCAyMCAxNi42ODYzIDIwIDIwSDRaIiBmaWxsPSIjMzI1NjhGIi8+DQo8L3N2Zz4NCg==", wu = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi4zMzY5MiAxNS43NjJDNS45Njg0MiAxNi4wMzkgNS42MzU4MiAxNi4zNDI5IDUuMzQ0NzkgMTYuNjY5M0M0Ljk3ODc0IDE3LjA3OTkgNC42Nzg0NSAxNy41MjYzIDQuNDU1MjIgMThDNC4xNjA0MSAxOC42MjU2IDQgMTkuMjk4NyA0IDIwSDIwQzIwIDE5LjI5ODcgMTkuODM5NiAxOC42MjU2IDE5LjU0NDggMThDMTkuMzIxNiAxNy41MjYzIDE5LjAyMTMgMTcuMDc5OSAxOC42NTUyIDE2LjY2OTNDMTguMzYyNSAxNi4zNDEgMTguMDI3OCAxNi4wMzU2IDE3LjY1NjkgMTUuNzU3NEMxNi4yMDk1IDE0LjY3MTggMTQuMjA5NiAxNCAxMiAxNEM5Ljc5MDQxIDE0IDcuNzkwNTMgMTQuNjcxOCA2LjM0MzE0IDE1Ljc1NzRDNi4zNDEwNyAxNS43NTg5IDYuMzM4OTkgMTUuNzYwNSA2LjMzNjkyIDE1Ljc2MlpNMTIgMTZDMTAuNTUxNyAxNiA5LjI2MTQ3IDE2LjM1MjMgOC4yNTU5IDE2LjkwMUM3Ljk5OTA0IDE3LjA0MTIgNy43NjA3NSAxNy4xOTQyIDcuNTQzMTUgMTcuMzU3NEM3LjI2OTI4IDE3LjU2MjggNy4wMzQ0NCAxNy43NzgyIDYuODM2NjIgMThIMTcuMTYzNEMxNi45NjU2IDE3Ljc3ODIgMTYuNzMwNyAxNy41NjI4IDE2LjQ1NjkgMTcuMzU3NEMxNi4yMzkyIDE3LjE5NDIgMTYuMDAwOSAxNy4wNDEyIDE1Ljc0NDEgMTYuOTAxQzE0LjczODUgMTYuMzUyMyAxMy40NDgzIDE2IDEyIDE2Wk0xNiA4QzE2IDEwLjIwOTEgMTQuMjA5MSAxMiAxMiAxMkM5Ljc5MDg2IDEyIDggMTAuMjA5MSA4IDhDOCA1Ljc5MDg2IDkuNzkwODYgNCAxMiA0QzE0LjIwOTEgNCAxNiA1Ljc5MDg2IDE2IDhaTTEyIDEwQzEzLjEwNDYgMTAgMTQgOS4xMDQ1NyAxNCA4QzE0IDYuODk1NDMgMTMuMTA0NiA2IDEyIDZDMTAuODk1NCA2IDEwIDYuODk1NDMgMTAgOEMxMCA5LjEwNDU3IDEwLjg5NTQgMTAgMTIgMTBaIiBmaWxsPSIjMjAxOEIwIi8+DQo8L3N2Zz4NCg==", Tu = {
  Add: cu,
  AddPicture: fu,
  ArrowBottom: du,
  ArrowLeft: pu,
  ArrowRight: hu,
  ArrowTop: vu,
  ArrowTriangle: gu,
  DateFlat: mu,
  DateLine: yu,
  Information: Su,
  Search: bu,
  Upload: Fs,
  UserFlat: xu,
  UserLine: wu
}, Fe = ({ size: P = "medium", icon: O }) => {
  const V = `icon-${P} icon`, ee = Tu[O];
  return /* @__PURE__ */ G.createElement("div", { className: V }, /* @__PURE__ */ G.createElement(uu, { src: ee }));
};
Fe.Add = (P) => /* @__PURE__ */ G.createElement(Fe, { icon: "Add", ...P });
Fe.AddPicture = (P) => /* @__PURE__ */ G.createElement(Fe, { icon: "AddPicture", ...P });
Fe.ArrowBottom = (P) => /* @__PURE__ */ G.createElement(Fe, { icon: "ArrowBottom", ...P });
Fe.ArrowLeft = (P) => /* @__PURE__ */ G.createElement(Fe, { icon: "ArrowLeft", ...P });
Fe.ArrowRight = (P) => /* @__PURE__ */ G.createElement(Fe, { icon: "ArrowRight", ...P });
Fe.ArrowTop = (P) => /* @__PURE__ */ G.createElement(Fe, { icon: "ArrowTop", ...P });
Fe.ArrowTriangle = (P) => /* @__PURE__ */ G.createElement(Fe, { icon: "ArrowTriangle", ...P });
Fe.DateFlat = (P) => /* @__PURE__ */ G.createElement(Fe, { icon: "DateFlat", ...P });
Fe.DateLine = (P) => /* @__PURE__ */ G.createElement(Fe, { icon: "DateLine", ...P });
Fe.Information = (P) => /* @__PURE__ */ G.createElement(Fe, { icon: "Information", ...P });
Fe.Search = (P) => /* @__PURE__ */ G.createElement(Fe, { icon: "Search", ...P });
Fe.Upload = (P) => /* @__PURE__ */ G.createElement(Fe, { icon: "Upload", ...P });
Fe.UserFlat = (P) => /* @__PURE__ */ G.createElement(Fe, { icon: "UserFlat", ...P });
Fe.UserLine = (P) => /* @__PURE__ */ G.createElement(Fe, { icon: "UserLine", ...P });
const Eu = ({ placeholder: P }) => /* @__PURE__ */ G.createElement("div", { className: "input" }, /* @__PURE__ */ G.createElement("input", { type: "search", className: "placeholder", placeholder: P }), /* @__PURE__ */ G.createElement(Fe.Search, null)), Cu = () => /* @__PURE__ */ G.createElement("div", { className: "container-header" }, /* @__PURE__ */ G.createElement($s, { src: "" }), /* @__PURE__ */ G.createElement(Eu, {
  placeholder: ""
}), /* @__PURE__ */ G.createElement(ms.Small, null));
const Iu = ({ label: P = "Information" }) => /* @__PURE__ */ G.createElement("div", { className: "container-information" }, /* @__PURE__ */ G.createElement("h2", null, "Information"), /* @__PURE__ */ G.createElement("div", { className: "information-section" }, /* @__PURE__ */ G.createElement(Fe.Information, null), /* @__PURE__ */ G.createElement("div", { className: "information-content" }, P)));
const Mu = ({ title: P, label: O }) => /* @__PURE__ */ G.createElement("div", { className: "container-section" }, /* @__PURE__ */ G.createElement("h2", null, P), /* @__PURE__ */ G.createElement("div", { className: "section-btn" }, /* @__PURE__ */ G.createElement("div", { className: "section-svg" }, /* @__PURE__ */ G.createElement("img", { src: Fs, alt: "section" })), /* @__PURE__ */ G.createElement("p", null, O)));
const Du = ({ title: P, description: O }) => /* @__PURE__ */ G.createElement("div", { className: "text-layout" }, /* @__PURE__ */ G.createElement("p", { className: "text-title" }, P), /* @__PURE__ */ G.createElement("p", { className: "text-description" }, O));
const Ru = ({ placeholder: P }) => /* @__PURE__ */ G.createElement("div", { className: "input" }, /* @__PURE__ */ G.createElement("p", { className: "placeholder" }, P));
export {
  ms as Avatar,
  ko as Button,
  js as Card,
  Cu as Header,
  Fe as Icon,
  Iu as Information,
  Ru as InputText,
  $s as Logo,
  wi as Ratio,
  Mu as Section,
  Du as Text
};
//# sourceMappingURL=popoyoko-ui-vite.es.js.map
