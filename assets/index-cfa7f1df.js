var rA=Object.defineProperty;var iA=(e,t,n)=>t in e?rA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ef=(e,t,n)=>(iA(e,typeof t!="symbol"?t+"":t,n),n);function sA(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Id(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qE={exports:{}},xd={},YE={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rl=Symbol.for("react.element"),oA=Symbol.for("react.portal"),aA=Symbol.for("react.fragment"),lA=Symbol.for("react.strict_mode"),uA=Symbol.for("react.profiler"),cA=Symbol.for("react.provider"),dA=Symbol.for("react.context"),hA=Symbol.for("react.forward_ref"),fA=Symbol.for("react.suspense"),pA=Symbol.for("react.memo"),mA=Symbol.for("react.lazy"),N_=Symbol.iterator;function gA(e){return e===null||typeof e!="object"?null:(e=N_&&e[N_]||e["@@iterator"],typeof e=="function"?e:null)}var QE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},XE=Object.assign,JE={};function Po(e,t,n){this.props=e,this.context=t,this.refs=JE,this.updater=n||QE}Po.prototype.isReactComponent={};Po.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Po.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ZE(){}ZE.prototype=Po.prototype;function yg(e,t,n){this.props=e,this.context=t,this.refs=JE,this.updater=n||QE}var vg=yg.prototype=new ZE;vg.constructor=yg;XE(vg,Po.prototype);vg.isPureReactComponent=!0;var D_=Array.isArray,eS=Object.prototype.hasOwnProperty,_g={current:null},tS={key:!0,ref:!0,__self:!0,__source:!0};function nS(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)eS.call(t,r)&&!tS.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Rl,type:e,key:s,ref:o,props:i,_owner:_g.current}}function yA(e,t){return{$$typeof:Rl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function wg(e){return typeof e=="object"&&e!==null&&e.$$typeof===Rl}function vA(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $_=/\/+/g;function tf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vA(""+e.key):t.toString(36)}function Lu(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Rl:case oA:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+tf(o,0):r,D_(i)?(n="",e!=null&&(n=e.replace($_,"$&/")+"/"),Lu(i,t,n,"",function(u){return u})):i!=null&&(wg(i)&&(i=yA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace($_,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",D_(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+tf(s,a);o+=Lu(s,t,n,l,i)}else if(l=gA(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+tf(s,a++),o+=Lu(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function su(e,t,n){if(e==null)return e;var r=[],i=0;return Lu(e,r,"","",function(s){return t.call(n,s,i++)}),r}function _A(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _t={current:null},Mu={transition:null},wA={ReactCurrentDispatcher:_t,ReactCurrentBatchConfig:Mu,ReactCurrentOwner:_g};Q.Children={map:su,forEach:function(e,t,n){su(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return su(e,function(){t++}),t},toArray:function(e){return su(e,function(t){return t})||[]},only:function(e){if(!wg(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=Po;Q.Fragment=aA;Q.Profiler=uA;Q.PureComponent=yg;Q.StrictMode=lA;Q.Suspense=fA;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wA;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=XE({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=_g.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)eS.call(t,l)&&!tS.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Rl,type:e.type,key:i,ref:s,props:r,_owner:o}};Q.createContext=function(e){return e={$$typeof:dA,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cA,_context:e},e.Consumer=e};Q.createElement=nS;Q.createFactory=function(e){var t=nS.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:hA,render:e}};Q.isValidElement=wg;Q.lazy=function(e){return{$$typeof:mA,_payload:{_status:-1,_result:e},_init:_A}};Q.memo=function(e,t){return{$$typeof:pA,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=Mu.transition;Mu.transition={};try{e()}finally{Mu.transition=t}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(e,t){return _t.current.useCallback(e,t)};Q.useContext=function(e){return _t.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return _t.current.useDeferredValue(e)};Q.useEffect=function(e,t){return _t.current.useEffect(e,t)};Q.useId=function(){return _t.current.useId()};Q.useImperativeHandle=function(e,t,n){return _t.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return _t.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return _t.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return _t.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return _t.current.useReducer(e,t,n)};Q.useRef=function(e){return _t.current.useRef(e)};Q.useState=function(e){return _t.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return _t.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return _t.current.useTransition()};Q.version="18.2.0";YE.exports=Q;var w=YE.exports;const Lt=Id(w),fp=sA({__proto__:null,default:Lt},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var EA=w,SA=Symbol.for("react.element"),CA=Symbol.for("react.fragment"),TA=Object.prototype.hasOwnProperty,IA=EA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xA={key:!0,ref:!0,__self:!0,__source:!0};function rS(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)TA.call(t,r)&&!xA.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:SA,type:e,key:s,ref:o,props:i,_owner:IA.current}}xd.Fragment=CA;xd.jsx=rS;xd.jsxs=rS;qE.exports=xd;var k=qE.exports,pp={},iS={exports:{}},Ht={},sS={exports:{}},oS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,L){var B=b.length;b.push(L);e:for(;0<B;){var ee=B-1>>>1,X=b[ee];if(0<i(X,L))b[ee]=L,b[B]=X,B=ee;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var L=b[0],B=b.pop();if(B!==L){b[0]=B;e:for(var ee=0,X=b.length,Sn=X>>>1;ee<Sn;){var ft=2*(ee+1)-1,pt=b[ft],tt=ft+1,Dt=b[tt];if(0>i(pt,B))tt<X&&0>i(Dt,pt)?(b[ee]=Dt,b[tt]=B,ee=tt):(b[ee]=pt,b[ft]=B,ee=ft);else if(tt<X&&0>i(Dt,B))b[ee]=Dt,b[tt]=B,ee=tt;else break e}}return L}function i(b,L){var B=b.sortIndex-L.sortIndex;return B!==0?B:b.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,f=!1,g=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(b){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=b)r(u),L.sortIndex=L.expirationTime,t(l,L);else break;L=n(u)}}function _(b){if(v=!1,y(b),!g)if(n(l)!==null)g=!0,Ci(I);else{var L=n(u);L!==null&&Bn(_,L.startTime-b)}}function I(b,L){g=!1,v&&(v=!1,m(x),x=-1),f=!0;var B=h;try{for(y(L),d=n(l);d!==null&&(!(d.expirationTime>L)||b&&!H());){var ee=d.callback;if(typeof ee=="function"){d.callback=null,h=d.priorityLevel;var X=ee(d.expirationTime<=L);L=e.unstable_now(),typeof X=="function"?d.callback=X:d===n(l)&&r(l),y(L)}else r(l);d=n(l)}if(d!==null)var Sn=!0;else{var ft=n(u);ft!==null&&Bn(_,ft.startTime-L),Sn=!1}return Sn}finally{d=null,h=B,f=!1}}var E=!1,C=null,x=-1,$=5,j=-1;function H(){return!(e.unstable_now()-j<$)}function Ke(){if(C!==null){var b=e.unstable_now();j=b;var L=!0;try{L=C(!0,b)}finally{L?Te():(E=!1,C=null)}}else E=!1}var Te;if(typeof p=="function")Te=function(){p(Ke)};else if(typeof MessageChannel<"u"){var Nt=new MessageChannel,Ss=Nt.port2;Nt.port1.onmessage=Ke,Te=function(){Ss.postMessage(null)}}else Te=function(){S(Ke,0)};function Ci(b){C=b,E||(E=!0,Te())}function Bn(b,L){x=S(function(){b(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){g||f||(g=!0,Ci(I))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(b){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var B=h;h=L;try{return b()}finally{h=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,L){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var B=h;h=b;try{return L()}finally{h=B}},e.unstable_scheduleCallback=function(b,L,B){var ee=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ee+B:ee):B=ee,b){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=B+X,b={id:c++,callback:L,priorityLevel:b,startTime:B,expirationTime:X,sortIndex:-1},B>ee?(b.sortIndex=B,t(u,b),n(l)===null&&b===n(u)&&(v?(m(x),x=-1):v=!0,Bn(_,B-ee))):(b.sortIndex=X,t(l,b),g||f||(g=!0,Ci(I))),b},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(b){var L=h;return function(){var B=h;h=L;try{return b.apply(this,arguments)}finally{h=B}}}})(oS);sS.exports=oS;var kA=sS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aS=w,Bt=kA;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lS=new Set,Ma={};function cs(e,t){ao(e,t),ao(e+"Capture",t)}function ao(e,t){for(Ma[e]=t,e=0;e<t.length;e++)lS.add(t[e])}var ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mp=Object.prototype.hasOwnProperty,PA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,L_={},M_={};function RA(e){return mp.call(M_,e)?!0:mp.call(L_,e)?!1:PA.test(e)?M_[e]=!0:(L_[e]=!0,!1)}function AA(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function bA(e,t,n,r){if(t===null||typeof t>"u"||AA(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function wt(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){et[e]=new wt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];et[t]=new wt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){et[e]=new wt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){et[e]=new wt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){et[e]=new wt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){et[e]=new wt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){et[e]=new wt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){et[e]=new wt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){et[e]=new wt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Eg=/[\-:]([a-z])/g;function Sg(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Eg,Sg);et[t]=new wt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Eg,Sg);et[t]=new wt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Eg,Sg);et[t]=new wt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){et[e]=new wt(e,1,!1,e.toLowerCase(),null,!1,!1)});et.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){et[e]=new wt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Cg(e,t,n,r){var i=et.hasOwnProperty(t)?et[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(bA(t,n,i,r)&&(n=null),r||i===null?RA(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var vr=aS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ou=Symbol.for("react.element"),As=Symbol.for("react.portal"),bs=Symbol.for("react.fragment"),Tg=Symbol.for("react.strict_mode"),gp=Symbol.for("react.profiler"),uS=Symbol.for("react.provider"),cS=Symbol.for("react.context"),Ig=Symbol.for("react.forward_ref"),yp=Symbol.for("react.suspense"),vp=Symbol.for("react.suspense_list"),xg=Symbol.for("react.memo"),Rr=Symbol.for("react.lazy"),dS=Symbol.for("react.offscreen"),F_=Symbol.iterator;function Ho(e){return e===null||typeof e!="object"?null:(e=F_&&e[F_]||e["@@iterator"],typeof e=="function"?e:null)}var Ce=Object.assign,nf;function oa(e){if(nf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);nf=t&&t[1]||""}return`
`+nf+e}var rf=!1;function sf(e,t){if(!e||rf)return"";rf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{rf=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?oa(e):""}function OA(e){switch(e.tag){case 5:return oa(e.type);case 16:return oa("Lazy");case 13:return oa("Suspense");case 19:return oa("SuspenseList");case 0:case 2:case 15:return e=sf(e.type,!1),e;case 11:return e=sf(e.type.render,!1),e;case 1:return e=sf(e.type,!0),e;default:return""}}function _p(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bs:return"Fragment";case As:return"Portal";case gp:return"Profiler";case Tg:return"StrictMode";case yp:return"Suspense";case vp:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cS:return(e.displayName||"Context")+".Consumer";case uS:return(e._context.displayName||"Context")+".Provider";case Ig:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xg:return t=e.displayName||null,t!==null?t:_p(e.type)||"Memo";case Rr:t=e._payload,e=e._init;try{return _p(e(t))}catch{}}return null}function NA(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _p(t);case 8:return t===Tg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ii(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hS(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function DA(e){var t=hS(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function au(e){e._valueTracker||(e._valueTracker=DA(e))}function fS(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=hS(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function uc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wp(e,t){var n=t.checked;return Ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function j_(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ii(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pS(e,t){t=t.checked,t!=null&&Cg(e,"checked",t,!1)}function Ep(e,t){pS(e,t);var n=ii(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Sp(e,t.type,n):t.hasOwnProperty("defaultValue")&&Sp(e,t.type,ii(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function U_(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Sp(e,t,n){(t!=="number"||uc(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var aa=Array.isArray;function Gs(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ii(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Cp(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return Ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function z_(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(aa(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ii(n)}}function mS(e,t){var n=ii(t.value),r=ii(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function B_(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gS(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tp(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gS(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lu,yS=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(lu=lu||document.createElement("div"),lu.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lu.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ga={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$A=["Webkit","ms","Moz","O"];Object.keys(ga).forEach(function(e){$A.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ga[t]=ga[e]})});function vS(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ga.hasOwnProperty(e)&&ga[e]?(""+t).trim():t+"px"}function _S(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vS(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var LA=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ip(e,t){if(t){if(LA[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function xp(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kp=null;function kg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pp=null,Ks=null,qs=null;function V_(e){if(e=Ol(e)){if(typeof Pp!="function")throw Error(P(280));var t=e.stateNode;t&&(t=bd(t),Pp(e.stateNode,e.type,t))}}function wS(e){Ks?qs?qs.push(e):qs=[e]:Ks=e}function ES(){if(Ks){var e=Ks,t=qs;if(qs=Ks=null,V_(e),t)for(e=0;e<t.length;e++)V_(t[e])}}function SS(e,t){return e(t)}function CS(){}var of=!1;function TS(e,t,n){if(of)return e(t,n);of=!0;try{return SS(e,t,n)}finally{of=!1,(Ks!==null||qs!==null)&&(CS(),ES())}}function ja(e,t){var n=e.stateNode;if(n===null)return null;var r=bd(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Rp=!1;if(ur)try{var Go={};Object.defineProperty(Go,"passive",{get:function(){Rp=!0}}),window.addEventListener("test",Go,Go),window.removeEventListener("test",Go,Go)}catch{Rp=!1}function MA(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ya=!1,cc=null,dc=!1,Ap=null,FA={onError:function(e){ya=!0,cc=e}};function jA(e,t,n,r,i,s,o,a,l){ya=!1,cc=null,MA.apply(FA,arguments)}function UA(e,t,n,r,i,s,o,a,l){if(jA.apply(this,arguments),ya){if(ya){var u=cc;ya=!1,cc=null}else throw Error(P(198));dc||(dc=!0,Ap=u)}}function ds(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function IS(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function W_(e){if(ds(e)!==e)throw Error(P(188))}function zA(e){var t=e.alternate;if(!t){if(t=ds(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return W_(i),e;if(s===r)return W_(i),t;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function xS(e){return e=zA(e),e!==null?kS(e):null}function kS(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=kS(e);if(t!==null)return t;e=e.sibling}return null}var PS=Bt.unstable_scheduleCallback,H_=Bt.unstable_cancelCallback,BA=Bt.unstable_shouldYield,VA=Bt.unstable_requestPaint,ke=Bt.unstable_now,WA=Bt.unstable_getCurrentPriorityLevel,Pg=Bt.unstable_ImmediatePriority,RS=Bt.unstable_UserBlockingPriority,hc=Bt.unstable_NormalPriority,HA=Bt.unstable_LowPriority,AS=Bt.unstable_IdlePriority,kd=null,Nn=null;function GA(e){if(Nn&&typeof Nn.onCommitFiberRoot=="function")try{Nn.onCommitFiberRoot(kd,e,void 0,(e.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:YA,KA=Math.log,qA=Math.LN2;function YA(e){return e>>>=0,e===0?32:31-(KA(e)/qA|0)|0}var uu=64,cu=4194304;function la(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fc(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=la(a):(s&=o,s!==0&&(r=la(s)))}else o=n&~i,o!==0?r=la(o):s!==0&&(r=la(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-mn(t),i=1<<n,r|=e[n],t&=~i;return r}function QA(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function XA(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-mn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=QA(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function bp(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bS(){var e=uu;return uu<<=1,!(uu&4194240)&&(uu=64),e}function af(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Al(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mn(t),e[t]=n}function JA(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-mn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Rg(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-mn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var oe=0;function OS(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var NS,Ag,DS,$S,LS,Op=!1,du=[],Br=null,Vr=null,Wr=null,Ua=new Map,za=new Map,Or=[],ZA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function G_(e,t){switch(e){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":Wr=null;break;case"pointerover":case"pointerout":Ua.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":za.delete(t.pointerId)}}function Ko(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Ol(t),t!==null&&Ag(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function eb(e,t,n,r,i){switch(t){case"focusin":return Br=Ko(Br,e,t,n,r,i),!0;case"dragenter":return Vr=Ko(Vr,e,t,n,r,i),!0;case"mouseover":return Wr=Ko(Wr,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ua.set(s,Ko(Ua.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,za.set(s,Ko(za.get(s)||null,e,t,n,r,i)),!0}return!1}function MS(e){var t=bi(e.target);if(t!==null){var n=ds(t);if(n!==null){if(t=n.tag,t===13){if(t=IS(n),t!==null){e.blockedOn=t,LS(e.priority,function(){DS(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Np(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);kp=r,n.target.dispatchEvent(r),kp=null}else return t=Ol(n),t!==null&&Ag(t),e.blockedOn=n,!1;t.shift()}return!0}function K_(e,t,n){Fu(e)&&n.delete(t)}function tb(){Op=!1,Br!==null&&Fu(Br)&&(Br=null),Vr!==null&&Fu(Vr)&&(Vr=null),Wr!==null&&Fu(Wr)&&(Wr=null),Ua.forEach(K_),za.forEach(K_)}function qo(e,t){e.blockedOn===t&&(e.blockedOn=null,Op||(Op=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,tb)))}function Ba(e){function t(i){return qo(i,e)}if(0<du.length){qo(du[0],e);for(var n=1;n<du.length;n++){var r=du[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Br!==null&&qo(Br,e),Vr!==null&&qo(Vr,e),Wr!==null&&qo(Wr,e),Ua.forEach(t),za.forEach(t),n=0;n<Or.length;n++)r=Or[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Or.length&&(n=Or[0],n.blockedOn===null);)MS(n),n.blockedOn===null&&Or.shift()}var Ys=vr.ReactCurrentBatchConfig,pc=!0;function nb(e,t,n,r){var i=oe,s=Ys.transition;Ys.transition=null;try{oe=1,bg(e,t,n,r)}finally{oe=i,Ys.transition=s}}function rb(e,t,n,r){var i=oe,s=Ys.transition;Ys.transition=null;try{oe=4,bg(e,t,n,r)}finally{oe=i,Ys.transition=s}}function bg(e,t,n,r){if(pc){var i=Np(e,t,n,r);if(i===null)yf(e,t,r,mc,n),G_(e,r);else if(eb(i,e,t,n,r))r.stopPropagation();else if(G_(e,r),t&4&&-1<ZA.indexOf(e)){for(;i!==null;){var s=Ol(i);if(s!==null&&NS(s),s=Np(e,t,n,r),s===null&&yf(e,t,r,mc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else yf(e,t,r,null,n)}}var mc=null;function Np(e,t,n,r){if(mc=null,e=kg(r),e=bi(e),e!==null)if(t=ds(e),t===null)e=null;else if(n=t.tag,n===13){if(e=IS(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return mc=e,null}function FS(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(WA()){case Pg:return 1;case RS:return 4;case hc:case HA:return 16;case AS:return 536870912;default:return 16}default:return 16}}var Fr=null,Og=null,ju=null;function jS(){if(ju)return ju;var e,t=Og,n=t.length,r,i="value"in Fr?Fr.value:Fr.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return ju=i.slice(e,1<r?1-r:void 0)}function Uu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hu(){return!0}function q_(){return!1}function Gt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?hu:q_,this.isPropagationStopped=q_,this}return Ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hu)},persist:function(){},isPersistent:hu}),t}var Ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ng=Gt(Ro),bl=Ce({},Ro,{view:0,detail:0}),ib=Gt(bl),lf,uf,Yo,Pd=Ce({},bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yo&&(Yo&&e.type==="mousemove"?(lf=e.screenX-Yo.screenX,uf=e.screenY-Yo.screenY):uf=lf=0,Yo=e),lf)},movementY:function(e){return"movementY"in e?e.movementY:uf}}),Y_=Gt(Pd),sb=Ce({},Pd,{dataTransfer:0}),ob=Gt(sb),ab=Ce({},bl,{relatedTarget:0}),cf=Gt(ab),lb=Ce({},Ro,{animationName:0,elapsedTime:0,pseudoElement:0}),ub=Gt(lb),cb=Ce({},Ro,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),db=Gt(cb),hb=Ce({},Ro,{data:0}),Q_=Gt(hb),fb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mb[e])?!!t[e]:!1}function Dg(){return gb}var yb=Ce({},bl,{key:function(e){if(e.key){var t=fb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Uu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dg,charCode:function(e){return e.type==="keypress"?Uu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Uu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vb=Gt(yb),_b=Ce({},Pd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),X_=Gt(_b),wb=Ce({},bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dg}),Eb=Gt(wb),Sb=Ce({},Ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cb=Gt(Sb),Tb=Ce({},Pd,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ib=Gt(Tb),xb=[9,13,27,32],$g=ur&&"CompositionEvent"in window,va=null;ur&&"documentMode"in document&&(va=document.documentMode);var kb=ur&&"TextEvent"in window&&!va,US=ur&&(!$g||va&&8<va&&11>=va),J_=String.fromCharCode(32),Z_=!1;function zS(e,t){switch(e){case"keyup":return xb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function BS(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Os=!1;function Pb(e,t){switch(e){case"compositionend":return BS(t);case"keypress":return t.which!==32?null:(Z_=!0,J_);case"textInput":return e=t.data,e===J_&&Z_?null:e;default:return null}}function Rb(e,t){if(Os)return e==="compositionend"||!$g&&zS(e,t)?(e=jS(),ju=Og=Fr=null,Os=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return US&&t.locale!=="ko"?null:t.data;default:return null}}var Ab={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function e0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ab[e.type]:t==="textarea"}function VS(e,t,n,r){wS(r),t=gc(t,"onChange"),0<t.length&&(n=new Ng("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _a=null,Va=null;function bb(e){eC(e,0)}function Rd(e){var t=$s(e);if(fS(t))return e}function Ob(e,t){if(e==="change")return t}var WS=!1;if(ur){var df;if(ur){var hf="oninput"in document;if(!hf){var t0=document.createElement("div");t0.setAttribute("oninput","return;"),hf=typeof t0.oninput=="function"}df=hf}else df=!1;WS=df&&(!document.documentMode||9<document.documentMode)}function n0(){_a&&(_a.detachEvent("onpropertychange",HS),Va=_a=null)}function HS(e){if(e.propertyName==="value"&&Rd(Va)){var t=[];VS(t,Va,e,kg(e)),TS(bb,t)}}function Nb(e,t,n){e==="focusin"?(n0(),_a=t,Va=n,_a.attachEvent("onpropertychange",HS)):e==="focusout"&&n0()}function Db(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rd(Va)}function $b(e,t){if(e==="click")return Rd(t)}function Lb(e,t){if(e==="input"||e==="change")return Rd(t)}function Mb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wn=typeof Object.is=="function"?Object.is:Mb;function Wa(e,t){if(wn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!mp.call(t,i)||!wn(e[i],t[i]))return!1}return!0}function r0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function i0(e,t){var n=r0(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=r0(n)}}function GS(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?GS(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function KS(){for(var e=window,t=uc();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=uc(e.document)}return t}function Lg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fb(e){var t=KS(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&GS(n.ownerDocument.documentElement,n)){if(r!==null&&Lg(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=i0(n,s);var o=i0(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jb=ur&&"documentMode"in document&&11>=document.documentMode,Ns=null,Dp=null,wa=null,$p=!1;function s0(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$p||Ns==null||Ns!==uc(r)||(r=Ns,"selectionStart"in r&&Lg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wa&&Wa(wa,r)||(wa=r,r=gc(Dp,"onSelect"),0<r.length&&(t=new Ng("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ns)))}function fu(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ds={animationend:fu("Animation","AnimationEnd"),animationiteration:fu("Animation","AnimationIteration"),animationstart:fu("Animation","AnimationStart"),transitionend:fu("Transition","TransitionEnd")},ff={},qS={};ur&&(qS=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Ad(e){if(ff[e])return ff[e];if(!Ds[e])return e;var t=Ds[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qS)return ff[e]=t[n];return e}var YS=Ad("animationend"),QS=Ad("animationiteration"),XS=Ad("animationstart"),JS=Ad("transitionend"),ZS=new Map,o0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fi(e,t){ZS.set(e,t),cs(t,[e])}for(var pf=0;pf<o0.length;pf++){var mf=o0[pf],Ub=mf.toLowerCase(),zb=mf[0].toUpperCase()+mf.slice(1);fi(Ub,"on"+zb)}fi(YS,"onAnimationEnd");fi(QS,"onAnimationIteration");fi(XS,"onAnimationStart");fi("dblclick","onDoubleClick");fi("focusin","onFocus");fi("focusout","onBlur");fi(JS,"onTransitionEnd");ao("onMouseEnter",["mouseout","mouseover"]);ao("onMouseLeave",["mouseout","mouseover"]);ao("onPointerEnter",["pointerout","pointerover"]);ao("onPointerLeave",["pointerout","pointerover"]);cs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cs("onBeforeInput",["compositionend","keypress","textInput","paste"]);cs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bb=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function a0(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,UA(r,t,void 0,e),e.currentTarget=null}function eC(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;a0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;a0(i,a,u),s=l}}}if(dc)throw e=Ap,dc=!1,Ap=null,e}function fe(e,t){var n=t[Up];n===void 0&&(n=t[Up]=new Set);var r=e+"__bubble";n.has(r)||(tC(t,e,2,!1),n.add(r))}function gf(e,t,n){var r=0;t&&(r|=4),tC(n,e,r,t)}var pu="_reactListening"+Math.random().toString(36).slice(2);function Ha(e){if(!e[pu]){e[pu]=!0,lS.forEach(function(n){n!=="selectionchange"&&(Bb.has(n)||gf(n,!1,e),gf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pu]||(t[pu]=!0,gf("selectionchange",!1,t))}}function tC(e,t,n,r){switch(FS(t)){case 1:var i=nb;break;case 4:i=rb;break;default:i=bg}n=i.bind(null,t,n,e),i=void 0,!Rp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function yf(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=bi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}TS(function(){var u=s,c=kg(n),d=[];e:{var h=ZS.get(e);if(h!==void 0){var f=Ng,g=e;switch(e){case"keypress":if(Uu(n)===0)break e;case"keydown":case"keyup":f=vb;break;case"focusin":g="focus",f=cf;break;case"focusout":g="blur",f=cf;break;case"beforeblur":case"afterblur":f=cf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Y_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=ob;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=Eb;break;case YS:case QS:case XS:f=ub;break;case JS:f=Cb;break;case"scroll":f=ib;break;case"wheel":f=Ib;break;case"copy":case"cut":case"paste":f=db;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=X_}var v=(t&4)!==0,S=!v&&e==="scroll",m=v?h!==null?h+"Capture":null:h;v=[];for(var p=u,y;p!==null;){y=p;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,m!==null&&(_=ja(p,m),_!=null&&v.push(Ga(p,_,y)))),S)break;p=p.return}0<v.length&&(h=new f(h,g,null,n,c),d.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",h&&n!==kp&&(g=n.relatedTarget||n.fromElement)&&(bi(g)||g[cr]))break e;if((f||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,f?(g=n.relatedTarget||n.toElement,f=u,g=g?bi(g):null,g!==null&&(S=ds(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(f=null,g=u),f!==g)){if(v=Y_,_="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=X_,_="onPointerLeave",m="onPointerEnter",p="pointer"),S=f==null?h:$s(f),y=g==null?h:$s(g),h=new v(_,p+"leave",f,n,c),h.target=S,h.relatedTarget=y,_=null,bi(c)===u&&(v=new v(m,p+"enter",g,n,c),v.target=y,v.relatedTarget=S,_=v),S=_,f&&g)t:{for(v=f,m=g,p=0,y=v;y;y=Ts(y))p++;for(y=0,_=m;_;_=Ts(_))y++;for(;0<p-y;)v=Ts(v),p--;for(;0<y-p;)m=Ts(m),y--;for(;p--;){if(v===m||m!==null&&v===m.alternate)break t;v=Ts(v),m=Ts(m)}v=null}else v=null;f!==null&&l0(d,h,f,v,!1),g!==null&&S!==null&&l0(d,S,g,v,!0)}}e:{if(h=u?$s(u):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var I=Ob;else if(e0(h))if(WS)I=Lb;else{I=Db;var E=Nb}else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=$b);if(I&&(I=I(e,u))){VS(d,I,n,c);break e}E&&E(e,h,u),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Sp(h,"number",h.value)}switch(E=u?$s(u):window,e){case"focusin":(e0(E)||E.contentEditable==="true")&&(Ns=E,Dp=u,wa=null);break;case"focusout":wa=Dp=Ns=null;break;case"mousedown":$p=!0;break;case"contextmenu":case"mouseup":case"dragend":$p=!1,s0(d,n,c);break;case"selectionchange":if(jb)break;case"keydown":case"keyup":s0(d,n,c)}var C;if($g)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Os?zS(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(US&&n.locale!=="ko"&&(Os||x!=="onCompositionStart"?x==="onCompositionEnd"&&Os&&(C=jS()):(Fr=c,Og="value"in Fr?Fr.value:Fr.textContent,Os=!0)),E=gc(u,x),0<E.length&&(x=new Q_(x,e,null,n,c),d.push({event:x,listeners:E}),C?x.data=C:(C=BS(n),C!==null&&(x.data=C)))),(C=kb?Pb(e,n):Rb(e,n))&&(u=gc(u,"onBeforeInput"),0<u.length&&(c=new Q_("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}eC(d,t)})}function Ga(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gc(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ja(e,n),s!=null&&r.unshift(Ga(e,s,i)),s=ja(e,t),s!=null&&r.push(Ga(e,s,i))),e=e.return}return r}function Ts(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function l0(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ja(n,s),l!=null&&o.unshift(Ga(n,l,a))):i||(l=ja(n,s),l!=null&&o.push(Ga(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Vb=/\r\n?/g,Wb=/\u0000|\uFFFD/g;function u0(e){return(typeof e=="string"?e:""+e).replace(Vb,`
`).replace(Wb,"")}function mu(e,t,n){if(t=u0(t),u0(e)!==t&&n)throw Error(P(425))}function yc(){}var Lp=null,Mp=null;function Fp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jp=typeof setTimeout=="function"?setTimeout:void 0,Hb=typeof clearTimeout=="function"?clearTimeout:void 0,c0=typeof Promise=="function"?Promise:void 0,Gb=typeof queueMicrotask=="function"?queueMicrotask:typeof c0<"u"?function(e){return c0.resolve(null).then(e).catch(Kb)}:jp;function Kb(e){setTimeout(function(){throw e})}function vf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ba(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ba(t)}function Hr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function d0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ao=Math.random().toString(36).slice(2),Rn="__reactFiber$"+Ao,Ka="__reactProps$"+Ao,cr="__reactContainer$"+Ao,Up="__reactEvents$"+Ao,qb="__reactListeners$"+Ao,Yb="__reactHandles$"+Ao;function bi(e){var t=e[Rn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[cr]||n[Rn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=d0(e);e!==null;){if(n=e[Rn])return n;e=d0(e)}return t}e=n,n=e.parentNode}return null}function Ol(e){return e=e[Rn]||e[cr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $s(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function bd(e){return e[Ka]||null}var zp=[],Ls=-1;function pi(e){return{current:e}}function ve(e){0>Ls||(e.current=zp[Ls],zp[Ls]=null,Ls--)}function he(e,t){Ls++,zp[Ls]=e.current,e.current=t}var si={},dt=pi(si),kt=pi(!1),Gi=si;function lo(e,t){var n=e.type.contextTypes;if(!n)return si;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(e){return e=e.childContextTypes,e!=null}function vc(){ve(kt),ve(dt)}function h0(e,t,n){if(dt.current!==si)throw Error(P(168));he(dt,t),he(kt,n)}function nC(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,NA(e)||"Unknown",i));return Ce({},n,r)}function _c(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||si,Gi=dt.current,he(dt,e),he(kt,kt.current),!0}function f0(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=nC(e,t,Gi),r.__reactInternalMemoizedMergedChildContext=e,ve(kt),ve(dt),he(dt,e)):ve(kt),he(kt,n)}var Yn=null,Od=!1,_f=!1;function rC(e){Yn===null?Yn=[e]:Yn.push(e)}function Qb(e){Od=!0,rC(e)}function mi(){if(!_f&&Yn!==null){_f=!0;var e=0,t=oe;try{var n=Yn;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Yn=null,Od=!1}catch(i){throw Yn!==null&&(Yn=Yn.slice(e+1)),PS(Pg,mi),i}finally{oe=t,_f=!1}}return null}var Ms=[],Fs=0,wc=null,Ec=0,Yt=[],Qt=0,Ki=null,Xn=1,Jn="";function Ii(e,t){Ms[Fs++]=Ec,Ms[Fs++]=wc,wc=e,Ec=t}function iC(e,t,n){Yt[Qt++]=Xn,Yt[Qt++]=Jn,Yt[Qt++]=Ki,Ki=e;var r=Xn;e=Jn;var i=32-mn(r)-1;r&=~(1<<i),n+=1;var s=32-mn(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Xn=1<<32-mn(t)+i|n<<i|r,Jn=s+e}else Xn=1<<s|n<<i|r,Jn=e}function Mg(e){e.return!==null&&(Ii(e,1),iC(e,1,0))}function Fg(e){for(;e===wc;)wc=Ms[--Fs],Ms[Fs]=null,Ec=Ms[--Fs],Ms[Fs]=null;for(;e===Ki;)Ki=Yt[--Qt],Yt[Qt]=null,Jn=Yt[--Qt],Yt[Qt]=null,Xn=Yt[--Qt],Yt[Qt]=null}var zt=null,Mt=null,we=!1,un=null;function sC(e,t){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function p0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,zt=e,Mt=Hr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,zt=e,Mt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ki!==null?{id:Xn,overflow:Jn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,zt=e,Mt=null,!0):!1;default:return!1}}function Bp(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vp(e){if(we){var t=Mt;if(t){var n=t;if(!p0(e,t)){if(Bp(e))throw Error(P(418));t=Hr(n.nextSibling);var r=zt;t&&p0(e,t)?sC(r,n):(e.flags=e.flags&-4097|2,we=!1,zt=e)}}else{if(Bp(e))throw Error(P(418));e.flags=e.flags&-4097|2,we=!1,zt=e}}}function m0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;zt=e}function gu(e){if(e!==zt)return!1;if(!we)return m0(e),we=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fp(e.type,e.memoizedProps)),t&&(t=Mt)){if(Bp(e))throw oC(),Error(P(418));for(;t;)sC(e,t),t=Hr(t.nextSibling)}if(m0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Mt=Hr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Mt=null}}else Mt=zt?Hr(e.stateNode.nextSibling):null;return!0}function oC(){for(var e=Mt;e;)e=Hr(e.nextSibling)}function uo(){Mt=zt=null,we=!1}function jg(e){un===null?un=[e]:un.push(e)}var Xb=vr.ReactCurrentBatchConfig;function an(e,t){if(e&&e.defaultProps){t=Ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Sc=pi(null),Cc=null,js=null,Ug=null;function zg(){Ug=js=Cc=null}function Bg(e){var t=Sc.current;ve(Sc),e._currentValue=t}function Wp(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Qs(e,t){Cc=e,Ug=js=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(It=!0),e.firstContext=null)}function en(e){var t=e._currentValue;if(Ug!==e)if(e={context:e,memoizedValue:t,next:null},js===null){if(Cc===null)throw Error(P(308));js=e,Cc.dependencies={lanes:0,firstContext:e}}else js=js.next=e;return t}var Oi=null;function Vg(e){Oi===null?Oi=[e]:Oi.push(e)}function aC(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Vg(t)):(n.next=i.next,i.next=n),t.interleaved=n,dr(e,r)}function dr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ar=!1;function Wg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lC(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function sr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,dr(e,n)}return i=r.interleaved,i===null?(t.next=t,Vg(r)):(t.next=i.next,i.next=t),r.interleaved=t,dr(e,n)}function zu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Rg(e,n)}}function g0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Tc(e,t,n,r){var i=e.updateQueue;Ar=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,f=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,v=a;switch(h=t,f=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(f,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,h=typeof g=="function"?g.call(f,d,h):g,h==null)break e;d=Ce({},d,h);break e;case 2:Ar=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else f={eventTime:f,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=d):c=c.next=f,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Yi|=o,e.lanes=o,e.memoizedState=d}}function y0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var uC=new aS.Component().refs;function Hp(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Nd={isMounted:function(e){return(e=e._reactInternals)?ds(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=vt(),i=qr(e),s=sr(r,i);s.payload=t,n!=null&&(s.callback=n),t=Gr(e,s,i),t!==null&&(gn(t,e,i,r),zu(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=vt(),i=qr(e),s=sr(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Gr(e,s,i),t!==null&&(gn(t,e,i,r),zu(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=vt(),r=qr(e),i=sr(n,r);i.tag=2,t!=null&&(i.callback=t),t=Gr(e,i,r),t!==null&&(gn(t,e,r,n),zu(t,e,r))}};function v0(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Wa(n,r)||!Wa(i,s):!0}function cC(e,t,n){var r=!1,i=si,s=t.contextType;return typeof s=="object"&&s!==null?s=en(s):(i=Pt(t)?Gi:dt.current,r=t.contextTypes,s=(r=r!=null)?lo(e,i):si),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Nd,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function _0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Nd.enqueueReplaceState(t,t.state,null)}function Gp(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=uC,Wg(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=en(s):(s=Pt(t)?Gi:dt.current,i.context=lo(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Hp(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Nd.enqueueReplaceState(i,i.state,null),Tc(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Qo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===uC&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function yu(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function w0(e){var t=e._init;return t(e._payload)}function dC(e){function t(m,p){if(e){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Yr(m,p),m.index=0,m.sibling=null,m}function s(m,p,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=2,p):y):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,p,y,_){return p===null||p.tag!==6?(p=xf(y,m.mode,_),p.return=m,p):(p=i(p,y),p.return=m,p)}function l(m,p,y,_){var I=y.type;return I===bs?c(m,p,y.props.children,_,y.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Rr&&w0(I)===p.type)?(_=i(p,y.props),_.ref=Qo(m,p,y),_.return=m,_):(_=Ku(y.type,y.key,y.props,null,m.mode,_),_.ref=Qo(m,p,y),_.return=m,_)}function u(m,p,y,_){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=kf(y,m.mode,_),p.return=m,p):(p=i(p,y.children||[]),p.return=m,p)}function c(m,p,y,_,I){return p===null||p.tag!==7?(p=zi(y,m.mode,_,I),p.return=m,p):(p=i(p,y),p.return=m,p)}function d(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=xf(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ou:return y=Ku(p.type,p.key,p.props,null,m.mode,y),y.ref=Qo(m,null,p),y.return=m,y;case As:return p=kf(p,m.mode,y),p.return=m,p;case Rr:var _=p._init;return d(m,_(p._payload),y)}if(aa(p)||Ho(p))return p=zi(p,m.mode,y,null),p.return=m,p;yu(m,p)}return null}function h(m,p,y,_){var I=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return I!==null?null:a(m,p,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ou:return y.key===I?l(m,p,y,_):null;case As:return y.key===I?u(m,p,y,_):null;case Rr:return I=y._init,h(m,p,I(y._payload),_)}if(aa(y)||Ho(y))return I!==null?null:c(m,p,y,_,null);yu(m,y)}return null}function f(m,p,y,_,I){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(y)||null,a(p,m,""+_,I);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ou:return m=m.get(_.key===null?y:_.key)||null,l(p,m,_,I);case As:return m=m.get(_.key===null?y:_.key)||null,u(p,m,_,I);case Rr:var E=_._init;return f(m,p,y,E(_._payload),I)}if(aa(_)||Ho(_))return m=m.get(y)||null,c(p,m,_,I,null);yu(p,_)}return null}function g(m,p,y,_){for(var I=null,E=null,C=p,x=p=0,$=null;C!==null&&x<y.length;x++){C.index>x?($=C,C=null):$=C.sibling;var j=h(m,C,y[x],_);if(j===null){C===null&&(C=$);break}e&&C&&j.alternate===null&&t(m,C),p=s(j,p,x),E===null?I=j:E.sibling=j,E=j,C=$}if(x===y.length)return n(m,C),we&&Ii(m,x),I;if(C===null){for(;x<y.length;x++)C=d(m,y[x],_),C!==null&&(p=s(C,p,x),E===null?I=C:E.sibling=C,E=C);return we&&Ii(m,x),I}for(C=r(m,C);x<y.length;x++)$=f(C,m,x,y[x],_),$!==null&&(e&&$.alternate!==null&&C.delete($.key===null?x:$.key),p=s($,p,x),E===null?I=$:E.sibling=$,E=$);return e&&C.forEach(function(H){return t(m,H)}),we&&Ii(m,x),I}function v(m,p,y,_){var I=Ho(y);if(typeof I!="function")throw Error(P(150));if(y=I.call(y),y==null)throw Error(P(151));for(var E=I=null,C=p,x=p=0,$=null,j=y.next();C!==null&&!j.done;x++,j=y.next()){C.index>x?($=C,C=null):$=C.sibling;var H=h(m,C,j.value,_);if(H===null){C===null&&(C=$);break}e&&C&&H.alternate===null&&t(m,C),p=s(H,p,x),E===null?I=H:E.sibling=H,E=H,C=$}if(j.done)return n(m,C),we&&Ii(m,x),I;if(C===null){for(;!j.done;x++,j=y.next())j=d(m,j.value,_),j!==null&&(p=s(j,p,x),E===null?I=j:E.sibling=j,E=j);return we&&Ii(m,x),I}for(C=r(m,C);!j.done;x++,j=y.next())j=f(C,m,x,j.value,_),j!==null&&(e&&j.alternate!==null&&C.delete(j.key===null?x:j.key),p=s(j,p,x),E===null?I=j:E.sibling=j,E=j);return e&&C.forEach(function(Ke){return t(m,Ke)}),we&&Ii(m,x),I}function S(m,p,y,_){if(typeof y=="object"&&y!==null&&y.type===bs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ou:e:{for(var I=y.key,E=p;E!==null;){if(E.key===I){if(I=y.type,I===bs){if(E.tag===7){n(m,E.sibling),p=i(E,y.props.children),p.return=m,m=p;break e}}else if(E.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Rr&&w0(I)===E.type){n(m,E.sibling),p=i(E,y.props),p.ref=Qo(m,E,y),p.return=m,m=p;break e}n(m,E);break}else t(m,E);E=E.sibling}y.type===bs?(p=zi(y.props.children,m.mode,_,y.key),p.return=m,m=p):(_=Ku(y.type,y.key,y.props,null,m.mode,_),_.ref=Qo(m,p,y),_.return=m,m=_)}return o(m);case As:e:{for(E=y.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),p=i(p,y.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=kf(y,m.mode,_),p.return=m,m=p}return o(m);case Rr:return E=y._init,S(m,p,E(y._payload),_)}if(aa(y))return g(m,p,y,_);if(Ho(y))return v(m,p,y,_);yu(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,y),p.return=m,m=p):(n(m,p),p=xf(y,m.mode,_),p.return=m,m=p),o(m)):n(m,p)}return S}var co=dC(!0),hC=dC(!1),Nl={},Dn=pi(Nl),qa=pi(Nl),Ya=pi(Nl);function Ni(e){if(e===Nl)throw Error(P(174));return e}function Hg(e,t){switch(he(Ya,t),he(qa,e),he(Dn,Nl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Tp(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Tp(t,e)}ve(Dn),he(Dn,t)}function ho(){ve(Dn),ve(qa),ve(Ya)}function fC(e){Ni(Ya.current);var t=Ni(Dn.current),n=Tp(t,e.type);t!==n&&(he(qa,e),he(Dn,n))}function Gg(e){qa.current===e&&(ve(Dn),ve(qa))}var Ee=pi(0);function Ic(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wf=[];function Kg(){for(var e=0;e<wf.length;e++)wf[e]._workInProgressVersionPrimary=null;wf.length=0}var Bu=vr.ReactCurrentDispatcher,Ef=vr.ReactCurrentBatchConfig,qi=0,Se=null,Oe=null,Fe=null,xc=!1,Ea=!1,Qa=0,Jb=0;function nt(){throw Error(P(321))}function qg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wn(e[n],t[n]))return!1;return!0}function Yg(e,t,n,r,i,s){if(qi=s,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Bu.current=e===null||e.memoizedState===null?n2:r2,e=n(r,i),Ea){s=0;do{if(Ea=!1,Qa=0,25<=s)throw Error(P(301));s+=1,Fe=Oe=null,t.updateQueue=null,Bu.current=i2,e=n(r,i)}while(Ea)}if(Bu.current=kc,t=Oe!==null&&Oe.next!==null,qi=0,Fe=Oe=Se=null,xc=!1,t)throw Error(P(300));return e}function Qg(){var e=Qa!==0;return Qa=0,e}function xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Se.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function tn(){if(Oe===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=Fe===null?Se.memoizedState:Fe.next;if(t!==null)Fe=t,Oe=e;else{if(e===null)throw Error(P(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Fe===null?Se.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function Xa(e,t){return typeof t=="function"?t(e):t}function Sf(e){var t=tn(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((qi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Se.lanes|=c,Yi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,wn(r,t.memoizedState)||(It=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Se.lanes|=s,Yi|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Cf(e){var t=tn(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);wn(s,t.memoizedState)||(It=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function pC(){}function mC(e,t){var n=Se,r=tn(),i=t(),s=!wn(r.memoizedState,i);if(s&&(r.memoizedState=i,It=!0),r=r.queue,Xg(vC.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,Ja(9,yC.bind(null,n,r,i,t),void 0,null),Ve===null)throw Error(P(349));qi&30||gC(n,t,i)}return i}function gC(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yC(e,t,n,r){t.value=n,t.getSnapshot=r,_C(t)&&wC(e)}function vC(e,t,n){return n(function(){_C(t)&&wC(e)})}function _C(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wn(e,n)}catch{return!0}}function wC(e){var t=dr(e,1);t!==null&&gn(t,e,1,-1)}function E0(e){var t=xn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xa,lastRenderedState:e},t.queue=e,e=e.dispatch=t2.bind(null,Se,e),[t.memoizedState,e]}function Ja(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function EC(){return tn().memoizedState}function Vu(e,t,n,r){var i=xn();Se.flags|=e,i.memoizedState=Ja(1|t,n,void 0,r===void 0?null:r)}function Dd(e,t,n,r){var i=tn();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&qg(r,o.deps)){i.memoizedState=Ja(t,n,s,r);return}}Se.flags|=e,i.memoizedState=Ja(1|t,n,s,r)}function S0(e,t){return Vu(8390656,8,e,t)}function Xg(e,t){return Dd(2048,8,e,t)}function SC(e,t){return Dd(4,2,e,t)}function CC(e,t){return Dd(4,4,e,t)}function TC(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function IC(e,t,n){return n=n!=null?n.concat([e]):null,Dd(4,4,TC.bind(null,t,e),n)}function Jg(){}function xC(e,t){var n=tn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qg(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function kC(e,t){var n=tn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qg(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function PC(e,t,n){return qi&21?(wn(n,t)||(n=bS(),Se.lanes|=n,Yi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,It=!0),e.memoizedState=n)}function Zb(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=Ef.transition;Ef.transition={};try{e(!1),t()}finally{oe=n,Ef.transition=r}}function RC(){return tn().memoizedState}function e2(e,t,n){var r=qr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},AC(e))bC(t,n);else if(n=aC(e,t,n,r),n!==null){var i=vt();gn(n,e,r,i),OC(n,t,r)}}function t2(e,t,n){var r=qr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(AC(e))bC(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,wn(a,o)){var l=t.interleaved;l===null?(i.next=i,Vg(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=aC(e,t,i,r),n!==null&&(i=vt(),gn(n,e,r,i),OC(n,t,r))}}function AC(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function bC(e,t){Ea=xc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function OC(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Rg(e,n)}}var kc={readContext:en,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},n2={readContext:en,useCallback:function(e,t){return xn().memoizedState=[e,t===void 0?null:t],e},useContext:en,useEffect:S0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vu(4194308,4,TC.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vu(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vu(4,2,e,t)},useMemo:function(e,t){var n=xn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=e2.bind(null,Se,e),[r.memoizedState,e]},useRef:function(e){var t=xn();return e={current:e},t.memoizedState=e},useState:E0,useDebugValue:Jg,useDeferredValue:function(e){return xn().memoizedState=e},useTransition:function(){var e=E0(!1),t=e[0];return e=Zb.bind(null,e[1]),xn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Se,i=xn();if(we){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),Ve===null)throw Error(P(349));qi&30||gC(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,S0(vC.bind(null,r,s,e),[e]),r.flags|=2048,Ja(9,yC.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=xn(),t=Ve.identifierPrefix;if(we){var n=Jn,r=Xn;n=(r&~(1<<32-mn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},r2={readContext:en,useCallback:xC,useContext:en,useEffect:Xg,useImperativeHandle:IC,useInsertionEffect:SC,useLayoutEffect:CC,useMemo:kC,useReducer:Sf,useRef:EC,useState:function(){return Sf(Xa)},useDebugValue:Jg,useDeferredValue:function(e){var t=tn();return PC(t,Oe.memoizedState,e)},useTransition:function(){var e=Sf(Xa)[0],t=tn().memoizedState;return[e,t]},useMutableSource:pC,useSyncExternalStore:mC,useId:RC,unstable_isNewReconciler:!1},i2={readContext:en,useCallback:xC,useContext:en,useEffect:Xg,useImperativeHandle:IC,useInsertionEffect:SC,useLayoutEffect:CC,useMemo:kC,useReducer:Cf,useRef:EC,useState:function(){return Cf(Xa)},useDebugValue:Jg,useDeferredValue:function(e){var t=tn();return Oe===null?t.memoizedState=e:PC(t,Oe.memoizedState,e)},useTransition:function(){var e=Cf(Xa)[0],t=tn().memoizedState;return[e,t]},useMutableSource:pC,useSyncExternalStore:mC,useId:RC,unstable_isNewReconciler:!1};function fo(e,t){try{var n="",r=t;do n+=OA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Tf(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Kp(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var s2=typeof WeakMap=="function"?WeakMap:Map;function NC(e,t,n){n=sr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Rc||(Rc=!0,rm=r),Kp(e,t)},n}function DC(e,t,n){n=sr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Kp(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Kp(e,t),typeof r!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function C0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new s2;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=_2.bind(null,e,t,n),t.then(e,e))}function T0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function I0(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=sr(-1,1),t.tag=2,Gr(n,t,1))),n.lanes|=1),e)}var o2=vr.ReactCurrentOwner,It=!1;function mt(e,t,n,r){t.child=e===null?hC(t,null,n,r):co(t,e.child,n,r)}function x0(e,t,n,r,i){n=n.render;var s=t.ref;return Qs(t,i),r=Yg(e,t,n,r,s,i),n=Qg(),e!==null&&!It?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,hr(e,t,i)):(we&&n&&Mg(t),t.flags|=1,mt(e,t,r,i),t.child)}function k0(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!oy(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,$C(e,t,s,r,i)):(e=Ku(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wa,n(o,r)&&e.ref===t.ref)return hr(e,t,i)}return t.flags|=1,e=Yr(s,r),e.ref=t.ref,e.return=t,t.child=e}function $C(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Wa(s,r)&&e.ref===t.ref)if(It=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(It=!0);else return t.lanes=e.lanes,hr(e,t,i)}return qp(e,t,n,r,i)}function LC(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(zs,$t),$t|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(zs,$t),$t|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,he(zs,$t),$t|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,he(zs,$t),$t|=r;return mt(e,t,i,n),t.child}function MC(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function qp(e,t,n,r,i){var s=Pt(n)?Gi:dt.current;return s=lo(t,s),Qs(t,i),n=Yg(e,t,n,r,s,i),r=Qg(),e!==null&&!It?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,hr(e,t,i)):(we&&r&&Mg(t),t.flags|=1,mt(e,t,n,i),t.child)}function P0(e,t,n,r,i){if(Pt(n)){var s=!0;_c(t)}else s=!1;if(Qs(t,i),t.stateNode===null)Wu(e,t),cC(t,n,r),Gp(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=en(u):(u=Pt(n)?Gi:dt.current,u=lo(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&_0(t,o,r,u),Ar=!1;var h=t.memoizedState;o.state=h,Tc(t,r,o,i),l=t.memoizedState,a!==r||h!==l||kt.current||Ar?(typeof c=="function"&&(Hp(t,n,c,r),l=t.memoizedState),(a=Ar||v0(t,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,lC(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:an(t.type,a),o.props=u,d=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=en(l):(l=Pt(n)?Gi:dt.current,l=lo(t,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&_0(t,o,r,l),Ar=!1,h=t.memoizedState,o.state=h,Tc(t,r,o,i);var g=t.memoizedState;a!==d||h!==g||kt.current||Ar?(typeof f=="function"&&(Hp(t,n,f,r),g=t.memoizedState),(u=Ar||v0(t,n,u,r,h,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Yp(e,t,n,r,s,i)}function Yp(e,t,n,r,i,s){MC(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&f0(t,n,!1),hr(e,t,s);r=t.stateNode,o2.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=co(t,e.child,null,s),t.child=co(t,null,a,s)):mt(e,t,a,s),t.memoizedState=r.state,i&&f0(t,n,!0),t.child}function FC(e){var t=e.stateNode;t.pendingContext?h0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&h0(e,t.context,!1),Hg(e,t.containerInfo)}function R0(e,t,n,r,i){return uo(),jg(i),t.flags|=256,mt(e,t,n,r),t.child}var Qp={dehydrated:null,treeContext:null,retryLane:0};function Xp(e){return{baseLanes:e,cachePool:null,transitions:null}}function jC(e,t,n){var r=t.pendingProps,i=Ee.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(Ee,i&1),e===null)return Vp(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Md(o,r,0,null),e=zi(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Xp(n),t.memoizedState=Qp,e):Zg(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return a2(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Yr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Yr(a,s):(s=zi(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Xp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Qp,r}return s=e.child,e=s.sibling,r=Yr(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Zg(e,t){return t=Md({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vu(e,t,n,r){return r!==null&&jg(r),co(t,e.child,null,n),e=Zg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function a2(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Tf(Error(P(422))),vu(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Md({mode:"visible",children:r.children},i,0,null),s=zi(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&co(t,e.child,null,o),t.child.memoizedState=Xp(o),t.memoizedState=Qp,s);if(!(t.mode&1))return vu(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(P(419)),r=Tf(s,r,void 0),vu(e,t,o,r)}if(a=(o&e.childLanes)!==0,It||a){if(r=Ve,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,dr(e,i),gn(r,e,i,-1))}return sy(),r=Tf(Error(P(421))),vu(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=w2.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Mt=Hr(i.nextSibling),zt=t,we=!0,un=null,e!==null&&(Yt[Qt++]=Xn,Yt[Qt++]=Jn,Yt[Qt++]=Ki,Xn=e.id,Jn=e.overflow,Ki=t),t=Zg(t,r.children),t.flags|=4096,t)}function A0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Wp(e.return,t,n)}function If(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function UC(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(mt(e,t,r.children,n),r=Ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&A0(e,n,t);else if(e.tag===19)A0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(Ee,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ic(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),If(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ic(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}If(t,!0,n,null,s);break;case"together":If(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wu(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function hr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Yr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function l2(e,t,n){switch(t.tag){case 3:FC(t),uo();break;case 5:fC(t);break;case 1:Pt(t.type)&&_c(t);break;case 4:Hg(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(Sc,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(Ee,Ee.current&1),t.flags|=128,null):n&t.child.childLanes?jC(e,t,n):(he(Ee,Ee.current&1),e=hr(e,t,n),e!==null?e.sibling:null);he(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return UC(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,LC(e,t,n)}return hr(e,t,n)}var zC,Jp,BC,VC;zC=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jp=function(){};BC=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ni(Dn.current);var s=null;switch(n){case"input":i=wp(e,i),r=wp(e,r),s=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),s=[];break;case"textarea":i=Cp(e,i),r=Cp(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=yc)}Ip(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ma.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ma.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&fe("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};VC=function(e,t,n,r){n!==r&&(t.flags|=4)};function Xo(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function u2(e,t,n){var r=t.pendingProps;switch(Fg(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(t),null;case 1:return Pt(t.type)&&vc(),rt(t),null;case 3:return r=t.stateNode,ho(),ve(kt),ve(dt),Kg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gu(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,un!==null&&(om(un),un=null))),Jp(e,t),rt(t),null;case 5:Gg(t);var i=Ni(Ya.current);if(n=t.type,e!==null&&t.stateNode!=null)BC(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return rt(t),null}if(e=Ni(Dn.current),gu(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Rn]=t,r[Ka]=s,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<ua.length;i++)fe(ua[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":j_(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":z_(r,s),fe("invalid",r)}Ip(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&mu(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&mu(r.textContent,a,e),i=["children",""+a]):Ma.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":au(r),U_(r,s,!0);break;case"textarea":au(r),B_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=yc)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gS(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Rn]=t,e[Ka]=r,zC(e,t,!1,!1),t.stateNode=e;e:{switch(o=xp(n,r),n){case"dialog":fe("cancel",e),fe("close",e),i=r;break;case"iframe":case"object":case"embed":fe("load",e),i=r;break;case"video":case"audio":for(i=0;i<ua.length;i++)fe(ua[i],e);i=r;break;case"source":fe("error",e),i=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),i=r;break;case"details":fe("toggle",e),i=r;break;case"input":j_(e,r),i=wp(e,r),fe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),fe("invalid",e);break;case"textarea":z_(e,r),i=Cp(e,r),fe("invalid",e);break;default:i=r}Ip(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?_S(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&yS(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fa(e,l):typeof l=="number"&&Fa(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&fe("scroll",e):l!=null&&Cg(e,s,l,o))}switch(n){case"input":au(e),U_(e,r,!1);break;case"textarea":au(e),B_(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ii(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Gs(e,!!r.multiple,s,!1):r.defaultValue!=null&&Gs(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=yc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return rt(t),null;case 6:if(e&&t.stateNode!=null)VC(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=Ni(Ya.current),Ni(Dn.current),gu(t)){if(r=t.stateNode,n=t.memoizedProps,r[Rn]=t,(s=r.nodeValue!==n)&&(e=zt,e!==null))switch(e.tag){case 3:mu(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mu(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rn]=t,t.stateNode=r}return rt(t),null;case 13:if(ve(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(we&&Mt!==null&&t.mode&1&&!(t.flags&128))oC(),uo(),t.flags|=98560,s=!1;else if(s=gu(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(P(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[Rn]=t}else uo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;rt(t),s=!1}else un!==null&&(om(un),un=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ee.current&1?$e===0&&($e=3):sy())),t.updateQueue!==null&&(t.flags|=4),rt(t),null);case 4:return ho(),Jp(e,t),e===null&&Ha(t.stateNode.containerInfo),rt(t),null;case 10:return Bg(t.type._context),rt(t),null;case 17:return Pt(t.type)&&vc(),rt(t),null;case 19:if(ve(Ee),s=t.memoizedState,s===null)return rt(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Xo(s,!1);else{if($e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ic(e),o!==null){for(t.flags|=128,Xo(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(Ee,Ee.current&1|2),t.child}e=e.sibling}s.tail!==null&&ke()>po&&(t.flags|=128,r=!0,Xo(s,!1),t.lanes=4194304)}else{if(!r)if(e=Ic(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Xo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!we)return rt(t),null}else 2*ke()-s.renderingStartTime>po&&n!==1073741824&&(t.flags|=128,r=!0,Xo(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ke(),t.sibling=null,n=Ee.current,he(Ee,r?n&1|2:n&1),t):(rt(t),null);case 22:case 23:return iy(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$t&1073741824&&(rt(t),t.subtreeFlags&6&&(t.flags|=8192)):rt(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function c2(e,t){switch(Fg(t),t.tag){case 1:return Pt(t.type)&&vc(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ho(),ve(kt),ve(dt),Kg(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Gg(t),null;case 13:if(ve(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));uo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(Ee),null;case 4:return ho(),null;case 10:return Bg(t.type._context),null;case 22:case 23:return iy(),null;case 24:return null;default:return null}}var _u=!1,st=!1,d2=typeof WeakSet=="function"?WeakSet:Set,N=null;function Us(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(e,t,r)}else n.current=null}function Zp(e,t,n){try{n()}catch(r){Ie(e,t,r)}}var b0=!1;function h2(e,t){if(Lp=pc,e=KS(),Lg(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=e,h=null;t:for(;;){for(var f;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(f=d.firstChild)!==null;)h=d,d=f;for(;;){if(d===e)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(f=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mp={focusedElem:e,selectionRange:n},pc=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,S=g.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:an(t.type,v),S);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(_){Ie(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return g=b0,b0=!1,g}function Sa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Zp(t,n,s)}i=i.next}while(i!==r)}}function $d(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function em(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function WC(e){var t=e.alternate;t!==null&&(e.alternate=null,WC(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rn],delete t[Ka],delete t[Up],delete t[qb],delete t[Yb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function HC(e){return e.tag===5||e.tag===3||e.tag===4}function O0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||HC(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tm(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yc));else if(r!==4&&(e=e.child,e!==null))for(tm(e,t,n),e=e.sibling;e!==null;)tm(e,t,n),e=e.sibling}function nm(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(nm(e,t,n),e=e.sibling;e!==null;)nm(e,t,n),e=e.sibling}var Ye=null,ln=!1;function Ir(e,t,n){for(n=n.child;n!==null;)GC(e,t,n),n=n.sibling}function GC(e,t,n){if(Nn&&typeof Nn.onCommitFiberUnmount=="function")try{Nn.onCommitFiberUnmount(kd,n)}catch{}switch(n.tag){case 5:st||Us(n,t);case 6:var r=Ye,i=ln;Ye=null,Ir(e,t,n),Ye=r,ln=i,Ye!==null&&(ln?(e=Ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(ln?(e=Ye,n=n.stateNode,e.nodeType===8?vf(e.parentNode,n):e.nodeType===1&&vf(e,n),Ba(e)):vf(Ye,n.stateNode));break;case 4:r=Ye,i=ln,Ye=n.stateNode.containerInfo,ln=!0,Ir(e,t,n),Ye=r,ln=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zp(n,t,o),i=i.next}while(i!==r)}Ir(e,t,n);break;case 1:if(!st&&(Us(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ie(n,t,a)}Ir(e,t,n);break;case 21:Ir(e,t,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,Ir(e,t,n),st=r):Ir(e,t,n);break;default:Ir(e,t,n)}}function N0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new d2),t.forEach(function(r){var i=E2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function on(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ye=a.stateNode,ln=!1;break e;case 3:Ye=a.stateNode.containerInfo,ln=!0;break e;case 4:Ye=a.stateNode.containerInfo,ln=!0;break e}a=a.return}if(Ye===null)throw Error(P(160));GC(s,o,i),Ye=null,ln=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ie(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)KC(t,e),t=t.sibling}function KC(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(on(t,e),In(e),r&4){try{Sa(3,e,e.return),$d(3,e)}catch(v){Ie(e,e.return,v)}try{Sa(5,e,e.return)}catch(v){Ie(e,e.return,v)}}break;case 1:on(t,e),In(e),r&512&&n!==null&&Us(n,n.return);break;case 5:if(on(t,e),In(e),r&512&&n!==null&&Us(n,n.return),e.flags&32){var i=e.stateNode;try{Fa(i,"")}catch(v){Ie(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&pS(i,s),xp(a,o);var u=xp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?_S(i,d):c==="dangerouslySetInnerHTML"?yS(i,d):c==="children"?Fa(i,d):Cg(i,c,d,u)}switch(a){case"input":Ep(i,s);break;case"textarea":mS(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?Gs(i,!!s.multiple,f,!1):h!==!!s.multiple&&(s.defaultValue!=null?Gs(i,!!s.multiple,s.defaultValue,!0):Gs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ka]=s}catch(v){Ie(e,e.return,v)}}break;case 6:if(on(t,e),In(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){Ie(e,e.return,v)}}break;case 3:if(on(t,e),In(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ba(t.containerInfo)}catch(v){Ie(e,e.return,v)}break;case 4:on(t,e),In(e);break;case 13:on(t,e),In(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ny=ke())),r&4&&N0(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(st=(u=st)||c,on(t,e),st=u):on(t,e),In(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(N=e,c=e.child;c!==null;){for(d=N=c;N!==null;){switch(h=N,f=h.child,h.tag){case 0:case 11:case 14:case 15:Sa(4,h,h.return);break;case 1:Us(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){Ie(r,n,v)}}break;case 5:Us(h,h.return);break;case 22:if(h.memoizedState!==null){$0(d);continue}}f!==null?(f.return=h,N=f):$0(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=vS("display",o))}catch(v){Ie(e,e.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Ie(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:on(t,e),In(e),r&4&&N0(e);break;case 21:break;default:on(t,e),In(e)}}function In(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(HC(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fa(i,""),r.flags&=-33);var s=O0(e);nm(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=O0(e);tm(e,a,o);break;default:throw Error(P(161))}}catch(l){Ie(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function f2(e,t,n){N=e,qC(e)}function qC(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||_u;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||st;a=_u;var u=st;if(_u=o,(st=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?L0(i):l!==null?(l.return=o,N=l):L0(i);for(;s!==null;)N=s,qC(s),s=s.sibling;N=i,_u=a,st=u}D0(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):D0(e)}}function D0(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:st||$d(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:an(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&y0(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}y0(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ba(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}st||t.flags&512&&em(t)}catch(h){Ie(t,t.return,h)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function $0(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function L0(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{$d(4,t)}catch(l){Ie(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Ie(t,i,l)}}var s=t.return;try{em(t)}catch(l){Ie(t,s,l)}break;case 5:var o=t.return;try{em(t)}catch(l){Ie(t,o,l)}}}catch(l){Ie(t,t.return,l)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var p2=Math.ceil,Pc=vr.ReactCurrentDispatcher,ey=vr.ReactCurrentOwner,Zt=vr.ReactCurrentBatchConfig,Z=0,Ve=null,be=null,Je=0,$t=0,zs=pi(0),$e=0,Za=null,Yi=0,Ld=0,ty=0,Ca=null,Ct=null,ny=0,po=1/0,Kn=null,Rc=!1,rm=null,Kr=null,wu=!1,jr=null,Ac=0,Ta=0,im=null,Hu=-1,Gu=0;function vt(){return Z&6?ke():Hu!==-1?Hu:Hu=ke()}function qr(e){return e.mode&1?Z&2&&Je!==0?Je&-Je:Xb.transition!==null?(Gu===0&&(Gu=bS()),Gu):(e=oe,e!==0||(e=window.event,e=e===void 0?16:FS(e.type)),e):1}function gn(e,t,n,r){if(50<Ta)throw Ta=0,im=null,Error(P(185));Al(e,n,r),(!(Z&2)||e!==Ve)&&(e===Ve&&(!(Z&2)&&(Ld|=n),$e===4&&Nr(e,Je)),Rt(e,r),n===1&&Z===0&&!(t.mode&1)&&(po=ke()+500,Od&&mi()))}function Rt(e,t){var n=e.callbackNode;XA(e,t);var r=fc(e,e===Ve?Je:0);if(r===0)n!==null&&H_(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&H_(n),t===1)e.tag===0?Qb(M0.bind(null,e)):rC(M0.bind(null,e)),Gb(function(){!(Z&6)&&mi()}),n=null;else{switch(OS(r)){case 1:n=Pg;break;case 4:n=RS;break;case 16:n=hc;break;case 536870912:n=AS;break;default:n=hc}n=nT(n,YC.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function YC(e,t){if(Hu=-1,Gu=0,Z&6)throw Error(P(327));var n=e.callbackNode;if(Xs()&&e.callbackNode!==n)return null;var r=fc(e,e===Ve?Je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=bc(e,r);else{t=r;var i=Z;Z|=2;var s=XC();(Ve!==e||Je!==t)&&(Kn=null,po=ke()+500,Ui(e,t));do try{y2();break}catch(a){QC(e,a)}while(1);zg(),Pc.current=s,Z=i,be!==null?t=0:(Ve=null,Je=0,t=$e)}if(t!==0){if(t===2&&(i=bp(e),i!==0&&(r=i,t=sm(e,i))),t===1)throw n=Za,Ui(e,0),Nr(e,r),Rt(e,ke()),n;if(t===6)Nr(e,r);else{if(i=e.current.alternate,!(r&30)&&!m2(i)&&(t=bc(e,r),t===2&&(s=bp(e),s!==0&&(r=s,t=sm(e,s))),t===1))throw n=Za,Ui(e,0),Nr(e,r),Rt(e,ke()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:xi(e,Ct,Kn);break;case 3:if(Nr(e,r),(r&130023424)===r&&(t=ny+500-ke(),10<t)){if(fc(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){vt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=jp(xi.bind(null,e,Ct,Kn),t);break}xi(e,Ct,Kn);break;case 4:if(Nr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-mn(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*p2(r/1960))-r,10<r){e.timeoutHandle=jp(xi.bind(null,e,Ct,Kn),r);break}xi(e,Ct,Kn);break;case 5:xi(e,Ct,Kn);break;default:throw Error(P(329))}}}return Rt(e,ke()),e.callbackNode===n?YC.bind(null,e):null}function sm(e,t){var n=Ca;return e.current.memoizedState.isDehydrated&&(Ui(e,t).flags|=256),e=bc(e,t),e!==2&&(t=Ct,Ct=n,t!==null&&om(t)),e}function om(e){Ct===null?Ct=e:Ct.push.apply(Ct,e)}function m2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!wn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nr(e,t){for(t&=~ty,t&=~Ld,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-mn(t),r=1<<n;e[n]=-1,t&=~r}}function M0(e){if(Z&6)throw Error(P(327));Xs();var t=fc(e,0);if(!(t&1))return Rt(e,ke()),null;var n=bc(e,t);if(e.tag!==0&&n===2){var r=bp(e);r!==0&&(t=r,n=sm(e,r))}if(n===1)throw n=Za,Ui(e,0),Nr(e,t),Rt(e,ke()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xi(e,Ct,Kn),Rt(e,ke()),null}function ry(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(po=ke()+500,Od&&mi())}}function Qi(e){jr!==null&&jr.tag===0&&!(Z&6)&&Xs();var t=Z;Z|=1;var n=Zt.transition,r=oe;try{if(Zt.transition=null,oe=1,e)return e()}finally{oe=r,Zt.transition=n,Z=t,!(Z&6)&&mi()}}function iy(){$t=zs.current,ve(zs)}function Ui(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hb(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(Fg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vc();break;case 3:ho(),ve(kt),ve(dt),Kg();break;case 5:Gg(r);break;case 4:ho();break;case 13:ve(Ee);break;case 19:ve(Ee);break;case 10:Bg(r.type._context);break;case 22:case 23:iy()}n=n.return}if(Ve=e,be=e=Yr(e.current,null),Je=$t=t,$e=0,Za=null,ty=Ld=Yi=0,Ct=Ca=null,Oi!==null){for(t=0;t<Oi.length;t++)if(n=Oi[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Oi=null}return e}function QC(e,t){do{var n=be;try{if(zg(),Bu.current=kc,xc){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xc=!1}if(qi=0,Fe=Oe=Se=null,Ea=!1,Qa=0,ey.current=null,n===null||n.return===null){$e=1,Za=t,be=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Je,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=T0(o);if(f!==null){f.flags&=-257,I0(f,o,a,s,t),f.mode&1&&C0(s,u,t),t=f,l=u;var g=t.updateQueue;if(g===null){var v=new Set;v.add(l),t.updateQueue=v}else g.add(l);break e}else{if(!(t&1)){C0(s,u,t),sy();break e}l=Error(P(426))}}else if(we&&a.mode&1){var S=T0(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),I0(S,o,a,s,t),jg(fo(l,a));break e}}s=l=fo(l,a),$e!==4&&($e=2),Ca===null?Ca=[s]:Ca.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=NC(s,l,t);g0(s,m);break e;case 1:a=l;var p=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Kr===null||!Kr.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var _=DC(s,a,t);g0(s,_);break e}}s=s.return}while(s!==null)}ZC(n)}catch(I){t=I,be===n&&n!==null&&(be=n=n.return);continue}break}while(1)}function XC(){var e=Pc.current;return Pc.current=kc,e===null?kc:e}function sy(){($e===0||$e===3||$e===2)&&($e=4),Ve===null||!(Yi&268435455)&&!(Ld&268435455)||Nr(Ve,Je)}function bc(e,t){var n=Z;Z|=2;var r=XC();(Ve!==e||Je!==t)&&(Kn=null,Ui(e,t));do try{g2();break}catch(i){QC(e,i)}while(1);if(zg(),Z=n,Pc.current=r,be!==null)throw Error(P(261));return Ve=null,Je=0,$e}function g2(){for(;be!==null;)JC(be)}function y2(){for(;be!==null&&!BA();)JC(be)}function JC(e){var t=tT(e.alternate,e,$t);e.memoizedProps=e.pendingProps,t===null?ZC(e):be=t,ey.current=null}function ZC(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=c2(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,be=null;return}}else if(n=u2(n,t,$t),n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);$e===0&&($e=5)}function xi(e,t,n){var r=oe,i=Zt.transition;try{Zt.transition=null,oe=1,v2(e,t,n,r)}finally{Zt.transition=i,oe=r}return null}function v2(e,t,n,r){do Xs();while(jr!==null);if(Z&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(JA(e,s),e===Ve&&(be=Ve=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wu||(wu=!0,nT(hc,function(){return Xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Zt.transition,Zt.transition=null;var o=oe;oe=1;var a=Z;Z|=4,ey.current=null,h2(e,n),KC(n,e),Fb(Mp),pc=!!Lp,Mp=Lp=null,e.current=n,f2(n),VA(),Z=a,oe=o,Zt.transition=s}else e.current=n;if(wu&&(wu=!1,jr=e,Ac=i),s=e.pendingLanes,s===0&&(Kr=null),GA(n.stateNode),Rt(e,ke()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Rc)throw Rc=!1,e=rm,rm=null,e;return Ac&1&&e.tag!==0&&Xs(),s=e.pendingLanes,s&1?e===im?Ta++:(Ta=0,im=e):Ta=0,mi(),null}function Xs(){if(jr!==null){var e=OS(Ac),t=Zt.transition,n=oe;try{if(Zt.transition=null,oe=16>e?16:e,jr===null)var r=!1;else{if(e=jr,jr=null,Ac=0,Z&6)throw Error(P(331));var i=Z;for(Z|=4,N=e.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:Sa(8,c,s)}var d=c.child;if(d!==null)d.return=c,N=d;else for(;N!==null;){c=N;var h=c.sibling,f=c.return;if(WC(c),c===u){N=null;break}if(h!==null){h.return=f,N=h;break}N=f}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Sa(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,N=m;break e}N=s.return}}var p=e.current;for(N=p;N!==null;){o=N;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,N=y;else e:for(o=p;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:$d(9,a)}}catch(I){Ie(a,a.return,I)}if(a===o){N=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,N=_;break e}N=a.return}}if(Z=i,mi(),Nn&&typeof Nn.onPostCommitFiberRoot=="function")try{Nn.onPostCommitFiberRoot(kd,e)}catch{}r=!0}return r}finally{oe=n,Zt.transition=t}}return!1}function F0(e,t,n){t=fo(n,t),t=NC(e,t,1),e=Gr(e,t,1),t=vt(),e!==null&&(Al(e,1,t),Rt(e,t))}function Ie(e,t,n){if(e.tag===3)F0(e,e,n);else for(;t!==null;){if(t.tag===3){F0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kr===null||!Kr.has(r))){e=fo(n,e),e=DC(t,e,1),t=Gr(t,e,1),e=vt(),t!==null&&(Al(t,1,e),Rt(t,e));break}}t=t.return}}function _2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=vt(),e.pingedLanes|=e.suspendedLanes&n,Ve===e&&(Je&n)===n&&($e===4||$e===3&&(Je&130023424)===Je&&500>ke()-ny?Ui(e,0):ty|=n),Rt(e,t)}function eT(e,t){t===0&&(e.mode&1?(t=cu,cu<<=1,!(cu&130023424)&&(cu=4194304)):t=1);var n=vt();e=dr(e,t),e!==null&&(Al(e,t,n),Rt(e,n))}function w2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),eT(e,n)}function E2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),eT(e,n)}var tT;tT=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||kt.current)It=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return It=!1,l2(e,t,n);It=!!(e.flags&131072)}else It=!1,we&&t.flags&1048576&&iC(t,Ec,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wu(e,t),e=t.pendingProps;var i=lo(t,dt.current);Qs(t,n),i=Yg(null,t,r,e,i,n);var s=Qg();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pt(r)?(s=!0,_c(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wg(t),i.updater=Nd,t.stateNode=i,i._reactInternals=t,Gp(t,r,e,n),t=Yp(null,t,r,!0,s,n)):(t.tag=0,we&&s&&Mg(t),mt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wu(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=C2(r),e=an(r,e),i){case 0:t=qp(null,t,r,e,n);break e;case 1:t=P0(null,t,r,e,n);break e;case 11:t=x0(null,t,r,e,n);break e;case 14:t=k0(null,t,r,an(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),qp(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),P0(e,t,r,i,n);case 3:e:{if(FC(t),e===null)throw Error(P(387));r=t.pendingProps,s=t.memoizedState,i=s.element,lC(e,t),Tc(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=fo(Error(P(423)),t),t=R0(e,t,r,n,i);break e}else if(r!==i){i=fo(Error(P(424)),t),t=R0(e,t,r,n,i);break e}else for(Mt=Hr(t.stateNode.containerInfo.firstChild),zt=t,we=!0,un=null,n=hC(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(uo(),r===i){t=hr(e,t,n);break e}mt(e,t,r,n)}t=t.child}return t;case 5:return fC(t),e===null&&Vp(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Fp(r,i)?o=null:s!==null&&Fp(r,s)&&(t.flags|=32),MC(e,t),mt(e,t,o,n),t.child;case 6:return e===null&&Vp(t),null;case 13:return jC(e,t,n);case 4:return Hg(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=co(t,null,r,n):mt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),x0(e,t,r,i,n);case 7:return mt(e,t,t.pendingProps,n),t.child;case 8:return mt(e,t,t.pendingProps.children,n),t.child;case 12:return mt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,he(Sc,r._currentValue),r._currentValue=o,s!==null)if(wn(s.value,o)){if(s.children===i.children&&!kt.current){t=hr(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=sr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Wp(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Wp(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}mt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Qs(t,n),i=en(i),r=r(i),t.flags|=1,mt(e,t,r,n),t.child;case 14:return r=t.type,i=an(r,t.pendingProps),i=an(r.type,i),k0(e,t,r,i,n);case 15:return $C(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),Wu(e,t),t.tag=1,Pt(r)?(e=!0,_c(t)):e=!1,Qs(t,n),cC(t,r,i),Gp(t,r,i,n),Yp(null,t,r,!0,e,n);case 19:return UC(e,t,n);case 22:return LC(e,t,n)}throw Error(P(156,t.tag))};function nT(e,t){return PS(e,t)}function S2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(e,t,n,r){return new S2(e,t,n,r)}function oy(e){return e=e.prototype,!(!e||!e.isReactComponent)}function C2(e){if(typeof e=="function")return oy(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ig)return 11;if(e===xg)return 14}return 2}function Yr(e,t){var n=e.alternate;return n===null?(n=Jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ku(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")oy(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case bs:return zi(n.children,i,s,t);case Tg:o=8,i|=8;break;case gp:return e=Jt(12,n,t,i|2),e.elementType=gp,e.lanes=s,e;case yp:return e=Jt(13,n,t,i),e.elementType=yp,e.lanes=s,e;case vp:return e=Jt(19,n,t,i),e.elementType=vp,e.lanes=s,e;case dS:return Md(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case uS:o=10;break e;case cS:o=9;break e;case Ig:o=11;break e;case xg:o=14;break e;case Rr:o=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Jt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function zi(e,t,n,r){return e=Jt(7,e,r,t),e.lanes=n,e}function Md(e,t,n,r){return e=Jt(22,e,r,t),e.elementType=dS,e.lanes=n,e.stateNode={isHidden:!1},e}function xf(e,t,n){return e=Jt(6,e,null,t),e.lanes=n,e}function kf(e,t,n){return t=Jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function T2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=af(0),this.expirationTimes=af(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=af(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ay(e,t,n,r,i,s,o,a,l){return e=new T2(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Jt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wg(s),e}function I2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:As,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rT(e){if(!e)return si;e=e._reactInternals;e:{if(ds(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Pt(n))return nC(e,n,t)}return t}function iT(e,t,n,r,i,s,o,a,l){return e=ay(n,r,!0,e,i,s,o,a,l),e.context=rT(null),n=e.current,r=vt(),i=qr(n),s=sr(r,i),s.callback=t??null,Gr(n,s,i),e.current.lanes=i,Al(e,i,r),Rt(e,r),e}function Fd(e,t,n,r){var i=t.current,s=vt(),o=qr(i);return n=rT(n),t.context===null?t.context=n:t.pendingContext=n,t=sr(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gr(i,t,o),e!==null&&(gn(e,i,o,s),zu(e,i,o)),o}function Oc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function j0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ly(e,t){j0(e,t),(e=e.alternate)&&j0(e,t)}function x2(){return null}var sT=typeof reportError=="function"?reportError:function(e){console.error(e)};function uy(e){this._internalRoot=e}jd.prototype.render=uy.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Fd(e,t,null,null)};jd.prototype.unmount=uy.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qi(function(){Fd(null,e,null,null)}),t[cr]=null}};function jd(e){this._internalRoot=e}jd.prototype.unstable_scheduleHydration=function(e){if(e){var t=$S();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Or.length&&t!==0&&t<Or[n].priority;n++);Or.splice(n,0,e),n===0&&MS(e)}};function cy(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ud(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function U0(){}function k2(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Oc(o);s.call(u)}}var o=iT(t,r,e,0,null,!1,!1,"",U0);return e._reactRootContainer=o,e[cr]=o.current,Ha(e.nodeType===8?e.parentNode:e),Qi(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Oc(l);a.call(u)}}var l=ay(e,0,!1,null,null,!1,!1,"",U0);return e._reactRootContainer=l,e[cr]=l.current,Ha(e.nodeType===8?e.parentNode:e),Qi(function(){Fd(t,l,n,r)}),l}function zd(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Oc(o);a.call(l)}}Fd(t,o,e,i)}else o=k2(n,t,e,i,r);return Oc(o)}NS=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=la(t.pendingLanes);n!==0&&(Rg(t,n|1),Rt(t,ke()),!(Z&6)&&(po=ke()+500,mi()))}break;case 13:Qi(function(){var r=dr(e,1);if(r!==null){var i=vt();gn(r,e,1,i)}}),ly(e,1)}};Ag=function(e){if(e.tag===13){var t=dr(e,134217728);if(t!==null){var n=vt();gn(t,e,134217728,n)}ly(e,134217728)}};DS=function(e){if(e.tag===13){var t=qr(e),n=dr(e,t);if(n!==null){var r=vt();gn(n,e,t,r)}ly(e,t)}};$S=function(){return oe};LS=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};Pp=function(e,t,n){switch(t){case"input":if(Ep(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=bd(r);if(!i)throw Error(P(90));fS(r),Ep(r,i)}}}break;case"textarea":mS(e,n);break;case"select":t=n.value,t!=null&&Gs(e,!!n.multiple,t,!1)}};SS=ry;CS=Qi;var P2={usingClientEntryPoint:!1,Events:[Ol,$s,bd,wS,ES,ry]},Jo={findFiberByHostInstance:bi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},R2={bundleType:Jo.bundleType,version:Jo.version,rendererPackageName:Jo.rendererPackageName,rendererConfig:Jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xS(e),e===null?null:e.stateNode},findFiberByHostInstance:Jo.findFiberByHostInstance||x2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eu.isDisabled&&Eu.supportsFiber)try{kd=Eu.inject(R2),Nn=Eu}catch{}}Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P2;Ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cy(t))throw Error(P(200));return I2(e,t,null,n)};Ht.createRoot=function(e,t){if(!cy(e))throw Error(P(299));var n=!1,r="",i=sT;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ay(e,1,!1,null,null,n,!1,r,i),e[cr]=t.current,Ha(e.nodeType===8?e.parentNode:e),new uy(t)};Ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=xS(t),e=e===null?null:e.stateNode,e};Ht.flushSync=function(e){return Qi(e)};Ht.hydrate=function(e,t,n){if(!Ud(t))throw Error(P(200));return zd(null,e,t,!0,n)};Ht.hydrateRoot=function(e,t,n){if(!cy(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=sT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=iT(t,null,e,1,n??null,i,!1,s,o),e[cr]=t.current,Ha(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new jd(t)};Ht.render=function(e,t,n){if(!Ud(t))throw Error(P(200));return zd(null,e,t,!1,n)};Ht.unmountComponentAtNode=function(e){if(!Ud(e))throw Error(P(40));return e._reactRootContainer?(Qi(function(){zd(null,null,e,!1,function(){e._reactRootContainer=null,e[cr]=null})}),!0):!1};Ht.unstable_batchedUpdates=ry;Ht.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ud(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return zd(e,t,n,!1,r)};Ht.version="18.2.0-next-9e3b772b8-20220608";function oT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oT)}catch(e){console.error(e)}}oT(),iS.exports=Ht;var aT=iS.exports,z0=aT;pp.createRoot=z0.createRoot,pp.hydrateRoot=z0.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function el(){return el=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},el.apply(this,arguments)}var Ur;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ur||(Ur={}));const B0="popstate";function A2(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return am("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Nc(i)}return O2(t,n,null,e)}function Pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function dy(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function b2(){return Math.random().toString(36).substr(2,8)}function V0(e,t){return{usr:e.state,key:e.key,idx:t}}function am(e,t,n,r){return n===void 0&&(n=null),el({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?bo(t):t,{state:n,key:t&&t.key||r||b2()})}function Nc(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function bo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function O2(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ur.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(el({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Ur.Pop;let S=c(),m=S==null?null:S-u;u=S,l&&l({action:a,location:v.location,delta:m})}function h(S,m){a=Ur.Push;let p=am(v.location,S,m);n&&n(p,S),u=c()+1;let y=V0(p,u),_=v.createHref(p);try{o.pushState(y,"",_)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(_)}s&&l&&l({action:a,location:v.location,delta:1})}function f(S,m){a=Ur.Replace;let p=am(v.location,S,m);n&&n(p,S),u=c();let y=V0(p,u),_=v.createHref(p);o.replaceState(y,"",_),s&&l&&l({action:a,location:v.location,delta:0})}function g(S){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof S=="string"?S:Nc(S);return Pe(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let v={get action(){return a},get location(){return e(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(B0,d),l=S,()=>{i.removeEventListener(B0,d),l=null}},createHref(S){return t(i,S)},createURL:g,encodeLocation(S){let m=g(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:f,go(S){return o.go(S)}};return v}var W0;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(W0||(W0={}));function N2(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?bo(t):t,i=hy(r.pathname||"/",n);if(i==null)return null;let s=lT(e);D2(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=V2(s[a],G2(i));return o}function lT(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Pe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Qr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),lT(s.children,t,c,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:z2(u,s.index),routesMeta:c})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of uT(s.path))i(s,o,l)}),t}function uT(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=uT(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function D2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:B2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $2=/^:\w+$/,L2=3,M2=2,F2=1,j2=10,U2=-2,H0=e=>e==="*";function z2(e,t){let n=e.split("/"),r=n.length;return n.some(H0)&&(r+=U2),t&&(r+=M2),n.filter(i=>!H0(i)).reduce((i,s)=>i+($2.test(s)?L2:s===""?F2:j2),r)}function B2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function V2(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=W2({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Qr([i,c.pathname]),pathnameBase:Q2(Qr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Qr([i,c.pathnameBase]))}return s}function W2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=H2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=a[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=K2(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:e}}function H2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),dy(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function G2(e){try{return decodeURI(e)}catch(t){return dy(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function K2(e,t){try{return decodeURIComponent(e)}catch(n){return dy(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function hy(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function q2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?bo(e):e;return{pathname:n?n.startsWith("/")?n:Y2(n,t):t,search:X2(r),hash:J2(i)}}function Y2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Pf(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fy(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function py(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=bo(e):(i=el({},e),Pe(!i.pathname||!i.pathname.includes("?"),Pf("?","pathname","search",i)),Pe(!i.pathname||!i.pathname.includes("#"),Pf("#","pathname","hash",i)),Pe(!i.search||!i.search.includes("#"),Pf("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=t.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?t[d]:"/"}let l=q2(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Qr=e=>e.join("/").replace(/\/\/+/g,"/"),Q2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),X2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,J2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Z2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const cT=["post","put","patch","delete"];new Set(cT);const eO=["get",...cT];new Set(eO);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dc(){return Dc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Dc.apply(this,arguments)}const my=w.createContext(null),dT=w.createContext(null),hs=w.createContext(null),Bd=w.createContext(null),_r=w.createContext({outlet:null,matches:[],isDataRoute:!1}),hT=w.createContext(null);function tO(e,t){let{relative:n}=t===void 0?{}:t;Oo()||Pe(!1);let{basename:r,navigator:i}=w.useContext(hs),{hash:s,pathname:o,search:a}=gy(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Qr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Oo(){return w.useContext(Bd)!=null}function No(){return Oo()||Pe(!1),w.useContext(Bd).location}function fT(e){w.useContext(hs).static||w.useLayoutEffect(e)}function pT(){let{isDataRoute:e}=w.useContext(_r);return e?gO():nO()}function nO(){Oo()||Pe(!1);let e=w.useContext(my),{basename:t,navigator:n}=w.useContext(hs),{matches:r}=w.useContext(_r),{pathname:i}=No(),s=JSON.stringify(fy(r).map(l=>l.pathnameBase)),o=w.useRef(!1);return fT(()=>{o.current=!0}),w.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=py(l,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Qr([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,s,i,e])}const rO=w.createContext(null);function iO(e){let t=w.useContext(_r).outlet;return t&&w.createElement(rO.Provider,{value:e},t)}function gy(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=w.useContext(_r),{pathname:i}=No(),s=JSON.stringify(fy(r).map(o=>o.pathnameBase));return w.useMemo(()=>py(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function sO(e,t){return oO(e,t)}function oO(e,t,n){Oo()||Pe(!1);let{navigator:r}=w.useContext(hs),{matches:i}=w.useContext(_r),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=No(),u;if(t){var c;let v=typeof t=="string"?bo(t):t;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||Pe(!1),u=v}else u=l;let d=u.pathname||"/",h=a==="/"?d:d.slice(a.length)||"/",f=N2(e,{pathname:h}),g=dO(f&&f.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Qr([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Qr([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return t&&g?w.createElement(Bd.Provider,{value:{location:Dc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ur.Pop}},g):g}function aO(){let e=mO(),t=Z2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,s)}const lO=w.createElement(aO,null);class uO extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?w.createElement(_r.Provider,{value:this.props.routeContext},w.createElement(hT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cO(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(my);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(_r.Provider,{value:t},r)}function dO(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Pe(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||lO);let h=t.concat(s.slice(0,u+1)),f=()=>{let g;return c?g=d:l.route.Component?g=w.createElement(l.route.Component,null):l.route.element?g=l.route.element:g=a,w.createElement(cO,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:g})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?w.createElement(uO,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var mT=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(mT||{}),$c=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($c||{});function hO(e){let t=w.useContext(my);return t||Pe(!1),t}function fO(e){let t=w.useContext(dT);return t||Pe(!1),t}function pO(e){let t=w.useContext(_r);return t||Pe(!1),t}function gT(e){let t=pO(),n=t.matches[t.matches.length-1];return n.route.id||Pe(!1),n.route.id}function mO(){var e;let t=w.useContext(hT),n=fO($c.UseRouteError),r=gT($c.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function gO(){let{router:e}=hO(mT.UseNavigateStable),t=gT($c.UseNavigateStable),n=w.useRef(!1);return fT(()=>{n.current=!0}),w.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Dc({fromRouteId:t},s)))},[e,t])}function yO(e){let{to:t,replace:n,state:r,relative:i}=e;Oo()||Pe(!1);let{matches:s}=w.useContext(_r),{pathname:o}=No(),a=pT(),l=py(t,fy(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return w.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function vO(e){return iO(e.context)}function Rs(e){Pe(!1)}function _O(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ur.Pop,navigator:s,static:o=!1}=e;Oo()&&Pe(!1);let a=t.replace(/^\/*/,"/"),l=w.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=bo(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:f="default"}=r,g=w.useMemo(()=>{let v=hy(u,a);return v==null?null:{location:{pathname:v,search:c,hash:d,state:h,key:f},navigationType:i}},[a,u,c,d,h,f,i]);return g==null?null:w.createElement(hs.Provider,{value:l},w.createElement(Bd.Provider,{children:n,value:g}))}function wO(e){let{children:t,location:n}=e;return sO(lm(t),n)}new Promise(()=>{});function lm(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let s=[...t,i];if(r.type===w.Fragment){n.push.apply(n,lm(r.props.children,s));return}r.type!==Rs&&Pe(!1),!r.props.index||!r.props.children||Pe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=lm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lc(){return Lc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Lc.apply(this,arguments)}function yT(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function EO(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function SO(e,t){return e.button===0&&(!t||t==="_self")&&!EO(e)}const CO=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],TO=["aria-current","caseSensitive","className","end","style","to","children"],IO="startTransition",G0=fp[IO];function xO(e){let{basename:t,children:n,future:r,window:i}=e,s=w.useRef();s.current==null&&(s.current=A2({window:i,v5Compat:!0}));let o=s.current,[a,l]=w.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=w.useCallback(d=>{u&&G0?G0(()=>l(d)):l(d)},[l,u]);return w.useLayoutEffect(()=>o.listen(c),[o,c]),w.createElement(_O,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const kO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",PO=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yy=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=t,d=yT(t,CO),{basename:h}=w.useContext(hs),f,g=!1;if(typeof u=="string"&&PO.test(u)&&(f=u,kO))try{let p=new URL(window.location.href),y=u.startsWith("//")?new URL(p.protocol+u):new URL(u),_=hy(y.pathname,h);y.origin===p.origin&&_!=null?u=_+y.search+y.hash:g=!0}catch{}let v=tO(u,{relative:i}),S=RO(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(p){r&&r(p),p.defaultPrevented||S(p)}return w.createElement("a",Lc({},d,{href:f||v,onClick:g||s?r:m,ref:n,target:l}))}),vT=w.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=t,c=yT(t,TO),d=gy(l,{relative:c.relative}),h=No(),f=w.useContext(dT),{navigator:g}=w.useContext(hs),v=g.encodeLocation?g.encodeLocation(d).pathname:d.pathname,S=h.pathname,m=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;i||(S=S.toLowerCase(),m=m?m.toLowerCase():null,v=v.toLowerCase());let p=S===v||!o&&S.startsWith(v)&&S.charAt(v.length)==="/",y=m!=null&&(m===v||!o&&m.startsWith(v)&&m.charAt(v.length)==="/"),_=p?r:void 0,I;typeof s=="function"?I=s({isActive:p,isPending:y}):I=[s,p?"active":null,y?"pending":null].filter(Boolean).join(" ");let E=typeof a=="function"?a({isActive:p,isPending:y}):a;return w.createElement(yy,Lc({},c,{"aria-current":_,className:I,ref:n,style:E,to:l}),typeof u=="function"?u({isActive:p,isPending:y}):u)});var K0;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(K0||(K0={}));var q0;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(q0||(q0={}));function RO(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,a=pT(),l=No(),u=gy(e,{relative:o});return w.useCallback(c=>{if(SO(c,n)){c.preventDefault();let d=r!==void 0?r:Nc(l)===Nc(u);a(e,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,e,s,o])}var Be=function(){return Be=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Be.apply(this,arguments)};function mo(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var pe="-ms-",Ia="-moz-",re="-webkit-",_T="comm",Vd="rule",vy="decl",AO="@import",wT="@keyframes",bO="@layer",ET=Math.abs,_y=String.fromCharCode,um=Object.assign;function OO(e,t){return je(e,0)^45?(((t<<2^je(e,0))<<2^je(e,1))<<2^je(e,2))<<2^je(e,3):0}function ST(e){return e.trim()}function qn(e,t){return(e=t.exec(e))?e[0]:e}function W(e,t,n){return e.replace(t,n)}function qu(e,t,n){return e.indexOf(t,n)}function je(e,t){return e.charCodeAt(t)|0}function go(e,t,n){return e.slice(t,n)}function Pn(e){return e.length}function CT(e){return e.length}function ca(e,t){return t.push(e),e}function NO(e,t){return e.map(t).join("")}function Y0(e,t){return e.filter(function(n){return!qn(n,t)})}var Wd=1,yo=1,TT=0,nn=0,Ae=0,Do="";function Hd(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Wd,column:yo,length:o,return:"",siblings:a}}function kr(e,t){return um(Hd("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Is(e){for(;e.root;)e=kr(e.root,{children:[e]});ca(e,e.siblings)}function DO(){return Ae}function $O(){return Ae=nn>0?je(Do,--nn):0,yo--,Ae===10&&(yo=1,Wd--),Ae}function yn(){return Ae=nn<TT?je(Do,nn++):0,yo++,Ae===10&&(yo=1,Wd++),Ae}function Bi(){return je(Do,nn)}function Yu(){return nn}function Gd(e,t){return go(Do,e,t)}function cm(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function LO(e){return Wd=yo=1,TT=Pn(Do=e),nn=0,[]}function MO(e){return Do="",e}function Rf(e){return ST(Gd(nn-1,dm(e===91?e+2:e===40?e+1:e)))}function FO(e){for(;(Ae=Bi())&&Ae<33;)yn();return cm(e)>2||cm(Ae)>3?"":" "}function jO(e,t){for(;--t&&yn()&&!(Ae<48||Ae>102||Ae>57&&Ae<65||Ae>70&&Ae<97););return Gd(e,Yu()+(t<6&&Bi()==32&&yn()==32))}function dm(e){for(;yn();)switch(Ae){case e:return nn;case 34:case 39:e!==34&&e!==39&&dm(Ae);break;case 40:e===41&&dm(e);break;case 92:yn();break}return nn}function UO(e,t){for(;yn()&&e+Ae!==47+10;)if(e+Ae===42+42&&Bi()===47)break;return"/*"+Gd(t,nn-1)+"*"+_y(e===47?e:yn())}function zO(e){for(;!cm(Bi());)yn();return Gd(e,nn)}function BO(e){return MO(Qu("",null,null,null,[""],e=LO(e),0,[0],e))}function Qu(e,t,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,h=0,f=0,g=0,v=1,S=1,m=1,p=0,y="",_=i,I=s,E=r,C=y;S;)switch(g=p,p=yn()){case 40:if(g!=108&&je(C,d-1)==58){qu(C+=W(Rf(p),"&","&\f"),"&\f",ET(u?a[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:C+=Rf(p);break;case 9:case 10:case 13:case 32:C+=FO(g);break;case 92:C+=jO(Yu()-1,7);continue;case 47:switch(Bi()){case 42:case 47:ca(VO(UO(yn(),Yu()),t,n,l),l);break;default:C+="/"}break;case 123*v:a[u++]=Pn(C)*m;case 125*v:case 59:case 0:switch(p){case 0:case 125:S=0;case 59+c:m==-1&&(C=W(C,/\f/g,"")),f>0&&Pn(C)-d&&ca(f>32?X0(C+";",r,n,d-1,l):X0(W(C," ","")+";",r,n,d-2,l),l);break;case 59:C+=";";default:if(ca(E=Q0(C,t,n,u,c,i,a,y,_=[],I=[],d,s),s),p===123)if(c===0)Qu(C,t,E,E,_,s,d,a,I);else switch(h===99&&je(C,3)===110?100:h){case 100:case 108:case 109:case 115:Qu(e,E,E,r&&ca(Q0(e,E,E,0,0,i,a,y,i,_=[],d,I),I),i,I,d,a,r?_:I);break;default:Qu(C,E,E,E,[""],I,0,a,I)}}u=c=f=0,v=m=1,y=C="",d=o;break;case 58:d=1+Pn(C),f=g;default:if(v<1){if(p==123)--v;else if(p==125&&v++==0&&$O()==125)continue}switch(C+=_y(p),p*v){case 38:m=c>0?1:(C+="\f",-1);break;case 44:a[u++]=(Pn(C)-1)*m,m=1;break;case 64:Bi()===45&&(C+=Rf(yn())),h=Bi(),c=d=Pn(y=C+=zO(Yu())),p++;break;case 45:g===45&&Pn(C)==2&&(v=0)}}return s}function Q0(e,t,n,r,i,s,o,a,l,u,c,d){for(var h=i-1,f=i===0?s:[""],g=CT(f),v=0,S=0,m=0;v<r;++v)for(var p=0,y=go(e,h+1,h=ET(S=o[v])),_=e;p<g;++p)(_=ST(S>0?f[p]+" "+y:W(y,/&\f/g,f[p])))&&(l[m++]=_);return Hd(e,t,n,i===0?Vd:a,l,u,c,d)}function VO(e,t,n,r){return Hd(e,t,n,_T,_y(DO()),go(e,2,-2),0,r)}function X0(e,t,n,r,i){return Hd(e,t,n,vy,go(e,0,r),go(e,r+1,-1),r,i)}function IT(e,t,n){switch(OO(e,t)){case 5103:return re+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return re+e+e;case 4789:return Ia+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return re+e+Ia+e+pe+e+e;case 5936:switch(je(e,t+11)){case 114:return re+e+pe+W(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return re+e+pe+W(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return re+e+pe+W(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return re+e+pe+e+e;case 6165:return re+e+pe+"flex-"+e+e;case 5187:return re+e+W(e,/(\w+).+(:[^]+)/,re+"box-$1$2"+pe+"flex-$1$2")+e;case 5443:return re+e+pe+"flex-item-"+W(e,/flex-|-self/g,"")+(qn(e,/flex-|baseline/)?"":pe+"grid-row-"+W(e,/flex-|-self/g,""))+e;case 4675:return re+e+pe+"flex-line-pack"+W(e,/align-content|flex-|-self/g,"")+e;case 5548:return re+e+pe+W(e,"shrink","negative")+e;case 5292:return re+e+pe+W(e,"basis","preferred-size")+e;case 6060:return re+"box-"+W(e,"-grow","")+re+e+pe+W(e,"grow","positive")+e;case 4554:return re+W(e,/([^-])(transform)/g,"$1"+re+"$2")+e;case 6187:return W(W(W(e,/(zoom-|grab)/,re+"$1"),/(image-set)/,re+"$1"),e,"")+e;case 5495:case 3959:return W(e,/(image-set\([^]*)/,re+"$1$`$1");case 4968:return W(W(e,/(.+:)(flex-)?(.*)/,re+"box-pack:$3"+pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+re+e+e;case 4200:if(!qn(e,/flex-|baseline/))return pe+"grid-column-align"+go(e,t)+e;break;case 2592:case 3360:return pe+W(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,qn(r.props,/grid-\w+-end/)})?~qu(e+(n=n[t].value),"span",0)?e:pe+W(e,"-start","")+e+pe+"grid-row-span:"+(~qu(n,"span",0)?qn(n,/\d+/):+qn(n,/\d+/)-+qn(e,/\d+/))+";":pe+W(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return qn(r.props,/grid-\w+-start/)})?e:pe+W(W(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return W(e,/(.+)-inline(.+)/,re+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pn(e)-1-t>6)switch(je(e,t+1)){case 109:if(je(e,t+4)!==45)break;case 102:return W(e,/(.+:)(.+)-([^]+)/,"$1"+re+"$2-$3$1"+Ia+(je(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~qu(e,"stretch",0)?IT(W(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return W(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return pe+i+":"+s+u+(o?pe+i+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if(je(e,t+6)===121)return W(e,":",":"+re)+e;break;case 6444:switch(je(e,je(e,14)===45?18:11)){case 120:return W(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+re+(je(e,14)===45?"inline-":"")+"box$3$1"+re+"$2$3$1"+pe+"$2box$3")+e;case 100:return W(e,":",":"+pe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return W(e,"scroll-","scroll-snap-")+e}return e}function Mc(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function WO(e,t,n,r){switch(e.type){case bO:if(e.children.length)break;case AO:case vy:return e.return=e.return||e.value;case _T:return"";case wT:return e.return=e.value+"{"+Mc(e.children,r)+"}";case Vd:if(!Pn(e.value=e.props.join(",")))return""}return Pn(n=Mc(e.children,r))?e.return=e.value+"{"+n+"}":""}function HO(e){var t=CT(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function GO(e){return function(t){t.root||(t=t.return)&&e(t)}}function KO(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case vy:e.return=IT(e.value,e.length,n);return;case wT:return Mc([kr(e,{value:W(e.value,"@","@"+re)})],r);case Vd:if(e.length)return NO(n=e.props,function(i){switch(qn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Is(kr(e,{props:[W(i,/:(read-\w+)/,":"+Ia+"$1")]})),Is(kr(e,{props:[i]})),um(e,{props:Y0(n,r)});break;case"::placeholder":Is(kr(e,{props:[W(i,/:(plac\w+)/,":"+re+"input-$1")]})),Is(kr(e,{props:[W(i,/:(plac\w+)/,":"+Ia+"$1")]})),Is(kr(e,{props:[W(i,/:(plac\w+)/,pe+"input-$1")]})),Is(kr(e,{props:[i]})),um(e,{props:Y0(n,r)});break}return""})}}var qO={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},vo=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",xT="active",kT="data-styled-version",Kd="6.1.8",wy=`/*!sc*/
`,Ey=typeof window<"u"&&"HTMLElement"in window,YO=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),QO={},qd=Object.freeze([]),_o=Object.freeze({});function PT(e,t,n){return n===void 0&&(n=_o),e.theme!==n.theme&&e.theme||t||n.theme}var RT=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),XO=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,JO=/(^-|-$)/g;function J0(e){return e.replace(XO,"-").replace(JO,"")}var ZO=/(a)(d)/gi,Su=52,Z0=function(e){return String.fromCharCode(e+(e>25?39:97))};function hm(e){var t,n="";for(t=Math.abs(e);t>Su;t=t/Su|0)n=Z0(t%Su)+n;return(Z0(t%Su)+n).replace(ZO,"$1-$2")}var Af,AT=5381,Bs=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},bT=function(e){return Bs(AT,e)};function Sy(e){return hm(bT(e)>>>0)}function eN(e){return e.displayName||e.name||"Component"}function bf(e){return typeof e=="string"&&!0}var OT=typeof Symbol=="function"&&Symbol.for,NT=OT?Symbol.for("react.memo"):60115,tN=OT?Symbol.for("react.forward_ref"):60112,nN={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},rN={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},DT={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},iN=((Af={})[tN]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Af[NT]=DT,Af);function ew(e){return("type"in(t=e)&&t.type.$$typeof)===NT?DT:"$$typeof"in e?iN[e.$$typeof]:nN;var t}var sN=Object.defineProperty,oN=Object.getOwnPropertyNames,tw=Object.getOwnPropertySymbols,aN=Object.getOwnPropertyDescriptor,lN=Object.getPrototypeOf,nw=Object.prototype;function $T(e,t,n){if(typeof t!="string"){if(nw){var r=lN(t);r&&r!==nw&&$T(e,r,n)}var i=oN(t);tw&&(i=i.concat(tw(t)));for(var s=ew(e),o=ew(t),a=0;a<i.length;++a){var l=i[a];if(!(l in rN||n&&n[l]||o&&l in o||s&&l in s)){var u=aN(t,l);try{sN(e,l,u)}catch{}}}}return e}function Xi(e){return typeof e=="function"}function Cy(e){return typeof e=="object"&&"styledComponentId"in e}function Di(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Fc(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function tl(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function fm(e,t,n){if(n===void 0&&(n=!1),!n&&!tl(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=fm(e[r],t[r]);else if(tl(t))for(var r in t)e[r]=fm(e[r],t[r]);return e}function Ty(e,t){Object.defineProperty(e,"toString",{value:t})}function Ji(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var uN=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw Ji(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(wy);return n},e}(),Xu=new Map,jc=new Map,Ju=1,Cu=function(e){if(Xu.has(e))return Xu.get(e);for(;jc.has(Ju);)Ju++;var t=Ju++;return Xu.set(e,t),jc.set(t,e),t},cN=function(e,t){Ju=t+1,Xu.set(e,t),jc.set(t,e)},dN="style[".concat(vo,"][").concat(kT,'="').concat(Kd,'"]'),hN=new RegExp("^".concat(vo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),fN=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},pN=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(wy),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(hN);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(cN(c,u),fN(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function mN(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var LT=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(vo,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(vo,xT),r.setAttribute(kT,Kd);var o=mN();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},gN=function(){function e(t){this.element=LT(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Ji(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),yN=function(){function e(t){this.element=LT(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),vN=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),rw=Ey,_N={isServer:!Ey,useCSSOMInjection:!YO},Uc=function(){function e(t,n,r){t===void 0&&(t=_o),n===void 0&&(n={});var i=this;this.options=Be(Be({},_N),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ey&&rw&&(rw=!1,function(s){for(var o=document.querySelectorAll(dN),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(vo)!==xT&&(pN(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Ty(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(d){var h=function(m){return jc.get(m)}(d);if(h===void 0)return"continue";var f=s.names.get(h),g=o.getGroup(d);if(f===void 0||g.length===0)return"continue";var v="".concat(vo,".g").concat(d,'[id="').concat(h,'"]'),S="";f!==void 0&&f.forEach(function(m){m.length>0&&(S+="".concat(m,","))}),l+="".concat(g).concat(v,'{content:"').concat(S,'"}').concat(wy)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return Cu(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Be(Be({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new vN(i):r?new gN(i):new yN(i)}(this.options),new uN(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Cu(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Cu(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Cu(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),wN=/&/g,EN=/^\s*\/\/.*$/gm;function MT(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=MT(n.children,t)),n})}function SN(e){var t,n,r,i=e===void 0?_o:e,s=i.options,o=s===void 0?_o:s,a=i.plugins,l=a===void 0?qd:a,u=function(h,f,g){return g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(t):h},c=l.slice();c.push(function(h){h.type===Vd&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(wN,n).replace(r,u))}),o.prefix&&c.push(KO),c.push(WO);var d=function(h,f,g,v){f===void 0&&(f=""),g===void 0&&(g=""),v===void 0&&(v="&"),t=v,n=f,r=new RegExp("\\".concat(n,"\\b"),"g");var S=h.replace(EN,""),m=BO(g||f?"".concat(g," ").concat(f," { ").concat(S," }"):S);o.namespace&&(m=MT(m,o.namespace));var p=[];return Mc(m,HO(c.concat(GO(function(y){return p.push(y)})))),p};return d.hash=l.length?l.reduce(function(h,f){return f.name||Ji(15),Bs(h,f.name)},AT).toString():"",d}var CN=new Uc,pm=SN(),FT=Lt.createContext({shouldForwardProp:void 0,styleSheet:CN,stylis:pm});FT.Consumer;Lt.createContext(void 0);function mm(){return w.useContext(FT)}var jT=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=pm);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ty(this,function(){throw Ji(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=pm),this.name+t.hash},e}(),TN=function(e){return e>="A"&&e<="Z"};function iw(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;TN(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var UT=function(e){return e==null||e===!1||e===""},zT=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!UT(s)&&(Array.isArray(s)&&s.isCss||Xi(s)?r.push("".concat(iw(i),":"),s,";"):tl(s)?r.push.apply(r,mo(mo(["".concat(i," {")],zT(s),!1),["}"],!1)):r.push("".concat(iw(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in qO||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Xr(e,t,n,r){if(UT(e))return[];if(Cy(e))return[".".concat(e.styledComponentId)];if(Xi(e)){if(!Xi(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return Xr(i,t,n,r)}var s;return e instanceof jT?n?(e.inject(n,r),[e.getName(r)]):[e]:tl(e)?zT(e):Array.isArray(e)?Array.prototype.concat.apply(qd,e.map(function(o){return Xr(o,t,n,r)})):[e.toString()]}function BT(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Xi(n)&&!Cy(n))return!1}return!0}var IN=bT(Kd),xN=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&BT(t),this.componentId=n,this.baseHash=Bs(IN,n),this.baseStyle=r,Uc.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Di(i,this.staticRulesId);else{var s=Fc(Xr(this.rules,t,n,r)),o=hm(Bs(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Di(i,o),this.staticRulesId=o}else{for(var l=Bs(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var h=Fc(Xr(d,t,n,r));l=Bs(l,h+c),u+=h}}if(u){var f=hm(l>>>0);n.hasNameForId(this.componentId,f)||n.insertRules(this.componentId,f,r(u,".".concat(f),void 0,this.componentId)),i=Di(i,f)}}return i},e}(),nl=Lt.createContext(void 0);nl.Consumer;function kN(e){var t=Lt.useContext(nl),n=w.useMemo(function(){return function(r,i){if(!r)throw Ji(14);if(Xi(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw Ji(8);return i?Be(Be({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Lt.createElement(nl.Provider,{value:n},e.children):null}var Of={};function PN(e,t,n){var r=Cy(e),i=e,s=!bf(e),o=t.attrs,a=o===void 0?qd:o,l=t.componentId,u=l===void 0?function(_,I){var E=typeof _!="string"?"sc":J0(_);Of[E]=(Of[E]||0)+1;var C="".concat(E,"-").concat(Sy(Kd+E+Of[E]));return I?"".concat(I,"-").concat(C):C}(t.displayName,t.parentComponentId):l,c=t.displayName,d=c===void 0?function(_){return bf(_)?"styled.".concat(_):"Styled(".concat(eN(_),")")}(e):c,h=t.displayName&&t.componentId?"".concat(J0(t.displayName),"-").concat(t.componentId):t.componentId||u,f=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;g=function(_,I){return v(_,I)&&S(_,I)}}else g=v}var m=new xN(n,h,r?i.componentStyle:void 0);function p(_,I){return function(E,C,x){var $=E.attrs,j=E.componentStyle,H=E.defaultProps,Ke=E.foldedComponentIds,Te=E.styledComponentId,Nt=E.target,Ss=Lt.useContext(nl),Ci=mm(),Bn=E.shouldForwardProp||Ci.shouldForwardProp,b=PT(C,Ss,H)||_o,L=function(pt,tt,Dt){for(var Cr,Cn=Be(Be({},tt),{className:void 0,theme:Dt}),Cs=0;Cs<pt.length;Cs+=1){var Tr=Xi(Cr=pt[Cs])?Cr(Cn):Cr;for(var Tn in Tr)Cn[Tn]=Tn==="className"?Di(Cn[Tn],Tr[Tn]):Tn==="style"?Be(Be({},Cn[Tn]),Tr[Tn]):Tr[Tn]}return tt.className&&(Cn.className=Di(Cn.className,tt.className)),Cn}($,C,b),B=L.as||Nt,ee={};for(var X in L)L[X]===void 0||X[0]==="$"||X==="as"||X==="theme"&&L.theme===b||(X==="forwardedAs"?ee.as=L.forwardedAs:Bn&&!Bn(X,B)||(ee[X]=L[X]));var Sn=function(pt,tt){var Dt=mm(),Cr=pt.generateAndInjectStyles(tt,Dt.styleSheet,Dt.stylis);return Cr}(j,L),ft=Di(Ke,Te);return Sn&&(ft+=" "+Sn),L.className&&(ft+=" "+L.className),ee[bf(B)&&!RT.has(B)?"class":"className"]=ft,ee.ref=x,w.createElement(B,ee)}(y,_,I)}p.displayName=d;var y=Lt.forwardRef(p);return y.attrs=f,y.componentStyle=m,y.displayName=d,y.shouldForwardProp=g,y.foldedComponentIds=r?Di(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=h,y.target=r?i.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=r?function(I){for(var E=[],C=1;C<arguments.length;C++)E[C-1]=arguments[C];for(var x=0,$=E;x<$.length;x++)fm(I,$[x],!0);return I}({},i.defaultProps,_):_}}),Ty(y,function(){return".".concat(y.styledComponentId)}),s&&$T(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function sw(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var ow=function(e){return Object.assign(e,{isCss:!0})};function Iy(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Xi(e)||tl(e))return ow(Xr(sw(qd,mo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Xr(r):ow(Xr(sw(r,t)))}function gm(e,t,n){if(n===void 0&&(n=_o),!t)throw Ji(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,Iy.apply(void 0,mo([i],s,!1)))};return r.attrs=function(i){return gm(e,t,Be(Be({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return gm(e,t,Be(Be({},n),i))},r}var VT=function(e){return gm(PN,e)},z=VT;RT.forEach(function(e){z[e]=VT(e)});var RN=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=BT(t),Uc.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var s=i(Fc(Xr(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Uc.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function AN(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Iy.apply(void 0,mo([e],t,!1)),i="sc-global-".concat(Sy(JSON.stringify(r))),s=new RN(r,i),o=function(l){var u=mm(),c=Lt.useContext(nl),d=Lt.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(d,l,u.styleSheet,c,u.stylis),Lt.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,l,u.styleSheet,c,u.stylis),function(){return s.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,d,h){if(s.isStatic)s.renderStyles(l,QO,c,h);else{var f=Be(Be({},u),{theme:PT(u,d,o.defaultProps)});s.renderStyles(l,f,c,h)}}return Lt.memo(o)}function VW(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Fc(Iy.apply(void 0,mo([e],t,!1))),i=Sy(r);return new jT(i,r)}const bN=AN`

  * {
    padding: 0;
    margin: 0;
    border: 0;
    
  }

  body {
    font-family: 'Inter', sans-serif;
    color: ${({theme:e})=>e.primaryBlack};
    background-color: #f9f7f7;
    height: 100%;
    width: 100%;
    font-size: 100%;
    line-height: 1;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(to top left,  ${({theme:e})=>e.primaryYellow}, rgba(25, 26, 21, 0) 35%);
    min-height: 100vh;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: 400;
  }

  ul li {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

  a {
    text-decoration: none;
    &:hover {
      color: rgb(0, 250, 225);
    }
    &:visited {
      text-decoration: none;
    }
  }

  button {
    cursor: pointer;
  }

  *, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  nav, footer, header {
    display: block;
  }

  input, button, textarea {
    font-family: inherit;
  }

  input::-ms-clear {
    display: none;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
`;var WT={exports:{}},HT={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dl=w;function ON(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var NN=typeof Object.is=="function"?Object.is:ON,DN=Dl.useSyncExternalStore,$N=Dl.useRef,LN=Dl.useEffect,MN=Dl.useMemo,FN=Dl.useDebugValue;HT.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=$N(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=MN(function(){function l(f){if(!u){if(u=!0,c=f,f=r(f),i!==void 0&&o.hasValue){var g=o.value;if(i(g,f))return d=g}return d=f}if(g=d,NN(c,f))return g;var v=r(f);return i!==void 0&&i(g,v)?g:(c=f,d=v)}var u=!1,c,d,h=n===void 0?null:n;return[function(){return l(t())},h===null?void 0:function(){return l(h())}]},[t,n,r,i]);var a=DN(e,s[0],s[1]);return LN(function(){o.hasValue=!0,o.value=a},[a]),FN(a),a};WT.exports=HT;var jN=WT.exports,Ft="default"in fp?Lt:fp,aw=Symbol.for("react-redux-context"),lw=typeof globalThis<"u"?globalThis:{};function UN(){if(!Ft.createContext)return{};const e=lw[aw]??(lw[aw]=new Map);let t=e.get(Ft.createContext);return t||(t=Ft.createContext(null),e.set(Ft.createContext,t)),t}var oi=UN(),zN=()=>{throw new Error("uSES not initialized!")};function xy(e=oi){return function(){return Ft.useContext(e)}}var GT=xy(),KT=zN,BN=e=>{KT=e},VN=(e,t)=>e===t;function WN(e=oi){const t=e===oi?GT:xy(e),n=(r,i={})=>{const{equalityFn:s=VN,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:c,identityFunctionCheck:d}=t();Ft.useRef(!0);const h=Ft.useCallback({[r.name](g){return r(g)}}[r.name],[r,c,o.stabilityCheck]),f=KT(l.addNestedSub,a.getState,u||a.getState,h,s);return Ft.useDebugValue(f),f};return Object.assign(n,{withTypes:()=>n}),n}var WW=WN();function HN(e){e()}function GN(){let e=null,t=null;return{clear(){e=null,t=null},notify(){HN(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var uw={notify(){},get:()=>[]};function KN(e,t){let n,r=uw,i=0,s=!1;function o(v){c();const S=r.subscribe(v);let m=!1;return()=>{m||(m=!0,S(),d())}}function a(){r.notify()}function l(){g.onStateChange&&g.onStateChange()}function u(){return s}function c(){i++,n||(n=t?t.addNestedSub(l):e.subscribe(l),r=GN())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=uw)}function h(){s||(s=!0,c())}function f(){s&&(s=!1,d())}const g={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:h,tryUnsubscribe:f,getListeners:()=>r};return g}var qN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",YN=qN?Ft.useLayoutEffect:Ft.useEffect;function QN({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=Ft.useMemo(()=>{const u=KN(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[e,r,i,s]),a=Ft.useMemo(()=>e.getState(),[e]);YN(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=t||oi;return Ft.createElement(l.Provider,{value:o},n)}var XN=QN;function qT(e=oi){const t=e===oi?GT:xy(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var JN=qT();function ZN(e=oi){const t=e===oi?JN:qT(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var HW=ZN();BN(jN.useSyncExternalStoreWithSelector);function qe(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var eD=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),cw=eD,Nf=()=>Math.random().toString(36).substring(7).split("").join("."),tD={INIT:`@@redux/INIT${Nf()}`,REPLACE:`@@redux/REPLACE${Nf()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Nf()}`},zc=tD;function ky(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Py(e,t,n){if(typeof e!="function")throw new Error(qe(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(qe(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(qe(1));return n(Py)(e,t)}let r=e,i=t,s=new Map,o=s,a=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((S,m)=>{o.set(m,S)}))}function c(){if(l)throw new Error(qe(3));return i}function d(S){if(typeof S!="function")throw new Error(qe(4));if(l)throw new Error(qe(5));let m=!0;u();const p=a++;return o.set(p,S),function(){if(m){if(l)throw new Error(qe(6));m=!1,u(),o.delete(p),s=null}}}function h(S){if(!ky(S))throw new Error(qe(7));if(typeof S.type>"u")throw new Error(qe(8));if(typeof S.type!="string")throw new Error(qe(17));if(l)throw new Error(qe(9));try{l=!0,i=r(i,S)}finally{l=!1}return(s=o).forEach(p=>{p()}),S}function f(S){if(typeof S!="function")throw new Error(qe(10));r=S,h({type:zc.REPLACE})}function g(){const S=d;return{subscribe(m){if(typeof m!="object"||m===null)throw new Error(qe(11));function p(){const _=m;_.next&&_.next(c())}return p(),{unsubscribe:S(p)}},[cw](){return this}}}return h({type:zc.INIT}),{dispatch:h,subscribe:d,getState:c,replaceReducer:f,[cw]:g}}function nD(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:zc.INIT})>"u")throw new Error(qe(12));if(typeof n(void 0,{type:zc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(qe(13))})}function YT(e){const t=Object.keys(e),n={};for(let s=0;s<t.length;s++){const o=t[s];typeof e[o]=="function"&&(n[o]=e[o])}const r=Object.keys(n);let i;try{nD(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let l=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],h=n[d],f=o[d],g=h(f,a);if(typeof g>"u")throw a&&a.type,new Error(qe(14));u[d]=g,l=l||g!==f}return l=l||r.length!==Object.keys(o).length,l?u:o}}function Bc(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function rD(...e){return t=>(n,r)=>{const i=t(n,r);let s=()=>{throw new Error(qe(15))};const o={getState:i.getState,dispatch:(l,...u)=>s(l,...u)},a=e.map(l=>l(o));return s=Bc(...a)(i.dispatch),{...i,dispatch:s}}}function iD(e){return ky(e)&&"type"in e&&typeof e.type=="string"}var QT=Symbol.for("immer-nothing"),dw=Symbol.for("immer-draftable"),Vt=Symbol.for("immer-state");function cn(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var wo=Object.getPrototypeOf;function ai(e){return!!e&&!!e[Vt]}function fr(e){var t;return e?XT(e)||Array.isArray(e)||!!e[dw]||!!((t=e.constructor)!=null&&t[dw])||Qd(e)||Xd(e):!1}var sD=Object.prototype.constructor.toString();function XT(e){if(!e||typeof e!="object")return!1;const t=wo(e);if(t===null)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===sD}function Vc(e,t){Yd(e)===0?Reflect.ownKeys(e).forEach(n=>{t(n,e[n],e)}):e.forEach((n,r)=>t(r,n,e))}function Yd(e){const t=e[Vt];return t?t.type_:Array.isArray(e)?1:Qd(e)?2:Xd(e)?3:0}function ym(e,t){return Yd(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function JT(e,t,n){const r=Yd(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function oD(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Qd(e){return e instanceof Map}function Xd(e){return e instanceof Set}function ki(e){return e.copy_||e.base_}function vm(e,t){if(Qd(e))return new Map(e);if(Xd(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&XT(e))return wo(e)?{...e}:Object.assign(Object.create(null),e);const n=Object.getOwnPropertyDescriptors(e);delete n[Vt];let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){const s=r[i],o=n[s];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[s]})}return Object.create(wo(e),n)}function Ry(e,t=!1){return Jd(e)||ai(e)||!fr(e)||(Yd(e)>1&&(e.set=e.add=e.clear=e.delete=aD),Object.freeze(e),t&&Object.entries(e).forEach(([n,r])=>Ry(r,!0))),e}function aD(){cn(2)}function Jd(e){return Object.isFrozen(e)}var lD={};function Zi(e){const t=lD[e];return t||cn(0,e),t}var rl;function ZT(){return rl}function uD(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function hw(e,t){t&&(Zi("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function _m(e){wm(e),e.drafts_.forEach(cD),e.drafts_=null}function wm(e){e===rl&&(rl=e.parent_)}function fw(e){return rl=uD(rl,e)}function cD(e){const t=e[Vt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function pw(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[Vt].modified_&&(_m(t),cn(4)),fr(e)&&(e=Wc(t,e),t.parent_||Hc(t,e)),t.patches_&&Zi("Patches").generateReplacementPatches_(n[Vt].base_,e,t.patches_,t.inversePatches_)):e=Wc(t,n,[]),_m(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==QT?e:void 0}function Wc(e,t,n){if(Jd(t))return t;const r=t[Vt];if(!r)return Vc(t,(i,s)=>mw(e,r,t,i,s,n)),t;if(r.scope_!==e)return t;if(!r.modified_)return Hc(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),Vc(s,(a,l)=>mw(e,r,i,a,l,n,o)),Hc(e,i,!1),n&&e.patches_&&Zi("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function mw(e,t,n,r,i,s,o){if(ai(i)){const a=s&&t&&t.type_!==3&&!ym(t.assigned_,r)?s.concat(r):void 0,l=Wc(e,i,a);if(JT(n,r,l),ai(l))e.canAutoFreeze_=!1;else return}else o&&n.add(i);if(fr(i)&&!Jd(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Wc(e,i),(!t||!t.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&Hc(e,i)}}function Hc(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Ry(t,n)}function dD(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:ZT(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=Ay;n&&(i=[r],s=il);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var Ay={get(e,t){if(t===Vt)return e;const n=ki(e);if(!ym(n,t))return hD(e,n,t);const r=n[t];return e.finalized_||!fr(r)?r:r===Df(e.base_,t)?($f(e),e.copy_[t]=Sm(r,e)):r},has(e,t){return t in ki(e)},ownKeys(e){return Reflect.ownKeys(ki(e))},set(e,t,n){const r=eI(ki(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=Df(ki(e),t),s=i==null?void 0:i[Vt];if(s&&s.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(oD(n,i)&&(n!==void 0||ym(e.base_,t)))return!0;$f(e),Em(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Df(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,$f(e),Em(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=ki(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty(){cn(11)},getPrototypeOf(e){return wo(e.base_)},setPrototypeOf(){cn(12)}},il={};Vc(Ay,(e,t)=>{il[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});il.deleteProperty=function(e,t){return il.set.call(this,e,t,void 0)};il.set=function(e,t,n){return Ay.set.call(this,e[0],t,n,e[0])};function Df(e,t){const n=e[Vt];return(n?ki(n):e)[t]}function hD(e,t,n){var i;const r=eI(t,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function eI(e,t){if(!(t in e))return;let n=wo(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=wo(n)}}function Em(e){e.modified_||(e.modified_=!0,e.parent_&&Em(e.parent_))}function $f(e){e.copy_||(e.copy_=vm(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var fD=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,n,r)=>{if(typeof t=="function"&&typeof n!="function"){const s=n;n=t;const o=this;return function(l=s,...u){return o.produce(l,c=>n.call(this,c,...u))}}typeof n!="function"&&cn(6),r!==void 0&&typeof r!="function"&&cn(7);let i;if(fr(t)){const s=fw(this),o=Sm(t,void 0);let a=!0;try{i=n(o),a=!1}finally{a?_m(s):wm(s)}return hw(s,r),pw(i,s)}else if(!t||typeof t!="object"){if(i=n(t),i===void 0&&(i=t),i===QT&&(i=void 0),this.autoFreeze_&&Ry(i,!0),r){const s=[],o=[];Zi("Patches").generateReplacementPatches_(t,i,s,o),r(s,o)}return i}else cn(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(o,...a)=>this.produceWithPatches(o,l=>t(l,...a));let r,i;return[this.produce(t,n,(o,a)=>{r=o,i=a}),r,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){fr(e)||cn(8),ai(e)&&(e=tI(e));const t=fw(this),n=Sm(e,void 0);return n[Vt].isManual_=!0,wm(t),n}finishDraft(e,t){const n=e&&e[Vt];(!n||!n.isManual_)&&cn(9);const{scope_:r}=n;return hw(r,t),pw(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=Zi("Patches").applyPatches_;return ai(e)?r(e,t):this.produce(e,i=>r(i,t))}};function Sm(e,t){const n=Qd(e)?Zi("MapSet").proxyMap_(e,t):Xd(e)?Zi("MapSet").proxySet_(e,t):dD(e,t);return(t?t.scope_:ZT()).drafts_.push(n),n}function tI(e){return ai(e)||cn(10,e),nI(e)}function nI(e){if(!fr(e)||Jd(e))return e;const t=e[Vt];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=vm(e,t.scope_.immer_.useStrictShallowCopy_)}else n=vm(e,!0);return Vc(n,(r,i)=>{JT(n,r,nI(i))}),t&&(t.finalized_=!1),n}var Wt=new fD,rI=Wt.produce;Wt.produceWithPatches.bind(Wt);Wt.setAutoFreeze.bind(Wt);Wt.setUseStrictShallowCopy.bind(Wt);Wt.applyPatches.bind(Wt);Wt.createDraft.bind(Wt);Wt.finishDraft.bind(Wt);function pD(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function mD(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function gD(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${t}[${n}]`)}}var gw=e=>Array.isArray(e)?e:[e];function yD(e){const t=Array.isArray(e[0])?e[0]:e;return gD(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function vD(e,t){const n=[],{length:r}=e;for(let i=0;i<r;i++)n.push(e[i].apply(null,t));return n}var _D=class{constructor(e){this.value=e}deref(){return this.value}},wD=typeof WeakRef<"u"?WeakRef:_D,ED=0,yw=1;function Tu(){return{s:ED,v:void 0,o:null,p:null}}function by(e,t={}){let n=Tu();const{resultEqualityCheck:r}=t;let i,s=0;function o(){var d;let a=n;const{length:l}=arguments;for(let h=0,f=l;h<f;h++){const g=arguments[h];if(typeof g=="function"||typeof g=="object"&&g!==null){let v=a.o;v===null&&(a.o=v=new WeakMap);const S=v.get(g);S===void 0?(a=Tu(),v.set(g,a)):a=S}else{let v=a.p;v===null&&(a.p=v=new Map);const S=v.get(g);S===void 0?(a=Tu(),v.set(g,a)):a=S}}const u=a;let c;if(a.s===yw?c=a.v:(c=e.apply(null,arguments),s++),u.s=yw,r){const h=((d=i==null?void 0:i.deref)==null?void 0:d.call(i))??i;h!=null&&r(h,c)&&(c=h,s!==0&&s--),i=typeof c=="object"&&c!==null||typeof c=="function"?new wD(c):c}return u.v=c,c}return o.clearCache=()=>{n=Tu(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function iI(e,...t){const n=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,r=(...i)=>{let s=0,o=0,a,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),pD(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const c={...n,...l},{memoize:d,memoizeOptions:h=[],argsMemoize:f=by,argsMemoizeOptions:g=[],devModeChecks:v={}}=c,S=gw(h),m=gw(g),p=yD(i),y=d(function(){return s++,u.apply(null,arguments)},...S),_=f(function(){o++;const E=vD(p,arguments);return a=y.apply(null,E),a},...m);return Object.assign(_,{resultFunc:u,memoizedResultFunc:y,dependencies:p,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:d,argsMemoize:f})};return Object.assign(r,{withTypes:()=>r}),r}var SD=iI(by),CD=Object.assign((e,t=SD)=>{mD(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const n=Object.keys(e),r=n.map(s=>e[s]);return t(r,(...s)=>s.reduce((o,a,l)=>(o[n[l]]=a,o),{}))},{withTypes:()=>CD});function sI(e){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,e):i(s)}var TD=sI(),ID=sI,xD=(...e)=>{const t=iI(...e),n=Object.assign((...r)=>{const i=t(...r),s=(o,...a)=>i(ai(o)?tI(o):o,...a);return Object.assign(s,i),s},{withTypes:()=>n});return n};xD(by);var kD=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Bc:Bc.apply(null,arguments)},PD=e=>e&&typeof e.match=="function";function or(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(At(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>iD(r)&&r.type===e,n}var oI=class da extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,da.prototype)}static get[Symbol.species](){return da}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new da(...t[0].concat(this)):new da(...t.concat(this))}};function vw(e){return fr(e)?rI(e,()=>{}):e}function _w(e,t,n){if(e.has(t)){let i=e.get(t);return n.update&&(i=n.update(i,t,e),e.set(t,i)),i}if(!n.insert)throw new Error(At(10));const r=n.insert(t,e);return e.set(t,r),r}function RD(e){return typeof e=="boolean"}var AD=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=t??{};let o=new oI;return n&&(RD(n)?o.push(TD):o.push(ID(n.extraArgument))),o},bD="RTK_autoBatch",aI=e=>t=>{setTimeout(t,e)},OD=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:aI(10),ND=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,s=!1,o=!1;const a=new Set,l=e.type==="tick"?queueMicrotask:e.type==="raf"?OD:e.type==="callback"?e.queueNotification:aI(e.timeout),u=()=>{o=!1,s&&(s=!1,a.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),h=r.subscribe(d);return a.add(c),()=>{h(),a.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[bD]),s=!i,s&&(o||(o=!0,l(u))),r.dispatch(c)}finally{i=!0}}})},DD=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new oI(e);return r&&i.push(ND(typeof r=="object"?r:void 0)),i},$D=!0;function LD(e){const t=AD(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=e||{};let a;if(typeof n=="function")a=n;else if(ky(n))a=YT(n);else throw new Error(At(1));let l;typeof r=="function"?l=r(t):l=t();let u=Bc;i&&(u=kD({trace:!$D,...typeof i=="object"&&i}));const c=rD(...l),d=DD(c);let h=typeof o=="function"?o(d):d();const f=u(...h);return Py(a,s,f)}function lI(e){const t={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(At(28));if(a in t)throw new Error(At(29));return t[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return e(i),[t,n,r]}function MD(e){return typeof e=="function"}function FD(e,t){let[n,r,i]=lI(t),s;if(MD(e))s=()=>vw(e());else{const a=vw(e);s=()=>a}function o(a=s(),l){let u=[n[l.type],...r.filter(({matcher:c})=>c(l)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(ai(c)){const f=d(c,l);return f===void 0?c:f}else{if(fr(c))return rI(c,h=>d(h,l));{const h=d(c,l);if(h===void 0){if(c===null)return c;throw new Error(At(9))}return h}}return c},a)}return o.getInitialState=s,o}var jD="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",uI=(e=21)=>{let t="",n=e;for(;n--;)t+=jD[Math.random()*64|0];return t},UD=(e,t)=>PD(e)?e.match(t):e(t);function zD(...e){return t=>e.some(n=>UD(n,t))}var BD=["name","message","stack","code"],Lf=class{constructor(e,t){ef(this,"_type");this.payload=e,this.meta=t}},ww=class{constructor(e,t){ef(this,"_type");this.payload=e,this.meta=t}},VD=e=>{if(typeof e=="object"&&e!==null){const t={};for(const n of BD)typeof e[n]=="string"&&(t[n]=e[n]);return t}return{message:String(e)}},Zd=(()=>{function e(t,n,r){const i=or(t+"/fulfilled",(l,u,c,d)=>({payload:l,meta:{...d||{},arg:c,requestId:u,requestStatus:"fulfilled"}})),s=or(t+"/pending",(l,u,c)=>({payload:void 0,meta:{...c||{},arg:u,requestId:l,requestStatus:"pending"}})),o=or(t+"/rejected",(l,u,c,d,h)=>({payload:d,error:(r&&r.serializeError||VD)(l||"Rejected"),meta:{...h||{},arg:c,requestId:u,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function a(l){return(u,c,d)=>{const h=r!=null&&r.idGenerator?r.idGenerator(l):uI(),f=new AbortController;let g,v;function S(p){v=p,f.abort()}const m=async function(){var _,I;let p;try{let E=(_=r==null?void 0:r.condition)==null?void 0:_.call(r,l,{getState:c,extra:d});if(HD(E)&&(E=await E),E===!1||f.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const C=new Promise((x,$)=>{g=()=>{$({name:"AbortError",message:v||"Aborted"})},f.signal.addEventListener("abort",g)});u(s(h,l,(I=r==null?void 0:r.getPendingMeta)==null?void 0:I.call(r,{requestId:h,arg:l},{getState:c,extra:d}))),p=await Promise.race([C,Promise.resolve(n(l,{dispatch:u,getState:c,extra:d,requestId:h,signal:f.signal,abort:S,rejectWithValue:(x,$)=>new Lf(x,$),fulfillWithValue:(x,$)=>new ww(x,$)})).then(x=>{if(x instanceof Lf)throw x;return x instanceof ww?i(x.payload,h,l,x.meta):i(x,h,l)})])}catch(E){p=E instanceof Lf?o(null,h,l,E.payload,E.meta):o(E,h,l)}finally{g&&f.signal.removeEventListener("abort",g)}return r&&!r.dispatchConditionRejection&&o.match(p)&&p.meta.condition||u(p),p}();return Object.assign(m,{abort:S,requestId:h,arg:l,unwrap(){return m.then(WD)}})}}return Object.assign(a,{pending:s,rejected:o,fulfilled:i,settled:zD(o,i),typePrefix:t})}return e.withTypes=()=>e,e})();function WD(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function HD(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var GD=Symbol.for("rtk-slice-createasyncthunk");function KD(e,t){return`${e}/${t}`}function qD({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[GD];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(At(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(QD()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(y,_){const I=typeof y=="string"?y:y.type;if(!I)throw new Error(At(12));if(I in u.sliceCaseReducersByType)throw new Error(At(13));return u.sliceCaseReducersByType[I]=_,c},addMatcher(y,_){return u.sliceMatchers.push({matcher:y,reducer:_}),c},exposeAction(y,_){return u.actionCreators[y]=_,c},exposeCaseReducer(y,_){return u.sliceCaseReducersByName[y]=_,c}};l.forEach(y=>{const _=a[y],I={reducerName:y,type:KD(s,y),createNotation:typeof i.reducers=="function"};JD(_)?e$(I,_,c,t):XD(I,_,c)});function d(){const[y={},_=[],I=void 0]=typeof i.extraReducers=="function"?lI(i.extraReducers):[i.extraReducers],E={...y,...u.sliceCaseReducersByType};return FD(i.initialState,C=>{for(let x in E)C.addCase(x,E[x]);for(let x of u.sliceMatchers)C.addMatcher(x.matcher,x.reducer);for(let x of _)C.addMatcher(x.matcher,x.reducer);I&&C.addDefaultCase(I)})}const h=y=>y,f=new Map;let g;function v(y,_){return g||(g=d()),g(y,_)}function S(){return g||(g=d()),g.getInitialState()}function m(y,_=!1){function I(C){let x=C[y];return typeof x>"u"&&_&&(x=S()),x}function E(C=h){const x=_w(f,_,{insert:()=>new WeakMap});return _w(x,C,{insert:()=>{const $={};for(const[j,H]of Object.entries(i.selectors??{}))$[j]=YD(H,C,S,_);return $}})}return{reducerPath:y,getSelectors:E,get selectors(){return E(I)},selectSlice:I}}const p={name:s,reducer:v,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:S,...m(o),injectInto(y,{reducerPath:_,...I}={}){const E=_??o;return y.inject({reducerPath:E,reducer:v},I),{...p,...m(E,!0)}}};return p}}function YD(e,t,n,r){function i(s,...o){let a=t(s);return typeof a>"u"&&r&&(a=n()),e(a,...o)}return i.unwrapped=e,i}var cI=qD();function QD(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function XD({type:e,reducerName:t,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!ZD(r))throw new Error(At(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(e,s).exposeCaseReducer(t,s).exposeAction(t,o?or(e,o):or(e))}function JD(e){return e._reducerDefinitionType==="asyncThunk"}function ZD(e){return e._reducerDefinitionType==="reducerWithPrepare"}function e$({type:e,reducerName:t},n,r,i){if(!i)throw new Error(At(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:u,options:c}=n,d=i(e,s,c);r.exposeAction(t,d),o&&r.addCase(d.fulfilled,o),a&&r.addCase(d.pending,a),l&&r.addCase(d.rejected,l),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(t,{fulfilled:o||Iu,pending:a||Iu,rejected:l||Iu,settled:u||Iu})}function Iu(){}var t$=(e,t)=>{if(typeof e!="function")throw new Error(At(32))},Oy="listenerMiddleware",n$=e=>{let{type:t,actionCreator:n,matcher:r,predicate:i,effect:s}=e;if(t)i=or(t).match;else if(n)t=n.type,i=n.match;else if(r)i=r;else if(!i)throw new Error(At(21));return t$(s),{predicate:i,type:t,effect:s}},r$=Object.assign(e=>{const{type:t,predicate:n,effect:r}=n$(e);return{id:uI(),effect:r,type:t,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(At(22))}}},{withTypes:()=>r$}),i$=Object.assign(or(`${Oy}/add`),{withTypes:()=>i$});or(`${Oy}/removeAll`);var s$=Object.assign(or(`${Oy}/remove`),{withTypes:()=>s$});function At(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Ny="persist:",dI="persist/FLUSH",Dy="persist/REHYDRATE",hI="persist/PAUSE",fI="persist/PERSIST",pI="persist/PURGE",mI="persist/REGISTER",o$=-1;function Ew(e){return u$(e)||l$(e)||a$()}function a$(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l$(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function u$(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function Sw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Cm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sw(n,!0).forEach(function(r){c$(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sw(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function c$(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var gI={registry:[],bootstrapped:!1},d$=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:gI,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case mI:return Cm({},t,{registry:[].concat(Ew(t.registry),[n.key])});case Dy:var r=t.registry.indexOf(n.key),i=Ew(t.registry);return i.splice(r,1),Cm({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function h$(e,t,n){var r=n||!1,i=Py(d$,gI,t&&t.enhancer?t.enhancer:void 0),s=function(u){i.dispatch({type:mI,key:u})},o=function(u,c,d){var h={type:Dy,payload:c,err:d,key:u};e.dispatch(h),i.dispatch(h),r&&a.getState().bootstrapped&&(r(),r=!1)},a=Cm({},i,{purge:function(){var u=[];return e.dispatch({type:pI,result:function(d){u.push(d)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:dI,result:function(d){u.push(d)}}),Promise.all(u)},pause:function(){e.dispatch({type:hI})},persist:function(){e.dispatch({type:fI,register:s,rehydrate:o})}});return t&&t.manualPersist||a.persist(),a}function Zu(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Zu=function(n){return typeof n}:Zu=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Zu(e)}function Cw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function f$(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Cw(n,!0).forEach(function(r){p$(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cw(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function p$(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m$(e,t,n,r){r.debug;var i=f$({},n);return e&&Zu(e)==="object"&&Object.keys(e).forEach(function(s){s!=="_persist"&&t[s]===n[s]&&(i[s]=e[s])}),i}function g$(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,s="".concat(e.keyPrefix!==void 0?e.keyPrefix:Ny).concat(e.key),o=e.storage,a;e.serialize===!1?a=function(I){return I}:typeof e.serialize=="function"?a=e.serialize:a=y$;var l=e.writeFailHandler||null,u={},c={},d=[],h=null,f=null,g=function(I){Object.keys(I).forEach(function(E){m(E)&&u[E]!==I[E]&&d.indexOf(E)===-1&&d.push(E)}),Object.keys(u).forEach(function(E){I[E]===void 0&&m(E)&&d.indexOf(E)===-1&&u[E]!==void 0&&d.push(E)}),h===null&&(h=setInterval(v,i)),u=I};function v(){if(d.length===0){h&&clearInterval(h),h=null;return}var _=d.shift(),I=r.reduce(function(E,C){return C.in(E,_,u)},u[_]);if(I!==void 0)try{c[_]=a(I)}catch(E){console.error("redux-persist/createPersistoid: error serializing state",E)}else delete c[_];d.length===0&&S()}function S(){Object.keys(c).forEach(function(_){u[_]===void 0&&delete c[_]}),f=o.setItem(s,a(c)).catch(p)}function m(_){return!(n&&n.indexOf(_)===-1&&_!=="_persist"||t&&t.indexOf(_)!==-1)}function p(_){l&&l(_)}var y=function(){for(;d.length!==0;)v();return f||Promise.resolve()};return{update:g,flush:y}}function y$(e){return JSON.stringify(e)}function v$(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Ny).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(o){return o}:typeof e.deserialize=="function"?i=e.deserialize:i=_$,r.getItem(n).then(function(s){if(s)try{var o={},a=i(s);return Object.keys(a).forEach(function(l){o[l]=t.reduceRight(function(u,c){return c.out(u,l,a)},i(a[l]))}),o}catch(l){throw l}else return})}function _$(e){return JSON.parse(e)}function w$(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Ny).concat(e.key);return t.removeItem(n,E$)}function E$(e){}function Tw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Wn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tw(n,!0).forEach(function(r){S$(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tw(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function S$(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C$(e,t){if(e==null)return{};var n=T$(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function T$(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var I$=5e3;function yI(e,t){var n=e.version!==void 0?e.version:o$;e.debug;var r=e.stateReconciler===void 0?m$:e.stateReconciler,i=e.getStoredState||v$,s=e.timeout!==void 0?e.timeout:I$,o=null,a=!1,l=!0,u=function(d){return d._persist.rehydrated&&o&&!l&&o.update(d),d};return function(c,d){var h=c||{},f=h._persist,g=C$(h,["_persist"]),v=g;if(d.type===fI){var S=!1,m=function(x,$){S||(d.rehydrate(e.key,x,$),S=!0)};if(s&&setTimeout(function(){!S&&m(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},s),l=!1,o||(o=g$(e)),f)return Wn({},t(v,d),{_persist:f});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(e.key),i(e).then(function(C){var x=e.migrate||function($,j){return Promise.resolve($)};x(C,n).then(function($){m($)},function($){m(void 0,$)})},function(C){m(void 0,C)}),Wn({},t(v,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===pI)return a=!0,d.result(w$(e)),Wn({},t(v,d),{_persist:f});if(d.type===dI)return d.result(o&&o.flush()),Wn({},t(v,d),{_persist:f});if(d.type===hI)l=!0;else if(d.type===Dy){if(a)return Wn({},v,{_persist:Wn({},f,{rehydrated:!0})});if(d.key===e.key){var p=t(v,d),y=d.payload,_=r!==!1&&y!==void 0?r(y,c,p,e):p,I=Wn({},_,{_persist:Wn({},f,{rehydrated:!0})});return u(I)}}}if(!f)return t(c,d);var E=t(v,d);return E===v?c:u(Wn({},E,{_persist:f}))}}var $y={},Ly={};Ly.__esModule=!0;Ly.default=P$;function ec(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ec=function(n){return typeof n}:ec=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ec(e)}function Mf(){}var x$={getItem:Mf,setItem:Mf,removeItem:Mf};function k$(e){if((typeof self>"u"?"undefined":ec(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function P$(e){var t="".concat(e,"Storage");return k$(t)?self[t]:x$}$y.__esModule=!0;$y.default=b$;var R$=A$(Ly);function A$(e){return e&&e.__esModule?e:{default:e}}function b$(e){var t=(0,R$.default)(e);return{getItem:function(r){return new Promise(function(i,s){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(t.removeItem(r))})}}}var My=void 0,O$=N$($y);function N$(e){return e&&e.__esModule?e:{default:e}}var D$=(0,O$.default)("local");My=D$;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=function(e,t){if(!e)throw $o(t)},$o=function(e){return new Error("Firebase Database ("+vI.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},$$=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Fy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(h=64)),r.push(n[c],n[d],n[h],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(_I(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):$$(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new L$;const h=s<<2|a>>4;if(r.push(h),u!==64){const f=a<<4&240|u>>2;if(r.push(f),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class L$ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wI=function(e){const t=_I(e);return Fy.encodeByteArray(t,!0)},Gc=function(e){return wI(e).replace(/\./g,"")},Kc=function(e){try{return Fy.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M$(e){return EI(void 0,e)}function EI(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!F$(n)||(e[n]=EI(e[n],t[n]));return e}function F$(e){return e!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j$(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U$=()=>j$().__FIREBASE_DEFAULTS__,z$=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},B$=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Kc(e[1]);return t&&JSON.parse(t)},jy=()=>{try{return U$()||z$()||B$()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},SI=e=>{var t,n;return(n=(t=jy())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},CI=e=>{const t=SI(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},TI=()=>{var e;return(e=jy())===null||e===void 0?void 0:e.config},II=e=>{var t;return(t=jy())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Gc(JSON.stringify(n)),Gc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function V$(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function kI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function W$(){const e=ht();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function PI(){return vI.NODE_ADMIN===!0}function H$(){try{return typeof indexedDB=="object"}catch{return!1}}function G$(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K$="FirebaseError";class wr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=K$,Object.setPrototypeOf(this,wr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$l.prototype.create)}}class $l{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?q$(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new wr(i,a,r)}}function q$(e,t){return e.replace(Y$,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Y$=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(e){return JSON.parse(e)}function Ne(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=sl(Kc(s[0])||""),n=sl(Kc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},Q$=function(e){const t=RI(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},X$=function(e){const t=RI(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Eo(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function Tm(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function qc(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function Yc(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Iw(s)&&Iw(o)){if(!Yc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Iw(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ha(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function fa(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J${constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const r=this.W_;if(typeof t=="string")for(let d=0;d<16;d++)r[d]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const h=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<n;)if(s[o]=t.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=t[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)t[r]=this.chain_[i]>>s&255,++r;return t}}function Z$(e,t){const n=new eL(e,t);return n.subscribe.bind(n)}class eL{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tL(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ff),i.error===void 0&&(i.error=Ff),i.complete===void 0&&(i.complete=Ff);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tL(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ff(){}function zy(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nL=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,R(r<e.length,"Surrogate pair missing trail surrogate.");const o=e.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},th=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(e){return e&&e._delegate?e._delegate:e}class li{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new eh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(sL(t))try{this.getOrInitializeService({instanceIdentifier:Pi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Pi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Pi){return this.instances.has(t)}getOptions(t=Pi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iL(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Pi){return this.component?this.component.multipleInstances?t:Pi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iL(e){return e===Pi?void 0:e}function sL(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oL{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new rL(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ne||(ne={}));const aL={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},lL=ne.INFO,uL={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},cL=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=uL[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class nh{constructor(t){this.name=t,this._logLevel=lL,this._logHandler=cL,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ne))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?aL[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...t),this._logHandler(this,ne.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...t),this._logHandler(this,ne.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...t),this._logHandler(this,ne.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...t),this._logHandler(this,ne.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...t),this._logHandler(this,ne.ERROR,...t)}}const dL=(e,t)=>t.some(n=>e instanceof n);let xw,kw;function hL(){return xw||(xw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fL(){return kw||(kw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const AI=new WeakMap,Im=new WeakMap,bI=new WeakMap,jf=new WeakMap,By=new WeakMap;function pL(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Jr(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&AI.set(n,e)}).catch(()=>{}),By.set(t,e),t}function mL(e){if(Im.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Im.set(e,t)}let xm={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Im.get(e);if(t==="objectStoreNames")return e.objectStoreNames||bI.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function gL(e){xm=e(xm)}function yL(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Uf(this),t,...n);return bI.set(r,t.sort?t.sort():[t]),Jr(r)}:fL().includes(e)?function(...t){return e.apply(Uf(this),t),Jr(AI.get(this))}:function(...t){return Jr(e.apply(Uf(this),t))}}function vL(e){return typeof e=="function"?yL(e):(e instanceof IDBTransaction&&mL(e),dL(e,hL())?new Proxy(e,xm):e)}function Jr(e){if(e instanceof IDBRequest)return pL(e);if(jf.has(e))return jf.get(e);const t=vL(e);return t!==e&&(jf.set(e,t),By.set(t,e)),t}const Uf=e=>By.get(e);function _L(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Jr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Jr(o.result),l.oldVersion,l.newVersion,Jr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const wL=["get","getKey","getAll","getAllKeys","count"],EL=["put","add","delete","clear"],zf=new Map;function Pw(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(zf.get(t))return zf.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=EL.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wL.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return zf.set(t,s),s}gL(e=>({...e,get:(t,n,r)=>Pw(t,n)||e.get(t,n,r),has:(t,n)=>!!Pw(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CL(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CL(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const km="@firebase/app",Rw="0.10.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new nh("@firebase/app"),TL="@firebase/app-compat",IL="@firebase/analytics-compat",xL="@firebase/analytics",kL="@firebase/app-check-compat",PL="@firebase/app-check",RL="@firebase/auth",AL="@firebase/auth-compat",bL="@firebase/database",OL="@firebase/database-compat",NL="@firebase/functions",DL="@firebase/functions-compat",$L="@firebase/installations",LL="@firebase/installations-compat",ML="@firebase/messaging",FL="@firebase/messaging-compat",jL="@firebase/performance",UL="@firebase/performance-compat",zL="@firebase/remote-config",BL="@firebase/remote-config-compat",VL="@firebase/storage",WL="@firebase/storage-compat",HL="@firebase/firestore",GL="@firebase/firestore-compat",KL="firebase",qL="10.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="[DEFAULT]",YL={[km]:"fire-core",[TL]:"fire-core-compat",[xL]:"fire-analytics",[IL]:"fire-analytics-compat",[PL]:"fire-app-check",[kL]:"fire-app-check-compat",[RL]:"fire-auth",[AL]:"fire-auth-compat",[bL]:"fire-rtdb",[OL]:"fire-rtdb-compat",[NL]:"fire-fn",[DL]:"fire-fn-compat",[$L]:"fire-iid",[LL]:"fire-iid-compat",[ML]:"fire-fcm",[FL]:"fire-fcm-compat",[jL]:"fire-perf",[UL]:"fire-perf-compat",[zL]:"fire-rc",[BL]:"fire-rc-compat",[VL]:"fire-gcs",[WL]:"fire-gcs-compat",[HL]:"fire-fst",[GL]:"fire-fst-compat","fire-js":"fire-js",[KL]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=new Map,QL=new Map,Rm=new Map;function Aw(e,t){try{e.container.addComponent(t)}catch(n){es.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ts(e){const t=e.name;if(Rm.has(t))return es.debug(`There were multiple attempts to register component ${t}.`),!1;Rm.set(t,e);for(const n of Qc.values())Aw(n,e);for(const n of QL.values())Aw(n,e);return!0}function rh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function hn(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XL={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zr=new $l("app","Firebase",XL);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JL{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new li("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Zr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=qL;function OI(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Pm,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Zr.create("bad-app-name",{appName:String(i)});if(n||(n=TI()),!n)throw Zr.create("no-options");const s=Qc.get(i);if(s){if(Yc(n,s.options)&&Yc(r,s.config))return s;throw Zr.create("duplicate-app",{appName:i})}const o=new oL(i);for(const l of Rm.values())o.addComponent(l);const a=new JL(n,r,o);return Qc.set(i,a),a}function Vy(e=Pm){const t=Qc.get(e);if(!t&&e===Pm&&TI())return OI();if(!t)throw Zr.create("no-app",{appName:e});return t}function $n(e,t,n){var r;let i=(r=YL[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),es.warn(a.join(" "));return}ts(new li(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZL="firebase-heartbeat-database",eM=1,ol="firebase-heartbeat-store";let Bf=null;function NI(){return Bf||(Bf=_L(ZL,eM,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ol)}catch(n){console.warn(n)}}}}).catch(e=>{throw Zr.create("idb-open",{originalErrorMessage:e.message})})),Bf}async function tM(e){try{const n=(await NI()).transaction(ol),r=await n.objectStore(ol).get(DI(e));return await n.done,r}catch(t){if(t instanceof wr)es.warn(t.message);else{const n=Zr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});es.warn(n.message)}}}async function bw(e,t){try{const r=(await NI()).transaction(ol,"readwrite");await r.objectStore(ol).put(t,DI(e)),await r.done}catch(n){if(n instanceof wr)es.warn(n.message);else{const r=Zr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});es.warn(r.message)}}}function DI(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nM=1024,rM=30*24*60*60*1e3;class iM{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oM(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ow();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=rM}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ow(),{heartbeatsToSend:r,unsentEntries:i}=sM(this._heartbeatsCache.heartbeats),s=Gc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ow(){return new Date().toISOString().substring(0,10)}function sM(e,t=nM){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Nw(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Nw(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oM{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return H$()?G$().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tM(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bw(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bw(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Nw(e){return Gc(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aM(e){ts(new li("platform-logger",t=>new SL(t),"PRIVATE")),ts(new li("heartbeat",t=>new iM(t),"PRIVATE")),$n(km,Rw,e),$n(km,Rw,"esm2017"),$n("fire-js","")}aM("");const Dw="@firebase/database",$w="1.0.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $I="";function lM(e){$I=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uM{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Ne(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:sl(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return Er(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new uM(t)}}catch{}return new cM},$i=LI("localStorage"),Am=LI("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new nh("@firebase/database"),dM=function(){let e=1;return function(){return e++}}(),MI=function(e){const t=nL(e),n=new J$;n.update(t);const r=n.digest();return Fy.encodeByteArray(r)},Ll=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?t+=Ll.apply(null,r):typeof r=="object"?t+=Ne(r):t+=r,t+=" "}return t};let Vi=null,Lw=!0;const hM=function(e,t){R(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(Js.logLevel=ne.VERBOSE,Vi=Js.log.bind(Js),t&&Am.set("logging_enabled",!0)):typeof e=="function"?Vi=e:(Vi=null,Am.remove("logging_enabled"))},ot=function(...e){if(Lw===!0&&(Lw=!1,Vi===null&&Am.get("logging_enabled")===!0&&hM(!0)),Vi){const t=Ll.apply(null,e);Vi(t)}},Ml=function(e){return function(...t){ot(e,...t)}},bm=function(...e){const t="FIREBASE INTERNAL ERROR: "+Ll(...e);Js.error(t)},pr=function(...e){const t=`FIREBASE FATAL ERROR: ${Ll(...e)}`;throw Js.error(t),new Error(t)},bt=function(...e){const t="FIREBASE WARNING: "+Ll(...e);Js.warn(t)},fM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&bt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},FI=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},pM=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},So="[MIN_NAME]",ns="[MAX_NAME]",Mo=function(e,t){if(e===t)return 0;if(e===So||t===ns)return-1;if(t===So||e===ns)return 1;{const n=Mw(e),r=Mw(t);return n!==null?r!==null?n-r===0?e.length-t.length:n-r:-1:r!==null?1:e<t?-1:1}},mM=function(e,t){return e===t?0:e<t?-1:1},Zo=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Ne(t))},Wy=function(e){if(typeof e!="object"||e===null)return Ne(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)r!==0&&(n+=","),n+=Ne(t[r]),n+=":",n+=Wy(e[t[r]]);return n+="}",n},jI=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function Ot(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const UI=function(e){R(!FI(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,o,a,l;e===0?(s=0,o=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=a+r,o=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=t;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(c.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},gM=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function vM(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const _M=new RegExp("^-?(0*)\\d{1,10}$"),wM=-2147483648,EM=2147483647,Mw=function(e){if(_M.test(e)){const t=Number(e);if(t>=wM&&t<=EM)return t}return null},Fo=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw bt("Exception was thrown by user callback.",n),t},Math.floor(0))}},SM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},xa=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(t))}notifyForInvalidToken(){bt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{constructor(t,n,r){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',bt(t)}}class Zs{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Zs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy="5",zI="v",BI="s",VI="r",WI="f",HI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,GI="ls",KI="p",Om="ac",qI="websocket",YI="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(t,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$i.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&$i.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function IM(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function XI(e,t,n){R(typeof t=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let r;if(t===qI)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===YI)r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);IM(e)&&(n.ns=e.namespace);const i=[];return Ot(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xM{constructor(){this.counters_={}}incrementCounter(t,n=1){Er(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return M$(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf={},Wf={};function Gy(e){const t=e.toString();return Vf[t]||(Vf[t]=new xM),Vf[t]}function kM(e,t){const n=e.toString();return Wf[n]||(Wf[n]=t()),Wf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Fo(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw="start",RM="close",AM="pLPCommand",bM="pRTLPCB",JI="id",ZI="pw",ex="ser",OM="cb",NM="seg",DM="ts",$M="d",LM="dframe",tx=1870,nx=30,MM=tx-nx,FM=25e3,jM=3e4;class Vs{constructor(t,n,r,i,s,o,a){this.connId=t,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ml(t),this.stats_=Gy(n),this.urlFn=l=>(this.appCheckToken&&(l[Om]=this.appCheckToken),XI(n,YI,l))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new PM(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jM)),pM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ky((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Fw)this.id=a,this.password=l;else if(o===RM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Fw]="t",r[ex]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[OM]=this.scriptTagHolder.uniqueCallbackIdentifier),r[zI]=Hy,this.transportSessionId&&(r[BI]=this.transportSessionId),this.lastSessionId&&(r[GI]=this.lastSessionId),this.applicationId&&(r[KI]=this.applicationId),this.appCheckToken&&(r[Om]=this.appCheckToken),typeof location<"u"&&location.hostname&&HI.test(location.hostname)&&(r[VI]=WI);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Vs.forceAllow_=!0}static forceDisallow(){Vs.forceDisallow_=!0}static isAvailable(){return Vs.forceAllow_?!0:!Vs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!gM()&&!yM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=Ne(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=wI(n),i=jI(r,MM);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[LM]="t",r[JI]=t,r[ZI]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=Ne(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ky{constructor(t,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=dM(),window[AM+this.uniqueCallbackIdentifier]=t,window[bM+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ky.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ot("frame writing exception"),a.stack&&ot(a.stack),ot(a)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||ot("No IE domain setting required")}catch{const r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[JI]=this.myID,t[ZI]=this.myPW,t[ex]=this.currentSerial;let n=this.urlFn(t),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+nx+r.length<=tx;){const o=this.pendingSegs.shift();r=r+"&"+NM+i+"="+o.seg+"&"+DM+i+"="+o.ts+"&"+$M+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,r){this.pendingSegs.push({seg:t,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(FM)),s=()=>{clearTimeout(i),r()};this.addTag(t,s)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ot("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UM=16384,zM=45e3;let Xc=null;typeof MozWebSocket<"u"?Xc=MozWebSocket:typeof WebSocket<"u"&&(Xc=WebSocket);class dn{constructor(t,n,r,i,s,o,a){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ml(this.connId),this.stats_=Gy(n),this.connURL=dn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,r,i,s){const o={};return o[zI]=Hy,typeof location<"u"&&location.hostname&&HI.test(location.hostname)&&(o[VI]=WI),n&&(o[BI]=n),r&&(o[GI]=r),i&&(o[Om]=i),s&&(o[KI]=s),XI(t,qI,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$i.set("previous_websocket_failure",!0);try{let r;PI(),this.mySock=new Xc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){dn.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&Xc!==null&&!dn.forceDisallow_}static previouslyFailed(){return $i.isInMemoryStorage||$i.get("previous_websocket_failure")===!0}markConnectionHealthy(){$i.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=sl(n);this.onMessage(r)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(R(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(t){this.resetKeepAlive();const n=Ne(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=jI(n,UM);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(zM))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dn.responsesRequiredToBeHealthy=2;dn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Vs,dn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=dn&&dn.isAvailable();let r=n&&!dn.previouslyFailed();if(t.webSocketOnly&&(n||bt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[dn];else{const i=this.transports_=[];for(const s of al.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);al.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}al.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BM=6e4,VM=5e3,WM=10*1024,HM=100*1024,Hf="t",jw="d",GM="s",Uw="r",KM="e",zw="o",Bw="a",Vw="n",Ww="p",qM="h";class YM{constructor(t,n,r,i,s,o,a,l,u,c){this.id=t,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ml("c:"+this.id+":"),this.transportManager_=new al(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=xa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>HM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>WM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Hf in t){const n=t[Hf];n===Bw?this.upgradeIfSecondaryHealthy_():n===Uw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===zw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=Zo("t",t),r=Zo("d",t);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ww,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Bw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=Zo("t",t),r=Zo("d",t);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=Zo(Hf,t);if(jw in t){const r=t[jw];if(n===qM){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Vw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===GM?this.onConnectionShutdown_(r):n===Uw?this.onReset_(r):n===KM?bm("Server Error: "+r):n===zw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):bm("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,r=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Hy!==r&&bt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),xa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(BM))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):xa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(VM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ww,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($i.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{put(t,n,r,i){}merge(t,n,r,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,r){}onDisconnectMerge(t,n,r){}onDisconnectCancel(t,n){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(t){this.allowedEvents_=t,this.listeners_={},R(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const r=[...this.listeners_[t]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(t,n,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:r});const i=this.getInitialEvent(t);i&&n.apply(r,i)}off(t,n,r){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(t){R(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc extends ix{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Uy()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Jc}getInitialEvent(t){return R(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=32,Gw=768;class ue{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function te(){return new ue("")}function K(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ui(e){return e.pieces_.length-e.pieceNum_}function de(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ue(e.pieces_,t)}function sx(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function QM(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function ox(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function ax(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ue(t,0)}function De(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof ue)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const r=t.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ue(n,0)}function Y(e){return e.pieceNum_>=e.pieces_.length}function gt(e,t){const n=K(e),r=K(t);if(n===null)return t;if(n===r)return gt(de(e),de(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function qy(e,t){if(ui(e)!==ui(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function fn(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(ui(e)>ui(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class XM{constructor(t,n){this.errorPrefix_=n,this.parts_=ox(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=th(this.parts_[r]);lx(this)}}function JM(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=th(t),lx(e)}function ZM(e){const t=e.parts_.pop();e.byteLength_-=th(t),e.parts_.length>0&&(e.byteLength_-=1)}function lx(e){if(e.byteLength_>Gw)throw new Error(e.errorPrefix_+"has a key path longer than "+Gw+" bytes ("+e.byteLength_+").");if(e.parts_.length>Hw)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Hw+") or object contains a cycle "+Ri(e))}function Ri(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy extends ix{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[t];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Yy}getInitialEvent(t){return R(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=1e3,eF=60*5*1e3,Kw=30*1e3,tF=1.3,nF=3e4,rF="server_kill",qw=3;class ar extends rx{constructor(t,n,r,i,s,o,a,l){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ar.nextPersistentConnectionId_++,this.log_=Ml("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ea,this.maxReconnectDelay_=eF,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!PI())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Yy.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Jc.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,r){const i=++this.requestNumber_,s={r:i,a:t,b:n};this.log_(Ne(s)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(t){this.initConnection_();const n=new eh,i={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(t,n,r,i){this.initConnection_();const s=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),R(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:t,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(t){const n=t.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";t.tag&&(s.q=n._queryObject,s.t=t.tag),s.h=t.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;ar.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===t&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),t.onComplete&&t.onComplete(u,l))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&Er(t,"w")){const r=Eo(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();bt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||X$(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Kw)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=Q$(t)?"auth":"gauth",r={cred:t};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===t&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,r=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(t,n){const r=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),R(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,t._queryObject,n)}sendUnlisten_(t,n,r,i){this.log_("Unlisten on "+t+" for "+n);const s={p:t},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:r})}onDisconnectMerge(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:r})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(t,n,r,i){this.putInternal("p",t,n,r,i)}merge(t,n,r,i){this.putInternal("m",t,n,r,i)}putInternal(t,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:t,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Ne(t));const n=t.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):bm("Unrecognized action received from server: "+Ne(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ea,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=ea,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>nF&&(this.reconnectDelay_=ea),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*tF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ar.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){R(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?ot("getToken() completed but was canceled"):(ot("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new YM(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,f=>{bt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(rF)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&bt(d),l())}}}interrupt(t){ot("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){ot("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Tm(this.interruptReasons_)&&(this.reconnectDelay_=ea,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let r;n?r=n.map(s=>Wy(s)).join("$"):r="default";const i=this.removeListen_(t,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,n){const r=new ue(t).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(t,n){ot("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=qw&&(this.reconnectDelay_=Kw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){ot("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=qw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+$I.replace(/\./g,"-")]=1,Uy()?t["framework.cordova"]=1:kI()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Jc.getInstance().currentlyOnline();return Tm(this.interruptReasons_)&&t}}ar.nextPersistentConnectionId_=0;ar.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new q(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const r=new q(So,t),i=new q(So,n);return this.compare(r,i)!==0}minPost(){return q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xu;class ux extends ih{static get __EMPTY_NODE(){return xu}static set __EMPTY_NODE(t){xu=t}compare(t,n){return Mo(t.name,n.name)}isDefinedOn(t){throw $o("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return q.MIN}maxPost(){return new q(ns,xu)}makePost(t,n){return R(typeof t=="string","KeyIndex indexValue must always be a string."),new q(t,xu)}toString(){return".key"}}const eo=new ux;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!t.isEmpty();)if(t=t,o=n?r(t.key,n):1,i&&(o*=-1),o<0)this.isReverse_?t=t.left:t=t.right;else if(o===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Ue{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??Ue.RED,this.left=i??xt.EMPTY_NODE,this.right=s??xt.EMPTY_NODE}copy(t,n,r,i,s){return new Ue(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return xt.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let r,i;if(r=this,n(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(t,r.key)===0){if(r.right.isEmpty())return xt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Ue.RED=!0;Ue.BLACK=!1;class iF{copy(t,n,r,i,s){return this}insert(t,n,r){return new Ue(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class xt{constructor(t,n=xt.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new xt(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Ue.BLACK,null,null))}remove(t){return new xt(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Ue.BLACK,null,null))}get(t){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(t,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(t){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(t,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new ku(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new ku(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new ku(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new ku(this.root_,null,this.comparator_,!0,t)}}xt.EMPTY_NODE=new iF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sF(e,t){return Mo(e.name,t.name)}function Qy(e,t){return Mo(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nm;function oF(e){Nm=e}const cx=function(e){return typeof e=="number"?"number:"+UI(e):"string:"+e},dx=function(e){if(e.isLeafNode()){const t=e.val();R(typeof t=="string"||typeof t=="number"||typeof t=="object"&&Er(t,".sv"),"Priority must be a string or number.")}else R(e===Nm||e.isEmpty(),"priority of unexpected type.");R(e===Nm||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yw;class Me{constructor(t,n=Me.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),dx(this.priorityNode_)}static set __childrenNodeConstructor(t){Yw=t}static get __childrenNodeConstructor(){return Yw}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Me(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return Y(t)?this:K(t)===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:Me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const r=K(t);return r===null?n:n.isEmpty()&&r!==".priority"?this:(R(r!==".priority"||ui(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Me.__childrenNodeConstructor.EMPTY_NODE.updateChild(de(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+cx(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=UI(this.value_):t+=this.value_,this.lazyHash_=MI(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Me.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Me.__childrenNodeConstructor?-1:(R(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,r=typeof this.value_,i=Me.VALUE_TYPE_ORDER.indexOf(n),s=Me.VALUE_TYPE_ORDER.indexOf(r);return R(i>=0,"Unknown leaf type: "+n),R(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hx,fx;function aF(e){hx=e}function lF(e){fx=e}class uF extends ih{compare(t,n){const r=t.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Mo(t.name,n.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return q.MIN}maxPost(){return new q(ns,new Me("[PRIORITY-POST]",fx))}makePost(t,n){const r=hx(t);return new q(n,new Me("[PRIORITY-POST]",r))}toString(){return".priority"}}const xe=new uF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cF=Math.log(2);class dF{constructor(t){const n=s=>parseInt(Math.log(s)/cF,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const i=r(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Zc=function(e,t,n,r){e.sort(t);const i=function(l,u){const c=u-l;let d,h;if(c===0)return null;if(c===1)return d=e[l],h=n?n(d):d,new Ue(h,d.node,Ue.BLACK,null,null);{const f=parseInt(c/2,10)+l,g=i(l,f),v=i(f+1,u);return d=e[f],h=n?n(d):d,new Ue(h,d.node,Ue.BLACK,g,v)}},s=function(l){let u=null,c=null,d=e.length;const h=function(g,v){const S=d-g,m=d;d-=g;const p=i(S+1,m),y=e[S],_=n?n(y):y;f(new Ue(_,y.node,v,null,p))},f=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<l.count;++g){const v=l.nextBitIsOne(),S=Math.pow(2,l.count-(g+1));v?h(S,Ue.BLACK):(h(S,Ue.BLACK),h(S,Ue.RED))}return c},o=new dF(e.length),a=s(o);return new xt(r||t,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gf;const xs={};class Zn{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return R(xs&&xe,"ChildrenNode.ts has not been loaded"),Gf=Gf||new Zn({".priority":xs},{".priority":xe}),Gf}get(t){const n=Eo(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof xt?n:null}hasIndex(t){return Er(this.indexSet_,t.toString())}addIndex(t,n){R(t!==eo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(q.Wrap);let o=s.getNext();for(;o;)i=i||t.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Zc(r,t.getCompare()):a=xs;const l=t.toString(),u=Object.assign({},this.indexSet_);u[l]=t;const c=Object.assign({},this.indexes_);return c[l]=a,new Zn(c,u)}addToIndexes(t,n){const r=qc(this.indexes_,(i,s)=>{const o=Eo(this.indexSet_,s);if(R(o,"Missing index implementation for "+s),i===xs)if(o.isDefinedOn(t.node)){const a=[],l=n.getIterator(q.Wrap);let u=l.getNext();for(;u;)u.name!==t.name&&a.push(u),u=l.getNext();return a.push(t),Zc(a,o.getCompare())}else return xs;else{const a=n.get(t.name);let l=i;return a&&(l=l.remove(new q(t.name,a))),l.insert(t,t.node)}});return new Zn(r,this.indexSet_)}removeFromIndexes(t,n){const r=qc(this.indexes_,i=>{if(i===xs)return i;{const s=n.get(t.name);return s?i.remove(new q(t.name,s)):i}});return new Zn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta;class F{constructor(t,n,r){this.children_=t,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&dx(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ta||(ta=new F(new xt(Qy),null,Zn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ta}updatePriority(t){return this.children_.isEmpty()?this:new F(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?ta:n}}getChild(t){const n=K(t);return n===null?this:this.getImmediateChild(n).getChild(de(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(R(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const r=new q(t,n);let i,s;n.isEmpty()?(i=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ta:this.priorityNode_;return new F(i,o,s)}}updateChild(t,n){const r=K(t);if(r===null)return n;{R(K(t)!==".priority"||ui(t)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(de(t),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(xe,(o,a)=>{n[o]=a.val(t),r++,s&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!t&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+cx(this.getPriority().val())+":"),this.forEachChild(xe,(n,r)=>{const i=r.hash();i!==""&&(t+=":"+n+":"+i)}),this.lazyHash_=t===""?"":MI(t)}return this.lazyHash_}getPredecessorChildName(t,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new q(t,n));return s?s.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new q(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new q(n,this.children_.get(n)):null}forEachChild(t,n){const r=this.resolveIndex_(t);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(t,i=>i);{const i=this.children_.getIteratorFrom(t.name,q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,t)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(t,i=>i);{const i=this.children_.getReverseIteratorFrom(t.name,q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,t)>0;)i.getNext(),s=i.peek();return i}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Fl?-1:0}withIndex(t){if(t===eo||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===eo||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(xe),i=n.getIterator(xe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(t){return t===eo?null:this.indexMap_.get(t.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class hF extends F{constructor(){super(new xt(Qy),F.EMPTY_NODE,Zn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return F.EMPTY_NODE}isEmpty(){return!1}}const Fl=new hF;Object.defineProperties(q,{MIN:{value:new q(So,F.EMPTY_NODE)},MAX:{value:new q(ns,Fl)}});ux.__EMPTY_NODE=F.EMPTY_NODE;Me.__childrenNodeConstructor=F;oF(Fl);lF(Fl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fF=!0;function ze(e,t=null){if(e===null)return F.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),R(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new Me(n,ze(t))}if(!(e instanceof Array)&&fF){const n=[];let r=!1;if(Ot(e,(o,a)=>{if(o.substring(0,1)!=="."){const l=ze(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new q(o,l)))}}),n.length===0)return F.EMPTY_NODE;const s=Zc(n,sF,o=>o.name,Qy);if(r){const o=Zc(n,xe.getCompare());return new F(s,ze(t),new Zn({".priority":o},{".priority":xe}))}else return new F(s,ze(t),Zn.Default)}else{let n=F.EMPTY_NODE;return Ot(e,(r,i)=>{if(Er(e,r)&&r.substring(0,1)!=="."){const s=ze(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ze(t))}}aF(ze);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pF extends ih{constructor(t){super(),this.indexPath_=t,R(!Y(t)&&K(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const r=this.extractChild(t.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Mo(t.name,n.name):s}makePost(t,n){const r=ze(t),i=F.EMPTY_NODE.updateChild(this.indexPath_,r);return new q(n,i)}maxPost(){const t=F.EMPTY_NODE.updateChild(this.indexPath_,Fl);return new q(ns,t)}toString(){return ox(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mF extends ih{compare(t,n){const r=t.node.compareTo(n.node);return r===0?Mo(t.name,n.name):r}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return q.MIN}maxPost(){return q.MAX}makePost(t,n){const r=ze(t);return new q(n,r)}toString(){return".value"}}const gF=new mF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function px(e){return{type:"value",snapshotNode:e}}function Co(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ll(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function ul(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function yF(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(t){this.index_=t}updateChild(t,n,r,i,s,o){R(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=t.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?t.hasChild(n)?o.trackChildChange(ll(n,a)):R(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Co(n,r)):o.trackChildChange(ul(n,r,a))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(t,n,r){return r!=null&&(t.isLeafNode()||t.forEachChild(xe,(i,s)=>{n.hasChild(i)||r.trackChildChange(ll(i,s))}),n.isLeafNode()||n.forEachChild(xe,(i,s)=>{if(t.hasChild(i)){const o=t.getImmediateChild(i);o.equals(s)||r.trackChildChange(ul(i,s,o))}else r.trackChildChange(Co(i,s))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?F.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t){this.indexedFilter_=new Xy(t.getIndex()),this.index_=t.getIndex(),this.startPost_=cl.getStartPost_(t),this.endPost_=cl.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,r=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&r}updateChild(t,n,r,i,s,o){return this.matches(new q(n,r))||(r=F.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,r,i,s,o)}updateFullNode(t,n,r){n.isLeafNode()&&(n=F.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const s=this;return n.forEachChild(xe,(o,a)=>{s.matches(new q(o,a))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vF{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new cl(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,r,i,s,o){return this.rangedFilter_.matches(new q(n,r))||(r=F.EMPTY_NODE),t.getImmediateChild(n).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,r,i,s,o):this.fullLimitUpdateChild_(t,n,r,s,o)}updateFullNode(t,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=t;R(a.numChildren()===this.limit_,"");const l=new q(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(c&&!r.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(ul(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ll(n,d));const v=a.updateImmediateChild(n,F.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Co(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?t:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(ll(u.name,u.node)),s.trackChildChange(Co(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,F.EMPTY_NODE)):t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=xe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:So}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ns}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===xe}copy(){const t=new Jy;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function _F(e){return e.loadsAllData()?new Xy(e.getIndex()):e.hasLimit()?new vF(e):new cl(e)}function Qw(e){const t={};if(e.isDefault())return t;let n;if(e.index_===xe?n="$priority":e.index_===gF?n="$value":e.index_===eo?n="$key":(R(e.index_ instanceof pF,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Ne(n),e.startSet_){const r=e.startAfterSet_?"startAfter":"startAt";t[r]=Ne(e.indexStartValue_),e.startNameSet_&&(t[r]+=","+Ne(e.indexStartName_))}if(e.endSet_){const r=e.endBeforeSet_?"endBefore":"endAt";t[r]=Ne(e.indexEndValue_),e.endNameSet_&&(t[r]+=","+Ne(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Xw(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==xe&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed extends rx{constructor(t,n,r,i){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ml("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(R(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,r,i){const s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);const o=ed.getListenId_(t,r),a={};this.listens_[o]=a;const l=Qw(t._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Eo(this.listens_,o)===a){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(t,n){const r=ed.getListenId_(t,n);delete this.listens_[r]}get(t){const n=Qw(t._queryParams),r=t._path.toString(),i=new eh;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(t){}restRequest_(t,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Lo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=sl(a.responseText)}catch{bt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&bt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wF{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(){return{value:null,children:new Map}}function mx(e,t,n){if(Y(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const r=K(t);e.children.has(r)||e.children.set(r,td());const i=e.children.get(r);t=de(t),mx(i,t,n)}}function Dm(e,t,n){e.value!==null?n(t,e.value):EF(e,(r,i)=>{const s=new ue(t.toString()+"/"+r);Dm(i,s,n)})}function EF(e,t){e.children.forEach((n,r)=>{t(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SF{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&Ot(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=10*1e3,CF=30*1e3,TF=5*60*1e3;class IF{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new SF(t);const r=Jw+(CF-Jw)*Math.random();xa(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const t=this.statsListener_.get(),n={};let r=!1;Ot(t,(i,s)=>{s>0&&Er(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),xa(this.reportStats_.bind(this),Math.floor(Math.random()*2*TF))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pn;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pn||(pn={}));function gx(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Zy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ev(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(t,n,r){this.path=t,this.affectedTree=n,this.revert=r,this.type=pn.ACK_USER_WRITE,this.source=gx()}operationForChild(t){if(Y(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ue(t));return new nd(te(),n,this.revert)}}else return R(K(this.path)===t,"operationForChild called for unrelated child."),new nd(de(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(t,n){this.source=t,this.path=n,this.type=pn.LISTEN_COMPLETE}operationForChild(t){return Y(this.path)?new dl(this.source,te()):new dl(this.source,de(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t,n,r){this.source=t,this.path=n,this.snap=r,this.type=pn.OVERWRITE}operationForChild(t){return Y(this.path)?new rs(this.source,te(),this.snap.getImmediateChild(t)):new rs(this.source,de(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(t,n,r){this.source=t,this.path=n,this.children=r,this.type=pn.MERGE}operationForChild(t){if(Y(this.path)){const n=this.children.subtree(new ue(t));return n.isEmpty()?null:n.value?new rs(this.source,te(),n.value):new hl(this.source,te(),n)}else return R(K(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new hl(this.source,de(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,n,r){this.node_=t,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(Y(t))return this.isFullyInitialized()&&!this.filtered_;const n=K(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xF{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function kF(e,t,n,r){const i=[],s=[];return t.forEach(o=>{o.type==="child_changed"&&e.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(yF(o.childName,o.snapshotNode))}),na(e,i,"child_removed",t,r,n),na(e,i,"child_added",t,r,n),na(e,i,"child_moved",s,r,n),na(e,i,"child_changed",t,r,n),na(e,i,"value",t,r,n),i}function na(e,t,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>RF(e,a,l)),o.forEach(a=>{const l=PF(e,a,s);i.forEach(u=>{u.respondsTo(a.type)&&t.push(u.createEvent(l,e.query_))})})}function PF(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function RF(e,t,n){if(t.childName==null||n.childName==null)throw $o("Should only compare child_ events.");const r=new q(t.childName,t.snapshotNode),i=new q(n.childName,n.snapshotNode);return e.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(e,t){return{eventCache:e,serverCache:t}}function ka(e,t,n,r){return sh(new ci(t,n,r),e.serverCache)}function yx(e,t,n,r){return sh(e.eventCache,new ci(t,n,r))}function rd(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function is(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kf;const AF=()=>(Kf||(Kf=new xt(mM)),Kf);class ge{constructor(t,n=AF()){this.value=t,this.children=n}static fromObject(t){let n=new ge(null);return Ot(t,(r,i)=>{n=n.set(new ue(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:te(),value:this.value};if(Y(t))return null;{const r=K(t),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(de(t),n);return s!=null?{path:De(new ue(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(Y(t))return this;{const n=K(t),r=this.children.get(n);return r!==null?r.subtree(de(t)):new ge(null)}}set(t,n){if(Y(t))return new ge(n,this.children);{const r=K(t),s=(this.children.get(r)||new ge(null)).set(de(t),n),o=this.children.insert(r,s);return new ge(this.value,o)}}remove(t){if(Y(t))return this.children.isEmpty()?new ge(null):new ge(null,this.children);{const n=K(t),r=this.children.get(n);if(r){const i=r.remove(de(t));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ge(null):new ge(this.value,s)}else return this}}get(t){if(Y(t))return this.value;{const n=K(t),r=this.children.get(n);return r?r.get(de(t)):null}}setTree(t,n){if(Y(t))return n;{const r=K(t),s=(this.children.get(r)||new ge(null)).setTree(de(t),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ge(this.value,o)}}fold(t){return this.fold_(te(),t)}fold_(t,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(De(t,i),n)}),n(t,this.value,r)}findOnPath(t,n){return this.findOnPath_(t,te(),n)}findOnPath_(t,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Y(t))return null;{const s=K(t),o=this.children.get(s);return o?o.findOnPath_(de(t),De(n,s),r):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,te(),n)}foreachOnPath_(t,n,r){if(Y(t))return this;{this.value&&r(n,this.value);const i=K(t),s=this.children.get(i);return s?s.foreachOnPath_(de(t),De(n,i),r):new ge(null)}}foreach(t){this.foreach_(te(),t)}foreach_(t,n){this.children.inorderTraversal((r,i)=>{i.foreach_(De(t,r),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,r)=>{r.value&&t(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t){this.writeTree_=t}static empty(){return new vn(new ge(null))}}function Pa(e,t,n){if(Y(t))return new vn(new ge(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){const i=r.path;let s=r.value;const o=gt(i,t);return s=s.updateChild(o,n),new vn(e.writeTree_.set(i,s))}else{const i=new ge(n),s=e.writeTree_.setTree(t,i);return new vn(s)}}}function Zw(e,t,n){let r=e;return Ot(n,(i,s)=>{r=Pa(r,De(t,i),s)}),r}function e1(e,t){if(Y(t))return vn.empty();{const n=e.writeTree_.setTree(t,new ge(null));return new vn(n)}}function $m(e,t){return ps(e,t)!=null}function ps(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(gt(n.path,t)):null}function t1(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(xe,(r,i)=>{t.push(new q(r,i))}):e.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&t.push(new q(r,i.value))}),t}function ei(e,t){if(Y(t))return e;{const n=ps(e,t);return n!=null?new vn(new ge(n)):new vn(e.writeTree_.subtree(t))}}function Lm(e){return e.writeTree_.isEmpty()}function To(e,t){return vx(te(),e.writeTree_,t)}function vx(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((i,s)=>{i===".priority"?(R(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=vx(De(e,i),s,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(De(e,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(e,t){return Sx(t,e)}function bF(e,t,n,r,i){R(r>e.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Pa(e.visibleWrites,t,n)),e.lastWriteId=r}function OF(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function NF(e,t){const n=e.allWrites.findIndex(a=>a.writeId===t);R(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const a=e.allWrites[o];a.visible&&(o>=n&&DF(a,r.path)?i=!1:fn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return $F(e),!0;if(r.snap)e.visibleWrites=e1(e.visibleWrites,r.path);else{const a=r.children;Ot(a,l=>{e.visibleWrites=e1(e.visibleWrites,De(r.path,l))})}return!0}else return!1}function DF(e,t){if(e.snap)return fn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&fn(De(e.path,n),t))return!0;return!1}function $F(e){e.visibleWrites=_x(e.allWrites,LF,te()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function LF(e){return e.visible}function _x(e,t,n){let r=vn.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const o=s.path;let a;if(s.snap)fn(n,o)?(a=gt(n,o),r=Pa(r,a,s.snap)):fn(o,n)&&(a=gt(o,n),r=Pa(r,te(),s.snap.getChild(a)));else if(s.children){if(fn(n,o))a=gt(n,o),r=Zw(r,a,s.children);else if(fn(o,n))if(a=gt(o,n),Y(a))r=Zw(r,te(),s.children);else{const l=Eo(s.children,K(a));if(l){const u=l.getChild(de(a));r=Pa(r,te(),u)}}}else throw $o("WriteRecord should have .snap or .children")}}return r}function wx(e,t,n,r,i){if(!r&&!i){const s=ps(e.visibleWrites,t);if(s!=null)return s;{const o=ei(e.visibleWrites,t);if(Lm(o))return n;if(n==null&&!$m(o,te()))return null;{const a=n||F.EMPTY_NODE;return To(o,a)}}}else{const s=ei(e.visibleWrites,t);if(!i&&Lm(s))return n;if(!i&&n==null&&!$m(s,te()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(fn(u.path,t)||fn(t,u.path))},a=_x(e.allWrites,o,t),l=n||F.EMPTY_NODE;return To(a,l)}}}function MF(e,t,n){let r=F.EMPTY_NODE;const i=ps(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(xe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ei(e.visibleWrites,t);return n.forEachChild(xe,(o,a)=>{const l=To(ei(s,new ue(o)),a);r=r.updateImmediateChild(o,l)}),t1(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ei(e.visibleWrites,t);return t1(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function FF(e,t,n,r,i){R(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=De(t,n);if($m(e.visibleWrites,s))return null;{const o=ei(e.visibleWrites,s);return Lm(o)?i.getChild(n):To(o,i.getChild(n))}}function jF(e,t,n,r){const i=De(t,n),s=ps(e.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ei(e.visibleWrites,i);return To(o,r.getNode().getImmediateChild(n))}else return null}function UF(e,t){return ps(e.visibleWrites,t)}function zF(e,t,n,r,i,s,o){let a;const l=ei(e.visibleWrites,t),u=ps(l,te());if(u!=null)a=u;else if(n!=null)a=To(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=h.getNext();for(;f&&c.length<i;)d(f,r)!==0&&c.push(f),f=h.getNext();return c}else return[]}function BF(){return{visibleWrites:vn.empty(),allWrites:[],lastWriteId:-1}}function id(e,t,n,r){return wx(e.writeTree,e.treePath,t,n,r)}function tv(e,t){return MF(e.writeTree,e.treePath,t)}function n1(e,t,n,r){return FF(e.writeTree,e.treePath,t,n,r)}function sd(e,t){return UF(e.writeTree,De(e.treePath,t))}function VF(e,t,n,r,i,s){return zF(e.writeTree,e.treePath,t,n,r,i,s)}function nv(e,t,n){return jF(e.writeTree,e.treePath,t,n)}function Ex(e,t){return Sx(De(e.treePath,t),e.writeTree)}function Sx(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WF{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,r=t.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ul(r,t.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ll(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Co(r,t.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ul(r,t.snapshotNode,i.oldSnap));else throw $o("Illegal combination of changes: "+t+" occurred after "+i)}else this.changeMap.set(r,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HF{getCompleteChild(t){return null}getChildAfterChild(t,n,r){return null}}const Cx=new HF;class rv{constructor(t,n,r=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const r=this.optCompleteServerCache_!=null?new ci(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return nv(this.writes_,t,r)}}getChildAfterChild(t,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:is(this.viewCache_),s=VF(this.writes_,i,n,1,r,t);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GF(e){return{filter:e}}function KF(e,t){R(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),R(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function qF(e,t,n,r,i){const s=new WF;let o,a;if(n.type===pn.OVERWRITE){const u=n;u.source.fromUser?o=Mm(e,t,u.path,u.snap,r,i,s):(R(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered()&&!Y(u.path),o=od(e,t,u.path,u.snap,r,i,a,s))}else if(n.type===pn.MERGE){const u=n;u.source.fromUser?o=QF(e,t,u.path,u.children,r,i,s):(R(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered(),o=Fm(e,t,u.path,u.children,r,i,a,s))}else if(n.type===pn.ACK_USER_WRITE){const u=n;u.revert?o=ZF(e,t,u.path,r,i,s):o=XF(e,t,u.path,u.affectedTree,r,i,s)}else if(n.type===pn.LISTEN_COMPLETE)o=JF(e,t,n.path,r,s);else throw $o("Unknown operation type: "+n.type);const l=s.getChanges();return YF(t,o,l),{viewCache:o,changes:l}}function YF(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=rd(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(px(rd(t)))}}function Tx(e,t,n,r,i,s){const o=t.eventCache;if(sd(r,n)!=null)return t;{let a,l;if(Y(n))if(R(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const u=is(t),c=u instanceof F?u:F.EMPTY_NODE,d=tv(r,c);a=e.filter.updateFullNode(t.eventCache.getNode(),d,s)}else{const u=id(r,is(t));a=e.filter.updateFullNode(t.eventCache.getNode(),u,s)}else{const u=K(n);if(u===".priority"){R(ui(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=t.serverCache.getNode();const d=n1(r,n,c,l);d!=null?a=e.filter.updatePriority(c,d):a=o.getNode()}else{const c=de(n);let d;if(o.isCompleteForChild(u)){l=t.serverCache.getNode();const h=n1(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=nv(r,u,t.serverCache);d!=null?a=e.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return ka(t,a,o.isFullyInitialized()||Y(n),e.filter.filtersNodes())}}function od(e,t,n,r,i,s,o,a){const l=t.serverCache;let u;const c=o?e.filter:e.filter.getIndexedFilter();if(Y(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),f,null)}else{const f=K(n);if(!l.isCompleteForPath(n)&&ui(n)>1)return t;const g=de(n),S=l.getNode().getImmediateChild(f).updateChild(g,r);f===".priority"?u=c.updatePriority(l.getNode(),S):u=c.updateChild(l.getNode(),f,S,g,Cx,null)}const d=yx(t,u,l.isFullyInitialized()||Y(n),c.filtersNodes()),h=new rv(i,d,s);return Tx(e,d,n,i,h,a)}function Mm(e,t,n,r,i,s,o){const a=t.eventCache;let l,u;const c=new rv(i,t,s);if(Y(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=ka(t,u,!0,e.filter.filtersNodes());else{const d=K(n);if(d===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),r),l=ka(t,u,a.isFullyInitialized(),a.isFiltered());else{const h=de(n),f=a.getNode().getImmediateChild(d);let g;if(Y(h))g=r;else{const v=c.getCompleteChild(d);v!=null?sx(h)===".priority"&&v.getChild(ax(h)).isEmpty()?g=v:g=v.updateChild(h,r):g=F.EMPTY_NODE}if(f.equals(g))l=t;else{const v=e.filter.updateChild(a.getNode(),d,g,h,c,o);l=ka(t,v,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function r1(e,t){return e.eventCache.isCompleteForChild(t)}function QF(e,t,n,r,i,s,o){let a=t;return r.foreach((l,u)=>{const c=De(n,l);r1(t,K(c))&&(a=Mm(e,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=De(n,l);r1(t,K(c))||(a=Mm(e,a,c,u,i,s,o))}),a}function i1(e,t,n){return n.foreach((r,i)=>{t=t.updateChild(r,i)}),t}function Fm(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,u;Y(n)?u=r:u=new ge(null).setTree(n,r);const c=t.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const f=t.serverCache.getNode().getImmediateChild(d),g=i1(e,f,h);l=od(e,l,new ue(d),g,i,s,o,a)}}),u.children.inorderTraversal((d,h)=>{const f=!t.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!f){const g=t.serverCache.getNode().getImmediateChild(d),v=i1(e,g,h);l=od(e,l,new ue(d),v,i,s,o,a)}}),l}function XF(e,t,n,r,i,s,o){if(sd(i,n)!=null)return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(r.value!=null){if(Y(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return od(e,t,n,l.getNode().getChild(n),i,s,a,o);if(Y(n)){let u=new ge(null);return l.getNode().forEachChild(eo,(c,d)=>{u=u.set(new ue(c),d)}),Fm(e,t,n,u,i,s,a,o)}else return t}else{let u=new ge(null);return r.foreach((c,d)=>{const h=De(n,c);l.isCompleteForPath(h)&&(u=u.set(c,l.getNode().getChild(h)))}),Fm(e,t,n,u,i,s,a,o)}}function JF(e,t,n,r,i){const s=t.serverCache,o=yx(t,s.getNode(),s.isFullyInitialized()||Y(n),s.isFiltered());return Tx(e,o,n,r,Cx,i)}function ZF(e,t,n,r,i,s){let o;if(sd(r,n)!=null)return t;{const a=new rv(r,t,i),l=t.eventCache.getNode();let u;if(Y(n)||K(n)===".priority"){let c;if(t.serverCache.isFullyInitialized())c=id(r,is(t));else{const d=t.serverCache.getNode();R(d instanceof F,"serverChildren would be complete if leaf node"),c=tv(r,d)}c=c,u=e.filter.updateFullNode(l,c,s)}else{const c=K(n);let d=nv(r,c,t.serverCache);d==null&&t.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=e.filter.updateChild(l,c,d,de(n),a,s):t.eventCache.getNode().hasChild(c)?u=e.filter.updateChild(l,c,F.EMPTY_NODE,de(n),a,s):u=l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=id(r,is(t)),o.isLeafNode()&&(u=e.filter.updateFullNode(u,o,s)))}return o=t.serverCache.isFullyInitialized()||sd(r,te())!=null,ka(t,u,o,e.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e4{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Xy(r.getIndex()),s=_F(r);this.processor_=GF(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(F.EMPTY_NODE,a.getNode(),null),c=new ci(l,o.isFullyInitialized(),i.filtersNodes()),d=new ci(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=sh(d,c),this.eventGenerator_=new xF(this.query_)}get query(){return this.query_}}function t4(e){return e.viewCache_.serverCache.getNode()}function n4(e){return rd(e.viewCache_)}function r4(e,t){const n=is(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Y(t)&&!n.getImmediateChild(K(t)).isEmpty())?n.getChild(t):null}function s1(e){return e.eventRegistrations_.length===0}function i4(e,t){e.eventRegistrations_.push(t)}function o1(e,t,n){const r=[];if(n){R(t==null,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(t){let i=[];for(let s=0;s<e.eventRegistrations_.length;++s){const o=e.eventRegistrations_[s];if(!o.matches(t))i.push(o);else if(t.hasAnyCallback()){i=i.concat(e.eventRegistrations_.slice(s+1));break}}e.eventRegistrations_=i}else e.eventRegistrations_=[];return r}function a1(e,t,n,r){t.type===pn.MERGE&&t.source.queryId!==null&&(R(is(e.viewCache_),"We should always have a full cache before handling merges"),R(rd(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=qF(e.processor_,i,t,n,r);return KF(e.processor_,s.viewCache),R(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Ix(e,s.changes,s.viewCache.eventCache.getNode(),null)}function s4(e,t){const n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(xe,(s,o)=>{r.push(Co(s,o))}),n.isFullyInitialized()&&r.push(px(n.getNode())),Ix(e,r,n.getNode(),t)}function Ix(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return kF(e.eventGenerator_,t,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ad;class xx{constructor(){this.views=new Map}}function o4(e){R(!ad,"__referenceConstructor has already been defined"),ad=e}function a4(){return R(ad,"Reference.ts has not been loaded"),ad}function l4(e){return e.views.size===0}function iv(e,t,n,r){const i=t.source.queryId;if(i!==null){const s=e.views.get(i);return R(s!=null,"SyncTree gave us an op for an invalid query."),a1(s,t,n,r)}else{let s=[];for(const o of e.views.values())s=s.concat(a1(o,t,n,r));return s}}function kx(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let a=id(n,i?r:null),l=!1;a?l=!0:r instanceof F?(a=tv(n,r),l=!1):(a=F.EMPTY_NODE,l=!1);const u=sh(new ci(a,l,!1),new ci(r,i,!1));return new e4(t,u)}return o}function u4(e,t,n,r,i,s){const o=kx(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),i4(o,n),s4(o,n)}function c4(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const a=di(e);if(i==="default")for(const[l,u]of e.views.entries())o=o.concat(o1(u,n,r)),s1(u)&&(e.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=e.views.get(i);l&&(o=o.concat(o1(l,n,r)),s1(l)&&(e.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!di(e)&&s.push(new(a4())(t._repo,t._path)),{removed:s,events:o}}function Px(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function ti(e,t){let n=null;for(const r of e.views.values())n=n||r4(r,t);return n}function Rx(e,t){if(t._queryParams.loadsAllData())return ah(e);{const r=t._queryIdentifier;return e.views.get(r)}}function Ax(e,t){return Rx(e,t)!=null}function di(e){return ah(e)!=null}function ah(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ld;function d4(e){R(!ld,"__referenceConstructor has already been defined"),ld=e}function h4(){return R(ld,"Reference.ts has not been loaded"),ld}let f4=1;class l1{constructor(t){this.listenProvider_=t,this.syncPointTree_=new ge(null),this.pendingWriteTree_=BF(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function bx(e,t,n,r,i){return bF(e.pendingWriteTree_,t,n,r,i),i?Ul(e,new rs(gx(),t,n)):[]}function Li(e,t,n=!1){const r=OF(e.pendingWriteTree_,t);if(NF(e.pendingWriteTree_,t)){let s=new ge(null);return r.snap!=null?s=s.set(te(),!0):Ot(r.children,o=>{s=s.set(new ue(o),!0)}),Ul(e,new nd(r.path,s,n))}else return[]}function jl(e,t,n){return Ul(e,new rs(Zy(),t,n))}function p4(e,t,n){const r=ge.fromObject(n);return Ul(e,new hl(Zy(),t,r))}function m4(e,t){return Ul(e,new dl(Zy(),t))}function g4(e,t,n){const r=ov(e,n);if(r){const i=av(r),s=i.path,o=i.queryId,a=gt(s,t),l=new dl(ev(o),a);return lv(e,s,l)}else return[]}function ud(e,t,n,r,i=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&(t._queryIdentifier==="default"||Ax(o,t))){const l=c4(o,t,n,r);l4(o)&&(e.syncPointTree_=e.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=e.syncPointTree_.findOnPath(s,(h,f)=>di(f));if(c&&!d){const h=e.syncPointTree_.subtree(s);if(!h.isEmpty()){const f=_4(h);for(let g=0;g<f.length;++g){const v=f[g],S=v.query,m=$x(e,v);e.listenProvider_.startListening(Ra(S),fl(e,S),m.hashFn,m.onComplete)}}}!d&&u.length>0&&!r&&(c?e.listenProvider_.stopListening(Ra(t),null):u.forEach(h=>{const f=e.queryToTagMap.get(lh(h));e.listenProvider_.stopListening(Ra(h),f)}))}w4(e,u)}return a}function Ox(e,t,n,r){const i=ov(e,r);if(i!=null){const s=av(i),o=s.path,a=s.queryId,l=gt(o,t),u=new rs(ev(a),l,n);return lv(e,o,u)}else return[]}function y4(e,t,n,r){const i=ov(e,r);if(i){const s=av(i),o=s.path,a=s.queryId,l=gt(o,t),u=ge.fromObject(n),c=new hl(ev(a),l,u);return lv(e,o,c)}else return[]}function jm(e,t,n,r=!1){const i=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(i,(h,f)=>{const g=gt(h,i);s=s||ti(f,g),o=o||di(f)});let a=e.syncPointTree_.get(i);a?(o=o||di(a),s=s||ti(a,te())):(a=new xx,e.syncPointTree_=e.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=F.EMPTY_NODE,e.syncPointTree_.subtree(i).foreachChild((f,g)=>{const v=ti(g,te());v&&(s=s.updateImmediateChild(f,v))}));const u=Ax(a,t);if(!u&&!t._queryParams.loadsAllData()){const h=lh(t);R(!e.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=E4();e.queryToTagMap.set(h,f),e.tagToQueryMap.set(f,h)}const c=oh(e.pendingWriteTree_,i);let d=u4(a,t,n,c,s,l);if(!u&&!o&&!r){const h=Rx(a,t);d=d.concat(S4(e,t,h))}return d}function sv(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(o,a)=>{const l=gt(o,t),u=ti(a,l);if(u)return u});return wx(i,t,s,n,!0)}function v4(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=gt(u,n);r=r||ti(c,d)});let i=e.syncPointTree_.get(n);i?r=r||ti(i,te()):(i=new xx,e.syncPointTree_=e.syncPointTree_.set(n,i));const s=r!=null,o=s?new ci(r,!0,!1):null,a=oh(e.pendingWriteTree_,t._path),l=kx(i,t,a,s?o.getNode():F.EMPTY_NODE,s);return n4(l)}function Ul(e,t){return Nx(t,e.syncPointTree_,null,oh(e.pendingWriteTree_,te()))}function Nx(e,t,n,r){if(Y(e.path))return Dx(e,t,n,r);{const i=t.get(te());n==null&&i!=null&&(n=ti(i,te()));let s=[];const o=K(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=Ex(r,o);s=s.concat(Nx(a,l,u,c))}return i&&(s=s.concat(iv(i,e,r,n))),s}}function Dx(e,t,n,r){const i=t.get(te());n==null&&i!=null&&(n=ti(i,te()));let s=[];return t.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=Ex(r,o),c=e.operationForChild(o);c&&(s=s.concat(Dx(c,a,l,u)))}),i&&(s=s.concat(iv(i,e,r,n))),s}function $x(e,t){const n=t.query,r=fl(e,n);return{hashFn:()=>(t4(t)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?g4(e,n._path,r):m4(e,n._path);{const s=vM(i,n);return ud(e,n,null,s)}}}}function fl(e,t){const n=lh(t);return e.queryToTagMap.get(n)}function lh(e){return e._path.toString()+"$"+e._queryIdentifier}function ov(e,t){return e.tagToQueryMap.get(t)}function av(e){const t=e.indexOf("$");return R(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ue(e.substr(0,t))}}function lv(e,t,n){const r=e.syncPointTree_.get(t);R(r,"Missing sync point for query tag that we're tracking");const i=oh(e.pendingWriteTree_,t);return iv(r,n,i,null)}function _4(e){return e.fold((t,n,r)=>{if(n&&di(n))return[ah(n)];{let i=[];return n&&(i=Px(n)),Ot(r,(s,o)=>{i=i.concat(o)}),i}})}function Ra(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(h4())(e._repo,e._path):e}function w4(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const i=lh(r),s=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(s)}}}function E4(){return f4++}function S4(e,t,n){const r=t._path,i=fl(e,t),s=$x(e,n),o=e.listenProvider_.startListening(Ra(t),i,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(r);if(i)R(!di(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!Y(u)&&c&&di(c))return[ah(c).query];{let h=[];return c&&(h=h.concat(Px(c).map(f=>f.query))),Ot(d,(f,g)=>{h=h.concat(g)}),h}});for(let u=0;u<l.length;++u){const c=l[u];e.listenProvider_.stopListening(Ra(c),fl(e,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new uv(n)}node(){return this.node_}}class cv{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=De(this.path_,t);return new cv(this.syncTree_,n)}node(){return sv(this.syncTree_,this.path_)}}const C4=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},u1=function(e,t,n){if(!e||typeof e!="object")return e;if(R(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return T4(e[".sv"],t,n);if(typeof e[".sv"]=="object")return I4(e[".sv"],t);R(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},T4=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+e)}},I4=function(e,t,n){e.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;typeof r!="number"&&R(!1,"Unexpected increment value: "+r);const i=t.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},x4=function(e,t,n,r){return dv(t,new cv(n,e),r)},Lx=function(e,t,n){return dv(e,new uv(t),n)};function dv(e,t,n){const r=e.getPriority().val(),i=u1(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const o=e,a=u1(o.getValue(),t,n);return a!==o.getValue()||i!==o.getPriority().val()?new Me(a,ze(i)):e}else{const o=e;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Me(i))),o.forEachChild(xe,(a,l)=>{const u=dv(l,t.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(t="",n=null,r={children:{},childCount:0}){this.name=t,this.parent=n,this.node=r}}function fv(e,t){let n=t instanceof ue?t:new ue(t),r=e,i=K(n);for(;i!==null;){const s=Eo(r.node.children,i)||{children:{},childCount:0};r=new hv(i,r,s),n=de(n),i=K(n)}return r}function jo(e){return e.node.value}function Mx(e,t){e.node.value=t,Um(e)}function Fx(e){return e.node.childCount>0}function k4(e){return jo(e)===void 0&&!Fx(e)}function uh(e,t){Ot(e.node.children,(n,r)=>{t(new hv(n,e,r))})}function jx(e,t,n,r){n&&!r&&t(e),uh(e,i=>{jx(i,t,!0,r)}),n&&r&&t(e)}function P4(e,t,n){let r=n?e:e.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function zl(e){return new ue(e.parent===null?e.name:zl(e.parent)+"/"+e.name)}function Um(e){e.parent!==null&&R4(e.parent,e.name,e)}function R4(e,t,n){const r=k4(n),i=Er(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Um(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,Um(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A4=/[\[\].#$\/\u0000-\u001F\u007F]/,b4=/[\[\].#$\u0000-\u001F\u007F]/,qf=10*1024*1024,Ux=function(e){return typeof e=="string"&&e.length!==0&&!A4.test(e)},zx=function(e){return typeof e=="string"&&e.length!==0&&!b4.test(e)},O4=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),zx(e)},N4=function(e,t,n,r){r&&t===void 0||pv(zy(e,"value"),t,n)},pv=function(e,t,n){const r=n instanceof ue?new XM(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+Ri(r));if(typeof t=="function")throw new Error(e+"contains a function "+Ri(r)+" with contents = "+t.toString());if(FI(t))throw new Error(e+"contains "+t.toString()+" "+Ri(r));if(typeof t=="string"&&t.length>qf/3&&th(t)>qf)throw new Error(e+"contains a string greater than "+qf+" utf8 bytes "+Ri(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let i=!1,s=!1;if(Ot(t,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Ux(o)))throw new Error(e+" contains an invalid key ("+o+") "+Ri(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);JM(r,o),pv(e,a,r),ZM(r)}),i&&s)throw new Error(e+' contains ".value" child '+Ri(r)+" in addition to actual children.")}},Bx=function(e,t,n,r){if(!(r&&n===void 0)&&!zx(n))throw new Error(zy(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},D4=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Bx(e,t,n,r)},$4=function(e,t){if(K(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},L4=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!Ux(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!O4(n))throw new Error(zy(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function mv(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();n!==null&&!qy(s,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function Vx(e,t,n){mv(e,n),Wx(e,r=>qy(r,t))}function Fn(e,t,n){mv(e,n),Wx(e,r=>fn(r,t)||fn(t,r))}function Wx(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const s=i.path;t(s)?(F4(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function F4(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const r=n.getEventRunner();Vi&&ot("event: "+n.toString()),Fo(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j4="repo_interrupt",U4=25;class z4{constructor(t,n,r,i){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new M4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=td(),this.transactionQueueTree_=new hv,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function B4(e,t,n){if(e.stats_=Gy(e.repoInfo_),e.forceRestClient_||SM())e.server_=new ed(e.repoInfo_,(r,i,s,o)=>{c1(e,r,i,s,o)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>d1(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ne(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new ar(e.repoInfo_,t,(r,i,s,o)=>{c1(e,r,i,s,o)},r=>{d1(e,r)},r=>{W4(e,r)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(r=>{e.server_.refreshAuthToken(r)}),e.appCheckProvider_.addTokenChangeListener(r=>{e.server_.refreshAppCheckToken(r.token)}),e.statsReporter_=kM(e.repoInfo_,()=>new IF(e.stats_,e.server_)),e.infoData_=new wF,e.infoSyncTree_=new l1({startListening:(r,i,s,o)=>{let a=[];const l=e.infoData_.getNode(r._path);return l.isEmpty()||(a=jl(e.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),yv(e,"connected",!1),e.serverSyncTree_=new l1({startListening:(r,i,s,o)=>(e.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Fn(e.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{e.server_.unlisten(r,i)}})}function V4(e){const n=e.infoData_.getNode(new ue(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function gv(e){return C4({timestamp:V4(e)})}function c1(e,t,n,r,i){e.dataUpdateCount++;const s=new ue(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const l=qc(n,u=>ze(u));o=y4(e.serverSyncTree_,s,l,i)}else{const l=ze(n);o=Ox(e.serverSyncTree_,s,l,i)}else if(r){const l=qc(n,u=>ze(u));o=p4(e.serverSyncTree_,s,l)}else{const l=ze(n);o=jl(e.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=dh(e,s)),Fn(e.eventQueue_,a,o)}function d1(e,t){yv(e,"connected",t),t===!1&&K4(e)}function W4(e,t){Ot(t,(n,r)=>{yv(e,n,r)})}function yv(e,t,n){const r=new ue("/.info/"+t),i=ze(n);e.infoData_.updateSnapshot(r,i);const s=jl(e.infoSyncTree_,r,i);Fn(e.eventQueue_,r,s)}function Hx(e){return e.nextWriteId_++}function H4(e,t,n){const r=v4(e.serverSyncTree_,t);return r!=null?Promise.resolve(r):e.server_.get(t).then(i=>{const s=ze(i).withIndex(t._queryParams.getIndex());jm(e.serverSyncTree_,t,n,!0);let o;if(t._queryParams.loadsAllData())o=jl(e.serverSyncTree_,t._path,s);else{const a=fl(e.serverSyncTree_,t);o=Ox(e.serverSyncTree_,t._path,s,a)}return Fn(e.eventQueue_,t._path,o),ud(e.serverSyncTree_,t,n,null,!0),s},i=>(ch(e,"get for query "+Ne(t)+" failed: "+i),Promise.reject(new Error(i))))}function G4(e,t,n,r,i){ch(e,"set",{path:t.toString(),value:n,priority:r});const s=gv(e),o=ze(n,r),a=sv(e.serverSyncTree_,t),l=Lx(o,a,s),u=Hx(e),c=bx(e.serverSyncTree_,t,l,u,!0);mv(e.eventQueue_,c),e.server_.put(t.toString(),o.val(!0),(h,f)=>{const g=h==="ok";g||bt("set at "+t+" failed: "+h);const v=Li(e.serverSyncTree_,u,!g);Fn(e.eventQueue_,t,v),Q4(e,i,h,f)});const d=Qx(e,t);dh(e,d),Fn(e.eventQueue_,d,[])}function K4(e){ch(e,"onDisconnectEvents");const t=gv(e),n=td();Dm(e.onDisconnect_,te(),(i,s)=>{const o=x4(i,s,e.serverSyncTree_,t);mx(n,i,o)});let r=[];Dm(n,te(),(i,s)=>{r=r.concat(jl(e.serverSyncTree_,i,s));const o=Qx(e,i);dh(e,o)}),e.onDisconnect_=td(),Fn(e.eventQueue_,te(),r)}function q4(e,t,n){let r;K(t._path)===".info"?r=jm(e.infoSyncTree_,t,n):r=jm(e.serverSyncTree_,t,n),Vx(e.eventQueue_,t._path,r)}function h1(e,t,n){let r;K(t._path)===".info"?r=ud(e.infoSyncTree_,t,n):r=ud(e.serverSyncTree_,t,n),Vx(e.eventQueue_,t._path,r)}function Y4(e){e.persistentConnection_&&e.persistentConnection_.interrupt(j4)}function ch(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),ot(n,...t)}function Q4(e,t,n,r){t&&Fo(()=>{if(n==="ok")t(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,t(o)}})}function Gx(e,t,n){return sv(e.serverSyncTree_,t,n)||F.EMPTY_NODE}function vv(e,t=e.transactionQueueTree_){if(t||hh(e,t),jo(t)){const n=qx(e,t);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&X4(e,zl(t),n)}else Fx(t)&&uh(t,n=>{vv(e,n)})}function X4(e,t,n){const r=n.map(u=>u.currentWriteId),i=Gx(e,t,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];R(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=gt(t,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,u=>{ch(e,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(Li(e.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();hh(e,fv(e.transactionQueueTree_,t)),vv(e,e.transactionQueueTree_),Fn(e.eventQueue_,t,c);for(let h=0;h<d.length;h++)Fo(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{bt("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}dh(e,t)}},o)}function dh(e,t){const n=Kx(e,t),r=zl(n),i=qx(e,n);return J4(e,i,r),r}function J4(e,t,n){if(t.length===0)return;const r=[];let i=[];const o=t.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<t.length;a++){const l=t[a],u=gt(n,l.path);let c=!1,d;if(R(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(Li(e.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=U4)c=!0,d="maxretry",i=i.concat(Li(e.serverSyncTree_,l.currentWriteId,!0));else{const h=Gx(e,l.path,o);l.currentInputSnapshot=h;const f=t[a].update(h.val());if(f!==void 0){pv("transaction failed: Data returned ",f,l.path);let g=ze(f);typeof f=="object"&&f!=null&&Er(f,".priority")||(g=g.updatePriority(h.getPriority()));const S=l.currentWriteId,m=gv(e),p=Lx(g,h,m);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=p,l.currentWriteId=Hx(e),o.splice(o.indexOf(S),1),i=i.concat(bx(e.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(Li(e.serverSyncTree_,S,!0))}else c=!0,d="nodata",i=i.concat(Li(e.serverSyncTree_,l.currentWriteId,!0))}Fn(e.eventQueue_,n,i),i=[],c&&(t[a].status=2,function(h){setTimeout(h,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&(d==="nodata"?r.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):r.push(()=>t[a].onComplete(new Error(d),!1,null))))}hh(e,e.transactionQueueTree_);for(let a=0;a<r.length;a++)Fo(r[a]);vv(e,e.transactionQueueTree_)}function Kx(e,t){let n,r=e.transactionQueueTree_;for(n=K(t);n!==null&&jo(r)===void 0;)r=fv(r,n),t=de(t),n=K(t);return r}function qx(e,t){const n=[];return Yx(e,t,n),n.sort((r,i)=>r.order-i.order),n}function Yx(e,t,n){const r=jo(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);uh(t,i=>{Yx(e,i,n)})}function hh(e,t){const n=jo(t);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Mx(t,n.length>0?n:void 0)}uh(t,r=>{hh(e,r)})}function Qx(e,t){const n=zl(Kx(e,t)),r=fv(e.transactionQueueTree_,t);return P4(r,i=>{Yf(e,i)}),Yf(e,r),jx(r,i=>{Yf(e,i)}),n}function Yf(e,t){const n=jo(t);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Li(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Mx(t,void 0):n.length=s+1,Fn(e.eventQueue_,zl(t),i);for(let o=0;o<r.length;o++)Fo(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z4(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}t+="/"+i}return t}function ej(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):bt(`Invalid query segment '${n}' in query '${e}'`)}return t}const f1=function(e,t){const n=tj(e),r=n.namespace;n.domain==="firebase.com"&&pr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&pr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||fM();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new QI(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new ue(n.pathString)}},tj=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof e=="string"){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let c=e.indexOf("/");c===-1&&(c=e.length);let d=e.indexOf("?");d===-1&&(d=e.length),t=e.substring(0,Math.min(c,d)),c<d&&(i=Z4(e.substring(c,d)));const h=ej(e.substring(Math.min(e.length,d)));u=t.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(t.substring(u+1),10)):u=t.length;const f=t.slice(0,u);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const g=t.indexOf(".");r=t.substring(0,g).toLowerCase(),n=t.substring(g+1),s=r}"ns"in h&&(s=h.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(t,n,r,i){this.eventType=t,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ne(this.snapshot.exportVal())}}class Jx{constructor(t,n,r){this.eventRegistration=t,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(t,n,r,i){this._repo=t,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Y(this._path)?null:sx(this._path)}get ref(){return new Un(this._repo,this._path)}get _queryIdentifier(){const t=Xw(this._queryParams),n=Wy(t);return n==="{}"?"default":n}get _queryObject(){return Xw(this._queryParams)}isEqual(t){if(t=Et(t),!(t instanceof _v))return!1;const n=this._repo===t._repo,r=qy(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+QM(this._path)}}class Un extends _v{constructor(t,n){super(t,n,new Jy,!1)}get parent(){const t=ax(this._path);return t===null?null:new Un(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class Io{constructor(t,n,r){this._node=t,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new ue(t),r=pl(this.ref,t);return new Io(this._node.getChild(n),r,xe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>t(new Io(i,pl(this.ref,r),xe)))}hasChild(t){const n=new ue(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function fh(e,t){return e=Et(e),e._checkNotDeleted("ref"),t!==void 0?pl(e._root,t):e._root}function pl(e,t){return e=Et(e),K(e._path)===null?D4("child","path",t,!1):Bx("child","path",t,!1),new Un(e._repo,De(e._path,t))}function ek(e,t){e=Et(e),$4("set",e._path),N4("set",t,e._path,!1);const n=new eh;return G4(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function wv(e){e=Et(e);const t=new Zx(()=>{}),n=new ph(t);return H4(e._repo,e,n).then(r=>new Io(r,new Un(e._repo,e._path),e._queryParams.getIndex()))}class ph{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const r=n._queryParams.getIndex();return new Xx("value",this,new Io(t.snapshotNode,new Un(n._repo,n._path),r))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new Jx(this,t,n):null}matches(t){return t instanceof ph?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Ev{constructor(t,n){this.eventType=t,this.callbackContext=n}respondsTo(t){let n=t==="children_added"?"child_added":t;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new Jx(this,t,n):null}createEvent(t,n){R(t.childName!=null,"Child events should have a childName.");const r=pl(new Un(n._repo,n._path),t.childName),i=n._queryParams.getIndex();return new Xx(t.type,this,new Io(t.snapshotNode,r,i),t.prevName)}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,t.prevName)}matches(t){return t instanceof Ev?this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function nj(e,t,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{h1(e._repo,e,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new Zx(n,s||void 0),a=t==="value"?new ph(o):new Ev(t,o);return q4(e._repo,e,a),()=>h1(e._repo,e,a)}function rj(e,t,n,r){return nj(e,"value",t,n,r)}o4(Un);d4(Un);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ij="FIREBASE_DATABASE_EMULATOR_HOST",zm={};let sj=!1;function oj(e,t,n,r){e.repoInfo_=new QI(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function aj(e,t,n,r,i){let s=r||e.options.databaseURL;s===void 0&&(e.options.projectId||pr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ot("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=f1(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[ij]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=f1(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Zs(Zs.OWNER):new TM(e.name,e.options,t);L4("Invalid Firebase Database URL",o),Y(o.path)||pr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=uj(a,e,c,new CM(e.name,n));return new cj(d,e)}function lj(e,t){const n=zm[t];(!n||n[e.key]!==e)&&pr(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Y4(e),delete n[e.key]}function uj(e,t,n,r){let i=zm[t.name];i||(i={},zm[t.name]=i);let s=i[e.toURLString()];return s&&pr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new z4(e,sj,n,r),i[e.toURLString()]=s,s}class cj{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(B4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Un(this._repo,te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(lj(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&pr("Cannot call "+t+" on a deleted database.")}}function tk(e=Vy(),t){const n=rh(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const r=CI("database");r&&dj(n,...r)}return n}function dj(e,t,n,r={}){e=Et(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&pr("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&pr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Zs(Zs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:xI(r.mockUserToken,e.app.options.projectId);s=new Zs(o)}oj(i,t,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hj(e){lM(fs),ts(new li("database",(t,{instanceIdentifier:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return aj(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),$n(Dw,$w,e),$n(Dw,$w,"esm2017")}ar.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};ar.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};hj();function Sv(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function nk(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fj=nk,rk=new $l("auth","Firebase",nk());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd=new nh("@firebase/auth");function pj(e,...t){cd.logLevel<=ne.WARN&&cd.warn(`Auth (${fs}): ${e}`,...t)}function tc(e,...t){cd.logLevel<=ne.ERROR&&cd.error(`Auth (${fs}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(e,...t){throw Tv(e,...t)}function _n(e,...t){return Tv(e,...t)}function Cv(e,t,n){const r=Object.assign(Object.assign({},fj()),{[t]:n});return new $l("auth","Firebase",r).create(t,{appName:e.name})}function lr(e){return Cv(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mj(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&rn(e,"argument-error"),Cv(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tv(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return rk.create(e,...t)}function U(e,t,...n){if(!e)throw Tv(t,...n)}function er(e){const t="INTERNAL ASSERTION FAILED: "+e;throw tc(t),new Error(t)}function mr(e,t){e||er(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function gj(){return p1()==="http:"||p1()==="https:"}function p1(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yj(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gj()||V$()||"connection"in navigator)?navigator.onLine:!0}function vj(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(t,n){this.shortDelay=t,this.longDelay=n,mr(n>t,"Short delay should be less than long delay!"),this.isMobile=Uy()||kI()}get(){return yj()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(e,t){mr(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _j={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wj=new Bl(3e4,6e4);function gi(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function yi(e,t,n,r,i={}){return sk(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Lo(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),ik.fetch()(ok(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function sk(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},_j),t);try{const i=new Sj(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Pu(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pu(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Pu(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Pu(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Cv(e,c,u);rn(e,c)}}catch(i){if(i instanceof wr)throw i;rn(e,"network-request-failed",{message:String(i)})}}async function Vl(e,t,n,r,i={}){const s=await yi(e,t,n,r,i);return"mfaPendingCredential"in s&&rn(e,"multi-factor-auth-required",{_serverResponse:s}),s}function ok(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Iv(e.config,i):`${e.config.apiScheme}://${i}`}function Ej(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Sj{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_n(this.auth,"network-request-failed")),wj.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pu(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_n(e,t,r);return i.customData._tokenResponse=n,i}function m1(e){return e!==void 0&&e.enterprise!==void 0}class Cj{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return Ej(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function Tj(e,t){return yi(e,"GET","/v2/recaptchaConfig",gi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ij(e,t){return yi(e,"POST","/v1/accounts:delete",t)}async function ak(e,t){return yi(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function xj(e,t=!1){const n=Et(e),r=await n.getIdToken(t),i=xv(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Aa(Qf(i.auth_time)),issuedAtTime:Aa(Qf(i.iat)),expirationTime:Aa(Qf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Qf(e){return Number(e)*1e3}function xv(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return tc("JWT malformed, contained fewer than 3 sections"),null;try{const i=Kc(n);return i?JSON.parse(i):(tc("Failed to decode base64 JWT payload"),null)}catch(i){return tc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function g1(e){const t=xv(e);return U(t,"internal-error"),U(typeof t.exp<"u","internal-error"),U(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ml(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof wr&&kj(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function kj({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pj{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Aa(this.lastLoginAt),this.creationTime=Aa(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dd(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ml(e,ak(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?lk(s.providerUserInfo):[],a=Aj(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Vm(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function Rj(e){const t=Et(e);await dd(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Aj(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function lk(e){return e.map(t=>{var{providerId:n}=t,r=Sv(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bj(e,t){const n=await sk(e,{},async()=>{const r=Lo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=ok(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ik.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Oj(e,t){return yi(e,"POST","/v2/accounts:revokeToken",gi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){U(t.idToken,"internal-error"),U(typeof t.idToken<"u","internal-error"),U(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):g1(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){U(t.length!==0,"internal-error");const n=g1(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await bj(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new to;return r&&(U(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new to,this.toJSON())}_performRefresh(){return er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(e,t){U(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class tr{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Sv(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Pj(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Vm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await ml(this,this.stsTokenManager.getToken(this.auth,t));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return xj(this,t)}reload(){return Rj(this)}_assign(t){this!==t&&(U(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new tr(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await dd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(hn(this.auth.app))return Promise.reject(lr(this.auth));const t=await this.getIdToken();return await ml(this,Ij(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:_,isAnonymous:I,providerData:E,stsTokenManager:C}=n;U(y&&C,t,"internal-error");const x=to.fromJSON(this.name,C);U(typeof y=="string",t,"internal-error"),xr(d,t.name),xr(h,t.name),U(typeof _=="boolean",t,"internal-error"),U(typeof I=="boolean",t,"internal-error"),xr(f,t.name),xr(g,t.name),xr(v,t.name),xr(S,t.name),xr(m,t.name),xr(p,t.name);const $=new tr({uid:y,auth:t,email:h,emailVerified:_,displayName:d,isAnonymous:I,photoURL:g,phoneNumber:f,tenantId:v,stsTokenManager:x,createdAt:m,lastLoginAt:p});return E&&Array.isArray(E)&&($.providerData=E.map(j=>Object.assign({},j))),S&&($._redirectEventId=S),$}static async _fromIdTokenResponse(t,n,r=!1){const i=new to;i.updateFromServerResponse(n);const s=new tr({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await dd(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];U(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?lk(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new to;a.updateFromIdToken(r);const l=new tr({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Vm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1=new Map;function nr(e){mr(e instanceof Function,"Expected a class definition");let t=y1.get(e);return t?(mr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,y1.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}uk.type="NONE";const v1=uk;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(e,t,n){return`firebase:${e}:${t}:${n}`}class no{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=nc(this.userKey,i.apiKey,s),this.fullPersistenceKey=nc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?tr._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new no(nr(v1),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||nr(v1);const o=nc(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=tr._fromJSON(t,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new no(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new no(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _1(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(hk(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ck(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(pk(t))return"Blackberry";if(mk(t))return"Webos";if(kv(t))return"Safari";if((t.includes("chrome/")||dk(t))&&!t.includes("edge/"))return"Chrome";if(fk(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ck(e=ht()){return/firefox\//i.test(e)}function kv(e=ht()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function dk(e=ht()){return/crios\//i.test(e)}function hk(e=ht()){return/iemobile/i.test(e)}function fk(e=ht()){return/android/i.test(e)}function pk(e=ht()){return/blackberry/i.test(e)}function mk(e=ht()){return/webos/i.test(e)}function mh(e=ht()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Nj(e=ht()){var t;return mh(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Dj(){return W$()&&document.documentMode===10}function gk(e=ht()){return mh(e)||fk(e)||mk(e)||pk(e)||/windows phone/i.test(e)||hk(e)}function $j(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(e,t=[]){let n;switch(e){case"Browser":n=_1(ht());break;case"Worker":n=`${_1(ht())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${fs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lj{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mj(e,t={}){return yi(e,"GET","/v2/passwordPolicy",gi(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fj=6;class jj{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Fj,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uj{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new w1(this),this.idTokenSubscription=new w1(this),this.beforeStateQueue=new Lj(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rk,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=nr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await no.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await ak(this,{idToken:t}),r=await tr._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(hn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await dd(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=vj()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(hn(this.app))return Promise.reject(lr(this));const n=t?Et(t):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&U(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return hn(this.app)?Promise.reject(lr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return hn(this.app)?Promise.reject(lr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nr(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Mj(this),n=new jj(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new $l("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Oj(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&nr(t)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await no.create(this,[nr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=yk(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&pj(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vi(e){return Et(e)}class w1{constructor(t){this.auth=t,this.observer=null,this.addObserver=Z$(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zj(e){gh=e}function vk(e){return gh.loadJS(e)}function Bj(){return gh.recaptchaEnterpriseScript}function Vj(){return gh.gapiScript}function Wj(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Hj="recaptcha-enterprise",Gj="NO_RECAPTCHA";class Kj{constructor(t){this.type=Hj,this.auth=vi(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Tj(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Cj(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;m1(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(Gj)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&m1(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Bj();l.length!==0&&(l+=a),vk(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function E1(e,t,n,r=!1){const i=new Kj(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Wm(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await E1(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await E1(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qj(e,t){const n=rh(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Yc(s,t??{}))return i;rn(i,"already-initialized")}return n.initialize({options:t})}function Yj(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nr);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Qj(e,t,n){const r=vi(e);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=_k(t),{host:o,port:a}=Xj(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Jj()}function _k(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Xj(e){const t=_k(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:S1(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:S1(o)}}}function S1(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Jj(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return er("not implemented")}_getIdTokenResponse(t){return er("not implemented")}_linkToIdToken(t,n){return er("not implemented")}_getReauthenticationResolver(t){return er("not implemented")}}async function Zj(e,t){return yi(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e3(e,t){return Vl(e,"POST","/v1/accounts:signInWithPassword",gi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t3(e,t){return Vl(e,"POST","/v1/accounts:signInWithEmailLink",gi(e,t))}async function n3(e,t){return Vl(e,"POST","/v1/accounts:signInWithEmailLink",gi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends Pv{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new gl(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new gl(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wm(t,n,"signInWithPassword",e3);case"emailLink":return t3(t,{email:this._email,oobCode:this._password});default:rn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wm(t,r,"signUpPassword",Zj);case"emailLink":return n3(t,{idToken:n,email:this._email,oobCode:this._password});default:rn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(e,t){return Vl(e,"POST","/v1/accounts:signInWithIdp",gi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r3="http://localhost";class ss extends Pv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new ss(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Sv(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ss(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return ro(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,ro(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,ro(t,n)}buildRequest(){const t={requestUri:r3,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Lo(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i3(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function s3(e){const t=ha(fa(e)).link,n=t?ha(fa(t)).deep_link_id:null,r=ha(fa(e)).deep_link_id;return(r?ha(fa(r)).link:null)||r||n||t||e}class Rv{constructor(t){var n,r,i,s,o,a;const l=ha(fa(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=i3((i=l.mode)!==null&&i!==void 0?i:null);U(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=s3(t);try{return new Rv(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this.providerId=Uo.PROVIDER_ID}static credential(t,n){return gl._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Rv.parseLink(n);return U(r,"argument-error"),gl._fromEmailAndCode(t,r.code,r.tenantId)}}Uo.PROVIDER_ID="password";Uo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Uo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl extends Av{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends Wl{constructor(){super("facebook.com")}static credential(t){return ss._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Dr.credentialFromTaggedObject(t)}static credentialFromError(t){return Dr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Dr.credential(t.oauthAccessToken)}catch{return null}}}Dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Wl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return ss._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Qn.credentialFromTaggedObject(t)}static credentialFromError(t){return Qn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends Wl{constructor(){super("github.com")}static credential(t){return ss._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return $r.credentialFromTaggedObject(t)}static credentialFromError(t){return $r.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return $r.credential(t.oauthAccessToken)}catch{return null}}}$r.GITHUB_SIGN_IN_METHOD="github.com";$r.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends Wl{constructor(){super("twitter.com")}static credential(t,n){return ss._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Lr.credentialFromTaggedObject(t)}static credentialFromError(t){return Lr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Lr.credential(n,r)}catch{return null}}}Lr.TWITTER_SIGN_IN_METHOD="twitter.com";Lr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o3(e,t){return Vl(e,"POST","/v1/accounts:signUp",gi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await tr._fromIdTokenResponse(t,r,i),o=C1(r);return new os({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=C1(r);return new os({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function C1(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd extends wr{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,hd.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new hd(t,n,r,i)}}function wk(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?hd._fromErrorAndOperation(e,s,t,r):s})}async function a3(e,t,n=!1){const r=await ml(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return os._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l3(e,t,n=!1){const{auth:r}=e;if(hn(r.app))return Promise.reject(lr(r));const i="reauthenticate";try{const s=await ml(e,wk(r,i,t,e),n);U(s.idToken,r,"internal-error");const o=xv(s.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(e.uid===a,r,"user-mismatch"),os._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&rn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ek(e,t,n=!1){if(hn(e.app))return Promise.reject(lr(e));const r="signIn",i=await wk(e,r,t),s=await os._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function u3(e,t){return Ek(vi(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sk(e){const t=vi(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function c3(e,t,n){if(hn(e.app))return Promise.reject(lr(e));const r=vi(e),o=await Wm(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",o3).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Sk(e),l}),a=await os._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function d3(e,t,n){return hn(e.app)?Promise.reject(lr(e)):u3(Et(e),Uo.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Sk(e),r})}function h3(e,t,n,r){return Et(e).onIdTokenChanged(t,n,r)}function f3(e,t,n){return Et(e).beforeAuthStateChanged(t,n)}function p3(e,t,n,r){return Et(e).onAuthStateChanged(t,n,r)}function m3(e){return Et(e).signOut()}const fd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fd,"1"),this.storage.removeItem(fd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g3(){const e=ht();return kv(e)||mh(e)}const y3=1e3,v3=10;class Tk extends Ck{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=g3()&&$j(),this.fallbackToPolling=gk(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Dj()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,v3):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},y3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Tk.type="LOCAL";const _3=Tk;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik extends Ck{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Ik.type="SESSION";const xk=Ik;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w3(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new yh(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await w3(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E3{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=bv("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(){return window}function S3(e){Ln().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(){return typeof Ln().WorkerGlobalScope<"u"&&typeof Ln().importScripts=="function"}async function C3(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function T3(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function I3(){return kk()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk="firebaseLocalStorageDb",x3=1,pd="firebaseLocalStorage",Rk="fbase_key";class Hl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vh(e,t){return e.transaction([pd],t?"readwrite":"readonly").objectStore(pd)}function k3(){const e=indexedDB.deleteDatabase(Pk);return new Hl(e).toPromise()}function Hm(){const e=indexedDB.open(Pk,x3);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(pd,{keyPath:Rk})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(pd)?t(r):(r.close(),await k3(),t(await Hm()))})})}async function T1(e,t,n){const r=vh(e,!0).put({[Rk]:t,value:n});return new Hl(r).toPromise()}async function P3(e,t){const n=vh(e,!1).get(t),r=await new Hl(n).toPromise();return r===void 0?null:r.value}function I1(e,t){const n=vh(e,!0).delete(t);return new Hl(n).toPromise()}const R3=800,A3=3;class Ak{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hm(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>A3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kk()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yh._getInstance(I3()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await C3(),!this.activeServiceWorker)return;this.sender=new E3(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||T3()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Hm();return await T1(t,fd,"1"),await I1(t,fd),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>T1(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>P3(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>I1(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=vh(i,!1).getAll();return new Hl(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),R3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ak.type="LOCAL";const b3=Ak;new Bl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(e,t){return t?nr(t):(U(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov extends Pv{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ro(t,this._buildIdpRequest())}_linkToIdToken(t,n){return ro(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return ro(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function O3(e){return Ek(e.auth,new Ov(e),e.bypassAuthState)}function N3(e){const{auth:t,user:n}=e;return U(n,t,"internal-error"),l3(n,new Ov(e),e.bypassAuthState)}async function D3(e){const{auth:t,user:n}=e;return U(n,t,"internal-error"),a3(n,new Ov(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return O3;case"linkViaPopup":case"linkViaRedirect":return D3;case"reauthViaPopup":case"reauthViaRedirect":return N3;default:rn(this.auth,"internal-error")}}resolve(t){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $3=new Bl(2e3,1e4);async function L3(e,t,n){if(hn(e.app))return Promise.reject(_n(e,"operation-not-supported-in-this-environment"));const r=vi(e);mj(e,t,Av);const i=bk(r,n);return new Mi(r,"signInViaPopup",t,i).executeNotNull()}class Mi extends Ok{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Mi.currentPopupAction&&Mi.currentPopupAction.cancel(),Mi.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return U(t,this.auth,"internal-error"),t}async onExecution(){mr(this.filter.length===1,"Popup operations only handle one event");const t=bv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(_n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mi.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,$3.get())};t()}}Mi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M3="pendingRedirect",rc=new Map;class F3 extends Ok{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=rc.get(this.auth._key());if(!t){try{const r=await j3(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}rc.set(this.auth._key(),t)}return this.bypassAuthState||rc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function j3(e,t){const n=B3(t),r=z3(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function U3(e,t){rc.set(e._key(),t)}function z3(e){return nr(e._redirectPersistence)}function B3(e){return nc(M3,e.config.apiKey,e.name)}async function V3(e,t,n=!1){if(hn(e.app))return Promise.reject(lr(e));const r=vi(e),i=bk(r,t),o=await new F3(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W3=10*60*1e3;class H3{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!G3(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Nk(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_n(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=W3&&this.cachedEventUids.clear(),this.cachedEventUids.has(x1(t))}saveEventToCache(t){this.cachedEventUids.add(x1(t)),this.lastProcessedEventTime=Date.now()}}function x1(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Nk({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function G3(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nk(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K3(e,t={}){return yi(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q3=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Y3=/^https?/;async function Q3(e){if(e.config.emulator)return;const{authorizedDomains:t}=await K3(e);for(const n of t)try{if(X3(n))return}catch{}rn(e,"unauthorized-domain")}function X3(e){const t=Bm(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Y3.test(n))return!1;if(q3.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J3=new Bl(3e4,6e4);function k1(){const e=Ln().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Z3(e){return new Promise((t,n)=>{var r,i,s;function o(){k1(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{k1(),n(_n(e,"network-request-failed"))},timeout:J3.get()})}if(!((i=(r=Ln().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Ln().gapi)===null||s===void 0)&&s.load)o();else{const a=Wj("iframefcb");return Ln()[a]=()=>{gapi.load?o():n(_n(e,"network-request-failed"))},vk(`${Vj()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw ic=null,t})}let ic=null;function eU(e){return ic=ic||Z3(e),ic}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tU=new Bl(5e3,15e3),nU="__/auth/iframe",rU="emulator/auth/iframe",iU={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sU=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oU(e){const t=e.config;U(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Iv(t,rU):`https://${e.config.authDomain}/${nU}`,r={apiKey:t.apiKey,appName:e.name,v:fs},i=sU.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Lo(r).slice(1)}`}async function aU(e){const t=await eU(e),n=Ln().gapi;return U(n,e,"internal-error"),t.open({where:document.body,url:oU(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iU,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=_n(e,"network-request-failed"),a=Ln().setTimeout(()=>{s(o)},tU.get());function l(){Ln().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lU={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uU=500,cU=600,dU="_blank",hU="http://localhost";class P1{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fU(e,t,n,r=uU,i=cU){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},lU),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ht().toLowerCase();n&&(a=dk(u)?dU:n),ck(u)&&(t=t||hU,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[f,g])=>`${h}${f}=${g},`,"");if(Nj(u)&&a!=="_self")return pU(t||"",a),new P1(null);const d=window.open(t||"",a,c);U(d,e,"popup-blocked");try{d.focus()}catch{}return new P1(d)}function pU(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mU="__/auth/handler",gU="emulator/auth/handler",yU=encodeURIComponent("fac");async function R1(e,t,n,r,i,s){U(e.config.authDomain,e,"auth-domain-config-required"),U(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:fs,eventId:i};if(t instanceof Av){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Tm(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(t instanceof Wl){const c=t.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${yU}=${encodeURIComponent(l)}`:"";return`${vU(e)}?${Lo(a).slice(1)}${u}`}function vU({config:e}){return e.emulator?Iv(e,gU):`https://${e.authDomain}/${mU}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="webStorageSupport";class _U{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xk,this._completeRedirectFn=V3,this._overrideRedirectResult=U3}async _openPopup(t,n,r,i){var s;mr((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await R1(t,n,r,Bm(),i);return fU(t,o,bv())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await R1(t,n,r,Bm(),i);return S3(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(mr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await aU(t),r=new H3(t);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Xf,{type:Xf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Xf];o!==void 0&&n(!!o),rn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Q3(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return gk()||kv()||mh()}}const wU=_U;var A1="@firebase/auth",b1="1.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EU{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SU(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function CU(e){ts(new li("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yk(e)},u=new Uj(r,i,s,l);return Yj(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ts(new li("auth-internal",t=>{const n=vi(t.getProvider("auth").getImmediate());return(r=>new EU(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$n(A1,b1,SU(e)),$n(A1,b1,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TU=5*60,IU=II("authIdTokenMaxAge")||TU;let O1=null;const xU=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>IU)return;const i=n==null?void 0:n.token;O1!==i&&(O1=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function kU(e=Vy()){const t=rh(e,"auth");if(t.isInitialized())return t.getImmediate();const n=qj(e,{popupRedirectResolver:wU,persistence:[b3,_3,xk]}),r=II("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=xU(s.toString());f3(n,o,()=>o(n.currentUser)),h3(n,a=>o(a))}}const i=SI("auth");return i&&Qj(n,`http://${i}`),n}function PU(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}zj({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=_n("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",PU().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});CU("Browser");var RU="firebase",AU="10.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$n(RU,AU,"app");var bU=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,Nv=Nv||{},V=bU||self;function _h(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Gl(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function OU(e){return Object.prototype.hasOwnProperty.call(e,Jf)&&e[Jf]||(e[Jf]=++NU)}var Jf="closure_uid_"+(1e9*Math.random()>>>0),NU=0;function DU(e,t,n){return e.call.apply(e.bind,arguments)}function $U(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function ut(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ut=DU:ut=$U,ut.apply(null,arguments)}function Ru(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function He(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function _i(){this.s=this.s,this.o=this.o}var LU=0;_i.prototype.s=!1;_i.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),LU!=0)&&OU(this)};_i.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Dk=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Dv(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function N1(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(_h(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function ct(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var MU=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};V.addEventListener("test",n,t),V.removeEventListener("test",n,t)}catch{}return e}();function yl(e){return/^[\s\xa0]*$/.test(e)}function wh(){var e=V.navigator;return e&&(e=e.userAgent)?e:""}function An(e){return wh().indexOf(e)!=-1}function $v(e){return $v[" "](e),e}$v[" "]=function(){};function FU(e,t){var n=b6;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var jU=An("Opera"),vl=An("Trident")||An("MSIE"),$k=An("Edge"),Gm=$k||vl,Lk=An("Gecko")&&!(wh().toLowerCase().indexOf("webkit")!=-1&&!An("Edge"))&&!(An("Trident")||An("MSIE"))&&!An("Edge"),UU=wh().toLowerCase().indexOf("webkit")!=-1&&!An("Edge");function Mk(){var e=V.document;return e?e.documentMode:void 0}e:{var D1="",Zf=function(){var e=wh();if(Lk)return/rv:([^\);]+)(\)|;)/.exec(e);if($k)return/Edge\/([\d\.]+)/.exec(e);if(vl)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(UU)return/WebKit\/(\S+)/.exec(e);if(jU)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Zf&&(D1=Zf?Zf[1]:""),vl){var $1=Mk();if($1!=null&&$1>parseFloat(D1))break e}}V.document&&vl&&Mk();function _l(e,t){if(ct.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Lk){e:{try{$v(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:zU[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&_l.$.h.call(this)}}He(_l,ct);var zU={2:"touch",3:"pen",4:"mouse"};_l.prototype.h=function(){_l.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Kl="closure_listenable_"+(1e6*Math.random()|0),BU=0;function VU(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++BU,this.fa=this.ia=!1}function Eh(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Lv(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function WU(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Fk(e){const t={};for(const n in e)t[n]=e[n];return t}const L1="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jk(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<L1.length;s++)n=L1[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Sh(e){this.src=e,this.g={},this.h=0}Sh.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=qm(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new VU(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Km(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Dk(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Eh(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function qm(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Mv="closure_lm_"+(1e6*Math.random()|0),ep={};function Uk(e,t,n,r,i){if(r&&r.once)return Bk(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Uk(e,t[s],n,r,i);return null}return n=Uv(n),e&&e[Kl]?e.O(t,n,Gl(r)?!!r.capture:!!r,i):zk(e,t,n,!1,r,i)}function zk(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Gl(i)?!!i.capture:!!i,a=jv(e);if(a||(e[Mv]=a=new Sh(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=HU(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)MU||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Wk(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function HU(){function e(n){return t.call(e.src,e.listener,n)}const t=GU;return e}function Bk(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Bk(e,t[s],n,r,i);return null}return n=Uv(n),e&&e[Kl]?e.P(t,n,Gl(r)?!!r.capture:!!r,i):zk(e,t,n,!0,r,i)}function Vk(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Vk(e,t[s],n,r,i);else r=Gl(r)?!!r.capture:!!r,n=Uv(n),e&&e[Kl]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=qm(s,n,r,i),-1<n&&(Eh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=jv(e))&&(t=e.g[t.toString()],e=-1,t&&(e=qm(t,n,r,i)),(n=-1<e?t[e]:null)&&Fv(n))}function Fv(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Kl])Km(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Wk(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=jv(t))?(Km(n,e),n.h==0&&(n.src=null,t[Mv]=null)):Eh(e)}}}function Wk(e){return e in ep?ep[e]:ep[e]="on"+e}function GU(e,t){if(e.fa)e=!0;else{t=new _l(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Fv(e),e=n.call(r,t)}return e}function jv(e){return e=e[Mv],e instanceof Sh?e:null}var tp="__closure_events_fn_"+(1e9*Math.random()>>>0);function Uv(e){return typeof e=="function"?e:(e[tp]||(e[tp]=function(t){return e.handleEvent(t)}),e[tp])}function We(){_i.call(this),this.i=new Sh(this),this.S=this,this.J=null}He(We,_i);We.prototype[Kl]=!0;We.prototype.removeEventListener=function(e,t,n,r){Vk(this,e,t,n,r)};function Ze(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new ct(t,e);else if(t instanceof ct)t.target=t.target||e;else{var i=t;t=new ct(r,e),jk(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Au(o,r,!0,t)&&i}if(o=t.g=e,i=Au(o,r,!0,t)&&i,i=Au(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Au(o,r,!1,t)&&i}We.prototype.N=function(){if(We.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Eh(n[r]);delete e.g[t],e.h--}}this.J=null};We.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};We.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Au(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Km(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var zv=V.JSON.stringify;class KU{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function qU(){var e=Bv;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class YU{constructor(){this.h=this.g=null}add(t,n){const r=Hk.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Hk=new KU(()=>new QU,e=>e.reset());class QU{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function XU(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function JU(e){V.setTimeout(()=>{throw e},0)}let wl,El=!1,Bv=new YU,Gk=()=>{const e=V.Promise.resolve(void 0);wl=()=>{e.then(ZU)}};var ZU=()=>{for(var e;e=qU();){try{e.h.call(e.g)}catch(n){JU(n)}var t=Hk;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}El=!1};function Ch(e,t){We.call(this),this.h=e||1,this.g=t||V,this.j=ut(this.qb,this),this.l=Date.now()}He(Ch,We);A=Ch.prototype;A.ga=!1;A.T=null;A.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ze(this,"tick"),this.ga&&(Vv(this),this.start()))}};A.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Vv(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}A.N=function(){Ch.$.N.call(this),Vv(this),delete this.g};function Wv(e,t,n){if(typeof e=="function")n&&(e=ut(e,n));else if(e&&typeof e.handleEvent=="function")e=ut(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:V.setTimeout(e,t||0)}function Kk(e){e.g=Wv(()=>{e.g=null,e.i&&(e.i=!1,Kk(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class e6 extends _i{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Kk(this)}N(){super.N(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sl(e){_i.call(this),this.h=e,this.g={}}He(Sl,_i);var M1=[];function qk(e,t,n,r){Array.isArray(n)||(n&&(M1[0]=n.toString()),n=M1);for(var i=0;i<n.length;i++){var s=Uk(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Yk(e){Lv(e.g,function(t,n){this.g.hasOwnProperty(n)&&Fv(t)},e),e.g={}}Sl.prototype.N=function(){Sl.$.N.call(this),Yk(this)};Sl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Th(){this.g=!0}Th.prototype.Ea=function(){this.g=!1};function t6(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function n6(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function Ws(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+i6(e,n)+(r?" "+r:"")})}function r6(e,t){e.info(function(){return"TIMEOUT: "+t})}Th.prototype.info=function(){};function i6(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return zv(n)}catch{return t}}var zo={},F1=null;function Hv(){return F1=F1||new We}zo.Ta="serverreachability";function Qk(e){ct.call(this,zo.Ta,e)}He(Qk,ct);function Cl(e){const t=Hv();Ze(t,new Qk(t))}zo.STAT_EVENT="statevent";function Xk(e,t){ct.call(this,zo.STAT_EVENT,e),this.stat=t}He(Xk,ct);function yt(e){const t=Hv();Ze(t,new Xk(t,e))}zo.Ua="timingevent";function Jk(e,t){ct.call(this,zo.Ua,e),this.size=t}He(Jk,ct);function ql(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){e()},t)}var Gv={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},s6={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Kv(){}Kv.prototype.h=null;function j1(e){return e.h||(e.h=e.i())}function o6(){}var Yl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function qv(){ct.call(this,"d")}He(qv,ct);function Yv(){ct.call(this,"c")}He(Yv,ct);var Ym;function Ih(){}He(Ih,Kv);Ih.prototype.g=function(){return new XMLHttpRequest};Ih.prototype.i=function(){return{}};Ym=new Ih;function Ql(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Sl(this),this.P=a6,e=Gm?125:void 0,this.V=new Ch(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Zk}function Zk(){this.i=null,this.g="",this.h=!1}var a6=45e3,eP={},Qm={};A=Ql.prototype;A.setTimeout=function(e){this.P=e};function Xm(e,t,n){e.L=1,e.A=kh(gr(t)),e.u=n,e.S=!0,tP(e,null)}function tP(e,t){e.G=Date.now(),Xl(e),e.B=gr(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),uP(n.i,"t",r),e.o=0,n=e.l.J,e.h=new Zk,e.g=AP(e.l,n?t:null,!e.u),0<e.O&&(e.M=new e6(ut(e.Pa,e,e.g),e.O)),qk(e.U,e.g,"readystatechange",e.nb),t=e.I?Fk(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),Cl(),t6(e.j,e.v,e.B,e.m,e.W,e.u)}A.nb=function(e){e=e.target;const t=this.M;t&&bn(e)==3?t.l():this.Pa(e)};A.Pa=function(e){try{if(e==this.g)e:{const c=bn(this.g);var t=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||Gm||this.g&&(this.h.h||this.g.ja()||V1(this.g)))){this.J||c!=4||t==7||(t==8||0>=d?Cl(3):Cl(2)),xh(this);var n=this.g.da();this.ca=n;t:if(nP(this)){var r=V1(this.g);e="";var i=r.length,s=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fi(this),ba(this);var o="";break t}this.h.i=new V.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,n6(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!yl(a)){var u=a;break t}}u=null}if(n=u)Ws(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jm(this,n);else{this.i=!1,this.s=3,yt(12),Fi(this),ba(this);break e}}this.S?(rP(this,c,o),Gm&&this.i&&c==3&&(qk(this.U,this.V,"tick",this.mb),this.V.start())):(Ws(this.j,this.m,o,null),Jm(this,o)),c==4&&Fi(this),this.i&&!this.J&&(c==4?xP(this.l,this):(this.i=!1,Xl(this)))}else P6(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),Fi(this),ba(this)}}}catch{}finally{}};function nP(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function rP(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=l6(e,n),i==Qm){t==4&&(e.s=4,yt(14),r=!1),Ws(e.j,e.m,null,"[Incomplete Response]");break}else if(i==eP){e.s=4,yt(15),Ws(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Ws(e.j,e.m,i,null),Jm(e,i);nP(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,yt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),t_(t),t.M=!0,yt(11))):(Ws(e.j,e.m,n,"[Invalid Chunked Response]"),Fi(e),ba(e))}A.mb=function(){if(this.g){var e=bn(this.g),t=this.g.ja();this.o<t.length&&(xh(this),rP(this,e,t),this.i&&e!=4&&Xl(this))}};function l6(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?Qm:(n=Number(t.substring(n,r)),isNaN(n)?eP:(r+=1,r+n>t.length?Qm:(t=t.slice(r,r+n),e.o=r+n,t)))}A.cancel=function(){this.J=!0,Fi(this)};function Xl(e){e.Y=Date.now()+e.P,iP(e,e.P)}function iP(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=ql(ut(e.lb,e),t)}function xh(e){e.C&&(V.clearTimeout(e.C),e.C=null)}A.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(r6(this.j,this.B),this.L!=2&&(Cl(),yt(17)),Fi(this),this.s=2,ba(this)):iP(this,this.Y-e)};function ba(e){e.l.H==0||e.J||xP(e.l,e)}function Fi(e){xh(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Vv(e.V),Yk(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Jm(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Zm(n.i,e))){if(!e.K&&Zm(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)yd(n),bh(n);else break e;e_(n),yt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ql(ut(n.ib,n),6e3));if(1>=hP(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ji(n,11)}else if((e.K||n.g==e)&&yd(n),!yl(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=e.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Qv(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,ye(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=RP(r,r.J?r.pa:null,r.Y),o.K){fP(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(xh(a),Xl(a)),r.g=o}else TP(r);0<n.j.length&&Oh(n)}else u[0]!="stop"&&u[0]!="close"||ji(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ji(n,7):Zv(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Cl(4)}catch{}}function u6(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(_h(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function c6(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(_h(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function sP(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(_h(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=c6(e),r=u6(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var oP=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function d6(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Wi(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Wi){this.h=e.h,md(this,e.j),this.s=e.s,this.g=e.g,gd(this,e.m),this.l=e.l;var t=e.i,n=new Tl;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),U1(this,n),this.o=e.o}else e&&(t=String(e).match(oP))?(this.h=!1,md(this,t[1]||"",!0),this.s=pa(t[2]||""),this.g=pa(t[3]||"",!0),gd(this,t[4]),this.l=pa(t[5]||"",!0),U1(this,t[6]||"",!0),this.o=pa(t[7]||"")):(this.h=!1,this.i=new Tl(null,this.h))}Wi.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ma(t,z1,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ma(t,z1,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(ma(n,n.charAt(0)=="/"?p6:f6,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ma(n,g6)),e.join("")};function gr(e){return new Wi(e)}function md(e,t,n){e.j=n?pa(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function gd(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function U1(e,t,n){t instanceof Tl?(e.i=t,y6(e.i,e.h)):(n||(t=ma(t,m6)),e.i=new Tl(t,e.h))}function ye(e,t,n){e.i.set(t,n)}function kh(e){return ye(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function pa(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ma(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,h6),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function h6(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var z1=/[#\/\?@]/g,f6=/[#\?:]/g,p6=/[#\?]/g,m6=/[#\?@]/g,g6=/#/g;function Tl(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function wi(e){e.g||(e.g=new Map,e.h=0,e.i&&d6(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}A=Tl.prototype;A.add=function(e,t){wi(this),this.i=null,e=Bo(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function aP(e,t){wi(e),t=Bo(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function lP(e,t){return wi(e),t=Bo(e,t),e.g.has(t)}A.forEach=function(e,t){wi(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};A.ta=function(){wi(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};A.Z=function(e){wi(this);let t=[];if(typeof e=="string")lP(this,e)&&(t=t.concat(this.g.get(Bo(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};A.set=function(e,t){return wi(this),this.i=null,e=Bo(this,e),lP(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};A.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function uP(e,t,n){aP(e,t),0<n.length&&(e.i=null,e.g.set(Bo(e,t),Dv(n)),e.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Bo(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function y6(e,t){t&&!e.j&&(wi(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(aP(this,r),uP(this,i,n))},e)),e.j=t}var v6=class{constructor(e,t){this.g=e,this.map=t}};function cP(e){this.l=e||_6,V.PerformanceNavigationTiming?(e=V.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(V.g&&V.g.Ka&&V.g.Ka()&&V.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _6=10;function dP(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function hP(e){return e.h?1:e.g?e.g.size:0}function Zm(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Qv(e,t){e.g?e.g.add(t):e.h=t}function fP(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}cP.prototype.cancel=function(){if(this.i=pP(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function pP(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Dv(e.i)}var w6=class{stringify(e){return V.JSON.stringify(e,void 0)}parse(e){return V.JSON.parse(e,void 0)}};function E6(){this.g=new w6}function S6(e,t,n){const r=n||"";try{sP(e,function(i,s){let o=i;Gl(i)&&(o=zv(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function C6(e,t){const n=new Th;if(V.Image){const r=new Image;r.onload=Ru(bu,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Ru(bu,n,r,"TestLoadImage: error",!1,t),r.onabort=Ru(bu,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Ru(bu,n,r,"TestLoadImage: timeout",!1,t),V.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function bu(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Ph(e){this.l=e.ec||null,this.j=e.ob||!1}He(Ph,Kv);Ph.prototype.g=function(){return new Rh(this.l,this.j)};Ph.prototype.i=function(e){return function(){return e}}({});function Rh(e,t){We.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Xv,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}He(Rh,We);var Xv=0;A=Rh.prototype;A.open=function(e,t){if(this.readyState!=Xv)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Il(this)};A.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||V).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jl(this)),this.readyState=Xv};A.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Il(this)),this.g&&(this.readyState=3,Il(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof V.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mP(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function mP(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}A.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Jl(this):Il(this),this.readyState==3&&mP(this)}};A.Za=function(e){this.g&&(this.response=this.responseText=e,Jl(this))};A.Ya=function(e){this.g&&(this.response=e,Jl(this))};A.ka=function(){this.g&&Jl(this)};function Jl(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Il(e)}A.setRequestHeader=function(e,t){this.v.append(e,t)};A.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Il(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Rh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var T6=V.JSON.parse;function Re(e){We.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=gP,this.L=this.M=!1}He(Re,We);var gP="",I6=/^https?$/i,x6=["POST","PUT"];A=Re.prototype;A.Oa=function(e){this.M=e};A.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ym.g(),this.C=this.u?j1(this.u):j1(Ym),this.g.onreadystatechange=ut(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){B1(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=V.FormData&&e instanceof V.FormData,!(0<=Dk(x6,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{_P(this),0<this.B&&((this.L=k6(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ut(this.ua,this)):this.A=Wv(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){B1(this,s)}};function k6(e){return vl&&typeof e.timeout=="number"&&e.ontimeout!==void 0}A.ua=function(){typeof Nv<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ze(this,"timeout"),this.abort(8))};function B1(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,yP(e),Ah(e)}function yP(e){e.F||(e.F=!0,Ze(e,"complete"),Ze(e,"error"))}A.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ze(this,"complete"),Ze(this,"abort"),Ah(this))};A.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ah(this,!0)),Re.$.N.call(this)};A.La=function(){this.s||(this.G||this.v||this.l?vP(this):this.kb())};A.kb=function(){vP(this)};function vP(e){if(e.h&&typeof Nv<"u"&&(!e.C[1]||bn(e)!=4||e.da()!=2)){if(e.v&&bn(e)==4)Wv(e.La,0,e);else if(Ze(e,"readystatechange"),bn(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(oP)[1]||null;!i&&V.self&&V.self.location&&(i=V.self.location.protocol.slice(0,-1)),r=!I6.test(i?i.toLowerCase():"")}n=r}if(n)Ze(e,"complete"),Ze(e,"success");else{e.m=6;try{var s=2<bn(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",yP(e)}}finally{Ah(e)}}}}function Ah(e,t){if(e.g){_P(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Ze(e,"ready");try{n.onreadystatechange=r}catch{}}}function _P(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(V.clearTimeout(e.A),e.A=null)}A.isActive=function(){return!!this.g};function bn(e){return e.g?e.g.readyState:0}A.da=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}};A.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),T6(t)}};function V1(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case gP:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function P6(e){const t={};e=(e.g&&2<=bn(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(yl(e[r]))continue;var n=XU(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}WU(t,function(r){return r.join(", ")})}A.Ia=function(){return this.m};A.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function wP(e){let t="";return Lv(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Jv(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=wP(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):ye(e,t,n))}function ra(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function EP(e){this.Ga=0,this.j=[],this.l=new Th,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ra("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ra("baseRetryDelayMs",5e3,e),this.hb=ra("retryDelaySeedMs",1e4,e),this.eb=ra("forwardChannelMaxRetries",2,e),this.xa=ra("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new cP(e&&e.concurrentRequestLimit),this.Ja=new E6,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}A=EP.prototype;A.ra=8;A.H=1;function Zv(e){if(SP(e),e.H==3){var t=e.W++,n=gr(e.I);if(ye(n,"SID",e.K),ye(n,"RID",t),ye(n,"TYPE","terminate"),Zl(e,n),t=new Ql(e,e.l,t),t.L=2,t.A=kh(gr(n)),n=!1,V.navigator&&V.navigator.sendBeacon)try{n=V.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&V.Image&&(new Image().src=t.A,n=!0),n||(t.g=AP(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Xl(t)}PP(e)}function bh(e){e.g&&(t_(e),e.g.cancel(),e.g=null)}function SP(e){bh(e),e.u&&(V.clearTimeout(e.u),e.u=null),yd(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&V.clearTimeout(e.m),e.m=null)}function Oh(e){if(!dP(e.i)&&!e.m){e.m=!0;var t=e.Na;wl||Gk(),El||(wl(),El=!0),Bv.add(t,e),e.C=0}}function R6(e,t){return hP(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=ql(ut(e.Na,e,t),kP(e,e.C)),e.C++,!0)}A.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Ql(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Fk(s),jk(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=CP(this,i,t),n=gr(this.I),ye(n,"RID",e),ye(n,"CVER",22),this.F&&ye(n,"X-HTTP-Session-Id",this.F),Zl(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(wP(s)))+"&"+t:this.o&&Jv(n,this.o,s)),Qv(this.i,i),this.bb&&ye(n,"TYPE","init"),this.P?(ye(n,"$req",t),ye(n,"SID","null"),i.aa=!0,Xm(i,n,null)):Xm(i,n,t),this.H=2}}else this.H==3&&(e?W1(this,e):this.j.length==0||dP(this.i)||W1(this))};function W1(e,t){var n;t?n=t.m:n=e.W++;const r=gr(e.I);ye(r,"SID",e.K),ye(r,"RID",n),ye(r,"AID",e.V),Zl(e,r),e.o&&e.s&&Jv(r,e.o,e.s),n=new Ql(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=CP(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Qv(e.i,n),Xm(n,r,t)}function Zl(e,t){e.na&&Lv(e.na,function(n,r){ye(t,r,n)}),e.h&&sP({},function(n,r){ye(t,r,n)})}function CP(e,t,n){n=Math.min(e.j.length,n);var r=e.h?ut(e.h.Va,e.h,e):null;e:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{S6(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function TP(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;wl||Gk(),El||(wl(),El=!0),Bv.add(t,e),e.A=0}}function e_(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=ql(ut(e.Ma,e),kP(e,e.A)),e.A++,!0)}A.Ma=function(){if(this.u=null,IP(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=ql(ut(this.jb,this),e)}};A.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,yt(10),bh(this),IP(this))};function t_(e){e.B!=null&&(V.clearTimeout(e.B),e.B=null)}function IP(e){e.g=new Ql(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=gr(e.wa);ye(t,"RID","rpc"),ye(t,"SID",e.K),ye(t,"AID",e.V),ye(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&ye(t,"TO",e.qa),ye(t,"TYPE","xmlhttp"),Zl(e,t),e.o&&e.s&&Jv(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=kh(gr(t)),n.u=null,n.S=!0,tP(n,e)}A.ib=function(){this.v!=null&&(this.v=null,bh(this),e_(this),yt(19))};function yd(e){e.v!=null&&(V.clearTimeout(e.v),e.v=null)}function xP(e,t){var n=null;if(e.g==t){yd(e),t_(e),e.g=null;var r=2}else if(Zm(e.i,t))n=t.F,fP(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=Hv(),Ze(r,new Jk(r,n)),Oh(e)}else TP(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&R6(e,t)||r==2&&e_(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:ji(e,5);break;case 4:ji(e,10);break;case 3:ji(e,6);break;default:ji(e,2)}}}function kP(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function ji(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=ut(e.pb,e);n||(n=new Wi("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||md(n,"https"),kh(n)),C6(n.toString(),r)}else yt(2);e.H=0,e.h&&e.h.za(t),PP(e),SP(e)}A.pb=function(e){e?(this.l.info("Successfully pinged google.com"),yt(2)):(this.l.info("Failed to ping google.com"),yt(1))};function PP(e){if(e.H=0,e.ma=[],e.h){const t=pP(e.i);(t.length!=0||e.j.length!=0)&&(N1(e.ma,t),N1(e.ma,e.j),e.i.i.length=0,Dv(e.j),e.j.length=0),e.h.ya()}}function RP(e,t,n){var r=n instanceof Wi?gr(n):new Wi(n);if(r.g!="")t&&(r.g=t+"."+r.g),gd(r,r.m);else{var i=V.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Wi(null);r&&md(s,r),t&&(s.g=t),i&&gd(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&ye(r,n,t),ye(r,"VER",e.ra),Zl(e,r),r}function AP(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new Re(new Ph({ob:n})):new Re(e.va),t.Oa(e.J),t}A.isActive=function(){return!!this.h&&this.h.isActive(this)};function bP(){}A=bP.prototype;A.Ba=function(){};A.Aa=function(){};A.za=function(){};A.ya=function(){};A.isActive=function(){return!0};A.Va=function(){};function sn(e,t){We.call(this),this.g=new EP(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!yl(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!yl(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Vo(this)}He(sn,We);sn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;yt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=RP(e,null,e.Y),Oh(e)};sn.prototype.close=function(){Zv(this.g)};sn.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=zv(e),e=n);t.j.push(new v6(t.fb++,e)),t.H==3&&Oh(t)};sn.prototype.N=function(){this.g.h=null,delete this.j,Zv(this.g),delete this.g,sn.$.N.call(this)};function OP(e){qv.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}He(OP,qv);function NP(){Yv.call(this),this.status=1}He(NP,Yv);function Vo(e){this.g=e}He(Vo,bP);Vo.prototype.Ba=function(){Ze(this.g,"a")};Vo.prototype.Aa=function(e){Ze(this.g,new OP(e))};Vo.prototype.za=function(e){Ze(this.g,new NP)};Vo.prototype.ya=function(){Ze(this.g,"b")};function A6(){this.blockSize=-1}function jn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}He(jn,A6);jn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function np(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}jn.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)np(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){np(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){np(this,r),i=0;break}}this.h=i,this.i+=t};jn.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function ae(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var b6={};function n_(e){return-128<=e&&128>e?FU(e,function(t){return new ae([t|0],0>t?-1:0)}):new ae([e|0],0>e?-1:0)}function On(e){if(isNaN(e)||!isFinite(e))return io;if(0>e)return Xe(On(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=eg;return new ae(t,0)}function DP(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Xe(DP(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=On(Math.pow(t,8)),r=io,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=On(Math.pow(t,s)),r=r.R(s).add(On(o))):(r=r.R(n),r=r.add(On(o)))}return r}var eg=4294967296,io=n_(0),tg=n_(1),H1=n_(16777216);A=ae.prototype;A.ea=function(){if(Xt(this))return-Xe(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:eg+r)*t,t*=eg}return e};A.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(rr(this))return"0";if(Xt(this))return"-"+Xe(this).toString(e);for(var t=On(Math.pow(e,6)),n=this,r="";;){var i=_d(n,t).g;n=vd(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,rr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};A.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function rr(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Xt(e){return e.h==-1}A.X=function(e){return e=vd(this,e),Xt(e)?-1:rr(e)?0:1};function Xe(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new ae(n,~e.h).add(tg)}A.abs=function(){return Xt(this)?Xe(this):this};A.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ae(n,n[n.length-1]&-2147483648?-1:0)};function vd(e,t){return e.add(Xe(t))}A.R=function(e){if(rr(this)||rr(e))return io;if(Xt(this))return Xt(e)?Xe(this).R(Xe(e)):Xe(Xe(this).R(e));if(Xt(e))return Xe(this.R(Xe(e)));if(0>this.X(H1)&&0>e.X(H1))return On(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,Ou(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Ou(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ou(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ou(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new ae(n,0)};function Ou(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function ia(e,t){this.g=e,this.h=t}function _d(e,t){if(rr(t))throw Error("division by zero");if(rr(e))return new ia(io,io);if(Xt(e))return t=_d(Xe(e),t),new ia(Xe(t.g),Xe(t.h));if(Xt(t))return t=_d(e,Xe(t)),new ia(Xe(t.g),t.h);if(30<e.g.length){if(Xt(e)||Xt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=tg,r=t;0>=r.X(e);)n=G1(n),r=G1(r);var i=ks(n,1),s=ks(r,1);for(r=ks(r,2),n=ks(n,2);!rr(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=ks(r,1),n=ks(n,1)}return t=vd(e,i.R(t)),new ia(i,t)}for(i=io;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=On(n),o=s.R(t);Xt(o)||0<o.X(e);)n-=r,s=On(n),o=s.R(t);rr(s)&&(s=tg),i=i.add(s),e=vd(e,o)}return new ia(i,e)}A.gb=function(e){return _d(this,e).h};A.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new ae(n,this.h&e.h)};A.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new ae(n,this.h|e.h)};A.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new ae(n,this.h^e.h)};function G1(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new ae(n,e.h)}function ks(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new ae(i,e.h)}sn.prototype.send=sn.prototype.u;sn.prototype.open=sn.prototype.m;sn.prototype.close=sn.prototype.close;Gv.NO_ERROR=0;Gv.TIMEOUT=8;Gv.HTTP_ERROR=6;s6.COMPLETE="complete";o6.EventType=Yl;Yl.OPEN="a";Yl.CLOSE="b";Yl.ERROR="c";Yl.MESSAGE="d";We.prototype.listen=We.prototype.O;Re.prototype.listenOnce=Re.prototype.P;Re.prototype.getLastError=Re.prototype.Sa;Re.prototype.getLastErrorCode=Re.prototype.Ia;Re.prototype.getStatus=Re.prototype.da;Re.prototype.getResponseJson=Re.prototype.Wa;Re.prototype.getResponseText=Re.prototype.ja;Re.prototype.send=Re.prototype.ha;Re.prototype.setWithCredentials=Re.prototype.Oa;jn.prototype.digest=jn.prototype.l;jn.prototype.reset=jn.prototype.reset;jn.prototype.update=jn.prototype.j;ae.prototype.add=ae.prototype.add;ae.prototype.multiply=ae.prototype.R;ae.prototype.modulo=ae.prototype.gb;ae.prototype.compare=ae.prototype.X;ae.prototype.toNumber=ae.prototype.ea;ae.prototype.toString=ae.prototype.toString;ae.prototype.getBits=ae.prototype.D;ae.fromNumber=On;ae.fromString=DP;var O6=ae;const K1="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu="10.11.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=new nh("@firebase/firestore");function jt(e,...t){if(xo.logLevel<=ne.DEBUG){const n=t.map(i_);xo.debug(`Firestore (${eu}): ${e}`,...n)}}function r_(e,...t){if(xo.logLevel<=ne.ERROR){const n=t.map(i_);xo.error(`Firestore (${eu}): ${e}`,...n)}}function N6(e,...t){if(xo.logLevel<=ne.WARN){const n=t.map(i_);xo.warn(`Firestore (${eu}): ${e}`,...n)}}function i_(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(e="Unexpected state"){const t=`FIRESTORE (${eu}) INTERNAL ASSERTION FAILED: `+e;throw r_(t),new Error(t)}function ng(e,t){e||s_()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class lt extends wr{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class D6{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class $6{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class L6{constructor(t){this.t=t,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new so;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new so,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{jt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(jt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new so)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(jt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ng(typeof r.accessToken=="string"),new $P(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ng(t===null||typeof t=="string"),new it(t)}}class M6{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class F6{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new M6(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class j6{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class U6{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&jt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,jt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{jt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):jt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(ng(typeof n.token=="string"),this.R=n.token,new j6(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z6(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B6{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=z6(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function LP(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V6{constructor(t,n,r,i,s,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class wd{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new wd("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof wd&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q1,J;(J=q1||(q1={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new O6([4294967295,4294967295],0);function rp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W6{constructor(t,n,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&jt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new so,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new o_(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new lt(at.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function H6(e,t){if(r_("AsyncQueue",`${t}: ${e}`),LP(e))return new lt(at.UNAVAILABLE,`${t}: ${e}`);throw e}var Y1,Q1;(Q1=Y1||(Y1={})).j_="default",Q1.Cache="cache";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G6{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=B6.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{jt("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(jt("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new lt(at.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new so;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=H6(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MP(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=new Map;function K6(e,t,n,r){if(t===!0&&r===!0)throw new lt(at.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function q6(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":s_()}function Y6(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new lt(at.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=q6(e);throw new lt(at.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new lt(at.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new lt(at.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}K6("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=MP((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new lt(at.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new lt(at.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new lt(at.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class FP{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new J1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new lt(at.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new lt(at.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new J1(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new D6;switch(r.type){case"firstParty":return new F6(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new lt(at.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=X1.get(n);r&&(jt("ComponentProvider","Removing Datastore"),X1.delete(n),r.terminate())}(this),Promise.resolve()}}function Q6(e,t,n,r={}){var i;const s=(e=Y6(e,FP))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&N6("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=it.MOCK_USER;else{a=xI(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new lt(at.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new it(u)}e._authCredentials=new $6(new $P(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X6{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new W6(this,"async_queue_retry"),this.cu=()=>{const n=rp();n&&jt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=rp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.lu(),this.hu(t)}enterRestrictedMode(t){if(!this.iu){this.iu=!0,this.au=t||!1;const n=rp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(t){if(this.lu(),this.iu)return new Promise(()=>{});const n=new so;return this.hu(()=>this.iu&&this.au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ru.push(t),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(t){if(!LP(t))throw t;jt("AsyncQueue","Operation failed with retryable error: "+t)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(t){const n=this.nu.then(()=>(this._u=!0,t().catch(r=>{this.ou=r,this._u=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw r_("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(t,n,r){this.lu(),this.uu.indexOf(t)>-1&&(n=0);const i=o_.createAndSchedule(this,t,n,r,s=>this.Iu(s));return this.su.push(i),i}lu(){this.ou&&s_()}verifyOperationInProgress(){}async Tu(){let t;do t=this.nu,await t;while(t!==this.nu)}Eu(t){for(const n of this.su)if(n.timerId===t)return!0;return!1}du(t){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tu()})}Au(t){this.uu.push(t)}Iu(t){const n=this.su.indexOf(t);this.su.splice(n,1)}}class J6 extends FP{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new X6}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||e9(this),this._firestoreClient.terminate()}}function Z6(e,t){const n=typeof e=="object"?e:Vy(),r=typeof e=="string"?e:t||"(default)",i=rh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=CI("firestore");s&&Q6(i,...s)}return i}function e9(e){var t,n,r;const i=e._freezeSettings(),s=function(a,l,u,c){return new V6(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,MP(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new G6(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(t,n=!0){(function(i){eu=i})(fs),ts(new li("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new J6(new L6(r.getProvider("auth-internal")),new U6(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new lt(at.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wd(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),$n(K1,"4.6.0",t),$n(K1,"4.6.0","esm2017")})();const t9={apiKey:"AIzaSyD0o9oWGtHHRcF4lOAX44B0cUj1p8dTOAM",authDomain:"psychologists-eaa63.firebaseapp.com",databaseURL:"https://psychologists-eaa63-default-rtdb.europe-west1.firebasedatabase.app",projectId:"psychologists-eaa63",storageBucket:"psychologists-eaa63.appspot.com",messagingSenderId:"8293920210",appId:"1:8293920210:web:583c77c6cf5862839d2c0b"},a_=OI(t9),n9=new Qn,as=kU(a_),l_=tk(a_);Z6(a_);const r9=fh(tk()),ip=Zd("favorites/addFavorite",async({userId:e,psychologist:t})=>{try{const n=fh(l_,`users/${e}/favorites`),i={...(await wv(n)).val()||{},[t.id]:t};await ek(n,i)}catch(n){throw console.error(n),n}}),GW=Zd("favorites/fetchFavorites",async(e,{dispatch:t})=>{try{const n=fh(l_,`users/${e}/favorites`);rj(n,r=>{if(r.exists()){const i=r.val(),s=Object.values(i);t(tE(s))}else t(tE([]))})}catch(n){throw console.error("Error fetching favorites:",n),n}}),Z1=Zd("favorites/deleteFavorite",async({userId:e,psychologistId:t})=>{try{const n=fh(l_,`users/${e}/favorites`),r=(await wv(n)).val()||{};delete r[t],await ek(n,r)}catch(n){throw console.error(n),n}}),i9={items:[],isLoading:!1,error:null},s9=e=>{e.isLoading=!0},eE=(e,t)=>{e.isLoading=!1,e.error=t.payload},jP=cI({name:"favorites",initialState:i9,reducers:{setFavorites:(e,t)=>{e.isLoading=!1,e.error=null,e.items=t.payload}},extraReducers:e=>{e.addCase(ip.rejected,eE).addCase(ip.pending,s9).addCase(ip.fulfilled,(t,n)=>{t.isLoading=!1;const r=n.payload;r&&t.items.push(r)}).addCase(Z1.fulfilled,(t,n)=>{t.isLoading=!1;const r=n.payload;r&&(t.items=t.items.filter(i=>i.id!==r.id))}).addCase(Z1.rejected,eE)}}),o9={key:"favorites",storage:My},a9=yI(o9,jP.reducer),{setFavorites:tE}=jP.actions,sp=Zd("psychologists/fetchAll",async(e,t)=>{try{const n=await wv(pl(r9,"psychologists")),r=[];return n.forEach(i=>{r.push({...i.val(),id:i.key})}),r}catch(n){return console.error(n),t.rejectWithValue(n.message)}}),l9={items:[],isLoading:!1,error:null},u9=e=>{e.isLoading=!0},c9=(e,t)=>{e.isLoading=!1,e.error=t.payload},d9=cI({name:"psychologists",initialState:l9,reducers:{},extraReducers:e=>{e.addCase(sp.pending,u9).addCase(sp.fulfilled,(t,n)=>{t.isLoading=!1,t.error=null,t.items=n.payload}).addCase(sp.rejected,c9)}}),h9={key:"psychologists",storage:My},f9=yI(h9,d9.reducer),p9=YT({favorites:a9,psychologists:f9}),UP=LD({reducer:p9,middleware:e=>e({serializableCheck:!1})});h$(UP);const m9="modulepreload",g9=function(e){return"/"+e},nE={},u_=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=g9(s),s in nE)return;nE[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const d=i[c];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":m9,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},y9=z.div`
 min-width: 320px;
  max-width: 1440px;
  padding-top: 20px;
  margin: 0 auto;

`,v9=z.header`

display: flex;
flex-wrap: wrap;
gap: 20px;
align-items: center;
justify-content: center;
margin-bottom: 30px;


@media screen and (min-width: 768px) {
  width: 81%;
  margin: 0 auto;
  // justify-content: space-between;
  gap: 30px;
  margin-bottom: 0;
}
`;z.img`
  width: 28px;
  height: 28px;
  margin-right: 8px;
`;const _9=z.ul`
  display: flex;
  align-items: center;
`,w9=z(yy)`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.primaryBlack};
  align-items: center;

  &:hover {
    scale: 1.1;
   color:  ${({theme:e})=>e.primaryYellow}
  }
`,E9=z.div`
border-bottom : 1px solid #8080804f;
padding-bottom: 24px;
`;let S9={data:""},C9=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||S9,T9=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,I9=/\/\*[^]*?\*\/|  +/g,rE=/\n+/g,Mr=(e,t)=>{let n="",r="",i="";for(let s in e){let o=e[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Mr(o,s):s+"{"+Mr(o,s[1]=="k"?"":t)+"}":typeof o=="object"?r+=Mr(o,t?t.replace(/([^,])+/g,a=>s.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Mr.p?Mr.p(s,o):s+":"+o+";")}return n+(t&&i?t+"{"+i+"}":i)+r},Hn={},zP=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+zP(e[n]);return t}return e},x9=(e,t,n,r,i)=>{let s=zP(e),o=Hn[s]||(Hn[s]=(l=>{let u=0,c=11;for(;u<l.length;)c=101*c+l.charCodeAt(u++)>>>0;return"go"+c})(s));if(!Hn[o]){let l=s!==e?e:(u=>{let c,d,h=[{}];for(;c=T9.exec(u.replace(I9,""));)c[4]?h.shift():c[3]?(d=c[3].replace(rE," ").trim(),h.unshift(h[0][d]=h[0][d]||{})):h[0][c[1]]=c[2].replace(rE," ").trim();return h[0]})(e);Hn[o]=Mr(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&Hn.g?Hn.g:null;return n&&(Hn.g=Hn[o]),((l,u,c,d)=>{d?u.data=u.data.replace(d,l):u.data.indexOf(l)===-1&&(u.data=c?l+u.data:u.data+l)})(Hn[o],t,r,a),o},k9=(e,t,n)=>e.reduce((r,i,s)=>{let o=t[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":Mr(a,""):a===!1?"":a}return r+i+(o??"")},"");function Nh(e){let t=this||{},n=e.call?e(t.p):e;return x9(n.unshift?n.raw?k9(n,[].slice.call(arguments,1),t.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(t.p):i),{}):n,C9(t.target),t.g,t.o,t.k)}let BP,rg,ig;Nh.bind({g:1});let yr=Nh.bind({k:1});function P9(e,t,n,r){Mr.p=t,BP=e,rg=n,ig=r}function Ei(e,t){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:rg&&rg()},a),n.o=/ *go\d+/.test(l),a.className=Nh.apply(n,r)+(l?" "+l:""),t&&(a.ref=o);let u=e;return e[0]&&(u=a.as||e,delete a.as),ig&&u[0]&&ig(a),BP(u,a)}return t?t(i):i}}var R9=e=>typeof e=="function",Ed=(e,t)=>R9(e)?e(t):e,A9=(()=>{let e=0;return()=>(++e).toString()})(),VP=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),b9=20,sc=new Map,O9=1e3,iE=e=>{if(sc.has(e))return;let t=setTimeout(()=>{sc.delete(e),ms({type:4,toastId:e})},O9);sc.set(e,t)},N9=e=>{let t=sc.get(e);t&&clearTimeout(t)},sg=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,b9)};case 1:return t.toast.id&&N9(t.toast.id),{...e,toasts:e.toasts.map(s=>s.id===t.toast.id?{...s,...t.toast}:s)};case 2:let{toast:n}=t;return e.toasts.find(s=>s.id===n.id)?sg(e,{type:1,toast:n}):sg(e,{type:0,toast:n});case 3:let{toastId:r}=t;return r?iE(r):e.toasts.forEach(s=>{iE(s.id)}),{...e,toasts:e.toasts.map(s=>s.id===r||r===void 0?{...s,visible:!1}:s)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},oc=[],ac={toasts:[],pausedAt:void 0},ms=e=>{ac=sg(ac,e),oc.forEach(t=>{t(ac)})},D9={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},$9=(e={})=>{let[t,n]=w.useState(ac);w.useEffect(()=>(oc.push(n),()=>{let i=oc.indexOf(n);i>-1&&oc.splice(i,1)}),[t]);let r=t.toasts.map(i=>{var s,o;return{...e,...e[i.type],...i,duration:i.duration||((s=e[i.type])==null?void 0:s.duration)||(e==null?void 0:e.duration)||D9[i.type],style:{...e.style,...(o=e[i.type])==null?void 0:o.style,...i.style}}});return{...t,toasts:r}},L9=(e,t="blank",n)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(n==null?void 0:n.id)||A9()}),tu=e=>(t,n)=>{let r=L9(t,e,n);return ms({type:2,toast:r}),r.id},Ut=(e,t)=>tu("blank")(e,t);Ut.error=tu("error");Ut.success=tu("success");Ut.loading=tu("loading");Ut.custom=tu("custom");Ut.dismiss=e=>{ms({type:3,toastId:e})};Ut.remove=e=>ms({type:4,toastId:e});Ut.promise=(e,t,n)=>{let r=Ut.loading(t.loading,{...n,...n==null?void 0:n.loading});return e.then(i=>(Ut.success(Ed(t.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{Ut.error(Ed(t.error,i),{id:r,...n,...n==null?void 0:n.error})}),e};var M9=(e,t)=>{ms({type:1,toast:{id:e,height:t}})},F9=()=>{ms({type:5,time:Date.now()})},j9=e=>{let{toasts:t,pausedAt:n}=$9(e);w.useEffect(()=>{if(n)return;let s=Date.now(),o=t.map(a=>{if(a.duration===1/0)return;let l=(a.duration||0)+a.pauseDuration-(s-a.createdAt);if(l<0){a.visible&&Ut.dismiss(a.id);return}return setTimeout(()=>Ut.dismiss(a.id),l)});return()=>{o.forEach(a=>a&&clearTimeout(a))}},[t,n]);let r=w.useCallback(()=>{n&&ms({type:6,time:Date.now()})},[n]),i=w.useCallback((s,o)=>{let{reverseOrder:a=!1,gutter:l=8,defaultPosition:u}=o||{},c=t.filter(f=>(f.position||u)===(s.position||u)&&f.height),d=c.findIndex(f=>f.id===s.id),h=c.filter((f,g)=>g<d&&f.visible).length;return c.filter(f=>f.visible).slice(...a?[h+1]:[0,h]).reduce((f,g)=>f+(g.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:M9,startPause:F9,endPause:r,calculateOffset:i}}},U9=yr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,z9=yr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,B9=yr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,V9=Ei("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${U9} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${z9} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${B9} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,W9=yr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,H9=Ei("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${W9} 1s linear infinite;
`,G9=yr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,K9=yr`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,q9=Ei("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${G9} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${K9} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Y9=Ei("div")`
  position: absolute;
`,Q9=Ei("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,X9=yr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,J9=Ei("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${X9} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Z9=({toast:e})=>{let{icon:t,type:n,iconTheme:r}=e;return t!==void 0?typeof t=="string"?w.createElement(J9,null,t):t:n==="blank"?null:w.createElement(Q9,null,w.createElement(H9,{...r}),n!=="loading"&&w.createElement(Y9,null,n==="error"?w.createElement(V9,{...r}):w.createElement(q9,{...r})))},e5=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,t5=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,n5="0%{opacity:0;} 100%{opacity:1;}",r5="0%{opacity:1;} 100%{opacity:0;}",i5=Ei("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,s5=Ei("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,o5=(e,t)=>{let n=e.includes("top")?1:-1,[r,i]=VP()?[n5,r5]:[e5(n),t5(n)];return{animation:t?`${yr(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${yr(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},a5=w.memo(({toast:e,position:t,style:n,children:r})=>{let i=e.height?o5(e.position||t||"top-center",e.visible):{opacity:0},s=w.createElement(Z9,{toast:e}),o=w.createElement(s5,{...e.ariaProps},Ed(e.message,e));return w.createElement(i5,{className:e.className,style:{...i,...n,...e.style}},typeof r=="function"?r({icon:s,message:o}):w.createElement(w.Fragment,null,s,o))});P9(w.createElement);var l5=({id:e,className:t,style:n,onHeightUpdate:r,children:i})=>{let s=w.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(e,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return w.createElement("div",{ref:s,className:t,style:n},i)},u5=(e,t)=>{let n=e.includes("top"),r=n?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:VP()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...r,...i}},c5=Nh`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Nu=16,d5=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:a,handlers:l}=j9(n);return w.createElement("div",{style:{position:"fixed",zIndex:9999,top:Nu,left:Nu,right:Nu,bottom:Nu,pointerEvents:"none",...s},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},a.map(u=>{let c=u.position||t,d=l.calculateOffset(u,{reverseOrder:e,gutter:r,defaultPosition:t}),h=u5(c,d);return w.createElement(l5,{id:u.id,key:u.id,onHeightUpdate:l.updateHeight,className:u.visible?c5:"",style:h},u.type==="custom"?Ed(u.message,u):i?i(u):w.createElement(a5,{toast:u,position:c}))}))},ni=Ut,h5=function(t){return f5(t)&&!p5(t)};function f5(e){return!!e&&typeof e=="object"}function p5(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||y5(e)}var m5=typeof Symbol=="function"&&Symbol.for,g5=m5?Symbol.for("react.element"):60103;function y5(e){return e.$$typeof===g5}function v5(e){return Array.isArray(e)?[]:{}}function Sd(e,t){return t.clone!==!1&&t.isMergeableObject(e)?xl(v5(e),e,t):e}function _5(e,t,n){return e.concat(t).map(function(r){return Sd(r,n)})}function w5(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(i){r[i]=Sd(e[i],n)}),Object.keys(t).forEach(function(i){!n.isMergeableObject(t[i])||!e[i]?r[i]=Sd(t[i],n):r[i]=xl(e[i],t[i],n)}),r}function xl(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||_5,n.isMergeableObject=n.isMergeableObject||h5;var r=Array.isArray(t),i=Array.isArray(e),s=r===i;return s?r?n.arrayMerge(e,t,n):w5(e,t,n):Sd(t,n)}xl.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,i){return xl(r,i,n)},{})};var og=xl,E5=typeof global=="object"&&global&&global.Object===Object&&global;const WP=E5;var S5=typeof self=="object"&&self&&self.Object===Object&&self,C5=WP||S5||Function("return this")();const zn=C5;var T5=zn.Symbol;const hi=T5;var HP=Object.prototype,I5=HP.hasOwnProperty,x5=HP.toString,sa=hi?hi.toStringTag:void 0;function k5(e){var t=I5.call(e,sa),n=e[sa];try{e[sa]=void 0;var r=!0}catch{}var i=x5.call(e);return r&&(t?e[sa]=n:delete e[sa]),i}var P5=Object.prototype,R5=P5.toString;function A5(e){return R5.call(e)}var b5="[object Null]",O5="[object Undefined]",sE=hi?hi.toStringTag:void 0;function gs(e){return e==null?e===void 0?O5:b5:sE&&sE in Object(e)?k5(e):A5(e)}function GP(e,t){return function(n){return e(t(n))}}var N5=GP(Object.getPrototypeOf,Object);const c_=N5;function ys(e){return e!=null&&typeof e=="object"}var D5="[object Object]",$5=Function.prototype,L5=Object.prototype,KP=$5.toString,M5=L5.hasOwnProperty,F5=KP.call(Object);function oE(e){if(!ys(e)||gs(e)!=D5)return!1;var t=c_(e);if(t===null)return!0;var n=M5.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&KP.call(n)==F5}var aE=Array.isArray,lE=Object.keys,j5=Object.prototype.hasOwnProperty,U5=typeof Element<"u";function ag(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=aE(e),r=aE(t),i,s,o;if(n&&r){if(s=e.length,s!=t.length)return!1;for(i=s;i--!==0;)if(!ag(e[i],t[i]))return!1;return!0}if(n!=r)return!1;var a=e instanceof Date,l=t instanceof Date;if(a!=l)return!1;if(a&&l)return e.getTime()==t.getTime();var u=e instanceof RegExp,c=t instanceof RegExp;if(u!=c)return!1;if(u&&c)return e.toString()==t.toString();var d=lE(e);if(s=d.length,s!==lE(t).length)return!1;for(i=s;i--!==0;)if(!j5.call(t,d[i]))return!1;if(U5&&e instanceof Element&&t instanceof Element)return e===t;for(i=s;i--!==0;)if(o=d[i],!(o==="_owner"&&e.$$typeof)&&!ag(e[o],t[o]))return!1;return!0}return e!==e&&t!==t}var z5=function(t,n){try{return ag(t,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const br=Id(z5);var B5=!0;function qP(e,t){if(!B5){if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}function V5(){this.__data__=[],this.size=0}function YP(e,t){return e===t||e!==e&&t!==t}function Dh(e,t){for(var n=e.length;n--;)if(YP(e[n][0],t))return n;return-1}var W5=Array.prototype,H5=W5.splice;function G5(e){var t=this.__data__,n=Dh(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():H5.call(t,n,1),--this.size,!0}function K5(e){var t=this.__data__,n=Dh(t,e);return n<0?void 0:t[n][1]}function q5(e){return Dh(this.__data__,e)>-1}function Y5(e,t){var n=this.__data__,r=Dh(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function Sr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Sr.prototype.clear=V5;Sr.prototype.delete=G5;Sr.prototype.get=K5;Sr.prototype.has=q5;Sr.prototype.set=Y5;function Q5(){this.__data__=new Sr,this.size=0}function X5(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function J5(e){return this.__data__.get(e)}function Z5(e){return this.__data__.has(e)}function nu(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var ez="[object AsyncFunction]",tz="[object Function]",nz="[object GeneratorFunction]",rz="[object Proxy]";function QP(e){if(!nu(e))return!1;var t=gs(e);return t==tz||t==nz||t==ez||t==rz}var iz=zn["__core-js_shared__"];const op=iz;var uE=function(){var e=/[^.]+$/.exec(op&&op.keys&&op.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function sz(e){return!!uE&&uE in e}var oz=Function.prototype,az=oz.toString;function vs(e){if(e!=null){try{return az.call(e)}catch{}try{return e+""}catch{}}return""}var lz=/[\\^$.*+?()[\]{}|]/g,uz=/^\[object .+?Constructor\]$/,cz=Function.prototype,dz=Object.prototype,hz=cz.toString,fz=dz.hasOwnProperty,pz=RegExp("^"+hz.call(fz).replace(lz,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function mz(e){if(!nu(e)||sz(e))return!1;var t=QP(e)?pz:uz;return t.test(vs(e))}function gz(e,t){return e==null?void 0:e[t]}function _s(e,t){var n=gz(e,t);return mz(n)?n:void 0}var yz=_s(zn,"Map");const kl=yz;var vz=_s(Object,"create");const Pl=vz;function _z(){this.__data__=Pl?Pl(null):{},this.size=0}function wz(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Ez="__lodash_hash_undefined__",Sz=Object.prototype,Cz=Sz.hasOwnProperty;function Tz(e){var t=this.__data__;if(Pl){var n=t[e];return n===Ez?void 0:n}return Cz.call(t,e)?t[e]:void 0}var Iz=Object.prototype,xz=Iz.hasOwnProperty;function kz(e){var t=this.__data__;return Pl?t[e]!==void 0:xz.call(t,e)}var Pz="__lodash_hash_undefined__";function Rz(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Pl&&t===void 0?Pz:t,this}function ls(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ls.prototype.clear=_z;ls.prototype.delete=wz;ls.prototype.get=Tz;ls.prototype.has=kz;ls.prototype.set=Rz;function Az(){this.size=0,this.__data__={hash:new ls,map:new(kl||Sr),string:new ls}}function bz(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function $h(e,t){var n=e.__data__;return bz(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Oz(e){var t=$h(this,e).delete(e);return this.size-=t?1:0,t}function Nz(e){return $h(this,e).get(e)}function Dz(e){return $h(this,e).has(e)}function $z(e,t){var n=$h(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function Si(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Si.prototype.clear=Az;Si.prototype.delete=Oz;Si.prototype.get=Nz;Si.prototype.has=Dz;Si.prototype.set=$z;var Lz=200;function Mz(e,t){var n=this.__data__;if(n instanceof Sr){var r=n.__data__;if(!kl||r.length<Lz-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Si(r)}return n.set(e,t),this.size=n.size,this}function Wo(e){var t=this.__data__=new Sr(e);this.size=t.size}Wo.prototype.clear=Q5;Wo.prototype.delete=X5;Wo.prototype.get=J5;Wo.prototype.has=Z5;Wo.prototype.set=Mz;function Fz(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var jz=function(){try{var e=_s(Object,"defineProperty");return e({},"",{}),e}catch{}}();const cE=jz;function XP(e,t,n){t=="__proto__"&&cE?cE(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var Uz=Object.prototype,zz=Uz.hasOwnProperty;function JP(e,t,n){var r=e[t];(!(zz.call(e,t)&&YP(r,n))||n===void 0&&!(t in e))&&XP(e,t,n)}function Lh(e,t,n,r){var i=!n;n||(n={});for(var s=-1,o=t.length;++s<o;){var a=t[s],l=r?r(n[a],e[a],a,n,e):void 0;l===void 0&&(l=e[a]),i?XP(n,a,l):JP(n,a,l)}return n}function Bz(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var Vz="[object Arguments]";function dE(e){return ys(e)&&gs(e)==Vz}var ZP=Object.prototype,Wz=ZP.hasOwnProperty,Hz=ZP.propertyIsEnumerable,Gz=dE(function(){return arguments}())?dE:function(e){return ys(e)&&Wz.call(e,"callee")&&!Hz.call(e,"callee")};const Kz=Gz;var qz=Array.isArray;const ru=qz;function Yz(){return!1}var eR=typeof exports=="object"&&exports&&!exports.nodeType&&exports,hE=eR&&typeof module=="object"&&module&&!module.nodeType&&module,Qz=hE&&hE.exports===eR,fE=Qz?zn.Buffer:void 0,Xz=fE?fE.isBuffer:void 0,Jz=Xz||Yz;const tR=Jz;var Zz=9007199254740991,e8=/^(?:0|[1-9]\d*)$/;function t8(e,t){var n=typeof e;return t=t??Zz,!!t&&(n=="number"||n!="symbol"&&e8.test(e))&&e>-1&&e%1==0&&e<t}var n8=9007199254740991;function nR(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=n8}var r8="[object Arguments]",i8="[object Array]",s8="[object Boolean]",o8="[object Date]",a8="[object Error]",l8="[object Function]",u8="[object Map]",c8="[object Number]",d8="[object Object]",h8="[object RegExp]",f8="[object Set]",p8="[object String]",m8="[object WeakMap]",g8="[object ArrayBuffer]",y8="[object DataView]",v8="[object Float32Array]",_8="[object Float64Array]",w8="[object Int8Array]",E8="[object Int16Array]",S8="[object Int32Array]",C8="[object Uint8Array]",T8="[object Uint8ClampedArray]",I8="[object Uint16Array]",x8="[object Uint32Array]",me={};me[v8]=me[_8]=me[w8]=me[E8]=me[S8]=me[C8]=me[T8]=me[I8]=me[x8]=!0;me[r8]=me[i8]=me[g8]=me[s8]=me[y8]=me[o8]=me[a8]=me[l8]=me[u8]=me[c8]=me[d8]=me[h8]=me[f8]=me[p8]=me[m8]=!1;function k8(e){return ys(e)&&nR(e.length)&&!!me[gs(e)]}function d_(e){return function(t){return e(t)}}var rR=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Oa=rR&&typeof module=="object"&&module&&!module.nodeType&&module,P8=Oa&&Oa.exports===rR,ap=P8&&WP.process,R8=function(){try{var e=Oa&&Oa.require&&Oa.require("util").types;return e||ap&&ap.binding&&ap.binding("util")}catch{}}();const ko=R8;var pE=ko&&ko.isTypedArray,A8=pE?d_(pE):k8;const b8=A8;var O8=Object.prototype,N8=O8.hasOwnProperty;function iR(e,t){var n=ru(e),r=!n&&Kz(e),i=!n&&!r&&tR(e),s=!n&&!r&&!i&&b8(e),o=n||r||i||s,a=o?Bz(e.length,String):[],l=a.length;for(var u in e)(t||N8.call(e,u))&&!(o&&(u=="length"||i&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||t8(u,l)))&&a.push(u);return a}var D8=Object.prototype;function h_(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||D8;return e===n}var $8=GP(Object.keys,Object);const L8=$8;var M8=Object.prototype,F8=M8.hasOwnProperty;function j8(e){if(!h_(e))return L8(e);var t=[];for(var n in Object(e))F8.call(e,n)&&n!="constructor"&&t.push(n);return t}function sR(e){return e!=null&&nR(e.length)&&!QP(e)}function f_(e){return sR(e)?iR(e):j8(e)}function U8(e,t){return e&&Lh(t,f_(t),e)}function z8(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var B8=Object.prototype,V8=B8.hasOwnProperty;function W8(e){if(!nu(e))return z8(e);var t=h_(e),n=[];for(var r in e)r=="constructor"&&(t||!V8.call(e,r))||n.push(r);return n}function p_(e){return sR(e)?iR(e,!0):W8(e)}function H8(e,t){return e&&Lh(t,p_(t),e)}var oR=typeof exports=="object"&&exports&&!exports.nodeType&&exports,mE=oR&&typeof module=="object"&&module&&!module.nodeType&&module,G8=mE&&mE.exports===oR,gE=G8?zn.Buffer:void 0,yE=gE?gE.allocUnsafe:void 0;function K8(e,t){if(t)return e.slice();var n=e.length,r=yE?yE(n):new e.constructor(n);return e.copy(r),r}function aR(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function q8(e,t){for(var n=-1,r=e==null?0:e.length,i=0,s=[];++n<r;){var o=e[n];t(o,n,e)&&(s[i++]=o)}return s}function lR(){return[]}var Y8=Object.prototype,Q8=Y8.propertyIsEnumerable,vE=Object.getOwnPropertySymbols,X8=vE?function(e){return e==null?[]:(e=Object(e),q8(vE(e),function(t){return Q8.call(e,t)}))}:lR;const m_=X8;function J8(e,t){return Lh(e,m_(e),t)}function uR(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var Z8=Object.getOwnPropertySymbols,eB=Z8?function(e){for(var t=[];e;)uR(t,m_(e)),e=c_(e);return t}:lR;const cR=eB;function tB(e,t){return Lh(e,cR(e),t)}function dR(e,t,n){var r=t(e);return ru(e)?r:uR(r,n(e))}function nB(e){return dR(e,f_,m_)}function rB(e){return dR(e,p_,cR)}var iB=_s(zn,"DataView");const lg=iB;var sB=_s(zn,"Promise");const ug=sB;var oB=_s(zn,"Set");const cg=oB;var aB=_s(zn,"WeakMap");const dg=aB;var _E="[object Map]",lB="[object Object]",wE="[object Promise]",EE="[object Set]",SE="[object WeakMap]",CE="[object DataView]",uB=vs(lg),cB=vs(kl),dB=vs(ug),hB=vs(cg),fB=vs(dg),Ai=gs;(lg&&Ai(new lg(new ArrayBuffer(1)))!=CE||kl&&Ai(new kl)!=_E||ug&&Ai(ug.resolve())!=wE||cg&&Ai(new cg)!=EE||dg&&Ai(new dg)!=SE)&&(Ai=function(e){var t=gs(e),n=t==lB?e.constructor:void 0,r=n?vs(n):"";if(r)switch(r){case uB:return CE;case cB:return _E;case dB:return wE;case hB:return EE;case fB:return SE}return t});const g_=Ai;var pB=Object.prototype,mB=pB.hasOwnProperty;function gB(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&mB.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var yB=zn.Uint8Array;const TE=yB;function y_(e){var t=new e.constructor(e.byteLength);return new TE(t).set(new TE(e)),t}function vB(e,t){var n=t?y_(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var _B=/\w*$/;function wB(e){var t=new e.constructor(e.source,_B.exec(e));return t.lastIndex=e.lastIndex,t}var IE=hi?hi.prototype:void 0,xE=IE?IE.valueOf:void 0;function EB(e){return xE?Object(xE.call(e)):{}}function SB(e,t){var n=t?y_(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var CB="[object Boolean]",TB="[object Date]",IB="[object Map]",xB="[object Number]",kB="[object RegExp]",PB="[object Set]",RB="[object String]",AB="[object Symbol]",bB="[object ArrayBuffer]",OB="[object DataView]",NB="[object Float32Array]",DB="[object Float64Array]",$B="[object Int8Array]",LB="[object Int16Array]",MB="[object Int32Array]",FB="[object Uint8Array]",jB="[object Uint8ClampedArray]",UB="[object Uint16Array]",zB="[object Uint32Array]";function BB(e,t,n){var r=e.constructor;switch(t){case bB:return y_(e);case CB:case TB:return new r(+e);case OB:return vB(e,n);case NB:case DB:case $B:case LB:case MB:case FB:case jB:case UB:case zB:return SB(e,n);case IB:return new r;case xB:case RB:return new r(e);case kB:return wB(e);case PB:return new r;case AB:return EB(e)}}var kE=Object.create,VB=function(){function e(){}return function(t){if(!nu(t))return{};if(kE)return kE(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const WB=VB;function HB(e){return typeof e.constructor=="function"&&!h_(e)?WB(c_(e)):{}}var GB="[object Map]";function KB(e){return ys(e)&&g_(e)==GB}var PE=ko&&ko.isMap,qB=PE?d_(PE):KB;const YB=qB;var QB="[object Set]";function XB(e){return ys(e)&&g_(e)==QB}var RE=ko&&ko.isSet,JB=RE?d_(RE):XB;const ZB=JB;var eV=1,tV=2,nV=4,hR="[object Arguments]",rV="[object Array]",iV="[object Boolean]",sV="[object Date]",oV="[object Error]",fR="[object Function]",aV="[object GeneratorFunction]",lV="[object Map]",uV="[object Number]",pR="[object Object]",cV="[object RegExp]",dV="[object Set]",hV="[object String]",fV="[object Symbol]",pV="[object WeakMap]",mV="[object ArrayBuffer]",gV="[object DataView]",yV="[object Float32Array]",vV="[object Float64Array]",_V="[object Int8Array]",wV="[object Int16Array]",EV="[object Int32Array]",SV="[object Uint8Array]",CV="[object Uint8ClampedArray]",TV="[object Uint16Array]",IV="[object Uint32Array]",ce={};ce[hR]=ce[rV]=ce[mV]=ce[gV]=ce[iV]=ce[sV]=ce[yV]=ce[vV]=ce[_V]=ce[wV]=ce[EV]=ce[lV]=ce[uV]=ce[pR]=ce[cV]=ce[dV]=ce[hV]=ce[fV]=ce[SV]=ce[CV]=ce[TV]=ce[IV]=!0;ce[oV]=ce[fR]=ce[pV]=!1;function Na(e,t,n,r,i,s){var o,a=t&eV,l=t&tV,u=t&nV;if(n&&(o=i?n(e,r,i,s):n(e)),o!==void 0)return o;if(!nu(e))return e;var c=ru(e);if(c){if(o=gB(e),!a)return aR(e,o)}else{var d=g_(e),h=d==fR||d==aV;if(tR(e))return K8(e,a);if(d==pR||d==hR||h&&!i){if(o=l||h?{}:HB(e),!a)return l?tB(e,H8(o,e)):J8(e,U8(o,e))}else{if(!ce[d])return i?e:{};o=BB(e,d,a)}}s||(s=new Wo);var f=s.get(e);if(f)return f;s.set(e,o),ZB(e)?e.forEach(function(S){o.add(Na(S,t,n,S,e,s))}):YB(e)&&e.forEach(function(S,m){o.set(m,Na(S,t,n,m,e,s))});var g=u?l?rB:nB:l?p_:f_,v=c?void 0:g(e);return Fz(v||e,function(S,m){v&&(m=S,S=e[m]),JP(o,m,Na(S,t,n,m,e,s))}),o}var xV=4;function AE(e){return Na(e,xV)}function mR(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var kV="[object Symbol]";function v_(e){return typeof e=="symbol"||ys(e)&&gs(e)==kV}var PV="Expected a function";function __(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(PV);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=e.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(__.Cache||Si),n}__.Cache=Si;var RV=500;function AV(e){var t=__(e,function(r){return n.size===RV&&n.clear(),r}),n=t.cache;return t}var bV=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,OV=/\\(\\)?/g,NV=AV(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(bV,function(n,r,i,s){t.push(i?s.replace(OV,"$1"):r||n)}),t});const DV=NV;var $V=1/0;function LV(e){if(typeof e=="string"||v_(e))return e;var t=e+"";return t=="0"&&1/e==-$V?"-0":t}var MV=1/0,bE=hi?hi.prototype:void 0,OE=bE?bE.toString:void 0;function gR(e){if(typeof e=="string")return e;if(ru(e))return mR(e,gR)+"";if(v_(e))return OE?OE.call(e):"";var t=e+"";return t=="0"&&1/e==-MV?"-0":t}function FV(e){return e==null?"":gR(e)}function yR(e){return ru(e)?mR(e,LV):v_(e)?[e]:aR(DV(FV(e)))}var vR={exports:{}},le={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ge=typeof Symbol=="function"&&Symbol.for,w_=Ge?Symbol.for("react.element"):60103,E_=Ge?Symbol.for("react.portal"):60106,Mh=Ge?Symbol.for("react.fragment"):60107,Fh=Ge?Symbol.for("react.strict_mode"):60108,jh=Ge?Symbol.for("react.profiler"):60114,Uh=Ge?Symbol.for("react.provider"):60109,zh=Ge?Symbol.for("react.context"):60110,S_=Ge?Symbol.for("react.async_mode"):60111,Bh=Ge?Symbol.for("react.concurrent_mode"):60111,Vh=Ge?Symbol.for("react.forward_ref"):60112,Wh=Ge?Symbol.for("react.suspense"):60113,jV=Ge?Symbol.for("react.suspense_list"):60120,Hh=Ge?Symbol.for("react.memo"):60115,Gh=Ge?Symbol.for("react.lazy"):60116,UV=Ge?Symbol.for("react.block"):60121,zV=Ge?Symbol.for("react.fundamental"):60117,BV=Ge?Symbol.for("react.responder"):60118,VV=Ge?Symbol.for("react.scope"):60119;function Kt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case w_:switch(e=e.type,e){case S_:case Bh:case Mh:case jh:case Fh:case Wh:return e;default:switch(e=e&&e.$$typeof,e){case zh:case Vh:case Gh:case Hh:case Uh:return e;default:return t}}case E_:return t}}}function _R(e){return Kt(e)===Bh}le.AsyncMode=S_;le.ConcurrentMode=Bh;le.ContextConsumer=zh;le.ContextProvider=Uh;le.Element=w_;le.ForwardRef=Vh;le.Fragment=Mh;le.Lazy=Gh;le.Memo=Hh;le.Portal=E_;le.Profiler=jh;le.StrictMode=Fh;le.Suspense=Wh;le.isAsyncMode=function(e){return _R(e)||Kt(e)===S_};le.isConcurrentMode=_R;le.isContextConsumer=function(e){return Kt(e)===zh};le.isContextProvider=function(e){return Kt(e)===Uh};le.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===w_};le.isForwardRef=function(e){return Kt(e)===Vh};le.isFragment=function(e){return Kt(e)===Mh};le.isLazy=function(e){return Kt(e)===Gh};le.isMemo=function(e){return Kt(e)===Hh};le.isPortal=function(e){return Kt(e)===E_};le.isProfiler=function(e){return Kt(e)===jh};le.isStrictMode=function(e){return Kt(e)===Fh};le.isSuspense=function(e){return Kt(e)===Wh};le.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Mh||e===Bh||e===jh||e===Fh||e===Wh||e===jV||typeof e=="object"&&e!==null&&(e.$$typeof===Gh||e.$$typeof===Hh||e.$$typeof===Uh||e.$$typeof===zh||e.$$typeof===Vh||e.$$typeof===zV||e.$$typeof===BV||e.$$typeof===VV||e.$$typeof===UV)};le.typeOf=Kt;vR.exports=le;var WV=vR.exports,C_=WV,HV={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},GV={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},KV={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wR={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},T_={};T_[C_.ForwardRef]=KV;T_[C_.Memo]=wR;function NE(e){return C_.isMemo(e)?wR:T_[e.$$typeof]||HV}var qV=Object.defineProperty,YV=Object.getOwnPropertyNames,DE=Object.getOwnPropertySymbols,QV=Object.getOwnPropertyDescriptor,XV=Object.getPrototypeOf,$E=Object.prototype;function ER(e,t,n){if(typeof t!="string"){if($E){var r=XV(t);r&&r!==$E&&ER(e,r,n)}var i=YV(t);DE&&(i=i.concat(DE(t)));for(var s=NE(e),o=NE(t),a=0;a<i.length;++a){var l=i[a];if(!GV[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=QV(t,l);try{qV(e,l,u)}catch{}}}}return e}var JV=ER;const ZV=Id(JV);var e7=1,t7=4;function n7(e){return Na(e,e7|t7)}function se(){return se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},se.apply(this,arguments)}function SR(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function zr(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function LE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Kh=w.createContext(void 0);Kh.displayName="FormikContext";var r7=Kh.Provider,i7=Kh.Consumer;function CR(){var e=w.useContext(Kh);return e||qP(!1),e}var ME=function(t){return Array.isArray(t)&&t.length===0},Qe=function(t){return typeof t=="function"},iu=function(t){return t!==null&&typeof t=="object"},s7=function(t){return String(Math.floor(Number(t)))===t},lp=function(t){return Object.prototype.toString.call(t)==="[object String]"},TR=function(t){return w.Children.count(t)===0},up=function(t){return iu(t)&&Qe(t.then)};function _e(e,t,n,r){r===void 0&&(r=0);for(var i=yR(t);e&&r<i.length;)e=e[i[r++]];return r!==i.length&&!e||e===void 0?n:e}function Mn(e,t,n){for(var r=AE(e),i=r,s=0,o=yR(t);s<o.length-1;s++){var a=o[s],l=_e(e,o.slice(0,s+1));if(l&&(iu(l)||Array.isArray(l)))i=i[a]=AE(l);else{var u=o[s+1];i=i[a]=s7(u)&&Number(u)>=0?[]:{}}}return(s===0?e:i)[o[s]]===n?e:(n===void 0?delete i[o[s]]:i[o[s]]=n,s===0&&n===void 0&&delete r[o[s]],r)}function IR(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,s=Object.keys(e);i<s.length;i++){var o=s[i],a=e[o];iu(a)?n.get(a)||(n.set(a,!0),r[o]=Array.isArray(a)?[]:{},IR(a,t,n,r[o])):r[o]=t}return r}function o7(e,t){switch(t.type){case"SET_VALUES":return se({},e,{values:t.payload});case"SET_TOUCHED":return se({},e,{touched:t.payload});case"SET_ERRORS":return br(e.errors,t.payload)?e:se({},e,{errors:t.payload});case"SET_STATUS":return se({},e,{status:t.payload});case"SET_ISSUBMITTING":return se({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return se({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return se({},e,{values:Mn(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return se({},e,{touched:Mn(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return se({},e,{errors:Mn(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return se({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return se({},e,{touched:IR(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return se({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return se({},e,{isSubmitting:!1});default:return e}}var Ti={},Du={};function a7(e){var t=e.validateOnChange,n=t===void 0?!0:t,r=e.validateOnBlur,i=r===void 0?!0:r,s=e.validateOnMount,o=s===void 0?!1:s,a=e.isInitialValid,l=e.enableReinitialize,u=l===void 0?!1:l,c=e.onSubmit,d=zr(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),h=se({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:c},d),f=w.useRef(h.initialValues),g=w.useRef(h.initialErrors||Ti),v=w.useRef(h.initialTouched||Du),S=w.useRef(h.initialStatus),m=w.useRef(!1),p=w.useRef({});w.useEffect(function(){return m.current=!0,function(){m.current=!1}},[]);var y=w.useState(0),_=y[1],I=w.useRef({values:h.initialValues,errors:h.initialErrors||Ti,touched:h.initialTouched||Du,status:h.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),E=I.current,C=w.useCallback(function(T){var O=I.current;I.current=o7(O,T),O!==I.current&&_(function(D){return D+1})},[]),x=w.useCallback(function(T,O){return new Promise(function(D,M){var G=h.validate(T,O);G==null?D(Ti):up(G)?G.then(function(ie){D(ie||Ti)},function(ie){M(ie)}):D(G)})},[h.validate]),$=w.useCallback(function(T,O){var D=h.validationSchema,M=Qe(D)?D(O):D,G=O&&M.validateAt?M.validateAt(O,T):u7(T,M);return new Promise(function(ie,Le){G.then(function(){ie(Ti)},function(Vn){Vn.name==="ValidationError"?ie(l7(Vn)):Le(Vn)})})},[h.validationSchema]),j=w.useCallback(function(T,O){return new Promise(function(D){return D(p.current[T].validate(O))})},[]),H=w.useCallback(function(T){var O=Object.keys(p.current).filter(function(M){return Qe(p.current[M].validate)}),D=O.length>0?O.map(function(M){return j(M,_e(T,M))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(D).then(function(M){return M.reduce(function(G,ie,Le){return ie==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||ie&&(G=Mn(G,O[Le],ie)),G},{})})},[j]),Ke=w.useCallback(function(T){return Promise.all([H(T),h.validationSchema?$(T):{},h.validate?x(T):{}]).then(function(O){var D=O[0],M=O[1],G=O[2],ie=og.all([D,M,G],{arrayMerge:c7});return ie})},[h.validate,h.validationSchema,H,x,$]),Te=qt(function(T){return T===void 0&&(T=E.values),C({type:"SET_ISVALIDATING",payload:!0}),Ke(T).then(function(O){return m.current&&(C({type:"SET_ISVALIDATING",payload:!1}),C({type:"SET_ERRORS",payload:O})),O})});w.useEffect(function(){o&&m.current===!0&&br(f.current,h.initialValues)&&Te(f.current)},[o,Te]);var Nt=w.useCallback(function(T){var O=T&&T.values?T.values:f.current,D=T&&T.errors?T.errors:g.current?g.current:h.initialErrors||{},M=T&&T.touched?T.touched:v.current?v.current:h.initialTouched||{},G=T&&T.status?T.status:S.current?S.current:h.initialStatus;f.current=O,g.current=D,v.current=M,S.current=G;var ie=function(){C({type:"RESET_FORM",payload:{isSubmitting:!!T&&!!T.isSubmitting,errors:D,touched:M,status:G,values:O,isValidating:!!T&&!!T.isValidating,submitCount:T&&T.submitCount&&typeof T.submitCount=="number"?T.submitCount:0}})};if(h.onReset){var Le=h.onReset(E.values,b_);up(Le)?Le.then(ie):ie()}else ie()},[h.initialErrors,h.initialStatus,h.initialTouched,h.onReset]);w.useEffect(function(){m.current===!0&&!br(f.current,h.initialValues)&&u&&(f.current=h.initialValues,Nt(),o&&Te(f.current))},[u,h.initialValues,Nt,o,Te]),w.useEffect(function(){u&&m.current===!0&&!br(g.current,h.initialErrors)&&(g.current=h.initialErrors||Ti,C({type:"SET_ERRORS",payload:h.initialErrors||Ti}))},[u,h.initialErrors]),w.useEffect(function(){u&&m.current===!0&&!br(v.current,h.initialTouched)&&(v.current=h.initialTouched||Du,C({type:"SET_TOUCHED",payload:h.initialTouched||Du}))},[u,h.initialTouched]),w.useEffect(function(){u&&m.current===!0&&!br(S.current,h.initialStatus)&&(S.current=h.initialStatus,C({type:"SET_STATUS",payload:h.initialStatus}))},[u,h.initialStatus,h.initialTouched]);var Ss=qt(function(T){if(p.current[T]&&Qe(p.current[T].validate)){var O=_e(E.values,T),D=p.current[T].validate(O);return up(D)?(C({type:"SET_ISVALIDATING",payload:!0}),D.then(function(M){return M}).then(function(M){C({type:"SET_FIELD_ERROR",payload:{field:T,value:M}}),C({type:"SET_ISVALIDATING",payload:!1})})):(C({type:"SET_FIELD_ERROR",payload:{field:T,value:D}}),Promise.resolve(D))}else if(h.validationSchema)return C({type:"SET_ISVALIDATING",payload:!0}),$(E.values,T).then(function(M){return M}).then(function(M){C({type:"SET_FIELD_ERROR",payload:{field:T,value:_e(M,T)}}),C({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Ci=w.useCallback(function(T,O){var D=O.validate;p.current[T]={validate:D}},[]),Bn=w.useCallback(function(T){delete p.current[T]},[]),b=qt(function(T,O){C({type:"SET_TOUCHED",payload:T});var D=O===void 0?i:O;return D?Te(E.values):Promise.resolve()}),L=w.useCallback(function(T){C({type:"SET_ERRORS",payload:T})},[]),B=qt(function(T,O){var D=Qe(T)?T(E.values):T;C({type:"SET_VALUES",payload:D});var M=O===void 0?n:O;return M?Te(D):Promise.resolve()}),ee=w.useCallback(function(T,O){C({type:"SET_FIELD_ERROR",payload:{field:T,value:O}})},[]),X=qt(function(T,O,D){C({type:"SET_FIELD_VALUE",payload:{field:T,value:O}});var M=D===void 0?n:D;return M?Te(Mn(E.values,T,O)):Promise.resolve()}),Sn=w.useCallback(function(T,O){var D=O,M=T,G;if(!lp(T)){T.persist&&T.persist();var ie=T.target?T.target:T.currentTarget,Le=ie.type,Vn=ie.name,Jh=ie.id,Zh=ie.value,tA=ie.checked,zW=ie.outerHTML,O_=ie.options,nA=ie.multiple;D=O||Vn||Jh,M=/number|range/.test(Le)?(G=parseFloat(Zh),isNaN(G)?"":G):/checkbox/.test(Le)?h7(_e(E.values,D),tA,Zh):O_&&nA?d7(O_):Zh}D&&X(D,M)},[X,E.values]),ft=qt(function(T){if(lp(T))return function(O){return Sn(O,T)};Sn(T)}),pt=qt(function(T,O,D){O===void 0&&(O=!0),C({type:"SET_FIELD_TOUCHED",payload:{field:T,value:O}});var M=D===void 0?i:D;return M?Te(E.values):Promise.resolve()}),tt=w.useCallback(function(T,O){T.persist&&T.persist();var D=T.target,M=D.name,G=D.id,ie=D.outerHTML,Le=O||M||G;pt(Le,!0)},[pt]),Dt=qt(function(T){if(lp(T))return function(O){return tt(O,T)};tt(T)}),Cr=w.useCallback(function(T){Qe(T)?C({type:"SET_FORMIK_STATE",payload:T}):C({type:"SET_FORMIK_STATE",payload:function(){return T}})},[]),Cn=w.useCallback(function(T){C({type:"SET_STATUS",payload:T})},[]),Cs=w.useCallback(function(T){C({type:"SET_ISSUBMITTING",payload:T})},[]),Tr=qt(function(){return C({type:"SUBMIT_ATTEMPT"}),Te().then(function(T){var O=T instanceof Error,D=!O&&Object.keys(T).length===0;if(D){var M;try{if(M=qR(),M===void 0)return}catch(G){throw G}return Promise.resolve(M).then(function(G){return m.current&&C({type:"SUBMIT_SUCCESS"}),G}).catch(function(G){if(m.current)throw C({type:"SUBMIT_FAILURE"}),G})}else if(m.current&&(C({type:"SUBMIT_FAILURE"}),O))throw T})}),Tn=qt(function(T){T&&T.preventDefault&&Qe(T.preventDefault)&&T.preventDefault(),T&&T.stopPropagation&&Qe(T.stopPropagation)&&T.stopPropagation(),Tr().catch(function(O){console.warn("Warning: An unhandled error was caught from submitForm()",O)})}),b_={resetForm:Nt,validateForm:Te,validateField:Ss,setErrors:L,setFieldError:ee,setFieldTouched:pt,setFieldValue:X,setStatus:Cn,setSubmitting:Cs,setTouched:b,setValues:B,setFormikState:Cr,submitForm:Tr},qR=qt(function(){return c(E.values,b_)}),YR=qt(function(T){T&&T.preventDefault&&Qe(T.preventDefault)&&T.preventDefault(),T&&T.stopPropagation&&Qe(T.stopPropagation)&&T.stopPropagation(),Nt()}),QR=w.useCallback(function(T){return{value:_e(E.values,T),error:_e(E.errors,T),touched:!!_e(E.touched,T),initialValue:_e(f.current,T),initialTouched:!!_e(v.current,T),initialError:_e(g.current,T)}},[E.errors,E.touched,E.values]),XR=w.useCallback(function(T){return{setValue:function(D,M){return X(T,D,M)},setTouched:function(D,M){return pt(T,D,M)},setError:function(D){return ee(T,D)}}},[X,pt,ee]),JR=w.useCallback(function(T){var O=iu(T),D=O?T.name:T,M=_e(E.values,D),G={name:D,value:M,onChange:ft,onBlur:Dt};if(O){var ie=T.type,Le=T.value,Vn=T.as,Jh=T.multiple;ie==="checkbox"?Le===void 0?G.checked=!!M:(G.checked=!!(Array.isArray(M)&&~M.indexOf(Le)),G.value=Le):ie==="radio"?(G.checked=M===Le,G.value=Le):Vn==="select"&&Jh&&(G.value=G.value||[],G.multiple=!0)}return G},[Dt,ft,E.values]),Xh=w.useMemo(function(){return!br(f.current,E.values)},[f.current,E.values]),ZR=w.useMemo(function(){return typeof a<"u"?Xh?E.errors&&Object.keys(E.errors).length===0:a!==!1&&Qe(a)?a(h):a:E.errors&&Object.keys(E.errors).length===0},[a,Xh,E.errors,h]),eA=se({},E,{initialValues:f.current,initialErrors:g.current,initialTouched:v.current,initialStatus:S.current,handleBlur:Dt,handleChange:ft,handleReset:YR,handleSubmit:Tn,resetForm:Nt,setErrors:L,setFormikState:Cr,setFieldTouched:pt,setFieldValue:X,setFieldError:ee,setStatus:Cn,setSubmitting:Cs,setTouched:b,setValues:B,submitForm:Tr,validateForm:Te,validateField:Ss,isValid:ZR,dirty:Xh,unregisterField:Bn,registerField:Ci,getFieldProps:JR,getFieldMeta:QR,getFieldHelpers:XR,validateOnBlur:i,validateOnChange:n,validateOnMount:o});return eA}function xR(e){var t=a7(e),n=e.component,r=e.children,i=e.render,s=e.innerRef;return w.useImperativeHandle(s,function(){return t}),w.createElement(r7,{value:t},n?w.createElement(n,t):i?i(t):r?Qe(r)?r(t):TR(r)?null:w.Children.only(r):null)}function l7(e){var t={};if(e.inner){if(e.inner.length===0)return Mn(t,e.path,e.message);for(var i=e.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var s;if(n){if(r>=i.length)break;s=i[r++]}else{if(r=i.next(),r.done)break;s=r.value}var o=s;_e(t,o.path)||(t=Mn(t,o.path,o.message))}}return t}function u7(e,t,n,r){n===void 0&&(n=!1);var i=hg(e);return t[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function hg(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);Array.isArray(e[r])===!0?t[r]=e[r].map(function(i){return Array.isArray(i)===!0||oE(i)?hg(i):i!==""?i:void 0}):oE(e[r])?t[r]=hg(e[r]):t[r]=e[r]!==""?e[r]:void 0}return t}function c7(e,t,n){var r=e.slice();return t.forEach(function(s,o){if(typeof r[o]>"u"){var a=n.clone!==!1,l=a&&n.isMergeableObject(s);r[o]=l?og(Array.isArray(s)?[]:{},s,n):s}else n.isMergeableObject(s)?r[o]=og(e[o],s,n):e.indexOf(s)===-1&&r.push(s)}),r}function d7(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function h7(e,t,n){if(typeof e=="boolean")return!!t;var r=[],i=!1,s=-1;if(Array.isArray(e))r=e,s=e.indexOf(n),i=s>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!i?r.concat(n):i?r.slice(0,s).concat(r.slice(s+1)):r}var f7=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?w.useLayoutEffect:w.useEffect;function qt(e){var t=w.useRef(e);return f7(function(){t.current=e}),w.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current.apply(void 0,r)},[])}function p7(e){var t=e.validate,n=e.name,r=e.render,i=e.children,s=e.as,o=e.component,a=e.className,l=zr(e,["validate","name","render","children","as","component","className"]),u=CR(),c=zr(u,["validate","validationSchema"]),d=c.registerField,h=c.unregisterField;w.useEffect(function(){return d(n,{validate:t}),function(){h(n)}},[d,h,n,t]);var f=c.getFieldProps(se({name:n},l)),g=c.getFieldMeta(n),v={field:f,form:c};if(r)return r(se({},v,{meta:g}));if(Qe(i))return i(se({},v,{meta:g}));if(o){if(typeof o=="string"){var S=l.innerRef,m=zr(l,["innerRef"]);return w.createElement(o,se({ref:S},f,m,{className:a}),i)}return w.createElement(o,se({field:f,form:c},l,{className:a}),i)}var p=s||"input";if(typeof p=="string"){var y=l.innerRef,_=zr(l,["innerRef"]);return w.createElement(p,se({ref:y},f,_,{className:a}),i)}return w.createElement(p,se({},f,l,{className:a}),i)}var kR=w.forwardRef(function(e,t){var n=e.action,r=zr(e,["action"]),i=n??"#",s=CR(),o=s.handleReset,a=s.handleSubmit;return w.createElement("form",se({onSubmit:a,ref:t,onReset:o,action:i},r))});kR.displayName="Form";function m7(e){var t=function(i){return w.createElement(i7,null,function(s){return s||qP(!1),w.createElement(e,se({},i,{formik:s}))})},n=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return t.WrappedComponent=e,t.displayName="FormikConnect("+n+")",ZV(t,e)}var g7=function(t,n,r){var i=us(t),s=i[n];return i.splice(n,1),i.splice(r,0,s),i},y7=function(t,n,r){var i=us(t),s=i[n];return i[n]=i[r],i[r]=s,i},cp=function(t,n,r){var i=us(t);return i.splice(n,0,r),i},v7=function(t,n,r){var i=us(t);return i[n]=r,i},us=function(t){if(t){if(Array.isArray(t))return[].concat(t);var n=Object.keys(t).map(function(r){return parseInt(r)}).reduce(function(r,i){return i>r?i:r},0);return Array.from(se({},t,{length:n+1}))}else return[]},FE=function(t,n){var r=typeof t=="function"?t:n;return function(i){if(Array.isArray(i)||iu(i)){var s=us(i);return r(s)}return i}},_7=function(e){SR(t,e);function t(r){var i;return i=e.call(this,r)||this,i.updateArrayField=function(s,o,a){var l=i.props,u=l.name,c=l.formik.setFormikState;c(function(d){var h=FE(a,s),f=FE(o,s),g=Mn(d.values,u,s(_e(d.values,u))),v=a?h(_e(d.errors,u)):void 0,S=o?f(_e(d.touched,u)):void 0;return ME(v)&&(v=void 0),ME(S)&&(S=void 0),se({},d,{values:g,errors:a?Mn(d.errors,u,v):d.errors,touched:o?Mn(d.touched,u,S):d.touched})})},i.push=function(s){return i.updateArrayField(function(o){return[].concat(us(o),[n7(s)])},!1,!1)},i.handlePush=function(s){return function(){return i.push(s)}},i.swap=function(s,o){return i.updateArrayField(function(a){return y7(a,s,o)},!0,!0)},i.handleSwap=function(s,o){return function(){return i.swap(s,o)}},i.move=function(s,o){return i.updateArrayField(function(a){return g7(a,s,o)},!0,!0)},i.handleMove=function(s,o){return function(){return i.move(s,o)}},i.insert=function(s,o){return i.updateArrayField(function(a){return cp(a,s,o)},function(a){return cp(a,s,null)},function(a){return cp(a,s,null)})},i.handleInsert=function(s,o){return function(){return i.insert(s,o)}},i.replace=function(s,o){return i.updateArrayField(function(a){return v7(a,s,o)},!1,!1)},i.handleReplace=function(s,o){return function(){return i.replace(s,o)}},i.unshift=function(s){var o=-1;return i.updateArrayField(function(a){var l=a?[s].concat(a):[s];return o=l.length,l},function(a){return a?[null].concat(a):[null]},function(a){return a?[null].concat(a):[null]}),o},i.handleUnshift=function(s){return function(){return i.unshift(s)}},i.handleRemove=function(s){return function(){return i.remove(s)}},i.handlePop=function(){return function(){return i.pop()}},i.remove=i.remove.bind(LE(i)),i.pop=i.pop.bind(LE(i)),i}var n=t.prototype;return n.componentDidUpdate=function(i){this.props.validateOnChange&&this.props.formik.validateOnChange&&!br(_e(i.formik.values,i.name),_e(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},n.remove=function(i){var s;return this.updateArrayField(function(o){var a=o?us(o):[];return s||(s=a[i]),Qe(a.splice)&&a.splice(i,1),Qe(a.every)&&a.every(function(l){return l===void 0})?[]:a},!0,!0),s},n.pop=function(){var i;return this.updateArrayField(function(s){var o=s.slice();return i||(i=o&&o.pop&&o.pop()),o},!0,!0),i},n.render=function(){var i={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},s=this.props,o=s.component,a=s.render,l=s.children,u=s.name,c=s.formik,d=zr(c,["validate","validationSchema"]),h=se({},i,{form:d,name:u});return o?w.createElement(o,h):a?a(h):l?typeof l=="function"?l(h):TR(l)?null:w.Children.only(l):null},t}(w.Component);_7.defaultProps={validateOnChange:!0};var w7=function(e){SR(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.shouldComponentUpdate=function(i){return _e(this.props.formik.errors,this.props.name)!==_e(i.formik.errors,this.props.name)||_e(this.props.formik.touched,this.props.name)!==_e(i.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(i).length},n.render=function(){var i=this.props,s=i.component,o=i.formik,a=i.render,l=i.children,u=i.name,c=zr(i,["component","formik","render","children","name"]),d=_e(o.touched,u),h=_e(o.errors,u);return d&&h?a?Qe(a)?a(h):null:l?Qe(l)?l(h):null:s?w.createElement(s,c,h):h:null},t}(w.Component),E7=m7(w7);const S7=z.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.2);

`,C7=z.img`

`,T7=z.div`
  position: absolute;
  width: 290px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  background-color: #ffffff;
  border-radius: 30px;
  max-height: 100vh;
  padding: 32px;
  
  @media screen and (min-width: 768px) {
    width: 566px;
    padding: 64px;

   }

`,I7=z.button`
  width: 32px;
  height: 32px;
  background-color: transparent;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`,PR=z.h2`
font-weight: 500;
line-height: 1.2;
letter-spacing: -0.02em;
margin-bottom: 20px;
font-size: 30px;

@media screen and (min-width: 768px) {
  font-size: 40px;

}
`,RR=z.p`
font-size: 16px;
line-height: 1.37;
color: rgba(18, 20, 23, 0.8);
margin-bottom: 40px;
`,AR=z(kR)`
display: flex;
flex-direction: column;
gap: 18px;
`,Da=z(p7)`
border: 1px solid rgba(18, 20, 23, 0.1);
border-radius: 12px;
padding: 16px 18px;
height: 54px;
width: 100%;

&::placeholder {
  color: ${({theme:e})=>e.primaryBlack};
}

&:hover{
  outline: none;
  border-color: ${({theme:e})=>e.primaryYellow};
}

&:focus {
  outline: none;
  border-color: ${({theme:e})=>e.primaryYellow};
}


@media screen and (min-width: 768px) {
  width: 438px;

}
`,$a=z(E7)`
font-size: 14px;
color: red;
margin-top: -10px;
`,bR=z.button`
margin-top: 22px;
border-radius: 30px;
padding: 16px;
width: 100%;
height: 60px;

font-weight: 700;
font-size: 18px;
line-height: 1.56;
color: ${({theme:e})=>e.orange};
background: ${({theme:e})=>e.primaryYellow};
&:hover {
  color: ${({theme:e})=>e.orange};
    background: ${({theme:e})=>e.lightYellow};
}

@media screen and (min-width: 768px) {
  width: 438px;

}
`,x7=z.button`
margin-top: 18px;
border-radius: 12px;
padding: 16px;
width: 100%;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
background: transparent;
border: 1px solid rgba(18, 20, 23, 0.1);

font-size: 16px;
line-height: 1.37;
color: rgba(18, 20, 23, 0.8);

&:hover {
  border-color: ${({theme:e})=>e.primaryYellow};
}
@media screen and (min-width: 768px) {
  width: 438px;
  
}

`,k7=z.img`
width: 20px;
height: 20px;
`,P7="/assets/x-close-6a9fe0ff.svg",jE=document.getElementById("portal"),R7=({children:e,toggleModal:t})=>{const n=r=>{r.target===r.currentTarget&&t()};return w.useEffect(()=>{const r=s=>{s.code==="Escape"&&t()},i=document.querySelector("body");if(i)return i.style.position="fixed",window.addEventListener("keydown",r),()=>{i.style.position="",window.removeEventListener("keydown",r)}},[t]),aT.createPortal(k.jsx(S7,{onMouseDown:n,children:k.jsxs(T7,{children:[k.jsx(I7,{onClick:t,type:"button",children:k.jsx(C7,{src:P7,alt:"Close"})}),e]})}),jE||document.body)},OR=z.div`
display: flex;
    align-items: center;

`,NR=z.ul`
   display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 1140px) {
  gap: 16px;
}
`,A7=z.button`
  color: ${({theme:e})=>e.orange};
  background: ${({theme:e})=>e.primaryYellow};
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;

  border-radius: 30px;
  padding: 14px 40px;
  width: 171px;
  height: 48px;

  &:hover {
    color: ${({theme:e})=>e.orange};
    background: ${({theme:e})=>e.lightYellow};
  }
`,DR=z.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  color: #121417;
  background: none;
  min-width: 73px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid gray;
    border-radius: 30px;
    padding: 14px 40px;

  &:hover {
    color: ${({theme:e})=>e.orange};
    background: ${({theme:e})=>e.lightYellow};
  }
`;z.img`

  width: 20px;
  height: 20px;
`;z.img`
  width: 20px;
  height: 20px;
`;const b7=z.li`
  border-radius: 30px;
  padding: 14px 14px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  border: 1px solid ${({theme:e})=>e.primaryYellow};
`,$R=z.ul`
  display: flex;
  gap: 28px;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${({theme:e})=>e.primaryBlack};
`,La=z(vT)`
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.primaryBlack};
  align-items: center;
  &.active {
    color: ${({theme:e})=>e.primaryYellow};
  }
  &:hover {
    color: ${({theme:e})=>e.primaryYellow};
  }
`,O7=({onClickLogin:e,onClickRegister:t})=>k.jsxs(k.Fragment,{children:[k.jsxs($R,{children:[k.jsx("li",{children:k.jsx(La,{to:"/",children:"Home"})}),k.jsx("li",{children:k.jsx(La,{to:"/psychologists",children:"Psychologists"})})]}),k.jsx(OR,{children:k.jsxs(NR,{children:[k.jsx("li",{children:k.jsx(DR,{type:"button",onClick:e,children:"Log in"})}),k.jsx("li",{children:k.jsx(A7,{type:"button",onClick:t,children:"Registration"})})]})})]}),N7=()=>{const e=as.currentUser,t=()=>{m3(as)};return k.jsxs(k.Fragment,{children:[k.jsxs($R,{children:[k.jsx("li",{children:k.jsx(La,{to:"/",children:"Home"})}),k.jsx("li",{children:k.jsx(La,{to:"/psychologists",children:"Psychologists"})}),k.jsx("li",{children:k.jsx(La,{to:"/favorites",children:"Favorites"})})]}),k.jsx(OR,{children:k.jsxs(NR,{children:[k.jsx(b7,{children:(e==null?void 0:e.displayName)??"User"}),k.jsx("li",{children:k.jsx(DR,{onClick:t,children:"Log out"})})]})})]})},D7=({onClickLogin:e,onClickRegister:t,authUser:n})=>n?k.jsx(N7,{}):k.jsx(O7,{onClickLogin:e,onClickRegister:t});function ws(e){this._maxSize=e,this.clear()}ws.prototype.clear=function(){this._size=0,this._values=Object.create(null)};ws.prototype.get=function(e){return this._values[e]};ws.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var $7=/[^.^\]^[]+|(?=\[\]|\.\.)/g,LR=/^\d+$/,L7=/^\d/,M7=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,F7=/^\s*(['"]?)(.*?)(\1)\s*$/,I_=512,UE=new ws(I_),zE=new ws(I_),BE=new ws(I_),Hi={Cache:ws,split:fg,normalizePath:dp,setter:function(e){var t=dp(e);return zE.get(e)||zE.set(e,function(r,i){for(var s=0,o=t.length,a=r;s<o-1;){var l=t[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[t[s++]]}a[t[s]]=i})},getter:function(e,t){var n=dp(e);return BE.get(e)||BE.set(e,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!t)i=i[n[s++]];else return;return i})},join:function(e){return e.reduce(function(t,n){return t+(x_(n)||LR.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){j7(Array.isArray(e)?e:fg(e),t,n)}};function dp(e){return UE.get(e)||UE.set(e,fg(e).map(function(t){return t.replace(F7,"$2")}))}function fg(e){return e.match($7)||[""]}function j7(e,t,n){var r=e.length,i,s,o,a;for(s=0;s<r;s++)i=e[s],i&&(B7(i)&&(i='"'+i+'"'),a=x_(i),o=!a&&/^\d+$/.test(i),t.call(n,i,a,o,s,e))}function x_(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function U7(e){return e.match(L7)&&!e.match(LR)}function z7(e){return M7.test(e)}function B7(e){return!x_(e)&&(U7(e)||z7(e))}const V7=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,qh=e=>e.match(V7)||[],Yh=e=>e[0].toUpperCase()+e.slice(1),k_=(e,t)=>qh(e).join(t).toLowerCase(),MR=e=>qh(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),W7=e=>Yh(MR(e)),H7=e=>k_(e,"_"),G7=e=>k_(e,"-"),K7=e=>Yh(k_(e," ")),q7=e=>qh(e).map(Yh).join(" ");var hp={words:qh,upperFirst:Yh,camelCase:MR,pascalCase:W7,snakeCase:H7,kebabCase:G7,sentenceCase:K7,titleCase:q7},P_={exports:{}};P_.exports=function(e){return FR(Y7(e),e)};P_.exports.array=FR;function FR(e,t){var n=e.length,r=new Array(n),i={},s=n,o=Q7(t),a=X7(e);for(t.forEach(function(u){if(!a.has(u[0])||!a.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(e[s],s,new Set);return r;function l(u,c,d){if(d.has(u)){var h;try{h=", node was:"+JSON.stringify(u)}catch{h=""}throw new Error("Cyclic dependency"+h)}if(!a.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[c]){i[c]=!0;var f=o.get(u)||new Set;if(f=Array.from(f),c=f.length){d.add(u);do{var g=f[--c];l(g,a.get(g),d)}while(c);d.delete(u)}r[--n]=u}}}function Y7(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var i=e[n];t.add(i[0]),t.add(i[1])}return Array.from(t)}function Q7(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var i=e[n];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function X7(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var J7=P_.exports;const Z7=Id(J7),eW=Object.prototype.toString,tW=Error.prototype.toString,nW=RegExp.prototype.toString,rW=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",iW=/^Symbol\((.*)\)(.*)$/;function sW(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function VE(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return sW(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return rW.call(e).replace(iW,"Symbol($1)");const r=eW.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+tW.call(e)+"]":r==="RegExp"?nW.call(e):null}function ri(e,t){let n=VE(e,t);return n!==null?n:JSON.stringify(e,function(r,i){let s=VE(this[r],t);return s!==null?s:i},2)}function jR(e){return e==null?[]:[].concat(e)}let UR,zR,BR,oW=/\$\{\s*(\w+)\s*\}/g;UR=Symbol.toStringTag;class WE{constructor(t,n,r,i){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[UR]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],jR(t).forEach(s=>{if(Tt.isError(s)){this.errors.push(...s.errors);const o=s.inner.length?s.inner:[s];this.inner.push(...o)}else this.errors.push(s)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}zR=Symbol.hasInstance;BR=Symbol.toStringTag;class Tt extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(oW,(i,s)=>ri(n[s])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,i,s){const o=new WE(t,n,r,i);if(s)return o;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[BR]="Error",this.name=o.name,this.message=o.message,this.type=o.type,this.value=o.value,this.path=o.path,this.errors=o.errors,this.inner=o.inner,Error.captureStackTrace&&Error.captureStackTrace(this,Tt)}static[zR](t){return WE[Symbol.hasInstance](t)||super[Symbol.hasInstance](t)}}let kn={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${ri(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${ri(n,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${ri(n,!0)}\``+i}},St={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},Pr={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},pg={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},aW={isValue:"${path} field must be ${value}"},mg={noUnknown:"${path} field has unspecified keys: ${unknown}"},lW={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},uW={notType:e=>{const{path:t,value:n,spec:r}=e,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${t} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${ri(n,!0)}\``;if(n.length>i)return`${t} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${ri(n,!0)}\``}return Tt.formatError(kn.notType,e)}};Object.assign(Object.create(null),{mixed:kn,string:St,number:Pr,date:pg,object:mg,array:lW,boolean:aW,tuple:uW});const R_=e=>e&&e.__isYupSchema__;class Cd{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new Cd(t,(a,l)=>{var u;let c=o(...a)?i:s;return(u=c==null?void 0:c(l))!=null?u:l})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,t,n);if(i===void 0||i===t)return t;if(!R_(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const $u={context:"$",value:"."};class Es{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===$u.context,this.isValue=this.key[0]===$u.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?$u.context:this.isValue?$u.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&Hi.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let i=this.isContext?r:this.isValue?t:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Es.prototype.__isYupRef=!0;const ir=e=>e==null;function Ps(e){function t({value:n,path:r="",options:i,originalValue:s,schema:o},a,l){const{name:u,test:c,params:d,message:h,skipAbsent:f}=e;let{parent:g,context:v,abortEarly:S=o.spec.abortEarly,disableStackTrace:m=o.spec.disableStackTrace}=i;function p(H){return Es.isRef(H)?H.getValue(n,g,v):H}function y(H={}){const Ke=Object.assign({value:n,originalValue:s,label:o.spec.label,path:H.path||r,spec:o.spec,disableStackTrace:H.disableStackTrace||m},d,H.params);for(const Nt of Object.keys(Ke))Ke[Nt]=p(Ke[Nt]);const Te=new Tt(Tt.formatError(H.message||h,Ke),n,Ke.path,H.type||u,Ke.disableStackTrace);return Te.params=Ke,Te}const _=S?a:l;let I={path:r,parent:g,type:u,from:i.from,createError:y,resolve:p,options:i,originalValue:s,schema:o};const E=H=>{Tt.isError(H)?_(H):H?l(null):_(y())},C=H=>{Tt.isError(H)?_(H):a(H)};if(f&&ir(n))return E(!0);let $;try{var j;if($=c.call(I,n,I),typeof((j=$)==null?void 0:j.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${I.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve($).then(E,C)}}catch(H){C(H);return}E($)}return t.OPTIONS=e,t}function cW(e,t,n,r=n){let i,s,o;return t?(Hi.forEach(t,(a,l,u)=>{let c=l?a.slice(1,a.length-1):a;e=e.resolve({context:r,parent:i,value:n});let d=e.type==="tuple",h=u?parseInt(c,10):0;if(e.innerType||d){if(d&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&h>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `);i=n,n=n&&n[h],e=d?e.spec.types[h]:e.innerType}if(!u){if(!e.fields||!e.fields[c])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e.type}")`);i=n,n=n&&n[c],e=e.fields[c]}s=c,o=l?"["+a+"]":"."+a}),{schema:e,parent:i,parentPath:s}):{parent:i,parentPath:t,schema:e}}class Td extends Set{describe(){const t=[];for(const n of this.values())t.push(Es.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new Td(this.values())}merge(t,n){const r=this.clone();return t.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function Hs(e,t=new Map){if(R_(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=Hs(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,i]of e.entries())n.set(r,Hs(i,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(Hs(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,i]of Object.entries(e))n[r]=Hs(i,t)}else throw Error(`Unable to clone ${e}`);return n}class En{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Td,this._blacklist=new Td,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(kn.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=Hs(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{t.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,i,s;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=t.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),i=n.assert==="ignore-optionality",s=r._cast(t,n);if(n.assert!==!1&&!r.isType(s)){if(i&&ir(s))return s;let o=ri(t),a=ri(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((i,s)=>s.call(this,i,t,this),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,i){let{path:s,originalValue:o=t,strict:a=this.spec.strict}=n,l=t;a||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let c of Object.values(this.internalTests))c&&u.push(c);this.runTests({path:s,value:l,originalValue:o,options:n,tests:u},r,c=>{if(c.length)return i(c,l);this.runTests({path:s,value:l,originalValue:o,options:n,tests:this.tests},r,i)})}runTests(t,n,r){let i=!1,{tests:s,value:o,originalValue:a,path:l,options:u}=t,c=v=>{i||(i=!0,n(v,o))},d=v=>{i||(i=!0,r(v,o))},h=s.length,f=[];if(!h)return d([]);let g={value:o,originalValue:a,path:l,options:u,schema:this};for(let v=0;v<s.length;v++){const S=s[v];S(g,c,function(p){p&&(Array.isArray(p)?f.push(...p):f.push(p)),--h<=0&&d(f)})}}asNestedTest({key:t,index:n,parent:r,parentPath:i,originalParent:s,options:o}){const a=t??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let u=r[a];const c=Object.assign({},o,{strict:!0,parent:r,value:u,originalValue:s[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${l?a:`"${a}"`}]`:(i?`${i}.`:"")+t});return(d,h,f)=>this.resolve(c)._validate(u,c,h,f)}validate(t,n){var r;let i=this.resolve(Object.assign({},n,{value:t})),s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((o,a)=>i._validate(t,n,(l,u)=>{Tt.isError(l)&&(l.value=u),a(l)},(l,u)=>{l.length?a(new Tt(l,u,void 0,void 0,s)):o(u)}))}validateSync(t,n){var r;let i=this.resolve(Object.assign({},n,{value:t})),s,o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(t,Object.assign({},n,{sync:!0}),(a,l)=>{throw Tt.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new Tt(a,t,void 0,void 0,o);s=l}),s}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(Tt.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(Tt.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):Hs(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=Ps({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=Ps({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=kn.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=kn.notNull){return this.nullability(!1,t)}required(t=kn.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=kn.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=Ps(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),i=jR(t).map(s=>new Es(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof n=="function"?new Cd(i,n):Cd.fromOptions(i,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=Ps({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=kn.oneOf){let r=this.clone();return t.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=Ps({message:n,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(t,n=kn.notOneOf){let r=this.clone();return t.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=Ps({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:i,optional:s,nullable:o}=n.spec;return{meta:i,label:r,optional:s,nullable:o,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,c)=>c.findIndex(d=>d.name===l.name)===u)}}}En.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])En.prototype[`${e}At`]=function(t,n,r={}){const{parent:i,parentPath:s,schema:o}=cW(this,t,n,r.context);return o[e](i&&i[s],Object.assign({},r,{parent:i,path:t}))};for(const e of["equals","is"])En.prototype[e]=En.prototype.oneOf;for(const e of["not","nope"])En.prototype[e]=En.prototype.notOneOf;const dW=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function hW(e){const t=gg(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;if(t.z===void 0&&t.plusMinus===void 0)return new Date(t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond).valueOf();let n=0;return t.z!=="Z"&&t.plusMinus!==void 0&&(n=t.hourOffset*60+t.minuteOffset,t.plusMinus==="+"&&(n=0-n)),Date.UTC(t.year,t.month,t.day,t.hour,t.minute+n,t.second,t.millisecond)}function gg(e){var t,n;const r=dW.exec(e);return r?{year:Gn(r[1]),month:Gn(r[2],1)-1,day:Gn(r[3],1),hour:Gn(r[4]),minute:Gn(r[5]),second:Gn(r[6]),millisecond:r[7]?Gn(r[7].substring(0,3)):0,precision:(t=(n=r[7])==null?void 0:n.length)!=null?t:void 0,z:r[8]||void 0,plusMinus:r[9]||void 0,hourOffset:Gn(r[10]),minuteOffset:Gn(r[11])}:null}function Gn(e,t=0){return Number(e)||t}let fW=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,pW=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,mW=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,gW="^\\d{4}-\\d{2}-\\d{2}",yW="\\d{2}:\\d{2}:\\d{2}",vW="(([+-]\\d{2}(:?\\d{2})?)|Z)",_W=new RegExp(`${gW}T${yW}(\\.\\d+)?${vW}$`),wW=e=>ir(e)||e===e.trim(),EW={}.toString();function oo(){return new VR}class VR extends En{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const i=t!=null&&t.toString?t.toString():t;return i===EW?t:i})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||kn.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=St.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=St.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=St.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||St.matches,params:{regex:t},skipAbsent:!0,test:o=>o===""&&r||o.search(t)!==-1})}email(t=St.email){return this.matches(fW,{name:"email",message:t,excludeEmptyString:!0})}url(t=St.url){return this.matches(pW,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=St.uuid){return this.matches(mW,{name:"uuid",message:t,excludeEmptyString:!1})}datetime(t){let n="",r,i;return t&&(typeof t=="object"?{message:n="",allowOffset:r=!1,precision:i=void 0}=t:n=t),this.matches(_W,{name:"datetime",message:n||St.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:n||St.datetime_offset,params:{allowOffset:r},skipAbsent:!0,test:s=>{if(!s||r)return!0;const o=gg(s);return o?!!o.z:!1}}).test({name:"datetime_precision",message:n||St.datetime_precision,params:{precision:i},skipAbsent:!0,test:s=>{if(!s||i==null)return!0;const o=gg(s);return o?o.precision===i:!1}})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=St.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:wW})}lowercase(t=St.lowercase){return this.transform(n=>ir(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ir(n)||n===n.toLowerCase()})}uppercase(t=St.uppercase){return this.transform(n=>ir(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ir(n)||n===n.toUpperCase()})}}oo.prototype=VR.prototype;let SW=e=>e!=+e;function CW(){return new WR}class WR extends En{constructor(){super({type:"number",check(t){return t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&!SW(t)}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce)return t;let i=t;if(typeof i=="string"){if(i=i.replace(/\s/g,""),i==="")return NaN;i=+i}return r.isType(i)||i===null?i:parseFloat(i)})})}min(t,n=Pr.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r>=this.resolve(t)}})}max(t,n=Pr.max){return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(r){return r<=this.resolve(t)}})}lessThan(t,n=Pr.lessThan){return this.test({message:n,name:"max",exclusive:!0,params:{less:t},skipAbsent:!0,test(r){return r<this.resolve(t)}})}moreThan(t,n=Pr.moreThan){return this.test({message:n,name:"min",exclusive:!0,params:{more:t},skipAbsent:!0,test(r){return r>this.resolve(t)}})}positive(t=Pr.positive){return this.moreThan(0,t)}negative(t=Pr.negative){return this.lessThan(0,t)}integer(t=Pr.integer){return this.test({name:"integer",message:t,skipAbsent:!0,test:n=>Number.isInteger(n)})}truncate(){return this.transform(t=>ir(t)?t:t|0)}round(t){var n;let r=["ceil","floor","round","trunc"];if(t=((n=t)==null?void 0:n.toLowerCase())||"round",t==="trunc")return this.truncate();if(r.indexOf(t.toLowerCase())===-1)throw new TypeError("Only valid options for round() are: "+r.join(", "));return this.transform(i=>ir(i)?i:Math[t](i))}}CW.prototype=WR.prototype;let TW=new Date(""),IW=e=>Object.prototype.toString.call(e)==="[object Date]";class Qh extends En{constructor(){super({type:"date",check(t){return IW(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)||t===null?t:(t=hW(t),isNaN(t)?Qh.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(Es.isRef(t))r=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(t,n=pg.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(t,n=pg.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}Qh.INVALID_DATE=TW;Qh.prototype;function xW(e,t=[]){let n=[],r=new Set,i=new Set(t.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=Hi.split(o)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(e)){let a=e[o];r.add(o),Es.isRef(a)&&a.isSibling?s(a.path,o):R_(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return Z7.array(Array.from(r),n).reverse()}function HE(e,t){let n=1/0;return e.some((r,i)=>{var s;if((s=t.path)!=null&&s.includes(r))return n=i,!0}),n}function HR(e){return(t,n)=>HE(e,t)-HE(e,n)}const kW=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function lc(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=lc(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=lc(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(lc)}):"optional"in e?e.optional():e}const PW=(e,t)=>{const n=[...Hi.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),i=Hi.getter(Hi.join(n),!0)(e);return!!(i&&r in i)};let GE=e=>Object.prototype.toString.call(e)==="[object Object]";function RW(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const AW=HR([]);function A_(e){return new GR(e)}class GR extends En{constructor(t){super({type:"object",check(n){return GE(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=AW,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let i=super._cast(t,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(d=>!this._nodes.includes(d))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),c=!1;for(const d of a){let h=s[d],f=d in i;if(h){let g,v=i[d];u.path=(n.path?`${n.path}.`:"")+d,h=h.resolve({value:v,context:n.context,parent:l});let S=h instanceof En?h.spec:void 0,m=S==null?void 0:S.strict;if(S!=null&&S.strip){c=c||d in i;continue}g=!n.__validating||!m?h.cast(i[d],u):i[d],g!==void 0&&(l[d]=g)}else f&&!o&&(l[d]=i[d]);(f!==d in l||l[d]!==i[d])&&(c=!0)}return c?l:i}_validate(t,n={},r,i){let{from:s=[],originalValue:o=t,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...s],n.__validating=!0,n.originalValue=o,super._validate(t,n,r,(l,u)=>{if(!a||!GE(u)){i(l,u);return}o=o||u;let c=[];for(let d of this._nodes){let h=this.fields[d];!h||Es.isRef(h)||c.push(h.asNestedTest({options:n,key:d,parent:u,parentPath:n.path,originalParent:o}))}this.runTests({tests:c,value:u,originalValue:o,options:n},r,d=>{i(d.sort(this._sortErrors).concat(l),u)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=t;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=xW(t,n),r._sortErrors=HR(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),i)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return lc(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>t.includes(r)&&t.includes(i)))}omit(t){const n=[];for(const r of Object.keys(this.fields))t.includes(r)||n.push(r);return this.pick(n)}from(t,n,r){let i=Hi.getter(t,!0);return this.transform(s=>{if(!s)return s;let o=s;return PW(s,t)&&(o=Object.assign({},s),r||delete o[t],o[n]=i(s)),o})}json(){return this.transform(kW)}noUnknown(t=!0,n=mg.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=RW(this.schema,i);return!t||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=mg.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[t(i)]=n[i];return r})}camelCase(){return this.transformKeys(hp.camelCase)}snakeCase(){return this.transformKeys(hp.snakeCase)}constantCase(){return this.transformKeys(t=>hp.snakeCase(t).toUpperCase())}describe(t){const n=(t?this.resolve(t):this).clone(),r=super.describe(t);r.fields={};for(const[s,o]of Object.entries(n.fields)){var i;let a=t;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),r.fields[s]=o.describe(a)}return r}}A_.prototype=GR.prototype;const bW="/assets/google-0d1cd802.svg",KR=({close:e})=>{function t(){L3(as,n9).then(n=>{e()}).catch(n=>{n.code==="auth/popup-closed-by-user"?ni.error("Popup window was closed by the user"):ni.error("Sorry, couldn't sign in with Google. Please try again later.")})}return k.jsxs(x7,{onClick:t,children:[k.jsx(k7,{src:bW,alt:"Google"}),"Continue with Google"]})},OW=({close:e})=>{const[t,n]=w.useState(!1),[r,i]=w.useState(!1),s=a=>{const{email:l,password:u}=a;d3(as,l,u).then(c=>{e()}).catch(c=>{const d=c.code;d==="auth/user-not-found"?ni.error("User not found. Please check your email or sign up."):d==="auth/wrong-password"?ni.error("Invalid password. Please try again."):ni.error("Sorry, couldn't log in. Please try again later.")})},o=A_().shape({email:oo().email("Invalid email").required("Required"),password:oo().min(8,"Too Short!").required("Required")});return k.jsxs("div",{children:[k.jsx(PR,{children:"Log In"}),k.jsx(RR,{children:"Welcome back! Please enter your credentials to access your account and continue your search for an psychologist."}),k.jsx(xR,{initialValues:{email:"",password:""},onSubmit:s,validationSchema:o,children:({})=>k.jsxs(AR,{children:[k.jsx(Da,{type:"email",name:"email",placeholder:t?"":"Email",onFocus:()=>n(!0)}),k.jsx($a,{name:"email",component:"div"}),k.jsx(Da,{type:"password",name:"password",placeholder:r?"":"Password",onFocus:()=>i(!0)}),k.jsx($a,{name:"password",component:"div"}),k.jsx(bR,{type:"submit",children:"Log in"})]})}),k.jsx(KR,{close:e})]})},NW=({close:e})=>{const[t,n]=w.useState(!1),[r,i]=w.useState(!1),[s,o]=w.useState(!1),a=u=>{const{email:c,password:d}=u;c3(as,c,d).then(h=>{e()}).catch(h=>{const f=h.code;f==="auth/email-already-in-use"?ni.error("This email is already in use. Please try another one."):f==="auth/weak-password"?ni.error("The password is too weak. Please choose a stronger one."):ni.error("Sorry, something went wrong! Please try again later.")})},l=A_().shape({name:oo().min(2,"Too Short!").max(20,"Too Long!").required("Required"),email:oo().email("Invalid email").required("Required"),password:oo().min(8,"Too Short!").required("Required")});return k.jsxs("div",{children:[k.jsx(PR,{children:"Registration"}),k.jsx(RR,{children:"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"}),k.jsx(xR,{initialValues:{name:"",email:"",password:""},onSubmit:a,validationSchema:l,children:({})=>k.jsxs(AR,{children:[k.jsx(Da,{name:"name",placeholder:t?"":"Name",onFocus:()=>n(!0)}),k.jsx($a,{name:"name",component:"div"}),k.jsx(Da,{type:"email",name:"email",placeholder:r?"":"Email",onFocus:()=>i(!0)}),k.jsx($a,{name:"email",component:"div"}),k.jsx(Da,{type:"password",name:"password",placeholder:s?"":"Password",onFocus:()=>o(!0)}),k.jsx($a,{name:"password",component:"div"}),k.jsx(bR,{type:"submit",children:"Sign up"})]})}),k.jsx(KR,{close:e})]})},KW=z.div`
  width: 100%;
  margin: 0 auto;
 

//  
//   width: 100%;
// }
`,qW=z.div`
  margin-top: 78px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 126px;
  justify-content: center;
  @media screen and (max-width: 867px) {
    padding-bottom: 80px;

  }
`,YW=z.div`
  // border-radius: 30px;
  // background: #f8f8f8;
  width: 100%;
  padding-left: 5px;
  max-width: 320px;
  padding-right: 5px;
  /* height: 450px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 767px) {
    /* width: 330px; */
  }

  @media screen and (min-width: 1400px) {
    min-width: 330px;
    max-width: 595px;
    height: 530px;
    display: block;
  }
`,QW=z.h1`
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.02em;
  font-size: 28px;
  margin-top: 50px;
  text-align: center;

  @media screen and (min-width: 1400px) {
    max-width: 548px;
    margin-top: 105px;
    font-size: 48px;
    text-align: start;
    font-weight: 600;
font-size: 75px;

// line-height: 82px; 
line-height: 1.025;
letter-spacing: -0.02em;
color: #191a15;
  }
`,DW=z.span`
  font-style: italic;
  font-weight: 600;
  color: #fc832c;

  &:hover{
    color: ${({theme:e})=>e.primaryBlack};
  }
`,XW=z.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: -0.02em;
  margin-top: 32px;
  margin-bottom: 64px;
  text-align: center;

  @media screen and (min-width: 1440px) {
    width: 471px;
    text-align: start;
  }
`,JW=z(yy)`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.56;
  border-radius: 25px;
  padding: 16px 48px;
  color: ${({theme:e})=>e.orange};
  background: ${({theme:e})=>e.primaryYellow};
  margin-bottom: 20px;

  &:hover {
    color: ${({theme:e})=>e.orange};
    background: ${({theme:e})=>e.lightYellow};
  }

  @media screen and (min-width: 1140px) {
    font-size: 18px;
    padding: 16px 88px;
    width: 267px;
    height: auto;
    text-align: center;
    margin-bottom: 0;
  }
`,ZW=z.div`
  position: relative;
  border-radius: 30px;
  max-width: 464px;
  height: 526px;

  @media screen and (min-width: 1140px) {
    width: 568px;
    height: 530px;
  }
`,eH=z.img`
  // left: 25%;
  // width: 250px;

  // @media screen and (min-width: 1140px) {
 
  //   border-radius: 10px;
  //   width: 464px;
  //   height: 526px;
  // }
  width: 100%;
  object-fit: contain;
`,tH=z.img`
  position: absolute;
  top: 71%;
  left: -6%;
  z-index: 1;
  width: 311px;
height: 118px;

  @media screen and (min-width: 1140px) {
    top: 337px;
    left: -100px;
    width: auto;
  }
`,nH=z.img`
position: absolute;
top: 176px;
    left: -33px;
  z-index: 1;
  @media screen and (max-width: 768px) {
    display: none;
    
  }
`,rH=z.img`
position: absolute;
top: -121px;
left: 463px;
  z-index: 13;
  width: 48px;

  @media screen and (max-width: 768px) {
    display: none;
    
  }
  @media screen and (max-width: 1140px) {
  left: 950%;
  }
`;z.img`

`;const iH=z.div`
position: absolute;
top: 190px;
left: -15px;
  z-index: 1;
  color: #fbfbfb;
  width: 48px;

`;z.div`
background-image: url();
  margin-top: 24px;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  padding-top: 30px;
  padding-bottom: 30px;
  
  @media screen and (min-width: 768px) {
    background-image: url();
    background-size: contain;
    height: 100%;
    padding: 25px;
    margin-left: 0px;
    
  }

  @media screen and (min-width: 1400px) {
    padding: 40px 122px 40px 123px;
    /* width: 1312px; */
    width: 100%;
    margin-left: 30px;
  }
`;z.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
    gap: 0;
    
  }
`;z.li`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;z.p`
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: -0.02em;
  font-size: 20px;

  @media screen and (min-width: 1140px) {
    font-size: 28px;
  }
`;z.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: rgba(18, 20, 23, 0.7);
  white-space: pre-line;
`;z.span`
  display: block;
`;const $W=({authUser:e})=>{const[t,n]=w.useState(!1),[r,i]=w.useState(!1),[s,o]=w.useState(!1),a=()=>{n(d=>!d)};function l(){o(!1),i(!0),a()}function u(){i(!1),o(!0),a()}const c=()=>{n(!1)};return k.jsxs(y9,{children:[k.jsxs(v9,{children:[k.jsxs(_9,{children:[k.jsx("li",{children:k.jsx(vT,{to:"/"})}),k.jsx("li",{children:k.jsxs(w9,{to:"/",children:[k.jsx(DW,{children:"psychologists."}),"services"]})})]}),k.jsx(D7,{authUser:e,onClickLogin:l,onClickRegister:u})]}),k.jsx(E9,{}),k.jsx(w.Suspense,{children:k.jsx(vO,{})}),k.jsx(d5,{position:"top-right",reverseOrder:!1}),t&&k.jsxs(R7,{toggleModal:a,children:[r&&k.jsx(OW,{close:c}),s&&k.jsx(NW,{close:c,name:"",email:"",password:""})]})]})},LW=({children:e,authUser:t})=>t?e:k.jsx(yO,{to:"/"}),KE=w.lazy(()=>u_(()=>import("./HomePage-a6cd2c42.js"),[])),MW=w.lazy(()=>u_(()=>import("./Psychologists-86976487.js"),["assets/Psychologists-86976487.js","assets/Loader-06a81ae0.js"])),FW=w.lazy(()=>u_(()=>import("./FavoritesPage-f3a512f9.js"),["assets/FavoritesPage-f3a512f9.js","assets/Loader-06a81ae0.js"])),jW=()=>{const[e,t]=w.useState(as.currentUser);return w.useEffect(()=>{const n=p3(as,r=>{t(r||null)});return()=>{n()}},[]),k.jsx(wO,{children:k.jsxs(Rs,{path:"/",element:k.jsx($W,{authUser:e}),children:[k.jsx(Rs,{index:!0,element:k.jsx(KE,{})}),k.jsx(Rs,{path:"psychologists",element:k.jsx(MW,{authUser:e})}),k.jsx(Rs,{path:"favorites",element:k.jsx(LW,{authUser:e,children:k.jsx(FW,{authUser:e})})}),k.jsx(Rs,{path:"*",element:k.jsx(KE,{})})]})})},UW={primaryBlack:"#121417",primaryGray:"#8A8A89",primaryYellow:"#f37113",primaryLightYellow:"#FFDC86",lightYellow:"#fc832c",green:"#9FBAAE",lightGreen:"#CBDED3",blue:"#9FB7CE",lightBlue:"#BFD6EA",pink:"#E0A39A",lightPink:"#F2C0BD",orange:"#FBDDC8",lightOrange:"rgba(252, 131, 44, 0.2)"};pp.createRoot(document.getElementById("root")).render(k.jsx(xO,{basename:"/",children:k.jsx(XN,{store:UP,children:k.jsxs(kN,{theme:UW,children:[k.jsx(jW,{}),k.jsx(bN,{})]})})}));export{bR as B,rH as C,$a as E,p7 as F,KW as H,qW as I,DW as L,R7 as M,nH as Q,Lt as R,YW as S,QW as T,ni as _,XW as a,JW as b,ZW as c,eH as d,tH as e,iH as f,HW as g,WW as h,sp as i,k as j,GW as k,A_ as l,oo as m,CW as n,xR as o,AR as p,Da as q,w as r,ip as s,Z1 as t,z as u,VW as v};
