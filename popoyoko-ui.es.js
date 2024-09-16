import a, { useRef as Et, useDebugValue as rt, createElement as cn, useContext as Tt, useId as ln, useState as At, createContext as dn, useEffect as un } from "react";
var S = function() {
  return S = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, S.apply(this, arguments);
};
function K(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function gn(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var pn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, fn = /* @__PURE__ */ gn(
  function(e) {
    return pn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), N = "-ms-", de = "-moz-", M = "-webkit-", bt = "comm", be = "rule", _e = "decl", mn = "@import", wt = "@keyframes", hn = "@layer", jt = Math.abs, $e = String.fromCharCode, Ye = Object.assign;
function Mn(e, t) {
  return C(e, 0) ^ 45 ? (((t << 2 ^ C(e, 0)) << 2 ^ C(e, 1)) << 2 ^ C(e, 2)) << 2 ^ C(e, 3) : 0;
}
function vt(e) {
  return e.trim();
}
function Z(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function u(e, t, n) {
  return e.replace(t, n);
}
function Ie(e, t, n) {
  return e.indexOf(t, n);
}
function C(e, t) {
  return e.charCodeAt(t) | 0;
}
function q(e, t, n) {
  return e.slice(t, n);
}
function P(e) {
  return e.length;
}
function Ct(e) {
  return e.length;
}
function le(e, t) {
  return t.push(e), e;
}
function yn(e, t) {
  return e.map(t).join("");
}
function ot(e, t) {
  return e.filter(function(n) {
    return !Z(n, t);
  });
}
var we = 1, ee = 1, St = 0, O = 0, v = 0, oe = "";
function je(e, t, n, r, o, i, s, d) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: we, column: ee, length: s, return: "", siblings: d };
}
function Y(e, t) {
  return Ye(je("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function J(e) {
  for (; e.root; )
    e = Y(e.root, { children: [e] });
  le(e, e.siblings);
}
function In() {
  return v;
}
function xn() {
  return v = O > 0 ? C(oe, --O) : 0, ee--, v === 10 && (ee = 1, we--), v;
}
function L() {
  return v = O < St ? C(oe, O++) : 0, ee++, v === 10 && (ee = 1, we++), v;
}
function W() {
  return C(oe, O);
}
function xe() {
  return O;
}
function ve(e, t) {
  return q(oe, e, t);
}
function Ge(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Dn(e) {
  return we = ee = 1, St = P(oe = e), O = 0, [];
}
function Nn(e) {
  return oe = "", e;
}
function Pe(e) {
  return vt(ve(O - 1, Ue(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function En(e) {
  for (; (v = W()) && v < 33; )
    L();
  return Ge(e) > 2 || Ge(v) > 3 ? "" : " ";
}
function Tn(e, t) {
  for (; --t && L() && !(v < 48 || v > 102 || v > 57 && v < 65 || v > 70 && v < 97); )
    ;
  return ve(e, xe() + (t < 6 && W() == 32 && L() == 32));
}
function Ue(e) {
  for (; L(); )
    switch (v) {
      case e:
        return O;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ue(v);
        break;
      case 40:
        e === 41 && Ue(e);
        break;
      case 92:
        L();
        break;
    }
  return O;
}
function An(e, t) {
  for (; L() && e + v !== 47 + 10; )
    if (e + v === 42 + 42 && W() === 47)
      break;
  return "/*" + ve(t, O - 1) + "*" + $e(e === 47 ? e : L());
}
function bn(e) {
  for (; !Ge(W()); )
    L();
  return ve(e, O);
}
function wn(e) {
  return Nn(De("", null, null, null, [""], e = Dn(e), 0, [0], e));
}
function De(e, t, n, r, o, i, s, d, c) {
  for (var p = 0, y = 0, h = s, I = 0, x = 0, T = 0, w = 1, z = 1, j = 1, A = 0, D = "", E = o, b = i, f = r, g = D; z; )
    switch (T = A, A = L()) {
      case 40:
        if (T != 108 && C(g, h - 1) == 58) {
          Ie(g += u(Pe(A), "&", "&\f"), "&\f", jt(p ? d[p - 1] : 0)) != -1 && (j = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        g += Pe(A);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        g += En(T);
        break;
      case 92:
        g += Tn(xe() - 1, 7);
        continue;
      case 47:
        switch (W()) {
          case 42:
          case 47:
            le(jn(An(L(), xe()), t, n, c), c);
            break;
          default:
            g += "/";
        }
        break;
      case 123 * w:
        d[p++] = P(g) * j;
      case 125 * w:
      case 59:
      case 0:
        switch (A) {
          case 0:
          case 125:
            z = 0;
          case 59 + y:
            j == -1 && (g = u(g, /\f/g, "")), x > 0 && P(g) - h && le(x > 32 ? at(g + ";", r, n, h - 1, c) : at(u(g, " ", "") + ";", r, n, h - 2, c), c);
            break;
          case 59:
            g += ";";
          default:
            if (le(f = it(g, t, n, p, y, o, d, D, E = [], b = [], h, i), i), A === 123)
              if (y === 0)
                De(g, t, f, f, E, i, h, d, b);
              else
                switch (I === 99 && C(g, 3) === 110 ? 100 : I) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    De(e, f, f, r && le(it(e, f, f, 0, 0, o, d, D, o, E = [], h, b), b), o, b, h, d, r ? E : b);
                    break;
                  default:
                    De(g, f, f, f, [""], b, 0, d, b);
                }
        }
        p = y = x = 0, w = j = 1, D = g = "", h = s;
        break;
      case 58:
        h = 1 + P(g), x = T;
      default:
        if (w < 1) {
          if (A == 123)
            --w;
          else if (A == 125 && w++ == 0 && xn() == 125)
            continue;
        }
        switch (g += $e(A), A * w) {
          case 38:
            j = y > 0 ? 1 : (g += "\f", -1);
            break;
          case 44:
            d[p++] = (P(g) - 1) * j, j = 1;
            break;
          case 64:
            W() === 45 && (g += Pe(L())), I = W(), y = h = P(D = g += bn(xe())), A++;
            break;
          case 45:
            T === 45 && P(g) == 2 && (w = 0);
        }
    }
  return i;
}
function it(e, t, n, r, o, i, s, d, c, p, y, h) {
  for (var I = o - 1, x = o === 0 ? i : [""], T = Ct(x), w = 0, z = 0, j = 0; w < r; ++w)
    for (var A = 0, D = q(e, I + 1, I = jt(z = s[w])), E = e; A < T; ++A)
      (E = vt(z > 0 ? x[A] + " " + D : u(D, /&\f/g, x[A]))) && (c[j++] = E);
  return je(e, t, n, o === 0 ? be : d, c, p, y, h);
}
function jn(e, t, n, r) {
  return je(e, t, n, bt, $e(In()), q(e, 2, -2), 0, r);
}
function at(e, t, n, r, o) {
  return je(e, t, n, _e, q(e, 0, r), q(e, r + 1, -1), r, o);
}
function zt(e, t, n) {
  switch (Mn(e, t)) {
    case 5103:
      return M + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return M + e + e;
    case 4789:
      return de + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return M + e + de + e + N + e + e;
    case 5936:
      switch (C(e, t + 11)) {
        case 114:
          return M + e + N + u(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return M + e + N + u(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return M + e + N + u(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return M + e + N + e + e;
    case 6165:
      return M + e + N + "flex-" + e + e;
    case 5187:
      return M + e + u(e, /(\w+).+(:[^]+)/, M + "box-$1$2" + N + "flex-$1$2") + e;
    case 5443:
      return M + e + N + "flex-item-" + u(e, /flex-|-self/g, "") + (Z(e, /flex-|baseline/) ? "" : N + "grid-row-" + u(e, /flex-|-self/g, "")) + e;
    case 4675:
      return M + e + N + "flex-line-pack" + u(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return M + e + N + u(e, "shrink", "negative") + e;
    case 5292:
      return M + e + N + u(e, "basis", "preferred-size") + e;
    case 6060:
      return M + "box-" + u(e, "-grow", "") + M + e + N + u(e, "grow", "positive") + e;
    case 4554:
      return M + u(e, /([^-])(transform)/g, "$1" + M + "$2") + e;
    case 6187:
      return u(u(u(e, /(zoom-|grab)/, M + "$1"), /(image-set)/, M + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return u(e, /(image-set\([^]*)/, M + "$1$`$1");
    case 4968:
      return u(u(e, /(.+:)(flex-)?(.*)/, M + "box-pack:$3" + N + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + M + e + e;
    case 4200:
      if (!Z(e, /flex-|baseline/))
        return N + "grid-column-align" + q(e, t) + e;
      break;
    case 2592:
    case 3360:
      return N + u(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, Z(r.props, /grid-\w+-end/);
      }) ? ~Ie(e + (n = n[t].value), "span", 0) ? e : N + u(e, "-start", "") + e + N + "grid-row-span:" + (~Ie(n, "span", 0) ? Z(n, /\d+/) : +Z(n, /\d+/) - +Z(e, /\d+/)) + ";" : N + u(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Z(r.props, /grid-\w+-start/);
      }) ? e : N + u(u(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return u(e, /(.+)-inline(.+)/, M + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (P(e) - 1 - t > 6)
        switch (C(e, t + 1)) {
          case 109:
            if (C(e, t + 4) !== 45)
              break;
          case 102:
            return u(e, /(.+:)(.+)-([^]+)/, "$1" + M + "$2-$3$1" + de + (C(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ie(e, "stretch", 0) ? zt(u(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return u(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, d, c, p) {
        return N + o + ":" + i + p + (s ? N + o + "-span:" + (d ? c : +c - +i) + p : "") + e;
      });
    case 4949:
      if (C(e, t + 6) === 121)
        return u(e, ":", ":" + M) + e;
      break;
    case 6444:
      switch (C(e, C(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return u(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + M + (C(e, 14) === 45 ? "inline-" : "") + "box$3$1" + M + "$2$3$1" + N + "$2box$3") + e;
        case 100:
          return u(e, ":", ":" + N) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return u(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Te(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function vn(e, t, n, r) {
  switch (e.type) {
    case hn:
      if (e.children.length)
        break;
    case mn:
    case _e:
      return e.return = e.return || e.value;
    case bt:
      return "";
    case wt:
      return e.return = e.value + "{" + Te(e.children, r) + "}";
    case be:
      if (!P(e.value = e.props.join(",")))
        return "";
  }
  return P(n = Te(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Cn(e) {
  var t = Ct(e);
  return function(n, r, o, i) {
    for (var s = "", d = 0; d < t; d++)
      s += e[d](n, r, o, i) || "";
    return s;
  };
}
function Sn(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function zn(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case _e:
        e.return = zt(e.value, e.length, n);
        return;
      case wt:
        return Te([Y(e, { value: u(e.value, "@", "@" + M) })], r);
      case be:
        if (e.length)
          return yn(n = e.props, function(o) {
            switch (Z(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                J(Y(e, { props: [u(o, /:(read-\w+)/, ":" + de + "$1")] })), J(Y(e, { props: [o] })), Ye(e, { props: ot(n, r) });
                break;
              case "::placeholder":
                J(Y(e, { props: [u(o, /:(plac\w+)/, ":" + M + "input-$1")] })), J(Y(e, { props: [u(o, /:(plac\w+)/, ":" + de + "$1")] })), J(Y(e, { props: [u(o, /:(plac\w+)/, N + "input-$1")] })), J(Y(e, { props: [o] })), Ye(e, { props: ot(n, r) });
                break;
            }
            return "";
          });
    }
}
var kn = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, V = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", kt = "active", Ot = "data-styled-version", Ce = "6.1.11", Xe = `/*!sc*/
`, Je = typeof window < "u" && "HTMLElement" in window, On = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), st = /invalid hook call/i, me = /* @__PURE__ */ new Set(), Ln = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        for (var d = [], c = 1; c < arguments.length; c++)
          d[c - 1] = arguments[c];
        st.test(s) ? (i = !1, me.delete(r)) : o.apply(void 0, K([s], d, !1));
      }, Et(), i && !me.has(r) && (console.warn(r), me.add(r));
    } catch (s) {
      st.test(s.message) && me.delete(r);
    } finally {
      console.error = o;
    }
  }
}, Se = Object.freeze([]), te = Object.freeze({});
function Pn(e, t, n) {
  return n === void 0 && (n = te), e.theme !== n.theme && e.theme || t || n.theme;
}
var Be = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Qn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Zn = /(^-|-$)/g;
function ct(e) {
  return e.replace(Qn, "-").replace(Zn, "");
}
var Rn = /(a)(d)/gi, he = 52, lt = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function He(e) {
  var t, n = "";
  for (t = Math.abs(e); t > he; t = t / he | 0)
    n = lt(t % he) + n;
  return (lt(t % he) + n).replace(Rn, "$1-$2");
}
var Qe, Lt = 5381, B = function(e, t) {
  for (var n = t.length; n; )
    e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Pt = function(e) {
  return B(Lt, e);
};
function Yn(e) {
  return He(Pt(e) >>> 0);
}
function Qt(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ze(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Zt = typeof Symbol == "function" && Symbol.for, Rt = Zt ? Symbol.for("react.memo") : 60115, Gn = Zt ? Symbol.for("react.forward_ref") : 60112, Un = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Bn = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Yt = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Hn = ((Qe = {})[Gn] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Qe[Rt] = Yt, Qe);
function dt(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Rt ? Yt : "$$typeof" in e ? Hn[e.$$typeof] : Un;
  var t;
}
var Wn = Object.defineProperty, Fn = Object.getOwnPropertyNames, ut = Object.getOwnPropertySymbols, Vn = Object.getOwnPropertyDescriptor, _n = Object.getPrototypeOf, gt = Object.prototype;
function Gt(e, t, n) {
  if (typeof t != "string") {
    if (gt) {
      var r = _n(t);
      r && r !== gt && Gt(e, r, n);
    }
    var o = Fn(t);
    ut && (o = o.concat(ut(t)));
    for (var i = dt(e), s = dt(t), d = 0; d < o.length; ++d) {
      var c = o[d];
      if (!(c in Bn || n && n[c] || s && c in s || i && c in i)) {
        var p = Vn(t, c);
        try {
          Wn(e, c, p);
        } catch {
        }
      }
    }
  }
  return e;
}
function ne(e) {
  return typeof e == "function";
}
function Ke(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function H(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function pt(e, t) {
  if (e.length === 0)
    return "";
  for (var n = e[0], r = 1; r < e.length; r++)
    n += t ? t + e[r] : e[r];
  return n;
}
function re(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function We(e, t, n) {
  if (n === void 0 && (n = !1), !n && !re(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++)
      e[r] = We(e[r], t[r]);
  else if (re(t))
    for (var r in t)
      e[r] = We(e[r], t[r]);
  return e;
}
function qe(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var $n = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function Xn() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1)
    r.push(e[o]);
  return r.forEach(function(s) {
    n = n.replace(/%[a-z]/, s);
  }), n;
}
function ie(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Xn.apply(void 0, K([$n[e]], t, !1)).trim());
}
var Jn = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, r = 0; r < t; r++)
      n += this.groupSizes[r];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; t >= i; )
        if ((i <<= 1) < 0)
          throw ie(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(r), this.length = i;
      for (var s = o; s < i; s++)
        this.groupSizes[s] = 0;
    }
    for (var d = this.indexOfGroup(t + 1), c = (s = 0, n.length); s < c; s++)
      this.tag.insertRule(d, n[s]) && (this.groupSizes[t]++, d++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], r = this.indexOfGroup(t), o = r + n;
      this.groupSizes[t] = 0;
      for (var i = r; i < o; i++)
        this.tag.deleteRule(r);
    }
  }, e.prototype.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return n;
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, s = o; s < i; s++)
      n += "".concat(this.tag.getRule(s)).concat(Xe);
    return n;
  }, e;
}(), Kn = 1 << 30, Ne = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map(), Ee = 1, Me = function(e) {
  if (Ne.has(e))
    return Ne.get(e);
  for (; Ae.has(Ee); )
    Ee++;
  var t = Ee++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > Kn))
    throw ie(16, "".concat(t));
  return Ne.set(e, t), Ae.set(t, e), t;
}, qn = function(e, t) {
  Ee = t + 1, Ne.set(e, t), Ae.set(t, e);
}, er = "style[".concat(V, "][").concat(Ot, '="').concat(Ce, '"]'), tr = new RegExp("^".concat(V, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), nr = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++)
    (r = o[i]) && e.registerName(t, r);
}, rr = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Xe), o = [], i = 0, s = r.length; i < s; i++) {
    var d = r[i].trim();
    if (d) {
      var c = d.match(tr);
      if (c) {
        var p = 0 | parseInt(c[1], 10), y = c[2];
        p !== 0 && (qn(y, p), nr(e, y, c[3]), e.getTag().insertRules(p, o)), o.length = 0;
      } else
        o.push(d);
    }
  }
};
function or() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Ut = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(d) {
    var c = Array.from(d.querySelectorAll("style[".concat(V, "]")));
    return c[c.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(V, kt), r.setAttribute(Ot, Ce);
  var s = or();
  return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
}, ir = function() {
  function e(t) {
    this.element = Ut(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet)
        return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var s = r[o];
        if (s.ownerNode === n)
          return s;
      }
      throw ie(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n && n.cssText ? n.cssText : "";
  }, e;
}(), ar = function() {
  function e(t) {
    this.element = Ut(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var r = document.createTextNode(n);
      return this.element.insertBefore(r, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), sr = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), ft = Je, cr = { isServer: !Je, useCSSOMInjection: !On }, Bt = function() {
  function e(t, n, r) {
    t === void 0 && (t = te), n === void 0 && (n = {});
    var o = this;
    this.options = S(S({}, cr), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && Je && ft && (ft = !1, function(i) {
      for (var s = document.querySelectorAll(er), d = 0, c = s.length; d < c; d++) {
        var p = s[d];
        p && p.getAttribute(V) !== kt && (rr(i, p), p.parentNode && p.parentNode.removeChild(p));
      }
    }(this)), qe(this, function() {
      return function(i) {
        for (var s = i.getTag(), d = s.length, c = "", p = function(h) {
          var I = function(j) {
            return Ae.get(j);
          }(h);
          if (I === void 0)
            return "continue";
          var x = i.names.get(I), T = s.getGroup(h);
          if (x === void 0 || T.length === 0)
            return "continue";
          var w = "".concat(V, ".g").concat(h, '[id="').concat(I, '"]'), z = "";
          x !== void 0 && x.forEach(function(j) {
            j.length > 0 && (z += "".concat(j, ","));
          }), c += "".concat(T).concat(w, '{content:"').concat(z, '"}').concat(Xe);
        }, y = 0; y < d; y++)
          p(y);
        return c;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return Me(t);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(S(S({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new sr(o) : r ? new ir(o) : new ar(o);
    }(this.options), new Jn(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (Me(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(Me(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Me(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), lr = /&/g, dr = /^\s*\/\/.*$/gm;
function Ht(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Ht(n.children, t)), n;
  });
}
function ur(e) {
  var t, n, r, o = e === void 0 ? te : e, i = o.options, s = i === void 0 ? te : i, d = o.plugins, c = d === void 0 ? Se : d, p = function(I, x, T) {
    return T.startsWith(n) && T.endsWith(n) && T.replaceAll(n, "").length > 0 ? ".".concat(t) : I;
  }, y = c.slice();
  y.push(function(I) {
    I.type === be && I.value.includes("&") && (I.props[0] = I.props[0].replace(lr, n).replace(r, p));
  }), s.prefix && y.push(zn), y.push(vn);
  var h = function(I, x, T, w) {
    x === void 0 && (x = ""), T === void 0 && (T = ""), w === void 0 && (w = "&"), t = w, n = x, r = new RegExp("\\".concat(n, "\\b"), "g");
    var z = I.replace(dr, ""), j = wn(T || x ? "".concat(T, " ").concat(x, " { ").concat(z, " }") : z);
    s.namespace && (j = Ht(j, s.namespace));
    var A = [];
    return Te(j, Cn(y.concat(Sn(function(D) {
      return A.push(D);
    })))), A;
  };
  return h.hash = c.length ? c.reduce(function(I, x) {
    return x.name || ie(15), B(I, x.name);
  }, Lt).toString() : "", h;
}
var gr = new Bt(), Fe = ur(), Wt = a.createContext({ shouldForwardProp: void 0, styleSheet: gr, stylis: Fe });
Wt.Consumer;
a.createContext(void 0);
function mt() {
  return Tt(Wt);
}
var ht = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Fe);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, qe(this, function() {
      throw ie(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Fe), this.name + t.hash;
  }, e;
}(), pr = function(e) {
  return e >= "A" && e <= "Z";
};
function Mt(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-")
      return e;
    pr(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Ft = function(e) {
  return e == null || e === !1 || e === "";
}, Vt = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Ft(i) && (Array.isArray(i) && i.isCss || ne(i) ? r.push("".concat(Mt(o), ":"), i, ";") : re(i) ? r.push.apply(r, K(K(["".concat(o, " {")], Vt(i), !1), ["}"], !1)) : r.push("".concat(Mt(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in kn || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function F(e, t, n, r) {
  if (Ft(e))
    return [];
  if (Ke(e))
    return [".".concat(e.styledComponentId)];
  if (ne(e)) {
    if (!ne(i = e) || i.prototype && i.prototype.isReactComponent || !t)
      return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof ht || re(o) || o === null || console.error("".concat(Qt(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), F(o, t, n, r);
  }
  var i;
  return e instanceof ht ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : re(e) ? Vt(e) : Array.isArray(e) ? Array.prototype.concat.apply(Se, e.map(function(s) {
    return F(s, t, n, r);
  })) : [e.toString()];
}
function fr(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (ne(n) && !Ke(n))
      return !1;
  }
  return !0;
}
var mr = Pt(Ce), hr = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && fr(t), this.componentId = n, this.baseHash = B(mr, n), this.baseStyle = r, Bt.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash)
      if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId))
        o = H(o, this.staticRulesId);
      else {
        var i = pt(F(this.rules, t, n, r)), s = He(B(this.baseHash, i) >>> 0);
        if (!n.hasNameForId(this.componentId, s)) {
          var d = r(i, ".".concat(s), void 0, this.componentId);
          n.insertRules(this.componentId, s, d);
        }
        o = H(o, s), this.staticRulesId = s;
      }
    else {
      for (var c = B(this.baseHash, r.hash), p = "", y = 0; y < this.rules.length; y++) {
        var h = this.rules[y];
        if (typeof h == "string")
          p += h, process.env.NODE_ENV !== "production" && (c = B(c, h));
        else if (h) {
          var I = pt(F(h, t, n, r));
          c = B(c, I + y), p += I;
        }
      }
      if (p) {
        var x = He(c >>> 0);
        n.hasNameForId(this.componentId, x) || n.insertRules(this.componentId, x, r(p, ".".concat(x), void 0, this.componentId)), o = H(o, x);
      }
    }
    return o;
  }, e;
}(), _t = a.createContext(void 0);
_t.Consumer;
var Re = {}, yt = /* @__PURE__ */ new Set();
function Mr(e, t, n) {
  var r = Ke(e), o = e, i = !Ze(e), s = t.attrs, d = s === void 0 ? Se : s, c = t.componentId, p = c === void 0 ? function(E, b) {
    var f = typeof E != "string" ? "sc" : ct(E);
    Re[f] = (Re[f] || 0) + 1;
    var g = "".concat(f, "-").concat(Yn(Ce + f + Re[f]));
    return b ? "".concat(b, "-").concat(g) : g;
  }(t.displayName, t.parentComponentId) : c, y = t.displayName, h = y === void 0 ? function(E) {
    return Ze(E) ? "styled.".concat(E) : "Styled(".concat(Qt(E), ")");
  }(e) : y, I = t.displayName && t.componentId ? "".concat(ct(t.displayName), "-").concat(t.componentId) : t.componentId || p, x = r && o.attrs ? o.attrs.concat(d).filter(Boolean) : d, T = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var w = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var z = t.shouldForwardProp;
      T = function(E, b) {
        return w(E, b) && z(E, b);
      };
    } else
      T = w;
  }
  var j = new hr(n, I, r ? o.componentStyle : void 0);
  function A(E, b) {
    return function(f, g, G) {
      var $ = f.attrs, tn = f.componentStyle, nn = f.defaultProps, rn = f.foldedComponentIds, tt = f.styledComponentId, on = f.target, an = a.useContext(_t), sn = mt(), ze = f.shouldForwardProp || sn.shouldForwardProp;
      process.env.NODE_ENV !== "production" && rt(tt);
      var nt = Pn(g, an, nn) || te, Q = function(ge, ce, pe) {
        for (var X, U = S(S({}, ce), { className: void 0, theme: pe }), Le = 0; Le < ge.length; Le += 1) {
          var fe = ne(X = ge[Le]) ? X(U) : X;
          for (var R in fe)
            U[R] = R === "className" ? H(U[R], fe[R]) : R === "style" ? S(S({}, U[R]), fe[R]) : fe[R];
        }
        return ce.className && (U.className = H(U.className, ce.className)), U;
      }($, g, nt), ae = Q.as || on, se = {};
      for (var k in Q)
        Q[k] === void 0 || k[0] === "$" || k === "as" || k === "theme" && Q.theme === nt || (k === "forwardedAs" ? se.as = Q.forwardedAs : ze && !ze(k, ae) || (se[k] = Q[k], ze || process.env.NODE_ENV !== "development" || fn(k) || yt.has(k) || !Be.has(ae) || (yt.add(k), console.warn('styled-components: it looks like an unknown prop "'.concat(k, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ke = function(ge, ce) {
        var pe = mt(), X = ge.generateAndInjectStyles(ce, pe.styleSheet, pe.stylis);
        return process.env.NODE_ENV !== "production" && rt(X), X;
      }(tn, Q);
      process.env.NODE_ENV !== "production" && f.warnTooManyClasses && f.warnTooManyClasses(ke);
      var Oe = H(rn, tt);
      return ke && (Oe += " " + ke), Q.className && (Oe += " " + Q.className), se[Ze(ae) && !Be.has(ae) ? "class" : "className"] = Oe, se.ref = G, cn(ae, se);
    }(D, E, b);
  }
  A.displayName = h;
  var D = a.forwardRef(A);
  return D.attrs = x, D.componentStyle = j, D.displayName = h, D.shouldForwardProp = T, D.foldedComponentIds = r ? H(o.foldedComponentIds, o.styledComponentId) : "", D.styledComponentId = I, D.target = r ? o.target : e, Object.defineProperty(D, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = r ? function(b) {
      for (var f = [], g = 1; g < arguments.length; g++)
        f[g - 1] = arguments[g];
      for (var G = 0, $ = f; G < $.length; G++)
        We(b, $[G], !0);
      return b;
    }({}, o.defaultProps, E) : E;
  } }), process.env.NODE_ENV !== "production" && (Ln(h, I), D.warnTooManyClasses = function(E, b) {
    var f = {}, g = !1;
    return function(G) {
      if (!g && (f[G] = !0, Object.keys(f).length >= 200)) {
        var $ = b ? ' with the id of "'.concat(b, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(E).concat($, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), g = !0, f = {};
      }
    };
  }(h, I)), qe(D, function() {
    return ".".concat(D.styledComponentId);
  }), i && Gt(D, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), D;
}
function It(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var xt = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function yr(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  if (ne(e) || re(e))
    return xt(F(It(Se, K([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? F(r) : xt(F(It(r, t)));
}
function Ve(e, t, n) {
  if (n === void 0 && (n = te), !t)
    throw ie(1, t);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++)
      i[s - 1] = arguments[s];
    return e(t, n, yr.apply(void 0, K([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Ve(e, t, S(S({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Ve(e, t, S(S({}, n), o));
  }, r;
}
var $t = function(e) {
  return Ve(Mr, e);
}, l = $t;
Be.forEach(function(e) {
  l[e] = $t(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var ye = "__sc-".concat(V, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[ye] || (window[ye] = 0), window[ye] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[ye] += 1);
const Ir = l.div`
  position: relative;
  width: 48px;
  height: 48px;
`, xr = l.img`
  height: 100%;
  border-radius: 50%;
`, Dr = l.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 12px;
  height: 12px;
  background: #2018b0;
  border-radius: 50%;
`, Nr = ({ showbadge: e = !0, background: t = "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg", onClick: n }) => /* @__PURE__ */ a.createElement(Ir, { onClick: n }, /* @__PURE__ */ a.createElement(xr, { src: t }), e && /* @__PURE__ */ a.createElement(Dr, null)), Er = l.button`
  /* Styles communs pour tous les boutons */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: 100%; 

  /* Styles pour le bouton primary */
  &.primary {
    background-color: #228C53;
    color: #eeebff;
    border: none;
    border-radius: 2px;
    font-family: serif;

    &:hover {
      background-color: #228C53;
      color: #d9ccff;
    }

    &:active {
      background-color: #228C53;
      color: #f5f6ff;
    }

    &:disabled {
      background-color: #170F354D;
      color: #170F354D;
    }
  }

  /* Styles pour le bouton secondary */
  &.secondary {
    background: #f8f8f8;
    border: 2px solid #1B6042;
    border-radius: 2px;
    color: #191CB1;

    &:hover {
      background: #ffffff;
      border: 2px solid #1B6042;
      color: #1B6042;
    }

    &:active {
      background: #e4e4e4;
      border: 2px solid #1B6042;
      color: #1B6042;
    }

    &:disabled {
      border-radius: 2px;
      border: 2px dashed rgba(0, 35, 252, 0.11);
      background: #170F354D;
    }
  }

  /* Styles pour le bouton tertiary */
  &.tertiary {
    background: #f8f8f8;
    border-radius: 2px;
    color: #1b6042;
    border: 2px #f8f8f8;

    &:hover {
      background: #ffffff;
      color: #228c53;
    }

    &:active {
      background: #e4e4e4;
      color: #153f33;
    }

    &:disabled {
      background: rgba(119, 119, 119, 0.11);
      border: 2px dashed #140B2533;
      color: rgba(33, 193, 103, 0.11);
    }
  }
`, _ = ({ variant: e = "primary", children: t, action: n = () => console.log("Button as been clicked"), value: r = void 0, type: o = void 0, disabled: i = !1 }) => /* @__PURE__ */ a.createElement(Er, { className: `${e} ${i ? "disabled" : ""}`, onClick: i ? void 0 : n, type: o, value: r, disabled: i }, t);
_.Primary = (e) => /* @__PURE__ */ a.createElement(_, { variant: "primary", ...e });
_.Secondary = (e) => /* @__PURE__ */ a.createElement(_, { variant: "secondary", ...e });
_.Tertiary = (e) => /* @__PURE__ */ a.createElement(_, { variant: "tertiary", ...e });
const Tr = l.div`
  position: relative;
  overflow: hidden;
`, Ar = l(Tr)`
  aspect-ratio: 1 / 1;
`, Xt = ({ children: e }) => /* @__PURE__ */ a.createElement(Ar, null, e);
Xt.defaultProps = {
  children: null
};
const br = l.div`
  position: relative;
  overflow: hidden;
`, wr = l(br)`
  aspect-ratio: 3 / 2;
`, Jt = ({ children: e }) => /* @__PURE__ */ a.createElement(wr, null, e);
Jt.defaultProps = {
  children: null
};
const ue = ({ children: e }) => /* @__PURE__ */ a.createElement("div", null, e);
ue.L1H1 = Xt;
ue.L2H3 = Jt;
const jr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDRIMTBWMTFIM1YxM0gxMFYyMEgxMlYxM0gxOVYxMUgxMlY0WiIgZmlsbD0iIzIwMThCMCIvPgo8L3N2Zz4K", vr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjU2MzMgNEg3LjQzNjc0TDUuNzcwMDcgNi43NUgyVjE3SDZWMTVINFY4Ljc1SDYuODk2NTlMOC41NjMyNiA2SDEyLjQzNjdMMTQuMTAzNCA4Ljc1SDE3VjExSDE5VjYuNzVIMTUuMjI5OUwxMy41NjMzIDRaIiBmaWxsPSIjMjAxOEIwIi8+CjxwYXRoIGQ9Ik0xNyAxOVYxN0gxNVYxNUgxN1YxM0gxOVYxNUgyMVYxN0gxOVYxOUgxN1oiIGZpbGw9IiMyMDE4QjAiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSAxMi41QzE1IDE0Ljk4NTMgMTIuOTg1MyAxNyAxMC41IDE3QzguMDE0NzIgMTcgNiAxNC45ODUzIDYgMTIuNUM2IDEwLjAxNDcgOC4wMTQ3MiA4IDEwLjUgOEMxMi45ODUzIDggMTUgMTAuMDE0NyAxNSAxMi41Wk0xMyAxMi41QzEzIDEzLjg4MDcgMTEuODgwNyAxNSAxMC41IDE1QzkuMTE5MjkgMTUgOCAxMy44ODA3IDggMTIuNUM4IDExLjExOTMgOS4xMTkyOSAxMCAxMC41IDEwQzExLjg4MDcgMTAgMTMgMTEuMTE5MyAxMyAxMi41WiIgZmlsbD0iIzIwMThCMCIvPgo8L3N2Zz4K", Cr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjUgMTRWNEgxMC41VjE0SDguMjczMjRDNy40MDMxNCAxNCA2Ljk0ODE0IDE1LjAzNDMgNy41MzYwOSAxNS42NzU3TDEwLjc2MjkgMTkuMTk1OEMxMS4xNTkyIDE5LjYyODIgMTEuODQwOCAxOS42MjgyIDEyLjIzNzIgMTkuMTk1OEwxNS40NjM5IDE1LjY3NTdDMTYuMDUxOSAxNS4wMzQzIDE1LjU5NjkgMTQgMTQuNzI2OCAxNEgxMi41WiIgZmlsbD0iIzIwMThCMCIvPgo8L3N2Zz4K", Sr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuODI0MjcgOC4wMzYwOEw0LjMwNDE2IDExLjI2MjhDMy44NzE4IDExLjY1OTIgMy44NzE4IDEyLjM0MDggNC4zMDQxNiAxMi43MzcyTDcuODI0MjcgMTUuOTYzOUM4LjQ2NTY3IDE2LjU1MTkgOS41IDE2LjA5NjkgOS41IDE1LjIyNjhMOS41IDEzTDE5LjUgMTNWMTFMOS41IDExVjguNzczMjRDOS41IDcuOTAzMTMgOC40NjU2NyA3LjQ0ODEzIDcuODI0MjcgOC4wMzYwOFoiIGZpbGw9IiMyMDE4QjAiLz4KPC9zdmc+Cg==", zr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjE3NTcgMTUuOTYzOUwxOC42OTU4IDEyLjczNzJDMTkuMTI4MiAxMi4zNDA4IDE5LjEyODIgMTEuNjU5MiAxOC42OTU4IDExLjI2MjhMMTUuMTc1NyA4LjAzNjA4QzE0LjUzNDMgNy40NDgxMyAxMy41IDcuOTAzMTMgMTMuNSA4Ljc3MzIzTDEzLjUgMTFMMy41IDExVjEzTDEzLjUgMTNWMTUuMjI2OEMxMy41IDE2LjA5NjkgMTQuNTM0MyAxNi41NTE5IDE1LjE3NTcgMTUuOTYzOVoiIGZpbGw9IiMyMDE4QjAiLz4KPC9zdmc+Cg==", kr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjQ2MzkgOC4zMjQyOEwxMi4yMzcyIDQuODA0MTdDMTEuODQwOCA0LjM3MTggMTEuMTU5MiA0LjM3MTggMTAuNzYyOSA0LjgwNDE3TDcuNTM2MDkgOC4zMjQyN0M2Ljk0ODE0IDguOTY1NjggNy40MDMxNCAxMCA4LjI3MzI0IDEwTDEwLjUgMTBMMTAuNSAyMEgxMi41TDEyLjUgMTBMMTQuNzI2OCAxMEMxNS41OTY5IDEwIDE2LjA1MTkgOC45NjU2OCAxNS40NjM5IDguMzI0MjhaIiBmaWxsPSIjMjAxOEIwIi8+Cjwvc3ZnPgo=", Or = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjc3MDUgMTUuMjIxOEw1LjU3ODY5IDkuNjgzOTRDNC45Nzk5NSA5LjA0NTI4IDUuNDMyNzkgOCA2LjMwODIzIDhIMTYuNjkxOEMxNy41NjcyIDggMTguMDIwMSA5LjA0NTI4IDE3LjQyMTMgOS42ODM5NEwxMi4yMjk1IDE1LjIyMThDMTEuODM0NSAxNS42NDMyIDExLjE2NTUgMTUuNjQzMiAxMC43NzA1IDE1LjIyMThaIiBmaWxsPSIjMjAxOEIwIi8+Cjwvc3ZnPgo=", Lr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMCAzQzEwIDIuNDQ3NzIgOS41NTIyOCAyIDkgMkM4LjQ0NzcyIDIgOCAyLjQ0NzcyIDggM1Y0SDdDNC43OTA4NiA0IDMgNS43OTA4NiAzIDhWMTZDMyAxOC4yMDkxIDQuNzkwODYgMjAgNyAyMEgxNkMxOC4yMDkxIDIwIDIwIDE4LjIwOTEgMjAgMTZWOEMyMCA1Ljc5MDg2IDE4LjIwOTEgNCAxNiA0SDE1VjNDMTUgMi40NDc3MiAxNC41NTIzIDIgMTQgMkMxMy40NDc3IDIgMTMgMi40NDc3MiAxMyAzVjRIMTBWM1pNNSAxNlYxNUg4VjE4SDdDNS44OTU0MyAxOCA1IDE3LjEwNDYgNSAxNlpNMTAgMThIMTNWMTVIMTBWMThaTTE2IDE4SDE1VjE1SDE4VjE2QzE4IDE3LjEwNDYgMTcuMTA0NiAxOCAxNiAxOFpNMTggMTNIMTVWOUgxOFYxM1pNMTAgOUgxM1YxM0gxMFY5Wk04IDlINVYxM0g4VjlaIiBmaWxsPSIjMjAxOEIwIi8+Cjwvc3ZnPgo=", Pr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDJDOS41NTIyOCAyIDEwIDIuNDQ3NzIgMTAgM1Y0SDEzVjNDMTMgMi40NDc3MiAxMy40NDc3IDIgMTQgMkMxNC41NTIzIDIgMTUgMi40NDc3MiAxNSAzVjRIMTZDMTguMjA5MSA0IDIwIDUuNzkwODYgMjAgOFYxNkMyMCAxOC4yMDkxIDE4LjIwOTEgMjAgMTYgMjBIN0M0Ljc5MDg2IDIwIDMgMTguMjA5MSAzIDE2VjhDMyA1Ljc5MDg2IDQuNzkwODYgNCA3IDRIOFYzQzggMi40NDc3MiA4LjQ0NzcyIDIgOSAyWk03IDZDNS44OTU0MyA2IDUgNi44OTU0MyA1IDhIMThDMTggNi44OTU0MyAxNy4xMDQ2IDYgMTYgNkg3Wk01IDEwVjEzSDhWMTBINVpNMTAgMTBWMTNIMTNWMTBIMTBaTTEwIDE1SDEzVjE4SDEwVjE1Wk0xNSAxNVYxOEgxNkMxNy4xMDQ2IDE4IDE4IDE3LjEwNDYgMTggMTZWMTVIMTVaTTE1IDEwVjEzSDE4VjEwSDE1Wk04IDE1SDVWMTZDNSAxNy4xMDQ2IDUuODk1NDMgMTggNyAxOEg4VjE1WiIgZmlsbD0iIzIwMThCMCIvPgo8L3N2Zz4K", Qr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDQgMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yIDRDMy4xMDQ1NyA0IDQgMy4xMDQ1NyA0IDJDNCAwLjg5NTQzMSAzLjEwNDU3IDAgMiAwQzAuODk1NDMxIDAgMCAwLjg5NTQzMSAwIDJDMCAzLjEwNDU3IDAuODk1NDMxIDQgMiA0WiIgZmlsbD0iI0VERjFGQSIvPgo8cGF0aCBkPSJNNCAxN1Y2SDBWMTdINFoiIGZpbGw9IiNFREYxRkEiLz4KPC9zdmc+Cg==", Zr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMCAxMEMyMCAxMy4zMTM3IDE3LjMxMzcgMTYgMTQgMTZDMTIuNzA0MiAxNiAxMS41MDQzIDE1LjU4OTIgMTAuNTIzNSAxNC44OTA4TDUuNzA3MTIgMTkuNzA3MUw0LjI5MjkxIDE4LjI5MjlMOS4xMDkyNiAxMy40NzY1QzguNDEwNzkgMTIuNDk1NyA4IDExLjI5NTggOCAxMEM4IDYuNjg2MjkgMTAuNjg2MyA0IDE0IDRDMTcuMzEzNyA0IDIwIDYuNjg2MjkgMjAgMTBaTTE4IDEwQzE4IDEyLjIwOTEgMTYuMjA5MSAxNCAxNCAxNEMxMS43OTA5IDE0IDEwIDEyLjIwOTEgMTAgMTBDMTAgNy43OTA4NiAxMS43OTA5IDYgMTQgNkMxNi4yMDkxIDYgMTggNy43OTA4NiAxOCAxMFoiIGZpbGw9IiMyMDE4QjAiLz4KPC9zdmc+Cg==", Kt = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiA+CjxwYXRoIGQ9Ik0yMjAtMTYwcS0yNCAwLTQyLTE4dC0xOC00MnYtMTQzaDYwdjE0M2g1MjB2LTE0M2g2MHYxNDNxMCAyNC0xOCA0MnQtNDIgMThIMjIwWm0yMzAtMTUzdi0zNzFMMzMwLTU2NGwtNDMtNDMgMTkzLTE5MyAxOTMgMTkzLTQzIDQzLTEyMC0xMjB2MzcxaC02MFoiIGZpbGw9IiMyMDE4QjAiLz4KPC9zdmc+", Rr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDEyQzE0LjIwOTEgMTIgMTYgMTAuMjA5MSAxNiA4QzE2IDUuNzkwODYgMTQuMjA5MSA0IDEyIDRDOS43OTA4NiA0IDggNS43OTA4NiA4IDhDOCAxMC4yMDkxIDkuNzkwODYgMTIgMTIgMTJaIiBmaWxsPSIjMzI1NjhGIi8+CjxwYXRoIGQ9Ik00IDIwQzQgMTYuNjg2MyA3LjU4MTcyIDE0IDEyIDE0QzE2LjQxODMgMTQgMjAgMTYuNjg2MyAyMCAyMEg0WiIgZmlsbD0iIzMyNTY4RiIvPgo8L3N2Zz4K", Yr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjMzNjkyIDE1Ljc2MkM1Ljk2ODQyIDE2LjAzOSA1LjYzNTgyIDE2LjM0MjkgNS4zNDQ3OSAxNi42NjkzQzQuOTc4NzQgMTcuMDc5OSA0LjY3ODQ1IDE3LjUyNjMgNC40NTUyMiAxOEM0LjE2MDQxIDE4LjYyNTYgNCAxOS4yOTg3IDQgMjBIMjBDMjAgMTkuMjk4NyAxOS44Mzk2IDE4LjYyNTYgMTkuNTQ0OCAxOEMxOS4zMjE2IDE3LjUyNjMgMTkuMDIxMyAxNy4wNzk5IDE4LjY1NTIgMTYuNjY5M0MxOC4zNjI1IDE2LjM0MSAxOC4wMjc4IDE2LjAzNTYgMTcuNjU2OSAxNS43NTc0QzE2LjIwOTUgMTQuNjcxOCAxNC4yMDk2IDE0IDEyIDE0QzkuNzkwNDEgMTQgNy43OTA1MyAxNC42NzE4IDYuMzQzMTQgMTUuNzU3NEM2LjM0MTA3IDE1Ljc1ODkgNi4zMzg5OSAxNS43NjA1IDYuMzM2OTIgMTUuNzYyWk0xMiAxNkMxMC41NTE3IDE2IDkuMjYxNDcgMTYuMzUyMyA4LjI1NTkgMTYuOTAxQzcuOTk5MDQgMTcuMDQxMiA3Ljc2MDc1IDE3LjE5NDIgNy41NDMxNSAxNy4zNTc0QzcuMjY5MjggMTcuNTYyOCA3LjAzNDQ0IDE3Ljc3ODIgNi44MzY2MiAxOEgxNy4xNjM0QzE2Ljk2NTYgMTcuNzc4MiAxNi43MzA3IDE3LjU2MjggMTYuNDU2OSAxNy4zNTc0QzE2LjIzOTIgMTcuMTk0MiAxNi4wMDA5IDE3LjA0MTIgMTUuNzQ0MSAxNi45MDFDMTQuNzM4NSAxNi4zNTIzIDEzLjQ0ODMgMTYgMTIgMTZaTTE2IDhDMTYgMTAuMjA5MSAxNC4yMDkxIDEyIDEyIDEyQzkuNzkwODYgMTIgOCAxMC4yMDkxIDggOEM4IDUuNzkwODYgOS43OTA4NiA0IDEyIDRDMTQuMjA5MSA0IDE2IDUuNzkwODYgMTYgOFpNMTIgMTBDMTMuMTA0NiAxMCAxNCA5LjEwNDU3IDE0IDhDMTQgNi44OTU0MyAxMy4xMDQ2IDYgMTIgNkMxMC44OTU0IDYgMTAgNi44OTU0MyAxMCA4QzEwIDkuMTA0NTcgMTAuODk1NCAxMCAxMiAxMFoiIGZpbGw9IiMyMDE4QjAiLz4KPC9zdmc+Cg==", Gr = l.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

  &.icon-small {
    width: 16px;
    height: 16px;
  }

  &.icon-medium {
    width: 24px;
    height: 24px;
  }

  &.icon-large {
    width: 32px;
    height: 32px;
  }
`, Ur = l.img`
  width: 100%;
  height: 100%;


  &.icon-small {
    width: 16px;
    height: 16px;
  }

  &.icon-medium {
    width: 24px;
    height: 24px;
  }

  &.icon-large {
    width: 32px;
    height: 32px;
  }
`, Br = {
  Add: jr,
  AddPicture: vr,
  ArrowBottom: Cr,
  ArrowLeft: Sr,
  ArrowRight: zr,
  ArrowTop: kr,
  ArrowTriangle: Or,
  DateFlat: Lr,
  DateLine: Pr,
  Information: Qr,
  Search: Zr,
  Upload: Kt,
  UserFlat: Rr,
  UserLine: Yr
}, m = ({ size: e = "medium", icon: t }) => {
  const n = `icon-${e} icon`, r = Br[t];
  return /* @__PURE__ */ a.createElement(Gr, { className: n }, /* @__PURE__ */ a.createElement(Ur, { src: r, alt: t }));
};
m.Add = (e) => /* @__PURE__ */ a.createElement(m, { icon: "Add", ...e });
m.AddPicture = (e) => /* @__PURE__ */ a.createElement(m, { icon: "AddPicture", ...e });
m.ArrowBottom = (e) => /* @__PURE__ */ a.createElement(m, { icon: "ArrowBottom", ...e });
m.ArrowLeft = (e) => /* @__PURE__ */ a.createElement(m, { icon: "ArrowLeft", ...e });
m.ArrowRight = (e) => /* @__PURE__ */ a.createElement(m, { icon: "ArrowRight", ...e });
m.ArrowTop = (e) => /* @__PURE__ */ a.createElement(m, { icon: "ArrowTop", ...e });
m.ArrowTriangle = (e) => /* @__PURE__ */ a.createElement(m, { icon: "ArrowTriangle", ...e });
m.DateFlat = (e) => /* @__PURE__ */ a.createElement(m, { icon: "DateFlat", ...e });
m.DateLine = (e) => /* @__PURE__ */ a.createElement(m, { icon: "DateLine", ...e });
m.Information = (e) => /* @__PURE__ */ a.createElement(m, { icon: "Information", ...e });
m.Search = (e) => /* @__PURE__ */ a.createElement(m, { icon: "Search", ...e });
m.Upload = (e) => /* @__PURE__ */ a.createElement(m, { icon: "Upload", ...e });
m.UserFlat = (e) => /* @__PURE__ */ a.createElement(m, { icon: "UserFlat", ...e });
m.UserLine = (e) => /* @__PURE__ */ a.createElement(m, { icon: "UserLine", ...e });
const Hr = l.div`
  position: relative;
  background-size: cover;
  object-fit: cover;
`, Wr = l.div`
  padding: 16px;
  gap: 16px;
  position: absolute;
  right: 0px;
  bottom: 0px;
`, Fr = l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, Vr = ({ showedit: e = !0, background: t = "https://imgs.search.brave.com/eHBodvumUFQ7TzAM2YRFjFbE9P2IB_VeLxS5-sesWlo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzc5LzY4LzI0/LzM2MF9GXzU3OTY4/MjQ3OV9qNGpSZngw/bmwzQzh2TXJUWVZh/cEZuR1A4RWdOSGdm/ay5qcGc" }) => {
  const n = t ? { backgroundImage: `url(${t})` } : {
    backgroundImage: "https://imgs.search.brave.com/eHBodvumUFQ7TzAM2YRFjFbE9P2IB_VeLxS5-sesWlo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzc5LzY4LzI0/LzM2MF9GXzU3OTY4/MjQ3OV9qNGpSZngw/bmwzQzh2TXJUWVZh/cEZuR1A4RWdOSGdm/ay5qcGc"
  };
  return /* @__PURE__ */ a.createElement(Hr, null, /* @__PURE__ */ a.createElement(ue.L1H1, null, /* @__PURE__ */ a.createElement(Fr, { src: t, style: n }), e && /* @__PURE__ */ a.createElement(Wr, null, /* @__PURE__ */ a.createElement(_.Tertiary, null, /* @__PURE__ */ a.createElement(m.AddPicture, null), "Edit"))));
}, et = ({ children: e }) => /* @__PURE__ */ a.createElement("div", null, e);
et.Small = Nr;
et.Cover = Vr;
const _r = l.div`
  min-width: 246px;
`, $r = l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, Xr = l.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`, Jr = l.div`
  display: flex;
  align-items: flex-end;
  align-self: stretch;
  justify-content: space-between;
`, Dt = l.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`, Kr = l.p`
  margin: 0;

  color: #353538;
  font-family: Co Headline;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`, qr = l.p`
  align-self: stretch;
  text-align: start;
  margin: 0;

  color: #1b1a23;
  font-family: Co Headline;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`, eo = l.p`
  align-self: stretch;
  text-align: start;
  margin: 0;

  color: #1b1a23;
  font-family: Co Headline;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`, to = l.p`
  margin: 0;

  color: #171673;
  font-family: Co Headline;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`, no = ({ media: e = "https://imgs.search.brave.com/eHBodvumUFQ7TzAM2YRFjFbE9P2IB_VeLxS5-sesWlo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzc5LzY4LzI0/LzM2MF9GXzU3OTY4/MjQ3OV9qNGpSZngw/bmwzQzh2TXJUWVZh/cEZuR1A4RWdOSGdm/ay5qcGc", title: t = "", mention: n = "", subTitle: r = "", price: o = 0 }) => /* @__PURE__ */ a.createElement(_r, null, /* @__PURE__ */ a.createElement(ue.L2H3, null, /* @__PURE__ */ a.createElement($r, { src: e, alt: e })), /* @__PURE__ */ a.createElement(Xr, null, /* @__PURE__ */ a.createElement(Dt, null, /* @__PURE__ */ a.createElement(Kr, null, n), /* @__PURE__ */ a.createElement(Jr, null, /* @__PURE__ */ a.createElement(Dt, null, /* @__PURE__ */ a.createElement(qr, null, t), /* @__PURE__ */ a.createElement(eo, null, r)), /* @__PURE__ */ a.createElement(to, null, o))))), ro = l.div`
  padding: 0px;
  width: auto;
  min-width: 246px;
`, oo = l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, io = ({ media: e = "https://imgs.search.brave.com/eHBodvumUFQ7TzAM2YRFjFbE9P2IB_VeLxS5-sesWlo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzc5LzY4LzI0/LzM2MF9GXzU3OTY4/MjQ3OV9qNGpSZngw/bmwzQzh2TXJUWVZh/cEZuR1A4RWdOSGdm/ay5qcGc" }) => /* @__PURE__ */ a.createElement(ro, null, /* @__PURE__ */ a.createElement(ue.L2H3, null, /* @__PURE__ */ a.createElement(oo, { src: e, alt: e }))), qt = ({ children: e }) => /* @__PURE__ */ a.createElement("div", null, e);
qt.Default = no;
qt.Media = io;
const ao = l.div`
  display: flex;
  align-items: center;
  justify-content: center;

`, so = l.img`
  max-height: 48px;
  max-width: 48px;
  object-fit: cover;
`, co = ({ background: e }) => /* @__PURE__ */ a.createElement(ao, null, /* @__PURE__ */ a.createElement(so, { src: e })), lo = l.form`
display: flex;
padding: 12px;
justify-content: space-between;
align-items: flex-start;
gap: 4px;

border-radius: 4px;
border: 2px solid #0F082B;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
width: 100%;
`, uo = l.input`
color: #0F082B;
font-family: Co Headline;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;

border: none;
width: 100%;
outline: none;
`, go = ({ placeholder: e, onChange: t, onSubmit: n }) => {
  const r = (o) => {
    o.preventDefault(), n && n(o);
  };
  return /* @__PURE__ */ a.createElement(lo, { onSubmit: r }, /* @__PURE__ */ a.createElement(uo, { type: "search", placeholder: e, onChange: t }), /* @__PURE__ */ a.createElement(m.Search, null));
}, Uo = ({ brand: e, logoBackground: t, avatarBackground: n, onClick: r }) => /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(co, { background: t }), /* @__PURE__ */ a.createElement(go, { placeholder: "" }), /* @__PURE__ */ a.createElement(et.Small, { background: n, onClick: r })), Bo = ({ label: e = "Information" }) => /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(m.Information, null), /* @__PURE__ */ a.createElement("p", null, e)), po = l.div`
  display: flex;
  padding: 32px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`, fo = l.h2`
  margin: 0;
  color: #000;

  font-family: Co Headline;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`, mo = l.div`
  display: flex;
  padding: 32px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border: 2px dashed #32568f;
`, ho = l.p`
  margin: 0;
  font-family: "Co Headline";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 24px;
  color: #32568f;
`, Ho = ({ title: e, label: t }) => /* @__PURE__ */ a.createElement(po, null, /* @__PURE__ */ a.createElement(fo, null, e), /* @__PURE__ */ a.createElement(mo, null, /* @__PURE__ */ a.createElement(m.Upload, null), /* @__PURE__ */ a.createElement(ho, null, t))), Mo = l.div`
display: flex;
flex-direction: column;
align-items: flex-start;

  // overflow-y: scroll;
`, yo = l.p`
margin: 0; 

color: #1B1A23;
font-family: Co Headline;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 32px;
`, Io = l.p`
margin: 0; 

color: #1B1A23;
font-family: Co Headline;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: start;
`, xo = l.div`
display: flex;
padding: 16px 0px;
flex-direction: column;
align-items: flex-start;
align-self: stretch;

max-height: 256px;
overflow-y: auto; 
`, Wo = ({ title: e, label: t }) => /* @__PURE__ */ a.createElement(Mo, null, /* @__PURE__ */ a.createElement(yo, null, e), /* @__PURE__ */ a.createElement(xo, null, /* @__PURE__ */ a.createElement(Io, null, t))), Do = l.div`
display: flex;
min-width: 0;
flex-direction: column;
align-items: flex-start;
gap: 8px;
`, No = l.label`
font-family: Co Headline;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: normal;
min-width: 0;
`, Eo = l.input`
display: flex;
padding: 12px;
justify-content: center;
align-items: flex-start;
gap: 4px;
align-self: stretch;

border-radius: 4px;
border: 2px solid #0F082B;
background: #F7F7F8;

color: #0F082B;
font-family: Co Headline;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
`, Fo = ({ label: e, placeholder: t, type: n = "text", name: r, value: o, onChange: i }) => /* @__PURE__ */ a.createElement(Do, null, /* @__PURE__ */ a.createElement(No, null, e), /* @__PURE__ */ a.createElement(Eo, { type: n, placeholder: t, name: r, value: o, onChange: i })), To = l.div`
  display: flex;
  padding: 4px;
  align-items: center;
  gap: 16px;
`, Ao = l.input`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #0f082b;
  background: #f7f7f8;

  &:hover {
    background: #f7f7f8;
  }

  &:checked:before {
    display: block;
  }
`, bo = l.label`
  color: #1b1a23;
  font-family: Co Headline;R
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  word-break: break-word;
  text-align: start;
`, Vo = ({ label: e, name: t, value: n, checked: r, onChange: o }) => {
  const i = ln();
  return /* @__PURE__ */ a.createElement(To, null, /* @__PURE__ */ a.createElement(Ao, { type: "radio", id: i, onChange: o, checked: r, name: t, value: n }), /* @__PURE__ */ a.createElement(bo, { htmlFor: i }, e));
}, wo = l.div`
  position: relative;
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`, jo = l.label`
  font-family: Co Headline;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`, vo = l.select`
  width: 100%;
  padding: 12px;
  background: #f7f7f8;
  border: 2px solid #0f082b;
  border-radius: 4px;
  font-family: "Co Headline";
  font-style: normal;
  font-size: 16px;
  color: #0f082b;
  outline: none;
`, _o = ({ label: e, options: t, name: n, value: r, onChange: o }) => /* @__PURE__ */ a.createElement(wo, null, /* @__PURE__ */ a.createElement(jo, null, e), /* @__PURE__ */ a.createElement(vo, { value: r, onChange: o, name: n }, t.map((i, s) => /* @__PURE__ */ a.createElement("option", {
  key: s,
  value: typeof i == "object" ? i.value : i
}, typeof i == "object" ? i.label : i)))), Co = l.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`, So = l.label`
  font-family: Co Headline;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`, zo = l.input`
display: flex;
padding: 12px;
justify-content: center;
align-items: flex-start;
gap: 4px;
align-self: stretch;

border-radius: 4px;
border: 2px solid #0F082B;
background: #F7F7F8;

color: #0F082B;
font-family: Co Headline;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
`, $o = ({ label: e, lang: t = "fr", value: n, name: r, onChange: o }) => /* @__PURE__ */ a.createElement(Co, null, /* @__PURE__ */ a.createElement(So, null, e), /* @__PURE__ */ a.createElement(zo, {
  lang: t,
  value: n,
  type: "date",
  name: r,
  onChange: o
})), Nt = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIGNvbG9yPSJyZWQiIGZpbGw9IiMxNzE2NzMiPgo8cGF0aCBkPSJNMjIwLTE2MHEtMjQgMC00Mi0xOHQtMTgtNDJ2LTE0M2g2MHYxNDNoNTIwdi0xNDNoNjB2MTQzcTAgMjQtMTggNDJ0LTQyIDE4SDIyMFptMjYwLTE1M0wyODctNTA2bDQzLTQzIDEyMCAxMjB2LTM3MWg2MHYzNzFsMTIwLTEyMCA0MyA0My0xOTMgMTkzWiIgZmlsbD0iIzE3MTY3MyIvPgo8L3N2Zz4=", ko = l.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  background: #f7f7f8;
  border: 2px dashed #171673;
  border-radius: 2px;
`, Oo = l.input`
  display: none;
`, Xo = ({ label: e, icon: t }) => /* @__PURE__ */ a.createElement("form", null, /* @__PURE__ */ a.createElement(ko, { htmlFor: "file-input" }, t === "left" && /* @__PURE__ */ a.createElement("img", { src: Nt, alt: "download" }), e, t === "right" && /* @__PURE__ */ a.createElement("img", { src: Nt, alt: "download" }), /* @__PURE__ */ a.createElement(Oo, { type: "file", name: "file", id: "file-input" }))), Lo = l.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;

  background: #f7f7f8;
  border: 2px dashed #171673;
  border-radius: 2px;
  width: 100%;
`, Jo = ({ label: e, name: t, acceptedExtensions: n = ".jpg,.png,.pdf" }) => {
  const r = Et(null), [o, i] = At(null), s = (c) => {
    const p = c.target.files && c.target.files[0];
    i(p);
  }, d = () => {
    r.current && r.current.click();
  };
  return /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("input", {
    type: "file",
    accept: n,
    style: { display: "none" },
    ref: r,
    onChange: s
  }), /* @__PURE__ */ a.createElement(Lo, { onClick: d, name: t }, o ? o.name : e, /* @__PURE__ */ a.createElement("img", { src: Kt, alt: "upload" })));
}, Po = l.div`
position: relative;
  display: flex;
  align-items: flex-start;
  gap: 17px;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  z-index: 1;
`, Qo = l.div`
  width: 300px;
  box-sizing: border-box;
`, Ko = ({ children: e }) => /* @__PURE__ */ a.createElement(Po, null, a.Children.map(e, (t, n) => /* @__PURE__ */ a.createElement(Qo, { key: n }, t))), Zo = async () => {
  const e = "../../popoyoko-default-variables/web/ComponentPopoyoko";
  return console.log("Final token path in browser:", e), e;
}, Ro = async () => {
  try {
    const e = await Zo();
    return console.log("Loading tokens from:", e), {
      componentTokens: (await import(`${e}.ts`)).default
    };
  } catch (e) {
    throw console.error("Error loading tokens:", e), e;
  }
}, en = dn(void 0), qo = ({ children: e }) => {
  const [t, n] = At(null);
  return un(() => {
    (async () => {
      try {
        const { componentTokens: o } = await Ro();
        n(o);
      } catch (o) {
        console.error("Error loading tokens:", o);
      }
    })();
  }, []), t ? /* @__PURE__ */ a.createElement(en.Provider, { value: { componentTokens: t } }, e) : /* @__PURE__ */ a.createElement("div", null, "Loading...");
}, Yo = () => {
  const e = Tt(en);
  if (e === void 0)
    throw new Error("useTokens must be used within a TokenProvider");
  return e;
}, ei = ({ label: e }) => {
  const { componentTokens: t } = Yo(), n = { Initial: t.ButtonPrimary.BG.Initial };
  return t ? /* @__PURE__ */ a.createElement("button", { style: { backgroundColor: n.Initial } }, e) : /* @__PURE__ */ a.createElement("p", null, "no component tokens");
};
function ti(e) {
  return {
    name: "variables-config-plugin",
    transform(t, n) {
      if (n.endsWith("loadTokensConfig.ts")) {
        const r = e.tokenPath || "../../popoyoko-default-variables/web/ComponentPopoyoko";
        console.log(`Using tokenPath from user config: ${r}`);
        const o = t.replace(/const defaultTokenPath = ["'].*?["'];/, `const defaultTokenPath = '${r}';`);
        return console.log(`Modified code:
`, o), {
          code: o,
          map: null
        };
      }
      return null;
    }
  };
}
export {
  et as Avatar,
  _ as Button,
  qt as Card,
  Uo as Header,
  m as Icon,
  Bo as Information,
  $o as InputDate,
  Xo as InputDownload,
  Vo as InputRadio,
  go as InputSearch,
  _o as InputSelect,
  Fo as InputText,
  Jo as InputUpload,
  co as Logo,
  ue as Ratio,
  Ho as Section,
  Ko as Slider,
  ei as TestButton,
  Wo as Text,
  qo as TokenProvider,
  ti as variablesConfigPlugin
};
//# sourceMappingURL=popoyoko-ui.es.js.map
