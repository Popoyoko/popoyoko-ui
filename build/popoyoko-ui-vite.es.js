import q, { useRef as Pc, useDebugValue as Iu, createElement as jc, useContext as Nc } from "react";
var Vt = function() {
  return Vt = Object.assign || function(h) {
    for (var S, E = 1, p = arguments.length; E < p; E++) {
      S = arguments[E];
      for (var A in S)
        Object.prototype.hasOwnProperty.call(S, A) && (h[A] = S[A]);
    }
    return h;
  }, Vt.apply(this, arguments);
};
function Wi(s, h, S) {
  if (S || arguments.length === 2)
    for (var E = 0, p = h.length, A; E < p; E++)
      (A || !(E in h)) && (A || (A = Array.prototype.slice.call(h, 0, E)), A[E] = h[E]);
  return s.concat(A || Array.prototype.slice.call(h));
}
function _c(s) {
  var h = /* @__PURE__ */ Object.create(null);
  return function(S) {
    return h[S] === void 0 && (h[S] = s(S)), h[S];
  };
}
var Lc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Fc = /* @__PURE__ */ _c(
  function(s) {
    return Lc.test(s) || s.charCodeAt(0) === 111 && s.charCodeAt(1) === 110 && s.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function zc(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var tt = "-ms-", Qa = "-moz-", He = "-webkit-", ic = "comm", Ks = "rule", bu = "decl", Uc = "@import", ac = "@keyframes", Bc = "@layer", Hc = Math.abs, xu = String.fromCharCode, uu = Object.assign;
function Wc(s, h) {
  return vt(s, 0) ^ 45 ? (((h << 2 ^ vt(s, 0)) << 2 ^ vt(s, 1)) << 2 ^ vt(s, 2)) << 2 ^ vt(s, 3) : 0;
}
function sc(s) {
  return s.trim();
}
function wn(s, h) {
  return (s = h.exec(s)) ? s[0] : s;
}
function Me(s, h, S) {
  return s.replace(h, S);
}
function $s(s, h) {
  return s.indexOf(h);
}
function vt(s, h) {
  return s.charCodeAt(h) | 0;
}
function Yi(s, h, S) {
  return s.slice(h, S);
}
function Yr(s) {
  return s.length;
}
function lc(s) {
  return s.length;
}
function Za(s, h) {
  return h.push(s), s;
}
function Yc(s, h) {
  return s.map(h).join("");
}
function Mu(s, h) {
  return s.filter(function(S) {
    return !wn(S, h);
  });
}
var qs = 1, Vi = 1, uc = 0, hr = 0, lt = 0, Qi = "";
function el(s, h, S, E, p, A, W, H) {
  return { value: s, root: h, parent: S, type: E, props: p, children: A, line: qs, column: Vi, length: W, return: "", siblings: H };
}
function Qn(s, h) {
  return uu(el("", null, null, "", null, null, 0, s.siblings), s, { length: -s.length }, h);
}
function Hi(s) {
  for (; s.root; )
    s = Qn(s.root, { children: [s] });
  Za(s, s.siblings);
}
function Vc() {
  return lt;
}
function $c() {
  return lt = hr > 0 ? vt(Qi, --hr) : 0, Vi--, lt === 10 && (Vi = 1, qs--), lt;
}
function Ir() {
  return lt = hr < uc ? vt(Qi, hr++) : 0, Vi++, lt === 10 && (Vi = 1, qs++), lt;
}
function zo() {
  return vt(Qi, hr);
}
function Gs() {
  return hr;
}
function tl(s, h) {
  return Yi(Qi, s, h);
}
function cu(s) {
  switch (s) {
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
function Gc(s) {
  return qs = Vi = 1, uc = Yr(Qi = s), hr = 0, [];
}
function Zc(s) {
  return Qi = "", s;
}
function Xl(s) {
  return sc(tl(hr - 1, fu(s === 91 ? s + 2 : s === 40 ? s + 1 : s)));
}
function Qc(s) {
  for (; (lt = zo()) && lt < 33; )
    Ir();
  return cu(s) > 2 || cu(lt) > 3 ? "" : " ";
}
function Xc(s, h) {
  for (; --h && Ir() && !(lt < 48 || lt > 102 || lt > 57 && lt < 65 || lt > 70 && lt < 97); )
    ;
  return tl(s, Gs() + (h < 6 && zo() == 32 && Ir() == 32));
}
function fu(s) {
  for (; Ir(); )
    switch (lt) {
      case s:
        return hr;
      case 34:
      case 39:
        s !== 34 && s !== 39 && fu(lt);
        break;
      case 40:
        s === 41 && fu(s);
        break;
      case 92:
        Ir();
        break;
    }
  return hr;
}
function Jc(s, h) {
  for (; Ir() && s + lt !== 47 + 10; )
    if (s + lt === 42 + 42 && zo() === 47)
      break;
  return "/*" + tl(h, hr - 1) + "*" + xu(s === 47 ? s : Ir());
}
function Kc(s) {
  for (; !cu(zo()); )
    Ir();
  return tl(s, hr);
}
function qc(s) {
  return Zc(Zs("", null, null, null, [""], s = Gc(s), 0, [0], s));
}
function Zs(s, h, S, E, p, A, W, H, k) {
  for (var D = 0, ne = 0, P = W, ee = 0, de = 0, le = 0, ge = 1, Q = 1, z = 1, te = 0, _ = "", Y = p, M = A, V = E, J = _; Q; )
    switch (le = te, te = Ir()) {
      case 40:
        if (le != 108 && vt(J, P - 1) == 58) {
          $s(J += Me(Xl(te), "&", "&\f"), "&\f") != -1 && (z = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        J += Xl(te);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        J += Qc(le);
        break;
      case 92:
        J += Xc(Gs() - 1, 7);
        continue;
      case 47:
        switch (zo()) {
          case 42:
          case 47:
            Za(ef(Jc(Ir(), Gs()), h, S, k), k);
            break;
          default:
            J += "/";
        }
        break;
      case 123 * ge:
        H[D++] = Yr(J) * z;
      case 125 * ge:
      case 59:
      case 0:
        switch (te) {
          case 0:
          case 125:
            Q = 0;
          case 59 + ne:
            z == -1 && (J = Me(J, /\f/g, "")), de > 0 && Yr(J) - P && Za(de > 32 ? Ru(J + ";", E, S, P - 1, k) : Ru(Me(J, " ", "") + ";", E, S, P - 2, k), k);
            break;
          case 59:
            J += ";";
          default:
            if (Za(V = Du(J, h, S, D, ne, p, H, _, Y = [], M = [], P, A), A), te === 123)
              if (ne === 0)
                Zs(J, h, V, V, Y, A, P, H, M);
              else
                switch (ee === 99 && vt(J, 3) === 110 ? 100 : ee) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Zs(s, V, V, E && Za(Du(s, V, V, 0, 0, p, H, _, p, Y = [], P, M), M), p, M, P, H, E ? Y : M);
                    break;
                  default:
                    Zs(J, V, V, V, [""], M, 0, H, M);
                }
        }
        D = ne = de = 0, ge = z = 1, _ = J = "", P = W;
        break;
      case 58:
        P = 1 + Yr(J), de = le;
      default:
        if (ge < 1) {
          if (te == 123)
            --ge;
          else if (te == 125 && ge++ == 0 && $c() == 125)
            continue;
        }
        switch (J += xu(te), te * ge) {
          case 38:
            z = ne > 0 ? 1 : (J += "\f", -1);
            break;
          case 44:
            H[D++] = (Yr(J) - 1) * z, z = 1;
            break;
          case 64:
            zo() === 45 && (J += Xl(Ir())), ee = zo(), ne = P = Yr(_ = J += Kc(Gs())), te++;
            break;
          case 45:
            le === 45 && Yr(J) == 2 && (ge = 0);
        }
    }
  return A;
}
function Du(s, h, S, E, p, A, W, H, k, D, ne, P) {
  for (var ee = p - 1, de = p === 0 ? A : [""], le = lc(de), ge = 0, Q = 0, z = 0; ge < E; ++ge)
    for (var te = 0, _ = Yi(s, ee + 1, ee = Hc(Q = W[ge])), Y = s; te < le; ++te)
      (Y = sc(Q > 0 ? de[te] + " " + _ : Me(_, /&\f/g, de[te]))) && (k[z++] = Y);
  return el(s, h, S, p === 0 ? Ks : H, k, D, ne, P);
}
function ef(s, h, S, E) {
  return el(s, h, S, ic, xu(Vc()), Yi(s, 2, -2), 0, E);
}
function Ru(s, h, S, E, p) {
  return el(s, h, S, bu, Yi(s, 0, E), Yi(s, E + 1, -1), E, p);
}
function cc(s, h, S) {
  switch (Wc(s, h)) {
    case 5103:
      return He + "print-" + s + s;
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
      return He + s + s;
    case 4789:
      return Qa + s + s;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return He + s + Qa + s + tt + s + s;
    case 5936:
      switch (vt(s, h + 11)) {
        case 114:
          return He + s + tt + Me(s, /[svh]\w+-[tblr]{2}/, "tb") + s;
        case 108:
          return He + s + tt + Me(s, /[svh]\w+-[tblr]{2}/, "tb-rl") + s;
        case 45:
          return He + s + tt + Me(s, /[svh]\w+-[tblr]{2}/, "lr") + s;
      }
    case 6828:
    case 4268:
    case 2903:
      return He + s + tt + s + s;
    case 6165:
      return He + s + tt + "flex-" + s + s;
    case 5187:
      return He + s + Me(s, /(\w+).+(:[^]+)/, He + "box-$1$2" + tt + "flex-$1$2") + s;
    case 5443:
      return He + s + tt + "flex-item-" + Me(s, /flex-|-self/g, "") + (wn(s, /flex-|baseline/) ? "" : tt + "grid-row-" + Me(s, /flex-|-self/g, "")) + s;
    case 4675:
      return He + s + tt + "flex-line-pack" + Me(s, /align-content|flex-|-self/g, "") + s;
    case 5548:
      return He + s + tt + Me(s, "shrink", "negative") + s;
    case 5292:
      return He + s + tt + Me(s, "basis", "preferred-size") + s;
    case 6060:
      return He + "box-" + Me(s, "-grow", "") + He + s + tt + Me(s, "grow", "positive") + s;
    case 4554:
      return He + Me(s, /([^-])(transform)/g, "$1" + He + "$2") + s;
    case 6187:
      return Me(Me(Me(s, /(zoom-|grab)/, He + "$1"), /(image-set)/, He + "$1"), s, "") + s;
    case 5495:
    case 3959:
      return Me(s, /(image-set\([^]*)/, He + "$1$`$1");
    case 4968:
      return Me(Me(s, /(.+:)(flex-)?(.*)/, He + "box-pack:$3" + tt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + He + s + s;
    case 4200:
      if (!wn(s, /flex-|baseline/))
        return tt + "grid-column-align" + Yi(s, h) + s;
      break;
    case 2592:
    case 3360:
      return tt + Me(s, "template-", "") + s;
    case 4384:
    case 3616:
      return S && S.some(function(E, p) {
        return h = p, wn(E.props, /grid-\w+-end/);
      }) ? ~$s(s + (S = S[h].value), "span") ? s : tt + Me(s, "-start", "") + s + tt + "grid-row-span:" + (~$s(S, "span") ? wn(S, /\d+/) : +wn(S, /\d+/) - +wn(s, /\d+/)) + ";" : tt + Me(s, "-start", "") + s;
    case 4896:
    case 4128:
      return S && S.some(function(E) {
        return wn(E.props, /grid-\w+-start/);
      }) ? s : tt + Me(Me(s, "-end", "-span"), "span ", "") + s;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Me(s, /(.+)-inline(.+)/, He + "$1$2") + s;
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
      if (Yr(s) - 1 - h > 6)
        switch (vt(s, h + 1)) {
          case 109:
            if (vt(s, h + 4) !== 45)
              break;
          case 102:
            return Me(s, /(.+:)(.+)-([^]+)/, "$1" + He + "$2-$3$1" + Qa + (vt(s, h + 3) == 108 ? "$3" : "$2-$3")) + s;
          case 115:
            return ~$s(s, "stretch") ? cc(Me(s, "stretch", "fill-available"), h, S) + s : s;
        }
      break;
    case 5152:
    case 5920:
      return Me(s, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(E, p, A, W, H, k, D) {
        return tt + p + ":" + A + D + (W ? tt + p + "-span:" + (H ? k : +k - +A) + D : "") + s;
      });
    case 4949:
      if (vt(s, h + 6) === 121)
        return Me(s, ":", ":" + He) + s;
      break;
    case 6444:
      switch (vt(s, vt(s, 14) === 45 ? 18 : 11)) {
        case 120:
          return Me(s, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + He + (vt(s, 14) === 45 ? "inline-" : "") + "box$3$1" + He + "$2$3$1" + tt + "$2box$3") + s;
        case 100:
          return Me(s, ":", ":" + tt) + s;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return Me(s, "scroll-", "scroll-snap-") + s;
  }
  return s;
}
function Xs(s, h) {
  for (var S = "", E = 0; E < s.length; E++)
    S += h(s[E], E, s, h) || "";
  return S;
}
function tf(s, h, S, E) {
  switch (s.type) {
    case Bc:
      if (s.children.length)
        break;
    case Uc:
    case bu:
      return s.return = s.return || s.value;
    case ic:
      return "";
    case ac:
      return s.return = s.value + "{" + Xs(s.children, E) + "}";
    case Ks:
      if (!Yr(s.value = s.props.join(",")))
        return "";
  }
  return Yr(S = Xs(s.children, E)) ? s.return = s.value + "{" + S + "}" : "";
}
function rf(s) {
  var h = lc(s);
  return function(S, E, p, A) {
    for (var W = "", H = 0; H < h; H++)
      W += s[H](S, E, p, A) || "";
    return W;
  };
}
function nf(s) {
  return function(h) {
    h.root || (h = h.return) && s(h);
  };
}
function of(s, h, S, E) {
  if (s.length > -1 && !s.return)
    switch (s.type) {
      case bu:
        s.return = cc(s.value, s.length, S);
        return;
      case ac:
        return Xs([Qn(s, { value: Me(s.value, "@", "@" + He) })], E);
      case Ks:
        if (s.length)
          return Yc(S = s.props, function(p) {
            switch (wn(p, E = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Hi(Qn(s, { props: [Me(p, /:(read-\w+)/, ":" + Qa + "$1")] })), Hi(Qn(s, { props: [p] })), uu(s, { props: Mu(S, E) });
                break;
              case "::placeholder":
                Hi(Qn(s, { props: [Me(p, /:(plac\w+)/, ":" + He + "input-$1")] })), Hi(Qn(s, { props: [Me(p, /:(plac\w+)/, ":" + Qa + "$1")] })), Hi(Qn(s, { props: [Me(p, /:(plac\w+)/, tt + "input-$1")] })), Hi(Qn(s, { props: [p] })), uu(s, { props: Mu(S, E) });
                break;
            }
            return "";
          });
    }
}
var af = {
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
}, Bo = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", wu = typeof window < "u" && "HTMLElement" in window, sf = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Au = /invalid hook call/i, zs = /* @__PURE__ */ new Set(), lf = function(s, h) {
  if (process.env.NODE_ENV !== "production") {
    var S = h ? ' with the id of "'.concat(h, '"') : "", E = "The component ".concat(s).concat(S, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, p = console.error;
    try {
      var A = !0;
      console.error = function(W) {
        for (var H = [], k = 1; k < arguments.length; k++)
          H[k - 1] = arguments[k];
        Au.test(W) ? (A = !1, zs.delete(E)) : p.apply(void 0, Wi([W], H, !1));
      }, Pc(), A && !zs.has(E) && (console.warn(E), zs.add(E));
    } catch (W) {
      Au.test(W.message) && zs.delete(E);
    } finally {
      console.error = p;
    }
  }
}, rl = Object.freeze([]), $i = Object.freeze({});
function uf(s, h, S) {
  return S === void 0 && (S = $i), s.theme !== S.theme && s.theme || h || S.theme;
}
var du = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), cf = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ff = /(^-|-$)/g;
function Ou(s) {
  return s.replace(cf, "-").replace(ff, "");
}
var df = /(a)(d)/gi, Pu = function(s) {
  return String.fromCharCode(s + (s > 25 ? 39 : 97));
};
function pu(s) {
  var h, S = "";
  for (h = Math.abs(s); h > 52; h = h / 52 | 0)
    S = Pu(h % 52) + S;
  return (Pu(h % 52) + S).replace(df, "$1-$2");
}
var Jl, Lo = function(s, h) {
  for (var S = h.length; S; )
    s = 33 * s ^ h.charCodeAt(--S);
  return s;
}, fc = function(s) {
  return Lo(5381, s);
};
function pf(s) {
  return pu(fc(s) >>> 0);
}
function dc(s) {
  return process.env.NODE_ENV !== "production" && typeof s == "string" && s || s.displayName || s.name || "Component";
}
function Kl(s) {
  return typeof s == "string" && (process.env.NODE_ENV === "production" || s.charAt(0) === s.charAt(0).toLowerCase());
}
var pc = typeof Symbol == "function" && Symbol.for, hc = pc ? Symbol.for("react.memo") : 60115, hf = pc ? Symbol.for("react.forward_ref") : 60112, gf = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, vf = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, gc = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, mf = ((Jl = {})[hf] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Jl[hc] = gc, Jl);
function ju(s) {
  return ("type" in (h = s) && h.type.$$typeof) === hc ? gc : "$$typeof" in s ? mf[s.$$typeof] : gf;
  var h;
}
var yf = Object.defineProperty, Sf = Object.getOwnPropertyNames, Nu = Object.getOwnPropertySymbols, bf = Object.getOwnPropertyDescriptor, xf = Object.getPrototypeOf, _u = Object.prototype;
function vc(s, h, S) {
  if (typeof h != "string") {
    if (_u) {
      var E = xf(h);
      E && E !== _u && vc(s, E, S);
    }
    var p = Sf(h);
    Nu && (p = p.concat(Nu(h)));
    for (var A = ju(s), W = ju(h), H = 0; H < p.length; ++H) {
      var k = p[H];
      if (!(k in vf || S && S[k] || W && k in W || A && k in A)) {
        var D = bf(h, k);
        try {
          yf(s, k, D);
        } catch {
        }
      }
    }
  }
  return s;
}
function Gi(s) {
  return typeof s == "function";
}
function Tu(s) {
  return typeof s == "object" && "styledComponentId" in s;
}
function Fo(s, h) {
  return s && h ? "".concat(s, " ").concat(h) : s || h || "";
}
function Lu(s, h) {
  if (s.length === 0)
    return "";
  for (var S = s[0], E = 1; E < s.length; E++)
    S += h ? h + s[E] : s[E];
  return S;
}
function Zi(s) {
  return s !== null && typeof s == "object" && s.constructor.name === Object.name && !("props" in s && s.$$typeof);
}
function hu(s, h, S) {
  if (S === void 0 && (S = !1), !S && !Zi(s) && !Array.isArray(s))
    return h;
  if (Array.isArray(h))
    for (var E = 0; E < h.length; E++)
      s[E] = hu(s[E], h[E]);
  else if (Zi(h))
    for (var E in h)
      s[E] = hu(s[E], h[E]);
  return s;
}
function Eu(s, h) {
  Object.defineProperty(s, "toString", { value: h });
}
var wf = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Tf() {
  for (var s = [], h = 0; h < arguments.length; h++)
    s[h] = arguments[h];
  for (var S = s[0], E = [], p = 1, A = s.length; p < A; p += 1)
    E.push(s[p]);
  return E.forEach(function(W) {
    S = S.replace(/%[a-z]/, W);
  }), S;
}
function Xi(s) {
  for (var h = [], S = 1; S < arguments.length; S++)
    h[S - 1] = arguments[S];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(s, " for more information.").concat(h.length > 0 ? " Args: ".concat(h.join(", ")) : "")) : new Error(Tf.apply(void 0, Wi([wf[s]], h, !1)).trim());
}
var Ef = function() {
  function s(h) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = h;
  }
  return s.prototype.indexOfGroup = function(h) {
    for (var S = 0, E = 0; E < h; E++)
      S += this.groupSizes[E];
    return S;
  }, s.prototype.insertRules = function(h, S) {
    if (h >= this.groupSizes.length) {
      for (var E = this.groupSizes, p = E.length, A = p; h >= A; )
        if ((A <<= 1) < 0)
          throw Xi(16, "".concat(h));
      this.groupSizes = new Uint32Array(A), this.groupSizes.set(E), this.length = A;
      for (var W = p; W < A; W++)
        this.groupSizes[W] = 0;
    }
    for (var H = this.indexOfGroup(h + 1), k = (W = 0, S.length); W < k; W++)
      this.tag.insertRule(H, S[W]) && (this.groupSizes[h]++, H++);
  }, s.prototype.clearGroup = function(h) {
    if (h < this.length) {
      var S = this.groupSizes[h], E = this.indexOfGroup(h), p = E + S;
      this.groupSizes[h] = 0;
      for (var A = E; A < p; A++)
        this.tag.deleteRule(E);
    }
  }, s.prototype.getGroup = function(h) {
    var S = "";
    if (h >= this.length || this.groupSizes[h] === 0)
      return S;
    for (var E = this.groupSizes[h], p = this.indexOfGroup(h), A = p + E, W = p; W < A; W++)
      S += "".concat(this.tag.getRule(W)).concat(`/*!sc*/
`);
    return S;
  }, s;
}(), Qs = /* @__PURE__ */ new Map(), Js = /* @__PURE__ */ new Map(), ql = 1, Us = function(s) {
  if (Qs.has(s))
    return Qs.get(s);
  for (; Js.has(ql); )
    ql++;
  var h = ql++;
  if (process.env.NODE_ENV !== "production" && ((0 | h) < 0 || h > 1073741824))
    throw Xi(16, "".concat(h));
  return Qs.set(s, h), Js.set(h, s), h;
}, kf = function(s, h) {
  Qs.set(s, h), Js.set(h, s);
}, Cf = "style[".concat(Bo, "][").concat("data-styled-version", '="').concat("6.0.7", '"]'), If = new RegExp("^".concat(Bo, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Mf = function(s, h, S) {
  for (var E, p = S.split(","), A = 0, W = p.length; A < W; A++)
    (E = p[A]) && s.registerName(h, E);
}, Df = function(s, h) {
  for (var S, E = ((S = h.textContent) !== null && S !== void 0 ? S : "").split(`/*!sc*/
`), p = [], A = 0, W = E.length; A < W; A++) {
    var H = E[A].trim();
    if (H) {
      var k = H.match(If);
      if (k) {
        var D = 0 | parseInt(k[1], 10), ne = k[2];
        D !== 0 && (kf(ne, D), Mf(s, ne, k[3]), s.getTag().insertRules(D, p)), p.length = 0;
      } else
        p.push(H);
    }
  }
};
function Rf() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var mc = function(s) {
  var h = document.head, S = s || h, E = document.createElement("style"), p = function(H) {
    var k = Array.from(H.querySelectorAll("style[".concat(Bo, "]")));
    return k[k.length - 1];
  }(S), A = p !== void 0 ? p.nextSibling : null;
  E.setAttribute(Bo, "active"), E.setAttribute("data-styled-version", "6.0.7");
  var W = Rf();
  return W && E.setAttribute("nonce", W), S.insertBefore(E, A), E;
}, Af = function() {
  function s(h) {
    this.element = mc(h), this.element.appendChild(document.createTextNode("")), this.sheet = function(S) {
      if (S.sheet)
        return S.sheet;
      for (var E = document.styleSheets, p = 0, A = E.length; p < A; p++) {
        var W = E[p];
        if (W.ownerNode === S)
          return W;
      }
      throw Xi(17);
    }(this.element), this.length = 0;
  }
  return s.prototype.insertRule = function(h, S) {
    try {
      return this.sheet.insertRule(S, h), this.length++, !0;
    } catch {
      return !1;
    }
  }, s.prototype.deleteRule = function(h) {
    this.sheet.deleteRule(h), this.length--;
  }, s.prototype.getRule = function(h) {
    var S = this.sheet.cssRules[h];
    return S && S.cssText ? S.cssText : "";
  }, s;
}(), Of = function() {
  function s(h) {
    this.element = mc(h), this.nodes = this.element.childNodes, this.length = 0;
  }
  return s.prototype.insertRule = function(h, S) {
    if (h <= this.length && h >= 0) {
      var E = document.createTextNode(S);
      return this.element.insertBefore(E, this.nodes[h] || null), this.length++, !0;
    }
    return !1;
  }, s.prototype.deleteRule = function(h) {
    this.element.removeChild(this.nodes[h]), this.length--;
  }, s.prototype.getRule = function(h) {
    return h < this.length ? this.nodes[h].textContent : "";
  }, s;
}(), Pf = function() {
  function s(h) {
    this.rules = [], this.length = 0;
  }
  return s.prototype.insertRule = function(h, S) {
    return h <= this.length && (this.rules.splice(h, 0, S), this.length++, !0);
  }, s.prototype.deleteRule = function(h) {
    this.rules.splice(h, 1), this.length--;
  }, s.prototype.getRule = function(h) {
    return h < this.length ? this.rules[h] : "";
  }, s;
}(), Fu = wu, jf = { isServer: !wu, useCSSOMInjection: !sf }, yc = function() {
  function s(h, S, E) {
    h === void 0 && (h = $i), S === void 0 && (S = {});
    var p = this;
    this.options = Vt(Vt({}, jf), h), this.gs = S, this.names = new Map(E), this.server = !!h.isServer, !this.server && wu && Fu && (Fu = !1, function(A) {
      for (var W = document.querySelectorAll(Cf), H = 0, k = W.length; H < k; H++) {
        var D = W[H];
        D && D.getAttribute(Bo) !== "active" && (Df(A, D), D.parentNode && D.parentNode.removeChild(D));
      }
    }(this)), Eu(this, function() {
      return function(A) {
        for (var W = A.getTag(), H = W.length, k = "", D = function(P) {
          var ee = function(z) {
            return Js.get(z);
          }(P);
          if (ee === void 0)
            return "continue";
          var de = A.names.get(ee), le = W.getGroup(P);
          if (de === void 0 || le.length === 0)
            return "continue";
          var ge = "".concat(Bo, ".g").concat(P, '[id="').concat(ee, '"]'), Q = "";
          de !== void 0 && de.forEach(function(z) {
            z.length > 0 && (Q += "".concat(z, ","));
          }), k += "".concat(le).concat(ge, '{content:"').concat(Q, '"}').concat(`/*!sc*/
`);
        }, ne = 0; ne < H; ne++)
          D(ne);
        return k;
      }(p);
    });
  }
  return s.registerId = function(h) {
    return Us(h);
  }, s.prototype.reconstructWithOptions = function(h, S) {
    return S === void 0 && (S = !0), new s(Vt(Vt({}, this.options), h), this.gs, S && this.names || void 0);
  }, s.prototype.allocateGSInstance = function(h) {
    return this.gs[h] = (this.gs[h] || 0) + 1;
  }, s.prototype.getTag = function() {
    return this.tag || (this.tag = (h = function(S) {
      var E = S.useCSSOMInjection, p = S.target;
      return S.isServer ? new Pf(p) : E ? new Af(p) : new Of(p);
    }(this.options), new Ef(h)));
    var h;
  }, s.prototype.hasNameForId = function(h, S) {
    return this.names.has(h) && this.names.get(h).has(S);
  }, s.prototype.registerName = function(h, S) {
    if (Us(h), this.names.has(h))
      this.names.get(h).add(S);
    else {
      var E = /* @__PURE__ */ new Set();
      E.add(S), this.names.set(h, E);
    }
  }, s.prototype.insertRules = function(h, S, E) {
    this.registerName(h, S), this.getTag().insertRules(Us(h), E);
  }, s.prototype.clearNames = function(h) {
    this.names.has(h) && this.names.get(h).clear();
  }, s.prototype.clearRules = function(h) {
    this.getTag().clearGroup(Us(h)), this.clearNames(h);
  }, s.prototype.clearTag = function() {
    this.tag = void 0;
  }, s;
}(), Nf = /&/g, _f = /^\s*\/\/.*$/gm;
function Sc(s, h) {
  return s.map(function(S) {
    return S.type === "rule" && (S.value = "".concat(h, " ").concat(S.value), S.value = S.value.replaceAll(",", ",".concat(h, " ")), S.props = S.props.map(function(E) {
      return "".concat(h, " ").concat(E);
    })), Array.isArray(S.children) && S.type !== "@keyframes" && (S.children = Sc(S.children, h)), S;
  });
}
function Lf(s) {
  var h, S, E, p = s === void 0 ? $i : s, A = p.options, W = A === void 0 ? $i : A, H = p.plugins, k = H === void 0 ? rl : H, D = function(ee, de, le) {
    return le === S || le.startsWith(S) && le.endsWith(S) && le.replaceAll(S, "").length > 0 ? ".".concat(h) : ee;
  }, ne = k.slice();
  ne.push(function(ee) {
    ee.type === Ks && ee.value.includes("&") && (ee.props[0] = ee.props[0].replace(Nf, S).replace(E, D));
  }), W.prefix && ne.push(of), ne.push(tf);
  var P = function(ee, de, le, ge) {
    de === void 0 && (de = ""), le === void 0 && (le = ""), ge === void 0 && (ge = "&"), h = ge, S = de, E = new RegExp("\\".concat(S, "\\b"), "g");
    var Q = ee.replace(_f, ""), z = qc(le || de ? "".concat(le, " ").concat(de, " { ").concat(Q, " }") : Q);
    W.namespace && (z = Sc(z, W.namespace));
    var te = [];
    return Xs(z, rf(ne.concat(nf(function(_) {
      return te.push(_);
    })))), te;
  };
  return P.hash = k.length ? k.reduce(function(ee, de) {
    return de.name || Xi(15), Lo(ee, de.name);
  }, 5381).toString() : "", P;
}
var Ff = new yc(), gu = Lf(), bc = q.createContext({ shouldForwardProp: void 0, styleSheet: Ff, stylis: gu });
bc.Consumer;
q.createContext(void 0);
function zu() {
  return Nc(bc);
}
var Uu = function() {
  function s(h, S) {
    var E = this;
    this.inject = function(p, A) {
      A === void 0 && (A = gu);
      var W = E.name + A.hash;
      p.hasNameForId(E.id, W) || p.insertRules(E.id, W, A(E.rules, W, "@keyframes"));
    }, this.name = h, this.id = "sc-keyframes-".concat(h), this.rules = S, Eu(this, function() {
      throw Xi(12, String(E.name));
    });
  }
  return s.prototype.getName = function(h) {
    return h === void 0 && (h = gu), this.name + h.hash;
  }, s;
}(), zf = function(s) {
  return s >= "A" && s <= "Z";
};
function Bu(s) {
  for (var h = "", S = 0; S < s.length; S++) {
    var E = s[S];
    if (S === 1 && E === "-" && s[0] === "-")
      return s;
    zf(E) ? h += "-" + E.toLowerCase() : h += E;
  }
  return h.startsWith("ms-") ? "-" + h : h;
}
var xc = function(s) {
  return s == null || s === !1 || s === "";
}, wc = function(s) {
  var h, S, E = [];
  for (var p in s) {
    var A = s[p];
    s.hasOwnProperty(p) && !xc(A) && (Array.isArray(A) && A.isCss || Gi(A) ? E.push("".concat(Bu(p), ":"), A, ";") : Zi(A) ? E.push.apply(E, Wi(Wi(["".concat(p, " {")], wc(A), !1), ["}"], !1)) : E.push("".concat(Bu(p), ": ").concat((h = p, (S = A) == null || typeof S == "boolean" || S === "" ? "" : typeof S != "number" || S === 0 || h in af || h.startsWith("--") ? String(S).trim() : "".concat(S, "px")), ";")));
  }
  return E;
};
function Uo(s, h, S, E) {
  if (xc(s))
    return [];
  if (Tu(s))
    return [".".concat(s.styledComponentId)];
  if (Gi(s)) {
    if (!Gi(A = s) || A.prototype && A.prototype.isReactComponent || !h)
      return [s];
    var p = s(h);
    return process.env.NODE_ENV === "production" || typeof p != "object" || Array.isArray(p) || p instanceof Uu || Zi(p) || p === null || console.error("".concat(dc(s), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Uo(p, h, S, E);
  }
  var A;
  return s instanceof Uu ? S ? (s.inject(S, E), [s.getName(E)]) : [s] : Zi(s) ? wc(s) : Array.isArray(s) ? Array.prototype.concat.apply(rl, s.map(function(W) {
    return Uo(W, h, S, E);
  })) : [s.toString()];
}
function Uf(s) {
  for (var h = 0; h < s.length; h += 1) {
    var S = s[h];
    if (Gi(S) && !Tu(S))
      return !1;
  }
  return !0;
}
var Bf = fc("6.0.7"), Hf = function() {
  function s(h, S, E) {
    this.rules = h, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (E === void 0 || E.isStatic) && Uf(h), this.componentId = S, this.baseHash = Lo(Bf, S), this.baseStyle = E, yc.registerId(S);
  }
  return s.prototype.generateAndInjectStyles = function(h, S, E) {
    var p = this.baseStyle ? this.baseStyle.generateAndInjectStyles(h, S, E) : "";
    if (this.isStatic && !E.hash)
      if (this.staticRulesId && S.hasNameForId(this.componentId, this.staticRulesId))
        p = Fo(p, this.staticRulesId);
      else {
        var A = Lu(Uo(this.rules, h, S, E)), W = pu(Lo(this.baseHash, A) >>> 0);
        if (!S.hasNameForId(this.componentId, W)) {
          var H = E(A, ".".concat(W), void 0, this.componentId);
          S.insertRules(this.componentId, W, H);
        }
        p = Fo(p, W), this.staticRulesId = W;
      }
    else {
      for (var k = Lo(this.baseHash, E.hash), D = "", ne = 0; ne < this.rules.length; ne++) {
        var P = this.rules[ne];
        if (typeof P == "string")
          D += P, process.env.NODE_ENV !== "production" && (k = Lo(k, P));
        else if (P) {
          var ee = Lu(Uo(P, h, S, E));
          k = Lo(k, ee), D += ee;
        }
      }
      if (D) {
        var de = pu(k >>> 0);
        S.hasNameForId(this.componentId, de) || S.insertRules(this.componentId, de, E(D, ".".concat(de), void 0, this.componentId)), p = Fo(p, de);
      }
    }
    return p;
  }, s;
}(), Tc = q.createContext(void 0);
Tc.Consumer;
var eu = {}, Hu = /* @__PURE__ */ new Set();
function Wf(s, h, S) {
  var E = Tu(s), p = s, A = !Kl(s), W = h.attrs, H = W === void 0 ? rl : W, k = h.componentId, D = k === void 0 ? function(Y, M) {
    var V = typeof Y != "string" ? "sc" : Ou(Y);
    eu[V] = (eu[V] || 0) + 1;
    var J = "".concat(V, "-").concat(pf("6.0.7" + V + eu[V]));
    return M ? "".concat(M, "-").concat(J) : J;
  }(h.displayName, h.parentComponentId) : k, ne = h.displayName, P = ne === void 0 ? function(Y) {
    return Kl(Y) ? "styled.".concat(Y) : "Styled(".concat(dc(Y), ")");
  }(s) : ne, ee = h.displayName && h.componentId ? "".concat(Ou(h.displayName), "-").concat(h.componentId) : h.componentId || D, de = E && p.attrs ? p.attrs.concat(H).filter(Boolean) : H, le = h.shouldForwardProp;
  if (E && p.shouldForwardProp) {
    var ge = p.shouldForwardProp;
    if (h.shouldForwardProp) {
      var Q = h.shouldForwardProp;
      le = function(Y, M) {
        return ge(Y, M) && Q(Y, M);
      };
    } else
      le = ge;
  }
  var z = new Hf(S, ee, E ? p.componentStyle : void 0);
  function te(Y, M) {
    return function(V, J, Ie) {
      var ue = V.attrs, Oe = V.componentStyle, Pe = V.defaultProps, Ye = V.foldedComponentIds, it = V.styledComponentId, Je = V.target, pt = q.useContext(Tc), Ke = zu(), Ze = V.shouldForwardProp || Ke.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Iu(it);
      var Ne = function(pe, ae, se) {
        for (var ve, Se = Vt(Vt({}, ae), { className: void 0, theme: se }), be = 0; be < pe.length; be += 1) {
          var he = Gi(ve = pe[be]) ? ve(Se) : ve;
          for (var Te in he)
            Se[Te] = Te === "className" ? Fo(Se[Te], he[Te]) : Te === "style" ? Vt(Vt({}, Se[Te]), he[Te]) : he[Te];
        }
        return ae.className && (Se.className = Fo(Se.className, ae.className)), Se;
      }(ue, J, uf(J, pt, Pe) || $i), _e = Ne.as || Je, Z = {};
      for (var G in Ne)
        Ne[G] === void 0 || G[0] === "$" || G === "as" || G === "theme" || (G === "forwardedAs" ? Z.as = Ne.forwardedAs : Ze && !Ze(G, _e) || (Z[G] = Ne[G], Ze || process.env.NODE_ENV !== "development" || Fc(G) || Hu.has(G) || !du.has(_e) || (Hu.add(G), console.warn('styled-components: it looks like an unknown prop "'.concat(G, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var oe = function(pe, ae) {
        var se = zu(), ve = pe.generateAndInjectStyles(ae, se.styleSheet, se.stylis);
        return process.env.NODE_ENV !== "production" && Iu(ve), ve;
      }(Oe, Ne);
      process.env.NODE_ENV !== "production" && V.warnTooManyClasses && V.warnTooManyClasses(oe);
      var ye = Fo(Ye, it);
      return oe && (ye += " " + oe), Ne.className && (ye += " " + Ne.className), Z[Kl(_e) && !du.has(_e) ? "class" : "className"] = ye, Z.ref = Ie, jc(_e, Z);
    }(_, Y, M);
  }
  process.env.NODE_ENV !== "production" && (te.displayName = P);
  var _ = q.forwardRef(te);
  return _.attrs = de, _.componentStyle = z, _.shouldForwardProp = le, process.env.NODE_ENV !== "production" && (_.displayName = P), _.foldedComponentIds = E ? Fo(p.foldedComponentIds, p.styledComponentId) : "", _.styledComponentId = ee, _.target = E ? p.target : s, Object.defineProperty(_, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(Y) {
    this._foldedDefaultProps = E ? function(M) {
      for (var V = [], J = 1; J < arguments.length; J++)
        V[J - 1] = arguments[J];
      for (var Ie = 0, ue = V; Ie < ue.length; Ie++)
        hu(M, ue[Ie], !0);
      return M;
    }({}, p.defaultProps, Y) : Y;
  } }), process.env.NODE_ENV !== "production" && (lf(P, ee), _.warnTooManyClasses = function(Y, M) {
    var V = {}, J = !1;
    return function(Ie) {
      if (!J && (V[Ie] = !0, Object.keys(V).length >= 200)) {
        var ue = M ? ' with the id of "'.concat(M, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(Y).concat(ue, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), J = !0, V = {};
      }
    };
  }(P, ee)), Eu(_, function() {
    return ".".concat(_.styledComponentId);
  }), A && vc(_, s, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), _;
}
function Wu(s, h) {
  for (var S = [s[0]], E = 0, p = h.length; E < p; E += 1)
    S.push(h[E], s[E + 1]);
  return S;
}
var Yu = function(s) {
  return Object.assign(s, { isCss: !0 });
};
function Yf(s) {
  for (var h = [], S = 1; S < arguments.length; S++)
    h[S - 1] = arguments[S];
  if (Gi(s) || Zi(s)) {
    var E = s;
    return Yu(Uo(Wu(rl, Wi([E], h, !0))));
  }
  var p = s;
  return h.length === 0 && p.length === 1 && typeof p[0] == "string" ? Uo(p) : Yu(Uo(Wu(p, h)));
}
function vu(s, h, S) {
  if (S === void 0 && (S = $i), !h)
    throw Xi(1, h);
  var E = function(p) {
    for (var A = [], W = 1; W < arguments.length; W++)
      A[W - 1] = arguments[W];
    return s(h, S, Yf.apply(void 0, Wi([p], A, !1)));
  };
  return E.attrs = function(p) {
    return vu(s, h, Vt(Vt({}, S), { attrs: Array.prototype.concat(S.attrs, p).filter(Boolean) }));
  }, E.withConfig = function(p) {
    return vu(s, h, Vt(Vt({}, S), p));
  }, E;
}
var Ec = function(s) {
  return vu(Wf, s);
}, Fe = Ec;
du.forEach(function(s) {
  Fe[s] = Ec(s);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Bs = "__sc-".concat(Bo, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Bs] || (window[Bs] = 0), window[Bs] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Bs] += 1);
const Vf = Fe.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 1024px;
  background-size: cover;
  object-fit: cover;
`, $f = Fe.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 12px;
  height: 12px;
  background: #2018B0;
  border-radius: 1024px;
`, Gf = ({ showbadge: s = !0, background: h = "url(https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg)" }) => {
  const S = h ? { backgroundImage: `url(${h})` } : {
    backgroundImage: "url(https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg)"
  };
  return /* @__PURE__ */ q.createElement(Vf, null, /* @__PURE__ */ q.createElement("img", {
    className: "small",
    src: h,
    style: S
  }), s && /* @__PURE__ */ q.createElement($f, null));
}, Hs = Fe.button`
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
    background-color: #191cb1;
    color: #eeebff;
    border: none;
    border-radius: 2px;
    font-family: serif;

    &:hover {
      background-color: #0023fc;
      color: #d9ccff;
    }

    &:active {
      background-color: #171673;
      color: #f5f6ff;
    }

    &:disabled {
      background-color: rgba(0, 35, 252, 0.19);
      color: rgba(0, 35, 252, 0.29);
    }
  }

  /* Styles pour le bouton secondary */
  &.secondary {
    background: #f8f8f8;
    border: 2px solid #171673;
    border-radius: 2px;
    color: #171673;

    &:hover {
      background: #ffffff;
      border: 2px solid #191CB1;
      color: #191CB1;
    }

    &:active {
      background: #e4e4e4;
      border: 2px solid #111046;
      color: #111046;
    }

    &:disabled {
      border-radius: 2px;
      border: 2px dashed rgba(0, 35, 252, 0.11);
      background: rgba(112, 112, 119, 0.11);
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
      border: 2px #ffffff;
    }

    &:active {
      background: #e4e4e4;
      border: 2px dashed #153f33;
      color: #153f33;
    }

    &:disabled {
      background: rgba(119, 119, 119, 0.11);
      border: 2px dashed rgba(33, 193, 103, 0.11);
      color: rgba(33, 193, 103, 0.11);
    }
  }
`, tu = Fe.span`
font-family: Co Headline;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: normal;
`, Ho = ({ type: s = "primary", label: h, typeSvg: S, srcIcon: E }) => {
  if (S === "none")
    return /* @__PURE__ */ q.createElement(Hs, { className: s }, /* @__PURE__ */ q.createElement(tu, null, h));
  if (S === "left")
    return /* @__PURE__ */ q.createElement(Hs, { className: s }, /* @__PURE__ */ q.createElement("img", { src: E, alt: "Icon" }), /* @__PURE__ */ q.createElement(tu, null, h));
  if (S === "right")
    return /* @__PURE__ */ q.createElement(Hs, { className: s }, /* @__PURE__ */ q.createElement(tu, null, h), /* @__PURE__ */ q.createElement("img", { src: E, alt: "Icon" }));
  if (S === "only")
    return /* @__PURE__ */ q.createElement(Hs, { className: s }, /* @__PURE__ */ q.createElement("img", { src: E, alt: "Icon" }));
};
Ho.Primary = (s) => /* @__PURE__ */ q.createElement(Ho, { type: "primary", ...s });
Ho.Secondary = (s) => /* @__PURE__ */ q.createElement(Ho, { type: "secondary", ...s });
Ho.Tertiary = (s) => /* @__PURE__ */ q.createElement(Ho, { type: "tertiary", ...s });
const Zf = Fe.div`
  position: relative;
  overflow: hidden;
`, Qf = Fe(Zf)`
  aspect-ratio: 1 / 1;
`, kc = ({ children: s }) => /* @__PURE__ */ q.createElement(Qf, null, s);
kc.defaultProps = {
  children: null
};
const Xf = Fe.div`
  position: relative;
  overflow: hidden;
`, Jf = Fe(Xf)`
  aspect-ratio: 3 / 2;
`, Cc = ({ children: s }) => /* @__PURE__ */ q.createElement(Jf, null, s);
Cc.defaultProps = {
  children: null
};
const Xa = ({ children: s }) => /* @__PURE__ */ q.createElement("div", null, s);
Xa.L1H1 = kc;
Xa.L2H3 = Cc;
const Kf = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxOSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjU2MzMgMEg1LjQzNjc0TDMuNzcwMDcgMi43NUgwVjEzSDRWMTFIMlY0Ljc1SDQuODk2NTlMNi41NjMyNiAySDEwLjQzNjdMMTIuMTAzNCA0Ljc1SDE1VjdIMTdWMi43NUgxMy4yMjk5TDExLjU2MzMgMFoiIGZpbGw9IiMxQjYwNDIiLz4KPHBhdGggZD0iTTE1IDE1VjEzSDEzVjExSDE1VjlIMTdWMTFIMTlWMTNIMTdWMTVIMTVaIiBmaWxsPSIjMUI2MDQyIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMgOC41QzEzIDEwLjk4NTMgMTAuOTg1MyAxMyA4LjUgMTNDNi4wMTQ3MiAxMyA0IDEwLjk4NTMgNCA4LjVDNCA2LjAxNDcyIDYuMDE0NzIgNCA4LjUgNEMxMC45ODUzIDQgMTMgNi4wMTQ3MiAxMyA4LjVaTTExIDguNUMxMSA5Ljg4MDcxIDkuODgwNzEgMTEgOC41IDExQzcuMTE5MjkgMTEgNiA5Ljg4MDcxIDYgOC41QzYgNy4xMTkyOSA3LjExOTI5IDYgOC41IDZDOS44ODA3MSA2IDExIDcuMTE5MjkgMTEgOC41WiIgZmlsbD0iIzFCNjA0MiIvPgo8L3N2Zz4K", qf = Fe.div`
  position: relative;
  width: 256px;
  height: 256px;
  background-size: cover;
  object-fit: cover;
`, ed = Fe.div`
  padding: 16px;
  gap: 16px;
  position: absolute;
  right: 0px;
  bottom: 0px;
`, td = Fe.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, rd = ({ showedit: s = !0, background: h = "url(https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg)" }) => {
  const S = h ? { backgroundImage: `url(${h})` } : {
    backgroundImage: "url(https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg)"
  };
  return /* @__PURE__ */ q.createElement(qf, null, /* @__PURE__ */ q.createElement(Xa.L1H1, null, /* @__PURE__ */ q.createElement(td, { src: h, style: S }), s && /* @__PURE__ */ q.createElement(ed, null, /* @__PURE__ */ q.createElement(Ho.Tertiary, { typeSvg: "right", label: "Edit", srcIcon: Kf }))));
}, ku = ({ children: s }) => /* @__PURE__ */ q.createElement("div", null, s);
ku.Small = Gf;
ku.Cover = rd;
const nd = Fe.div`
  .card {
    padding: 0;
    width: auto;
  }

  .card-section {
    width: 100%;
  }

  .card-group {
    padding: 16px;
  }

  .card-information {
    display: flex;
    align-items: flex-end;
  }

  .card-title {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  p {
    text-align: start;
    margin: 0;
  }
`, od = ({ label: s = "", mention: h = "", subTitle: S = "", price: E = 0 }) => /* @__PURE__ */ q.createElement(nd, null, /* @__PURE__ */ q.createElement("div", { className: "card" }, /* @__PURE__ */ q.createElement(Xa.L2H3, null)), /* @__PURE__ */ q.createElement("div", { className: "card-section" }, /* @__PURE__ */ q.createElement("div", { className: "card-group" }, /* @__PURE__ */ q.createElement("p", null, h), /* @__PURE__ */ q.createElement("div", { className: "card-information" }, /* @__PURE__ */ q.createElement("div", { className: "card-title" }, /* @__PURE__ */ q.createElement("p", null, s), /* @__PURE__ */ q.createElement("p", null, S)), E)))), id = Fe.div`
  padding: 0px;
  width: auto;
`, ad = () => /* @__PURE__ */ q.createElement(id, null, /* @__PURE__ */ q.createElement(Xa.L2H3, null)), Ic = ({ children: s }) => /* @__PURE__ */ q.createElement("div", null, s);
Ic.Default = od;
Ic.Media = ad;
const sd = Fe.div`
  height: 32px;
  width: 32px;
  background: #D9D9D9;
  display: flex;
`, ld = Fe.img`
  max-height: 32px;
  max-width: 32px;
`, ud = ({ src: s }) => /* @__PURE__ */ q.createElement(sd, null, /* @__PURE__ */ q.createElement(ld, { src: s }));
var mu = { exports: {} }, yu = { exports: {} }, Ws = { exports: {} }, Ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vu;
function cd() {
  if (Vu)
    return Ue;
  Vu = 1;
  var s = typeof Symbol == "function" && Symbol.for, h = s ? Symbol.for("react.element") : 60103, S = s ? Symbol.for("react.portal") : 60106, E = s ? Symbol.for("react.fragment") : 60107, p = s ? Symbol.for("react.strict_mode") : 60108, A = s ? Symbol.for("react.profiler") : 60114, W = s ? Symbol.for("react.provider") : 60109, H = s ? Symbol.for("react.context") : 60110, k = s ? Symbol.for("react.async_mode") : 60111, D = s ? Symbol.for("react.concurrent_mode") : 60111, ne = s ? Symbol.for("react.forward_ref") : 60112, P = s ? Symbol.for("react.suspense") : 60113, ee = s ? Symbol.for("react.suspense_list") : 60120, de = s ? Symbol.for("react.memo") : 60115, le = s ? Symbol.for("react.lazy") : 60116, ge = s ? Symbol.for("react.block") : 60121, Q = s ? Symbol.for("react.fundamental") : 60117, z = s ? Symbol.for("react.responder") : 60118, te = s ? Symbol.for("react.scope") : 60119;
  function _(M) {
    if (typeof M == "object" && M !== null) {
      var V = M.$$typeof;
      switch (V) {
        case h:
          switch (M = M.type, M) {
            case k:
            case D:
            case E:
            case A:
            case p:
            case P:
              return M;
            default:
              switch (M = M && M.$$typeof, M) {
                case H:
                case ne:
                case le:
                case de:
                case W:
                  return M;
                default:
                  return V;
              }
          }
        case S:
          return V;
      }
    }
  }
  function Y(M) {
    return _(M) === D;
  }
  return Ue.AsyncMode = k, Ue.ConcurrentMode = D, Ue.ContextConsumer = H, Ue.ContextProvider = W, Ue.Element = h, Ue.ForwardRef = ne, Ue.Fragment = E, Ue.Lazy = le, Ue.Memo = de, Ue.Portal = S, Ue.Profiler = A, Ue.StrictMode = p, Ue.Suspense = P, Ue.isAsyncMode = function(M) {
    return Y(M) || _(M) === k;
  }, Ue.isConcurrentMode = Y, Ue.isContextConsumer = function(M) {
    return _(M) === H;
  }, Ue.isContextProvider = function(M) {
    return _(M) === W;
  }, Ue.isElement = function(M) {
    return typeof M == "object" && M !== null && M.$$typeof === h;
  }, Ue.isForwardRef = function(M) {
    return _(M) === ne;
  }, Ue.isFragment = function(M) {
    return _(M) === E;
  }, Ue.isLazy = function(M) {
    return _(M) === le;
  }, Ue.isMemo = function(M) {
    return _(M) === de;
  }, Ue.isPortal = function(M) {
    return _(M) === S;
  }, Ue.isProfiler = function(M) {
    return _(M) === A;
  }, Ue.isStrictMode = function(M) {
    return _(M) === p;
  }, Ue.isSuspense = function(M) {
    return _(M) === P;
  }, Ue.isValidElementType = function(M) {
    return typeof M == "string" || typeof M == "function" || M === E || M === D || M === A || M === p || M === P || M === ee || typeof M == "object" && M !== null && (M.$$typeof === le || M.$$typeof === de || M.$$typeof === W || M.$$typeof === H || M.$$typeof === ne || M.$$typeof === Q || M.$$typeof === z || M.$$typeof === te || M.$$typeof === ge);
  }, Ue.typeOf = _, Ue;
}
var Be = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $u;
function fd() {
  return $u || ($u = 1, process.env.NODE_ENV !== "production" && function() {
    var s = typeof Symbol == "function" && Symbol.for, h = s ? Symbol.for("react.element") : 60103, S = s ? Symbol.for("react.portal") : 60106, E = s ? Symbol.for("react.fragment") : 60107, p = s ? Symbol.for("react.strict_mode") : 60108, A = s ? Symbol.for("react.profiler") : 60114, W = s ? Symbol.for("react.provider") : 60109, H = s ? Symbol.for("react.context") : 60110, k = s ? Symbol.for("react.async_mode") : 60111, D = s ? Symbol.for("react.concurrent_mode") : 60111, ne = s ? Symbol.for("react.forward_ref") : 60112, P = s ? Symbol.for("react.suspense") : 60113, ee = s ? Symbol.for("react.suspense_list") : 60120, de = s ? Symbol.for("react.memo") : 60115, le = s ? Symbol.for("react.lazy") : 60116, ge = s ? Symbol.for("react.block") : 60121, Q = s ? Symbol.for("react.fundamental") : 60117, z = s ? Symbol.for("react.responder") : 60118, te = s ? Symbol.for("react.scope") : 60119;
    function _(re) {
      return typeof re == "string" || typeof re == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      re === E || re === D || re === A || re === p || re === P || re === ee || typeof re == "object" && re !== null && (re.$$typeof === le || re.$$typeof === de || re.$$typeof === W || re.$$typeof === H || re.$$typeof === ne || re.$$typeof === Q || re.$$typeof === z || re.$$typeof === te || re.$$typeof === ge);
    }
    function Y(re) {
      if (typeof re == "object" && re !== null) {
        var De = re.$$typeof;
        switch (De) {
          case h:
            var $e = re.type;
            switch ($e) {
              case k:
              case D:
              case E:
              case A:
              case p:
              case P:
                return $e;
              default:
                var mt = $e && $e.$$typeof;
                switch (mt) {
                  case H:
                  case ne:
                  case le:
                  case de:
                  case W:
                    return mt;
                  default:
                    return De;
                }
            }
          case S:
            return De;
        }
      }
    }
    var M = k, V = D, J = H, Ie = W, ue = h, Oe = ne, Pe = E, Ye = le, it = de, Je = S, pt = A, Ke = p, Ze = P, Ne = !1;
    function _e(re) {
      return Ne || (Ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Z(re) || Y(re) === k;
    }
    function Z(re) {
      return Y(re) === D;
    }
    function G(re) {
      return Y(re) === H;
    }
    function oe(re) {
      return Y(re) === W;
    }
    function ye(re) {
      return typeof re == "object" && re !== null && re.$$typeof === h;
    }
    function pe(re) {
      return Y(re) === ne;
    }
    function ae(re) {
      return Y(re) === E;
    }
    function se(re) {
      return Y(re) === le;
    }
    function ve(re) {
      return Y(re) === de;
    }
    function Se(re) {
      return Y(re) === S;
    }
    function be(re) {
      return Y(re) === A;
    }
    function he(re) {
      return Y(re) === p;
    }
    function Te(re) {
      return Y(re) === P;
    }
    Be.AsyncMode = M, Be.ConcurrentMode = V, Be.ContextConsumer = J, Be.ContextProvider = Ie, Be.Element = ue, Be.ForwardRef = Oe, Be.Fragment = Pe, Be.Lazy = Ye, Be.Memo = it, Be.Portal = Je, Be.Profiler = pt, Be.StrictMode = Ke, Be.Suspense = Ze, Be.isAsyncMode = _e, Be.isConcurrentMode = Z, Be.isContextConsumer = G, Be.isContextProvider = oe, Be.isElement = ye, Be.isForwardRef = pe, Be.isFragment = ae, Be.isLazy = se, Be.isMemo = ve, Be.isPortal = Se, Be.isProfiler = be, Be.isStrictMode = he, Be.isSuspense = Te, Be.isValidElementType = _, Be.typeOf = Y;
  }()), Be;
}
var Gu;
function Mc() {
  return Gu || (Gu = 1, process.env.NODE_ENV === "production" ? Ws.exports = cd() : Ws.exports = fd()), Ws.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ru, Zu;
function dd() {
  if (Zu)
    return ru;
  Zu = 1;
  var s = Object.getOwnPropertySymbols, h = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
  function E(A) {
    if (A == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(A);
  }
  function p() {
    try {
      if (!Object.assign)
        return !1;
      var A = new String("abc");
      if (A[5] = "de", Object.getOwnPropertyNames(A)[0] === "5")
        return !1;
      for (var W = {}, H = 0; H < 10; H++)
        W["_" + String.fromCharCode(H)] = H;
      var k = Object.getOwnPropertyNames(W).map(function(ne) {
        return W[ne];
      });
      if (k.join("") !== "0123456789")
        return !1;
      var D = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(ne) {
        D[ne] = ne;
      }), Object.keys(Object.assign({}, D)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ru = p() ? Object.assign : function(A, W) {
    for (var H, k = E(A), D, ne = 1; ne < arguments.length; ne++) {
      H = Object(arguments[ne]);
      for (var P in H)
        h.call(H, P) && (k[P] = H[P]);
      if (s) {
        D = s(H);
        for (var ee = 0; ee < D.length; ee++)
          S.call(H, D[ee]) && (k[D[ee]] = H[D[ee]]);
      }
    }
    return k;
  }, ru;
}
var nu, Qu;
function Cu() {
  if (Qu)
    return nu;
  Qu = 1;
  var s = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return nu = s, nu;
}
var ou, Xu;
function Dc() {
  return Xu || (Xu = 1, ou = Function.call.bind(Object.prototype.hasOwnProperty)), ou;
}
var iu, Ju;
function pd() {
  if (Ju)
    return iu;
  Ju = 1;
  var s = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var h = Cu(), S = {}, E = Dc();
    s = function(A) {
      var W = "Warning: " + A;
      typeof console < "u" && console.error(W);
      try {
        throw new Error(W);
      } catch {
      }
    };
  }
  function p(A, W, H, k, D) {
    if (process.env.NODE_ENV !== "production") {
      for (var ne in A)
        if (E(A, ne)) {
          var P;
          try {
            if (typeof A[ne] != "function") {
              var ee = Error(
                (k || "React class") + ": " + H + " type `" + ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof A[ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw ee.name = "Invariant Violation", ee;
            }
            P = A[ne](W, ne, k, H, null, h);
          } catch (le) {
            P = le;
          }
          if (P && !(P instanceof Error) && s(
            (k || "React class") + ": type specification of " + H + " `" + ne + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof P + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), P instanceof Error && !(P.message in S)) {
            S[P.message] = !0;
            var de = D ? D() : "";
            s(
              "Failed " + H + " type: " + P.message + (de ?? "")
            );
          }
        }
    }
  }
  return p.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (S = {});
  }, iu = p, iu;
}
var au, Ku;
function hd() {
  if (Ku)
    return au;
  Ku = 1;
  var s = Mc(), h = dd(), S = Cu(), E = Dc(), p = pd(), A = function() {
  };
  process.env.NODE_ENV !== "production" && (A = function(H) {
    var k = "Warning: " + H;
    typeof console < "u" && console.error(k);
    try {
      throw new Error(k);
    } catch {
    }
  });
  function W() {
    return null;
  }
  return au = function(H, k) {
    var D = typeof Symbol == "function" && Symbol.iterator, ne = "@@iterator";
    function P(Z) {
      var G = Z && (D && Z[D] || Z[ne]);
      if (typeof G == "function")
        return G;
    }
    var ee = "<<anonymous>>", de = {
      array: z("array"),
      bigint: z("bigint"),
      bool: z("boolean"),
      func: z("function"),
      number: z("number"),
      object: z("object"),
      string: z("string"),
      symbol: z("symbol"),
      any: te(),
      arrayOf: _,
      element: Y(),
      elementType: M(),
      instanceOf: V,
      node: Oe(),
      objectOf: Ie,
      oneOf: J,
      oneOfType: ue,
      shape: Ye,
      exact: it
    };
    function le(Z, G) {
      return Z === G ? Z !== 0 || 1 / Z === 1 / G : Z !== Z && G !== G;
    }
    function ge(Z, G) {
      this.message = Z, this.data = G && typeof G == "object" ? G : {}, this.stack = "";
    }
    ge.prototype = Error.prototype;
    function Q(Z) {
      if (process.env.NODE_ENV !== "production")
        var G = {}, oe = 0;
      function ye(ae, se, ve, Se, be, he, Te) {
        if (Se = Se || ee, he = he || ve, Te !== S) {
          if (k) {
            var re = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw re.name = "Invariant Violation", re;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var De = Se + ":" + ve;
            !G[De] && // Avoid spamming the console because they are often not actionable except for lib authors
            oe < 3 && (A(
              "You are manually calling a React.PropTypes validation function for the `" + he + "` prop on `" + Se + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), G[De] = !0, oe++);
          }
        }
        return se[ve] == null ? ae ? se[ve] === null ? new ge("The " + be + " `" + he + "` is marked as required " + ("in `" + Se + "`, but its value is `null`.")) : new ge("The " + be + " `" + he + "` is marked as required in " + ("`" + Se + "`, but its value is `undefined`.")) : null : Z(se, ve, Se, be, he);
      }
      var pe = ye.bind(null, !1);
      return pe.isRequired = ye.bind(null, !0), pe;
    }
    function z(Z) {
      function G(oe, ye, pe, ae, se, ve) {
        var Se = oe[ye], be = Ke(Se);
        if (be !== Z) {
          var he = Ze(Se);
          return new ge(
            "Invalid " + ae + " `" + se + "` of type " + ("`" + he + "` supplied to `" + pe + "`, expected ") + ("`" + Z + "`."),
            { expectedType: Z }
          );
        }
        return null;
      }
      return Q(G);
    }
    function te() {
      return Q(W);
    }
    function _(Z) {
      function G(oe, ye, pe, ae, se) {
        if (typeof Z != "function")
          return new ge("Property `" + se + "` of component `" + pe + "` has invalid PropType notation inside arrayOf.");
        var ve = oe[ye];
        if (!Array.isArray(ve)) {
          var Se = Ke(ve);
          return new ge("Invalid " + ae + " `" + se + "` of type " + ("`" + Se + "` supplied to `" + pe + "`, expected an array."));
        }
        for (var be = 0; be < ve.length; be++) {
          var he = Z(ve, be, pe, ae, se + "[" + be + "]", S);
          if (he instanceof Error)
            return he;
        }
        return null;
      }
      return Q(G);
    }
    function Y() {
      function Z(G, oe, ye, pe, ae) {
        var se = G[oe];
        if (!H(se)) {
          var ve = Ke(se);
          return new ge("Invalid " + pe + " `" + ae + "` of type " + ("`" + ve + "` supplied to `" + ye + "`, expected a single ReactElement."));
        }
        return null;
      }
      return Q(Z);
    }
    function M() {
      function Z(G, oe, ye, pe, ae) {
        var se = G[oe];
        if (!s.isValidElementType(se)) {
          var ve = Ke(se);
          return new ge("Invalid " + pe + " `" + ae + "` of type " + ("`" + ve + "` supplied to `" + ye + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return Q(Z);
    }
    function V(Z) {
      function G(oe, ye, pe, ae, se) {
        if (!(oe[ye] instanceof Z)) {
          var ve = Z.name || ee, Se = _e(oe[ye]);
          return new ge("Invalid " + ae + " `" + se + "` of type " + ("`" + Se + "` supplied to `" + pe + "`, expected ") + ("instance of `" + ve + "`."));
        }
        return null;
      }
      return Q(G);
    }
    function J(Z) {
      if (!Array.isArray(Z))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? A(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : A("Invalid argument supplied to oneOf, expected an array.")), W;
      function G(oe, ye, pe, ae, se) {
        for (var ve = oe[ye], Se = 0; Se < Z.length; Se++)
          if (le(ve, Z[Se]))
            return null;
        var be = JSON.stringify(Z, function(Te, re) {
          var De = Ze(re);
          return De === "symbol" ? String(re) : re;
        });
        return new ge("Invalid " + ae + " `" + se + "` of value `" + String(ve) + "` " + ("supplied to `" + pe + "`, expected one of " + be + "."));
      }
      return Q(G);
    }
    function Ie(Z) {
      function G(oe, ye, pe, ae, se) {
        if (typeof Z != "function")
          return new ge("Property `" + se + "` of component `" + pe + "` has invalid PropType notation inside objectOf.");
        var ve = oe[ye], Se = Ke(ve);
        if (Se !== "object")
          return new ge("Invalid " + ae + " `" + se + "` of type " + ("`" + Se + "` supplied to `" + pe + "`, expected an object."));
        for (var be in ve)
          if (E(ve, be)) {
            var he = Z(ve, be, pe, ae, se + "." + be, S);
            if (he instanceof Error)
              return he;
          }
        return null;
      }
      return Q(G);
    }
    function ue(Z) {
      if (!Array.isArray(Z))
        return process.env.NODE_ENV !== "production" && A("Invalid argument supplied to oneOfType, expected an instance of array."), W;
      for (var G = 0; G < Z.length; G++) {
        var oe = Z[G];
        if (typeof oe != "function")
          return A(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ne(oe) + " at index " + G + "."
          ), W;
      }
      function ye(pe, ae, se, ve, Se) {
        for (var be = [], he = 0; he < Z.length; he++) {
          var Te = Z[he], re = Te(pe, ae, se, ve, Se, S);
          if (re == null)
            return null;
          re.data && E(re.data, "expectedType") && be.push(re.data.expectedType);
        }
        var De = be.length > 0 ? ", expected one of type [" + be.join(", ") + "]" : "";
        return new ge("Invalid " + ve + " `" + Se + "` supplied to " + ("`" + se + "`" + De + "."));
      }
      return Q(ye);
    }
    function Oe() {
      function Z(G, oe, ye, pe, ae) {
        return Je(G[oe]) ? null : new ge("Invalid " + pe + " `" + ae + "` supplied to " + ("`" + ye + "`, expected a ReactNode."));
      }
      return Q(Z);
    }
    function Pe(Z, G, oe, ye, pe) {
      return new ge(
        (Z || "React class") + ": " + G + " type `" + oe + "." + ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + pe + "`."
      );
    }
    function Ye(Z) {
      function G(oe, ye, pe, ae, se) {
        var ve = oe[ye], Se = Ke(ve);
        if (Se !== "object")
          return new ge("Invalid " + ae + " `" + se + "` of type `" + Se + "` " + ("supplied to `" + pe + "`, expected `object`."));
        for (var be in Z) {
          var he = Z[be];
          if (typeof he != "function")
            return Pe(pe, ae, se, be, Ze(he));
          var Te = he(ve, be, pe, ae, se + "." + be, S);
          if (Te)
            return Te;
        }
        return null;
      }
      return Q(G);
    }
    function it(Z) {
      function G(oe, ye, pe, ae, se) {
        var ve = oe[ye], Se = Ke(ve);
        if (Se !== "object")
          return new ge("Invalid " + ae + " `" + se + "` of type `" + Se + "` " + ("supplied to `" + pe + "`, expected `object`."));
        var be = h({}, oe[ye], Z);
        for (var he in be) {
          var Te = Z[he];
          if (E(Z, he) && typeof Te != "function")
            return Pe(pe, ae, se, he, Ze(Te));
          if (!Te)
            return new ge(
              "Invalid " + ae + " `" + se + "` key `" + he + "` supplied to `" + pe + "`.\nBad object: " + JSON.stringify(oe[ye], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(Z), null, "  ")
            );
          var re = Te(ve, he, pe, ae, se + "." + he, S);
          if (re)
            return re;
        }
        return null;
      }
      return Q(G);
    }
    function Je(Z) {
      switch (typeof Z) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !Z;
        case "object":
          if (Array.isArray(Z))
            return Z.every(Je);
          if (Z === null || H(Z))
            return !0;
          var G = P(Z);
          if (G) {
            var oe = G.call(Z), ye;
            if (G !== Z.entries) {
              for (; !(ye = oe.next()).done; )
                if (!Je(ye.value))
                  return !1;
            } else
              for (; !(ye = oe.next()).done; ) {
                var pe = ye.value;
                if (pe && !Je(pe[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function pt(Z, G) {
      return Z === "symbol" ? !0 : G ? G["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && G instanceof Symbol : !1;
    }
    function Ke(Z) {
      var G = typeof Z;
      return Array.isArray(Z) ? "array" : Z instanceof RegExp ? "object" : pt(G, Z) ? "symbol" : G;
    }
    function Ze(Z) {
      if (typeof Z > "u" || Z === null)
        return "" + Z;
      var G = Ke(Z);
      if (G === "object") {
        if (Z instanceof Date)
          return "date";
        if (Z instanceof RegExp)
          return "regexp";
      }
      return G;
    }
    function Ne(Z) {
      var G = Ze(Z);
      switch (G) {
        case "array":
        case "object":
          return "an " + G;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + G;
        default:
          return G;
      }
    }
    function _e(Z) {
      return !Z.constructor || !Z.constructor.name ? ee : Z.constructor.name;
    }
    return de.checkPropTypes = p, de.resetWarningCache = p.resetWarningCache, de.PropTypes = de, de;
  }, au;
}
var su, qu;
function gd() {
  if (qu)
    return su;
  qu = 1;
  var s = Cu();
  function h() {
  }
  function S() {
  }
  return S.resetWarningCache = h, su = function() {
    function E(W, H, k, D, ne, P) {
      if (P !== s) {
        var ee = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw ee.name = "Invariant Violation", ee;
      }
    }
    E.isRequired = E;
    function p() {
      return E;
    }
    var A = {
      array: E,
      bigint: E,
      bool: E,
      func: E,
      number: E,
      object: E,
      string: E,
      symbol: E,
      any: E,
      arrayOf: p,
      element: E,
      elementType: E,
      instanceOf: p,
      node: E,
      objectOf: p,
      oneOf: p,
      oneOfType: p,
      shape: p,
      exact: p,
      checkPropTypes: S,
      resetWarningCache: h
    };
    return A.PropTypes = A, A;
  }, su;
}
if (process.env.NODE_ENV !== "production") {
  var vd = Mc(), md = !0;
  yu.exports = hd()(vd.isElement, md);
} else
  yu.exports = gd()();
var yd = yu.exports, Yo = {}, No = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ec;
function Sd() {
  if (ec)
    return No;
  ec = 1;
  var s = q;
  function h(o) {
    for (var c = "https://reactjs.org/docs/error-decoder.html?invariant=" + o, m = 1; m < arguments.length; m++)
      c += "&args[]=" + encodeURIComponent(arguments[m]);
    return "Minified React error #" + o + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var S = Object.prototype.hasOwnProperty, E = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, p = {}, A = {};
  function W(o) {
    return S.call(A, o) ? !0 : S.call(p, o) ? !1 : E.test(o) ? A[o] = !0 : (p[o] = !0, !1);
  }
  function H(o, c, m, b, j, R, U) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = b, this.attributeNamespace = j, this.mustUseProperty = m, this.propertyName = o, this.type = c, this.sanitizeURL = R, this.removeEmptyString = U;
  }
  var k = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o) {
    k[o] = new H(o, 0, !1, o, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
    var c = o[0];
    k[c] = new H(c, 1, !1, o[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
    k[o] = new H(o, 2, !1, o.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
    k[o] = new H(o, 2, !1, o, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o) {
    k[o] = new H(o, 3, !1, o.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(o) {
    k[o] = new H(o, 3, !0, o, null, !1, !1);
  }), ["capture", "download"].forEach(function(o) {
    k[o] = new H(o, 4, !1, o, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(o) {
    k[o] = new H(o, 6, !1, o, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(o) {
    k[o] = new H(o, 5, !1, o.toLowerCase(), null, !1, !1);
  });
  var D = /[\-:]([a-z])/g;
  function ne(o) {
    return o[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o) {
    var c = o.replace(
      D,
      ne
    );
    k[c] = new H(c, 1, !1, o, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o) {
    var c = o.replace(D, ne);
    k[c] = new H(c, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(o) {
    var c = o.replace(D, ne);
    k[c] = new H(c, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(o) {
    k[o] = new H(o, 1, !1, o.toLowerCase(), null, !1, !1);
  }), k.xlinkHref = new H("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(o) {
    k[o] = new H(o, 1, !1, o.toLowerCase(), null, !0, !0);
  });
  var P = {
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
  }, ee = ["Webkit", "ms", "Moz", "O"];
  Object.keys(P).forEach(function(o) {
    ee.forEach(function(c) {
      c = c + o.charAt(0).toUpperCase() + o.substring(1), P[c] = P[o];
    });
  });
  var de = /["'&<>]/;
  function le(o) {
    if (typeof o == "boolean" || typeof o == "number")
      return "" + o;
    o = "" + o;
    var c = de.exec(o);
    if (c) {
      var m = "", b, j = 0;
      for (b = c.index; b < o.length; b++) {
        switch (o.charCodeAt(b)) {
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
        j !== b && (m += o.substring(j, b)), j = b + 1, m += c;
      }
      o = j !== b ? m + o.substring(j, b) : m;
    }
    return o;
  }
  var ge = /([A-Z])/g, Q = /^ms-/, z = Array.isArray;
  function te(o, c) {
    return { insertionMode: o, selectedValue: c };
  }
  function _(o, c, m) {
    switch (c) {
      case "select":
        return te(1, m.value != null ? m.value : m.defaultValue);
      case "svg":
        return te(2, null);
      case "math":
        return te(3, null);
      case "foreignObject":
        return te(1, null);
      case "table":
        return te(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return te(5, null);
      case "colgroup":
        return te(7, null);
      case "tr":
        return te(6, null);
    }
    return 4 <= o.insertionMode || o.insertionMode === 0 ? te(1, null) : o;
  }
  var Y = /* @__PURE__ */ new Map();
  function M(o, c, m) {
    if (typeof m != "object")
      throw Error(h(62));
    c = !0;
    for (var b in m)
      if (S.call(m, b)) {
        var j = m[b];
        if (j != null && typeof j != "boolean" && j !== "") {
          if (b.indexOf("--") === 0) {
            var R = le(b);
            j = le(("" + j).trim());
          } else {
            R = b;
            var U = Y.get(R);
            U !== void 0 || (U = le(R.replace(ge, "-$1").toLowerCase().replace(Q, "-ms-")), Y.set(R, U)), R = U, j = typeof j == "number" ? j === 0 || S.call(P, b) ? "" + j : j + "px" : le(("" + j).trim());
          }
          c ? (c = !1, o.push(' style="', R, ":", j)) : o.push(";", R, ":", j);
        }
      }
    c || o.push('"');
  }
  function V(o, c, m, b) {
    switch (m) {
      case "style":
        M(o, c, b);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < m.length) || m[0] !== "o" && m[0] !== "O" || m[1] !== "n" && m[1] !== "N") {
      if (c = k.hasOwnProperty(m) ? k[m] : null, c !== null) {
        switch (typeof b) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!c.acceptsBooleans)
              return;
        }
        switch (m = c.attributeName, c.type) {
          case 3:
            b && o.push(" ", m, '=""');
            break;
          case 4:
            b === !0 ? o.push(" ", m, '=""') : b !== !1 && o.push(" ", m, '="', le(b), '"');
            break;
          case 5:
            isNaN(b) || o.push(" ", m, '="', le(b), '"');
            break;
          case 6:
            !isNaN(b) && 1 <= b && o.push(" ", m, '="', le(b), '"');
            break;
          default:
            c.sanitizeURL && (b = "" + b), o.push(" ", m, '="', le(b), '"');
        }
      } else if (W(m)) {
        switch (typeof b) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = m.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-")
              return;
        }
        o.push(" ", m, '="', le(b), '"');
      }
    }
  }
  function J(o, c, m) {
    if (c != null) {
      if (m != null)
        throw Error(h(60));
      if (typeof c != "object" || !("__html" in c))
        throw Error(h(61));
      c = c.__html, c != null && o.push("" + c);
    }
  }
  function Ie(o) {
    var c = "";
    return s.Children.forEach(o, function(m) {
      m != null && (c += m);
    }), c;
  }
  function ue(o, c, m, b) {
    o.push(Ye(m));
    var j = m = null, R;
    for (R in c)
      if (S.call(c, R)) {
        var U = c[R];
        if (U != null)
          switch (R) {
            case "children":
              m = U;
              break;
            case "dangerouslySetInnerHTML":
              j = U;
              break;
            default:
              V(o, b, R, U);
          }
      }
    return o.push(">"), J(o, j, m), typeof m == "string" ? (o.push(le(m)), null) : m;
  }
  var Oe = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Pe = /* @__PURE__ */ new Map();
  function Ye(o) {
    var c = Pe.get(o);
    if (c === void 0) {
      if (!Oe.test(o))
        throw Error(h(65, o));
      c = "<" + o, Pe.set(o, c);
    }
    return c;
  }
  function it(o, c, m, b, j) {
    switch (c) {
      case "select":
        o.push(Ye("select"));
        var R = null, U = null;
        for (me in m)
          if (S.call(m, me)) {
            var X = m[me];
            if (X != null)
              switch (me) {
                case "children":
                  R = X;
                  break;
                case "dangerouslySetInnerHTML":
                  U = X;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  V(o, b, me, X);
              }
          }
        return o.push(">"), J(o, U, R), R;
      case "option":
        U = j.selectedValue, o.push(Ye("option"));
        var ce = X = null, xe = null, me = null;
        for (R in m)
          if (S.call(m, R)) {
            var Re = m[R];
            if (Re != null)
              switch (R) {
                case "children":
                  X = Re;
                  break;
                case "selected":
                  xe = Re;
                  break;
                case "dangerouslySetInnerHTML":
                  me = Re;
                  break;
                case "value":
                  ce = Re;
                default:
                  V(o, b, R, Re);
              }
          }
        if (U != null)
          if (m = ce !== null ? "" + ce : Ie(X), z(U)) {
            for (b = 0; b < U.length; b++)
              if ("" + U[b] === m) {
                o.push(' selected=""');
                break;
              }
          } else
            "" + U === m && o.push(' selected=""');
        else
          xe && o.push(' selected=""');
        return o.push(">"), J(o, me, X), X;
      case "textarea":
        o.push(Ye("textarea")), me = U = R = null;
        for (X in m)
          if (S.call(m, X) && (ce = m[X], ce != null))
            switch (X) {
              case "children":
                me = ce;
                break;
              case "value":
                R = ce;
                break;
              case "defaultValue":
                U = ce;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(h(91));
              default:
                V(
                  o,
                  b,
                  X,
                  ce
                );
            }
        if (R === null && U !== null && (R = U), o.push(">"), me != null) {
          if (R != null)
            throw Error(h(92));
          if (z(me) && 1 < me.length)
            throw Error(h(93));
          R = "" + me;
        }
        return typeof R == "string" && R[0] === `
` && o.push(`
`), R !== null && o.push(le("" + R)), null;
      case "input":
        o.push(Ye("input")), ce = me = X = R = null;
        for (U in m)
          if (S.call(m, U) && (xe = m[U], xe != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(399, "input"));
              case "defaultChecked":
                ce = xe;
                break;
              case "defaultValue":
                X = xe;
                break;
              case "checked":
                me = xe;
                break;
              case "value":
                R = xe;
                break;
              default:
                V(o, b, U, xe);
            }
        return me !== null ? V(o, b, "checked", me) : ce !== null && V(o, b, "checked", ce), R !== null ? V(o, b, "value", R) : X !== null && V(o, b, "value", X), o.push("/>"), null;
      case "menuitem":
        o.push(Ye("menuitem"));
        for (var yt in m)
          if (S.call(m, yt) && (R = m[yt], R != null))
            switch (yt) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(400));
              default:
                V(o, b, yt, R);
            }
        return o.push(">"), null;
      case "title":
        o.push(Ye("title")), R = null;
        for (Re in m)
          if (S.call(m, Re) && (U = m[Re], U != null))
            switch (Re) {
              case "children":
                R = U;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(h(434));
              default:
                V(o, b, Re, U);
            }
        return o.push(">"), R;
      case "listing":
      case "pre":
        o.push(Ye(c)), U = R = null;
        for (ce in m)
          if (S.call(m, ce) && (X = m[ce], X != null))
            switch (ce) {
              case "children":
                R = X;
                break;
              case "dangerouslySetInnerHTML":
                U = X;
                break;
              default:
                V(o, b, ce, X);
            }
        if (o.push(">"), U != null) {
          if (R != null)
            throw Error(h(60));
          if (typeof U != "object" || !("__html" in U))
            throw Error(h(61));
          m = U.__html, m != null && (typeof m == "string" && 0 < m.length && m[0] === `
` ? o.push(`
`, m) : o.push("" + m));
        }
        return typeof R == "string" && R[0] === `
` && o.push(`
`), R;
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
        o.push(Ye(c));
        for (var ut in m)
          if (S.call(m, ut) && (R = m[ut], R != null))
            switch (ut) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(399, c));
              default:
                V(o, b, ut, R);
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
        return ue(
          o,
          m,
          c,
          b
        );
      case "html":
        return j.insertionMode === 0 && o.push("<!DOCTYPE html>"), ue(o, m, c, b);
      default:
        if (c.indexOf("-") === -1 && typeof m.is != "string")
          return ue(o, m, c, b);
        o.push(Ye(c)), U = R = null;
        for (xe in m)
          if (S.call(m, xe) && (X = m[xe], X != null))
            switch (xe) {
              case "children":
                R = X;
                break;
              case "dangerouslySetInnerHTML":
                U = X;
                break;
              case "style":
                M(o, b, X);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                W(xe) && typeof X != "function" && typeof X != "symbol" && o.push(" ", xe, '="', le(X), '"');
            }
        return o.push(">"), J(o, U, R), R;
    }
  }
  function Je(o, c, m) {
    if (o.push('<!--$?--><template id="'), m === null)
      throw Error(h(395));
    return o.push(m), o.push('"></template>');
  }
  function pt(o, c, m, b) {
    switch (m.insertionMode) {
      case 0:
      case 1:
        return o.push('<div hidden id="'), o.push(c.segmentPrefix), c = b.toString(16), o.push(c), o.push('">');
      case 2:
        return o.push('<svg aria-hidden="true" style="display:none" id="'), o.push(c.segmentPrefix), c = b.toString(16), o.push(c), o.push('">');
      case 3:
        return o.push('<math aria-hidden="true" style="display:none" id="'), o.push(c.segmentPrefix), c = b.toString(16), o.push(c), o.push('">');
      case 4:
        return o.push('<table hidden id="'), o.push(c.segmentPrefix), c = b.toString(16), o.push(c), o.push('">');
      case 5:
        return o.push('<table hidden><tbody id="'), o.push(c.segmentPrefix), c = b.toString(16), o.push(c), o.push('">');
      case 6:
        return o.push('<table hidden><tr id="'), o.push(c.segmentPrefix), c = b.toString(16), o.push(c), o.push('">');
      case 7:
        return o.push('<table hidden><colgroup id="'), o.push(c.segmentPrefix), c = b.toString(16), o.push(c), o.push('">');
      default:
        throw Error(h(397));
    }
  }
  function Ke(o, c) {
    switch (c.insertionMode) {
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
        throw Error(h(397));
    }
  }
  var Ze = /[<\u2028\u2029]/g;
  function Ne(o) {
    return JSON.stringify(o).replace(Ze, function(c) {
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
  function _e(o, c) {
    return c = c === void 0 ? "" : c, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: c + "P:", segmentPrefix: c + "S:", boundaryPrefix: c + "B:", idPrefix: c, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: o };
  }
  function Z(o, c, m, b) {
    return m.generateStaticMarkup ? (o.push(le(c)), !1) : (c === "" ? o = b : (b && o.push("<!-- -->"), o.push(le(c)), o = !0), o);
  }
  var G = Object.assign, oe = Symbol.for("react.element"), ye = Symbol.for("react.portal"), pe = Symbol.for("react.fragment"), ae = Symbol.for("react.strict_mode"), se = Symbol.for("react.profiler"), ve = Symbol.for("react.provider"), Se = Symbol.for("react.context"), be = Symbol.for("react.forward_ref"), he = Symbol.for("react.suspense"), Te = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), De = Symbol.for("react.lazy"), $e = Symbol.for("react.scope"), mt = Symbol.for("react.debug_trace_mode"), $t = Symbol.for("react.legacy_hidden"), Tn = Symbol.for("react.default_value"), Tt = Symbol.iterator;
  function gr(o) {
    if (o == null)
      return null;
    if (typeof o == "function")
      return o.displayName || o.name || null;
    if (typeof o == "string")
      return o;
    switch (o) {
      case pe:
        return "Fragment";
      case ye:
        return "Portal";
      case se:
        return "Profiler";
      case ae:
        return "StrictMode";
      case he:
        return "Suspense";
      case Te:
        return "SuspenseList";
    }
    if (typeof o == "object")
      switch (o.$$typeof) {
        case Se:
          return (o.displayName || "Context") + ".Consumer";
        case ve:
          return (o._context.displayName || "Context") + ".Provider";
        case be:
          var c = o.render;
          return o = o.displayName, o || (o = c.displayName || c.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
        case re:
          return c = o.displayName || null, c !== null ? c : gr(o.type) || "Memo";
        case De:
          c = o._payload, o = o._init;
          try {
            return gr(o(c));
          } catch {
          }
      }
    return null;
  }
  var vr = {};
  function En(o, c) {
    if (o = o.contextTypes, !o)
      return vr;
    var m = {}, b;
    for (b in o)
      m[b] = c[b];
    return m;
  }
  var Et = null;
  function st(o, c) {
    if (o !== c) {
      o.context._currentValue2 = o.parentValue, o = o.parent;
      var m = c.parent;
      if (o === null) {
        if (m !== null)
          throw Error(h(401));
      } else {
        if (m === null)
          throw Error(h(401));
        st(o, m);
      }
      c.context._currentValue2 = c.value;
    }
  }
  function ot(o) {
    o.context._currentValue2 = o.parentValue, o = o.parent, o !== null && ot(o);
  }
  function Vr(o) {
    var c = o.parent;
    c !== null && Vr(c), o.context._currentValue2 = o.value;
  }
  function $r(o, c) {
    if (o.context._currentValue2 = o.parentValue, o = o.parent, o === null)
      throw Error(h(402));
    o.depth === c.depth ? st(o, c) : $r(o, c);
  }
  function Gr(o, c) {
    var m = c.parent;
    if (m === null)
      throw Error(h(402));
    o.depth === m.depth ? st(o, m) : Gr(o, m), c.context._currentValue2 = c.value;
  }
  function rt(o) {
    var c = Et;
    c !== o && (c === null ? Vr(o) : o === null ? ot(c) : c.depth === o.depth ? st(c, o) : c.depth > o.depth ? $r(c, o) : Gr(c, o), Et = o);
  }
  var Zr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(o, c) {
    o = o._reactInternals, o.queue !== null && o.queue.push(c);
  }, enqueueReplaceState: function(o, c) {
    o = o._reactInternals, o.replace = !0, o.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function kn(o, c, m, b) {
    var j = o.state !== void 0 ? o.state : null;
    o.updater = Zr, o.props = m, o.state = j;
    var R = { queue: [], replace: !1 };
    o._reactInternals = R;
    var U = c.contextType;
    if (o.context = typeof U == "object" && U !== null ? U._currentValue2 : b, U = c.getDerivedStateFromProps, typeof U == "function" && (U = U(m, j), j = U == null ? j : G({}, j, U), o.state = j), typeof c.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function"))
      if (c = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), c !== o.state && Zr.enqueueReplaceState(o, o.state, null), R.queue !== null && 0 < R.queue.length)
        if (c = R.queue, U = R.replace, R.queue = null, R.replace = !1, U && c.length === 1)
          o.state = c[0];
        else {
          for (R = U ? c[0] : o.state, j = !0, U = U ? 1 : 0; U < c.length; U++) {
            var X = c[U];
            X = typeof X == "function" ? X.call(o, R, m, b) : X, X != null && (j ? (j = !1, R = G({}, R, X)) : G(R, X));
          }
          o.state = R;
        }
      else
        R.queue = null;
  }
  var Cn = { id: 1, overflow: "" };
  function Qr(o, c, m) {
    var b = o.id;
    o = o.overflow;
    var j = 32 - Mr(b) - 1;
    b &= ~(1 << j), m += 1;
    var R = 32 - Mr(c) + j;
    if (30 < R) {
      var U = j - j % 5;
      return R = (b & (1 << U) - 1).toString(32), b >>= U, j -= U, { id: 1 << 32 - Mr(c) + j | m << j | b, overflow: R + o };
    }
    return { id: 1 << R | m << j | b, overflow: o };
  }
  var Mr = Math.clz32 ? Math.clz32 : qt, Xn = Math.log, Xr = Math.LN2;
  function qt(o) {
    return o >>>= 0, o === 0 ? 32 : 31 - (Xn(o) / Xr | 0) | 0;
  }
  function Jr(o, c) {
    return o === c && (o !== 0 || 1 / o === 1 / c) || o !== o && c !== c;
  }
  var In = typeof Object.is == "function" ? Object.is : Jr, ht = null, Pt = null, er = null, je = null, tr = !1, Dr = !1, mr = 0, jt = null, Rr = 0;
  function Gt() {
    if (ht === null)
      throw Error(h(321));
    return ht;
  }
  function qe() {
    if (0 < Rr)
      throw Error(h(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Kr() {
    return je === null ? er === null ? (tr = !1, er = je = qe()) : (tr = !0, je = er) : je.next === null ? (tr = !1, je = je.next = qe()) : (tr = !0, je = je.next), je;
  }
  function qr() {
    Pt = ht = null, Dr = !1, er = null, Rr = 0, je = jt = null;
  }
  function Mn(o, c) {
    return typeof c == "function" ? c(o) : c;
  }
  function nt(o, c, m) {
    if (ht = Gt(), je = Kr(), tr) {
      var b = je.queue;
      if (c = b.dispatch, jt !== null && (m = jt.get(b), m !== void 0)) {
        jt.delete(b), b = je.memoizedState;
        do
          b = o(b, m.action), m = m.next;
        while (m !== null);
        return je.memoizedState = b, [b, c];
      }
      return [je.memoizedState, c];
    }
    return o = o === Mn ? typeof c == "function" ? c() : c : m !== void 0 ? m(c) : c, je.memoizedState = o, o = je.queue = { last: null, dispatch: null }, o = o.dispatch = Jn.bind(null, ht, o), [je.memoizedState, o];
  }
  function en(o, c) {
    if (ht = Gt(), je = Kr(), c = c === void 0 ? null : c, je !== null) {
      var m = je.memoizedState;
      if (m !== null && c !== null) {
        var b = m[1];
        e:
          if (b === null)
            b = !1;
          else {
            for (var j = 0; j < b.length && j < c.length; j++)
              if (!In(c[j], b[j])) {
                b = !1;
                break e;
              }
            b = !0;
          }
        if (b)
          return m[0];
      }
    }
    return o = o(), je.memoizedState = [o, c], o;
  }
  function Jn(o, c, m) {
    if (25 <= Rr)
      throw Error(h(301));
    if (o === ht)
      if (Dr = !0, o = { action: m, next: null }, jt === null && (jt = /* @__PURE__ */ new Map()), m = jt.get(c), m === void 0)
        jt.set(c, o);
      else {
        for (c = m; c.next !== null; )
          c = c.next;
        c.next = o;
      }
  }
  function Kn() {
    throw Error(h(394));
  }
  function Nt() {
  }
  var tn = { readContext: function(o) {
    return o._currentValue2;
  }, useContext: function(o) {
    return Gt(), o._currentValue2;
  }, useMemo: en, useReducer: nt, useRef: function(o) {
    ht = Gt(), je = Kr();
    var c = je.memoizedState;
    return c === null ? (o = { current: o }, je.memoizedState = o) : c;
  }, useState: function(o) {
    return nt(Mn, o);
  }, useInsertionEffect: Nt, useLayoutEffect: function() {
  }, useCallback: function(o, c) {
    return en(function() {
      return o;
    }, c);
  }, useImperativeHandle: Nt, useEffect: Nt, useDebugValue: Nt, useDeferredValue: function(o) {
    return Gt(), o;
  }, useTransition: function() {
    return Gt(), [
      !1,
      Kn
    ];
  }, useId: function() {
    var o = Pt.treeContext, c = o.overflow;
    o = o.id, o = (o & ~(1 << 32 - Mr(o) - 1)).toString(32) + c;
    var m = Ar;
    if (m === null)
      throw Error(h(404));
    return c = mr++, o = ":" + m.idPrefix + "R" + o, 0 < c && (o += "H" + c.toString(32)), o + ":";
  }, useMutableSource: function(o, c) {
    return Gt(), c(o._source);
  }, useSyncExternalStore: function(o, c, m) {
    if (m === void 0)
      throw Error(h(407));
    return m();
  } }, Ar = null, rn = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function yr(o) {
    return console.error(o), null;
  }
  function rr() {
  }
  function qn(o, c, m, b, j, R, U, X, ce) {
    var xe = [], me = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: b === void 0 ? 12800 : b, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: me, pingedTasks: xe, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: j === void 0 ? yr : j, onAllReady: R === void 0 ? rr : R, onShellReady: U === void 0 ? rr : U, onShellError: X === void 0 ? rr : X, onFatalError: ce === void 0 ? rr : ce }, m = Or(c, 0, null, m, !1, !1), m.parentFlushed = !0, o = nn(c, o, null, m, me, vr, null, Cn), xe.push(o), c;
  }
  function nn(o, c, m, b, j, R, U, X) {
    o.allPendingTasks++, m === null ? o.pendingRootTasks++ : m.pendingTasks++;
    var ce = { node: c, ping: function() {
      var xe = o.pingedTasks;
      xe.push(ce), xe.length === 1 && gt(o);
    }, blockedBoundary: m, blockedSegment: b, abortSet: j, legacyContext: R, context: U, treeContext: X };
    return j.add(ce), ce;
  }
  function Or(o, c, m, b, j, R) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: b, boundary: m, lastPushedText: j, textEmbedded: R };
  }
  function nr(o, c) {
    if (o = o.onError(c), o != null && typeof o != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof o + '" instead');
    return o;
  }
  function Zt(o, c) {
    var m = o.onShellError;
    m(c), m = o.onFatalError, m(c), o.destination !== null ? (o.status = 2, o.destination.destroy(c)) : (o.status = 1, o.fatalError = c);
  }
  function _t(o, c, m, b, j) {
    for (ht = {}, Pt = c, mr = 0, o = m(b, j); Dr; )
      Dr = !1, mr = 0, Rr += 1, je = null, o = m(b, j);
    return qr(), o;
  }
  function Sr(o, c, m, b) {
    var j = m.render(), R = b.childContextTypes;
    if (R != null) {
      var U = c.legacyContext;
      if (typeof m.getChildContext != "function")
        b = U;
      else {
        m = m.getChildContext();
        for (var X in m)
          if (!(X in R))
            throw Error(h(108, gr(b) || "Unknown", X));
        b = G({}, U, m);
      }
      c.legacyContext = b, Qe(o, c, j), c.legacyContext = U;
    } else
      Qe(o, c, j);
  }
  function br(o, c) {
    if (o && o.defaultProps) {
      c = G({}, c), o = o.defaultProps;
      for (var m in o)
        c[m] === void 0 && (c[m] = o[m]);
      return c;
    }
    return c;
  }
  function wt(o, c, m, b, j) {
    if (typeof m == "function")
      if (m.prototype && m.prototype.isReactComponent) {
        j = En(m, c.legacyContext);
        var R = m.contextType;
        R = new m(b, typeof R == "object" && R !== null ? R._currentValue2 : j), kn(R, m, b, j), Sr(o, c, R, m);
      } else {
        R = En(m, c.legacyContext), j = _t(o, c, m, b, R);
        var U = mr !== 0;
        if (typeof j == "object" && j !== null && typeof j.render == "function" && j.$$typeof === void 0)
          kn(j, m, b, R), Sr(o, c, j, m);
        else if (U) {
          b = c.treeContext, c.treeContext = Qr(b, 1, 0);
          try {
            Qe(o, c, j);
          } finally {
            c.treeContext = b;
          }
        } else
          Qe(o, c, j);
      }
    else if (typeof m == "string") {
      switch (j = c.blockedSegment, R = it(j.chunks, m, b, o.responseState, j.formatContext), j.lastPushedText = !1, U = j.formatContext, j.formatContext = _(U, m, b), kt(o, c, R), j.formatContext = U, m) {
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
          j.chunks.push("</", m, ">");
      }
      j.lastPushedText = !1;
    } else {
      switch (m) {
        case $t:
        case mt:
        case ae:
        case se:
        case pe:
          Qe(o, c, b.children);
          return;
        case Te:
          Qe(o, c, b.children);
          return;
        case $e:
          throw Error(h(343));
        case he:
          e: {
            m = c.blockedBoundary, j = c.blockedSegment, R = b.fallback, b = b.children, U = /* @__PURE__ */ new Set();
            var X = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: U, errorDigest: null }, ce = Or(o, j.chunks.length, X, j.formatContext, !1, !1);
            j.children.push(ce), j.lastPushedText = !1;
            var xe = Or(o, 0, null, j.formatContext, !1, !1);
            xe.parentFlushed = !0, c.blockedBoundary = X, c.blockedSegment = xe;
            try {
              if (kt(
                o,
                c,
                b
              ), o.responseState.generateStaticMarkup || xe.lastPushedText && xe.textEmbedded && xe.chunks.push("<!-- -->"), xe.status = 1, Ft(X, xe), X.pendingTasks === 0)
                break e;
            } catch (me) {
              xe.status = 4, X.forceClientRender = !0, X.errorDigest = nr(o, me);
            } finally {
              c.blockedBoundary = m, c.blockedSegment = j;
            }
            c = nn(o, R, m, ce, U, c.legacyContext, c.context, c.treeContext), o.pingedTasks.push(c);
          }
          return;
      }
      if (typeof m == "object" && m !== null)
        switch (m.$$typeof) {
          case be:
            if (b = _t(o, c, m.render, b, j), mr !== 0) {
              m = c.treeContext, c.treeContext = Qr(m, 1, 0);
              try {
                Qe(o, c, b);
              } finally {
                c.treeContext = m;
              }
            } else
              Qe(o, c, b);
            return;
          case re:
            m = m.type, b = br(m, b), wt(o, c, m, b, j);
            return;
          case ve:
            if (j = b.children, m = m._context, b = b.value, R = m._currentValue2, m._currentValue2 = b, U = Et, Et = b = { parent: U, depth: U === null ? 0 : U.depth + 1, context: m, parentValue: R, value: b }, c.context = b, Qe(o, c, j), o = Et, o === null)
              throw Error(h(403));
            b = o.parentValue, o.context._currentValue2 = b === Tn ? o.context._defaultValue : b, o = Et = o.parent, c.context = o;
            return;
          case Se:
            b = b.children, b = b(m._currentValue2), Qe(o, c, b);
            return;
          case De:
            j = m._init, m = j(m._payload), b = br(m, b), wt(
              o,
              c,
              m,
              b,
              void 0
            );
            return;
        }
      throw Error(h(130, m == null ? m : typeof m, ""));
    }
  }
  function Qe(o, c, m) {
    if (c.node = m, typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case oe:
          wt(o, c, m.type, m.props, m.ref);
          return;
        case ye:
          throw Error(h(257));
        case De:
          var b = m._init;
          m = b(m._payload), Qe(o, c, m);
          return;
      }
      if (z(m)) {
        Lt(o, c, m);
        return;
      }
      if (m === null || typeof m != "object" ? b = null : (b = Tt && m[Tt] || m["@@iterator"], b = typeof b == "function" ? b : null), b && (b = b.call(m))) {
        if (m = b.next(), !m.done) {
          var j = [];
          do
            j.push(m.value), m = b.next();
          while (!m.done);
          Lt(o, c, j);
        }
        return;
      }
      throw o = Object.prototype.toString.call(m), Error(h(31, o === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : o));
    }
    typeof m == "string" ? (b = c.blockedSegment, b.lastPushedText = Z(c.blockedSegment.chunks, m, o.responseState, b.lastPushedText)) : typeof m == "number" && (b = c.blockedSegment, b.lastPushedText = Z(c.blockedSegment.chunks, "" + m, o.responseState, b.lastPushedText));
  }
  function Lt(o, c, m) {
    for (var b = m.length, j = 0; j < b; j++) {
      var R = c.treeContext;
      c.treeContext = Qr(R, b, j);
      try {
        kt(o, c, m[j]);
      } finally {
        c.treeContext = R;
      }
    }
  }
  function kt(o, c, m) {
    var b = c.blockedSegment.formatContext, j = c.legacyContext, R = c.context;
    try {
      return Qe(o, c, m);
    } catch (ce) {
      if (qr(), typeof ce == "object" && ce !== null && typeof ce.then == "function") {
        m = ce;
        var U = c.blockedSegment, X = Or(o, U.chunks.length, null, U.formatContext, U.lastPushedText, !0);
        U.children.push(X), U.lastPushedText = !1, o = nn(o, c.node, c.blockedBoundary, X, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, m.then(o, o), c.blockedSegment.formatContext = b, c.legacyContext = j, c.context = R, rt(R);
      } else
        throw c.blockedSegment.formatContext = b, c.legacyContext = j, c.context = R, rt(R), ce;
    }
  }
  function at(o) {
    var c = o.blockedBoundary;
    o = o.blockedSegment, o.status = 3, zt(this, c, o);
  }
  function Pr(o, c, m) {
    var b = o.blockedBoundary;
    o.blockedSegment.status = 3, b === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.push(null))) : (b.pendingTasks--, b.forceClientRender || (b.forceClientRender = !0, o = m === void 0 ? Error(h(432)) : m, b.errorDigest = c.onError(o), b.parentFlushed && c.clientRenderedBoundaries.push(b)), b.fallbackAbortableTasks.forEach(function(j) {
      return Pr(j, c, m);
    }), b.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (b = c.onAllReady, b()));
  }
  function Ft(o, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var m = c.children[0];
      m.id = c.id, m.parentFlushed = !0, m.status === 1 && Ft(o, m);
    } else
      o.completedSegments.push(c);
  }
  function zt(o, c, m) {
    if (c === null) {
      if (m.parentFlushed) {
        if (o.completedRootSegment !== null)
          throw Error(h(389));
        o.completedRootSegment = m;
      }
      o.pendingRootTasks--, o.pendingRootTasks === 0 && (o.onShellError = rr, c = o.onShellReady, c());
    } else
      c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (m.parentFlushed && m.status === 1 && Ft(c, m), c.parentFlushed && o.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(at, o), c.fallbackAbortableTasks.clear()) : m.parentFlushed && m.status === 1 && (Ft(c, m), c.completedSegments.length === 1 && c.parentFlushed && o.partialBoundaries.push(c)));
    o.allPendingTasks--, o.allPendingTasks === 0 && (o = o.onAllReady, o());
  }
  function gt(o) {
    if (o.status !== 2) {
      var c = Et, m = rn.current;
      rn.current = tn;
      var b = Ar;
      Ar = o.responseState;
      try {
        var j = o.pingedTasks, R;
        for (R = 0; R < j.length; R++) {
          var U = j[R], X = o, ce = U.blockedSegment;
          if (ce.status === 0) {
            rt(U.context);
            try {
              Qe(X, U, U.node), X.responseState.generateStaticMarkup || ce.lastPushedText && ce.textEmbedded && ce.chunks.push("<!-- -->"), U.abortSet.delete(U), ce.status = 1, zt(X, U.blockedBoundary, ce);
            } catch (ct) {
              if (qr(), typeof ct == "object" && ct !== null && typeof ct.then == "function") {
                var xe = U.ping;
                ct.then(xe, xe);
              } else {
                U.abortSet.delete(U), ce.status = 4;
                var me = U.blockedBoundary, Re = ct, yt = nr(X, Re);
                if (me === null ? Zt(X, Re) : (me.pendingTasks--, me.forceClientRender || (me.forceClientRender = !0, me.errorDigest = yt, me.parentFlushed && X.clientRenderedBoundaries.push(me))), X.allPendingTasks--, X.allPendingTasks === 0) {
                  var ut = X.onAllReady;
                  ut();
                }
              }
            } finally {
            }
          }
        }
        j.splice(0, R), o.destination !== null && ir(o, o.destination);
      } catch (ct) {
        nr(o, ct), Zt(o, ct);
      } finally {
        Ar = b, rn.current = m, m === tn && rt(c);
      }
    }
  }
  function Qt(o, c, m) {
    switch (m.parentFlushed = !0, m.status) {
      case 0:
        var b = m.id = o.nextSegmentId++;
        return m.lastPushedText = !1, m.textEmbedded = !1, o = o.responseState, c.push('<template id="'), c.push(o.placeholderPrefix), o = b.toString(16), c.push(o), c.push('"></template>');
      case 1:
        m.status = 2;
        var j = !0;
        b = m.chunks;
        var R = 0;
        m = m.children;
        for (var U = 0; U < m.length; U++) {
          for (j = m[U]; R < j.index; R++)
            c.push(b[R]);
          j = or(o, c, j);
        }
        for (; R < b.length - 1; R++)
          c.push(b[R]);
        return R < b.length && (j = c.push(b[R])), j;
      default:
        throw Error(h(390));
    }
  }
  function or(o, c, m) {
    var b = m.boundary;
    if (b === null)
      return Qt(o, c, m);
    if (b.parentFlushed = !0, b.forceClientRender)
      return o.responseState.generateStaticMarkup || (b = b.errorDigest, c.push("<!--$!-->"), c.push("<template"), b && (c.push(' data-dgst="'), b = le(b), c.push(b), c.push('"')), c.push("></template>")), Qt(o, c, m), o = o.responseState.generateStaticMarkup ? !0 : c.push("<!--/$-->"), o;
    if (0 < b.pendingTasks) {
      b.rootSegmentID = o.nextSegmentId++, 0 < b.completedSegments.length && o.partialBoundaries.push(b);
      var j = o.responseState, R = j.nextSuspenseID++;
      return j = j.boundaryPrefix + R.toString(16), b = b.id = j, Je(c, o.responseState, b), Qt(o, c, m), c.push("<!--/$-->");
    }
    if (b.byteSize > o.progressiveChunkSize)
      return b.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(b), Je(c, o.responseState, b.id), Qt(o, c, m), c.push("<!--/$-->");
    if (o.responseState.generateStaticMarkup || c.push("<!--$-->"), m = b.completedSegments, m.length !== 1)
      throw Error(h(391));
    return or(o, c, m[0]), o = o.responseState.generateStaticMarkup ? !0 : c.push("<!--/$-->"), o;
  }
  function on(o, c, m) {
    return pt(c, o.responseState, m.formatContext, m.id), or(o, c, m), Ke(c, m.formatContext);
  }
  function an(o, c, m) {
    for (var b = m.completedSegments, j = 0; j < b.length; j++)
      jr(o, c, m, b[j]);
    if (b.length = 0, o = o.responseState, b = m.id, m = m.rootSegmentID, c.push(o.startInlineScript), o.sentCompleteBoundaryFunction ? c.push('$RC("') : (o.sentCompleteBoundaryFunction = !0, c.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), b === null)
      throw Error(h(395));
    return m = m.toString(16), c.push(b), c.push('","'), c.push(o.segmentPrefix), c.push(m), c.push('")<\/script>');
  }
  function jr(o, c, m, b) {
    if (b.status === 2)
      return !0;
    var j = b.id;
    if (j === -1) {
      if ((b.id = m.rootSegmentID) === -1)
        throw Error(h(392));
      return on(o, c, b);
    }
    return on(o, c, b), o = o.responseState, c.push(o.startInlineScript), o.sentCompleteSegmentFunction ? c.push('$RS("') : (o.sentCompleteSegmentFunction = !0, c.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), c.push(o.segmentPrefix), j = j.toString(16), c.push(j), c.push('","'), c.push(o.placeholderPrefix), c.push(j), c.push('")<\/script>');
  }
  function ir(o, c) {
    try {
      var m = o.completedRootSegment;
      if (m !== null && o.pendingRootTasks === 0) {
        or(o, c, m), o.completedRootSegment = null;
        var b = o.responseState.bootstrapChunks;
        for (m = 0; m < b.length - 1; m++)
          c.push(b[m]);
        m < b.length && c.push(b[m]);
      }
      var j = o.clientRenderedBoundaries, R;
      for (R = 0; R < j.length; R++) {
        var U = j[R];
        b = c;
        var X = o.responseState, ce = U.id, xe = U.errorDigest, me = U.errorMessage, Re = U.errorComponentStack;
        if (b.push(X.startInlineScript), X.sentClientRenderFunction ? b.push('$RX("') : (X.sentClientRenderFunction = !0, b.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), ce === null)
          throw Error(h(395));
        if (b.push(ce), b.push('"'), xe || me || Re) {
          b.push(",");
          var yt = Ne(xe || "");
          b.push(yt);
        }
        if (me || Re) {
          b.push(",");
          var ut = Ne(me || "");
          b.push(ut);
        }
        if (Re) {
          b.push(",");
          var ct = Ne(Re);
          b.push(ct);
        }
        if (!b.push(")<\/script>")) {
          o.destination = null, R++, j.splice(0, R);
          return;
        }
      }
      j.splice(0, R);
      var Xt = o.completedBoundaries;
      for (R = 0; R < Xt.length; R++)
        if (!an(o, c, Xt[R])) {
          o.destination = null, R++, Xt.splice(0, R);
          return;
        }
      Xt.splice(0, R);
      var Ct = o.partialBoundaries;
      for (R = 0; R < Ct.length; R++) {
        var Lr = Ct[R];
        e: {
          j = o, U = c;
          var ar = Lr.completedSegments;
          for (X = 0; X < ar.length; X++)
            if (!jr(j, U, Lr, ar[X])) {
              X++, ar.splice(0, X);
              var xr = !1;
              break e;
            }
          ar.splice(0, X), xr = !0;
        }
        if (!xr) {
          o.destination = null, R++, Ct.splice(0, R);
          return;
        }
      }
      Ct.splice(0, R);
      var Jt = o.completedBoundaries;
      for (R = 0; R < Jt.length; R++)
        if (!an(o, c, Jt[R])) {
          o.destination = null, R++, Jt.splice(0, R);
          return;
        }
      Jt.splice(0, R);
    } finally {
      o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && c.push(null);
    }
  }
  function sn(o, c) {
    try {
      var m = o.abortableTasks;
      m.forEach(function(b) {
        return Pr(b, o, c);
      }), m.clear(), o.destination !== null && ir(o, o.destination);
    } catch (b) {
      nr(o, b), Zt(o, b);
    }
  }
  function Nr() {
  }
  function _r(o, c, m, b) {
    var j = !1, R = null, U = "", X = { push: function(xe) {
      return xe !== null && (U += xe), !0;
    }, destroy: function(xe) {
      j = !0, R = xe;
    } }, ce = !1;
    if (o = qn(o, _e(m, c ? c.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Nr, void 0, function() {
      ce = !0;
    }, void 0, void 0), gt(o), sn(o, b), o.status === 1)
      o.status = 2, X.destroy(o.fatalError);
    else if (o.status !== 2 && o.destination === null) {
      o.destination = X;
      try {
        ir(o, X);
      } catch (xe) {
        nr(o, xe), Zt(o, xe);
      }
    }
    if (j)
      throw R;
    if (!ce)
      throw Error(h(426));
    return U;
  }
  return No.renderToNodeStream = function() {
    throw Error(h(207));
  }, No.renderToStaticMarkup = function(o, c) {
    return _r(o, c, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, No.renderToStaticNodeStream = function() {
    throw Error(h(208));
  }, No.renderToString = function(o, c) {
    return _r(o, c, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, No.version = "18.2.0", No;
}
var Ys = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tc;
function bd() {
  if (tc)
    return Ys;
  tc = 1;
  var s = q;
  function h(i) {
    for (var f = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, v = 1; v < arguments.length; v++)
      f += "&args[]=" + encodeURIComponent(arguments[v]);
    return "Minified React error #" + i + "; visit " + f + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var S = null, E = 0;
  function p(i, f) {
    if (f.length !== 0)
      if (512 < f.length)
        0 < E && (i.enqueue(new Uint8Array(S.buffer, 0, E)), S = new Uint8Array(512), E = 0), i.enqueue(f);
      else {
        var v = S.length - E;
        v < f.length && (v === 0 ? i.enqueue(S) : (S.set(f.subarray(0, v), E), i.enqueue(S), f = f.subarray(v)), S = new Uint8Array(512), E = 0), S.set(f, E), E += f.length;
      }
  }
  function A(i, f) {
    return p(i, f), !0;
  }
  function W(i) {
    S && 0 < E && (i.enqueue(new Uint8Array(S.buffer, 0, E)), S = null, E = 0);
  }
  var H = new TextEncoder();
  function k(i) {
    return H.encode(i);
  }
  function D(i) {
    return H.encode(i);
  }
  function ne(i, f) {
    typeof i.error == "function" ? i.error(f) : i.close();
  }
  var P = Object.prototype.hasOwnProperty, ee = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, de = {}, le = {};
  function ge(i) {
    return P.call(le, i) ? !0 : P.call(de, i) ? !1 : ee.test(i) ? le[i] = !0 : (de[i] = !0, !1);
  }
  function Q(i, f, v, x, N, O, B) {
    this.acceptsBooleans = f === 2 || f === 3 || f === 4, this.attributeName = x, this.attributeNamespace = N, this.mustUseProperty = v, this.propertyName = i, this.type = f, this.sanitizeURL = O, this.removeEmptyString = B;
  }
  var z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    z[i] = new Q(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var f = i[0];
    z[f] = new Q(f, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    z[i] = new Q(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    z[i] = new Q(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    z[i] = new Q(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    z[i] = new Q(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    z[i] = new Q(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    z[i] = new Q(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    z[i] = new Q(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var te = /[\-:]([a-z])/g;
  function _(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var f = i.replace(
      te,
      _
    );
    z[f] = new Q(f, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var f = i.replace(te, _);
    z[f] = new Q(f, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var f = i.replace(te, _);
    z[f] = new Q(f, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    z[i] = new Q(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), z.xlinkHref = new Q("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    z[i] = new Q(i, 1, !1, i.toLowerCase(), null, !0, !0);
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
  }, M = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Y).forEach(function(i) {
    M.forEach(function(f) {
      f = f + i.charAt(0).toUpperCase() + i.substring(1), Y[f] = Y[i];
    });
  });
  var V = /["'&<>]/;
  function J(i) {
    if (typeof i == "boolean" || typeof i == "number")
      return "" + i;
    i = "" + i;
    var f = V.exec(i);
    if (f) {
      var v = "", x, N = 0;
      for (x = f.index; x < i.length; x++) {
        switch (i.charCodeAt(x)) {
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
        N !== x && (v += i.substring(N, x)), N = x + 1, v += f;
      }
      i = N !== x ? v + i.substring(N, x) : v;
    }
    return i;
  }
  var Ie = /([A-Z])/g, ue = /^ms-/, Oe = Array.isArray, Pe = D("<script>"), Ye = D("<\/script>"), it = D('<script src="'), Je = D('<script type="module" src="'), pt = D('" async=""><\/script>'), Ke = /(<\/|<)(s)(cript)/gi;
  function Ze(i, f, v, x) {
    return "" + f + (v === "s" ? "\\u0073" : "\\u0053") + x;
  }
  function Ne(i, f, v, x, N) {
    i = i === void 0 ? "" : i, f = f === void 0 ? Pe : D('<script nonce="' + J(f) + '">');
    var O = [];
    if (v !== void 0 && O.push(f, k(("" + v).replace(Ke, Ze)), Ye), x !== void 0)
      for (v = 0; v < x.length; v++)
        O.push(it, k(J(x[v])), pt);
    if (N !== void 0)
      for (x = 0; x < N.length; x++)
        O.push(Je, k(J(N[x])), pt);
    return { bootstrapChunks: O, startInlineScript: f, placeholderPrefix: D(i + "P:"), segmentPrefix: D(i + "S:"), boundaryPrefix: i + "B:", idPrefix: i, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function _e(i, f) {
    return { insertionMode: i, selectedValue: f };
  }
  function Z(i) {
    return _e(i === "http://www.w3.org/2000/svg" ? 2 : i === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function G(i, f, v) {
    switch (f) {
      case "select":
        return _e(1, v.value != null ? v.value : v.defaultValue);
      case "svg":
        return _e(2, null);
      case "math":
        return _e(3, null);
      case "foreignObject":
        return _e(1, null);
      case "table":
        return _e(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return _e(5, null);
      case "colgroup":
        return _e(7, null);
      case "tr":
        return _e(6, null);
    }
    return 4 <= i.insertionMode || i.insertionMode === 0 ? _e(1, null) : i;
  }
  var oe = D("<!-- -->");
  function ye(i, f, v, x) {
    return f === "" ? x : (x && i.push(oe), i.push(k(J(f))), !0);
  }
  var pe = /* @__PURE__ */ new Map(), ae = D(' style="'), se = D(":"), ve = D(";");
  function Se(i, f, v) {
    if (typeof v != "object")
      throw Error(h(62));
    f = !0;
    for (var x in v)
      if (P.call(v, x)) {
        var N = v[x];
        if (N != null && typeof N != "boolean" && N !== "") {
          if (x.indexOf("--") === 0) {
            var O = k(J(x));
            N = k(J(("" + N).trim()));
          } else {
            O = x;
            var B = pe.get(O);
            B !== void 0 || (B = D(J(O.replace(Ie, "-$1").toLowerCase().replace(ue, "-ms-"))), pe.set(O, B)), O = B, N = typeof N == "number" ? N === 0 || P.call(Y, x) ? k("" + N) : k(N + "px") : k(J(("" + N).trim()));
          }
          f ? (f = !1, i.push(ae, O, se, N)) : i.push(ve, O, se, N);
        }
      }
    f || i.push(Te);
  }
  var be = D(" "), he = D('="'), Te = D('"'), re = D('=""');
  function De(i, f, v, x) {
    switch (v) {
      case "style":
        Se(i, f, x);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < v.length) || v[0] !== "o" && v[0] !== "O" || v[1] !== "n" && v[1] !== "N") {
      if (f = z.hasOwnProperty(v) ? z[v] : null, f !== null) {
        switch (typeof x) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!f.acceptsBooleans)
              return;
        }
        switch (v = k(f.attributeName), f.type) {
          case 3:
            x && i.push(be, v, re);
            break;
          case 4:
            x === !0 ? i.push(be, v, re) : x !== !1 && i.push(be, v, he, k(J(x)), Te);
            break;
          case 5:
            isNaN(x) || i.push(be, v, he, k(J(x)), Te);
            break;
          case 6:
            !isNaN(x) && 1 <= x && i.push(be, v, he, k(J(x)), Te);
            break;
          default:
            f.sanitizeURL && (x = "" + x), i.push(be, v, he, k(J(x)), Te);
        }
      } else if (ge(v)) {
        switch (typeof x) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (f = v.toLowerCase().slice(0, 5), f !== "data-" && f !== "aria-")
              return;
        }
        i.push(be, k(v), he, k(J(x)), Te);
      }
    }
  }
  var $e = D(">"), mt = D("/>");
  function $t(i, f, v) {
    if (f != null) {
      if (v != null)
        throw Error(h(60));
      if (typeof f != "object" || !("__html" in f))
        throw Error(h(61));
      f = f.__html, f != null && i.push(k("" + f));
    }
  }
  function Tn(i) {
    var f = "";
    return s.Children.forEach(i, function(v) {
      v != null && (f += v);
    }), f;
  }
  var Tt = D(' selected=""');
  function gr(i, f, v, x) {
    i.push(st(v));
    var N = v = null, O;
    for (O in f)
      if (P.call(f, O)) {
        var B = f[O];
        if (B != null)
          switch (O) {
            case "children":
              v = B;
              break;
            case "dangerouslySetInnerHTML":
              N = B;
              break;
            default:
              De(i, x, O, B);
          }
      }
    return i.push($e), $t(i, N, v), typeof v == "string" ? (i.push(k(J(v))), null) : v;
  }
  var vr = D(`
`), En = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Et = /* @__PURE__ */ new Map();
  function st(i) {
    var f = Et.get(i);
    if (f === void 0) {
      if (!En.test(i))
        throw Error(h(65, i));
      f = D("<" + i), Et.set(i, f);
    }
    return f;
  }
  var ot = D("<!DOCTYPE html>");
  function Vr(i, f, v, x, N) {
    switch (f) {
      case "select":
        i.push(st("select"));
        var O = null, B = null;
        for (ke in v)
          if (P.call(v, ke)) {
            var K = v[ke];
            if (K != null)
              switch (ke) {
                case "children":
                  O = K;
                  break;
                case "dangerouslySetInnerHTML":
                  B = K;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  De(i, x, ke, K);
              }
          }
        return i.push($e), $t(i, B, O), O;
      case "option":
        B = N.selectedValue, i.push(st("option"));
        var we = K = null, Ce = null, ke = null;
        for (O in v)
          if (P.call(v, O)) {
            var Ve = v[O];
            if (Ve != null)
              switch (O) {
                case "children":
                  K = Ve;
                  break;
                case "selected":
                  Ce = Ve;
                  break;
                case "dangerouslySetInnerHTML":
                  ke = Ve;
                  break;
                case "value":
                  we = Ve;
                default:
                  De(i, x, O, Ve);
              }
          }
        if (B != null)
          if (v = we !== null ? "" + we : Tn(K), Oe(B)) {
            for (x = 0; x < B.length; x++)
              if ("" + B[x] === v) {
                i.push(Tt);
                break;
              }
          } else
            "" + B === v && i.push(Tt);
        else
          Ce && i.push(Tt);
        return i.push($e), $t(i, ke, K), K;
      case "textarea":
        i.push(st("textarea")), ke = B = O = null;
        for (K in v)
          if (P.call(v, K) && (we = v[K], we != null))
            switch (K) {
              case "children":
                ke = we;
                break;
              case "value":
                O = we;
                break;
              case "defaultValue":
                B = we;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(h(91));
              default:
                De(i, x, K, we);
            }
        if (O === null && B !== null && (O = B), i.push($e), ke != null) {
          if (O != null)
            throw Error(h(92));
          if (Oe(ke) && 1 < ke.length)
            throw Error(h(93));
          O = "" + ke;
        }
        return typeof O == "string" && O[0] === `
` && i.push(vr), O !== null && i.push(k(J("" + O))), null;
      case "input":
        i.push(st("input")), we = ke = K = O = null;
        for (B in v)
          if (P.call(v, B) && (Ce = v[B], Ce != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(399, "input"));
              case "defaultChecked":
                we = Ce;
                break;
              case "defaultValue":
                K = Ce;
                break;
              case "checked":
                ke = Ce;
                break;
              case "value":
                O = Ce;
                break;
              default:
                De(i, x, B, Ce);
            }
        return ke !== null ? De(
          i,
          x,
          "checked",
          ke
        ) : we !== null && De(i, x, "checked", we), O !== null ? De(i, x, "value", O) : K !== null && De(i, x, "value", K), i.push(mt), null;
      case "menuitem":
        i.push(st("menuitem"));
        for (var xt in v)
          if (P.call(v, xt) && (O = v[xt], O != null))
            switch (xt) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(400));
              default:
                De(i, x, xt, O);
            }
        return i.push($e), null;
      case "title":
        i.push(st("title")), O = null;
        for (Ve in v)
          if (P.call(v, Ve) && (B = v[Ve], B != null))
            switch (Ve) {
              case "children":
                O = B;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(h(434));
              default:
                De(i, x, Ve, B);
            }
        return i.push($e), O;
      case "listing":
      case "pre":
        i.push(st(f)), B = O = null;
        for (we in v)
          if (P.call(v, we) && (K = v[we], K != null))
            switch (we) {
              case "children":
                O = K;
                break;
              case "dangerouslySetInnerHTML":
                B = K;
                break;
              default:
                De(i, x, we, K);
            }
        if (i.push($e), B != null) {
          if (O != null)
            throw Error(h(60));
          if (typeof B != "object" || !("__html" in B))
            throw Error(h(61));
          v = B.__html, v != null && (typeof v == "string" && 0 < v.length && v[0] === `
` ? i.push(vr, k(v)) : i.push(k("" + v)));
        }
        return typeof O == "string" && O[0] === `
` && i.push(vr), O;
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
        i.push(st(f));
        for (var Mt in v)
          if (P.call(v, Mt) && (O = v[Mt], O != null))
            switch (Mt) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(399, f));
              default:
                De(i, x, Mt, O);
            }
        return i.push(mt), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return gr(i, v, f, x);
      case "html":
        return N.insertionMode === 0 && i.push(ot), gr(i, v, f, x);
      default:
        if (f.indexOf("-") === -1 && typeof v.is != "string")
          return gr(i, v, f, x);
        i.push(st(f)), B = O = null;
        for (Ce in v)
          if (P.call(v, Ce) && (K = v[Ce], K != null))
            switch (Ce) {
              case "children":
                O = K;
                break;
              case "dangerouslySetInnerHTML":
                B = K;
                break;
              case "style":
                Se(i, x, K);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                ge(Ce) && typeof K != "function" && typeof K != "symbol" && i.push(be, k(Ce), he, k(J(K)), Te);
            }
        return i.push($e), $t(i, B, O), O;
    }
  }
  var $r = D("</"), Gr = D(">"), rt = D('<template id="'), Zr = D('"></template>'), kn = D("<!--$-->"), Cn = D('<!--$?--><template id="'), Qr = D('"></template>'), Mr = D("<!--$!-->"), Xn = D("<!--/$-->"), Xr = D("<template"), qt = D('"'), Jr = D(' data-dgst="');
  D(' data-msg="'), D(' data-stck="');
  var In = D("></template>");
  function ht(i, f, v) {
    if (p(i, Cn), v === null)
      throw Error(h(395));
    return p(i, v), A(i, Qr);
  }
  var Pt = D('<div hidden id="'), er = D('">'), je = D("</div>"), tr = D('<svg aria-hidden="true" style="display:none" id="'), Dr = D('">'), mr = D("</svg>"), jt = D('<math aria-hidden="true" style="display:none" id="'), Rr = D('">'), Gt = D("</math>"), qe = D('<table hidden id="'), Kr = D('">'), qr = D("</table>"), Mn = D('<table hidden><tbody id="'), nt = D('">'), en = D("</tbody></table>"), Jn = D('<table hidden><tr id="'), Kn = D('">'), Nt = D("</tr></table>"), tn = D('<table hidden><colgroup id="'), Ar = D('">'), rn = D("</colgroup></table>");
  function yr(i, f, v, x) {
    switch (v.insertionMode) {
      case 0:
      case 1:
        return p(i, Pt), p(i, f.segmentPrefix), p(i, k(x.toString(16))), A(i, er);
      case 2:
        return p(i, tr), p(i, f.segmentPrefix), p(i, k(x.toString(16))), A(i, Dr);
      case 3:
        return p(i, jt), p(i, f.segmentPrefix), p(i, k(x.toString(16))), A(i, Rr);
      case 4:
        return p(i, qe), p(i, f.segmentPrefix), p(i, k(x.toString(16))), A(i, Kr);
      case 5:
        return p(i, Mn), p(i, f.segmentPrefix), p(i, k(x.toString(16))), A(i, nt);
      case 6:
        return p(i, Jn), p(i, f.segmentPrefix), p(i, k(x.toString(16))), A(i, Kn);
      case 7:
        return p(
          i,
          tn
        ), p(i, f.segmentPrefix), p(i, k(x.toString(16))), A(i, Ar);
      default:
        throw Error(h(397));
    }
  }
  function rr(i, f) {
    switch (f.insertionMode) {
      case 0:
      case 1:
        return A(i, je);
      case 2:
        return A(i, mr);
      case 3:
        return A(i, Gt);
      case 4:
        return A(i, qr);
      case 5:
        return A(i, en);
      case 6:
        return A(i, Nt);
      case 7:
        return A(i, rn);
      default:
        throw Error(h(397));
    }
  }
  var qn = D('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), nn = D('$RS("'), Or = D('","'), nr = D('")<\/script>'), Zt = D('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), _t = D('$RC("'), Sr = D('","'), br = D('")<\/script>'), wt = D('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Qe = D('$RX("'), Lt = D('"'), kt = D(")<\/script>"), at = D(","), Pr = /[<\u2028\u2029]/g;
  function Ft(i) {
    return JSON.stringify(i).replace(Pr, function(f) {
      switch (f) {
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
  var zt = Object.assign, gt = Symbol.for("react.element"), Qt = Symbol.for("react.portal"), or = Symbol.for("react.fragment"), on = Symbol.for("react.strict_mode"), an = Symbol.for("react.profiler"), jr = Symbol.for("react.provider"), ir = Symbol.for("react.context"), sn = Symbol.for("react.forward_ref"), Nr = Symbol.for("react.suspense"), _r = Symbol.for("react.suspense_list"), o = Symbol.for("react.memo"), c = Symbol.for("react.lazy"), m = Symbol.for("react.scope"), b = Symbol.for("react.debug_trace_mode"), j = Symbol.for("react.legacy_hidden"), R = Symbol.for("react.default_value"), U = Symbol.iterator;
  function X(i) {
    if (i == null)
      return null;
    if (typeof i == "function")
      return i.displayName || i.name || null;
    if (typeof i == "string")
      return i;
    switch (i) {
      case or:
        return "Fragment";
      case Qt:
        return "Portal";
      case an:
        return "Profiler";
      case on:
        return "StrictMode";
      case Nr:
        return "Suspense";
      case _r:
        return "SuspenseList";
    }
    if (typeof i == "object")
      switch (i.$$typeof) {
        case ir:
          return (i.displayName || "Context") + ".Consumer";
        case jr:
          return (i._context.displayName || "Context") + ".Provider";
        case sn:
          var f = i.render;
          return i = i.displayName, i || (i = f.displayName || f.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
        case o:
          return f = i.displayName || null, f !== null ? f : X(i.type) || "Memo";
        case c:
          f = i._payload, i = i._init;
          try {
            return X(i(f));
          } catch {
          }
      }
    return null;
  }
  var ce = {};
  function xe(i, f) {
    if (i = i.contextTypes, !i)
      return ce;
    var v = {}, x;
    for (x in i)
      v[x] = f[x];
    return v;
  }
  var me = null;
  function Re(i, f) {
    if (i !== f) {
      i.context._currentValue = i.parentValue, i = i.parent;
      var v = f.parent;
      if (i === null) {
        if (v !== null)
          throw Error(h(401));
      } else {
        if (v === null)
          throw Error(h(401));
        Re(i, v);
      }
      f.context._currentValue = f.value;
    }
  }
  function yt(i) {
    i.context._currentValue = i.parentValue, i = i.parent, i !== null && yt(i);
  }
  function ut(i) {
    var f = i.parent;
    f !== null && ut(f), i.context._currentValue = i.value;
  }
  function ct(i, f) {
    if (i.context._currentValue = i.parentValue, i = i.parent, i === null)
      throw Error(h(402));
    i.depth === f.depth ? Re(i, f) : ct(i, f);
  }
  function Xt(i, f) {
    var v = f.parent;
    if (v === null)
      throw Error(h(402));
    i.depth === v.depth ? Re(i, v) : Xt(i, v), f.context._currentValue = f.value;
  }
  function Ct(i) {
    var f = me;
    f !== i && (f === null ? ut(i) : i === null ? yt(f) : f.depth === i.depth ? Re(f, i) : f.depth > i.depth ? ct(f, i) : Xt(f, i), me = i);
  }
  var Lr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, f) {
    i = i._reactInternals, i.queue !== null && i.queue.push(f);
  }, enqueueReplaceState: function(i, f) {
    i = i._reactInternals, i.replace = !0, i.queue = [f];
  }, enqueueForceUpdate: function() {
  } };
  function ar(i, f, v, x) {
    var N = i.state !== void 0 ? i.state : null;
    i.updater = Lr, i.props = v, i.state = N;
    var O = { queue: [], replace: !1 };
    i._reactInternals = O;
    var B = f.contextType;
    if (i.context = typeof B == "object" && B !== null ? B._currentValue : x, B = f.getDerivedStateFromProps, typeof B == "function" && (B = B(v, N), N = B == null ? N : zt({}, N, B), i.state = N), typeof f.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function"))
      if (f = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), f !== i.state && Lr.enqueueReplaceState(i, i.state, null), O.queue !== null && 0 < O.queue.length)
        if (f = O.queue, B = O.replace, O.queue = null, O.replace = !1, B && f.length === 1)
          i.state = f[0];
        else {
          for (O = B ? f[0] : i.state, N = !0, B = B ? 1 : 0; B < f.length; B++) {
            var K = f[B];
            K = typeof K == "function" ? K.call(i, O, v, x) : K, K != null && (N ? (N = !1, O = zt({}, O, K)) : zt(O, K));
          }
          i.state = O;
        }
      else
        O.queue = null;
  }
  var xr = { id: 1, overflow: "" };
  function Jt(i, f, v) {
    var x = i.id;
    i = i.overflow;
    var N = 32 - ln(x) - 1;
    x &= ~(1 << N), v += 1;
    var O = 32 - ln(f) + N;
    if (30 < O) {
      var B = N - N % 5;
      return O = (x & (1 << B) - 1).toString(32), x >>= B, N -= B, { id: 1 << 32 - ln(f) + N | v << N | x, overflow: O + i };
    }
    return { id: 1 << O | v << N | x, overflow: i };
  }
  var ln = Math.clz32 ? Math.clz32 : eo, Ji = Math.log, Ki = Math.LN2;
  function eo(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (Ji(i) / Ki | 0) | 0;
  }
  function qi(i, f) {
    return i === f && (i !== 0 || 1 / i === 1 / f) || i !== i && f !== f;
  }
  var to = typeof Object.is == "function" ? Object.is : qi, Kt = null, un = null, Dn = null, ze = null, sr = !1, St = !1, wr = 0, lr = null, Rn = 0;
  function ur() {
    if (Kt === null)
      throw Error(h(321));
    return Kt;
  }
  function It() {
    if (0 < Rn)
      throw Error(h(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function ro() {
    return ze === null ? Dn === null ? (sr = !1, Dn = ze = It()) : (sr = !0, ze = Dn) : ze.next === null ? (sr = !1, ze = ze.next = It()) : (sr = !0, ze = ze.next), ze;
  }
  function no() {
    un = Kt = null, St = !1, Dn = null, Rn = 0, ze = lr = null;
  }
  function Vo(i, f) {
    return typeof f == "function" ? f(i) : f;
  }
  function $o(i, f, v) {
    if (Kt = ur(), ze = ro(), sr) {
      var x = ze.queue;
      if (f = x.dispatch, lr !== null && (v = lr.get(x), v !== void 0)) {
        lr.delete(x), x = ze.memoizedState;
        do
          x = i(x, v.action), v = v.next;
        while (v !== null);
        return ze.memoizedState = x, [x, f];
      }
      return [ze.memoizedState, f];
    }
    return i = i === Vo ? typeof f == "function" ? f() : f : v !== void 0 ? v(f) : f, ze.memoizedState = i, i = ze.queue = { last: null, dispatch: null }, i = i.dispatch = ea.bind(null, Kt, i), [ze.memoizedState, i];
  }
  function Go(i, f) {
    if (Kt = ur(), ze = ro(), f = f === void 0 ? null : f, ze !== null) {
      var v = ze.memoizedState;
      if (v !== null && f !== null) {
        var x = v[1];
        e:
          if (x === null)
            x = !1;
          else {
            for (var N = 0; N < x.length && N < f.length; N++)
              if (!to(f[N], x[N])) {
                x = !1;
                break e;
              }
            x = !0;
          }
        if (x)
          return v[0];
      }
    }
    return i = i(), ze.memoizedState = [i, f], i;
  }
  function ea(i, f, v) {
    if (25 <= Rn)
      throw Error(h(301));
    if (i === Kt)
      if (St = !0, i = { action: v, next: null }, lr === null && (lr = /* @__PURE__ */ new Map()), v = lr.get(f), v === void 0)
        lr.set(f, i);
      else {
        for (f = v; f.next !== null; )
          f = f.next;
        f.next = i;
      }
  }
  function ta() {
    throw Error(h(394));
  }
  function An() {
  }
  var On = { readContext: function(i) {
    return i._currentValue;
  }, useContext: function(i) {
    return ur(), i._currentValue;
  }, useMemo: Go, useReducer: $o, useRef: function(i) {
    Kt = ur(), ze = ro();
    var f = ze.memoizedState;
    return f === null ? (i = { current: i }, ze.memoizedState = i) : f;
  }, useState: function(i) {
    return $o(Vo, i);
  }, useInsertionEffect: An, useLayoutEffect: function() {
  }, useCallback: function(i, f) {
    return Go(function() {
      return i;
    }, f);
  }, useImperativeHandle: An, useEffect: An, useDebugValue: An, useDeferredValue: function(i) {
    return ur(), i;
  }, useTransition: function() {
    return ur(), [!1, ta];
  }, useId: function() {
    var i = un.treeContext, f = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - ln(i) - 1)).toString(32) + f;
    var v = Pn;
    if (v === null)
      throw Error(h(404));
    return f = wr++, i = ":" + v.idPrefix + "R" + i, 0 < f && (i += "H" + f.toString(32)), i + ":";
  }, useMutableSource: function(i, f) {
    return ur(), f(i._source);
  }, useSyncExternalStore: function(i, f, v) {
    if (v === void 0)
      throw Error(h(407));
    return v();
  } }, Pn = null, cn = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function ra(i) {
    return console.error(i), null;
  }
  function fn() {
  }
  function oo(i, f, v, x, N, O, B, K, we) {
    var Ce = [], ke = /* @__PURE__ */ new Set();
    return f = { destination: null, responseState: f, progressiveChunkSize: x === void 0 ? 12800 : x, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ke, pingedTasks: Ce, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: N === void 0 ? ra : N, onAllReady: O === void 0 ? fn : O, onShellReady: B === void 0 ? fn : B, onShellError: K === void 0 ? fn : K, onFatalError: we === void 0 ? fn : we }, v = Fr(f, 0, null, v, !1, !1), v.parentFlushed = !0, i = io(f, i, null, v, ke, ce, null, xr), Ce.push(i), f;
  }
  function io(i, f, v, x, N, O, B, K) {
    i.allPendingTasks++, v === null ? i.pendingRootTasks++ : v.pendingTasks++;
    var we = { node: f, ping: function() {
      var Ce = i.pingedTasks;
      Ce.push(we), Ce.length === 1 && qo(i);
    }, blockedBoundary: v, blockedSegment: x, abortSet: N, legacyContext: O, context: B, treeContext: K };
    return N.add(we), we;
  }
  function Fr(i, f, v, x, N, O) {
    return { status: 0, id: -1, index: f, parentFlushed: !1, chunks: [], children: [], formatContext: x, boundary: v, lastPushedText: N, textEmbedded: O };
  }
  function zr(i, f) {
    if (i = i.onError(f), i != null && typeof i != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function jn(i, f) {
    var v = i.onShellError;
    v(f), v = i.onFatalError, v(f), i.destination !== null ? (i.status = 2, ne(i.destination, f)) : (i.status = 1, i.fatalError = f);
  }
  function Zo(i, f, v, x, N) {
    for (Kt = {}, un = f, wr = 0, i = v(x, N); St; )
      St = !1, wr = 0, Rn += 1, ze = null, i = v(x, N);
    return no(), i;
  }
  function ao(i, f, v, x) {
    var N = v.render(), O = x.childContextTypes;
    if (O != null) {
      var B = f.legacyContext;
      if (typeof v.getChildContext != "function")
        x = B;
      else {
        v = v.getChildContext();
        for (var K in v)
          if (!(K in O))
            throw Error(h(108, X(x) || "Unknown", K));
        x = zt({}, B, v);
      }
      f.legacyContext = x, bt(i, f, N), f.legacyContext = B;
    } else
      bt(i, f, N);
  }
  function Qo(i, f) {
    if (i && i.defaultProps) {
      f = zt({}, f), i = i.defaultProps;
      for (var v in i)
        f[v] === void 0 && (f[v] = i[v]);
      return f;
    }
    return f;
  }
  function Nn(i, f, v, x, N) {
    if (typeof v == "function")
      if (v.prototype && v.prototype.isReactComponent) {
        N = xe(v, f.legacyContext);
        var O = v.contextType;
        O = new v(x, typeof O == "object" && O !== null ? O._currentValue : N), ar(O, v, x, N), ao(i, f, O, v);
      } else {
        O = xe(v, f.legacyContext), N = Zo(i, f, v, x, O);
        var B = wr !== 0;
        if (typeof N == "object" && N !== null && typeof N.render == "function" && N.$$typeof === void 0)
          ar(N, v, x, O), ao(i, f, N, v);
        else if (B) {
          x = f.treeContext, f.treeContext = Jt(x, 1, 0);
          try {
            bt(i, f, N);
          } finally {
            f.treeContext = x;
          }
        } else
          bt(i, f, N);
      }
    else if (typeof v == "string") {
      switch (N = f.blockedSegment, O = Vr(N.chunks, v, x, i.responseState, N.formatContext), N.lastPushedText = !1, B = N.formatContext, N.formatContext = G(B, v, x), _n(i, f, O), N.formatContext = B, v) {
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
          N.chunks.push($r, k(v), Gr);
      }
      N.lastPushedText = !1;
    } else {
      switch (v) {
        case j:
        case b:
        case on:
        case an:
        case or:
          bt(i, f, x.children);
          return;
        case _r:
          bt(i, f, x.children);
          return;
        case m:
          throw Error(h(343));
        case Nr:
          e: {
            v = f.blockedBoundary, N = f.blockedSegment, O = x.fallback, x = x.children, B = /* @__PURE__ */ new Set();
            var K = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: B, errorDigest: null }, we = Fr(i, N.chunks.length, K, N.formatContext, !1, !1);
            N.children.push(we), N.lastPushedText = !1;
            var Ce = Fr(i, 0, null, N.formatContext, !1, !1);
            Ce.parentFlushed = !0, f.blockedBoundary = K, f.blockedSegment = Ce;
            try {
              if (_n(
                i,
                f,
                x
              ), Ce.lastPushedText && Ce.textEmbedded && Ce.chunks.push(oe), Ce.status = 1, Ln(K, Ce), K.pendingTasks === 0)
                break e;
            } catch (ke) {
              Ce.status = 4, K.forceClientRender = !0, K.errorDigest = zr(i, ke);
            } finally {
              f.blockedBoundary = v, f.blockedSegment = N;
            }
            f = io(i, O, v, we, B, f.legacyContext, f.context, f.treeContext), i.pingedTasks.push(f);
          }
          return;
      }
      if (typeof v == "object" && v !== null)
        switch (v.$$typeof) {
          case sn:
            if (x = Zo(i, f, v.render, x, N), wr !== 0) {
              v = f.treeContext, f.treeContext = Jt(v, 1, 0);
              try {
                bt(i, f, x);
              } finally {
                f.treeContext = v;
              }
            } else
              bt(i, f, x);
            return;
          case o:
            v = v.type, x = Qo(v, x), Nn(i, f, v, x, N);
            return;
          case jr:
            if (N = x.children, v = v._context, x = x.value, O = v._currentValue, v._currentValue = x, B = me, me = x = { parent: B, depth: B === null ? 0 : B.depth + 1, context: v, parentValue: O, value: x }, f.context = x, bt(i, f, N), i = me, i === null)
              throw Error(h(403));
            x = i.parentValue, i.context._currentValue = x === R ? i.context._defaultValue : x, i = me = i.parent, f.context = i;
            return;
          case ir:
            x = x.children, x = x(v._currentValue), bt(i, f, x);
            return;
          case c:
            N = v._init, v = N(v._payload), x = Qo(v, x), Nn(i, f, v, x, void 0);
            return;
        }
      throw Error(h(
        130,
        v == null ? v : typeof v,
        ""
      ));
    }
  }
  function bt(i, f, v) {
    if (f.node = v, typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case gt:
          Nn(i, f, v.type, v.props, v.ref);
          return;
        case Qt:
          throw Error(h(257));
        case c:
          var x = v._init;
          v = x(v._payload), bt(i, f, v);
          return;
      }
      if (Oe(v)) {
        Xo(i, f, v);
        return;
      }
      if (v === null || typeof v != "object" ? x = null : (x = U && v[U] || v["@@iterator"], x = typeof x == "function" ? x : null), x && (x = x.call(v))) {
        if (v = x.next(), !v.done) {
          var N = [];
          do
            N.push(v.value), v = x.next();
          while (!v.done);
          Xo(i, f, N);
        }
        return;
      }
      throw i = Object.prototype.toString.call(v), Error(h(31, i === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : i));
    }
    typeof v == "string" ? (x = f.blockedSegment, x.lastPushedText = ye(f.blockedSegment.chunks, v, i.responseState, x.lastPushedText)) : typeof v == "number" && (x = f.blockedSegment, x.lastPushedText = ye(f.blockedSegment.chunks, "" + v, i.responseState, x.lastPushedText));
  }
  function Xo(i, f, v) {
    for (var x = v.length, N = 0; N < x; N++) {
      var O = f.treeContext;
      f.treeContext = Jt(O, x, N);
      try {
        _n(i, f, v[N]);
      } finally {
        f.treeContext = O;
      }
    }
  }
  function _n(i, f, v) {
    var x = f.blockedSegment.formatContext, N = f.legacyContext, O = f.context;
    try {
      return bt(i, f, v);
    } catch (we) {
      if (no(), typeof we == "object" && we !== null && typeof we.then == "function") {
        v = we;
        var B = f.blockedSegment, K = Fr(i, B.chunks.length, null, B.formatContext, B.lastPushedText, !0);
        B.children.push(K), B.lastPushedText = !1, i = io(i, f.node, f.blockedBoundary, K, f.abortSet, f.legacyContext, f.context, f.treeContext).ping, v.then(i, i), f.blockedSegment.formatContext = x, f.legacyContext = N, f.context = O, Ct(O);
      } else
        throw f.blockedSegment.formatContext = x, f.legacyContext = N, f.context = O, Ct(O), we;
    }
  }
  function na(i) {
    var f = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, Ko(this, f, i);
  }
  function Jo(i, f, v) {
    var x = i.blockedBoundary;
    i.blockedSegment.status = 3, x === null ? (f.allPendingTasks--, f.status !== 2 && (f.status = 2, f.destination !== null && f.destination.close())) : (x.pendingTasks--, x.forceClientRender || (x.forceClientRender = !0, i = v === void 0 ? Error(h(432)) : v, x.errorDigest = f.onError(i), x.parentFlushed && f.clientRenderedBoundaries.push(x)), x.fallbackAbortableTasks.forEach(function(N) {
      return Jo(N, f, v);
    }), x.fallbackAbortableTasks.clear(), f.allPendingTasks--, f.allPendingTasks === 0 && (x = f.onAllReady, x()));
  }
  function Ln(i, f) {
    if (f.chunks.length === 0 && f.children.length === 1 && f.children[0].boundary === null) {
      var v = f.children[0];
      v.id = f.id, v.parentFlushed = !0, v.status === 1 && Ln(i, v);
    } else
      i.completedSegments.push(f);
  }
  function Ko(i, f, v) {
    if (f === null) {
      if (v.parentFlushed) {
        if (i.completedRootSegment !== null)
          throw Error(h(389));
        i.completedRootSegment = v;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = fn, f = i.onShellReady, f());
    } else
      f.pendingTasks--, f.forceClientRender || (f.pendingTasks === 0 ? (v.parentFlushed && v.status === 1 && Ln(f, v), f.parentFlushed && i.completedBoundaries.push(f), f.fallbackAbortableTasks.forEach(na, i), f.fallbackAbortableTasks.clear()) : v.parentFlushed && v.status === 1 && (Ln(f, v), f.completedSegments.length === 1 && f.parentFlushed && i.partialBoundaries.push(f)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function qo(i) {
    if (i.status !== 2) {
      var f = me, v = cn.current;
      cn.current = On;
      var x = Pn;
      Pn = i.responseState;
      try {
        var N = i.pingedTasks, O;
        for (O = 0; O < N.length; O++) {
          var B = N[O], K = i, we = B.blockedSegment;
          if (we.status === 0) {
            Ct(B.context);
            try {
              bt(K, B, B.node), we.lastPushedText && we.textEmbedded && we.chunks.push(oe), B.abortSet.delete(B), we.status = 1, Ko(K, B.blockedBoundary, we);
            } catch (Dt) {
              if (no(), typeof Dt == "object" && Dt !== null && typeof Dt.then == "function") {
                var Ce = B.ping;
                Dt.then(Ce, Ce);
              } else {
                B.abortSet.delete(B), we.status = 4;
                var ke = B.blockedBoundary, Ve = Dt, xt = zr(K, Ve);
                if (ke === null ? jn(K, Ve) : (ke.pendingTasks--, ke.forceClientRender || (ke.forceClientRender = !0, ke.errorDigest = xt, ke.parentFlushed && K.clientRenderedBoundaries.push(ke))), K.allPendingTasks--, K.allPendingTasks === 0) {
                  var Mt = K.onAllReady;
                  Mt();
                }
              }
            } finally {
            }
          }
        }
        N.splice(0, O), i.destination !== null && so(i, i.destination);
      } catch (Dt) {
        zr(i, Dt), jn(i, Dt);
      } finally {
        Pn = x, cn.current = v, v === On && Ct(f);
      }
    }
  }
  function Fn(i, f, v) {
    switch (v.parentFlushed = !0, v.status) {
      case 0:
        var x = v.id = i.nextSegmentId++;
        return v.lastPushedText = !1, v.textEmbedded = !1, i = i.responseState, p(f, rt), p(f, i.placeholderPrefix), i = k(x.toString(16)), p(f, i), A(f, Zr);
      case 1:
        v.status = 2;
        var N = !0;
        x = v.chunks;
        var O = 0;
        v = v.children;
        for (var B = 0; B < v.length; B++) {
          for (N = v[B]; O < N.index; O++)
            p(f, x[O]);
          N = zn(i, f, N);
        }
        for (; O < x.length - 1; O++)
          p(f, x[O]);
        return O < x.length && (N = A(f, x[O])), N;
      default:
        throw Error(h(390));
    }
  }
  function zn(i, f, v) {
    var x = v.boundary;
    if (x === null)
      return Fn(i, f, v);
    if (x.parentFlushed = !0, x.forceClientRender)
      x = x.errorDigest, A(f, Mr), p(f, Xr), x && (p(f, Jr), p(f, k(J(x))), p(f, qt)), A(f, In), Fn(i, f, v);
    else if (0 < x.pendingTasks) {
      x.rootSegmentID = i.nextSegmentId++, 0 < x.completedSegments.length && i.partialBoundaries.push(x);
      var N = i.responseState, O = N.nextSuspenseID++;
      N = D(N.boundaryPrefix + O.toString(16)), x = x.id = N, ht(f, i.responseState, x), Fn(i, f, v);
    } else if (x.byteSize > i.progressiveChunkSize)
      x.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(x), ht(f, i.responseState, x.id), Fn(i, f, v);
    else {
      if (A(f, kn), v = x.completedSegments, v.length !== 1)
        throw Error(h(391));
      zn(i, f, v[0]);
    }
    return A(f, Xn);
  }
  function ei(i, f, v) {
    return yr(f, i.responseState, v.formatContext, v.id), zn(i, f, v), rr(f, v.formatContext);
  }
  function ti(i, f, v) {
    for (var x = v.completedSegments, N = 0; N < x.length; N++)
      ri(i, f, v, x[N]);
    if (x.length = 0, i = i.responseState, x = v.id, v = v.rootSegmentID, p(f, i.startInlineScript), i.sentCompleteBoundaryFunction ? p(f, _t) : (i.sentCompleteBoundaryFunction = !0, p(f, Zt)), x === null)
      throw Error(h(395));
    return v = k(v.toString(16)), p(f, x), p(f, Sr), p(f, i.segmentPrefix), p(f, v), A(f, br);
  }
  function ri(i, f, v, x) {
    if (x.status === 2)
      return !0;
    var N = x.id;
    if (N === -1) {
      if ((x.id = v.rootSegmentID) === -1)
        throw Error(h(392));
      return ei(i, f, x);
    }
    return ei(i, f, x), i = i.responseState, p(f, i.startInlineScript), i.sentCompleteSegmentFunction ? p(f, nn) : (i.sentCompleteSegmentFunction = !0, p(f, qn)), p(f, i.segmentPrefix), N = k(N.toString(16)), p(f, N), p(f, Or), p(f, i.placeholderPrefix), p(f, N), A(f, nr);
  }
  function so(i, f) {
    S = new Uint8Array(512), E = 0;
    try {
      var v = i.completedRootSegment;
      if (v !== null && i.pendingRootTasks === 0) {
        zn(i, f, v), i.completedRootSegment = null;
        var x = i.responseState.bootstrapChunks;
        for (v = 0; v < x.length - 1; v++)
          p(f, x[v]);
        v < x.length && A(f, x[v]);
      }
      var N = i.clientRenderedBoundaries, O;
      for (O = 0; O < N.length; O++) {
        var B = N[O];
        x = f;
        var K = i.responseState, we = B.id, Ce = B.errorDigest, ke = B.errorMessage, Ve = B.errorComponentStack;
        if (p(x, K.startInlineScript), K.sentClientRenderFunction ? p(x, Qe) : (K.sentClientRenderFunction = !0, p(
          x,
          wt
        )), we === null)
          throw Error(h(395));
        p(x, we), p(x, Lt), (Ce || ke || Ve) && (p(x, at), p(x, k(Ft(Ce || "")))), (ke || Ve) && (p(x, at), p(x, k(Ft(ke || "")))), Ve && (p(x, at), p(x, k(Ft(Ve)))), A(x, kt);
      }
      N.splice(0, O);
      var xt = i.completedBoundaries;
      for (O = 0; O < xt.length; O++)
        ti(i, f, xt[O]);
      xt.splice(0, O), W(f), S = new Uint8Array(512), E = 0;
      var Mt = i.partialBoundaries;
      for (O = 0; O < Mt.length; O++) {
        var Dt = Mt[O];
        e: {
          N = i, B = f;
          var Un = Dt.completedSegments;
          for (K = 0; K < Un.length; K++)
            if (!ri(
              N,
              B,
              Dt,
              Un[K]
            )) {
              K++, Un.splice(0, K);
              var oi = !1;
              break e;
            }
          Un.splice(0, K), oi = !0;
        }
        if (!oi) {
          i.destination = null, O++, Mt.splice(0, O);
          return;
        }
      }
      Mt.splice(0, O);
      var lo = i.completedBoundaries;
      for (O = 0; O < lo.length; O++)
        ti(i, f, lo[O]);
      lo.splice(0, O);
    } finally {
      W(f), i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && f.close();
    }
  }
  function ni(i, f) {
    try {
      var v = i.abortableTasks;
      v.forEach(function(x) {
        return Jo(x, i, f);
      }), v.clear(), i.destination !== null && so(i, i.destination);
    } catch (x) {
      zr(i, x), jn(i, x);
    }
  }
  return Ys.renderToReadableStream = function(i, f) {
    return new Promise(function(v, x) {
      var N, O, B = new Promise(function(ke, Ve) {
        O = ke, N = Ve;
      }), K = oo(i, Ne(f ? f.identifierPrefix : void 0, f ? f.nonce : void 0, f ? f.bootstrapScriptContent : void 0, f ? f.bootstrapScripts : void 0, f ? f.bootstrapModules : void 0), Z(f ? f.namespaceURI : void 0), f ? f.progressiveChunkSize : void 0, f ? f.onError : void 0, O, function() {
        var ke = new ReadableStream({ type: "bytes", pull: function(Ve) {
          if (K.status === 1)
            K.status = 2, ne(Ve, K.fatalError);
          else if (K.status !== 2 && K.destination === null) {
            K.destination = Ve;
            try {
              so(K, Ve);
            } catch (xt) {
              zr(K, xt), jn(K, xt);
            }
          }
        }, cancel: function() {
          ni(K);
        } }, { highWaterMark: 0 });
        ke.allReady = B, v(ke);
      }, function(ke) {
        B.catch(function() {
        }), x(ke);
      }, N);
      if (f && f.signal) {
        var we = f.signal, Ce = function() {
          ni(K, we.reason), we.removeEventListener("abort", Ce);
        };
        we.addEventListener("abort", Ce);
      }
      qo(K);
    });
  }, Ys.version = "18.2.0", Ys;
}
var _o = {};
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rc;
function xd() {
  return rc || (rc = 1, process.env.NODE_ENV !== "production" && function() {
    var s = q, h = "18.2.0", S = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
          a[u - 1] = arguments[u];
        A("warn", e, a);
      }
    }
    function p(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
          a[u - 1] = arguments[u];
        A("error", e, a);
      }
    }
    function A(e, r, a) {
      {
        var u = S.ReactDebugCurrentFrame, g = u.getStackAddendum();
        g !== "" && (r += "%s", a = a.concat([g]));
        var w = a.map(function(C) {
          return String(C);
        });
        w.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, w);
      }
    }
    function W(e) {
      e();
    }
    function H(e) {
    }
    function k(e, r) {
      D(e, r);
    }
    function D(e, r) {
      return e.push(r);
    }
    function ne(e) {
    }
    function P(e) {
      e.push(null);
    }
    function ee(e) {
      return e;
    }
    function de(e) {
      return e;
    }
    function le(e, r) {
      e.destroy(r);
    }
    function ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Q(e) {
      try {
        return z(e), !1;
      } catch {
        return !0;
      }
    }
    function z(e) {
      return "" + e;
    }
    function te(e, r) {
      if (Q(e))
        return p("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", r, ge(e)), z(e);
    }
    function _(e, r) {
      if (Q(e))
        return p("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", r, ge(e)), z(e);
    }
    function Y(e) {
      if (Q(e))
        return p("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", ge(e)), z(e);
    }
    var M = Object.prototype.hasOwnProperty, V = 0, J = 1, Ie = 2, ue = 3, Oe = 4, Pe = 5, Ye = 6, it = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Je = it + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", pt = new RegExp("^[" + it + "][" + Je + "]*$"), Ke = {}, Ze = {};
    function Ne(e) {
      return M.call(Ze, e) ? !0 : M.call(Ke, e) ? !1 : pt.test(e) ? (Ze[e] = !0, !0) : (Ke[e] = !0, p("Invalid attribute name: `%s`", e), !1);
    }
    function _e(e, r, a, u) {
      if (a !== null && a.type === V)
        return !1;
      switch (typeof r) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (u)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var g = e.toLowerCase().slice(0, 5);
          return g !== "data-" && g !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Z(e) {
      return oe.hasOwnProperty(e) ? oe[e] : null;
    }
    function G(e, r, a, u, g, w, C) {
      this.acceptsBooleans = r === Ie || r === ue || r === Oe, this.attributeName = u, this.attributeNamespace = g, this.mustUseProperty = a, this.propertyName = e, this.type = r, this.sanitizeURL = w, this.removeEmptyString = C;
    }
    var oe = {}, ye = [
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
    ye.forEach(function(e) {
      oe[e] = new G(
        e,
        V,
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
      oe[r] = new G(
        r,
        J,
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
      oe[e] = new G(
        e,
        Ie,
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
      oe[e] = new G(
        e,
        Ie,
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
      oe[e] = new G(
        e,
        ue,
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
      oe[e] = new G(
        e,
        ue,
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
      oe[e] = new G(
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
      oe[e] = new G(
        e,
        Ye,
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
      oe[e] = new G(
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
    var pe = /[\-\:]([a-z])/g, ae = function(e) {
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
      var r = e.replace(pe, ae);
      oe[r] = new G(
        r,
        J,
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
      var r = e.replace(pe, ae);
      oe[r] = new G(
        r,
        J,
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
      var r = e.replace(pe, ae);
      oe[r] = new G(
        r,
        J,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      oe[e] = new G(
        e,
        J,
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
    var se = "xlinkHref";
    oe[se] = new G(
      "xlinkHref",
      J,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      oe[e] = new G(
        e,
        J,
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
    var ve = {
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
    var be = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ve).forEach(function(e) {
      be.forEach(function(r) {
        ve[Se(r, e)] = ve[e];
      });
    });
    var he = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Te(e, r) {
      he[r.type] || r.onChange || r.onInput || r.readOnly || r.disabled || r.value == null || p("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), r.onChange || r.readOnly || r.disabled || r.checked == null || p("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function re(e, r) {
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
    var De = {
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
    }, $e = {}, mt = new RegExp("^(aria)-[" + Je + "]*$"), $t = new RegExp("^(aria)[A-Z][" + Je + "]*$");
    function Tn(e, r) {
      {
        if (M.call($e, r) && $e[r])
          return !0;
        if ($t.test(r)) {
          var a = "aria-" + r.slice(4).toLowerCase(), u = De.hasOwnProperty(a) ? a : null;
          if (u == null)
            return p("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", r), $e[r] = !0, !0;
          if (r !== u)
            return p("Invalid ARIA attribute `%s`. Did you mean `%s`?", r, u), $e[r] = !0, !0;
        }
        if (mt.test(r)) {
          var g = r.toLowerCase(), w = De.hasOwnProperty(g) ? g : null;
          if (w == null)
            return $e[r] = !0, !1;
          if (r !== w)
            return p("Unknown ARIA attribute `%s`. Did you mean `%s`?", r, w), $e[r] = !0, !0;
        }
      }
      return !0;
    }
    function Tt(e, r) {
      {
        var a = [];
        for (var u in r) {
          var g = Tn(e, u);
          g || a.push(u);
        }
        var w = a.map(function(C) {
          return "`" + C + "`";
        }).join(", ");
        a.length === 1 ? p("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", w, e) : a.length > 1 && p("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", w, e);
      }
    }
    function gr(e, r) {
      re(e, r) || Tt(e, r);
    }
    var vr = !1;
    function En(e, r) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        r != null && r.value === null && !vr && (vr = !0, e === "select" && r.multiple ? p("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : p("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Et = {
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
    }, st = function() {
    };
    {
      var ot = {}, Vr = /^on./, $r = /^on[^A-Z]/, Gr = new RegExp("^(aria)-[" + Je + "]*$"), rt = new RegExp("^(aria)[A-Z][" + Je + "]*$");
      st = function(e, r, a, u) {
        if (M.call(ot, r) && ot[r])
          return !0;
        var g = r.toLowerCase();
        if (g === "onfocusin" || g === "onfocusout")
          return p("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ot[r] = !0, !0;
        if (u != null) {
          var w = u.registrationNameDependencies, C = u.possibleRegistrationNames;
          if (w.hasOwnProperty(r))
            return !0;
          var L = C.hasOwnProperty(g) ? C[g] : null;
          if (L != null)
            return p("Invalid event handler property `%s`. Did you mean `%s`?", r, L), ot[r] = !0, !0;
          if (Vr.test(r))
            return p("Unknown event handler property `%s`. It will be ignored.", r), ot[r] = !0, !0;
        } else if (Vr.test(r))
          return $r.test(r) && p("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", r), ot[r] = !0, !0;
        if (Gr.test(r) || rt.test(r))
          return !0;
        if (g === "innerhtml")
          return p("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ot[r] = !0, !0;
        if (g === "aria")
          return p("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ot[r] = !0, !0;
        if (g === "is" && a !== null && a !== void 0 && typeof a != "string")
          return p("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), ot[r] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return p("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", r), ot[r] = !0, !0;
        var $ = Z(r), ie = $ !== null && $.type === V;
        if (Et.hasOwnProperty(g)) {
          var fe = Et[g];
          if (fe !== r)
            return p("Invalid DOM property `%s`. Did you mean `%s`?", r, fe), ot[r] = !0, !0;
        } else if (!ie && r !== g)
          return p("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", r, g), ot[r] = !0, !0;
        return typeof a == "boolean" && _e(r, a, $, !1) ? (a ? p('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, r, r, a, r) : p('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, r, r, a, r, r, r), ot[r] = !0, !0) : ie ? !0 : _e(r, a, $, !1) ? (ot[r] = !0, !1) : ((a === "false" || a === "true") && $ !== null && $.type === ue && (p("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, r, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', r, a), ot[r] = !0), !0);
      };
    }
    var Zr = function(e, r, a) {
      {
        var u = [];
        for (var g in r) {
          var w = st(e, g, r[g], a);
          w || u.push(g);
        }
        var C = u.map(function(L) {
          return "`" + L + "`";
        }).join(", ");
        u.length === 1 ? p("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", C, e) : u.length > 1 && p("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", C, e);
      }
    };
    function kn(e, r, a) {
      re(e, r) || Zr(e, r, a);
    }
    var Cn = function() {
    };
    {
      var Qr = /^(?:webkit|moz|o)[A-Z]/, Mr = /^-ms-/, Xn = /-(.)/g, Xr = /;\s*$/, qt = {}, Jr = {}, In = !1, ht = !1, Pt = function(e) {
        return e.replace(Xn, function(r, a) {
          return a.toUpperCase();
        });
      }, er = function(e) {
        qt.hasOwnProperty(e) && qt[e] || (qt[e] = !0, p(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Pt(e.replace(Mr, "ms-"))
        ));
      }, je = function(e) {
        qt.hasOwnProperty(e) && qt[e] || (qt[e] = !0, p("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, tr = function(e, r) {
        Jr.hasOwnProperty(r) && Jr[r] || (Jr[r] = !0, p(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, r.replace(Xr, "")));
      }, Dr = function(e, r) {
        In || (In = !0, p("`NaN` is an invalid value for the `%s` css style property.", e));
      }, mr = function(e, r) {
        ht || (ht = !0, p("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Cn = function(e, r) {
        e.indexOf("-") > -1 ? er(e) : Qr.test(e) ? je(e) : Xr.test(r) && tr(e, r), typeof r == "number" && (isNaN(r) ? Dr(e, r) : isFinite(r) || mr(e, r));
      };
    }
    var jt = Cn, Rr = /["'&<>]/;
    function Gt(e) {
      Y(e);
      var r = "" + e, a = Rr.exec(r);
      if (!a)
        return r;
      var u, g = "", w, C = 0;
      for (w = a.index; w < r.length; w++) {
        switch (r.charCodeAt(w)) {
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
        C !== w && (g += r.substring(C, w)), C = w + 1, g += u;
      }
      return C !== w ? g + r.substring(C, w) : g;
    }
    function qe(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : Gt(e);
    }
    var Kr = /([A-Z])/g, qr = /^ms-/;
    function Mn(e) {
      return e.replace(Kr, "-$1").toLowerCase().replace(qr, "-ms-");
    }
    var nt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, en = !1;
    function Jn(e) {
      !en && nt.test(e) && (en = !0, p("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var Kn = Array.isArray;
    function Nt(e) {
      return Kn(e);
    }
    var tn = "<script>", Ar = "<\/script>", rn = '<script src="', yr = '<script type="module" src="', rr = '" async=""><\/script>';
    function qn(e) {
      return Y(e), ("" + e).replace(nn, Or);
    }
    var nn = /(<\/|<)(s)(cript)/gi, Or = function(e, r, a, u) {
      return "" + r + (a === "s" ? "\\u0073" : "\\u0053") + u;
    };
    function nr(e, r, a, u, g) {
      var w = e === void 0 ? "" : e, C = r === void 0 ? tn : '<script nonce="' + qe(r) + '">', L = [];
      if (a !== void 0 && L.push(C, qn(a), Ar), u !== void 0)
        for (var $ = 0; $ < u.length; $++)
          L.push(rn, qe(u[$]), rr);
      if (g !== void 0)
        for (var ie = 0; ie < g.length; ie++)
          L.push(yr, qe(g[ie]), rr);
      return {
        bootstrapChunks: L,
        startInlineScript: C,
        placeholderPrefix: w + "P:",
        segmentPrefix: w + "S:",
        boundaryPrefix: w + "B:",
        idPrefix: w,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var Zt = 0, _t = 1, Sr = 2, br = 3, wt = 4, Qe = 5, Lt = 6, kt = 7;
    function at(e, r) {
      return {
        insertionMode: e,
        selectedValue: r
      };
    }
    function Pr(e, r, a) {
      switch (r) {
        case "select":
          return at(_t, a.value != null ? a.value : a.defaultValue);
        case "svg":
          return at(Sr, null);
        case "math":
          return at(br, null);
        case "foreignObject":
          return at(_t, null);
        case "table":
          return at(wt, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return at(Qe, null);
        case "colgroup":
          return at(kt, null);
        case "tr":
          return at(Lt, null);
      }
      return e.insertionMode >= wt || e.insertionMode === Zt ? at(_t, null) : e;
    }
    var Ft = null;
    function zt(e) {
      var r = e.nextSuspenseID++;
      return e.boundaryPrefix + r.toString(16);
    }
    function gt(e, r, a) {
      var u = e.idPrefix, g = ":" + u + "R" + r;
      return a > 0 && (g += "H" + a.toString(32)), g + ":";
    }
    function Qt(e) {
      return qe(e);
    }
    var or = "<!-- -->";
    function on(e, r, a, u) {
      return r === "" ? u : (u && e.push(or), e.push(Qt(r)), !0);
    }
    function an(e, r, a, u) {
      a && u && e.push(or);
    }
    var jr = /* @__PURE__ */ new Map();
    function ir(e) {
      var r = jr.get(e);
      if (r !== void 0)
        return r;
      var a = qe(Mn(e));
      return jr.set(e, a), a;
    }
    var sn = ' style="', Nr = ":", _r = ";";
    function o(e, r, a) {
      if (typeof a != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var u = !0;
      for (var g in a)
        if (M.call(a, g)) {
          var w = a[g];
          if (!(w == null || typeof w == "boolean" || w === "")) {
            var C = void 0, L = void 0, $ = g.indexOf("--") === 0;
            $ ? (C = qe(g), _(w, g), L = qe(("" + w).trim())) : (jt(g, w), C = ir(g), typeof w == "number" ? w !== 0 && !M.call(ve, g) ? L = w + "px" : L = "" + w : (_(w, g), L = qe(("" + w).trim()))), u ? (u = !1, e.push(sn, C, Nr, L)) : e.push(_r, C, Nr, L);
          }
        }
      u || e.push(b);
    }
    var c = " ", m = '="', b = '"', j = '=""';
    function R(e, r, a, u) {
      switch (a) {
        case "style": {
          o(e, r, u);
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
        var g = Z(a);
        if (g !== null) {
          switch (typeof u) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!g.acceptsBooleans)
                return;
          }
          var w = g.attributeName, C = w;
          switch (g.type) {
            case ue:
              u && e.push(c, C, j);
              return;
            case Oe:
              u === !0 ? e.push(c, C, j) : u === !1 || e.push(c, C, m, qe(u), b);
              return;
            case Pe:
              isNaN(u) || e.push(c, C, m, qe(u), b);
              break;
            case Ye:
              !isNaN(u) && u >= 1 && e.push(c, C, m, qe(u), b);
              break;
            default:
              g.sanitizeURL && (te(u, w), u = "" + u, Jn(u)), e.push(c, C, m, qe(u), b);
          }
        } else if (Ne(a)) {
          switch (typeof u) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var L = a.toLowerCase().slice(0, 5);
              if (L !== "data-" && L !== "aria-")
                return;
            }
          }
          e.push(c, a, m, qe(u), b);
        }
      }
    }
    var U = ">", X = "/>";
    function ce(e, r, a) {
      if (r != null) {
        if (a != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof r != "object" || !("__html" in r))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var u = r.__html;
        u != null && (Y(u), e.push("" + u));
      }
    }
    var xe = !1, me = !1, Re = !1, yt = !1, ut = !1, ct = !1, Xt = !1;
    function Ct(e, r) {
      {
        var a = e[r];
        if (a != null) {
          var u = Nt(a);
          e.multiple && !u ? p("The `%s` prop supplied to <select> must be an array if `multiple` is true.", r) : !e.multiple && u && p("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", r);
        }
      }
    }
    function Lr(e, r, a) {
      Te("select", r), Ct(r, "value"), Ct(r, "defaultValue"), r.value !== void 0 && r.defaultValue !== void 0 && !Re && (p("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Re = !0), e.push(St("select"));
      var u = null, g = null;
      for (var w in r)
        if (M.call(r, w)) {
          var C = r[w];
          if (C == null)
            continue;
          switch (w) {
            case "children":
              u = C;
              break;
            case "dangerouslySetInnerHTML":
              g = C;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              R(e, a, w, C);
              break;
          }
        }
      return e.push(U), ce(e, g, u), u;
    }
    function ar(e) {
      var r = "";
      return s.Children.forEach(e, function(a) {
        a != null && (r += a, !ut && typeof a != "string" && typeof a != "number" && (ut = !0, p("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), r;
    }
    var xr = ' selected=""';
    function Jt(e, r, a, u) {
      var g = u.selectedValue;
      e.push(St("option"));
      var w = null, C = null, L = null, $ = null;
      for (var ie in r)
        if (M.call(r, ie)) {
          var fe = r[ie];
          if (fe == null)
            continue;
          switch (ie) {
            case "children":
              w = fe;
              break;
            case "selected":
              L = fe, Xt || (p("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Xt = !0);
              break;
            case "dangerouslySetInnerHTML":
              $ = fe;
              break;
            case "value":
              C = fe;
            default:
              R(e, a, ie, fe);
              break;
          }
        }
      if (g != null) {
        var Ee;
        if (C !== null ? (te(C, "value"), Ee = "" + C) : ($ !== null && (ct || (ct = !0, p("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), Ee = ar(w)), Nt(g))
          for (var Ge = 0; Ge < g.length; Ge++) {
            te(g[Ge], "value");
            var dt = "" + g[Ge];
            if (dt === Ee) {
              e.push(xr);
              break;
            }
          }
        else
          te(g, "select.value"), "" + g === Ee && e.push(xr);
      } else
        L && e.push(xr);
      return e.push(U), ce(e, $, w), w;
    }
    function ln(e, r, a) {
      Te("input", r), r.checked !== void 0 && r.defaultChecked !== void 0 && !me && (p("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", r.type), me = !0), r.value !== void 0 && r.defaultValue !== void 0 && !xe && (p("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", r.type), xe = !0), e.push(St("input"));
      var u = null, g = null, w = null, C = null;
      for (var L in r)
        if (M.call(r, L)) {
          var $ = r[L];
          if ($ == null)
            continue;
          switch (L) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              C = $;
              break;
            case "defaultValue":
              g = $;
              break;
            case "checked":
              w = $;
              break;
            case "value":
              u = $;
              break;
            default:
              R(e, a, L, $);
              break;
          }
        }
      return w !== null ? R(e, a, "checked", w) : C !== null && R(e, a, "checked", C), u !== null ? R(e, a, "value", u) : g !== null && R(e, a, "value", g), e.push(X), null;
    }
    function Ji(e, r, a) {
      Te("textarea", r), r.value !== void 0 && r.defaultValue !== void 0 && !yt && (p("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), yt = !0), e.push(St("textarea"));
      var u = null, g = null, w = null;
      for (var C in r)
        if (M.call(r, C)) {
          var L = r[C];
          if (L == null)
            continue;
          switch (C) {
            case "children":
              w = L;
              break;
            case "value":
              u = L;
              break;
            case "defaultValue":
              g = L;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              R(e, a, C, L);
              break;
          }
        }
      if (u === null && g !== null && (u = g), e.push(U), w != null) {
        if (p("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), u != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Nt(w)) {
          if (w.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          Y(w[0]), u = "" + w[0];
        }
        Y(w), u = "" + w;
      }
      return typeof u == "string" && u[0] === `
` && e.push(un), u !== null && (te(u, "value"), e.push(Qt("" + u))), null;
    }
    function Ki(e, r, a, u) {
      e.push(St(a));
      for (var g in r)
        if (M.call(r, g)) {
          var w = r[g];
          if (w == null)
            continue;
          switch (g) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(a + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              R(e, u, g, w);
              break;
          }
        }
      return e.push(X), null;
    }
    function eo(e, r, a) {
      e.push(St("menuitem"));
      for (var u in r)
        if (M.call(r, u)) {
          var g = r[u];
          if (g == null)
            continue;
          switch (u) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              R(e, a, u, g);
              break;
          }
        }
      return e.push(U), null;
    }
    function qi(e, r, a) {
      e.push(St("title"));
      var u = null;
      for (var g in r)
        if (M.call(r, g)) {
          var w = r[g];
          if (w == null)
            continue;
          switch (g) {
            case "children":
              u = w;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              R(e, a, g, w);
              break;
          }
        }
      e.push(U);
      {
        var C = Array.isArray(u) && u.length < 2 ? u[0] || null : u;
        Array.isArray(u) && u.length > 1 ? p("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : C != null && C.$$typeof != null ? p("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : C != null && typeof C != "string" && typeof C != "number" && p("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return u;
    }
    function to(e, r, a, u) {
      e.push(St(a));
      var g = null, w = null;
      for (var C in r)
        if (M.call(r, C)) {
          var L = r[C];
          if (L == null)
            continue;
          switch (C) {
            case "children":
              g = L;
              break;
            case "dangerouslySetInnerHTML":
              w = L;
              break;
            default:
              R(e, u, C, L);
              break;
          }
        }
      return e.push(U), ce(e, w, g), typeof g == "string" ? (e.push(Qt(g)), null) : g;
    }
    function Kt(e, r, a, u) {
      e.push(St(a));
      var g = null, w = null;
      for (var C in r)
        if (M.call(r, C)) {
          var L = r[C];
          if (L == null)
            continue;
          switch (C) {
            case "children":
              g = L;
              break;
            case "dangerouslySetInnerHTML":
              w = L;
              break;
            case "style":
              o(e, u, L);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              Ne(C) && typeof L != "function" && typeof L != "symbol" && e.push(c, C, m, qe(L), b);
              break;
          }
        }
      return e.push(U), ce(e, w, g), g;
    }
    var un = `
`;
    function Dn(e, r, a, u) {
      e.push(St(a));
      var g = null, w = null;
      for (var C in r)
        if (M.call(r, C)) {
          var L = r[C];
          if (L == null)
            continue;
          switch (C) {
            case "children":
              g = L;
              break;
            case "dangerouslySetInnerHTML":
              w = L;
              break;
            default:
              R(e, u, C, L);
              break;
          }
        }
      if (e.push(U), w != null) {
        if (g != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof w != "object" || !("__html" in w))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var $ = w.__html;
        $ != null && (typeof $ == "string" && $.length > 0 && $[0] === `
` ? e.push(un, $) : (Y($), e.push("" + $)));
      }
      return typeof g == "string" && g[0] === `
` && e.push(un), g;
    }
    var ze = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, sr = /* @__PURE__ */ new Map();
    function St(e) {
      var r = sr.get(e);
      if (r === void 0) {
        if (!ze.test(e))
          throw new Error("Invalid tag: " + e);
        r = "<" + e, sr.set(e, r);
      }
      return r;
    }
    var wr = "<!DOCTYPE html>";
    function lr(e, r, a, u, g) {
      switch (gr(r, a), En(r, a), kn(r, a, null), !a.suppressContentEditableWarning && a.contentEditable && a.children != null && p("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), g.insertionMode !== Sr && g.insertionMode !== br && r.indexOf("-") === -1 && typeof a.is != "string" && r.toLowerCase() !== r && p("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", r), r) {
        case "select":
          return Lr(e, a, u);
        case "option":
          return Jt(e, a, u, g);
        case "textarea":
          return Ji(e, a, u);
        case "input":
          return ln(e, a, u);
        case "menuitem":
          return eo(e, a, u);
        case "title":
          return qi(e, a, u);
        case "listing":
        case "pre":
          return Dn(e, a, r, u);
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
          return Ki(e, a, r, u);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return to(e, a, r, u);
        case "html":
          return g.insertionMode === Zt && e.push(wr), to(e, a, r, u);
        default:
          return r.indexOf("-") === -1 && typeof a.is != "string" ? to(e, a, r, u) : Kt(e, a, r, u);
      }
    }
    var Rn = "</", ur = ">";
    function It(e, r, a) {
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
          e.push(Rn, r, ur);
      }
    }
    function ro(e, r) {
      for (var a = r.bootstrapChunks, u = 0; u < a.length - 1; u++)
        k(e, a[u]);
      return u < a.length ? D(e, a[u]) : !0;
    }
    var no = '<template id="', Vo = '"></template>';
    function $o(e, r, a) {
      k(e, no), k(e, r.placeholderPrefix);
      var u = a.toString(16);
      return k(e, u), D(e, Vo);
    }
    var Go = "<!--$-->", ea = '<!--$?--><template id="', ta = '"></template>', An = "<!--$!-->", On = "<!--/$-->", Pn = "<template", cn = '"', ra = ' data-dgst="', fn = ' data-msg="', oo = ' data-stck="', io = "></template>";
    function Fr(e, r) {
      return D(e, Go);
    }
    function zr(e, r, a) {
      if (k(e, ea), a === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return k(e, a), D(e, ta);
    }
    function jn(e, r, a, u, g) {
      var w;
      return w = D(e, An), k(e, Pn), a && (k(e, ra), k(e, qe(a)), k(e, cn)), u && (k(e, fn), k(e, qe(u)), k(e, cn)), g && (k(e, oo), k(e, qe(g)), k(e, cn)), w = D(e, io), w;
    }
    function Zo(e, r) {
      return D(e, On);
    }
    function ao(e, r) {
      return D(e, On);
    }
    function Qo(e, r) {
      return D(e, On);
    }
    var Nn = '<div hidden id="', bt = '">', Xo = "</div>", _n = '<svg aria-hidden="true" style="display:none" id="', na = '">', Jo = "</svg>", Ln = '<math aria-hidden="true" style="display:none" id="', Ko = '">', qo = "</math>", Fn = '<table hidden id="', zn = '">', ei = "</table>", ti = '<table hidden><tbody id="', ri = '">', so = "</tbody></table>", ni = '<table hidden><tr id="', i = '">', f = "</tr></table>", v = '<table hidden><colgroup id="', x = '">', N = "</colgroup></table>";
    function O(e, r, a, u) {
      switch (a.insertionMode) {
        case Zt:
        case _t:
          return k(e, Nn), k(e, r.segmentPrefix), k(e, u.toString(16)), D(e, bt);
        case Sr:
          return k(e, _n), k(e, r.segmentPrefix), k(e, u.toString(16)), D(e, na);
        case br:
          return k(e, Ln), k(e, r.segmentPrefix), k(e, u.toString(16)), D(e, Ko);
        case wt:
          return k(e, Fn), k(e, r.segmentPrefix), k(e, u.toString(16)), D(e, zn);
        case Qe:
          return k(e, ti), k(e, r.segmentPrefix), k(e, u.toString(16)), D(e, ri);
        case Lt:
          return k(e, ni), k(e, r.segmentPrefix), k(e, u.toString(16)), D(e, i);
        case kt:
          return k(e, v), k(e, r.segmentPrefix), k(e, u.toString(16)), D(e, x);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function B(e, r) {
      switch (r.insertionMode) {
        case Zt:
        case _t:
          return D(e, Xo);
        case Sr:
          return D(e, Jo);
        case br:
          return D(e, qo);
        case wt:
          return D(e, ei);
        case Qe:
          return D(e, so);
        case Lt:
          return D(e, f);
        case kt:
          return D(e, N);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var K = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", we = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Ce = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', ke = K + ';$RS("', Ve = '$RS("', xt = '","', Mt = '")<\/script>';
    function Dt(e, r, a) {
      k(e, r.startInlineScript), r.sentCompleteSegmentFunction ? k(e, Ve) : (r.sentCompleteSegmentFunction = !0, k(e, ke)), k(e, r.segmentPrefix);
      var u = a.toString(16);
      return k(e, u), k(e, xt), k(e, r.placeholderPrefix), k(e, u), D(e, Mt);
    }
    var Un = we + ';$RC("', oi = '$RC("', lo = '","', nl = '")<\/script>';
    function ol(e, r, a, u) {
      if (k(e, r.startInlineScript), r.sentCompleteBoundaryFunction ? k(e, oi) : (r.sentCompleteBoundaryFunction = !0, k(e, Un)), a === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var g = u.toString(16);
      return k(e, a), k(e, lo), k(e, r.segmentPrefix), k(e, g), D(e, nl);
    }
    var il = Ce + ';$RX("', al = '$RX("', sl = '"', ll = ")<\/script>", oa = ",";
    function ul(e, r, a, u, g, w) {
      if (k(e, r.startInlineScript), r.sentClientRenderFunction ? k(e, al) : (r.sentClientRenderFunction = !0, k(e, il)), a === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return k(e, a), k(e, sl), (u || g || w) && (k(e, oa), k(e, ia(u || ""))), (g || w) && (k(e, oa), k(e, ia(g || ""))), w && (k(e, oa), k(e, ia(w))), D(e, ll);
    }
    var cl = /[<\u2028\u2029]/g;
    function ia(e) {
      var r = JSON.stringify(e);
      return r.replace(cl, function(a) {
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
    function fl(e, r) {
      var a = nr(r, void 0);
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
    function aa() {
      return {
        insertionMode: _t,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function Ja(e, r, a, u) {
      return a.generateStaticMarkup ? (e.push(qe(r)), !1) : on(e, r, a, u);
    }
    function Ka(e, r, a, u) {
      if (!r.generateStaticMarkup)
        return an(e, r, a, u);
    }
    function sa(e, r) {
      return r.generateStaticMarkup ? !0 : Fr(e);
    }
    function Ut(e, r, a, u, g) {
      return r.generateStaticMarkup ? !0 : jn(e, r, a, u, g);
    }
    function dl(e, r) {
      return r.generateStaticMarkup ? !0 : Zo(e);
    }
    function qa(e, r) {
      return r.generateStaticMarkup ? !0 : Qo(e);
    }
    var Rt = Object.assign, es = Symbol.for("react.element"), la = Symbol.for("react.portal"), ii = Symbol.for("react.fragment"), ai = Symbol.for("react.strict_mode"), si = Symbol.for("react.profiler"), uo = Symbol.for("react.provider"), co = Symbol.for("react.context"), fo = Symbol.for("react.forward_ref"), Bn = Symbol.for("react.suspense"), ua = Symbol.for("react.suspense_list"), ca = Symbol.for("react.memo"), li = Symbol.for("react.lazy"), pl = Symbol.for("react.scope"), ts = Symbol.for("react.debug_trace_mode"), hl = Symbol.for("react.legacy_hidden"), gl = Symbol.for("react.default_value"), rs = Symbol.iterator, ns = "@@iterator";
    function et(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = rs && e[rs] || e[ns];
      return typeof r == "function" ? r : null;
    }
    function po(e, r, a) {
      var u = e.displayName;
      if (u)
        return u;
      var g = r.displayName || r.name || "";
      return g !== "" ? a + "(" + g + ")" : a;
    }
    function fa(e) {
      return e.displayName || "Context";
    }
    function Xe(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ii:
          return "Fragment";
        case la:
          return "Portal";
        case si:
          return "Profiler";
        case ai:
          return "StrictMode";
        case Bn:
          return "Suspense";
        case ua:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case co:
            var r = e;
            return fa(r) + ".Consumer";
          case uo:
            var a = e;
            return fa(a._context) + ".Provider";
          case fo:
            return po(e, e.render, "ForwardRef");
          case ca:
            var u = e.displayName || null;
            return u !== null ? u : Xe(e.type) || "Memo";
          case li: {
            var g = e, w = g._payload, C = g._init;
            try {
              return Xe(C(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Hn = 0, da, pa, ha, ga, va, os, is;
    function ui() {
    }
    ui.__reactDisabledLog = !0;
    function ma() {
      {
        if (Hn === 0) {
          da = console.log, pa = console.info, ha = console.warn, ga = console.error, va = console.group, os = console.groupCollapsed, is = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ui,
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
        Hn++;
      }
    }
    function ho() {
      {
        if (Hn--, Hn === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Rt({}, e, {
              value: da
            }),
            info: Rt({}, e, {
              value: pa
            }),
            warn: Rt({}, e, {
              value: ha
            }),
            error: Rt({}, e, {
              value: ga
            }),
            group: Rt({}, e, {
              value: va
            }),
            groupCollapsed: Rt({}, e, {
              value: os
            }),
            groupEnd: Rt({}, e, {
              value: is
            })
          });
        }
        Hn < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var go = S.ReactCurrentDispatcher, Wn;
    function vo(e, r, a) {
      {
        if (Wn === void 0)
          try {
            throw Error();
          } catch (g) {
            var u = g.stack.trim().match(/\n( *(at )?)/);
            Wn = u && u[1] || "";
          }
        return `
` + Wn + e;
      }
    }
    var mo = !1, ci;
    {
      var as = typeof WeakMap == "function" ? WeakMap : Map;
      ci = new as();
    }
    function ya(e, r) {
      if (!e || mo)
        return "";
      {
        var a = ci.get(e);
        if (a !== void 0)
          return a;
      }
      var u;
      mo = !0;
      var g = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = go.current, go.current = null, ma();
      try {
        if (r) {
          var C = function() {
            throw Error();
          };
          if (Object.defineProperty(C.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(C, []);
            } catch (Yt) {
              u = Yt;
            }
            Reflect.construct(e, [], C);
          } else {
            try {
              C.call();
            } catch (Yt) {
              u = Yt;
            }
            e.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Yt) {
            u = Yt;
          }
          e();
        }
      } catch (Yt) {
        if (Yt && u && typeof Yt.stack == "string") {
          for (var L = Yt.stack.split(`
`), $ = u.stack.split(`
`), ie = L.length - 1, fe = $.length - 1; ie >= 1 && fe >= 0 && L[ie] !== $[fe]; )
            fe--;
          for (; ie >= 1 && fe >= 0; ie--, fe--)
            if (L[ie] !== $[fe]) {
              if (ie !== 1 || fe !== 1)
                do
                  if (ie--, fe--, fe < 0 || L[ie] !== $[fe]) {
                    var Ee = `
` + L[ie].replace(" at new ", " at ");
                    return e.displayName && Ee.includes("<anonymous>") && (Ee = Ee.replace("<anonymous>", e.displayName)), typeof e == "function" && ci.set(e, Ee), Ee;
                  }
                while (ie >= 1 && fe >= 0);
              break;
            }
        }
      } finally {
        mo = !1, go.current = w, ho(), Error.prepareStackTrace = g;
      }
      var Ge = e ? e.displayName || e.name : "", dt = Ge ? vo(Ge) : "";
      return typeof e == "function" && ci.set(e, dt), dt;
    }
    function Sa(e, r, a) {
      return ya(e, !0);
    }
    function ba(e, r, a) {
      return ya(e, !1);
    }
    function ss(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Yn(e, r, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ya(e, ss(e));
      if (typeof e == "string")
        return vo(e);
      switch (e) {
        case Bn:
          return vo("Suspense");
        case ua:
          return vo("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case fo:
            return ba(e.render);
          case ca:
            return Yn(e.type, r, a);
          case li: {
            var u = e, g = u._payload, w = u._init;
            try {
              return Yn(w(g), r, a);
            } catch {
            }
          }
        }
      return "";
    }
    var xa = {}, fi = S.ReactDebugCurrentFrame;
    function dn(e) {
      if (e) {
        var r = e._owner, a = Yn(e.type, e._source, r ? r.type : null);
        fi.setExtraStackFrame(a);
      } else
        fi.setExtraStackFrame(null);
    }
    function wa(e, r, a, u, g) {
      {
        var w = Function.call.bind(M);
        for (var C in e)
          if (w(e, C)) {
            var L = void 0;
            try {
              if (typeof e[C] != "function") {
                var $ = Error((u || "React class") + ": " + a + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $.name = "Invariant Violation", $;
              }
              L = e[C](r, C, u, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ie) {
              L = ie;
            }
            L && !(L instanceof Error) && (dn(g), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", a, C, typeof L), dn(null)), L instanceof Error && !(L.message in xa) && (xa[L.message] = !0, dn(g), p("Failed %s type: %s", a, L.message), dn(null));
          }
      }
    }
    var Ta;
    Ta = {};
    var Ur = {};
    Object.freeze(Ur);
    function ls(e, r) {
      {
        var a = e.contextTypes;
        if (!a)
          return Ur;
        var u = {};
        for (var g in a)
          u[g] = r[g];
        {
          var w = Xe(e) || "Unknown";
          wa(a, u, "context", w);
        }
        return u;
      }
    }
    function pn(e, r, a, u) {
      {
        if (typeof e.getChildContext != "function") {
          {
            var g = Xe(r) || "Unknown";
            Ta[g] || (Ta[g] = !0, p("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", g, g));
          }
          return a;
        }
        var w = e.getChildContext();
        for (var C in w)
          if (!(C in u))
            throw new Error((Xe(r) || "Unknown") + '.getChildContext(): key "' + C + '" is not defined in childContextTypes.');
        {
          var L = Xe(r) || "Unknown";
          wa(u, w, "child context", L);
        }
        return Rt({}, a, w);
      }
    }
    var hn;
    hn = {};
    var Ea = null, cr = null;
    function di(e) {
      e.context._currentValue2 = e.parentValue;
    }
    function pi(e) {
      e.context._currentValue2 = e.value;
    }
    function yo(e, r) {
      if (e !== r) {
        di(e);
        var a = e.parent, u = r.parent;
        if (a === null) {
          if (u !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (u === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          yo(a, u);
        }
        pi(r);
      }
    }
    function ka(e) {
      di(e);
      var r = e.parent;
      r !== null && ka(r);
    }
    function So(e) {
      var r = e.parent;
      r !== null && So(r), pi(e);
    }
    function us(e, r) {
      di(e);
      var a = e.parent;
      if (a === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      a.depth === r.depth ? yo(a, r) : us(a, r);
    }
    function cs(e, r) {
      var a = r.parent;
      if (a === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      e.depth === a.depth ? yo(e, a) : cs(e, a), pi(r);
    }
    function hi(e) {
      var r = cr, a = e;
      r !== a && (r === null ? So(a) : a === null ? ka(r) : r.depth === a.depth ? yo(r, a) : r.depth > a.depth ? us(r, a) : cs(r, a), cr = a);
    }
    function bo(e, r) {
      var a;
      a = e._currentValue2, e._currentValue2 = r, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== hn && p("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = hn;
      var u = cr, g = {
        parent: u,
        depth: u === null ? 0 : u.depth + 1,
        context: e,
        parentValue: a,
        value: r
      };
      return cr = g, g;
    }
    function Ca(e) {
      var r = cr;
      if (r === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      r.context !== e && p("The parent context is not the expected context. This is probably a bug in React.");
      {
        var a = r.parentValue;
        a === gl ? r.context._currentValue2 = r.context._defaultValue : r.context._currentValue2 = a, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== hn && p("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = hn;
      }
      return cr = r.parent;
    }
    function vl() {
      return cr;
    }
    function Vn(e) {
      var r = e._currentValue2;
      return r;
    }
    function gi(e) {
      return e._reactInternals;
    }
    function Ia(e, r) {
      e._reactInternals = r;
    }
    var vi = {}, mi = {}, xo, yi, $n, wo, Si, Gn, bi, xi, wi;
    {
      xo = /* @__PURE__ */ new Set(), yi = /* @__PURE__ */ new Set(), $n = /* @__PURE__ */ new Set(), bi = /* @__PURE__ */ new Set(), wo = /* @__PURE__ */ new Set(), xi = /* @__PURE__ */ new Set(), wi = /* @__PURE__ */ new Set();
      var fs = /* @__PURE__ */ new Set();
      Gn = function(e, r) {
        if (!(e === null || typeof e == "function")) {
          var a = r + "_" + e;
          fs.has(a) || (fs.add(a), p("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", r, e));
        }
      }, Si = function(e, r) {
        if (r === void 0) {
          var a = Xe(e) || "Component";
          wo.has(a) || (wo.add(a), p("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      };
    }
    function ds(e, r) {
      {
        var a = e.constructor, u = a && Xe(a) || "ReactClass", g = u + "." + r;
        if (vi[g])
          return;
        p(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, r, r, u), vi[g] = !0;
      }
    }
    var ps = {
      isMounted: function(e) {
        return !1;
      },
      enqueueSetState: function(e, r, a) {
        var u = gi(e);
        u.queue === null ? ds(e, "setState") : (u.queue.push(r), a != null && Gn(a, "setState"));
      },
      enqueueReplaceState: function(e, r, a) {
        var u = gi(e);
        u.replace = !0, u.queue = [r], a != null && Gn(a, "setState");
      },
      enqueueForceUpdate: function(e, r) {
        var a = gi(e);
        a.queue === null ? ds(e, "forceUpdate") : r != null && Gn(r, "setState");
      }
    };
    function ml(e, r, a, u, g) {
      var w = a(g, u);
      Si(r, w);
      var C = w == null ? u : Rt({}, u, w);
      return C;
    }
    function yl(e, r, a) {
      var u = Ur, g = e.contextType;
      if ("contextType" in e) {
        var w = (
          // Allow null for conditional declaration
          g === null || g !== void 0 && g.$$typeof === co && g._context === void 0
        );
        if (!w && !wi.has(e)) {
          wi.add(e);
          var C = "";
          g === void 0 ? C = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof g != "object" ? C = " However, it is set to a " + typeof g + "." : g.$$typeof === uo ? C = " Did you accidentally pass the Context.Provider instead?" : g._context !== void 0 ? C = " Did you accidentally pass the Context.Consumer instead?" : C = " However, it is set to an object with keys {" + Object.keys(g).join(", ") + "}.", p("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Xe(e) || "Component", C);
        }
      }
      typeof g == "object" && g !== null ? u = Vn(g) : u = a;
      var L = new e(r, u);
      {
        if (typeof e.getDerivedStateFromProps == "function" && (L.state === null || L.state === void 0)) {
          var $ = Xe(e) || "Component";
          xo.has($) || (xo.add($), p("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", $, L.state === null ? "null" : "undefined", $));
        }
        if (typeof e.getDerivedStateFromProps == "function" || typeof L.getSnapshotBeforeUpdate == "function") {
          var ie = null, fe = null, Ee = null;
          if (typeof L.componentWillMount == "function" && L.componentWillMount.__suppressDeprecationWarning !== !0 ? ie = "componentWillMount" : typeof L.UNSAFE_componentWillMount == "function" && (ie = "UNSAFE_componentWillMount"), typeof L.componentWillReceiveProps == "function" && L.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? fe = "componentWillReceiveProps" : typeof L.UNSAFE_componentWillReceiveProps == "function" && (fe = "UNSAFE_componentWillReceiveProps"), typeof L.componentWillUpdate == "function" && L.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Ee = "componentWillUpdate" : typeof L.UNSAFE_componentWillUpdate == "function" && (Ee = "UNSAFE_componentWillUpdate"), ie !== null || fe !== null || Ee !== null) {
            var Ge = Xe(e) || "Component", dt = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            $n.has(Ge) || ($n.add(Ge), p(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ge, dt, ie !== null ? `
  ` + ie : "", fe !== null ? `
  ` + fe : "", Ee !== null ? `
  ` + Ee : ""));
          }
        }
      }
      return L;
    }
    function hs(e, r, a) {
      {
        var u = Xe(r) || "Component", g = e.render;
        g || (r.prototype && typeof r.prototype.render == "function" ? p("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : p("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), e.getInitialState && !e.getInitialState.isReactClassApproved && !e.state && p("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), e.getDefaultProps && !e.getDefaultProps.isReactClassApproved && p("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), e.propTypes && p("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), e.contextType && p("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), e.contextTypes && p("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), r.contextType && r.contextTypes && !xi.has(r) && (xi.add(r), p("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof e.componentShouldUpdate == "function" && p("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), r.prototype && r.prototype.isPureReactComponent && typeof e.shouldComponentUpdate < "u" && p("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Xe(r) || "A pure component"), typeof e.componentDidUnmount == "function" && p("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof e.componentDidReceiveProps == "function" && p("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof e.componentWillRecieveProps == "function" && p("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof e.UNSAFE_componentWillRecieveProps == "function" && p("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var w = e.props !== a;
        e.props !== void 0 && w && p("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), e.defaultProps && p("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof e.getSnapshotBeforeUpdate == "function" && typeof e.componentDidUpdate != "function" && !yi.has(r) && (yi.add(r), p("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Xe(r))), typeof e.getDerivedStateFromProps == "function" && p("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof e.getDerivedStateFromError == "function" && p("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof r.getSnapshotBeforeUpdate == "function" && p("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var C = e.state;
        C && (typeof C != "object" || Nt(C)) && p("%s.state: must be set to an object or null", u), typeof e.getChildContext == "function" && typeof r.childContextTypes != "object" && p("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function Sl(e, r) {
      var a = r.state;
      if (typeof r.componentWillMount == "function") {
        if (r.componentWillMount.__suppressDeprecationWarning !== !0) {
          var u = Xe(e) || "Unknown";
          mi[u] || (E(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            u
          ), mi[u] = !0);
        }
        r.componentWillMount();
      }
      typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), a !== r.state && (p("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Xe(e) || "Component"), ps.enqueueReplaceState(r, r.state, null));
    }
    function bl(e, r, a, u) {
      if (e.queue !== null && e.queue.length > 0) {
        var g = e.queue, w = e.replace;
        if (e.queue = null, e.replace = !1, w && g.length === 1)
          r.state = g[0];
        else {
          for (var C = w ? g[0] : r.state, L = !0, $ = w ? 1 : 0; $ < g.length; $++) {
            var ie = g[$], fe = typeof ie == "function" ? ie.call(r, C, a, u) : ie;
            fe != null && (L ? (L = !1, C = Rt({}, C, fe)) : Rt(C, fe));
          }
          r.state = C;
        }
      } else
        e.queue = null;
    }
    function Ti(e, r, a, u) {
      hs(e, r, a);
      var g = e.state !== void 0 ? e.state : null;
      e.updater = ps, e.props = a, e.state = g;
      var w = {
        queue: [],
        replace: !1
      };
      Ia(e, w);
      var C = r.contextType;
      if (typeof C == "object" && C !== null ? e.context = Vn(C) : e.context = u, e.state === a) {
        var L = Xe(r) || "Component";
        bi.has(L) || (bi.add(L), p("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", L));
      }
      var $ = r.getDerivedStateFromProps;
      typeof $ == "function" && (e.state = ml(e, r, $, g, a)), typeof r.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function") && (Sl(r, e), bl(w, e, a, u));
    }
    var Ei = {
      id: 1,
      overflow: ""
    };
    function xl(e) {
      var r = e.overflow, a = e.id, u = a & ~wl(a);
      return u.toString(32) + r;
    }
    function Ma(e, r, a) {
      var u = e.id, g = e.overflow, w = ki(u) - 1, C = u & ~(1 << w), L = a + 1, $ = ki(r) + w;
      if ($ > 30) {
        var ie = w - w % 5, fe = (1 << ie) - 1, Ee = (C & fe).toString(32), Ge = C >> ie, dt = w - ie, Yt = ki(r) + dt, _s = L << dt, Ls = _s | Ge, Fs = Ee + g;
        return {
          id: 1 << Yt | Ls,
          overflow: Fs
        };
      } else {
        var Bi = L << w, Ac = Bi | C, Oc = g;
        return {
          id: 1 << $ | Ac,
          overflow: Oc
        };
      }
    }
    function ki(e) {
      return 32 - Tl(e);
    }
    function wl(e) {
      return 1 << ki(e) - 1;
    }
    var Tl = Math.clz32 ? Math.clz32 : Tr, El = Math.log, kl = Math.LN2;
    function Tr(e) {
      var r = e >>> 0;
      return r === 0 ? 32 : 31 - (El(r) / kl | 0) | 0;
    }
    function Da(e, r) {
      return e === r && (e !== 0 || 1 / e === 1 / r) || e !== e && r !== r;
    }
    var Ci = typeof Object.is == "function" ? Object.is : Da, Ae = null, gn = null, vn = null, Le = null, Bt = !1, mn = !1, Ii = 0, ft = null, Er = 0, yn = 25, fr = !1, Sn;
    function kr() {
      if (Ae === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return fr && p("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Ae;
    }
    function Cl(e, r) {
      if (r === null)
        return p("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Sn), !1;
      e.length !== r.length && p(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Sn, "[" + e.join(", ") + "]", "[" + r.join(", ") + "]");
      for (var a = 0; a < r.length && a < e.length; a++)
        if (!Ci(e[a], r[a]))
          return !1;
      return !0;
    }
    function gs() {
      if (Er > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Mi() {
      return Le === null ? vn === null ? (Bt = !1, vn = Le = gs()) : (Bt = !0, Le = vn) : Le.next === null ? (Bt = !1, Le = Le.next = gs()) : (Bt = !0, Le = Le.next), Le;
    }
    function Ra(e, r) {
      Ae = r, gn = e, fr = !1, Ii = 0;
    }
    function Il(e, r, a, u) {
      for (; mn; )
        mn = !1, Ii = 0, Er += 1, Le = null, a = e(r, u);
      return To(), a;
    }
    function vs() {
      var e = Ii !== 0;
      return e;
    }
    function To() {
      fr = !1, Ae = null, gn = null, mn = !1, vn = null, Er = 0, ft = null, Le = null;
    }
    function Ml(e) {
      return fr && p("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Vn(e);
    }
    function ms(e) {
      return Sn = "useContext", kr(), Vn(e);
    }
    function Di(e, r) {
      return typeof r == "function" ? r(e) : r;
    }
    function Dl(e) {
      return Sn = "useState", ys(
        Di,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function ys(e, r, a) {
      if (e !== Di && (Sn = "useReducer"), Ae = kr(), Le = Mi(), Bt) {
        var u = Le.queue, g = u.dispatch;
        if (ft !== null) {
          var w = ft.get(u);
          if (w !== void 0) {
            ft.delete(u);
            var C = Le.memoizedState, L = w;
            do {
              var $ = L.action;
              fr = !0, C = e(C, $), fr = !1, L = L.next;
            } while (L !== null);
            return Le.memoizedState = C, [C, g];
          }
        }
        return [Le.memoizedState, g];
      } else {
        fr = !0;
        var ie;
        e === Di ? ie = typeof r == "function" ? r() : r : ie = a !== void 0 ? a(r) : r, fr = !1, Le.memoizedState = ie;
        var fe = Le.queue = {
          last: null,
          dispatch: null
        }, Ee = fe.dispatch = Ol.bind(null, Ae, fe);
        return [Le.memoizedState, Ee];
      }
    }
    function Ss(e, r) {
      Ae = kr(), Le = Mi();
      var a = r === void 0 ? null : r;
      if (Le !== null) {
        var u = Le.memoizedState;
        if (u !== null && a !== null) {
          var g = u[1];
          if (Cl(a, g))
            return u[0];
        }
      }
      fr = !0;
      var w = e();
      return fr = !1, Le.memoizedState = [w, a], w;
    }
    function Rl(e) {
      Ae = kr(), Le = Mi();
      var r = Le.memoizedState;
      if (r === null) {
        var a = {
          current: e
        };
        return Object.seal(a), Le.memoizedState = a, a;
      } else
        return r;
    }
    function Al(e, r) {
      Sn = "useLayoutEffect", p("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Ol(e, r, a) {
      if (Er >= yn)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === Ae) {
        mn = !0;
        var u = {
          action: a,
          next: null
        };
        ft === null && (ft = /* @__PURE__ */ new Map());
        var g = ft.get(r);
        if (g === void 0)
          ft.set(r, u);
        else {
          for (var w = g; w.next !== null; )
            w = w.next;
          w.next = u;
        }
      }
    }
    function Pl(e, r) {
      return Ss(function() {
        return e;
      }, r);
    }
    function jl(e, r, a) {
      return kr(), r(e._source);
    }
    function Nl(e, r, a) {
      if (a === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return a();
    }
    function _l(e) {
      return kr(), e;
    }
    function Ri() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function bs() {
      return kr(), [!1, Ri];
    }
    function Aa() {
      var e = gn, r = xl(e.treeContext), a = ko;
      if (a === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var u = Ii++;
      return gt(a, r, u);
    }
    function Eo() {
    }
    var xs = {
      readContext: Ml,
      useContext: ms,
      useMemo: Ss,
      useReducer: ys,
      useRef: Rl,
      useState: Dl,
      useInsertionEffect: Eo,
      useLayoutEffect: Al,
      useCallback: Pl,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: Eo,
      // Effects are not run in the server environment.
      useEffect: Eo,
      // Debugging effect
      useDebugValue: Eo,
      useDeferredValue: _l,
      useTransition: bs,
      useId: Aa,
      // Subscriptions are not setup in a server environment.
      useMutableSource: jl,
      useSyncExternalStore: Nl
    }, ko = null;
    function Ai(e) {
      ko = e;
    }
    function Oa(e) {
      try {
        var r = "", a = e;
        do {
          switch (a.tag) {
            case 0:
              r += vo(a.type, null, null);
              break;
            case 1:
              r += ba(a.type, null, null);
              break;
            case 2:
              r += Sa(a.type, null, null);
              break;
          }
          a = a.parent;
        } while (a);
        return r;
      } catch (u) {
        return `
Error generating stack: ` + u.message + `
` + u.stack;
      }
    }
    var Br = S.ReactCurrentDispatcher, Oi = S.ReactDebugCurrentFrame, Pi = 0, bn = 1, ws = 2, Pa = 3, xn = 4, Ll = 0, Ts = 1, dr = 2, Fl = 12800;
    function zl(e) {
      return console.error(e), null;
    }
    function Co() {
    }
    function ja(e, r, a, u, g, w, C, L, $) {
      var ie = [], fe = /* @__PURE__ */ new Set(), Ee = {
        destination: null,
        responseState: r,
        progressiveChunkSize: u === void 0 ? Fl : u,
        status: Ll,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: fe,
        pingedTasks: ie,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: g === void 0 ? zl : g,
        onAllReady: w === void 0 ? Co : w,
        onShellReady: C === void 0 ? Co : C,
        onShellError: L === void 0 ? Co : L,
        onFatalError: $ === void 0 ? Co : $
      }, Ge = Hr(
        Ee,
        0,
        null,
        a,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      Ge.parentFlushed = !0;
      var dt = Io(Ee, e, null, Ge, fe, Ur, Ea, Ei);
      return ie.push(dt), Ee;
    }
    function ji(e, r) {
      var a = e.pingedTasks;
      a.push(r), a.length === 1 && W(function() {
        return js(e);
      });
    }
    function Cr(e, r) {
      return {
        id: Ft,
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
    function Io(e, r, a, u, g, w, C, L) {
      e.allPendingTasks++, a === null ? e.pendingRootTasks++ : a.pendingTasks++;
      var $ = {
        node: r,
        ping: function() {
          return ji(e, $);
        },
        blockedBoundary: a,
        blockedSegment: u,
        abortSet: g,
        legacyContext: w,
        context: C,
        treeContext: L
      };
      return $.componentStack = null, g.add($), $;
    }
    function Hr(e, r, a, u, g, w) {
      return {
        status: Pi,
        id: -1,
        // lazily assigned later
        index: r,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: u,
        boundary: a,
        lastPushedText: g,
        textEmbedded: w
      };
    }
    var pr = null;
    function Na() {
      return pr === null || pr.componentStack === null ? "" : Oa(pr.componentStack);
    }
    function Ht(e, r) {
      e.componentStack = {
        tag: 0,
        parent: e.componentStack,
        type: r
      };
    }
    function Zn(e, r) {
      e.componentStack = {
        tag: 1,
        parent: e.componentStack,
        type: r
      };
    }
    function _a(e, r) {
      e.componentStack = {
        tag: 2,
        parent: e.componentStack,
        type: r
      };
    }
    function Wt(e) {
      e.componentStack === null ? p("Unexpectedly popped too many stack frames. This is a bug in React.") : e.componentStack = e.componentStack.parent;
    }
    var Wr = null;
    function La(e, r) {
      {
        var a;
        typeof r == "string" ? a = r : r && typeof r.message == "string" ? a = r.message : a = String(r);
        var u = Wr || Na();
        Wr = null, e.errorMessage = a, e.errorComponentStack = u;
      }
    }
    function Mo(e, r) {
      var a = e.onError(r);
      if (a != null && typeof a != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
      return a;
    }
    function Ni(e, r) {
      var a = e.onShellError;
      a(r);
      var u = e.onFatalError;
      u(r), e.destination !== null ? (e.status = dr, le(e.destination, r)) : (e.status = Ts, e.fatalError = r);
    }
    function Es(e, r, a) {
      Ht(r, "Suspense");
      var u = r.blockedBoundary, g = r.blockedSegment, w = a.fallback, C = a.children, L = /* @__PURE__ */ new Set(), $ = Cr(e, L), ie = g.chunks.length, fe = Hr(
        e,
        ie,
        $,
        g.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      g.children.push(fe), g.lastPushedText = !1;
      var Ee = Hr(
        e,
        0,
        null,
        g.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      Ee.parentFlushed = !0, r.blockedBoundary = $, r.blockedSegment = Ee;
      try {
        if (_i(e, r, C), Ka(Ee.chunks, e.responseState, Ee.lastPushedText, Ee.textEmbedded), Ee.status = bn, Ao($, Ee), $.pendingTasks === 0) {
          Wt(r);
          return;
        }
      } catch (dt) {
        Ee.status = xn, $.forceClientRender = !0, $.errorDigest = Mo(e, dt), La($, dt);
      } finally {
        r.blockedBoundary = u, r.blockedSegment = g;
      }
      var Ge = Io(e, w, u, fe, L, r.legacyContext, r.context, r.treeContext);
      Ge.componentStack = r.componentStack, e.pingedTasks.push(Ge), Wt(r);
    }
    function ks(e, r, a, u) {
      Ht(r, a);
      var g = r.blockedSegment, w = lr(g.chunks, a, u, e.responseState, g.formatContext);
      g.lastPushedText = !1;
      var C = g.formatContext;
      g.formatContext = Pr(C, a, u), _i(e, r, w), g.formatContext = C, It(g.chunks, a), g.lastPushedText = !1, Wt(r);
    }
    function Ul(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Fa(e, r, a, u, g) {
      var w = {};
      Ra(r, w);
      var C = a(u, g);
      return Il(a, u, C, g);
    }
    function Do(e, r, a, u, g) {
      var w = a.render();
      a.props !== g && (Ha || p("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Xe(u) || "a component"), Ha = !0);
      {
        var C = u.childContextTypes;
        if (C != null) {
          var L = r.legacyContext, $ = pn(a, u, L, C);
          r.legacyContext = $, Ot(e, r, w), r.legacyContext = L;
          return;
        }
      }
      Ot(e, r, w);
    }
    function Cs(e, r, a, u) {
      _a(r, a);
      var g = ls(a, r.legacyContext), w = yl(a, u, g);
      Ti(w, a, u, g), Do(e, r, w, a, u), Wt(r);
    }
    var za = {}, Ro = {}, Ua = {}, Ba = {}, Ha = !1, Is = !1, Ms = !1, Wa = !1;
    function Bl(e, r, a, u) {
      var g;
      if (g = ls(a, r.legacyContext), Zn(r, a), a.prototype && typeof a.prototype.render == "function") {
        var w = Xe(a) || "Unknown";
        za[w] || (p("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", w, w), za[w] = !0);
      }
      var C = Fa(e, r, a, u, g), L = vs();
      if (typeof C == "object" && C !== null && typeof C.render == "function" && C.$$typeof === void 0) {
        var $ = Xe(a) || "Unknown";
        Ro[$] || (p("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", $, $, $), Ro[$] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof C == "object" && C !== null && typeof C.render == "function" && C.$$typeof === void 0
      ) {
        {
          var ie = Xe(a) || "Unknown";
          Ro[ie] || (p("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", ie, ie, ie), Ro[ie] = !0);
        }
        Ti(C, a, u, g), Do(e, r, C, a, u);
      } else if (Hl(a), L) {
        var fe = r.treeContext, Ee = 1, Ge = 0;
        r.treeContext = Ma(fe, Ee, Ge);
        try {
          Ot(e, r, C);
        } finally {
          r.treeContext = fe;
        }
      } else
        Ot(e, r, C);
      Wt(r);
    }
    function Hl(e) {
      {
        if (e && e.childContextTypes && p("%s(...): childContextTypes cannot be defined on a function component.", e.displayName || e.name || "Component"), typeof e.getDerivedStateFromProps == "function") {
          var r = Xe(e) || "Unknown";
          Ba[r] || (p("%s: Function components do not support getDerivedStateFromProps.", r), Ba[r] = !0);
        }
        if (typeof e.contextType == "object" && e.contextType !== null) {
          var a = Xe(e) || "Unknown";
          Ua[a] || (p("%s: Function components do not support contextType.", a), Ua[a] = !0);
        }
      }
    }
    function Ds(e, r) {
      if (e && e.defaultProps) {
        var a = Rt({}, r), u = e.defaultProps;
        for (var g in u)
          a[g] === void 0 && (a[g] = u[g]);
        return a;
      }
      return r;
    }
    function Wl(e, r, a, u, g) {
      Zn(r, a.render);
      var w = Fa(e, r, a.render, u, g), C = vs();
      if (C) {
        var L = r.treeContext, $ = 1, ie = 0;
        r.treeContext = Ma(L, $, ie);
        try {
          Ot(e, r, w);
        } finally {
          r.treeContext = L;
        }
      } else
        Ot(e, r, w);
      Wt(r);
    }
    function Yl(e, r, a, u, g) {
      var w = a.type, C = Ds(w, u);
      Va(e, r, w, C, g);
    }
    function Ya(e, r, a, u) {
      a._context === void 0 ? a !== a.Consumer && (Wa || (Wa = !0, p("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : a = a._context;
      var g = u.children;
      typeof g != "function" && p("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var w = Vn(a), C = g(w);
      Ot(e, r, C);
    }
    function Vl(e, r, a, u) {
      var g = a._context, w = u.value, C = u.children, L;
      L = r.context, r.context = bo(g, w), Ot(e, r, C), r.context = Ca(g), L !== r.context && p("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function At(e, r, a, u, g) {
      Ht(r, "Lazy");
      var w = a._payload, C = a._init, L = C(w), $ = Ds(L, u);
      Va(e, r, L, $, g), Wt(r);
    }
    function Va(e, r, a, u, g) {
      if (typeof a == "function")
        if (Ul(a)) {
          Cs(e, r, a, u);
          return;
        } else {
          Bl(e, r, a, u);
          return;
        }
      if (typeof a == "string") {
        ks(e, r, a, u);
        return;
      }
      switch (a) {
        case hl:
        case ts:
        case ai:
        case si:
        case ii: {
          Ot(e, r, u.children);
          return;
        }
        case ua: {
          Ht(r, "SuspenseList"), Ot(e, r, u.children), Wt(r);
          return;
        }
        case pl:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case Bn: {
          Es(e, r, u);
          return;
        }
      }
      if (typeof a == "object" && a !== null)
        switch (a.$$typeof) {
          case fo: {
            Wl(e, r, a, u, g);
            return;
          }
          case ca: {
            Yl(e, r, a, u, g);
            return;
          }
          case uo: {
            Vl(e, r, a, u);
            return;
          }
          case co: {
            Ya(e, r, a, u);
            return;
          }
          case li: {
            At(e, r, a, u);
            return;
          }
        }
      var w = "";
      throw (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (a == null ? a : typeof a) + "." + w));
    }
    function Rs(e, r) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      e[Symbol.toStringTag] === "Generator" && (Is || p("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Is = !0), e.entries === r && (Ms || p("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ms = !0);
    }
    function Ot(e, r, a) {
      try {
        return $a(e, r, a);
      } catch (u) {
        throw typeof u == "object" && u !== null && typeof u.then == "function" || (Wr = Wr !== null ? Wr : Na()), u;
      }
    }
    function $a(e, r, a) {
      if (r.node = a, typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case es: {
            var u = a, g = u.type, w = u.props, C = u.ref;
            Va(e, r, g, w, C);
            return;
          }
          case la:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case li: {
            var L = a, $ = L._payload, ie = L._init, fe;
            try {
              fe = ie($);
            } catch (Bi) {
              throw typeof Bi == "object" && Bi !== null && typeof Bi.then == "function" && Ht(r, "Lazy"), Bi;
            }
            Ot(e, r, fe);
            return;
          }
        }
        if (Nt(a)) {
          As(e, r, a);
          return;
        }
        var Ee = et(a);
        if (Ee) {
          Rs(a, Ee);
          var Ge = Ee.call(a);
          if (Ge) {
            var dt = Ge.next();
            if (!dt.done) {
              var Yt = [];
              do
                Yt.push(dt.value), dt = Ge.next();
              while (!dt.done);
              As(e, r, Yt);
              return;
            }
            return;
          }
        }
        var _s = Object.prototype.toString.call(a);
        throw new Error("Objects are not valid as a React child (found: " + (_s === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : _s) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof a == "string") {
        var Ls = r.blockedSegment;
        Ls.lastPushedText = Ja(r.blockedSegment.chunks, a, e.responseState, Ls.lastPushedText);
        return;
      }
      if (typeof a == "number") {
        var Fs = r.blockedSegment;
        Fs.lastPushedText = Ja(r.blockedSegment.chunks, "" + a, e.responseState, Fs.lastPushedText);
        return;
      }
      typeof a == "function" && p("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function As(e, r, a) {
      for (var u = a.length, g = 0; g < u; g++) {
        var w = r.treeContext;
        r.treeContext = Ma(w, u, g);
        try {
          _i(e, r, a[g]);
        } finally {
          r.treeContext = w;
        }
      }
    }
    function $l(e, r, a) {
      var u = r.blockedSegment, g = u.chunks.length, w = Hr(
        e,
        g,
        null,
        u.formatContext,
        // Adopt the parent segment's leading text embed
        u.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      u.children.push(w), u.lastPushedText = !1;
      var C = Io(e, r.node, r.blockedBoundary, w, r.abortSet, r.legacyContext, r.context, r.treeContext);
      r.componentStack !== null && (C.componentStack = r.componentStack.parent);
      var L = C.ping;
      a.then(L, L);
    }
    function _i(e, r, a) {
      var u = r.blockedSegment.formatContext, g = r.legacyContext, w = r.context, C = null;
      C = r.componentStack;
      try {
        return Ot(e, r, a);
      } catch (L) {
        if (To(), typeof L == "object" && L !== null && typeof L.then == "function") {
          $l(e, r, L), r.blockedSegment.formatContext = u, r.legacyContext = g, r.context = w, hi(w), r.componentStack = C;
          return;
        } else
          throw r.blockedSegment.formatContext = u, r.legacyContext = g, r.context = w, hi(w), r.componentStack = C, L;
      }
    }
    function Li(e, r, a, u) {
      var g = Mo(e, u);
      if (r === null ? Ni(e, u) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, r.errorDigest = g, La(r, u), r.parentFlushed && e.clientRenderedBoundaries.push(r))), e.allPendingTasks--, e.allPendingTasks === 0) {
        var w = e.onAllReady;
        w();
      }
    }
    function Os(e) {
      var r = this, a = e.blockedBoundary, u = e.blockedSegment;
      u.status = Pa, Oo(r, a, u);
    }
    function Ps(e, r, a) {
      var u = e.blockedBoundary, g = e.blockedSegment;
      if (g.status = Pa, u === null)
        r.allPendingTasks--, r.status !== dr && (r.status = dr, r.destination !== null && P(r.destination));
      else {
        if (u.pendingTasks--, !u.forceClientRender) {
          u.forceClientRender = !0;
          var w = a === void 0 ? new Error("The render was aborted by the server without a reason.") : a;
          u.errorDigest = r.onError(w);
          {
            var C = "The server did not finish this Suspense boundary: ";
            w && typeof w.message == "string" ? w = C + w.message : w = C + String(w);
            var L = pr;
            pr = e;
            try {
              La(u, w);
            } finally {
              pr = L;
            }
          }
          u.parentFlushed && r.clientRenderedBoundaries.push(u);
        }
        if (u.fallbackAbortableTasks.forEach(function(ie) {
          return Ps(ie, r, a);
        }), u.fallbackAbortableTasks.clear(), r.allPendingTasks--, r.allPendingTasks === 0) {
          var $ = r.onAllReady;
          $();
        }
      }
    }
    function Ao(e, r) {
      if (r.chunks.length === 0 && r.children.length === 1 && r.children[0].boundary === null) {
        var a = r.children[0];
        a.id = r.id, a.parentFlushed = !0, a.status === bn && Ao(e, a);
      } else {
        var u = e.completedSegments;
        u.push(r);
      }
    }
    function Oo(e, r, a) {
      if (r === null) {
        if (a.parentFlushed) {
          if (e.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          e.completedRootSegment = a;
        }
        if (e.pendingRootTasks--, e.pendingRootTasks === 0) {
          e.onShellError = Co;
          var u = e.onShellReady;
          u();
        }
      } else if (r.pendingTasks--, !r.forceClientRender) {
        if (r.pendingTasks === 0)
          a.parentFlushed && a.status === bn && Ao(r, a), r.parentFlushed && e.completedBoundaries.push(r), r.fallbackAbortableTasks.forEach(Os, e), r.fallbackAbortableTasks.clear();
        else if (a.parentFlushed && a.status === bn) {
          Ao(r, a);
          var g = r.completedSegments;
          g.length === 1 && r.parentFlushed && e.partialBoundaries.push(r);
        }
      }
      if (e.allPendingTasks--, e.allPendingTasks === 0) {
        var w = e.onAllReady;
        w();
      }
    }
    function Fi(e, r) {
      var a = r.blockedSegment;
      if (a.status === Pi) {
        hi(r.context);
        var u = null;
        u = pr, pr = r;
        try {
          Ot(e, r, r.node), Ka(a.chunks, e.responseState, a.lastPushedText, a.textEmbedded), r.abortSet.delete(r), a.status = bn, Oo(e, r.blockedBoundary, a);
        } catch (w) {
          if (To(), typeof w == "object" && w !== null && typeof w.then == "function") {
            var g = r.ping;
            w.then(g, g);
          } else
            r.abortSet.delete(r), a.status = xn, Li(e, r.blockedBoundary, a, w);
        } finally {
          pr = u;
        }
      }
    }
    function js(e) {
      if (e.status !== dr) {
        var r = vl(), a = Br.current;
        Br.current = xs;
        var u;
        u = Oi.getCurrentStack, Oi.getCurrentStack = Na;
        var g = ko;
        Ai(e.responseState);
        try {
          var w = e.pingedTasks, C;
          for (C = 0; C < w.length; C++) {
            var L = w[C];
            Fi(e, L);
          }
          w.splice(0, C), e.destination !== null && Ui(e, e.destination);
        } catch ($) {
          Mo(e, $), Ni(e, $);
        } finally {
          Ai(g), Br.current = a, Oi.getCurrentStack = u, a === xs && hi(r);
        }
      }
    }
    function Po(e, r, a) {
      switch (a.parentFlushed = !0, a.status) {
        case Pi: {
          var u = a.id = e.nextSegmentId++;
          return a.lastPushedText = !1, a.textEmbedded = !1, $o(r, e.responseState, u);
        }
        case bn: {
          a.status = ws;
          for (var g = !0, w = a.chunks, C = 0, L = a.children, $ = 0; $ < L.length; $++) {
            for (var ie = L[$]; C < ie.index; C++)
              k(r, w[C]);
            g = jo(e, r, ie);
          }
          for (; C < w.length - 1; C++)
            k(r, w[C]);
          return C < w.length && (g = D(r, w[C])), g;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function jo(e, r, a) {
      var u = a.boundary;
      if (u === null)
        return Po(e, r, a);
      if (u.parentFlushed = !0, u.forceClientRender)
        return Ut(r, e.responseState, u.errorDigest, u.errorMessage, u.errorComponentStack), Po(e, r, a), qa(r, e.responseState);
      if (u.pendingTasks > 0) {
        u.rootSegmentID = e.nextSegmentId++, u.completedSegments.length > 0 && e.partialBoundaries.push(u);
        var g = u.id = zt(e.responseState);
        return zr(r, e.responseState, g), Po(e, r, a), ao(r, e.responseState);
      } else {
        if (u.byteSize > e.progressiveChunkSize)
          return u.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(u), zr(r, e.responseState, u.id), Po(e, r, a), ao(r, e.responseState);
        sa(r, e.responseState);
        var w = u.completedSegments;
        if (w.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var C = w[0];
        return jo(e, r, C), dl(r, e.responseState);
      }
    }
    function Gl(e, r, a) {
      return ul(r, e.responseState, a.id, a.errorDigest, a.errorMessage, a.errorComponentStack);
    }
    function Ga(e, r, a) {
      return O(r, e.responseState, a.formatContext, a.id), jo(e, r, a), B(r, a.formatContext);
    }
    function zi(e, r, a) {
      for (var u = a.completedSegments, g = 0; g < u.length; g++) {
        var w = u[g];
        Ns(e, r, a, w);
      }
      return u.length = 0, ol(r, e.responseState, a.id, a.rootSegmentID);
    }
    function Zl(e, r, a) {
      for (var u = a.completedSegments, g = 0; g < u.length; g++) {
        var w = u[g];
        if (!Ns(e, r, a, w))
          return g++, u.splice(0, g), !1;
      }
      return u.splice(0, g), !0;
    }
    function Ns(e, r, a, u) {
      if (u.status === ws)
        return !0;
      var g = u.id;
      if (g === -1) {
        var w = u.id = a.rootSegmentID;
        if (w === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Ga(e, r, u);
      } else
        return Ga(e, r, u), Dt(r, e.responseState, g);
    }
    function Ui(e, r) {
      try {
        var a = e.completedRootSegment;
        a !== null && e.pendingRootTasks === 0 && (jo(e, r, a), e.completedRootSegment = null, ro(r, e.responseState));
        var u = e.clientRenderedBoundaries, g;
        for (g = 0; g < u.length; g++) {
          var w = u[g];
          if (!Gl(e, r, w)) {
            e.destination = null, g++, u.splice(0, g);
            return;
          }
        }
        u.splice(0, g);
        var C = e.completedBoundaries;
        for (g = 0; g < C.length; g++) {
          var L = C[g];
          if (!zi(e, r, L)) {
            e.destination = null, g++, C.splice(0, g);
            return;
          }
        }
        C.splice(0, g);
        var $ = e.partialBoundaries;
        for (g = 0; g < $.length; g++) {
          var ie = $[g];
          if (!Zl(e, r, ie)) {
            e.destination = null, g++, $.splice(0, g);
            return;
          }
        }
        $.splice(0, g);
        var fe = e.completedBoundaries;
        for (g = 0; g < fe.length; g++) {
          var Ee = fe[g];
          if (!zi(e, r, Ee)) {
            e.destination = null, g++, fe.splice(0, g);
            return;
          }
        }
        fe.splice(0, g);
      } finally {
        e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && (e.abortableTasks.size !== 0 && p("There was still abortable task at the root when we closed. This is a bug in React."), P(r));
      }
    }
    function Ql(e) {
      W(function() {
        return js(e);
      });
    }
    function t(e, r) {
      if (e.status === Ts) {
        e.status = dr, le(r, e.fatalError);
        return;
      }
      if (e.status !== dr && e.destination === null) {
        e.destination = r;
        try {
          Ui(e, r);
        } catch (a) {
          Mo(e, a), Ni(e, a);
        }
      }
    }
    function n(e, r) {
      try {
        var a = e.abortableTasks;
        a.forEach(function(u) {
          return Ps(u, e, r);
        }), a.clear(), e.destination !== null && Ui(e, e.destination);
      } catch (u) {
        Mo(e, u), Ni(e, u);
      }
    }
    function l() {
    }
    function d(e, r, a, u) {
      var g = !1, w = null, C = "", L = {
        push: function(Ee) {
          return Ee !== null && (C += Ee), !0;
        },
        destroy: function(Ee) {
          g = !0, w = Ee;
        }
      }, $ = !1;
      function ie() {
        $ = !0;
      }
      var fe = ja(e, fl(a, r ? r.identifierPrefix : void 0), aa(), 1 / 0, l, void 0, ie, void 0, void 0);
      if (Ql(fe), n(fe, u), t(fe, L), g)
        throw w;
      if (!$)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return C;
    }
    function y(e, r) {
      return d(e, r, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function T(e, r) {
      return d(e, r, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function I() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function F() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    _o.renderToNodeStream = I, _o.renderToStaticMarkup = T, _o.renderToStaticNodeStream = F, _o.renderToString = y, _o.version = h;
  }()), _o;
}
var Vs = {};
/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nc;
function wd() {
  return nc || (nc = 1, process.env.NODE_ENV !== "production" && function() {
    var s = q, h = "18.2.0", S = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(t) {
      {
        for (var n = arguments.length, l = new Array(n > 1 ? n - 1 : 0), d = 1; d < n; d++)
          l[d - 1] = arguments[d];
        A("warn", t, l);
      }
    }
    function p(t) {
      {
        for (var n = arguments.length, l = new Array(n > 1 ? n - 1 : 0), d = 1; d < n; d++)
          l[d - 1] = arguments[d];
        A("error", t, l);
      }
    }
    function A(t, n, l) {
      {
        var d = S.ReactDebugCurrentFrame, y = d.getStackAddendum();
        y !== "" && (n += "%s", l = l.concat([y]));
        var T = l.map(function(I) {
          return String(I);
        });
        T.unshift("Warning: " + n), Function.prototype.apply.call(console[t], console, T);
      }
    }
    function W(t) {
      t();
    }
    var H = 512, k = null, D = 0;
    function ne(t) {
      k = new Uint8Array(H), D = 0;
    }
    function P(t, n) {
      if (n.length !== 0) {
        if (n.length > H) {
          D > 0 && (t.enqueue(new Uint8Array(k.buffer, 0, D)), k = new Uint8Array(H), D = 0), t.enqueue(n);
          return;
        }
        var l = n, d = k.length - D;
        d < l.length && (d === 0 ? t.enqueue(k) : (k.set(l.subarray(0, d), D), t.enqueue(k), l = l.subarray(d)), k = new Uint8Array(H), D = 0), k.set(l, D), D += l.length;
      }
    }
    function ee(t, n) {
      return P(t, n), !0;
    }
    function de(t) {
      k && D > 0 && (t.enqueue(new Uint8Array(k.buffer, 0, D)), k = null, D = 0);
    }
    function le(t) {
      t.close();
    }
    var ge = new TextEncoder();
    function Q(t) {
      return ge.encode(t);
    }
    function z(t) {
      return ge.encode(t);
    }
    function te(t, n) {
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
        return M(t), !1;
      } catch {
        return !0;
      }
    }
    function M(t) {
      return "" + t;
    }
    function V(t, n) {
      if (Y(t))
        return p("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", n, _(t)), M(t);
    }
    function J(t, n) {
      if (Y(t))
        return p("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", n, _(t)), M(t);
    }
    function Ie(t) {
      if (Y(t))
        return p("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", _(t)), M(t);
    }
    var ue = Object.prototype.hasOwnProperty, Oe = 0, Pe = 1, Ye = 2, it = 3, Je = 4, pt = 5, Ke = 6, Ze = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ne = Ze + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", _e = new RegExp("^[" + Ze + "][" + Ne + "]*$"), Z = {}, G = {};
    function oe(t) {
      return ue.call(G, t) ? !0 : ue.call(Z, t) ? !1 : _e.test(t) ? (G[t] = !0, !0) : (Z[t] = !0, p("Invalid attribute name: `%s`", t), !1);
    }
    function ye(t, n, l, d) {
      if (l !== null && l.type === Oe)
        return !1;
      switch (typeof n) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (d)
            return !1;
          if (l !== null)
            return !l.acceptsBooleans;
          var y = t.toLowerCase().slice(0, 5);
          return y !== "data-" && y !== "aria-";
        }
        default:
          return !1;
      }
    }
    function pe(t) {
      return se.hasOwnProperty(t) ? se[t] : null;
    }
    function ae(t, n, l, d, y, T, I) {
      this.acceptsBooleans = n === Ye || n === it || n === Je, this.attributeName = d, this.attributeNamespace = y, this.mustUseProperty = l, this.propertyName = t, this.type = n, this.sanitizeURL = T, this.removeEmptyString = I;
    }
    var se = {}, ve = [
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
    ve.forEach(function(t) {
      se[t] = new ae(
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
      se[n] = new ae(
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
      se[t] = new ae(
        t,
        Ye,
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
      se[t] = new ae(
        t,
        Ye,
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
      se[t] = new ae(
        t,
        it,
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
      se[t] = new ae(
        t,
        it,
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
      se[t] = new ae(
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
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      se[t] = new ae(
        t,
        Ke,
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
      se[t] = new ae(
        t,
        pt,
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
    var Se = /[\-\:]([a-z])/g, be = function(t) {
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
      var n = t.replace(Se, be);
      se[n] = new ae(
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
      var n = t.replace(Se, be);
      se[n] = new ae(
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
      var n = t.replace(Se, be);
      se[n] = new ae(
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
      se[t] = new ae(
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
    var he = "xlinkHref";
    se[he] = new ae(
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
      se[t] = new ae(
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
    var Te = {
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
    function re(t, n) {
      return t + n.charAt(0).toUpperCase() + n.substring(1);
    }
    var De = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Te).forEach(function(t) {
      De.forEach(function(n) {
        Te[re(n, t)] = Te[t];
      });
    });
    var $e = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function mt(t, n) {
      $e[n.type] || n.onChange || n.onInput || n.readOnly || n.disabled || n.value == null || p("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), n.onChange || n.readOnly || n.disabled || n.checked == null || p("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function $t(t, n) {
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
    var Tn = {
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
    }, Tt = {}, gr = new RegExp("^(aria)-[" + Ne + "]*$"), vr = new RegExp("^(aria)[A-Z][" + Ne + "]*$");
    function En(t, n) {
      {
        if (ue.call(Tt, n) && Tt[n])
          return !0;
        if (vr.test(n)) {
          var l = "aria-" + n.slice(4).toLowerCase(), d = Tn.hasOwnProperty(l) ? l : null;
          if (d == null)
            return p("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", n), Tt[n] = !0, !0;
          if (n !== d)
            return p("Invalid ARIA attribute `%s`. Did you mean `%s`?", n, d), Tt[n] = !0, !0;
        }
        if (gr.test(n)) {
          var y = n.toLowerCase(), T = Tn.hasOwnProperty(y) ? y : null;
          if (T == null)
            return Tt[n] = !0, !1;
          if (n !== T)
            return p("Unknown ARIA attribute `%s`. Did you mean `%s`?", n, T), Tt[n] = !0, !0;
        }
      }
      return !0;
    }
    function Et(t, n) {
      {
        var l = [];
        for (var d in n) {
          var y = En(t, d);
          y || l.push(d);
        }
        var T = l.map(function(I) {
          return "`" + I + "`";
        }).join(", ");
        l.length === 1 ? p("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", T, t) : l.length > 1 && p("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", T, t);
      }
    }
    function st(t, n) {
      $t(t, n) || Et(t, n);
    }
    var ot = !1;
    function Vr(t, n) {
      {
        if (t !== "input" && t !== "textarea" && t !== "select")
          return;
        n != null && n.value === null && !ot && (ot = !0, t === "select" && n.multiple ? p("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", t) : p("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", t));
      }
    }
    var $r = {
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
    }, Gr = function() {
    };
    {
      var rt = {}, Zr = /^on./, kn = /^on[^A-Z]/, Cn = new RegExp("^(aria)-[" + Ne + "]*$"), Qr = new RegExp("^(aria)[A-Z][" + Ne + "]*$");
      Gr = function(t, n, l, d) {
        if (ue.call(rt, n) && rt[n])
          return !0;
        var y = n.toLowerCase();
        if (y === "onfocusin" || y === "onfocusout")
          return p("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), rt[n] = !0, !0;
        if (d != null) {
          var T = d.registrationNameDependencies, I = d.possibleRegistrationNames;
          if (T.hasOwnProperty(n))
            return !0;
          var F = I.hasOwnProperty(y) ? I[y] : null;
          if (F != null)
            return p("Invalid event handler property `%s`. Did you mean `%s`?", n, F), rt[n] = !0, !0;
          if (Zr.test(n))
            return p("Unknown event handler property `%s`. It will be ignored.", n), rt[n] = !0, !0;
        } else if (Zr.test(n))
          return kn.test(n) && p("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", n), rt[n] = !0, !0;
        if (Cn.test(n) || Qr.test(n))
          return !0;
        if (y === "innerhtml")
          return p("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), rt[n] = !0, !0;
        if (y === "aria")
          return p("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), rt[n] = !0, !0;
        if (y === "is" && l !== null && l !== void 0 && typeof l != "string")
          return p("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof l), rt[n] = !0, !0;
        if (typeof l == "number" && isNaN(l))
          return p("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", n), rt[n] = !0, !0;
        var e = pe(n), r = e !== null && e.type === Oe;
        if ($r.hasOwnProperty(y)) {
          var a = $r[y];
          if (a !== n)
            return p("Invalid DOM property `%s`. Did you mean `%s`?", n, a), rt[n] = !0, !0;
        } else if (!r && n !== y)
          return p("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", n, y), rt[n] = !0, !0;
        return typeof l == "boolean" && ye(n, l, e, !1) ? (l ? p('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', l, n, n, l, n) : p('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', l, n, n, l, n, n, n), rt[n] = !0, !0) : r ? !0 : ye(n, l, e, !1) ? (rt[n] = !0, !1) : ((l === "false" || l === "true") && e !== null && e.type === it && (p("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", l, n, l === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', n, l), rt[n] = !0), !0);
      };
    }
    var Mr = function(t, n, l) {
      {
        var d = [];
        for (var y in n) {
          var T = Gr(t, y, n[y], l);
          T || d.push(y);
        }
        var I = d.map(function(F) {
          return "`" + F + "`";
        }).join(", ");
        d.length === 1 ? p("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", I, t) : d.length > 1 && p("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", I, t);
      }
    };
    function Xn(t, n, l) {
      $t(t, n) || Mr(t, n, l);
    }
    var Xr = function() {
    };
    {
      var qt = /^(?:webkit|moz|o)[A-Z]/, Jr = /^-ms-/, In = /-(.)/g, ht = /;\s*$/, Pt = {}, er = {}, je = !1, tr = !1, Dr = function(t) {
        return t.replace(In, function(n, l) {
          return l.toUpperCase();
        });
      }, mr = function(t) {
        Pt.hasOwnProperty(t) && Pt[t] || (Pt[t] = !0, p(
          "Unsupported style property %s. Did you mean %s?",
          t,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Dr(t.replace(Jr, "ms-"))
        ));
      }, jt = function(t) {
        Pt.hasOwnProperty(t) && Pt[t] || (Pt[t] = !0, p("Unsupported vendor-prefixed style property %s. Did you mean %s?", t, t.charAt(0).toUpperCase() + t.slice(1)));
      }, Rr = function(t, n) {
        er.hasOwnProperty(n) && er[n] || (er[n] = !0, p(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, t, n.replace(ht, "")));
      }, Gt = function(t, n) {
        je || (je = !0, p("`NaN` is an invalid value for the `%s` css style property.", t));
      }, qe = function(t, n) {
        tr || (tr = !0, p("`Infinity` is an invalid value for the `%s` css style property.", t));
      };
      Xr = function(t, n) {
        t.indexOf("-") > -1 ? mr(t) : qt.test(t) ? jt(t) : ht.test(n) && Rr(t, n), typeof n == "number" && (isNaN(n) ? Gt(t, n) : isFinite(n) || qe(t, n));
      };
    }
    var Kr = Xr, qr = /["'&<>]/;
    function Mn(t) {
      Ie(t);
      var n = "" + t, l = qr.exec(n);
      if (!l)
        return n;
      var d, y = "", T, I = 0;
      for (T = l.index; T < n.length; T++) {
        switch (n.charCodeAt(T)) {
          case 34:
            d = "&quot;";
            break;
          case 38:
            d = "&amp;";
            break;
          case 39:
            d = "&#x27;";
            break;
          case 60:
            d = "&lt;";
            break;
          case 62:
            d = "&gt;";
            break;
          default:
            continue;
        }
        I !== T && (y += n.substring(I, T)), I = T + 1, y += d;
      }
      return I !== T ? y + n.substring(I, T) : y;
    }
    function nt(t) {
      return typeof t == "boolean" || typeof t == "number" ? "" + t : Mn(t);
    }
    var en = /([A-Z])/g, Jn = /^ms-/;
    function Kn(t) {
      return t.replace(en, "-$1").toLowerCase().replace(Jn, "-ms-");
    }
    var Nt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, tn = !1;
    function Ar(t) {
      !tn && Nt.test(t) && (tn = !0, p("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(t)));
    }
    var rn = Array.isArray;
    function yr(t) {
      return rn(t);
    }
    var rr = z("<script>"), qn = z("<\/script>"), nn = z('<script src="'), Or = z('<script type="module" src="'), nr = z('" async=""><\/script>');
    function Zt(t) {
      return Ie(t), ("" + t).replace(_t, Sr);
    }
    var _t = /(<\/|<)(s)(cript)/gi, Sr = function(t, n, l, d) {
      return "" + n + (l === "s" ? "\\u0073" : "\\u0053") + d;
    };
    function br(t, n, l, d, y) {
      var T = t === void 0 ? "" : t, I = n === void 0 ? rr : z('<script nonce="' + nt(n) + '">'), F = [];
      if (l !== void 0 && F.push(I, Q(Zt(l)), qn), d !== void 0)
        for (var e = 0; e < d.length; e++)
          F.push(nn, Q(nt(d[e])), nr);
      if (y !== void 0)
        for (var r = 0; r < y.length; r++)
          F.push(Or, Q(nt(y[r])), nr);
      return {
        bootstrapChunks: F,
        startInlineScript: I,
        placeholderPrefix: z(T + "P:"),
        segmentPrefix: z(T + "S:"),
        boundaryPrefix: T + "B:",
        idPrefix: T,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var wt = 0, Qe = 1, Lt = 2, kt = 3, at = 4, Pr = 5, Ft = 6, zt = 7;
    function gt(t, n) {
      return {
        insertionMode: t,
        selectedValue: n
      };
    }
    function Qt(t) {
      var n = t === "http://www.w3.org/2000/svg" ? Lt : t === "http://www.w3.org/1998/Math/MathML" ? kt : wt;
      return gt(n, null);
    }
    function or(t, n, l) {
      switch (n) {
        case "select":
          return gt(Qe, l.value != null ? l.value : l.defaultValue);
        case "svg":
          return gt(Lt, null);
        case "math":
          return gt(kt, null);
        case "foreignObject":
          return gt(Qe, null);
        case "table":
          return gt(at, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return gt(Pr, null);
        case "colgroup":
          return gt(zt, null);
        case "tr":
          return gt(Ft, null);
      }
      return t.insertionMode >= at || t.insertionMode === wt ? gt(Qe, null) : t;
    }
    var on = null;
    function an(t) {
      var n = t.nextSuspenseID++;
      return z(t.boundaryPrefix + n.toString(16));
    }
    function jr(t, n, l) {
      var d = t.idPrefix, y = ":" + d + "R" + n;
      return l > 0 && (y += "H" + l.toString(32)), y + ":";
    }
    function ir(t) {
      return nt(t);
    }
    var sn = z("<!-- -->");
    function Nr(t, n, l, d) {
      return n === "" ? d : (d && t.push(sn), t.push(Q(ir(n))), !0);
    }
    function _r(t, n, l, d) {
      l && d && t.push(sn);
    }
    var o = /* @__PURE__ */ new Map();
    function c(t) {
      var n = o.get(t);
      if (n !== void 0)
        return n;
      var l = z(nt(Kn(t)));
      return o.set(t, l), l;
    }
    var m = z(' style="'), b = z(":"), j = z(";");
    function R(t, n, l) {
      if (typeof l != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var d = !0;
      for (var y in l)
        if (ue.call(l, y)) {
          var T = l[y];
          if (!(T == null || typeof T == "boolean" || T === "")) {
            var I = void 0, F = void 0, e = y.indexOf("--") === 0;
            e ? (I = Q(nt(y)), J(T, y), F = Q(nt(("" + T).trim()))) : (Kr(y, T), I = c(y), typeof T == "number" ? T !== 0 && !ue.call(Te, y) ? F = Q(T + "px") : F = Q("" + T) : (J(T, y), F = Q(nt(("" + T).trim())))), d ? (d = !1, t.push(m, I, b, F)) : t.push(j, I, b, F);
          }
        }
      d || t.push(ce);
    }
    var U = z(" "), X = z('="'), ce = z('"'), xe = z('=""');
    function me(t, n, l, d) {
      switch (l) {
        case "style": {
          R(t, n, d);
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
        var y = pe(l);
        if (y !== null) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!y.acceptsBooleans)
                return;
          }
          var T = y.attributeName, I = Q(T);
          switch (y.type) {
            case it:
              d && t.push(U, I, xe);
              return;
            case Je:
              d === !0 ? t.push(U, I, xe) : d === !1 || t.push(U, I, X, Q(nt(d)), ce);
              return;
            case pt:
              isNaN(d) || t.push(U, I, X, Q(nt(d)), ce);
              break;
            case Ke:
              !isNaN(d) && d >= 1 && t.push(U, I, X, Q(nt(d)), ce);
              break;
            default:
              y.sanitizeURL && (V(d, T), d = "" + d, Ar(d)), t.push(U, I, X, Q(nt(d)), ce);
          }
        } else if (oe(l)) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var F = l.toLowerCase().slice(0, 5);
              if (F !== "data-" && F !== "aria-")
                return;
            }
          }
          t.push(U, Q(l), X, Q(nt(d)), ce);
        }
      }
    }
    var Re = z(">"), yt = z("/>");
    function ut(t, n, l) {
      if (n != null) {
        if (l != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof n != "object" || !("__html" in n))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var d = n.__html;
        d != null && (Ie(d), t.push(Q("" + d)));
      }
    }
    var ct = !1, Xt = !1, Ct = !1, Lr = !1, ar = !1, xr = !1, Jt = !1;
    function ln(t, n) {
      {
        var l = t[n];
        if (l != null) {
          var d = yr(l);
          t.multiple && !d ? p("The `%s` prop supplied to <select> must be an array if `multiple` is true.", n) : !t.multiple && d && p("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", n);
        }
      }
    }
    function Ji(t, n, l) {
      mt("select", n), ln(n, "value"), ln(n, "defaultValue"), n.value !== void 0 && n.defaultValue !== void 0 && !Ct && (p("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ct = !0), t.push(It("select"));
      var d = null, y = null;
      for (var T in n)
        if (ue.call(n, T)) {
          var I = n[T];
          if (I == null)
            continue;
          switch (T) {
            case "children":
              d = I;
              break;
            case "dangerouslySetInnerHTML":
              y = I;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              me(t, l, T, I);
              break;
          }
        }
      return t.push(Re), ut(t, y, d), d;
    }
    function Ki(t) {
      var n = "";
      return s.Children.forEach(t, function(l) {
        l != null && (n += l, !ar && typeof l != "string" && typeof l != "number" && (ar = !0, p("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), n;
    }
    var eo = z(' selected=""');
    function qi(t, n, l, d) {
      var y = d.selectedValue;
      t.push(It("option"));
      var T = null, I = null, F = null, e = null;
      for (var r in n)
        if (ue.call(n, r)) {
          var a = n[r];
          if (a == null)
            continue;
          switch (r) {
            case "children":
              T = a;
              break;
            case "selected":
              F = a, Jt || (p("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Jt = !0);
              break;
            case "dangerouslySetInnerHTML":
              e = a;
              break;
            case "value":
              I = a;
            default:
              me(t, l, r, a);
              break;
          }
        }
      if (y != null) {
        var u;
        if (I !== null ? (V(I, "value"), u = "" + I) : (e !== null && (xr || (xr = !0, p("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), u = Ki(T)), yr(y))
          for (var g = 0; g < y.length; g++) {
            V(y[g], "value");
            var w = "" + y[g];
            if (w === u) {
              t.push(eo);
              break;
            }
          }
        else
          V(y, "select.value"), "" + y === u && t.push(eo);
      } else
        F && t.push(eo);
      return t.push(Re), ut(t, e, T), T;
    }
    function to(t, n, l) {
      mt("input", n), n.checked !== void 0 && n.defaultChecked !== void 0 && !Xt && (p("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", n.type), Xt = !0), n.value !== void 0 && n.defaultValue !== void 0 && !ct && (p("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", n.type), ct = !0), t.push(It("input"));
      var d = null, y = null, T = null, I = null;
      for (var F in n)
        if (ue.call(n, F)) {
          var e = n[F];
          if (e == null)
            continue;
          switch (F) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              I = e;
              break;
            case "defaultValue":
              y = e;
              break;
            case "checked":
              T = e;
              break;
            case "value":
              d = e;
              break;
            default:
              me(t, l, F, e);
              break;
          }
        }
      return T !== null ? me(t, l, "checked", T) : I !== null && me(t, l, "checked", I), d !== null ? me(t, l, "value", d) : y !== null && me(t, l, "value", y), t.push(yt), null;
    }
    function Kt(t, n, l) {
      mt("textarea", n), n.value !== void 0 && n.defaultValue !== void 0 && !Lr && (p("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Lr = !0), t.push(It("textarea"));
      var d = null, y = null, T = null;
      for (var I in n)
        if (ue.call(n, I)) {
          var F = n[I];
          if (F == null)
            continue;
          switch (I) {
            case "children":
              T = F;
              break;
            case "value":
              d = F;
              break;
            case "defaultValue":
              y = F;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              me(t, l, I, F);
              break;
          }
        }
      if (d === null && y !== null && (d = y), t.push(Re), T != null) {
        if (p("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), d != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (yr(T)) {
          if (T.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          Ie(T[0]), d = "" + T[0];
        }
        Ie(T), d = "" + T;
      }
      return typeof d == "string" && d[0] === `
` && t.push(wr), d !== null && (V(d, "value"), t.push(Q(ir("" + d)))), null;
    }
    function un(t, n, l, d) {
      t.push(It(l));
      for (var y in n)
        if (ue.call(n, y)) {
          var T = n[y];
          if (T == null)
            continue;
          switch (y) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(l + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              me(t, d, y, T);
              break;
          }
        }
      return t.push(yt), null;
    }
    function Dn(t, n, l) {
      t.push(It("menuitem"));
      for (var d in n)
        if (ue.call(n, d)) {
          var y = n[d];
          if (y == null)
            continue;
          switch (d) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              me(t, l, d, y);
              break;
          }
        }
      return t.push(Re), null;
    }
    function ze(t, n, l) {
      t.push(It("title"));
      var d = null;
      for (var y in n)
        if (ue.call(n, y)) {
          var T = n[y];
          if (T == null)
            continue;
          switch (y) {
            case "children":
              d = T;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              me(t, l, y, T);
              break;
          }
        }
      t.push(Re);
      {
        var I = Array.isArray(d) && d.length < 2 ? d[0] || null : d;
        Array.isArray(d) && d.length > 1 ? p("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : I != null && I.$$typeof != null ? p("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : I != null && typeof I != "string" && typeof I != "number" && p("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return d;
    }
    function sr(t, n, l, d) {
      t.push(It(l));
      var y = null, T = null;
      for (var I in n)
        if (ue.call(n, I)) {
          var F = n[I];
          if (F == null)
            continue;
          switch (I) {
            case "children":
              y = F;
              break;
            case "dangerouslySetInnerHTML":
              T = F;
              break;
            default:
              me(t, d, I, F);
              break;
          }
        }
      return t.push(Re), ut(t, T, y), typeof y == "string" ? (t.push(Q(ir(y))), null) : y;
    }
    function St(t, n, l, d) {
      t.push(It(l));
      var y = null, T = null;
      for (var I in n)
        if (ue.call(n, I)) {
          var F = n[I];
          if (F == null)
            continue;
          switch (I) {
            case "children":
              y = F;
              break;
            case "dangerouslySetInnerHTML":
              T = F;
              break;
            case "style":
              R(t, d, F);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              oe(I) && typeof F != "function" && typeof F != "symbol" && t.push(U, Q(I), X, Q(nt(F)), ce);
              break;
          }
        }
      return t.push(Re), ut(t, T, y), y;
    }
    var wr = z(`
`);
    function lr(t, n, l, d) {
      t.push(It(l));
      var y = null, T = null;
      for (var I in n)
        if (ue.call(n, I)) {
          var F = n[I];
          if (F == null)
            continue;
          switch (I) {
            case "children":
              y = F;
              break;
            case "dangerouslySetInnerHTML":
              T = F;
              break;
            default:
              me(t, d, I, F);
              break;
          }
        }
      if (t.push(Re), T != null) {
        if (y != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof T != "object" || !("__html" in T))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var e = T.__html;
        e != null && (typeof e == "string" && e.length > 0 && e[0] === `
` ? t.push(wr, Q(e)) : (Ie(e), t.push(Q("" + e))));
      }
      return typeof y == "string" && y[0] === `
` && t.push(wr), y;
    }
    var Rn = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ur = /* @__PURE__ */ new Map();
    function It(t) {
      var n = ur.get(t);
      if (n === void 0) {
        if (!Rn.test(t))
          throw new Error("Invalid tag: " + t);
        n = z("<" + t), ur.set(t, n);
      }
      return n;
    }
    var ro = z("<!DOCTYPE html>");
    function no(t, n, l, d, y) {
      switch (st(n, l), Vr(n, l), Xn(n, l, null), !l.suppressContentEditableWarning && l.contentEditable && l.children != null && p("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), y.insertionMode !== Lt && y.insertionMode !== kt && n.indexOf("-") === -1 && typeof l.is != "string" && n.toLowerCase() !== n && p("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", n), n) {
        case "select":
          return Ji(t, l, d);
        case "option":
          return qi(t, l, d, y);
        case "textarea":
          return Kt(t, l, d);
        case "input":
          return to(t, l, d);
        case "menuitem":
          return Dn(t, l, d);
        case "title":
          return ze(t, l, d);
        case "listing":
        case "pre":
          return lr(t, l, n, d);
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
          return un(t, l, n, d);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return sr(t, l, n, d);
        case "html":
          return y.insertionMode === wt && t.push(ro), sr(t, l, n, d);
        default:
          return n.indexOf("-") === -1 && typeof l.is != "string" ? sr(t, l, n, d) : St(t, l, n, d);
      }
    }
    var Vo = z("</"), $o = z(">");
    function Go(t, n, l) {
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
          t.push(Vo, Q(n), $o);
      }
    }
    function ea(t, n) {
      for (var l = n.bootstrapChunks, d = 0; d < l.length - 1; d++)
        P(t, l[d]);
      return d < l.length ? ee(t, l[d]) : !0;
    }
    var ta = z('<template id="'), An = z('"></template>');
    function On(t, n, l) {
      P(t, ta), P(t, n.placeholderPrefix);
      var d = Q(l.toString(16));
      return P(t, d), ee(t, An);
    }
    var Pn = z("<!--$-->"), cn = z('<!--$?--><template id="'), ra = z('"></template>'), fn = z("<!--$!-->"), oo = z("<!--/$-->"), io = z("<template"), Fr = z('"'), zr = z(' data-dgst="'), jn = z(' data-msg="'), Zo = z(' data-stck="'), ao = z("></template>");
    function Qo(t, n) {
      return ee(t, Pn);
    }
    function Nn(t, n, l) {
      if (P(t, cn), l === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return P(t, l), ee(t, ra);
    }
    function bt(t, n, l, d, y) {
      var T;
      return T = ee(t, fn), P(t, io), l && (P(t, zr), P(t, Q(nt(l))), P(t, Fr)), d && (P(t, jn), P(t, Q(nt(d))), P(t, Fr)), y && (P(t, Zo), P(t, Q(nt(y))), P(t, Fr)), T = ee(t, ao), T;
    }
    function Xo(t, n) {
      return ee(t, oo);
    }
    function _n(t, n) {
      return ee(t, oo);
    }
    function na(t, n) {
      return ee(t, oo);
    }
    var Jo = z('<div hidden id="'), Ln = z('">'), Ko = z("</div>"), qo = z('<svg aria-hidden="true" style="display:none" id="'), Fn = z('">'), zn = z("</svg>"), ei = z('<math aria-hidden="true" style="display:none" id="'), ti = z('">'), ri = z("</math>"), so = z('<table hidden id="'), ni = z('">'), i = z("</table>"), f = z('<table hidden><tbody id="'), v = z('">'), x = z("</tbody></table>"), N = z('<table hidden><tr id="'), O = z('">'), B = z("</tr></table>"), K = z('<table hidden><colgroup id="'), we = z('">'), Ce = z("</colgroup></table>");
    function ke(t, n, l, d) {
      switch (l.insertionMode) {
        case wt:
        case Qe:
          return P(t, Jo), P(t, n.segmentPrefix), P(t, Q(d.toString(16))), ee(t, Ln);
        case Lt:
          return P(t, qo), P(t, n.segmentPrefix), P(t, Q(d.toString(16))), ee(t, Fn);
        case kt:
          return P(t, ei), P(t, n.segmentPrefix), P(t, Q(d.toString(16))), ee(t, ti);
        case at:
          return P(t, so), P(t, n.segmentPrefix), P(t, Q(d.toString(16))), ee(t, ni);
        case Pr:
          return P(t, f), P(t, n.segmentPrefix), P(t, Q(d.toString(16))), ee(t, v);
        case Ft:
          return P(t, N), P(t, n.segmentPrefix), P(t, Q(d.toString(16))), ee(t, O);
        case zt:
          return P(t, K), P(t, n.segmentPrefix), P(t, Q(d.toString(16))), ee(t, we);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Ve(t, n) {
      switch (n.insertionMode) {
        case wt:
        case Qe:
          return ee(t, Ko);
        case Lt:
          return ee(t, zn);
        case kt:
          return ee(t, ri);
        case at:
          return ee(t, i);
        case Pr:
          return ee(t, x);
        case Ft:
          return ee(t, B);
        case zt:
          return ee(t, Ce);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var xt = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", Mt = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Dt = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Un = z(xt + ';$RS("'), oi = z('$RS("'), lo = z('","'), nl = z('")<\/script>');
    function ol(t, n, l) {
      P(t, n.startInlineScript), n.sentCompleteSegmentFunction ? P(t, oi) : (n.sentCompleteSegmentFunction = !0, P(t, Un)), P(t, n.segmentPrefix);
      var d = Q(l.toString(16));
      return P(t, d), P(t, lo), P(t, n.placeholderPrefix), P(t, d), ee(t, nl);
    }
    var il = z(Mt + ';$RC("'), al = z('$RC("'), sl = z('","'), ll = z('")<\/script>');
    function oa(t, n, l, d) {
      if (P(t, n.startInlineScript), n.sentCompleteBoundaryFunction ? P(t, al) : (n.sentCompleteBoundaryFunction = !0, P(t, il)), l === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var y = Q(d.toString(16));
      return P(t, l), P(t, sl), P(t, n.segmentPrefix), P(t, y), ee(t, ll);
    }
    var ul = z(Dt + ';$RX("'), cl = z('$RX("'), ia = z('"'), fl = z(")<\/script>"), aa = z(",");
    function Ja(t, n, l, d, y, T) {
      if (P(t, n.startInlineScript), n.sentClientRenderFunction ? P(t, cl) : (n.sentClientRenderFunction = !0, P(t, ul)), l === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return P(t, l), P(t, ia), (d || y || T) && (P(t, aa), P(t, Q(sa(d || "")))), (y || T) && (P(t, aa), P(t, Q(sa(y || "")))), T && (P(t, aa), P(t, Q(sa(T)))), ee(t, fl);
    }
    var Ka = /[<\u2028\u2029]/g;
    function sa(t) {
      var n = JSON.stringify(t);
      return n.replace(Ka, function(l) {
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
    var Ut = Object.assign, dl = Symbol.for("react.element"), qa = Symbol.for("react.portal"), Rt = Symbol.for("react.fragment"), es = Symbol.for("react.strict_mode"), la = Symbol.for("react.profiler"), ii = Symbol.for("react.provider"), ai = Symbol.for("react.context"), si = Symbol.for("react.forward_ref"), uo = Symbol.for("react.suspense"), co = Symbol.for("react.suspense_list"), fo = Symbol.for("react.memo"), Bn = Symbol.for("react.lazy"), ua = Symbol.for("react.scope"), ca = Symbol.for("react.debug_trace_mode"), li = Symbol.for("react.legacy_hidden"), pl = Symbol.for("react.default_value"), ts = Symbol.iterator, hl = "@@iterator";
    function gl(t) {
      if (t === null || typeof t != "object")
        return null;
      var n = ts && t[ts] || t[hl];
      return typeof n == "function" ? n : null;
    }
    function rs(t, n, l) {
      var d = t.displayName;
      if (d)
        return d;
      var y = n.displayName || n.name || "";
      return y !== "" ? l + "(" + y + ")" : l;
    }
    function ns(t) {
      return t.displayName || "Context";
    }
    function et(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case Rt:
          return "Fragment";
        case qa:
          return "Portal";
        case la:
          return "Profiler";
        case es:
          return "StrictMode";
        case uo:
          return "Suspense";
        case co:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case ai:
            var n = t;
            return ns(n) + ".Consumer";
          case ii:
            var l = t;
            return ns(l._context) + ".Provider";
          case si:
            return rs(t, t.render, "ForwardRef");
          case fo:
            var d = t.displayName || null;
            return d !== null ? d : et(t.type) || "Memo";
          case Bn: {
            var y = t, T = y._payload, I = y._init;
            try {
              return et(I(T));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var po = 0, fa, Xe, Hn, da, pa, ha, ga;
    function va() {
    }
    va.__reactDisabledLog = !0;
    function os() {
      {
        if (po === 0) {
          fa = console.log, Xe = console.info, Hn = console.warn, da = console.error, pa = console.group, ha = console.groupCollapsed, ga = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: va,
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
        po++;
      }
    }
    function is() {
      {
        if (po--, po === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ut({}, t, {
              value: fa
            }),
            info: Ut({}, t, {
              value: Xe
            }),
            warn: Ut({}, t, {
              value: Hn
            }),
            error: Ut({}, t, {
              value: da
            }),
            group: Ut({}, t, {
              value: pa
            }),
            groupCollapsed: Ut({}, t, {
              value: ha
            }),
            groupEnd: Ut({}, t, {
              value: ga
            })
          });
        }
        po < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ui = S.ReactCurrentDispatcher, ma;
    function ho(t, n, l) {
      {
        if (ma === void 0)
          try {
            throw Error();
          } catch (y) {
            var d = y.stack.trim().match(/\n( *(at )?)/);
            ma = d && d[1] || "";
          }
        return `
` + ma + t;
      }
    }
    var go = !1, Wn;
    {
      var vo = typeof WeakMap == "function" ? WeakMap : Map;
      Wn = new vo();
    }
    function mo(t, n) {
      if (!t || go)
        return "";
      {
        var l = Wn.get(t);
        if (l !== void 0)
          return l;
      }
      var d;
      go = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var T;
      T = ui.current, ui.current = null, os();
      try {
        if (n) {
          var I = function() {
            throw Error();
          };
          if (Object.defineProperty(I.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(I, []);
            } catch (C) {
              d = C;
            }
            Reflect.construct(t, [], I);
          } else {
            try {
              I.call();
            } catch (C) {
              d = C;
            }
            t.call(I.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            d = C;
          }
          t();
        }
      } catch (C) {
        if (C && d && typeof C.stack == "string") {
          for (var F = C.stack.split(`
`), e = d.stack.split(`
`), r = F.length - 1, a = e.length - 1; r >= 1 && a >= 0 && F[r] !== e[a]; )
            a--;
          for (; r >= 1 && a >= 0; r--, a--)
            if (F[r] !== e[a]) {
              if (r !== 1 || a !== 1)
                do
                  if (r--, a--, a < 0 || F[r] !== e[a]) {
                    var u = `
` + F[r].replace(" at new ", " at ");
                    return t.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", t.displayName)), typeof t == "function" && Wn.set(t, u), u;
                  }
                while (r >= 1 && a >= 0);
              break;
            }
        }
      } finally {
        go = !1, ui.current = T, is(), Error.prepareStackTrace = y;
      }
      var g = t ? t.displayName || t.name : "", w = g ? ho(g) : "";
      return typeof t == "function" && Wn.set(t, w), w;
    }
    function ci(t, n, l) {
      return mo(t, !0);
    }
    function as(t, n, l) {
      return mo(t, !1);
    }
    function ya(t) {
      var n = t.prototype;
      return !!(n && n.isReactComponent);
    }
    function Sa(t, n, l) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return mo(t, ya(t));
      if (typeof t == "string")
        return ho(t);
      switch (t) {
        case uo:
          return ho("Suspense");
        case co:
          return ho("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case si:
            return as(t.render);
          case fo:
            return Sa(t.type, n, l);
          case Bn: {
            var d = t, y = d._payload, T = d._init;
            try {
              return Sa(T(y), n, l);
            } catch {
            }
          }
        }
      return "";
    }
    var ba = {}, ss = S.ReactDebugCurrentFrame;
    function Yn(t) {
      if (t) {
        var n = t._owner, l = Sa(t.type, t._source, n ? n.type : null);
        ss.setExtraStackFrame(l);
      } else
        ss.setExtraStackFrame(null);
    }
    function xa(t, n, l, d, y) {
      {
        var T = Function.call.bind(ue);
        for (var I in t)
          if (T(t, I)) {
            var F = void 0;
            try {
              if (typeof t[I] != "function") {
                var e = Error((d || "React class") + ": " + l + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw e.name = "Invariant Violation", e;
              }
              F = t[I](n, I, d, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (r) {
              F = r;
            }
            F && !(F instanceof Error) && (Yn(y), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", l, I, typeof F), Yn(null)), F instanceof Error && !(F.message in ba) && (ba[F.message] = !0, Yn(y), p("Failed %s type: %s", l, F.message), Yn(null));
          }
      }
    }
    var fi;
    fi = {};
    var dn = {};
    Object.freeze(dn);
    function wa(t, n) {
      {
        var l = t.contextTypes;
        if (!l)
          return dn;
        var d = {};
        for (var y in l)
          d[y] = n[y];
        {
          var T = et(t) || "Unknown";
          xa(l, d, "context", T);
        }
        return d;
      }
    }
    function Ta(t, n, l, d) {
      {
        if (typeof t.getChildContext != "function") {
          {
            var y = et(n) || "Unknown";
            fi[y] || (fi[y] = !0, p("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", y, y));
          }
          return l;
        }
        var T = t.getChildContext();
        for (var I in T)
          if (!(I in d))
            throw new Error((et(n) || "Unknown") + '.getChildContext(): key "' + I + '" is not defined in childContextTypes.');
        {
          var F = et(n) || "Unknown";
          xa(d, T, "child context", F);
        }
        return Ut({}, l, T);
      }
    }
    var Ur;
    Ur = {};
    var ls = null, pn = null;
    function hn(t) {
      t.context._currentValue = t.parentValue;
    }
    function Ea(t) {
      t.context._currentValue = t.value;
    }
    function cr(t, n) {
      if (t !== n) {
        hn(t);
        var l = t.parent, d = n.parent;
        if (l === null) {
          if (d !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (d === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          cr(l, d);
        }
        Ea(n);
      }
    }
    function di(t) {
      hn(t);
      var n = t.parent;
      n !== null && di(n);
    }
    function pi(t) {
      var n = t.parent;
      n !== null && pi(n), Ea(t);
    }
    function yo(t, n) {
      hn(t);
      var l = t.parent;
      if (l === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      l.depth === n.depth ? cr(l, n) : yo(l, n);
    }
    function ka(t, n) {
      var l = n.parent;
      if (l === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      t.depth === l.depth ? cr(t, l) : ka(t, l), Ea(n);
    }
    function So(t) {
      var n = pn, l = t;
      n !== l && (n === null ? pi(l) : l === null ? di(n) : n.depth === l.depth ? cr(n, l) : n.depth > l.depth ? yo(n, l) : ka(n, l), pn = l);
    }
    function us(t, n) {
      var l;
      l = t._currentValue, t._currentValue = n, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Ur && p("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Ur;
      var d = pn, y = {
        parent: d,
        depth: d === null ? 0 : d.depth + 1,
        context: t,
        parentValue: l,
        value: n
      };
      return pn = y, y;
    }
    function cs(t) {
      var n = pn;
      if (n === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      n.context !== t && p("The parent context is not the expected context. This is probably a bug in React.");
      {
        var l = n.parentValue;
        l === pl ? n.context._currentValue = n.context._defaultValue : n.context._currentValue = l, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Ur && p("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Ur;
      }
      return pn = n.parent;
    }
    function hi() {
      return pn;
    }
    function bo(t) {
      var n = t._currentValue;
      return n;
    }
    function Ca(t) {
      return t._reactInternals;
    }
    function vl(t, n) {
      t._reactInternals = n;
    }
    var Vn = {}, gi = {}, Ia, vi, mi, xo, yi, $n, wo, Si, Gn;
    {
      Ia = /* @__PURE__ */ new Set(), vi = /* @__PURE__ */ new Set(), mi = /* @__PURE__ */ new Set(), wo = /* @__PURE__ */ new Set(), xo = /* @__PURE__ */ new Set(), Si = /* @__PURE__ */ new Set(), Gn = /* @__PURE__ */ new Set();
      var bi = /* @__PURE__ */ new Set();
      $n = function(t, n) {
        if (!(t === null || typeof t == "function")) {
          var l = n + "_" + t;
          bi.has(l) || (bi.add(l), p("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", n, t));
        }
      }, yi = function(t, n) {
        if (n === void 0) {
          var l = et(t) || "Component";
          xo.has(l) || (xo.add(l), p("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", l));
        }
      };
    }
    function xi(t, n) {
      {
        var l = t.constructor, d = l && et(l) || "ReactClass", y = d + "." + n;
        if (Vn[y])
          return;
        p(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, n, n, d), Vn[y] = !0;
      }
    }
    var wi = {
      isMounted: function(t) {
        return !1;
      },
      enqueueSetState: function(t, n, l) {
        var d = Ca(t);
        d.queue === null ? xi(t, "setState") : (d.queue.push(n), l != null && $n(l, "setState"));
      },
      enqueueReplaceState: function(t, n, l) {
        var d = Ca(t);
        d.replace = !0, d.queue = [n], l != null && $n(l, "setState");
      },
      enqueueForceUpdate: function(t, n) {
        var l = Ca(t);
        l.queue === null ? xi(t, "forceUpdate") : n != null && $n(n, "setState");
      }
    };
    function fs(t, n, l, d, y) {
      var T = l(y, d);
      yi(n, T);
      var I = T == null ? d : Ut({}, d, T);
      return I;
    }
    function ds(t, n, l) {
      var d = dn, y = t.contextType;
      if ("contextType" in t) {
        var T = (
          // Allow null for conditional declaration
          y === null || y !== void 0 && y.$$typeof === ai && y._context === void 0
        );
        if (!T && !Gn.has(t)) {
          Gn.add(t);
          var I = "";
          y === void 0 ? I = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof y != "object" ? I = " However, it is set to a " + typeof y + "." : y.$$typeof === ii ? I = " Did you accidentally pass the Context.Provider instead?" : y._context !== void 0 ? I = " Did you accidentally pass the Context.Consumer instead?" : I = " However, it is set to an object with keys {" + Object.keys(y).join(", ") + "}.", p("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", et(t) || "Component", I);
        }
      }
      typeof y == "object" && y !== null ? d = bo(y) : d = l;
      var F = new t(n, d);
      {
        if (typeof t.getDerivedStateFromProps == "function" && (F.state === null || F.state === void 0)) {
          var e = et(t) || "Component";
          Ia.has(e) || (Ia.add(e), p("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", e, F.state === null ? "null" : "undefined", e));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof F.getSnapshotBeforeUpdate == "function") {
          var r = null, a = null, u = null;
          if (typeof F.componentWillMount == "function" && F.componentWillMount.__suppressDeprecationWarning !== !0 ? r = "componentWillMount" : typeof F.UNSAFE_componentWillMount == "function" && (r = "UNSAFE_componentWillMount"), typeof F.componentWillReceiveProps == "function" && F.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? a = "componentWillReceiveProps" : typeof F.UNSAFE_componentWillReceiveProps == "function" && (a = "UNSAFE_componentWillReceiveProps"), typeof F.componentWillUpdate == "function" && F.componentWillUpdate.__suppressDeprecationWarning !== !0 ? u = "componentWillUpdate" : typeof F.UNSAFE_componentWillUpdate == "function" && (u = "UNSAFE_componentWillUpdate"), r !== null || a !== null || u !== null) {
            var g = et(t) || "Component", w = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            mi.has(g) || (mi.add(g), p(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, g, w, r !== null ? `
  ` + r : "", a !== null ? `
  ` + a : "", u !== null ? `
  ` + u : ""));
          }
        }
      }
      return F;
    }
    function ps(t, n, l) {
      {
        var d = et(n) || "Component", y = t.render;
        y || (n.prototype && typeof n.prototype.render == "function" ? p("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", d) : p("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", d)), t.getInitialState && !t.getInitialState.isReactClassApproved && !t.state && p("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", d), t.getDefaultProps && !t.getDefaultProps.isReactClassApproved && p("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", d), t.propTypes && p("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", d), t.contextType && p("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", d), t.contextTypes && p("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", d), n.contextType && n.contextTypes && !Si.has(n) && (Si.add(n), p("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", d)), typeof t.componentShouldUpdate == "function" && p("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", d), n.prototype && n.prototype.isPureReactComponent && typeof t.shouldComponentUpdate < "u" && p("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", et(n) || "A pure component"), typeof t.componentDidUnmount == "function" && p("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", d), typeof t.componentDidReceiveProps == "function" && p("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", d), typeof t.componentWillRecieveProps == "function" && p("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", d), typeof t.UNSAFE_componentWillRecieveProps == "function" && p("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", d);
        var T = t.props !== l;
        t.props !== void 0 && T && p("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", d, d), t.defaultProps && p("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", d, d), typeof t.getSnapshotBeforeUpdate == "function" && typeof t.componentDidUpdate != "function" && !vi.has(n) && (vi.add(n), p("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", et(n))), typeof t.getDerivedStateFromProps == "function" && p("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", d), typeof t.getDerivedStateFromError == "function" && p("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", d), typeof n.getSnapshotBeforeUpdate == "function" && p("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", d);
        var I = t.state;
        I && (typeof I != "object" || yr(I)) && p("%s.state: must be set to an object or null", d), typeof t.getChildContext == "function" && typeof n.childContextTypes != "object" && p("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", d);
      }
    }
    function ml(t, n) {
      var l = n.state;
      if (typeof n.componentWillMount == "function") {
        if (n.componentWillMount.__suppressDeprecationWarning !== !0) {
          var d = et(t) || "Unknown";
          gi[d] || (E(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            d
          ), gi[d] = !0);
        }
        n.componentWillMount();
      }
      typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), l !== n.state && (p("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", et(t) || "Component"), wi.enqueueReplaceState(n, n.state, null));
    }
    function yl(t, n, l, d) {
      if (t.queue !== null && t.queue.length > 0) {
        var y = t.queue, T = t.replace;
        if (t.queue = null, t.replace = !1, T && y.length === 1)
          n.state = y[0];
        else {
          for (var I = T ? y[0] : n.state, F = !0, e = T ? 1 : 0; e < y.length; e++) {
            var r = y[e], a = typeof r == "function" ? r.call(n, I, l, d) : r;
            a != null && (F ? (F = !1, I = Ut({}, I, a)) : Ut(I, a));
          }
          n.state = I;
        }
      } else
        t.queue = null;
    }
    function hs(t, n, l, d) {
      ps(t, n, l);
      var y = t.state !== void 0 ? t.state : null;
      t.updater = wi, t.props = l, t.state = y;
      var T = {
        queue: [],
        replace: !1
      };
      vl(t, T);
      var I = n.contextType;
      if (typeof I == "object" && I !== null ? t.context = bo(I) : t.context = d, t.state === l) {
        var F = et(n) || "Component";
        wo.has(F) || (wo.add(F), p("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", F));
      }
      var e = n.getDerivedStateFromProps;
      typeof e == "function" && (t.state = fs(t, n, e, y, l)), typeof n.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function" && (typeof t.UNSAFE_componentWillMount == "function" || typeof t.componentWillMount == "function") && (ml(n, t), yl(T, t, l, d));
    }
    var Sl = {
      id: 1,
      overflow: ""
    };
    function bl(t) {
      var n = t.overflow, l = t.id, d = l & ~xl(l);
      return d.toString(32) + n;
    }
    function Ti(t, n, l) {
      var d = t.id, y = t.overflow, T = Ei(d) - 1, I = d & ~(1 << T), F = l + 1, e = Ei(n) + T;
      if (e > 30) {
        var r = T - T % 5, a = (1 << r) - 1, u = (I & a).toString(32), g = I >> r, w = T - r, C = Ei(n) + w, L = F << w, $ = L | g, ie = u + y;
        return {
          id: 1 << C | $,
          overflow: ie
        };
      } else {
        var fe = F << T, Ee = fe | I, Ge = y;
        return {
          id: 1 << e | Ee,
          overflow: Ge
        };
      }
    }
    function Ei(t) {
      return 32 - Ma(t);
    }
    function xl(t) {
      return 1 << Ei(t) - 1;
    }
    var Ma = Math.clz32 ? Math.clz32 : Tl, ki = Math.log, wl = Math.LN2;
    function Tl(t) {
      var n = t >>> 0;
      return n === 0 ? 32 : 31 - (ki(n) / wl | 0) | 0;
    }
    function El(t, n) {
      return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n;
    }
    var kl = typeof Object.is == "function" ? Object.is : El, Tr = null, Da = null, Ci = null, Ae = null, gn = !1, vn = !1, Le = 0, Bt = null, mn = 0, Ii = 25, ft = !1, Er;
    function yn() {
      if (Tr === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return ft && p("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Tr;
    }
    function fr(t, n) {
      if (n === null)
        return p("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Er), !1;
      t.length !== n.length && p(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Er, "[" + t.join(", ") + "]", "[" + n.join(", ") + "]");
      for (var l = 0; l < n.length && l < t.length; l++)
        if (!kl(t[l], n[l]))
          return !1;
      return !0;
    }
    function Sn() {
      if (mn > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function kr() {
      return Ae === null ? Ci === null ? (gn = !1, Ci = Ae = Sn()) : (gn = !0, Ae = Ci) : Ae.next === null ? (gn = !1, Ae = Ae.next = Sn()) : (gn = !0, Ae = Ae.next), Ae;
    }
    function Cl(t, n) {
      Tr = n, Da = t, ft = !1, Le = 0;
    }
    function gs(t, n, l, d) {
      for (; vn; )
        vn = !1, Le = 0, mn += 1, Ae = null, l = t(n, d);
      return Ra(), l;
    }
    function Mi() {
      var t = Le !== 0;
      return t;
    }
    function Ra() {
      ft = !1, Tr = null, Da = null, vn = !1, Ci = null, mn = 0, Bt = null, Ae = null;
    }
    function Il(t) {
      return ft && p("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), bo(t);
    }
    function vs(t) {
      return Er = "useContext", yn(), bo(t);
    }
    function To(t, n) {
      return typeof n == "function" ? n(t) : n;
    }
    function Ml(t) {
      return Er = "useState", ms(
        To,
        // useReducer has a special case to support lazy useState initializers
        t
      );
    }
    function ms(t, n, l) {
      if (t !== To && (Er = "useReducer"), Tr = yn(), Ae = kr(), gn) {
        var d = Ae.queue, y = d.dispatch;
        if (Bt !== null) {
          var T = Bt.get(d);
          if (T !== void 0) {
            Bt.delete(d);
            var I = Ae.memoizedState, F = T;
            do {
              var e = F.action;
              ft = !0, I = t(I, e), ft = !1, F = F.next;
            } while (F !== null);
            return Ae.memoizedState = I, [I, y];
          }
        }
        return [Ae.memoizedState, y];
      } else {
        ft = !0;
        var r;
        t === To ? r = typeof n == "function" ? n() : n : r = l !== void 0 ? l(n) : n, ft = !1, Ae.memoizedState = r;
        var a = Ae.queue = {
          last: null,
          dispatch: null
        }, u = a.dispatch = Ss.bind(null, Tr, a);
        return [Ae.memoizedState, u];
      }
    }
    function Di(t, n) {
      Tr = yn(), Ae = kr();
      var l = n === void 0 ? null : n;
      if (Ae !== null) {
        var d = Ae.memoizedState;
        if (d !== null && l !== null) {
          var y = d[1];
          if (fr(l, y))
            return d[0];
        }
      }
      ft = !0;
      var T = t();
      return ft = !1, Ae.memoizedState = [T, l], T;
    }
    function Dl(t) {
      Tr = yn(), Ae = kr();
      var n = Ae.memoizedState;
      if (n === null) {
        var l = {
          current: t
        };
        return Object.seal(l), Ae.memoizedState = l, l;
      } else
        return n;
    }
    function ys(t, n) {
      Er = "useLayoutEffect", p("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Ss(t, n, l) {
      if (mn >= Ii)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (t === Tr) {
        vn = !0;
        var d = {
          action: l,
          next: null
        };
        Bt === null && (Bt = /* @__PURE__ */ new Map());
        var y = Bt.get(n);
        if (y === void 0)
          Bt.set(n, d);
        else {
          for (var T = y; T.next !== null; )
            T = T.next;
          T.next = d;
        }
      }
    }
    function Rl(t, n) {
      return Di(function() {
        return t;
      }, n);
    }
    function Al(t, n, l) {
      return yn(), n(t._source);
    }
    function Ol(t, n, l) {
      if (l === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return l();
    }
    function Pl(t) {
      return yn(), t;
    }
    function jl() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function Nl() {
      return yn(), [!1, jl];
    }
    function _l() {
      var t = Da, n = bl(t.treeContext), l = Aa;
      if (l === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var d = Le++;
      return jr(l, n, d);
    }
    function Ri() {
    }
    var bs = {
      readContext: Il,
      useContext: vs,
      useMemo: Di,
      useReducer: ms,
      useRef: Dl,
      useState: Ml,
      useInsertionEffect: Ri,
      useLayoutEffect: ys,
      useCallback: Rl,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: Ri,
      // Effects are not run in the server environment.
      useEffect: Ri,
      // Debugging effect
      useDebugValue: Ri,
      useDeferredValue: Pl,
      useTransition: Nl,
      useId: _l,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Al,
      useSyncExternalStore: Ol
    }, Aa = null;
    function Eo(t) {
      Aa = t;
    }
    function xs(t) {
      try {
        var n = "", l = t;
        do {
          switch (l.tag) {
            case 0:
              n += ho(l.type, null, null);
              break;
            case 1:
              n += as(l.type, null, null);
              break;
            case 2:
              n += ci(l.type, null, null);
              break;
          }
          l = l.parent;
        } while (l);
        return n;
      } catch (d) {
        return `
Error generating stack: ` + d.message + `
` + d.stack;
      }
    }
    var ko = S.ReactCurrentDispatcher, Ai = S.ReactDebugCurrentFrame, Oa = 0, Br = 1, Oi = 2, Pi = 3, bn = 4, ws = 0, Pa = 1, xn = 2, Ll = 12800;
    function Ts(t) {
      return console.error(t), null;
    }
    function dr() {
    }
    function Fl(t, n, l, d, y, T, I, F, e) {
      var r = [], a = /* @__PURE__ */ new Set(), u = {
        destination: null,
        responseState: n,
        progressiveChunkSize: d === void 0 ? Ll : d,
        status: ws,
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
        onError: y === void 0 ? Ts : y,
        onAllReady: T === void 0 ? dr : T,
        onShellReady: I === void 0 ? dr : I,
        onShellError: F === void 0 ? dr : F,
        onFatalError: e === void 0 ? dr : e
      }, g = ji(
        u,
        0,
        null,
        l,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      g.parentFlushed = !0;
      var w = ja(u, t, null, g, a, dn, ls, Sl);
      return r.push(w), u;
    }
    function zl(t, n) {
      var l = t.pingedTasks;
      l.push(n), l.length === 1 && W(function() {
        return Ao(t);
      });
    }
    function Co(t, n) {
      return {
        id: on,
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
    function ja(t, n, l, d, y, T, I, F) {
      t.allPendingTasks++, l === null ? t.pendingRootTasks++ : l.pendingTasks++;
      var e = {
        node: n,
        ping: function() {
          return zl(t, e);
        },
        blockedBoundary: l,
        blockedSegment: d,
        abortSet: y,
        legacyContext: T,
        context: I,
        treeContext: F
      };
      return e.componentStack = null, y.add(e), e;
    }
    function ji(t, n, l, d, y, T) {
      return {
        status: Oa,
        id: -1,
        // lazily assigned later
        index: n,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: d,
        boundary: l,
        lastPushedText: y,
        textEmbedded: T
      };
    }
    var Cr = null;
    function Io() {
      return Cr === null || Cr.componentStack === null ? "" : xs(Cr.componentStack);
    }
    function Hr(t, n) {
      t.componentStack = {
        tag: 0,
        parent: t.componentStack,
        type: n
      };
    }
    function pr(t, n) {
      t.componentStack = {
        tag: 1,
        parent: t.componentStack,
        type: n
      };
    }
    function Na(t, n) {
      t.componentStack = {
        tag: 2,
        parent: t.componentStack,
        type: n
      };
    }
    function Ht(t) {
      t.componentStack === null ? p("Unexpectedly popped too many stack frames. This is a bug in React.") : t.componentStack = t.componentStack.parent;
    }
    var Zn = null;
    function _a(t, n) {
      {
        var l;
        typeof n == "string" ? l = n : n && typeof n.message == "string" ? l = n.message : l = String(n);
        var d = Zn || Io();
        Zn = null, t.errorMessage = l, t.errorComponentStack = d;
      }
    }
    function Wt(t, n) {
      var l = t.onError(n);
      if (l != null && typeof l != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof l + '" instead');
      return l;
    }
    function Wr(t, n) {
      var l = t.onShellError;
      l(n);
      var d = t.onFatalError;
      d(n), t.destination !== null ? (t.status = xn, te(t.destination, n)) : (t.status = Pa, t.fatalError = n);
    }
    function La(t, n, l) {
      Hr(n, "Suspense");
      var d = n.blockedBoundary, y = n.blockedSegment, T = l.fallback, I = l.children, F = /* @__PURE__ */ new Set(), e = Co(t, F), r = y.chunks.length, a = ji(
        t,
        r,
        e,
        y.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      y.children.push(a), y.lastPushedText = !1;
      var u = ji(
        t,
        0,
        null,
        y.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      u.parentFlushed = !0, n.blockedBoundary = e, n.blockedSegment = u;
      try {
        if ($a(t, n, I), _r(u.chunks, t.responseState, u.lastPushedText, u.textEmbedded), u.status = Br, Li(e, u), e.pendingTasks === 0) {
          Ht(n);
          return;
        }
      } catch (w) {
        u.status = bn, e.forceClientRender = !0, e.errorDigest = Wt(t, w), _a(e, w);
      } finally {
        n.blockedBoundary = d, n.blockedSegment = y;
      }
      var g = ja(t, T, d, a, F, n.legacyContext, n.context, n.treeContext);
      g.componentStack = n.componentStack, t.pingedTasks.push(g), Ht(n);
    }
    function Mo(t, n, l, d) {
      Hr(n, l);
      var y = n.blockedSegment, T = no(y.chunks, l, d, t.responseState, y.formatContext);
      y.lastPushedText = !1;
      var I = y.formatContext;
      y.formatContext = or(I, l, d), $a(t, n, T), y.formatContext = I, Go(y.chunks, l), y.lastPushedText = !1, Ht(n);
    }
    function Ni(t) {
      return t.prototype && t.prototype.isReactComponent;
    }
    function Es(t, n, l, d, y) {
      var T = {};
      Cl(n, T);
      var I = l(d, y);
      return gs(l, d, I, y);
    }
    function ks(t, n, l, d, y) {
      var T = l.render();
      l.props !== y && (Ro || p("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", et(d) || "a component"), Ro = !0);
      {
        var I = d.childContextTypes;
        if (I != null) {
          var F = n.legacyContext, e = Ta(l, d, F, I);
          n.legacyContext = e, At(t, n, T), n.legacyContext = F;
          return;
        }
      }
      At(t, n, T);
    }
    function Ul(t, n, l, d) {
      Na(n, l);
      var y = wa(l, n.legacyContext), T = ds(l, d, y);
      hs(T, l, d, y), ks(t, n, T, l, d), Ht(n);
    }
    var Fa = {}, Do = {}, Cs = {}, za = {}, Ro = !1, Ua = !1, Ba = !1, Ha = !1;
    function Is(t, n, l, d) {
      var y;
      if (y = wa(l, n.legacyContext), pr(n, l), l.prototype && typeof l.prototype.render == "function") {
        var T = et(l) || "Unknown";
        Fa[T] || (p("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", T, T), Fa[T] = !0);
      }
      var I = Es(t, n, l, d, y), F = Mi();
      if (typeof I == "object" && I !== null && typeof I.render == "function" && I.$$typeof === void 0) {
        var e = et(l) || "Unknown";
        Do[e] || (p("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", e, e, e), Do[e] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof I == "object" && I !== null && typeof I.render == "function" && I.$$typeof === void 0
      ) {
        {
          var r = et(l) || "Unknown";
          Do[r] || (p("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", r, r, r), Do[r] = !0);
        }
        hs(I, l, d, y), ks(t, n, I, l, d);
      } else if (Ms(l), F) {
        var a = n.treeContext, u = 1, g = 0;
        n.treeContext = Ti(a, u, g);
        try {
          At(t, n, I);
        } finally {
          n.treeContext = a;
        }
      } else
        At(t, n, I);
      Ht(n);
    }
    function Ms(t) {
      {
        if (t && t.childContextTypes && p("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), typeof t.getDerivedStateFromProps == "function") {
          var n = et(t) || "Unknown";
          za[n] || (p("%s: Function components do not support getDerivedStateFromProps.", n), za[n] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var l = et(t) || "Unknown";
          Cs[l] || (p("%s: Function components do not support contextType.", l), Cs[l] = !0);
        }
      }
    }
    function Wa(t, n) {
      if (t && t.defaultProps) {
        var l = Ut({}, n), d = t.defaultProps;
        for (var y in d)
          l[y] === void 0 && (l[y] = d[y]);
        return l;
      }
      return n;
    }
    function Bl(t, n, l, d, y) {
      pr(n, l.render);
      var T = Es(t, n, l.render, d, y), I = Mi();
      if (I) {
        var F = n.treeContext, e = 1, r = 0;
        n.treeContext = Ti(F, e, r);
        try {
          At(t, n, T);
        } finally {
          n.treeContext = F;
        }
      } else
        At(t, n, T);
      Ht(n);
    }
    function Hl(t, n, l, d, y) {
      var T = l.type, I = Wa(T, d);
      Ya(t, n, T, I, y);
    }
    function Ds(t, n, l, d) {
      l._context === void 0 ? l !== l.Consumer && (Ha || (Ha = !0, p("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : l = l._context;
      var y = d.children;
      typeof y != "function" && p("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var T = bo(l), I = y(T);
      At(t, n, I);
    }
    function Wl(t, n, l, d) {
      var y = l._context, T = d.value, I = d.children, F;
      F = n.context, n.context = us(y, T), At(t, n, I), n.context = cs(y), F !== n.context && p("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function Yl(t, n, l, d, y) {
      Hr(n, "Lazy");
      var T = l._payload, I = l._init, F = I(T), e = Wa(F, d);
      Ya(t, n, F, e, y), Ht(n);
    }
    function Ya(t, n, l, d, y) {
      if (typeof l == "function")
        if (Ni(l)) {
          Ul(t, n, l, d);
          return;
        } else {
          Is(t, n, l, d);
          return;
        }
      if (typeof l == "string") {
        Mo(t, n, l, d);
        return;
      }
      switch (l) {
        case li:
        case ca:
        case es:
        case la:
        case Rt: {
          At(t, n, d.children);
          return;
        }
        case co: {
          Hr(n, "SuspenseList"), At(t, n, d.children), Ht(n);
          return;
        }
        case ua:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case uo: {
          La(t, n, d);
          return;
        }
      }
      if (typeof l == "object" && l !== null)
        switch (l.$$typeof) {
          case si: {
            Bl(t, n, l, d, y);
            return;
          }
          case fo: {
            Hl(t, n, l, d, y);
            return;
          }
          case ii: {
            Wl(t, n, l, d);
            return;
          }
          case ai: {
            Ds(t, n, l, d);
            return;
          }
          case Bn: {
            Yl(t, n, l, d);
            return;
          }
        }
      var T = "";
      throw (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (T += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (l == null ? l : typeof l) + "." + T));
    }
    function Vl(t, n) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      t[Symbol.toStringTag] === "Generator" && (Ua || p("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Ua = !0), t.entries === n && (Ba || p("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ba = !0);
    }
    function At(t, n, l) {
      try {
        return Va(t, n, l);
      } catch (d) {
        throw typeof d == "object" && d !== null && typeof d.then == "function" || (Zn = Zn !== null ? Zn : Io()), d;
      }
    }
    function Va(t, n, l) {
      if (n.node = l, typeof l == "object" && l !== null) {
        switch (l.$$typeof) {
          case dl: {
            var d = l, y = d.type, T = d.props, I = d.ref;
            Ya(t, n, y, T, I);
            return;
          }
          case qa:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Bn: {
            var F = l, e = F._payload, r = F._init, a;
            try {
              a = r(e);
            } catch (fe) {
              throw typeof fe == "object" && fe !== null && typeof fe.then == "function" && Hr(n, "Lazy"), fe;
            }
            At(t, n, a);
            return;
          }
        }
        if (yr(l)) {
          Rs(t, n, l);
          return;
        }
        var u = gl(l);
        if (u) {
          Vl(l, u);
          var g = u.call(l);
          if (g) {
            var w = g.next();
            if (!w.done) {
              var C = [];
              do
                C.push(w.value), w = g.next();
              while (!w.done);
              Rs(t, n, C);
              return;
            }
            return;
          }
        }
        var L = Object.prototype.toString.call(l);
        throw new Error("Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof l == "string") {
        var $ = n.blockedSegment;
        $.lastPushedText = Nr(n.blockedSegment.chunks, l, t.responseState, $.lastPushedText);
        return;
      }
      if (typeof l == "number") {
        var ie = n.blockedSegment;
        ie.lastPushedText = Nr(n.blockedSegment.chunks, "" + l, t.responseState, ie.lastPushedText);
        return;
      }
      typeof l == "function" && p("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function Rs(t, n, l) {
      for (var d = l.length, y = 0; y < d; y++) {
        var T = n.treeContext;
        n.treeContext = Ti(T, d, y);
        try {
          $a(t, n, l[y]);
        } finally {
          n.treeContext = T;
        }
      }
    }
    function Ot(t, n, l) {
      var d = n.blockedSegment, y = d.chunks.length, T = ji(
        t,
        y,
        null,
        d.formatContext,
        // Adopt the parent segment's leading text embed
        d.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      d.children.push(T), d.lastPushedText = !1;
      var I = ja(t, n.node, n.blockedBoundary, T, n.abortSet, n.legacyContext, n.context, n.treeContext);
      n.componentStack !== null && (I.componentStack = n.componentStack.parent);
      var F = I.ping;
      l.then(F, F);
    }
    function $a(t, n, l) {
      var d = n.blockedSegment.formatContext, y = n.legacyContext, T = n.context, I = null;
      I = n.componentStack;
      try {
        return At(t, n, l);
      } catch (F) {
        if (Ra(), typeof F == "object" && F !== null && typeof F.then == "function") {
          Ot(t, n, F), n.blockedSegment.formatContext = d, n.legacyContext = y, n.context = T, So(T), n.componentStack = I;
          return;
        } else
          throw n.blockedSegment.formatContext = d, n.legacyContext = y, n.context = T, So(T), n.componentStack = I, F;
      }
    }
    function As(t, n, l, d) {
      var y = Wt(t, d);
      if (n === null ? Wr(t, d) : (n.pendingTasks--, n.forceClientRender || (n.forceClientRender = !0, n.errorDigest = y, _a(n, d), n.parentFlushed && t.clientRenderedBoundaries.push(n))), t.allPendingTasks--, t.allPendingTasks === 0) {
        var T = t.onAllReady;
        T();
      }
    }
    function $l(t) {
      var n = this, l = t.blockedBoundary, d = t.blockedSegment;
      d.status = Pi, Os(n, l, d);
    }
    function _i(t, n, l) {
      var d = t.blockedBoundary, y = t.blockedSegment;
      if (y.status = Pi, d === null)
        n.allPendingTasks--, n.status !== xn && (n.status = xn, n.destination !== null && le(n.destination));
      else {
        if (d.pendingTasks--, !d.forceClientRender) {
          d.forceClientRender = !0;
          var T = l === void 0 ? new Error("The render was aborted by the server without a reason.") : l;
          d.errorDigest = n.onError(T);
          {
            var I = "The server did not finish this Suspense boundary: ";
            T && typeof T.message == "string" ? T = I + T.message : T = I + String(T);
            var F = Cr;
            Cr = t;
            try {
              _a(d, T);
            } finally {
              Cr = F;
            }
          }
          d.parentFlushed && n.clientRenderedBoundaries.push(d);
        }
        if (d.fallbackAbortableTasks.forEach(function(r) {
          return _i(r, n, l);
        }), d.fallbackAbortableTasks.clear(), n.allPendingTasks--, n.allPendingTasks === 0) {
          var e = n.onAllReady;
          e();
        }
      }
    }
    function Li(t, n) {
      if (n.chunks.length === 0 && n.children.length === 1 && n.children[0].boundary === null) {
        var l = n.children[0];
        l.id = n.id, l.parentFlushed = !0, l.status === Br && Li(t, l);
      } else {
        var d = t.completedSegments;
        d.push(n);
      }
    }
    function Os(t, n, l) {
      if (n === null) {
        if (l.parentFlushed) {
          if (t.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          t.completedRootSegment = l;
        }
        if (t.pendingRootTasks--, t.pendingRootTasks === 0) {
          t.onShellError = dr;
          var d = t.onShellReady;
          d();
        }
      } else if (n.pendingTasks--, !n.forceClientRender) {
        if (n.pendingTasks === 0)
          l.parentFlushed && l.status === Br && Li(n, l), n.parentFlushed && t.completedBoundaries.push(n), n.fallbackAbortableTasks.forEach($l, t), n.fallbackAbortableTasks.clear();
        else if (l.parentFlushed && l.status === Br) {
          Li(n, l);
          var y = n.completedSegments;
          y.length === 1 && n.parentFlushed && t.partialBoundaries.push(n);
        }
      }
      if (t.allPendingTasks--, t.allPendingTasks === 0) {
        var T = t.onAllReady;
        T();
      }
    }
    function Ps(t, n) {
      var l = n.blockedSegment;
      if (l.status === Oa) {
        So(n.context);
        var d = null;
        d = Cr, Cr = n;
        try {
          At(t, n, n.node), _r(l.chunks, t.responseState, l.lastPushedText, l.textEmbedded), n.abortSet.delete(n), l.status = Br, Os(t, n.blockedBoundary, l);
        } catch (T) {
          if (Ra(), typeof T == "object" && T !== null && typeof T.then == "function") {
            var y = n.ping;
            T.then(y, y);
          } else
            n.abortSet.delete(n), l.status = bn, As(t, n.blockedBoundary, l, T);
        } finally {
          Cr = d;
        }
      }
    }
    function Ao(t) {
      if (t.status !== xn) {
        var n = hi(), l = ko.current;
        ko.current = bs;
        var d;
        d = Ai.getCurrentStack, Ai.getCurrentStack = Io;
        var y = Aa;
        Eo(t.responseState);
        try {
          var T = t.pingedTasks, I;
          for (I = 0; I < T.length; I++) {
            var F = T[I];
            Ps(t, F);
          }
          T.splice(0, I), t.destination !== null && zi(t, t.destination);
        } catch (e) {
          Wt(t, e), Wr(t, e);
        } finally {
          Eo(y), ko.current = l, Ai.getCurrentStack = d, l === bs && So(n);
        }
      }
    }
    function Oo(t, n, l) {
      switch (l.parentFlushed = !0, l.status) {
        case Oa: {
          var d = l.id = t.nextSegmentId++;
          return l.lastPushedText = !1, l.textEmbedded = !1, On(n, t.responseState, d);
        }
        case Br: {
          l.status = Oi;
          for (var y = !0, T = l.chunks, I = 0, F = l.children, e = 0; e < F.length; e++) {
            for (var r = F[e]; I < r.index; I++)
              P(n, T[I]);
            y = Fi(t, n, r);
          }
          for (; I < T.length - 1; I++)
            P(n, T[I]);
          return I < T.length && (y = ee(n, T[I])), y;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Fi(t, n, l) {
      var d = l.boundary;
      if (d === null)
        return Oo(t, n, l);
      if (d.parentFlushed = !0, d.forceClientRender)
        return bt(n, t.responseState, d.errorDigest, d.errorMessage, d.errorComponentStack), Oo(t, n, l), na(n, t.responseState);
      if (d.pendingTasks > 0) {
        d.rootSegmentID = t.nextSegmentId++, d.completedSegments.length > 0 && t.partialBoundaries.push(d);
        var y = d.id = an(t.responseState);
        return Nn(n, t.responseState, y), Oo(t, n, l), _n(n, t.responseState);
      } else {
        if (d.byteSize > t.progressiveChunkSize)
          return d.rootSegmentID = t.nextSegmentId++, t.completedBoundaries.push(d), Nn(n, t.responseState, d.id), Oo(t, n, l), _n(n, t.responseState);
        Qo(n, t.responseState);
        var T = d.completedSegments;
        if (T.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var I = T[0];
        return Fi(t, n, I), Xo(n, t.responseState);
      }
    }
    function js(t, n, l) {
      return Ja(n, t.responseState, l.id, l.errorDigest, l.errorMessage, l.errorComponentStack);
    }
    function Po(t, n, l) {
      return ke(n, t.responseState, l.formatContext, l.id), Fi(t, n, l), Ve(n, l.formatContext);
    }
    function jo(t, n, l) {
      for (var d = l.completedSegments, y = 0; y < d.length; y++) {
        var T = d[y];
        Ga(t, n, l, T);
      }
      return d.length = 0, oa(n, t.responseState, l.id, l.rootSegmentID);
    }
    function Gl(t, n, l) {
      for (var d = l.completedSegments, y = 0; y < d.length; y++) {
        var T = d[y];
        if (!Ga(t, n, l, T))
          return y++, d.splice(0, y), !1;
      }
      return d.splice(0, y), !0;
    }
    function Ga(t, n, l, d) {
      if (d.status === Oi)
        return !0;
      var y = d.id;
      if (y === -1) {
        var T = d.id = l.rootSegmentID;
        if (T === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Po(t, n, d);
      } else
        return Po(t, n, d), ol(n, t.responseState, y);
    }
    function zi(t, n) {
      ne();
      try {
        var l = t.completedRootSegment;
        l !== null && t.pendingRootTasks === 0 && (Fi(t, n, l), t.completedRootSegment = null, ea(n, t.responseState));
        var d = t.clientRenderedBoundaries, y;
        for (y = 0; y < d.length; y++) {
          var T = d[y];
          js(t, n, T);
        }
        d.splice(0, y);
        var I = t.completedBoundaries;
        for (y = 0; y < I.length; y++) {
          var F = I[y];
          jo(t, n, F);
        }
        I.splice(0, y), de(n), ne(n);
        var e = t.partialBoundaries;
        for (y = 0; y < e.length; y++) {
          var r = e[y];
          if (!Gl(t, n, r)) {
            t.destination = null, y++, e.splice(0, y);
            return;
          }
        }
        e.splice(0, y);
        var a = t.completedBoundaries;
        for (y = 0; y < a.length; y++) {
          var u = a[y];
          jo(t, n, u);
        }
        a.splice(0, y);
      } finally {
        de(n), t.allPendingTasks === 0 && t.pingedTasks.length === 0 && t.clientRenderedBoundaries.length === 0 && t.completedBoundaries.length === 0 && (t.abortableTasks.size !== 0 && p("There was still abortable task at the root when we closed. This is a bug in React."), le(n));
      }
    }
    function Zl(t) {
      W(function() {
        return Ao(t);
      });
    }
    function Ns(t, n) {
      if (t.status === Pa) {
        t.status = xn, te(n, t.fatalError);
        return;
      }
      if (t.status !== xn && t.destination === null) {
        t.destination = n;
        try {
          zi(t, n);
        } catch (l) {
          Wt(t, l), Wr(t, l);
        }
      }
    }
    function Ui(t, n) {
      try {
        var l = t.abortableTasks;
        l.forEach(function(d) {
          return _i(d, t, n);
        }), l.clear(), t.destination !== null && zi(t, t.destination);
      } catch (d) {
        Wt(t, d), Wr(t, d);
      }
    }
    function Ql(t, n) {
      return new Promise(function(l, d) {
        var y, T, I = new Promise(function(g, w) {
          T = g, y = w;
        });
        function F() {
          var g = new ReadableStream(
            {
              type: "bytes",
              pull: function(w) {
                Ns(r, w);
              },
              cancel: function(w) {
                Ui(r);
              }
            },
            // $FlowFixMe size() methods are not allowed on byte streams.
            {
              highWaterMark: 0
            }
          );
          g.allReady = I, l(g);
        }
        function e(g) {
          I.catch(function() {
          }), d(g);
        }
        var r = Fl(t, br(n ? n.identifierPrefix : void 0, n ? n.nonce : void 0, n ? n.bootstrapScriptContent : void 0, n ? n.bootstrapScripts : void 0, n ? n.bootstrapModules : void 0), Qt(n ? n.namespaceURI : void 0), n ? n.progressiveChunkSize : void 0, n ? n.onError : void 0, T, F, e, y);
        if (n && n.signal) {
          var a = n.signal, u = function() {
            Ui(r, a.reason), a.removeEventListener("abort", u);
          };
          a.addEventListener("abort", u);
        }
        Zl(r);
      });
    }
    Vs.renderToReadableStream = Ql, Vs.version = h;
  }()), Vs;
}
var Wo, Su;
process.env.NODE_ENV === "production" ? (Wo = Sd(), Su = bd()) : (Wo = xd(), Su = wd());
Yo.version = Wo.version;
Yo.renderToString = Wo.renderToString;
Yo.renderToStaticMarkup = Wo.renderToStaticMarkup;
Yo.renderToNodeStream = Wo.renderToNodeStream;
Yo.renderToStaticNodeStream = Wo.renderToStaticNodeStream;
Yo.renderToReadableStream = Su.renderToReadableStream;
var lu = { exports: {} };
/**
 * SVGInjector v1.1.3 - Fast, caching, dynamic inline SVG DOM injection library
 * https://github.com/iconic/SVGInjector
 *
 * Copyright (c) 2014-2015 Waybury <hello@waybury.com>
 * @license MIT
 */
var oc;
function Td() {
  return oc || (oc = 1, function(s, h) {
    (function(S, E) {
      var p = S.location.protocol === "file:", A = E.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1");
      function W(_) {
        _ = _.split(" ");
        for (var Y = {}, M = _.length, V = []; M--; )
          Y.hasOwnProperty(_[M]) || (Y[_[M]] = 1, V.unshift(_[M]));
        return V.join(" ");
      }
      var H = Array.prototype.forEach || function(_, Y) {
        if (this === void 0 || this === null || typeof _ != "function")
          throw new TypeError();
        var M, V = this.length >>> 0;
        for (M = 0; M < V; ++M)
          M in this && _.call(Y, this[M], M, this);
      }, k = {}, D = 0, ne = [], P = [], ee = {}, de = function(_) {
        return _.cloneNode(!0);
      }, le = function(_, Y) {
        P[_] = P[_] || [], P[_].push(Y);
      }, ge = function(_) {
        for (var Y = 0, M = P[_].length; Y < M; Y++)
          (function(V) {
            setTimeout(function() {
              P[_][V](de(k[_]));
            }, 0);
          })(Y);
      }, Q = function(_, Y) {
        if (k[_] !== void 0)
          k[_] instanceof SVGSVGElement ? Y(de(k[_])) : le(_, Y);
        else {
          if (!S.XMLHttpRequest)
            return Y("Browser does not support XMLHttpRequest"), !1;
          k[_] = {}, le(_, Y);
          var M = new XMLHttpRequest();
          M.onreadystatechange = function() {
            if (M.readyState === 4) {
              if (M.status === 404 || M.responseXML === null)
                return Y("Unable to load SVG file: " + _), p && Y("Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver."), Y(), !1;
              if (M.status === 200 || p && M.status === 0) {
                if (M.responseXML instanceof Document)
                  k[_] = M.responseXML.documentElement;
                else if (DOMParser && DOMParser instanceof Function) {
                  var V;
                  try {
                    var J = new DOMParser();
                    V = J.parseFromString(M.responseText, "text/xml");
                  } catch {
                    V = void 0;
                  }
                  if (!V || V.getElementsByTagName("parsererror").length)
                    return Y("Unable to parse SVG file: " + _), !1;
                  k[_] = V.documentElement;
                }
                ge(_);
              } else
                return Y("There was a problem injecting the SVG: " + M.status + " " + M.statusText), !1;
            }
          }, M.open("GET", _), M.overrideMimeType && M.overrideMimeType("text/xml"), M.send();
        }
      }, z = function(_, Y, M, V) {
        var J = _.getAttribute("data-src") || _.getAttribute("src");
        if (!/\.svg/i.test(J)) {
          V("Attempted to inject a file with a non-svg extension: " + J);
          return;
        }
        if (!A) {
          var Ie = _.getAttribute("data-fallback") || _.getAttribute("data-png");
          Ie ? (_.setAttribute("src", Ie), V(null)) : M ? (_.setAttribute("src", M + "/" + J.split("/").pop().replace(".svg", ".png")), V(null)) : V("This browser does not support SVG and no PNG fallback was defined.");
          return;
        }
        ne.indexOf(_) === -1 && (ne.push(_), _.setAttribute("src", ""), Q(J, function(ue) {
          if (typeof ue > "u" || typeof ue == "string")
            return V(ue), !1;
          var Oe = _.getAttribute("id");
          Oe && ue.setAttribute("id", Oe);
          var Pe = _.getAttribute("title");
          Pe && ue.setAttribute("title", Pe);
          var Ye = [].concat(ue.getAttribute("class") || [], "injected-svg", _.getAttribute("class") || []).join(" ");
          ue.setAttribute("class", W(Ye));
          var it = _.getAttribute("style");
          it && ue.setAttribute("style", it);
          var Je = [].filter.call(_.attributes, function(he) {
            return /^data-\w[\w\-]*$/.test(he.name);
          });
          H.call(Je, function(he) {
            he.name && he.value && ue.setAttribute(he.name, he.value);
          });
          var pt = {
            clipPath: ["clip-path"],
            "color-profile": ["color-profile"],
            cursor: ["cursor"],
            filter: ["filter"],
            linearGradient: ["fill", "stroke"],
            marker: ["marker", "marker-start", "marker-mid", "marker-end"],
            mask: ["mask"],
            pattern: ["fill", "stroke"],
            radialGradient: ["fill", "stroke"]
          }, Ke, Ze, Ne, _e, Z;
          Object.keys(pt).forEach(function(he) {
            Ke = he, Ne = pt[he], Ze = ue.querySelectorAll("defs " + Ke + "[id]");
            for (var Te = 0, re = Ze.length; Te < re; Te++) {
              _e = Ze[Te].id, Z = _e + "-" + D;
              var De;
              H.call(Ne, function($e) {
                De = ue.querySelectorAll("[" + $e + '*="' + _e + '"]');
                for (var mt = 0, $t = De.length; mt < $t; mt++)
                  De[mt].setAttribute($e, "url(#" + Z + ")");
              }), Ze[Te].id = Z;
            }
          }), ue.removeAttribute("xmlns:a");
          for (var G = ue.querySelectorAll("script"), oe = [], ye, pe, ae = 0, se = G.length; ae < se; ae++)
            pe = G[ae].getAttribute("type"), (!pe || pe === "application/ecmascript" || pe === "application/javascript") && (ye = G[ae].innerText || G[ae].textContent, oe.push(ye), ue.removeChild(G[ae]));
          if (oe.length > 0 && (Y === "always" || Y === "once" && !ee[J])) {
            for (var ve = 0, Se = oe.length; ve < Se; ve++)
              new Function(oe[ve])(S);
            ee[J] = !0;
          }
          var be = ue.querySelectorAll("style");
          H.call(be, function(he) {
            he.textContent += "";
          }), _.parentNode.replaceChild(ue, _), delete ne[ne.indexOf(_)], _ = null, D++, V(ue);
        }));
      }, te = function(_, Y, M) {
        Y = Y || {};
        var V = Y.evalScripts || "always", J = Y.pngFallback || !1, Ie = Y.each;
        if (_.length !== void 0) {
          var ue = 0;
          H.call(_, function(Oe) {
            z(Oe, V, J, function(Pe) {
              Ie && typeof Ie == "function" && Ie(Pe), M && _.length === ++ue && M(ue);
            });
          });
        } else
          _ ? z(_, V, J, function(Oe) {
            Ie && typeof Ie == "function" && Ie(Oe), M && M(1), _ = null;
          }) : M && M(0);
      };
      s.exports = te;
    })(window, document);
  }(lu)), lu.exports;
}
(function(s, h) {
  Object.defineProperty(h, "__esModule", {
    value: !0
  });
  var S = Object.assign || function(te) {
    for (var _ = 1; _ < arguments.length; _++) {
      var Y = arguments[_];
      for (var M in Y)
        Object.prototype.hasOwnProperty.call(Y, M) && (te[M] = Y[M]);
    }
    return te;
  }, E = function() {
    function te(_, Y) {
      for (var M = 0; M < Y.length; M++) {
        var V = Y[M];
        V.enumerable = V.enumerable || !1, V.configurable = !0, "value" in V && (V.writable = !0), Object.defineProperty(_, V.key, V);
      }
    }
    return function(_, Y, M) {
      return Y && te(_.prototype, Y), M && te(_, M), _;
    };
  }(), p = yd, A = ne(p), W = q, H = ne(W), k = Yo, D = ne(k);
  function ne(te) {
    return te && te.__esModule ? te : { default: te };
  }
  function P(te, _) {
    var Y = {};
    for (var M in te)
      _.indexOf(M) >= 0 || Object.prototype.hasOwnProperty.call(te, M) && (Y[M] = te[M]);
    return Y;
  }
  function ee(te, _) {
    if (!(te instanceof _))
      throw new TypeError("Cannot call a class as a function");
  }
  function de(te, _) {
    if (!te)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return _ && (typeof _ == "object" || typeof _ == "function") ? _ : te;
  }
  function le(te, _) {
    if (typeof _ != "function" && _ !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof _);
    te.prototype = Object.create(_ && _.prototype, { constructor: { value: te, enumerable: !1, writable: !0, configurable: !0 } }), _ && (Object.setPrototypeOf ? Object.setPrototypeOf(te, _) : te.__proto__ = _);
  }
  var ge = typeof window < "u", Q = ge ? Td() : void 0, z = function(te) {
    le(_, te);
    function _() {
      var Y, M, V, J;
      ee(this, _);
      for (var Ie = arguments.length, ue = Array(Ie), Oe = 0; Oe < Ie; Oe++)
        ue[Oe] = arguments[Oe];
      return J = (M = (V = de(this, (Y = _.__proto__ || Object.getPrototypeOf(_)).call.apply(Y, [this].concat(ue))), V), V.refCallback = function(Pe) {
        if (!Pe) {
          V.removeSVG();
          return;
        }
        V.container = Pe, V.renderSVG();
      }, M), de(V, J);
    }
    return E(_, [{
      key: "renderSVG",
      value: function() {
        var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
        if (this.container instanceof Node) {
          var V = M.evalScripts, J = M.onInjected, Ie = M.path, ue = M.svgClassName, Oe = M.svgStyle, Pe = document.createElement("div");
          Pe.innerHTML = D.default.renderToStaticMarkup(H.default.createElement(
            "div",
            null,
            H.default.createElement("div", { className: ue, "data-src": Ie, style: Oe })
          ));
          var Ye = this.container.appendChild(Pe.firstChild);
          Q(Ye.firstChild, {
            each: J,
            evalScripts: V
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
      value: function(M) {
        this.removeSVG(), this.renderSVG(M);
      }
    }, {
      key: "shouldComponentUpdate",
      value: function() {
        return !1;
      }
    }, {
      key: "render",
      value: function() {
        var M = this.props;
        M.evalScripts, M.onInjected, M.path, M.svgClassName, M.svgStyle;
        var V = P(M, ["evalScripts", "onInjected", "path", "svgClassName", "svgStyle"]);
        return H.default.createElement("div", S({}, V, { ref: this.refCallback }));
      }
    }]), _;
  }(H.default.Component);
  z.defaultProps = {
    evalScripts: "never",
    onInjected: function() {
    },
    svgClassName: null,
    svgStyle: {}
  }, z.propTypes = {
    evalScripts: A.default.oneOf(["always", "once", "never"]),
    onInjected: A.default.func,
    path: A.default.string.isRequired,
    svgClassName: A.default.string,
    svgStyle: A.default.object
  }, h.default = z, s.exports = h.default;
})(mu, mu.exports);
var Ed = mu.exports;
const kd = /* @__PURE__ */ zc(Ed), Cd = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDRIMTBWMTFIM1YxM0gxMFYyMEgxMlYxM0gxOVYxMUgxMlY0WiIgZmlsbD0iIzIwMThCMCIvPgo8L3N2Zz4K", Id = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjU2MzMgNEg3LjQzNjc0TDUuNzcwMDcgNi43NUgyVjE3SDZWMTVINFY4Ljc1SDYuODk2NTlMOC41NjMyNiA2SDEyLjQzNjdMMTQuMTAzNCA4Ljc1SDE3VjExSDE5VjYuNzVIMTUuMjI5OUwxMy41NjMzIDRaIiBmaWxsPSIjMjAxOEIwIi8+CjxwYXRoIGQ9Ik0xNyAxOVYxN0gxNVYxNUgxN1YxM0gxOVYxNUgyMVYxN0gxOVYxOUgxN1oiIGZpbGw9IiMyMDE4QjAiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSAxMi41QzE1IDE0Ljk4NTMgMTIuOTg1MyAxNyAxMC41IDE3QzguMDE0NzIgMTcgNiAxNC45ODUzIDYgMTIuNUM2IDEwLjAxNDcgOC4wMTQ3MiA4IDEwLjUgOEMxMi45ODUzIDggMTUgMTAuMDE0NyAxNSAxMi41Wk0xMyAxMi41QzEzIDEzLjg4MDcgMTEuODgwNyAxNSAxMC41IDE1QzkuMTE5MjkgMTUgOCAxMy44ODA3IDggMTIuNUM4IDExLjExOTMgOS4xMTkyOSAxMCAxMC41IDEwQzExLjg4MDcgMTAgMTMgMTEuMTE5MyAxMyAxMi41WiIgZmlsbD0iIzIwMThCMCIvPgo8L3N2Zz4K", Md = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjUgMTRWNEgxMC41VjE0SDguMjczMjRDNy40MDMxNCAxNCA2Ljk0ODE0IDE1LjAzNDMgNy41MzYwOSAxNS42NzU3TDEwLjc2MjkgMTkuMTk1OEMxMS4xNTkyIDE5LjYyODIgMTEuODQwOCAxOS42MjgyIDEyLjIzNzIgMTkuMTk1OEwxNS40NjM5IDE1LjY3NTdDMTYuMDUxOSAxNS4wMzQzIDE1LjU5NjkgMTQgMTQuNzI2OCAxNEgxMi41WiIgZmlsbD0iIzIwMThCMCIvPgo8L3N2Zz4K", Dd = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuODI0MjcgOC4wMzYwOEw0LjMwNDE2IDExLjI2MjhDMy44NzE4IDExLjY1OTIgMy44NzE4IDEyLjM0MDggNC4zMDQxNiAxMi43MzcyTDcuODI0MjcgMTUuOTYzOUM4LjQ2NTY3IDE2LjU1MTkgOS41IDE2LjA5NjkgOS41IDE1LjIyNjhMOS41IDEzTDE5LjUgMTNWMTFMOS41IDExVjguNzczMjRDOS41IDcuOTAzMTMgOC40NjU2NyA3LjQ0ODEzIDcuODI0MjcgOC4wMzYwOFoiIGZpbGw9IiMyMDE4QjAiLz4KPC9zdmc+Cg==", Rd = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjE3NTcgMTUuOTYzOUwxOC42OTU4IDEyLjczNzJDMTkuMTI4MiAxMi4zNDA4IDE5LjEyODIgMTEuNjU5MiAxOC42OTU4IDExLjI2MjhMMTUuMTc1NyA4LjAzNjA4QzE0LjUzNDMgNy40NDgxMyAxMy41IDcuOTAzMTMgMTMuNSA4Ljc3MzIzTDEzLjUgMTFMMy41IDExVjEzTDEzLjUgMTNWMTUuMjI2OEMxMy41IDE2LjA5NjkgMTQuNTM0MyAxNi41NTE5IDE1LjE3NTcgMTUuOTYzOVoiIGZpbGw9IiMyMDE4QjAiLz4KPC9zdmc+Cg==", Ad = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjQ2MzkgOC4zMjQyOEwxMi4yMzcyIDQuODA0MTdDMTEuODQwOCA0LjM3MTggMTEuMTU5MiA0LjM3MTggMTAuNzYyOSA0LjgwNDE3TDcuNTM2MDkgOC4zMjQyN0M2Ljk0ODE0IDguOTY1NjggNy40MDMxNCAxMCA4LjI3MzI0IDEwTDEwLjUgMTBMMTAuNSAyMEgxMi41TDEyLjUgMTBMMTQuNzI2OCAxMEMxNS41OTY5IDEwIDE2LjA1MTkgOC45NjU2OCAxNS40NjM5IDguMzI0MjhaIiBmaWxsPSIjMjAxOEIwIi8+Cjwvc3ZnPgo=", Od = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjc3MDUgMTUuMjIxOEw1LjU3ODY5IDkuNjgzOTRDNC45Nzk5NSA5LjA0NTI4IDUuNDMyNzkgOCA2LjMwODIzIDhIMTYuNjkxOEMxNy41NjcyIDggMTguMDIwMSA5LjA0NTI4IDE3LjQyMTMgOS42ODM5NEwxMi4yMjk1IDE1LjIyMThDMTEuODM0NSAxNS42NDMyIDExLjE2NTUgMTUuNjQzMiAxMC43NzA1IDE1LjIyMThaIiBmaWxsPSIjMjAxOEIwIi8+Cjwvc3ZnPgo=", Pd = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMCAzQzEwIDIuNDQ3NzIgOS41NTIyOCAyIDkgMkM4LjQ0NzcyIDIgOCAyLjQ0NzcyIDggM1Y0SDdDNC43OTA4NiA0IDMgNS43OTA4NiAzIDhWMTZDMyAxOC4yMDkxIDQuNzkwODYgMjAgNyAyMEgxNkMxOC4yMDkxIDIwIDIwIDE4LjIwOTEgMjAgMTZWOEMyMCA1Ljc5MDg2IDE4LjIwOTEgNCAxNiA0SDE1VjNDMTUgMi40NDc3MiAxNC41NTIzIDIgMTQgMkMxMy40NDc3IDIgMTMgMi40NDc3MiAxMyAzVjRIMTBWM1pNNSAxNlYxNUg4VjE4SDdDNS44OTU0MyAxOCA1IDE3LjEwNDYgNSAxNlpNMTAgMThIMTNWMTVIMTBWMThaTTE2IDE4SDE1VjE1SDE4VjE2QzE4IDE3LjEwNDYgMTcuMTA0NiAxOCAxNiAxOFpNMTggMTNIMTVWOUgxOFYxM1pNMTAgOUgxM1YxM0gxMFY5Wk04IDlINVYxM0g4VjlaIiBmaWxsPSIjMjAxOEIwIi8+Cjwvc3ZnPgo=", jd = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDJDOS41NTIyOCAyIDEwIDIuNDQ3NzIgMTAgM1Y0SDEzVjNDMTMgMi40NDc3MiAxMy40NDc3IDIgMTQgMkMxNC41NTIzIDIgMTUgMi40NDc3MiAxNSAzVjRIMTZDMTguMjA5MSA0IDIwIDUuNzkwODYgMjAgOFYxNkMyMCAxOC4yMDkxIDE4LjIwOTEgMjAgMTYgMjBIN0M0Ljc5MDg2IDIwIDMgMTguMjA5MSAzIDE2VjhDMyA1Ljc5MDg2IDQuNzkwODYgNCA3IDRIOFYzQzggMi40NDc3MiA4LjQ0NzcyIDIgOSAyWk03IDZDNS44OTU0MyA2IDUgNi44OTU0MyA1IDhIMThDMTggNi44OTU0MyAxNy4xMDQ2IDYgMTYgNkg3Wk01IDEwVjEzSDhWMTBINVpNMTAgMTBWMTNIMTNWMTBIMTBaTTEwIDE1SDEzVjE4SDEwVjE1Wk0xNSAxNVYxOEgxNkMxNy4xMDQ2IDE4IDE4IDE3LjEwNDYgMTggMTZWMTVIMTVaTTE1IDEwVjEzSDE4VjEwSDE1Wk04IDE1SDVWMTZDNSAxNy4xMDQ2IDUuODk1NDMgMTggNyAxOEg4VjE1WiIgZmlsbD0iIzIwMThCMCIvPgo8L3N2Zz4K", Nd = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDQgMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yIDRDMy4xMDQ1NyA0IDQgMy4xMDQ1NyA0IDJDNCAwLjg5NTQzMSAzLjEwNDU3IDAgMiAwQzAuODk1NDMxIDAgMCAwLjg5NTQzMSAwIDJDMCAzLjEwNDU3IDAuODk1NDMxIDQgMiA0WiIgZmlsbD0iI0VERjFGQSIvPgo8cGF0aCBkPSJNNCAxN1Y2SDBWMTdINFoiIGZpbGw9IiNFREYxRkEiLz4KPC9zdmc+Cg==", _d = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMCAxMEMyMCAxMy4zMTM3IDE3LjMxMzcgMTYgMTQgMTZDMTIuNzA0MiAxNiAxMS41MDQzIDE1LjU4OTIgMTAuNTIzNSAxNC44OTA4TDUuNzA3MTIgMTkuNzA3MUw0LjI5MjkxIDE4LjI5MjlMOS4xMDkyNiAxMy40NzY1QzguNDEwNzkgMTIuNDk1NyA4IDExLjI5NTggOCAxMEM4IDYuNjg2MjkgMTAuNjg2MyA0IDE0IDRDMTcuMzEzNyA0IDIwIDYuNjg2MjkgMjAgMTBaTTE4IDEwQzE4IDEyLjIwOTEgMTYuMjA5MSAxNCAxNCAxNEMxMS43OTA5IDE0IDEwIDEyLjIwOTEgMTAgMTBDMTAgNy43OTA4NiAxMS43OTA5IDYgMTQgNkMxNi4yMDkxIDYgMTggNy43OTA4NiAxOCAxMFoiIGZpbGw9IiMyMDE4QjAiLz4KPC9zdmc+Cg==", Rc = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiA+CjxwYXRoIGQ9Ik0yMjAtMTYwcS0yNCAwLTQyLTE4dC0xOC00MnYtMTQzaDYwdjE0M2g1MjB2LTE0M2g2MHYxNDNxMCAyNC0xOCA0MnQtNDIgMThIMjIwWm0yMzAtMTUzdi0zNzFMMzMwLTU2NGwtNDMtNDMgMTkzLTE5MyAxOTMgMTkzLTQzIDQzLTEyMC0xMjB2MzcxaC02MFoiIGZpbGw9IiMyMDE4QjAiLz4KPC9zdmc+", Ld = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDEyQzE0LjIwOTEgMTIgMTYgMTAuMjA5MSAxNiA4QzE2IDUuNzkwODYgMTQuMjA5MSA0IDEyIDRDOS43OTA4NiA0IDggNS43OTA4NiA4IDhDOCAxMC4yMDkxIDkuNzkwODYgMTIgMTIgMTJaIiBmaWxsPSIjMzI1NjhGIi8+CjxwYXRoIGQ9Ik00IDIwQzQgMTYuNjg2MyA3LjU4MTcyIDE0IDEyIDE0QzE2LjQxODMgMTQgMjAgMTYuNjg2MyAyMCAyMEg0WiIgZmlsbD0iIzMyNTY4RiIvPgo8L3N2Zz4K", Fd = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjMzNjkyIDE1Ljc2MkM1Ljk2ODQyIDE2LjAzOSA1LjYzNTgyIDE2LjM0MjkgNS4zNDQ3OSAxNi42NjkzQzQuOTc4NzQgMTcuMDc5OSA0LjY3ODQ1IDE3LjUyNjMgNC40NTUyMiAxOEM0LjE2MDQxIDE4LjYyNTYgNCAxOS4yOTg3IDQgMjBIMjBDMjAgMTkuMjk4NyAxOS44Mzk2IDE4LjYyNTYgMTkuNTQ0OCAxOEMxOS4zMjE2IDE3LjUyNjMgMTkuMDIxMyAxNy4wNzk5IDE4LjY1NTIgMTYuNjY5M0MxOC4zNjI1IDE2LjM0MSAxOC4wMjc4IDE2LjAzNTYgMTcuNjU2OSAxNS43NTc0QzE2LjIwOTUgMTQuNjcxOCAxNC4yMDk2IDE0IDEyIDE0QzkuNzkwNDEgMTQgNy43OTA1MyAxNC42NzE4IDYuMzQzMTQgMTUuNzU3NEM2LjM0MTA3IDE1Ljc1ODkgNi4zMzg5OSAxNS43NjA1IDYuMzM2OTIgMTUuNzYyWk0xMiAxNkMxMC41NTE3IDE2IDkuMjYxNDcgMTYuMzUyMyA4LjI1NTkgMTYuOTAxQzcuOTk5MDQgMTcuMDQxMiA3Ljc2MDc1IDE3LjE5NDIgNy41NDMxNSAxNy4zNTc0QzcuMjY5MjggMTcuNTYyOCA3LjAzNDQ0IDE3Ljc3ODIgNi44MzY2MiAxOEgxNy4xNjM0QzE2Ljk2NTYgMTcuNzc4MiAxNi43MzA3IDE3LjU2MjggMTYuNDU2OSAxNy4zNTc0QzE2LjIzOTIgMTcuMTk0MiAxNi4wMDA5IDE3LjA0MTIgMTUuNzQ0MSAxNi45MDFDMTQuNzM4NSAxNi4zNTIzIDEzLjQ0ODMgMTYgMTIgMTZaTTE2IDhDMTYgMTAuMjA5MSAxNC4yMDkxIDEyIDEyIDEyQzkuNzkwODYgMTIgOCAxMC4yMDkxIDggOEM4IDUuNzkwODYgOS43OTA4NiA0IDEyIDRDMTQuMjA5MSA0IDE2IDUuNzkwODYgMTYgOFpNMTIgMTBDMTMuMTA0NiAxMCAxNCA5LjEwNDU3IDE0IDhDMTQgNi44OTU0MyAxMy4xMDQ2IDYgMTIgNkMxMC44OTU0IDYgMTAgNi44OTU0MyAxMCA4QzEwIDkuMTA0NTcgMTAuODk1NCAxMCAxMiAxMFoiIGZpbGw9IiMyMDE4QjAiLz4KPC9zdmc+Cg==", zd = Fe.div`
  width: 100%;
  height: 100%;

  &.icon-small {
    width: 8px;
    height: 8px;
  }

  &.icon-medium {
    width: 16px;
    height: 16px;
  }

  &.icon-large {
    width: 32px;
    height: 32px;
  }
`, Ud = {
  Add: Cd,
  AddPicture: Id,
  ArrowBottom: Md,
  ArrowLeft: Dd,
  ArrowRight: Rd,
  ArrowTop: Ad,
  ArrowTriangle: Od,
  DateFlat: Pd,
  DateLine: jd,
  Information: Nd,
  Search: _d,
  Upload: Rc,
  UserFlat: Ld,
  UserLine: Fd
}, We = ({ size: s = "medium", icon: h }) => {
  const S = `icon-${s} icon`, E = Ud[h];
  return /* @__PURE__ */ q.createElement(zd, { className: S }, /* @__PURE__ */ q.createElement(kd, { src: E }));
};
We.Add = (s) => /* @__PURE__ */ q.createElement(We, { icon: "Add", ...s });
We.AddPicture = (s) => /* @__PURE__ */ q.createElement(We, { icon: "AddPicture", ...s });
We.ArrowBottom = (s) => /* @__PURE__ */ q.createElement(We, { icon: "ArrowBottom", ...s });
We.ArrowLeft = (s) => /* @__PURE__ */ q.createElement(We, { icon: "ArrowLeft", ...s });
We.ArrowRight = (s) => /* @__PURE__ */ q.createElement(We, { icon: "ArrowRight", ...s });
We.ArrowTop = (s) => /* @__PURE__ */ q.createElement(We, { icon: "ArrowTop", ...s });
We.ArrowTriangle = (s) => /* @__PURE__ */ q.createElement(We, { icon: "ArrowTriangle", ...s });
We.DateFlat = (s) => /* @__PURE__ */ q.createElement(We, { icon: "DateFlat", ...s });
We.DateLine = (s) => /* @__PURE__ */ q.createElement(We, { icon: "DateLine", ...s });
We.Information = (s) => /* @__PURE__ */ q.createElement(We, { icon: "Information", ...s });
We.Search = (s) => /* @__PURE__ */ q.createElement(We, { icon: "Search", ...s });
We.Upload = (s) => /* @__PURE__ */ q.createElement(We, { icon: "Upload", ...s });
We.UserFlat = (s) => /* @__PURE__ */ q.createElement(We, { icon: "UserFlat", ...s });
We.UserLine = (s) => /* @__PURE__ */ q.createElement(We, { icon: "UserLine", ...s });
const Bd = ({ placeholder: s }) => /* @__PURE__ */ q.createElement("div", { className: "input" }, /* @__PURE__ */ q.createElement("input", { type: "search", className: "placeholder", placeholder: s }), /* @__PURE__ */ q.createElement(We.Search, null)), Hd = Fe.div`
  display: flex;
`, np = () => /* @__PURE__ */ q.createElement(Hd, null, /* @__PURE__ */ q.createElement(ud, { src: "" }), /* @__PURE__ */ q.createElement(Bd, { placeholder: "" }), /* @__PURE__ */ q.createElement(ku.Small, null)), Wd = Fe.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 32px;
  position: relative;
  width: calc(100% - 64px);
  width: 20rem;
  background: #ffffff;
`, Yd = Fe.h2`
  margin: 0;
  font-family: "Co Headline";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 24px;
  color: #1d2525;
`, Vd = Fe.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  gap: 8px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background: #32568f;
  box-shadow: 0px 4px 8px -4px rgba(90, 125, 129, 0.05);
  border-radius: 2px;
`, $d = Fe.div`
  word-wrap: break-word;
`, op = ({ label: s = "Information" }) => /* @__PURE__ */ q.createElement(Wd, null, /* @__PURE__ */ q.createElement(Yd, null, "Information"), /* @__PURE__ */ q.createElement(Vd, null, /* @__PURE__ */ q.createElement(We.Information, { className: "information-svg" }), /* @__PURE__ */ q.createElement($d, null, s))), Gd = Fe.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;
`, Zd = Fe.h2`
  margin: 0;
  font-family: 'Co Headline';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  color: #000000;
`, Qd = Fe.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 32px;
  gap: 16px;
  border: 2px dashed #32568f;
`, Xd = Fe.p`
  margin: 0;
  font-family: 'Co Headline';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 24px;
  color: #32568f;
`, ip = ({ title: s, label: h }) => /* @__PURE__ */ q.createElement(Gd, null, /* @__PURE__ */ q.createElement(Zd, null, s), /* @__PURE__ */ q.createElement(Qd, null, /* @__PURE__ */ q.createElement("div", { className: "section-svg" }, /* @__PURE__ */ q.createElement("img", { src: Rc, alt: "section" })), /* @__PURE__ */ q.createElement(Xd, null, h))), Jd = Fe.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  overflow-y: scroll;
  width: 19.5rem;
  height: 18rem;
`, Kd = Fe.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`, qd = Fe.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 0px;
  isolation: isolate;
  font-family: 'sans-serif';
  text-align: start;
`, ap = ({ title: s, description: h }) => /* @__PURE__ */ q.createElement(Jd, null, /* @__PURE__ */ q.createElement(Kd, null, s), /* @__PURE__ */ q.createElement(qd, null, h)), ep = Fe.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 4px;
  padding: 12px;
  background: #F7F7F8;
  border: 2px solid #0F082B;
  border-radius: 4px;
`, tp = Fe.p`
  font-family: 'Co Headline';
  font-style: normal;
  font-size: 16px;
  color: #0F082B;
  margin: 0;
  line-height: 24px;
`, sp = ({ placeholder: s }) => /* @__PURE__ */ q.createElement(ep, null, /* @__PURE__ */ q.createElement(tp, null, s));
export {
  ku as Avatar,
  Ho as Button,
  Ic as Card,
  np as Header,
  We as Icon,
  op as Information,
  sp as InputText,
  ud as Logo,
  Xa as Ratio,
  ip as Section,
  ap as Text
};
//# sourceMappingURL=popoyoko-ui-vite.es.js.map
