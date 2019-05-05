"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(t){if(!t.jQuery){var c=function e(t,r){return new e.fn.init(t,r)};c.isWindow=function(e){return null!=e&&e==e.window},c.type=function(e){return null==e?e+"":"object"===(void 0===e?"undefined":_typeof(e))||"function"==typeof e?r[a.call(e)]||"object":void 0===e?"undefined":_typeof(e)},c.isArray=Array.isArray||function(e){return"array"===c.type(e)},c.isPlainObject=function(e){var t;if(!e||"object"!==c.type(e)||e.nodeType||c.isWindow(e))return!1;try{if(e.constructor&&!o.call(e,"constructor")&&!o.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}for(t in e);return void 0===t||o.call(e,t)},c.each=function(e,t,r){var o=0,a=e.length,n=s(e);if(r){if(n)for(;o<a&&!1!==t.apply(e[o],r);o++);else for(o in e)if(!1===t.apply(e[o],r))break}else if(n)for(;o<a&&!1!==t.call(e[o],o,e[o]);o++);else for(o in e)if(!1===t.call(e[o],o,e[o]))break;return e},c.data=function(e,t,r){if(void 0===r){var o=(a=e[c.expando])&&n[a];if(void 0===t)return o;if(o&&t in o)return o[t]}else if(void 0!==t){var a=e[c.expando]||(e[c.expando]=++c.uuid);return n[a]=n[a]||{},n[a][t]=r}},c.removeData=function(e,t){var r=e[c.expando],o=r&&n[r];o&&c.each(t,function(e,t){delete o[t]})},c.extend=function(){var e,t,r,o,a,n,i=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof i&&(u=i,i=arguments[s]||{},s++),"object"!==(void 0===i?"undefined":_typeof(i))&&"function"!==c.type(i)&&(i={}),s===l&&(i=this,s--);s<l;s++)if(null!=(a=arguments[s]))for(o in a)e=i[o],i!==(r=a[o])&&(u&&r&&(c.isPlainObject(r)||(t=c.isArray(r)))?(n=t?(t=!1,e&&c.isArray(e)?e:[]):e&&c.isPlainObject(e)?e:{},i[o]=c.extend(u,n,r)):void 0!==r&&(i[o]=r));return i},c.queue=function(e,t,r){if(e){t=(t||"fx")+"queue";var o,a,n,i=c.data(e,t);return r?(!i||c.isArray(r)?i=c.data(e,t,(n=a||[],null!=(o=r)&&(s(Object(o))?function(e,t){for(var r=+t.length,o=0,a=e.length;o<r;)e[a++]=t[o++];if(r!=r)for(;void 0!==t[o];)e[a++]=t[o++];e.length=a}(n,"string"==typeof o?[o]:o):[].push.call(n,o)),n)):i.push(r),i):i||[]}},c.dequeue=function(e,a){c.each(e.nodeType?[e]:e,function(e,t){a=a||"fx";var r=c.queue(t,a),o=r.shift();"inprogress"===o&&(o=r.shift()),o&&("fx"===a&&r.unshift("inprogress"),o.call(t,function(){c.dequeue(t,a)}))})},c.fn=c.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var e=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:e.top+(t.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:e.left+(t.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),r=this.offset(),o=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:c(e).offset();return r.top-=parseFloat(t.style.marginTop)||0,r.left-=parseFloat(t.style.marginLeft)||0,e.style&&(o.top+=parseFloat(e.style.borderTopWidth)||0,o.left+=parseFloat(e.style.borderLeftWidth)||0),{top:r.top-o.top,left:r.left-o.left}}};var n={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var r={},o=r.hasOwnProperty,a=r.toString,e="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<e.length;i++)r["[object "+e[i]+"]"]=e[i].toLowerCase();c.fn.init.prototype=c.fn,t.Velocity={Utilities:c}}function s(e){var t=e.length,r=c.type(e);return"function"!==r&&!c.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===r||0===t||"number"==typeof t&&0<t&&t-1 in e))}}(window),function(e){"object"===("undefined"==typeof module?"undefined":_typeof(module))&&"object"===_typeof(module.exports)?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,O,z,q){var o,p=function(){if(z.documentMode)return z.documentMode;for(var e=7;4<e;e--){var t=z.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e}return q}(),t=(o=0,O.webkitRequestAnimationFrame||O.mozRequestAnimationFrame||function(e){var t,r=(new Date).getTime();return t=Math.max(0,16-(r-o)),o=r+t,setTimeout(function(){e(r+t)},t)});function y(e){return M.isWrapped(e)?e=[].slice.call(e):M.isNode(e)&&(e=[e]),e}var $,M={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"===(void 0===e?"undefined":_typeof(e))&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==q&&(0===e.length||"object"===_typeof(e[0])&&0<e[0].nodeType)},isWrapped:function(e){return e&&(e.jquery||O.Zepto&&O.Zepto.zepto.isZ(e))},isSVG:function(e){return O.SVGElement&&e instanceof O.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},r=!1;if(e.fn&&e.fn.jquery?($=e,r=!0):$=O.Velocity.Utilities,p<=8&&!r)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(!(p<=7)){var a="swing",I={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:O.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:z.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:$,Redirects:{},Easings:{},Promise:O.Promise,defaults:{queue:"",duration:400,easing:a,begin:q,complete:q,progress:q,display:q,visibility:q,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){$.data(e,"velocity",{isSVG:M.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};O.pageYOffset!==q?(I.State.scrollAnchor=O,I.State.scrollPropertyLeft="pageXOffset",I.State.scrollPropertyTop="pageYOffset"):(I.State.scrollAnchor=z.documentElement||z.body.parentNode||z.body,I.State.scrollPropertyLeft="scrollLeft",I.State.scrollPropertyTop="scrollTop");var n=function e(t,r,o){var a,n,i,s,l,u,c,p,f,d,g,y={x:-1,v:0,tension:null,friction:null},m=[0],h=0;for(t=parseFloat(t)||500,r=parseFloat(r)||20,o=o||null,y.tension=t,y.friction=r,n=(a=null!==o)?(h=e(t,r))/o*.016:.016;l=n,u={dx:(s=i||y).v,dv:v(s)},c=b(s,.5*l,u),p=b(s,.5*l,c),f=b(s,l,p),d=1/6*(u.dx+2*(c.dx+p.dx)+f.dx),g=1/6*(u.dv+2*(c.dv+p.dv)+f.dv),s.x=s.x+d*l,s.v=s.v+g*l,i=s,m.push(1+i.x),h+=16,1e-4<Math.abs(i.x)&&1e-4<Math.abs(i.v););return a?function(e){return m[e*(m.length-1)|0]}:h};I.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},$.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){I.Easings[t[0]]=s.apply(null,t[1])});var B=I.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<B.Lists.colors.length;e++){var t="color"===B.Lists.colors[e]?"0 0 0 1":"255 255 255 1";B.Hooks.templates[B.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,o,a;if(p)for(r in B.Hooks.templates){a=(o=B.Hooks.templates[r])[0].split(" ");var n=o[1].match(B.RegEx.valueSplit);"Color"===a[0]&&(a.push(a.shift()),n.push(n.shift()),B.Hooks.templates[r]=[a.join(" "),n.join(" ")])}for(r in B.Hooks.templates)for(var e in a=(o=B.Hooks.templates[r])[0].split(" ")){var i=r+a[e],s=e;B.Hooks.registered[i]=[r,s]}},getRoot:function(e){var t=B.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return B.RegEx.valueUnwrap.test(t)&&(t=t.match(B.RegEx.valueUnwrap)[1]),B.Values.isCSSNullValue(t)&&(t=B.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=B.Hooks.registered[e];if(r){var o=r[0],a=r[1];return(t=B.Hooks.cleanRootPropertyValue(o,t)).toString().match(B.RegEx.valueSplit)[a]}return t},injectValue:function(e,t,r){var o=B.Hooks.registered[e];if(o){var a,n=o[0],i=o[1];return(a=(r=B.Hooks.cleanRootPropertyValue(n,r)).toString().match(B.RegEx.valueSplit))[i]=t,a.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var o;return o=B.RegEx.wrappedValueAlreadyExtracted.test(r)?r:(o=r.toString().match(B.RegEx.valueUnwrap))?o[1].replace(/,(\s+)?/g," "):r;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return I.State.isFirefox?"filter":"-webkit-filter";case"extract":var o=parseFloat(r);if(!o&&0!==o){var a=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);o=a?a[1]:0}return o;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(p<=8)switch(e){case"name":return"filter";case"extract":var o=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=o?o[1]/100:1;case"inject":return(t.style.zoom=1)<=parseFloat(r)?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":case"inject":return r}}},register:function(){p<=9||I.State.isGingerbread||(B.Lists.transformsBase=B.Lists.transformsBase.concat(B.Lists.transforms3D));for(var e=0;e<B.Lists.transformsBase.length;e++)!function(){var a=B.Lists.transformsBase[e];B.Normalizations.registered[a]=function(e,t,r){switch(e){case"name":return"transform";case"extract":return W(t)===q||W(t).transformCache[a]===q?/^scale/i.test(a)?1:0:W(t).transformCache[a].replace(/[()]/g,"");case"inject":var o=!1;switch(a.substr(0,a.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(r);break;case"scal":case"scale":I.State.isAndroid&&W(t).transformCache[a]===q&&r<1&&(r=1),o=!/(\d)$/i.test(r);break;case"skew":case"rotate":o=!/(deg|\d)$/i.test(r)}return o||(W(t).transformCache[a]="("+r+")"),W(t).transformCache[a]}}}();for(e=0;e<B.Lists.colors.length;e++)!function(){var i=B.Lists.colors[e];B.Normalizations.registered[i]=function(e,t,r){switch(e){case"name":return i;case"extract":var o;if(B.RegEx.wrappedValueAlreadyExtracted.test(r))o=r;else{var a,n={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(r)?a=n[r]!==q?n[r]:n.black:B.RegEx.isHex.test(r)?a="rgb("+B.Values.hexToRgb(r).join(" ")+")":/^rgba?\(/i.test(r)||(a=n.black),o=(a||r).toString().match(B.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return p<=8||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return p<=8?4===r.split(" ").length&&(r=r.split(/\s+/).slice(0,3).join(" ")):3===r.split(" ").length&&(r+=" 1"),(p<=8?"rgb":"rgba")+"("+r.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(p||I.State.isAndroid&&!I.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(I.State.prefixMatches[e])return[I.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,o=t.length;r<o;r++){var a;if(a=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),M.isString(I.State.prefixElement.style[a]))return[I.State.prefixMatches[e]=a,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t;return e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,r,o){return t+t+r+r+o+o}),(t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e))?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,t,r,u){function c(e,t){var r=0;if(p<=8)r=$.css(e,t);else{var o,a=function(){n&&B.setPropertyValue(e,"display","none")},n=!1;if(/^(width|height)$/.test(t)&&0===B.getPropertyValue(e,"display")&&(n=!0,B.setPropertyValue(e,"display",B.Values.getDisplayType(e))),!u){if("height"===t&&"border-box"!==B.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var i=e.offsetHeight-(parseFloat(B.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(B.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(B.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(B.getPropertyValue(e,"paddingBottom"))||0);return a(),i}if("width"===t&&"border-box"!==B.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var s=e.offsetWidth-(parseFloat(B.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(B.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(B.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(B.getPropertyValue(e,"paddingRight"))||0);return a(),s}}o=W(e)===q?O.getComputedStyle(e,null):W(e).computedStyle?W(e).computedStyle:W(e).computedStyle=O.getComputedStyle(e,null),"borderColor"===t&&(t="borderTopColor"),""!==(r=9===p&&"filter"===t?o.getPropertyValue(t):o[t])&&null!==r||(r=e.style[t]),a()}if("auto"===r&&/^(top|right|bottom|left)$/i.test(t)){var l=c(e,"position");("fixed"===l||"absolute"===l&&/top|left/i.test(t))&&(r=$(e).position()[t]+"px")}return r}var o;if(B.Hooks.registered[t]){var a=t,n=B.Hooks.getRoot(a);r===q&&(r=B.getPropertyValue(e,B.Names.prefixCheck(n)[0])),B.Normalizations.registered[n]&&(r=B.Normalizations.registered[n]("extract",e,r)),o=B.Hooks.extractValue(a,r)}else if(B.Normalizations.registered[t]){var i,s;"transform"!==(i=B.Normalizations.registered[t]("name",e))&&(s=c(e,B.Names.prefixCheck(i)[0]),B.Values.isCSSNullValue(s)&&B.Hooks.templates[t]&&(s=B.Hooks.templates[t][1])),o=B.Normalizations.registered[t]("extract",e,s)}if(!/^[\d-]/.test(o))if(W(e)&&W(e).isSVG&&B.Names.SVGAttribute(t))if(/^(height|width)$/i.test(t))try{o=e.getBBox()[t]}catch(e){o=0}else o=e.getAttribute(t);else o=c(e,B.Names.prefixCheck(t)[0]);return B.Values.isCSSNullValue(o)&&(o=0),2<=I.debug&&console.log("Get "+t+": "+o),o},setPropertyValue:function(e,t,r,o,a){var n=t;if("scroll"===t)a.container?a.container["scroll"+a.direction]=r:"Left"===a.direction?O.scrollTo(r,a.alternateValue):O.scrollTo(a.alternateValue,r);else if(B.Normalizations.registered[t]&&"transform"===B.Normalizations.registered[t]("name",e))B.Normalizations.registered[t]("inject",e,r),n="transform",r=W(e).transformCache[t];else{if(B.Hooks.registered[t]){var i=t,s=B.Hooks.getRoot(t);o=o||B.getPropertyValue(e,s),r=B.Hooks.injectValue(i,r,o),t=s}if(B.Normalizations.registered[t]&&(r=B.Normalizations.registered[t]("inject",e,r),t=B.Normalizations.registered[t]("name",e)),n=B.Names.prefixCheck(t)[0],p<=8)try{e.style[n]=r}catch(e){I.debug&&console.log("Browser does not support ["+r+"] for ["+n+"]")}else W(e)&&W(e).isSVG&&B.Names.SVGAttribute(t)?e.setAttribute(t,r):e.style[n]=r;2<=I.debug&&console.log("Set "+t+" ("+n+"): "+r)}return[n,r]},flushTransformCache:function(t){var r="";if((p||I.State.isAndroid&&!I.State.isChrome)&&W(t).isSVG){var e=function(e){return parseFloat(B.getPropertyValue(t,e))},o={translate:[e("translateX"),e("translateY")],skewX:[e("skewX")],skewY:[e("skewY")],scale:1!==e("scale")?[e("scale"),e("scale")]:[e("scaleX"),e("scaleY")],rotate:[e("rotateZ"),0,0]};$.each(W(t).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),o[e]&&(r+=e+"("+o[e].join(" ")+") ",delete o[e])})}else{var a,n;$.each(W(t).transformCache,function(e){if(a=W(t).transformCache[e],"transformPerspective"===e)return n=a,!0;9===p&&"rotateZ"===e&&(e="rotate"),r+=e+a+" "}),n&&(r="perspective"+n+" "+r)}B.setPropertyValue(t,"transform",r)}};B.Hooks.register(),B.Normalizations.register(),I.hook=function(e,o,a){var n=q;return e=y(e),$.each(e,function(e,t){if(W(t)===q&&I.init(t),a===q)n===q&&(n=I.CSS.getPropertyValue(t,o));else{var r=I.CSS.setPropertyValue(t,o,a);"transform"===r[0]&&I.CSS.flushTransformCache(t),n=r}}),n};var i=function e(){function t(){return r?N.promise||null:o}var r,o,a,k,A,F,n=arguments[0]&&(arguments[0].p||$.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||M.isString(arguments[0].properties));if(M.isWrapped(this)?(r=!1,a=0,o=k=this):(r=!0,a=1,k=n?arguments[0].elements||arguments[0].e:arguments[0]),k=y(k)){F=n?(A=arguments[0].properties||arguments[0].p,arguments[0].options||arguments[0].o):(A=arguments[a],arguments[a+1]);var E=k.length,j=0;if(!/^(stop|finish)$/i.test(A)&&!$.isPlainObject(F)){F={};for(var i=a+1;i<arguments.length;i++)M.isArray(arguments[i])||!/^(fast|normal|slow)$/i.test(arguments[i])&&!/^\d/.test(arguments[i])?M.isString(arguments[i])||M.isArray(arguments[i])?F.easing=arguments[i]:M.isFunction(arguments[i])&&(F.complete=arguments[i]):F.duration=arguments[i]}var H,N={promise:null,resolver:null,rejecter:null};switch(r&&I.Promise&&(N.promise=new I.Promise(function(e,t){N.resolver=e,N.rejecter=t})),A){case"scroll":H="scroll";break;case"reverse":H="reverse";break;case"finish":case"stop":$.each(k,function(e,t){W(t)&&W(t).delayTimer&&(clearTimeout(W(t).delayTimer.setTimeout),W(t).delayTimer.next&&W(t).delayTimer.next(),delete W(t).delayTimer)});var s=[];return $.each(I.State.calls,function(a,n){n&&$.each(n[1],function(e,r){var o=F===q?"":F;if(!0!==o&&n[2].queue!==o&&(F!==q||!1!==n[2].queue))return!0;$.each(k,function(e,t){t===r&&(!0!==F&&!M.isString(F)||($.each($.queue(t,M.isString(F)?F:""),function(e,t){M.isFunction(t)&&t(null,!0)}),$.queue(t,M.isString(F)?F:"",[])),"stop"===A?(W(t)&&W(t).tweensContainer&&!1!==o&&$.each(W(t).tweensContainer,function(e,t){t.endValue=t.currentValue}),s.push(a)):"finish"===A&&(n[2].duration=1))})})}),"stop"===A&&($.each(s,function(e,t){C(t,!0)}),N.promise&&N.resolver(k)),t();default:if(!$.isPlainObject(A)||M.isEmptyObject(A)){if(M.isString(A)&&I.Redirects[A]){var l=(p=$.extend({},F)).duration,u=p.delay||0;return!0===p.backwards&&(k=$.extend(!0,[],k).reverse()),$.each(k,function(e,t){parseFloat(p.stagger)?p.delay=u+parseFloat(p.stagger)*e:M.isFunction(p.stagger)&&(p.delay=u+p.stagger.call(t,e,E)),p.drag&&(p.duration=parseFloat(l)||(/^(callout|transition)/.test(A)?1e3:400),p.duration=Math.max(p.duration*(p.backwards?1-e/E:(e+1)/E),.75*p.duration,200)),I.Redirects[A].call(t,t,p||{},e,E,k,N.promise?N:q)}),t()}var c="Velocity: First argument ("+A+") was not a property map, a known action, or a registered redirect. Aborting.";return N.promise?N.rejecter(new Error(c)):console.log(c),t()}H="start"}var p,f,L={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},R=[];if($.each(k,function(e,t){M.isNode(t)&&function(){var w,V=this,C=$.extend({},I.defaults,F),T={};switch(W(V)===q&&I.init(V),parseFloat(C.delay)&&!1!==C.queue&&$.queue(V,C.queue,function(e){I.velocityQueueEntryFlag=!0,W(V).delayTimer={setTimeout:setTimeout(e,parseFloat(C.delay)),next:e}}),C.duration.toString().toLowerCase()){case"fast":C.duration=200;break;case"normal":C.duration=400;break;case"slow":C.duration=600;break;default:C.duration=parseFloat(C.duration)||1}function r(e){if(C.begin&&0===j)try{C.begin.call(k,k)}catch(e){setTimeout(function(){throw e},1)}if("scroll"===H){var t,r,o,a=/^x$/i.test(C.axis)?"Left":"Top",n=parseFloat(C.offset)||0;C.container?M.isWrapped(C.container)||M.isNode(C.container)?(C.container=C.container[0]||C.container,o=(t=C.container["scroll"+a])+$(V).position()[a.toLowerCase()]+n):C.container=null:(t=I.State.scrollAnchor[I.State["scrollProperty"+a]],r=I.State.scrollAnchor[I.State["scrollProperty"+("Left"===a?"Top":"Left")]],o=$(V).offset()[a.toLowerCase()]+n),T={scroll:{rootPropertyValue:!1,startValue:t,currentValue:t,endValue:o,unitType:"",easing:C.easing,scrollData:{container:C.container,direction:a,alternateValue:r}},element:V},I.debug&&console.log("tweensContainer (scroll): ",T.scroll,V)}else if("reverse"===H){if(!W(V).tweensContainer)return void $.dequeue(V,C.queue);"none"===W(V).opts.display&&(W(V).opts.display="auto"),"hidden"===W(V).opts.visibility&&(W(V).opts.visibility="visible"),W(V).opts.loop=!1,W(V).opts.begin=null,W(V).opts.complete=null,F.easing||delete C.easing,F.duration||delete C.duration,C=$.extend({},W(V).opts,C);var i=$.extend(!0,{},W(V).tweensContainer);for(var s in i)if("element"!==s){var l=i[s].startValue;i[s].startValue=i[s].currentValue=i[s].endValue,i[s].endValue=l,M.isEmptyObject(F)||(i[s].easing=C.easing),I.debug&&console.log("reverse tweensContainer ("+s+"): "+JSON.stringify(i[s]),V)}T=i}else if("start"===H){var p=function(e,t){var r=q,o=q,a=q;return M.isArray(e)?(r=e[0],!M.isArray(e[1])&&/^[\d-]/.test(e[1])||M.isFunction(e[1])||B.RegEx.isHex.test(e[1])?a=e[1]:(M.isString(e[1])&&!B.RegEx.isHex.test(e[1])||M.isArray(e[1]))&&(o=t?e[1]:G(e[1],C.duration),e[2]!==q&&(a=e[2]))):r=e,t||(o=o||C.easing),M.isFunction(r)&&(r=r.call(V,j,E)),M.isFunction(a)&&(a=a.call(V,j,E)),[r||0,o,a]};for(var u in W(V).tweensContainer&&!0===W(V).isAnimating&&(i=W(V).tweensContainer),$.each(A,function(e,t){if(RegExp("^"+B.Lists.colors.join("$|^")+"$").test(e)){var r=p(t,!0),o=r[0],a=r[1],n=r[2];if(B.RegEx.isHex.test(o)){for(var i=["Red","Green","Blue"],s=B.Values.hexToRgb(o),l=n?B.Values.hexToRgb(n):q,u=0;u<i.length;u++){var c=[s[u]];a&&c.push(a),l!==q&&c.push(l[u]),A[e+i[u]]=c}delete A[e]}}}),A){var c=function(e,t){var r,o;return o=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=B.Values.getUnitType(e)),[o,r]},f=p(A[u]),d=f[0],g=f[1],y=f[2];u=B.Names.camelCase(u);var m=B.Hooks.getRoot(u),h=!1;if(W(V).isSVG||"tween"===m||!1!==B.Names.prefixCheck(m)[1]||B.Normalizations.registered[m]!==q){(C.display!==q&&null!==C.display&&"none"!==C.display||C.visibility!==q&&"hidden"!==C.visibility)&&/opacity|filter/.test(u)&&!y&&0!==d&&(y=0),C._cacheValues&&i&&i[u]?(y===q&&(y=i[u].endValue+i[u].unitType),h=W(V).rootPropertyValueCache[m]):B.Hooks.registered[u]?y===q?(h=B.getPropertyValue(V,m),y=B.getPropertyValue(V,u,h)):h=B.Hooks.templates[m][1]:y===q&&(y=B.getPropertyValue(V,u));var v,b,x,S=!1;if(y=(v=c(u,y))[0],x=v[1],d=(v=c(u,d))[0].replace(/^([+-\/*])=/,function(e,t){return S=t,""}),b=v[1],y=parseFloat(y)||0,d=parseFloat(d)||0,"%"===b&&(/^(fontSize|lineHeight)$/.test(u)?(d/=100,b="em"):/^scale/.test(u)?(d/=100,b=""):/(Red|Green|Blue)$/i.test(u)&&(d=d/100*255,b="")),/[\/*]/.test(S))b=x;else if(x!==b&&0!==y)if(0===d)b=x;else{w=w||function(){var e={myParent:V.parentNode||z.body,position:B.getPropertyValue(V,"position"),fontSize:B.getPropertyValue(V,"fontSize")},t=e.position===L.lastPosition&&e.myParent===L.lastParent,r=e.fontSize===L.lastFontSize;L.lastParent=e.myParent,L.lastPosition=e.position,L.lastFontSize=e.fontSize;var o={};if(r&&t)o.emToPx=L.lastEmToPx,o.percentToPxWidth=L.lastPercentToPxWidth,o.percentToPxHeight=L.lastPercentToPxHeight;else{var a=W(V).isSVG?z.createElementNS("http://www.w3.org/2000/svg","rect"):z.createElement("div");I.init(a),e.myParent.appendChild(a),$.each(["overflow","overflowX","overflowY"],function(e,t){I.CSS.setPropertyValue(a,t,"hidden")}),I.CSS.setPropertyValue(a,"position",e.position),I.CSS.setPropertyValue(a,"fontSize",e.fontSize),I.CSS.setPropertyValue(a,"boxSizing","content-box"),$.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){I.CSS.setPropertyValue(a,t,"100%")}),I.CSS.setPropertyValue(a,"paddingLeft","100em"),o.percentToPxWidth=L.lastPercentToPxWidth=(parseFloat(B.getPropertyValue(a,"width",null,!0))||1)/100,o.percentToPxHeight=L.lastPercentToPxHeight=(parseFloat(B.getPropertyValue(a,"height",null,!0))||1)/100,o.emToPx=L.lastEmToPx=(parseFloat(B.getPropertyValue(a,"paddingLeft"))||1)/100,e.myParent.removeChild(a)}return null===L.remToPx&&(L.remToPx=parseFloat(B.getPropertyValue(z.body,"fontSize"))||16),null===L.vwToPx&&(L.vwToPx=parseFloat(O.innerWidth)/100,L.vhToPx=parseFloat(O.innerHeight)/100),o.remToPx=L.remToPx,o.vwToPx=L.vwToPx,o.vhToPx=L.vhToPx,1<=I.debug&&console.log("Unit ratios: "+JSON.stringify(o),V),o}();var P=/margin|padding|left|right|width|text|word|letter/i.test(u)||/X$/.test(u)||"x"===u?"x":"y";switch(x){case"%":y*="x"==P?w.percentToPxWidth:w.percentToPxHeight;break;case"px":break;default:y*=w[x+"ToPx"]}switch(b){case"%":y*=1/("x"==P?w.percentToPxWidth:w.percentToPxHeight);break;case"px":break;default:y*=1/w[b+"ToPx"]}}switch(S){case"+":d=y+d;break;case"-":d=y-d;break;case"*":d*=y;break;case"/":d=y/d}T[u]={rootPropertyValue:h,startValue:y,currentValue:y,endValue:d,unitType:b,easing:g},I.debug&&console.log("tweensContainer ("+u+"): "+JSON.stringify(T[u]),V)}else I.debug&&console.log("Skipping ["+m+"] due to a lack of browser support.")}T.element=V}T.element&&(B.Values.addClass(V,"velocity-animating"),R.push(T),""===C.queue&&(W(V).tweensContainer=T,W(V).opts=C),W(V).isAnimating=!0,j===E-1?(I.State.calls.push([R,k,C,null,N.resolver]),!1===I.State.isTicking&&(I.State.isTicking=!0,D())):j++)}!1!==I.mock&&(!0===I.mock?C.duration=C.delay=1:(C.duration*=parseFloat(I.mock)||1,C.delay*=parseFloat(I.mock)||1)),C.easing=G(C.easing,C.duration),C.begin&&!M.isFunction(C.begin)&&(C.begin=null),C.progress&&!M.isFunction(C.progress)&&(C.progress=null),C.complete&&!M.isFunction(C.complete)&&(C.complete=null),C.display!==q&&null!==C.display&&(C.display=C.display.toString().toLowerCase(),"auto"===C.display&&(C.display=I.CSS.Values.getDisplayType(V))),C.visibility!==q&&null!==C.visibility&&(C.visibility=C.visibility.toString().toLowerCase()),C.mobileHA=C.mobileHA&&I.State.isMobile&&!I.State.isGingerbread,!1===C.queue?C.delay?setTimeout(r,C.delay):r():$.queue(V,C.queue,function(e,t){if(!0===t)return N.promise&&N.resolver(k),!0;I.velocityQueueEntryFlag=!0,r()}),""!==C.queue&&"fx"!==C.queue||"inprogress"===$.queue(V)[0]||$.dequeue(V)}.call(t)}),(p=$.extend({},I.defaults,F)).loop=parseInt(p.loop),f=2*p.loop-1,p.loop)for(var d=0;d<f;d++){var g={delay:p.delay,progress:p.progress};d===f-1&&(g.display=p.display,g.visibility=p.visibility,g.complete=p.complete),e(k,"reverse",g)}return t()}};(I=$.extend(i,I)).animate=i;var V=O.requestAnimationFrame||t;return I.State.isMobile||z.hidden===q||z.addEventListener("visibilitychange",function(){z.hidden?(V=function(e){return setTimeout(function(){e(!0)},16)},D()):V=O.requestAnimationFrame||t}),e.Velocity=I,e!==O&&(e.fn.velocity=i,e.fn.velocity.defaults=I.defaults),$.each(["Down","Up"],function(e,p){I.Redirects["slide"+p]=function(r,e,t,o,a,n){var i=$.extend({},e),s=i.begin,l=i.complete,u={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},c={};i.display===q&&(i.display="Down"===p?"inline"===I.CSS.Values.getDisplayType(r)?"inline-block":"block":"none"),i.begin=function(){for(var e in s&&s.call(a,a),u){c[e]=r.style[e];var t=I.CSS.getPropertyValue(r,e);u[e]="Down"===p?[t,0]:[0,t]}c.overflow=r.style.overflow,r.style.overflow="hidden"},i.complete=function(){for(var e in c)r.style[e]=c[e];l&&l.call(a,a),n&&n.resolver(a)},I(r,u,i)}}),$.each(["In","Out"],function(e,u){I.Redirects["fade"+u]=function(e,t,r,o,a,n){var i=$.extend({},t),s={opacity:"In"===u?1:0},l=i.complete;i.complete=r!==o-1?i.begin=null:function(){l&&l.call(a,a),n&&n.resolver(a)},i.display===q&&(i.display="In"===u?"auto":"none"),I(this,s,i)}}),I}function W(e){var t=$.data(e,"velocity");return null===t?q:t}function s(i,t,s,r){var l=4,u=1e-7,c=10,p=11,f=1/(p-1),e="Float32Array"in O;if(4!==arguments.length)return!1;for(var o=0;o<4;++o)if("number"!=typeof arguments[o]||isNaN(arguments[o])||!isFinite(arguments[o]))return!1;i=Math.min(i,1),s=Math.min(s,1),i=Math.max(i,0),s=Math.max(s,0);var d=e?new Float32Array(p):new Array(p);function a(e,t){return 1-3*t+3*e}function n(e,t){return 3*t-6*e}function g(e){return 3*e}function y(e,t,r){return((a(t,r)*e+n(t,r))*e+g(t))*e}function m(e,t,r){return 3*a(t,r)*e*e+2*n(t,r)*e+g(t)}function h(e){for(var t=0,r=1,o=p-1;r!=o&&d[r]<=e;++r)t+=f;var a=t+(e-d[--r])/(d[r+1]-d[r])*f,n=m(a,i,s);return.001<=n?function(e,t){for(var r=0;r<l;++r){var o=m(t,i,s);if(0===o)return t;t-=(y(t,i,s)-e)/o}return t}(e,a):0==n?a:function(e,t,r){for(var o,a,n=0;0<(o=y(a=t+(r-t)/2,i,s)-e)?r=a:t=a,Math.abs(o)>u&&++n<c;);return a}(e,t,t+f)}var v=!1;function b(){v=!0,i==t&&s==r||function(){for(var e=0;e<p;++e)d[e]=y(e*f,i,s)}()}function x(e){return v||b(),i===t&&s===r?e:0===e?0:1===e?1:y(h(e),t,r)}x.getControlPoints=function(){return[{x:i,y:t},{x:s,y:r}]};var S="generateBezier("+[i,t,s,r]+")";return x.toString=function(){return S},x}function v(e){return-e.tension*e.x-e.friction*e.v}function b(e,t,r){var o={x:e.x+r.dx*t,v:e.v+r.dv*t,tension:e.tension,friction:e.friction};return{dx:o.v,dv:v(o)}}function G(e,t){var r=e;return M.isString(e)?I.Easings[e]||(r=!1):r=M.isArray(e)&&1===e.length?function(t){return function(e){return Math.round(e*t)*(1/t)}}.apply(null,e):M.isArray(e)&&2===e.length?n.apply(null,e.concat([t])):!(!M.isArray(e)||4!==e.length)&&s.apply(null,e),!1===r&&(r=I.Easings[I.defaults.easing]?I.defaults.easing:a),r}function D(e){if(e){var t=(new Date).getTime(),r=I.State.calls.length;1e4<r&&(I.State.calls=function(e){for(var t=-1,r=e?e.length:0,o=[];++t<r;){var a=e[t];a&&o.push(a)}return o}(I.State.calls));for(var o=0;o<r;o++)if(I.State.calls[o]){var a=I.State.calls[o],n=a[0],i=a[2],s=a[3],l=!!s,u=null;s||(s=I.State.calls[o][3]=t-16);for(var c=Math.min((t-s)/i.duration,1),p=0,f=n.length;p<f;p++){var d=n[p],g=d.element;if(W(g)){var y=!1;if(i.display!==q&&null!==i.display&&"none"!==i.display){if("flex"===i.display){$.each(["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"],function(e,t){B.setPropertyValue(g,"display",t)})}B.setPropertyValue(g,"display",i.display)}for(var m in i.visibility!==q&&"hidden"!==i.visibility&&B.setPropertyValue(g,"visibility",i.visibility),d)if("element"!==m){var h,v=d[m],b=M.isString(v.easing)?I.Easings[v.easing]:v.easing;if(1===c)h=v.endValue;else{var x=v.endValue-v.startValue;if(h=v.startValue+x*b(c,i,x),!l&&h===v.currentValue)continue}if(v.currentValue=h,"tween"===m)u=h;else{if(B.Hooks.registered[m]){var S=B.Hooks.getRoot(m),P=W(g).rootPropertyValueCache[S];P&&(v.rootPropertyValue=P)}var w=B.setPropertyValue(g,m,v.currentValue+(0===parseFloat(h)?"":v.unitType),v.rootPropertyValue,v.scrollData);B.Hooks.registered[m]&&(B.Normalizations.registered[S]?W(g).rootPropertyValueCache[S]=B.Normalizations.registered[S]("extract",null,w[1]):W(g).rootPropertyValueCache[S]=w[1]),"transform"===w[0]&&(y=!0)}}i.mobileHA&&W(g).transformCache.translate3d===q&&(W(g).transformCache.translate3d="(0px, 0px, 0px)",y=!0),y&&B.flushTransformCache(g)}}i.display!==q&&"none"!==i.display&&(I.State.calls[o][2].display=!1),i.visibility!==q&&"hidden"!==i.visibility&&(I.State.calls[o][2].visibility=!1),i.progress&&i.progress.call(a[1],a[1],c,Math.max(0,s+i.duration-t),s,u),1===c&&C(o)}}I.State.isTicking&&V(D)}function C(e,t){if(!I.State.calls[e])return!1;for(var r=I.State.calls[e][0],o=I.State.calls[e][1],a=I.State.calls[e][2],n=I.State.calls[e][4],i=!1,s=0,l=r.length;s<l;s++){var u=r[s].element;if(t||a.loop||("none"===a.display&&B.setPropertyValue(u,"display",a.display),"hidden"===a.visibility&&B.setPropertyValue(u,"visibility",a.visibility)),!0!==a.loop&&($.queue(u)[1]===q||!/\.velocityQueueEntryFlag/i.test($.queue(u)[1]))&&W(u)){W(u).isAnimating=!1;var c=!(W(u).rootPropertyValueCache={});$.each(B.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,o=W(u).transformCache[t];W(u).transformCache[t]!==q&&new RegExp("^\\("+r+"[^.]").test(o)&&(c=!0,delete W(u).transformCache[t])}),a.mobileHA&&(c=!0,delete W(u).transformCache.translate3d),c&&B.flushTransformCache(u),B.Values.removeClass(u,"velocity-animating")}if(!t&&a.complete&&!a.loop&&s===l-1)try{a.complete.call(o,o)}catch(e){setTimeout(function(){throw e},1)}n&&!0!==a.loop&&n(o),W(u)&&!0===a.loop&&!t&&($.each(W(u).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),I(u,"reverse",{loop:!0,delay:a.delay})),!1!==a.queue&&$.dequeue(u,a.queue)}I.State.calls[e]=!1;for(var p=0,f=I.State.calls.length;p<f;p++)if(!1!==I.State.calls[p]){i=!0;break}!1===i&&(I.State.isTicking=!1,delete I.State.calls,I.State.calls=[])}jQuery.fn.velocity=jQuery.fn.animate}(window.jQuery||window.Zepto||window,window,document)});