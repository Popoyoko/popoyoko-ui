import Z from "react";
const Bs = ({ showbadge: O = !0, background: j = "url(https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg)" }) => {
  const V = j ? { backgroundImage: `url(${j})` } : {
    backgroundImage: "url(https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg)"
  };
  return /* @__PURE__ */ Z.createElement("div", { className: "small" }, /* @__PURE__ */ Z.createElement("img", {
    className: "small",
    src: j,
    style: V
  }), O && /* @__PURE__ */ Z.createElement("div", { className: "badge" }));
};
const ko = ({ type: O = "primary", label: j, typeSvg: V, srcIcon: ee }) => {
  if (V === "none")
    return /* @__PURE__ */ Z.createElement("button", { className: O }, j);
  if (V === "left")
    return /* @__PURE__ */ Z.createElement("button", { className: O }, /* @__PURE__ */ Z.createElement("img", { src: ee, alt: "Icon" }), j);
  if (V === "right")
    return /* @__PURE__ */ Z.createElement("button", { className: O }, j, /* @__PURE__ */ Z.createElement("img", { src: ee, alt: "Icon" }));
  if (V === "only")
    return /* @__PURE__ */ Z.createElement("button", { className: O }, /* @__PURE__ */ Z.createElement("img", { src: ee, alt: "Icon" }));
};
ko.Primary = (O) => /* @__PURE__ */ Z.createElement(ko, { type: "primary", ...O });
ko.Secondary = (O) => /* @__PURE__ */ Z.createElement(ko, { type: "secondary", ...O });
ko.Tertiary = (O) => /* @__PURE__ */ Z.createElement(ko, { type: "tertiary", ...O });
const Ps = ({ children: O }) => /* @__PURE__ */ Z.createElement("div", { className: "ratio ratio-1-1" }, O);
Ps.defaultProps = {
  children: null
};
const js = ({ children: O }) => /* @__PURE__ */ Z.createElement("div", { className: "ratio ratio-2-3" }, O);
js.defaultProps = {
  children: null
};
const wa = ({ children: O }) => /* @__PURE__ */ Z.createElement("div", null, O);
wa.L1H1 = Ps;
wa.L2H3 = js;
const Ws = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxOSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjU2MzMgMEg1LjQzNjc0TDMuNzcwMDcgMi43NUgwVjEzSDRWMTFIMlY0Ljc1SDQuODk2NTlMNi41NjMyNiAySDEwLjQzNjdMMTIuMTAzNCA0Ljc1SDE1VjdIMTdWMi43NUgxMy4yMjk5TDExLjU2MzMgMFoiIGZpbGw9IiMxQjYwNDIiLz4KPHBhdGggZD0iTTE1IDE1VjEzSDEzVjExSDE1VjlIMTdWMTFIMTlWMTNIMTdWMTVIMTVaIiBmaWxsPSIjMUI2MDQyIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMgOC41QzEzIDEwLjk4NTMgMTAuOTg1MyAxMyA4LjUgMTNDNi4wMTQ3MiAxMyA0IDEwLjk4NTMgNCA4LjVDNCA2LjAxNDcyIDYuMDE0NzIgNCA4LjUgNEMxMC45ODUzIDQgMTMgNi4wMTQ3MiAxMyA4LjVaTTExIDguNUMxMSA5Ljg4MDcxIDkuODgwNzEgMTEgOC41IDExQzcuMTE5MjkgMTEgNiA5Ljg4MDcxIDYgOC41QzYgNy4xMTkyOSA3LjExOTI5IDYgOC41IDZDOS44ODA3MSA2IDExIDcuMTE5MjkgMTEgOC41WiIgZmlsbD0iIzFCNjA0MiIvPgo8L3N2Zz4K", Hs = ({ showedit: O = !0, background: j = "url(https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg)" }) => {
  const V = j ? { backgroundImage: `url(${j})` } : {
    backgroundImage: "url(https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg)"
  };
  return /* @__PURE__ */ Z.createElement("div", { className: "cover" }, /* @__PURE__ */ Z.createElement(wa.L1H1, null, /* @__PURE__ */ Z.createElement("img", { className: "cover", src: j, style: V }), O && /* @__PURE__ */ Z.createElement("div", { className: "edit" }, /* @__PURE__ */ Z.createElement(ko.Tertiary, { typeSvg: "right", label: "Edit", srcIcon: Ws }))));
}, ms = ({ children: O }) => /* @__PURE__ */ Z.createElement("div", null, O);
ms.Small = Bs;
ms.Cover = Hs;
const Ys = ({ label: O = "", mention: j = "", subTitle: V = "", price: ee = 0 }) => /* @__PURE__ */ Z.createElement("div", null, /* @__PURE__ */ Z.createElement("div", { className: "card" }, /* @__PURE__ */ Z.createElement(wa.L2H3, null)), /* @__PURE__ */ Z.createElement("div", { className: "card-section" }, /* @__PURE__ */ Z.createElement("div", { className: "card-group" }, /* @__PURE__ */ Z.createElement("p", null, j), /* @__PURE__ */ Z.createElement("div", { className: "card-information" }, /* @__PURE__ */ Z.createElement("div", { className: "card-title" }, /* @__PURE__ */ Z.createElement("p", null, O), /* @__PURE__ */ Z.createElement("p", null, V)), ee))));
const Vs = () => /* @__PURE__ */ Z.createElement("div", { className: "card" }, /* @__PURE__ */ Z.createElement(wa.L2H3, null)), Ns = ({ children: O }) => /* @__PURE__ */ Z.createElement("div", null, O);
Ns.Default = Ys;
Ns.Media = Vs;
const $s = ({ src: O }) => /* @__PURE__ */ Z.createElement("div", { className: "logo" }, /* @__PURE__ */ Z.createElement("img", { src: O }));
function Gs(O) {
  return O && O.__esModule && Object.prototype.hasOwnProperty.call(O, "default") ? O.default : O;
}
var hs = { exports: {} }, vs = { exports: {} }, fl = { exports: {} }, Le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ss;
function Zs() {
  if (Ss)
    return Le;
  Ss = 1;
  var O = typeof Symbol == "function" && Symbol.for, j = O ? Symbol.for("react.element") : 60103, V = O ? Symbol.for("react.portal") : 60106, ee = O ? Symbol.for("react.fragment") : 60107, g = O ? Symbol.for("react.strict_mode") : 60108, Q = O ? Symbol.for("react.profiler") : 60114, Te = O ? Symbol.for("react.provider") : 60109, K = O ? Symbol.for("react.context") : 60110, E = O ? Symbol.for("react.async_mode") : 60111, D = O ? Symbol.for("react.concurrent_mode") : 60111, ve = O ? Symbol.for("react.forward_ref") : 60112, N = O ? Symbol.for("react.suspense") : 60113, ce = O ? Symbol.for("react.suspense_list") : 60120, Re = O ? Symbol.for("react.memo") : 60115, xe = O ? Symbol.for("react.lazy") : 60116, ke = O ? Symbol.for("react.block") : 60121, $ = O ? Symbol.for("react.fundamental") : 60117, F = O ? Symbol.for("react.responder") : 60118, le = O ? Symbol.for("react.scope") : 60119;
  function L(k) {
    if (typeof k == "object" && k !== null) {
      var X = k.$$typeof;
      switch (X) {
        case j:
          switch (k = k.type, k) {
            case E:
            case D:
            case ee:
            case Q:
            case g:
            case N:
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
    return L(k) === D;
  }
  return Le.AsyncMode = E, Le.ConcurrentMode = D, Le.ContextConsumer = K, Le.ContextProvider = Te, Le.Element = j, Le.ForwardRef = ve, Le.Fragment = ee, Le.Lazy = xe, Le.Memo = Re, Le.Portal = V, Le.Profiler = Q, Le.StrictMode = g, Le.Suspense = N, Le.isAsyncMode = function(k) {
    return Y(k) || L(k) === E;
  }, Le.isConcurrentMode = Y, Le.isContextConsumer = function(k) {
    return L(k) === K;
  }, Le.isContextProvider = function(k) {
    return L(k) === Te;
  }, Le.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === j;
  }, Le.isForwardRef = function(k) {
    return L(k) === ve;
  }, Le.isFragment = function(k) {
    return L(k) === ee;
  }, Le.isLazy = function(k) {
    return L(k) === xe;
  }, Le.isMemo = function(k) {
    return L(k) === Re;
  }, Le.isPortal = function(k) {
    return L(k) === V;
  }, Le.isProfiler = function(k) {
    return L(k) === Q;
  }, Le.isStrictMode = function(k) {
    return L(k) === g;
  }, Le.isSuspense = function(k) {
    return L(k) === N;
  }, Le.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === ee || k === D || k === Q || k === g || k === N || k === ce || typeof k == "object" && k !== null && (k.$$typeof === xe || k.$$typeof === Re || k.$$typeof === Te || k.$$typeof === K || k.$$typeof === ve || k.$$typeof === $ || k.$$typeof === F || k.$$typeof === le || k.$$typeof === ke);
  }, Le.typeOf = L, Le;
}
var _e = {};
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
    var O = typeof Symbol == "function" && Symbol.for, j = O ? Symbol.for("react.element") : 60103, V = O ? Symbol.for("react.portal") : 60106, ee = O ? Symbol.for("react.fragment") : 60107, g = O ? Symbol.for("react.strict_mode") : 60108, Q = O ? Symbol.for("react.profiler") : 60114, Te = O ? Symbol.for("react.provider") : 60109, K = O ? Symbol.for("react.context") : 60110, E = O ? Symbol.for("react.async_mode") : 60111, D = O ? Symbol.for("react.concurrent_mode") : 60111, ve = O ? Symbol.for("react.forward_ref") : 60112, N = O ? Symbol.for("react.suspense") : 60113, ce = O ? Symbol.for("react.suspense_list") : 60120, Re = O ? Symbol.for("react.memo") : 60115, xe = O ? Symbol.for("react.lazy") : 60116, ke = O ? Symbol.for("react.block") : 60121, $ = O ? Symbol.for("react.fundamental") : 60117, F = O ? Symbol.for("react.responder") : 60118, le = O ? Symbol.for("react.scope") : 60119;
    function L(G) {
      return typeof G == "string" || typeof G == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      G === ee || G === D || G === Q || G === g || G === N || G === ce || typeof G == "object" && G !== null && (G.$$typeof === xe || G.$$typeof === Re || G.$$typeof === Te || G.$$typeof === K || G.$$typeof === ve || G.$$typeof === $ || G.$$typeof === F || G.$$typeof === le || G.$$typeof === ke);
    }
    function Y(G) {
      if (typeof G == "object" && G !== null) {
        var Ce = G.$$typeof;
        switch (Ce) {
          case j:
            var Be = G.type;
            switch (Be) {
              case E:
              case D:
              case ee:
              case Q:
              case g:
              case N:
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
    var k = E, X = D, fe = K, De = Te, ie = j, Oe = ve, Pe = ee, Ue = xe, nt = Re, Xe = V, vt = Q, Je = g, qe = N, et = !1;
    function Ve(G) {
      return et || (et = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), U(G) || Y(G) === E;
    }
    function U(G) {
      return Y(G) === D;
    }
    function W(G) {
      return Y(G) === K;
    }
    function q(G) {
      return Y(G) === Te;
    }
    function ge(G) {
      return typeof G == "object" && G !== null && G.$$typeof === j;
    }
    function se(G) {
      return Y(G) === ve;
    }
    function re(G) {
      return Y(G) === ee;
    }
    function te(G) {
      return Y(G) === xe;
    }
    function he(G) {
      return Y(G) === Re;
    }
    function Se(G) {
      return Y(G) === V;
    }
    function me(G) {
      return Y(G) === Q;
    }
    function ue(G) {
      return Y(G) === g;
    }
    function Ee(G) {
      return Y(G) === N;
    }
    _e.AsyncMode = k, _e.ConcurrentMode = X, _e.ContextConsumer = fe, _e.ContextProvider = De, _e.Element = ie, _e.ForwardRef = Oe, _e.Fragment = Pe, _e.Lazy = Ue, _e.Memo = nt, _e.Portal = Xe, _e.Profiler = vt, _e.StrictMode = Je, _e.Suspense = qe, _e.isAsyncMode = Ve, _e.isConcurrentMode = U, _e.isContextConsumer = W, _e.isContextProvider = q, _e.isElement = ge, _e.isForwardRef = se, _e.isFragment = re, _e.isLazy = te, _e.isMemo = he, _e.isPortal = Se, _e.isProfiler = me, _e.isStrictMode = ue, _e.isSuspense = Ee, _e.isValidElementType = L, _e.typeOf = Y;
  }()), _e;
}
var xs;
function Ls() {
  return xs || (xs = 1, process.env.NODE_ENV === "production" ? fl.exports = Zs() : fl.exports = Qs()), fl.exports;
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
  var O = Object.getOwnPropertySymbols, j = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
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
      for (var N in K)
        j.call(K, N) && (E[N] = K[N]);
      if (O) {
        D = O(K);
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
  var O = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ss = O, ss;
}
var us, Es;
function _s() {
  return Es || (Es = 1, us = Function.call.bind(Object.prototype.hasOwnProperty)), us;
}
var cs, ks;
function Js() {
  if (ks)
    return cs;
  ks = 1;
  var O = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var j = ys(), V = {}, ee = _s();
    O = function(Q) {
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
          var N;
          try {
            if (typeof Q[ve] != "function") {
              var ce = Error(
                (E || "React class") + ": " + K + " type `" + ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof Q[ve] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw ce.name = "Invariant Violation", ce;
            }
            N = Q[ve](Te, ve, E, K, null, j);
          } catch (xe) {
            N = xe;
          }
          if (N && !(N instanceof Error) && O(
            (E || "React class") + ": type specification of " + K + " `" + ve + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof N + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), N instanceof Error && !(N.message in V)) {
            V[N.message] = !0;
            var Re = D ? D() : "";
            O(
              "Failed " + K + " type: " + N.message + (Re ?? "")
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
  var O = Ls(), j = Xs(), V = ys(), ee = _s(), g = Js(), Q = function() {
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
    function N(U) {
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
      arrayOf: L,
      element: Y(),
      elementType: k(),
      instanceOf: X,
      node: Oe(),
      objectOf: De,
      oneOf: fe,
      oneOfType: ie,
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
            var G = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw G.name = "Invariant Violation", G;
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
    function L(U) {
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
        if (!O.isValidElementType(te)) {
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
        var me = JSON.stringify(U, function(Ee, G) {
          var Ce = qe(G);
          return Ce === "symbol" ? String(G) : G;
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
    function ie(U) {
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
          var Ee = U[ue], G = Ee(se, re, te, he, Se, V);
          if (G == null)
            return null;
          G.data && ee(G.data, "expectedType") && me.push(G.data.expectedType);
        }
        var Ce = me.length > 0 ? ", expected one of type [" + me.join(", ") + "]" : "";
        return new ke("Invalid " + he + " `" + Se + "` supplied to " + ("`" + te + "`" + Ce + "."));
      }
      return $(ge);
    }
    function Oe() {
      function U(W, q, ge, se, re) {
        return Xe(W[q]) ? null : new ke("Invalid " + se + " `" + re + "` supplied to " + ("`" + ge + "`, expected a ReactNode."));
      }
      return $(U);
    }
    function Pe(U, W, q, ge, se) {
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
            return Pe(se, re, te, me, qe(ue));
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
        var me = j({}, q[ge], U);
        for (var ue in me) {
          var Ee = U[ue];
          if (ee(U, ue) && typeof Ee != "function")
            return Pe(se, re, te, ue, qe(Ee));
          if (!Ee)
            return new ke(
              "Invalid " + re + " `" + te + "` key `" + ue + "` supplied to `" + se + "`.\nBad object: " + JSON.stringify(q[ge], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(U), null, "  ")
            );
          var G = Ee(he, ue, se, re, te + "." + ue, V);
          if (G)
            return G;
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
          var W = N(U);
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
var ds, Ms;
function qs() {
  if (Ms)
    return ds;
  Ms = 1;
  var O = ys();
  function j() {
  }
  function V() {
  }
  return V.resetWarningCache = j, ds = function() {
    function ee(Te, K, E, D, ve, N) {
      if (N !== O) {
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
      resetWarningCache: j
    };
    return Q.PropTypes = Q, Q;
  }, ds;
}
if (process.env.NODE_ENV !== "production") {
  var eu = Ls(), tu = !0;
  vs.exports = Ks()(eu.isElement, tu);
} else
  vs.exports = qs()();
var ru = vs.exports, Mo = {}, To = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Is;
function nu() {
  if (Is)
    return To;
  Is = 1;
  var O = Z;
  function j(o) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + o, h = 1; h < arguments.length; h++)
      u += "&args[]=" + encodeURIComponent(arguments[h]);
    return "Minified React error #" + o + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var V = Object.prototype.hasOwnProperty, ee = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, g = {}, Q = {};
  function Te(o) {
    return V.call(Q, o) ? !0 : V.call(g, o) ? !1 : ee.test(o) ? Q[o] = !0 : (g[o] = !0, !1);
  }
  function K(o, u, h, m, M, T, P) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = m, this.attributeNamespace = M, this.mustUseProperty = h, this.propertyName = o, this.type = u, this.sanitizeURL = T, this.removeEmptyString = P;
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
  var N = {
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
  Object.keys(N).forEach(function(o) {
    ce.forEach(function(u) {
      u = u + o.charAt(0).toUpperCase() + o.substring(1), N[u] = N[o];
    });
  });
  var Re = /["'&<>]/;
  function xe(o) {
    if (typeof o == "boolean" || typeof o == "number")
      return "" + o;
    o = "" + o;
    var u = Re.exec(o);
    if (u) {
      var h = "", m, M = 0;
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
        M !== m && (h += o.substring(M, m)), M = m + 1, h += u;
      }
      o = M !== m ? h + o.substring(M, m) : h;
    }
    return o;
  }
  var ke = /([A-Z])/g, $ = /^ms-/, F = Array.isArray;
  function le(o, u) {
    return { insertionMode: o, selectedValue: u };
  }
  function L(o, u, h) {
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
      throw Error(j(62));
    u = !0;
    for (var m in h)
      if (V.call(h, m)) {
        var M = h[m];
        if (M != null && typeof M != "boolean" && M !== "") {
          if (m.indexOf("--") === 0) {
            var T = xe(m);
            M = xe(("" + M).trim());
          } else {
            T = m;
            var P = Y.get(T);
            P !== void 0 || (P = xe(T.replace(ke, "-$1").toLowerCase().replace($, "-ms-")), Y.set(T, P)), T = P, M = typeof M == "number" ? M === 0 || V.call(N, m) ? "" + M : M + "px" : xe(("" + M).trim());
          }
          u ? (u = !1, o.push(' style="', T, ":", M)) : o.push(";", T, ":", M);
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
        throw Error(j(60));
      if (typeof u != "object" || !("__html" in u))
        throw Error(j(61));
      u = u.__html, u != null && o.push("" + u);
    }
  }
  function De(o) {
    var u = "";
    return O.Children.forEach(o, function(h) {
      h != null && (u += h);
    }), u;
  }
  function ie(o, u, h, m) {
    o.push(Ue(h));
    var M = h = null, T;
    for (T in u)
      if (V.call(u, T)) {
        var P = u[T];
        if (P != null)
          switch (T) {
            case "children":
              h = P;
              break;
            case "dangerouslySetInnerHTML":
              M = P;
              break;
            default:
              X(o, m, T, P);
          }
      }
    return o.push(">"), fe(o, M, h), typeof h == "string" ? (o.push(xe(h)), null) : h;
  }
  var Oe = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Pe = /* @__PURE__ */ new Map();
  function Ue(o) {
    var u = Pe.get(o);
    if (u === void 0) {
      if (!Oe.test(o))
        throw Error(j(65, o));
      u = "<" + o, Pe.set(o, u);
    }
    return u;
  }
  function nt(o, u, h, m, M) {
    switch (u) {
      case "select":
        o.push(Ue("select"));
        var T = null, P = null;
        for (ae in h)
          if (V.call(h, ae)) {
            var B = h[ae];
            if (B != null)
              switch (ae) {
                case "children":
                  T = B;
                  break;
                case "dangerouslySetInnerHTML":
                  P = B;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  X(o, m, ae, B);
              }
          }
        return o.push(">"), fe(o, P, T), T;
      case "option":
        P = M.selectedValue, o.push(Ue("option"));
        var ne = B = null, de = null, ae = null;
        for (T in h)
          if (V.call(h, T)) {
            var Me = h[T];
            if (Me != null)
              switch (T) {
                case "children":
                  B = Me;
                  break;
                case "selected":
                  de = Me;
                  break;
                case "dangerouslySetInnerHTML":
                  ae = Me;
                  break;
                case "value":
                  ne = Me;
                default:
                  X(o, m, T, Me);
              }
          }
        if (P != null)
          if (h = ne !== null ? "" + ne : De(B), F(P)) {
            for (m = 0; m < P.length; m++)
              if ("" + P[m] === h) {
                o.push(' selected=""');
                break;
              }
          } else
            "" + P === h && o.push(' selected=""');
        else
          de && o.push(' selected=""');
        return o.push(">"), fe(o, ae, B), B;
      case "textarea":
        o.push(Ue("textarea")), ae = P = T = null;
        for (B in h)
          if (V.call(h, B) && (ne = h[B], ne != null))
            switch (B) {
              case "children":
                ae = ne;
                break;
              case "value":
                T = ne;
                break;
              case "defaultValue":
                P = ne;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(j(91));
              default:
                X(
                  o,
                  m,
                  B,
                  ne
                );
            }
        if (T === null && P !== null && (T = P), o.push(">"), ae != null) {
          if (T != null)
            throw Error(j(92));
          if (F(ae) && 1 < ae.length)
            throw Error(j(93));
          T = "" + ae;
        }
        return typeof T == "string" && T[0] === `
` && o.push(`
`), T !== null && o.push(xe("" + T)), null;
      case "input":
        o.push(Ue("input")), ne = ae = B = T = null;
        for (P in h)
          if (V.call(h, P) && (de = h[P], de != null))
            switch (P) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(j(399, "input"));
              case "defaultChecked":
                ne = de;
                break;
              case "defaultValue":
                B = de;
                break;
              case "checked":
                ae = de;
                break;
              case "value":
                T = de;
                break;
              default:
                X(o, m, P, de);
            }
        return ae !== null ? X(o, m, "checked", ae) : ne !== null && X(o, m, "checked", ne), T !== null ? X(o, m, "value", T) : B !== null && X(o, m, "value", B), o.push("/>"), null;
      case "menuitem":
        o.push(Ue("menuitem"));
        for (var ft in h)
          if (V.call(h, ft) && (T = h[ft], T != null))
            switch (ft) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(j(400));
              default:
                X(o, m, ft, T);
            }
        return o.push(">"), null;
      case "title":
        o.push(Ue("title")), T = null;
        for (Me in h)
          if (V.call(h, Me) && (P = h[Me], P != null))
            switch (Me) {
              case "children":
                T = P;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(j(434));
              default:
                X(o, m, Me, P);
            }
        return o.push(">"), T;
      case "listing":
      case "pre":
        o.push(Ue(u)), P = T = null;
        for (ne in h)
          if (V.call(h, ne) && (B = h[ne], B != null))
            switch (ne) {
              case "children":
                T = B;
                break;
              case "dangerouslySetInnerHTML":
                P = B;
                break;
              default:
                X(o, m, ne, B);
            }
        if (o.push(">"), P != null) {
          if (T != null)
            throw Error(j(60));
          if (typeof P != "object" || !("__html" in P))
            throw Error(j(61));
          h = P.__html, h != null && (typeof h == "string" && 0 < h.length && h[0] === `
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
                throw Error(j(399, u));
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
        return ie(
          o,
          h,
          u,
          m
        );
      case "html":
        return M.insertionMode === 0 && o.push("<!DOCTYPE html>"), ie(o, h, u, m);
      default:
        if (u.indexOf("-") === -1 && typeof h.is != "string")
          return ie(o, h, u, m);
        o.push(Ue(u)), P = T = null;
        for (de in h)
          if (V.call(h, de) && (B = h[de], B != null))
            switch (de) {
              case "children":
                T = B;
                break;
              case "dangerouslySetInnerHTML":
                P = B;
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
        return o.push(">"), fe(o, P, T), T;
    }
  }
  function Xe(o, u, h) {
    if (o.push('<!--$?--><template id="'), h === null)
      throw Error(j(395));
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
        throw Error(j(397));
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
        throw Error(j(397));
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
  var W = Object.assign, q = Symbol.for("react.element"), ge = Symbol.for("react.portal"), se = Symbol.for("react.fragment"), re = Symbol.for("react.strict_mode"), te = Symbol.for("react.profiler"), he = Symbol.for("react.provider"), Se = Symbol.for("react.context"), me = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), Ee = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), Be = Symbol.for("react.scope"), ct = Symbol.for("react.debug_trace_mode"), zt = Symbol.for("react.legacy_hidden"), dn = Symbol.for("react.default_value"), mt = Symbol.iterator;
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
        case G:
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
          throw Error(j(401));
      } else {
        if (h === null)
          throw Error(j(401));
        rt(o, h);
      }
      u.context._currentValue2 = u.value;
    }
  }
  function Ke(o) {
    o.context._currentValue2 = o.parentValue, o = o.parent, o !== null && Ke(o);
  }
  function Nr(o) {
    var u = o.parent;
    u !== null && Nr(u), o.context._currentValue2 = o.value;
  }
  function Lr(o, u) {
    if (o.context._currentValue2 = o.parentValue, o = o.parent, o === null)
      throw Error(j(402));
    o.depth === u.depth ? rt(o, u) : Lr(o, u);
  }
  function _r(o, u) {
    var h = u.parent;
    if (h === null)
      throw Error(j(402));
    o.depth === h.depth ? rt(o, h) : _r(o, h), u.context._currentValue2 = u.value;
  }
  function Ze(o) {
    var u = yt;
    u !== o && (u === null ? Nr(o) : o === null ? Ke(u) : u.depth === o.depth ? rt(u, o) : u.depth > o.depth ? Lr(u, o) : _r(u, o), yt = o);
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
    var M = o.state !== void 0 ? o.state : null;
    o.updater = Fr, o.props = h, o.state = M;
    var T = { queue: [], replace: !1 };
    o._reactInternals = T;
    var P = u.contextType;
    if (o.context = typeof P == "object" && P !== null ? P._currentValue2 : m, P = u.getDerivedStateFromProps, typeof P == "function" && (P = P(h, M), M = P == null ? M : W({}, M, P), o.state = M), typeof u.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function"))
      if (u = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), u !== o.state && Fr.enqueueReplaceState(o, o.state, null), T.queue !== null && 0 < T.queue.length)
        if (u = T.queue, P = T.replace, T.queue = null, T.replace = !1, P && u.length === 1)
          o.state = u[0];
        else {
          for (T = P ? u[0] : o.state, M = !0, P = P ? 1 : 0; P < u.length; P++) {
            var B = u[P];
            B = typeof B == "function" ? B.call(o, T, h, m) : B, B != null && (M ? (M = !1, T = W({}, T, B)) : W(T, B));
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
    var M = 32 - Sr(m) - 1;
    m &= ~(1 << M), h += 1;
    var T = 32 - Sr(u) + M;
    if (30 < T) {
      var P = M - M % 5;
      return T = (m & (1 << P) - 1).toString(32), m >>= P, M -= P, { id: 1 << 32 - Sr(u) + M | h << M | m, overflow: T + o };
    }
    return { id: 1 << T | h << M | m, overflow: o };
  }
  var Sr = Math.clz32 ? Math.clz32 : $t, Fn = Math.log, Ur = Math.LN2;
  function $t(o) {
    return o >>>= 0, o === 0 ? 32 : 31 - (Fn(o) / Ur | 0) | 0;
  }
  function Br(o, u) {
    return o === u && (o !== 0 || 1 / o === 1 / u) || o !== o && u !== u;
  }
  var gn = typeof Object.is == "function" ? Object.is : Br, st = null, Mt = null, Gt = null, Ae = null, Zt = !1, br = !1, ur = 0, It = null, xr = 0;
  function Ut() {
    if (st === null)
      throw Error(j(321));
    return st;
  }
  function $e() {
    if (0 < xr)
      throw Error(j(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Wr() {
    return Ae === null ? Gt === null ? (Zt = !1, Gt = Ae = $e()) : (Zt = !0, Ae = Gt) : Ae.next === null ? (Zt = !1, Ae = Ae.next = $e()) : (Zt = !0, Ae = Ae.next), Ae;
  }
  function Hr() {
    Mt = st = null, br = !1, Gt = null, xr = 0, Ae = It = null;
  }
  function mn(o, u) {
    return typeof u == "function" ? u(o) : u;
  }
  function Qe(o, u, h) {
    if (st = Ut(), Ae = Wr(), Zt) {
      var m = Ae.queue;
      if (u = m.dispatch, It !== null && (h = It.get(m), h !== void 0)) {
        It.delete(m), m = Ae.memoizedState;
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
            for (var M = 0; M < m.length && M < u.length; M++)
              if (!gn(u[M], m[M])) {
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
      throw Error(j(301));
    if (o === st)
      if (br = !0, o = { action: h, next: null }, It === null && (It = /* @__PURE__ */ new Map()), h = It.get(u), h === void 0)
        It.set(u, o);
      else {
        for (u = h; u.next !== null; )
          u = u.next;
        u.next = o;
      }
  }
  function Un() {
    throw Error(j(394));
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
    var o = Mt.treeContext, u = o.overflow;
    o = o.id, o = (o & ~(1 << 32 - Sr(o) - 1)).toString(32) + u;
    var h = wr;
    if (h === null)
      throw Error(j(404));
    return u = ur++, o = ":" + h.idPrefix + "R" + o, 0 < u && (o += "H" + u.toString(32)), o + ":";
  }, useMutableSource: function(o, u) {
    return Ut(), u(o._source);
  }, useSyncExternalStore: function(o, u, h) {
    if (h === void 0)
      throw Error(j(407));
    return h();
  } }, wr = null, $r = O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function cr(o) {
    return console.error(o), null;
  }
  function Qt() {
  }
  function Bn(o, u, h, m, M, T, P, B, ne) {
    var de = [], ae = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: m === void 0 ? 12800 : m, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ae, pingedTasks: de, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: M === void 0 ? cr : M, onAllReady: T === void 0 ? Qt : T, onShellReady: P === void 0 ? Qt : P, onShellError: B === void 0 ? Qt : B, onFatalError: ne === void 0 ? Qt : ne }, h = Tr(u, 0, null, h, !1, !1), h.parentFlushed = !0, o = Gr(u, o, null, h, ae, sr, null, vn), de.push(o), u;
  }
  function Gr(o, u, h, m, M, T, P, B) {
    o.allPendingTasks++, h === null ? o.pendingRootTasks++ : h.pendingTasks++;
    var ne = { node: u, ping: function() {
      var de = o.pingedTasks;
      de.push(ne), de.length === 1 && ut(o);
    }, blockedBoundary: h, blockedSegment: m, abortSet: M, legacyContext: T, context: P, treeContext: B };
    return M.add(ne), ne;
  }
  function Tr(o, u, h, m, M, T) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: m, boundary: h, lastPushedText: M, textEmbedded: T };
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
  function Rt(o, u, h, m, M) {
    for (st = {}, Mt = u, ur = 0, o = h(m, M); br; )
      br = !1, ur = 0, xr += 1, Ae = null, o = h(m, M);
    return Hr(), o;
  }
  function fr(o, u, h, m) {
    var M = h.render(), T = m.childContextTypes;
    if (T != null) {
      var P = u.legacyContext;
      if (typeof h.getChildContext != "function")
        m = P;
      else {
        h = h.getChildContext();
        for (var B in h)
          if (!(B in T))
            throw Error(j(108, lr(m) || "Unknown", B));
        m = W({}, P, h);
      }
      u.legacyContext = m, He(o, u, M), u.legacyContext = P;
    } else
      He(o, u, M);
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
  function gt(o, u, h, m, M) {
    if (typeof h == "function")
      if (h.prototype && h.prototype.isReactComponent) {
        M = pn(h, u.legacyContext);
        var T = h.contextType;
        T = new h(m, typeof T == "object" && T !== null ? T._currentValue2 : M), hn(T, h, m, M), fr(o, u, T, h);
      } else {
        T = pn(h, u.legacyContext), M = Rt(o, u, h, m, T);
        var P = ur !== 0;
        if (typeof M == "object" && M !== null && typeof M.render == "function" && M.$$typeof === void 0)
          hn(M, h, m, T), fr(o, u, M, h);
        else if (P) {
          m = u.treeContext, u.treeContext = zr(m, 1, 0);
          try {
            He(o, u, M);
          } finally {
            u.treeContext = m;
          }
        } else
          He(o, u, M);
      }
    else if (typeof h == "string") {
      switch (M = u.blockedSegment, T = nt(M.chunks, h, m, o.responseState, M.formatContext), M.lastPushedText = !1, P = M.formatContext, M.formatContext = L(P, h, m), St(o, u, T), M.formatContext = P, h) {
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
          M.chunks.push("</", h, ">");
      }
      M.lastPushedText = !1;
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
          throw Error(j(343));
        case ue:
          e: {
            h = u.blockedBoundary, M = u.blockedSegment, T = m.fallback, m = m.children, P = /* @__PURE__ */ new Set();
            var B = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: P, errorDigest: null }, ne = Tr(o, M.chunks.length, B, M.formatContext, !1, !1);
            M.children.push(ne), M.lastPushedText = !1;
            var de = Tr(o, 0, null, M.formatContext, !1, !1);
            de.parentFlushed = !0, u.blockedBoundary = B, u.blockedSegment = de;
            try {
              if (St(
                o,
                u,
                m
              ), o.responseState.generateStaticMarkup || de.lastPushedText && de.textEmbedded && de.chunks.push("<!-- -->"), de.status = 1, Ot(B, de), B.pendingTasks === 0)
                break e;
            } catch (ae) {
              de.status = 4, B.forceClientRender = !0, B.errorDigest = Xt(o, ae);
            } finally {
              u.blockedBoundary = h, u.blockedSegment = M;
            }
            u = Gr(o, T, h, ne, P, u.legacyContext, u.context, u.treeContext), o.pingedTasks.push(u);
          }
          return;
      }
      if (typeof h == "object" && h !== null)
        switch (h.$$typeof) {
          case me:
            if (m = Rt(o, u, h.render, m, M), ur !== 0) {
              h = u.treeContext, u.treeContext = zr(h, 1, 0);
              try {
                He(o, u, m);
              } finally {
                u.treeContext = h;
              }
            } else
              He(o, u, m);
            return;
          case G:
            h = h.type, m = dr(h, m), gt(o, u, h, m, M);
            return;
          case he:
            if (M = m.children, h = h._context, m = m.value, T = h._currentValue2, h._currentValue2 = m, P = yt, yt = m = { parent: P, depth: P === null ? 0 : P.depth + 1, context: h, parentValue: T, value: m }, u.context = m, He(o, u, M), o = yt, o === null)
              throw Error(j(403));
            m = o.parentValue, o.context._currentValue2 = m === dn ? o.context._defaultValue : m, o = yt = o.parent, u.context = o;
            return;
          case Se:
            m = m.children, m = m(h._currentValue2), He(o, u, m);
            return;
          case Ce:
            M = h._init, h = M(h._payload), m = dr(h, m), gt(
              o,
              u,
              h,
              m,
              void 0
            );
            return;
        }
      throw Error(j(130, h == null ? h : typeof h, ""));
    }
  }
  function He(o, u, h) {
    if (u.node = h, typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case q:
          gt(o, u, h.type, h.props, h.ref);
          return;
        case ge:
          throw Error(j(257));
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
          var M = [];
          do
            M.push(h.value), h = m.next();
          while (!h.done);
          At(o, u, M);
        }
        return;
      }
      throw o = Object.prototype.toString.call(h), Error(j(31, o === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : o));
    }
    typeof h == "string" ? (m = u.blockedSegment, m.lastPushedText = U(u.blockedSegment.chunks, h, o.responseState, m.lastPushedText)) : typeof h == "number" && (m = u.blockedSegment, m.lastPushedText = U(u.blockedSegment.chunks, "" + h, o.responseState, m.lastPushedText));
  }
  function At(o, u, h) {
    for (var m = h.length, M = 0; M < m; M++) {
      var T = u.treeContext;
      u.treeContext = zr(T, m, M);
      try {
        St(o, u, h[M]);
      } finally {
        u.treeContext = T;
      }
    }
  }
  function St(o, u, h) {
    var m = u.blockedSegment.formatContext, M = u.legacyContext, T = u.context;
    try {
      return He(o, u, h);
    } catch (ne) {
      if (Hr(), typeof ne == "object" && ne !== null && typeof ne.then == "function") {
        h = ne;
        var P = u.blockedSegment, B = Tr(o, P.chunks.length, null, P.formatContext, P.lastPushedText, !0);
        P.children.push(B), P.lastPushedText = !1, o = Gr(o, u.node, u.blockedBoundary, B, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, h.then(o, o), u.blockedSegment.formatContext = m, u.legacyContext = M, u.context = T, Ze(T);
      } else
        throw u.blockedSegment.formatContext = m, u.legacyContext = M, u.context = T, Ze(T), ne;
    }
  }
  function tt(o) {
    var u = o.blockedBoundary;
    o = o.blockedSegment, o.status = 3, Pt(this, u, o);
  }
  function Er(o, u, h) {
    var m = o.blockedBoundary;
    o.blockedSegment.status = 3, m === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.push(null))) : (m.pendingTasks--, m.forceClientRender || (m.forceClientRender = !0, o = h === void 0 ? Error(j(432)) : h, m.errorDigest = u.onError(o), m.parentFlushed && u.clientRenderedBoundaries.push(m)), m.fallbackAbortableTasks.forEach(function(M) {
      return Er(M, u, h);
    }), m.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (m = u.onAllReady, m()));
  }
  function Ot(o, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var h = u.children[0];
      h.id = u.id, h.parentFlushed = !0, h.status === 1 && Ot(o, h);
    } else
      o.completedSegments.push(u);
  }
  function Pt(o, u, h) {
    if (u === null) {
      if (h.parentFlushed) {
        if (o.completedRootSegment !== null)
          throw Error(j(389));
        o.completedRootSegment = h;
      }
      o.pendingRootTasks--, o.pendingRootTasks === 0 && (o.onShellError = Qt, u = o.onShellReady, u());
    } else
      u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (h.parentFlushed && h.status === 1 && Ot(u, h), u.parentFlushed && o.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(tt, o), u.fallbackAbortableTasks.clear()) : h.parentFlushed && h.status === 1 && (Ot(u, h), u.completedSegments.length === 1 && u.parentFlushed && o.partialBoundaries.push(u)));
    o.allPendingTasks--, o.allPendingTasks === 0 && (o = o.onAllReady, o());
  }
  function ut(o) {
    if (o.status !== 2) {
      var u = yt, h = $r.current;
      $r.current = Vr;
      var m = wr;
      wr = o.responseState;
      try {
        var M = o.pingedTasks, T;
        for (T = 0; T < M.length; T++) {
          var P = M[T], B = o, ne = P.blockedSegment;
          if (ne.status === 0) {
            Ze(P.context);
            try {
              He(B, P, P.node), B.responseState.generateStaticMarkup || ne.lastPushedText && ne.textEmbedded && ne.chunks.push("<!-- -->"), P.abortSet.delete(P), ne.status = 1, Pt(B, P.blockedBoundary, ne);
            } catch (it) {
              if (Hr(), typeof it == "object" && it !== null && typeof it.then == "function") {
                var de = P.ping;
                it.then(de, de);
              } else {
                P.abortSet.delete(P), ne.status = 4;
                var ae = P.blockedBoundary, Me = it, ft = Xt(B, Me);
                if (ae === null ? Bt(B, Me) : (ae.pendingTasks--, ae.forceClientRender || (ae.forceClientRender = !0, ae.errorDigest = ft, ae.parentFlushed && B.clientRenderedBoundaries.push(ae))), B.allPendingTasks--, B.allPendingTasks === 0) {
                  var ot = B.onAllReady;
                  ot();
                }
              }
            } finally {
            }
          }
        }
        M.splice(0, T), o.destination !== null && Kt(o, o.destination);
      } catch (it) {
        Xt(o, it), Bt(o, it);
      } finally {
        wr = m, $r.current = h, h === Vr && Ze(u);
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
        var M = !0;
        m = h.chunks;
        var T = 0;
        h = h.children;
        for (var P = 0; P < h.length; P++) {
          for (M = h[P]; T < M.index; T++)
            u.push(m[T]);
          M = Jt(o, u, M);
        }
        for (; T < m.length - 1; T++)
          u.push(m[T]);
        return T < m.length && (M = u.push(m[T])), M;
      default:
        throw Error(j(390));
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
      var M = o.responseState, T = M.nextSuspenseID++;
      return M = M.boundaryPrefix + T.toString(16), m = m.id = M, Xe(u, o.responseState, m), Wt(o, u, h), u.push("<!--/$-->");
    }
    if (m.byteSize > o.progressiveChunkSize)
      return m.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(m), Xe(u, o.responseState, m.id), Wt(o, u, h), u.push("<!--/$-->");
    if (o.responseState.generateStaticMarkup || u.push("<!--$-->"), h = m.completedSegments, h.length !== 1)
      throw Error(j(391));
    return Jt(o, u, h[0]), o = o.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), o;
  }
  function Zr(o, u, h) {
    return vt(u, o.responseState, h.formatContext, h.id), Jt(o, u, h), Je(u, h.formatContext);
  }
  function Qr(o, u, h) {
    for (var m = h.completedSegments, M = 0; M < m.length; M++)
      kr(o, u, h, m[M]);
    if (m.length = 0, o = o.responseState, m = h.id, h = h.rootSegmentID, u.push(o.startInlineScript), o.sentCompleteBoundaryFunction ? u.push('$RC("') : (o.sentCompleteBoundaryFunction = !0, u.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), m === null)
      throw Error(j(395));
    return h = h.toString(16), u.push(m), u.push('","'), u.push(o.segmentPrefix), u.push(h), u.push('")<\/script>');
  }
  function kr(o, u, h, m) {
    if (m.status === 2)
      return !0;
    var M = m.id;
    if (M === -1) {
      if ((m.id = h.rootSegmentID) === -1)
        throw Error(j(392));
      return Zr(o, u, m);
    }
    return Zr(o, u, m), o = o.responseState, u.push(o.startInlineScript), o.sentCompleteSegmentFunction ? u.push('$RS("') : (o.sentCompleteSegmentFunction = !0, u.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), u.push(o.segmentPrefix), M = M.toString(16), u.push(M), u.push('","'), u.push(o.placeholderPrefix), u.push(M), u.push('")<\/script>');
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
      var M = o.clientRenderedBoundaries, T;
      for (T = 0; T < M.length; T++) {
        var P = M[T];
        m = u;
        var B = o.responseState, ne = P.id, de = P.errorDigest, ae = P.errorMessage, Me = P.errorComponentStack;
        if (m.push(B.startInlineScript), B.sentClientRenderFunction ? m.push('$RX("') : (B.sentClientRenderFunction = !0, m.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), ne === null)
          throw Error(j(395));
        if (m.push(ne), m.push('"'), de || ae || Me) {
          m.push(",");
          var ft = et(de || "");
          m.push(ft);
        }
        if (ae || Me) {
          m.push(",");
          var ot = et(ae || "");
          m.push(ot);
        }
        if (Me) {
          m.push(",");
          var it = et(Me);
          m.push(it);
        }
        if (!m.push(")<\/script>")) {
          o.destination = null, T++, M.splice(0, T);
          return;
        }
      }
      M.splice(0, T);
      var Ht = o.completedBoundaries;
      for (T = 0; T < Ht.length; T++)
        if (!Qr(o, u, Ht[T])) {
          o.destination = null, T++, Ht.splice(0, T);
          return;
        }
      Ht.splice(0, T);
      var bt = o.partialBoundaries;
      for (T = 0; T < bt.length; T++) {
        var Ir = bt[T];
        e: {
          M = o, P = u;
          var qt = Ir.completedSegments;
          for (B = 0; B < qt.length; B++)
            if (!kr(M, P, Ir, qt[B])) {
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
  function Mr(o, u, h, m) {
    var M = !1, T = null, P = "", B = { push: function(de) {
      return de !== null && (P += de), !0;
    }, destroy: function(de) {
      M = !0, T = de;
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
    if (M)
      throw T;
    if (!ne)
      throw Error(j(426));
    return P;
  }
  return To.renderToNodeStream = function() {
    throw Error(j(207));
  }, To.renderToStaticMarkup = function(o, u) {
    return Mr(o, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, To.renderToStaticNodeStream = function() {
    throw Error(j(208));
  }, To.renderToString = function(o, u) {
    return Mr(o, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
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
  var O = Z;
  function j(i) {
    for (var c = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, p = 1; p < arguments.length; p++)
      c += "&args[]=" + encodeURIComponent(arguments[p]);
    return "Minified React error #" + i + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var V = null, ee = 0;
  function g(i, c) {
    if (c.length !== 0)
      if (512 < c.length)
        0 < ee && (i.enqueue(new Uint8Array(V.buffer, 0, ee)), V = new Uint8Array(512), ee = 0), i.enqueue(c);
      else {
        var p = V.length - ee;
        p < c.length && (p === 0 ? i.enqueue(V) : (V.set(c.subarray(0, p), ee), i.enqueue(V), c = c.subarray(p)), V = new Uint8Array(512), ee = 0), V.set(c, ee), ee += c.length;
      }
  }
  function Q(i, c) {
    return g(i, c), !0;
  }
  function Te(i) {
    V && 0 < ee && (i.enqueue(new Uint8Array(V.buffer, 0, ee)), V = null, ee = 0);
  }
  var K = new TextEncoder();
  function E(i) {
    return K.encode(i);
  }
  function D(i) {
    return K.encode(i);
  }
  function ve(i, c) {
    typeof i.error == "function" ? i.error(c) : i.close();
  }
  var N = Object.prototype.hasOwnProperty, ce = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Re = {}, xe = {};
  function ke(i) {
    return N.call(xe, i) ? !0 : N.call(Re, i) ? !1 : ce.test(i) ? xe[i] = !0 : (Re[i] = !0, !1);
  }
  function $(i, c, p, y, I, C, _) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = y, this.attributeNamespace = I, this.mustUseProperty = p, this.propertyName = i, this.type = c, this.sanitizeURL = C, this.removeEmptyString = _;
  }
  var F = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    F[i] = new $(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var c = i[0];
    F[c] = new $(c, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    F[i] = new $(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    F[i] = new $(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    F[i] = new $(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    F[i] = new $(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    F[i] = new $(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    F[i] = new $(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    F[i] = new $(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var le = /[\-:]([a-z])/g;
  function L(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var c = i.replace(
      le,
      L
    );
    F[c] = new $(c, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var c = i.replace(le, L);
    F[c] = new $(c, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var c = i.replace(le, L);
    F[c] = new $(c, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    F[i] = new $(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), F.xlinkHref = new $("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    F[i] = new $(i, 1, !1, i.toLowerCase(), null, !0, !0);
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
  Object.keys(Y).forEach(function(i) {
    k.forEach(function(c) {
      c = c + i.charAt(0).toUpperCase() + i.substring(1), Y[c] = Y[i];
    });
  });
  var X = /["'&<>]/;
  function fe(i) {
    if (typeof i == "boolean" || typeof i == "number")
      return "" + i;
    i = "" + i;
    var c = X.exec(i);
    if (c) {
      var p = "", y, I = 0;
      for (y = c.index; y < i.length; y++) {
        switch (i.charCodeAt(y)) {
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
        I !== y && (p += i.substring(I, y)), I = y + 1, p += c;
      }
      i = I !== y ? p + i.substring(I, y) : p;
    }
    return i;
  }
  var De = /([A-Z])/g, ie = /^ms-/, Oe = Array.isArray, Pe = D("<script>"), Ue = D("<\/script>"), nt = D('<script src="'), Xe = D('<script type="module" src="'), vt = D('" async=""><\/script>'), Je = /(<\/|<)(s)(cript)/gi;
  function qe(i, c, p, y) {
    return "" + c + (p === "s" ? "\\u0073" : "\\u0053") + y;
  }
  function et(i, c, p, y, I) {
    i = i === void 0 ? "" : i, c = c === void 0 ? Pe : D('<script nonce="' + fe(c) + '">');
    var C = [];
    if (p !== void 0 && C.push(c, E(("" + p).replace(Je, qe)), Ue), y !== void 0)
      for (p = 0; p < y.length; p++)
        C.push(nt, E(fe(y[p])), vt);
    if (I !== void 0)
      for (y = 0; y < I.length; y++)
        C.push(Xe, E(fe(I[y])), vt);
    return { bootstrapChunks: C, startInlineScript: c, placeholderPrefix: D(i + "P:"), segmentPrefix: D(i + "S:"), boundaryPrefix: i + "B:", idPrefix: i, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Ve(i, c) {
    return { insertionMode: i, selectedValue: c };
  }
  function U(i) {
    return Ve(i === "http://www.w3.org/2000/svg" ? 2 : i === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function W(i, c, p) {
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
    return 4 <= i.insertionMode || i.insertionMode === 0 ? Ve(1, null) : i;
  }
  var q = D("<!-- -->");
  function ge(i, c, p, y) {
    return c === "" ? y : (y && i.push(q), i.push(E(fe(c))), !0);
  }
  var se = /* @__PURE__ */ new Map(), re = D(' style="'), te = D(":"), he = D(";");
  function Se(i, c, p) {
    if (typeof p != "object")
      throw Error(j(62));
    c = !0;
    for (var y in p)
      if (N.call(p, y)) {
        var I = p[y];
        if (I != null && typeof I != "boolean" && I !== "") {
          if (y.indexOf("--") === 0) {
            var C = E(fe(y));
            I = E(fe(("" + I).trim()));
          } else {
            C = y;
            var _ = se.get(C);
            _ !== void 0 || (_ = D(fe(C.replace(De, "-$1").toLowerCase().replace(ie, "-ms-"))), se.set(C, _)), C = _, I = typeof I == "number" ? I === 0 || N.call(Y, y) ? E("" + I) : E(I + "px") : E(fe(("" + I).trim()));
          }
          c ? (c = !1, i.push(re, C, te, I)) : i.push(he, C, te, I);
        }
      }
    c || i.push(Ee);
  }
  var me = D(" "), ue = D('="'), Ee = D('"'), G = D('=""');
  function Ce(i, c, p, y) {
    switch (p) {
      case "style":
        Se(i, c, y);
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
            y && i.push(me, p, G);
            break;
          case 4:
            y === !0 ? i.push(me, p, G) : y !== !1 && i.push(me, p, ue, E(fe(y)), Ee);
            break;
          case 5:
            isNaN(y) || i.push(me, p, ue, E(fe(y)), Ee);
            break;
          case 6:
            !isNaN(y) && 1 <= y && i.push(me, p, ue, E(fe(y)), Ee);
            break;
          default:
            c.sanitizeURL && (y = "" + y), i.push(me, p, ue, E(fe(y)), Ee);
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
        i.push(me, E(p), ue, E(fe(y)), Ee);
      }
    }
  }
  var Be = D(">"), ct = D("/>");
  function zt(i, c, p) {
    if (c != null) {
      if (p != null)
        throw Error(j(60));
      if (typeof c != "object" || !("__html" in c))
        throw Error(j(61));
      c = c.__html, c != null && i.push(E("" + c));
    }
  }
  function dn(i) {
    var c = "";
    return O.Children.forEach(i, function(p) {
      p != null && (c += p);
    }), c;
  }
  var mt = D(' selected=""');
  function lr(i, c, p, y) {
    i.push(rt(p));
    var I = p = null, C;
    for (C in c)
      if (N.call(c, C)) {
        var _ = c[C];
        if (_ != null)
          switch (C) {
            case "children":
              p = _;
              break;
            case "dangerouslySetInnerHTML":
              I = _;
              break;
            default:
              Ce(i, y, C, _);
          }
      }
    return i.push(Be), zt(i, I, p), typeof p == "string" ? (i.push(E(fe(p))), null) : p;
  }
  var sr = D(`
`), pn = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, yt = /* @__PURE__ */ new Map();
  function rt(i) {
    var c = yt.get(i);
    if (c === void 0) {
      if (!pn.test(i))
        throw Error(j(65, i));
      c = D("<" + i), yt.set(i, c);
    }
    return c;
  }
  var Ke = D("<!DOCTYPE html>");
  function Nr(i, c, p, y, I) {
    switch (c) {
      case "select":
        i.push(rt("select"));
        var C = null, _ = null;
        for (be in p)
          if (N.call(p, be)) {
            var H = p[be];
            if (H != null)
              switch (be) {
                case "children":
                  C = H;
                  break;
                case "dangerouslySetInnerHTML":
                  _ = H;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  Ce(i, y, be, H);
              }
          }
        return i.push(Be), zt(i, _, C), C;
      case "option":
        _ = I.selectedValue, i.push(rt("option"));
        var pe = H = null, we = null, be = null;
        for (C in p)
          if (N.call(p, C)) {
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
                  Ce(i, y, C, ze);
              }
          }
        if (_ != null)
          if (p = pe !== null ? "" + pe : dn(H), Oe(_)) {
            for (y = 0; y < _.length; y++)
              if ("" + _[y] === p) {
                i.push(mt);
                break;
              }
          } else
            "" + _ === p && i.push(mt);
        else
          we && i.push(mt);
        return i.push(Be), zt(i, be, H), H;
      case "textarea":
        i.push(rt("textarea")), be = _ = C = null;
        for (H in p)
          if (N.call(p, H) && (pe = p[H], pe != null))
            switch (H) {
              case "children":
                be = pe;
                break;
              case "value":
                C = pe;
                break;
              case "defaultValue":
                _ = pe;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(j(91));
              default:
                Ce(i, y, H, pe);
            }
        if (C === null && _ !== null && (C = _), i.push(Be), be != null) {
          if (C != null)
            throw Error(j(92));
          if (Oe(be) && 1 < be.length)
            throw Error(j(93));
          C = "" + be;
        }
        return typeof C == "string" && C[0] === `
` && i.push(sr), C !== null && i.push(E(fe("" + C))), null;
      case "input":
        i.push(rt("input")), pe = be = H = C = null;
        for (_ in p)
          if (N.call(p, _) && (we = p[_], we != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(j(399, "input"));
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
                Ce(i, y, _, we);
            }
        return be !== null ? Ce(
          i,
          y,
          "checked",
          be
        ) : pe !== null && Ce(i, y, "checked", pe), C !== null ? Ce(i, y, "value", C) : H !== null && Ce(i, y, "value", H), i.push(ct), null;
      case "menuitem":
        i.push(rt("menuitem"));
        for (var ht in p)
          if (N.call(p, ht) && (C = p[ht], C != null))
            switch (ht) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(j(400));
              default:
                Ce(i, y, ht, C);
            }
        return i.push(Be), null;
      case "title":
        i.push(rt("title")), C = null;
        for (ze in p)
          if (N.call(p, ze) && (_ = p[ze], _ != null))
            switch (ze) {
              case "children":
                C = _;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(j(434));
              default:
                Ce(i, y, ze, _);
            }
        return i.push(Be), C;
      case "listing":
      case "pre":
        i.push(rt(c)), _ = C = null;
        for (pe in p)
          if (N.call(p, pe) && (H = p[pe], H != null))
            switch (pe) {
              case "children":
                C = H;
                break;
              case "dangerouslySetInnerHTML":
                _ = H;
                break;
              default:
                Ce(i, y, pe, H);
            }
        if (i.push(Be), _ != null) {
          if (C != null)
            throw Error(j(60));
          if (typeof _ != "object" || !("__html" in _))
            throw Error(j(61));
          p = _.__html, p != null && (typeof p == "string" && 0 < p.length && p[0] === `
` ? i.push(sr, E(p)) : i.push(E("" + p)));
        }
        return typeof C == "string" && C[0] === `
` && i.push(sr), C;
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
        i.push(rt(c));
        for (var wt in p)
          if (N.call(p, wt) && (C = p[wt], C != null))
            switch (wt) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(j(399, c));
              default:
                Ce(i, y, wt, C);
            }
        return i.push(ct), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return lr(i, p, c, y);
      case "html":
        return I.insertionMode === 0 && i.push(Ke), lr(i, p, c, y);
      default:
        if (c.indexOf("-") === -1 && typeof p.is != "string")
          return lr(i, p, c, y);
        i.push(rt(c)), _ = C = null;
        for (we in p)
          if (N.call(p, we) && (H = p[we], H != null))
            switch (we) {
              case "children":
                C = H;
                break;
              case "dangerouslySetInnerHTML":
                _ = H;
                break;
              case "style":
                Se(i, y, H);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                ke(we) && typeof H != "function" && typeof H != "symbol" && i.push(me, E(we), ue, E(fe(H)), Ee);
            }
        return i.push(Be), zt(i, _, C), C;
    }
  }
  var Lr = D("</"), _r = D(">"), Ze = D('<template id="'), Fr = D('"></template>'), hn = D("<!--$-->"), vn = D('<!--$?--><template id="'), zr = D('"></template>'), Sr = D("<!--$!-->"), Fn = D("<!--/$-->"), Ur = D("<template"), $t = D('"'), Br = D(' data-dgst="');
  D(' data-msg="'), D(' data-stck="');
  var gn = D("></template>");
  function st(i, c, p) {
    if (g(i, vn), p === null)
      throw Error(j(395));
    return g(i, p), Q(i, zr);
  }
  var Mt = D('<div hidden id="'), Gt = D('">'), Ae = D("</div>"), Zt = D('<svg aria-hidden="true" style="display:none" id="'), br = D('">'), ur = D("</svg>"), It = D('<math aria-hidden="true" style="display:none" id="'), xr = D('">'), Ut = D("</math>"), $e = D('<table hidden id="'), Wr = D('">'), Hr = D("</table>"), mn = D('<table hidden><tbody id="'), Qe = D('">'), Yr = D("</tbody></table>"), zn = D('<table hidden><tr id="'), Un = D('">'), Dt = D("</tr></table>"), Vr = D('<table hidden><colgroup id="'), wr = D('">'), $r = D("</colgroup></table>");
  function cr(i, c, p, y) {
    switch (p.insertionMode) {
      case 0:
      case 1:
        return g(i, Mt), g(i, c.segmentPrefix), g(i, E(y.toString(16))), Q(i, Gt);
      case 2:
        return g(i, Zt), g(i, c.segmentPrefix), g(i, E(y.toString(16))), Q(i, br);
      case 3:
        return g(i, It), g(i, c.segmentPrefix), g(i, E(y.toString(16))), Q(i, xr);
      case 4:
        return g(i, $e), g(i, c.segmentPrefix), g(i, E(y.toString(16))), Q(i, Wr);
      case 5:
        return g(i, mn), g(i, c.segmentPrefix), g(i, E(y.toString(16))), Q(i, Qe);
      case 6:
        return g(i, zn), g(i, c.segmentPrefix), g(i, E(y.toString(16))), Q(i, Un);
      case 7:
        return g(
          i,
          Vr
        ), g(i, c.segmentPrefix), g(i, E(y.toString(16))), Q(i, wr);
      default:
        throw Error(j(397));
    }
  }
  function Qt(i, c) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return Q(i, Ae);
      case 2:
        return Q(i, ur);
      case 3:
        return Q(i, Ut);
      case 4:
        return Q(i, Hr);
      case 5:
        return Q(i, Yr);
      case 6:
        return Q(i, Dt);
      case 7:
        return Q(i, $r);
      default:
        throw Error(j(397));
    }
  }
  var Bn = D('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Gr = D('$RS("'), Tr = D('","'), Xt = D('")<\/script>'), Bt = D('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), Rt = D('$RC("'), fr = D('","'), dr = D('")<\/script>'), gt = D('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), He = D('$RX("'), At = D('"'), St = D(")<\/script>"), tt = D(","), Er = /[<\u2028\u2029]/g;
  function Ot(i) {
    return JSON.stringify(i).replace(Er, function(c) {
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
  var Pt = Object.assign, ut = Symbol.for("react.element"), Wt = Symbol.for("react.portal"), Jt = Symbol.for("react.fragment"), Zr = Symbol.for("react.strict_mode"), Qr = Symbol.for("react.profiler"), kr = Symbol.for("react.provider"), Kt = Symbol.for("react.context"), Xr = Symbol.for("react.forward_ref"), Cr = Symbol.for("react.suspense"), Mr = Symbol.for("react.suspense_list"), o = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), h = Symbol.for("react.scope"), m = Symbol.for("react.debug_trace_mode"), M = Symbol.for("react.legacy_hidden"), T = Symbol.for("react.default_value"), P = Symbol.iterator;
  function B(i) {
    if (i == null)
      return null;
    if (typeof i == "function")
      return i.displayName || i.name || null;
    if (typeof i == "string")
      return i;
    switch (i) {
      case Jt:
        return "Fragment";
      case Wt:
        return "Portal";
      case Qr:
        return "Profiler";
      case Zr:
        return "StrictMode";
      case Cr:
        return "Suspense";
      case Mr:
        return "SuspenseList";
    }
    if (typeof i == "object")
      switch (i.$$typeof) {
        case Kt:
          return (i.displayName || "Context") + ".Consumer";
        case kr:
          return (i._context.displayName || "Context") + ".Provider";
        case Xr:
          var c = i.render;
          return i = i.displayName, i || (i = c.displayName || c.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
        case o:
          return c = i.displayName || null, c !== null ? c : B(i.type) || "Memo";
        case u:
          c = i._payload, i = i._init;
          try {
            return B(i(c));
          } catch {
          }
      }
    return null;
  }
  var ne = {};
  function de(i, c) {
    if (i = i.contextTypes, !i)
      return ne;
    var p = {}, y;
    for (y in i)
      p[y] = c[y];
    return p;
  }
  var ae = null;
  function Me(i, c) {
    if (i !== c) {
      i.context._currentValue = i.parentValue, i = i.parent;
      var p = c.parent;
      if (i === null) {
        if (p !== null)
          throw Error(j(401));
      } else {
        if (p === null)
          throw Error(j(401));
        Me(i, p);
      }
      c.context._currentValue = c.value;
    }
  }
  function ft(i) {
    i.context._currentValue = i.parentValue, i = i.parent, i !== null && ft(i);
  }
  function ot(i) {
    var c = i.parent;
    c !== null && ot(c), i.context._currentValue = i.value;
  }
  function it(i, c) {
    if (i.context._currentValue = i.parentValue, i = i.parent, i === null)
      throw Error(j(402));
    i.depth === c.depth ? Me(i, c) : it(i, c);
  }
  function Ht(i, c) {
    var p = c.parent;
    if (p === null)
      throw Error(j(402));
    i.depth === p.depth ? Me(i, p) : Ht(i, p), c.context._currentValue = c.value;
  }
  function bt(i) {
    var c = ae;
    c !== i && (c === null ? ot(i) : i === null ? ft(c) : c.depth === i.depth ? Me(c, i) : c.depth > i.depth ? it(c, i) : Ht(c, i), ae = i);
  }
  var Ir = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, c) {
    i = i._reactInternals, i.queue !== null && i.queue.push(c);
  }, enqueueReplaceState: function(i, c) {
    i = i._reactInternals, i.replace = !0, i.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function qt(i, c, p, y) {
    var I = i.state !== void 0 ? i.state : null;
    i.updater = Ir, i.props = p, i.state = I;
    var C = { queue: [], replace: !1 };
    i._reactInternals = C;
    var _ = c.contextType;
    if (i.context = typeof _ == "object" && _ !== null ? _._currentValue : y, _ = c.getDerivedStateFromProps, typeof _ == "function" && (_ = _(p, I), I = _ == null ? I : Pt({}, I, _), i.state = I), typeof c.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function"))
      if (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && Ir.enqueueReplaceState(i, i.state, null), C.queue !== null && 0 < C.queue.length)
        if (c = C.queue, _ = C.replace, C.queue = null, C.replace = !1, _ && c.length === 1)
          i.state = c[0];
        else {
          for (C = _ ? c[0] : i.state, I = !0, _ = _ ? 1 : 0; _ < c.length; _++) {
            var H = c[_];
            H = typeof H == "function" ? H.call(i, C, p, y) : H, H != null && (I ? (I = !1, C = Pt({}, C, H)) : Pt(C, H));
          }
          i.state = C;
        }
      else
        C.queue = null;
  }
  var pr = { id: 1, overflow: "" };
  function Yt(i, c, p) {
    var y = i.id;
    i = i.overflow;
    var I = 32 - Jr(y) - 1;
    y &= ~(1 << I), p += 1;
    var C = 32 - Jr(c) + I;
    if (30 < C) {
      var _ = I - I % 5;
      return C = (y & (1 << _) - 1).toString(32), y >>= _, I -= _, { id: 1 << 32 - Jr(c) + I | p << I | y, overflow: C + i };
    }
    return { id: 1 << C | p << I | y, overflow: i };
  }
  var Jr = Math.clz32 ? Math.clz32 : Wn, ki = Math.log, Ci = Math.LN2;
  function Wn(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (ki(i) / Ci | 0) | 0;
  }
  function Mi(i, c) {
    return i === c && (i !== 0 || 1 / i === 1 / c) || i !== i && c !== c;
  }
  var Hn = typeof Object.is == "function" ? Object.is : Mi, Vt = null, Kr = null, yn = null, Ne = null, er = !1, dt = !1, hr = 0, tr = null, Sn = 0;
  function rr() {
    if (Vt === null)
      throw Error(j(321));
    return Vt;
  }
  function xt() {
    if (0 < Sn)
      throw Error(j(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Yn() {
    return Ne === null ? yn === null ? (er = !1, yn = Ne = xt()) : (er = !0, Ne = yn) : Ne.next === null ? (er = !1, Ne = Ne.next = xt()) : (er = !0, Ne = Ne.next), Ne;
  }
  function Vn() {
    Kr = Vt = null, dt = !1, yn = null, Sn = 0, Ne = tr = null;
  }
  function Io(i, c) {
    return typeof c == "function" ? c(i) : c;
  }
  function Do(i, c, p) {
    if (Vt = rr(), Ne = Yn(), er) {
      var y = Ne.queue;
      if (c = y.dispatch, tr !== null && (p = tr.get(y), p !== void 0)) {
        tr.delete(y), y = Ne.memoizedState;
        do
          y = i(y, p.action), p = p.next;
        while (p !== null);
        return Ne.memoizedState = y, [y, c];
      }
      return [Ne.memoizedState, c];
    }
    return i = i === Io ? typeof c == "function" ? c() : c : p !== void 0 ? p(c) : c, Ne.memoizedState = i, i = Ne.queue = { last: null, dispatch: null }, i = i.dispatch = Ii.bind(null, Vt, i), [Ne.memoizedState, i];
  }
  function Ro(i, c) {
    if (Vt = rr(), Ne = Yn(), c = c === void 0 ? null : c, Ne !== null) {
      var p = Ne.memoizedState;
      if (p !== null && c !== null) {
        var y = p[1];
        e:
          if (y === null)
            y = !1;
          else {
            for (var I = 0; I < y.length && I < c.length; I++)
              if (!Hn(c[I], y[I])) {
                y = !1;
                break e;
              }
            y = !0;
          }
        if (y)
          return p[0];
      }
    }
    return i = i(), Ne.memoizedState = [i, c], i;
  }
  function Ii(i, c, p) {
    if (25 <= Sn)
      throw Error(j(301));
    if (i === Vt)
      if (dt = !0, i = { action: p, next: null }, tr === null && (tr = /* @__PURE__ */ new Map()), p = tr.get(c), p === void 0)
        tr.set(c, i);
      else {
        for (c = p; c.next !== null; )
          c = c.next;
        c.next = i;
      }
  }
  function Di() {
    throw Error(j(394));
  }
  function bn() {
  }
  var xn = { readContext: function(i) {
    return i._currentValue;
  }, useContext: function(i) {
    return rr(), i._currentValue;
  }, useMemo: Ro, useReducer: Do, useRef: function(i) {
    Vt = rr(), Ne = Yn();
    var c = Ne.memoizedState;
    return c === null ? (i = { current: i }, Ne.memoizedState = i) : c;
  }, useState: function(i) {
    return Do(Io, i);
  }, useInsertionEffect: bn, useLayoutEffect: function() {
  }, useCallback: function(i, c) {
    return Ro(function() {
      return i;
    }, c);
  }, useImperativeHandle: bn, useEffect: bn, useDebugValue: bn, useDeferredValue: function(i) {
    return rr(), i;
  }, useTransition: function() {
    return rr(), [!1, Di];
  }, useId: function() {
    var i = Kr.treeContext, c = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - Jr(i) - 1)).toString(32) + c;
    var p = wn;
    if (p === null)
      throw Error(j(404));
    return c = hr++, i = ":" + p.idPrefix + "R" + i, 0 < c && (i += "H" + c.toString(32)), i + ":";
  }, useMutableSource: function(i, c) {
    return rr(), c(i._source);
  }, useSyncExternalStore: function(i, c, p) {
    if (p === void 0)
      throw Error(j(407));
    return p();
  } }, wn = null, qr = O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Ri(i) {
    return console.error(i), null;
  }
  function en() {
  }
  function $n(i, c, p, y, I, C, _, H, pe) {
    var we = [], be = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: y === void 0 ? 12800 : y, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: be, pingedTasks: we, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: I === void 0 ? Ri : I, onAllReady: C === void 0 ? en : C, onShellReady: _ === void 0 ? en : _, onShellError: H === void 0 ? en : H, onFatalError: pe === void 0 ? en : pe }, p = Dr(c, 0, null, p, !1, !1), p.parentFlushed = !0, i = Gn(c, i, null, p, be, ne, null, pr), we.push(i), c;
  }
  function Gn(i, c, p, y, I, C, _, H) {
    i.allPendingTasks++, p === null ? i.pendingRootTasks++ : p.pendingTasks++;
    var pe = { node: c, ping: function() {
      var we = i.pingedTasks;
      we.push(pe), we.length === 1 && Lo(i);
    }, blockedBoundary: p, blockedSegment: y, abortSet: I, legacyContext: C, context: _, treeContext: H };
    return I.add(pe), pe;
  }
  function Dr(i, c, p, y, I, C) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: y, boundary: p, lastPushedText: I, textEmbedded: C };
  }
  function Rr(i, c) {
    if (i = i.onError(c), i != null && typeof i != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function Tn(i, c) {
    var p = i.onShellError;
    p(c), p = i.onFatalError, p(c), i.destination !== null ? (i.status = 2, ve(i.destination, c)) : (i.status = 1, i.fatalError = c);
  }
  function Ao(i, c, p, y, I) {
    for (Vt = {}, Kr = c, hr = 0, i = p(y, I); dt; )
      dt = !1, hr = 0, Sn += 1, Ne = null, i = p(y, I);
    return Vn(), i;
  }
  function Zn(i, c, p, y) {
    var I = p.render(), C = y.childContextTypes;
    if (C != null) {
      var _ = c.legacyContext;
      if (typeof p.getChildContext != "function")
        y = _;
      else {
        p = p.getChildContext();
        for (var H in p)
          if (!(H in C))
            throw Error(j(108, B(y) || "Unknown", H));
        y = Pt({}, _, p);
      }
      c.legacyContext = y, pt(i, c, I), c.legacyContext = _;
    } else
      pt(i, c, I);
  }
  function Oo(i, c) {
    if (i && i.defaultProps) {
      c = Pt({}, c), i = i.defaultProps;
      for (var p in i)
        c[p] === void 0 && (c[p] = i[p]);
      return c;
    }
    return c;
  }
  function En(i, c, p, y, I) {
    if (typeof p == "function")
      if (p.prototype && p.prototype.isReactComponent) {
        I = de(p, c.legacyContext);
        var C = p.contextType;
        C = new p(y, typeof C == "object" && C !== null ? C._currentValue : I), qt(C, p, y, I), Zn(i, c, C, p);
      } else {
        C = de(p, c.legacyContext), I = Ao(i, c, p, y, C);
        var _ = hr !== 0;
        if (typeof I == "object" && I !== null && typeof I.render == "function" && I.$$typeof === void 0)
          qt(I, p, y, C), Zn(i, c, I, p);
        else if (_) {
          y = c.treeContext, c.treeContext = Yt(y, 1, 0);
          try {
            pt(i, c, I);
          } finally {
            c.treeContext = y;
          }
        } else
          pt(i, c, I);
      }
    else if (typeof p == "string") {
      switch (I = c.blockedSegment, C = Nr(I.chunks, p, y, i.responseState, I.formatContext), I.lastPushedText = !1, _ = I.formatContext, I.formatContext = W(_, p, y), kn(i, c, C), I.formatContext = _, p) {
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
          I.chunks.push(Lr, E(p), _r);
      }
      I.lastPushedText = !1;
    } else {
      switch (p) {
        case M:
        case m:
        case Zr:
        case Qr:
        case Jt:
          pt(i, c, y.children);
          return;
        case Mr:
          pt(i, c, y.children);
          return;
        case h:
          throw Error(j(343));
        case Cr:
          e: {
            p = c.blockedBoundary, I = c.blockedSegment, C = y.fallback, y = y.children, _ = /* @__PURE__ */ new Set();
            var H = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: _, errorDigest: null }, pe = Dr(i, I.chunks.length, H, I.formatContext, !1, !1);
            I.children.push(pe), I.lastPushedText = !1;
            var we = Dr(i, 0, null, I.formatContext, !1, !1);
            we.parentFlushed = !0, c.blockedBoundary = H, c.blockedSegment = we;
            try {
              if (kn(
                i,
                c,
                y
              ), we.lastPushedText && we.textEmbedded && we.chunks.push(q), we.status = 1, Cn(H, we), H.pendingTasks === 0)
                break e;
            } catch (be) {
              we.status = 4, H.forceClientRender = !0, H.errorDigest = Rr(i, be);
            } finally {
              c.blockedBoundary = p, c.blockedSegment = I;
            }
            c = Gn(i, C, p, pe, _, c.legacyContext, c.context, c.treeContext), i.pingedTasks.push(c);
          }
          return;
      }
      if (typeof p == "object" && p !== null)
        switch (p.$$typeof) {
          case Xr:
            if (y = Ao(i, c, p.render, y, I), hr !== 0) {
              p = c.treeContext, c.treeContext = Yt(p, 1, 0);
              try {
                pt(i, c, y);
              } finally {
                c.treeContext = p;
              }
            } else
              pt(i, c, y);
            return;
          case o:
            p = p.type, y = Oo(p, y), En(i, c, p, y, I);
            return;
          case kr:
            if (I = y.children, p = p._context, y = y.value, C = p._currentValue, p._currentValue = y, _ = ae, ae = y = { parent: _, depth: _ === null ? 0 : _.depth + 1, context: p, parentValue: C, value: y }, c.context = y, pt(i, c, I), i = ae, i === null)
              throw Error(j(403));
            y = i.parentValue, i.context._currentValue = y === T ? i.context._defaultValue : y, i = ae = i.parent, c.context = i;
            return;
          case Kt:
            y = y.children, y = y(p._currentValue), pt(i, c, y);
            return;
          case u:
            I = p._init, p = I(p._payload), y = Oo(p, y), En(i, c, p, y, void 0);
            return;
        }
      throw Error(j(
        130,
        p == null ? p : typeof p,
        ""
      ));
    }
  }
  function pt(i, c, p) {
    if (c.node = p, typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ut:
          En(i, c, p.type, p.props, p.ref);
          return;
        case Wt:
          throw Error(j(257));
        case u:
          var y = p._init;
          p = y(p._payload), pt(i, c, p);
          return;
      }
      if (Oe(p)) {
        Po(i, c, p);
        return;
      }
      if (p === null || typeof p != "object" ? y = null : (y = P && p[P] || p["@@iterator"], y = typeof y == "function" ? y : null), y && (y = y.call(p))) {
        if (p = y.next(), !p.done) {
          var I = [];
          do
            I.push(p.value), p = y.next();
          while (!p.done);
          Po(i, c, I);
        }
        return;
      }
      throw i = Object.prototype.toString.call(p), Error(j(31, i === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : i));
    }
    typeof p == "string" ? (y = c.blockedSegment, y.lastPushedText = ge(c.blockedSegment.chunks, p, i.responseState, y.lastPushedText)) : typeof p == "number" && (y = c.blockedSegment, y.lastPushedText = ge(c.blockedSegment.chunks, "" + p, i.responseState, y.lastPushedText));
  }
  function Po(i, c, p) {
    for (var y = p.length, I = 0; I < y; I++) {
      var C = c.treeContext;
      c.treeContext = Yt(C, y, I);
      try {
        kn(i, c, p[I]);
      } finally {
        c.treeContext = C;
      }
    }
  }
  function kn(i, c, p) {
    var y = c.blockedSegment.formatContext, I = c.legacyContext, C = c.context;
    try {
      return pt(i, c, p);
    } catch (pe) {
      if (Vn(), typeof pe == "object" && pe !== null && typeof pe.then == "function") {
        p = pe;
        var _ = c.blockedSegment, H = Dr(i, _.chunks.length, null, _.formatContext, _.lastPushedText, !0);
        _.children.push(H), _.lastPushedText = !1, i = Gn(i, c.node, c.blockedBoundary, H, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, p.then(i, i), c.blockedSegment.formatContext = y, c.legacyContext = I, c.context = C, bt(C);
      } else
        throw c.blockedSegment.formatContext = y, c.legacyContext = I, c.context = C, bt(C), pe;
    }
  }
  function Ai(i) {
    var c = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, No(this, c, i);
  }
  function jo(i, c, p) {
    var y = i.blockedBoundary;
    i.blockedSegment.status = 3, y === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.close())) : (y.pendingTasks--, y.forceClientRender || (y.forceClientRender = !0, i = p === void 0 ? Error(j(432)) : p, y.errorDigest = c.onError(i), y.parentFlushed && c.clientRenderedBoundaries.push(y)), y.fallbackAbortableTasks.forEach(function(I) {
      return jo(I, c, p);
    }), y.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (y = c.onAllReady, y()));
  }
  function Cn(i, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var p = c.children[0];
      p.id = c.id, p.parentFlushed = !0, p.status === 1 && Cn(i, p);
    } else
      i.completedSegments.push(c);
  }
  function No(i, c, p) {
    if (c === null) {
      if (p.parentFlushed) {
        if (i.completedRootSegment !== null)
          throw Error(j(389));
        i.completedRootSegment = p;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = en, c = i.onShellReady, c());
    } else
      c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (p.parentFlushed && p.status === 1 && Cn(c, p), c.parentFlushed && i.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(Ai, i), c.fallbackAbortableTasks.clear()) : p.parentFlushed && p.status === 1 && (Cn(c, p), c.completedSegments.length === 1 && c.parentFlushed && i.partialBoundaries.push(c)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function Lo(i) {
    if (i.status !== 2) {
      var c = ae, p = qr.current;
      qr.current = xn;
      var y = wn;
      wn = i.responseState;
      try {
        var I = i.pingedTasks, C;
        for (C = 0; C < I.length; C++) {
          var _ = I[C], H = i, pe = _.blockedSegment;
          if (pe.status === 0) {
            bt(_.context);
            try {
              pt(H, _, _.node), pe.lastPushedText && pe.textEmbedded && pe.chunks.push(q), _.abortSet.delete(_), pe.status = 1, No(H, _.blockedBoundary, pe);
            } catch (Tt) {
              if (Vn(), typeof Tt == "object" && Tt !== null && typeof Tt.then == "function") {
                var we = _.ping;
                Tt.then(we, we);
              } else {
                _.abortSet.delete(_), pe.status = 4;
                var be = _.blockedBoundary, ze = Tt, ht = Rr(H, ze);
                if (be === null ? Tn(H, ze) : (be.pendingTasks--, be.forceClientRender || (be.forceClientRender = !0, be.errorDigest = ht, be.parentFlushed && H.clientRenderedBoundaries.push(be))), H.allPendingTasks--, H.allPendingTasks === 0) {
                  var wt = H.onAllReady;
                  wt();
                }
              }
            } finally {
            }
          }
        }
        I.splice(0, C), i.destination !== null && Qn(i, i.destination);
      } catch (Tt) {
        Rr(i, Tt), Tn(i, Tt);
      } finally {
        wn = y, qr.current = p, p === xn && bt(c);
      }
    }
  }
  function Mn(i, c, p) {
    switch (p.parentFlushed = !0, p.status) {
      case 0:
        var y = p.id = i.nextSegmentId++;
        return p.lastPushedText = !1, p.textEmbedded = !1, i = i.responseState, g(c, Ze), g(c, i.placeholderPrefix), i = E(y.toString(16)), g(c, i), Q(c, Fr);
      case 1:
        p.status = 2;
        var I = !0;
        y = p.chunks;
        var C = 0;
        p = p.children;
        for (var _ = 0; _ < p.length; _++) {
          for (I = p[_]; C < I.index; C++)
            g(c, y[C]);
          I = In(i, c, I);
        }
        for (; C < y.length - 1; C++)
          g(c, y[C]);
        return C < y.length && (I = Q(c, y[C])), I;
      default:
        throw Error(j(390));
    }
  }
  function In(i, c, p) {
    var y = p.boundary;
    if (y === null)
      return Mn(i, c, p);
    if (y.parentFlushed = !0, y.forceClientRender)
      y = y.errorDigest, Q(c, Sr), g(c, Ur), y && (g(c, Br), g(c, E(fe(y))), g(c, $t)), Q(c, gn), Mn(i, c, p);
    else if (0 < y.pendingTasks) {
      y.rootSegmentID = i.nextSegmentId++, 0 < y.completedSegments.length && i.partialBoundaries.push(y);
      var I = i.responseState, C = I.nextSuspenseID++;
      I = D(I.boundaryPrefix + C.toString(16)), y = y.id = I, st(c, i.responseState, y), Mn(i, c, p);
    } else if (y.byteSize > i.progressiveChunkSize)
      y.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(y), st(c, i.responseState, y.id), Mn(i, c, p);
    else {
      if (Q(c, hn), p = y.completedSegments, p.length !== 1)
        throw Error(j(391));
      In(i, c, p[0]);
    }
    return Q(c, Fn);
  }
  function _o(i, c, p) {
    return cr(c, i.responseState, p.formatContext, p.id), In(i, c, p), Qt(c, p.formatContext);
  }
  function Fo(i, c, p) {
    for (var y = p.completedSegments, I = 0; I < y.length; I++)
      zo(i, c, p, y[I]);
    if (y.length = 0, i = i.responseState, y = p.id, p = p.rootSegmentID, g(c, i.startInlineScript), i.sentCompleteBoundaryFunction ? g(c, Rt) : (i.sentCompleteBoundaryFunction = !0, g(c, Bt)), y === null)
      throw Error(j(395));
    return p = E(p.toString(16)), g(c, y), g(c, fr), g(c, i.segmentPrefix), g(c, p), Q(c, dr);
  }
  function zo(i, c, p, y) {
    if (y.status === 2)
      return !0;
    var I = y.id;
    if (I === -1) {
      if ((y.id = p.rootSegmentID) === -1)
        throw Error(j(392));
      return _o(i, c, y);
    }
    return _o(i, c, y), i = i.responseState, g(c, i.startInlineScript), i.sentCompleteSegmentFunction ? g(c, Gr) : (i.sentCompleteSegmentFunction = !0, g(c, Bn)), g(c, i.segmentPrefix), I = E(I.toString(16)), g(c, I), g(c, Tr), g(c, i.placeholderPrefix), g(c, I), Q(c, Xt);
  }
  function Qn(i, c) {
    V = new Uint8Array(512), ee = 0;
    try {
      var p = i.completedRootSegment;
      if (p !== null && i.pendingRootTasks === 0) {
        In(i, c, p), i.completedRootSegment = null;
        var y = i.responseState.bootstrapChunks;
        for (p = 0; p < y.length - 1; p++)
          g(c, y[p]);
        p < y.length && Q(c, y[p]);
      }
      var I = i.clientRenderedBoundaries, C;
      for (C = 0; C < I.length; C++) {
        var _ = I[C];
        y = c;
        var H = i.responseState, pe = _.id, we = _.errorDigest, be = _.errorMessage, ze = _.errorComponentStack;
        if (g(y, H.startInlineScript), H.sentClientRenderFunction ? g(y, He) : (H.sentClientRenderFunction = !0, g(
          y,
          gt
        )), pe === null)
          throw Error(j(395));
        g(y, pe), g(y, At), (we || be || ze) && (g(y, tt), g(y, E(Ot(we || "")))), (be || ze) && (g(y, tt), g(y, E(Ot(be || "")))), ze && (g(y, tt), g(y, E(Ot(ze)))), Q(y, St);
      }
      I.splice(0, C);
      var ht = i.completedBoundaries;
      for (C = 0; C < ht.length; C++)
        Fo(i, c, ht[C]);
      ht.splice(0, C), Te(c), V = new Uint8Array(512), ee = 0;
      var wt = i.partialBoundaries;
      for (C = 0; C < wt.length; C++) {
        var Tt = wt[C];
        e: {
          I = i, _ = c;
          var Dn = Tt.completedSegments;
          for (H = 0; H < Dn.length; H++)
            if (!zo(
              I,
              _,
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
          i.destination = null, C++, wt.splice(0, C);
          return;
        }
      }
      wt.splice(0, C);
      var Xn = i.completedBoundaries;
      for (C = 0; C < Xn.length; C++)
        Fo(i, c, Xn[C]);
      Xn.splice(0, C);
    } finally {
      Te(c), i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && c.close();
    }
  }
  function Uo(i, c) {
    try {
      var p = i.abortableTasks;
      p.forEach(function(y) {
        return jo(y, i, c);
      }), p.clear(), i.destination !== null && Qn(i, i.destination);
    } catch (y) {
      Rr(i, y), Tn(i, y);
    }
  }
  return dl.renderToReadableStream = function(i, c) {
    return new Promise(function(p, y) {
      var I, C, _ = new Promise(function(be, ze) {
        C = be, I = ze;
      }), H = $n(i, et(c ? c.identifierPrefix : void 0, c ? c.nonce : void 0, c ? c.bootstrapScriptContent : void 0, c ? c.bootstrapScripts : void 0, c ? c.bootstrapModules : void 0), U(c ? c.namespaceURI : void 0), c ? c.progressiveChunkSize : void 0, c ? c.onError : void 0, C, function() {
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
        be.allReady = _, p(be);
      }, function(be) {
        _.catch(function() {
        }), y(be);
      }, I);
      if (c && c.signal) {
        var pe = c.signal, we = function() {
          Uo(H, pe.reason), pe.removeEventListener("abort", we);
        };
        pe.addEventListener("abort", we);
      }
      Lo(H);
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
function iu() {
  return Rs || (Rs = 1, process.env.NODE_ENV !== "production" && function() {
    var O = Z, j = "18.2.0", V = O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ee(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          a[s - 1] = arguments[s];
        Q("warn", e, a);
      }
    }
    function g(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          a[s - 1] = arguments[s];
        Q("error", e, a);
      }
    }
    function Q(e, r, a) {
      {
        var s = V.ReactDebugCurrentFrame, d = s.getStackAddendum();
        d !== "" && (r += "%s", a = a.concat([d]));
        var S = a.map(function(x) {
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
    function N(e) {
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
        var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
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
    function L(e, r) {
      if ($(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", r, ke(e)), F(e);
    }
    function Y(e) {
      if ($(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", ke(e)), F(e);
    }
    var k = Object.prototype.hasOwnProperty, X = 0, fe = 1, De = 2, ie = 3, Oe = 4, Pe = 5, Ue = 6, nt = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Xe = nt + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", vt = new RegExp("^[" + nt + "][" + Xe + "]*$"), Je = {}, qe = {};
    function et(e) {
      return k.call(qe, e) ? !0 : k.call(Je, e) ? !1 : vt.test(e) ? (qe[e] = !0, !0) : (Je[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function Ve(e, r, a, s) {
      if (a !== null && a.type === X)
        return !1;
      switch (typeof r) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (s)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
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
    function W(e, r, a, s, d, S, x) {
      this.acceptsBooleans = r === De || r === ie || r === Oe, this.attributeName = s, this.attributeNamespace = d, this.mustUseProperty = a, this.propertyName = e, this.type = r, this.sanitizeURL = S, this.removeEmptyString = x;
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
      var r = e[0], a = e[1];
      q[r] = new W(
        r,
        fe,
        !1,
        // mustUseProperty
        a,
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
        ie,
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
        ie,
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
        Oe,
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
        Pe,
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
    function G(e, r) {
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
          var a = "aria-" + r.slice(4).toLowerCase(), s = Ce.hasOwnProperty(a) ? a : null;
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
        var a = [];
        for (var s in r) {
          var d = dn(e, s);
          d || a.push(s);
        }
        var S = a.map(function(x) {
          return "`" + x + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", S, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", S, e);
      }
    }
    function lr(e, r) {
      G(e, r) || mt(e, r);
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
      var Ke = {}, Nr = /^on./, Lr = /^on[^A-Z]/, _r = new RegExp("^(aria)-[" + Xe + "]*$"), Ze = new RegExp("^(aria)[A-Z][" + Xe + "]*$");
      rt = function(e, r, a, s) {
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
          if (Nr.test(r))
            return g("Unknown event handler property `%s`. It will be ignored.", r), Ke[r] = !0, !0;
        } else if (Nr.test(r))
          return Lr.test(r) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", r), Ke[r] = !0, !0;
        if (_r.test(r) || Ze.test(r))
          return !0;
        if (d === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Ke[r] = !0, !0;
        if (d === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Ke[r] = !0, !0;
        if (d === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Ke[r] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", r), Ke[r] = !0, !0;
        var z = U(r), J = z !== null && z.type === X;
        if (yt.hasOwnProperty(d)) {
          var oe = yt[d];
          if (oe !== r)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", r, oe), Ke[r] = !0, !0;
        } else if (!J && r !== d)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", r, d), Ke[r] = !0, !0;
        return typeof a == "boolean" && Ve(r, a, z, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, r, r, a, r) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, r, r, a, r, r, r), Ke[r] = !0, !0) : J ? !0 : Ve(r, a, z, !1) ? (Ke[r] = !0, !1) : ((a === "false" || a === "true") && z !== null && z.type === ie && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, r, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', r, a), Ke[r] = !0), !0);
      };
    }
    var Fr = function(e, r, a) {
      {
        var s = [];
        for (var d in r) {
          var S = rt(e, d, r[d], a);
          S || s.push(d);
        }
        var x = s.map(function(R) {
          return "`" + R + "`";
        }).join(", ");
        s.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", x, e) : s.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", x, e);
      }
    };
    function hn(e, r, a) {
      G(e, r) || Fr(e, r, a);
    }
    var vn = function() {
    };
    {
      var zr = /^(?:webkit|moz|o)[A-Z]/, Sr = /^-ms-/, Fn = /-(.)/g, Ur = /;\s*$/, $t = {}, Br = {}, gn = !1, st = !1, Mt = function(e) {
        return e.replace(Fn, function(r, a) {
          return a.toUpperCase();
        });
      }, Gt = function(e) {
        $t.hasOwnProperty(e) && $t[e] || ($t[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Mt(e.replace(Sr, "ms-"))
        ));
      }, Ae = function(e) {
        $t.hasOwnProperty(e) && $t[e] || ($t[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Zt = function(e, r) {
        Br.hasOwnProperty(r) && Br[r] || (Br[r] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, r.replace(Ur, "")));
      }, br = function(e, r) {
        gn || (gn = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, ur = function(e, r) {
        st || (st = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      vn = function(e, r) {
        e.indexOf("-") > -1 ? Gt(e) : zr.test(e) ? Ae(e) : Ur.test(r) && Zt(e, r), typeof r == "number" && (isNaN(r) ? br(e, r) : isFinite(r) || ur(e, r));
      };
    }
    var It = vn, xr = /["'&<>]/;
    function Ut(e) {
      Y(e);
      var r = "" + e, a = xr.exec(r);
      if (!a)
        return r;
      var s, d = "", S, x = 0;
      for (S = a.index; S < r.length; S++) {
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
      return Y(e), ("" + e).replace(Gr, Tr);
    }
    var Gr = /(<\/|<)(s)(cript)/gi, Tr = function(e, r, a, s) {
      return "" + r + (a === "s" ? "\\u0073" : "\\u0053") + s;
    };
    function Xt(e, r, a, s, d) {
      var S = e === void 0 ? "" : e, x = r === void 0 ? Vr : '<script nonce="' + $e(r) + '">', R = [];
      if (a !== void 0 && R.push(x, Bn(a), wr), s !== void 0)
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
    function Er(e, r, a) {
      switch (r) {
        case "select":
          return tt(Rt, a.value != null ? a.value : a.defaultValue);
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
    var Ot = null;
    function Pt(e) {
      var r = e.nextSuspenseID++;
      return e.boundaryPrefix + r.toString(16);
    }
    function ut(e, r, a) {
      var s = e.idPrefix, d = ":" + s + "R" + r;
      return a > 0 && (d += "H" + a.toString(32)), d + ":";
    }
    function Wt(e) {
      return $e(e);
    }
    var Jt = "<!-- -->";
    function Zr(e, r, a, s) {
      return r === "" ? s : (s && e.push(Jt), e.push(Wt(r)), !0);
    }
    function Qr(e, r, a, s) {
      a && s && e.push(Jt);
    }
    var kr = /* @__PURE__ */ new Map();
    function Kt(e) {
      var r = kr.get(e);
      if (r !== void 0)
        return r;
      var a = $e(mn(e));
      return kr.set(e, a), a;
    }
    var Xr = ' style="', Cr = ":", Mr = ";";
    function o(e, r, a) {
      if (typeof a != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var s = !0;
      for (var d in a)
        if (k.call(a, d)) {
          var S = a[d];
          if (!(S == null || typeof S == "boolean" || S === "")) {
            var x = void 0, R = void 0, z = d.indexOf("--") === 0;
            z ? (x = $e(d), L(S, d), R = $e(("" + S).trim())) : (It(d, S), x = Kt(d), typeof S == "number" ? S !== 0 && !k.call(he, d) ? R = S + "px" : R = "" + S : (L(S, d), R = $e(("" + S).trim()))), s ? (s = !1, e.push(Xr, x, Cr, R)) : e.push(Mr, x, Cr, R);
          }
        }
      s || e.push(m);
    }
    var u = " ", h = '="', m = '"', M = '=""';
    function T(e, r, a, s) {
      switch (a) {
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
        !(a.length > 2 && (a[0] === "o" || a[0] === "O") && (a[1] === "n" || a[1] === "N"))
      ) {
        var d = U(a);
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
            case ie:
              s && e.push(u, x, M);
              return;
            case Oe:
              s === !0 ? e.push(u, x, M) : s === !1 || e.push(u, x, h, $e(s), m);
              return;
            case Pe:
              isNaN(s) || e.push(u, x, h, $e(s), m);
              break;
            case Ue:
              !isNaN(s) && s >= 1 && e.push(u, x, h, $e(s), m);
              break;
            default:
              d.sanitizeURL && (le(s, S), s = "" + s, zn(s)), e.push(u, x, h, $e(s), m);
          }
        } else if (et(a)) {
          switch (typeof s) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var R = a.toLowerCase().slice(0, 5);
              if (R !== "data-" && R !== "aria-")
                return;
            }
          }
          e.push(u, a, h, $e(s), m);
        }
      }
    }
    var P = ">", B = "/>";
    function ne(e, r, a) {
      if (r != null) {
        if (a != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof r != "object" || !("__html" in r))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var s = r.__html;
        s != null && (Y(s), e.push("" + s));
      }
    }
    var de = !1, ae = !1, Me = !1, ft = !1, ot = !1, it = !1, Ht = !1;
    function bt(e, r) {
      {
        var a = e[r];
        if (a != null) {
          var s = Dt(a);
          e.multiple && !s ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.", r) : !e.multiple && s && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", r);
        }
      }
    }
    function Ir(e, r, a) {
      Ee("select", r), bt(r, "value"), bt(r, "defaultValue"), r.value !== void 0 && r.defaultValue !== void 0 && !Me && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Me = !0), e.push(dt("select"));
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
              T(e, a, S, x);
              break;
          }
        }
      return e.push(P), ne(e, d, s), s;
    }
    function qt(e) {
      var r = "";
      return O.Children.forEach(e, function(a) {
        a != null && (r += a, !ot && typeof a != "string" && typeof a != "number" && (ot = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), r;
    }
    var pr = ' selected=""';
    function Yt(e, r, a, s) {
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
              T(e, a, J, oe);
              break;
          }
        }
      if (d != null) {
        var ye;
        if (x !== null ? (le(x, "value"), ye = "" + x) : (z !== null && (it || (it = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), ye = qt(S)), Dt(d))
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
      return e.push(P), ne(e, z, S), S;
    }
    function Jr(e, r, a) {
      Ee("input", r), r.checked !== void 0 && r.defaultChecked !== void 0 && !ae && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", r.type), ae = !0), r.value !== void 0 && r.defaultValue !== void 0 && !de && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", r.type), de = !0), e.push(dt("input"));
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
              T(e, a, R, z);
              break;
          }
        }
      return S !== null ? T(e, a, "checked", S) : x !== null && T(e, a, "checked", x), s !== null ? T(e, a, "value", s) : d !== null && T(e, a, "value", d), e.push(B), null;
    }
    function ki(e, r, a) {
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
              T(e, a, x, R);
              break;
          }
        }
      if (s === null && d !== null && (s = d), e.push(P), S != null) {
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
    function Ci(e, r, a, s) {
      e.push(dt(a));
      for (var d in r)
        if (k.call(r, d)) {
          var S = r[d];
          if (S == null)
            continue;
          switch (d) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(a + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              T(e, s, d, S);
              break;
          }
        }
      return e.push(B), null;
    }
    function Wn(e, r, a) {
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
              T(e, a, s, d);
              break;
          }
        }
      return e.push(P), null;
    }
    function Mi(e, r, a) {
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
              T(e, a, d, S);
              break;
          }
        }
      e.push(P);
      {
        var x = Array.isArray(s) && s.length < 2 ? s[0] || null : s;
        Array.isArray(s) && s.length > 1 ? g("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : x != null && x.$$typeof != null ? g("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : x != null && typeof x != "string" && typeof x != "number" && g("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return s;
    }
    function Hn(e, r, a, s) {
      e.push(dt(a));
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
      return e.push(P), ne(e, S, d), typeof d == "string" ? (e.push(Wt(d)), null) : d;
    }
    function Vt(e, r, a, s) {
      e.push(dt(a));
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
      return e.push(P), ne(e, S, d), d;
    }
    var Kr = `
`;
    function yn(e, r, a, s) {
      e.push(dt(a));
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
      if (e.push(P), S != null) {
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
    var Ne = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, er = /* @__PURE__ */ new Map();
    function dt(e) {
      var r = er.get(e);
      if (r === void 0) {
        if (!Ne.test(e))
          throw new Error("Invalid tag: " + e);
        r = "<" + e, er.set(e, r);
      }
      return r;
    }
    var hr = "<!DOCTYPE html>";
    function tr(e, r, a, s, d) {
      switch (lr(r, a), pn(r, a), hn(r, a, null), !a.suppressContentEditableWarning && a.contentEditable && a.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), d.insertionMode !== fr && d.insertionMode !== dr && r.indexOf("-") === -1 && typeof a.is != "string" && r.toLowerCase() !== r && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", r), r) {
        case "select":
          return Ir(e, a, s);
        case "option":
          return Yt(e, a, s, d);
        case "textarea":
          return ki(e, a, s);
        case "input":
          return Jr(e, a, s);
        case "menuitem":
          return Wn(e, a, s);
        case "title":
          return Mi(e, a, s);
        case "listing":
        case "pre":
          return yn(e, a, r, s);
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
          return Ci(e, a, r, s);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Hn(e, a, r, s);
        case "html":
          return d.insertionMode === Bt && e.push(hr), Hn(e, a, r, s);
        default:
          return r.indexOf("-") === -1 && typeof a.is != "string" ? Hn(e, a, r, s) : Vt(e, a, r, s);
      }
    }
    var Sn = "</", rr = ">";
    function xt(e, r, a) {
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
      for (var a = r.bootstrapChunks, s = 0; s < a.length - 1; s++)
        E(e, a[s]);
      return s < a.length ? D(e, a[s]) : !0;
    }
    var Vn = '<template id="', Io = '"></template>';
    function Do(e, r, a) {
      E(e, Vn), E(e, r.placeholderPrefix);
      var s = a.toString(16);
      return E(e, s), D(e, Io);
    }
    var Ro = "<!--$-->", Ii = '<!--$?--><template id="', Di = '"></template>', bn = "<!--$!-->", xn = "<!--/$-->", wn = "<template", qr = '"', Ri = ' data-dgst="', en = ' data-msg="', $n = ' data-stck="', Gn = "></template>";
    function Dr(e, r) {
      return D(e, Ro);
    }
    function Rr(e, r, a) {
      if (E(e, Ii), a === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return E(e, a), D(e, Di);
    }
    function Tn(e, r, a, s, d) {
      var S;
      return S = D(e, bn), E(e, wn), a && (E(e, Ri), E(e, $e(a)), E(e, qr)), s && (E(e, en), E(e, $e(s)), E(e, qr)), d && (E(e, $n), E(e, $e(d)), E(e, qr)), S = D(e, Gn), S;
    }
    function Ao(e, r) {
      return D(e, xn);
    }
    function Zn(e, r) {
      return D(e, xn);
    }
    function Oo(e, r) {
      return D(e, xn);
    }
    var En = '<div hidden id="', pt = '">', Po = "</div>", kn = '<svg aria-hidden="true" style="display:none" id="', Ai = '">', jo = "</svg>", Cn = '<math aria-hidden="true" style="display:none" id="', No = '">', Lo = "</math>", Mn = '<table hidden id="', In = '">', _o = "</table>", Fo = '<table hidden><tbody id="', zo = '">', Qn = "</tbody></table>", Uo = '<table hidden><tr id="', i = '">', c = "</tr></table>", p = '<table hidden><colgroup id="', y = '">', I = "</colgroup></table>";
    function C(e, r, a, s) {
      switch (a.insertionMode) {
        case Bt:
        case Rt:
          return E(e, En), E(e, r.segmentPrefix), E(e, s.toString(16)), D(e, pt);
        case fr:
          return E(e, kn), E(e, r.segmentPrefix), E(e, s.toString(16)), D(e, Ai);
        case dr:
          return E(e, Cn), E(e, r.segmentPrefix), E(e, s.toString(16)), D(e, No);
        case gt:
          return E(e, Mn), E(e, r.segmentPrefix), E(e, s.toString(16)), D(e, In);
        case He:
          return E(e, Fo), E(e, r.segmentPrefix), E(e, s.toString(16)), D(e, zo);
        case At:
          return E(e, Uo), E(e, r.segmentPrefix), E(e, s.toString(16)), D(e, i);
        case St:
          return E(e, p), E(e, r.segmentPrefix), E(e, s.toString(16)), D(e, y);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function _(e, r) {
      switch (r.insertionMode) {
        case Bt:
        case Rt:
          return D(e, Po);
        case fr:
          return D(e, jo);
        case dr:
          return D(e, Lo);
        case gt:
          return D(e, _o);
        case He:
          return D(e, Qn);
        case At:
          return D(e, c);
        case St:
          return D(e, I);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var H = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", pe = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', we = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', be = H + ';$RS("', ze = '$RS("', ht = '","', wt = '")<\/script>';
    function Tt(e, r, a) {
      E(e, r.startInlineScript), r.sentCompleteSegmentFunction ? E(e, ze) : (r.sentCompleteSegmentFunction = !0, E(e, be)), E(e, r.segmentPrefix);
      var s = a.toString(16);
      return E(e, s), E(e, ht), E(e, r.placeholderPrefix), E(e, s), D(e, wt);
    }
    var Dn = pe + ';$RC("', Bo = '$RC("', Xn = '","', hl = '")<\/script>';
    function vl(e, r, a, s) {
      if (E(e, r.startInlineScript), r.sentCompleteBoundaryFunction ? E(e, Bo) : (r.sentCompleteBoundaryFunction = !0, E(e, Dn)), a === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var d = s.toString(16);
      return E(e, a), E(e, Xn), E(e, r.segmentPrefix), E(e, d), D(e, hl);
    }
    var gl = we + ';$RX("', ml = '$RX("', yl = '"', Sl = ")<\/script>", Oi = ",";
    function bl(e, r, a, s, d, S) {
      if (E(e, r.startInlineScript), r.sentClientRenderFunction ? E(e, ml) : (r.sentClientRenderFunction = !0, E(e, gl)), a === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return E(e, a), E(e, yl), (s || d || S) && (E(e, Oi), E(e, Pi(s || ""))), (d || S) && (E(e, Oi), E(e, Pi(d || ""))), S && (E(e, Oi), E(e, Pi(S))), D(e, Sl);
    }
    var xl = /[<\u2028\u2029]/g;
    function Pi(e) {
      var r = JSON.stringify(e);
      return r.replace(xl, function(a) {
        switch (a) {
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
      var a = Xt(r, void 0);
      return {
        // Keep this in sync with ReactDOMServerFormatConfig
        bootstrapChunks: a.bootstrapChunks,
        startInlineScript: a.startInlineScript,
        placeholderPrefix: a.placeholderPrefix,
        segmentPrefix: a.segmentPrefix,
        boundaryPrefix: a.boundaryPrefix,
        idPrefix: a.idPrefix,
        nextSuspenseID: a.nextSuspenseID,
        sentCompleteSegmentFunction: a.sentCompleteSegmentFunction,
        sentCompleteBoundaryFunction: a.sentCompleteBoundaryFunction,
        sentClientRenderFunction: a.sentClientRenderFunction,
        // This is an extra field for the legacy renderer
        generateStaticMarkup: e
      };
    }
    function ji() {
      return {
        insertionMode: Rt,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function Ta(e, r, a, s) {
      return a.generateStaticMarkup ? (e.push($e(r)), !1) : Zr(e, r, a, s);
    }
    function Ea(e, r, a, s) {
      if (!r.generateStaticMarkup)
        return Qr(e, r, a, s);
    }
    function Ni(e, r) {
      return r.generateStaticMarkup ? !0 : Dr(e);
    }
    function jt(e, r, a, s, d) {
      return r.generateStaticMarkup ? !0 : Tn(e, r, a, s, d);
    }
    function Tl(e, r) {
      return r.generateStaticMarkup ? !0 : Ao(e);
    }
    function ka(e, r) {
      return r.generateStaticMarkup ? !0 : Oo(e);
    }
    var Et = Object.assign, Ca = Symbol.for("react.element"), Li = Symbol.for("react.portal"), Wo = Symbol.for("react.fragment"), Ho = Symbol.for("react.strict_mode"), Yo = Symbol.for("react.profiler"), Jn = Symbol.for("react.provider"), Kn = Symbol.for("react.context"), qn = Symbol.for("react.forward_ref"), Rn = Symbol.for("react.suspense"), _i = Symbol.for("react.suspense_list"), Fi = Symbol.for("react.memo"), Vo = Symbol.for("react.lazy"), El = Symbol.for("react.scope"), Ma = Symbol.for("react.debug_trace_mode"), kl = Symbol.for("react.legacy_hidden"), Cl = Symbol.for("react.default_value"), Ia = Symbol.iterator, Da = "@@iterator";
    function Ge(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Ia && e[Ia] || e[Da];
      return typeof r == "function" ? r : null;
    }
    function eo(e, r, a) {
      var s = e.displayName;
      if (s)
        return s;
      var d = r.displayName || r.name || "";
      return d !== "" ? a + "(" + d + ")" : a;
    }
    function zi(e) {
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
        case Li:
          return "Portal";
        case Yo:
          return "Profiler";
        case Ho:
          return "StrictMode";
        case Rn:
          return "Suspense";
        case _i:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Kn:
            var r = e;
            return zi(r) + ".Consumer";
          case Jn:
            var a = e;
            return zi(a._context) + ".Provider";
          case qn:
            return eo(e, e.render, "ForwardRef");
          case Fi:
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
    var An = 0, Ui, Bi, Wi, Hi, Yi, Ra, Aa;
    function $o() {
    }
    $o.__reactDisabledLog = !0;
    function Vi() {
      {
        if (An === 0) {
          Ui = console.log, Bi = console.info, Wi = console.warn, Hi = console.error, Yi = console.group, Ra = console.groupCollapsed, Aa = console.groupEnd;
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
              value: Ui
            }),
            info: Et({}, e, {
              value: Bi
            }),
            warn: Et({}, e, {
              value: Wi
            }),
            error: Et({}, e, {
              value: Hi
            }),
            group: Et({}, e, {
              value: Yi
            }),
            groupCollapsed: Et({}, e, {
              value: Ra
            }),
            groupEnd: Et({}, e, {
              value: Aa
            })
          });
        }
        An < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ro = V.ReactCurrentDispatcher, On;
    function no(e, r, a) {
      {
        if (On === void 0)
          try {
            throw Error();
          } catch (d) {
            var s = d.stack.trim().match(/\n( *(at )?)/);
            On = s && s[1] || "";
          }
        return `
` + On + e;
      }
    }
    var oo = !1, Go;
    {
      var Oa = typeof WeakMap == "function" ? WeakMap : Map;
      Go = new Oa();
    }
    function $i(e, r) {
      if (!e || oo)
        return "";
      {
        var a = Go.get(e);
        if (a !== void 0)
          return a;
      }
      var s;
      oo = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = ro.current, ro.current = null, Vi();
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
                    return e.displayName && ye.includes("<anonymous>") && (ye = ye.replace("<anonymous>", e.displayName)), typeof e == "function" && Go.set(e, ye), ye;
                  }
                while (J >= 1 && oe >= 0);
              break;
            }
        }
      } finally {
        oo = !1, ro.current = S, to(), Error.prepareStackTrace = d;
      }
      var We = e ? e.displayName || e.name : "", lt = We ? no(We) : "";
      return typeof e == "function" && Go.set(e, lt), lt;
    }
    function Gi(e, r, a) {
      return $i(e, !0);
    }
    function Zi(e, r, a) {
      return $i(e, !1);
    }
    function Pa(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Pn(e, r, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return $i(e, Pa(e));
      if (typeof e == "string")
        return no(e);
      switch (e) {
        case Rn:
          return no("Suspense");
        case _i:
          return no("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case qn:
            return Zi(e.render);
          case Fi:
            return Pn(e.type, r, a);
          case Vo: {
            var s = e, d = s._payload, S = s._init;
            try {
              return Pn(S(d), r, a);
            } catch {
            }
          }
        }
      return "";
    }
    var Qi = {}, Zo = V.ReactDebugCurrentFrame;
    function tn(e) {
      if (e) {
        var r = e._owner, a = Pn(e.type, e._source, r ? r.type : null);
        Zo.setExtraStackFrame(a);
      } else
        Zo.setExtraStackFrame(null);
    }
    function Xi(e, r, a, s, d) {
      {
        var S = Function.call.bind(k);
        for (var x in e)
          if (S(e, x)) {
            var R = void 0;
            try {
              if (typeof e[x] != "function") {
                var z = Error((s || "React class") + ": " + a + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              R = e[x](r, x, s, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (J) {
              R = J;
            }
            R && !(R instanceof Error) && (tn(d), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", a, x, typeof R), tn(null)), R instanceof Error && !(R.message in Qi) && (Qi[R.message] = !0, tn(d), g("Failed %s type: %s", a, R.message), tn(null));
          }
      }
    }
    var Ji;
    Ji = {};
    var Ar = {};
    Object.freeze(Ar);
    function ja(e, r) {
      {
        var a = e.contextTypes;
        if (!a)
          return Ar;
        var s = {};
        for (var d in a)
          s[d] = r[d];
        {
          var S = Ye(e) || "Unknown";
          Xi(a, s, "context", S);
        }
        return s;
      }
    }
    function rn(e, r, a, s) {
      {
        if (typeof e.getChildContext != "function") {
          {
            var d = Ye(r) || "Unknown";
            Ji[d] || (Ji[d] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", d, d));
          }
          return a;
        }
        var S = e.getChildContext();
        for (var x in S)
          if (!(x in s))
            throw new Error((Ye(r) || "Unknown") + '.getChildContext(): key "' + x + '" is not defined in childContextTypes.');
        {
          var R = Ye(r) || "Unknown";
          Xi(s, S, "child context", R);
        }
        return Et({}, a, S);
      }
    }
    var nn;
    nn = {};
    var Ki = null, nr = null;
    function Qo(e) {
      e.context._currentValue2 = e.parentValue;
    }
    function Xo(e) {
      e.context._currentValue2 = e.value;
    }
    function io(e, r) {
      if (e !== r) {
        Qo(e);
        var a = e.parent, s = r.parent;
        if (a === null) {
          if (s !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (s === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          io(a, s);
        }
        Xo(r);
      }
    }
    function qi(e) {
      Qo(e);
      var r = e.parent;
      r !== null && qi(r);
    }
    function ao(e) {
      var r = e.parent;
      r !== null && ao(r), Xo(e);
    }
    function Na(e, r) {
      Qo(e);
      var a = e.parent;
      if (a === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      a.depth === r.depth ? io(a, r) : Na(a, r);
    }
    function La(e, r) {
      var a = r.parent;
      if (a === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      e.depth === a.depth ? io(e, a) : La(e, a), Xo(r);
    }
    function Jo(e) {
      var r = nr, a = e;
      r !== a && (r === null ? ao(a) : a === null ? qi(r) : r.depth === a.depth ? io(r, a) : r.depth > a.depth ? Na(r, a) : La(r, a), nr = a);
    }
    function lo(e, r) {
      var a;
      a = e._currentValue2, e._currentValue2 = r, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== nn && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = nn;
      var s = nr, d = {
        parent: s,
        depth: s === null ? 0 : s.depth + 1,
        context: e,
        parentValue: a,
        value: r
      };
      return nr = d, d;
    }
    function ea(e) {
      var r = nr;
      if (r === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      r.context !== e && g("The parent context is not the expected context. This is probably a bug in React.");
      {
        var a = r.parentValue;
        a === Cl ? r.context._currentValue2 = r.context._defaultValue : r.context._currentValue2 = a, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== nn && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = nn;
      }
      return nr = r.parent;
    }
    function Ml() {
      return nr;
    }
    function jn(e) {
      var r = e._currentValue2;
      return r;
    }
    function Ko(e) {
      return e._reactInternals;
    }
    function ta(e, r) {
      e._reactInternals = r;
    }
    var qo = {}, ei = {}, so, ti, Nn, uo, ri, Ln, ni, oi, ii;
    {
      so = /* @__PURE__ */ new Set(), ti = /* @__PURE__ */ new Set(), Nn = /* @__PURE__ */ new Set(), ni = /* @__PURE__ */ new Set(), uo = /* @__PURE__ */ new Set(), oi = /* @__PURE__ */ new Set(), ii = /* @__PURE__ */ new Set();
      var _a = /* @__PURE__ */ new Set();
      Ln = function(e, r) {
        if (!(e === null || typeof e == "function")) {
          var a = r + "_" + e;
          _a.has(a) || (_a.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", r, e));
        }
      }, ri = function(e, r) {
        if (r === void 0) {
          var a = Ye(e) || "Component";
          uo.has(a) || (uo.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      };
    }
    function Fa(e, r) {
      {
        var a = e.constructor, s = a && Ye(a) || "ReactClass", d = s + "." + r;
        if (qo[d])
          return;
        g(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, r, r, s), qo[d] = !0;
      }
    }
    var za = {
      isMounted: function(e) {
        return !1;
      },
      enqueueSetState: function(e, r, a) {
        var s = Ko(e);
        s.queue === null ? Fa(e, "setState") : (s.queue.push(r), a != null && Ln(a, "setState"));
      },
      enqueueReplaceState: function(e, r, a) {
        var s = Ko(e);
        s.replace = !0, s.queue = [r], a != null && Ln(a, "setState");
      },
      enqueueForceUpdate: function(e, r) {
        var a = Ko(e);
        a.queue === null ? Fa(e, "forceUpdate") : r != null && Ln(r, "setState");
      }
    };
    function Il(e, r, a, s, d) {
      var S = a(d, s);
      ri(r, S);
      var x = S == null ? s : Et({}, s, S);
      return x;
    }
    function Dl(e, r, a) {
      var s = Ar, d = e.contextType;
      if ("contextType" in e) {
        var S = (
          // Allow null for conditional declaration
          d === null || d !== void 0 && d.$$typeof === Kn && d._context === void 0
        );
        if (!S && !ii.has(e)) {
          ii.add(e);
          var x = "";
          d === void 0 ? x = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof d != "object" ? x = " However, it is set to a " + typeof d + "." : d.$$typeof === Jn ? x = " Did you accidentally pass the Context.Provider instead?" : d._context !== void 0 ? x = " Did you accidentally pass the Context.Consumer instead?" : x = " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ye(e) || "Component", x);
        }
      }
      typeof d == "object" && d !== null ? s = jn(d) : s = a;
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
            Nn.has(We) || (Nn.add(We), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

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
    function Ua(e, r, a) {
      {
        var s = Ye(r) || "Component", d = e.render;
        d || (r.prototype && typeof r.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", s) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", s)), e.getInitialState && !e.getInitialState.isReactClassApproved && !e.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", s), e.getDefaultProps && !e.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", s), e.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", s), e.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", s), e.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", s), r.contextType && r.contextTypes && !oi.has(r) && (oi.add(r), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", s)), typeof e.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", s), r.prototype && r.prototype.isPureReactComponent && typeof e.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ye(r) || "A pure component"), typeof e.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", s), typeof e.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", s), typeof e.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", s), typeof e.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", s);
        var S = e.props !== a;
        e.props !== void 0 && S && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", s, s), e.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", s, s), typeof e.getSnapshotBeforeUpdate == "function" && typeof e.componentDidUpdate != "function" && !ti.has(r) && (ti.add(r), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ye(r))), typeof e.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", s), typeof e.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", s), typeof r.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", s);
        var x = e.state;
        x && (typeof x != "object" || Dt(x)) && g("%s.state: must be set to an object or null", s), typeof e.getChildContext == "function" && typeof r.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", s);
      }
    }
    function Rl(e, r) {
      var a = r.state;
      if (typeof r.componentWillMount == "function") {
        if (r.componentWillMount.__suppressDeprecationWarning !== !0) {
          var s = Ye(e) || "Unknown";
          ei[s] || (ee(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            s
          ), ei[s] = !0);
        }
        r.componentWillMount();
      }
      typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), a !== r.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ye(e) || "Component"), za.enqueueReplaceState(r, r.state, null));
    }
    function Al(e, r, a, s) {
      if (e.queue !== null && e.queue.length > 0) {
        var d = e.queue, S = e.replace;
        if (e.queue = null, e.replace = !1, S && d.length === 1)
          r.state = d[0];
        else {
          for (var x = S ? d[0] : r.state, R = !0, z = S ? 1 : 0; z < d.length; z++) {
            var J = d[z], oe = typeof J == "function" ? J.call(r, x, a, s) : J;
            oe != null && (R ? (R = !1, x = Et({}, x, oe)) : Et(x, oe));
          }
          r.state = x;
        }
      } else
        e.queue = null;
    }
    function ai(e, r, a, s) {
      Ua(e, r, a);
      var d = e.state !== void 0 ? e.state : null;
      e.updater = za, e.props = a, e.state = d;
      var S = {
        queue: [],
        replace: !1
      };
      ta(e, S);
      var x = r.contextType;
      if (typeof x == "object" && x !== null ? e.context = jn(x) : e.context = s, e.state === a) {
        var R = Ye(r) || "Component";
        ni.has(R) || (ni.add(R), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", R));
      }
      var z = r.getDerivedStateFromProps;
      typeof z == "function" && (e.state = Il(e, r, z, d, a)), typeof r.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function") && (Rl(r, e), Al(S, e, a, s));
    }
    var li = {
      id: 1,
      overflow: ""
    };
    function Ol(e) {
      var r = e.overflow, a = e.id, s = a & ~Pl(a);
      return s.toString(32) + r;
    }
    function ra(e, r, a) {
      var s = e.id, d = e.overflow, S = si(s) - 1, x = s & ~(1 << S), R = a + 1, z = si(r) + S;
      if (z > 30) {
        var J = S - S % 5, oe = (1 << J) - 1, ye = (x & oe).toString(32), We = x >> J, lt = S - J, Ft = si(r) + lt, sl = R << lt, ul = sl | We, cl = ye + d;
        return {
          id: 1 << Ft | ul,
          overflow: cl
        };
      } else {
        var Ei = R << S, zs = Ei | x, Us = d;
        return {
          id: 1 << z | zs,
          overflow: Us
        };
      }
    }
    function si(e) {
      return 32 - jl(e);
    }
    function Pl(e) {
      return 1 << si(e) - 1;
    }
    var jl = Math.clz32 ? Math.clz32 : vr, Nl = Math.log, Ll = Math.LN2;
    function vr(e) {
      var r = e >>> 0;
      return r === 0 ? 32 : 31 - (Nl(r) / Ll | 0) | 0;
    }
    function na(e, r) {
      return e === r && (e !== 0 || 1 / e === 1 / r) || e !== e && r !== r;
    }
    var ui = typeof Object.is == "function" ? Object.is : na, Ie = null, on = null, an = null, je = null, Nt = !1, ln = !1, ci = 0, at = null, gr = 0, sn = 25, or = !1, un;
    function mr() {
      if (Ie === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return or && g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Ie;
    }
    function _l(e, r) {
      if (r === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", un), !1;
      e.length !== r.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, un, "[" + e.join(", ") + "]", "[" + r.join(", ") + "]");
      for (var a = 0; a < r.length && a < e.length; a++)
        if (!ui(e[a], r[a]))
          return !1;
      return !0;
    }
    function Ba() {
      if (gr > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function fi() {
      return je === null ? an === null ? (Nt = !1, an = je = Ba()) : (Nt = !0, je = an) : je.next === null ? (Nt = !1, je = je.next = Ba()) : (Nt = !0, je = je.next), je;
    }
    function oa(e, r) {
      Ie = r, on = e, or = !1, ci = 0;
    }
    function Fl(e, r, a, s) {
      for (; ln; )
        ln = !1, ci = 0, gr += 1, je = null, a = e(r, s);
      return co(), a;
    }
    function Wa() {
      var e = ci !== 0;
      return e;
    }
    function co() {
      or = !1, Ie = null, on = null, ln = !1, an = null, gr = 0, at = null, je = null;
    }
    function zl(e) {
      return or && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), jn(e);
    }
    function Ha(e) {
      return un = "useContext", mr(), jn(e);
    }
    function di(e, r) {
      return typeof r == "function" ? r(e) : r;
    }
    function Ul(e) {
      return un = "useState", Ya(
        di,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function Ya(e, r, a) {
      if (e !== di && (un = "useReducer"), Ie = mr(), je = fi(), Nt) {
        var s = je.queue, d = s.dispatch;
        if (at !== null) {
          var S = at.get(s);
          if (S !== void 0) {
            at.delete(s);
            var x = je.memoizedState, R = S;
            do {
              var z = R.action;
              or = !0, x = e(x, z), or = !1, R = R.next;
            } while (R !== null);
            return je.memoizedState = x, [x, d];
          }
        }
        return [je.memoizedState, d];
      } else {
        or = !0;
        var J;
        e === di ? J = typeof r == "function" ? r() : r : J = a !== void 0 ? a(r) : r, or = !1, je.memoizedState = J;
        var oe = je.queue = {
          last: null,
          dispatch: null
        }, ye = oe.dispatch = Hl.bind(null, Ie, oe);
        return [je.memoizedState, ye];
      }
    }
    function Va(e, r) {
      Ie = mr(), je = fi();
      var a = r === void 0 ? null : r;
      if (je !== null) {
        var s = je.memoizedState;
        if (s !== null && a !== null) {
          var d = s[1];
          if (_l(a, d))
            return s[0];
        }
      }
      or = !0;
      var S = e();
      return or = !1, je.memoizedState = [S, a], S;
    }
    function Bl(e) {
      Ie = mr(), je = fi();
      var r = je.memoizedState;
      if (r === null) {
        var a = {
          current: e
        };
        return Object.seal(a), je.memoizedState = a, a;
      } else
        return r;
    }
    function Wl(e, r) {
      un = "useLayoutEffect", g("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Hl(e, r, a) {
      if (gr >= sn)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === Ie) {
        ln = !0;
        var s = {
          action: a,
          next: null
        };
        at === null && (at = /* @__PURE__ */ new Map());
        var d = at.get(r);
        if (d === void 0)
          at.set(r, s);
        else {
          for (var S = d; S.next !== null; )
            S = S.next;
          S.next = s;
        }
      }
    }
    function Yl(e, r) {
      return Va(function() {
        return e;
      }, r);
    }
    function Vl(e, r, a) {
      return mr(), r(e._source);
    }
    function $l(e, r, a) {
      if (a === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return a();
    }
    function Gl(e) {
      return mr(), e;
    }
    function pi() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function $a() {
      return mr(), [!1, pi];
    }
    function ia() {
      var e = on, r = Ol(e.treeContext), a = po;
      if (a === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var s = ci++;
      return ut(a, r, s);
    }
    function fo() {
    }
    var Ga = {
      readContext: zl,
      useContext: Ha,
      useMemo: Va,
      useReducer: Ya,
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
      useDeferredValue: Gl,
      useTransition: $a,
      useId: ia,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Vl,
      useSyncExternalStore: $l
    }, po = null;
    function hi(e) {
      po = e;
    }
    function aa(e) {
      try {
        var r = "", a = e;
        do {
          switch (a.tag) {
            case 0:
              r += no(a.type, null, null);
              break;
            case 1:
              r += Zi(a.type, null, null);
              break;
            case 2:
              r += Gi(a.type, null, null);
              break;
          }
          a = a.parent;
        } while (a);
        return r;
      } catch (s) {
        return `
Error generating stack: ` + s.message + `
` + s.stack;
      }
    }
    var Or = V.ReactCurrentDispatcher, vi = V.ReactDebugCurrentFrame, gi = 0, cn = 1, Za = 2, la = 3, fn = 4, Zl = 0, Qa = 1, ir = 2, Ql = 12800;
    function Xl(e) {
      return console.error(e), null;
    }
    function ho() {
    }
    function sa(e, r, a, s, d, S, x, R, z) {
      var J = [], oe = /* @__PURE__ */ new Set(), ye = {
        destination: null,
        responseState: r,
        progressiveChunkSize: s === void 0 ? Ql : s,
        status: Zl,
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
      }, We = Pr(
        ye,
        0,
        null,
        a,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      We.parentFlushed = !0;
      var lt = vo(ye, e, null, We, oe, Ar, Ki, li);
      return J.push(lt), ye;
    }
    function mi(e, r) {
      var a = e.pingedTasks;
      a.push(r), a.length === 1 && Te(function() {
        return al(e);
      });
    }
    function yr(e, r) {
      return {
        id: Ot,
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
    function vo(e, r, a, s, d, S, x, R) {
      e.allPendingTasks++, a === null ? e.pendingRootTasks++ : a.pendingTasks++;
      var z = {
        node: r,
        ping: function() {
          return mi(e, z);
        },
        blockedBoundary: a,
        blockedSegment: s,
        abortSet: d,
        legacyContext: S,
        context: x,
        treeContext: R
      };
      return z.componentStack = null, d.add(z), z;
    }
    function Pr(e, r, a, s, d, S) {
      return {
        status: gi,
        id: -1,
        // lazily assigned later
        index: r,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: s,
        boundary: a,
        lastPushedText: d,
        textEmbedded: S
      };
    }
    var ar = null;
    function ua() {
      return ar === null || ar.componentStack === null ? "" : aa(ar.componentStack);
    }
    function Lt(e, r) {
      e.componentStack = {
        tag: 0,
        parent: e.componentStack,
        type: r
      };
    }
    function _n(e, r) {
      e.componentStack = {
        tag: 1,
        parent: e.componentStack,
        type: r
      };
    }
    function ca(e, r) {
      e.componentStack = {
        tag: 2,
        parent: e.componentStack,
        type: r
      };
    }
    function _t(e) {
      e.componentStack === null ? g("Unexpectedly popped too many stack frames. This is a bug in React.") : e.componentStack = e.componentStack.parent;
    }
    var jr = null;
    function fa(e, r) {
      {
        var a;
        typeof r == "string" ? a = r : r && typeof r.message == "string" ? a = r.message : a = String(r);
        var s = jr || ua();
        jr = null, e.errorMessage = a, e.errorComponentStack = s;
      }
    }
    function go(e, r) {
      var a = e.onError(r);
      if (a != null && typeof a != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
      return a;
    }
    function yi(e, r) {
      var a = e.onShellError;
      a(r);
      var s = e.onFatalError;
      s(r), e.destination !== null ? (e.status = ir, xe(e.destination, r)) : (e.status = Qa, e.fatalError = r);
    }
    function Xa(e, r, a) {
      Lt(r, "Suspense");
      var s = r.blockedBoundary, d = r.blockedSegment, S = a.fallback, x = a.children, R = /* @__PURE__ */ new Set(), z = yr(e, R), J = d.chunks.length, oe = Pr(
        e,
        J,
        z,
        d.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      d.children.push(oe), d.lastPushedText = !1;
      var ye = Pr(
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
        if (Si(e, r, x), Ea(ye.chunks, e.responseState, ye.lastPushedText, ye.textEmbedded), ye.status = cn, So(z, ye), z.pendingTasks === 0) {
          _t(r);
          return;
        }
      } catch (lt) {
        ye.status = fn, z.forceClientRender = !0, z.errorDigest = go(e, lt), fa(z, lt);
      } finally {
        r.blockedBoundary = s, r.blockedSegment = d;
      }
      var We = vo(e, S, s, oe, R, r.legacyContext, r.context, r.treeContext);
      We.componentStack = r.componentStack, e.pingedTasks.push(We), _t(r);
    }
    function Ja(e, r, a, s) {
      Lt(r, a);
      var d = r.blockedSegment, S = tr(d.chunks, a, s, e.responseState, d.formatContext);
      d.lastPushedText = !1;
      var x = d.formatContext;
      d.formatContext = Er(x, a, s), Si(e, r, S), d.formatContext = x, xt(d.chunks, a), d.lastPushedText = !1, _t(r);
    }
    function Jl(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function da(e, r, a, s, d) {
      var S = {};
      oa(r, S);
      var x = a(s, d);
      return Fl(a, s, x, d);
    }
    function mo(e, r, a, s, d) {
      var S = a.render();
      a.props !== d && (ga || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ye(s) || "a component"), ga = !0);
      {
        var x = s.childContextTypes;
        if (x != null) {
          var R = r.legacyContext, z = rn(a, s, R, x);
          r.legacyContext = z, Ct(e, r, S), r.legacyContext = R;
          return;
        }
      }
      Ct(e, r, S);
    }
    function Ka(e, r, a, s) {
      ca(r, a);
      var d = ja(a, r.legacyContext), S = Dl(a, s, d);
      ai(S, a, s, d), mo(e, r, S, a, s), _t(r);
    }
    var pa = {}, yo = {}, ha = {}, va = {}, ga = !1, qa = !1, el = !1, ma = !1;
    function Kl(e, r, a, s) {
      var d;
      if (d = ja(a, r.legacyContext), _n(r, a), a.prototype && typeof a.prototype.render == "function") {
        var S = Ye(a) || "Unknown";
        pa[S] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", S, S), pa[S] = !0);
      }
      var x = da(e, r, a, s, d), R = Wa();
      if (typeof x == "object" && x !== null && typeof x.render == "function" && x.$$typeof === void 0) {
        var z = Ye(a) || "Unknown";
        yo[z] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", z, z, z), yo[z] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof x == "object" && x !== null && typeof x.render == "function" && x.$$typeof === void 0
      ) {
        {
          var J = Ye(a) || "Unknown";
          yo[J] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", J, J, J), yo[J] = !0);
        }
        ai(x, a, s, d), mo(e, r, x, a, s);
      } else if (ql(a), R) {
        var oe = r.treeContext, ye = 1, We = 0;
        r.treeContext = ra(oe, ye, We);
        try {
          Ct(e, r, x);
        } finally {
          r.treeContext = oe;
        }
      } else
        Ct(e, r, x);
      _t(r);
    }
    function ql(e) {
      {
        if (e && e.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", e.displayName || e.name || "Component"), typeof e.getDerivedStateFromProps == "function") {
          var r = Ye(e) || "Unknown";
          va[r] || (g("%s: Function components do not support getDerivedStateFromProps.", r), va[r] = !0);
        }
        if (typeof e.contextType == "object" && e.contextType !== null) {
          var a = Ye(e) || "Unknown";
          ha[a] || (g("%s: Function components do not support contextType.", a), ha[a] = !0);
        }
      }
    }
    function tl(e, r) {
      if (e && e.defaultProps) {
        var a = Et({}, r), s = e.defaultProps;
        for (var d in s)
          a[d] === void 0 && (a[d] = s[d]);
        return a;
      }
      return r;
    }
    function es(e, r, a, s, d) {
      _n(r, a.render);
      var S = da(e, r, a.render, s, d), x = Wa();
      if (x) {
        var R = r.treeContext, z = 1, J = 0;
        r.treeContext = ra(R, z, J);
        try {
          Ct(e, r, S);
        } finally {
          r.treeContext = R;
        }
      } else
        Ct(e, r, S);
      _t(r);
    }
    function ts(e, r, a, s, d) {
      var S = a.type, x = tl(S, s);
      Sa(e, r, S, x, d);
    }
    function ya(e, r, a, s) {
      a._context === void 0 ? a !== a.Consumer && (ma || (ma = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : a = a._context;
      var d = s.children;
      typeof d != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var S = jn(a), x = d(S);
      Ct(e, r, x);
    }
    function rs(e, r, a, s) {
      var d = a._context, S = s.value, x = s.children, R;
      R = r.context, r.context = lo(d, S), Ct(e, r, x), r.context = ea(d), R !== r.context && g("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function kt(e, r, a, s, d) {
      Lt(r, "Lazy");
      var S = a._payload, x = a._init, R = x(S), z = tl(R, s);
      Sa(e, r, R, z, d), _t(r);
    }
    function Sa(e, r, a, s, d) {
      if (typeof a == "function")
        if (Jl(a)) {
          Ka(e, r, a, s);
          return;
        } else {
          Kl(e, r, a, s);
          return;
        }
      if (typeof a == "string") {
        Ja(e, r, a, s);
        return;
      }
      switch (a) {
        case kl:
        case Ma:
        case Ho:
        case Yo:
        case Wo: {
          Ct(e, r, s.children);
          return;
        }
        case _i: {
          Lt(r, "SuspenseList"), Ct(e, r, s.children), _t(r);
          return;
        }
        case El:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case Rn: {
          Xa(e, r, s);
          return;
        }
      }
      if (typeof a == "object" && a !== null)
        switch (a.$$typeof) {
          case qn: {
            es(e, r, a, s, d);
            return;
          }
          case Fi: {
            ts(e, r, a, s, d);
            return;
          }
          case Jn: {
            rs(e, r, a, s);
            return;
          }
          case Kn: {
            ya(e, r, a, s);
            return;
          }
          case Vo: {
            kt(e, r, a, s);
            return;
          }
        }
      var S = "";
      throw (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (a == null ? a : typeof a) + "." + S));
    }
    function rl(e, r) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      e[Symbol.toStringTag] === "Generator" && (qa || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), qa = !0), e.entries === r && (el || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), el = !0);
    }
    function Ct(e, r, a) {
      try {
        return ba(e, r, a);
      } catch (s) {
        throw typeof s == "object" && s !== null && typeof s.then == "function" || (jr = jr !== null ? jr : ua()), s;
      }
    }
    function ba(e, r, a) {
      if (r.node = a, typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case Ca: {
            var s = a, d = s.type, S = s.props, x = s.ref;
            Sa(e, r, d, S, x);
            return;
          }
          case Li:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Vo: {
            var R = a, z = R._payload, J = R._init, oe;
            try {
              oe = J(z);
            } catch (Ei) {
              throw typeof Ei == "object" && Ei !== null && typeof Ei.then == "function" && Lt(r, "Lazy"), Ei;
            }
            Ct(e, r, oe);
            return;
          }
        }
        if (Dt(a)) {
          nl(e, r, a);
          return;
        }
        var ye = Ge(a);
        if (ye) {
          rl(a, ye);
          var We = ye.call(a);
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
        var sl = Object.prototype.toString.call(a);
        throw new Error("Objects are not valid as a React child (found: " + (sl === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : sl) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof a == "string") {
        var ul = r.blockedSegment;
        ul.lastPushedText = Ta(r.blockedSegment.chunks, a, e.responseState, ul.lastPushedText);
        return;
      }
      if (typeof a == "number") {
        var cl = r.blockedSegment;
        cl.lastPushedText = Ta(r.blockedSegment.chunks, "" + a, e.responseState, cl.lastPushedText);
        return;
      }
      typeof a == "function" && g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function nl(e, r, a) {
      for (var s = a.length, d = 0; d < s; d++) {
        var S = r.treeContext;
        r.treeContext = ra(S, s, d);
        try {
          Si(e, r, a[d]);
        } finally {
          r.treeContext = S;
        }
      }
    }
    function ns(e, r, a) {
      var s = r.blockedSegment, d = s.chunks.length, S = Pr(
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
      a.then(R, R);
    }
    function Si(e, r, a) {
      var s = r.blockedSegment.formatContext, d = r.legacyContext, S = r.context, x = null;
      x = r.componentStack;
      try {
        return Ct(e, r, a);
      } catch (R) {
        if (co(), typeof R == "object" && R !== null && typeof R.then == "function") {
          ns(e, r, R), r.blockedSegment.formatContext = s, r.legacyContext = d, r.context = S, Jo(S), r.componentStack = x;
          return;
        } else
          throw r.blockedSegment.formatContext = s, r.legacyContext = d, r.context = S, Jo(S), r.componentStack = x, R;
      }
    }
    function bi(e, r, a, s) {
      var d = go(e, s);
      if (r === null ? yi(e, s) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, r.errorDigest = d, fa(r, s), r.parentFlushed && e.clientRenderedBoundaries.push(r))), e.allPendingTasks--, e.allPendingTasks === 0) {
        var S = e.onAllReady;
        S();
      }
    }
    function ol(e) {
      var r = this, a = e.blockedBoundary, s = e.blockedSegment;
      s.status = la, bo(r, a, s);
    }
    function il(e, r, a) {
      var s = e.blockedBoundary, d = e.blockedSegment;
      if (d.status = la, s === null)
        r.allPendingTasks--, r.status !== ir && (r.status = ir, r.destination !== null && N(r.destination));
      else {
        if (s.pendingTasks--, !s.forceClientRender) {
          s.forceClientRender = !0;
          var S = a === void 0 ? new Error("The render was aborted by the server without a reason.") : a;
          s.errorDigest = r.onError(S);
          {
            var x = "The server did not finish this Suspense boundary: ";
            S && typeof S.message == "string" ? S = x + S.message : S = x + String(S);
            var R = ar;
            ar = e;
            try {
              fa(s, S);
            } finally {
              ar = R;
            }
          }
          s.parentFlushed && r.clientRenderedBoundaries.push(s);
        }
        if (s.fallbackAbortableTasks.forEach(function(J) {
          return il(J, r, a);
        }), s.fallbackAbortableTasks.clear(), r.allPendingTasks--, r.allPendingTasks === 0) {
          var z = r.onAllReady;
          z();
        }
      }
    }
    function So(e, r) {
      if (r.chunks.length === 0 && r.children.length === 1 && r.children[0].boundary === null) {
        var a = r.children[0];
        a.id = r.id, a.parentFlushed = !0, a.status === cn && So(e, a);
      } else {
        var s = e.completedSegments;
        s.push(r);
      }
    }
    function bo(e, r, a) {
      if (r === null) {
        if (a.parentFlushed) {
          if (e.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          e.completedRootSegment = a;
        }
        if (e.pendingRootTasks--, e.pendingRootTasks === 0) {
          e.onShellError = ho;
          var s = e.onShellReady;
          s();
        }
      } else if (r.pendingTasks--, !r.forceClientRender) {
        if (r.pendingTasks === 0)
          a.parentFlushed && a.status === cn && So(r, a), r.parentFlushed && e.completedBoundaries.push(r), r.fallbackAbortableTasks.forEach(ol, e), r.fallbackAbortableTasks.clear();
        else if (a.parentFlushed && a.status === cn) {
          So(r, a);
          var d = r.completedSegments;
          d.length === 1 && r.parentFlushed && e.partialBoundaries.push(r);
        }
      }
      if (e.allPendingTasks--, e.allPendingTasks === 0) {
        var S = e.onAllReady;
        S();
      }
    }
    function xi(e, r) {
      var a = r.blockedSegment;
      if (a.status === gi) {
        Jo(r.context);
        var s = null;
        s = ar, ar = r;
        try {
          Ct(e, r, r.node), Ea(a.chunks, e.responseState, a.lastPushedText, a.textEmbedded), r.abortSet.delete(r), a.status = cn, bo(e, r.blockedBoundary, a);
        } catch (S) {
          if (co(), typeof S == "object" && S !== null && typeof S.then == "function") {
            var d = r.ping;
            S.then(d, d);
          } else
            r.abortSet.delete(r), a.status = fn, bi(e, r.blockedBoundary, a, S);
        } finally {
          ar = s;
        }
      }
    }
    function al(e) {
      if (e.status !== ir) {
        var r = Ml(), a = Or.current;
        Or.current = Ga;
        var s;
        s = vi.getCurrentStack, vi.getCurrentStack = ua;
        var d = po;
        hi(e.responseState);
        try {
          var S = e.pingedTasks, x;
          for (x = 0; x < S.length; x++) {
            var R = S[x];
            xi(e, R);
          }
          S.splice(0, x), e.destination !== null && Ti(e, e.destination);
        } catch (z) {
          go(e, z), yi(e, z);
        } finally {
          hi(d), Or.current = a, vi.getCurrentStack = s, a === Ga && Jo(r);
        }
      }
    }
    function xo(e, r, a) {
      switch (a.parentFlushed = !0, a.status) {
        case gi: {
          var s = a.id = e.nextSegmentId++;
          return a.lastPushedText = !1, a.textEmbedded = !1, Do(r, e.responseState, s);
        }
        case cn: {
          a.status = Za;
          for (var d = !0, S = a.chunks, x = 0, R = a.children, z = 0; z < R.length; z++) {
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
    function wo(e, r, a) {
      var s = a.boundary;
      if (s === null)
        return xo(e, r, a);
      if (s.parentFlushed = !0, s.forceClientRender)
        return jt(r, e.responseState, s.errorDigest, s.errorMessage, s.errorComponentStack), xo(e, r, a), ka(r, e.responseState);
      if (s.pendingTasks > 0) {
        s.rootSegmentID = e.nextSegmentId++, s.completedSegments.length > 0 && e.partialBoundaries.push(s);
        var d = s.id = Pt(e.responseState);
        return Rr(r, e.responseState, d), xo(e, r, a), Zn(r, e.responseState);
      } else {
        if (s.byteSize > e.progressiveChunkSize)
          return s.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(s), Rr(r, e.responseState, s.id), xo(e, r, a), Zn(r, e.responseState);
        Ni(r, e.responseState);
        var S = s.completedSegments;
        if (S.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var x = S[0];
        return wo(e, r, x), Tl(r, e.responseState);
      }
    }
    function os(e, r, a) {
      return bl(r, e.responseState, a.id, a.errorDigest, a.errorMessage, a.errorComponentStack);
    }
    function xa(e, r, a) {
      return C(r, e.responseState, a.formatContext, a.id), wo(e, r, a), _(r, a.formatContext);
    }
    function wi(e, r, a) {
      for (var s = a.completedSegments, d = 0; d < s.length; d++) {
        var S = s[d];
        ll(e, r, a, S);
      }
      return s.length = 0, vl(r, e.responseState, a.id, a.rootSegmentID);
    }
    function is(e, r, a) {
      for (var s = a.completedSegments, d = 0; d < s.length; d++) {
        var S = s[d];
        if (!ll(e, r, a, S))
          return d++, s.splice(0, d), !1;
      }
      return s.splice(0, d), !0;
    }
    function ll(e, r, a, s) {
      if (s.status === Za)
        return !0;
      var d = s.id;
      if (d === -1) {
        var S = s.id = a.rootSegmentID;
        if (S === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return xa(e, r, s);
      } else
        return xa(e, r, s), Tt(r, e.responseState, d);
    }
    function Ti(e, r) {
      try {
        var a = e.completedRootSegment;
        a !== null && e.pendingRootTasks === 0 && (wo(e, r, a), e.completedRootSegment = null, Yn(r, e.responseState));
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
          if (!wi(e, r, R)) {
            e.destination = null, d++, x.splice(0, d);
            return;
          }
        }
        x.splice(0, d);
        var z = e.partialBoundaries;
        for (d = 0; d < z.length; d++) {
          var J = z[d];
          if (!is(e, r, J)) {
            e.destination = null, d++, z.splice(0, d);
            return;
          }
        }
        z.splice(0, d);
        var oe = e.completedBoundaries;
        for (d = 0; d < oe.length; d++) {
          var ye = oe[d];
          if (!wi(e, r, ye)) {
            e.destination = null, d++, oe.splice(0, d);
            return;
          }
        }
        oe.splice(0, d);
      } finally {
        e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && (e.abortableTasks.size !== 0 && g("There was still abortable task at the root when we closed. This is a bug in React."), N(r));
      }
    }
    function as(e) {
      Te(function() {
        return al(e);
      });
    }
    function t(e, r) {
      if (e.status === Qa) {
        e.status = ir, xe(r, e.fatalError);
        return;
      }
      if (e.status !== ir && e.destination === null) {
        e.destination = r;
        try {
          Ti(e, r);
        } catch (a) {
          go(e, a), yi(e, a);
        }
      }
    }
    function n(e, r) {
      try {
        var a = e.abortableTasks;
        a.forEach(function(s) {
          return il(s, e, r);
        }), a.clear(), e.destination !== null && Ti(e, e.destination);
      } catch (s) {
        go(e, s), yi(e, s);
      }
    }
    function l() {
    }
    function f(e, r, a, s) {
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
      var oe = sa(e, wl(a, r ? r.identifierPrefix : void 0), ji(), 1 / 0, l, void 0, J, void 0, void 0);
      if (as(oe), n(oe, s), t(oe, R), d)
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
    Eo.renderToNodeStream = w, Eo.renderToStaticMarkup = b, Eo.renderToStaticNodeStream = A, Eo.renderToString = v, Eo.version = j;
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
function au() {
  return As || (As = 1, process.env.NODE_ENV !== "production" && function() {
    var O = Z, j = "18.2.0", V = O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
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
    function N(t, n) {
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
      return N(t, n), !0;
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
    function L(t) {
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
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", n, L(t)), k(t);
    }
    function fe(t, n) {
      if (Y(t))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", n, L(t)), k(t);
    }
    function De(t) {
      if (Y(t))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", L(t)), k(t);
    }
    var ie = Object.prototype.hasOwnProperty, Oe = 0, Pe = 1, Ue = 2, nt = 3, Xe = 4, vt = 5, Je = 6, qe = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", et = qe + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ve = new RegExp("^[" + qe + "][" + et + "]*$"), U = {}, W = {};
    function q(t) {
      return ie.call(W, t) ? !0 : ie.call(U, t) ? !1 : Ve.test(t) ? (W[t] = !0, !0) : (U[t] = !0, g("Invalid attribute name: `%s`", t), !1);
    }
    function ge(t, n, l, f) {
      if (l !== null && l.type === Oe)
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
        Oe,
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
        Pe,
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
        Pe,
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
        Pe,
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
        Pe,
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
        Pe,
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
      Pe,
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
        Pe,
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
    function G(t, n) {
      return t + n.charAt(0).toUpperCase() + n.substring(1);
    }
    var Ce = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ee).forEach(function(t) {
      Ce.forEach(function(n) {
        Ee[G(n, t)] = Ee[t];
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
        if (ie.call(mt, n) && mt[n])
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
    function Nr(t, n) {
      {
        if (t !== "input" && t !== "textarea" && t !== "select")
          return;
        n != null && n.value === null && !Ke && (Ke = !0, t === "select" && n.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", t) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", t));
      }
    }
    var Lr = {
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
    }, _r = function() {
    };
    {
      var Ze = {}, Fr = /^on./, hn = /^on[^A-Z]/, vn = new RegExp("^(aria)-[" + et + "]*$"), zr = new RegExp("^(aria)[A-Z][" + et + "]*$");
      _r = function(t, n, l, f) {
        if (ie.call(Ze, n) && Ze[n])
          return !0;
        var v = n.toLowerCase();
        if (v === "onfocusin" || v === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Ze[n] = !0, !0;
        if (f != null) {
          var b = f.registrationNameDependencies, w = f.possibleRegistrationNames;
          if (b.hasOwnProperty(n))
            return !0;
          var A = w.hasOwnProperty(v) ? w[v] : null;
          if (A != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", n, A), Ze[n] = !0, !0;
          if (Fr.test(n))
            return g("Unknown event handler property `%s`. It will be ignored.", n), Ze[n] = !0, !0;
        } else if (Fr.test(n))
          return hn.test(n) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", n), Ze[n] = !0, !0;
        if (vn.test(n) || zr.test(n))
          return !0;
        if (v === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Ze[n] = !0, !0;
        if (v === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Ze[n] = !0, !0;
        if (v === "is" && l !== null && l !== void 0 && typeof l != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof l), Ze[n] = !0, !0;
        if (typeof l == "number" && isNaN(l))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", n), Ze[n] = !0, !0;
        var e = se(n), r = e !== null && e.type === Oe;
        if (Lr.hasOwnProperty(v)) {
          var a = Lr[v];
          if (a !== n)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", n, a), Ze[n] = !0, !0;
        } else if (!r && n !== v)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", n, v), Ze[n] = !0, !0;
        return typeof l == "boolean" && ge(n, l, e, !1) ? (l ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', l, n, n, l, n) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', l, n, n, l, n, n, n), Ze[n] = !0, !0) : r ? !0 : ge(n, l, e, !1) ? (Ze[n] = !0, !1) : ((l === "false" || l === "true") && e !== null && e.type === nt && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", l, n, l === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', n, l), Ze[n] = !0), !0);
      };
    }
    var Sr = function(t, n, l) {
      {
        var f = [];
        for (var v in n) {
          var b = _r(t, v, n[v], l);
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
      var $t = /^(?:webkit|moz|o)[A-Z]/, Br = /^-ms-/, gn = /-(.)/g, st = /;\s*$/, Mt = {}, Gt = {}, Ae = !1, Zt = !1, br = function(t) {
        return t.replace(gn, function(n, l) {
          return l.toUpperCase();
        });
      }, ur = function(t) {
        Mt.hasOwnProperty(t) && Mt[t] || (Mt[t] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          t,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          br(t.replace(Br, "ms-"))
        ));
      }, It = function(t) {
        Mt.hasOwnProperty(t) && Mt[t] || (Mt[t] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", t, t.charAt(0).toUpperCase() + t.slice(1)));
      }, xr = function(t, n) {
        Gt.hasOwnProperty(n) && Gt[n] || (Gt[n] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, t, n.replace(st, "")));
      }, Ut = function(t, n) {
        Ae || (Ae = !0, g("`NaN` is an invalid value for the `%s` css style property.", t));
      }, $e = function(t, n) {
        Zt || (Zt = !0, g("`Infinity` is an invalid value for the `%s` css style property.", t));
      };
      Ur = function(t, n) {
        t.indexOf("-") > -1 ? ur(t) : $t.test(t) ? It(t) : st.test(n) && xr(t, n), typeof n == "number" && (isNaN(n) ? Ut(t, n) : isFinite(n) || $e(t, n));
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
    var Qt = F("<script>"), Bn = F("<\/script>"), Gr = F('<script src="'), Tr = F('<script type="module" src="'), Xt = F('" async=""><\/script>');
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
          A.push(Gr, $(Qe(f[e])), Xt);
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
    var gt = 0, He = 1, At = 2, St = 3, tt = 4, Er = 5, Ot = 6, Pt = 7;
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
          return ut(Pt, null);
        case "tr":
          return ut(Ot, null);
      }
      return t.insertionMode >= tt || t.insertionMode === gt ? ut(He, null) : t;
    }
    var Zr = null;
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
    function Mr(t, n, l, f) {
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
    var h = F(' style="'), m = F(":"), M = F(";");
    function T(t, n, l) {
      if (typeof l != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var f = !0;
      for (var v in l)
        if (ie.call(l, v)) {
          var b = l[v];
          if (!(b == null || typeof b == "boolean" || b === "")) {
            var w = void 0, A = void 0, e = v.indexOf("--") === 0;
            e ? (w = $(Qe(v)), fe(b, v), A = $(Qe(("" + b).trim()))) : (Wr(v, b), w = u(v), typeof b == "number" ? b !== 0 && !ie.call(Ee, v) ? A = $(b + "px") : A = $("" + b) : (fe(b, v), A = $(Qe(("" + b).trim())))), f ? (f = !1, t.push(h, w, m, A)) : t.push(M, w, m, A);
          }
        }
      f || t.push(ne);
    }
    var P = F(" "), B = F('="'), ne = F('"'), de = F('=""');
    function ae(t, n, l, f) {
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
              f && t.push(P, w, de);
              return;
            case Xe:
              f === !0 ? t.push(P, w, de) : f === !1 || t.push(P, w, B, $(Qe(f)), ne);
              return;
            case vt:
              isNaN(f) || t.push(P, w, B, $(Qe(f)), ne);
              break;
            case Je:
              !isNaN(f) && f >= 1 && t.push(P, w, B, $(Qe(f)), ne);
              break;
            default:
              v.sanitizeURL && (X(f, b), f = "" + f, wr(f)), t.push(P, w, B, $(Qe(f)), ne);
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
          t.push(P, $(l), B, $(Qe(f)), ne);
        }
      }
    }
    var Me = F(">"), ft = F("/>");
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
    var it = !1, Ht = !1, bt = !1, Ir = !1, qt = !1, pr = !1, Yt = !1;
    function Jr(t, n) {
      {
        var l = t[n];
        if (l != null) {
          var f = cr(l);
          t.multiple && !f ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.", n) : !t.multiple && f && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", n);
        }
      }
    }
    function ki(t, n, l) {
      ct("select", n), Jr(n, "value"), Jr(n, "defaultValue"), n.value !== void 0 && n.defaultValue !== void 0 && !bt && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), bt = !0), t.push(xt("select"));
      var f = null, v = null;
      for (var b in n)
        if (ie.call(n, b)) {
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
              ae(t, l, b, w);
              break;
          }
        }
      return t.push(Me), ot(t, v, f), f;
    }
    function Ci(t) {
      var n = "";
      return O.Children.forEach(t, function(l) {
        l != null && (n += l, !qt && typeof l != "string" && typeof l != "number" && (qt = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), n;
    }
    var Wn = F(' selected=""');
    function Mi(t, n, l, f) {
      var v = f.selectedValue;
      t.push(xt("option"));
      var b = null, w = null, A = null, e = null;
      for (var r in n)
        if (ie.call(n, r)) {
          var a = n[r];
          if (a == null)
            continue;
          switch (r) {
            case "children":
              b = a;
              break;
            case "selected":
              A = a, Yt || (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Yt = !0);
              break;
            case "dangerouslySetInnerHTML":
              e = a;
              break;
            case "value":
              w = a;
            default:
              ae(t, l, r, a);
              break;
          }
        }
      if (v != null) {
        var s;
        if (w !== null ? (X(w, "value"), s = "" + w) : (e !== null && (pr || (pr = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), s = Ci(b)), cr(v))
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
      return t.push(Me), ot(t, e, b), b;
    }
    function Hn(t, n, l) {
      ct("input", n), n.checked !== void 0 && n.defaultChecked !== void 0 && !Ht && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", n.type), Ht = !0), n.value !== void 0 && n.defaultValue !== void 0 && !it && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", n.type), it = !0), t.push(xt("input"));
      var f = null, v = null, b = null, w = null;
      for (var A in n)
        if (ie.call(n, A)) {
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
              ae(t, l, A, e);
              break;
          }
        }
      return b !== null ? ae(t, l, "checked", b) : w !== null && ae(t, l, "checked", w), f !== null ? ae(t, l, "value", f) : v !== null && ae(t, l, "value", v), t.push(ft), null;
    }
    function Vt(t, n, l) {
      ct("textarea", n), n.value !== void 0 && n.defaultValue !== void 0 && !Ir && (g("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ir = !0), t.push(xt("textarea"));
      var f = null, v = null, b = null;
      for (var w in n)
        if (ie.call(n, w)) {
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
              ae(t, l, w, A);
              break;
          }
        }
      if (f === null && v !== null && (f = v), t.push(Me), b != null) {
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
        if (ie.call(n, v)) {
          var b = n[v];
          if (b == null)
            continue;
          switch (v) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(l + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              ae(t, f, v, b);
              break;
          }
        }
      return t.push(ft), null;
    }
    function yn(t, n, l) {
      t.push(xt("menuitem"));
      for (var f in n)
        if (ie.call(n, f)) {
          var v = n[f];
          if (v == null)
            continue;
          switch (f) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              ae(t, l, f, v);
              break;
          }
        }
      return t.push(Me), null;
    }
    function Ne(t, n, l) {
      t.push(xt("title"));
      var f = null;
      for (var v in n)
        if (ie.call(n, v)) {
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
              ae(t, l, v, b);
              break;
          }
        }
      t.push(Me);
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
        if (ie.call(n, w)) {
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
              ae(t, f, w, A);
              break;
          }
        }
      return t.push(Me), ot(t, b, v), typeof v == "string" ? (t.push($(Kt(v))), null) : v;
    }
    function dt(t, n, l, f) {
      t.push(xt(l));
      var v = null, b = null;
      for (var w in n)
        if (ie.call(n, w)) {
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
              q(w) && typeof A != "function" && typeof A != "symbol" && t.push(P, $(w), B, $(Qe(A)), ne);
              break;
          }
        }
      return t.push(Me), ot(t, b, v), v;
    }
    var hr = F(`
`);
    function tr(t, n, l, f) {
      t.push(xt(l));
      var v = null, b = null;
      for (var w in n)
        if (ie.call(n, w)) {
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
              ae(t, f, w, A);
              break;
          }
        }
      if (t.push(Me), b != null) {
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
      switch (rt(n, l), Nr(n, l), Fn(n, l, null), !l.suppressContentEditableWarning && l.contentEditable && l.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), v.insertionMode !== At && v.insertionMode !== St && n.indexOf("-") === -1 && typeof l.is != "string" && n.toLowerCase() !== n && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", n), n) {
        case "select":
          return ki(t, l, f);
        case "option":
          return Mi(t, l, f, v);
        case "textarea":
          return Vt(t, l, f);
        case "input":
          return Hn(t, l, f);
        case "menuitem":
          return yn(t, l, f);
        case "title":
          return Ne(t, l, f);
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
    var Io = F("</"), Do = F(">");
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
          t.push(Io, $(n), Do);
      }
    }
    function Ii(t, n) {
      for (var l = n.bootstrapChunks, f = 0; f < l.length - 1; f++)
        N(t, l[f]);
      return f < l.length ? ce(t, l[f]) : !0;
    }
    var Di = F('<template id="'), bn = F('"></template>');
    function xn(t, n, l) {
      N(t, Di), N(t, n.placeholderPrefix);
      var f = $(l.toString(16));
      return N(t, f), ce(t, bn);
    }
    var wn = F("<!--$-->"), qr = F('<!--$?--><template id="'), Ri = F('"></template>'), en = F("<!--$!-->"), $n = F("<!--/$-->"), Gn = F("<template"), Dr = F('"'), Rr = F(' data-dgst="'), Tn = F(' data-msg="'), Ao = F(' data-stck="'), Zn = F("></template>");
    function Oo(t, n) {
      return ce(t, wn);
    }
    function En(t, n, l) {
      if (N(t, qr), l === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return N(t, l), ce(t, Ri);
    }
    function pt(t, n, l, f, v) {
      var b;
      return b = ce(t, en), N(t, Gn), l && (N(t, Rr), N(t, $(Qe(l))), N(t, Dr)), f && (N(t, Tn), N(t, $(Qe(f))), N(t, Dr)), v && (N(t, Ao), N(t, $(Qe(v))), N(t, Dr)), b = ce(t, Zn), b;
    }
    function Po(t, n) {
      return ce(t, $n);
    }
    function kn(t, n) {
      return ce(t, $n);
    }
    function Ai(t, n) {
      return ce(t, $n);
    }
    var jo = F('<div hidden id="'), Cn = F('">'), No = F("</div>"), Lo = F('<svg aria-hidden="true" style="display:none" id="'), Mn = F('">'), In = F("</svg>"), _o = F('<math aria-hidden="true" style="display:none" id="'), Fo = F('">'), zo = F("</math>"), Qn = F('<table hidden id="'), Uo = F('">'), i = F("</table>"), c = F('<table hidden><tbody id="'), p = F('">'), y = F("</tbody></table>"), I = F('<table hidden><tr id="'), C = F('">'), _ = F("</tr></table>"), H = F('<table hidden><colgroup id="'), pe = F('">'), we = F("</colgroup></table>");
    function be(t, n, l, f) {
      switch (l.insertionMode) {
        case gt:
        case He:
          return N(t, jo), N(t, n.segmentPrefix), N(t, $(f.toString(16))), ce(t, Cn);
        case At:
          return N(t, Lo), N(t, n.segmentPrefix), N(t, $(f.toString(16))), ce(t, Mn);
        case St:
          return N(t, _o), N(t, n.segmentPrefix), N(t, $(f.toString(16))), ce(t, Fo);
        case tt:
          return N(t, Qn), N(t, n.segmentPrefix), N(t, $(f.toString(16))), ce(t, Uo);
        case Er:
          return N(t, c), N(t, n.segmentPrefix), N(t, $(f.toString(16))), ce(t, p);
        case Ot:
          return N(t, I), N(t, n.segmentPrefix), N(t, $(f.toString(16))), ce(t, C);
        case Pt:
          return N(t, H), N(t, n.segmentPrefix), N(t, $(f.toString(16))), ce(t, pe);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function ze(t, n) {
      switch (n.insertionMode) {
        case gt:
        case He:
          return ce(t, No);
        case At:
          return ce(t, In);
        case St:
          return ce(t, zo);
        case tt:
          return ce(t, i);
        case Er:
          return ce(t, y);
        case Ot:
          return ce(t, _);
        case Pt:
          return ce(t, we);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var ht = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", wt = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Tt = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Dn = F(ht + ';$RS("'), Bo = F('$RS("'), Xn = F('","'), hl = F('")<\/script>');
    function vl(t, n, l) {
      N(t, n.startInlineScript), n.sentCompleteSegmentFunction ? N(t, Bo) : (n.sentCompleteSegmentFunction = !0, N(t, Dn)), N(t, n.segmentPrefix);
      var f = $(l.toString(16));
      return N(t, f), N(t, Xn), N(t, n.placeholderPrefix), N(t, f), ce(t, hl);
    }
    var gl = F(wt + ';$RC("'), ml = F('$RC("'), yl = F('","'), Sl = F('")<\/script>');
    function Oi(t, n, l, f) {
      if (N(t, n.startInlineScript), n.sentCompleteBoundaryFunction ? N(t, ml) : (n.sentCompleteBoundaryFunction = !0, N(t, gl)), l === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var v = $(f.toString(16));
      return N(t, l), N(t, yl), N(t, n.segmentPrefix), N(t, v), ce(t, Sl);
    }
    var bl = F(Tt + ';$RX("'), xl = F('$RX("'), Pi = F('"'), wl = F(")<\/script>"), ji = F(",");
    function Ta(t, n, l, f, v, b) {
      if (N(t, n.startInlineScript), n.sentClientRenderFunction ? N(t, xl) : (n.sentClientRenderFunction = !0, N(t, bl)), l === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return N(t, l), N(t, Pi), (f || v || b) && (N(t, ji), N(t, $(Ni(f || "")))), (v || b) && (N(t, ji), N(t, $(Ni(v || "")))), b && (N(t, ji), N(t, $(Ni(b)))), ce(t, wl);
    }
    var Ea = /[<\u2028\u2029]/g;
    function Ni(t) {
      var n = JSON.stringify(t);
      return n.replace(Ea, function(l) {
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
    var jt = Object.assign, Tl = Symbol.for("react.element"), ka = Symbol.for("react.portal"), Et = Symbol.for("react.fragment"), Ca = Symbol.for("react.strict_mode"), Li = Symbol.for("react.profiler"), Wo = Symbol.for("react.provider"), Ho = Symbol.for("react.context"), Yo = Symbol.for("react.forward_ref"), Jn = Symbol.for("react.suspense"), Kn = Symbol.for("react.suspense_list"), qn = Symbol.for("react.memo"), Rn = Symbol.for("react.lazy"), _i = Symbol.for("react.scope"), Fi = Symbol.for("react.debug_trace_mode"), Vo = Symbol.for("react.legacy_hidden"), El = Symbol.for("react.default_value"), Ma = Symbol.iterator, kl = "@@iterator";
    function Cl(t) {
      if (t === null || typeof t != "object")
        return null;
      var n = Ma && t[Ma] || t[kl];
      return typeof n == "function" ? n : null;
    }
    function Ia(t, n, l) {
      var f = t.displayName;
      if (f)
        return f;
      var v = n.displayName || n.name || "";
      return v !== "" ? l + "(" + v + ")" : l;
    }
    function Da(t) {
      return t.displayName || "Context";
    }
    function Ge(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case Et:
          return "Fragment";
        case ka:
          return "Portal";
        case Li:
          return "Profiler";
        case Ca:
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
            return Da(n) + ".Consumer";
          case Wo:
            var l = t;
            return Da(l._context) + ".Provider";
          case Yo:
            return Ia(t, t.render, "ForwardRef");
          case qn:
            var f = t.displayName || null;
            return f !== null ? f : Ge(t.type) || "Memo";
          case Rn: {
            var v = t, b = v._payload, w = v._init;
            try {
              return Ge(w(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var eo = 0, zi, Ye, An, Ui, Bi, Wi, Hi;
    function Yi() {
    }
    Yi.__reactDisabledLog = !0;
    function Ra() {
      {
        if (eo === 0) {
          zi = console.log, Ye = console.info, An = console.warn, Ui = console.error, Bi = console.group, Wi = console.groupCollapsed, Hi = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Yi,
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
    function Aa() {
      {
        if (eo--, eo === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: jt({}, t, {
              value: zi
            }),
            info: jt({}, t, {
              value: Ye
            }),
            warn: jt({}, t, {
              value: An
            }),
            error: jt({}, t, {
              value: Ui
            }),
            group: jt({}, t, {
              value: Bi
            }),
            groupCollapsed: jt({}, t, {
              value: Wi
            }),
            groupEnd: jt({}, t, {
              value: Hi
            })
          });
        }
        eo < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var $o = V.ReactCurrentDispatcher, Vi;
    function to(t, n, l) {
      {
        if (Vi === void 0)
          try {
            throw Error();
          } catch (v) {
            var f = v.stack.trim().match(/\n( *(at )?)/);
            Vi = f && f[1] || "";
          }
        return `
` + Vi + t;
      }
    }
    var ro = !1, On;
    {
      var no = typeof WeakMap == "function" ? WeakMap : Map;
      On = new no();
    }
    function oo(t, n) {
      if (!t || ro)
        return "";
      {
        var l = On.get(t);
        if (l !== void 0)
          return l;
      }
      var f;
      ro = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = $o.current, $o.current = null, Ra();
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
`), r = A.length - 1, a = e.length - 1; r >= 1 && a >= 0 && A[r] !== e[a]; )
            a--;
          for (; r >= 1 && a >= 0; r--, a--)
            if (A[r] !== e[a]) {
              if (r !== 1 || a !== 1)
                do
                  if (r--, a--, a < 0 || A[r] !== e[a]) {
                    var s = `
` + A[r].replace(" at new ", " at ");
                    return t.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", t.displayName)), typeof t == "function" && On.set(t, s), s;
                  }
                while (r >= 1 && a >= 0);
              break;
            }
        }
      } finally {
        ro = !1, $o.current = b, Aa(), Error.prepareStackTrace = v;
      }
      var d = t ? t.displayName || t.name : "", S = d ? to(d) : "";
      return typeof t == "function" && On.set(t, S), S;
    }
    function Go(t, n, l) {
      return oo(t, !0);
    }
    function Oa(t, n, l) {
      return oo(t, !1);
    }
    function $i(t) {
      var n = t.prototype;
      return !!(n && n.isReactComponent);
    }
    function Gi(t, n, l) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return oo(t, $i(t));
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
            return Oa(t.render);
          case qn:
            return Gi(t.type, n, l);
          case Rn: {
            var f = t, v = f._payload, b = f._init;
            try {
              return Gi(b(v), n, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Zi = {}, Pa = V.ReactDebugCurrentFrame;
    function Pn(t) {
      if (t) {
        var n = t._owner, l = Gi(t.type, t._source, n ? n.type : null);
        Pa.setExtraStackFrame(l);
      } else
        Pa.setExtraStackFrame(null);
    }
    function Qi(t, n, l, f, v) {
      {
        var b = Function.call.bind(ie);
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
            A && !(A instanceof Error) && (Pn(v), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", l, w, typeof A), Pn(null)), A instanceof Error && !(A.message in Zi) && (Zi[A.message] = !0, Pn(v), g("Failed %s type: %s", l, A.message), Pn(null));
          }
      }
    }
    var Zo;
    Zo = {};
    var tn = {};
    Object.freeze(tn);
    function Xi(t, n) {
      {
        var l = t.contextTypes;
        if (!l)
          return tn;
        var f = {};
        for (var v in l)
          f[v] = n[v];
        {
          var b = Ge(t) || "Unknown";
          Qi(l, f, "context", b);
        }
        return f;
      }
    }
    function Ji(t, n, l, f) {
      {
        if (typeof t.getChildContext != "function") {
          {
            var v = Ge(n) || "Unknown";
            Zo[v] || (Zo[v] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", v, v));
          }
          return l;
        }
        var b = t.getChildContext();
        for (var w in b)
          if (!(w in f))
            throw new Error((Ge(n) || "Unknown") + '.getChildContext(): key "' + w + '" is not defined in childContextTypes.');
        {
          var A = Ge(n) || "Unknown";
          Qi(f, b, "child context", A);
        }
        return jt({}, l, b);
      }
    }
    var Ar;
    Ar = {};
    var ja = null, rn = null;
    function nn(t) {
      t.context._currentValue = t.parentValue;
    }
    function Ki(t) {
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
        Ki(n);
      }
    }
    function Qo(t) {
      nn(t);
      var n = t.parent;
      n !== null && Qo(n);
    }
    function Xo(t) {
      var n = t.parent;
      n !== null && Xo(n), Ki(t);
    }
    function io(t, n) {
      nn(t);
      var l = t.parent;
      if (l === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      l.depth === n.depth ? nr(l, n) : io(l, n);
    }
    function qi(t, n) {
      var l = n.parent;
      if (l === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      t.depth === l.depth ? nr(t, l) : qi(t, l), Ki(n);
    }
    function ao(t) {
      var n = rn, l = t;
      n !== l && (n === null ? Xo(l) : l === null ? Qo(n) : n.depth === l.depth ? nr(n, l) : n.depth > l.depth ? io(n, l) : qi(n, l), rn = l);
    }
    function Na(t, n) {
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
    function La(t) {
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
    function ea(t) {
      return t._reactInternals;
    }
    function Ml(t, n) {
      t._reactInternals = n;
    }
    var jn = {}, Ko = {}, ta, qo, ei, so, ti, Nn, uo, ri, Ln;
    {
      ta = /* @__PURE__ */ new Set(), qo = /* @__PURE__ */ new Set(), ei = /* @__PURE__ */ new Set(), uo = /* @__PURE__ */ new Set(), so = /* @__PURE__ */ new Set(), ri = /* @__PURE__ */ new Set(), Ln = /* @__PURE__ */ new Set();
      var ni = /* @__PURE__ */ new Set();
      Nn = function(t, n) {
        if (!(t === null || typeof t == "function")) {
          var l = n + "_" + t;
          ni.has(l) || (ni.add(l), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", n, t));
        }
      }, ti = function(t, n) {
        if (n === void 0) {
          var l = Ge(t) || "Component";
          so.has(l) || (so.add(l), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", l));
        }
      };
    }
    function oi(t, n) {
      {
        var l = t.constructor, f = l && Ge(l) || "ReactClass", v = f + "." + n;
        if (jn[v])
          return;
        g(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, n, n, f), jn[v] = !0;
      }
    }
    var ii = {
      isMounted: function(t) {
        return !1;
      },
      enqueueSetState: function(t, n, l) {
        var f = ea(t);
        f.queue === null ? oi(t, "setState") : (f.queue.push(n), l != null && Nn(l, "setState"));
      },
      enqueueReplaceState: function(t, n, l) {
        var f = ea(t);
        f.replace = !0, f.queue = [n], l != null && Nn(l, "setState");
      },
      enqueueForceUpdate: function(t, n) {
        var l = ea(t);
        l.queue === null ? oi(t, "forceUpdate") : n != null && Nn(n, "setState");
      }
    };
    function _a(t, n, l, f, v) {
      var b = l(v, f);
      ti(n, b);
      var w = b == null ? f : jt({}, f, b);
      return w;
    }
    function Fa(t, n, l) {
      var f = tn, v = t.contextType;
      if ("contextType" in t) {
        var b = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === Ho && v._context === void 0
        );
        if (!b && !Ln.has(t)) {
          Ln.add(t);
          var w = "";
          v === void 0 ? w = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? w = " However, it is set to a " + typeof v + "." : v.$$typeof === Wo ? w = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? w = " Did you accidentally pass the Context.Consumer instead?" : w = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ge(t) || "Component", w);
        }
      }
      typeof v == "object" && v !== null ? f = lo(v) : f = l;
      var A = new t(n, f);
      {
        if (typeof t.getDerivedStateFromProps == "function" && (A.state === null || A.state === void 0)) {
          var e = Ge(t) || "Component";
          ta.has(e) || (ta.add(e), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", e, A.state === null ? "null" : "undefined", e));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof A.getSnapshotBeforeUpdate == "function") {
          var r = null, a = null, s = null;
          if (typeof A.componentWillMount == "function" && A.componentWillMount.__suppressDeprecationWarning !== !0 ? r = "componentWillMount" : typeof A.UNSAFE_componentWillMount == "function" && (r = "UNSAFE_componentWillMount"), typeof A.componentWillReceiveProps == "function" && A.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? a = "componentWillReceiveProps" : typeof A.UNSAFE_componentWillReceiveProps == "function" && (a = "UNSAFE_componentWillReceiveProps"), typeof A.componentWillUpdate == "function" && A.componentWillUpdate.__suppressDeprecationWarning !== !0 ? s = "componentWillUpdate" : typeof A.UNSAFE_componentWillUpdate == "function" && (s = "UNSAFE_componentWillUpdate"), r !== null || a !== null || s !== null) {
            var d = Ge(t) || "Component", S = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            ei.has(d) || (ei.add(d), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, d, S, r !== null ? `
  ` + r : "", a !== null ? `
  ` + a : "", s !== null ? `
  ` + s : ""));
          }
        }
      }
      return A;
    }
    function za(t, n, l) {
      {
        var f = Ge(n) || "Component", v = t.render;
        v || (n.prototype && typeof n.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", f) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", f)), t.getInitialState && !t.getInitialState.isReactClassApproved && !t.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", f), t.getDefaultProps && !t.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", f), t.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", f), t.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", f), t.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", f), n.contextType && n.contextTypes && !ri.has(n) && (ri.add(n), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", f)), typeof t.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", f), n.prototype && n.prototype.isPureReactComponent && typeof t.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ge(n) || "A pure component"), typeof t.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", f), typeof t.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", f), typeof t.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", f), typeof t.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", f);
        var b = t.props !== l;
        t.props !== void 0 && b && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", f, f), t.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", f, f), typeof t.getSnapshotBeforeUpdate == "function" && typeof t.componentDidUpdate != "function" && !qo.has(n) && (qo.add(n), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ge(n))), typeof t.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", f), typeof t.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", f), typeof n.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", f);
        var w = t.state;
        w && (typeof w != "object" || cr(w)) && g("%s.state: must be set to an object or null", f), typeof t.getChildContext == "function" && typeof n.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", f);
      }
    }
    function Il(t, n) {
      var l = n.state;
      if (typeof n.componentWillMount == "function") {
        if (n.componentWillMount.__suppressDeprecationWarning !== !0) {
          var f = Ge(t) || "Unknown";
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
      typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), l !== n.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ge(t) || "Component"), ii.enqueueReplaceState(n, n.state, null));
    }
    function Dl(t, n, l, f) {
      if (t.queue !== null && t.queue.length > 0) {
        var v = t.queue, b = t.replace;
        if (t.queue = null, t.replace = !1, b && v.length === 1)
          n.state = v[0];
        else {
          for (var w = b ? v[0] : n.state, A = !0, e = b ? 1 : 0; e < v.length; e++) {
            var r = v[e], a = typeof r == "function" ? r.call(n, w, l, f) : r;
            a != null && (A ? (A = !1, w = jt({}, w, a)) : jt(w, a));
          }
          n.state = w;
        }
      } else
        t.queue = null;
    }
    function Ua(t, n, l, f) {
      za(t, n, l);
      var v = t.state !== void 0 ? t.state : null;
      t.updater = ii, t.props = l, t.state = v;
      var b = {
        queue: [],
        replace: !1
      };
      Ml(t, b);
      var w = n.contextType;
      if (typeof w == "object" && w !== null ? t.context = lo(w) : t.context = f, t.state === l) {
        var A = Ge(n) || "Component";
        uo.has(A) || (uo.add(A), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", A));
      }
      var e = n.getDerivedStateFromProps;
      typeof e == "function" && (t.state = _a(t, n, e, v, l)), typeof n.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function" && (typeof t.UNSAFE_componentWillMount == "function" || typeof t.componentWillMount == "function") && (Il(n, t), Dl(b, t, l, f));
    }
    var Rl = {
      id: 1,
      overflow: ""
    };
    function Al(t) {
      var n = t.overflow, l = t.id, f = l & ~Ol(l);
      return f.toString(32) + n;
    }
    function ai(t, n, l) {
      var f = t.id, v = t.overflow, b = li(f) - 1, w = f & ~(1 << b), A = l + 1, e = li(n) + b;
      if (e > 30) {
        var r = b - b % 5, a = (1 << r) - 1, s = (w & a).toString(32), d = w >> r, S = b - r, x = li(n) + S, R = A << S, z = R | d, J = s + v;
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
    function li(t) {
      return 32 - ra(t);
    }
    function Ol(t) {
      return 1 << li(t) - 1;
    }
    var ra = Math.clz32 ? Math.clz32 : jl, si = Math.log, Pl = Math.LN2;
    function jl(t) {
      var n = t >>> 0;
      return n === 0 ? 32 : 31 - (si(n) / Pl | 0) | 0;
    }
    function Nl(t, n) {
      return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n;
    }
    var Ll = typeof Object.is == "function" ? Object.is : Nl, vr = null, na = null, ui = null, Ie = null, on = !1, an = !1, je = 0, Nt = null, ln = 0, ci = 25, at = !1, gr;
    function sn() {
      if (vr === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return at && g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), vr;
    }
    function or(t, n) {
      if (n === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", gr), !1;
      t.length !== n.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, gr, "[" + t.join(", ") + "]", "[" + n.join(", ") + "]");
      for (var l = 0; l < n.length && l < t.length; l++)
        if (!Ll(t[l], n[l]))
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
      return Ie === null ? ui === null ? (on = !1, ui = Ie = un()) : (on = !0, Ie = ui) : Ie.next === null ? (on = !1, Ie = Ie.next = un()) : (on = !0, Ie = Ie.next), Ie;
    }
    function _l(t, n) {
      vr = n, na = t, at = !1, je = 0;
    }
    function Ba(t, n, l, f) {
      for (; an; )
        an = !1, je = 0, ln += 1, Ie = null, l = t(n, f);
      return oa(), l;
    }
    function fi() {
      var t = je !== 0;
      return t;
    }
    function oa() {
      at = !1, vr = null, na = null, an = !1, ui = null, ln = 0, Nt = null, Ie = null;
    }
    function Fl(t) {
      return at && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), lo(t);
    }
    function Wa(t) {
      return gr = "useContext", sn(), lo(t);
    }
    function co(t, n) {
      return typeof n == "function" ? n(t) : n;
    }
    function zl(t) {
      return gr = "useState", Ha(
        co,
        // useReducer has a special case to support lazy useState initializers
        t
      );
    }
    function Ha(t, n, l) {
      if (t !== co && (gr = "useReducer"), vr = sn(), Ie = mr(), on) {
        var f = Ie.queue, v = f.dispatch;
        if (Nt !== null) {
          var b = Nt.get(f);
          if (b !== void 0) {
            Nt.delete(f);
            var w = Ie.memoizedState, A = b;
            do {
              var e = A.action;
              at = !0, w = t(w, e), at = !1, A = A.next;
            } while (A !== null);
            return Ie.memoizedState = w, [w, v];
          }
        }
        return [Ie.memoizedState, v];
      } else {
        at = !0;
        var r;
        t === co ? r = typeof n == "function" ? n() : n : r = l !== void 0 ? l(n) : n, at = !1, Ie.memoizedState = r;
        var a = Ie.queue = {
          last: null,
          dispatch: null
        }, s = a.dispatch = Va.bind(null, vr, a);
        return [Ie.memoizedState, s];
      }
    }
    function di(t, n) {
      vr = sn(), Ie = mr();
      var l = n === void 0 ? null : n;
      if (Ie !== null) {
        var f = Ie.memoizedState;
        if (f !== null && l !== null) {
          var v = f[1];
          if (or(l, v))
            return f[0];
        }
      }
      at = !0;
      var b = t();
      return at = !1, Ie.memoizedState = [b, l], b;
    }
    function Ul(t) {
      vr = sn(), Ie = mr();
      var n = Ie.memoizedState;
      if (n === null) {
        var l = {
          current: t
        };
        return Object.seal(l), Ie.memoizedState = l, l;
      } else
        return n;
    }
    function Ya(t, n) {
      gr = "useLayoutEffect", g("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Va(t, n, l) {
      if (ln >= ci)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (t === vr) {
        an = !0;
        var f = {
          action: l,
          next: null
        };
        Nt === null && (Nt = /* @__PURE__ */ new Map());
        var v = Nt.get(n);
        if (v === void 0)
          Nt.set(n, f);
        else {
          for (var b = v; b.next !== null; )
            b = b.next;
          b.next = f;
        }
      }
    }
    function Bl(t, n) {
      return di(function() {
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
    function Gl() {
      var t = na, n = Al(t.treeContext), l = ia;
      if (l === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var f = je++;
      return kr(l, n, f);
    }
    function pi() {
    }
    var $a = {
      readContext: Fl,
      useContext: Wa,
      useMemo: di,
      useReducer: Ha,
      useRef: Ul,
      useState: zl,
      useInsertionEffect: pi,
      useLayoutEffect: Ya,
      useCallback: Bl,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: pi,
      // Effects are not run in the server environment.
      useEffect: pi,
      // Debugging effect
      useDebugValue: pi,
      useDeferredValue: Yl,
      useTransition: $l,
      useId: Gl,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Wl,
      useSyncExternalStore: Hl
    }, ia = null;
    function fo(t) {
      ia = t;
    }
    function Ga(t) {
      try {
        var n = "", l = t;
        do {
          switch (l.tag) {
            case 0:
              n += to(l.type, null, null);
              break;
            case 1:
              n += Oa(l.type, null, null);
              break;
            case 2:
              n += Go(l.type, null, null);
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
    var po = V.ReactCurrentDispatcher, hi = V.ReactDebugCurrentFrame, aa = 0, Or = 1, vi = 2, gi = 3, cn = 4, Za = 0, la = 1, fn = 2, Zl = 12800;
    function Qa(t) {
      return console.error(t), null;
    }
    function ir() {
    }
    function Ql(t, n, l, f, v, b, w, A, e) {
      var r = [], a = /* @__PURE__ */ new Set(), s = {
        destination: null,
        responseState: n,
        progressiveChunkSize: f === void 0 ? Zl : f,
        status: Za,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: a,
        pingedTasks: r,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: v === void 0 ? Qa : v,
        onAllReady: b === void 0 ? ir : b,
        onShellReady: w === void 0 ? ir : w,
        onShellError: A === void 0 ? ir : A,
        onFatalError: e === void 0 ? ir : e
      }, d = mi(
        s,
        0,
        null,
        l,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      d.parentFlushed = !0;
      var S = sa(s, t, null, d, a, tn, ja, Rl);
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
        id: Zr,
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
    function sa(t, n, l, f, v, b, w, A) {
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
    function mi(t, n, l, f, v, b) {
      return {
        status: aa,
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
      return yr === null || yr.componentStack === null ? "" : Ga(yr.componentStack);
    }
    function Pr(t, n) {
      t.componentStack = {
        tag: 0,
        parent: t.componentStack,
        type: n
      };
    }
    function ar(t, n) {
      t.componentStack = {
        tag: 1,
        parent: t.componentStack,
        type: n
      };
    }
    function ua(t, n) {
      t.componentStack = {
        tag: 2,
        parent: t.componentStack,
        type: n
      };
    }
    function Lt(t) {
      t.componentStack === null ? g("Unexpectedly popped too many stack frames. This is a bug in React.") : t.componentStack = t.componentStack.parent;
    }
    var _n = null;
    function ca(t, n) {
      {
        var l;
        typeof n == "string" ? l = n : n && typeof n.message == "string" ? l = n.message : l = String(n);
        var f = _n || vo();
        _n = null, t.errorMessage = l, t.errorComponentStack = f;
      }
    }
    function _t(t, n) {
      var l = t.onError(n);
      if (l != null && typeof l != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof l + '" instead');
      return l;
    }
    function jr(t, n) {
      var l = t.onShellError;
      l(n);
      var f = t.onFatalError;
      f(n), t.destination !== null ? (t.status = fn, le(t.destination, n)) : (t.status = la, t.fatalError = n);
    }
    function fa(t, n, l) {
      Pr(n, "Suspense");
      var f = n.blockedBoundary, v = n.blockedSegment, b = l.fallback, w = l.children, A = /* @__PURE__ */ new Set(), e = ho(t, A), r = v.chunks.length, a = mi(
        t,
        r,
        e,
        v.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      v.children.push(a), v.lastPushedText = !1;
      var s = mi(
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
        if (ba(t, n, w), Mr(s.chunks, t.responseState, s.lastPushedText, s.textEmbedded), s.status = Or, bi(e, s), e.pendingTasks === 0) {
          Lt(n);
          return;
        }
      } catch (S) {
        s.status = cn, e.forceClientRender = !0, e.errorDigest = _t(t, S), ca(e, S);
      } finally {
        n.blockedBoundary = f, n.blockedSegment = v;
      }
      var d = sa(t, b, f, a, A, n.legacyContext, n.context, n.treeContext);
      d.componentStack = n.componentStack, t.pingedTasks.push(d), Lt(n);
    }
    function go(t, n, l, f) {
      Pr(n, l);
      var v = n.blockedSegment, b = Vn(v.chunks, l, f, t.responseState, v.formatContext);
      v.lastPushedText = !1;
      var w = v.formatContext;
      v.formatContext = Jt(w, l, f), ba(t, n, b), v.formatContext = w, Ro(v.chunks, l), v.lastPushedText = !1, Lt(n);
    }
    function yi(t) {
      return t.prototype && t.prototype.isReactComponent;
    }
    function Xa(t, n, l, f, v) {
      var b = {};
      _l(n, b);
      var w = l(f, v);
      return Ba(l, f, w, v);
    }
    function Ja(t, n, l, f, v) {
      var b = l.render();
      l.props !== v && (yo || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ge(f) || "a component"), yo = !0);
      {
        var w = f.childContextTypes;
        if (w != null) {
          var A = n.legacyContext, e = Ji(l, f, A, w);
          n.legacyContext = e, kt(t, n, b), n.legacyContext = A;
          return;
        }
      }
      kt(t, n, b);
    }
    function Jl(t, n, l, f) {
      ua(n, l);
      var v = Xi(l, n.legacyContext), b = Fa(l, f, v);
      Ua(b, l, f, v), Ja(t, n, b, l, f), Lt(n);
    }
    var da = {}, mo = {}, Ka = {}, pa = {}, yo = !1, ha = !1, va = !1, ga = !1;
    function qa(t, n, l, f) {
      var v;
      if (v = Xi(l, n.legacyContext), ar(n, l), l.prototype && typeof l.prototype.render == "function") {
        var b = Ge(l) || "Unknown";
        da[b] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", b, b), da[b] = !0);
      }
      var w = Xa(t, n, l, f, v), A = fi();
      if (typeof w == "object" && w !== null && typeof w.render == "function" && w.$$typeof === void 0) {
        var e = Ge(l) || "Unknown";
        mo[e] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", e, e, e), mo[e] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof w == "object" && w !== null && typeof w.render == "function" && w.$$typeof === void 0
      ) {
        {
          var r = Ge(l) || "Unknown";
          mo[r] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", r, r, r), mo[r] = !0);
        }
        Ua(w, l, f, v), Ja(t, n, w, l, f);
      } else if (el(l), A) {
        var a = n.treeContext, s = 1, d = 0;
        n.treeContext = ai(a, s, d);
        try {
          kt(t, n, w);
        } finally {
          n.treeContext = a;
        }
      } else
        kt(t, n, w);
      Lt(n);
    }
    function el(t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), typeof t.getDerivedStateFromProps == "function") {
          var n = Ge(t) || "Unknown";
          pa[n] || (g("%s: Function components do not support getDerivedStateFromProps.", n), pa[n] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var l = Ge(t) || "Unknown";
          Ka[l] || (g("%s: Function components do not support contextType.", l), Ka[l] = !0);
        }
      }
    }
    function ma(t, n) {
      if (t && t.defaultProps) {
        var l = jt({}, n), f = t.defaultProps;
        for (var v in f)
          l[v] === void 0 && (l[v] = f[v]);
        return l;
      }
      return n;
    }
    function Kl(t, n, l, f, v) {
      ar(n, l.render);
      var b = Xa(t, n, l.render, f, v), w = fi();
      if (w) {
        var A = n.treeContext, e = 1, r = 0;
        n.treeContext = ai(A, e, r);
        try {
          kt(t, n, b);
        } finally {
          n.treeContext = A;
        }
      } else
        kt(t, n, b);
      Lt(n);
    }
    function ql(t, n, l, f, v) {
      var b = l.type, w = ma(b, f);
      ya(t, n, b, w, v);
    }
    function tl(t, n, l, f) {
      l._context === void 0 ? l !== l.Consumer && (ga || (ga = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : l = l._context;
      var v = f.children;
      typeof v != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var b = lo(l), w = v(b);
      kt(t, n, w);
    }
    function es(t, n, l, f) {
      var v = l._context, b = f.value, w = f.children, A;
      A = n.context, n.context = Na(v, b), kt(t, n, w), n.context = La(v), A !== n.context && g("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function ts(t, n, l, f, v) {
      Pr(n, "Lazy");
      var b = l._payload, w = l._init, A = w(b), e = ma(A, f);
      ya(t, n, A, e, v), Lt(n);
    }
    function ya(t, n, l, f, v) {
      if (typeof l == "function")
        if (yi(l)) {
          Jl(t, n, l, f);
          return;
        } else {
          qa(t, n, l, f);
          return;
        }
      if (typeof l == "string") {
        go(t, n, l, f);
        return;
      }
      switch (l) {
        case Vo:
        case Fi:
        case Ca:
        case Li:
        case Et: {
          kt(t, n, f.children);
          return;
        }
        case Kn: {
          Pr(n, "SuspenseList"), kt(t, n, f.children), Lt(n);
          return;
        }
        case _i:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case Jn: {
          fa(t, n, f);
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
      t[Symbol.toStringTag] === "Generator" && (ha || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ha = !0), t.entries === n && (va || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), va = !0);
    }
    function kt(t, n, l) {
      try {
        return Sa(t, n, l);
      } catch (f) {
        throw typeof f == "object" && f !== null && typeof f.then == "function" || (_n = _n !== null ? _n : vo()), f;
      }
    }
    function Sa(t, n, l) {
      if (n.node = l, typeof l == "object" && l !== null) {
        switch (l.$$typeof) {
          case Tl: {
            var f = l, v = f.type, b = f.props, w = f.ref;
            ya(t, n, v, b, w);
            return;
          }
          case ka:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Rn: {
            var A = l, e = A._payload, r = A._init, a;
            try {
              a = r(e);
            } catch (oe) {
              throw typeof oe == "object" && oe !== null && typeof oe.then == "function" && Pr(n, "Lazy"), oe;
            }
            kt(t, n, a);
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
        n.treeContext = ai(b, f, v);
        try {
          ba(t, n, l[v]);
        } finally {
          n.treeContext = b;
        }
      }
    }
    function Ct(t, n, l) {
      var f = n.blockedSegment, v = f.chunks.length, b = mi(
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
      var w = sa(t, n.node, n.blockedBoundary, b, n.abortSet, n.legacyContext, n.context, n.treeContext);
      n.componentStack !== null && (w.componentStack = n.componentStack.parent);
      var A = w.ping;
      l.then(A, A);
    }
    function ba(t, n, l) {
      var f = n.blockedSegment.formatContext, v = n.legacyContext, b = n.context, w = null;
      w = n.componentStack;
      try {
        return kt(t, n, l);
      } catch (A) {
        if (oa(), typeof A == "object" && A !== null && typeof A.then == "function") {
          Ct(t, n, A), n.blockedSegment.formatContext = f, n.legacyContext = v, n.context = b, ao(b), n.componentStack = w;
          return;
        } else
          throw n.blockedSegment.formatContext = f, n.legacyContext = v, n.context = b, ao(b), n.componentStack = w, A;
      }
    }
    function nl(t, n, l, f) {
      var v = _t(t, f);
      if (n === null ? jr(t, f) : (n.pendingTasks--, n.forceClientRender || (n.forceClientRender = !0, n.errorDigest = v, ca(n, f), n.parentFlushed && t.clientRenderedBoundaries.push(n))), t.allPendingTasks--, t.allPendingTasks === 0) {
        var b = t.onAllReady;
        b();
      }
    }
    function ns(t) {
      var n = this, l = t.blockedBoundary, f = t.blockedSegment;
      f.status = gi, ol(n, l, f);
    }
    function Si(t, n, l) {
      var f = t.blockedBoundary, v = t.blockedSegment;
      if (v.status = gi, f === null)
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
              ca(f, b);
            } finally {
              yr = A;
            }
          }
          f.parentFlushed && n.clientRenderedBoundaries.push(f);
        }
        if (f.fallbackAbortableTasks.forEach(function(r) {
          return Si(r, n, l);
        }), f.fallbackAbortableTasks.clear(), n.allPendingTasks--, n.allPendingTasks === 0) {
          var e = n.onAllReady;
          e();
        }
      }
    }
    function bi(t, n) {
      if (n.chunks.length === 0 && n.children.length === 1 && n.children[0].boundary === null) {
        var l = n.children[0];
        l.id = n.id, l.parentFlushed = !0, l.status === Or && bi(t, l);
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
          t.onShellError = ir;
          var f = t.onShellReady;
          f();
        }
      } else if (n.pendingTasks--, !n.forceClientRender) {
        if (n.pendingTasks === 0)
          l.parentFlushed && l.status === Or && bi(n, l), n.parentFlushed && t.completedBoundaries.push(n), n.fallbackAbortableTasks.forEach(ns, t), n.fallbackAbortableTasks.clear();
        else if (l.parentFlushed && l.status === Or) {
          bi(n, l);
          var v = n.completedSegments;
          v.length === 1 && n.parentFlushed && t.partialBoundaries.push(n);
        }
      }
      if (t.allPendingTasks--, t.allPendingTasks === 0) {
        var b = t.onAllReady;
        b();
      }
    }
    function il(t, n) {
      var l = n.blockedSegment;
      if (l.status === aa) {
        ao(n.context);
        var f = null;
        f = yr, yr = n;
        try {
          kt(t, n, n.node), Mr(l.chunks, t.responseState, l.lastPushedText, l.textEmbedded), n.abortSet.delete(n), l.status = Or, ol(t, n.blockedBoundary, l);
        } catch (b) {
          if (oa(), typeof b == "object" && b !== null && typeof b.then == "function") {
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
        po.current = $a;
        var f;
        f = hi.getCurrentStack, hi.getCurrentStack = vo;
        var v = ia;
        fo(t.responseState);
        try {
          var b = t.pingedTasks, w;
          for (w = 0; w < b.length; w++) {
            var A = b[w];
            il(t, A);
          }
          b.splice(0, w), t.destination !== null && wi(t, t.destination);
        } catch (e) {
          _t(t, e), jr(t, e);
        } finally {
          fo(v), po.current = l, hi.getCurrentStack = f, l === $a && ao(n);
        }
      }
    }
    function bo(t, n, l) {
      switch (l.parentFlushed = !0, l.status) {
        case aa: {
          var f = l.id = t.nextSegmentId++;
          return l.lastPushedText = !1, l.textEmbedded = !1, xn(n, t.responseState, f);
        }
        case Or: {
          l.status = vi;
          for (var v = !0, b = l.chunks, w = 0, A = l.children, e = 0; e < A.length; e++) {
            for (var r = A[e]; w < r.index; w++)
              N(n, b[w]);
            v = xi(t, n, r);
          }
          for (; w < b.length - 1; w++)
            N(n, b[w]);
          return w < b.length && (v = ce(n, b[w])), v;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function xi(t, n, l) {
      var f = l.boundary;
      if (f === null)
        return bo(t, n, l);
      if (f.parentFlushed = !0, f.forceClientRender)
        return pt(n, t.responseState, f.errorDigest, f.errorMessage, f.errorComponentStack), bo(t, n, l), Ai(n, t.responseState);
      if (f.pendingTasks > 0) {
        f.rootSegmentID = t.nextSegmentId++, f.completedSegments.length > 0 && t.partialBoundaries.push(f);
        var v = f.id = Qr(t.responseState);
        return En(n, t.responseState, v), bo(t, n, l), kn(n, t.responseState);
      } else {
        if (f.byteSize > t.progressiveChunkSize)
          return f.rootSegmentID = t.nextSegmentId++, t.completedBoundaries.push(f), En(n, t.responseState, f.id), bo(t, n, l), kn(n, t.responseState);
        Oo(n, t.responseState);
        var b = f.completedSegments;
        if (b.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var w = b[0];
        return xi(t, n, w), Po(n, t.responseState);
      }
    }
    function al(t, n, l) {
      return Ta(n, t.responseState, l.id, l.errorDigest, l.errorMessage, l.errorComponentStack);
    }
    function xo(t, n, l) {
      return be(n, t.responseState, l.formatContext, l.id), xi(t, n, l), ze(n, l.formatContext);
    }
    function wo(t, n, l) {
      for (var f = l.completedSegments, v = 0; v < f.length; v++) {
        var b = f[v];
        xa(t, n, l, b);
      }
      return f.length = 0, Oi(n, t.responseState, l.id, l.rootSegmentID);
    }
    function os(t, n, l) {
      for (var f = l.completedSegments, v = 0; v < f.length; v++) {
        var b = f[v];
        if (!xa(t, n, l, b))
          return v++, f.splice(0, v), !1;
      }
      return f.splice(0, v), !0;
    }
    function xa(t, n, l, f) {
      if (f.status === vi)
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
    function wi(t, n) {
      ve();
      try {
        var l = t.completedRootSegment;
        l !== null && t.pendingRootTasks === 0 && (xi(t, n, l), t.completedRootSegment = null, Ii(n, t.responseState));
        var f = t.clientRenderedBoundaries, v;
        for (v = 0; v < f.length; v++) {
          var b = f[v];
          al(t, n, b);
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
        var a = t.completedBoundaries;
        for (v = 0; v < a.length; v++) {
          var s = a[v];
          wo(t, n, s);
        }
        a.splice(0, v);
      } finally {
        Re(n), t.allPendingTasks === 0 && t.pingedTasks.length === 0 && t.clientRenderedBoundaries.length === 0 && t.completedBoundaries.length === 0 && (t.abortableTasks.size !== 0 && g("There was still abortable task at the root when we closed. This is a bug in React."), xe(n));
      }
    }
    function is(t) {
      Te(function() {
        return So(t);
      });
    }
    function ll(t, n) {
      if (t.status === la) {
        t.status = fn, le(n, t.fatalError);
        return;
      }
      if (t.status !== fn && t.destination === null) {
        t.destination = n;
        try {
          wi(t, n);
        } catch (l) {
          _t(t, l), jr(t, l);
        }
      }
    }
    function Ti(t, n) {
      try {
        var l = t.abortableTasks;
        l.forEach(function(f) {
          return Si(f, t, n);
        }), l.clear(), t.destination !== null && wi(t, t.destination);
      } catch (f) {
        _t(t, f), jr(t, f);
      }
    }
    function as(t, n) {
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
                Ti(r);
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
          var a = n.signal, s = function() {
            Ti(r, a.reason), a.removeEventListener("abort", s);
          };
          a.addEventListener("abort", s);
        }
        is(r);
      });
    }
    pl.renderToReadableStream = as, pl.version = j;
  }()), pl;
}
var Co, gs;
process.env.NODE_ENV === "production" ? (Co = nu(), gs = ou()) : (Co = iu(), gs = au());
Mo.version = Co.version;
Mo.renderToString = Co.renderToString;
Mo.renderToStaticMarkup = Co.renderToStaticMarkup;
Mo.renderToNodeStream = Co.renderToNodeStream;
Mo.renderToStaticNodeStream = Co.renderToStaticNodeStream;
Mo.renderToReadableStream = gs.renderToReadableStream;
var ps = { exports: {} };
/**
 * SVGInjector v1.1.3 - Fast, caching, dynamic inline SVG DOM injection library
 * https://github.com/iconic/SVGInjector
 *
 * Copyright (c) 2014-2015 Waybury <hello@waybury.com>
 * @license MIT
 */
var Os;
function lu() {
  return Os || (Os = 1, function(O, j) {
    (function(V, ee) {
      var g = V.location.protocol === "file:", Q = ee.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1");
      function Te(L) {
        L = L.split(" ");
        for (var Y = {}, k = L.length, X = []; k--; )
          Y.hasOwnProperty(L[k]) || (Y[L[k]] = 1, X.unshift(L[k]));
        return X.join(" ");
      }
      var K = Array.prototype.forEach || function(L, Y) {
        if (this === void 0 || this === null || typeof L != "function")
          throw new TypeError();
        var k, X = this.length >>> 0;
        for (k = 0; k < X; ++k)
          k in this && L.call(Y, this[k], k, this);
      }, E = {}, D = 0, ve = [], N = [], ce = {}, Re = function(L) {
        return L.cloneNode(!0);
      }, xe = function(L, Y) {
        N[L] = N[L] || [], N[L].push(Y);
      }, ke = function(L) {
        for (var Y = 0, k = N[L].length; Y < k; Y++)
          (function(X) {
            setTimeout(function() {
              N[L][X](Re(E[L]));
            }, 0);
          })(Y);
      }, $ = function(L, Y) {
        if (E[L] !== void 0)
          E[L] instanceof SVGSVGElement ? Y(Re(E[L])) : xe(L, Y);
        else {
          if (!V.XMLHttpRequest)
            return Y("Browser does not support XMLHttpRequest"), !1;
          E[L] = {}, xe(L, Y);
          var k = new XMLHttpRequest();
          k.onreadystatechange = function() {
            if (k.readyState === 4) {
              if (k.status === 404 || k.responseXML === null)
                return Y("Unable to load SVG file: " + L), g && Y("Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver."), Y(), !1;
              if (k.status === 200 || g && k.status === 0) {
                if (k.responseXML instanceof Document)
                  E[L] = k.responseXML.documentElement;
                else if (DOMParser && DOMParser instanceof Function) {
                  var X;
                  try {
                    var fe = new DOMParser();
                    X = fe.parseFromString(k.responseText, "text/xml");
                  } catch {
                    X = void 0;
                  }
                  if (!X || X.getElementsByTagName("parsererror").length)
                    return Y("Unable to parse SVG file: " + L), !1;
                  E[L] = X.documentElement;
                }
                ke(L);
              } else
                return Y("There was a problem injecting the SVG: " + k.status + " " + k.statusText), !1;
            }
          }, k.open("GET", L), k.overrideMimeType && k.overrideMimeType("text/xml"), k.send();
        }
      }, F = function(L, Y, k, X) {
        var fe = L.getAttribute("data-src") || L.getAttribute("src");
        if (!/\.svg/i.test(fe)) {
          X("Attempted to inject a file with a non-svg extension: " + fe);
          return;
        }
        if (!Q) {
          var De = L.getAttribute("data-fallback") || L.getAttribute("data-png");
          De ? (L.setAttribute("src", De), X(null)) : k ? (L.setAttribute("src", k + "/" + fe.split("/").pop().replace(".svg", ".png")), X(null)) : X("This browser does not support SVG and no PNG fallback was defined.");
          return;
        }
        ve.indexOf(L) === -1 && (ve.push(L), L.setAttribute("src", ""), $(fe, function(ie) {
          if (typeof ie > "u" || typeof ie == "string")
            return X(ie), !1;
          var Oe = L.getAttribute("id");
          Oe && ie.setAttribute("id", Oe);
          var Pe = L.getAttribute("title");
          Pe && ie.setAttribute("title", Pe);
          var Ue = [].concat(ie.getAttribute("class") || [], "injected-svg", L.getAttribute("class") || []).join(" ");
          ie.setAttribute("class", Te(Ue));
          var nt = L.getAttribute("style");
          nt && ie.setAttribute("style", nt);
          var Xe = [].filter.call(L.attributes, function(ue) {
            return /^data-\w[\w\-]*$/.test(ue.name);
          });
          K.call(Xe, function(ue) {
            ue.name && ue.value && ie.setAttribute(ue.name, ue.value);
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
            Je = ue, et = vt[ue], qe = ie.querySelectorAll("defs " + Je + "[id]");
            for (var Ee = 0, G = qe.length; Ee < G; Ee++) {
              Ve = qe[Ee].id, U = Ve + "-" + D;
              var Ce;
              K.call(et, function(Be) {
                Ce = ie.querySelectorAll("[" + Be + '*="' + Ve + '"]');
                for (var ct = 0, zt = Ce.length; ct < zt; ct++)
                  Ce[ct].setAttribute(Be, "url(#" + U + ")");
              }), qe[Ee].id = U;
            }
          }), ie.removeAttribute("xmlns:a");
          for (var W = ie.querySelectorAll("script"), q = [], ge, se, re = 0, te = W.length; re < te; re++)
            se = W[re].getAttribute("type"), (!se || se === "application/ecmascript" || se === "application/javascript") && (ge = W[re].innerText || W[re].textContent, q.push(ge), ie.removeChild(W[re]));
          if (q.length > 0 && (Y === "always" || Y === "once" && !ce[fe])) {
            for (var he = 0, Se = q.length; he < Se; he++)
              new Function(q[he])(V);
            ce[fe] = !0;
          }
          var me = ie.querySelectorAll("style");
          K.call(me, function(ue) {
            ue.textContent += "";
          }), L.parentNode.replaceChild(ie, L), delete ve[ve.indexOf(L)], L = null, D++, X(ie);
        }));
      }, le = function(L, Y, k) {
        Y = Y || {};
        var X = Y.evalScripts || "always", fe = Y.pngFallback || !1, De = Y.each;
        if (L.length !== void 0) {
          var ie = 0;
          K.call(L, function(Oe) {
            F(Oe, X, fe, function(Pe) {
              De && typeof De == "function" && De(Pe), k && L.length === ++ie && k(ie);
            });
          });
        } else
          L ? F(L, X, fe, function(Oe) {
            De && typeof De == "function" && De(Oe), k && k(1), L = null;
          }) : k && k(0);
      };
      O.exports = le;
    })(window, document);
  }(ps)), ps.exports;
}
(function(O, j) {
  Object.defineProperty(j, "__esModule", {
    value: !0
  });
  var V = Object.assign || function(le) {
    for (var L = 1; L < arguments.length; L++) {
      var Y = arguments[L];
      for (var k in Y)
        Object.prototype.hasOwnProperty.call(Y, k) && (le[k] = Y[k]);
    }
    return le;
  }, ee = function() {
    function le(L, Y) {
      for (var k = 0; k < Y.length; k++) {
        var X = Y[k];
        X.enumerable = X.enumerable || !1, X.configurable = !0, "value" in X && (X.writable = !0), Object.defineProperty(L, X.key, X);
      }
    }
    return function(L, Y, k) {
      return Y && le(L.prototype, Y), k && le(L, k), L;
    };
  }(), g = ru, Q = ve(g), Te = Z, K = ve(Te), E = Mo, D = ve(E);
  function ve(le) {
    return le && le.__esModule ? le : { default: le };
  }
  function N(le, L) {
    var Y = {};
    for (var k in le)
      L.indexOf(k) >= 0 || Object.prototype.hasOwnProperty.call(le, k) && (Y[k] = le[k]);
    return Y;
  }
  function ce(le, L) {
    if (!(le instanceof L))
      throw new TypeError("Cannot call a class as a function");
  }
  function Re(le, L) {
    if (!le)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return L && (typeof L == "object" || typeof L == "function") ? L : le;
  }
  function xe(le, L) {
    if (typeof L != "function" && L !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof L);
    le.prototype = Object.create(L && L.prototype, { constructor: { value: le, enumerable: !1, writable: !0, configurable: !0 } }), L && (Object.setPrototypeOf ? Object.setPrototypeOf(le, L) : le.__proto__ = L);
  }
  var ke = typeof window < "u", $ = ke ? lu() : void 0, F = function(le) {
    xe(L, le);
    function L() {
      var Y, k, X, fe;
      ce(this, L);
      for (var De = arguments.length, ie = Array(De), Oe = 0; Oe < De; Oe++)
        ie[Oe] = arguments[Oe];
      return fe = (k = (X = Re(this, (Y = L.__proto__ || Object.getPrototypeOf(L)).call.apply(Y, [this].concat(ie))), X), X.refCallback = function(Pe) {
        if (!Pe) {
          X.removeSVG();
          return;
        }
        X.container = Pe, X.renderSVG();
      }, k), Re(X, fe);
    }
    return ee(L, [{
      key: "renderSVG",
      value: function() {
        var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
        if (this.container instanceof Node) {
          var X = k.evalScripts, fe = k.onInjected, De = k.path, ie = k.svgClassName, Oe = k.svgStyle, Pe = document.createElement("div");
          Pe.innerHTML = D.default.renderToStaticMarkup(K.default.createElement(
            "div",
            null,
            K.default.createElement("div", { className: ie, "data-src": De, style: Oe })
          ));
          var Ue = this.container.appendChild(Pe.firstChild);
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
        var X = N(k, ["evalScripts", "onInjected", "path", "svgClassName", "svgStyle"]);
        return K.default.createElement("div", V({}, X, { ref: this.refCallback }));
      }
    }]), L;
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
  }, j.default = F, O.exports = j.default;
})(hs, hs.exports);
var su = hs.exports;
const uu = /* @__PURE__ */ Gs(su);
const cu = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDRIMTBWMTFIM1YxM0gxMFYyMEgxMlYxM0gxOVYxMUgxMlY0WiIgZmlsbD0iIzIwMThCMCIvPgo8L3N2Zz4K", fu = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjU2MzMgNEg3LjQzNjc0TDUuNzcwMDcgNi43NUgyVjE3SDZWMTVINFY4Ljc1SDYuODk2NTlMOC41NjMyNiA2SDEyLjQzNjdMMTQuMTAzNCA4Ljc1SDE3VjExSDE5VjYuNzVIMTUuMjI5OUwxMy41NjMzIDRaIiBmaWxsPSIjMjAxOEIwIi8+CjxwYXRoIGQ9Ik0xNyAxOVYxN0gxNVYxNUgxN1YxM0gxOVYxNUgyMVYxN0gxOVYxOUgxN1oiIGZpbGw9IiMyMDE4QjAiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSAxMi41QzE1IDE0Ljk4NTMgMTIuOTg1MyAxNyAxMC41IDE3QzguMDE0NzIgMTcgNiAxNC45ODUzIDYgMTIuNUM2IDEwLjAxNDcgOC4wMTQ3MiA4IDEwLjUgOEMxMi45ODUzIDggMTUgMTAuMDE0NyAxNSAxMi41Wk0xMyAxMi41QzEzIDEzLjg4MDcgMTEuODgwNyAxNSAxMC41IDE1QzkuMTE5MjkgMTUgOCAxMy44ODA3IDggMTIuNUM4IDExLjExOTMgOS4xMTkyOSAxMCAxMC41IDEwQzExLjg4MDcgMTAgMTMgMTEuMTE5MyAxMyAxMi41WiIgZmlsbD0iIzIwMThCMCIvPgo8L3N2Zz4K", du = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjUgMTRWNEgxMC41VjE0SDguMjczMjRDNy40MDMxNCAxNCA2Ljk0ODE0IDE1LjAzNDMgNy41MzYwOSAxNS42NzU3TDEwLjc2MjkgMTkuMTk1OEMxMS4xNTkyIDE5LjYyODIgMTEuODQwOCAxOS42MjgyIDEyLjIzNzIgMTkuMTk1OEwxNS40NjM5IDE1LjY3NTdDMTYuMDUxOSAxNS4wMzQzIDE1LjU5NjkgMTQgMTQuNzI2OCAxNEgxMi41WiIgZmlsbD0iIzIwMThCMCIvPgo8L3N2Zz4K", pu = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuODI0MjcgOC4wMzYwOEw0LjMwNDE2IDExLjI2MjhDMy44NzE4IDExLjY1OTIgMy44NzE4IDEyLjM0MDggNC4zMDQxNiAxMi43MzcyTDcuODI0MjcgMTUuOTYzOUM4LjQ2NTY3IDE2LjU1MTkgOS41IDE2LjA5NjkgOS41IDE1LjIyNjhMOS41IDEzTDE5LjUgMTNWMTFMOS41IDExVjguNzczMjRDOS41IDcuOTAzMTMgOC40NjU2NyA3LjQ0ODEzIDcuODI0MjcgOC4wMzYwOFoiIGZpbGw9IiMyMDE4QjAiLz4KPC9zdmc+Cg==", hu = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjE3NTcgMTUuOTYzOUwxOC42OTU4IDEyLjczNzJDMTkuMTI4MiAxMi4zNDA4IDE5LjEyODIgMTEuNjU5MiAxOC42OTU4IDExLjI2MjhMMTUuMTc1NyA4LjAzNjA4QzE0LjUzNDMgNy40NDgxMyAxMy41IDcuOTAzMTMgMTMuNSA4Ljc3MzIzTDEzLjUgMTFMMy41IDExVjEzTDEzLjUgMTNWMTUuMjI2OEMxMy41IDE2LjA5NjkgMTQuNTM0MyAxNi41NTE5IDE1LjE3NTcgMTUuOTYzOVoiIGZpbGw9IiMyMDE4QjAiLz4KPC9zdmc+Cg==", vu = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjQ2MzkgOC4zMjQyOEwxMi4yMzcyIDQuODA0MTdDMTEuODQwOCA0LjM3MTggMTEuMTU5MiA0LjM3MTggMTAuNzYyOSA0LjgwNDE3TDcuNTM2MDkgOC4zMjQyN0M2Ljk0ODE0IDguOTY1NjggNy40MDMxNCAxMCA4LjI3MzI0IDEwTDEwLjUgMTBMMTAuNSAyMEgxMi41TDEyLjUgMTBMMTQuNzI2OCAxMEMxNS41OTY5IDEwIDE2LjA1MTkgOC45NjU2OCAxNS40NjM5IDguMzI0MjhaIiBmaWxsPSIjMjAxOEIwIi8+Cjwvc3ZnPgo=", gu = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjc3MDUgMTUuMjIxOEw1LjU3ODY5IDkuNjgzOTRDNC45Nzk5NSA5LjA0NTI4IDUuNDMyNzkgOCA2LjMwODIzIDhIMTYuNjkxOEMxNy41NjcyIDggMTguMDIwMSA5LjA0NTI4IDE3LjQyMTMgOS42ODM5NEwxMi4yMjk1IDE1LjIyMThDMTEuODM0NSAxNS42NDMyIDExLjE2NTUgMTUuNjQzMiAxMC43NzA1IDE1LjIyMThaIiBmaWxsPSIjMjAxOEIwIi8+Cjwvc3ZnPgo=", mu = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMCAzQzEwIDIuNDQ3NzIgOS41NTIyOCAyIDkgMkM4LjQ0NzcyIDIgOCAyLjQ0NzcyIDggM1Y0SDdDNC43OTA4NiA0IDMgNS43OTA4NiAzIDhWMTZDMyAxOC4yMDkxIDQuNzkwODYgMjAgNyAyMEgxNkMxOC4yMDkxIDIwIDIwIDE4LjIwOTEgMjAgMTZWOEMyMCA1Ljc5MDg2IDE4LjIwOTEgNCAxNiA0SDE1VjNDMTUgMi40NDc3MiAxNC41NTIzIDIgMTQgMkMxMy40NDc3IDIgMTMgMi40NDc3MiAxMyAzVjRIMTBWM1pNNSAxNlYxNUg4VjE4SDdDNS44OTU0MyAxOCA1IDE3LjEwNDYgNSAxNlpNMTAgMThIMTNWMTVIMTBWMThaTTE2IDE4SDE1VjE1SDE4VjE2QzE4IDE3LjEwNDYgMTcuMTA0NiAxOCAxNiAxOFpNMTggMTNIMTVWOUgxOFYxM1pNMTAgOUgxM1YxM0gxMFY5Wk04IDlINVYxM0g4VjlaIiBmaWxsPSIjMjAxOEIwIi8+Cjwvc3ZnPgo=", yu = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDJDOS41NTIyOCAyIDEwIDIuNDQ3NzIgMTAgM1Y0SDEzVjNDMTMgMi40NDc3MiAxMy40NDc3IDIgMTQgMkMxNC41NTIzIDIgMTUgMi40NDc3MiAxNSAzVjRIMTZDMTguMjA5MSA0IDIwIDUuNzkwODYgMjAgOFYxNkMyMCAxOC4yMDkxIDE4LjIwOTEgMjAgMTYgMjBIN0M0Ljc5MDg2IDIwIDMgMTguMjA5MSAzIDE2VjhDMyA1Ljc5MDg2IDQuNzkwODYgNCA3IDRIOFYzQzggMi40NDc3MiA4LjQ0NzcyIDIgOSAyWk03IDZDNS44OTU0MyA2IDUgNi44OTU0MyA1IDhIMThDMTggNi44OTU0MyAxNy4xMDQ2IDYgMTYgNkg3Wk01IDEwVjEzSDhWMTBINVpNMTAgMTBWMTNIMTNWMTBIMTBaTTEwIDE1SDEzVjE4SDEwVjE1Wk0xNSAxNVYxOEgxNkMxNy4xMDQ2IDE4IDE4IDE3LjEwNDYgMTggMTZWMTVIMTVaTTE1IDEwVjEzSDE4VjEwSDE1Wk04IDE1SDVWMTZDNSAxNy4xMDQ2IDUuODk1NDMgMTggNyAxOEg4VjE1WiIgZmlsbD0iIzIwMThCMCIvPgo8L3N2Zz4K", Su = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDQgMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yIDRDMy4xMDQ1NyA0IDQgMy4xMDQ1NyA0IDJDNCAwLjg5NTQzMSAzLjEwNDU3IDAgMiAwQzAuODk1NDMxIDAgMCAwLjg5NTQzMSAwIDJDMCAzLjEwNDU3IDAuODk1NDMxIDQgMiA0WiIgZmlsbD0iI0VERjFGQSIvPgo8cGF0aCBkPSJNNCAxN1Y2SDBWMTdINFoiIGZpbGw9IiNFREYxRkEiLz4KPC9zdmc+Cg==", bu = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMCAxMEMyMCAxMy4zMTM3IDE3LjMxMzcgMTYgMTQgMTZDMTIuNzA0MiAxNiAxMS41MDQzIDE1LjU4OTIgMTAuNTIzNSAxNC44OTA4TDUuNzA3MTIgMTkuNzA3MUw0LjI5MjkxIDE4LjI5MjlMOS4xMDkyNiAxMy40NzY1QzguNDEwNzkgMTIuNDk1NyA4IDExLjI5NTggOCAxMEM4IDYuNjg2MjkgMTAuNjg2MyA0IDE0IDRDMTcuMzEzNyA0IDIwIDYuNjg2MjkgMjAgMTBaTTE4IDEwQzE4IDEyLjIwOTEgMTYuMjA5MSAxNCAxNCAxNEMxMS43OTA5IDE0IDEwIDEyLjIwOTEgMTAgMTBDMTAgNy43OTA4NiAxMS43OTA5IDYgMTQgNkMxNi4yMDkxIDYgMTggNy43OTA4NiAxOCAxMFoiIGZpbGw9IiMyMDE4QjAiLz4KPC9zdmc+Cg==", Fs = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiA+CjxwYXRoIGQ9Ik0yMjAtMTYwcS0yNCAwLTQyLTE4dC0xOC00MnYtMTQzaDYwdjE0M2g1MjB2LTE0M2g2MHYxNDNxMCAyNC0xOCA0MnQtNDIgMThIMjIwWm0yMzAtMTUzdi0zNzFMMzMwLTU2NGwtNDMtNDMgMTkzLTE5MyAxOTMgMTkzLTQzIDQzLTEyMC0xMjB2MzcxaC02MFoiIGZpbGw9IiMyMDE4QjAiLz4KPC9zdmc+", xu = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDEyQzE0LjIwOTEgMTIgMTYgMTAuMjA5MSAxNiA4QzE2IDUuNzkwODYgMTQuMjA5MSA0IDEyIDRDOS43OTA4NiA0IDggNS43OTA4NiA4IDhDOCAxMC4yMDkxIDkuNzkwODYgMTIgMTIgMTJaIiBmaWxsPSIjMzI1NjhGIi8+CjxwYXRoIGQ9Ik00IDIwQzQgMTYuNjg2MyA3LjU4MTcyIDE0IDEyIDE0QzE2LjQxODMgMTQgMjAgMTYuNjg2MyAyMCAyMEg0WiIgZmlsbD0iIzMyNTY4RiIvPgo8L3N2Zz4K", wu = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjMzNjkyIDE1Ljc2MkM1Ljk2ODQyIDE2LjAzOSA1LjYzNTgyIDE2LjM0MjkgNS4zNDQ3OSAxNi42NjkzQzQuOTc4NzQgMTcuMDc5OSA0LjY3ODQ1IDE3LjUyNjMgNC40NTUyMiAxOEM0LjE2MDQxIDE4LjYyNTYgNCAxOS4yOTg3IDQgMjBIMjBDMjAgMTkuMjk4NyAxOS44Mzk2IDE4LjYyNTYgMTkuNTQ0OCAxOEMxOS4zMjE2IDE3LjUyNjMgMTkuMDIxMyAxNy4wNzk5IDE4LjY1NTIgMTYuNjY5M0MxOC4zNjI1IDE2LjM0MSAxOC4wMjc4IDE2LjAzNTYgMTcuNjU2OSAxNS43NTc0QzE2LjIwOTUgMTQuNjcxOCAxNC4yMDk2IDE0IDEyIDE0QzkuNzkwNDEgMTQgNy43OTA1MyAxNC42NzE4IDYuMzQzMTQgMTUuNzU3NEM2LjM0MTA3IDE1Ljc1ODkgNi4zMzg5OSAxNS43NjA1IDYuMzM2OTIgMTUuNzYyWk0xMiAxNkMxMC41NTE3IDE2IDkuMjYxNDcgMTYuMzUyMyA4LjI1NTkgMTYuOTAxQzcuOTk5MDQgMTcuMDQxMiA3Ljc2MDc1IDE3LjE5NDIgNy41NDMxNSAxNy4zNTc0QzcuMjY5MjggMTcuNTYyOCA3LjAzNDQ0IDE3Ljc3ODIgNi44MzY2MiAxOEgxNy4xNjM0QzE2Ljk2NTYgMTcuNzc4MiAxNi43MzA3IDE3LjU2MjggMTYuNDU2OSAxNy4zNTc0QzE2LjIzOTIgMTcuMTk0MiAxNi4wMDA5IDE3LjA0MTIgMTUuNzQ0MSAxNi45MDFDMTQuNzM4NSAxNi4zNTIzIDEzLjQ0ODMgMTYgMTIgMTZaTTE2IDhDMTYgMTAuMjA5MSAxNC4yMDkxIDEyIDEyIDEyQzkuNzkwODYgMTIgOCAxMC4yMDkxIDggOEM4IDUuNzkwODYgOS43OTA4NiA0IDEyIDRDMTQuMjA5MSA0IDE2IDUuNzkwODYgMTYgOFpNMTIgMTBDMTMuMTA0NiAxMCAxNCA5LjEwNDU3IDE0IDhDMTQgNi44OTU0MyAxMy4xMDQ2IDYgMTIgNkMxMC44OTU0IDYgMTAgNi44OTU0MyAxMCA4QzEwIDkuMTA0NTcgMTAuODk1NCAxMCAxMiAxMFoiIGZpbGw9IiMyMDE4QjAiLz4KPC9zdmc+Cg==", Tu = {
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
}, Fe = ({ size: O = "medium", icon: j }) => {
  const V = `icon-${O} icon`, ee = Tu[j];
  return /* @__PURE__ */ Z.createElement("div", { className: V }, /* @__PURE__ */ Z.createElement(uu, { src: ee }));
};
Fe.Add = (O) => /* @__PURE__ */ Z.createElement(Fe, { icon: "Add", ...O });
Fe.AddPicture = (O) => /* @__PURE__ */ Z.createElement(Fe, { icon: "AddPicture", ...O });
Fe.ArrowBottom = (O) => /* @__PURE__ */ Z.createElement(Fe, { icon: "ArrowBottom", ...O });
Fe.ArrowLeft = (O) => /* @__PURE__ */ Z.createElement(Fe, { icon: "ArrowLeft", ...O });
Fe.ArrowRight = (O) => /* @__PURE__ */ Z.createElement(Fe, { icon: "ArrowRight", ...O });
Fe.ArrowTop = (O) => /* @__PURE__ */ Z.createElement(Fe, { icon: "ArrowTop", ...O });
Fe.ArrowTriangle = (O) => /* @__PURE__ */ Z.createElement(Fe, { icon: "ArrowTriangle", ...O });
Fe.DateFlat = (O) => /* @__PURE__ */ Z.createElement(Fe, { icon: "DateFlat", ...O });
Fe.DateLine = (O) => /* @__PURE__ */ Z.createElement(Fe, { icon: "DateLine", ...O });
Fe.Information = (O) => /* @__PURE__ */ Z.createElement(Fe, { icon: "Information", ...O });
Fe.Search = (O) => /* @__PURE__ */ Z.createElement(Fe, { icon: "Search", ...O });
Fe.Upload = (O) => /* @__PURE__ */ Z.createElement(Fe, { icon: "Upload", ...O });
Fe.UserFlat = (O) => /* @__PURE__ */ Z.createElement(Fe, { icon: "UserFlat", ...O });
Fe.UserLine = (O) => /* @__PURE__ */ Z.createElement(Fe, { icon: "UserLine", ...O });
const Eu = ({ placeholder: O }) => /* @__PURE__ */ Z.createElement("div", { className: "input" }, /* @__PURE__ */ Z.createElement("input", { type: "search", className: "placeholder", placeholder: O }), /* @__PURE__ */ Z.createElement(Fe.Search, null)), Cu = () => /* @__PURE__ */ Z.createElement("div", { className: "container-header" }, /* @__PURE__ */ Z.createElement($s, { src: "" }), /* @__PURE__ */ Z.createElement(Eu, {
  placeholder: ""
}), /* @__PURE__ */ Z.createElement(ms.Small, null));
const Mu = ({ label: O = "Information" }) => /* @__PURE__ */ Z.createElement("div", { className: "container-information" }, /* @__PURE__ */ Z.createElement("h2", null, "Information"), /* @__PURE__ */ Z.createElement("div", { className: "information-section" }, /* @__PURE__ */ Z.createElement(Fe.Information, null), /* @__PURE__ */ Z.createElement("div", { className: "information-content" }, O)));
const Iu = ({ title: O, label: j }) => /* @__PURE__ */ Z.createElement("div", { className: "container-section" }, /* @__PURE__ */ Z.createElement("h2", null, O), /* @__PURE__ */ Z.createElement("div", { className: "section-btn" }, /* @__PURE__ */ Z.createElement("div", { className: "section-svg" }, /* @__PURE__ */ Z.createElement("img", { src: Fs, alt: "section" })), /* @__PURE__ */ Z.createElement("p", null, j)));
const Du = ({ title: O, description: j }) => /* @__PURE__ */ Z.createElement("div", { className: "text-layout" }, /* @__PURE__ */ Z.createElement("p", { className: "text-title" }, O), /* @__PURE__ */ Z.createElement("p", { className: "text-description" }, j));
const Ru = ({ placeholder: O }) => /* @__PURE__ */ Z.createElement("div", { className: "input" }, /* @__PURE__ */ Z.createElement("p", { className: "placeholder" }, O));
export {
  ms as Avatar,
  ko as Button,
  Ns as Card,
  Cu as Header,
  Fe as Icon,
  Mu as Information,
  Ru as InputText,
  $s as Logo,
  wa as Ratio,
  Iu as Section,
  Du as Text
};
//# sourceMappingURL=popoyoko-ui-vite.es.js.map
