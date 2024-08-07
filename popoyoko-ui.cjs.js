"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("react");var S=function(){return S=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},S.apply(this,arguments)};function q(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,a;r<o;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}function on(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var an=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,sn=on(function(e){return an.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),D="-ms-",ue="-moz-",y="-webkit-",wt="comm",Te="rule",$e="decl",cn="@import",Et="@keyframes",ln="@layer",At=Math.abs,Xe=String.fromCharCode,Ge=Object.assign;function dn(e,t){return v(e,0)^45?(((t<<2^v(e,0))<<2^v(e,1))<<2^v(e,2))<<2^v(e,3):0}function Tt(e){return e.trim()}function R(e,t){return(e=t.exec(e))?e[0]:e}function u(e,t,n){return e.replace(t,n)}function Ie(e,t,n){return e.indexOf(t,n)}function v(e,t){return e.charCodeAt(t)|0}function K(e,t,n){return e.slice(t,n)}function Q(e){return e.length}function bt(e){return e.length}function de(e,t){return t.push(e),e}function un(e,t){return e.map(t).join("")}function ot(e,t){return e.filter(function(n){return!R(n,t)})}var be=1,ee=1,Ct=0,O=0,j=0,oe="";function Ce(e,t,n,r,o,a,s,d){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:be,column:ee,length:s,return:"",siblings:d}}function Y(e,t){return Ge(Ce("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function J(e){for(;e.root;)e=Y(e.root,{children:[e]});de(e,e.siblings)}function pn(){return j}function gn(){return j=O>0?v(oe,--O):0,ee--,j===10&&(ee=1,be--),j}function L(){return j=O<Ct?v(oe,O++):0,ee++,j===10&&(ee=1,be++),j}function F(){return v(oe,O)}function xe(){return O}function je(e,t){return K(oe,e,t)}function Ue(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function mn(e){return be=ee=1,Ct=Q(oe=e),O=0,[]}function fn(e){return oe="",e}function Pe(e){return Tt(je(O-1,Be(e===91?e+2:e===40?e+1:e)))}function hn(e){for(;(j=F())&&j<33;)L();return Ue(e)>2||Ue(j)>3?"":" "}function yn(e,t){for(;--t&&L()&&!(j<48||j>102||j>57&&j<65||j>70&&j<97););return je(e,xe()+(t<6&&F()==32&&L()==32))}function Be(e){for(;L();)switch(j){case e:return O;case 34:case 39:e!==34&&e!==39&&Be(j);break;case 40:e===41&&Be(e);break;case 92:L();break}return O}function Mn(e,t){for(;L()&&e+j!==47+10;)if(e+j===42+42&&F()===47)break;return"/*"+je(t,O-1)+"*"+Xe(e===47?e:L())}function In(e){for(;!Ue(F());)L();return je(e,O)}function xn(e){return fn(Ne("",null,null,null,[""],e=mn(e),0,[0],e))}function Ne(e,t,n,r,o,a,s,d,c){for(var g=0,M=0,h=s,I=0,x=0,E=0,b=1,z=1,C=1,A=0,N="",w=o,T=a,m=r,p=N;z;)switch(E=A,A=L()){case 40:if(E!=108&&v(p,h-1)==58){Ie(p+=u(Pe(A),"&","&\f"),"&\f",At(g?d[g-1]:0))!=-1&&(C=-1);break}case 34:case 39:case 91:p+=Pe(A);break;case 9:case 10:case 13:case 32:p+=hn(E);break;case 92:p+=yn(xe()-1,7);continue;case 47:switch(F()){case 42:case 47:de(Nn(Mn(L(),xe()),t,n,c),c);break;default:p+="/"}break;case 123*b:d[g++]=Q(p)*C;case 125*b:case 59:case 0:switch(A){case 0:case 125:z=0;case 59+M:C==-1&&(p=u(p,/\f/g,"")),x>0&&Q(p)-h&&de(x>32?at(p+";",r,n,h-1,c):at(u(p," ","")+";",r,n,h-2,c),c);break;case 59:p+=";";default:if(de(m=it(p,t,n,g,M,o,d,N,w=[],T=[],h,a),a),A===123)if(M===0)Ne(p,t,m,m,w,a,h,d,T);else switch(I===99&&v(p,3)===110?100:I){case 100:case 108:case 109:case 115:Ne(e,m,m,r&&de(it(e,m,m,0,0,o,d,N,o,w=[],h,T),T),o,T,h,d,r?w:T);break;default:Ne(p,m,m,m,[""],T,0,d,T)}}g=M=x=0,b=C=1,N=p="",h=s;break;case 58:h=1+Q(p),x=E;default:if(b<1){if(A==123)--b;else if(A==125&&b++==0&&gn()==125)continue}switch(p+=Xe(A),A*b){case 38:C=M>0?1:(p+="\f",-1);break;case 44:d[g++]=(Q(p)-1)*C,C=1;break;case 64:F()===45&&(p+=Pe(L())),I=F(),M=h=Q(N=p+=In(xe())),A++;break;case 45:E===45&&Q(p)==2&&(b=0)}}return a}function it(e,t,n,r,o,a,s,d,c,g,M,h){for(var I=o-1,x=o===0?a:[""],E=bt(x),b=0,z=0,C=0;b<r;++b)for(var A=0,N=K(e,I+1,I=At(z=s[b])),w=e;A<E;++A)(w=Tt(z>0?x[A]+" "+N:u(N,/&\f/g,x[A])))&&(c[C++]=w);return Ce(e,t,n,o===0?Te:d,c,g,M,h)}function Nn(e,t,n,r){return Ce(e,t,n,wt,Xe(pn()),K(e,2,-2),0,r)}function at(e,t,n,r,o){return Ce(e,t,n,$e,K(e,0,r),K(e,r+1,-1),r,o)}function jt(e,t,n){switch(dn(e,t)){case 5103:return y+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return y+e+e;case 4789:return ue+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return y+e+ue+e+D+e+e;case 5936:switch(v(e,t+11)){case 114:return y+e+D+u(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return y+e+D+u(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return y+e+D+u(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return y+e+D+e+e;case 6165:return y+e+D+"flex-"+e+e;case 5187:return y+e+u(e,/(\w+).+(:[^]+)/,y+"box-$1$2"+D+"flex-$1$2")+e;case 5443:return y+e+D+"flex-item-"+u(e,/flex-|-self/g,"")+(R(e,/flex-|baseline/)?"":D+"grid-row-"+u(e,/flex-|-self/g,""))+e;case 4675:return y+e+D+"flex-line-pack"+u(e,/align-content|flex-|-self/g,"")+e;case 5548:return y+e+D+u(e,"shrink","negative")+e;case 5292:return y+e+D+u(e,"basis","preferred-size")+e;case 6060:return y+"box-"+u(e,"-grow","")+y+e+D+u(e,"grow","positive")+e;case 4554:return y+u(e,/([^-])(transform)/g,"$1"+y+"$2")+e;case 6187:return u(u(u(e,/(zoom-|grab)/,y+"$1"),/(image-set)/,y+"$1"),e,"")+e;case 5495:case 3959:return u(e,/(image-set\([^]*)/,y+"$1$`$1");case 4968:return u(u(e,/(.+:)(flex-)?(.*)/,y+"box-pack:$3"+D+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+y+e+e;case 4200:if(!R(e,/flex-|baseline/))return D+"grid-column-align"+K(e,t)+e;break;case 2592:case 3360:return D+u(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,R(r.props,/grid-\w+-end/)})?~Ie(e+(n=n[t].value),"span",0)?e:D+u(e,"-start","")+e+D+"grid-row-span:"+(~Ie(n,"span",0)?R(n,/\d+/):+R(n,/\d+/)-+R(e,/\d+/))+";":D+u(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return R(r.props,/grid-\w+-start/)})?e:D+u(u(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return u(e,/(.+)-inline(.+)/,y+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Q(e)-1-t>6)switch(v(e,t+1)){case 109:if(v(e,t+4)!==45)break;case 102:return u(e,/(.+:)(.+)-([^]+)/,"$1"+y+"$2-$3$1"+ue+(v(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ie(e,"stretch",0)?jt(u(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return u(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,a,s,d,c,g){return D+o+":"+a+g+(s?D+o+"-span:"+(d?c:+c-+a)+g:"")+e});case 4949:if(v(e,t+6)===121)return u(e,":",":"+y)+e;break;case 6444:switch(v(e,v(e,14)===45?18:11)){case 120:return u(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+y+(v(e,14)===45?"inline-":"")+"box$3$1"+y+"$2$3$1"+D+"$2box$3")+e;case 100:return u(e,":",":"+D)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return u(e,"scroll-","scroll-snap-")+e}return e}function Ee(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Dn(e,t,n,r){switch(e.type){case ln:if(e.children.length)break;case cn:case $e:return e.return=e.return||e.value;case wt:return"";case Et:return e.return=e.value+"{"+Ee(e.children,r)+"}";case Te:if(!Q(e.value=e.props.join(",")))return""}return Q(n=Ee(e.children,r))?e.return=e.value+"{"+n+"}":""}function wn(e){var t=bt(e);return function(n,r,o,a){for(var s="",d=0;d<t;d++)s+=e[d](n,r,o,a)||"";return s}}function En(e){return function(t){t.root||(t=t.return)&&e(t)}}function An(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case $e:e.return=jt(e.value,e.length,n);return;case Et:return Ee([Y(e,{value:u(e.value,"@","@"+y)})],r);case Te:if(e.length)return un(n=e.props,function(o){switch(R(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":J(Y(e,{props:[u(o,/:(read-\w+)/,":"+ue+"$1")]})),J(Y(e,{props:[o]})),Ge(e,{props:ot(n,r)});break;case"::placeholder":J(Y(e,{props:[u(o,/:(plac\w+)/,":"+y+"input-$1")]})),J(Y(e,{props:[u(o,/:(plac\w+)/,":"+ue+"$1")]})),J(Y(e,{props:[u(o,/:(plac\w+)/,D+"input-$1")]})),J(Y(e,{props:[o]})),Ge(e,{props:ot(n,r)});break}return""})}}var Tn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",vt="active",St="data-styled-version",ve="6.1.11",Je=`/*!sc*/
`,qe=typeof window<"u"&&"HTMLElement"in window,bn=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production"),st=/invalid hook call/i,fe=new Set,Cn=function(e,t){if(process.env.NODE_ENV!=="production"){var n=t?' with the id of "'.concat(t,'"'):"",r="The component ".concat(e).concat(n,` has been created dynamically.
`)+`You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,o=console.error;try{var a=!0;console.error=function(s){for(var d=[],c=1;c<arguments.length;c++)d[c-1]=arguments[c];st.test(s)?(a=!1,fe.delete(r)):o.apply(void 0,q([s],d,!1))},i.useRef(),a&&!fe.has(r)&&(console.warn(r),fe.add(r))}catch(s){st.test(s.message)&&fe.delete(r)}finally{console.error=o}}},Se=Object.freeze([]),te=Object.freeze({});function jn(e,t,n){return n===void 0&&(n=te),e.theme!==n.theme&&e.theme||t||n.theme}var We=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),vn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Sn=/(^-|-$)/g;function ct(e){return e.replace(vn,"-").replace(Sn,"")}var zn=/(a)(d)/gi,he=52,lt=function(e){return String.fromCharCode(e+(e>25?39:97))};function He(e){var t,n="";for(t=Math.abs(e);t>he;t=t/he|0)n=lt(t%he)+n;return(lt(t%he)+n).replace(zn,"$1-$2")}var Re,zt=5381,W=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},kt=function(e){return W(zt,e)};function kn(e){return He(kt(e)>>>0)}function Ot(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function Ze(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var Lt=typeof Symbol=="function"&&Symbol.for,Qt=Lt?Symbol.for("react.memo"):60115,On=Lt?Symbol.for("react.forward_ref"):60112,Ln={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Qn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Pt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pn=((Re={})[On]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Re[Qt]=Pt,Re);function dt(e){return("type"in(t=e)&&t.type.$$typeof)===Qt?Pt:"$$typeof"in e?Pn[e.$$typeof]:Ln;var t}var Rn=Object.defineProperty,Zn=Object.getOwnPropertyNames,ut=Object.getOwnPropertySymbols,Yn=Object.getOwnPropertyDescriptor,Gn=Object.getPrototypeOf,pt=Object.prototype;function Rt(e,t,n){if(typeof t!="string"){if(pt){var r=Gn(t);r&&r!==pt&&Rt(e,r,n)}var o=Zn(t);ut&&(o=o.concat(ut(t)));for(var a=dt(e),s=dt(t),d=0;d<o.length;++d){var c=o[d];if(!(c in Qn||n&&n[c]||s&&c in s||a&&c in a)){var g=Yn(t,c);try{Rn(e,c,g)}catch{}}}}return e}function ne(e){return typeof e=="function"}function Ke(e){return typeof e=="object"&&"styledComponentId"in e}function H(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function gt(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function re(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Fe(e,t,n){if(n===void 0&&(n=!1),!n&&!re(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Fe(e[r],t[r]);else if(re(t))for(var r in t)e[r]=Fe(e[r],t[r]);return e}function et(e,t){Object.defineProperty(e,"toString",{value:t})}var Un=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

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
`,18:"ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"}:{};function Bn(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=e[0],r=[],o=1,a=e.length;o<a;o+=1)r.push(e[o]);return r.forEach(function(s){n=n.replace(/%[a-z]/,s)}),n}function ie(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return process.env.NODE_ENV==="production"?new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):"")):new Error(Bn.apply(void 0,q([Un[e]],t,!1)).trim())}var Wn=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,a=o;t>=a;)if((a<<=1)<0)throw ie(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var s=o;s<a;s++)this.groupSizes[s]=0}for(var d=this.indexOfGroup(t+1),c=(s=0,n.length);s<c;s++)this.tag.insertRule(d,n[s])&&(this.groupSizes[t]++,d++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var a=r;a<o;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),a=o+r,s=o;s<a;s++)n+="".concat(this.tag.getRule(s)).concat(Je);return n},e}(),Hn=1<<30,De=new Map,Ae=new Map,we=1,ye=function(e){if(De.has(e))return De.get(e);for(;Ae.has(we);)we++;var t=we++;if(process.env.NODE_ENV!=="production"&&((0|t)<0||t>Hn))throw ie(16,"".concat(t));return De.set(e,t),Ae.set(t,e),t},Fn=function(e,t){we=t+1,De.set(e,t),Ae.set(t,e)},Vn="style[".concat(_,"][").concat(St,'="').concat(ve,'"]'),_n=new RegExp("^".concat(_,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),$n=function(e,t,n){for(var r,o=n.split(","),a=0,s=o.length;a<s;a++)(r=o[a])&&e.registerName(t,r)},Xn=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Je),o=[],a=0,s=r.length;a<s;a++){var d=r[a].trim();if(d){var c=d.match(_n);if(c){var g=0|parseInt(c[1],10),M=c[2];g!==0&&(Fn(M,g),$n(e,M,c[3]),e.getTag().insertRules(g,o)),o.length=0}else o.push(d)}}};function Jn(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Zt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(d){var c=Array.from(d.querySelectorAll("style[".concat(_,"]")));return c[c.length-1]}(n),a=o!==void 0?o.nextSibling:null;r.setAttribute(_,vt),r.setAttribute(St,ve);var s=Jn();return s&&r.setAttribute("nonce",s),n.insertBefore(r,a),r},qn=function(){function e(t){this.element=Zt(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,a=r.length;o<a;o++){var s=r[o];if(s.ownerNode===n)return s}throw ie(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Kn=function(){function e(t){this.element=Zt(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),er=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),mt=qe,tr={isServer:!qe,useCSSOMInjection:!bn},Yt=function(){function e(t,n,r){t===void 0&&(t=te),n===void 0&&(n={});var o=this;this.options=S(S({},tr),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&qe&&mt&&(mt=!1,function(a){for(var s=document.querySelectorAll(Vn),d=0,c=s.length;d<c;d++){var g=s[d];g&&g.getAttribute(_)!==vt&&(Xn(a,g),g.parentNode&&g.parentNode.removeChild(g))}}(this)),et(this,function(){return function(a){for(var s=a.getTag(),d=s.length,c="",g=function(h){var I=function(C){return Ae.get(C)}(h);if(I===void 0)return"continue";var x=a.names.get(I),E=s.getGroup(h);if(x===void 0||E.length===0)return"continue";var b="".concat(_,".g").concat(h,'[id="').concat(I,'"]'),z="";x!==void 0&&x.forEach(function(C){C.length>0&&(z+="".concat(C,","))}),c+="".concat(E).concat(b,'{content:"').concat(z,'"}').concat(Je)},M=0;M<d;M++)g(M);return c}(o)})}return e.registerId=function(t){return ye(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(S(S({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new er(o):r?new qn(o):new Kn(o)}(this.options),new Wn(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ye(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ye(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ye(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),nr=/&/g,rr=/^\s*\/\/.*$/gm;function Gt(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Gt(n.children,t)),n})}function or(e){var t,n,r,o=e===void 0?te:e,a=o.options,s=a===void 0?te:a,d=o.plugins,c=d===void 0?Se:d,g=function(I,x,E){return E.startsWith(n)&&E.endsWith(n)&&E.replaceAll(n,"").length>0?".".concat(t):I},M=c.slice();M.push(function(I){I.type===Te&&I.value.includes("&")&&(I.props[0]=I.props[0].replace(nr,n).replace(r,g))}),s.prefix&&M.push(An),M.push(Dn);var h=function(I,x,E,b){x===void 0&&(x=""),E===void 0&&(E=""),b===void 0&&(b="&"),t=b,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var z=I.replace(rr,""),C=xn(E||x?"".concat(E," ").concat(x," { ").concat(z," }"):z);s.namespace&&(C=Gt(C,s.namespace));var A=[];return Ee(C,wn(M.concat(En(function(N){return A.push(N)})))),A};return h.hash=c.length?c.reduce(function(I,x){return x.name||ie(15),W(I,x.name)},zt).toString():"",h}var ir=new Yt,Ve=or(),Ut=i.createContext({shouldForwardProp:void 0,styleSheet:ir,stylis:Ve});Ut.Consumer;i.createContext(void 0);function ft(){return i.useContext(Ut)}var ht=function(){function e(t,n){var r=this;this.inject=function(o,a){a===void 0&&(a=Ve);var s=r.name+a.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,a(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,et(this,function(){throw ie(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ve),this.name+t.hash},e}(),ar=function(e){return e>="A"&&e<="Z"};function yt(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;ar(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Bt=function(e){return e==null||e===!1||e===""},Wt=function(e){var t,n,r=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!Bt(a)&&(Array.isArray(a)&&a.isCss||ne(a)?r.push("".concat(yt(o),":"),a,";"):re(a)?r.push.apply(r,q(q(["".concat(o," {")],Wt(a),!1),["}"],!1)):r.push("".concat(yt(o),": ").concat((t=o,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Tn||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function V(e,t,n,r){if(Bt(e))return[];if(Ke(e))return[".".concat(e.styledComponentId)];if(ne(e)){if(!ne(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var o=e(t);return process.env.NODE_ENV==="production"||typeof o!="object"||Array.isArray(o)||o instanceof ht||re(o)||o===null||console.error("".concat(Ot(e)," is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")),V(o,t,n,r)}var a;return e instanceof ht?n?(e.inject(n,r),[e.getName(r)]):[e]:re(e)?Wt(e):Array.isArray(e)?Array.prototype.concat.apply(Se,e.map(function(s){return V(s,t,n,r)})):[e.toString()]}function sr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ne(n)&&!Ke(n))return!1}return!0}var cr=kt(ve),lr=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(r===void 0||r.isStatic)&&sr(t),this.componentId=n,this.baseHash=W(cr,n),this.baseStyle=r,Yt.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=H(o,this.staticRulesId);else{var a=gt(V(this.rules,t,n,r)),s=He(W(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,s)){var d=r(a,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,d)}o=H(o,s),this.staticRulesId=s}else{for(var c=W(this.baseHash,r.hash),g="",M=0;M<this.rules.length;M++){var h=this.rules[M];if(typeof h=="string")g+=h,process.env.NODE_ENV!=="production"&&(c=W(c,h));else if(h){var I=gt(V(h,t,n,r));c=W(c,I+M),g+=I}}if(g){var x=He(c>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(g,".".concat(x),void 0,this.componentId)),o=H(o,x)}}return o},e}(),Ht=i.createContext(void 0);Ht.Consumer;var Ye={},Mt=new Set;function dr(e,t,n){var r=Ke(e),o=e,a=!Ze(e),s=t.attrs,d=s===void 0?Se:s,c=t.componentId,g=c===void 0?function(w,T){var m=typeof w!="string"?"sc":ct(w);Ye[m]=(Ye[m]||0)+1;var p="".concat(m,"-").concat(kn(ve+m+Ye[m]));return T?"".concat(T,"-").concat(p):p}(t.displayName,t.parentComponentId):c,M=t.displayName,h=M===void 0?function(w){return Ze(w)?"styled.".concat(w):"Styled(".concat(Ot(w),")")}(e):M,I=t.displayName&&t.componentId?"".concat(ct(t.displayName),"-").concat(t.componentId):t.componentId||g,x=r&&o.attrs?o.attrs.concat(d).filter(Boolean):d,E=t.shouldForwardProp;if(r&&o.shouldForwardProp){var b=o.shouldForwardProp;if(t.shouldForwardProp){var z=t.shouldForwardProp;E=function(w,T){return b(w,T)&&z(w,T)}}else E=b}var C=new lr(n,I,r?o.componentStyle:void 0);function A(w,T){return function(m,p,U){var $=m.attrs,qt=m.componentStyle,Kt=m.defaultProps,en=m.foldedComponentIds,nt=m.styledComponentId,tn=m.target,nn=i.useContext(Ht),rn=ft(),ke=m.shouldForwardProp||rn.shouldForwardProp;process.env.NODE_ENV!=="production"&&i.useDebugValue(nt);var rt=jn(p,nn,Kt)||te,P=function(pe,le,ge){for(var X,B=S(S({},le),{className:void 0,theme:ge}),Qe=0;Qe<pe.length;Qe+=1){var me=ne(X=pe[Qe])?X(B):X;for(var Z in me)B[Z]=Z==="className"?H(B[Z],me[Z]):Z==="style"?S(S({},B[Z]),me[Z]):me[Z]}return le.className&&(B.className=H(B.className,le.className)),B}($,p,rt),se=P.as||tn,ce={};for(var k in P)P[k]===void 0||k[0]==="$"||k==="as"||k==="theme"&&P.theme===rt||(k==="forwardedAs"?ce.as=P.forwardedAs:ke&&!ke(k,se)||(ce[k]=P[k],ke||process.env.NODE_ENV!=="development"||sn(k)||Mt.has(k)||!We.has(se)||(Mt.add(k),console.warn('styled-components: it looks like an unknown prop "'.concat(k,'" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));var Oe=function(pe,le){var ge=ft(),X=pe.generateAndInjectStyles(le,ge.styleSheet,ge.stylis);return process.env.NODE_ENV!=="production"&&i.useDebugValue(X),X}(qt,P);process.env.NODE_ENV!=="production"&&m.warnTooManyClasses&&m.warnTooManyClasses(Oe);var Le=H(en,nt);return Oe&&(Le+=" "+Oe),P.className&&(Le+=" "+P.className),ce[Ze(se)&&!We.has(se)?"class":"className"]=Le,ce.ref=U,i.createElement(se,ce)}(N,w,T)}A.displayName=h;var N=i.forwardRef(A);return N.attrs=x,N.componentStyle=C,N.displayName=h,N.shouldForwardProp=E,N.foldedComponentIds=r?H(o.foldedComponentIds,o.styledComponentId):"",N.styledComponentId=I,N.target=r?o.target:e,Object.defineProperty(N,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(T){for(var m=[],p=1;p<arguments.length;p++)m[p-1]=arguments[p];for(var U=0,$=m;U<$.length;U++)Fe(T,$[U],!0);return T}({},o.defaultProps,w):w}}),process.env.NODE_ENV!=="production"&&(Cn(h,I),N.warnTooManyClasses=function(w,T){var m={},p=!1;return function(U){if(!p&&(m[U]=!0,Object.keys(m).length>=200)){var $=T?' with the id of "'.concat(T,'"'):"";console.warn("Over ".concat(200," classes were generated for component ").concat(w).concat($,`.
`)+`Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),p=!0,m={}}}}(h,I)),et(N,function(){return".".concat(N.styledComponentId)}),a&&Rt(N,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),N}function It(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var xt=function(e){return Object.assign(e,{isCss:!0})};function ur(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ne(e)||re(e))return xt(V(It(Se,q([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?V(r):xt(V(It(r,t)))}function _e(e,t,n){if(n===void 0&&(n=te),!t)throw ie(1,t);var r=function(o){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return e(t,n,ur.apply(void 0,q([o],a,!1)))};return r.attrs=function(o){return _e(e,t,S(S({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return _e(e,t,S(S({},n),o))},r}var Ft=function(e){return _e(dr,e)},l=Ft;We.forEach(function(e){l[e]=Ft(e)});process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);var Me="__sc-".concat(_,"__");process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window[Me]||(window[Me]=0),window[Me]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window[Me]+=1);const pr=l.div.withConfig({displayName:"SmallContainer",componentId:"sc-1v58t55"})`
  position: relative;
  width: 48px;
  height: 48px;
`,gr=l.img.withConfig({displayName:"AvatarImage",componentId:"sc-1o48vox"})`
  height: 100%;
  border-radius: 50%;
`,mr=l.div.withConfig({displayName:"Badge",componentId:"sc-17vuuxn"})`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 12px;
  height: 12px;
  background: #2018b0;
  border-radius: 50%;
`,fr=({showbadge:e=!0,background:t="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg",onClick:n})=>i.createElement(pr,{onClick:n},i.createElement(gr,{src:t}),e&&i.createElement(mr,null)),hr=l.button.withConfig({displayName:"StyledButton",componentId:"sc-1qh7xsj"})`
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
`,G=({variant:e="primary",children:t,action:n=()=>console.log("Button as been clicked"),value:r=void 0,type:o=void 0,disabled:a=!1})=>i.createElement(hr,{className:`${e} ${a?"disabled":""}`,onClick:a?void 0:n,type:o,value:r,disabled:a},t);G.Primary=e=>i.createElement(G,{variant:"primary",...e});G.Secondary=e=>i.createElement(G,{variant:"secondary",...e});G.Tertiary=e=>i.createElement(G,{variant:"tertiary",...e});const yr=l.div.withConfig({displayName:"RatioWrapper",componentId:"sc-16fyx7q"})`
  position: relative;
  overflow: hidden;
`,Mr=l(yr).withConfig({displayName:"Ratio1to1",componentId:"sc-yawe3e"})`
  aspect-ratio: 1 / 1;
`,Vt=({children:e})=>i.createElement(Mr,null,e);Vt.defaultProps={children:null};const Ir=l.div.withConfig({displayName:"RatioWrapper",componentId:"sc-ahmac1"})`
  position: relative;
  overflow: hidden;
`,xr=l(Ir).withConfig({displayName:"Ratio2to3",componentId:"sc-17nw4su"})`
  aspect-ratio: 3 / 2;
`,_t=({children:e})=>i.createElement(xr,null,e);_t.defaultProps={children:null};const ae=({children:e})=>i.createElement("div",null,e);ae.L1H1=Vt;ae.L2H3=_t;const Nr="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDRIMTBWMTFIM1YxM0gxMFYyMEgxMlYxM0gxOVYxMUgxMlY0WiIgZmlsbD0iIzIwMThCMCIvPgo8L3N2Zz4K",Dr="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjU2MzMgNEg3LjQzNjc0TDUuNzcwMDcgNi43NUgyVjE3SDZWMTVINFY4Ljc1SDYuODk2NTlMOC41NjMyNiA2SDEyLjQzNjdMMTQuMTAzNCA4Ljc1SDE3VjExSDE5VjYuNzVIMTUuMjI5OUwxMy41NjMzIDRaIiBmaWxsPSIjMjAxOEIwIi8+CjxwYXRoIGQ9Ik0xNyAxOVYxN0gxNVYxNUgxN1YxM0gxOVYxNUgyMVYxN0gxOVYxOUgxN1oiIGZpbGw9IiMyMDE4QjAiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSAxMi41QzE1IDE0Ljk4NTMgMTIuOTg1MyAxNyAxMC41IDE3QzguMDE0NzIgMTcgNiAxNC45ODUzIDYgMTIuNUM2IDEwLjAxNDcgOC4wMTQ3MiA4IDEwLjUgOEMxMi45ODUzIDggMTUgMTAuMDE0NyAxNSAxMi41Wk0xMyAxMi41QzEzIDEzLjg4MDcgMTEuODgwNyAxNSAxMC41IDE1QzkuMTE5MjkgMTUgOCAxMy44ODA3IDggMTIuNUM4IDExLjExOTMgOS4xMTkyOSAxMCAxMC41IDEwQzExLjg4MDcgMTAgMTMgMTEuMTE5MyAxMyAxMi41WiIgZmlsbD0iIzIwMThCMCIvPgo8L3N2Zz4K",wr="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjUgMTRWNEgxMC41VjE0SDguMjczMjRDNy40MDMxNCAxNCA2Ljk0ODE0IDE1LjAzNDMgNy41MzYwOSAxNS42NzU3TDEwLjc2MjkgMTkuMTk1OEMxMS4xNTkyIDE5LjYyODIgMTEuODQwOCAxOS42MjgyIDEyLjIzNzIgMTkuMTk1OEwxNS40NjM5IDE1LjY3NTdDMTYuMDUxOSAxNS4wMzQzIDE1LjU5NjkgMTQgMTQuNzI2OCAxNEgxMi41WiIgZmlsbD0iIzIwMThCMCIvPgo8L3N2Zz4K",Er="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuODI0MjcgOC4wMzYwOEw0LjMwNDE2IDExLjI2MjhDMy44NzE4IDExLjY1OTIgMy44NzE4IDEyLjM0MDggNC4zMDQxNiAxMi43MzcyTDcuODI0MjcgMTUuOTYzOUM4LjQ2NTY3IDE2LjU1MTkgOS41IDE2LjA5NjkgOS41IDE1LjIyNjhMOS41IDEzTDE5LjUgMTNWMTFMOS41IDExVjguNzczMjRDOS41IDcuOTAzMTMgOC40NjU2NyA3LjQ0ODEzIDcuODI0MjcgOC4wMzYwOFoiIGZpbGw9IiMyMDE4QjAiLz4KPC9zdmc+Cg==",Ar="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjE3NTcgMTUuOTYzOUwxOC42OTU4IDEyLjczNzJDMTkuMTI4MiAxMi4zNDA4IDE5LjEyODIgMTEuNjU5MiAxOC42OTU4IDExLjI2MjhMMTUuMTc1NyA4LjAzNjA4QzE0LjUzNDMgNy40NDgxMyAxMy41IDcuOTAzMTMgMTMuNSA4Ljc3MzIzTDEzLjUgMTFMMy41IDExVjEzTDEzLjUgMTNWMTUuMjI2OEMxMy41IDE2LjA5NjkgMTQuNTM0MyAxNi41NTE5IDE1LjE3NTcgMTUuOTYzOVoiIGZpbGw9IiMyMDE4QjAiLz4KPC9zdmc+Cg==",Tr="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjQ2MzkgOC4zMjQyOEwxMi4yMzcyIDQuODA0MTdDMTEuODQwOCA0LjM3MTggMTEuMTU5MiA0LjM3MTggMTAuNzYyOSA0LjgwNDE3TDcuNTM2MDkgOC4zMjQyN0M2Ljk0ODE0IDguOTY1NjggNy40MDMxNCAxMCA4LjI3MzI0IDEwTDEwLjUgMTBMMTAuNSAyMEgxMi41TDEyLjUgMTBMMTQuNzI2OCAxMEMxNS41OTY5IDEwIDE2LjA1MTkgOC45NjU2OCAxNS40NjM5IDguMzI0MjhaIiBmaWxsPSIjMjAxOEIwIi8+Cjwvc3ZnPgo=",br="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjc3MDUgMTUuMjIxOEw1LjU3ODY5IDkuNjgzOTRDNC45Nzk5NSA5LjA0NTI4IDUuNDMyNzkgOCA2LjMwODIzIDhIMTYuNjkxOEMxNy41NjcyIDggMTguMDIwMSA5LjA0NTI4IDE3LjQyMTMgOS42ODM5NEwxMi4yMjk1IDE1LjIyMThDMTEuODM0NSAxNS42NDMyIDExLjE2NTUgMTUuNjQzMiAxMC43NzA1IDE1LjIyMThaIiBmaWxsPSIjMjAxOEIwIi8+Cjwvc3ZnPgo=",Cr="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMCAzQzEwIDIuNDQ3NzIgOS41NTIyOCAyIDkgMkM4LjQ0NzcyIDIgOCAyLjQ0NzcyIDggM1Y0SDdDNC43OTA4NiA0IDMgNS43OTA4NiAzIDhWMTZDMyAxOC4yMDkxIDQuNzkwODYgMjAgNyAyMEgxNkMxOC4yMDkxIDIwIDIwIDE4LjIwOTEgMjAgMTZWOEMyMCA1Ljc5MDg2IDE4LjIwOTEgNCAxNiA0SDE1VjNDMTUgMi40NDc3MiAxNC41NTIzIDIgMTQgMkMxMy40NDc3IDIgMTMgMi40NDc3MiAxMyAzVjRIMTBWM1pNNSAxNlYxNUg4VjE4SDdDNS44OTU0MyAxOCA1IDE3LjEwNDYgNSAxNlpNMTAgMThIMTNWMTVIMTBWMThaTTE2IDE4SDE1VjE1SDE4VjE2QzE4IDE3LjEwNDYgMTcuMTA0NiAxOCAxNiAxOFpNMTggMTNIMTVWOUgxOFYxM1pNMTAgOUgxM1YxM0gxMFY5Wk04IDlINVYxM0g4VjlaIiBmaWxsPSIjMjAxOEIwIi8+Cjwvc3ZnPgo=",jr="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDJDOS41NTIyOCAyIDEwIDIuNDQ3NzIgMTAgM1Y0SDEzVjNDMTMgMi40NDc3MiAxMy40NDc3IDIgMTQgMkMxNC41NTIzIDIgMTUgMi40NDc3MiAxNSAzVjRIMTZDMTguMjA5MSA0IDIwIDUuNzkwODYgMjAgOFYxNkMyMCAxOC4yMDkxIDE4LjIwOTEgMjAgMTYgMjBIN0M0Ljc5MDg2IDIwIDMgMTguMjA5MSAzIDE2VjhDMyA1Ljc5MDg2IDQuNzkwODYgNCA3IDRIOFYzQzggMi40NDc3MiA4LjQ0NzcyIDIgOSAyWk03IDZDNS44OTU0MyA2IDUgNi44OTU0MyA1IDhIMThDMTggNi44OTU0MyAxNy4xMDQ2IDYgMTYgNkg3Wk01IDEwVjEzSDhWMTBINVpNMTAgMTBWMTNIMTNWMTBIMTBaTTEwIDE1SDEzVjE4SDEwVjE1Wk0xNSAxNVYxOEgxNkMxNy4xMDQ2IDE4IDE4IDE3LjEwNDYgMTggMTZWMTVIMTVaTTE1IDEwVjEzSDE4VjEwSDE1Wk04IDE1SDVWMTZDNSAxNy4xMDQ2IDUuODk1NDMgMTggNyAxOEg4VjE1WiIgZmlsbD0iIzIwMThCMCIvPgo8L3N2Zz4K",vr="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDQgMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yIDRDMy4xMDQ1NyA0IDQgMy4xMDQ1NyA0IDJDNCAwLjg5NTQzMSAzLjEwNDU3IDAgMiAwQzAuODk1NDMxIDAgMCAwLjg5NTQzMSAwIDJDMCAzLjEwNDU3IDAuODk1NDMxIDQgMiA0WiIgZmlsbD0iI0VERjFGQSIvPgo8cGF0aCBkPSJNNCAxN1Y2SDBWMTdINFoiIGZpbGw9IiNFREYxRkEiLz4KPC9zdmc+Cg==",Sr="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMCAxMEMyMCAxMy4zMTM3IDE3LjMxMzcgMTYgMTQgMTZDMTIuNzA0MiAxNiAxMS41MDQzIDE1LjU4OTIgMTAuNTIzNSAxNC44OTA4TDUuNzA3MTIgMTkuNzA3MUw0LjI5MjkxIDE4LjI5MjlMOS4xMDkyNiAxMy40NzY1QzguNDEwNzkgMTIuNDk1NyA4IDExLjI5NTggOCAxMEM4IDYuNjg2MjkgMTAuNjg2MyA0IDE0IDRDMTcuMzEzNyA0IDIwIDYuNjg2MjkgMjAgMTBaTTE4IDEwQzE4IDEyLjIwOTEgMTYuMjA5MSAxNCAxNCAxNEMxMS43OTA5IDE0IDEwIDEyLjIwOTEgMTAgMTBDMTAgNy43OTA4NiAxMS43OTA5IDYgMTQgNkMxNi4yMDkxIDYgMTggNy43OTA4NiAxOCAxMFoiIGZpbGw9IiMyMDE4QjAiLz4KPC9zdmc+Cg==",$t="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiA+CjxwYXRoIGQ9Ik0yMjAtMTYwcS0yNCAwLTQyLTE4dC0xOC00MnYtMTQzaDYwdjE0M2g1MjB2LTE0M2g2MHYxNDNxMCAyNC0xOCA0MnQtNDIgMThIMjIwWm0yMzAtMTUzdi0zNzFMMzMwLTU2NGwtNDMtNDMgMTkzLTE5MyAxOTMgMTkzLTQzIDQzLTEyMC0xMjB2MzcxaC02MFoiIGZpbGw9IiMyMDE4QjAiLz4KPC9zdmc+",zr="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDEyQzE0LjIwOTEgMTIgMTYgMTAuMjA5MSAxNiA4QzE2IDUuNzkwODYgMTQuMjA5MSA0IDEyIDRDOS43OTA4NiA0IDggNS43OTA4NiA4IDhDOCAxMC4yMDkxIDkuNzkwODYgMTIgMTIgMTJaIiBmaWxsPSIjMzI1NjhGIi8+CjxwYXRoIGQ9Ik00IDIwQzQgMTYuNjg2MyA3LjU4MTcyIDE0IDEyIDE0QzE2LjQxODMgMTQgMjAgMTYuNjg2MyAyMCAyMEg0WiIgZmlsbD0iIzMyNTY4RiIvPgo8L3N2Zz4K",kr="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjMzNjkyIDE1Ljc2MkM1Ljk2ODQyIDE2LjAzOSA1LjYzNTgyIDE2LjM0MjkgNS4zNDQ3OSAxNi42NjkzQzQuOTc4NzQgMTcuMDc5OSA0LjY3ODQ1IDE3LjUyNjMgNC40NTUyMiAxOEM0LjE2MDQxIDE4LjYyNTYgNCAxOS4yOTg3IDQgMjBIMjBDMjAgMTkuMjk4NyAxOS44Mzk2IDE4LjYyNTYgMTkuNTQ0OCAxOEMxOS4zMjE2IDE3LjUyNjMgMTkuMDIxMyAxNy4wNzk5IDE4LjY1NTIgMTYuNjY5M0MxOC4zNjI1IDE2LjM0MSAxOC4wMjc4IDE2LjAzNTYgMTcuNjU2OSAxNS43NTc0QzE2LjIwOTUgMTQuNjcxOCAxNC4yMDk2IDE0IDEyIDE0QzkuNzkwNDEgMTQgNy43OTA1MyAxNC42NzE4IDYuMzQzMTQgMTUuNzU3NEM2LjM0MTA3IDE1Ljc1ODkgNi4zMzg5OSAxNS43NjA1IDYuMzM2OTIgMTUuNzYyWk0xMiAxNkMxMC41NTE3IDE2IDkuMjYxNDcgMTYuMzUyMyA4LjI1NTkgMTYuOTAxQzcuOTk5MDQgMTcuMDQxMiA3Ljc2MDc1IDE3LjE5NDIgNy41NDMxNSAxNy4zNTc0QzcuMjY5MjggMTcuNTYyOCA3LjAzNDQ0IDE3Ljc3ODIgNi44MzY2MiAxOEgxNy4xNjM0QzE2Ljk2NTYgMTcuNzc4MiAxNi43MzA3IDE3LjU2MjggMTYuNDU2OSAxNy4zNTc0QzE2LjIzOTIgMTcuMTk0MiAxNi4wMDA5IDE3LjA0MTIgMTUuNzQ0MSAxNi45MDFDMTQuNzM4NSAxNi4zNTIzIDEzLjQ0ODMgMTYgMTIgMTZaTTE2IDhDMTYgMTAuMjA5MSAxNC4yMDkxIDEyIDEyIDEyQzkuNzkwODYgMTIgOCAxMC4yMDkxIDggOEM4IDUuNzkwODYgOS43OTA4NiA0IDEyIDRDMTQuMjA5MSA0IDE2IDUuNzkwODYgMTYgOFpNMTIgMTBDMTMuMTA0NiAxMCAxNCA5LjEwNDU3IDE0IDhDMTQgNi44OTU0MyAxMy4xMDQ2IDYgMTIgNkMxMC44OTU0IDYgMTAgNi44OTU0MyAxMCA4QzEwIDkuMTA0NTcgMTAuODk1NCAxMCAxMiAxMFoiIGZpbGw9IiMyMDE4QjAiLz4KPC9zdmc+Cg==",Or=l.div.withConfig({displayName:"IconContainer",componentId:"sc-18cu61y"})`
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
`,Lr=l.img.withConfig({displayName:"IconImage",componentId:"sc-k185v4"})`
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
`,Qr={Add:Nr,AddPicture:Dr,ArrowBottom:wr,ArrowLeft:Er,ArrowRight:Ar,ArrowTop:Tr,ArrowTriangle:br,DateFlat:Cr,DateLine:jr,Information:vr,Search:Sr,Upload:$t,UserFlat:zr,UserLine:kr},f=({size:e="medium",icon:t})=>{const n=`icon-${e} icon`,r=Qr[t];return i.createElement(Or,{className:n},i.createElement(Lr,{src:r,alt:t}))};f.Add=e=>i.createElement(f,{icon:"Add",...e});f.AddPicture=e=>i.createElement(f,{icon:"AddPicture",...e});f.ArrowBottom=e=>i.createElement(f,{icon:"ArrowBottom",...e});f.ArrowLeft=e=>i.createElement(f,{icon:"ArrowLeft",...e});f.ArrowRight=e=>i.createElement(f,{icon:"ArrowRight",...e});f.ArrowTop=e=>i.createElement(f,{icon:"ArrowTop",...e});f.ArrowTriangle=e=>i.createElement(f,{icon:"ArrowTriangle",...e});f.DateFlat=e=>i.createElement(f,{icon:"DateFlat",...e});f.DateLine=e=>i.createElement(f,{icon:"DateLine",...e});f.Information=e=>i.createElement(f,{icon:"Information",...e});f.Search=e=>i.createElement(f,{icon:"Search",...e});f.Upload=e=>i.createElement(f,{icon:"Upload",...e});f.UserFlat=e=>i.createElement(f,{icon:"UserFlat",...e});f.UserLine=e=>i.createElement(f,{icon:"UserLine",...e});const Pr=l.div.withConfig({displayName:"CoverContainer",componentId:"sc-42hjwm"})`
  position: relative;
  background-size: cover;
  object-fit: cover;
`,Rr=l.div.withConfig({displayName:"EditContainer",componentId:"sc-ifaror"})`
  padding: 16px;
  gap: 16px;
  position: absolute;
  right: 0px;
  bottom: 0px;
`,Zr=l.img.withConfig({displayName:"CoverImage",componentId:"sc-255061"})`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Yr=({showedit:e=!0,background:t="https://imgs.search.brave.com/eHBodvumUFQ7TzAM2YRFjFbE9P2IB_VeLxS5-sesWlo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzc5LzY4LzI0/LzM2MF9GXzU3OTY4/MjQ3OV9qNGpSZngw/bmwzQzh2TXJUWVZh/cEZuR1A4RWdOSGdm/ay5qcGc"})=>{const n=t?{backgroundImage:`url(${t})`}:{backgroundImage:"https://imgs.search.brave.com/eHBodvumUFQ7TzAM2YRFjFbE9P2IB_VeLxS5-sesWlo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzc5LzY4LzI0/LzM2MF9GXzU3OTY4/MjQ3OV9qNGpSZngw/bmwzQzh2TXJUWVZh/cEZuR1A4RWdOSGdm/ay5qcGc"};return i.createElement(Pr,null,i.createElement(ae.L1H1,null,i.createElement(Zr,{src:t,style:n}),e&&i.createElement(Rr,null,i.createElement(G.Tertiary,null,i.createElement(f.AddPicture,null),"Edit"))))},ze=({children:e})=>i.createElement("div",null,e);ze.Small=fr;ze.Cover=Yr;const Gr=l.div.withConfig({displayName:"CardContainer",componentId:"sc-5ghutt"})`
  min-width: 246px;
`,Ur=l.img.withConfig({displayName:"CardImage",componentId:"sc-1lvya7"})`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Br=l.div.withConfig({displayName:"CardSection",componentId:"sc-1qa4jwz"})`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`,Wr=l.div.withConfig({displayName:"CardInformation",componentId:"sc-9vnxay"})`
  display: flex;
  align-items: flex-end;
  align-self: stretch;
  justify-content: space-between;
`,Nt=l.div.withConfig({displayName:"CardGroup",componentId:"sc-1b1bg2c"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`,Hr=l.p.withConfig({displayName:"Mention",componentId:"sc-o1g088"})`
  margin: 0;

  color: #353538;
  font-family: Co Headline;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`,Fr=l.p.withConfig({displayName:"Title",componentId:"sc-gn7v29"})`
  align-self: stretch;
  text-align: start;
  margin: 0;

  color: #1b1a23;
  font-family: Co Headline;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,Vr=l.p.withConfig({displayName:"SubTitle",componentId:"sc-13bl9k3"})`
  align-self: stretch;
  text-align: start;
  margin: 0;

  color: #1b1a23;
  font-family: Co Headline;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`,_r=l.p.withConfig({displayName:"Price",componentId:"sc-svhozq"})`
  margin: 0;

  color: #171673;
  font-family: Co Headline;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,$r=({media:e="https://imgs.search.brave.com/eHBodvumUFQ7TzAM2YRFjFbE9P2IB_VeLxS5-sesWlo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzc5LzY4LzI0/LzM2MF9GXzU3OTY4/MjQ3OV9qNGpSZngw/bmwzQzh2TXJUWVZh/cEZuR1A4RWdOSGdm/ay5qcGc",title:t="",mention:n="",subTitle:r="",price:o=0})=>i.createElement(Gr,null,i.createElement(ae.L2H3,null,i.createElement(Ur,{src:e,alt:e})),i.createElement(Br,null,i.createElement(Nt,null,i.createElement(Hr,null,n),i.createElement(Wr,null,i.createElement(Nt,null,i.createElement(Fr,null,t),i.createElement(Vr,null,r)),i.createElement(_r,null,o))))),Xr=l.div.withConfig({displayName:"Card",componentId:"sc-19v0g5a"})`
  padding: 0px;
  width: auto;
  min-width: 246px;
`,Jr=l.img.withConfig({displayName:"CardImage",componentId:"sc-ury74m"})`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,qr=({media:e="https://imgs.search.brave.com/eHBodvumUFQ7TzAM2YRFjFbE9P2IB_VeLxS5-sesWlo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzc5LzY4LzI0/LzM2MF9GXzU3OTY4/MjQ3OV9qNGpSZngw/bmwzQzh2TXJUWVZh/cEZuR1A4RWdOSGdm/ay5qcGc"})=>i.createElement(Xr,null,i.createElement(ae.L2H3,null,i.createElement(Jr,{src:e,alt:e}))),tt=({children:e})=>i.createElement("div",null,e);tt.Default=$r;tt.Media=qr;const Kr=l.div.withConfig({displayName:"LogoWrapper",componentId:"sc-1jqwnka"})`
  display: flex;
  align-items: center;
  justify-content: center;

`,eo=l.img.withConfig({displayName:"LogoImage",componentId:"sc-1gyuckm"})`
  max-height: 48px;
  max-width: 48px;
  object-fit: cover;
`,Xt=({background:e})=>i.createElement(Kr,null,i.createElement(eo,{src:e})),to=l.form.withConfig({displayName:"SearchWrapper",componentId:"sc-snrz2u"})`
display: flex;
padding: 12px;
justify-content: space-between;
align-items: flex-start;
gap: 4px;

border-radius: 4px;
border: 2px solid #0F082B;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
width: 100%;
`,no=l.input.withConfig({displayName:"SearchInput",componentId:"sc-grocwf"})`
color: #0F082B;
font-family: Co Headline;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;

border: none;
width: 100%;
outline: none;
`,Jt=({placeholder:e,onChange:t,onSubmit:n})=>{const r=o=>{o.preventDefault(),n&&n(o)};return i.createElement(to,{onSubmit:r},i.createElement(no,{type:"search",placeholder:e,onChange:t}),i.createElement(f.Search,null))},ro=({brand:e,logoBackground:t,avatarBackground:n,onClick:r})=>i.createElement("div",null,i.createElement(Xt,{background:t}),i.createElement(Jt,{placeholder:""}),i.createElement(ze.Small,{background:n,onClick:r})),oo=({label:e="Information"})=>i.createElement("div",null,i.createElement(f.Information,null),i.createElement("p",null,e)),io=l.div.withConfig({displayName:"ContainerSection",componentId:"sc-1uqwsxd"})`
  display: flex;
  padding: 32px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`,ao=l.h2.withConfig({displayName:"Title",componentId:"sc-1okhhup"})`
  margin: 0;
  color: #000;

  font-family: Co Headline;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,so=l.div.withConfig({displayName:"SectionBtn",componentId:"sc-1b97fat"})`
  display: flex;
  padding: 32px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border: 2px dashed #32568f;
`,co=l.p.withConfig({displayName:"SectionLabel",componentId:"sc-rx3dn6"})`
  margin: 0;
  font-family: "Co Headline";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 24px;
  color: #32568f;
`,lo=({title:e,label:t})=>i.createElement(io,null,i.createElement(ao,null,e),i.createElement(so,null,i.createElement(f.Upload,null),i.createElement(co,null,t))),uo=l.div.withConfig({displayName:"TextLayout",componentId:"sc-1i9bz2t"})`
display: flex;
flex-direction: column;
align-items: flex-start;

  // overflow-y: scroll;
`,po=l.p.withConfig({displayName:"TextTitle",componentId:"sc-uhx87o"})`
margin: 0; 

color: #1B1A23;
font-family: Co Headline;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 32px;
`,go=l.p.withConfig({displayName:"Textlabel",componentId:"sc-jwo7z"})`
margin: 0; 

color: #1B1A23;
font-family: Co Headline;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: start;
`,mo=l.div.withConfig({displayName:"Scroll",componentId:"sc-ygphxu"})`
display: flex;
padding: 16px 0px;
flex-direction: column;
align-items: flex-start;
align-self: stretch;

max-height: 256px;
overflow-y: auto; 
`,fo=({title:e,label:t})=>i.createElement(uo,null,i.createElement(po,null,e),i.createElement(mo,null,i.createElement(go,null,t))),ho=l.div.withConfig({displayName:"InputWrapper",componentId:"sc-1qd9xxi"})`
display: flex;
min-width: 0;
flex-direction: column;
align-items: flex-start;
gap: 8px;
`,yo=l.label.withConfig({displayName:"SelectLabel",componentId:"sc-xzykq6"})`
font-family: Co Headline;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: normal;
min-width: 0;
`,Mo=l.input.withConfig({displayName:"TextInput",componentId:"sc-1qbupz0"})`
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
`,Io=({label:e,placeholder:t,type:n="text",name:r,value:o,onChange:a})=>i.createElement(ho,null,i.createElement(yo,null,e),i.createElement(Mo,{type:n,placeholder:t,name:r,value:o,onChange:a})),xo=l.div.withConfig({displayName:"RadioWrapper",componentId:"sc-88ogxi"})`
  display: flex;
  padding: 4px;
  align-items: center;
  gap: 16px;
`,No=l.input.withConfig({displayName:"CustomRadio",componentId:"sc-1eifj5b"})`
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
`,Do=l.label.withConfig({displayName:"Label",componentId:"sc-zc2tqa"})`
  color: #1b1a23;
  font-family: Co Headline;R
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  word-break: break-word;
  text-align: start;
`,wo=({label:e,name:t,value:n,checked:r,onChange:o})=>{const a=i.useId();return i.createElement(xo,null,i.createElement(No,{type:"radio",id:a,onChange:o,checked:r,name:t,value:n}),i.createElement(Do,{htmlFor:a},e))},Eo=l.div.withConfig({displayName:"SelectWrapper",componentId:"sc-1ekizdg"})`
  position: relative;
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`,Ao=l.label.withConfig({displayName:"SelectLabel",componentId:"sc-ae78vj"})`
  font-family: Co Headline;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,To=l.select.withConfig({displayName:"SelectInput",componentId:"sc-5wvcoj"})`
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
`,bo=({label:e,options:t,name:n,value:r,onChange:o})=>i.createElement(Eo,null,i.createElement(Ao,null,e),i.createElement(To,{value:r,onChange:o,name:n},t.map((a,s)=>i.createElement("option",{key:s,value:typeof a=="object"?a.value:a},typeof a=="object"?a.label:a)))),Co=l.div.withConfig({displayName:"InputWrapper",componentId:"sc-10td3w0"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`,jo=l.label.withConfig({displayName:"DateLabel",componentId:"sc-1tx9e6c"})`
  font-family: Co Headline;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,vo=l.input.withConfig({displayName:"DateInput",componentId:"sc-lxcdfm"})`
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
`,So=({label:e,lang:t="fr",value:n,name:r,onChange:o})=>i.createElement(Co,null,i.createElement(jo,null,e),i.createElement(vo,{lang:t,value:n,type:"date",name:r,onChange:o})),Dt="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIGNvbG9yPSJyZWQiIGZpbGw9IiMxNzE2NzMiPgo8cGF0aCBkPSJNMjIwLTE2MHEtMjQgMC00Mi0xOHQtMTgtNDJ2LTE0M2g2MHYxNDNoNTIwdi0xNDNoNjB2MTQzcTAgMjQtMTggNDJ0LTQyIDE4SDIyMFptMjYwLTE1M0wyODctNTA2bDQzLTQzIDEyMCAxMjB2LTM3MWg2MHYzNzFsMTIwLTEyMCA0MyA0My0xOTMgMTkzWiIgZmlsbD0iIzE3MTY3MyIvPgo8L3N2Zz4=",zo=l.label.withConfig({displayName:"DownloadLabel",componentId:"sc-3dr7j0"})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  background: #f7f7f8;
  border: 2px dashed #171673;
  border-radius: 2px;
`,ko=l.input.withConfig({displayName:"DownloadInput",componentId:"sc-k5bdk0"})`
  display: none;
`,Oo=({label:e,icon:t})=>i.createElement("form",null,i.createElement(zo,{htmlFor:"file-input"},t==="left"&&i.createElement("img",{src:Dt,alt:"download"}),e,t==="right"&&i.createElement("img",{src:Dt,alt:"download"}),i.createElement(ko,{type:"file",name:"file",id:"file-input"}))),Lo=l.button.withConfig({displayName:"ButtonUpload",componentId:"sc-6i551a"})`
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
`,Qo=({label:e,name:t,acceptedExtensions:n=".jpg,.png,.pdf"})=>{const r=i.useRef(null),[o,a]=i.useState(null),s=c=>{const g=c.target.files&&c.target.files[0];a(g)},d=()=>{r.current&&r.current.click()};return i.createElement(i.Fragment,null,i.createElement("input",{type:"file",accept:n,style:{display:"none"},ref:r,onChange:s}),i.createElement(Lo,{onClick:d,name:t},o?o.name:e,i.createElement("img",{src:$t,alt:"upload"})))},Po=l.div.withConfig({displayName:"SliderContainer",componentId:"sc-1ljso4k"})`
position: relative;
  display: flex;
  align-items: flex-start;
  gap: 17px;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  z-index: 1;
`,Ro=l.div.withConfig({displayName:"SlideItem",componentId:"sc-8kfduz"})`
  width: 300px;
  box-sizing: border-box;
`,Zo=({children:e})=>i.createElement(Po,null,i.Children.map(e,(t,n)=>i.createElement(Ro,{key:n},t))),Yo=i.createContext(void 0),Go=()=>{const e=i.useContext(Yo);if(e===void 0)throw new Error("useTokens must be used within a TokenProvider");return e},Uo=({label:e})=>{const{componentTokens:t}=Go(),n={Initial:t.ButtonPrimary.BG.Initial};return t?i.createElement("button",{style:{backgroundColor:n.Initial}},e):i.createElement("p",null,"no component tokens")};exports.Avatar=ze;exports.Button=G;exports.Card=tt;exports.Header=ro;exports.Icon=f;exports.Information=oo;exports.InputDate=So;exports.InputDownload=Oo;exports.InputRadio=wo;exports.InputSearch=Jt;exports.InputSelect=bo;exports.InputText=Io;exports.InputUpload=Qo;exports.Logo=Xt;exports.Ratio=ae;exports.Section=lo;exports.Slider=Zo;exports.TestButton=Uo;exports.Text=fo;
//# sourceMappingURL=popoyoko-ui.cjs.js.map
