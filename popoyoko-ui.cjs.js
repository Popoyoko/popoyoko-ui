"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("react");var C=function(){return C=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},C.apply(this,arguments)};function K(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,a;r<o;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}function an(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var sn=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,cn=an(function(e){return sn.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),N="-ms-",de="-moz-",M="-webkit-",Tt="comm",be="rule",$e="decl",ln="@import",Et="@keyframes",un="@layer",At=Math.abs,Xe=String.fromCharCode,Ge=Object.assign;function dn(e,t){return S(e,0)^45?(((t<<2^S(e,0))<<2^S(e,1))<<2^S(e,2))<<2^S(e,3):0}function bt(e){return e.trim()}function Z(e,t){return(e=t.exec(e))?e[0]:e}function d(e,t,n){return e.replace(t,n)}function Ie(e,t,n){return e.indexOf(t,n)}function S(e,t){return e.charCodeAt(t)|0}function q(e,t,n){return e.slice(t,n)}function P(e){return e.length}function wt(e){return e.length}function ue(e,t){return t.push(e),e}function gn(e,t){return e.map(t).join("")}function ot(e,t){return e.filter(function(n){return!Z(n,t)})}var we=1,ee=1,vt=0,O=0,j=0,oe="";function ve(e,t,n,r,o,a,s,u){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:we,column:ee,length:s,return:"",siblings:u}}function Y(e,t){return Ge(ve("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function J(e){for(;e.root;)e=Y(e.root,{children:[e]});ue(e,e.siblings)}function pn(){return j}function fn(){return j=O>0?S(oe,--O):0,ee--,j===10&&(ee=1,we--),j}function L(){return j=O<vt?S(oe,O++):0,ee++,j===10&&(ee=1,we++),j}function F(){return S(oe,O)}function xe(){return O}function je(e,t){return q(oe,e,t)}function Ue(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function mn(e){return we=ee=1,vt=P(oe=e),O=0,[]}function hn(e){return oe="",e}function Qe(e){return bt(je(O-1,Be(e===91?e+2:e===40?e+1:e)))}function Mn(e){for(;(j=F())&&j<33;)L();return Ue(e)>2||Ue(j)>3?"":" "}function yn(e,t){for(;--t&&L()&&!(j<48||j>102||j>57&&j<65||j>70&&j<97););return je(e,xe()+(t<6&&F()==32&&L()==32))}function Be(e){for(;L();)switch(j){case e:return O;case 34:case 39:e!==34&&e!==39&&Be(j);break;case 40:e===41&&Be(e);break;case 92:L();break}return O}function In(e,t){for(;L()&&e+j!==47+10;)if(e+j===42+42&&F()===47)break;return"/*"+je(t,O-1)+"*"+Xe(e===47?e:L())}function xn(e){for(;!Ue(F());)L();return je(e,O)}function Dn(e){return hn(De("",null,null,null,[""],e=mn(e),0,[0],e))}function De(e,t,n,r,o,a,s,u,c){for(var p=0,y=0,h=s,I=0,x=0,E=0,w=1,z=1,v=1,A=0,D="",T=o,b=a,f=r,g=D;z;)switch(E=A,A=L()){case 40:if(E!=108&&S(g,h-1)==58){Ie(g+=d(Qe(A),"&","&\f"),"&\f",At(p?u[p-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:g+=Qe(A);break;case 9:case 10:case 13:case 32:g+=Mn(E);break;case 92:g+=yn(xe()-1,7);continue;case 47:switch(F()){case 42:case 47:ue(Nn(In(L(),xe()),t,n,c),c);break;default:g+="/"}break;case 123*w:u[p++]=P(g)*v;case 125*w:case 59:case 0:switch(A){case 0:case 125:z=0;case 59+y:v==-1&&(g=d(g,/\f/g,"")),x>0&&P(g)-h&&ue(x>32?at(g+";",r,n,h-1,c):at(d(g," ","")+";",r,n,h-2,c),c);break;case 59:g+=";";default:if(ue(f=it(g,t,n,p,y,o,u,D,T=[],b=[],h,a),a),A===123)if(y===0)De(g,t,f,f,T,a,h,u,b);else switch(I===99&&S(g,3)===110?100:I){case 100:case 108:case 109:case 115:De(e,f,f,r&&ue(it(e,f,f,0,0,o,u,D,o,T=[],h,b),b),o,b,h,u,r?T:b);break;default:De(g,f,f,f,[""],b,0,u,b)}}p=y=x=0,w=v=1,D=g="",h=s;break;case 58:h=1+P(g),x=E;default:if(w<1){if(A==123)--w;else if(A==125&&w++==0&&fn()==125)continue}switch(g+=Xe(A),A*w){case 38:v=y>0?1:(g+="\f",-1);break;case 44:u[p++]=(P(g)-1)*v,v=1;break;case 64:F()===45&&(g+=Qe(L())),I=F(),y=h=P(D=g+=xn(xe())),A++;break;case 45:E===45&&P(g)==2&&(w=0)}}return a}function it(e,t,n,r,o,a,s,u,c,p,y,h){for(var I=o-1,x=o===0?a:[""],E=wt(x),w=0,z=0,v=0;w<r;++w)for(var A=0,D=q(e,I+1,I=At(z=s[w])),T=e;A<E;++A)(T=bt(z>0?x[A]+" "+D:d(D,/&\f/g,x[A])))&&(c[v++]=T);return ve(e,t,n,o===0?be:u,c,p,y,h)}function Nn(e,t,n,r){return ve(e,t,n,Tt,Xe(pn()),q(e,2,-2),0,r)}function at(e,t,n,r,o){return ve(e,t,n,$e,q(e,0,r),q(e,r+1,-1),r,o)}function jt(e,t,n){switch(dn(e,t)){case 5103:return M+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+e+e;case 4789:return de+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+de+e+N+e+e;case 5936:switch(S(e,t+11)){case 114:return M+e+N+d(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return M+e+N+d(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return M+e+N+d(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return M+e+N+e+e;case 6165:return M+e+N+"flex-"+e+e;case 5187:return M+e+d(e,/(\w+).+(:[^]+)/,M+"box-$1$2"+N+"flex-$1$2")+e;case 5443:return M+e+N+"flex-item-"+d(e,/flex-|-self/g,"")+(Z(e,/flex-|baseline/)?"":N+"grid-row-"+d(e,/flex-|-self/g,""))+e;case 4675:return M+e+N+"flex-line-pack"+d(e,/align-content|flex-|-self/g,"")+e;case 5548:return M+e+N+d(e,"shrink","negative")+e;case 5292:return M+e+N+d(e,"basis","preferred-size")+e;case 6060:return M+"box-"+d(e,"-grow","")+M+e+N+d(e,"grow","positive")+e;case 4554:return M+d(e,/([^-])(transform)/g,"$1"+M+"$2")+e;case 6187:return d(d(d(e,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),e,"")+e;case 5495:case 3959:return d(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return d(d(e,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+N+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+e+e;case 4200:if(!Z(e,/flex-|baseline/))return N+"grid-column-align"+q(e,t)+e;break;case 2592:case 3360:return N+d(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Z(r.props,/grid-\w+-end/)})?~Ie(e+(n=n[t].value),"span",0)?e:N+d(e,"-start","")+e+N+"grid-row-span:"+(~Ie(n,"span",0)?Z(n,/\d+/):+Z(n,/\d+/)-+Z(e,/\d+/))+";":N+d(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Z(r.props,/grid-\w+-start/)})?e:N+d(d(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return d(e,/(.+)-inline(.+)/,M+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(P(e)-1-t>6)switch(S(e,t+1)){case 109:if(S(e,t+4)!==45)break;case 102:return d(e,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+de+(S(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ie(e,"stretch",0)?jt(d(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return d(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,a,s,u,c,p){return N+o+":"+a+p+(s?N+o+"-span:"+(u?c:+c-+a)+p:"")+e});case 4949:if(S(e,t+6)===121)return d(e,":",":"+M)+e;break;case 6444:switch(S(e,S(e,14)===45?18:11)){case 120:return d(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+M+(S(e,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+N+"$2box$3")+e;case 100:return d(e,":",":"+N)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return d(e,"scroll-","scroll-snap-")+e}return e}function Ee(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Tn(e,t,n,r){switch(e.type){case un:if(e.children.length)break;case ln:case $e:return e.return=e.return||e.value;case Tt:return"";case Et:return e.return=e.value+"{"+Ee(e.children,r)+"}";case be:if(!P(e.value=e.props.join(",")))return""}return P(n=Ee(e.children,r))?e.return=e.value+"{"+n+"}":""}function En(e){var t=wt(e);return function(n,r,o,a){for(var s="",u=0;u<t;u++)s+=e[u](n,r,o,a)||"";return s}}function An(e){return function(t){t.root||(t=t.return)&&e(t)}}function bn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case $e:e.return=jt(e.value,e.length,n);return;case Et:return Ee([Y(e,{value:d(e.value,"@","@"+M)})],r);case be:if(e.length)return gn(n=e.props,function(o){switch(Z(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":J(Y(e,{props:[d(o,/:(read-\w+)/,":"+de+"$1")]})),J(Y(e,{props:[o]})),Ge(e,{props:ot(n,r)});break;case"::placeholder":J(Y(e,{props:[d(o,/:(plac\w+)/,":"+M+"input-$1")]})),J(Y(e,{props:[d(o,/:(plac\w+)/,":"+de+"$1")]})),J(Y(e,{props:[d(o,/:(plac\w+)/,N+"input-$1")]})),J(Y(e,{props:[o]})),Ge(e,{props:ot(n,r)});break}return""})}}var wn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",St="active",Ct="data-styled-version",Se="6.1.11",Je=`/*!sc*/
`,Ke=typeof window<"u"&&"HTMLElement"in window,vn=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production"),st=/invalid hook call/i,me=new Set,jn=function(e,t){if(process.env.NODE_ENV!=="production"){var n=t?' with the id of "'.concat(t,'"'):"",r="The component ".concat(e).concat(n,` has been created dynamically.
`)+`You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,o=console.error;try{var a=!0;console.error=function(s){for(var u=[],c=1;c<arguments.length;c++)u[c-1]=arguments[c];st.test(s)?(a=!1,me.delete(r)):o.apply(void 0,K([s],u,!1))},i.useRef(),a&&!me.has(r)&&(console.warn(r),me.add(r))}catch(s){st.test(s.message)&&me.delete(r)}finally{console.error=o}}},Ce=Object.freeze([]),te=Object.freeze({});function Sn(e,t,n){return n===void 0&&(n=te),e.theme!==n.theme&&e.theme||t||n.theme}var He=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Cn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zn=/(^-|-$)/g;function ct(e){return e.replace(Cn,"-").replace(zn,"")}var kn=/(a)(d)/gi,he=52,lt=function(e){return String.fromCharCode(e+(e>25?39:97))};function We(e){var t,n="";for(t=Math.abs(e);t>he;t=t/he|0)n=lt(t%he)+n;return(lt(t%he)+n).replace(kn,"$1-$2")}var Ze,zt=5381,H=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},kt=function(e){return H(zt,e)};function On(e){return We(kt(e)>>>0)}function Ot(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function Re(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var Lt=typeof Symbol=="function"&&Symbol.for,Pt=Lt?Symbol.for("react.memo"):60115,Ln=Lt?Symbol.for("react.forward_ref"):60112,Pn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Qn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Qt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zn=((Ze={})[Ln]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ze[Pt]=Qt,Ze);function ut(e){return("type"in(t=e)&&t.type.$$typeof)===Pt?Qt:"$$typeof"in e?Zn[e.$$typeof]:Pn;var t}var Rn=Object.defineProperty,Yn=Object.getOwnPropertyNames,dt=Object.getOwnPropertySymbols,Gn=Object.getOwnPropertyDescriptor,Un=Object.getPrototypeOf,gt=Object.prototype;function Zt(e,t,n){if(typeof t!="string"){if(gt){var r=Un(t);r&&r!==gt&&Zt(e,r,n)}var o=Yn(t);dt&&(o=o.concat(dt(t)));for(var a=ut(e),s=ut(t),u=0;u<o.length;++u){var c=o[u];if(!(c in Qn||n&&n[c]||s&&c in s||a&&c in a)){var p=Gn(t,c);try{Rn(e,c,p)}catch{}}}}return e}function ne(e){return typeof e=="function"}function qe(e){return typeof e=="object"&&"styledComponentId"in e}function W(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function pt(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function re(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Fe(e,t,n){if(n===void 0&&(n=!1),!n&&!re(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Fe(e[r],t[r]);else if(re(t))for(var r in t)e[r]=Fe(e[r],t[r]);return e}function et(e,t){Object.defineProperty(e,"toString",{value:t})}var Bn=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

`,2:`Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`,3:`Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`,4:`The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`,5:`The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`,6:`Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`,7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:`ThemeProvider: Please make your "theme" prop an object.

`,9:"Missing document `<head>`\n\n",10:`Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`,11:`_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`,12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:`%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`,14:`ThemeProvider: "theme" prop is required.

`,15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:`Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`,17:`CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`,18:"ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"}:{};function Hn(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=e[0],r=[],o=1,a=e.length;o<a;o+=1)r.push(e[o]);return r.forEach(function(s){n=n.replace(/%[a-z]/,s)}),n}function ie(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return process.env.NODE_ENV==="production"?new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):"")):new Error(Hn.apply(void 0,K([Bn[e]],t,!1)).trim())}var Wn=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,a=o;t>=a;)if((a<<=1)<0)throw ie(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var s=o;s<a;s++)this.groupSizes[s]=0}for(var u=this.indexOfGroup(t+1),c=(s=0,n.length);s<c;s++)this.tag.insertRule(u,n[s])&&(this.groupSizes[t]++,u++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var a=r;a<o;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),a=o+r,s=o;s<a;s++)n+="".concat(this.tag.getRule(s)).concat(Je);return n},e}(),Fn=1<<30,Ne=new Map,Ae=new Map,Te=1,Me=function(e){if(Ne.has(e))return Ne.get(e);for(;Ae.has(Te);)Te++;var t=Te++;if(process.env.NODE_ENV!=="production"&&((0|t)<0||t>Fn))throw ie(16,"".concat(t));return Ne.set(e,t),Ae.set(t,e),t},Vn=function(e,t){Te=t+1,Ne.set(e,t),Ae.set(t,e)},_n="style[".concat(_,"][").concat(Ct,'="').concat(Se,'"]'),$n=new RegExp("^".concat(_,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Xn=function(e,t,n){for(var r,o=n.split(","),a=0,s=o.length;a<s;a++)(r=o[a])&&e.registerName(t,r)},Jn=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Je),o=[],a=0,s=r.length;a<s;a++){var u=r[a].trim();if(u){var c=u.match($n);if(c){var p=0|parseInt(c[1],10),y=c[2];p!==0&&(Vn(y,p),Xn(e,y,c[3]),e.getTag().insertRules(p,o)),o.length=0}else o.push(u)}}};function Kn(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Rt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(u){var c=Array.from(u.querySelectorAll("style[".concat(_,"]")));return c[c.length-1]}(n),a=o!==void 0?o.nextSibling:null;r.setAttribute(_,St),r.setAttribute(Ct,Se);var s=Kn();return s&&r.setAttribute("nonce",s),n.insertBefore(r,a),r},qn=function(){function e(t){this.element=Rt(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,a=r.length;o<a;o++){var s=r[o];if(s.ownerNode===n)return s}throw ie(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),er=function(){function e(t){this.element=Rt(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),tr=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ft=Ke,nr={isServer:!Ke,useCSSOMInjection:!vn},Yt=function(){function e(t,n,r){t===void 0&&(t=te),n===void 0&&(n={});var o=this;this.options=C(C({},nr),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ke&&ft&&(ft=!1,function(a){for(var s=document.querySelectorAll(_n),u=0,c=s.length;u<c;u++){var p=s[u];p&&p.getAttribute(_)!==St&&(Jn(a,p),p.parentNode&&p.parentNode.removeChild(p))}}(this)),et(this,function(){return function(a){for(var s=a.getTag(),u=s.length,c="",p=function(h){var I=function(v){return Ae.get(v)}(h);if(I===void 0)return"continue";var x=a.names.get(I),E=s.getGroup(h);if(x===void 0||E.length===0)return"continue";var w="".concat(_,".g").concat(h,'[id="').concat(I,'"]'),z="";x!==void 0&&x.forEach(function(v){v.length>0&&(z+="".concat(v,","))}),c+="".concat(E).concat(w,'{content:"').concat(z,'"}').concat(Je)},y=0;y<u;y++)p(y);return c}(o)})}return e.registerId=function(t){return Me(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(C(C({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new tr(o):r?new qn(o):new er(o)}(this.options),new Wn(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Me(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Me(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Me(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),rr=/&/g,or=/^\s*\/\/.*$/gm;function Gt(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Gt(n.children,t)),n})}function ir(e){var t,n,r,o=e===void 0?te:e,a=o.options,s=a===void 0?te:a,u=o.plugins,c=u===void 0?Ce:u,p=function(I,x,E){return E.startsWith(n)&&E.endsWith(n)&&E.replaceAll(n,"").length>0?".".concat(t):I},y=c.slice();y.push(function(I){I.type===be&&I.value.includes("&")&&(I.props[0]=I.props[0].replace(rr,n).replace(r,p))}),s.prefix&&y.push(bn),y.push(Tn);var h=function(I,x,E,w){x===void 0&&(x=""),E===void 0&&(E=""),w===void 0&&(w="&"),t=w,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var z=I.replace(or,""),v=Dn(E||x?"".concat(E," ").concat(x," { ").concat(z," }"):z);s.namespace&&(v=Gt(v,s.namespace));var A=[];return Ee(v,En(y.concat(An(function(D){return A.push(D)})))),A};return h.hash=c.length?c.reduce(function(I,x){return x.name||ie(15),H(I,x.name)},zt).toString():"",h}var ar=new Yt,Ve=ir(),Ut=i.createContext({shouldForwardProp:void 0,styleSheet:ar,stylis:Ve});Ut.Consumer;i.createContext(void 0);function mt(){return i.useContext(Ut)}var ht=function(){function e(t,n){var r=this;this.inject=function(o,a){a===void 0&&(a=Ve);var s=r.name+a.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,a(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,et(this,function(){throw ie(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ve),this.name+t.hash},e}(),sr=function(e){return e>="A"&&e<="Z"};function Mt(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;sr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Bt=function(e){return e==null||e===!1||e===""},Ht=function(e){var t,n,r=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!Bt(a)&&(Array.isArray(a)&&a.isCss||ne(a)?r.push("".concat(Mt(o),":"),a,";"):re(a)?r.push.apply(r,K(K(["".concat(o," {")],Ht(a),!1),["}"],!1)):r.push("".concat(Mt(o),": ").concat((t=o,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in wn||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function V(e,t,n,r){if(Bt(e))return[];if(qe(e))return[".".concat(e.styledComponentId)];if(ne(e)){if(!ne(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var o=e(t);return process.env.NODE_ENV==="production"||typeof o!="object"||Array.isArray(o)||o instanceof ht||re(o)||o===null||console.error("".concat(Ot(e)," is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")),V(o,t,n,r)}var a;return e instanceof ht?n?(e.inject(n,r),[e.getName(r)]):[e]:re(e)?Ht(e):Array.isArray(e)?Array.prototype.concat.apply(Ce,e.map(function(s){return V(s,t,n,r)})):[e.toString()]}function cr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ne(n)&&!qe(n))return!1}return!0}var lr=kt(Se),ur=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(r===void 0||r.isStatic)&&cr(t),this.componentId=n,this.baseHash=H(lr,n),this.baseStyle=r,Yt.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=W(o,this.staticRulesId);else{var a=pt(V(this.rules,t,n,r)),s=We(H(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,s)){var u=r(a,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,u)}o=W(o,s),this.staticRulesId=s}else{for(var c=H(this.baseHash,r.hash),p="",y=0;y<this.rules.length;y++){var h=this.rules[y];if(typeof h=="string")p+=h,process.env.NODE_ENV!=="production"&&(c=H(c,h));else if(h){var I=pt(V(h,t,n,r));c=H(c,I+y),p+=I}}if(p){var x=We(c>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(p,".".concat(x),void 0,this.componentId)),o=W(o,x)}}return o},e}(),Wt=i.createContext(void 0);Wt.Consumer;var Ye={},yt=new Set;function dr(e,t,n){var r=qe(e),o=e,a=!Re(e),s=t.attrs,u=s===void 0?Ce:s,c=t.componentId,p=c===void 0?function(T,b){var f=typeof T!="string"?"sc":ct(T);Ye[f]=(Ye[f]||0)+1;var g="".concat(f,"-").concat(On(Se+f+Ye[f]));return b?"".concat(b,"-").concat(g):g}(t.displayName,t.parentComponentId):c,y=t.displayName,h=y===void 0?function(T){return Re(T)?"styled.".concat(T):"Styled(".concat(Ot(T),")")}(e):y,I=t.displayName&&t.componentId?"".concat(ct(t.displayName),"-").concat(t.componentId):t.componentId||p,x=r&&o.attrs?o.attrs.concat(u).filter(Boolean):u,E=t.shouldForwardProp;if(r&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var z=t.shouldForwardProp;E=function(T,b){return w(T,b)&&z(T,b)}}else E=w}var v=new ur(n,I,r?o.componentStyle:void 0);function A(T,b){return function(f,g,U){var $=f.attrs,qt=f.componentStyle,en=f.defaultProps,tn=f.foldedComponentIds,nt=f.styledComponentId,nn=f.target,rn=i.useContext(Wt),on=mt(),ke=f.shouldForwardProp||on.shouldForwardProp;process.env.NODE_ENV!=="production"&&i.useDebugValue(nt);var rt=Sn(g,rn,en)||te,Q=function(ge,le,pe){for(var X,B=C(C({},le),{className:void 0,theme:pe}),Pe=0;Pe<ge.length;Pe+=1){var fe=ne(X=ge[Pe])?X(B):X;for(var R in fe)B[R]=R==="className"?W(B[R],fe[R]):R==="style"?C(C({},B[R]),fe[R]):fe[R]}return le.className&&(B.className=W(B.className,le.className)),B}($,g,rt),se=Q.as||nn,ce={};for(var k in Q)Q[k]===void 0||k[0]==="$"||k==="as"||k==="theme"&&Q.theme===rt||(k==="forwardedAs"?ce.as=Q.forwardedAs:ke&&!ke(k,se)||(ce[k]=Q[k],ke||process.env.NODE_ENV!=="development"||cn(k)||yt.has(k)||!He.has(se)||(yt.add(k),console.warn('styled-components: it looks like an unknown prop "'.concat(k,'" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));var Oe=function(ge,le){var pe=mt(),X=ge.generateAndInjectStyles(le,pe.styleSheet,pe.stylis);return process.env.NODE_ENV!=="production"&&i.useDebugValue(X),X}(qt,Q);process.env.NODE_ENV!=="production"&&f.warnTooManyClasses&&f.warnTooManyClasses(Oe);var Le=W(tn,nt);return Oe&&(Le+=" "+Oe),Q.className&&(Le+=" "+Q.className),ce[Re(se)&&!He.has(se)?"class":"className"]=Le,ce.ref=U,i.createElement(se,ce)}(D,T,b)}A.displayName=h;var D=i.forwardRef(A);return D.attrs=x,D.componentStyle=v,D.displayName=h,D.shouldForwardProp=E,D.foldedComponentIds=r?W(o.foldedComponentIds,o.styledComponentId):"",D.styledComponentId=I,D.target=r?o.target:e,Object.defineProperty(D,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(T){this._foldedDefaultProps=r?function(b){for(var f=[],g=1;g<arguments.length;g++)f[g-1]=arguments[g];for(var U=0,$=f;U<$.length;U++)Fe(b,$[U],!0);return b}({},o.defaultProps,T):T}}),process.env.NODE_ENV!=="production"&&(jn(h,I),D.warnTooManyClasses=function(T,b){var f={},g=!1;return function(U){if(!g&&(f[U]=!0,Object.keys(f).length>=200)){var $=b?' with the id of "'.concat(b,'"'):"";console.warn("Over ".concat(200," classes were generated for component ").concat(T).concat($,`.
`)+`Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),g=!0,f={}}}}(h,I)),et(D,function(){return".".concat(D.styledComponentId)}),a&&Zt(D,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),D}function It(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var xt=function(e){return Object.assign(e,{isCss:!0})};function gr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ne(e)||re(e))return xt(V(It(Ce,K([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?V(r):xt(V(It(r,t)))}function _e(e,t,n){if(n===void 0&&(n=te),!t)throw ie(1,t);var r=function(o){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return e(t,n,gr.apply(void 0,K([o],a,!1)))};return r.attrs=function(o){return _e(e,t,C(C({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return _e(e,t,C(C({},n),o))},r}var Ft=function(e){return _e(dr,e)},l=Ft;He.forEach(function(e){l[e]=Ft(e)});process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);var ye="__sc-".concat(_,"__");process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window[ye]||(window[ye]=0),window[ye]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window[ye]+=1);const pr=l.div`
  position: relative;
  width: 48px;
  height: 48px;
`,fr=l.img`
  height: 100%;
  border-radius: 50%;
`,mr=l.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 12px;
  height: 12px;
  background: #2018b0;
  border-radius: 50%;
`,hr=({showbadge:e=!0,background:t="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg",onClick:n})=>i.createElement(pr,{onClick:n},i.createElement(fr,{src:t}),e&&i.createElement(mr,null)),Mr=l.button`
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
`,G=({variant:e="primary",children:t,action:n=()=>console.log("Button as been clicked"),value:r=void 0,type:o=void 0,disabled:a=!1})=>i.createElement(Mr,{className:`${e} ${a?"disabled":""}`,onClick:a?void 0:n,type:o,value:r,disabled:a},t);G.Primary=e=>i.createElement(G,{variant:"primary",...e});G.Secondary=e=>i.createElement(G,{variant:"secondary",...e});G.Tertiary=e=>i.createElement(G,{variant:"tertiary",...e});const yr=l.div`
  position: relative;
  overflow: hidden;
`,Ir=l(yr)`
  aspect-ratio: 1 / 1;
`,Vt=({children:e})=>i.createElement(Ir,null,e);Vt.defaultProps={children:null};const xr=l.div`
  position: relative;
  overflow: hidden;
`,Dr=l(xr)`
  aspect-ratio: 3 / 2;
`,_t=({children:e})=>i.createElement(Dr,null,e);_t.defaultProps={children:null};const ae=({children:e})=>i.createElement("div",null,e);ae.L1H1=Vt;ae.L2H3=_t;const Nr="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDRIMTBWMTFIM1YxM0gxMFYyMEgxMlYxM0gxOVYxMUgxMlY0WiIgZmlsbD0iIzIwMThCMCIvPgo8L3N2Zz4K",Tr="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjU2MzMgNEg3LjQzNjc0TDUuNzcwMDcgNi43NUgyVjE3SDZWMTVINFY4Ljc1SDYuODk2NTlMOC41NjMyNiA2SDEyLjQzNjdMMTQuMTAzNCA4Ljc1SDE3VjExSDE5VjYuNzVIMTUuMjI5OUwxMy41NjMzIDRaIiBmaWxsPSIjMjAxOEIwIi8+CjxwYXRoIGQ9Ik0xNyAxOVYxN0gxNVYxNUgxN1YxM0gxOVYxNUgyMVYxN0gxOVYxOUgxN1oiIGZpbGw9IiMyMDE4QjAiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSAxMi41QzE1IDE0Ljk4NTMgMTIuOTg1MyAxNyAxMC41IDE3QzguMDE0NzIgMTcgNiAxNC45ODUzIDYgMTIuNUM2IDEwLjAxNDcgOC4wMTQ3MiA4IDEwLjUgOEMxMi45ODUzIDggMTUgMTAuMDE0NyAxNSAxMi41Wk0xMyAxMi41QzEzIDEzLjg4MDcgMTEuODgwNyAxNSAxMC41IDE1QzkuMTE5MjkgMTUgOCAxMy44ODA3IDggMTIuNUM4IDExLjExOTMgOS4xMTkyOSAxMCAxMC41IDEwQzExLjg4MDcgMTAgMTMgMTEuMTE5MyAxMyAxMi41WiIgZmlsbD0iIzIwMThCMCIvPgo8L3N2Zz4K",Er="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjUgMTRWNEgxMC41VjE0SDguMjczMjRDNy40MDMxNCAxNCA2Ljk0ODE0IDE1LjAzNDMgNy41MzYwOSAxNS42NzU3TDEwLjc2MjkgMTkuMTk1OEMxMS4xNTkyIDE5LjYyODIgMTEuODQwOCAxOS42MjgyIDEyLjIzNzIgMTkuMTk1OEwxNS40NjM5IDE1LjY3NTdDMTYuMDUxOSAxNS4wMzQzIDE1LjU5NjkgMTQgMTQuNzI2OCAxNEgxMi41WiIgZmlsbD0iIzIwMThCMCIvPgo8L3N2Zz4K",Ar="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuODI0MjcgOC4wMzYwOEw0LjMwNDE2IDExLjI2MjhDMy44NzE4IDExLjY1OTIgMy44NzE4IDEyLjM0MDggNC4zMDQxNiAxMi43MzcyTDcuODI0MjcgMTUuOTYzOUM4LjQ2NTY3IDE2LjU1MTkgOS41IDE2LjA5NjkgOS41IDE1LjIyNjhMOS41IDEzTDE5LjUgMTNWMTFMOS41IDExVjguNzczMjRDOS41IDcuOTAzMTMgOC40NjU2NyA3LjQ0ODEzIDcuODI0MjcgOC4wMzYwOFoiIGZpbGw9IiMyMDE4QjAiLz4KPC9zdmc+Cg==",br="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjE3NTcgMTUuOTYzOUwxOC42OTU4IDEyLjczNzJDMTkuMTI4MiAxMi4zNDA4IDE5LjEyODIgMTEuNjU5MiAxOC42OTU4IDExLjI2MjhMMTUuMTc1NyA4LjAzNjA4QzE0LjUzNDMgNy40NDgxMyAxMy41IDcuOTAzMTMgMTMuNSA4Ljc3MzIzTDEzLjUgMTFMMy41IDExVjEzTDEzLjUgMTNWMTUuMjI2OEMxMy41IDE2LjA5NjkgMTQuNTM0MyAxNi41NTE5IDE1LjE3NTcgMTUuOTYzOVoiIGZpbGw9IiMyMDE4QjAiLz4KPC9zdmc+Cg==",wr="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjQ2MzkgOC4zMjQyOEwxMi4yMzcyIDQuODA0MTdDMTEuODQwOCA0LjM3MTggMTEuMTU5MiA0LjM3MTggMTAuNzYyOSA0LjgwNDE3TDcuNTM2MDkgOC4zMjQyN0M2Ljk0ODE0IDguOTY1NjggNy40MDMxNCAxMCA4LjI3MzI0IDEwTDEwLjUgMTBMMTAuNSAyMEgxMi41TDEyLjUgMTBMMTQuNzI2OCAxMEMxNS41OTY5IDEwIDE2LjA1MTkgOC45NjU2OCAxNS40NjM5IDguMzI0MjhaIiBmaWxsPSIjMjAxOEIwIi8+Cjwvc3ZnPgo=",vr="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjc3MDUgMTUuMjIxOEw1LjU3ODY5IDkuNjgzOTRDNC45Nzk5NSA5LjA0NTI4IDUuNDMyNzkgOCA2LjMwODIzIDhIMTYuNjkxOEMxNy41NjcyIDggMTguMDIwMSA5LjA0NTI4IDE3LjQyMTMgOS42ODM5NEwxMi4yMjk1IDE1LjIyMThDMTEuODM0NSAxNS42NDMyIDExLjE2NTUgMTUuNjQzMiAxMC43NzA1IDE1LjIyMThaIiBmaWxsPSIjMjAxOEIwIi8+Cjwvc3ZnPgo=",jr="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMCAzQzEwIDIuNDQ3NzIgOS41NTIyOCAyIDkgMkM4LjQ0NzcyIDIgOCAyLjQ0NzcyIDggM1Y0SDdDNC43OTA4NiA0IDMgNS43OTA4NiAzIDhWMTZDMyAxOC4yMDkxIDQuNzkwODYgMjAgNyAyMEgxNkMxOC4yMDkxIDIwIDIwIDE4LjIwOTEgMjAgMTZWOEMyMCA1Ljc5MDg2IDE4LjIwOTEgNCAxNiA0SDE1VjNDMTUgMi40NDc3MiAxNC41NTIzIDIgMTQgMkMxMy40NDc3IDIgMTMgMi40NDc3MiAxMyAzVjRIMTBWM1pNNSAxNlYxNUg4VjE4SDdDNS44OTU0MyAxOCA1IDE3LjEwNDYgNSAxNlpNMTAgMThIMTNWMTVIMTBWMThaTTE2IDE4SDE1VjE1SDE4VjE2QzE4IDE3LjEwNDYgMTcuMTA0NiAxOCAxNiAxOFpNMTggMTNIMTVWOUgxOFYxM1pNMTAgOUgxM1YxM0gxMFY5Wk04IDlINVYxM0g4VjlaIiBmaWxsPSIjMjAxOEIwIi8+Cjwvc3ZnPgo=",Sr="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDJDOS41NTIyOCAyIDEwIDIuNDQ3NzIgMTAgM1Y0SDEzVjNDMTMgMi40NDc3MiAxMy40NDc3IDIgMTQgMkMxNC41NTIzIDIgMTUgMi40NDc3MiAxNSAzVjRIMTZDMTguMjA5MSA0IDIwIDUuNzkwODYgMjAgOFYxNkMyMCAxOC4yMDkxIDE4LjIwOTEgMjAgMTYgMjBIN0M0Ljc5MDg2IDIwIDMgMTguMjA5MSAzIDE2VjhDMyA1Ljc5MDg2IDQuNzkwODYgNCA3IDRIOFYzQzggMi40NDc3MiA4LjQ0NzcyIDIgOSAyWk03IDZDNS44OTU0MyA2IDUgNi44OTU0MyA1IDhIMThDMTggNi44OTU0MyAxNy4xMDQ2IDYgMTYgNkg3Wk01IDEwVjEzSDhWMTBINVpNMTAgMTBWMTNIMTNWMTBIMTBaTTEwIDE1SDEzVjE4SDEwVjE1Wk0xNSAxNVYxOEgxNkMxNy4xMDQ2IDE4IDE4IDE3LjEwNDYgMTggMTZWMTVIMTVaTTE1IDEwVjEzSDE4VjEwSDE1Wk04IDE1SDVWMTZDNSAxNy4xMDQ2IDUuODk1NDMgMTggNyAxOEg4VjE1WiIgZmlsbD0iIzIwMThCMCIvPgo8L3N2Zz4K",Cr="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDQgMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yIDRDMy4xMDQ1NyA0IDQgMy4xMDQ1NyA0IDJDNCAwLjg5NTQzMSAzLjEwNDU3IDAgMiAwQzAuODk1NDMxIDAgMCAwLjg5NTQzMSAwIDJDMCAzLjEwNDU3IDAuODk1NDMxIDQgMiA0WiIgZmlsbD0iI0VERjFGQSIvPgo8cGF0aCBkPSJNNCAxN1Y2SDBWMTdINFoiIGZpbGw9IiNFREYxRkEiLz4KPC9zdmc+Cg==",zr="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMCAxMEMyMCAxMy4zMTM3IDE3LjMxMzcgMTYgMTQgMTZDMTIuNzA0MiAxNiAxMS41MDQzIDE1LjU4OTIgMTAuNTIzNSAxNC44OTA4TDUuNzA3MTIgMTkuNzA3MUw0LjI5MjkxIDE4LjI5MjlMOS4xMDkyNiAxMy40NzY1QzguNDEwNzkgMTIuNDk1NyA4IDExLjI5NTggOCAxMEM4IDYuNjg2MjkgMTAuNjg2MyA0IDE0IDRDMTcuMzEzNyA0IDIwIDYuNjg2MjkgMjAgMTBaTTE4IDEwQzE4IDEyLjIwOTEgMTYuMjA5MSAxNCAxNCAxNEMxMS43OTA5IDE0IDEwIDEyLjIwOTEgMTAgMTBDMTAgNy43OTA4NiAxMS43OTA5IDYgMTQgNkMxNi4yMDkxIDYgMTggNy43OTA4NiAxOCAxMFoiIGZpbGw9IiMyMDE4QjAiLz4KPC9zdmc+Cg==",$t="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiA+CjxwYXRoIGQ9Ik0yMjAtMTYwcS0yNCAwLTQyLTE4dC0xOC00MnYtMTQzaDYwdjE0M2g1MjB2LTE0M2g2MHYxNDNxMCAyNC0xOCA0MnQtNDIgMThIMjIwWm0yMzAtMTUzdi0zNzFMMzMwLTU2NGwtNDMtNDMgMTkzLTE5MyAxOTMgMTkzLTQzIDQzLTEyMC0xMjB2MzcxaC02MFoiIGZpbGw9IiMyMDE4QjAiLz4KPC9zdmc+",kr="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDEyQzE0LjIwOTEgMTIgMTYgMTAuMjA5MSAxNiA4QzE2IDUuNzkwODYgMTQuMjA5MSA0IDEyIDRDOS43OTA4NiA0IDggNS43OTA4NiA4IDhDOCAxMC4yMDkxIDkuNzkwODYgMTIgMTIgMTJaIiBmaWxsPSIjMzI1NjhGIi8+CjxwYXRoIGQ9Ik00IDIwQzQgMTYuNjg2MyA3LjU4MTcyIDE0IDEyIDE0QzE2LjQxODMgMTQgMjAgMTYuNjg2MyAyMCAyMEg0WiIgZmlsbD0iIzMyNTY4RiIvPgo8L3N2Zz4K",Or="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjMzNjkyIDE1Ljc2MkM1Ljk2ODQyIDE2LjAzOSA1LjYzNTgyIDE2LjM0MjkgNS4zNDQ3OSAxNi42NjkzQzQuOTc4NzQgMTcuMDc5OSA0LjY3ODQ1IDE3LjUyNjMgNC40NTUyMiAxOEM0LjE2MDQxIDE4LjYyNTYgNCAxOS4yOTg3IDQgMjBIMjBDMjAgMTkuMjk4NyAxOS44Mzk2IDE4LjYyNTYgMTkuNTQ0OCAxOEMxOS4zMjE2IDE3LjUyNjMgMTkuMDIxMyAxNy4wNzk5IDE4LjY1NTIgMTYuNjY5M0MxOC4zNjI1IDE2LjM0MSAxOC4wMjc4IDE2LjAzNTYgMTcuNjU2OSAxNS43NTc0QzE2LjIwOTUgMTQuNjcxOCAxNC4yMDk2IDE0IDEyIDE0QzkuNzkwNDEgMTQgNy43OTA1MyAxNC42NzE4IDYuMzQzMTQgMTUuNzU3NEM2LjM0MTA3IDE1Ljc1ODkgNi4zMzg5OSAxNS43NjA1IDYuMzM2OTIgMTUuNzYyWk0xMiAxNkMxMC41NTE3IDE2IDkuMjYxNDcgMTYuMzUyMyA4LjI1NTkgMTYuOTAxQzcuOTk5MDQgMTcuMDQxMiA3Ljc2MDc1IDE3LjE5NDIgNy41NDMxNSAxNy4zNTc0QzcuMjY5MjggMTcuNTYyOCA3LjAzNDQ0IDE3Ljc3ODIgNi44MzY2MiAxOEgxNy4xNjM0QzE2Ljk2NTYgMTcuNzc4MiAxNi43MzA3IDE3LjU2MjggMTYuNDU2OSAxNy4zNTc0QzE2LjIzOTIgMTcuMTk0MiAxNi4wMDA5IDE3LjA0MTIgMTUuNzQ0MSAxNi45MDFDMTQuNzM4NSAxNi4zNTIzIDEzLjQ0ODMgMTYgMTIgMTZaTTE2IDhDMTYgMTAuMjA5MSAxNC4yMDkxIDEyIDEyIDEyQzkuNzkwODYgMTIgOCAxMC4yMDkxIDggOEM4IDUuNzkwODYgOS43OTA4NiA0IDEyIDRDMTQuMjA5MSA0IDE2IDUuNzkwODYgMTYgOFpNMTIgMTBDMTMuMTA0NiAxMCAxNCA5LjEwNDU3IDE0IDhDMTQgNi44OTU0MyAxMy4xMDQ2IDYgMTIgNkMxMC44OTU0IDYgMTAgNi44OTU0MyAxMCA4QzEwIDkuMTA0NTcgMTAuODk1NCAxMCAxMiAxMFoiIGZpbGw9IiMyMDE4QjAiLz4KPC9zdmc+Cg==",Lr=l.div`
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
`,Pr=l.img`
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
`,Qr={Add:Nr,AddPicture:Tr,ArrowBottom:Er,ArrowLeft:Ar,ArrowRight:br,ArrowTop:wr,ArrowTriangle:vr,DateFlat:jr,DateLine:Sr,Information:Cr,Search:zr,Upload:$t,UserFlat:kr,UserLine:Or},m=({size:e="medium",icon:t})=>{const n=`icon-${e} icon`,r=Qr[t];return i.createElement(Lr,{className:n},i.createElement(Pr,{src:r,alt:t}))};m.Add=e=>i.createElement(m,{icon:"Add",...e});m.AddPicture=e=>i.createElement(m,{icon:"AddPicture",...e});m.ArrowBottom=e=>i.createElement(m,{icon:"ArrowBottom",...e});m.ArrowLeft=e=>i.createElement(m,{icon:"ArrowLeft",...e});m.ArrowRight=e=>i.createElement(m,{icon:"ArrowRight",...e});m.ArrowTop=e=>i.createElement(m,{icon:"ArrowTop",...e});m.ArrowTriangle=e=>i.createElement(m,{icon:"ArrowTriangle",...e});m.DateFlat=e=>i.createElement(m,{icon:"DateFlat",...e});m.DateLine=e=>i.createElement(m,{icon:"DateLine",...e});m.Information=e=>i.createElement(m,{icon:"Information",...e});m.Search=e=>i.createElement(m,{icon:"Search",...e});m.Upload=e=>i.createElement(m,{icon:"Upload",...e});m.UserFlat=e=>i.createElement(m,{icon:"UserFlat",...e});m.UserLine=e=>i.createElement(m,{icon:"UserLine",...e});const Zr=l.div`
  position: relative;
  background-size: cover;
  object-fit: cover;
`,Rr=l.div`
  padding: 16px;
  gap: 16px;
  position: absolute;
  right: 0px;
  bottom: 0px;
`,Yr=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Gr=({showedit:e=!0,background:t="https://imgs.search.brave.com/eHBodvumUFQ7TzAM2YRFjFbE9P2IB_VeLxS5-sesWlo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzc5LzY4LzI0/LzM2MF9GXzU3OTY4/MjQ3OV9qNGpSZngw/bmwzQzh2TXJUWVZh/cEZuR1A4RWdOSGdm/ay5qcGc"})=>{const n=t?{backgroundImage:`url(${t})`}:{backgroundImage:"https://imgs.search.brave.com/eHBodvumUFQ7TzAM2YRFjFbE9P2IB_VeLxS5-sesWlo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzc5LzY4LzI0/LzM2MF9GXzU3OTY4/MjQ3OV9qNGpSZngw/bmwzQzh2TXJUWVZh/cEZuR1A4RWdOSGdm/ay5qcGc"};return i.createElement(Zr,null,i.createElement(ae.L1H1,null,i.createElement(Yr,{src:t,style:n}),e&&i.createElement(Rr,null,i.createElement(G.Tertiary,null,i.createElement(m.AddPicture,null),"Edit"))))},ze=({children:e})=>i.createElement("div",null,e);ze.Small=hr;ze.Cover=Gr;const Ur=l.div`
  min-width: 246px;
`,Br=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Hr=l.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`,Wr=l.div`
  display: flex;
  align-items: flex-end;
  align-self: stretch;
  justify-content: space-between;
`,Dt=l.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`,Fr=l.p`
  margin: 0;

  color: #353538;
  font-family: Co Headline;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`,Vr=l.p`
  align-self: stretch;
  text-align: start;
  margin: 0;

  color: #1b1a23;
  font-family: Co Headline;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,_r=l.p`
  align-self: stretch;
  text-align: start;
  margin: 0;

  color: #1b1a23;
  font-family: Co Headline;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`,$r=l.p`
  margin: 0;

  color: #171673;
  font-family: Co Headline;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,Xr=({media:e="https://imgs.search.brave.com/eHBodvumUFQ7TzAM2YRFjFbE9P2IB_VeLxS5-sesWlo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzc5LzY4LzI0/LzM2MF9GXzU3OTY4/MjQ3OV9qNGpSZngw/bmwzQzh2TXJUWVZh/cEZuR1A4RWdOSGdm/ay5qcGc",title:t="",mention:n="",subTitle:r="",price:o=0})=>i.createElement(Ur,null,i.createElement(ae.L2H3,null,i.createElement(Br,{src:e,alt:e})),i.createElement(Hr,null,i.createElement(Dt,null,i.createElement(Fr,null,n),i.createElement(Wr,null,i.createElement(Dt,null,i.createElement(Vr,null,t),i.createElement(_r,null,r)),i.createElement($r,null,o))))),Jr=l.div`
  padding: 0px;
  width: auto;
  min-width: 246px;
`,Kr=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,qr=({media:e="https://imgs.search.brave.com/eHBodvumUFQ7TzAM2YRFjFbE9P2IB_VeLxS5-sesWlo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzc5LzY4LzI0/LzM2MF9GXzU3OTY4/MjQ3OV9qNGpSZngw/bmwzQzh2TXJUWVZh/cEZuR1A4RWdOSGdm/ay5qcGc"})=>i.createElement(Jr,null,i.createElement(ae.L2H3,null,i.createElement(Kr,{src:e,alt:e}))),tt=({children:e})=>i.createElement("div",null,e);tt.Default=Xr;tt.Media=qr;const eo=l.div`
  display: flex;
  align-items: center;
  justify-content: center;

`,to=l.img`
  max-height: 48px;
  max-width: 48px;
  object-fit: cover;
`,Xt=({background:e})=>i.createElement(eo,null,i.createElement(to,{src:e})),no=l.form`
display: flex;
padding: 12px;
justify-content: space-between;
align-items: flex-start;
gap: 4px;

border-radius: 4px;
border: 2px solid #0F082B;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
width: 100%;
`,ro=l.input`
color: #0F082B;
font-family: Co Headline;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;

border: none;
width: 100%;
outline: none;
`,Jt=({placeholder:e,onChange:t,onSubmit:n})=>{const r=o=>{o.preventDefault(),n&&n(o)};return i.createElement(no,{onSubmit:r},i.createElement(ro,{type:"search",placeholder:e,onChange:t}),i.createElement(m.Search,null))},oo=({brand:e,logoBackground:t,avatarBackground:n,onClick:r})=>i.createElement("div",null,i.createElement(Xt,{background:t}),i.createElement(Jt,{placeholder:""}),i.createElement(ze.Small,{background:n,onClick:r})),io=({label:e="Information"})=>i.createElement("div",null,i.createElement(m.Information,null),i.createElement("p",null,e)),ao=l.div`
  display: flex;
  padding: 32px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`,so=l.h2`
  margin: 0;
  color: #000;

  font-family: Co Headline;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,co=l.div`
  display: flex;
  padding: 32px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border: 2px dashed #32568f;
`,lo=l.p`
  margin: 0;
  font-family: "Co Headline";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 24px;
  color: #32568f;
`,uo=({title:e,label:t})=>i.createElement(ao,null,i.createElement(so,null,e),i.createElement(co,null,i.createElement(m.Upload,null),i.createElement(lo,null,t))),go=l.div`
display: flex;
flex-direction: column;
align-items: flex-start;

  // overflow-y: scroll;
`,po=l.p`
margin: 0; 

color: #1B1A23;
font-family: Co Headline;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 32px;
`,fo=l.p`
margin: 0; 

color: #1B1A23;
font-family: Co Headline;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: start;
`,mo=l.div`
display: flex;
padding: 16px 0px;
flex-direction: column;
align-items: flex-start;
align-self: stretch;

max-height: 256px;
overflow-y: auto; 
`,ho=({title:e,label:t})=>i.createElement(go,null,i.createElement(po,null,e),i.createElement(mo,null,i.createElement(fo,null,t))),Mo=l.div`
display: flex;
min-width: 0;
flex-direction: column;
align-items: flex-start;
gap: 8px;
`,yo=l.label`
font-family: Co Headline;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: normal;
min-width: 0;
`,Io=l.input`
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
`,xo=({label:e,placeholder:t,type:n="text",name:r,value:o,onChange:a})=>i.createElement(Mo,null,i.createElement(yo,null,e),i.createElement(Io,{type:n,placeholder:t,name:r,value:o,onChange:a})),Do=l.div`
  display: flex;
  padding: 4px;
  align-items: center;
  gap: 16px;
`,No=l.input`
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
`,To=l.label`
  color: #1b1a23;
  font-family: Co Headline;R
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  word-break: break-word;
  text-align: start;
`,Eo=({label:e,name:t,value:n,checked:r,onChange:o})=>{const a=i.useId();return i.createElement(Do,null,i.createElement(No,{type:"radio",id:a,onChange:o,checked:r,name:t,value:n}),i.createElement(To,{htmlFor:a},e))},Ao=l.div`
  position: relative;
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`,bo=l.label`
  font-family: Co Headline;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,wo=l.select`
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
`,vo=({label:e,options:t,name:n,value:r,onChange:o})=>i.createElement(Ao,null,i.createElement(bo,null,e),i.createElement(wo,{value:r,onChange:o,name:n},t.map((a,s)=>i.createElement("option",{key:s,value:typeof a=="object"?a.value:a},typeof a=="object"?a.label:a)))),jo=l.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`,So=l.label`
  font-family: Co Headline;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,Co=l.input`
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
`,zo=({label:e,lang:t="fr",value:n,name:r,onChange:o})=>i.createElement(jo,null,i.createElement(So,null,e),i.createElement(Co,{lang:t,value:n,type:"date",name:r,onChange:o})),Nt="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIGNvbG9yPSJyZWQiIGZpbGw9IiMxNzE2NzMiPgo8cGF0aCBkPSJNMjIwLTE2MHEtMjQgMC00Mi0xOHQtMTgtNDJ2LTE0M2g2MHYxNDNoNTIwdi0xNDNoNjB2MTQzcTAgMjQtMTggNDJ0LTQyIDE4SDIyMFptMjYwLTE1M0wyODctNTA2bDQzLTQzIDEyMCAxMjB2LTM3MWg2MHYzNzFsMTIwLTEyMCA0MyA0My0xOTMgMTkzWiIgZmlsbD0iIzE3MTY3MyIvPgo8L3N2Zz4=",ko=l.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  background: #f7f7f8;
  border: 2px dashed #171673;
  border-radius: 2px;
`,Oo=l.input`
  display: none;
`,Lo=({label:e,icon:t})=>i.createElement("form",null,i.createElement(ko,{htmlFor:"file-input"},t==="left"&&i.createElement("img",{src:Nt,alt:"download"}),e,t==="right"&&i.createElement("img",{src:Nt,alt:"download"}),i.createElement(Oo,{type:"file",name:"file",id:"file-input"}))),Po=l.button`
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
`,Qo=({label:e,name:t,acceptedExtensions:n=".jpg,.png,.pdf"})=>{const r=i.useRef(null),[o,a]=i.useState(null),s=c=>{const p=c.target.files&&c.target.files[0];a(p)},u=()=>{r.current&&r.current.click()};return i.createElement(i.Fragment,null,i.createElement("input",{type:"file",accept:n,style:{display:"none"},ref:r,onChange:s}),i.createElement(Po,{onClick:u,name:t},o?o.name:e,i.createElement("img",{src:$t,alt:"upload"})))},Zo=l.div`
position: relative;
  display: flex;
  align-items: flex-start;
  gap: 17px;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  z-index: 1;
`,Ro=l.div`
  width: 300px;
  box-sizing: border-box;
`,Yo=({children:e})=>i.createElement(Zo,null,i.Children.map(e,(t,n)=>i.createElement(Ro,{key:n},t))),Go=async()=>{const e="../../popoyoko-default-variables/web/ComponentPopoyoko";return console.log("Final token path in browser:",e),e},Uo=async()=>{try{const e=await Go();return console.log("Loading tokens from:",e),{componentTokens:(await import(`${e}.ts`)).default}}catch(e){throw console.error("Error loading tokens:",e),e}},Kt=i.createContext(void 0),Bo=({children:e})=>{const[t,n]=i.useState(null);return i.useEffect(()=>{(async()=>{try{const{componentTokens:o}=await Uo();n(o)}catch(o){console.error("Error loading tokens:",o)}})()},[]),t?i.createElement(Kt.Provider,{value:{componentTokens:t}},e):i.createElement("div",null,"Loading...")},Ho=()=>{const e=i.useContext(Kt);if(e===void 0)throw new Error("useTokens must be used within a TokenProvider");return e},Wo=({label:e})=>{const{componentTokens:t}=Ho(),n={Initial:t.ButtonPrimary.BG.Initial};return t?i.createElement("button",{style:{backgroundColor:n.Initial}},e):i.createElement("p",null,"no component tokens")};function Fo(e){return{name:"variables-config-plugin",transform(t,n){if(n.endsWith("loadTokensConfig.ts")){const r=e.tokenPath||"../../popoyoko-default-variables/web/ComponentPopoyoko";console.log(`Using tokenPath from user config: ${r}`);const o=t.replace(/const defaultTokenPath = ["'].*?["'];/,`const defaultTokenPath = '${r}';`);return console.log(`Modified code:
`,o),{code:o,map:null}}return null}}}exports.Avatar=ze;exports.Button=G;exports.Card=tt;exports.Header=oo;exports.Icon=m;exports.Information=io;exports.InputDate=zo;exports.InputDownload=Lo;exports.InputRadio=Eo;exports.InputSearch=Jt;exports.InputSelect=vo;exports.InputText=xo;exports.InputUpload=Qo;exports.Logo=Xt;exports.Ratio=ae;exports.Section=uo;exports.Slider=Yo;exports.TestButton=Wo;exports.Text=ho;exports.TokenProvider=Bo;exports.variablesConfigPlugin=Fo;
//# sourceMappingURL=popoyoko-ui.cjs.js.map
