var XR=Object.defineProperty;var JR=(e,t,n)=>t in e?XR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Jh=(e,t,n)=>(JR(e,typeof t!="symbol"?t+"":t,n),n);function ZR(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Cd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var BE={exports:{}},Td={},VE={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kl=Symbol.for("react.element"),eA=Symbol.for("react.portal"),tA=Symbol.for("react.fragment"),nA=Symbol.for("react.strict_mode"),rA=Symbol.for("react.profiler"),iA=Symbol.for("react.provider"),sA=Symbol.for("react.context"),oA=Symbol.for("react.forward_ref"),aA=Symbol.for("react.suspense"),lA=Symbol.for("react.memo"),uA=Symbol.for("react.lazy"),R_=Symbol.iterator;function cA(e){return e===null||typeof e!="object"?null:(e=R_&&e[R_]||e["@@iterator"],typeof e=="function"?e:null)}var WE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},HE=Object.assign,GE={};function Io(e,t,n){this.props=e,this.context=t,this.refs=GE,this.updater=n||WE}Io.prototype.isReactComponent={};Io.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Io.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function KE(){}KE.prototype=Io.prototype;function pm(e,t,n){this.props=e,this.context=t,this.refs=GE,this.updater=n||WE}var gm=pm.prototype=new KE;gm.constructor=pm;HE(gm,Io.prototype);gm.isPureReactComponent=!0;var A_=Array.isArray,qE=Object.prototype.hasOwnProperty,mm={current:null},YE={key:!0,ref:!0,__self:!0,__source:!0};function QE(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)qE.call(t,r)&&!YE.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:kl,type:e,key:s,ref:o,props:i,_owner:mm.current}}function dA(e,t){return{$$typeof:kl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ym(e){return typeof e=="object"&&e!==null&&e.$$typeof===kl}function hA(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var b_=/\/+/g;function Zh(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hA(""+e.key):t.toString(36)}function Du(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case kl:case eA:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Zh(o,0):r,A_(i)?(n="",e!=null&&(n=e.replace(b_,"$&/")+"/"),Du(i,t,n,"",function(u){return u})):i!=null&&(ym(i)&&(i=dA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(b_,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",A_(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Zh(s,a);o+=Du(s,t,n,l,i)}else if(l=cA(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Zh(s,a++),o+=Du(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ru(e,t,n){if(e==null)return e;var r=[],i=0;return Du(e,r,"","",function(s){return t.call(n,s,i++)}),r}function fA(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _t={current:null},$u={transition:null},pA={ReactCurrentDispatcher:_t,ReactCurrentBatchConfig:$u,ReactCurrentOwner:mm};Q.Children={map:ru,forEach:function(e,t,n){ru(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ru(e,function(){t++}),t},toArray:function(e){return ru(e,function(t){return t})||[]},only:function(e){if(!ym(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=Io;Q.Fragment=tA;Q.Profiler=rA;Q.PureComponent=pm;Q.StrictMode=nA;Q.Suspense=aA;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pA;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=HE({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=mm.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)qE.call(t,l)&&!YE.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:kl,type:e.type,key:i,ref:s,props:r,_owner:o}};Q.createContext=function(e){return e={$$typeof:sA,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:iA,_context:e},e.Consumer=e};Q.createElement=QE;Q.createFactory=function(e){var t=QE.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:oA,render:e}};Q.isValidElement=ym;Q.lazy=function(e){return{$$typeof:uA,_payload:{_status:-1,_result:e},_init:fA}};Q.memo=function(e,t){return{$$typeof:lA,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=$u.transition;$u.transition={};try{e()}finally{$u.transition=t}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(e,t){return _t.current.useCallback(e,t)};Q.useContext=function(e){return _t.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return _t.current.useDeferredValue(e)};Q.useEffect=function(e,t){return _t.current.useEffect(e,t)};Q.useId=function(){return _t.current.useId()};Q.useImperativeHandle=function(e,t,n){return _t.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return _t.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return _t.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return _t.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return _t.current.useReducer(e,t,n)};Q.useRef=function(e){return _t.current.useRef(e)};Q.useState=function(e){return _t.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return _t.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return _t.current.useTransition()};Q.version="18.2.0";VE.exports=Q;var w=VE.exports;const Lt=Cd(w),dp=ZR({__proto__:null,default:Lt},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gA=w,mA=Symbol.for("react.element"),yA=Symbol.for("react.fragment"),vA=Object.prototype.hasOwnProperty,_A=gA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wA={key:!0,ref:!0,__self:!0,__source:!0};function XE(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)vA.call(t,r)&&!wA.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:mA,type:e,key:s,ref:o,props:i,_owner:_A.current}}Td.Fragment=yA;Td.jsx=XE;Td.jsxs=XE;BE.exports=Td;var k=BE.exports,hp={},JE={exports:{}},Ht={},ZE={exports:{}},eS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,L){var U=b.length;b.push(L);e:for(;0<U;){var ee=U-1>>>1,X=b[ee];if(0<i(X,L))b[ee]=L,b[U]=X,U=ee;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var L=b[0],U=b.pop();if(U!==L){b[0]=U;e:for(var ee=0,X=b.length,wn=X>>>1;ee<wn;){var ft=2*(ee+1)-1,pt=b[ft],tt=ft+1,Dt=b[tt];if(0>i(pt,U))tt<X&&0>i(Dt,pt)?(b[ee]=Dt,b[tt]=U,ee=tt):(b[ee]=pt,b[ft]=U,ee=ft);else if(tt<X&&0>i(Dt,U))b[ee]=Dt,b[tt]=U,ee=tt;else break e}}return L}function i(b,L){var U=b.sortIndex-L.sortIndex;return U!==0?U:b.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,f=!1,m=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(b){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=b)r(u),L.sortIndex=L.expirationTime,t(l,L);else break;L=n(u)}}function _(b){if(v=!1,y(b),!m)if(n(l)!==null)m=!0,wi(I);else{var L=n(u);L!==null&&zn(_,L.startTime-b)}}function I(b,L){m=!1,v&&(v=!1,g(x),x=-1),f=!0;var U=h;try{for(y(L),d=n(l);d!==null&&(!(d.expirationTime>L)||b&&!H());){var ee=d.callback;if(typeof ee=="function"){d.callback=null,h=d.priorityLevel;var X=ee(d.expirationTime<=L);L=e.unstable_now(),typeof X=="function"?d.callback=X:d===n(l)&&r(l),y(L)}else r(l);d=n(l)}if(d!==null)var wn=!0;else{var ft=n(u);ft!==null&&zn(_,ft.startTime-L),wn=!1}return wn}finally{d=null,h=U,f=!1}}var E=!1,C=null,x=-1,$=5,j=-1;function H(){return!(e.unstable_now()-j<$)}function Ke(){if(C!==null){var b=e.unstable_now();j=b;var L=!0;try{L=C(!0,b)}finally{L?Te():(E=!1,C=null)}}else E=!1}var Te;if(typeof p=="function")Te=function(){p(Ke)};else if(typeof MessageChannel<"u"){var Nt=new MessageChannel,ws=Nt.port2;Nt.port1.onmessage=Ke,Te=function(){ws.postMessage(null)}}else Te=function(){S(Ke,0)};function wi(b){C=b,E||(E=!0,Te())}function zn(b,L){x=S(function(){b(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){m||f||(m=!0,wi(I))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(b){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var U=h;h=L;try{return b()}finally{h=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,L){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var U=h;h=b;try{return L()}finally{h=U}},e.unstable_scheduleCallback=function(b,L,U){var ee=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ee+U:ee):U=ee,b){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=U+X,b={id:c++,callback:L,priorityLevel:b,startTime:U,expirationTime:X,sortIndex:-1},U>ee?(b.sortIndex=U,t(u,b),n(l)===null&&b===n(u)&&(v?(g(x),x=-1):v=!0,zn(_,U-ee))):(b.sortIndex=X,t(l,b),m||f||(m=!0,wi(I))),b},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(b){var L=h;return function(){var U=h;h=L;try{return b.apply(this,arguments)}finally{h=U}}}})(eS);ZE.exports=eS;var EA=ZE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tS=w,Bt=EA;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nS=new Set,Da={};function ls(e,t){io(e,t),io(e+"Capture",t)}function io(e,t){for(Da[e]=t,e=0;e<t.length;e++)nS.add(t[e])}var or=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fp=Object.prototype.hasOwnProperty,SA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,O_={},N_={};function CA(e){return fp.call(N_,e)?!0:fp.call(O_,e)?!1:SA.test(e)?N_[e]=!0:(O_[e]=!0,!1)}function TA(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function IA(e,t,n,r){if(t===null||typeof t>"u"||TA(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function wt(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){et[e]=new wt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];et[t]=new wt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){et[e]=new wt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){et[e]=new wt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){et[e]=new wt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){et[e]=new wt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){et[e]=new wt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){et[e]=new wt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){et[e]=new wt(e,5,!1,e.toLowerCase(),null,!1,!1)});var vm=/[\-:]([a-z])/g;function _m(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(vm,_m);et[t]=new wt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(vm,_m);et[t]=new wt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(vm,_m);et[t]=new wt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){et[e]=new wt(e,1,!1,e.toLowerCase(),null,!1,!1)});et.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){et[e]=new wt(e,1,!1,e.toLowerCase(),null,!0,!0)});function wm(e,t,n,r){var i=et.hasOwnProperty(t)?et[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(IA(t,n,i,r)&&(n=null),r||i===null?CA(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var gr=tS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,iu=Symbol.for("react.element"),Ps=Symbol.for("react.portal"),Rs=Symbol.for("react.fragment"),Em=Symbol.for("react.strict_mode"),pp=Symbol.for("react.profiler"),rS=Symbol.for("react.provider"),iS=Symbol.for("react.context"),Sm=Symbol.for("react.forward_ref"),gp=Symbol.for("react.suspense"),mp=Symbol.for("react.suspense_list"),Cm=Symbol.for("react.memo"),xr=Symbol.for("react.lazy"),sS=Symbol.for("react.offscreen"),D_=Symbol.iterator;function Bo(e){return e===null||typeof e!="object"?null:(e=D_&&e[D_]||e["@@iterator"],typeof e=="function"?e:null)}var Ce=Object.assign,ef;function ra(e){if(ef===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ef=t&&t[1]||""}return`
`+ef+e}var tf=!1;function nf(e,t){if(!e||tf)return"";tf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{tf=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ra(e):""}function xA(e){switch(e.tag){case 5:return ra(e.type);case 16:return ra("Lazy");case 13:return ra("Suspense");case 19:return ra("SuspenseList");case 0:case 2:case 15:return e=nf(e.type,!1),e;case 11:return e=nf(e.type.render,!1),e;case 1:return e=nf(e.type,!0),e;default:return""}}function yp(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rs:return"Fragment";case Ps:return"Portal";case pp:return"Profiler";case Em:return"StrictMode";case gp:return"Suspense";case mp:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case iS:return(e.displayName||"Context")+".Consumer";case rS:return(e._context.displayName||"Context")+".Provider";case Sm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cm:return t=e.displayName||null,t!==null?t:yp(e.type)||"Memo";case xr:t=e._payload,e=e._init;try{return yp(e(t))}catch{}}return null}function kA(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yp(t);case 8:return t===Em?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ti(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oS(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function PA(e){var t=oS(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function su(e){e._valueTracker||(e._valueTracker=PA(e))}function aS(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=oS(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ac(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vp(e,t){var n=t.checked;return Ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $_(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ti(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lS(e,t){t=t.checked,t!=null&&wm(e,"checked",t,!1)}function _p(e,t){lS(e,t);var n=ti(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wp(e,t.type,n):t.hasOwnProperty("defaultValue")&&wp(e,t.type,ti(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function L_(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function wp(e,t,n){(t!=="number"||ac(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ia=Array.isArray;function Ws(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ti(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ep(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return Ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function M_(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(ia(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ti(n)}}function uS(e,t){var n=ti(t.value),r=ti(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function F_(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function cS(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sp(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?cS(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ou,dS=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ou=ou||document.createElement("div"),ou.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ou.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $a(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},RA=["Webkit","ms","Moz","O"];Object.keys(fa).forEach(function(e){RA.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fa[t]=fa[e]})});function hS(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||fa.hasOwnProperty(e)&&fa[e]?(""+t).trim():t+"px"}function fS(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hS(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var AA=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cp(e,t){if(t){if(AA[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Tp(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ip=null;function Tm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xp=null,Hs=null,Gs=null;function j_(e){if(e=Al(e)){if(typeof xp!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Rd(t),xp(e.stateNode,e.type,t))}}function pS(e){Hs?Gs?Gs.push(e):Gs=[e]:Hs=e}function gS(){if(Hs){var e=Hs,t=Gs;if(Gs=Hs=null,j_(e),t)for(e=0;e<t.length;e++)j_(t[e])}}function mS(e,t){return e(t)}function yS(){}var rf=!1;function vS(e,t,n){if(rf)return e(t,n);rf=!0;try{return mS(e,t,n)}finally{rf=!1,(Hs!==null||Gs!==null)&&(yS(),gS())}}function La(e,t){var n=e.stateNode;if(n===null)return null;var r=Rd(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var kp=!1;if(or)try{var Vo={};Object.defineProperty(Vo,"passive",{get:function(){kp=!0}}),window.addEventListener("test",Vo,Vo),window.removeEventListener("test",Vo,Vo)}catch{kp=!1}function bA(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var pa=!1,lc=null,uc=!1,Pp=null,OA={onError:function(e){pa=!0,lc=e}};function NA(e,t,n,r,i,s,o,a,l){pa=!1,lc=null,bA.apply(OA,arguments)}function DA(e,t,n,r,i,s,o,a,l){if(NA.apply(this,arguments),pa){if(pa){var u=lc;pa=!1,lc=null}else throw Error(P(198));uc||(uc=!0,Pp=u)}}function us(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _S(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function U_(e){if(us(e)!==e)throw Error(P(188))}function $A(e){var t=e.alternate;if(!t){if(t=us(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return U_(i),e;if(s===r)return U_(i),t;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function wS(e){return e=$A(e),e!==null?ES(e):null}function ES(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ES(e);if(t!==null)return t;e=e.sibling}return null}var SS=Bt.unstable_scheduleCallback,z_=Bt.unstable_cancelCallback,LA=Bt.unstable_shouldYield,MA=Bt.unstable_requestPaint,ke=Bt.unstable_now,FA=Bt.unstable_getCurrentPriorityLevel,Im=Bt.unstable_ImmediatePriority,CS=Bt.unstable_UserBlockingPriority,cc=Bt.unstable_NormalPriority,jA=Bt.unstable_LowPriority,TS=Bt.unstable_IdlePriority,Id=null,bn=null;function UA(e){if(bn&&typeof bn.onCommitFiberRoot=="function")try{bn.onCommitFiberRoot(Id,e,void 0,(e.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:VA,zA=Math.log,BA=Math.LN2;function VA(e){return e>>>=0,e===0?32:31-(zA(e)/BA|0)|0}var au=64,lu=4194304;function sa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function dc(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=sa(a):(s&=o,s!==0&&(r=sa(s)))}else o=n&~i,o!==0?r=sa(o):s!==0&&(r=sa(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pn(t),i=1<<n,r|=e[n],t&=~i;return r}function WA(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function HA(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-pn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=WA(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Rp(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function IS(){var e=au;return au<<=1,!(au&4194240)&&(au=64),e}function sf(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pn(t),e[t]=n}function GA(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function xm(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var oe=0;function xS(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var kS,km,PS,RS,AS,Ap=!1,uu=[],jr=null,Ur=null,zr=null,Ma=new Map,Fa=new Map,Rr=[],KA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function B_(e,t){switch(e){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":Ma.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fa.delete(t.pointerId)}}function Wo(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Al(t),t!==null&&km(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function qA(e,t,n,r,i){switch(t){case"focusin":return jr=Wo(jr,e,t,n,r,i),!0;case"dragenter":return Ur=Wo(Ur,e,t,n,r,i),!0;case"mouseover":return zr=Wo(zr,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ma.set(s,Wo(Ma.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Fa.set(s,Wo(Fa.get(s)||null,e,t,n,r,i)),!0}return!1}function bS(e){var t=Pi(e.target);if(t!==null){var n=us(t);if(n!==null){if(t=n.tag,t===13){if(t=_S(n),t!==null){e.blockedOn=t,AS(e.priority,function(){PS(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bp(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ip=r,n.target.dispatchEvent(r),Ip=null}else return t=Al(n),t!==null&&km(t),e.blockedOn=n,!1;t.shift()}return!0}function V_(e,t,n){Lu(e)&&n.delete(t)}function YA(){Ap=!1,jr!==null&&Lu(jr)&&(jr=null),Ur!==null&&Lu(Ur)&&(Ur=null),zr!==null&&Lu(zr)&&(zr=null),Ma.forEach(V_),Fa.forEach(V_)}function Ho(e,t){e.blockedOn===t&&(e.blockedOn=null,Ap||(Ap=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,YA)))}function ja(e){function t(i){return Ho(i,e)}if(0<uu.length){Ho(uu[0],e);for(var n=1;n<uu.length;n++){var r=uu[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jr!==null&&Ho(jr,e),Ur!==null&&Ho(Ur,e),zr!==null&&Ho(zr,e),Ma.forEach(t),Fa.forEach(t),n=0;n<Rr.length;n++)r=Rr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rr.length&&(n=Rr[0],n.blockedOn===null);)bS(n),n.blockedOn===null&&Rr.shift()}var Ks=gr.ReactCurrentBatchConfig,hc=!0;function QA(e,t,n,r){var i=oe,s=Ks.transition;Ks.transition=null;try{oe=1,Pm(e,t,n,r)}finally{oe=i,Ks.transition=s}}function XA(e,t,n,r){var i=oe,s=Ks.transition;Ks.transition=null;try{oe=4,Pm(e,t,n,r)}finally{oe=i,Ks.transition=s}}function Pm(e,t,n,r){if(hc){var i=bp(e,t,n,r);if(i===null)gf(e,t,r,fc,n),B_(e,r);else if(qA(i,e,t,n,r))r.stopPropagation();else if(B_(e,r),t&4&&-1<KA.indexOf(e)){for(;i!==null;){var s=Al(i);if(s!==null&&kS(s),s=bp(e,t,n,r),s===null&&gf(e,t,r,fc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else gf(e,t,r,null,n)}}var fc=null;function bp(e,t,n,r){if(fc=null,e=Tm(r),e=Pi(e),e!==null)if(t=us(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_S(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fc=e,null}function OS(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(FA()){case Im:return 1;case CS:return 4;case cc:case jA:return 16;case TS:return 536870912;default:return 16}default:return 16}}var $r=null,Rm=null,Mu=null;function NS(){if(Mu)return Mu;var e,t=Rm,n=t.length,r,i="value"in $r?$r.value:$r.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Mu=i.slice(e,1<r?1-r:void 0)}function Fu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cu(){return!0}function W_(){return!1}function Gt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?cu:W_,this.isPropagationStopped=W_,this}return Ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cu)},persist:function(){},isPersistent:cu}),t}var xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Am=Gt(xo),Rl=Ce({},xo,{view:0,detail:0}),JA=Gt(Rl),of,af,Go,xd=Ce({},Rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Go&&(Go&&e.type==="mousemove"?(of=e.screenX-Go.screenX,af=e.screenY-Go.screenY):af=of=0,Go=e),of)},movementY:function(e){return"movementY"in e?e.movementY:af}}),H_=Gt(xd),ZA=Ce({},xd,{dataTransfer:0}),eb=Gt(ZA),tb=Ce({},Rl,{relatedTarget:0}),lf=Gt(tb),nb=Ce({},xo,{animationName:0,elapsedTime:0,pseudoElement:0}),rb=Gt(nb),ib=Ce({},xo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sb=Gt(ib),ob=Ce({},xo,{data:0}),G_=Gt(ob),ab={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ub={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ub[e])?!!t[e]:!1}function bm(){return cb}var db=Ce({},Rl,{key:function(e){if(e.key){var t=ab[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bm,charCode:function(e){return e.type==="keypress"?Fu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hb=Gt(db),fb=Ce({},xd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),K_=Gt(fb),pb=Ce({},Rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bm}),gb=Gt(pb),mb=Ce({},xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),yb=Gt(mb),vb=Ce({},xd,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_b=Gt(vb),wb=[9,13,27,32],Om=or&&"CompositionEvent"in window,ga=null;or&&"documentMode"in document&&(ga=document.documentMode);var Eb=or&&"TextEvent"in window&&!ga,DS=or&&(!Om||ga&&8<ga&&11>=ga),q_=String.fromCharCode(32),Y_=!1;function $S(e,t){switch(e){case"keyup":return wb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function LS(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var As=!1;function Sb(e,t){switch(e){case"compositionend":return LS(t);case"keypress":return t.which!==32?null:(Y_=!0,q_);case"textInput":return e=t.data,e===q_&&Y_?null:e;default:return null}}function Cb(e,t){if(As)return e==="compositionend"||!Om&&$S(e,t)?(e=NS(),Mu=Rm=$r=null,As=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return DS&&t.locale!=="ko"?null:t.data;default:return null}}var Tb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Q_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tb[e.type]:t==="textarea"}function MS(e,t,n,r){pS(r),t=pc(t,"onChange"),0<t.length&&(n=new Am("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ma=null,Ua=null;function Ib(e){qS(e,0)}function kd(e){var t=Ns(e);if(aS(t))return e}function xb(e,t){if(e==="change")return t}var FS=!1;if(or){var uf;if(or){var cf="oninput"in document;if(!cf){var X_=document.createElement("div");X_.setAttribute("oninput","return;"),cf=typeof X_.oninput=="function"}uf=cf}else uf=!1;FS=uf&&(!document.documentMode||9<document.documentMode)}function J_(){ma&&(ma.detachEvent("onpropertychange",jS),Ua=ma=null)}function jS(e){if(e.propertyName==="value"&&kd(Ua)){var t=[];MS(t,Ua,e,Tm(e)),vS(Ib,t)}}function kb(e,t,n){e==="focusin"?(J_(),ma=t,Ua=n,ma.attachEvent("onpropertychange",jS)):e==="focusout"&&J_()}function Pb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return kd(Ua)}function Rb(e,t){if(e==="click")return kd(t)}function Ab(e,t){if(e==="input"||e==="change")return kd(t)}function bb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vn=typeof Object.is=="function"?Object.is:bb;function za(e,t){if(vn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fp.call(t,i)||!vn(e[i],t[i]))return!1}return!0}function Z_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function e0(e,t){var n=Z_(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Z_(n)}}function US(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?US(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zS(){for(var e=window,t=ac();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ac(e.document)}return t}function Nm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ob(e){var t=zS(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&US(n.ownerDocument.documentElement,n)){if(r!==null&&Nm(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=e0(n,s);var o=e0(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nb=or&&"documentMode"in document&&11>=document.documentMode,bs=null,Op=null,ya=null,Np=!1;function t0(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Np||bs==null||bs!==ac(r)||(r=bs,"selectionStart"in r&&Nm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ya&&za(ya,r)||(ya=r,r=pc(Op,"onSelect"),0<r.length&&(t=new Am("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=bs)))}function du(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Os={animationend:du("Animation","AnimationEnd"),animationiteration:du("Animation","AnimationIteration"),animationstart:du("Animation","AnimationStart"),transitionend:du("Transition","TransitionEnd")},df={},BS={};or&&(BS=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Pd(e){if(df[e])return df[e];if(!Os[e])return e;var t=Os[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in BS)return df[e]=t[n];return e}var VS=Pd("animationend"),WS=Pd("animationiteration"),HS=Pd("animationstart"),GS=Pd("transitionend"),KS=new Map,n0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ci(e,t){KS.set(e,t),ls(t,[e])}for(var hf=0;hf<n0.length;hf++){var ff=n0[hf],Db=ff.toLowerCase(),$b=ff[0].toUpperCase()+ff.slice(1);ci(Db,"on"+$b)}ci(VS,"onAnimationEnd");ci(WS,"onAnimationIteration");ci(HS,"onAnimationStart");ci("dblclick","onDoubleClick");ci("focusin","onFocus");ci("focusout","onBlur");ci(GS,"onTransitionEnd");io("onMouseEnter",["mouseout","mouseover"]);io("onMouseLeave",["mouseout","mouseover"]);io("onPointerEnter",["pointerout","pointerover"]);io("onPointerLeave",["pointerout","pointerover"]);ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ls("onBeforeInput",["compositionend","keypress","textInput","paste"]);ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lb=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function r0(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,DA(r,t,void 0,e),e.currentTarget=null}function qS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;r0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;r0(i,a,u),s=l}}}if(uc)throw e=Pp,uc=!1,Pp=null,e}function fe(e,t){var n=t[Fp];n===void 0&&(n=t[Fp]=new Set);var r=e+"__bubble";n.has(r)||(YS(t,e,2,!1),n.add(r))}function pf(e,t,n){var r=0;t&&(r|=4),YS(n,e,r,t)}var hu="_reactListening"+Math.random().toString(36).slice(2);function Ba(e){if(!e[hu]){e[hu]=!0,nS.forEach(function(n){n!=="selectionchange"&&(Lb.has(n)||pf(n,!1,e),pf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hu]||(t[hu]=!0,pf("selectionchange",!1,t))}}function YS(e,t,n,r){switch(OS(t)){case 1:var i=QA;break;case 4:i=XA;break;default:i=Pm}n=i.bind(null,t,n,e),i=void 0,!kp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function gf(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Pi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}vS(function(){var u=s,c=Tm(n),d=[];e:{var h=KS.get(e);if(h!==void 0){var f=Am,m=e;switch(e){case"keypress":if(Fu(n)===0)break e;case"keydown":case"keyup":f=hb;break;case"focusin":m="focus",f=lf;break;case"focusout":m="blur",f=lf;break;case"beforeblur":case"afterblur":f=lf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=H_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=eb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=gb;break;case VS:case WS:case HS:f=rb;break;case GS:f=yb;break;case"scroll":f=JA;break;case"wheel":f=_b;break;case"copy":case"cut":case"paste":f=sb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=K_}var v=(t&4)!==0,S=!v&&e==="scroll",g=v?h!==null?h+"Capture":null:h;v=[];for(var p=u,y;p!==null;){y=p;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,g!==null&&(_=La(p,g),_!=null&&v.push(Va(p,_,y)))),S)break;p=p.return}0<v.length&&(h=new f(h,m,null,n,c),d.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",h&&n!==Ip&&(m=n.relatedTarget||n.fromElement)&&(Pi(m)||m[ar]))break e;if((f||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,f?(m=n.relatedTarget||n.toElement,f=u,m=m?Pi(m):null,m!==null&&(S=us(m),m!==S||m.tag!==5&&m.tag!==6)&&(m=null)):(f=null,m=u),f!==m)){if(v=H_,_="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=K_,_="onPointerLeave",g="onPointerEnter",p="pointer"),S=f==null?h:Ns(f),y=m==null?h:Ns(m),h=new v(_,p+"leave",f,n,c),h.target=S,h.relatedTarget=y,_=null,Pi(c)===u&&(v=new v(g,p+"enter",m,n,c),v.target=y,v.relatedTarget=S,_=v),S=_,f&&m)t:{for(v=f,g=m,p=0,y=v;y;y=Ss(y))p++;for(y=0,_=g;_;_=Ss(_))y++;for(;0<p-y;)v=Ss(v),p--;for(;0<y-p;)g=Ss(g),y--;for(;p--;){if(v===g||g!==null&&v===g.alternate)break t;v=Ss(v),g=Ss(g)}v=null}else v=null;f!==null&&i0(d,h,f,v,!1),m!==null&&S!==null&&i0(d,S,m,v,!0)}}e:{if(h=u?Ns(u):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var I=xb;else if(Q_(h))if(FS)I=Ab;else{I=Pb;var E=kb}else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=Rb);if(I&&(I=I(e,u))){MS(d,I,n,c);break e}E&&E(e,h,u),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&wp(h,"number",h.value)}switch(E=u?Ns(u):window,e){case"focusin":(Q_(E)||E.contentEditable==="true")&&(bs=E,Op=u,ya=null);break;case"focusout":ya=Op=bs=null;break;case"mousedown":Np=!0;break;case"contextmenu":case"mouseup":case"dragend":Np=!1,t0(d,n,c);break;case"selectionchange":if(Nb)break;case"keydown":case"keyup":t0(d,n,c)}var C;if(Om)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else As?$S(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(DS&&n.locale!=="ko"&&(As||x!=="onCompositionStart"?x==="onCompositionEnd"&&As&&(C=NS()):($r=c,Rm="value"in $r?$r.value:$r.textContent,As=!0)),E=pc(u,x),0<E.length&&(x=new G_(x,e,null,n,c),d.push({event:x,listeners:E}),C?x.data=C:(C=LS(n),C!==null&&(x.data=C)))),(C=Eb?Sb(e,n):Cb(e,n))&&(u=pc(u,"onBeforeInput"),0<u.length&&(c=new G_("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}qS(d,t)})}function Va(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pc(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=La(e,n),s!=null&&r.unshift(Va(e,s,i)),s=La(e,t),s!=null&&r.push(Va(e,s,i))),e=e.return}return r}function Ss(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function i0(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=La(n,s),l!=null&&o.unshift(Va(n,l,a))):i||(l=La(n,s),l!=null&&o.push(Va(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Mb=/\r\n?/g,Fb=/\u0000|\uFFFD/g;function s0(e){return(typeof e=="string"?e:""+e).replace(Mb,`
`).replace(Fb,"")}function fu(e,t,n){if(t=s0(t),s0(e)!==t&&n)throw Error(P(425))}function gc(){}var Dp=null,$p=null;function Lp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Mp=typeof setTimeout=="function"?setTimeout:void 0,jb=typeof clearTimeout=="function"?clearTimeout:void 0,o0=typeof Promise=="function"?Promise:void 0,Ub=typeof queueMicrotask=="function"?queueMicrotask:typeof o0<"u"?function(e){return o0.resolve(null).then(e).catch(zb)}:Mp;function zb(e){setTimeout(function(){throw e})}function mf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ja(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ja(t)}function Br(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function a0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ko=Math.random().toString(36).slice(2),kn="__reactFiber$"+ko,Wa="__reactProps$"+ko,ar="__reactContainer$"+ko,Fp="__reactEvents$"+ko,Bb="__reactListeners$"+ko,Vb="__reactHandles$"+ko;function Pi(e){var t=e[kn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ar]||n[kn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=a0(e);e!==null;){if(n=e[kn])return n;e=a0(e)}return t}e=n,n=e.parentNode}return null}function Al(e){return e=e[kn]||e[ar],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ns(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Rd(e){return e[Wa]||null}var jp=[],Ds=-1;function di(e){return{current:e}}function ve(e){0>Ds||(e.current=jp[Ds],jp[Ds]=null,Ds--)}function he(e,t){Ds++,jp[Ds]=e.current,e.current=t}var ni={},dt=di(ni),kt=di(!1),Wi=ni;function so(e,t){var n=e.type.contextTypes;if(!n)return ni;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(e){return e=e.childContextTypes,e!=null}function mc(){ve(kt),ve(dt)}function l0(e,t,n){if(dt.current!==ni)throw Error(P(168));he(dt,t),he(kt,n)}function QS(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,kA(e)||"Unknown",i));return Ce({},n,r)}function yc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ni,Wi=dt.current,he(dt,e),he(kt,kt.current),!0}function u0(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=QS(e,t,Wi),r.__reactInternalMemoizedMergedChildContext=e,ve(kt),ve(dt),he(dt,e)):ve(kt),he(kt,n)}var qn=null,Ad=!1,yf=!1;function XS(e){qn===null?qn=[e]:qn.push(e)}function Wb(e){Ad=!0,XS(e)}function hi(){if(!yf&&qn!==null){yf=!0;var e=0,t=oe;try{var n=qn;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qn=null,Ad=!1}catch(i){throw qn!==null&&(qn=qn.slice(e+1)),SS(Im,hi),i}finally{oe=t,yf=!1}}return null}var $s=[],Ls=0,vc=null,_c=0,Yt=[],Qt=0,Hi=null,Qn=1,Xn="";function Si(e,t){$s[Ls++]=_c,$s[Ls++]=vc,vc=e,_c=t}function JS(e,t,n){Yt[Qt++]=Qn,Yt[Qt++]=Xn,Yt[Qt++]=Hi,Hi=e;var r=Qn;e=Xn;var i=32-pn(r)-1;r&=~(1<<i),n+=1;var s=32-pn(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Qn=1<<32-pn(t)+i|n<<i|r,Xn=s+e}else Qn=1<<s|n<<i|r,Xn=e}function Dm(e){e.return!==null&&(Si(e,1),JS(e,1,0))}function $m(e){for(;e===vc;)vc=$s[--Ls],$s[Ls]=null,_c=$s[--Ls],$s[Ls]=null;for(;e===Hi;)Hi=Yt[--Qt],Yt[Qt]=null,Xn=Yt[--Qt],Yt[Qt]=null,Qn=Yt[--Qt],Yt[Qt]=null}var zt=null,Mt=null,we=!1,un=null;function ZS(e,t){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function c0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,zt=e,Mt=Br(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,zt=e,Mt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Hi!==null?{id:Qn,overflow:Xn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,zt=e,Mt=null,!0):!1;default:return!1}}function Up(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zp(e){if(we){var t=Mt;if(t){var n=t;if(!c0(e,t)){if(Up(e))throw Error(P(418));t=Br(n.nextSibling);var r=zt;t&&c0(e,t)?ZS(r,n):(e.flags=e.flags&-4097|2,we=!1,zt=e)}}else{if(Up(e))throw Error(P(418));e.flags=e.flags&-4097|2,we=!1,zt=e}}}function d0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;zt=e}function pu(e){if(e!==zt)return!1;if(!we)return d0(e),we=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Lp(e.type,e.memoizedProps)),t&&(t=Mt)){if(Up(e))throw eC(),Error(P(418));for(;t;)ZS(e,t),t=Br(t.nextSibling)}if(d0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Mt=Br(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Mt=null}}else Mt=zt?Br(e.stateNode.nextSibling):null;return!0}function eC(){for(var e=Mt;e;)e=Br(e.nextSibling)}function oo(){Mt=zt=null,we=!1}function Lm(e){un===null?un=[e]:un.push(e)}var Hb=gr.ReactCurrentBatchConfig;function an(e,t){if(e&&e.defaultProps){t=Ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var wc=di(null),Ec=null,Ms=null,Mm=null;function Fm(){Mm=Ms=Ec=null}function jm(e){var t=wc.current;ve(wc),e._currentValue=t}function Bp(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function qs(e,t){Ec=e,Mm=Ms=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(It=!0),e.firstContext=null)}function en(e){var t=e._currentValue;if(Mm!==e)if(e={context:e,memoizedValue:t,next:null},Ms===null){if(Ec===null)throw Error(P(308));Ms=e,Ec.dependencies={lanes:0,firstContext:e}}else Ms=Ms.next=e;return t}var Ri=null;function Um(e){Ri===null?Ri=[e]:Ri.push(e)}function tC(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Um(t)):(n.next=i.next,i.next=n),t.interleaved=n,lr(e,r)}function lr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var kr=!1;function zm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nC(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,lr(e,n)}return i=r.interleaved,i===null?(t.next=t,Um(r)):(t.next=i.next,i.next=t),r.interleaved=t,lr(e,n)}function ju(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xm(e,n)}}function h0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Sc(e,t,n,r){var i=e.updateQueue;kr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,f=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,v=a;switch(h=t,f=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){d=m.call(f,d,h);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,h=typeof m=="function"?m.call(f,d,h):m,h==null)break e;d=Ce({},d,h);break e;case 2:kr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else f={eventTime:f,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=d):c=c.next=f,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Ki|=o,e.lanes=o,e.memoizedState=d}}function f0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var rC=new tS.Component().refs;function Vp(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bd={isMounted:function(e){return(e=e._reactInternals)?us(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=vt(),i=Hr(e),s=rr(r,i);s.payload=t,n!=null&&(s.callback=n),t=Vr(e,s,i),t!==null&&(gn(t,e,i,r),ju(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=vt(),i=Hr(e),s=rr(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Vr(e,s,i),t!==null&&(gn(t,e,i,r),ju(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=vt(),r=Hr(e),i=rr(n,r);i.tag=2,t!=null&&(i.callback=t),t=Vr(e,i,r),t!==null&&(gn(t,e,r,n),ju(t,e,r))}};function p0(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!za(n,r)||!za(i,s):!0}function iC(e,t,n){var r=!1,i=ni,s=t.contextType;return typeof s=="object"&&s!==null?s=en(s):(i=Pt(t)?Wi:dt.current,r=t.contextTypes,s=(r=r!=null)?so(e,i):ni),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bd,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function g0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bd.enqueueReplaceState(t,t.state,null)}function Wp(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=rC,zm(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=en(s):(s=Pt(t)?Wi:dt.current,i.context=so(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Vp(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&bd.enqueueReplaceState(i,i.state,null),Sc(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ko(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===rC&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function gu(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function m0(e){var t=e._init;return t(e._payload)}function sC(e){function t(g,p){if(e){var y=g.deletions;y===null?(g.deletions=[p],g.flags|=16):y.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=Gr(g,p),g.index=0,g.sibling=null,g}function s(g,p,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<p?(g.flags|=2,p):y):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,p,y,_){return p===null||p.tag!==6?(p=Tf(y,g.mode,_),p.return=g,p):(p=i(p,y),p.return=g,p)}function l(g,p,y,_){var I=y.type;return I===Rs?c(g,p,y.props.children,_,y.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===xr&&m0(I)===p.type)?(_=i(p,y.props),_.ref=Ko(g,p,y),_.return=g,_):(_=Hu(y.type,y.key,y.props,null,g.mode,_),_.ref=Ko(g,p,y),_.return=g,_)}function u(g,p,y,_){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=If(y,g.mode,_),p.return=g,p):(p=i(p,y.children||[]),p.return=g,p)}function c(g,p,y,_,I){return p===null||p.tag!==7?(p=Fi(y,g.mode,_,I),p.return=g,p):(p=i(p,y),p.return=g,p)}function d(g,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Tf(""+p,g.mode,y),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case iu:return y=Hu(p.type,p.key,p.props,null,g.mode,y),y.ref=Ko(g,null,p),y.return=g,y;case Ps:return p=If(p,g.mode,y),p.return=g,p;case xr:var _=p._init;return d(g,_(p._payload),y)}if(ia(p)||Bo(p))return p=Fi(p,g.mode,y,null),p.return=g,p;gu(g,p)}return null}function h(g,p,y,_){var I=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return I!==null?null:a(g,p,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case iu:return y.key===I?l(g,p,y,_):null;case Ps:return y.key===I?u(g,p,y,_):null;case xr:return I=y._init,h(g,p,I(y._payload),_)}if(ia(y)||Bo(y))return I!==null?null:c(g,p,y,_,null);gu(g,y)}return null}function f(g,p,y,_,I){if(typeof _=="string"&&_!==""||typeof _=="number")return g=g.get(y)||null,a(p,g,""+_,I);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case iu:return g=g.get(_.key===null?y:_.key)||null,l(p,g,_,I);case Ps:return g=g.get(_.key===null?y:_.key)||null,u(p,g,_,I);case xr:var E=_._init;return f(g,p,y,E(_._payload),I)}if(ia(_)||Bo(_))return g=g.get(y)||null,c(p,g,_,I,null);gu(p,_)}return null}function m(g,p,y,_){for(var I=null,E=null,C=p,x=p=0,$=null;C!==null&&x<y.length;x++){C.index>x?($=C,C=null):$=C.sibling;var j=h(g,C,y[x],_);if(j===null){C===null&&(C=$);break}e&&C&&j.alternate===null&&t(g,C),p=s(j,p,x),E===null?I=j:E.sibling=j,E=j,C=$}if(x===y.length)return n(g,C),we&&Si(g,x),I;if(C===null){for(;x<y.length;x++)C=d(g,y[x],_),C!==null&&(p=s(C,p,x),E===null?I=C:E.sibling=C,E=C);return we&&Si(g,x),I}for(C=r(g,C);x<y.length;x++)$=f(C,g,x,y[x],_),$!==null&&(e&&$.alternate!==null&&C.delete($.key===null?x:$.key),p=s($,p,x),E===null?I=$:E.sibling=$,E=$);return e&&C.forEach(function(H){return t(g,H)}),we&&Si(g,x),I}function v(g,p,y,_){var I=Bo(y);if(typeof I!="function")throw Error(P(150));if(y=I.call(y),y==null)throw Error(P(151));for(var E=I=null,C=p,x=p=0,$=null,j=y.next();C!==null&&!j.done;x++,j=y.next()){C.index>x?($=C,C=null):$=C.sibling;var H=h(g,C,j.value,_);if(H===null){C===null&&(C=$);break}e&&C&&H.alternate===null&&t(g,C),p=s(H,p,x),E===null?I=H:E.sibling=H,E=H,C=$}if(j.done)return n(g,C),we&&Si(g,x),I;if(C===null){for(;!j.done;x++,j=y.next())j=d(g,j.value,_),j!==null&&(p=s(j,p,x),E===null?I=j:E.sibling=j,E=j);return we&&Si(g,x),I}for(C=r(g,C);!j.done;x++,j=y.next())j=f(C,g,x,j.value,_),j!==null&&(e&&j.alternate!==null&&C.delete(j.key===null?x:j.key),p=s(j,p,x),E===null?I=j:E.sibling=j,E=j);return e&&C.forEach(function(Ke){return t(g,Ke)}),we&&Si(g,x),I}function S(g,p,y,_){if(typeof y=="object"&&y!==null&&y.type===Rs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case iu:e:{for(var I=y.key,E=p;E!==null;){if(E.key===I){if(I=y.type,I===Rs){if(E.tag===7){n(g,E.sibling),p=i(E,y.props.children),p.return=g,g=p;break e}}else if(E.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===xr&&m0(I)===E.type){n(g,E.sibling),p=i(E,y.props),p.ref=Ko(g,E,y),p.return=g,g=p;break e}n(g,E);break}else t(g,E);E=E.sibling}y.type===Rs?(p=Fi(y.props.children,g.mode,_,y.key),p.return=g,g=p):(_=Hu(y.type,y.key,y.props,null,g.mode,_),_.ref=Ko(g,p,y),_.return=g,g=_)}return o(g);case Ps:e:{for(E=y.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(g,p.sibling),p=i(p,y.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=If(y,g.mode,_),p.return=g,g=p}return o(g);case xr:return E=y._init,S(g,p,E(y._payload),_)}if(ia(y))return m(g,p,y,_);if(Bo(y))return v(g,p,y,_);gu(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,y),p.return=g,g=p):(n(g,p),p=Tf(y,g.mode,_),p.return=g,g=p),o(g)):n(g,p)}return S}var ao=sC(!0),oC=sC(!1),bl={},On=di(bl),Ha=di(bl),Ga=di(bl);function Ai(e){if(e===bl)throw Error(P(174));return e}function Bm(e,t){switch(he(Ga,t),he(Ha,e),he(On,bl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Sp(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Sp(t,e)}ve(On),he(On,t)}function lo(){ve(On),ve(Ha),ve(Ga)}function aC(e){Ai(Ga.current);var t=Ai(On.current),n=Sp(t,e.type);t!==n&&(he(Ha,e),he(On,n))}function Vm(e){Ha.current===e&&(ve(On),ve(Ha))}var Ee=di(0);function Cc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vf=[];function Wm(){for(var e=0;e<vf.length;e++)vf[e]._workInProgressVersionPrimary=null;vf.length=0}var Uu=gr.ReactCurrentDispatcher,_f=gr.ReactCurrentBatchConfig,Gi=0,Se=null,Oe=null,Fe=null,Tc=!1,va=!1,Ka=0,Gb=0;function nt(){throw Error(P(321))}function Hm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vn(e[n],t[n]))return!1;return!0}function Gm(e,t,n,r,i,s){if(Gi=s,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Uu.current=e===null||e.memoizedState===null?Qb:Xb,e=n(r,i),va){s=0;do{if(va=!1,Ka=0,25<=s)throw Error(P(301));s+=1,Fe=Oe=null,t.updateQueue=null,Uu.current=Jb,e=n(r,i)}while(va)}if(Uu.current=Ic,t=Oe!==null&&Oe.next!==null,Gi=0,Fe=Oe=Se=null,Tc=!1,t)throw Error(P(300));return e}function Km(){var e=Ka!==0;return Ka=0,e}function Tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Se.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function tn(){if(Oe===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=Fe===null?Se.memoizedState:Fe.next;if(t!==null)Fe=t,Oe=e;else{if(e===null)throw Error(P(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Fe===null?Se.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function qa(e,t){return typeof t=="function"?t(e):t}function wf(e){var t=tn(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Gi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Se.lanes|=c,Ki|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,vn(r,t.memoizedState)||(It=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Se.lanes|=s,Ki|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ef(e){var t=tn(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);vn(s,t.memoizedState)||(It=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function lC(){}function uC(e,t){var n=Se,r=tn(),i=t(),s=!vn(r.memoizedState,i);if(s&&(r.memoizedState=i,It=!0),r=r.queue,qm(hC.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,Ya(9,dC.bind(null,n,r,i,t),void 0,null),Ve===null)throw Error(P(349));Gi&30||cC(n,t,i)}return i}function cC(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dC(e,t,n,r){t.value=n,t.getSnapshot=r,fC(t)&&pC(e)}function hC(e,t,n){return n(function(){fC(t)&&pC(e)})}function fC(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vn(e,n)}catch{return!0}}function pC(e){var t=lr(e,1);t!==null&&gn(t,e,1,-1)}function y0(e){var t=Tn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:e},t.queue=e,e=e.dispatch=Yb.bind(null,Se,e),[t.memoizedState,e]}function Ya(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function gC(){return tn().memoizedState}function zu(e,t,n,r){var i=Tn();Se.flags|=e,i.memoizedState=Ya(1|t,n,void 0,r===void 0?null:r)}function Od(e,t,n,r){var i=tn();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&Hm(r,o.deps)){i.memoizedState=Ya(t,n,s,r);return}}Se.flags|=e,i.memoizedState=Ya(1|t,n,s,r)}function v0(e,t){return zu(8390656,8,e,t)}function qm(e,t){return Od(2048,8,e,t)}function mC(e,t){return Od(4,2,e,t)}function yC(e,t){return Od(4,4,e,t)}function vC(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _C(e,t,n){return n=n!=null?n.concat([e]):null,Od(4,4,vC.bind(null,t,e),n)}function Ym(){}function wC(e,t){var n=tn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hm(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function EC(e,t){var n=tn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hm(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function SC(e,t,n){return Gi&21?(vn(n,t)||(n=IS(),Se.lanes|=n,Ki|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,It=!0),e.memoizedState=n)}function Kb(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=_f.transition;_f.transition={};try{e(!1),t()}finally{oe=n,_f.transition=r}}function CC(){return tn().memoizedState}function qb(e,t,n){var r=Hr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},TC(e))IC(t,n);else if(n=tC(e,t,n,r),n!==null){var i=vt();gn(n,e,r,i),xC(n,t,r)}}function Yb(e,t,n){var r=Hr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(TC(e))IC(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,vn(a,o)){var l=t.interleaved;l===null?(i.next=i,Um(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=tC(e,t,i,r),n!==null&&(i=vt(),gn(n,e,r,i),xC(n,t,r))}}function TC(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function IC(e,t){va=Tc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xC(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xm(e,n)}}var Ic={readContext:en,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},Qb={readContext:en,useCallback:function(e,t){return Tn().memoizedState=[e,t===void 0?null:t],e},useContext:en,useEffect:v0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zu(4194308,4,vC.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zu(4194308,4,e,t)},useInsertionEffect:function(e,t){return zu(4,2,e,t)},useMemo:function(e,t){var n=Tn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qb.bind(null,Se,e),[r.memoizedState,e]},useRef:function(e){var t=Tn();return e={current:e},t.memoizedState=e},useState:y0,useDebugValue:Ym,useDeferredValue:function(e){return Tn().memoizedState=e},useTransition:function(){var e=y0(!1),t=e[0];return e=Kb.bind(null,e[1]),Tn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Se,i=Tn();if(we){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),Ve===null)throw Error(P(349));Gi&30||cC(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,v0(hC.bind(null,r,s,e),[e]),r.flags|=2048,Ya(9,dC.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Tn(),t=Ve.identifierPrefix;if(we){var n=Xn,r=Qn;n=(r&~(1<<32-pn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ka++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Gb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Xb={readContext:en,useCallback:wC,useContext:en,useEffect:qm,useImperativeHandle:_C,useInsertionEffect:mC,useLayoutEffect:yC,useMemo:EC,useReducer:wf,useRef:gC,useState:function(){return wf(qa)},useDebugValue:Ym,useDeferredValue:function(e){var t=tn();return SC(t,Oe.memoizedState,e)},useTransition:function(){var e=wf(qa)[0],t=tn().memoizedState;return[e,t]},useMutableSource:lC,useSyncExternalStore:uC,useId:CC,unstable_isNewReconciler:!1},Jb={readContext:en,useCallback:wC,useContext:en,useEffect:qm,useImperativeHandle:_C,useInsertionEffect:mC,useLayoutEffect:yC,useMemo:EC,useReducer:Ef,useRef:gC,useState:function(){return Ef(qa)},useDebugValue:Ym,useDeferredValue:function(e){var t=tn();return Oe===null?t.memoizedState=e:SC(t,Oe.memoizedState,e)},useTransition:function(){var e=Ef(qa)[0],t=tn().memoizedState;return[e,t]},useMutableSource:lC,useSyncExternalStore:uC,useId:CC,unstable_isNewReconciler:!1};function uo(e,t){try{var n="",r=t;do n+=xA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Sf(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Hp(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Zb=typeof WeakMap=="function"?WeakMap:Map;function kC(e,t,n){n=rr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){kc||(kc=!0,tg=r),Hp(e,t)},n}function PC(e,t,n){n=rr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Hp(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Hp(e,t),typeof r!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function _0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zb;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=f2.bind(null,e,t,n),t.then(e,e))}function w0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function E0(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=rr(-1,1),t.tag=2,Vr(n,t,1))),n.lanes|=1),e)}var e2=gr.ReactCurrentOwner,It=!1;function gt(e,t,n,r){t.child=e===null?oC(t,null,n,r):ao(t,e.child,n,r)}function S0(e,t,n,r,i){n=n.render;var s=t.ref;return qs(t,i),r=Gm(e,t,n,r,s,i),n=Km(),e!==null&&!It?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ur(e,t,i)):(we&&n&&Dm(t),t.flags|=1,gt(e,t,r,i),t.child)}function C0(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!ry(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,RC(e,t,s,r,i)):(e=Hu(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:za,n(o,r)&&e.ref===t.ref)return ur(e,t,i)}return t.flags|=1,e=Gr(s,r),e.ref=t.ref,e.return=t,t.child=e}function RC(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(za(s,r)&&e.ref===t.ref)if(It=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(It=!0);else return t.lanes=e.lanes,ur(e,t,i)}return Gp(e,t,n,r,i)}function AC(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(js,$t),$t|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(js,$t),$t|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,he(js,$t),$t|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,he(js,$t),$t|=r;return gt(e,t,i,n),t.child}function bC(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gp(e,t,n,r,i){var s=Pt(n)?Wi:dt.current;return s=so(t,s),qs(t,i),n=Gm(e,t,n,r,s,i),r=Km(),e!==null&&!It?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ur(e,t,i)):(we&&r&&Dm(t),t.flags|=1,gt(e,t,n,i),t.child)}function T0(e,t,n,r,i){if(Pt(n)){var s=!0;yc(t)}else s=!1;if(qs(t,i),t.stateNode===null)Bu(e,t),iC(t,n,r),Wp(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=en(u):(u=Pt(n)?Wi:dt.current,u=so(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&g0(t,o,r,u),kr=!1;var h=t.memoizedState;o.state=h,Sc(t,r,o,i),l=t.memoizedState,a!==r||h!==l||kt.current||kr?(typeof c=="function"&&(Vp(t,n,c,r),l=t.memoizedState),(a=kr||p0(t,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,nC(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:an(t.type,a),o.props=u,d=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=en(l):(l=Pt(n)?Wi:dt.current,l=so(t,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&g0(t,o,r,l),kr=!1,h=t.memoizedState,o.state=h,Sc(t,r,o,i);var m=t.memoizedState;a!==d||h!==m||kt.current||kr?(typeof f=="function"&&(Vp(t,n,f,r),m=t.memoizedState),(u=kr||p0(t,n,u,r,h,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Kp(e,t,n,r,s,i)}function Kp(e,t,n,r,i,s){bC(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&u0(t,n,!1),ur(e,t,s);r=t.stateNode,e2.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=ao(t,e.child,null,s),t.child=ao(t,null,a,s)):gt(e,t,a,s),t.memoizedState=r.state,i&&u0(t,n,!0),t.child}function OC(e){var t=e.stateNode;t.pendingContext?l0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&l0(e,t.context,!1),Bm(e,t.containerInfo)}function I0(e,t,n,r,i){return oo(),Lm(i),t.flags|=256,gt(e,t,n,r),t.child}var qp={dehydrated:null,treeContext:null,retryLane:0};function Yp(e){return{baseLanes:e,cachePool:null,transitions:null}}function NC(e,t,n){var r=t.pendingProps,i=Ee.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(Ee,i&1),e===null)return zp(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$d(o,r,0,null),e=Fi(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Yp(n),t.memoizedState=qp,e):Qm(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return t2(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Gr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Gr(a,s):(s=Fi(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Yp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=qp,r}return s=e.child,e=s.sibling,r=Gr(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qm(e,t){return t=$d({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mu(e,t,n,r){return r!==null&&Lm(r),ao(t,e.child,null,n),e=Qm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function t2(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Sf(Error(P(422))),mu(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=$d({mode:"visible",children:r.children},i,0,null),s=Fi(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&ao(t,e.child,null,o),t.child.memoizedState=Yp(o),t.memoizedState=qp,s);if(!(t.mode&1))return mu(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(P(419)),r=Sf(s,r,void 0),mu(e,t,o,r)}if(a=(o&e.childLanes)!==0,It||a){if(r=Ve,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,lr(e,i),gn(r,e,i,-1))}return ny(),r=Sf(Error(P(421))),mu(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=p2.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Mt=Br(i.nextSibling),zt=t,we=!0,un=null,e!==null&&(Yt[Qt++]=Qn,Yt[Qt++]=Xn,Yt[Qt++]=Hi,Qn=e.id,Xn=e.overflow,Hi=t),t=Qm(t,r.children),t.flags|=4096,t)}function x0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Bp(e.return,t,n)}function Cf(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function DC(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(gt(e,t,r.children,n),r=Ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&x0(e,n,t);else if(e.tag===19)x0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(Ee,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Cc(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Cf(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Cc(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Cf(t,!0,n,null,s);break;case"together":Cf(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bu(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ur(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ki|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Gr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function n2(e,t,n){switch(t.tag){case 3:OC(t),oo();break;case 5:aC(t);break;case 1:Pt(t.type)&&yc(t);break;case 4:Bm(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(wc,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(Ee,Ee.current&1),t.flags|=128,null):n&t.child.childLanes?NC(e,t,n):(he(Ee,Ee.current&1),e=ur(e,t,n),e!==null?e.sibling:null);he(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return DC(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,AC(e,t,n)}return ur(e,t,n)}var $C,Qp,LC,MC;$C=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qp=function(){};LC=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ai(On.current);var s=null;switch(n){case"input":i=vp(e,i),r=vp(e,r),s=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),s=[];break;case"textarea":i=Ep(e,i),r=Ep(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=gc)}Cp(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Da.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Da.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&fe("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};MC=function(e,t,n,r){n!==r&&(t.flags|=4)};function qo(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function r2(e,t,n){var r=t.pendingProps;switch($m(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(t),null;case 1:return Pt(t.type)&&mc(),rt(t),null;case 3:return r=t.stateNode,lo(),ve(kt),ve(dt),Wm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pu(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,un!==null&&(ig(un),un=null))),Qp(e,t),rt(t),null;case 5:Vm(t);var i=Ai(Ga.current);if(n=t.type,e!==null&&t.stateNode!=null)LC(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return rt(t),null}if(e=Ai(On.current),pu(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[kn]=t,r[Wa]=s,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<oa.length;i++)fe(oa[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":$_(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":M_(r,s),fe("invalid",r)}Cp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&fu(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&fu(r.textContent,a,e),i=["children",""+a]):Da.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":su(r),L_(r,s,!0);break;case"textarea":su(r),F_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=gc)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cS(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[kn]=t,e[Wa]=r,$C(e,t,!1,!1),t.stateNode=e;e:{switch(o=Tp(n,r),n){case"dialog":fe("cancel",e),fe("close",e),i=r;break;case"iframe":case"object":case"embed":fe("load",e),i=r;break;case"video":case"audio":for(i=0;i<oa.length;i++)fe(oa[i],e);i=r;break;case"source":fe("error",e),i=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),i=r;break;case"details":fe("toggle",e),i=r;break;case"input":$_(e,r),i=vp(e,r),fe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),fe("invalid",e);break;case"textarea":M_(e,r),i=Ep(e,r),fe("invalid",e);break;default:i=r}Cp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?fS(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&dS(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$a(e,l):typeof l=="number"&&$a(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Da.hasOwnProperty(s)?l!=null&&s==="onScroll"&&fe("scroll",e):l!=null&&wm(e,s,l,o))}switch(n){case"input":su(e),L_(e,r,!1);break;case"textarea":su(e),F_(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ti(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Ws(e,!!r.multiple,s,!1):r.defaultValue!=null&&Ws(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=gc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return rt(t),null;case 6:if(e&&t.stateNode!=null)MC(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=Ai(Ga.current),Ai(On.current),pu(t)){if(r=t.stateNode,n=t.memoizedProps,r[kn]=t,(s=r.nodeValue!==n)&&(e=zt,e!==null))switch(e.tag){case 3:fu(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fu(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kn]=t,t.stateNode=r}return rt(t),null;case 13:if(ve(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(we&&Mt!==null&&t.mode&1&&!(t.flags&128))eC(),oo(),t.flags|=98560,s=!1;else if(s=pu(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(P(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[kn]=t}else oo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;rt(t),s=!1}else un!==null&&(ig(un),un=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ee.current&1?$e===0&&($e=3):ny())),t.updateQueue!==null&&(t.flags|=4),rt(t),null);case 4:return lo(),Qp(e,t),e===null&&Ba(t.stateNode.containerInfo),rt(t),null;case 10:return jm(t.type._context),rt(t),null;case 17:return Pt(t.type)&&mc(),rt(t),null;case 19:if(ve(Ee),s=t.memoizedState,s===null)return rt(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)qo(s,!1);else{if($e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Cc(e),o!==null){for(t.flags|=128,qo(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(Ee,Ee.current&1|2),t.child}e=e.sibling}s.tail!==null&&ke()>co&&(t.flags|=128,r=!0,qo(s,!1),t.lanes=4194304)}else{if(!r)if(e=Cc(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!we)return rt(t),null}else 2*ke()-s.renderingStartTime>co&&n!==1073741824&&(t.flags|=128,r=!0,qo(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ke(),t.sibling=null,n=Ee.current,he(Ee,r?n&1|2:n&1),t):(rt(t),null);case 22:case 23:return ty(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$t&1073741824&&(rt(t),t.subtreeFlags&6&&(t.flags|=8192)):rt(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function i2(e,t){switch($m(t),t.tag){case 1:return Pt(t.type)&&mc(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return lo(),ve(kt),ve(dt),Wm(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vm(t),null;case 13:if(ve(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));oo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(Ee),null;case 4:return lo(),null;case 10:return jm(t.type._context),null;case 22:case 23:return ty(),null;case 24:return null;default:return null}}var yu=!1,st=!1,s2=typeof WeakSet=="function"?WeakSet:Set,N=null;function Fs(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(e,t,r)}else n.current=null}function Xp(e,t,n){try{n()}catch(r){Ie(e,t,r)}}var k0=!1;function o2(e,t){if(Dp=hc,e=zS(),Nm(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=e,h=null;t:for(;;){for(var f;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(f=d.firstChild)!==null;)h=d,d=f;for(;;){if(d===e)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(f=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($p={focusedElem:e,selectionRange:n},hc=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,S=m.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:an(t.type,v),S);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(_){Ie(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return m=k0,k0=!1,m}function _a(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Xp(t,n,s)}i=i.next}while(i!==r)}}function Nd(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Jp(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function FC(e){var t=e.alternate;t!==null&&(e.alternate=null,FC(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kn],delete t[Wa],delete t[Fp],delete t[Bb],delete t[Vb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jC(e){return e.tag===5||e.tag===3||e.tag===4}function P0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jC(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gc));else if(r!==4&&(e=e.child,e!==null))for(Zp(e,t,n),e=e.sibling;e!==null;)Zp(e,t,n),e=e.sibling}function eg(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(eg(e,t,n),e=e.sibling;e!==null;)eg(e,t,n),e=e.sibling}var Ye=null,ln=!1;function Sr(e,t,n){for(n=n.child;n!==null;)UC(e,t,n),n=n.sibling}function UC(e,t,n){if(bn&&typeof bn.onCommitFiberUnmount=="function")try{bn.onCommitFiberUnmount(Id,n)}catch{}switch(n.tag){case 5:st||Fs(n,t);case 6:var r=Ye,i=ln;Ye=null,Sr(e,t,n),Ye=r,ln=i,Ye!==null&&(ln?(e=Ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(ln?(e=Ye,n=n.stateNode,e.nodeType===8?mf(e.parentNode,n):e.nodeType===1&&mf(e,n),ja(e)):mf(Ye,n.stateNode));break;case 4:r=Ye,i=ln,Ye=n.stateNode.containerInfo,ln=!0,Sr(e,t,n),Ye=r,ln=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Xp(n,t,o),i=i.next}while(i!==r)}Sr(e,t,n);break;case 1:if(!st&&(Fs(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ie(n,t,a)}Sr(e,t,n);break;case 21:Sr(e,t,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,Sr(e,t,n),st=r):Sr(e,t,n);break;default:Sr(e,t,n)}}function R0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new s2),t.forEach(function(r){var i=g2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function on(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ye=a.stateNode,ln=!1;break e;case 3:Ye=a.stateNode.containerInfo,ln=!0;break e;case 4:Ye=a.stateNode.containerInfo,ln=!0;break e}a=a.return}if(Ye===null)throw Error(P(160));UC(s,o,i),Ye=null,ln=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ie(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zC(t,e),t=t.sibling}function zC(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(on(t,e),Cn(e),r&4){try{_a(3,e,e.return),Nd(3,e)}catch(v){Ie(e,e.return,v)}try{_a(5,e,e.return)}catch(v){Ie(e,e.return,v)}}break;case 1:on(t,e),Cn(e),r&512&&n!==null&&Fs(n,n.return);break;case 5:if(on(t,e),Cn(e),r&512&&n!==null&&Fs(n,n.return),e.flags&32){var i=e.stateNode;try{$a(i,"")}catch(v){Ie(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&lS(i,s),Tp(a,o);var u=Tp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?fS(i,d):c==="dangerouslySetInnerHTML"?dS(i,d):c==="children"?$a(i,d):wm(i,c,d,u)}switch(a){case"input":_p(i,s);break;case"textarea":uS(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?Ws(i,!!s.multiple,f,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ws(i,!!s.multiple,s.defaultValue,!0):Ws(i,!!s.multiple,s.multiple?[]:"",!1))}i[Wa]=s}catch(v){Ie(e,e.return,v)}}break;case 6:if(on(t,e),Cn(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){Ie(e,e.return,v)}}break;case 3:if(on(t,e),Cn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ja(t.containerInfo)}catch(v){Ie(e,e.return,v)}break;case 4:on(t,e),Cn(e);break;case 13:on(t,e),Cn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Zm=ke())),r&4&&R0(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(st=(u=st)||c,on(t,e),st=u):on(t,e),Cn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(N=e,c=e.child;c!==null;){for(d=N=c;N!==null;){switch(h=N,f=h.child,h.tag){case 0:case 11:case 14:case 15:_a(4,h,h.return);break;case 1:Fs(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(v){Ie(r,n,v)}}break;case 5:Fs(h,h.return);break;case 22:if(h.memoizedState!==null){b0(d);continue}}f!==null?(f.return=h,N=f):b0(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=hS("display",o))}catch(v){Ie(e,e.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Ie(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:on(t,e),Cn(e),r&4&&R0(e);break;case 21:break;default:on(t,e),Cn(e)}}function Cn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jC(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($a(i,""),r.flags&=-33);var s=P0(e);eg(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=P0(e);Zp(e,a,o);break;default:throw Error(P(161))}}catch(l){Ie(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function a2(e,t,n){N=e,BC(e)}function BC(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||yu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||st;a=yu;var u=st;if(yu=o,(st=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?O0(i):l!==null?(l.return=o,N=l):O0(i);for(;s!==null;)N=s,BC(s),s=s.sibling;N=i,yu=a,st=u}A0(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):A0(e)}}function A0(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:st||Nd(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:an(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&f0(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}f0(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ja(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}st||t.flags&512&&Jp(t)}catch(h){Ie(t,t.return,h)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function b0(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function O0(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Nd(4,t)}catch(l){Ie(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Ie(t,i,l)}}var s=t.return;try{Jp(t)}catch(l){Ie(t,s,l)}break;case 5:var o=t.return;try{Jp(t)}catch(l){Ie(t,o,l)}}}catch(l){Ie(t,t.return,l)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var l2=Math.ceil,xc=gr.ReactCurrentDispatcher,Xm=gr.ReactCurrentOwner,Zt=gr.ReactCurrentBatchConfig,Z=0,Ve=null,be=null,Je=0,$t=0,js=di(0),$e=0,Qa=null,Ki=0,Dd=0,Jm=0,wa=null,Ct=null,Zm=0,co=1/0,Gn=null,kc=!1,tg=null,Wr=null,vu=!1,Lr=null,Pc=0,Ea=0,ng=null,Vu=-1,Wu=0;function vt(){return Z&6?ke():Vu!==-1?Vu:Vu=ke()}function Hr(e){return e.mode&1?Z&2&&Je!==0?Je&-Je:Hb.transition!==null?(Wu===0&&(Wu=IS()),Wu):(e=oe,e!==0||(e=window.event,e=e===void 0?16:OS(e.type)),e):1}function gn(e,t,n,r){if(50<Ea)throw Ea=0,ng=null,Error(P(185));Pl(e,n,r),(!(Z&2)||e!==Ve)&&(e===Ve&&(!(Z&2)&&(Dd|=n),$e===4&&Ar(e,Je)),Rt(e,r),n===1&&Z===0&&!(t.mode&1)&&(co=ke()+500,Ad&&hi()))}function Rt(e,t){var n=e.callbackNode;HA(e,t);var r=dc(e,e===Ve?Je:0);if(r===0)n!==null&&z_(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&z_(n),t===1)e.tag===0?Wb(N0.bind(null,e)):XS(N0.bind(null,e)),Ub(function(){!(Z&6)&&hi()}),n=null;else{switch(xS(r)){case 1:n=Im;break;case 4:n=CS;break;case 16:n=cc;break;case 536870912:n=TS;break;default:n=cc}n=QC(n,VC.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function VC(e,t){if(Vu=-1,Wu=0,Z&6)throw Error(P(327));var n=e.callbackNode;if(Ys()&&e.callbackNode!==n)return null;var r=dc(e,e===Ve?Je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Rc(e,r);else{t=r;var i=Z;Z|=2;var s=HC();(Ve!==e||Je!==t)&&(Gn=null,co=ke()+500,Mi(e,t));do try{d2();break}catch(a){WC(e,a)}while(1);Fm(),xc.current=s,Z=i,be!==null?t=0:(Ve=null,Je=0,t=$e)}if(t!==0){if(t===2&&(i=Rp(e),i!==0&&(r=i,t=rg(e,i))),t===1)throw n=Qa,Mi(e,0),Ar(e,r),Rt(e,ke()),n;if(t===6)Ar(e,r);else{if(i=e.current.alternate,!(r&30)&&!u2(i)&&(t=Rc(e,r),t===2&&(s=Rp(e),s!==0&&(r=s,t=rg(e,s))),t===1))throw n=Qa,Mi(e,0),Ar(e,r),Rt(e,ke()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:Ci(e,Ct,Gn);break;case 3:if(Ar(e,r),(r&130023424)===r&&(t=Zm+500-ke(),10<t)){if(dc(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){vt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Mp(Ci.bind(null,e,Ct,Gn),t);break}Ci(e,Ct,Gn);break;case 4:if(Ar(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-pn(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*l2(r/1960))-r,10<r){e.timeoutHandle=Mp(Ci.bind(null,e,Ct,Gn),r);break}Ci(e,Ct,Gn);break;case 5:Ci(e,Ct,Gn);break;default:throw Error(P(329))}}}return Rt(e,ke()),e.callbackNode===n?VC.bind(null,e):null}function rg(e,t){var n=wa;return e.current.memoizedState.isDehydrated&&(Mi(e,t).flags|=256),e=Rc(e,t),e!==2&&(t=Ct,Ct=n,t!==null&&ig(t)),e}function ig(e){Ct===null?Ct=e:Ct.push.apply(Ct,e)}function u2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!vn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ar(e,t){for(t&=~Jm,t&=~Dd,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pn(t),r=1<<n;e[n]=-1,t&=~r}}function N0(e){if(Z&6)throw Error(P(327));Ys();var t=dc(e,0);if(!(t&1))return Rt(e,ke()),null;var n=Rc(e,t);if(e.tag!==0&&n===2){var r=Rp(e);r!==0&&(t=r,n=rg(e,r))}if(n===1)throw n=Qa,Mi(e,0),Ar(e,t),Rt(e,ke()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ci(e,Ct,Gn),Rt(e,ke()),null}function ey(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(co=ke()+500,Ad&&hi())}}function qi(e){Lr!==null&&Lr.tag===0&&!(Z&6)&&Ys();var t=Z;Z|=1;var n=Zt.transition,r=oe;try{if(Zt.transition=null,oe=1,e)return e()}finally{oe=r,Zt.transition=n,Z=t,!(Z&6)&&hi()}}function ty(){$t=js.current,ve(js)}function Mi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,jb(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch($m(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mc();break;case 3:lo(),ve(kt),ve(dt),Wm();break;case 5:Vm(r);break;case 4:lo();break;case 13:ve(Ee);break;case 19:ve(Ee);break;case 10:jm(r.type._context);break;case 22:case 23:ty()}n=n.return}if(Ve=e,be=e=Gr(e.current,null),Je=$t=t,$e=0,Qa=null,Jm=Dd=Ki=0,Ct=wa=null,Ri!==null){for(t=0;t<Ri.length;t++)if(n=Ri[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ri=null}return e}function WC(e,t){do{var n=be;try{if(Fm(),Uu.current=Ic,Tc){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Tc=!1}if(Gi=0,Fe=Oe=Se=null,va=!1,Ka=0,Xm.current=null,n===null||n.return===null){$e=1,Qa=t,be=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Je,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=w0(o);if(f!==null){f.flags&=-257,E0(f,o,a,s,t),f.mode&1&&_0(s,u,t),t=f,l=u;var m=t.updateQueue;if(m===null){var v=new Set;v.add(l),t.updateQueue=v}else m.add(l);break e}else{if(!(t&1)){_0(s,u,t),ny();break e}l=Error(P(426))}}else if(we&&a.mode&1){var S=w0(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),E0(S,o,a,s,t),Lm(uo(l,a));break e}}s=l=uo(l,a),$e!==4&&($e=2),wa===null?wa=[s]:wa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=kC(s,l,t);h0(s,g);break e;case 1:a=l;var p=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Wr===null||!Wr.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var _=PC(s,a,t);h0(s,_);break e}}s=s.return}while(s!==null)}KC(n)}catch(I){t=I,be===n&&n!==null&&(be=n=n.return);continue}break}while(1)}function HC(){var e=xc.current;return xc.current=Ic,e===null?Ic:e}function ny(){($e===0||$e===3||$e===2)&&($e=4),Ve===null||!(Ki&268435455)&&!(Dd&268435455)||Ar(Ve,Je)}function Rc(e,t){var n=Z;Z|=2;var r=HC();(Ve!==e||Je!==t)&&(Gn=null,Mi(e,t));do try{c2();break}catch(i){WC(e,i)}while(1);if(Fm(),Z=n,xc.current=r,be!==null)throw Error(P(261));return Ve=null,Je=0,$e}function c2(){for(;be!==null;)GC(be)}function d2(){for(;be!==null&&!LA();)GC(be)}function GC(e){var t=YC(e.alternate,e,$t);e.memoizedProps=e.pendingProps,t===null?KC(e):be=t,Xm.current=null}function KC(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=i2(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,be=null;return}}else if(n=r2(n,t,$t),n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);$e===0&&($e=5)}function Ci(e,t,n){var r=oe,i=Zt.transition;try{Zt.transition=null,oe=1,h2(e,t,n,r)}finally{Zt.transition=i,oe=r}return null}function h2(e,t,n,r){do Ys();while(Lr!==null);if(Z&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(GA(e,s),e===Ve&&(be=Ve=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vu||(vu=!0,QC(cc,function(){return Ys(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Zt.transition,Zt.transition=null;var o=oe;oe=1;var a=Z;Z|=4,Xm.current=null,o2(e,n),zC(n,e),Ob($p),hc=!!Dp,$p=Dp=null,e.current=n,a2(n),MA(),Z=a,oe=o,Zt.transition=s}else e.current=n;if(vu&&(vu=!1,Lr=e,Pc=i),s=e.pendingLanes,s===0&&(Wr=null),UA(n.stateNode),Rt(e,ke()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(kc)throw kc=!1,e=tg,tg=null,e;return Pc&1&&e.tag!==0&&Ys(),s=e.pendingLanes,s&1?e===ng?Ea++:(Ea=0,ng=e):Ea=0,hi(),null}function Ys(){if(Lr!==null){var e=xS(Pc),t=Zt.transition,n=oe;try{if(Zt.transition=null,oe=16>e?16:e,Lr===null)var r=!1;else{if(e=Lr,Lr=null,Pc=0,Z&6)throw Error(P(331));var i=Z;for(Z|=4,N=e.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:_a(8,c,s)}var d=c.child;if(d!==null)d.return=c,N=d;else for(;N!==null;){c=N;var h=c.sibling,f=c.return;if(FC(c),c===u){N=null;break}if(h!==null){h.return=f,N=h;break}N=f}}}var m=s.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_a(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,N=g;break e}N=s.return}}var p=e.current;for(N=p;N!==null;){o=N;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,N=y;else e:for(o=p;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Nd(9,a)}}catch(I){Ie(a,a.return,I)}if(a===o){N=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,N=_;break e}N=a.return}}if(Z=i,hi(),bn&&typeof bn.onPostCommitFiberRoot=="function")try{bn.onPostCommitFiberRoot(Id,e)}catch{}r=!0}return r}finally{oe=n,Zt.transition=t}}return!1}function D0(e,t,n){t=uo(n,t),t=kC(e,t,1),e=Vr(e,t,1),t=vt(),e!==null&&(Pl(e,1,t),Rt(e,t))}function Ie(e,t,n){if(e.tag===3)D0(e,e,n);else for(;t!==null;){if(t.tag===3){D0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wr===null||!Wr.has(r))){e=uo(n,e),e=PC(t,e,1),t=Vr(t,e,1),e=vt(),t!==null&&(Pl(t,1,e),Rt(t,e));break}}t=t.return}}function f2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=vt(),e.pingedLanes|=e.suspendedLanes&n,Ve===e&&(Je&n)===n&&($e===4||$e===3&&(Je&130023424)===Je&&500>ke()-Zm?Mi(e,0):Jm|=n),Rt(e,t)}function qC(e,t){t===0&&(e.mode&1?(t=lu,lu<<=1,!(lu&130023424)&&(lu=4194304)):t=1);var n=vt();e=lr(e,t),e!==null&&(Pl(e,t,n),Rt(e,n))}function p2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qC(e,n)}function g2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),qC(e,n)}var YC;YC=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||kt.current)It=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return It=!1,n2(e,t,n);It=!!(e.flags&131072)}else It=!1,we&&t.flags&1048576&&JS(t,_c,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bu(e,t),e=t.pendingProps;var i=so(t,dt.current);qs(t,n),i=Gm(null,t,r,e,i,n);var s=Km();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pt(r)?(s=!0,yc(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zm(t),i.updater=bd,t.stateNode=i,i._reactInternals=t,Wp(t,r,e,n),t=Kp(null,t,r,!0,s,n)):(t.tag=0,we&&s&&Dm(t),gt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bu(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=y2(r),e=an(r,e),i){case 0:t=Gp(null,t,r,e,n);break e;case 1:t=T0(null,t,r,e,n);break e;case 11:t=S0(null,t,r,e,n);break e;case 14:t=C0(null,t,r,an(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),Gp(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),T0(e,t,r,i,n);case 3:e:{if(OC(t),e===null)throw Error(P(387));r=t.pendingProps,s=t.memoizedState,i=s.element,nC(e,t),Sc(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=uo(Error(P(423)),t),t=I0(e,t,r,n,i);break e}else if(r!==i){i=uo(Error(P(424)),t),t=I0(e,t,r,n,i);break e}else for(Mt=Br(t.stateNode.containerInfo.firstChild),zt=t,we=!0,un=null,n=oC(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oo(),r===i){t=ur(e,t,n);break e}gt(e,t,r,n)}t=t.child}return t;case 5:return aC(t),e===null&&zp(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Lp(r,i)?o=null:s!==null&&Lp(r,s)&&(t.flags|=32),bC(e,t),gt(e,t,o,n),t.child;case 6:return e===null&&zp(t),null;case 13:return NC(e,t,n);case 4:return Bm(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ao(t,null,r,n):gt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),S0(e,t,r,i,n);case 7:return gt(e,t,t.pendingProps,n),t.child;case 8:return gt(e,t,t.pendingProps.children,n),t.child;case 12:return gt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,he(wc,r._currentValue),r._currentValue=o,s!==null)if(vn(s.value,o)){if(s.children===i.children&&!kt.current){t=ur(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=rr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Bp(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Bp(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}gt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,qs(t,n),i=en(i),r=r(i),t.flags|=1,gt(e,t,r,n),t.child;case 14:return r=t.type,i=an(r,t.pendingProps),i=an(r.type,i),C0(e,t,r,i,n);case 15:return RC(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:an(r,i),Bu(e,t),t.tag=1,Pt(r)?(e=!0,yc(t)):e=!1,qs(t,n),iC(t,r,i),Wp(t,r,i,n),Kp(null,t,r,!0,e,n);case 19:return DC(e,t,n);case 22:return AC(e,t,n)}throw Error(P(156,t.tag))};function QC(e,t){return SS(e,t)}function m2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(e,t,n,r){return new m2(e,t,n,r)}function ry(e){return e=e.prototype,!(!e||!e.isReactComponent)}function y2(e){if(typeof e=="function")return ry(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Sm)return 11;if(e===Cm)return 14}return 2}function Gr(e,t){var n=e.alternate;return n===null?(n=Jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hu(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")ry(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Rs:return Fi(n.children,i,s,t);case Em:o=8,i|=8;break;case pp:return e=Jt(12,n,t,i|2),e.elementType=pp,e.lanes=s,e;case gp:return e=Jt(13,n,t,i),e.elementType=gp,e.lanes=s,e;case mp:return e=Jt(19,n,t,i),e.elementType=mp,e.lanes=s,e;case sS:return $d(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rS:o=10;break e;case iS:o=9;break e;case Sm:o=11;break e;case Cm:o=14;break e;case xr:o=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Jt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Fi(e,t,n,r){return e=Jt(7,e,r,t),e.lanes=n,e}function $d(e,t,n,r){return e=Jt(22,e,r,t),e.elementType=sS,e.lanes=n,e.stateNode={isHidden:!1},e}function Tf(e,t,n){return e=Jt(6,e,null,t),e.lanes=n,e}function If(e,t,n){return t=Jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function v2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sf(0),this.expirationTimes=sf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function iy(e,t,n,r,i,s,o,a,l){return e=new v2(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Jt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zm(s),e}function _2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ps,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function XC(e){if(!e)return ni;e=e._reactInternals;e:{if(us(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Pt(n))return QS(e,n,t)}return t}function JC(e,t,n,r,i,s,o,a,l){return e=iy(n,r,!0,e,i,s,o,a,l),e.context=XC(null),n=e.current,r=vt(),i=Hr(n),s=rr(r,i),s.callback=t??null,Vr(n,s,i),e.current.lanes=i,Pl(e,i,r),Rt(e,r),e}function Ld(e,t,n,r){var i=t.current,s=vt(),o=Hr(i);return n=XC(n),t.context===null?t.context=n:t.pendingContext=n,t=rr(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vr(i,t,o),e!==null&&(gn(e,i,o,s),ju(e,i,o)),o}function Ac(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function sy(e,t){$0(e,t),(e=e.alternate)&&$0(e,t)}function w2(){return null}var ZC=typeof reportError=="function"?reportError:function(e){console.error(e)};function oy(e){this._internalRoot=e}Md.prototype.render=oy.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Ld(e,t,null,null)};Md.prototype.unmount=oy.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qi(function(){Ld(null,e,null,null)}),t[ar]=null}};function Md(e){this._internalRoot=e}Md.prototype.unstable_scheduleHydration=function(e){if(e){var t=RS();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rr.length&&t!==0&&t<Rr[n].priority;n++);Rr.splice(n,0,e),n===0&&bS(e)}};function ay(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function L0(){}function E2(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ac(o);s.call(u)}}var o=JC(t,r,e,0,null,!1,!1,"",L0);return e._reactRootContainer=o,e[ar]=o.current,Ba(e.nodeType===8?e.parentNode:e),qi(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ac(l);a.call(u)}}var l=iy(e,0,!1,null,null,!1,!1,"",L0);return e._reactRootContainer=l,e[ar]=l.current,Ba(e.nodeType===8?e.parentNode:e),qi(function(){Ld(t,l,n,r)}),l}function jd(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ac(o);a.call(l)}}Ld(t,o,e,i)}else o=E2(n,t,e,i,r);return Ac(o)}kS=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=sa(t.pendingLanes);n!==0&&(xm(t,n|1),Rt(t,ke()),!(Z&6)&&(co=ke()+500,hi()))}break;case 13:qi(function(){var r=lr(e,1);if(r!==null){var i=vt();gn(r,e,1,i)}}),sy(e,1)}};km=function(e){if(e.tag===13){var t=lr(e,134217728);if(t!==null){var n=vt();gn(t,e,134217728,n)}sy(e,134217728)}};PS=function(e){if(e.tag===13){var t=Hr(e),n=lr(e,t);if(n!==null){var r=vt();gn(n,e,t,r)}sy(e,t)}};RS=function(){return oe};AS=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};xp=function(e,t,n){switch(t){case"input":if(_p(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Rd(r);if(!i)throw Error(P(90));aS(r),_p(r,i)}}}break;case"textarea":uS(e,n);break;case"select":t=n.value,t!=null&&Ws(e,!!n.multiple,t,!1)}};mS=ey;yS=qi;var S2={usingClientEntryPoint:!1,Events:[Al,Ns,Rd,pS,gS,ey]},Yo={findFiberByHostInstance:Pi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},C2={bundleType:Yo.bundleType,version:Yo.version,rendererPackageName:Yo.rendererPackageName,rendererConfig:Yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wS(e),e===null?null:e.stateNode},findFiberByHostInstance:Yo.findFiberByHostInstance||w2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_u.isDisabled&&_u.supportsFiber)try{Id=_u.inject(C2),bn=_u}catch{}}Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S2;Ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ay(t))throw Error(P(200));return _2(e,t,null,n)};Ht.createRoot=function(e,t){if(!ay(e))throw Error(P(299));var n=!1,r="",i=ZC;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=iy(e,1,!1,null,null,n,!1,r,i),e[ar]=t.current,Ba(e.nodeType===8?e.parentNode:e),new oy(t)};Ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=wS(t),e=e===null?null:e.stateNode,e};Ht.flushSync=function(e){return qi(e)};Ht.hydrate=function(e,t,n){if(!Fd(t))throw Error(P(200));return jd(null,e,t,!0,n)};Ht.hydrateRoot=function(e,t,n){if(!ay(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ZC;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=JC(t,null,e,1,n??null,i,!1,s,o),e[ar]=t.current,Ba(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Md(t)};Ht.render=function(e,t,n){if(!Fd(t))throw Error(P(200));return jd(null,e,t,!1,n)};Ht.unmountComponentAtNode=function(e){if(!Fd(e))throw Error(P(40));return e._reactRootContainer?(qi(function(){jd(null,null,e,!1,function(){e._reactRootContainer=null,e[ar]=null})}),!0):!1};Ht.unstable_batchedUpdates=ey;Ht.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fd(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return jd(e,t,n,!1,r)};Ht.version="18.2.0-next-9e3b772b8-20220608";function eT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eT)}catch(e){console.error(e)}}eT(),JE.exports=Ht;var tT=JE.exports,M0=tT;hp.createRoot=M0.createRoot,hp.hydrateRoot=M0.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xa(){return Xa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xa.apply(this,arguments)}var Mr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Mr||(Mr={}));const F0="popstate";function T2(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return sg("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:bc(i)}return x2(t,n,null,e)}function Pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ly(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function I2(){return Math.random().toString(36).substr(2,8)}function j0(e,t){return{usr:e.state,key:e.key,idx:t}}function sg(e,t,n,r){return n===void 0&&(n=null),Xa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Po(t):t,{state:n,key:t&&t.key||r||I2()})}function bc(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Po(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function x2(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Mr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Xa({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Mr.Pop;let S=c(),g=S==null?null:S-u;u=S,l&&l({action:a,location:v.location,delta:g})}function h(S,g){a=Mr.Push;let p=sg(v.location,S,g);n&&n(p,S),u=c()+1;let y=j0(p,u),_=v.createHref(p);try{o.pushState(y,"",_)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(_)}s&&l&&l({action:a,location:v.location,delta:1})}function f(S,g){a=Mr.Replace;let p=sg(v.location,S,g);n&&n(p,S),u=c();let y=j0(p,u),_=v.createHref(p);o.replaceState(y,"",_),s&&l&&l({action:a,location:v.location,delta:0})}function m(S){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof S=="string"?S:bc(S);return Pe(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let v={get action(){return a},get location(){return e(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(F0,d),l=S,()=>{i.removeEventListener(F0,d),l=null}},createHref(S){return t(i,S)},createURL:m,encodeLocation(S){let g=m(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:f,go(S){return o.go(S)}};return v}var U0;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(U0||(U0={}));function k2(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Po(t):t,i=uy(r.pathname||"/",n);if(i==null)return null;let s=nT(e);P2(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=M2(s[a],U2(i));return o}function nT(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Pe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Kr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),nT(s.children,t,c,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:$2(u,s.index),routesMeta:c})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of rT(s.path))i(s,o,l)}),t}function rT(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=rT(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function P2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:L2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const R2=/^:\w+$/,A2=3,b2=2,O2=1,N2=10,D2=-2,z0=e=>e==="*";function $2(e,t){let n=e.split("/"),r=n.length;return n.some(z0)&&(r+=D2),t&&(r+=b2),n.filter(i=>!z0(i)).reduce((i,s)=>i+(R2.test(s)?A2:s===""?O2:N2),r)}function L2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function M2(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=F2({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Kr([i,c.pathname]),pathnameBase:W2(Kr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Kr([i,c.pathnameBase]))}return s}function F2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=j2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=a[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=z2(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:e}}function j2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ly(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function U2(e){try{return decodeURI(e)}catch(t){return ly(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function z2(e,t){try{return decodeURIComponent(e)}catch(n){return ly(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function uy(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function B2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Po(e):e;return{pathname:n?n.startsWith("/")?n:V2(n,t):t,search:H2(r),hash:G2(i)}}function V2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function xf(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cy(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function dy(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Po(e):(i=Xa({},e),Pe(!i.pathname||!i.pathname.includes("?"),xf("?","pathname","search",i)),Pe(!i.pathname||!i.pathname.includes("#"),xf("#","pathname","hash",i)),Pe(!i.search||!i.search.includes("#"),xf("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=t.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?t[d]:"/"}let l=B2(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Kr=e=>e.join("/").replace(/\/\/+/g,"/"),W2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),H2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,G2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function K2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const iT=["post","put","patch","delete"];new Set(iT);const q2=["get",...iT];new Set(q2);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oc(){return Oc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oc.apply(this,arguments)}const hy=w.createContext(null),sT=w.createContext(null),cs=w.createContext(null),Ud=w.createContext(null),mr=w.createContext({outlet:null,matches:[],isDataRoute:!1}),oT=w.createContext(null);function Y2(e,t){let{relative:n}=t===void 0?{}:t;Ro()||Pe(!1);let{basename:r,navigator:i}=w.useContext(cs),{hash:s,pathname:o,search:a}=fy(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Kr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ro(){return w.useContext(Ud)!=null}function Ao(){return Ro()||Pe(!1),w.useContext(Ud).location}function aT(e){w.useContext(cs).static||w.useLayoutEffect(e)}function lT(){let{isDataRoute:e}=w.useContext(mr);return e?cO():Q2()}function Q2(){Ro()||Pe(!1);let e=w.useContext(hy),{basename:t,navigator:n}=w.useContext(cs),{matches:r}=w.useContext(mr),{pathname:i}=Ao(),s=JSON.stringify(cy(r).map(l=>l.pathnameBase)),o=w.useRef(!1);return aT(()=>{o.current=!0}),w.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=dy(l,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Kr([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,s,i,e])}const X2=w.createContext(null);function J2(e){let t=w.useContext(mr).outlet;return t&&w.createElement(X2.Provider,{value:e},t)}function fy(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=w.useContext(mr),{pathname:i}=Ao(),s=JSON.stringify(cy(r).map(o=>o.pathnameBase));return w.useMemo(()=>dy(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function Z2(e,t){return eO(e,t)}function eO(e,t,n){Ro()||Pe(!1);let{navigator:r}=w.useContext(cs),{matches:i}=w.useContext(mr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Ao(),u;if(t){var c;let v=typeof t=="string"?Po(t):t;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||Pe(!1),u=v}else u=l;let d=u.pathname||"/",h=a==="/"?d:d.slice(a.length)||"/",f=k2(e,{pathname:h}),m=sO(f&&f.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Kr([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Kr([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return t&&m?w.createElement(Ud.Provider,{value:{location:Oc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Mr.Pop}},m):m}function tO(){let e=uO(),t=K2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,s)}const nO=w.createElement(tO,null);class rO extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?w.createElement(mr.Provider,{value:this.props.routeContext},w.createElement(oT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function iO(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(hy);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(mr.Provider,{value:t},r)}function sO(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Pe(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||nO);let h=t.concat(s.slice(0,u+1)),f=()=>{let m;return c?m=d:l.route.Component?m=w.createElement(l.route.Component,null):l.route.element?m=l.route.element:m=a,w.createElement(iO,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:m})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?w.createElement(rO,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var uT=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(uT||{}),Nc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Nc||{});function oO(e){let t=w.useContext(hy);return t||Pe(!1),t}function aO(e){let t=w.useContext(sT);return t||Pe(!1),t}function lO(e){let t=w.useContext(mr);return t||Pe(!1),t}function cT(e){let t=lO(),n=t.matches[t.matches.length-1];return n.route.id||Pe(!1),n.route.id}function uO(){var e;let t=w.useContext(oT),n=aO(Nc.UseRouteError),r=cT(Nc.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function cO(){let{router:e}=oO(uT.UseNavigateStable),t=cT(Nc.UseNavigateStable),n=w.useRef(!1);return aT(()=>{n.current=!0}),w.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Oc({fromRouteId:t},s)))},[e,t])}function dO(e){let{to:t,replace:n,state:r,relative:i}=e;Ro()||Pe(!1);let{matches:s}=w.useContext(mr),{pathname:o}=Ao(),a=lT(),l=dy(t,cy(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return w.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function hO(e){return J2(e.context)}function ks(e){Pe(!1)}function fO(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Mr.Pop,navigator:s,static:o=!1}=e;Ro()&&Pe(!1);let a=t.replace(/^\/*/,"/"),l=w.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Po(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:f="default"}=r,m=w.useMemo(()=>{let v=uy(u,a);return v==null?null:{location:{pathname:v,search:c,hash:d,state:h,key:f},navigationType:i}},[a,u,c,d,h,f,i]);return m==null?null:w.createElement(cs.Provider,{value:l},w.createElement(Ud.Provider,{children:n,value:m}))}function pO(e){let{children:t,location:n}=e;return Z2(og(t),n)}new Promise(()=>{});function og(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let s=[...t,i];if(r.type===w.Fragment){n.push.apply(n,og(r.props.children,s));return}r.type!==ks&&Pe(!1),!r.props.index||!r.props.children||Pe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=og(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dc(){return Dc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Dc.apply(this,arguments)}function dT(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function gO(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function mO(e,t){return e.button===0&&(!t||t==="_self")&&!gO(e)}const yO=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],vO=["aria-current","caseSensitive","className","end","style","to","children"],_O="startTransition",B0=dp[_O];function wO(e){let{basename:t,children:n,future:r,window:i}=e,s=w.useRef();s.current==null&&(s.current=T2({window:i,v5Compat:!0}));let o=s.current,[a,l]=w.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=w.useCallback(d=>{u&&B0?B0(()=>l(d)):l(d)},[l,u]);return w.useLayoutEffect(()=>o.listen(c),[o,c]),w.createElement(fO,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const EO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",SO=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,py=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=t,d=dT(t,yO),{basename:h}=w.useContext(cs),f,m=!1;if(typeof u=="string"&&SO.test(u)&&(f=u,EO))try{let p=new URL(window.location.href),y=u.startsWith("//")?new URL(p.protocol+u):new URL(u),_=uy(y.pathname,h);y.origin===p.origin&&_!=null?u=_+y.search+y.hash:m=!0}catch{}let v=Y2(u,{relative:i}),S=CO(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(p){r&&r(p),p.defaultPrevented||S(p)}return w.createElement("a",Dc({},d,{href:f||v,onClick:m||s?r:g,ref:n,target:l}))}),hT=w.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=t,c=dT(t,vO),d=fy(l,{relative:c.relative}),h=Ao(),f=w.useContext(sT),{navigator:m}=w.useContext(cs),v=m.encodeLocation?m.encodeLocation(d).pathname:d.pathname,S=h.pathname,g=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;i||(S=S.toLowerCase(),g=g?g.toLowerCase():null,v=v.toLowerCase());let p=S===v||!o&&S.startsWith(v)&&S.charAt(v.length)==="/",y=g!=null&&(g===v||!o&&g.startsWith(v)&&g.charAt(v.length)==="/"),_=p?r:void 0,I;typeof s=="function"?I=s({isActive:p,isPending:y}):I=[s,p?"active":null,y?"pending":null].filter(Boolean).join(" ");let E=typeof a=="function"?a({isActive:p,isPending:y}):a;return w.createElement(py,Dc({},c,{"aria-current":_,className:I,ref:n,style:E,to:l}),typeof u=="function"?u({isActive:p,isPending:y}):u)});var V0;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(V0||(V0={}));var W0;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(W0||(W0={}));function CO(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,a=lT(),l=Ao(),u=fy(e,{relative:o});return w.useCallback(c=>{if(mO(c,n)){c.preventDefault();let d=r!==void 0?r:bc(l)===bc(u);a(e,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,e,s,o])}var Be=function(){return Be=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Be.apply(this,arguments)};function ho(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var pe="-ms-",Sa="-moz-",re="-webkit-",fT="comm",zd="rule",gy="decl",TO="@import",pT="@keyframes",IO="@layer",gT=Math.abs,my=String.fromCharCode,ag=Object.assign;function xO(e,t){return je(e,0)^45?(((t<<2^je(e,0))<<2^je(e,1))<<2^je(e,2))<<2^je(e,3):0}function mT(e){return e.trim()}function Kn(e,t){return(e=t.exec(e))?e[0]:e}function W(e,t,n){return e.replace(t,n)}function Gu(e,t,n){return e.indexOf(t,n)}function je(e,t){return e.charCodeAt(t)|0}function fo(e,t,n){return e.slice(t,n)}function xn(e){return e.length}function yT(e){return e.length}function aa(e,t){return t.push(e),e}function kO(e,t){return e.map(t).join("")}function H0(e,t){return e.filter(function(n){return!Kn(n,t)})}var Bd=1,po=1,vT=0,nn=0,Ae=0,bo="";function Vd(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Bd,column:po,length:o,return:"",siblings:a}}function Tr(e,t){return ag(Vd("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Cs(e){for(;e.root;)e=Tr(e.root,{children:[e]});aa(e,e.siblings)}function PO(){return Ae}function RO(){return Ae=nn>0?je(bo,--nn):0,po--,Ae===10&&(po=1,Bd--),Ae}function mn(){return Ae=nn<vT?je(bo,nn++):0,po++,Ae===10&&(po=1,Bd++),Ae}function ji(){return je(bo,nn)}function Ku(){return nn}function Wd(e,t){return fo(bo,e,t)}function lg(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function AO(e){return Bd=po=1,vT=xn(bo=e),nn=0,[]}function bO(e){return bo="",e}function kf(e){return mT(Wd(nn-1,ug(e===91?e+2:e===40?e+1:e)))}function OO(e){for(;(Ae=ji())&&Ae<33;)mn();return lg(e)>2||lg(Ae)>3?"":" "}function NO(e,t){for(;--t&&mn()&&!(Ae<48||Ae>102||Ae>57&&Ae<65||Ae>70&&Ae<97););return Wd(e,Ku()+(t<6&&ji()==32&&mn()==32))}function ug(e){for(;mn();)switch(Ae){case e:return nn;case 34:case 39:e!==34&&e!==39&&ug(Ae);break;case 40:e===41&&ug(e);break;case 92:mn();break}return nn}function DO(e,t){for(;mn()&&e+Ae!==47+10;)if(e+Ae===42+42&&ji()===47)break;return"/*"+Wd(t,nn-1)+"*"+my(e===47?e:mn())}function $O(e){for(;!lg(ji());)mn();return Wd(e,nn)}function LO(e){return bO(qu("",null,null,null,[""],e=AO(e),0,[0],e))}function qu(e,t,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,h=0,f=0,m=0,v=1,S=1,g=1,p=0,y="",_=i,I=s,E=r,C=y;S;)switch(m=p,p=mn()){case 40:if(m!=108&&je(C,d-1)==58){Gu(C+=W(kf(p),"&","&\f"),"&\f",gT(u?a[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:C+=kf(p);break;case 9:case 10:case 13:case 32:C+=OO(m);break;case 92:C+=NO(Ku()-1,7);continue;case 47:switch(ji()){case 42:case 47:aa(MO(DO(mn(),Ku()),t,n,l),l);break;default:C+="/"}break;case 123*v:a[u++]=xn(C)*g;case 125*v:case 59:case 0:switch(p){case 0:case 125:S=0;case 59+c:g==-1&&(C=W(C,/\f/g,"")),f>0&&xn(C)-d&&aa(f>32?K0(C+";",r,n,d-1,l):K0(W(C," ","")+";",r,n,d-2,l),l);break;case 59:C+=";";default:if(aa(E=G0(C,t,n,u,c,i,a,y,_=[],I=[],d,s),s),p===123)if(c===0)qu(C,t,E,E,_,s,d,a,I);else switch(h===99&&je(C,3)===110?100:h){case 100:case 108:case 109:case 115:qu(e,E,E,r&&aa(G0(e,E,E,0,0,i,a,y,i,_=[],d,I),I),i,I,d,a,r?_:I);break;default:qu(C,E,E,E,[""],I,0,a,I)}}u=c=f=0,v=g=1,y=C="",d=o;break;case 58:d=1+xn(C),f=m;default:if(v<1){if(p==123)--v;else if(p==125&&v++==0&&RO()==125)continue}switch(C+=my(p),p*v){case 38:g=c>0?1:(C+="\f",-1);break;case 44:a[u++]=(xn(C)-1)*g,g=1;break;case 64:ji()===45&&(C+=kf(mn())),h=ji(),c=d=xn(y=C+=$O(Ku())),p++;break;case 45:m===45&&xn(C)==2&&(v=0)}}return s}function G0(e,t,n,r,i,s,o,a,l,u,c,d){for(var h=i-1,f=i===0?s:[""],m=yT(f),v=0,S=0,g=0;v<r;++v)for(var p=0,y=fo(e,h+1,h=gT(S=o[v])),_=e;p<m;++p)(_=mT(S>0?f[p]+" "+y:W(y,/&\f/g,f[p])))&&(l[g++]=_);return Vd(e,t,n,i===0?zd:a,l,u,c,d)}function MO(e,t,n,r){return Vd(e,t,n,fT,my(PO()),fo(e,2,-2),0,r)}function K0(e,t,n,r,i){return Vd(e,t,n,gy,fo(e,0,r),fo(e,r+1,-1),r,i)}function _T(e,t,n){switch(xO(e,t)){case 5103:return re+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return re+e+e;case 4789:return Sa+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return re+e+Sa+e+pe+e+e;case 5936:switch(je(e,t+11)){case 114:return re+e+pe+W(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return re+e+pe+W(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return re+e+pe+W(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return re+e+pe+e+e;case 6165:return re+e+pe+"flex-"+e+e;case 5187:return re+e+W(e,/(\w+).+(:[^]+)/,re+"box-$1$2"+pe+"flex-$1$2")+e;case 5443:return re+e+pe+"flex-item-"+W(e,/flex-|-self/g,"")+(Kn(e,/flex-|baseline/)?"":pe+"grid-row-"+W(e,/flex-|-self/g,""))+e;case 4675:return re+e+pe+"flex-line-pack"+W(e,/align-content|flex-|-self/g,"")+e;case 5548:return re+e+pe+W(e,"shrink","negative")+e;case 5292:return re+e+pe+W(e,"basis","preferred-size")+e;case 6060:return re+"box-"+W(e,"-grow","")+re+e+pe+W(e,"grow","positive")+e;case 4554:return re+W(e,/([^-])(transform)/g,"$1"+re+"$2")+e;case 6187:return W(W(W(e,/(zoom-|grab)/,re+"$1"),/(image-set)/,re+"$1"),e,"")+e;case 5495:case 3959:return W(e,/(image-set\([^]*)/,re+"$1$`$1");case 4968:return W(W(e,/(.+:)(flex-)?(.*)/,re+"box-pack:$3"+pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+re+e+e;case 4200:if(!Kn(e,/flex-|baseline/))return pe+"grid-column-align"+fo(e,t)+e;break;case 2592:case 3360:return pe+W(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Kn(r.props,/grid-\w+-end/)})?~Gu(e+(n=n[t].value),"span",0)?e:pe+W(e,"-start","")+e+pe+"grid-row-span:"+(~Gu(n,"span",0)?Kn(n,/\d+/):+Kn(n,/\d+/)-+Kn(e,/\d+/))+";":pe+W(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Kn(r.props,/grid-\w+-start/)})?e:pe+W(W(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return W(e,/(.+)-inline(.+)/,re+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xn(e)-1-t>6)switch(je(e,t+1)){case 109:if(je(e,t+4)!==45)break;case 102:return W(e,/(.+:)(.+)-([^]+)/,"$1"+re+"$2-$3$1"+Sa+(je(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Gu(e,"stretch",0)?_T(W(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return W(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return pe+i+":"+s+u+(o?pe+i+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if(je(e,t+6)===121)return W(e,":",":"+re)+e;break;case 6444:switch(je(e,je(e,14)===45?18:11)){case 120:return W(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+re+(je(e,14)===45?"inline-":"")+"box$3$1"+re+"$2$3$1"+pe+"$2box$3")+e;case 100:return W(e,":",":"+pe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return W(e,"scroll-","scroll-snap-")+e}return e}function $c(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function FO(e,t,n,r){switch(e.type){case IO:if(e.children.length)break;case TO:case gy:return e.return=e.return||e.value;case fT:return"";case pT:return e.return=e.value+"{"+$c(e.children,r)+"}";case zd:if(!xn(e.value=e.props.join(",")))return""}return xn(n=$c(e.children,r))?e.return=e.value+"{"+n+"}":""}function jO(e){var t=yT(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function UO(e){return function(t){t.root||(t=t.return)&&e(t)}}function zO(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case gy:e.return=_T(e.value,e.length,n);return;case pT:return $c([Tr(e,{value:W(e.value,"@","@"+re)})],r);case zd:if(e.length)return kO(n=e.props,function(i){switch(Kn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Cs(Tr(e,{props:[W(i,/:(read-\w+)/,":"+Sa+"$1")]})),Cs(Tr(e,{props:[i]})),ag(e,{props:H0(n,r)});break;case"::placeholder":Cs(Tr(e,{props:[W(i,/:(plac\w+)/,":"+re+"input-$1")]})),Cs(Tr(e,{props:[W(i,/:(plac\w+)/,":"+Sa+"$1")]})),Cs(Tr(e,{props:[W(i,/:(plac\w+)/,pe+"input-$1")]})),Cs(Tr(e,{props:[i]})),ag(e,{props:H0(n,r)});break}return""})}}var BO={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},go=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",wT="active",ET="data-styled-version",Hd="6.1.8",yy=`/*!sc*/
`,vy=typeof window<"u"&&"HTMLElement"in window,VO=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),WO={},Gd=Object.freeze([]),mo=Object.freeze({});function ST(e,t,n){return n===void 0&&(n=mo),e.theme!==n.theme&&e.theme||t||n.theme}var CT=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),HO=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,GO=/(^-|-$)/g;function q0(e){return e.replace(HO,"-").replace(GO,"")}var KO=/(a)(d)/gi,wu=52,Y0=function(e){return String.fromCharCode(e+(e>25?39:97))};function cg(e){var t,n="";for(t=Math.abs(e);t>wu;t=t/wu|0)n=Y0(t%wu)+n;return(Y0(t%wu)+n).replace(KO,"$1-$2")}var Pf,TT=5381,Us=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},IT=function(e){return Us(TT,e)};function _y(e){return cg(IT(e)>>>0)}function qO(e){return e.displayName||e.name||"Component"}function Rf(e){return typeof e=="string"&&!0}var xT=typeof Symbol=="function"&&Symbol.for,kT=xT?Symbol.for("react.memo"):60115,YO=xT?Symbol.for("react.forward_ref"):60112,QO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},XO={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},PT={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},JO=((Pf={})[YO]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Pf[kT]=PT,Pf);function Q0(e){return("type"in(t=e)&&t.type.$$typeof)===kT?PT:"$$typeof"in e?JO[e.$$typeof]:QO;var t}var ZO=Object.defineProperty,eN=Object.getOwnPropertyNames,X0=Object.getOwnPropertySymbols,tN=Object.getOwnPropertyDescriptor,nN=Object.getPrototypeOf,J0=Object.prototype;function RT(e,t,n){if(typeof t!="string"){if(J0){var r=nN(t);r&&r!==J0&&RT(e,r,n)}var i=eN(t);X0&&(i=i.concat(X0(t)));for(var s=Q0(e),o=Q0(t),a=0;a<i.length;++a){var l=i[a];if(!(l in XO||n&&n[l]||o&&l in o||s&&l in s)){var u=tN(t,l);try{ZO(e,l,u)}catch{}}}}return e}function Yi(e){return typeof e=="function"}function wy(e){return typeof e=="object"&&"styledComponentId"in e}function bi(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Lc(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ja(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function dg(e,t,n){if(n===void 0&&(n=!1),!n&&!Ja(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=dg(e[r],t[r]);else if(Ja(t))for(var r in t)e[r]=dg(e[r],t[r]);return e}function Ey(e,t){Object.defineProperty(e,"toString",{value:t})}function Qi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var rN=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw Qi(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(yy);return n},e}(),Yu=new Map,Mc=new Map,Qu=1,Eu=function(e){if(Yu.has(e))return Yu.get(e);for(;Mc.has(Qu);)Qu++;var t=Qu++;return Yu.set(e,t),Mc.set(t,e),t},iN=function(e,t){Qu=t+1,Yu.set(e,t),Mc.set(t,e)},sN="style[".concat(go,"][").concat(ET,'="').concat(Hd,'"]'),oN=new RegExp("^".concat(go,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),aN=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},lN=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(yy),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(oN);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(iN(c,u),aN(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function uN(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var AT=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(go,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(go,wT),r.setAttribute(ET,Hd);var o=uN();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},cN=function(){function e(t){this.element=AT(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Qi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),dN=function(){function e(t){this.element=AT(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),hN=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Z0=vy,fN={isServer:!vy,useCSSOMInjection:!VO},Fc=function(){function e(t,n,r){t===void 0&&(t=mo),n===void 0&&(n={});var i=this;this.options=Be(Be({},fN),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&vy&&Z0&&(Z0=!1,function(s){for(var o=document.querySelectorAll(sN),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(go)!==wT&&(lN(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Ey(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(d){var h=function(g){return Mc.get(g)}(d);if(h===void 0)return"continue";var f=s.names.get(h),m=o.getGroup(d);if(f===void 0||m.length===0)return"continue";var v="".concat(go,".g").concat(d,'[id="').concat(h,'"]'),S="";f!==void 0&&f.forEach(function(g){g.length>0&&(S+="".concat(g,","))}),l+="".concat(m).concat(v,'{content:"').concat(S,'"}').concat(yy)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return Eu(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Be(Be({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new hN(i):r?new cN(i):new dN(i)}(this.options),new rN(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Eu(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Eu(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Eu(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),pN=/&/g,gN=/^\s*\/\/.*$/gm;function bT(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=bT(n.children,t)),n})}function mN(e){var t,n,r,i=e===void 0?mo:e,s=i.options,o=s===void 0?mo:s,a=i.plugins,l=a===void 0?Gd:a,u=function(h,f,m){return m.startsWith(n)&&m.endsWith(n)&&m.replaceAll(n,"").length>0?".".concat(t):h},c=l.slice();c.push(function(h){h.type===zd&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(pN,n).replace(r,u))}),o.prefix&&c.push(zO),c.push(FO);var d=function(h,f,m,v){f===void 0&&(f=""),m===void 0&&(m=""),v===void 0&&(v="&"),t=v,n=f,r=new RegExp("\\".concat(n,"\\b"),"g");var S=h.replace(gN,""),g=LO(m||f?"".concat(m," ").concat(f," { ").concat(S," }"):S);o.namespace&&(g=bT(g,o.namespace));var p=[];return $c(g,jO(c.concat(UO(function(y){return p.push(y)})))),p};return d.hash=l.length?l.reduce(function(h,f){return f.name||Qi(15),Us(h,f.name)},TT).toString():"",d}var yN=new Fc,hg=mN(),OT=Lt.createContext({shouldForwardProp:void 0,styleSheet:yN,stylis:hg});OT.Consumer;Lt.createContext(void 0);function fg(){return w.useContext(OT)}var NT=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=hg);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ey(this,function(){throw Qi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=hg),this.name+t.hash},e}(),vN=function(e){return e>="A"&&e<="Z"};function ew(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;vN(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var DT=function(e){return e==null||e===!1||e===""},$T=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!DT(s)&&(Array.isArray(s)&&s.isCss||Yi(s)?r.push("".concat(ew(i),":"),s,";"):Ja(s)?r.push.apply(r,ho(ho(["".concat(i," {")],$T(s),!1),["}"],!1)):r.push("".concat(ew(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in BO||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function qr(e,t,n,r){if(DT(e))return[];if(wy(e))return[".".concat(e.styledComponentId)];if(Yi(e)){if(!Yi(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return qr(i,t,n,r)}var s;return e instanceof NT?n?(e.inject(n,r),[e.getName(r)]):[e]:Ja(e)?$T(e):Array.isArray(e)?Array.prototype.concat.apply(Gd,e.map(function(o){return qr(o,t,n,r)})):[e.toString()]}function LT(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Yi(n)&&!wy(n))return!1}return!0}var _N=IT(Hd),wN=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&LT(t),this.componentId=n,this.baseHash=Us(_N,n),this.baseStyle=r,Fc.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=bi(i,this.staticRulesId);else{var s=Lc(qr(this.rules,t,n,r)),o=cg(Us(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=bi(i,o),this.staticRulesId=o}else{for(var l=Us(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var h=Lc(qr(d,t,n,r));l=Us(l,h+c),u+=h}}if(u){var f=cg(l>>>0);n.hasNameForId(this.componentId,f)||n.insertRules(this.componentId,f,r(u,".".concat(f),void 0,this.componentId)),i=bi(i,f)}}return i},e}(),Za=Lt.createContext(void 0);Za.Consumer;function EN(e){var t=Lt.useContext(Za),n=w.useMemo(function(){return function(r,i){if(!r)throw Qi(14);if(Yi(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw Qi(8);return i?Be(Be({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Lt.createElement(Za.Provider,{value:n},e.children):null}var Af={};function SN(e,t,n){var r=wy(e),i=e,s=!Rf(e),o=t.attrs,a=o===void 0?Gd:o,l=t.componentId,u=l===void 0?function(_,I){var E=typeof _!="string"?"sc":q0(_);Af[E]=(Af[E]||0)+1;var C="".concat(E,"-").concat(_y(Hd+E+Af[E]));return I?"".concat(I,"-").concat(C):C}(t.displayName,t.parentComponentId):l,c=t.displayName,d=c===void 0?function(_){return Rf(_)?"styled.".concat(_):"Styled(".concat(qO(_),")")}(e):c,h=t.displayName&&t.componentId?"".concat(q0(t.displayName),"-").concat(t.componentId):t.componentId||u,f=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;m=function(_,I){return v(_,I)&&S(_,I)}}else m=v}var g=new wN(n,h,r?i.componentStyle:void 0);function p(_,I){return function(E,C,x){var $=E.attrs,j=E.componentStyle,H=E.defaultProps,Ke=E.foldedComponentIds,Te=E.styledComponentId,Nt=E.target,ws=Lt.useContext(Za),wi=fg(),zn=E.shouldForwardProp||wi.shouldForwardProp,b=ST(C,ws,H)||mo,L=function(pt,tt,Dt){for(var wr,En=Be(Be({},tt),{className:void 0,theme:Dt}),Es=0;Es<pt.length;Es+=1){var Er=Yi(wr=pt[Es])?wr(En):wr;for(var Sn in Er)En[Sn]=Sn==="className"?bi(En[Sn],Er[Sn]):Sn==="style"?Be(Be({},En[Sn]),Er[Sn]):Er[Sn]}return tt.className&&(En.className=bi(En.className,tt.className)),En}($,C,b),U=L.as||Nt,ee={};for(var X in L)L[X]===void 0||X[0]==="$"||X==="as"||X==="theme"&&L.theme===b||(X==="forwardedAs"?ee.as=L.forwardedAs:zn&&!zn(X,U)||(ee[X]=L[X]));var wn=function(pt,tt){var Dt=fg(),wr=pt.generateAndInjectStyles(tt,Dt.styleSheet,Dt.stylis);return wr}(j,L),ft=bi(Ke,Te);return wn&&(ft+=" "+wn),L.className&&(ft+=" "+L.className),ee[Rf(U)&&!CT.has(U)?"class":"className"]=ft,ee.ref=x,w.createElement(U,ee)}(y,_,I)}p.displayName=d;var y=Lt.forwardRef(p);return y.attrs=f,y.componentStyle=g,y.displayName=d,y.shouldForwardProp=m,y.foldedComponentIds=r?bi(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=h,y.target=r?i.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=r?function(I){for(var E=[],C=1;C<arguments.length;C++)E[C-1]=arguments[C];for(var x=0,$=E;x<$.length;x++)dg(I,$[x],!0);return I}({},i.defaultProps,_):_}}),Ey(y,function(){return".".concat(y.styledComponentId)}),s&&RT(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function tw(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var nw=function(e){return Object.assign(e,{isCss:!0})};function Sy(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Yi(e)||Ja(e))return nw(qr(tw(Gd,ho([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?qr(r):nw(qr(tw(r,t)))}function pg(e,t,n){if(n===void 0&&(n=mo),!t)throw Qi(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,Sy.apply(void 0,ho([i],s,!1)))};return r.attrs=function(i){return pg(e,t,Be(Be({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return pg(e,t,Be(Be({},n),i))},r}var MT=function(e){return pg(SN,e)},V=MT;CT.forEach(function(e){V[e]=MT(e)});var CN=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=LT(t),Fc.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var s=i(Lc(qr(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Fc.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function TN(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Sy.apply(void 0,ho([e],t,!1)),i="sc-global-".concat(_y(JSON.stringify(r))),s=new CN(r,i),o=function(l){var u=fg(),c=Lt.useContext(Za),d=Lt.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(d,l,u.styleSheet,c,u.stylis),Lt.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,l,u.styleSheet,c,u.stylis),function(){return s.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,d,h){if(s.isStatic)s.renderStyles(l,WO,c,h);else{var f=Be(Be({},u),{theme:ST(u,d,o.defaultProps)});s.renderStyles(l,f,c,h)}}return Lt.memo(o)}function VW(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Lc(Sy.apply(void 0,ho([e],t,!1))),i=_y(r);return new NT(i,r)}const IN=TN`

  * {
    padding: 0;
    margin: 0;
    border: 0;
  }

  body {
    font-family: 'Inter', sans-serif;
    color: ${({theme:e})=>e.primaryBlack};
    background-color:#ffffff;
    height: 100%;
    width: 100%;
    font-size: 100%;
    line-height: 1;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
`;var FT={exports:{}},jT={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ol=w;function xN(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kN=typeof Object.is=="function"?Object.is:xN,PN=Ol.useSyncExternalStore,RN=Ol.useRef,AN=Ol.useEffect,bN=Ol.useMemo,ON=Ol.useDebugValue;jT.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=RN(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=bN(function(){function l(f){if(!u){if(u=!0,c=f,f=r(f),i!==void 0&&o.hasValue){var m=o.value;if(i(m,f))return d=m}return d=f}if(m=d,kN(c,f))return m;var v=r(f);return i!==void 0&&i(m,v)?m:(c=f,d=v)}var u=!1,c,d,h=n===void 0?null:n;return[function(){return l(t())},h===null?void 0:function(){return l(h())}]},[t,n,r,i]);var a=PN(e,s[0],s[1]);return AN(function(){o.hasValue=!0,o.value=a},[a]),ON(a),a};FT.exports=jT;var NN=FT.exports,Ft="default"in dp?Lt:dp,rw=Symbol.for("react-redux-context"),iw=typeof globalThis<"u"?globalThis:{};function DN(){if(!Ft.createContext)return{};const e=iw[rw]??(iw[rw]=new Map);let t=e.get(Ft.createContext);return t||(t=Ft.createContext(null),e.set(Ft.createContext,t)),t}var ri=DN(),$N=()=>{throw new Error("uSES not initialized!")};function Cy(e=ri){return function(){return Ft.useContext(e)}}var UT=Cy(),zT=$N,LN=e=>{zT=e},MN=(e,t)=>e===t;function FN(e=ri){const t=e===ri?UT:Cy(e),n=(r,i={})=>{const{equalityFn:s=MN,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:c,identityFunctionCheck:d}=t();Ft.useRef(!0);const h=Ft.useCallback({[r.name](m){return r(m)}}[r.name],[r,c,o.stabilityCheck]),f=zT(l.addNestedSub,a.getState,u||a.getState,h,s);return Ft.useDebugValue(f),f};return Object.assign(n,{withTypes:()=>n}),n}var WW=FN();function jN(e){e()}function UN(){let e=null,t=null;return{clear(){e=null,t=null},notify(){jN(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var sw={notify(){},get:()=>[]};function zN(e,t){let n,r=sw,i=0,s=!1;function o(v){c();const S=r.subscribe(v);let g=!1;return()=>{g||(g=!0,S(),d())}}function a(){r.notify()}function l(){m.onStateChange&&m.onStateChange()}function u(){return s}function c(){i++,n||(n=t?t.addNestedSub(l):e.subscribe(l),r=UN())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=sw)}function h(){s||(s=!0,c())}function f(){s&&(s=!1,d())}const m={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:h,tryUnsubscribe:f,getListeners:()=>r};return m}var BN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",VN=BN?Ft.useLayoutEffect:Ft.useEffect;function WN({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=Ft.useMemo(()=>{const u=zN(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[e,r,i,s]),a=Ft.useMemo(()=>e.getState(),[e]);VN(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=t||ri;return Ft.createElement(l.Provider,{value:o},n)}var HN=WN;function BT(e=ri){const t=e===ri?UT:Cy(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var GN=BT();function KN(e=ri){const t=e===ri?GN:BT(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var HW=KN();LN(NN.useSyncExternalStoreWithSelector);function qe(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var qN=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),ow=qN,bf=()=>Math.random().toString(36).substring(7).split("").join("."),YN={INIT:`@@redux/INIT${bf()}`,REPLACE:`@@redux/REPLACE${bf()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${bf()}`},jc=YN;function Ty(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Iy(e,t,n){if(typeof e!="function")throw new Error(qe(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(qe(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(qe(1));return n(Iy)(e,t)}let r=e,i=t,s=new Map,o=s,a=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((S,g)=>{o.set(g,S)}))}function c(){if(l)throw new Error(qe(3));return i}function d(S){if(typeof S!="function")throw new Error(qe(4));if(l)throw new Error(qe(5));let g=!0;u();const p=a++;return o.set(p,S),function(){if(g){if(l)throw new Error(qe(6));g=!1,u(),o.delete(p),s=null}}}function h(S){if(!Ty(S))throw new Error(qe(7));if(typeof S.type>"u")throw new Error(qe(8));if(typeof S.type!="string")throw new Error(qe(17));if(l)throw new Error(qe(9));try{l=!0,i=r(i,S)}finally{l=!1}return(s=o).forEach(p=>{p()}),S}function f(S){if(typeof S!="function")throw new Error(qe(10));r=S,h({type:jc.REPLACE})}function m(){const S=d;return{subscribe(g){if(typeof g!="object"||g===null)throw new Error(qe(11));function p(){const _=g;_.next&&_.next(c())}return p(),{unsubscribe:S(p)}},[ow](){return this}}}return h({type:jc.INIT}),{dispatch:h,subscribe:d,getState:c,replaceReducer:f,[ow]:m}}function QN(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:jc.INIT})>"u")throw new Error(qe(12));if(typeof n(void 0,{type:jc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(qe(13))})}function VT(e){const t=Object.keys(e),n={};for(let s=0;s<t.length;s++){const o=t[s];typeof e[o]=="function"&&(n[o]=e[o])}const r=Object.keys(n);let i;try{QN(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let l=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],h=n[d],f=o[d],m=h(f,a);if(typeof m>"u")throw a&&a.type,new Error(qe(14));u[d]=m,l=l||m!==f}return l=l||r.length!==Object.keys(o).length,l?u:o}}function Uc(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function XN(...e){return t=>(n,r)=>{const i=t(n,r);let s=()=>{throw new Error(qe(15))};const o={getState:i.getState,dispatch:(l,...u)=>s(l,...u)},a=e.map(l=>l(o));return s=Uc(...a)(i.dispatch),{...i,dispatch:s}}}function JN(e){return Ty(e)&&"type"in e&&typeof e.type=="string"}var WT=Symbol.for("immer-nothing"),aw=Symbol.for("immer-draftable"),Vt=Symbol.for("immer-state");function cn(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var yo=Object.getPrototypeOf;function ii(e){return!!e&&!!e[Vt]}function cr(e){var t;return e?HT(e)||Array.isArray(e)||!!e[aw]||!!((t=e.constructor)!=null&&t[aw])||qd(e)||Yd(e):!1}var ZN=Object.prototype.constructor.toString();function HT(e){if(!e||typeof e!="object")return!1;const t=yo(e);if(t===null)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===ZN}function zc(e,t){Kd(e)===0?Reflect.ownKeys(e).forEach(n=>{t(n,e[n],e)}):e.forEach((n,r)=>t(r,n,e))}function Kd(e){const t=e[Vt];return t?t.type_:Array.isArray(e)?1:qd(e)?2:Yd(e)?3:0}function gg(e,t){return Kd(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function GT(e,t,n){const r=Kd(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function eD(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function qd(e){return e instanceof Map}function Yd(e){return e instanceof Set}function Ti(e){return e.copy_||e.base_}function mg(e,t){if(qd(e))return new Map(e);if(Yd(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&HT(e))return yo(e)?{...e}:Object.assign(Object.create(null),e);const n=Object.getOwnPropertyDescriptors(e);delete n[Vt];let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){const s=r[i],o=n[s];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[s]})}return Object.create(yo(e),n)}function xy(e,t=!1){return Qd(e)||ii(e)||!cr(e)||(Kd(e)>1&&(e.set=e.add=e.clear=e.delete=tD),Object.freeze(e),t&&Object.entries(e).forEach(([n,r])=>xy(r,!0))),e}function tD(){cn(2)}function Qd(e){return Object.isFrozen(e)}var nD={};function Xi(e){const t=nD[e];return t||cn(0,e),t}var el;function KT(){return el}function rD(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function lw(e,t){t&&(Xi("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function yg(e){vg(e),e.drafts_.forEach(iD),e.drafts_=null}function vg(e){e===el&&(el=e.parent_)}function uw(e){return el=rD(el,e)}function iD(e){const t=e[Vt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function cw(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[Vt].modified_&&(yg(t),cn(4)),cr(e)&&(e=Bc(t,e),t.parent_||Vc(t,e)),t.patches_&&Xi("Patches").generateReplacementPatches_(n[Vt].base_,e,t.patches_,t.inversePatches_)):e=Bc(t,n,[]),yg(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==WT?e:void 0}function Bc(e,t,n){if(Qd(t))return t;const r=t[Vt];if(!r)return zc(t,(i,s)=>dw(e,r,t,i,s,n)),t;if(r.scope_!==e)return t;if(!r.modified_)return Vc(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),zc(s,(a,l)=>dw(e,r,i,a,l,n,o)),Vc(e,i,!1),n&&e.patches_&&Xi("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function dw(e,t,n,r,i,s,o){if(ii(i)){const a=s&&t&&t.type_!==3&&!gg(t.assigned_,r)?s.concat(r):void 0,l=Bc(e,i,a);if(GT(n,r,l),ii(l))e.canAutoFreeze_=!1;else return}else o&&n.add(i);if(cr(i)&&!Qd(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Bc(e,i),(!t||!t.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&Vc(e,i)}}function Vc(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&xy(t,n)}function sD(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:KT(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=ky;n&&(i=[r],s=tl);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var ky={get(e,t){if(t===Vt)return e;const n=Ti(e);if(!gg(n,t))return oD(e,n,t);const r=n[t];return e.finalized_||!cr(r)?r:r===Of(e.base_,t)?(Nf(e),e.copy_[t]=wg(r,e)):r},has(e,t){return t in Ti(e)},ownKeys(e){return Reflect.ownKeys(Ti(e))},set(e,t,n){const r=qT(Ti(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=Of(Ti(e),t),s=i==null?void 0:i[Vt];if(s&&s.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(eD(n,i)&&(n!==void 0||gg(e.base_,t)))return!0;Nf(e),_g(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Of(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Nf(e),_g(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Ti(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty(){cn(11)},getPrototypeOf(e){return yo(e.base_)},setPrototypeOf(){cn(12)}},tl={};zc(ky,(e,t)=>{tl[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});tl.deleteProperty=function(e,t){return tl.set.call(this,e,t,void 0)};tl.set=function(e,t,n){return ky.set.call(this,e[0],t,n,e[0])};function Of(e,t){const n=e[Vt];return(n?Ti(n):e)[t]}function oD(e,t,n){var i;const r=qT(t,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function qT(e,t){if(!(t in e))return;let n=yo(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=yo(n)}}function _g(e){e.modified_||(e.modified_=!0,e.parent_&&_g(e.parent_))}function Nf(e){e.copy_||(e.copy_=mg(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var aD=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,n,r)=>{if(typeof t=="function"&&typeof n!="function"){const s=n;n=t;const o=this;return function(l=s,...u){return o.produce(l,c=>n.call(this,c,...u))}}typeof n!="function"&&cn(6),r!==void 0&&typeof r!="function"&&cn(7);let i;if(cr(t)){const s=uw(this),o=wg(t,void 0);let a=!0;try{i=n(o),a=!1}finally{a?yg(s):vg(s)}return lw(s,r),cw(i,s)}else if(!t||typeof t!="object"){if(i=n(t),i===void 0&&(i=t),i===WT&&(i=void 0),this.autoFreeze_&&xy(i,!0),r){const s=[],o=[];Xi("Patches").generateReplacementPatches_(t,i,s,o),r(s,o)}return i}else cn(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(o,...a)=>this.produceWithPatches(o,l=>t(l,...a));let r,i;return[this.produce(t,n,(o,a)=>{r=o,i=a}),r,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){cr(e)||cn(8),ii(e)&&(e=YT(e));const t=uw(this),n=wg(e,void 0);return n[Vt].isManual_=!0,vg(t),n}finishDraft(e,t){const n=e&&e[Vt];(!n||!n.isManual_)&&cn(9);const{scope_:r}=n;return lw(r,t),cw(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=Xi("Patches").applyPatches_;return ii(e)?r(e,t):this.produce(e,i=>r(i,t))}};function wg(e,t){const n=qd(e)?Xi("MapSet").proxyMap_(e,t):Yd(e)?Xi("MapSet").proxySet_(e,t):sD(e,t);return(t?t.scope_:KT()).drafts_.push(n),n}function YT(e){return ii(e)||cn(10,e),QT(e)}function QT(e){if(!cr(e)||Qd(e))return e;const t=e[Vt];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=mg(e,t.scope_.immer_.useStrictShallowCopy_)}else n=mg(e,!0);return zc(n,(r,i)=>{GT(n,r,QT(i))}),t&&(t.finalized_=!1),n}var Wt=new aD,XT=Wt.produce;Wt.produceWithPatches.bind(Wt);Wt.setAutoFreeze.bind(Wt);Wt.setUseStrictShallowCopy.bind(Wt);Wt.applyPatches.bind(Wt);Wt.createDraft.bind(Wt);Wt.finishDraft.bind(Wt);function lD(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function uD(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function cD(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${t}[${n}]`)}}var hw=e=>Array.isArray(e)?e:[e];function dD(e){const t=Array.isArray(e[0])?e[0]:e;return cD(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function hD(e,t){const n=[],{length:r}=e;for(let i=0;i<r;i++)n.push(e[i].apply(null,t));return n}var fD=class{constructor(e){this.value=e}deref(){return this.value}},pD=typeof WeakRef<"u"?WeakRef:fD,gD=0,fw=1;function Su(){return{s:gD,v:void 0,o:null,p:null}}function Py(e,t={}){let n=Su();const{resultEqualityCheck:r}=t;let i,s=0;function o(){var d;let a=n;const{length:l}=arguments;for(let h=0,f=l;h<f;h++){const m=arguments[h];if(typeof m=="function"||typeof m=="object"&&m!==null){let v=a.o;v===null&&(a.o=v=new WeakMap);const S=v.get(m);S===void 0?(a=Su(),v.set(m,a)):a=S}else{let v=a.p;v===null&&(a.p=v=new Map);const S=v.get(m);S===void 0?(a=Su(),v.set(m,a)):a=S}}const u=a;let c;if(a.s===fw?c=a.v:(c=e.apply(null,arguments),s++),u.s=fw,r){const h=((d=i==null?void 0:i.deref)==null?void 0:d.call(i))??i;h!=null&&r(h,c)&&(c=h,s!==0&&s--),i=typeof c=="object"&&c!==null||typeof c=="function"?new pD(c):c}return u.v=c,c}return o.clearCache=()=>{n=Su(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function JT(e,...t){const n=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,r=(...i)=>{let s=0,o=0,a,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),lD(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const c={...n,...l},{memoize:d,memoizeOptions:h=[],argsMemoize:f=Py,argsMemoizeOptions:m=[],devModeChecks:v={}}=c,S=hw(h),g=hw(m),p=dD(i),y=d(function(){return s++,u.apply(null,arguments)},...S),_=f(function(){o++;const E=hD(p,arguments);return a=y.apply(null,E),a},...g);return Object.assign(_,{resultFunc:u,memoizedResultFunc:y,dependencies:p,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:d,argsMemoize:f})};return Object.assign(r,{withTypes:()=>r}),r}var mD=JT(Py),yD=Object.assign((e,t=mD)=>{uD(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const n=Object.keys(e),r=n.map(s=>e[s]);return t(r,(...s)=>s.reduce((o,a,l)=>(o[n[l]]=a,o),{}))},{withTypes:()=>yD});function ZT(e){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,e):i(s)}var vD=ZT(),_D=ZT,wD=(...e)=>{const t=JT(...e),n=Object.assign((...r)=>{const i=t(...r),s=(o,...a)=>i(ii(o)?YT(o):o,...a);return Object.assign(s,i),s},{withTypes:()=>n});return n};wD(Py);var ED=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Uc:Uc.apply(null,arguments)},SD=e=>e&&typeof e.match=="function";function ir(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(At(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>JN(r)&&r.type===e,n}var eI=class la extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,la.prototype)}static get[Symbol.species](){return la}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new la(...t[0].concat(this)):new la(...t.concat(this))}};function pw(e){return cr(e)?XT(e,()=>{}):e}function gw(e,t,n){if(e.has(t)){let i=e.get(t);return n.update&&(i=n.update(i,t,e),e.set(t,i)),i}if(!n.insert)throw new Error(At(10));const r=n.insert(t,e);return e.set(t,r),r}function CD(e){return typeof e=="boolean"}var TD=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=t??{};let o=new eI;return n&&(CD(n)?o.push(vD):o.push(_D(n.extraArgument))),o},ID="RTK_autoBatch",tI=e=>t=>{setTimeout(t,e)},xD=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:tI(10),kD=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,s=!1,o=!1;const a=new Set,l=e.type==="tick"?queueMicrotask:e.type==="raf"?xD:e.type==="callback"?e.queueNotification:tI(e.timeout),u=()=>{o=!1,s&&(s=!1,a.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),h=r.subscribe(d);return a.add(c),()=>{h(),a.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[ID]),s=!i,s&&(o||(o=!0,l(u))),r.dispatch(c)}finally{i=!0}}})},PD=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new eI(e);return r&&i.push(kD(typeof r=="object"?r:void 0)),i},RD=!0;function AD(e){const t=TD(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=e||{};let a;if(typeof n=="function")a=n;else if(Ty(n))a=VT(n);else throw new Error(At(1));let l;typeof r=="function"?l=r(t):l=t();let u=Uc;i&&(u=ED({trace:!RD,...typeof i=="object"&&i}));const c=XN(...l),d=PD(c);let h=typeof o=="function"?o(d):d();const f=u(...h);return Iy(a,s,f)}function nI(e){const t={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(At(28));if(a in t)throw new Error(At(29));return t[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return e(i),[t,n,r]}function bD(e){return typeof e=="function"}function OD(e,t){let[n,r,i]=nI(t),s;if(bD(e))s=()=>pw(e());else{const a=pw(e);s=()=>a}function o(a=s(),l){let u=[n[l.type],...r.filter(({matcher:c})=>c(l)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(ii(c)){const f=d(c,l);return f===void 0?c:f}else{if(cr(c))return XT(c,h=>d(h,l));{const h=d(c,l);if(h===void 0){if(c===null)return c;throw new Error(At(9))}return h}}return c},a)}return o.getInitialState=s,o}var ND="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",rI=(e=21)=>{let t="",n=e;for(;n--;)t+=ND[Math.random()*64|0];return t},DD=(e,t)=>SD(e)?e.match(t):e(t);function $D(...e){return t=>e.some(n=>DD(n,t))}var LD=["name","message","stack","code"],Df=class{constructor(e,t){Jh(this,"_type");this.payload=e,this.meta=t}},mw=class{constructor(e,t){Jh(this,"_type");this.payload=e,this.meta=t}},MD=e=>{if(typeof e=="object"&&e!==null){const t={};for(const n of LD)typeof e[n]=="string"&&(t[n]=e[n]);return t}return{message:String(e)}},Xd=(()=>{function e(t,n,r){const i=ir(t+"/fulfilled",(l,u,c,d)=>({payload:l,meta:{...d||{},arg:c,requestId:u,requestStatus:"fulfilled"}})),s=ir(t+"/pending",(l,u,c)=>({payload:void 0,meta:{...c||{},arg:u,requestId:l,requestStatus:"pending"}})),o=ir(t+"/rejected",(l,u,c,d,h)=>({payload:d,error:(r&&r.serializeError||MD)(l||"Rejected"),meta:{...h||{},arg:c,requestId:u,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function a(l){return(u,c,d)=>{const h=r!=null&&r.idGenerator?r.idGenerator(l):rI(),f=new AbortController;let m,v;function S(p){v=p,f.abort()}const g=async function(){var _,I;let p;try{let E=(_=r==null?void 0:r.condition)==null?void 0:_.call(r,l,{getState:c,extra:d});if(jD(E)&&(E=await E),E===!1||f.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const C=new Promise((x,$)=>{m=()=>{$({name:"AbortError",message:v||"Aborted"})},f.signal.addEventListener("abort",m)});u(s(h,l,(I=r==null?void 0:r.getPendingMeta)==null?void 0:I.call(r,{requestId:h,arg:l},{getState:c,extra:d}))),p=await Promise.race([C,Promise.resolve(n(l,{dispatch:u,getState:c,extra:d,requestId:h,signal:f.signal,abort:S,rejectWithValue:(x,$)=>new Df(x,$),fulfillWithValue:(x,$)=>new mw(x,$)})).then(x=>{if(x instanceof Df)throw x;return x instanceof mw?i(x.payload,h,l,x.meta):i(x,h,l)})])}catch(E){p=E instanceof Df?o(null,h,l,E.payload,E.meta):o(E,h,l)}finally{m&&f.signal.removeEventListener("abort",m)}return r&&!r.dispatchConditionRejection&&o.match(p)&&p.meta.condition||u(p),p}();return Object.assign(g,{abort:S,requestId:h,arg:l,unwrap(){return g.then(FD)}})}}return Object.assign(a,{pending:s,rejected:o,fulfilled:i,settled:$D(o,i),typePrefix:t})}return e.withTypes=()=>e,e})();function FD(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function jD(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var UD=Symbol.for("rtk-slice-createasyncthunk");function zD(e,t){return`${e}/${t}`}function BD({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[UD];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(At(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(WD()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(y,_){const I=typeof y=="string"?y:y.type;if(!I)throw new Error(At(12));if(I in u.sliceCaseReducersByType)throw new Error(At(13));return u.sliceCaseReducersByType[I]=_,c},addMatcher(y,_){return u.sliceMatchers.push({matcher:y,reducer:_}),c},exposeAction(y,_){return u.actionCreators[y]=_,c},exposeCaseReducer(y,_){return u.sliceCaseReducersByName[y]=_,c}};l.forEach(y=>{const _=a[y],I={reducerName:y,type:zD(s,y),createNotation:typeof i.reducers=="function"};GD(_)?qD(I,_,c,t):HD(I,_,c)});function d(){const[y={},_=[],I=void 0]=typeof i.extraReducers=="function"?nI(i.extraReducers):[i.extraReducers],E={...y,...u.sliceCaseReducersByType};return OD(i.initialState,C=>{for(let x in E)C.addCase(x,E[x]);for(let x of u.sliceMatchers)C.addMatcher(x.matcher,x.reducer);for(let x of _)C.addMatcher(x.matcher,x.reducer);I&&C.addDefaultCase(I)})}const h=y=>y,f=new Map;let m;function v(y,_){return m||(m=d()),m(y,_)}function S(){return m||(m=d()),m.getInitialState()}function g(y,_=!1){function I(C){let x=C[y];return typeof x>"u"&&_&&(x=S()),x}function E(C=h){const x=gw(f,_,{insert:()=>new WeakMap});return gw(x,C,{insert:()=>{const $={};for(const[j,H]of Object.entries(i.selectors??{}))$[j]=VD(H,C,S,_);return $}})}return{reducerPath:y,getSelectors:E,get selectors(){return E(I)},selectSlice:I}}const p={name:s,reducer:v,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:S,...g(o),injectInto(y,{reducerPath:_,...I}={}){const E=_??o;return y.inject({reducerPath:E,reducer:v},I),{...p,...g(E,!0)}}};return p}}function VD(e,t,n,r){function i(s,...o){let a=t(s);return typeof a>"u"&&r&&(a=n()),e(a,...o)}return i.unwrapped=e,i}var iI=BD();function WD(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function HD({type:e,reducerName:t,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!KD(r))throw new Error(At(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(e,s).exposeCaseReducer(t,s).exposeAction(t,o?ir(e,o):ir(e))}function GD(e){return e._reducerDefinitionType==="asyncThunk"}function KD(e){return e._reducerDefinitionType==="reducerWithPrepare"}function qD({type:e,reducerName:t},n,r,i){if(!i)throw new Error(At(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:u,options:c}=n,d=i(e,s,c);r.exposeAction(t,d),o&&r.addCase(d.fulfilled,o),a&&r.addCase(d.pending,a),l&&r.addCase(d.rejected,l),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(t,{fulfilled:o||Cu,pending:a||Cu,rejected:l||Cu,settled:u||Cu})}function Cu(){}var YD=(e,t)=>{if(typeof e!="function")throw new Error(At(32))},Ry="listenerMiddleware",QD=e=>{let{type:t,actionCreator:n,matcher:r,predicate:i,effect:s}=e;if(t)i=ir(t).match;else if(n)t=n.type,i=n.match;else if(r)i=r;else if(!i)throw new Error(At(21));return YD(s),{predicate:i,type:t,effect:s}},XD=Object.assign(e=>{const{type:t,predicate:n,effect:r}=QD(e);return{id:rI(),effect:r,type:t,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(At(22))}}},{withTypes:()=>XD}),JD=Object.assign(ir(`${Ry}/add`),{withTypes:()=>JD});ir(`${Ry}/removeAll`);var ZD=Object.assign(ir(`${Ry}/remove`),{withTypes:()=>ZD});function At(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Ay="persist:",sI="persist/FLUSH",by="persist/REHYDRATE",oI="persist/PAUSE",aI="persist/PERSIST",lI="persist/PURGE",uI="persist/REGISTER",e$=-1;function yw(e){return r$(e)||n$(e)||t$()}function t$(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function n$(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function r$(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function vw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Eg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vw(n,!0).forEach(function(r){i$(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vw(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function i$(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var cI={registry:[],bootstrapped:!1},s$=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:cI,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case uI:return Eg({},t,{registry:[].concat(yw(t.registry),[n.key])});case by:var r=t.registry.indexOf(n.key),i=yw(t.registry);return i.splice(r,1),Eg({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function o$(e,t,n){var r=n||!1,i=Iy(s$,cI,t&&t.enhancer?t.enhancer:void 0),s=function(u){i.dispatch({type:uI,key:u})},o=function(u,c,d){var h={type:by,payload:c,err:d,key:u};e.dispatch(h),i.dispatch(h),r&&a.getState().bootstrapped&&(r(),r=!1)},a=Eg({},i,{purge:function(){var u=[];return e.dispatch({type:lI,result:function(d){u.push(d)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:sI,result:function(d){u.push(d)}}),Promise.all(u)},pause:function(){e.dispatch({type:oI})},persist:function(){e.dispatch({type:aI,register:s,rehydrate:o})}});return t&&t.manualPersist||a.persist(),a}function Xu(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Xu=function(n){return typeof n}:Xu=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Xu(e)}function _w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function a$(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_w(n,!0).forEach(function(r){l$(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_w(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function l$(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u$(e,t,n,r){r.debug;var i=a$({},n);return e&&Xu(e)==="object"&&Object.keys(e).forEach(function(s){s!=="_persist"&&t[s]===n[s]&&(i[s]=e[s])}),i}function c$(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,s="".concat(e.keyPrefix!==void 0?e.keyPrefix:Ay).concat(e.key),o=e.storage,a;e.serialize===!1?a=function(I){return I}:typeof e.serialize=="function"?a=e.serialize:a=d$;var l=e.writeFailHandler||null,u={},c={},d=[],h=null,f=null,m=function(I){Object.keys(I).forEach(function(E){g(E)&&u[E]!==I[E]&&d.indexOf(E)===-1&&d.push(E)}),Object.keys(u).forEach(function(E){I[E]===void 0&&g(E)&&d.indexOf(E)===-1&&u[E]!==void 0&&d.push(E)}),h===null&&(h=setInterval(v,i)),u=I};function v(){if(d.length===0){h&&clearInterval(h),h=null;return}var _=d.shift(),I=r.reduce(function(E,C){return C.in(E,_,u)},u[_]);if(I!==void 0)try{c[_]=a(I)}catch(E){console.error("redux-persist/createPersistoid: error serializing state",E)}else delete c[_];d.length===0&&S()}function S(){Object.keys(c).forEach(function(_){u[_]===void 0&&delete c[_]}),f=o.setItem(s,a(c)).catch(p)}function g(_){return!(n&&n.indexOf(_)===-1&&_!=="_persist"||t&&t.indexOf(_)!==-1)}function p(_){l&&l(_)}var y=function(){for(;d.length!==0;)v();return f||Promise.resolve()};return{update:m,flush:y}}function d$(e){return JSON.stringify(e)}function h$(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Ay).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(o){return o}:typeof e.deserialize=="function"?i=e.deserialize:i=f$,r.getItem(n).then(function(s){if(s)try{var o={},a=i(s);return Object.keys(a).forEach(function(l){o[l]=t.reduceRight(function(u,c){return c.out(u,l,a)},i(a[l]))}),o}catch(l){throw l}else return})}function f$(e){return JSON.parse(e)}function p$(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Ay).concat(e.key);return t.removeItem(n,g$)}function g$(e){}function ww(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Vn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ww(n,!0).forEach(function(r){m$(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ww(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function m$(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y$(e,t){if(e==null)return{};var n=v$(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function v$(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var _$=5e3;function dI(e,t){var n=e.version!==void 0?e.version:e$;e.debug;var r=e.stateReconciler===void 0?u$:e.stateReconciler,i=e.getStoredState||h$,s=e.timeout!==void 0?e.timeout:_$,o=null,a=!1,l=!0,u=function(d){return d._persist.rehydrated&&o&&!l&&o.update(d),d};return function(c,d){var h=c||{},f=h._persist,m=y$(h,["_persist"]),v=m;if(d.type===aI){var S=!1,g=function(x,$){S||(d.rehydrate(e.key,x,$),S=!0)};if(s&&setTimeout(function(){!S&&g(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},s),l=!1,o||(o=c$(e)),f)return Vn({},t(v,d),{_persist:f});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(e.key),i(e).then(function(C){var x=e.migrate||function($,j){return Promise.resolve($)};x(C,n).then(function($){g($)},function($){g(void 0,$)})},function(C){g(void 0,C)}),Vn({},t(v,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===lI)return a=!0,d.result(p$(e)),Vn({},t(v,d),{_persist:f});if(d.type===sI)return d.result(o&&o.flush()),Vn({},t(v,d),{_persist:f});if(d.type===oI)l=!0;else if(d.type===by){if(a)return Vn({},v,{_persist:Vn({},f,{rehydrated:!0})});if(d.key===e.key){var p=t(v,d),y=d.payload,_=r!==!1&&y!==void 0?r(y,c,p,e):p,I=Vn({},_,{_persist:Vn({},f,{rehydrated:!0})});return u(I)}}}if(!f)return t(c,d);var E=t(v,d);return E===v?c:u(Vn({},E,{_persist:f}))}}var Oy={},Ny={};Ny.__esModule=!0;Ny.default=S$;function Ju(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ju=function(n){return typeof n}:Ju=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ju(e)}function $f(){}var w$={getItem:$f,setItem:$f,removeItem:$f};function E$(e){if((typeof self>"u"?"undefined":Ju(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function S$(e){var t="".concat(e,"Storage");return E$(t)?self[t]:w$}Oy.__esModule=!0;Oy.default=I$;var C$=T$(Ny);function T$(e){return e&&e.__esModule?e:{default:e}}function I$(e){var t=(0,C$.default)(e);return{getItem:function(r){return new Promise(function(i,s){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(t.removeItem(r))})}}}var Dy=void 0,x$=k$(Oy);function k$(e){return e&&e.__esModule?e:{default:e}}var P$=(0,x$.default)("local");Dy=P$;/**
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
 */const hI={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const R=function(e,t){if(!e)throw Oo(t)},Oo=function(e){return new Error("Firebase Database ("+hI.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
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
 */const fI=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},R$=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},$y={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(h=64)),r.push(n[c],n[d],n[h],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(fI(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):R$(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new A$;const h=s<<2|a>>4;if(r.push(h),u!==64){const f=a<<4&240|u>>2;if(r.push(f),d!==64){const m=u<<6&192|d;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class A$ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pI=function(e){const t=fI(e);return $y.encodeByteArray(t,!0)},Wc=function(e){return pI(e).replace(/\./g,"")},Hc=function(e){try{return $y.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function b$(e){return gI(void 0,e)}function gI(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!O$(n)||(e[n]=gI(e[n],t[n]));return e}function O$(e){return e!=="__proto__"}/**
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
 */function N$(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const D$=()=>N$().__FIREBASE_DEFAULTS__,$$=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},L$=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Hc(e[1]);return t&&JSON.parse(t)},Ly=()=>{try{return D$()||$$()||L$()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},mI=e=>{var t,n;return(n=(t=Ly())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},yI=e=>{const t=mI(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},vI=()=>{var e;return(e=Ly())===null||e===void 0?void 0:e.config},_I=e=>{var t;return(t=Ly())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Jd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function wI(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Wc(JSON.stringify(n)),Wc(JSON.stringify(o)),a].join(".")}/**
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
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function My(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function M$(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function EI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function F$(){const e=ht();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function SI(){return hI.NODE_ADMIN===!0}function j$(){try{return typeof indexedDB=="object"}catch{return!1}}function U$(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const z$="FirebaseError";class yr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=z$,Object.setPrototypeOf(this,yr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nl.prototype.create)}}class Nl{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?B$(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new yr(i,a,r)}}function B$(e,t){return e.replace(V$,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const V$=/\{\$([^}]+)}/g;/**
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
 */function nl(e){return JSON.parse(e)}function Ne(e){return JSON.stringify(e)}/**
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
 */const CI=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=nl(Hc(s[0])||""),n=nl(Hc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},W$=function(e){const t=CI(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},H$=function(e){const t=CI(e).claims;return typeof t=="object"&&t.admin===!0};/**
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
 */function vr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function vo(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function Sg(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Gc(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function Kc(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Ew(s)&&Ew(o)){if(!Kc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ew(e){return e!==null&&typeof e=="object"}/**
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
 */function No(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ua(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function ca(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
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
 */class G${constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const r=this.W_;if(typeof t=="string")for(let d=0;d<16;d++)r[d]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const h=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<n;)if(s[o]=t.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=t[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)t[r]=this.chain_[i]>>s&255,++r;return t}}function K$(e,t){const n=new q$(e,t);return n.subscribe.bind(n)}class q${constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Y$(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Lf),i.error===void 0&&(i.error=Lf),i.complete===void 0&&(i.complete=Lf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Y$(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Lf(){}function Fy(e,t){return`${e} failed: ${t} argument `}/**
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
 */const Q$=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,R(r<e.length,"Surrogate pair missing trail surrogate.");const o=e.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Zd=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
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
 */function Et(e){return e&&e._delegate?e._delegate:e}class si{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ii="[DEFAULT]";/**
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
 */class X${constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Jd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Z$(t))try{this.getOrInitializeService({instanceIdentifier:Ii})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Ii){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ii){return this.instances.has(t)}getOptions(t=Ii){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:J$(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ii){return this.component?this.component.multipleInstances?t:Ii:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function J$(e){return e===Ii?void 0:e}function Z$(e){return e.instantiationMode==="EAGER"}/**
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
 */class eL{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new X$(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ne||(ne={}));const tL={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},nL=ne.INFO,rL={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},iL=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=rL[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class eh{constructor(t){this.name=t,this._logLevel=nL,this._logHandler=iL,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ne))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?tL[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...t),this._logHandler(this,ne.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...t),this._logHandler(this,ne.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...t),this._logHandler(this,ne.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...t),this._logHandler(this,ne.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...t),this._logHandler(this,ne.ERROR,...t)}}const sL=(e,t)=>t.some(n=>e instanceof n);let Sw,Cw;function oL(){return Sw||(Sw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aL(){return Cw||(Cw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const TI=new WeakMap,Cg=new WeakMap,II=new WeakMap,Mf=new WeakMap,jy=new WeakMap;function lL(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Yr(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&TI.set(n,e)}).catch(()=>{}),jy.set(t,e),t}function uL(e){if(Cg.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Cg.set(e,t)}let Tg={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Cg.get(e);if(t==="objectStoreNames")return e.objectStoreNames||II.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function cL(e){Tg=e(Tg)}function dL(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ff(this),t,...n);return II.set(r,t.sort?t.sort():[t]),Yr(r)}:aL().includes(e)?function(...t){return e.apply(Ff(this),t),Yr(TI.get(this))}:function(...t){return Yr(e.apply(Ff(this),t))}}function hL(e){return typeof e=="function"?dL(e):(e instanceof IDBTransaction&&uL(e),sL(e,oL())?new Proxy(e,Tg):e)}function Yr(e){if(e instanceof IDBRequest)return lL(e);if(Mf.has(e))return Mf.get(e);const t=hL(e);return t!==e&&(Mf.set(e,t),jy.set(t,e)),t}const Ff=e=>jy.get(e);function fL(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Yr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Yr(o.result),l.oldVersion,l.newVersion,Yr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const pL=["get","getKey","getAll","getAllKeys","count"],gL=["put","add","delete","clear"],jf=new Map;function Tw(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(jf.get(t))return jf.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=gL.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pL.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return jf.set(t,s),s}cL(e=>({...e,get:(t,n,r)=>Tw(t,n)||e.get(t,n,r),has:(t,n)=>!!Tw(t,n)||e.has(t,n)}));/**
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
 */class mL{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yL(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yL(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ig="@firebase/app",Iw="0.9.29";/**
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
 */const Ji=new eh("@firebase/app"),vL="@firebase/app-compat",_L="@firebase/analytics-compat",wL="@firebase/analytics",EL="@firebase/app-check-compat",SL="@firebase/app-check",CL="@firebase/auth",TL="@firebase/auth-compat",IL="@firebase/database",xL="@firebase/database-compat",kL="@firebase/functions",PL="@firebase/functions-compat",RL="@firebase/installations",AL="@firebase/installations-compat",bL="@firebase/messaging",OL="@firebase/messaging-compat",NL="@firebase/performance",DL="@firebase/performance-compat",$L="@firebase/remote-config",LL="@firebase/remote-config-compat",ML="@firebase/storage",FL="@firebase/storage-compat",jL="@firebase/firestore",UL="@firebase/firestore-compat",zL="firebase",BL="10.9.0";/**
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
 */const xg="[DEFAULT]",VL={[Ig]:"fire-core",[vL]:"fire-core-compat",[wL]:"fire-analytics",[_L]:"fire-analytics-compat",[SL]:"fire-app-check",[EL]:"fire-app-check-compat",[CL]:"fire-auth",[TL]:"fire-auth-compat",[IL]:"fire-rtdb",[xL]:"fire-rtdb-compat",[kL]:"fire-fn",[PL]:"fire-fn-compat",[RL]:"fire-iid",[AL]:"fire-iid-compat",[bL]:"fire-fcm",[OL]:"fire-fcm-compat",[NL]:"fire-perf",[DL]:"fire-perf-compat",[$L]:"fire-rc",[LL]:"fire-rc-compat",[ML]:"fire-gcs",[FL]:"fire-gcs-compat",[jL]:"fire-fst",[UL]:"fire-fst-compat","fire-js":"fire-js",[zL]:"fire-js-all"};/**
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
 */const qc=new Map,kg=new Map;function WL(e,t){try{e.container.addComponent(t)}catch(n){Ji.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Zi(e){const t=e.name;if(kg.has(t))return Ji.debug(`There were multiple attempts to register component ${t}.`),!1;kg.set(t,e);for(const n of qc.values())WL(n,e);return!0}function th(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const HL={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qr=new Nl("app","Firebase",HL);/**
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
 */class GL{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Qr.create("app-deleted",{appName:this._name})}}/**
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
 */const ds=BL;function xI(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:xg,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Qr.create("bad-app-name",{appName:String(i)});if(n||(n=vI()),!n)throw Qr.create("no-options");const s=qc.get(i);if(s){if(Kc(n,s.options)&&Kc(r,s.config))return s;throw Qr.create("duplicate-app",{appName:i})}const o=new eL(i);for(const l of kg.values())o.addComponent(l);const a=new GL(n,r,o);return qc.set(i,a),a}function Uy(e=xg){const t=qc.get(e);if(!t&&e===xg&&vI())return xI();if(!t)throw Qr.create("no-app",{appName:e});return t}function Nn(e,t,n){var r;let i=(r=VL[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ji.warn(a.join(" "));return}Zi(new si(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const KL="firebase-heartbeat-database",qL=1,rl="firebase-heartbeat-store";let Uf=null;function kI(){return Uf||(Uf=fL(KL,qL,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(rl)}catch(n){console.warn(n)}}}}).catch(e=>{throw Qr.create("idb-open",{originalErrorMessage:e.message})})),Uf}async function YL(e){try{const n=(await kI()).transaction(rl),r=await n.objectStore(rl).get(PI(e));return await n.done,r}catch(t){if(t instanceof yr)Ji.warn(t.message);else{const n=Qr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ji.warn(n.message)}}}async function xw(e,t){try{const r=(await kI()).transaction(rl,"readwrite");await r.objectStore(rl).put(t,PI(e)),await r.done}catch(n){if(n instanceof yr)Ji.warn(n.message);else{const r=Qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ji.warn(r.message)}}}function PI(e){return`${e.name}!${e.options.appId}`}/**
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
 */const QL=1024,XL=30*24*60*60*1e3;class JL{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eM(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=kw();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=XL}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=kw(),{heartbeatsToSend:r,unsentEntries:i}=ZL(this._heartbeatsCache.heartbeats),s=Wc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function kw(){return new Date().toISOString().substring(0,10)}function ZL(e,t=QL){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Pw(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pw(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eM{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return j$()?U$().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await YL(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xw(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xw(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Pw(e){return Wc(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function tM(e){Zi(new si("platform-logger",t=>new mL(t),"PRIVATE")),Zi(new si("heartbeat",t=>new JL(t),"PRIVATE")),Nn(Ig,Iw,e),Nn(Ig,Iw,"esm2017"),Nn("fire-js","")}tM("");const Rw="@firebase/database",Aw="1.0.3";/**
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
 */let RI="";function nM(e){RI=e}/**
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
 */class rM{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Ne(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:nl(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
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
 */class iM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return vr(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
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
 */const AI=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new rM(t)}}catch{}return new iM},Oi=AI("localStorage"),Pg=AI("sessionStorage");/**
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
 */const Qs=new eh("@firebase/database"),sM=function(){let e=1;return function(){return e++}}(),bI=function(e){const t=Q$(e),n=new G$;n.update(t);const r=n.digest();return $y.encodeByteArray(r)},Dl=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?t+=Dl.apply(null,r):typeof r=="object"?t+=Ne(r):t+=r,t+=" "}return t};let Ui=null,bw=!0;const oM=function(e,t){R(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(Qs.logLevel=ne.VERBOSE,Ui=Qs.log.bind(Qs),t&&Pg.set("logging_enabled",!0)):typeof e=="function"?Ui=e:(Ui=null,Pg.remove("logging_enabled"))},ot=function(...e){if(bw===!0&&(bw=!1,Ui===null&&Pg.get("logging_enabled")===!0&&oM(!0)),Ui){const t=Dl.apply(null,e);Ui(t)}},$l=function(e){return function(...t){ot(e,...t)}},Rg=function(...e){const t="FIREBASE INTERNAL ERROR: "+Dl(...e);Qs.error(t)},dr=function(...e){const t=`FIREBASE FATAL ERROR: ${Dl(...e)}`;throw Qs.error(t),new Error(t)},bt=function(...e){const t="FIREBASE WARNING: "+Dl(...e);Qs.warn(t)},aM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&bt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},OI=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},lM=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},_o="[MIN_NAME]",es="[MAX_NAME]",Do=function(e,t){if(e===t)return 0;if(e===_o||t===es)return-1;if(t===_o||e===es)return 1;{const n=Ow(e),r=Ow(t);return n!==null?r!==null?n-r===0?e.length-t.length:n-r:-1:r!==null?1:e<t?-1:1}},uM=function(e,t){return e===t?0:e<t?-1:1},Qo=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Ne(t))},zy=function(e){if(typeof e!="object"||e===null)return Ne(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)r!==0&&(n+=","),n+=Ne(t[r]),n+=":",n+=zy(e[t[r]]);return n+="}",n},NI=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function Ot(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const DI=function(e){R(!OI(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,o,a,l;e===0?(s=0,o=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=a+r,o=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=t;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(c.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},cM=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},dM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function hM(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const fM=new RegExp("^-?(0*)\\d{1,10}$"),pM=-2147483648,gM=2147483647,Ow=function(e){if(fM.test(e)){const t=Number(e);if(t>=pM&&t<=gM)return t}return null},$o=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw bt("Exception was thrown by user callback.",n),t},Math.floor(0))}},mM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ca=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class yM{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(t))}notifyForInvalidToken(){bt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class vM{constructor(t,n,r){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',bt(t)}}class Xs{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Xs.OWNER="owner";/**
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
 */const By="5",$I="v",LI="s",MI="r",FI="f",jI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,UI="ls",zI="p",Ag="ac",BI="websocket",VI="long_polling";/**
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
 */class WI{constructor(t,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Oi.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Oi.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function _M(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function HI(e,t,n){R(typeof t=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let r;if(t===BI)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===VI)r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);_M(e)&&(n.ns=e.namespace);const i=[];return Ot(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class wM{constructor(){this.counters_={}}incrementCounter(t,n=1){vr(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return b$(this.counters_)}}/**
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
 */const zf={},Bf={};function Vy(e){const t=e.toString();return zf[t]||(zf[t]=new wM),zf[t]}function EM(e,t){const n=e.toString();return Bf[n]||(Bf[n]=t()),Bf[n]}/**
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
 */class SM{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&$o(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Nw="start",CM="close",TM="pLPCommand",IM="pRTLPCB",GI="id",KI="pw",qI="ser",xM="cb",kM="seg",PM="ts",RM="d",AM="dframe",YI=1870,QI=30,bM=YI-QI,OM=25e3,NM=3e4;class zs{constructor(t,n,r,i,s,o,a){this.connId=t,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$l(t),this.stats_=Vy(n),this.urlFn=l=>(this.appCheckToken&&(l[Ag]=this.appCheckToken),HI(n,VI,l))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new SM(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(NM)),lM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Wy((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Nw)this.id=a,this.password=l;else if(o===CM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Nw]="t",r[qI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[xM]=this.scriptTagHolder.uniqueCallbackIdentifier),r[$I]=By,this.transportSessionId&&(r[LI]=this.transportSessionId),this.lastSessionId&&(r[UI]=this.lastSessionId),this.applicationId&&(r[zI]=this.applicationId),this.appCheckToken&&(r[Ag]=this.appCheckToken),typeof location<"u"&&location.hostname&&jI.test(location.hostname)&&(r[MI]=FI);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){zs.forceAllow_=!0}static forceDisallow(){zs.forceDisallow_=!0}static isAvailable(){return zs.forceAllow_?!0:!zs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!cM()&&!dM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=Ne(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=pI(n),i=NI(r,bM);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[AM]="t",r[GI]=t,r[KI]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=Ne(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Wy{constructor(t,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=sM(),window[TM+this.uniqueCallbackIdentifier]=t,window[IM+this.uniqueCallbackIdentifier]=n,this.myIFrame=Wy.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ot("frame writing exception"),a.stack&&ot(a.stack),ot(a)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||ot("No IE domain setting required")}catch{const r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[GI]=this.myID,t[KI]=this.myPW,t[qI]=this.currentSerial;let n=this.urlFn(t),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+QI+r.length<=YI;){const o=this.pendingSegs.shift();r=r+"&"+kM+i+"="+o.seg+"&"+PM+i+"="+o.ts+"&"+RM+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,r){this.pendingSegs.push({seg:t,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(OM)),s=()=>{clearTimeout(i),r()};this.addTag(t,s)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ot("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const DM=16384,$M=45e3;let Yc=null;typeof MozWebSocket<"u"?Yc=MozWebSocket:typeof WebSocket<"u"&&(Yc=WebSocket);class dn{constructor(t,n,r,i,s,o,a){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$l(this.connId),this.stats_=Vy(n),this.connURL=dn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,r,i,s){const o={};return o[$I]=By,typeof location<"u"&&location.hostname&&jI.test(location.hostname)&&(o[MI]=FI),n&&(o[LI]=n),r&&(o[UI]=r),i&&(o[Ag]=i),s&&(o[zI]=s),HI(t,BI,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Oi.set("previous_websocket_failure",!0);try{let r;SI(),this.mySock=new Yc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){dn.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&Yc!==null&&!dn.forceDisallow_}static previouslyFailed(){return Oi.isInMemoryStorage||Oi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Oi.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=nl(n);this.onMessage(r)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(R(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(t){this.resetKeepAlive();const n=Ne(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=NI(n,DM);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($M))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dn.responsesRequiredToBeHealthy=2;dn.healthyTimeout=3e4;/**
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
 */class il{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[zs,dn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=dn&&dn.isAvailable();let r=n&&!dn.previouslyFailed();if(t.webSocketOnly&&(n||bt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[dn];else{const i=this.transports_=[];for(const s of il.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);il.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}il.globalTransportInitialized_=!1;/**
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
 */const LM=6e4,MM=5e3,FM=10*1024,jM=100*1024,Vf="t",Dw="d",UM="s",$w="r",zM="e",Lw="o",Mw="a",Fw="n",jw="p",BM="h";class VM{constructor(t,n,r,i,s,o,a,l,u,c){this.id=t,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$l("c:"+this.id+":"),this.transportManager_=new il(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ca(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>jM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>FM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Vf in t){const n=t[Vf];n===Mw?this.upgradeIfSecondaryHealthy_():n===$w?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Lw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=Qo("t",t),r=Qo("d",t);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:jw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Mw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Fw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=Qo("t",t),r=Qo("d",t);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=Qo(Vf,t);if(Dw in t){const r=t[Dw];if(n===BM){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Fw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===UM?this.onConnectionShutdown_(r):n===$w?this.onReset_(r):n===zM?Rg("Server Error: "+r):n===Lw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Rg("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,r=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),By!==r&&bt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ca(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(LM))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ca(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(MM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:jw,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Oi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class XI{put(t,n,r,i){}merge(t,n,r,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,r){}onDisconnectMerge(t,n,r){}onDisconnectCancel(t,n){}reportStats(t){}}/**
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
 */class JI{constructor(t){this.allowedEvents_=t,this.listeners_={},R(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const r=[...this.listeners_[t]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(t,n,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:r});const i=this.getInitialEvent(t);i&&n.apply(r,i)}off(t,n,r){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(t){R(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
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
 */class Qc extends JI{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!My()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Qc}getInitialEvent(t){return R(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Uw=32,zw=768;class ue{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function te(){return new ue("")}function K(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function oi(e){return e.pieces_.length-e.pieceNum_}function de(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ue(e.pieces_,t)}function ZI(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function WM(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function ex(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function tx(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ue(t,0)}function De(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof ue)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const r=t.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ue(n,0)}function Y(e){return e.pieceNum_>=e.pieces_.length}function mt(e,t){const n=K(e),r=K(t);if(n===null)return t;if(n===r)return mt(de(e),de(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Hy(e,t){if(oi(e)!==oi(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function hn(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(oi(e)>oi(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class HM{constructor(t,n){this.errorPrefix_=n,this.parts_=ex(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Zd(this.parts_[r]);nx(this)}}function GM(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Zd(t),nx(e)}function KM(e){const t=e.parts_.pop();e.byteLength_-=Zd(t),e.parts_.length>0&&(e.byteLength_-=1)}function nx(e){if(e.byteLength_>zw)throw new Error(e.errorPrefix_+"has a key path longer than "+zw+" bytes ("+e.byteLength_+").");if(e.parts_.length>Uw)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Uw+") or object contains a cycle "+xi(e))}function xi(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */class Gy extends JI{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[t];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Gy}getInitialEvent(t){return R(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
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
 */const Xo=1e3,qM=60*5*1e3,Bw=30*1e3,YM=1.3,QM=3e4,XM="server_kill",Vw=3;class sr extends XI{constructor(t,n,r,i,s,o,a,l){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=sr.nextPersistentConnectionId_++,this.log_=$l("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xo,this.maxReconnectDelay_=qM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!SI())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Gy.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Qc.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,r){const i=++this.requestNumber_,s={r:i,a:t,b:n};this.log_(Ne(s)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(t){this.initConnection_();const n=new Jd,i={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(t,n,r,i){this.initConnection_();const s=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),R(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:t,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(t){const n=t.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";t.tag&&(s.q=n._queryObject,s.t=t.tag),s.h=t.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;sr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===t&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),t.onComplete&&t.onComplete(u,l))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&vr(t,"w")){const r=vo(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();bt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||H$(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Bw)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=W$(t)?"auth":"gauth",r={cred:t};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===t&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,r=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(t,n){const r=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),R(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,t._queryObject,n)}sendUnlisten_(t,n,r,i){this.log_("Unlisten on "+t+" for "+n);const s={p:t},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:r})}onDisconnectMerge(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:r})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(t,n,r,i){this.putInternal("p",t,n,r,i)}merge(t,n,r,i){this.putInternal("m",t,n,r,i)}putInternal(t,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:t,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Ne(t));const n=t.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):Rg("Unrecognized action received from server: "+Ne(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xo,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=Xo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>QM&&(this.reconnectDelay_=Xo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*YM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+sr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){R(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?ot("getToken() completed but was canceled"):(ot("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new VM(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,f=>{bt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(XM)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&bt(d),l())}}}interrupt(t){ot("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){ot("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Sg(this.interruptReasons_)&&(this.reconnectDelay_=Xo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let r;n?r=n.map(s=>zy(s)).join("$"):r="default";const i=this.removeListen_(t,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,n){const r=new ue(t).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(t,n){ot("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Vw&&(this.reconnectDelay_=Bw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){ot("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Vw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+RI.replace(/\./g,"-")]=1,My()?t["framework.cordova"]=1:EI()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Qc.getInstance().currentlyOnline();return Sg(this.interruptReasons_)&&t}}sr.nextPersistentConnectionId_=0;sr.nextConnectionId_=0;/**
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
 */class nh{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const r=new q(_o,t),i=new q(_o,n);return this.compare(r,i)!==0}minPost(){return q.MIN}}/**
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
 */let Tu;class rx extends nh{static get __EMPTY_NODE(){return Tu}static set __EMPTY_NODE(t){Tu=t}compare(t,n){return Do(t.name,n.name)}isDefinedOn(t){throw Oo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return q.MIN}maxPost(){return new q(es,Tu)}makePost(t,n){return R(typeof t=="string","KeyIndex indexValue must always be a string."),new q(t,Tu)}toString(){return".key"}}const Js=new rx;/**
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
 */class Iu{constructor(t,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!t.isEmpty();)if(t=t,o=n?r(t.key,n):1,i&&(o*=-1),o<0)this.isReverse_?t=t.left:t=t.right;else if(o===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Ue{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??Ue.RED,this.left=i??xt.EMPTY_NODE,this.right=s??xt.EMPTY_NODE}copy(t,n,r,i,s){return new Ue(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return xt.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let r,i;if(r=this,n(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(t,r.key)===0){if(r.right.isEmpty())return xt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Ue.RED=!0;Ue.BLACK=!1;class JM{copy(t,n,r,i,s){return this}insert(t,n,r){return new Ue(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class xt{constructor(t,n=xt.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new xt(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Ue.BLACK,null,null))}remove(t){return new xt(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Ue.BLACK,null,null))}get(t){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(t,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(t){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(t,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new Iu(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new Iu(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new Iu(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new Iu(this.root_,null,this.comparator_,!0,t)}}xt.EMPTY_NODE=new JM;/**
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
 */function ZM(e,t){return Do(e.name,t.name)}function Ky(e,t){return Do(e,t)}/**
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
 */let bg;function eF(e){bg=e}const ix=function(e){return typeof e=="number"?"number:"+DI(e):"string:"+e},sx=function(e){if(e.isLeafNode()){const t=e.val();R(typeof t=="string"||typeof t=="number"||typeof t=="object"&&vr(t,".sv"),"Priority must be a string or number.")}else R(e===bg||e.isEmpty(),"priority of unexpected type.");R(e===bg||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ww;class Me{constructor(t,n=Me.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),sx(this.priorityNode_)}static set __childrenNodeConstructor(t){Ww=t}static get __childrenNodeConstructor(){return Ww}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Me(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return Y(t)?this:K(t)===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:Me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const r=K(t);return r===null?n:n.isEmpty()&&r!==".priority"?this:(R(r!==".priority"||oi(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Me.__childrenNodeConstructor.EMPTY_NODE.updateChild(de(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+ix(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=DI(this.value_):t+=this.value_,this.lazyHash_=bI(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Me.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Me.__childrenNodeConstructor?-1:(R(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,r=typeof this.value_,i=Me.VALUE_TYPE_ORDER.indexOf(n),s=Me.VALUE_TYPE_ORDER.indexOf(r);return R(i>=0,"Unknown leaf type: "+n),R(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let ox,ax;function tF(e){ox=e}function nF(e){ax=e}class rF extends nh{compare(t,n){const r=t.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Do(t.name,n.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return q.MIN}maxPost(){return new q(es,new Me("[PRIORITY-POST]",ax))}makePost(t,n){const r=ox(t);return new q(n,new Me("[PRIORITY-POST]",r))}toString(){return".priority"}}const xe=new rF;/**
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
 */const iF=Math.log(2);class sF{constructor(t){const n=s=>parseInt(Math.log(s)/iF,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const i=r(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Xc=function(e,t,n,r){e.sort(t);const i=function(l,u){const c=u-l;let d,h;if(c===0)return null;if(c===1)return d=e[l],h=n?n(d):d,new Ue(h,d.node,Ue.BLACK,null,null);{const f=parseInt(c/2,10)+l,m=i(l,f),v=i(f+1,u);return d=e[f],h=n?n(d):d,new Ue(h,d.node,Ue.BLACK,m,v)}},s=function(l){let u=null,c=null,d=e.length;const h=function(m,v){const S=d-m,g=d;d-=m;const p=i(S+1,g),y=e[S],_=n?n(y):y;f(new Ue(_,y.node,v,null,p))},f=function(m){u?(u.left=m,u=m):(c=m,u=m)};for(let m=0;m<l.count;++m){const v=l.nextBitIsOne(),S=Math.pow(2,l.count-(m+1));v?h(S,Ue.BLACK):(h(S,Ue.BLACK),h(S,Ue.RED))}return c},o=new sF(e.length),a=s(o);return new xt(r||t,a)};/**
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
 */let Wf;const Ts={};class Jn{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return R(Ts&&xe,"ChildrenNode.ts has not been loaded"),Wf=Wf||new Jn({".priority":Ts},{".priority":xe}),Wf}get(t){const n=vo(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof xt?n:null}hasIndex(t){return vr(this.indexSet_,t.toString())}addIndex(t,n){R(t!==Js,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(q.Wrap);let o=s.getNext();for(;o;)i=i||t.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Xc(r,t.getCompare()):a=Ts;const l=t.toString(),u=Object.assign({},this.indexSet_);u[l]=t;const c=Object.assign({},this.indexes_);return c[l]=a,new Jn(c,u)}addToIndexes(t,n){const r=Gc(this.indexes_,(i,s)=>{const o=vo(this.indexSet_,s);if(R(o,"Missing index implementation for "+s),i===Ts)if(o.isDefinedOn(t.node)){const a=[],l=n.getIterator(q.Wrap);let u=l.getNext();for(;u;)u.name!==t.name&&a.push(u),u=l.getNext();return a.push(t),Xc(a,o.getCompare())}else return Ts;else{const a=n.get(t.name);let l=i;return a&&(l=l.remove(new q(t.name,a))),l.insert(t,t.node)}});return new Jn(r,this.indexSet_)}removeFromIndexes(t,n){const r=Gc(this.indexes_,i=>{if(i===Ts)return i;{const s=n.get(t.name);return s?i.remove(new q(t.name,s)):i}});return new Jn(r,this.indexSet_)}}/**
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
 */let Jo;class F{constructor(t,n,r){this.children_=t,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&sx(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Jo||(Jo=new F(new xt(Ky),null,Jn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Jo}updatePriority(t){return this.children_.isEmpty()?this:new F(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?Jo:n}}getChild(t){const n=K(t);return n===null?this:this.getImmediateChild(n).getChild(de(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(R(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const r=new q(t,n);let i,s;n.isEmpty()?(i=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Jo:this.priorityNode_;return new F(i,o,s)}}updateChild(t,n){const r=K(t);if(r===null)return n;{R(K(t)!==".priority"||oi(t)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(de(t),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(xe,(o,a)=>{n[o]=a.val(t),r++,s&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!t&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+ix(this.getPriority().val())+":"),this.forEachChild(xe,(n,r)=>{const i=r.hash();i!==""&&(t+=":"+n+":"+i)}),this.lazyHash_=t===""?"":bI(t)}return this.lazyHash_}getPredecessorChildName(t,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new q(t,n));return s?s.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new q(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new q(n,this.children_.get(n)):null}forEachChild(t,n){const r=this.resolveIndex_(t);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(t,i=>i);{const i=this.children_.getIteratorFrom(t.name,q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,t)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(t,i=>i);{const i=this.children_.getReverseIteratorFrom(t.name,q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,t)>0;)i.getNext(),s=i.peek();return i}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Ll?-1:0}withIndex(t){if(t===Js||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Js||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(xe),i=n.getIterator(xe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(t){return t===Js?null:this.indexMap_.get(t.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class oF extends F{constructor(){super(new xt(Ky),F.EMPTY_NODE,Jn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return F.EMPTY_NODE}isEmpty(){return!1}}const Ll=new oF;Object.defineProperties(q,{MIN:{value:new q(_o,F.EMPTY_NODE)},MAX:{value:new q(es,Ll)}});rx.__EMPTY_NODE=F.EMPTY_NODE;Me.__childrenNodeConstructor=F;eF(Ll);nF(Ll);/**
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
 */const aF=!0;function ze(e,t=null){if(e===null)return F.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),R(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new Me(n,ze(t))}if(!(e instanceof Array)&&aF){const n=[];let r=!1;if(Ot(e,(o,a)=>{if(o.substring(0,1)!=="."){const l=ze(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new q(o,l)))}}),n.length===0)return F.EMPTY_NODE;const s=Xc(n,ZM,o=>o.name,Ky);if(r){const o=Xc(n,xe.getCompare());return new F(s,ze(t),new Jn({".priority":o},{".priority":xe}))}else return new F(s,ze(t),Jn.Default)}else{let n=F.EMPTY_NODE;return Ot(e,(r,i)=>{if(vr(e,r)&&r.substring(0,1)!=="."){const s=ze(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ze(t))}}tF(ze);/**
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
 */class lF extends nh{constructor(t){super(),this.indexPath_=t,R(!Y(t)&&K(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const r=this.extractChild(t.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Do(t.name,n.name):s}makePost(t,n){const r=ze(t),i=F.EMPTY_NODE.updateChild(this.indexPath_,r);return new q(n,i)}maxPost(){const t=F.EMPTY_NODE.updateChild(this.indexPath_,Ll);return new q(es,t)}toString(){return ex(this.indexPath_,0).join("/")}}/**
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
 */class uF extends nh{compare(t,n){const r=t.node.compareTo(n.node);return r===0?Do(t.name,n.name):r}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return q.MIN}maxPost(){return q.MAX}makePost(t,n){const r=ze(t);return new q(n,r)}toString(){return".value"}}const cF=new uF;/**
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
 */function lx(e){return{type:"value",snapshotNode:e}}function wo(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function sl(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function ol(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function dF(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
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
 */class qy{constructor(t){this.index_=t}updateChild(t,n,r,i,s,o){R(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=t.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?t.hasChild(n)?o.trackChildChange(sl(n,a)):R(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(wo(n,r)):o.trackChildChange(ol(n,r,a))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(t,n,r){return r!=null&&(t.isLeafNode()||t.forEachChild(xe,(i,s)=>{n.hasChild(i)||r.trackChildChange(sl(i,s))}),n.isLeafNode()||n.forEachChild(xe,(i,s)=>{if(t.hasChild(i)){const o=t.getImmediateChild(i);o.equals(s)||r.trackChildChange(ol(i,s,o))}else r.trackChildChange(wo(i,s))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?F.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class al{constructor(t){this.indexedFilter_=new qy(t.getIndex()),this.index_=t.getIndex(),this.startPost_=al.getStartPost_(t),this.endPost_=al.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,r=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&r}updateChild(t,n,r,i,s,o){return this.matches(new q(n,r))||(r=F.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,r,i,s,o)}updateFullNode(t,n,r){n.isLeafNode()&&(n=F.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const s=this;return n.forEachChild(xe,(o,a)=>{s.matches(new q(o,a))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
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
 */class hF{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new al(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,r,i,s,o){return this.rangedFilter_.matches(new q(n,r))||(r=F.EMPTY_NODE),t.getImmediateChild(n).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,r,i,s,o):this.fullLimitUpdateChild_(t,n,r,s,o)}updateFullNode(t,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=t;R(a.numChildren()===this.limit_,"");const l=new q(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(c&&!r.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(ol(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(sl(n,d));const v=a.updateImmediateChild(n,F.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(wo(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?t:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(sl(u.name,u.node)),s.trackChildChange(wo(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,F.EMPTY_NODE)):t}}/**
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
 */class Yy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=xe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_o}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:es}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===xe}copy(){const t=new Yy;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function fF(e){return e.loadsAllData()?new qy(e.getIndex()):e.hasLimit()?new hF(e):new al(e)}function Hw(e){const t={};if(e.isDefault())return t;let n;if(e.index_===xe?n="$priority":e.index_===cF?n="$value":e.index_===Js?n="$key":(R(e.index_ instanceof lF,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Ne(n),e.startSet_){const r=e.startAfterSet_?"startAfter":"startAt";t[r]=Ne(e.indexStartValue_),e.startNameSet_&&(t[r]+=","+Ne(e.indexStartName_))}if(e.endSet_){const r=e.endBeforeSet_?"endBefore":"endAt";t[r]=Ne(e.indexEndValue_),e.endNameSet_&&(t[r]+=","+Ne(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Gw(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==xe&&(t.i=e.index_.toString()),t}/**
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
 */class Jc extends XI{constructor(t,n,r,i){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=$l("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(R(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,r,i){const s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);const o=Jc.getListenId_(t,r),a={};this.listens_[o]=a;const l=Hw(t._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),vo(this.listens_,o)===a){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(t,n){const r=Jc.getListenId_(t,n);delete this.listens_[r]}get(t){const n=Hw(t._queryParams),r=t._path.toString(),i=new Jd;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(t){}restRequest_(t,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+No(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=nl(a.responseText)}catch{bt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&bt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class pF{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
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
 */function Zc(){return{value:null,children:new Map}}function ux(e,t,n){if(Y(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const r=K(t);e.children.has(r)||e.children.set(r,Zc());const i=e.children.get(r);t=de(t),ux(i,t,n)}}function Og(e,t,n){e.value!==null?n(t,e.value):gF(e,(r,i)=>{const s=new ue(t.toString()+"/"+r);Og(i,s,n)})}function gF(e,t){e.children.forEach((n,r)=>{t(r,n)})}/**
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
 */class mF{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&Ot(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=t,n}}/**
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
 */const Kw=10*1e3,yF=30*1e3,vF=5*60*1e3;class _F{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new mF(t);const r=Kw+(yF-Kw)*Math.random();Ca(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const t=this.statsListener_.get(),n={};let r=!1;Ot(t,(i,s)=>{s>0&&vr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ca(this.reportStats_.bind(this),Math.floor(Math.random()*2*vF))}}/**
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
 */var fn;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(fn||(fn={}));function cx(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Qy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Xy(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
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
 */class ed{constructor(t,n,r){this.path=t,this.affectedTree=n,this.revert=r,this.type=fn.ACK_USER_WRITE,this.source=cx()}operationForChild(t){if(Y(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ue(t));return new ed(te(),n,this.revert)}}else return R(K(this.path)===t,"operationForChild called for unrelated child."),new ed(de(this.path),this.affectedTree,this.revert)}}/**
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
 */class ll{constructor(t,n){this.source=t,this.path=n,this.type=fn.LISTEN_COMPLETE}operationForChild(t){return Y(this.path)?new ll(this.source,te()):new ll(this.source,de(this.path))}}/**
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
 */class ts{constructor(t,n,r){this.source=t,this.path=n,this.snap=r,this.type=fn.OVERWRITE}operationForChild(t){return Y(this.path)?new ts(this.source,te(),this.snap.getImmediateChild(t)):new ts(this.source,de(this.path),this.snap)}}/**
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
 */class ul{constructor(t,n,r){this.source=t,this.path=n,this.children=r,this.type=fn.MERGE}operationForChild(t){if(Y(this.path)){const n=this.children.subtree(new ue(t));return n.isEmpty()?null:n.value?new ts(this.source,te(),n.value):new ul(this.source,te(),n)}else return R(K(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new ul(this.source,de(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ai{constructor(t,n,r){this.node_=t,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(Y(t))return this.isFullyInitialized()&&!this.filtered_;const n=K(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
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
 */class wF{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function EF(e,t,n,r){const i=[],s=[];return t.forEach(o=>{o.type==="child_changed"&&e.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(dF(o.childName,o.snapshotNode))}),Zo(e,i,"child_removed",t,r,n),Zo(e,i,"child_added",t,r,n),Zo(e,i,"child_moved",s,r,n),Zo(e,i,"child_changed",t,r,n),Zo(e,i,"value",t,r,n),i}function Zo(e,t,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>CF(e,a,l)),o.forEach(a=>{const l=SF(e,a,s);i.forEach(u=>{u.respondsTo(a.type)&&t.push(u.createEvent(l,e.query_))})})}function SF(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function CF(e,t,n){if(t.childName==null||n.childName==null)throw Oo("Should only compare child_ events.");const r=new q(t.childName,t.snapshotNode),i=new q(n.childName,n.snapshotNode);return e.index_.compare(r,i)}/**
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
 */function rh(e,t){return{eventCache:e,serverCache:t}}function Ta(e,t,n,r){return rh(new ai(t,n,r),e.serverCache)}function dx(e,t,n,r){return rh(e.eventCache,new ai(t,n,r))}function td(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ns(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
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
 */let Hf;const TF=()=>(Hf||(Hf=new xt(uM)),Hf);class me{constructor(t,n=TF()){this.value=t,this.children=n}static fromObject(t){let n=new me(null);return Ot(t,(r,i)=>{n=n.set(new ue(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:te(),value:this.value};if(Y(t))return null;{const r=K(t),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(de(t),n);return s!=null?{path:De(new ue(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(Y(t))return this;{const n=K(t),r=this.children.get(n);return r!==null?r.subtree(de(t)):new me(null)}}set(t,n){if(Y(t))return new me(n,this.children);{const r=K(t),s=(this.children.get(r)||new me(null)).set(de(t),n),o=this.children.insert(r,s);return new me(this.value,o)}}remove(t){if(Y(t))return this.children.isEmpty()?new me(null):new me(null,this.children);{const n=K(t),r=this.children.get(n);if(r){const i=r.remove(de(t));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new me(null):new me(this.value,s)}else return this}}get(t){if(Y(t))return this.value;{const n=K(t),r=this.children.get(n);return r?r.get(de(t)):null}}setTree(t,n){if(Y(t))return n;{const r=K(t),s=(this.children.get(r)||new me(null)).setTree(de(t),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new me(this.value,o)}}fold(t){return this.fold_(te(),t)}fold_(t,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(De(t,i),n)}),n(t,this.value,r)}findOnPath(t,n){return this.findOnPath_(t,te(),n)}findOnPath_(t,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Y(t))return null;{const s=K(t),o=this.children.get(s);return o?o.findOnPath_(de(t),De(n,s),r):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,te(),n)}foreachOnPath_(t,n,r){if(Y(t))return this;{this.value&&r(n,this.value);const i=K(t),s=this.children.get(i);return s?s.foreachOnPath_(de(t),De(n,i),r):new me(null)}}foreach(t){this.foreach_(te(),t)}foreach_(t,n){this.children.inorderTraversal((r,i)=>{i.foreach_(De(t,r),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,r)=>{r.value&&t(n,r.value)})}}/**
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
 */class yn{constructor(t){this.writeTree_=t}static empty(){return new yn(new me(null))}}function Ia(e,t,n){if(Y(t))return new yn(new me(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){const i=r.path;let s=r.value;const o=mt(i,t);return s=s.updateChild(o,n),new yn(e.writeTree_.set(i,s))}else{const i=new me(n),s=e.writeTree_.setTree(t,i);return new yn(s)}}}function qw(e,t,n){let r=e;return Ot(n,(i,s)=>{r=Ia(r,De(t,i),s)}),r}function Yw(e,t){if(Y(t))return yn.empty();{const n=e.writeTree_.setTree(t,new me(null));return new yn(n)}}function Ng(e,t){return hs(e,t)!=null}function hs(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(mt(n.path,t)):null}function Qw(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(xe,(r,i)=>{t.push(new q(r,i))}):e.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&t.push(new q(r,i.value))}),t}function Xr(e,t){if(Y(t))return e;{const n=hs(e,t);return n!=null?new yn(new me(n)):new yn(e.writeTree_.subtree(t))}}function Dg(e){return e.writeTree_.isEmpty()}function Eo(e,t){return hx(te(),e.writeTree_,t)}function hx(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((i,s)=>{i===".priority"?(R(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=hx(De(e,i),s,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(De(e,".priority"),r)),n}}/**
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
 */function ih(e,t){return mx(t,e)}function IF(e,t,n,r,i){R(r>e.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Ia(e.visibleWrites,t,n)),e.lastWriteId=r}function xF(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function kF(e,t){const n=e.allWrites.findIndex(a=>a.writeId===t);R(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const a=e.allWrites[o];a.visible&&(o>=n&&PF(a,r.path)?i=!1:hn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return RF(e),!0;if(r.snap)e.visibleWrites=Yw(e.visibleWrites,r.path);else{const a=r.children;Ot(a,l=>{e.visibleWrites=Yw(e.visibleWrites,De(r.path,l))})}return!0}else return!1}function PF(e,t){if(e.snap)return hn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&hn(De(e.path,n),t))return!0;return!1}function RF(e){e.visibleWrites=fx(e.allWrites,AF,te()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function AF(e){return e.visible}function fx(e,t,n){let r=yn.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const o=s.path;let a;if(s.snap)hn(n,o)?(a=mt(n,o),r=Ia(r,a,s.snap)):hn(o,n)&&(a=mt(o,n),r=Ia(r,te(),s.snap.getChild(a)));else if(s.children){if(hn(n,o))a=mt(n,o),r=qw(r,a,s.children);else if(hn(o,n))if(a=mt(o,n),Y(a))r=qw(r,te(),s.children);else{const l=vo(s.children,K(a));if(l){const u=l.getChild(de(a));r=Ia(r,te(),u)}}}else throw Oo("WriteRecord should have .snap or .children")}}return r}function px(e,t,n,r,i){if(!r&&!i){const s=hs(e.visibleWrites,t);if(s!=null)return s;{const o=Xr(e.visibleWrites,t);if(Dg(o))return n;if(n==null&&!Ng(o,te()))return null;{const a=n||F.EMPTY_NODE;return Eo(o,a)}}}else{const s=Xr(e.visibleWrites,t);if(!i&&Dg(s))return n;if(!i&&n==null&&!Ng(s,te()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(hn(u.path,t)||hn(t,u.path))},a=fx(e.allWrites,o,t),l=n||F.EMPTY_NODE;return Eo(a,l)}}}function bF(e,t,n){let r=F.EMPTY_NODE;const i=hs(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(xe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Xr(e.visibleWrites,t);return n.forEachChild(xe,(o,a)=>{const l=Eo(Xr(s,new ue(o)),a);r=r.updateImmediateChild(o,l)}),Qw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Xr(e.visibleWrites,t);return Qw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function OF(e,t,n,r,i){R(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=De(t,n);if(Ng(e.visibleWrites,s))return null;{const o=Xr(e.visibleWrites,s);return Dg(o)?i.getChild(n):Eo(o,i.getChild(n))}}function NF(e,t,n,r){const i=De(t,n),s=hs(e.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Xr(e.visibleWrites,i);return Eo(o,r.getNode().getImmediateChild(n))}else return null}function DF(e,t){return hs(e.visibleWrites,t)}function $F(e,t,n,r,i,s,o){let a;const l=Xr(e.visibleWrites,t),u=hs(l,te());if(u!=null)a=u;else if(n!=null)a=Eo(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=h.getNext();for(;f&&c.length<i;)d(f,r)!==0&&c.push(f),f=h.getNext();return c}else return[]}function LF(){return{visibleWrites:yn.empty(),allWrites:[],lastWriteId:-1}}function nd(e,t,n,r){return px(e.writeTree,e.treePath,t,n,r)}function Jy(e,t){return bF(e.writeTree,e.treePath,t)}function Xw(e,t,n,r){return OF(e.writeTree,e.treePath,t,n,r)}function rd(e,t){return DF(e.writeTree,De(e.treePath,t))}function MF(e,t,n,r,i,s){return $F(e.writeTree,e.treePath,t,n,r,i,s)}function Zy(e,t,n){return NF(e.writeTree,e.treePath,t,n)}function gx(e,t){return mx(De(e.treePath,t),e.writeTree)}function mx(e,t){return{treePath:e,writeTree:t}}/**
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
 */class FF{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,r=t.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ol(r,t.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,sl(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,wo(r,t.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ol(r,t.snapshotNode,i.oldSnap));else throw Oo("Illegal combination of changes: "+t+" occurred after "+i)}else this.changeMap.set(r,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class jF{getCompleteChild(t){return null}getChildAfterChild(t,n,r){return null}}const yx=new jF;class ev{constructor(t,n,r=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const r=this.optCompleteServerCache_!=null?new ai(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Zy(this.writes_,t,r)}}getChildAfterChild(t,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ns(this.viewCache_),s=MF(this.writes_,i,n,1,r,t);return s.length===0?null:s[0]}}/**
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
 */function UF(e){return{filter:e}}function zF(e,t){R(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),R(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function BF(e,t,n,r,i){const s=new FF;let o,a;if(n.type===fn.OVERWRITE){const u=n;u.source.fromUser?o=$g(e,t,u.path,u.snap,r,i,s):(R(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered()&&!Y(u.path),o=id(e,t,u.path,u.snap,r,i,a,s))}else if(n.type===fn.MERGE){const u=n;u.source.fromUser?o=WF(e,t,u.path,u.children,r,i,s):(R(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered(),o=Lg(e,t,u.path,u.children,r,i,a,s))}else if(n.type===fn.ACK_USER_WRITE){const u=n;u.revert?o=KF(e,t,u.path,r,i,s):o=HF(e,t,u.path,u.affectedTree,r,i,s)}else if(n.type===fn.LISTEN_COMPLETE)o=GF(e,t,n.path,r,s);else throw Oo("Unknown operation type: "+n.type);const l=s.getChanges();return VF(t,o,l),{viewCache:o,changes:l}}function VF(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=td(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(lx(td(t)))}}function vx(e,t,n,r,i,s){const o=t.eventCache;if(rd(r,n)!=null)return t;{let a,l;if(Y(n))if(R(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const u=ns(t),c=u instanceof F?u:F.EMPTY_NODE,d=Jy(r,c);a=e.filter.updateFullNode(t.eventCache.getNode(),d,s)}else{const u=nd(r,ns(t));a=e.filter.updateFullNode(t.eventCache.getNode(),u,s)}else{const u=K(n);if(u===".priority"){R(oi(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=t.serverCache.getNode();const d=Xw(r,n,c,l);d!=null?a=e.filter.updatePriority(c,d):a=o.getNode()}else{const c=de(n);let d;if(o.isCompleteForChild(u)){l=t.serverCache.getNode();const h=Xw(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=Zy(r,u,t.serverCache);d!=null?a=e.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return Ta(t,a,o.isFullyInitialized()||Y(n),e.filter.filtersNodes())}}function id(e,t,n,r,i,s,o,a){const l=t.serverCache;let u;const c=o?e.filter:e.filter.getIndexedFilter();if(Y(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),f,null)}else{const f=K(n);if(!l.isCompleteForPath(n)&&oi(n)>1)return t;const m=de(n),S=l.getNode().getImmediateChild(f).updateChild(m,r);f===".priority"?u=c.updatePriority(l.getNode(),S):u=c.updateChild(l.getNode(),f,S,m,yx,null)}const d=dx(t,u,l.isFullyInitialized()||Y(n),c.filtersNodes()),h=new ev(i,d,s);return vx(e,d,n,i,h,a)}function $g(e,t,n,r,i,s,o){const a=t.eventCache;let l,u;const c=new ev(i,t,s);if(Y(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=Ta(t,u,!0,e.filter.filtersNodes());else{const d=K(n);if(d===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),r),l=Ta(t,u,a.isFullyInitialized(),a.isFiltered());else{const h=de(n),f=a.getNode().getImmediateChild(d);let m;if(Y(h))m=r;else{const v=c.getCompleteChild(d);v!=null?ZI(h)===".priority"&&v.getChild(tx(h)).isEmpty()?m=v:m=v.updateChild(h,r):m=F.EMPTY_NODE}if(f.equals(m))l=t;else{const v=e.filter.updateChild(a.getNode(),d,m,h,c,o);l=Ta(t,v,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Jw(e,t){return e.eventCache.isCompleteForChild(t)}function WF(e,t,n,r,i,s,o){let a=t;return r.foreach((l,u)=>{const c=De(n,l);Jw(t,K(c))&&(a=$g(e,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=De(n,l);Jw(t,K(c))||(a=$g(e,a,c,u,i,s,o))}),a}function Zw(e,t,n){return n.foreach((r,i)=>{t=t.updateChild(r,i)}),t}function Lg(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,u;Y(n)?u=r:u=new me(null).setTree(n,r);const c=t.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const f=t.serverCache.getNode().getImmediateChild(d),m=Zw(e,f,h);l=id(e,l,new ue(d),m,i,s,o,a)}}),u.children.inorderTraversal((d,h)=>{const f=!t.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!f){const m=t.serverCache.getNode().getImmediateChild(d),v=Zw(e,m,h);l=id(e,l,new ue(d),v,i,s,o,a)}}),l}function HF(e,t,n,r,i,s,o){if(rd(i,n)!=null)return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(r.value!=null){if(Y(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return id(e,t,n,l.getNode().getChild(n),i,s,a,o);if(Y(n)){let u=new me(null);return l.getNode().forEachChild(Js,(c,d)=>{u=u.set(new ue(c),d)}),Lg(e,t,n,u,i,s,a,o)}else return t}else{let u=new me(null);return r.foreach((c,d)=>{const h=De(n,c);l.isCompleteForPath(h)&&(u=u.set(c,l.getNode().getChild(h)))}),Lg(e,t,n,u,i,s,a,o)}}function GF(e,t,n,r,i){const s=t.serverCache,o=dx(t,s.getNode(),s.isFullyInitialized()||Y(n),s.isFiltered());return vx(e,o,n,r,yx,i)}function KF(e,t,n,r,i,s){let o;if(rd(r,n)!=null)return t;{const a=new ev(r,t,i),l=t.eventCache.getNode();let u;if(Y(n)||K(n)===".priority"){let c;if(t.serverCache.isFullyInitialized())c=nd(r,ns(t));else{const d=t.serverCache.getNode();R(d instanceof F,"serverChildren would be complete if leaf node"),c=Jy(r,d)}c=c,u=e.filter.updateFullNode(l,c,s)}else{const c=K(n);let d=Zy(r,c,t.serverCache);d==null&&t.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=e.filter.updateChild(l,c,d,de(n),a,s):t.eventCache.getNode().hasChild(c)?u=e.filter.updateChild(l,c,F.EMPTY_NODE,de(n),a,s):u=l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=nd(r,ns(t)),o.isLeafNode()&&(u=e.filter.updateFullNode(u,o,s)))}return o=t.serverCache.isFullyInitialized()||rd(r,te())!=null,Ta(t,u,o,e.filter.filtersNodes())}}/**
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
 */class qF{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new qy(r.getIndex()),s=fF(r);this.processor_=UF(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(F.EMPTY_NODE,a.getNode(),null),c=new ai(l,o.isFullyInitialized(),i.filtersNodes()),d=new ai(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=rh(d,c),this.eventGenerator_=new wF(this.query_)}get query(){return this.query_}}function YF(e){return e.viewCache_.serverCache.getNode()}function QF(e){return td(e.viewCache_)}function XF(e,t){const n=ns(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Y(t)&&!n.getImmediateChild(K(t)).isEmpty())?n.getChild(t):null}function e1(e){return e.eventRegistrations_.length===0}function JF(e,t){e.eventRegistrations_.push(t)}function t1(e,t,n){const r=[];if(n){R(t==null,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(t){let i=[];for(let s=0;s<e.eventRegistrations_.length;++s){const o=e.eventRegistrations_[s];if(!o.matches(t))i.push(o);else if(t.hasAnyCallback()){i=i.concat(e.eventRegistrations_.slice(s+1));break}}e.eventRegistrations_=i}else e.eventRegistrations_=[];return r}function n1(e,t,n,r){t.type===fn.MERGE&&t.source.queryId!==null&&(R(ns(e.viewCache_),"We should always have a full cache before handling merges"),R(td(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=BF(e.processor_,i,t,n,r);return zF(e.processor_,s.viewCache),R(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,_x(e,s.changes,s.viewCache.eventCache.getNode(),null)}function ZF(e,t){const n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(xe,(s,o)=>{r.push(wo(s,o))}),n.isFullyInitialized()&&r.push(lx(n.getNode())),_x(e,r,n.getNode(),t)}function _x(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return EF(e.eventGenerator_,t,n,i)}/**
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
 */let sd;class wx{constructor(){this.views=new Map}}function e4(e){R(!sd,"__referenceConstructor has already been defined"),sd=e}function t4(){return R(sd,"Reference.ts has not been loaded"),sd}function n4(e){return e.views.size===0}function tv(e,t,n,r){const i=t.source.queryId;if(i!==null){const s=e.views.get(i);return R(s!=null,"SyncTree gave us an op for an invalid query."),n1(s,t,n,r)}else{let s=[];for(const o of e.views.values())s=s.concat(n1(o,t,n,r));return s}}function Ex(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let a=nd(n,i?r:null),l=!1;a?l=!0:r instanceof F?(a=Jy(n,r),l=!1):(a=F.EMPTY_NODE,l=!1);const u=rh(new ai(a,l,!1),new ai(r,i,!1));return new qF(t,u)}return o}function r4(e,t,n,r,i,s){const o=Ex(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),JF(o,n),ZF(o,n)}function i4(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const a=li(e);if(i==="default")for(const[l,u]of e.views.entries())o=o.concat(t1(u,n,r)),e1(u)&&(e.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=e.views.get(i);l&&(o=o.concat(t1(l,n,r)),e1(l)&&(e.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!li(e)&&s.push(new(t4())(t._repo,t._path)),{removed:s,events:o}}function Sx(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Jr(e,t){let n=null;for(const r of e.views.values())n=n||XF(r,t);return n}function Cx(e,t){if(t._queryParams.loadsAllData())return sh(e);{const r=t._queryIdentifier;return e.views.get(r)}}function Tx(e,t){return Cx(e,t)!=null}function li(e){return sh(e)!=null}function sh(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
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
 */let od;function s4(e){R(!od,"__referenceConstructor has already been defined"),od=e}function o4(){return R(od,"Reference.ts has not been loaded"),od}let a4=1;class r1{constructor(t){this.listenProvider_=t,this.syncPointTree_=new me(null),this.pendingWriteTree_=LF(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ix(e,t,n,r,i){return IF(e.pendingWriteTree_,t,n,r,i),i?Fl(e,new ts(cx(),t,n)):[]}function Ni(e,t,n=!1){const r=xF(e.pendingWriteTree_,t);if(kF(e.pendingWriteTree_,t)){let s=new me(null);return r.snap!=null?s=s.set(te(),!0):Ot(r.children,o=>{s=s.set(new ue(o),!0)}),Fl(e,new ed(r.path,s,n))}else return[]}function Ml(e,t,n){return Fl(e,new ts(Qy(),t,n))}function l4(e,t,n){const r=me.fromObject(n);return Fl(e,new ul(Qy(),t,r))}function u4(e,t){return Fl(e,new ll(Qy(),t))}function c4(e,t,n){const r=rv(e,n);if(r){const i=iv(r),s=i.path,o=i.queryId,a=mt(s,t),l=new ll(Xy(o),a);return sv(e,s,l)}else return[]}function ad(e,t,n,r,i=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&(t._queryIdentifier==="default"||Tx(o,t))){const l=i4(o,t,n,r);n4(o)&&(e.syncPointTree_=e.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=e.syncPointTree_.findOnPath(s,(h,f)=>li(f));if(c&&!d){const h=e.syncPointTree_.subtree(s);if(!h.isEmpty()){const f=f4(h);for(let m=0;m<f.length;++m){const v=f[m],S=v.query,g=Rx(e,v);e.listenProvider_.startListening(xa(S),cl(e,S),g.hashFn,g.onComplete)}}}!d&&u.length>0&&!r&&(c?e.listenProvider_.stopListening(xa(t),null):u.forEach(h=>{const f=e.queryToTagMap.get(oh(h));e.listenProvider_.stopListening(xa(h),f)}))}p4(e,u)}return a}function xx(e,t,n,r){const i=rv(e,r);if(i!=null){const s=iv(i),o=s.path,a=s.queryId,l=mt(o,t),u=new ts(Xy(a),l,n);return sv(e,o,u)}else return[]}function d4(e,t,n,r){const i=rv(e,r);if(i){const s=iv(i),o=s.path,a=s.queryId,l=mt(o,t),u=me.fromObject(n),c=new ul(Xy(a),l,u);return sv(e,o,c)}else return[]}function Mg(e,t,n,r=!1){const i=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(i,(h,f)=>{const m=mt(h,i);s=s||Jr(f,m),o=o||li(f)});let a=e.syncPointTree_.get(i);a?(o=o||li(a),s=s||Jr(a,te())):(a=new wx,e.syncPointTree_=e.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=F.EMPTY_NODE,e.syncPointTree_.subtree(i).foreachChild((f,m)=>{const v=Jr(m,te());v&&(s=s.updateImmediateChild(f,v))}));const u=Tx(a,t);if(!u&&!t._queryParams.loadsAllData()){const h=oh(t);R(!e.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=g4();e.queryToTagMap.set(h,f),e.tagToQueryMap.set(f,h)}const c=ih(e.pendingWriteTree_,i);let d=r4(a,t,n,c,s,l);if(!u&&!o&&!r){const h=Cx(a,t);d=d.concat(m4(e,t,h))}return d}function nv(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(o,a)=>{const l=mt(o,t),u=Jr(a,l);if(u)return u});return px(i,t,s,n,!0)}function h4(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=mt(u,n);r=r||Jr(c,d)});let i=e.syncPointTree_.get(n);i?r=r||Jr(i,te()):(i=new wx,e.syncPointTree_=e.syncPointTree_.set(n,i));const s=r!=null,o=s?new ai(r,!0,!1):null,a=ih(e.pendingWriteTree_,t._path),l=Ex(i,t,a,s?o.getNode():F.EMPTY_NODE,s);return QF(l)}function Fl(e,t){return kx(t,e.syncPointTree_,null,ih(e.pendingWriteTree_,te()))}function kx(e,t,n,r){if(Y(e.path))return Px(e,t,n,r);{const i=t.get(te());n==null&&i!=null&&(n=Jr(i,te()));let s=[];const o=K(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=gx(r,o);s=s.concat(kx(a,l,u,c))}return i&&(s=s.concat(tv(i,e,r,n))),s}}function Px(e,t,n,r){const i=t.get(te());n==null&&i!=null&&(n=Jr(i,te()));let s=[];return t.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=gx(r,o),c=e.operationForChild(o);c&&(s=s.concat(Px(c,a,l,u)))}),i&&(s=s.concat(tv(i,e,r,n))),s}function Rx(e,t){const n=t.query,r=cl(e,n);return{hashFn:()=>(YF(t)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?c4(e,n._path,r):u4(e,n._path);{const s=hM(i,n);return ad(e,n,null,s)}}}}function cl(e,t){const n=oh(t);return e.queryToTagMap.get(n)}function oh(e){return e._path.toString()+"$"+e._queryIdentifier}function rv(e,t){return e.tagToQueryMap.get(t)}function iv(e){const t=e.indexOf("$");return R(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ue(e.substr(0,t))}}function sv(e,t,n){const r=e.syncPointTree_.get(t);R(r,"Missing sync point for query tag that we're tracking");const i=ih(e.pendingWriteTree_,t);return tv(r,n,i,null)}function f4(e){return e.fold((t,n,r)=>{if(n&&li(n))return[sh(n)];{let i=[];return n&&(i=Sx(n)),Ot(r,(s,o)=>{i=i.concat(o)}),i}})}function xa(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(o4())(e._repo,e._path):e}function p4(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const i=oh(r),s=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(s)}}}function g4(){return a4++}function m4(e,t,n){const r=t._path,i=cl(e,t),s=Rx(e,n),o=e.listenProvider_.startListening(xa(t),i,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(r);if(i)R(!li(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!Y(u)&&c&&li(c))return[sh(c).query];{let h=[];return c&&(h=h.concat(Sx(c).map(f=>f.query))),Ot(d,(f,m)=>{h=h.concat(m)}),h}});for(let u=0;u<l.length;++u){const c=l[u];e.listenProvider_.stopListening(xa(c),cl(e,c))}}return o}/**
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
 */class ov{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new ov(n)}node(){return this.node_}}class av{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=De(this.path_,t);return new av(this.syncTree_,n)}node(){return nv(this.syncTree_,this.path_)}}const y4=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},i1=function(e,t,n){if(!e||typeof e!="object")return e;if(R(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return v4(e[".sv"],t,n);if(typeof e[".sv"]=="object")return _4(e[".sv"],t);R(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},v4=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+e)}},_4=function(e,t,n){e.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;typeof r!="number"&&R(!1,"Unexpected increment value: "+r);const i=t.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},w4=function(e,t,n,r){return lv(t,new av(n,e),r)},Ax=function(e,t,n){return lv(e,new ov(t),n)};function lv(e,t,n){const r=e.getPriority().val(),i=i1(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const o=e,a=i1(o.getValue(),t,n);return a!==o.getValue()||i!==o.getPriority().val()?new Me(a,ze(i)):e}else{const o=e;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Me(i))),o.forEachChild(xe,(a,l)=>{const u=lv(l,t.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class uv{constructor(t="",n=null,r={children:{},childCount:0}){this.name=t,this.parent=n,this.node=r}}function cv(e,t){let n=t instanceof ue?t:new ue(t),r=e,i=K(n);for(;i!==null;){const s=vo(r.node.children,i)||{children:{},childCount:0};r=new uv(i,r,s),n=de(n),i=K(n)}return r}function Lo(e){return e.node.value}function bx(e,t){e.node.value=t,Fg(e)}function Ox(e){return e.node.childCount>0}function E4(e){return Lo(e)===void 0&&!Ox(e)}function ah(e,t){Ot(e.node.children,(n,r)=>{t(new uv(n,e,r))})}function Nx(e,t,n,r){n&&!r&&t(e),ah(e,i=>{Nx(i,t,!0,r)}),n&&r&&t(e)}function S4(e,t,n){let r=n?e:e.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function jl(e){return new ue(e.parent===null?e.name:jl(e.parent)+"/"+e.name)}function Fg(e){e.parent!==null&&C4(e.parent,e.name,e)}function C4(e,t,n){const r=E4(n),i=vr(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Fg(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,Fg(e))}/**
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
 */const T4=/[\[\].#$\/\u0000-\u001F\u007F]/,I4=/[\[\].#$\u0000-\u001F\u007F]/,Gf=10*1024*1024,Dx=function(e){return typeof e=="string"&&e.length!==0&&!T4.test(e)},$x=function(e){return typeof e=="string"&&e.length!==0&&!I4.test(e)},x4=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),$x(e)},k4=function(e,t,n,r){r&&t===void 0||dv(Fy(e,"value"),t,n)},dv=function(e,t,n){const r=n instanceof ue?new HM(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+xi(r));if(typeof t=="function")throw new Error(e+"contains a function "+xi(r)+" with contents = "+t.toString());if(OI(t))throw new Error(e+"contains "+t.toString()+" "+xi(r));if(typeof t=="string"&&t.length>Gf/3&&Zd(t)>Gf)throw new Error(e+"contains a string greater than "+Gf+" utf8 bytes "+xi(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let i=!1,s=!1;if(Ot(t,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Dx(o)))throw new Error(e+" contains an invalid key ("+o+") "+xi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);GM(r,o),dv(e,a,r),KM(r)}),i&&s)throw new Error(e+' contains ".value" child '+xi(r)+" in addition to actual children.")}},Lx=function(e,t,n,r){if(!(r&&n===void 0)&&!$x(n))throw new Error(Fy(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},P4=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Lx(e,t,n,r)},R4=function(e,t){if(K(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},A4=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!Dx(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!x4(n))throw new Error(Fy(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class b4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function hv(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();n!==null&&!Hy(s,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function Mx(e,t,n){hv(e,n),Fx(e,r=>Hy(r,t))}function Mn(e,t,n){hv(e,n),Fx(e,r=>hn(r,t)||hn(t,r))}function Fx(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const s=i.path;t(s)?(O4(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function O4(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const r=n.getEventRunner();Ui&&ot("event: "+n.toString()),$o(r)}}}/**
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
 */const N4="repo_interrupt",D4=25;class $4{constructor(t,n,r,i){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new b4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zc(),this.transactionQueueTree_=new uv,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function L4(e,t,n){if(e.stats_=Vy(e.repoInfo_),e.forceRestClient_||mM())e.server_=new Jc(e.repoInfo_,(r,i,s,o)=>{s1(e,r,i,s,o)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>o1(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ne(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new sr(e.repoInfo_,t,(r,i,s,o)=>{s1(e,r,i,s,o)},r=>{o1(e,r)},r=>{F4(e,r)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(r=>{e.server_.refreshAuthToken(r)}),e.appCheckProvider_.addTokenChangeListener(r=>{e.server_.refreshAppCheckToken(r.token)}),e.statsReporter_=EM(e.repoInfo_,()=>new _F(e.stats_,e.server_)),e.infoData_=new pF,e.infoSyncTree_=new r1({startListening:(r,i,s,o)=>{let a=[];const l=e.infoData_.getNode(r._path);return l.isEmpty()||(a=Ml(e.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),pv(e,"connected",!1),e.serverSyncTree_=new r1({startListening:(r,i,s,o)=>(e.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Mn(e.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{e.server_.unlisten(r,i)}})}function M4(e){const n=e.infoData_.getNode(new ue(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function fv(e){return y4({timestamp:M4(e)})}function s1(e,t,n,r,i){e.dataUpdateCount++;const s=new ue(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const l=Gc(n,u=>ze(u));o=d4(e.serverSyncTree_,s,l,i)}else{const l=ze(n);o=xx(e.serverSyncTree_,s,l,i)}else if(r){const l=Gc(n,u=>ze(u));o=l4(e.serverSyncTree_,s,l)}else{const l=ze(n);o=Ml(e.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=uh(e,s)),Mn(e.eventQueue_,a,o)}function o1(e,t){pv(e,"connected",t),t===!1&&z4(e)}function F4(e,t){Ot(t,(n,r)=>{pv(e,n,r)})}function pv(e,t,n){const r=new ue("/.info/"+t),i=ze(n);e.infoData_.updateSnapshot(r,i);const s=Ml(e.infoSyncTree_,r,i);Mn(e.eventQueue_,r,s)}function jx(e){return e.nextWriteId_++}function j4(e,t,n){const r=h4(e.serverSyncTree_,t);return r!=null?Promise.resolve(r):e.server_.get(t).then(i=>{const s=ze(i).withIndex(t._queryParams.getIndex());Mg(e.serverSyncTree_,t,n,!0);let o;if(t._queryParams.loadsAllData())o=Ml(e.serverSyncTree_,t._path,s);else{const a=cl(e.serverSyncTree_,t);o=xx(e.serverSyncTree_,t._path,s,a)}return Mn(e.eventQueue_,t._path,o),ad(e.serverSyncTree_,t,n,null,!0),s},i=>(lh(e,"get for query "+Ne(t)+" failed: "+i),Promise.reject(new Error(i))))}function U4(e,t,n,r,i){lh(e,"set",{path:t.toString(),value:n,priority:r});const s=fv(e),o=ze(n,r),a=nv(e.serverSyncTree_,t),l=Ax(o,a,s),u=jx(e),c=Ix(e.serverSyncTree_,t,l,u,!0);hv(e.eventQueue_,c),e.server_.put(t.toString(),o.val(!0),(h,f)=>{const m=h==="ok";m||bt("set at "+t+" failed: "+h);const v=Ni(e.serverSyncTree_,u,!m);Mn(e.eventQueue_,t,v),W4(e,i,h,f)});const d=Wx(e,t);uh(e,d),Mn(e.eventQueue_,d,[])}function z4(e){lh(e,"onDisconnectEvents");const t=fv(e),n=Zc();Og(e.onDisconnect_,te(),(i,s)=>{const o=w4(i,s,e.serverSyncTree_,t);ux(n,i,o)});let r=[];Og(n,te(),(i,s)=>{r=r.concat(Ml(e.serverSyncTree_,i,s));const o=Wx(e,i);uh(e,o)}),e.onDisconnect_=Zc(),Mn(e.eventQueue_,te(),r)}function B4(e,t,n){let r;K(t._path)===".info"?r=Mg(e.infoSyncTree_,t,n):r=Mg(e.serverSyncTree_,t,n),Mx(e.eventQueue_,t._path,r)}function a1(e,t,n){let r;K(t._path)===".info"?r=ad(e.infoSyncTree_,t,n):r=ad(e.serverSyncTree_,t,n),Mx(e.eventQueue_,t._path,r)}function V4(e){e.persistentConnection_&&e.persistentConnection_.interrupt(N4)}function lh(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),ot(n,...t)}function W4(e,t,n,r){t&&$o(()=>{if(n==="ok")t(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,t(o)}})}function Ux(e,t,n){return nv(e.serverSyncTree_,t,n)||F.EMPTY_NODE}function gv(e,t=e.transactionQueueTree_){if(t||ch(e,t),Lo(t)){const n=Bx(e,t);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&H4(e,jl(t),n)}else Ox(t)&&ah(t,n=>{gv(e,n)})}function H4(e,t,n){const r=n.map(u=>u.currentWriteId),i=Ux(e,t,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];R(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=mt(t,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,u=>{lh(e,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(Ni(e.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();ch(e,cv(e.transactionQueueTree_,t)),gv(e,e.transactionQueueTree_),Mn(e.eventQueue_,t,c);for(let h=0;h<d.length;h++)$o(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{bt("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}uh(e,t)}},o)}function uh(e,t){const n=zx(e,t),r=jl(n),i=Bx(e,n);return G4(e,i,r),r}function G4(e,t,n){if(t.length===0)return;const r=[];let i=[];const o=t.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<t.length;a++){const l=t[a],u=mt(n,l.path);let c=!1,d;if(R(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(Ni(e.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=D4)c=!0,d="maxretry",i=i.concat(Ni(e.serverSyncTree_,l.currentWriteId,!0));else{const h=Ux(e,l.path,o);l.currentInputSnapshot=h;const f=t[a].update(h.val());if(f!==void 0){dv("transaction failed: Data returned ",f,l.path);let m=ze(f);typeof f=="object"&&f!=null&&vr(f,".priority")||(m=m.updatePriority(h.getPriority()));const S=l.currentWriteId,g=fv(e),p=Ax(m,h,g);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=p,l.currentWriteId=jx(e),o.splice(o.indexOf(S),1),i=i.concat(Ix(e.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(Ni(e.serverSyncTree_,S,!0))}else c=!0,d="nodata",i=i.concat(Ni(e.serverSyncTree_,l.currentWriteId,!0))}Mn(e.eventQueue_,n,i),i=[],c&&(t[a].status=2,function(h){setTimeout(h,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&(d==="nodata"?r.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):r.push(()=>t[a].onComplete(new Error(d),!1,null))))}ch(e,e.transactionQueueTree_);for(let a=0;a<r.length;a++)$o(r[a]);gv(e,e.transactionQueueTree_)}function zx(e,t){let n,r=e.transactionQueueTree_;for(n=K(t);n!==null&&Lo(r)===void 0;)r=cv(r,n),t=de(t),n=K(t);return r}function Bx(e,t){const n=[];return Vx(e,t,n),n.sort((r,i)=>r.order-i.order),n}function Vx(e,t,n){const r=Lo(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ah(t,i=>{Vx(e,i,n)})}function ch(e,t){const n=Lo(t);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,bx(t,n.length>0?n:void 0)}ah(t,r=>{ch(e,r)})}function Wx(e,t){const n=jl(zx(e,t)),r=cv(e.transactionQueueTree_,t);return S4(r,i=>{Kf(e,i)}),Kf(e,r),Nx(r,i=>{Kf(e,i)}),n}function Kf(e,t){const n=Lo(t);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ni(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?bx(t,void 0):n.length=s+1,Mn(e.eventQueue_,jl(t),i);for(let o=0;o<r.length;o++)$o(r[o])}}/**
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
 */function K4(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}t+="/"+i}return t}function q4(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):bt(`Invalid query segment '${n}' in query '${e}'`)}return t}const l1=function(e,t){const n=Y4(e),r=n.namespace;n.domain==="firebase.com"&&dr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&dr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||aM();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new WI(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new ue(n.pathString)}},Y4=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof e=="string"){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let c=e.indexOf("/");c===-1&&(c=e.length);let d=e.indexOf("?");d===-1&&(d=e.length),t=e.substring(0,Math.min(c,d)),c<d&&(i=K4(e.substring(c,d)));const h=q4(e.substring(Math.min(e.length,d)));u=t.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(t.substring(u+1),10)):u=t.length;const f=t.slice(0,u);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const m=t.indexOf(".");r=t.substring(0,m).toLowerCase(),n=t.substring(m+1),s=r}"ns"in h&&(s=h.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class Hx{constructor(t,n,r,i){this.eventType=t,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ne(this.snapshot.exportVal())}}class Gx{constructor(t,n,r){this.eventRegistration=t,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Kx{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
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
 */class mv{constructor(t,n,r,i){this._repo=t,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Y(this._path)?null:ZI(this._path)}get ref(){return new jn(this._repo,this._path)}get _queryIdentifier(){const t=Gw(this._queryParams),n=zy(t);return n==="{}"?"default":n}get _queryObject(){return Gw(this._queryParams)}isEqual(t){if(t=Et(t),!(t instanceof mv))return!1;const n=this._repo===t._repo,r=Hy(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+WM(this._path)}}class jn extends mv{constructor(t,n){super(t,n,new Yy,!1)}get parent(){const t=tx(this._path);return t===null?null:new jn(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class So{constructor(t,n,r){this._node=t,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new ue(t),r=dl(this.ref,t);return new So(this._node.getChild(n),r,xe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>t(new So(i,dl(this.ref,r),xe)))}hasChild(t){const n=new ue(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function dh(e,t){return e=Et(e),e._checkNotDeleted("ref"),t!==void 0?dl(e._root,t):e._root}function dl(e,t){return e=Et(e),K(e._path)===null?P4("child","path",t,!1):Lx("child","path",t,!1),new jn(e._repo,De(e._path,t))}function qx(e,t){e=Et(e),R4("set",e._path),k4("set",t,e._path,!1);const n=new Jd;return U4(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function yv(e){e=Et(e);const t=new Kx(()=>{}),n=new hh(t);return j4(e._repo,e,n).then(r=>new So(r,new jn(e._repo,e._path),e._queryParams.getIndex()))}class hh{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const r=n._queryParams.getIndex();return new Hx("value",this,new So(t.snapshotNode,new jn(n._repo,n._path),r))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new Gx(this,t,n):null}matches(t){return t instanceof hh?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class vv{constructor(t,n){this.eventType=t,this.callbackContext=n}respondsTo(t){let n=t==="children_added"?"child_added":t;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new Gx(this,t,n):null}createEvent(t,n){R(t.childName!=null,"Child events should have a childName.");const r=dl(new jn(n._repo,n._path),t.childName),i=n._queryParams.getIndex();return new Hx(t.type,this,new So(t.snapshotNode,r,i),t.prevName)}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,t.prevName)}matches(t){return t instanceof vv?this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Q4(e,t,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{a1(e._repo,e,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new Kx(n,s||void 0),a=t==="value"?new hh(o):new vv(t,o);return B4(e._repo,e,a),()=>a1(e._repo,e,a)}function X4(e,t,n,r){return Q4(e,"value",t,n,r)}e4(jn);s4(jn);/**
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
 */const J4="FIREBASE_DATABASE_EMULATOR_HOST",jg={};let Z4=!1;function ej(e,t,n,r){e.repoInfo_=new WI(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function tj(e,t,n,r,i){let s=r||e.options.databaseURL;s===void 0&&(e.options.projectId||dr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ot("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=l1(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[J4]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=l1(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Xs(Xs.OWNER):new vM(e.name,e.options,t);A4("Invalid Firebase Database URL",o),Y(o.path)||dr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=rj(a,e,c,new yM(e.name,n));return new ij(d,e)}function nj(e,t){const n=jg[t];(!n||n[e.key]!==e)&&dr(`Database ${t}(${e.repoInfo_}) has already been deleted.`),V4(e),delete n[e.key]}function rj(e,t,n,r){let i=jg[t.name];i||(i={},jg[t.name]=i);let s=i[e.toURLString()];return s&&dr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new $4(e,Z4,n,r),i[e.toURLString()]=s,s}class ij{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(L4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new jn(this._repo,te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(nj(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&dr("Cannot call "+t+" on a deleted database.")}}function Yx(e=Uy(),t){const n=th(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const r=yI("database");r&&sj(n,...r)}return n}function sj(e,t,n,r={}){e=Et(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&dr("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&dr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Xs(Xs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:wI(r.mockUserToken,e.app.options.projectId);s=new Xs(o)}ej(i,t,n,s)}/**
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
 */function oj(e){nM(ds),Zi(new si("database",(t,{instanceIdentifier:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return tj(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Nn(Rw,Aw,e),Nn(Rw,Aw,"esm2017")}sr.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};sr.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};oj();function _v(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Qx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aj=Qx,Xx=new Nl("auth","Firebase",Qx());/**
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
 */const ld=new eh("@firebase/auth");function lj(e,...t){ld.logLevel<=ne.WARN&&ld.warn(`Auth (${ds}): ${e}`,...t)}function Zu(e,...t){ld.logLevel<=ne.ERROR&&ld.error(`Auth (${ds}): ${e}`,...t)}/**
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
 */function rn(e,...t){throw wv(e,...t)}function Dn(e,...t){return wv(e,...t)}function Jx(e,t,n){const r=Object.assign(Object.assign({},aj()),{[t]:n});return new Nl("auth","Firebase",r).create(t,{appName:e.name})}function uj(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&rn(e,"argument-error"),Jx(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wv(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Xx.create(e,...t)}function z(e,t,...n){if(!e)throw wv(t,...n)}function Zn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Zu(t),new Error(t)}function hr(e,t){e||Zn(t)}/**
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
 */function Ug(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function cj(){return u1()==="http:"||u1()==="https:"}function u1(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function dj(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cj()||M$()||"connection"in navigator)?navigator.onLine:!0}function hj(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Ul{constructor(t,n){this.shortDelay=t,this.longDelay=n,hr(n>t,"Short delay should be less than long delay!"),this.isMobile=My()||EI()}get(){return dj()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ev(e,t){hr(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Zx{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const fj={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const pj=new Ul(3e4,6e4);function fi(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function pi(e,t,n,r,i={}){return ek(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=No(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Zx.fetch()(tk(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function ek(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},fj),t);try{const i=new mj(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw xu(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xu(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw xu(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw xu(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Jx(e,c,u);rn(e,c)}}catch(i){if(i instanceof yr)throw i;rn(e,"network-request-failed",{message:String(i)})}}async function zl(e,t,n,r,i={}){const s=await pi(e,t,n,r,i);return"mfaPendingCredential"in s&&rn(e,"multi-factor-auth-required",{_serverResponse:s}),s}function tk(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Ev(e.config,i):`${e.config.apiScheme}://${i}`}function gj(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mj{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dn(this.auth,"network-request-failed")),pj.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xu(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Dn(e,t,r);return i.customData._tokenResponse=n,i}function c1(e){return e!==void 0&&e.enterprise!==void 0}class yj{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return gj(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function vj(e,t){return pi(e,"GET","/v2/recaptchaConfig",fi(e,t))}/**
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
 */async function _j(e,t){return pi(e,"POST","/v1/accounts:delete",t)}async function wj(e,t){return pi(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function ka(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Ej(e,t=!1){const n=Et(e),r=await n.getIdToken(t),i=Sv(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ka(qf(i.auth_time)),issuedAtTime:ka(qf(i.iat)),expirationTime:ka(qf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function qf(e){return Number(e)*1e3}function Sv(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Zu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Hc(n);return i?JSON.parse(i):(Zu("Failed to decode base64 JWT payload"),null)}catch(i){return Zu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Sj(e){const t=Sv(e);return z(t,"internal-error"),z(typeof t.exp<"u","internal-error"),z(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function hl(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof yr&&Cj(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Cj({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class Tj{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class nk{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ka(this.lastLoginAt),this.creationTime=ka(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ud(e){var t;const n=e.auth,r=await e.getIdToken(),i=await hl(e,wj(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?kj(s.providerUserInfo):[],a=xj(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new nk(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function Ij(e){const t=Et(e);await ud(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function xj(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function kj(e){return e.map(t=>{var{providerId:n}=t,r=_v(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Pj(e,t){const n=await ek(e,{},async()=>{const r=No({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=tk(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zx.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Rj(e,t){return pi(e,"POST","/v2/accounts:revokeToken",fi(e,t))}/**
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
 */class fl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){z(t.idToken,"internal-error"),z(typeof t.idToken<"u","internal-error"),z(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Sj(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return z(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Pj(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new fl;return r&&(z(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new fl,this.toJSON())}_performRefresh(){return Zn("not implemented")}}/**
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
 */function Cr(e,t){z(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class zi{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=_v(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Tj(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new nk(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await hl(this,this.stsTokenManager.getToken(this.auth,t));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Ej(this,t)}reload(){return Ij(this)}_assign(t){this!==t&&(z(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new zi(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ud(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await hl(this,_j(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:_,isAnonymous:I,providerData:E,stsTokenManager:C}=n;z(y&&C,t,"internal-error");const x=fl.fromJSON(this.name,C);z(typeof y=="string",t,"internal-error"),Cr(d,t.name),Cr(h,t.name),z(typeof _=="boolean",t,"internal-error"),z(typeof I=="boolean",t,"internal-error"),Cr(f,t.name),Cr(m,t.name),Cr(v,t.name),Cr(S,t.name),Cr(g,t.name),Cr(p,t.name);const $=new zi({uid:y,auth:t,email:h,emailVerified:_,displayName:d,isAnonymous:I,photoURL:m,phoneNumber:f,tenantId:v,stsTokenManager:x,createdAt:g,lastLoginAt:p});return E&&Array.isArray(E)&&($.providerData=E.map(j=>Object.assign({},j))),S&&($._redirectEventId=S),$}static async _fromIdTokenResponse(t,n,r=!1){const i=new fl;i.updateFromServerResponse(n);const s=new zi({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ud(s),s}}/**
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
 */const d1=new Map;function er(e){hr(e instanceof Function,"Expected a class definition");let t=d1.get(e);return t?(hr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,d1.set(e,t),t)}/**
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
 */class rk{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}rk.type="NONE";const h1=rk;/**
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
 */function ec(e,t,n){return`firebase:${e}:${t}:${n}`}class Zs{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ec(this.userKey,i.apiKey,s),this.fullPersistenceKey=ec("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?zi._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Zs(er(h1),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||er(h1);const o=ec(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=zi._fromJSON(t,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Zs(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Zs(s,t,r))}}/**
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
 */function f1(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ok(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ik(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(lk(t))return"Blackberry";if(uk(t))return"Webos";if(Cv(t))return"Safari";if((t.includes("chrome/")||sk(t))&&!t.includes("edge/"))return"Chrome";if(ak(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ik(e=ht()){return/firefox\//i.test(e)}function Cv(e=ht()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function sk(e=ht()){return/crios\//i.test(e)}function ok(e=ht()){return/iemobile/i.test(e)}function ak(e=ht()){return/android/i.test(e)}function lk(e=ht()){return/blackberry/i.test(e)}function uk(e=ht()){return/webos/i.test(e)}function fh(e=ht()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Aj(e=ht()){var t;return fh(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function bj(){return F$()&&document.documentMode===10}function ck(e=ht()){return fh(e)||ak(e)||uk(e)||lk(e)||/windows phone/i.test(e)||ok(e)}function Oj(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function dk(e,t=[]){let n;switch(e){case"Browser":n=f1(ht());break;case"Worker":n=`${f1(ht())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ds}/${r}`}/**
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
 */class Nj{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Dj(e,t={}){return pi(e,"GET","/v2/passwordPolicy",fi(e,t))}/**
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
 */const $j=6;class Lj{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:$j,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class Mj{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new p1(this),this.idTokenSubscription=new p1(this),this.beforeStateQueue=new Nj(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=er(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Zs.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ud(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=hj()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Et(t):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&z(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(er(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Dj(this),n=new Lj(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Nl("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Rj(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&er(t)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Zs.create(this,[er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=dk(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&lj(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function gi(e){return Et(e)}class p1{constructor(t){this.auth=t,this.observer=null,this.addObserver=K$(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ph={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Fj(e){ph=e}function hk(e){return ph.loadJS(e)}function jj(){return ph.recaptchaEnterpriseScript}function Uj(){return ph.gapiScript}function zj(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Bj="recaptcha-enterprise",Vj="NO_RECAPTCHA";class Wj{constructor(t){this.type=Bj,this.auth=gi(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{vj(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new yj(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;c1(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(Vj)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&c1(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=jj();l.length!==0&&(l+=a),hk(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function g1(e,t,n,r=!1){const i=new Wj(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function zg(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await g1(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await g1(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(s)})}/**
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
 */function Hj(e,t){const n=th(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Kc(s,t??{}))return i;rn(i,"already-initialized")}return n.initialize({options:t})}function Gj(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(er);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Kj(e,t,n){const r=gi(e);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=fk(t),{host:o,port:a}=qj(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Yj()}function fk(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function qj(e){const t=fk(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:m1(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:m1(o)}}}function m1(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Yj(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Tv{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Zn("not implemented")}_getIdTokenResponse(t){return Zn("not implemented")}_linkToIdToken(t,n){return Zn("not implemented")}_getReauthenticationResolver(t){return Zn("not implemented")}}async function Qj(e,t){return pi(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function Xj(e,t){return zl(e,"POST","/v1/accounts:signInWithPassword",fi(e,t))}/**
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
 */async function Jj(e,t){return zl(e,"POST","/v1/accounts:signInWithEmailLink",fi(e,t))}async function Zj(e,t){return zl(e,"POST","/v1/accounts:signInWithEmailLink",fi(e,t))}/**
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
 */class pl extends Tv{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new pl(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new pl(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zg(t,n,"signInWithPassword",Xj);case"emailLink":return Jj(t,{email:this._email,oobCode:this._password});default:rn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zg(t,r,"signUpPassword",Qj);case"emailLink":return Zj(t,{idToken:n,email:this._email,oobCode:this._password});default:rn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function eo(e,t){return zl(e,"POST","/v1/accounts:signInWithIdp",fi(e,t))}/**
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
 */const e3="http://localhost";class rs extends Tv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new rs(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=_v(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new rs(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return eo(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,eo(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,eo(t,n)}buildRequest(){const t={requestUri:e3,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=No(n)}return t}}/**
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
 */function t3(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function n3(e){const t=ua(ca(e)).link,n=t?ua(ca(t)).deep_link_id:null,r=ua(ca(e)).deep_link_id;return(r?ua(ca(r)).link:null)||r||n||t||e}class Iv{constructor(t){var n,r,i,s,o,a;const l=ua(ca(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=t3((i=l.mode)!==null&&i!==void 0?i:null);z(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=n3(t);try{return new Iv(n)}catch{return null}}}/**
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
 */class Mo{constructor(){this.providerId=Mo.PROVIDER_ID}static credential(t,n){return pl._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Iv.parseLink(n);return z(r,"argument-error"),pl._fromEmailAndCode(t,r.code,r.tenantId)}}Mo.PROVIDER_ID="password";Mo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class xv{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bl extends xv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class br extends Bl{constructor(){super("facebook.com")}static credential(t){return rs._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return br.credentialFromTaggedObject(t)}static credentialFromError(t){return br.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return br.credential(t.oauthAccessToken)}catch{return null}}}br.FACEBOOK_SIGN_IN_METHOD="facebook.com";br.PROVIDER_ID="facebook.com";/**
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
 */class Yn extends Bl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return rs._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Yn.credentialFromTaggedObject(t)}static credentialFromError(t){return Yn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
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
 */class Or extends Bl{constructor(){super("github.com")}static credential(t){return rs._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Or.credentialFromTaggedObject(t)}static credentialFromError(t){return Or.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Or.credential(t.oauthAccessToken)}catch{return null}}}Or.GITHUB_SIGN_IN_METHOD="github.com";Or.PROVIDER_ID="github.com";/**
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
 */class Nr extends Bl{constructor(){super("twitter.com")}static credential(t,n){return rs._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Nr.credentialFromTaggedObject(t)}static credentialFromError(t){return Nr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Nr.credential(n,r)}catch{return null}}}Nr.TWITTER_SIGN_IN_METHOD="twitter.com";Nr.PROVIDER_ID="twitter.com";/**
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
 */async function r3(e,t){return zl(e,"POST","/v1/accounts:signUp",fi(e,t))}/**
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
 */class is{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await zi._fromIdTokenResponse(t,r,i),o=y1(r);return new is({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=y1(r);return new is({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function y1(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class cd extends yr{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,cd.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new cd(t,n,r,i)}}function pk(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?cd._fromErrorAndOperation(e,s,t,r):s})}async function i3(e,t,n=!1){const r=await hl(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return is._forOperation(e,"link",r)}/**
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
 */async function s3(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await hl(e,pk(r,i,t,e),n);z(s.idToken,r,"internal-error");const o=Sv(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(e.uid===a,r,"user-mismatch"),is._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&rn(r,"user-mismatch"),s}}/**
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
 */async function gk(e,t,n=!1){const r="signIn",i=await pk(e,r,t),s=await is._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function o3(e,t){return gk(gi(e),t)}/**
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
 */async function mk(e){const t=gi(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function a3(e,t,n){const r=gi(e),o=await zg(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",r3).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&mk(e),l}),a=await is._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function l3(e,t,n){return o3(Et(e),Mo.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&mk(e),r})}function u3(e,t,n,r){return Et(e).onIdTokenChanged(t,n,r)}function c3(e,t,n){return Et(e).beforeAuthStateChanged(t,n)}function d3(e,t,n,r){return Et(e).onAuthStateChanged(t,n,r)}function h3(e){return Et(e).signOut()}const dd="__sak";/**
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
 */class yk{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(dd,"1"),this.storage.removeItem(dd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function f3(){const e=ht();return Cv(e)||fh(e)}const p3=1e3,g3=10;class vk extends yk{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=f3()&&Oj(),this.fallbackToPolling=ck(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);bj()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,g3):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},p3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}vk.type="LOCAL";const m3=vk;/**
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
 */class _k extends yk{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}_k.type="SESSION";const wk=_k;/**
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
 */function y3(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class gh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new gh(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await y3(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gh.receivers=[];/**
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
 */function kv(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class v3{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=kv("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function $n(){return window}function _3(e){$n().location.href=e}/**
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
 */function Ek(){return typeof $n().WorkerGlobalScope<"u"&&typeof $n().importScripts=="function"}async function w3(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function E3(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function S3(){return Ek()?self:null}/**
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
 */const Sk="firebaseLocalStorageDb",C3=1,hd="firebaseLocalStorage",Ck="fbase_key";class Vl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mh(e,t){return e.transaction([hd],t?"readwrite":"readonly").objectStore(hd)}function T3(){const e=indexedDB.deleteDatabase(Sk);return new Vl(e).toPromise()}function Bg(){const e=indexedDB.open(Sk,C3);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(hd,{keyPath:Ck})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(hd)?t(r):(r.close(),await T3(),t(await Bg()))})})}async function v1(e,t,n){const r=mh(e,!0).put({[Ck]:t,value:n});return new Vl(r).toPromise()}async function I3(e,t){const n=mh(e,!1).get(t),r=await new Vl(n).toPromise();return r===void 0?null:r.value}function _1(e,t){const n=mh(e,!0).delete(t);return new Vl(n).toPromise()}const x3=800,k3=3;class Tk{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bg(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>k3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ek()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gh._getInstance(S3()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await w3(),!this.activeServiceWorker)return;this.sender=new v3(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||E3()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Bg();return await v1(t,dd,"1"),await _1(t,dd),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>v1(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>I3(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>_1(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=mh(i,!1).getAll();return new Vl(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),x3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tk.type="LOCAL";const P3=Tk;new Ul(3e4,6e4);/**
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
 */function Ik(e,t){return t?er(t):(z(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Pv extends Tv{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return eo(t,this._buildIdpRequest())}_linkToIdToken(t,n){return eo(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return eo(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function R3(e){return gk(e.auth,new Pv(e),e.bypassAuthState)}function A3(e){const{auth:t,user:n}=e;return z(n,t,"internal-error"),s3(n,new Pv(e),e.bypassAuthState)}async function b3(e){const{auth:t,user:n}=e;return z(n,t,"internal-error"),i3(n,new Pv(e),e.bypassAuthState)}/**
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
 */class xk{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return R3;case"linkViaPopup":case"linkViaRedirect":return b3;case"reauthViaPopup":case"reauthViaRedirect":return A3;default:rn(this.auth,"internal-error")}}resolve(t){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const O3=new Ul(2e3,1e4);async function N3(e,t,n){const r=gi(e);uj(e,t,xv);const i=Ik(r,n);return new Di(r,"signInViaPopup",t,i).executeNotNull()}class Di extends xk{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Di.currentPopupAction&&Di.currentPopupAction.cancel(),Di.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return z(t,this.auth,"internal-error"),t}async onExecution(){hr(this.filter.length===1,"Popup operations only handle one event");const t=kv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Di.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,O3.get())};t()}}Di.currentPopupAction=null;/**
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
 */const D3="pendingRedirect",tc=new Map;class $3 extends xk{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=tc.get(this.auth._key());if(!t){try{const r=await L3(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}tc.set(this.auth._key(),t)}return this.bypassAuthState||tc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function L3(e,t){const n=j3(t),r=F3(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function M3(e,t){tc.set(e._key(),t)}function F3(e){return er(e._redirectPersistence)}function j3(e){return ec(D3,e.config.apiKey,e.name)}async function U3(e,t,n=!1){const r=gi(e),i=Ik(r,t),o=await new $3(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const z3=10*60*1e3;class B3{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!V3(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!kk(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dn(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=z3&&this.cachedEventUids.clear(),this.cachedEventUids.has(w1(t))}saveEventToCache(t){this.cachedEventUids.add(w1(t)),this.lastProcessedEventTime=Date.now()}}function w1(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function kk({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function V3(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kk(e);default:return!1}}/**
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
 */async function W3(e,t={}){return pi(e,"GET","/v1/projects",t)}/**
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
 */const H3=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,G3=/^https?/;async function K3(e){if(e.config.emulator)return;const{authorizedDomains:t}=await W3(e);for(const n of t)try{if(q3(n))return}catch{}rn(e,"unauthorized-domain")}function q3(e){const t=Ug(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!G3.test(n))return!1;if(H3.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Y3=new Ul(3e4,6e4);function E1(){const e=$n().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Q3(e){return new Promise((t,n)=>{var r,i,s;function o(){E1(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{E1(),n(Dn(e,"network-request-failed"))},timeout:Y3.get()})}if(!((i=(r=$n().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=$n().gapi)===null||s===void 0)&&s.load)o();else{const a=zj("iframefcb");return $n()[a]=()=>{gapi.load?o():n(Dn(e,"network-request-failed"))},hk(`${Uj()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw nc=null,t})}let nc=null;function X3(e){return nc=nc||Q3(e),nc}/**
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
 */const J3=new Ul(5e3,15e3),Z3="__/auth/iframe",eU="emulator/auth/iframe",tU={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nU=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rU(e){const t=e.config;z(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ev(t,eU):`https://${e.config.authDomain}/${Z3}`,r={apiKey:t.apiKey,appName:e.name,v:ds},i=nU.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${No(r).slice(1)}`}async function iU(e){const t=await X3(e),n=$n().gapi;return z(n,e,"internal-error"),t.open({where:document.body,url:rU(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tU,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Dn(e,"network-request-failed"),a=$n().setTimeout(()=>{s(o)},J3.get());function l(){$n().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const sU={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oU=500,aU=600,lU="_blank",uU="http://localhost";class S1{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cU(e,t,n,r=oU,i=aU){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},sU),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ht().toLowerCase();n&&(a=sk(u)?lU:n),ik(u)&&(t=t||uU,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[f,m])=>`${h}${f}=${m},`,"");if(Aj(u)&&a!=="_self")return dU(t||"",a),new S1(null);const d=window.open(t||"",a,c);z(d,e,"popup-blocked");try{d.focus()}catch{}return new S1(d)}function dU(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const hU="__/auth/handler",fU="emulator/auth/handler",pU=encodeURIComponent("fac");async function C1(e,t,n,r,i,s){z(e.config.authDomain,e,"auth-domain-config-required"),z(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ds,eventId:i};if(t instanceof xv){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Sg(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(t instanceof Bl){const c=t.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${pU}=${encodeURIComponent(l)}`:"";return`${gU(e)}?${No(a).slice(1)}${u}`}function gU({config:e}){return e.emulator?Ev(e,fU):`https://${e.authDomain}/${hU}`}/**
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
 */const Yf="webStorageSupport";class mU{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wk,this._completeRedirectFn=U3,this._overrideRedirectResult=M3}async _openPopup(t,n,r,i){var s;hr((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await C1(t,n,r,Ug(),i);return cU(t,o,kv())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await C1(t,n,r,Ug(),i);return _3(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(hr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await iU(t),r=new B3(t);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Yf,{type:Yf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Yf];o!==void 0&&n(!!o),rn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=K3(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return ck()||Cv()||fh()}}const yU=mU;var T1="@firebase/auth",I1="1.6.2";/**
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
 */class vU{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _U(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wU(e){Zi(new si("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dk(e)},u=new Mj(r,i,s,l);return Gj(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Zi(new si("auth-internal",t=>{const n=gi(t.getProvider("auth").getImmediate());return(r=>new vU(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(T1,I1,_U(e)),Nn(T1,I1,"esm2017")}/**
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
 */const EU=5*60,SU=_I("authIdTokenMaxAge")||EU;let x1=null;const CU=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>SU)return;const i=n==null?void 0:n.token;x1!==i&&(x1=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function TU(e=Uy()){const t=th(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Hj(e,{popupRedirectResolver:yU,persistence:[P3,m3,wk]}),r=_I("authTokenSyncURL");if(r&&r.match(/^\/[^\/].*/)){const s=CU(r);c3(n,s,()=>s(n.currentUser)),u3(n,o=>s(o))}const i=mI("auth");return i&&Kj(n,`http://${i}`),n}function IU(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}Fj({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Dn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",IU().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wU("Browser");var xU="firebase",kU="10.9.0";/**
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
 */Nn(xU,kU,"app");var PU=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,Rv=Rv||{},B=PU||self;function yh(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Wl(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function RU(e){return Object.prototype.hasOwnProperty.call(e,Qf)&&e[Qf]||(e[Qf]=++AU)}var Qf="closure_uid_"+(1e9*Math.random()>>>0),AU=0;function bU(e,t,n){return e.call.apply(e.bind,arguments)}function OU(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function ut(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ut=bU:ut=OU,ut.apply(null,arguments)}function ku(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function He(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function mi(){this.s=this.s,this.o=this.o}var NU=0;mi.prototype.s=!1;mi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),NU!=0)&&RU(this)};mi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Pk=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Av(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function k1(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(yh(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function ct(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var DU=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};B.addEventListener("test",n,t),B.removeEventListener("test",n,t)}catch{}return e}();function gl(e){return/^[\s\xa0]*$/.test(e)}function vh(){var e=B.navigator;return e&&(e=e.userAgent)?e:""}function Pn(e){return vh().indexOf(e)!=-1}function bv(e){return bv[" "](e),e}bv[" "]=function(){};function $U(e,t){var n=P6;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var LU=Pn("Opera"),ml=Pn("Trident")||Pn("MSIE"),Rk=Pn("Edge"),Vg=Rk||ml,Ak=Pn("Gecko")&&!(vh().toLowerCase().indexOf("webkit")!=-1&&!Pn("Edge"))&&!(Pn("Trident")||Pn("MSIE"))&&!Pn("Edge"),MU=vh().toLowerCase().indexOf("webkit")!=-1&&!Pn("Edge");function bk(){var e=B.document;return e?e.documentMode:void 0}e:{var P1="",Xf=function(){var e=vh();if(Ak)return/rv:([^\);]+)(\)|;)/.exec(e);if(Rk)return/Edge\/([\d\.]+)/.exec(e);if(ml)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(MU)return/WebKit\/(\S+)/.exec(e);if(LU)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Xf&&(P1=Xf?Xf[1]:""),ml){var R1=bk();if(R1!=null&&R1>parseFloat(P1))break e}}B.document&&ml&&bk();function yl(e,t){if(ct.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ak){e:{try{bv(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:FU[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&yl.$.h.call(this)}}He(yl,ct);var FU={2:"touch",3:"pen",4:"mouse"};yl.prototype.h=function(){yl.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Hl="closure_listenable_"+(1e6*Math.random()|0),jU=0;function UU(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++jU,this.fa=this.ia=!1}function _h(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Ov(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function zU(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Ok(e){const t={};for(const n in e)t[n]=e[n];return t}const A1="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Nk(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<A1.length;s++)n=A1[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function wh(e){this.src=e,this.g={},this.h=0}wh.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Hg(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new UU(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Wg(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Pk(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(_h(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Hg(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Nv="closure_lm_"+(1e6*Math.random()|0),Jf={};function Dk(e,t,n,r,i){if(r&&r.once)return Lk(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Dk(e,t[s],n,r,i);return null}return n=Lv(n),e&&e[Hl]?e.O(t,n,Wl(r)?!!r.capture:!!r,i):$k(e,t,n,!1,r,i)}function $k(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Wl(i)?!!i.capture:!!i,a=$v(e);if(a||(e[Nv]=a=new wh(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=BU(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)DU||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Fk(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function BU(){function e(n){return t.call(e.src,e.listener,n)}const t=VU;return e}function Lk(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Lk(e,t[s],n,r,i);return null}return n=Lv(n),e&&e[Hl]?e.P(t,n,Wl(r)?!!r.capture:!!r,i):$k(e,t,n,!0,r,i)}function Mk(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Mk(e,t[s],n,r,i);else r=Wl(r)?!!r.capture:!!r,n=Lv(n),e&&e[Hl]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Hg(s,n,r,i),-1<n&&(_h(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=$v(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Hg(t,n,r,i)),(n=-1<e?t[e]:null)&&Dv(n))}function Dv(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Hl])Wg(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Fk(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=$v(t))?(Wg(n,e),n.h==0&&(n.src=null,t[Nv]=null)):_h(e)}}}function Fk(e){return e in Jf?Jf[e]:Jf[e]="on"+e}function VU(e,t){if(e.fa)e=!0;else{t=new yl(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Dv(e),e=n.call(r,t)}return e}function $v(e){return e=e[Nv],e instanceof wh?e:null}var Zf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Lv(e){return typeof e=="function"?e:(e[Zf]||(e[Zf]=function(t){return e.handleEvent(t)}),e[Zf])}function We(){mi.call(this),this.i=new wh(this),this.S=this,this.J=null}He(We,mi);We.prototype[Hl]=!0;We.prototype.removeEventListener=function(e,t,n,r){Mk(this,e,t,n,r)};function Ze(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new ct(t,e);else if(t instanceof ct)t.target=t.target||e;else{var i=t;t=new ct(r,e),Nk(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Pu(o,r,!0,t)&&i}if(o=t.g=e,i=Pu(o,r,!0,t)&&i,i=Pu(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Pu(o,r,!1,t)&&i}We.prototype.N=function(){if(We.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)_h(n[r]);delete e.g[t],e.h--}}this.J=null};We.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};We.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Pu(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Wg(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Mv=B.JSON.stringify;class WU{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function HU(){var e=Fv;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class GU{constructor(){this.h=this.g=null}add(t,n){const r=jk.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var jk=new WU(()=>new KU,e=>e.reset());class KU{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function qU(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function YU(e){B.setTimeout(()=>{throw e},0)}let vl,_l=!1,Fv=new GU,Uk=()=>{const e=B.Promise.resolve(void 0);vl=()=>{e.then(QU)}};var QU=()=>{for(var e;e=HU();){try{e.h.call(e.g)}catch(n){YU(n)}var t=jk;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}_l=!1};function Eh(e,t){We.call(this),this.h=e||1,this.g=t||B,this.j=ut(this.qb,this),this.l=Date.now()}He(Eh,We);A=Eh.prototype;A.ga=!1;A.T=null;A.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ze(this,"tick"),this.ga&&(jv(this),this.start()))}};A.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function jv(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}A.N=function(){Eh.$.N.call(this),jv(this),delete this.g};function Uv(e,t,n){if(typeof e=="function")n&&(e=ut(e,n));else if(e&&typeof e.handleEvent=="function")e=ut(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:B.setTimeout(e,t||0)}function zk(e){e.g=Uv(()=>{e.g=null,e.i&&(e.i=!1,zk(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class XU extends mi{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:zk(this)}N(){super.N(),this.g&&(B.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wl(e){mi.call(this),this.h=e,this.g={}}He(wl,mi);var b1=[];function Bk(e,t,n,r){Array.isArray(n)||(n&&(b1[0]=n.toString()),n=b1);for(var i=0;i<n.length;i++){var s=Dk(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Vk(e){Ov(e.g,function(t,n){this.g.hasOwnProperty(n)&&Dv(t)},e),e.g={}}wl.prototype.N=function(){wl.$.N.call(this),Vk(this)};wl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Sh(){this.g=!0}Sh.prototype.Ea=function(){this.g=!1};function JU(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function ZU(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function Bs(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+t6(e,n)+(r?" "+r:"")})}function e6(e,t){e.info(function(){return"TIMEOUT: "+t})}Sh.prototype.info=function(){};function t6(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Mv(n)}catch{return t}}var Fo={},O1=null;function zv(){return O1=O1||new We}Fo.Ta="serverreachability";function Wk(e){ct.call(this,Fo.Ta,e)}He(Wk,ct);function El(e){const t=zv();Ze(t,new Wk(t))}Fo.STAT_EVENT="statevent";function Hk(e,t){ct.call(this,Fo.STAT_EVENT,e),this.stat=t}He(Hk,ct);function yt(e){const t=zv();Ze(t,new Hk(t,e))}Fo.Ua="timingevent";function Gk(e,t){ct.call(this,Fo.Ua,e),this.size=t}He(Gk,ct);function Gl(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return B.setTimeout(function(){e()},t)}var Bv={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},n6={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Vv(){}Vv.prototype.h=null;function N1(e){return e.h||(e.h=e.i())}function r6(){}var Kl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Wv(){ct.call(this,"d")}He(Wv,ct);function Hv(){ct.call(this,"c")}He(Hv,ct);var Gg;function Ch(){}He(Ch,Vv);Ch.prototype.g=function(){return new XMLHttpRequest};Ch.prototype.i=function(){return{}};Gg=new Ch;function ql(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new wl(this),this.P=i6,e=Vg?125:void 0,this.V=new Eh(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Kk}function Kk(){this.i=null,this.g="",this.h=!1}var i6=45e3,qk={},Kg={};A=ql.prototype;A.setTimeout=function(e){this.P=e};function qg(e,t,n){e.L=1,e.A=Ih(fr(t)),e.u=n,e.S=!0,Yk(e,null)}function Yk(e,t){e.G=Date.now(),Yl(e),e.B=fr(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),rP(n.i,"t",r),e.o=0,n=e.l.J,e.h=new Kk,e.g=TP(e.l,n?t:null,!e.u),0<e.O&&(e.M=new XU(ut(e.Pa,e,e.g),e.O)),Bk(e.U,e.g,"readystatechange",e.nb),t=e.I?Ok(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),El(),JU(e.j,e.v,e.B,e.m,e.W,e.u)}A.nb=function(e){e=e.target;const t=this.M;t&&Rn(e)==3?t.l():this.Pa(e)};A.Pa=function(e){try{if(e==this.g)e:{const c=Rn(this.g);var t=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||Vg||this.g&&(this.h.h||this.g.ja()||M1(this.g)))){this.J||c!=4||t==7||(t==8||0>=d?El(3):El(2)),Th(this);var n=this.g.da();this.ca=n;t:if(Qk(this)){var r=M1(this.g);e="";var i=r.length,s=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$i(this),Pa(this);var o="";break t}this.h.i=new B.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,ZU(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!gl(a)){var u=a;break t}}u=null}if(n=u)Bs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yg(this,n);else{this.i=!1,this.s=3,yt(12),$i(this),Pa(this);break e}}this.S?(Xk(this,c,o),Vg&&this.i&&c==3&&(Bk(this.U,this.V,"tick",this.mb),this.V.start())):(Bs(this.j,this.m,o,null),Yg(this,o)),c==4&&$i(this),this.i&&!this.J&&(c==4?wP(this.l,this):(this.i=!1,Yl(this)))}else I6(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),$i(this),Pa(this)}}}catch{}finally{}};function Qk(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function Xk(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=s6(e,n),i==Kg){t==4&&(e.s=4,yt(14),r=!1),Bs(e.j,e.m,null,"[Incomplete Response]");break}else if(i==qk){e.s=4,yt(15),Bs(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Bs(e.j,e.m,i,null),Yg(e,i);Qk(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,yt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Xv(t),t.M=!0,yt(11))):(Bs(e.j,e.m,n,"[Invalid Chunked Response]"),$i(e),Pa(e))}A.mb=function(){if(this.g){var e=Rn(this.g),t=this.g.ja();this.o<t.length&&(Th(this),Xk(this,e,t),this.i&&e!=4&&Yl(this))}};function s6(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?Kg:(n=Number(t.substring(n,r)),isNaN(n)?qk:(r+=1,r+n>t.length?Kg:(t=t.slice(r,r+n),e.o=r+n,t)))}A.cancel=function(){this.J=!0,$i(this)};function Yl(e){e.Y=Date.now()+e.P,Jk(e,e.P)}function Jk(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=Gl(ut(e.lb,e),t)}function Th(e){e.C&&(B.clearTimeout(e.C),e.C=null)}A.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(e6(this.j,this.B),this.L!=2&&(El(),yt(17)),$i(this),this.s=2,Pa(this)):Jk(this,this.Y-e)};function Pa(e){e.l.H==0||e.J||wP(e.l,e)}function $i(e){Th(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,jv(e.V),Vk(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Yg(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Qg(n.i,e))){if(!e.K&&Qg(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)gd(n),Rh(n);else break e;Qv(n),yt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Gl(ut(n.ib,n),6e3));if(1>=oP(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Li(n,11)}else if((e.K||n.g==e)&&gd(n),!gl(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=e.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.i;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Gv(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,ye(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=CP(r,r.J?r.pa:null,r.Y),o.K){aP(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Th(a),Yl(a)),r.g=o}else vP(r);0<n.j.length&&Ah(n)}else u[0]!="stop"&&u[0]!="close"||Li(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Li(n,7):Yv(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}El(4)}catch{}}function o6(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(yh(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function a6(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(yh(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Zk(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(yh(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=a6(e),r=o6(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var eP=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function l6(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Bi(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Bi){this.h=e.h,fd(this,e.j),this.s=e.s,this.g=e.g,pd(this,e.m),this.l=e.l;var t=e.i,n=new Sl;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),D1(this,n),this.o=e.o}else e&&(t=String(e).match(eP))?(this.h=!1,fd(this,t[1]||"",!0),this.s=da(t[2]||""),this.g=da(t[3]||"",!0),pd(this,t[4]),this.l=da(t[5]||"",!0),D1(this,t[6]||"",!0),this.o=da(t[7]||"")):(this.h=!1,this.i=new Sl(null,this.h))}Bi.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ha(t,$1,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ha(t,$1,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(ha(n,n.charAt(0)=="/"?d6:c6,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ha(n,f6)),e.join("")};function fr(e){return new Bi(e)}function fd(e,t,n){e.j=n?da(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function pd(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function D1(e,t,n){t instanceof Sl?(e.i=t,p6(e.i,e.h)):(n||(t=ha(t,h6)),e.i=new Sl(t,e.h))}function ye(e,t,n){e.i.set(t,n)}function Ih(e){return ye(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function da(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ha(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,u6),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function u6(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var $1=/[#\/\?@]/g,c6=/[#\?:]/g,d6=/[#\?]/g,h6=/[#\?@]/g,f6=/#/g;function Sl(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function yi(e){e.g||(e.g=new Map,e.h=0,e.i&&l6(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}A=Sl.prototype;A.add=function(e,t){yi(this),this.i=null,e=jo(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function tP(e,t){yi(e),t=jo(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function nP(e,t){return yi(e),t=jo(e,t),e.g.has(t)}A.forEach=function(e,t){yi(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};A.ta=function(){yi(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};A.Z=function(e){yi(this);let t=[];if(typeof e=="string")nP(this,e)&&(t=t.concat(this.g.get(jo(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};A.set=function(e,t){return yi(this),this.i=null,e=jo(this,e),nP(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};A.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function rP(e,t,n){tP(e,t),0<n.length&&(e.i=null,e.g.set(jo(e,t),Av(n)),e.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function jo(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function p6(e,t){t&&!e.j&&(yi(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(tP(this,r),rP(this,i,n))},e)),e.j=t}var g6=class{constructor(e,t){this.g=e,this.map=t}};function iP(e){this.l=e||m6,B.PerformanceNavigationTiming?(e=B.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(B.g&&B.g.Ka&&B.g.Ka()&&B.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var m6=10;function sP(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function oP(e){return e.h?1:e.g?e.g.size:0}function Qg(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Gv(e,t){e.g?e.g.add(t):e.h=t}function aP(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}iP.prototype.cancel=function(){if(this.i=lP(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function lP(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Av(e.i)}var y6=class{stringify(e){return B.JSON.stringify(e,void 0)}parse(e){return B.JSON.parse(e,void 0)}};function v6(){this.g=new y6}function _6(e,t,n){const r=n||"";try{Zk(e,function(i,s){let o=i;Wl(i)&&(o=Mv(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function w6(e,t){const n=new Sh;if(B.Image){const r=new Image;r.onload=ku(Ru,n,r,"TestLoadImage: loaded",!0,t),r.onerror=ku(Ru,n,r,"TestLoadImage: error",!1,t),r.onabort=ku(Ru,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=ku(Ru,n,r,"TestLoadImage: timeout",!1,t),B.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Ru(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function xh(e){this.l=e.ec||null,this.j=e.ob||!1}He(xh,Vv);xh.prototype.g=function(){return new kh(this.l,this.j)};xh.prototype.i=function(e){return function(){return e}}({});function kh(e,t){We.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Kv,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}He(kh,We);var Kv=0;A=kh.prototype;A.open=function(e,t){if(this.readyState!=Kv)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Cl(this)};A.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||B).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ql(this)),this.readyState=Kv};A.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Cl(this)),this.g&&(this.readyState=3,Cl(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof B.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;uP(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function uP(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}A.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ql(this):Cl(this),this.readyState==3&&uP(this)}};A.Za=function(e){this.g&&(this.response=this.responseText=e,Ql(this))};A.Ya=function(e){this.g&&(this.response=e,Ql(this))};A.ka=function(){this.g&&Ql(this)};function Ql(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Cl(e)}A.setRequestHeader=function(e,t){this.v.append(e,t)};A.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Cl(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(kh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var E6=B.JSON.parse;function Re(e){We.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=cP,this.L=this.M=!1}He(Re,We);var cP="",S6=/^https?$/i,C6=["POST","PUT"];A=Re.prototype;A.Oa=function(e){this.M=e};A.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Gg.g(),this.C=this.u?N1(this.u):N1(Gg),this.g.onreadystatechange=ut(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){L1(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=B.FormData&&e instanceof B.FormData,!(0<=Pk(C6,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{fP(this),0<this.B&&((this.L=T6(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ut(this.ua,this)):this.A=Uv(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){L1(this,s)}};function T6(e){return ml&&typeof e.timeout=="number"&&e.ontimeout!==void 0}A.ua=function(){typeof Rv<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ze(this,"timeout"),this.abort(8))};function L1(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,dP(e),Ph(e)}function dP(e){e.F||(e.F=!0,Ze(e,"complete"),Ze(e,"error"))}A.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ze(this,"complete"),Ze(this,"abort"),Ph(this))};A.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ph(this,!0)),Re.$.N.call(this)};A.La=function(){this.s||(this.G||this.v||this.l?hP(this):this.kb())};A.kb=function(){hP(this)};function hP(e){if(e.h&&typeof Rv<"u"&&(!e.C[1]||Rn(e)!=4||e.da()!=2)){if(e.v&&Rn(e)==4)Uv(e.La,0,e);else if(Ze(e,"readystatechange"),Rn(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(eP)[1]||null;!i&&B.self&&B.self.location&&(i=B.self.location.protocol.slice(0,-1)),r=!S6.test(i?i.toLowerCase():"")}n=r}if(n)Ze(e,"complete"),Ze(e,"success");else{e.m=6;try{var s=2<Rn(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",dP(e)}}finally{Ph(e)}}}}function Ph(e,t){if(e.g){fP(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Ze(e,"ready");try{n.onreadystatechange=r}catch{}}}function fP(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(B.clearTimeout(e.A),e.A=null)}A.isActive=function(){return!!this.g};function Rn(e){return e.g?e.g.readyState:0}A.da=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}};A.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),E6(t)}};function M1(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case cP:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function I6(e){const t={};e=(e.g&&2<=Rn(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(gl(e[r]))continue;var n=qU(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}zU(t,function(r){return r.join(", ")})}A.Ia=function(){return this.m};A.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function pP(e){let t="";return Ov(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function qv(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=pP(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):ye(e,t,n))}function ea(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function gP(e){this.Ga=0,this.j=[],this.l=new Sh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ea("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ea("baseRetryDelayMs",5e3,e),this.hb=ea("retryDelaySeedMs",1e4,e),this.eb=ea("forwardChannelMaxRetries",2,e),this.xa=ea("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new iP(e&&e.concurrentRequestLimit),this.Ja=new v6,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}A=gP.prototype;A.ra=8;A.H=1;function Yv(e){if(mP(e),e.H==3){var t=e.W++,n=fr(e.I);if(ye(n,"SID",e.K),ye(n,"RID",t),ye(n,"TYPE","terminate"),Xl(e,n),t=new ql(e,e.l,t),t.L=2,t.A=Ih(fr(n)),n=!1,B.navigator&&B.navigator.sendBeacon)try{n=B.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&B.Image&&(new Image().src=t.A,n=!0),n||(t.g=TP(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Yl(t)}SP(e)}function Rh(e){e.g&&(Xv(e),e.g.cancel(),e.g=null)}function mP(e){Rh(e),e.u&&(B.clearTimeout(e.u),e.u=null),gd(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&B.clearTimeout(e.m),e.m=null)}function Ah(e){if(!sP(e.i)&&!e.m){e.m=!0;var t=e.Na;vl||Uk(),_l||(vl(),_l=!0),Fv.add(t,e),e.C=0}}function x6(e,t){return oP(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Gl(ut(e.Na,e,t),EP(e,e.C)),e.C++,!0)}A.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new ql(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Ok(s),Nk(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=yP(this,i,t),n=fr(this.I),ye(n,"RID",e),ye(n,"CVER",22),this.F&&ye(n,"X-HTTP-Session-Id",this.F),Xl(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(pP(s)))+"&"+t:this.o&&qv(n,this.o,s)),Gv(this.i,i),this.bb&&ye(n,"TYPE","init"),this.P?(ye(n,"$req",t),ye(n,"SID","null"),i.aa=!0,qg(i,n,null)):qg(i,n,t),this.H=2}}else this.H==3&&(e?F1(this,e):this.j.length==0||sP(this.i)||F1(this))};function F1(e,t){var n;t?n=t.m:n=e.W++;const r=fr(e.I);ye(r,"SID",e.K),ye(r,"RID",n),ye(r,"AID",e.V),Xl(e,r),e.o&&e.s&&qv(r,e.o,e.s),n=new ql(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=yP(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Gv(e.i,n),qg(n,r,t)}function Xl(e,t){e.na&&Ov(e.na,function(n,r){ye(t,r,n)}),e.h&&Zk({},function(n,r){ye(t,r,n)})}function yP(e,t,n){n=Math.min(e.j.length,n);var r=e.h?ut(e.h.Va,e.h,e):null;e:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{_6(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function vP(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;vl||Uk(),_l||(vl(),_l=!0),Fv.add(t,e),e.A=0}}function Qv(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Gl(ut(e.Ma,e),EP(e,e.A)),e.A++,!0)}A.Ma=function(){if(this.u=null,_P(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Gl(ut(this.jb,this),e)}};A.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,yt(10),Rh(this),_P(this))};function Xv(e){e.B!=null&&(B.clearTimeout(e.B),e.B=null)}function _P(e){e.g=new ql(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=fr(e.wa);ye(t,"RID","rpc"),ye(t,"SID",e.K),ye(t,"AID",e.V),ye(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&ye(t,"TO",e.qa),ye(t,"TYPE","xmlhttp"),Xl(e,t),e.o&&e.s&&qv(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=Ih(fr(t)),n.u=null,n.S=!0,Yk(n,e)}A.ib=function(){this.v!=null&&(this.v=null,Rh(this),Qv(this),yt(19))};function gd(e){e.v!=null&&(B.clearTimeout(e.v),e.v=null)}function wP(e,t){var n=null;if(e.g==t){gd(e),Xv(e),e.g=null;var r=2}else if(Qg(e.i,t))n=t.F,aP(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=zv(),Ze(r,new Gk(r,n)),Ah(e)}else vP(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&x6(e,t)||r==2&&Qv(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Li(e,5);break;case 4:Li(e,10);break;case 3:Li(e,6);break;default:Li(e,2)}}}function EP(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Li(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=ut(e.pb,e);n||(n=new Bi("//www.google.com/images/cleardot.gif"),B.location&&B.location.protocol=="http"||fd(n,"https"),Ih(n)),w6(n.toString(),r)}else yt(2);e.H=0,e.h&&e.h.za(t),SP(e),mP(e)}A.pb=function(e){e?(this.l.info("Successfully pinged google.com"),yt(2)):(this.l.info("Failed to ping google.com"),yt(1))};function SP(e){if(e.H=0,e.ma=[],e.h){const t=lP(e.i);(t.length!=0||e.j.length!=0)&&(k1(e.ma,t),k1(e.ma,e.j),e.i.i.length=0,Av(e.j),e.j.length=0),e.h.ya()}}function CP(e,t,n){var r=n instanceof Bi?fr(n):new Bi(n);if(r.g!="")t&&(r.g=t+"."+r.g),pd(r,r.m);else{var i=B.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Bi(null);r&&fd(s,r),t&&(s.g=t),i&&pd(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&ye(r,n,t),ye(r,"VER",e.ra),Xl(e,r),r}function TP(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new Re(new xh({ob:n})):new Re(e.va),t.Oa(e.J),t}A.isActive=function(){return!!this.h&&this.h.isActive(this)};function IP(){}A=IP.prototype;A.Ba=function(){};A.Aa=function(){};A.za=function(){};A.ya=function(){};A.isActive=function(){return!0};A.Va=function(){};function sn(e,t){We.call(this),this.g=new gP(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!gl(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!gl(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Uo(this)}He(sn,We);sn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;yt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=CP(e,null,e.Y),Ah(e)};sn.prototype.close=function(){Yv(this.g)};sn.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Mv(e),e=n);t.j.push(new g6(t.fb++,e)),t.H==3&&Ah(t)};sn.prototype.N=function(){this.g.h=null,delete this.j,Yv(this.g),delete this.g,sn.$.N.call(this)};function xP(e){Wv.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}He(xP,Wv);function kP(){Hv.call(this),this.status=1}He(kP,Hv);function Uo(e){this.g=e}He(Uo,IP);Uo.prototype.Ba=function(){Ze(this.g,"a")};Uo.prototype.Aa=function(e){Ze(this.g,new xP(e))};Uo.prototype.za=function(e){Ze(this.g,new kP)};Uo.prototype.ya=function(){Ze(this.g,"b")};function k6(){this.blockSize=-1}function Fn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}He(Fn,k6);Fn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ep(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}Fn.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)ep(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){ep(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){ep(this,r),i=0;break}}this.h=i,this.i+=t};Fn.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function ae(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var P6={};function Jv(e){return-128<=e&&128>e?$U(e,function(t){return new ae([t|0],0>t?-1:0)}):new ae([e|0],0>e?-1:0)}function An(e){if(isNaN(e)||!isFinite(e))return to;if(0>e)return Xe(An(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Xg;return new ae(t,0)}function PP(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Xe(PP(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=An(Math.pow(t,8)),r=to,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=An(Math.pow(t,s)),r=r.R(s).add(An(o))):(r=r.R(n),r=r.add(An(o)))}return r}var Xg=4294967296,to=Jv(0),Jg=Jv(1),j1=Jv(16777216);A=ae.prototype;A.ea=function(){if(Xt(this))return-Xe(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Xg+r)*t,t*=Xg}return e};A.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(tr(this))return"0";if(Xt(this))return"-"+Xe(this).toString(e);for(var t=An(Math.pow(e,6)),n=this,r="";;){var i=yd(n,t).g;n=md(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,tr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};A.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function tr(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Xt(e){return e.h==-1}A.X=function(e){return e=md(this,e),Xt(e)?-1:tr(e)?0:1};function Xe(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new ae(n,~e.h).add(Jg)}A.abs=function(){return Xt(this)?Xe(this):this};A.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ae(n,n[n.length-1]&-2147483648?-1:0)};function md(e,t){return e.add(Xe(t))}A.R=function(e){if(tr(this)||tr(e))return to;if(Xt(this))return Xt(e)?Xe(this).R(Xe(e)):Xe(Xe(this).R(e));if(Xt(e))return Xe(this.R(Xe(e)));if(0>this.X(j1)&&0>e.X(j1))return An(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,Au(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Au(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Au(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Au(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new ae(n,0)};function Au(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function ta(e,t){this.g=e,this.h=t}function yd(e,t){if(tr(t))throw Error("division by zero");if(tr(e))return new ta(to,to);if(Xt(e))return t=yd(Xe(e),t),new ta(Xe(t.g),Xe(t.h));if(Xt(t))return t=yd(e,Xe(t)),new ta(Xe(t.g),t.h);if(30<e.g.length){if(Xt(e)||Xt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Jg,r=t;0>=r.X(e);)n=U1(n),r=U1(r);var i=Is(n,1),s=Is(r,1);for(r=Is(r,2),n=Is(n,2);!tr(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Is(r,1),n=Is(n,1)}return t=md(e,i.R(t)),new ta(i,t)}for(i=to;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=An(n),o=s.R(t);Xt(o)||0<o.X(e);)n-=r,s=An(n),o=s.R(t);tr(s)&&(s=Jg),i=i.add(s),e=md(e,o)}return new ta(i,e)}A.gb=function(e){return yd(this,e).h};A.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new ae(n,this.h&e.h)};A.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new ae(n,this.h|e.h)};A.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new ae(n,this.h^e.h)};function U1(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new ae(n,e.h)}function Is(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new ae(i,e.h)}sn.prototype.send=sn.prototype.u;sn.prototype.open=sn.prototype.m;sn.prototype.close=sn.prototype.close;Bv.NO_ERROR=0;Bv.TIMEOUT=8;Bv.HTTP_ERROR=6;n6.COMPLETE="complete";r6.EventType=Kl;Kl.OPEN="a";Kl.CLOSE="b";Kl.ERROR="c";Kl.MESSAGE="d";We.prototype.listen=We.prototype.O;Re.prototype.listenOnce=Re.prototype.P;Re.prototype.getLastError=Re.prototype.Sa;Re.prototype.getLastErrorCode=Re.prototype.Ia;Re.prototype.getStatus=Re.prototype.da;Re.prototype.getResponseJson=Re.prototype.Wa;Re.prototype.getResponseText=Re.prototype.ja;Re.prototype.send=Re.prototype.ha;Re.prototype.setWithCredentials=Re.prototype.Oa;Fn.prototype.digest=Fn.prototype.l;Fn.prototype.reset=Fn.prototype.reset;Fn.prototype.update=Fn.prototype.j;ae.prototype.add=ae.prototype.add;ae.prototype.multiply=ae.prototype.R;ae.prototype.modulo=ae.prototype.gb;ae.prototype.compare=ae.prototype.X;ae.prototype.toNumber=ae.prototype.ea;ae.prototype.toString=ae.prototype.toString;ae.prototype.getBits=ae.prototype.D;ae.fromNumber=An;ae.fromString=PP;var R6=ae;const z1="@firebase/firestore";/**
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
 */let Jl="10.9.0";/**
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
 */const Co=new eh("@firebase/firestore");function jt(e,...t){if(Co.logLevel<=ne.DEBUG){const n=t.map(e_);Co.debug(`Firestore (${Jl}): ${e}`,...n)}}function Zv(e,...t){if(Co.logLevel<=ne.ERROR){const n=t.map(e_);Co.error(`Firestore (${Jl}): ${e}`,...n)}}function A6(e,...t){if(Co.logLevel<=ne.WARN){const n=t.map(e_);Co.warn(`Firestore (${Jl}): ${e}`,...n)}}function e_(e){if(typeof e=="string")return e;try{/**
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
 */function t_(e="Unexpected state"){const t=`FIRESTORE (${Jl}) INTERNAL ASSERTION FAILED: `+e;throw Zv(t),new Error(t)}function Zg(e,t){e||t_()}/**
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
 */const at={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class lt extends yr{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class no{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class RP{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class b6{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class O6{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class N6{constructor(t){this.t=t,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new no;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new no,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{jt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(jt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new no)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(jt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Zg(typeof r.accessToken=="string"),new RP(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Zg(t===null||typeof t=="string"),new it(t)}}class D6{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class $6{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new D6(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class L6{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class M6{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&jt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,jt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{jt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):jt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Zg(typeof n.token=="string"),this.R=n.token,new L6(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function F6(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class j6{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=F6(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function AP(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class U6{constructor(t,n,r,i,s,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class vd{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new vd("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof vd&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var B1,J;(J=B1||(B1={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new R6([4294967295,4294967295],0);function tp(){return typeof document<"u"?document:null}/**
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
 */class z6{constructor(t,n,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&jt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class n_{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new no,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new n_(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new lt(at.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function B6(e,t){if(Zv("AsyncQueue",`${t}: ${e}`),AP(e))return new lt(at.UNAVAILABLE,`${t}: ${e}`);throw e}var V1,W1;(W1=V1||(V1={})).j_="default",W1.Cache="cache";/**
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
 */class V6{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=j6.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{jt("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(jt("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new lt(at.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new no;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=B6(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}/**
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
 */function bP(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const H1=new Map;function W6(e,t,n,r){if(t===!0&&r===!0)throw new lt(at.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function H6(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":t_()}function G6(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new lt(at.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=H6(e);throw new lt(at.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class G1{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new lt(at.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new lt(at.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}W6("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bP((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new lt(at.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new lt(at.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new lt(at.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class OP{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new G1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new lt(at.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new lt(at.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new G1(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new b6;switch(r.type){case"firstParty":return new $6(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new lt(at.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=H1.get(n);r&&(jt("ComponentProvider","Removing Datastore"),H1.delete(n),r.terminate())}(this),Promise.resolve()}}function K6(e,t,n,r={}){var i;const s=(e=G6(e,OP))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&A6("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=it.MOCK_USER;else{a=wI(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new lt(at.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new it(u)}e._authCredentials=new O6(new RP(a,l))}}/**
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
 */class q6{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new z6(this,"async_queue_retry"),this.cu=()=>{const n=tp();n&&jt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=tp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.lu(),this.hu(t)}enterRestrictedMode(t){if(!this.iu){this.iu=!0,this.au=t||!1;const n=tp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(t){if(this.lu(),this.iu)return new Promise(()=>{});const n=new no;return this.hu(()=>this.iu&&this.au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ru.push(t),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(t){if(!AP(t))throw t;jt("AsyncQueue","Operation failed with retryable error: "+t)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(t){const n=this.nu.then(()=>(this._u=!0,t().catch(r=>{this.ou=r,this._u=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Zv("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(t,n,r){this.lu(),this.uu.indexOf(t)>-1&&(n=0);const i=n_.createAndSchedule(this,t,n,r,s=>this.Iu(s));return this.su.push(i),i}lu(){this.ou&&t_()}verifyOperationInProgress(){}async Tu(){let t;do t=this.nu,await t;while(t!==this.nu)}Eu(t){for(const n of this.su)if(n.timerId===t)return!0;return!1}du(t){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tu()})}Au(t){this.uu.push(t)}Iu(t){const n=this.su.indexOf(t);this.su.splice(n,1)}}class Y6 extends OP{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new q6}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||X6(this),this._firestoreClient.terminate()}}function Q6(e,t){const n=typeof e=="object"?e:Uy(),r=typeof e=="string"?e:t||"(default)",i=th(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=yI("firestore");s&&K6(i,...s)}return i}function X6(e){var t,n,r;const i=e._freezeSettings(),s=function(a,l,u,c){return new U6(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,bP(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new V6(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(t,n=!0){(function(i){Jl=i})(ds),Zi(new si("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Y6(new N6(r.getProvider("auth-internal")),new M6(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new lt(at.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vd(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Nn(z1,"4.5.0",t),Nn(z1,"4.5.0","esm2017")})();const J6={apiKey:"AIzaSyCzZoPkbBprm3eu5lNt47f1GKMUHoBzPlo",authDomain:"learnlingo1.firebaseapp.com",databaseURL:"https://learnlingo1-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"learnlingo1",storageBucket:"learnlingo1.appspot.com",messagingSenderId:"165391341432",appId:"1:165391341432:web:edff3e5a1bb989f50f9a8d",measurementId:"G-4VXPHQXXJ5"},r_=xI(J6),Z6=new Yn,ss=TU(r_),i_=Yx(r_);Q6(r_);const e9=dh(Yx()),np=Xd("favorites/addFavorite",async({userId:e,teacher:t})=>{try{const n=dh(i_,`users/${e}/favorites`),i={...(await yv(n)).val()||{},[t.id]:t};await qx(n,i)}catch(n){throw console.error(n),n}}),GW=Xd("favorites/fetchFavorites",async(e,{dispatch:t})=>{try{const n=dh(i_,`users/${e}/favorites`);X4(n,r=>{if(r.exists()){const i=r.val(),s=Object.values(i);t(Y1(s))}else t(Y1([]))})}catch(n){throw console.error("Error fetching favorites:",n),n}}),K1=Xd("favorites/deleteFavorite",async({userId:e,teacherId:t})=>{try{const n=dh(i_,`users/${e}/favorites`),r=(await yv(n)).val()||{};delete r[t],await qx(n,r)}catch(n){throw console.error(n),n}}),t9={items:[],isLoading:!1,error:null},n9=e=>{e.isLoading=!0},q1=(e,t)=>{e.isLoading=!1,e.error=t.payload},NP=iI({name:"favorites",initialState:t9,reducers:{setFavorites:(e,t)=>{e.isLoading=!1,e.error=null,e.items=t.payload}},extraReducers:e=>{e.addCase(np.rejected,q1).addCase(np.pending,n9).addCase(np.fulfilled,(t,n)=>{t.isLoading=!1;const r=n.payload;r&&t.items.push(r)}).addCase(K1.fulfilled,(t,n)=>{t.isLoading=!1;const r=n.payload;r&&(t.items=t.items.filter(i=>i.id!==r.id))}).addCase(K1.rejected,q1)}}),r9={key:"favorites",storage:Dy},i9=dI(r9,NP.reducer),{setFavorites:Y1}=NP.actions,rp=Xd("teachers/fetchAll",async(e,t)=>{try{const n=await yv(dl(e9,"teachers")),r=[];return n.forEach(i=>{r.push({...i.val(),id:i.key})}),r}catch(n){return console.error(n),t.rejectWithValue(n.message)}}),s9={items:[],isLoading:!1,error:null},o9=e=>{e.isLoading=!0},a9=(e,t)=>{e.isLoading=!1,e.error=t.payload},l9=iI({name:"teachers",initialState:s9,reducers:{},extraReducers:e=>{e.addCase(rp.pending,o9).addCase(rp.fulfilled,(t,n)=>{t.isLoading=!1,t.error=null,t.items=n.payload}).addCase(rp.rejected,a9)}}),u9={key:"teachers",storage:Dy},c9=dI(u9,l9.reducer),d9=VT({favorites:i9,teacher:c9}),DP=AD({reducer:d9,middleware:e=>e({serializableCheck:!1})});o$(DP);const h9="modulepreload",f9=function(e){return"/"+e},Q1={},s_=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=f9(s),s in Q1)return;Q1[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const d=i[c];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":h9,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},p9=V.div`
 min-width: 320px;
  max-width: 1440px;
  padding-top: 20px;
  padding-left:15px;
  padding-right: 15px;
  margin: 0 auto;

`,g9=V.header`

display: flex;
flex-wrap: wrap;
gap: 20px;
align-items: center;
justify-content: center;
margin-bottom: 30px;


@media screen and (min-width: 768px) {
  max-width: 1184px;
  margin: 0 auto;
  justify-content: space-between;;
  gap: 0px;
  margin-bottom: 0;
}
`;V.img`
  width: 28px;
  height: 28px;
  margin-right: 8px;
`;const m9=V.ul`
  display: flex;
  align-items: center;
`,y9=V(py)`
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
`;let v9={data:""},_9=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||v9,w9=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,E9=/\/\*[^]*?\*\/|  +/g,X1=/\n+/g,Dr=(e,t)=>{let n="",r="",i="";for(let s in e){let o=e[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Dr(o,s):s+"{"+Dr(o,s[1]=="k"?"":t)+"}":typeof o=="object"?r+=Dr(o,t?t.replace(/([^,])+/g,a=>s.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Dr.p?Dr.p(s,o):s+":"+o+";")}return n+(t&&i?t+"{"+i+"}":i)+r},Wn={},$P=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+$P(e[n]);return t}return e},S9=(e,t,n,r,i)=>{let s=$P(e),o=Wn[s]||(Wn[s]=(l=>{let u=0,c=11;for(;u<l.length;)c=101*c+l.charCodeAt(u++)>>>0;return"go"+c})(s));if(!Wn[o]){let l=s!==e?e:(u=>{let c,d,h=[{}];for(;c=w9.exec(u.replace(E9,""));)c[4]?h.shift():c[3]?(d=c[3].replace(X1," ").trim(),h.unshift(h[0][d]=h[0][d]||{})):h[0][c[1]]=c[2].replace(X1," ").trim();return h[0]})(e);Wn[o]=Dr(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&Wn.g?Wn.g:null;return n&&(Wn.g=Wn[o]),((l,u,c,d)=>{d?u.data=u.data.replace(d,l):u.data.indexOf(l)===-1&&(u.data=c?l+u.data:u.data+l)})(Wn[o],t,r,a),o},C9=(e,t,n)=>e.reduce((r,i,s)=>{let o=t[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":Dr(a,""):a===!1?"":a}return r+i+(o??"")},"");function bh(e){let t=this||{},n=e.call?e(t.p):e;return S9(n.unshift?n.raw?C9(n,[].slice.call(arguments,1),t.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(t.p):i),{}):n,_9(t.target),t.g,t.o,t.k)}let LP,em,tm;bh.bind({g:1});let pr=bh.bind({k:1});function T9(e,t,n,r){Dr.p=t,LP=e,em=n,tm=r}function vi(e,t){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:em&&em()},a),n.o=/ *go\d+/.test(l),a.className=bh.apply(n,r)+(l?" "+l:""),t&&(a.ref=o);let u=e;return e[0]&&(u=a.as||e,delete a.as),tm&&u[0]&&tm(a),LP(u,a)}return t?t(i):i}}var I9=e=>typeof e=="function",_d=(e,t)=>I9(e)?e(t):e,x9=(()=>{let e=0;return()=>(++e).toString()})(),MP=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),k9=20,rc=new Map,P9=1e3,J1=e=>{if(rc.has(e))return;let t=setTimeout(()=>{rc.delete(e),fs({type:4,toastId:e})},P9);rc.set(e,t)},R9=e=>{let t=rc.get(e);t&&clearTimeout(t)},nm=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,k9)};case 1:return t.toast.id&&R9(t.toast.id),{...e,toasts:e.toasts.map(s=>s.id===t.toast.id?{...s,...t.toast}:s)};case 2:let{toast:n}=t;return e.toasts.find(s=>s.id===n.id)?nm(e,{type:1,toast:n}):nm(e,{type:0,toast:n});case 3:let{toastId:r}=t;return r?J1(r):e.toasts.forEach(s=>{J1(s.id)}),{...e,toasts:e.toasts.map(s=>s.id===r||r===void 0?{...s,visible:!1}:s)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},ic=[],sc={toasts:[],pausedAt:void 0},fs=e=>{sc=nm(sc,e),ic.forEach(t=>{t(sc)})},A9={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},b9=(e={})=>{let[t,n]=w.useState(sc);w.useEffect(()=>(ic.push(n),()=>{let i=ic.indexOf(n);i>-1&&ic.splice(i,1)}),[t]);let r=t.toasts.map(i=>{var s,o;return{...e,...e[i.type],...i,duration:i.duration||((s=e[i.type])==null?void 0:s.duration)||(e==null?void 0:e.duration)||A9[i.type],style:{...e.style,...(o=e[i.type])==null?void 0:o.style,...i.style}}});return{...t,toasts:r}},O9=(e,t="blank",n)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(n==null?void 0:n.id)||x9()}),Zl=e=>(t,n)=>{let r=O9(t,e,n);return fs({type:2,toast:r}),r.id},Ut=(e,t)=>Zl("blank")(e,t);Ut.error=Zl("error");Ut.success=Zl("success");Ut.loading=Zl("loading");Ut.custom=Zl("custom");Ut.dismiss=e=>{fs({type:3,toastId:e})};Ut.remove=e=>fs({type:4,toastId:e});Ut.promise=(e,t,n)=>{let r=Ut.loading(t.loading,{...n,...n==null?void 0:n.loading});return e.then(i=>(Ut.success(_d(t.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{Ut.error(_d(t.error,i),{id:r,...n,...n==null?void 0:n.error})}),e};var N9=(e,t)=>{fs({type:1,toast:{id:e,height:t}})},D9=()=>{fs({type:5,time:Date.now()})},$9=e=>{let{toasts:t,pausedAt:n}=b9(e);w.useEffect(()=>{if(n)return;let s=Date.now(),o=t.map(a=>{if(a.duration===1/0)return;let l=(a.duration||0)+a.pauseDuration-(s-a.createdAt);if(l<0){a.visible&&Ut.dismiss(a.id);return}return setTimeout(()=>Ut.dismiss(a.id),l)});return()=>{o.forEach(a=>a&&clearTimeout(a))}},[t,n]);let r=w.useCallback(()=>{n&&fs({type:6,time:Date.now()})},[n]),i=w.useCallback((s,o)=>{let{reverseOrder:a=!1,gutter:l=8,defaultPosition:u}=o||{},c=t.filter(f=>(f.position||u)===(s.position||u)&&f.height),d=c.findIndex(f=>f.id===s.id),h=c.filter((f,m)=>m<d&&f.visible).length;return c.filter(f=>f.visible).slice(...a?[h+1]:[0,h]).reduce((f,m)=>f+(m.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:N9,startPause:D9,endPause:r,calculateOffset:i}}},L9=pr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,M9=pr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,F9=pr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,j9=vi("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L9} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${M9} 0.15s ease-out forwards;
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
    animation: ${F9} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,U9=pr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,z9=vi("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${U9} 1s linear infinite;
`,B9=pr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,V9=pr`
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
}`,W9=vi("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${B9} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${V9} 0.2s ease-out forwards;
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
`,H9=vi("div")`
  position: absolute;
`,G9=vi("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,K9=pr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,q9=vi("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${K9} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Y9=({toast:e})=>{let{icon:t,type:n,iconTheme:r}=e;return t!==void 0?typeof t=="string"?w.createElement(q9,null,t):t:n==="blank"?null:w.createElement(G9,null,w.createElement(z9,{...r}),n!=="loading"&&w.createElement(H9,null,n==="error"?w.createElement(j9,{...r}):w.createElement(W9,{...r})))},Q9=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,X9=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,J9="0%{opacity:0;} 100%{opacity:1;}",Z9="0%{opacity:1;} 100%{opacity:0;}",e5=vi("div")`
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
`,t5=vi("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,n5=(e,t)=>{let n=e.includes("top")?1:-1,[r,i]=MP()?[J9,Z9]:[Q9(n),X9(n)];return{animation:t?`${pr(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${pr(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},r5=w.memo(({toast:e,position:t,style:n,children:r})=>{let i=e.height?n5(e.position||t||"top-center",e.visible):{opacity:0},s=w.createElement(Y9,{toast:e}),o=w.createElement(t5,{...e.ariaProps},_d(e.message,e));return w.createElement(e5,{className:e.className,style:{...i,...n,...e.style}},typeof r=="function"?r({icon:s,message:o}):w.createElement(w.Fragment,null,s,o))});T9(w.createElement);var i5=({id:e,className:t,style:n,onHeightUpdate:r,children:i})=>{let s=w.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(e,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return w.createElement("div",{ref:s,className:t,style:n},i)},s5=(e,t)=>{let n=e.includes("top"),r=n?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:MP()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...r,...i}},o5=bh`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,bu=16,a5=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:a,handlers:l}=$9(n);return w.createElement("div",{style:{position:"fixed",zIndex:9999,top:bu,left:bu,right:bu,bottom:bu,pointerEvents:"none",...s},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},a.map(u=>{let c=u.position||t,d=l.calculateOffset(u,{reverseOrder:e,gutter:r,defaultPosition:t}),h=s5(c,d);return w.createElement(i5,{id:u.id,key:u.id,onHeightUpdate:l.updateHeight,className:u.visible?o5:"",style:h},u.type==="custom"?_d(u.message,u):i?i(u):w.createElement(r5,{toast:u,position:c}))}))},Zr=Ut,l5=function(t){return u5(t)&&!c5(t)};function u5(e){return!!e&&typeof e=="object"}function c5(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||f5(e)}var d5=typeof Symbol=="function"&&Symbol.for,h5=d5?Symbol.for("react.element"):60103;function f5(e){return e.$$typeof===h5}function p5(e){return Array.isArray(e)?[]:{}}function wd(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Tl(p5(e),e,t):e}function g5(e,t,n){return e.concat(t).map(function(r){return wd(r,n)})}function m5(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(i){r[i]=wd(e[i],n)}),Object.keys(t).forEach(function(i){!n.isMergeableObject(t[i])||!e[i]?r[i]=wd(t[i],n):r[i]=Tl(e[i],t[i],n)}),r}function Tl(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||g5,n.isMergeableObject=n.isMergeableObject||l5;var r=Array.isArray(t),i=Array.isArray(e),s=r===i;return s?r?n.arrayMerge(e,t,n):m5(e,t,n):wd(t,n)}Tl.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,i){return Tl(r,i,n)},{})};var rm=Tl,y5=typeof global=="object"&&global&&global.Object===Object&&global;const FP=y5;var v5=typeof self=="object"&&self&&self.Object===Object&&self,_5=FP||v5||Function("return this")();const Un=_5;var w5=Un.Symbol;const ui=w5;var jP=Object.prototype,E5=jP.hasOwnProperty,S5=jP.toString,na=ui?ui.toStringTag:void 0;function C5(e){var t=E5.call(e,na),n=e[na];try{e[na]=void 0;var r=!0}catch{}var i=S5.call(e);return r&&(t?e[na]=n:delete e[na]),i}var T5=Object.prototype,I5=T5.toString;function x5(e){return I5.call(e)}var k5="[object Null]",P5="[object Undefined]",Z1=ui?ui.toStringTag:void 0;function ps(e){return e==null?e===void 0?P5:k5:Z1&&Z1 in Object(e)?C5(e):x5(e)}function UP(e,t){return function(n){return e(t(n))}}var R5=UP(Object.getPrototypeOf,Object);const o_=R5;function gs(e){return e!=null&&typeof e=="object"}var A5="[object Object]",b5=Function.prototype,O5=Object.prototype,zP=b5.toString,N5=O5.hasOwnProperty,D5=zP.call(Object);function eE(e){if(!gs(e)||ps(e)!=A5)return!1;var t=o_(e);if(t===null)return!0;var n=N5.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&zP.call(n)==D5}var tE=Array.isArray,nE=Object.keys,$5=Object.prototype.hasOwnProperty,L5=typeof Element<"u";function im(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=tE(e),r=tE(t),i,s,o;if(n&&r){if(s=e.length,s!=t.length)return!1;for(i=s;i--!==0;)if(!im(e[i],t[i]))return!1;return!0}if(n!=r)return!1;var a=e instanceof Date,l=t instanceof Date;if(a!=l)return!1;if(a&&l)return e.getTime()==t.getTime();var u=e instanceof RegExp,c=t instanceof RegExp;if(u!=c)return!1;if(u&&c)return e.toString()==t.toString();var d=nE(e);if(s=d.length,s!==nE(t).length)return!1;for(i=s;i--!==0;)if(!$5.call(t,d[i]))return!1;if(L5&&e instanceof Element&&t instanceof Element)return e===t;for(i=s;i--!==0;)if(o=d[i],!(o==="_owner"&&e.$$typeof)&&!im(e[o],t[o]))return!1;return!0}return e!==e&&t!==t}var M5=function(t,n){try{return im(t,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const Pr=Cd(M5);var F5=!0;function BP(e,t){if(!F5){if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}function j5(){this.__data__=[],this.size=0}function VP(e,t){return e===t||e!==e&&t!==t}function Oh(e,t){for(var n=e.length;n--;)if(VP(e[n][0],t))return n;return-1}var U5=Array.prototype,z5=U5.splice;function B5(e){var t=this.__data__,n=Oh(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():z5.call(t,n,1),--this.size,!0}function V5(e){var t=this.__data__,n=Oh(t,e);return n<0?void 0:t[n][1]}function W5(e){return Oh(this.__data__,e)>-1}function H5(e,t){var n=this.__data__,r=Oh(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function _r(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}_r.prototype.clear=j5;_r.prototype.delete=B5;_r.prototype.get=V5;_r.prototype.has=W5;_r.prototype.set=H5;function G5(){this.__data__=new _r,this.size=0}function K5(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function q5(e){return this.__data__.get(e)}function Y5(e){return this.__data__.has(e)}function eu(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Q5="[object AsyncFunction]",X5="[object Function]",J5="[object GeneratorFunction]",Z5="[object Proxy]";function WP(e){if(!eu(e))return!1;var t=ps(e);return t==X5||t==J5||t==Q5||t==Z5}var ez=Un["__core-js_shared__"];const ip=ez;var rE=function(){var e=/[^.]+$/.exec(ip&&ip.keys&&ip.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function tz(e){return!!rE&&rE in e}var nz=Function.prototype,rz=nz.toString;function ms(e){if(e!=null){try{return rz.call(e)}catch{}try{return e+""}catch{}}return""}var iz=/[\\^$.*+?()[\]{}|]/g,sz=/^\[object .+?Constructor\]$/,oz=Function.prototype,az=Object.prototype,lz=oz.toString,uz=az.hasOwnProperty,cz=RegExp("^"+lz.call(uz).replace(iz,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function dz(e){if(!eu(e)||tz(e))return!1;var t=WP(e)?cz:sz;return t.test(ms(e))}function hz(e,t){return e==null?void 0:e[t]}function ys(e,t){var n=hz(e,t);return dz(n)?n:void 0}var fz=ys(Un,"Map");const Il=fz;var pz=ys(Object,"create");const xl=pz;function gz(){this.__data__=xl?xl(null):{},this.size=0}function mz(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var yz="__lodash_hash_undefined__",vz=Object.prototype,_z=vz.hasOwnProperty;function wz(e){var t=this.__data__;if(xl){var n=t[e];return n===yz?void 0:n}return _z.call(t,e)?t[e]:void 0}var Ez=Object.prototype,Sz=Ez.hasOwnProperty;function Cz(e){var t=this.__data__;return xl?t[e]!==void 0:Sz.call(t,e)}var Tz="__lodash_hash_undefined__";function Iz(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=xl&&t===void 0?Tz:t,this}function os(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}os.prototype.clear=gz;os.prototype.delete=mz;os.prototype.get=wz;os.prototype.has=Cz;os.prototype.set=Iz;function xz(){this.size=0,this.__data__={hash:new os,map:new(Il||_r),string:new os}}function kz(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Nh(e,t){var n=e.__data__;return kz(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Pz(e){var t=Nh(this,e).delete(e);return this.size-=t?1:0,t}function Rz(e){return Nh(this,e).get(e)}function Az(e){return Nh(this,e).has(e)}function bz(e,t){var n=Nh(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function _i(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}_i.prototype.clear=xz;_i.prototype.delete=Pz;_i.prototype.get=Rz;_i.prototype.has=Az;_i.prototype.set=bz;var Oz=200;function Nz(e,t){var n=this.__data__;if(n instanceof _r){var r=n.__data__;if(!Il||r.length<Oz-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new _i(r)}return n.set(e,t),this.size=n.size,this}function zo(e){var t=this.__data__=new _r(e);this.size=t.size}zo.prototype.clear=G5;zo.prototype.delete=K5;zo.prototype.get=q5;zo.prototype.has=Y5;zo.prototype.set=Nz;function Dz(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var $z=function(){try{var e=ys(Object,"defineProperty");return e({},"",{}),e}catch{}}();const iE=$z;function HP(e,t,n){t=="__proto__"&&iE?iE(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var Lz=Object.prototype,Mz=Lz.hasOwnProperty;function GP(e,t,n){var r=e[t];(!(Mz.call(e,t)&&VP(r,n))||n===void 0&&!(t in e))&&HP(e,t,n)}function Dh(e,t,n,r){var i=!n;n||(n={});for(var s=-1,o=t.length;++s<o;){var a=t[s],l=r?r(n[a],e[a],a,n,e):void 0;l===void 0&&(l=e[a]),i?HP(n,a,l):GP(n,a,l)}return n}function Fz(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var jz="[object Arguments]";function sE(e){return gs(e)&&ps(e)==jz}var KP=Object.prototype,Uz=KP.hasOwnProperty,zz=KP.propertyIsEnumerable,Bz=sE(function(){return arguments}())?sE:function(e){return gs(e)&&Uz.call(e,"callee")&&!zz.call(e,"callee")};const Vz=Bz;var Wz=Array.isArray;const tu=Wz;function Hz(){return!1}var qP=typeof exports=="object"&&exports&&!exports.nodeType&&exports,oE=qP&&typeof module=="object"&&module&&!module.nodeType&&module,Gz=oE&&oE.exports===qP,aE=Gz?Un.Buffer:void 0,Kz=aE?aE.isBuffer:void 0,qz=Kz||Hz;const YP=qz;var Yz=9007199254740991,Qz=/^(?:0|[1-9]\d*)$/;function Xz(e,t){var n=typeof e;return t=t??Yz,!!t&&(n=="number"||n!="symbol"&&Qz.test(e))&&e>-1&&e%1==0&&e<t}var Jz=9007199254740991;function QP(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Jz}var Zz="[object Arguments]",e8="[object Array]",t8="[object Boolean]",n8="[object Date]",r8="[object Error]",i8="[object Function]",s8="[object Map]",o8="[object Number]",a8="[object Object]",l8="[object RegExp]",u8="[object Set]",c8="[object String]",d8="[object WeakMap]",h8="[object ArrayBuffer]",f8="[object DataView]",p8="[object Float32Array]",g8="[object Float64Array]",m8="[object Int8Array]",y8="[object Int16Array]",v8="[object Int32Array]",_8="[object Uint8Array]",w8="[object Uint8ClampedArray]",E8="[object Uint16Array]",S8="[object Uint32Array]",ge={};ge[p8]=ge[g8]=ge[m8]=ge[y8]=ge[v8]=ge[_8]=ge[w8]=ge[E8]=ge[S8]=!0;ge[Zz]=ge[e8]=ge[h8]=ge[t8]=ge[f8]=ge[n8]=ge[r8]=ge[i8]=ge[s8]=ge[o8]=ge[a8]=ge[l8]=ge[u8]=ge[c8]=ge[d8]=!1;function C8(e){return gs(e)&&QP(e.length)&&!!ge[ps(e)]}function a_(e){return function(t){return e(t)}}var XP=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ra=XP&&typeof module=="object"&&module&&!module.nodeType&&module,T8=Ra&&Ra.exports===XP,sp=T8&&FP.process,I8=function(){try{var e=Ra&&Ra.require&&Ra.require("util").types;return e||sp&&sp.binding&&sp.binding("util")}catch{}}();const To=I8;var lE=To&&To.isTypedArray,x8=lE?a_(lE):C8;const k8=x8;var P8=Object.prototype,R8=P8.hasOwnProperty;function JP(e,t){var n=tu(e),r=!n&&Vz(e),i=!n&&!r&&YP(e),s=!n&&!r&&!i&&k8(e),o=n||r||i||s,a=o?Fz(e.length,String):[],l=a.length;for(var u in e)(t||R8.call(e,u))&&!(o&&(u=="length"||i&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||Xz(u,l)))&&a.push(u);return a}var A8=Object.prototype;function l_(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||A8;return e===n}var b8=UP(Object.keys,Object);const O8=b8;var N8=Object.prototype,D8=N8.hasOwnProperty;function $8(e){if(!l_(e))return O8(e);var t=[];for(var n in Object(e))D8.call(e,n)&&n!="constructor"&&t.push(n);return t}function ZP(e){return e!=null&&QP(e.length)&&!WP(e)}function u_(e){return ZP(e)?JP(e):$8(e)}function L8(e,t){return e&&Dh(t,u_(t),e)}function M8(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var F8=Object.prototype,j8=F8.hasOwnProperty;function U8(e){if(!eu(e))return M8(e);var t=l_(e),n=[];for(var r in e)r=="constructor"&&(t||!j8.call(e,r))||n.push(r);return n}function c_(e){return ZP(e)?JP(e,!0):U8(e)}function z8(e,t){return e&&Dh(t,c_(t),e)}var eR=typeof exports=="object"&&exports&&!exports.nodeType&&exports,uE=eR&&typeof module=="object"&&module&&!module.nodeType&&module,B8=uE&&uE.exports===eR,cE=B8?Un.Buffer:void 0,dE=cE?cE.allocUnsafe:void 0;function V8(e,t){if(t)return e.slice();var n=e.length,r=dE?dE(n):new e.constructor(n);return e.copy(r),r}function tR(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function W8(e,t){for(var n=-1,r=e==null?0:e.length,i=0,s=[];++n<r;){var o=e[n];t(o,n,e)&&(s[i++]=o)}return s}function nR(){return[]}var H8=Object.prototype,G8=H8.propertyIsEnumerable,hE=Object.getOwnPropertySymbols,K8=hE?function(e){return e==null?[]:(e=Object(e),W8(hE(e),function(t){return G8.call(e,t)}))}:nR;const d_=K8;function q8(e,t){return Dh(e,d_(e),t)}function rR(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var Y8=Object.getOwnPropertySymbols,Q8=Y8?function(e){for(var t=[];e;)rR(t,d_(e)),e=o_(e);return t}:nR;const iR=Q8;function X8(e,t){return Dh(e,iR(e),t)}function sR(e,t,n){var r=t(e);return tu(e)?r:rR(r,n(e))}function J8(e){return sR(e,u_,d_)}function Z8(e){return sR(e,c_,iR)}var eB=ys(Un,"DataView");const sm=eB;var tB=ys(Un,"Promise");const om=tB;var nB=ys(Un,"Set");const am=nB;var rB=ys(Un,"WeakMap");const lm=rB;var fE="[object Map]",iB="[object Object]",pE="[object Promise]",gE="[object Set]",mE="[object WeakMap]",yE="[object DataView]",sB=ms(sm),oB=ms(Il),aB=ms(om),lB=ms(am),uB=ms(lm),ki=ps;(sm&&ki(new sm(new ArrayBuffer(1)))!=yE||Il&&ki(new Il)!=fE||om&&ki(om.resolve())!=pE||am&&ki(new am)!=gE||lm&&ki(new lm)!=mE)&&(ki=function(e){var t=ps(e),n=t==iB?e.constructor:void 0,r=n?ms(n):"";if(r)switch(r){case sB:return yE;case oB:return fE;case aB:return pE;case lB:return gE;case uB:return mE}return t});const h_=ki;var cB=Object.prototype,dB=cB.hasOwnProperty;function hB(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&dB.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var fB=Un.Uint8Array;const vE=fB;function f_(e){var t=new e.constructor(e.byteLength);return new vE(t).set(new vE(e)),t}function pB(e,t){var n=t?f_(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var gB=/\w*$/;function mB(e){var t=new e.constructor(e.source,gB.exec(e));return t.lastIndex=e.lastIndex,t}var _E=ui?ui.prototype:void 0,wE=_E?_E.valueOf:void 0;function yB(e){return wE?Object(wE.call(e)):{}}function vB(e,t){var n=t?f_(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var _B="[object Boolean]",wB="[object Date]",EB="[object Map]",SB="[object Number]",CB="[object RegExp]",TB="[object Set]",IB="[object String]",xB="[object Symbol]",kB="[object ArrayBuffer]",PB="[object DataView]",RB="[object Float32Array]",AB="[object Float64Array]",bB="[object Int8Array]",OB="[object Int16Array]",NB="[object Int32Array]",DB="[object Uint8Array]",$B="[object Uint8ClampedArray]",LB="[object Uint16Array]",MB="[object Uint32Array]";function FB(e,t,n){var r=e.constructor;switch(t){case kB:return f_(e);case _B:case wB:return new r(+e);case PB:return pB(e,n);case RB:case AB:case bB:case OB:case NB:case DB:case $B:case LB:case MB:return vB(e,n);case EB:return new r;case SB:case IB:return new r(e);case CB:return mB(e);case TB:return new r;case xB:return yB(e)}}var EE=Object.create,jB=function(){function e(){}return function(t){if(!eu(t))return{};if(EE)return EE(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const UB=jB;function zB(e){return typeof e.constructor=="function"&&!l_(e)?UB(o_(e)):{}}var BB="[object Map]";function VB(e){return gs(e)&&h_(e)==BB}var SE=To&&To.isMap,WB=SE?a_(SE):VB;const HB=WB;var GB="[object Set]";function KB(e){return gs(e)&&h_(e)==GB}var CE=To&&To.isSet,qB=CE?a_(CE):KB;const YB=qB;var QB=1,XB=2,JB=4,oR="[object Arguments]",ZB="[object Array]",eV="[object Boolean]",tV="[object Date]",nV="[object Error]",aR="[object Function]",rV="[object GeneratorFunction]",iV="[object Map]",sV="[object Number]",lR="[object Object]",oV="[object RegExp]",aV="[object Set]",lV="[object String]",uV="[object Symbol]",cV="[object WeakMap]",dV="[object ArrayBuffer]",hV="[object DataView]",fV="[object Float32Array]",pV="[object Float64Array]",gV="[object Int8Array]",mV="[object Int16Array]",yV="[object Int32Array]",vV="[object Uint8Array]",_V="[object Uint8ClampedArray]",wV="[object Uint16Array]",EV="[object Uint32Array]",ce={};ce[oR]=ce[ZB]=ce[dV]=ce[hV]=ce[eV]=ce[tV]=ce[fV]=ce[pV]=ce[gV]=ce[mV]=ce[yV]=ce[iV]=ce[sV]=ce[lR]=ce[oV]=ce[aV]=ce[lV]=ce[uV]=ce[vV]=ce[_V]=ce[wV]=ce[EV]=!0;ce[nV]=ce[aR]=ce[cV]=!1;function Aa(e,t,n,r,i,s){var o,a=t&QB,l=t&XB,u=t&JB;if(n&&(o=i?n(e,r,i,s):n(e)),o!==void 0)return o;if(!eu(e))return e;var c=tu(e);if(c){if(o=hB(e),!a)return tR(e,o)}else{var d=h_(e),h=d==aR||d==rV;if(YP(e))return V8(e,a);if(d==lR||d==oR||h&&!i){if(o=l||h?{}:zB(e),!a)return l?X8(e,z8(o,e)):q8(e,L8(o,e))}else{if(!ce[d])return i?e:{};o=FB(e,d,a)}}s||(s=new zo);var f=s.get(e);if(f)return f;s.set(e,o),YB(e)?e.forEach(function(S){o.add(Aa(S,t,n,S,e,s))}):HB(e)&&e.forEach(function(S,g){o.set(g,Aa(S,t,n,g,e,s))});var m=u?l?Z8:J8:l?c_:u_,v=c?void 0:m(e);return Dz(v||e,function(S,g){v&&(g=S,S=e[g]),GP(o,g,Aa(S,t,n,g,e,s))}),o}var SV=4;function TE(e){return Aa(e,SV)}function uR(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var CV="[object Symbol]";function p_(e){return typeof e=="symbol"||gs(e)&&ps(e)==CV}var TV="Expected a function";function g_(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(TV);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=e.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(g_.Cache||_i),n}g_.Cache=_i;var IV=500;function xV(e){var t=g_(e,function(r){return n.size===IV&&n.clear(),r}),n=t.cache;return t}var kV=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,PV=/\\(\\)?/g,RV=xV(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(kV,function(n,r,i,s){t.push(i?s.replace(PV,"$1"):r||n)}),t});const AV=RV;var bV=1/0;function OV(e){if(typeof e=="string"||p_(e))return e;var t=e+"";return t=="0"&&1/e==-bV?"-0":t}var NV=1/0,IE=ui?ui.prototype:void 0,xE=IE?IE.toString:void 0;function cR(e){if(typeof e=="string")return e;if(tu(e))return uR(e,cR)+"";if(p_(e))return xE?xE.call(e):"";var t=e+"";return t=="0"&&1/e==-NV?"-0":t}function DV(e){return e==null?"":cR(e)}function dR(e){return tu(e)?uR(e,OV):p_(e)?[e]:tR(AV(DV(e)))}var hR={exports:{}},le={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ge=typeof Symbol=="function"&&Symbol.for,m_=Ge?Symbol.for("react.element"):60103,y_=Ge?Symbol.for("react.portal"):60106,$h=Ge?Symbol.for("react.fragment"):60107,Lh=Ge?Symbol.for("react.strict_mode"):60108,Mh=Ge?Symbol.for("react.profiler"):60114,Fh=Ge?Symbol.for("react.provider"):60109,jh=Ge?Symbol.for("react.context"):60110,v_=Ge?Symbol.for("react.async_mode"):60111,Uh=Ge?Symbol.for("react.concurrent_mode"):60111,zh=Ge?Symbol.for("react.forward_ref"):60112,Bh=Ge?Symbol.for("react.suspense"):60113,$V=Ge?Symbol.for("react.suspense_list"):60120,Vh=Ge?Symbol.for("react.memo"):60115,Wh=Ge?Symbol.for("react.lazy"):60116,LV=Ge?Symbol.for("react.block"):60121,MV=Ge?Symbol.for("react.fundamental"):60117,FV=Ge?Symbol.for("react.responder"):60118,jV=Ge?Symbol.for("react.scope"):60119;function Kt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case m_:switch(e=e.type,e){case v_:case Uh:case $h:case Mh:case Lh:case Bh:return e;default:switch(e=e&&e.$$typeof,e){case jh:case zh:case Wh:case Vh:case Fh:return e;default:return t}}case y_:return t}}}function fR(e){return Kt(e)===Uh}le.AsyncMode=v_;le.ConcurrentMode=Uh;le.ContextConsumer=jh;le.ContextProvider=Fh;le.Element=m_;le.ForwardRef=zh;le.Fragment=$h;le.Lazy=Wh;le.Memo=Vh;le.Portal=y_;le.Profiler=Mh;le.StrictMode=Lh;le.Suspense=Bh;le.isAsyncMode=function(e){return fR(e)||Kt(e)===v_};le.isConcurrentMode=fR;le.isContextConsumer=function(e){return Kt(e)===jh};le.isContextProvider=function(e){return Kt(e)===Fh};le.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===m_};le.isForwardRef=function(e){return Kt(e)===zh};le.isFragment=function(e){return Kt(e)===$h};le.isLazy=function(e){return Kt(e)===Wh};le.isMemo=function(e){return Kt(e)===Vh};le.isPortal=function(e){return Kt(e)===y_};le.isProfiler=function(e){return Kt(e)===Mh};le.isStrictMode=function(e){return Kt(e)===Lh};le.isSuspense=function(e){return Kt(e)===Bh};le.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===$h||e===Uh||e===Mh||e===Lh||e===Bh||e===$V||typeof e=="object"&&e!==null&&(e.$$typeof===Wh||e.$$typeof===Vh||e.$$typeof===Fh||e.$$typeof===jh||e.$$typeof===zh||e.$$typeof===MV||e.$$typeof===FV||e.$$typeof===jV||e.$$typeof===LV)};le.typeOf=Kt;hR.exports=le;var UV=hR.exports,__=UV,zV={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},BV={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},VV={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pR={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},w_={};w_[__.ForwardRef]=VV;w_[__.Memo]=pR;function kE(e){return __.isMemo(e)?pR:w_[e.$$typeof]||zV}var WV=Object.defineProperty,HV=Object.getOwnPropertyNames,PE=Object.getOwnPropertySymbols,GV=Object.getOwnPropertyDescriptor,KV=Object.getPrototypeOf,RE=Object.prototype;function gR(e,t,n){if(typeof t!="string"){if(RE){var r=KV(t);r&&r!==RE&&gR(e,r,n)}var i=HV(t);PE&&(i=i.concat(PE(t)));for(var s=kE(e),o=kE(t),a=0;a<i.length;++a){var l=i[a];if(!BV[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=GV(t,l);try{WV(e,l,u)}catch{}}}}return e}var qV=gR;const YV=Cd(qV);var QV=1,XV=4;function JV(e){return Aa(e,QV|XV)}function se(){return se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},se.apply(this,arguments)}function mR(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function Fr(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function AE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Hh=w.createContext(void 0);Hh.displayName="FormikContext";var ZV=Hh.Provider,e7=Hh.Consumer;function yR(){var e=w.useContext(Hh);return e||BP(!1),e}var bE=function(t){return Array.isArray(t)&&t.length===0},Qe=function(t){return typeof t=="function"},nu=function(t){return t!==null&&typeof t=="object"},t7=function(t){return String(Math.floor(Number(t)))===t},op=function(t){return Object.prototype.toString.call(t)==="[object String]"},vR=function(t){return w.Children.count(t)===0},ap=function(t){return nu(t)&&Qe(t.then)};function _e(e,t,n,r){r===void 0&&(r=0);for(var i=dR(t);e&&r<i.length;)e=e[i[r++]];return r!==i.length&&!e||e===void 0?n:e}function Ln(e,t,n){for(var r=TE(e),i=r,s=0,o=dR(t);s<o.length-1;s++){var a=o[s],l=_e(e,o.slice(0,s+1));if(l&&(nu(l)||Array.isArray(l)))i=i[a]=TE(l);else{var u=o[s+1];i=i[a]=t7(u)&&Number(u)>=0?[]:{}}}return(s===0?e:i)[o[s]]===n?e:(n===void 0?delete i[o[s]]:i[o[s]]=n,s===0&&n===void 0&&delete r[o[s]],r)}function _R(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,s=Object.keys(e);i<s.length;i++){var o=s[i],a=e[o];nu(a)?n.get(a)||(n.set(a,!0),r[o]=Array.isArray(a)?[]:{},_R(a,t,n,r[o])):r[o]=t}return r}function n7(e,t){switch(t.type){case"SET_VALUES":return se({},e,{values:t.payload});case"SET_TOUCHED":return se({},e,{touched:t.payload});case"SET_ERRORS":return Pr(e.errors,t.payload)?e:se({},e,{errors:t.payload});case"SET_STATUS":return se({},e,{status:t.payload});case"SET_ISSUBMITTING":return se({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return se({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return se({},e,{values:Ln(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return se({},e,{touched:Ln(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return se({},e,{errors:Ln(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return se({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return se({},e,{touched:_R(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return se({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return se({},e,{isSubmitting:!1});default:return e}}var Ei={},Ou={};function r7(e){var t=e.validateOnChange,n=t===void 0?!0:t,r=e.validateOnBlur,i=r===void 0?!0:r,s=e.validateOnMount,o=s===void 0?!1:s,a=e.isInitialValid,l=e.enableReinitialize,u=l===void 0?!1:l,c=e.onSubmit,d=Fr(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),h=se({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:c},d),f=w.useRef(h.initialValues),m=w.useRef(h.initialErrors||Ei),v=w.useRef(h.initialTouched||Ou),S=w.useRef(h.initialStatus),g=w.useRef(!1),p=w.useRef({});w.useEffect(function(){return g.current=!0,function(){g.current=!1}},[]);var y=w.useState(0),_=y[1],I=w.useRef({values:h.initialValues,errors:h.initialErrors||Ei,touched:h.initialTouched||Ou,status:h.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),E=I.current,C=w.useCallback(function(T){var O=I.current;I.current=n7(O,T),O!==I.current&&_(function(D){return D+1})},[]),x=w.useCallback(function(T,O){return new Promise(function(D,M){var G=h.validate(T,O);G==null?D(Ei):ap(G)?G.then(function(ie){D(ie||Ei)},function(ie){M(ie)}):D(G)})},[h.validate]),$=w.useCallback(function(T,O){var D=h.validationSchema,M=Qe(D)?D(O):D,G=O&&M.validateAt?M.validateAt(O,T):s7(T,M);return new Promise(function(ie,Le){G.then(function(){ie(Ei)},function(Bn){Bn.name==="ValidationError"?ie(i7(Bn)):Le(Bn)})})},[h.validationSchema]),j=w.useCallback(function(T,O){return new Promise(function(D){return D(p.current[T].validate(O))})},[]),H=w.useCallback(function(T){var O=Object.keys(p.current).filter(function(M){return Qe(p.current[M].validate)}),D=O.length>0?O.map(function(M){return j(M,_e(T,M))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(D).then(function(M){return M.reduce(function(G,ie,Le){return ie==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||ie&&(G=Ln(G,O[Le],ie)),G},{})})},[j]),Ke=w.useCallback(function(T){return Promise.all([H(T),h.validationSchema?$(T):{},h.validate?x(T):{}]).then(function(O){var D=O[0],M=O[1],G=O[2],ie=rm.all([D,M,G],{arrayMerge:o7});return ie})},[h.validate,h.validationSchema,H,x,$]),Te=qt(function(T){return T===void 0&&(T=E.values),C({type:"SET_ISVALIDATING",payload:!0}),Ke(T).then(function(O){return g.current&&(C({type:"SET_ISVALIDATING",payload:!1}),C({type:"SET_ERRORS",payload:O})),O})});w.useEffect(function(){o&&g.current===!0&&Pr(f.current,h.initialValues)&&Te(f.current)},[o,Te]);var Nt=w.useCallback(function(T){var O=T&&T.values?T.values:f.current,D=T&&T.errors?T.errors:m.current?m.current:h.initialErrors||{},M=T&&T.touched?T.touched:v.current?v.current:h.initialTouched||{},G=T&&T.status?T.status:S.current?S.current:h.initialStatus;f.current=O,m.current=D,v.current=M,S.current=G;var ie=function(){C({type:"RESET_FORM",payload:{isSubmitting:!!T&&!!T.isSubmitting,errors:D,touched:M,status:G,values:O,isValidating:!!T&&!!T.isValidating,submitCount:T&&T.submitCount&&typeof T.submitCount=="number"?T.submitCount:0}})};if(h.onReset){var Le=h.onReset(E.values,k_);ap(Le)?Le.then(ie):ie()}else ie()},[h.initialErrors,h.initialStatus,h.initialTouched,h.onReset]);w.useEffect(function(){g.current===!0&&!Pr(f.current,h.initialValues)&&u&&(f.current=h.initialValues,Nt(),o&&Te(f.current))},[u,h.initialValues,Nt,o,Te]),w.useEffect(function(){u&&g.current===!0&&!Pr(m.current,h.initialErrors)&&(m.current=h.initialErrors||Ei,C({type:"SET_ERRORS",payload:h.initialErrors||Ei}))},[u,h.initialErrors]),w.useEffect(function(){u&&g.current===!0&&!Pr(v.current,h.initialTouched)&&(v.current=h.initialTouched||Ou,C({type:"SET_TOUCHED",payload:h.initialTouched||Ou}))},[u,h.initialTouched]),w.useEffect(function(){u&&g.current===!0&&!Pr(S.current,h.initialStatus)&&(S.current=h.initialStatus,C({type:"SET_STATUS",payload:h.initialStatus}))},[u,h.initialStatus,h.initialTouched]);var ws=qt(function(T){if(p.current[T]&&Qe(p.current[T].validate)){var O=_e(E.values,T),D=p.current[T].validate(O);return ap(D)?(C({type:"SET_ISVALIDATING",payload:!0}),D.then(function(M){return M}).then(function(M){C({type:"SET_FIELD_ERROR",payload:{field:T,value:M}}),C({type:"SET_ISVALIDATING",payload:!1})})):(C({type:"SET_FIELD_ERROR",payload:{field:T,value:D}}),Promise.resolve(D))}else if(h.validationSchema)return C({type:"SET_ISVALIDATING",payload:!0}),$(E.values,T).then(function(M){return M}).then(function(M){C({type:"SET_FIELD_ERROR",payload:{field:T,value:_e(M,T)}}),C({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),wi=w.useCallback(function(T,O){var D=O.validate;p.current[T]={validate:D}},[]),zn=w.useCallback(function(T){delete p.current[T]},[]),b=qt(function(T,O){C({type:"SET_TOUCHED",payload:T});var D=O===void 0?i:O;return D?Te(E.values):Promise.resolve()}),L=w.useCallback(function(T){C({type:"SET_ERRORS",payload:T})},[]),U=qt(function(T,O){var D=Qe(T)?T(E.values):T;C({type:"SET_VALUES",payload:D});var M=O===void 0?n:O;return M?Te(D):Promise.resolve()}),ee=w.useCallback(function(T,O){C({type:"SET_FIELD_ERROR",payload:{field:T,value:O}})},[]),X=qt(function(T,O,D){C({type:"SET_FIELD_VALUE",payload:{field:T,value:O}});var M=D===void 0?n:D;return M?Te(Ln(E.values,T,O)):Promise.resolve()}),wn=w.useCallback(function(T,O){var D=O,M=T,G;if(!op(T)){T.persist&&T.persist();var ie=T.target?T.target:T.currentTarget,Le=ie.type,Bn=ie.name,Qh=ie.id,Xh=ie.value,YR=ie.checked,zW=ie.outerHTML,P_=ie.options,QR=ie.multiple;D=O||Bn||Qh,M=/number|range/.test(Le)?(G=parseFloat(Xh),isNaN(G)?"":G):/checkbox/.test(Le)?l7(_e(E.values,D),YR,Xh):P_&&QR?a7(P_):Xh}D&&X(D,M)},[X,E.values]),ft=qt(function(T){if(op(T))return function(O){return wn(O,T)};wn(T)}),pt=qt(function(T,O,D){O===void 0&&(O=!0),C({type:"SET_FIELD_TOUCHED",payload:{field:T,value:O}});var M=D===void 0?i:D;return M?Te(E.values):Promise.resolve()}),tt=w.useCallback(function(T,O){T.persist&&T.persist();var D=T.target,M=D.name,G=D.id,ie=D.outerHTML,Le=O||M||G;pt(Le,!0)},[pt]),Dt=qt(function(T){if(op(T))return function(O){return tt(O,T)};tt(T)}),wr=w.useCallback(function(T){Qe(T)?C({type:"SET_FORMIK_STATE",payload:T}):C({type:"SET_FORMIK_STATE",payload:function(){return T}})},[]),En=w.useCallback(function(T){C({type:"SET_STATUS",payload:T})},[]),Es=w.useCallback(function(T){C({type:"SET_ISSUBMITTING",payload:T})},[]),Er=qt(function(){return C({type:"SUBMIT_ATTEMPT"}),Te().then(function(T){var O=T instanceof Error,D=!O&&Object.keys(T).length===0;if(D){var M;try{if(M=BR(),M===void 0)return}catch(G){throw G}return Promise.resolve(M).then(function(G){return g.current&&C({type:"SUBMIT_SUCCESS"}),G}).catch(function(G){if(g.current)throw C({type:"SUBMIT_FAILURE"}),G})}else if(g.current&&(C({type:"SUBMIT_FAILURE"}),O))throw T})}),Sn=qt(function(T){T&&T.preventDefault&&Qe(T.preventDefault)&&T.preventDefault(),T&&T.stopPropagation&&Qe(T.stopPropagation)&&T.stopPropagation(),Er().catch(function(O){console.warn("Warning: An unhandled error was caught from submitForm()",O)})}),k_={resetForm:Nt,validateForm:Te,validateField:ws,setErrors:L,setFieldError:ee,setFieldTouched:pt,setFieldValue:X,setStatus:En,setSubmitting:Es,setTouched:b,setValues:U,setFormikState:wr,submitForm:Er},BR=qt(function(){return c(E.values,k_)}),VR=qt(function(T){T&&T.preventDefault&&Qe(T.preventDefault)&&T.preventDefault(),T&&T.stopPropagation&&Qe(T.stopPropagation)&&T.stopPropagation(),Nt()}),WR=w.useCallback(function(T){return{value:_e(E.values,T),error:_e(E.errors,T),touched:!!_e(E.touched,T),initialValue:_e(f.current,T),initialTouched:!!_e(v.current,T),initialError:_e(m.current,T)}},[E.errors,E.touched,E.values]),HR=w.useCallback(function(T){return{setValue:function(D,M){return X(T,D,M)},setTouched:function(D,M){return pt(T,D,M)},setError:function(D){return ee(T,D)}}},[X,pt,ee]),GR=w.useCallback(function(T){var O=nu(T),D=O?T.name:T,M=_e(E.values,D),G={name:D,value:M,onChange:ft,onBlur:Dt};if(O){var ie=T.type,Le=T.value,Bn=T.as,Qh=T.multiple;ie==="checkbox"?Le===void 0?G.checked=!!M:(G.checked=!!(Array.isArray(M)&&~M.indexOf(Le)),G.value=Le):ie==="radio"?(G.checked=M===Le,G.value=Le):Bn==="select"&&Qh&&(G.value=G.value||[],G.multiple=!0)}return G},[Dt,ft,E.values]),Yh=w.useMemo(function(){return!Pr(f.current,E.values)},[f.current,E.values]),KR=w.useMemo(function(){return typeof a<"u"?Yh?E.errors&&Object.keys(E.errors).length===0:a!==!1&&Qe(a)?a(h):a:E.errors&&Object.keys(E.errors).length===0},[a,Yh,E.errors,h]),qR=se({},E,{initialValues:f.current,initialErrors:m.current,initialTouched:v.current,initialStatus:S.current,handleBlur:Dt,handleChange:ft,handleReset:VR,handleSubmit:Sn,resetForm:Nt,setErrors:L,setFormikState:wr,setFieldTouched:pt,setFieldValue:X,setFieldError:ee,setStatus:En,setSubmitting:Es,setTouched:b,setValues:U,submitForm:Er,validateForm:Te,validateField:ws,isValid:KR,dirty:Yh,unregisterField:zn,registerField:wi,getFieldProps:GR,getFieldMeta:WR,getFieldHelpers:HR,validateOnBlur:i,validateOnChange:n,validateOnMount:o});return qR}function wR(e){var t=r7(e),n=e.component,r=e.children,i=e.render,s=e.innerRef;return w.useImperativeHandle(s,function(){return t}),w.createElement(ZV,{value:t},n?w.createElement(n,t):i?i(t):r?Qe(r)?r(t):vR(r)?null:w.Children.only(r):null)}function i7(e){var t={};if(e.inner){if(e.inner.length===0)return Ln(t,e.path,e.message);for(var i=e.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var s;if(n){if(r>=i.length)break;s=i[r++]}else{if(r=i.next(),r.done)break;s=r.value}var o=s;_e(t,o.path)||(t=Ln(t,o.path,o.message))}}return t}function s7(e,t,n,r){n===void 0&&(n=!1);var i=um(e);return t[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function um(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);Array.isArray(e[r])===!0?t[r]=e[r].map(function(i){return Array.isArray(i)===!0||eE(i)?um(i):i!==""?i:void 0}):eE(e[r])?t[r]=um(e[r]):t[r]=e[r]!==""?e[r]:void 0}return t}function o7(e,t,n){var r=e.slice();return t.forEach(function(s,o){if(typeof r[o]>"u"){var a=n.clone!==!1,l=a&&n.isMergeableObject(s);r[o]=l?rm(Array.isArray(s)?[]:{},s,n):s}else n.isMergeableObject(s)?r[o]=rm(e[o],s,n):e.indexOf(s)===-1&&r.push(s)}),r}function a7(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function l7(e,t,n){if(typeof e=="boolean")return!!t;var r=[],i=!1,s=-1;if(Array.isArray(e))r=e,s=e.indexOf(n),i=s>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!i?r.concat(n):i?r.slice(0,s).concat(r.slice(s+1)):r}var u7=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?w.useLayoutEffect:w.useEffect;function qt(e){var t=w.useRef(e);return u7(function(){t.current=e}),w.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current.apply(void 0,r)},[])}function c7(e){var t=e.validate,n=e.name,r=e.render,i=e.children,s=e.as,o=e.component,a=e.className,l=Fr(e,["validate","name","render","children","as","component","className"]),u=yR(),c=Fr(u,["validate","validationSchema"]),d=c.registerField,h=c.unregisterField;w.useEffect(function(){return d(n,{validate:t}),function(){h(n)}},[d,h,n,t]);var f=c.getFieldProps(se({name:n},l)),m=c.getFieldMeta(n),v={field:f,form:c};if(r)return r(se({},v,{meta:m}));if(Qe(i))return i(se({},v,{meta:m}));if(o){if(typeof o=="string"){var S=l.innerRef,g=Fr(l,["innerRef"]);return w.createElement(o,se({ref:S},f,g,{className:a}),i)}return w.createElement(o,se({field:f,form:c},l,{className:a}),i)}var p=s||"input";if(typeof p=="string"){var y=l.innerRef,_=Fr(l,["innerRef"]);return w.createElement(p,se({ref:y},f,_,{className:a}),i)}return w.createElement(p,se({},f,l,{className:a}),i)}var ER=w.forwardRef(function(e,t){var n=e.action,r=Fr(e,["action"]),i=n??"#",s=yR(),o=s.handleReset,a=s.handleSubmit;return w.createElement("form",se({onSubmit:a,ref:t,onReset:o,action:i},r))});ER.displayName="Form";function d7(e){var t=function(i){return w.createElement(e7,null,function(s){return s||BP(!1),w.createElement(e,se({},i,{formik:s}))})},n=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return t.WrappedComponent=e,t.displayName="FormikConnect("+n+")",YV(t,e)}var h7=function(t,n,r){var i=as(t),s=i[n];return i.splice(n,1),i.splice(r,0,s),i},f7=function(t,n,r){var i=as(t),s=i[n];return i[n]=i[r],i[r]=s,i},lp=function(t,n,r){var i=as(t);return i.splice(n,0,r),i},p7=function(t,n,r){var i=as(t);return i[n]=r,i},as=function(t){if(t){if(Array.isArray(t))return[].concat(t);var n=Object.keys(t).map(function(r){return parseInt(r)}).reduce(function(r,i){return i>r?i:r},0);return Array.from(se({},t,{length:n+1}))}else return[]},OE=function(t,n){var r=typeof t=="function"?t:n;return function(i){if(Array.isArray(i)||nu(i)){var s=as(i);return r(s)}return i}},g7=function(e){mR(t,e);function t(r){var i;return i=e.call(this,r)||this,i.updateArrayField=function(s,o,a){var l=i.props,u=l.name,c=l.formik.setFormikState;c(function(d){var h=OE(a,s),f=OE(o,s),m=Ln(d.values,u,s(_e(d.values,u))),v=a?h(_e(d.errors,u)):void 0,S=o?f(_e(d.touched,u)):void 0;return bE(v)&&(v=void 0),bE(S)&&(S=void 0),se({},d,{values:m,errors:a?Ln(d.errors,u,v):d.errors,touched:o?Ln(d.touched,u,S):d.touched})})},i.push=function(s){return i.updateArrayField(function(o){return[].concat(as(o),[JV(s)])},!1,!1)},i.handlePush=function(s){return function(){return i.push(s)}},i.swap=function(s,o){return i.updateArrayField(function(a){return f7(a,s,o)},!0,!0)},i.handleSwap=function(s,o){return function(){return i.swap(s,o)}},i.move=function(s,o){return i.updateArrayField(function(a){return h7(a,s,o)},!0,!0)},i.handleMove=function(s,o){return function(){return i.move(s,o)}},i.insert=function(s,o){return i.updateArrayField(function(a){return lp(a,s,o)},function(a){return lp(a,s,null)},function(a){return lp(a,s,null)})},i.handleInsert=function(s,o){return function(){return i.insert(s,o)}},i.replace=function(s,o){return i.updateArrayField(function(a){return p7(a,s,o)},!1,!1)},i.handleReplace=function(s,o){return function(){return i.replace(s,o)}},i.unshift=function(s){var o=-1;return i.updateArrayField(function(a){var l=a?[s].concat(a):[s];return o=l.length,l},function(a){return a?[null].concat(a):[null]},function(a){return a?[null].concat(a):[null]}),o},i.handleUnshift=function(s){return function(){return i.unshift(s)}},i.handleRemove=function(s){return function(){return i.remove(s)}},i.handlePop=function(){return function(){return i.pop()}},i.remove=i.remove.bind(AE(i)),i.pop=i.pop.bind(AE(i)),i}var n=t.prototype;return n.componentDidUpdate=function(i){this.props.validateOnChange&&this.props.formik.validateOnChange&&!Pr(_e(i.formik.values,i.name),_e(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},n.remove=function(i){var s;return this.updateArrayField(function(o){var a=o?as(o):[];return s||(s=a[i]),Qe(a.splice)&&a.splice(i,1),Qe(a.every)&&a.every(function(l){return l===void 0})?[]:a},!0,!0),s},n.pop=function(){var i;return this.updateArrayField(function(s){var o=s.slice();return i||(i=o&&o.pop&&o.pop()),o},!0,!0),i},n.render=function(){var i={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},s=this.props,o=s.component,a=s.render,l=s.children,u=s.name,c=s.formik,d=Fr(c,["validate","validationSchema"]),h=se({},i,{form:d,name:u});return o?w.createElement(o,h):a?a(h):l?typeof l=="function"?l(h):vR(l)?null:w.Children.only(l):null},t}(w.Component);g7.defaultProps={validateOnChange:!0};var m7=function(e){mR(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.shouldComponentUpdate=function(i){return _e(this.props.formik.errors,this.props.name)!==_e(i.formik.errors,this.props.name)||_e(this.props.formik.touched,this.props.name)!==_e(i.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(i).length},n.render=function(){var i=this.props,s=i.component,o=i.formik,a=i.render,l=i.children,u=i.name,c=Fr(i,["component","formik","render","children","name"]),d=_e(o.touched,u),h=_e(o.errors,u);return d&&h?a?Qe(a)?a(h):null:l?Qe(l)?l(h):null:s?w.createElement(s,c,h):h:null},t}(w.Component),y7=d7(m7);const v7=V.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.2);

`,_7=V.img`

`,w7=V.div`
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

`,E7=V.button`
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
`,SR=V.h2`
font-weight: 500;
line-height: 1.2;
letter-spacing: -0.02em;
margin-bottom: 20px;
font-size: 30px;

@media screen and (min-width: 768px) {
  font-size: 40px;

}
`,CR=V.p`
font-size: 16px;
line-height: 1.37;
color: rgba(18, 20, 23, 0.8);
margin-bottom: 40px;
`,TR=V(ER)`
display: flex;
flex-direction: column;
gap: 18px;
`,ba=V(c7)`
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
`,Oa=V(y7)`
font-size: 14px;
color: red;
margin-top: -10px;
`,IR=V.button`
margin-top: 22px;
border-radius: 12px;
padding: 16px;
width: 100%;
height: 60px;
background: ${({theme:e})=>e.primaryYellow};
font-weight: 700;
font-size: 18px;
line-height: 1.56;
color: ${({theme:e})=>e.primaryBlack};

&:hover {
  background: ${({theme:e})=>e.primaryLightYellow};
}

@media screen and (min-width: 768px) {
  width: 438px;

}
`,S7=V.button`
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

`,C7=V.img`
width: 20px;
height: 20px;
`,T7="/assets/x-close-6a9fe0ff.svg",NE=document.getElementById("portal"),I7=({children:e,toggleModal:t})=>{const n=r=>{r.target===r.currentTarget&&t()};return w.useEffect(()=>{const r=s=>{s.code==="Escape"&&t()},i=document.querySelector("body");if(i)return i.style.position="fixed",window.addEventListener("keydown",r),()=>{i.style.position="",window.removeEventListener("keydown",r)}},[t]),tT.createPortal(k.jsx(v7,{onMouseDown:n,children:k.jsxs(w7,{children:[k.jsx(E7,{onClick:t,type:"button",children:k.jsx(_7,{src:T7,alt:"Close"})}),e]})}),NE||document.body)},xR=V.div`
display: flex;
    align-items: center;

`,kR=V.ul`
   display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 1140px) {
  gap: 16px;
}
`,x7=V.button`
  border-radius: 12px;
  padding: 14px 39px;
  width: 166px;
  height: 48px;
  background: ${({theme:e})=>e.primaryBlack};
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: #fff;

  &:hover {
    background: #8a8a89;
  }
`,PR=V.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  color: #121417;
  background: none;
  min-width: 73px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    scale: 1.1;
   color:  ${({theme:e})=>e.primaryYellow}
  }
`,k7=V.img`
  width: 20px;
  height: 20px;
  stroke: ${({theme:e})=>e.primaryYellow};
`,P7=V.img`
  width: 20px;
  height: 20px;
  stroke: ${({theme:e})=>e.primaryYellow};
`,R7=V.li`
  border-radius: 12px;
  padding: 14px 14px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.primaryYellow};
`,RR=V.ul`
  display: flex;
  gap: 28px;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${({theme:e})=>e.primaryBlack};
`,Na=V(hT)`
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
`,A7="/assets/log-in-01-d3828318.svg",b7=({onClickLogin:e,onClickRegister:t})=>k.jsxs(k.Fragment,{children:[k.jsxs(RR,{children:[k.jsx("li",{children:k.jsx(Na,{to:"/",children:"Home"})}),k.jsx("li",{children:k.jsx(Na,{to:"/teachers",children:"Teachers"})})]}),k.jsx(xR,{children:k.jsxs(kR,{children:[k.jsx("li",{children:k.jsxs(PR,{type:"button",onClick:e,children:[k.jsx(k7,{src:A7,alt:"Login"}),"Log in"]})}),k.jsx("li",{children:k.jsx(x7,{type:"button",onClick:t,children:"Registration"})})]})})]}),O7="/assets/log-out-49fc0c53.svg",N7=()=>{const e=ss.currentUser,t=()=>{h3(ss)};return k.jsxs(k.Fragment,{children:[k.jsxs(RR,{children:[k.jsx("li",{children:k.jsx(Na,{to:"/",children:"Home"})}),k.jsx("li",{children:k.jsx(Na,{to:"/teachers",children:"Teachers"})}),k.jsx("li",{children:k.jsx(Na,{to:"/favorites",children:"Favorites"})})]}),k.jsx(xR,{children:k.jsxs(kR,{children:[k.jsx(R7,{children:(e==null?void 0:e.displayName)??"User"}),k.jsx("li",{children:k.jsxs(PR,{onClick:t,children:["Log out",k.jsx(P7,{src:O7,alt:"LogOut"})]})})]})})]})},D7=({onClickLogin:e,onClickRegister:t,authUser:n})=>n?k.jsx(N7,{}):k.jsx(b7,{onClickLogin:e,onClickRegister:t});function vs(e){this._maxSize=e,this.clear()}vs.prototype.clear=function(){this._size=0,this._values=Object.create(null)};vs.prototype.get=function(e){return this._values[e]};vs.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var $7=/[^.^\]^[]+|(?=\[\]|\.\.)/g,AR=/^\d+$/,L7=/^\d/,M7=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,F7=/^\s*(['"]?)(.*?)(\1)\s*$/,E_=512,DE=new vs(E_),$E=new vs(E_),LE=new vs(E_),Vi={Cache:vs,split:cm,normalizePath:up,setter:function(e){var t=up(e);return $E.get(e)||$E.set(e,function(r,i){for(var s=0,o=t.length,a=r;s<o-1;){var l=t[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[t[s++]]}a[t[s]]=i})},getter:function(e,t){var n=up(e);return LE.get(e)||LE.set(e,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!t)i=i[n[s++]];else return;return i})},join:function(e){return e.reduce(function(t,n){return t+(S_(n)||AR.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){j7(Array.isArray(e)?e:cm(e),t,n)}};function up(e){return DE.get(e)||DE.set(e,cm(e).map(function(t){return t.replace(F7,"$2")}))}function cm(e){return e.match($7)||[""]}function j7(e,t,n){var r=e.length,i,s,o,a;for(s=0;s<r;s++)i=e[s],i&&(B7(i)&&(i='"'+i+'"'),a=S_(i),o=!a&&/^\d+$/.test(i),t.call(n,i,a,o,s,e))}function S_(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function U7(e){return e.match(L7)&&!e.match(AR)}function z7(e){return M7.test(e)}function B7(e){return!S_(e)&&(U7(e)||z7(e))}const V7=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Gh=e=>e.match(V7)||[],Kh=e=>e[0].toUpperCase()+e.slice(1),C_=(e,t)=>Gh(e).join(t).toLowerCase(),bR=e=>Gh(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),W7=e=>Kh(bR(e)),H7=e=>C_(e,"_"),G7=e=>C_(e,"-"),K7=e=>Kh(C_(e," ")),q7=e=>Gh(e).map(Kh).join(" ");var cp={words:Gh,upperFirst:Kh,camelCase:bR,pascalCase:W7,snakeCase:H7,kebabCase:G7,sentenceCase:K7,titleCase:q7},T_={exports:{}};T_.exports=function(e){return OR(Y7(e),e)};T_.exports.array=OR;function OR(e,t){var n=e.length,r=new Array(n),i={},s=n,o=Q7(t),a=X7(e);for(t.forEach(function(u){if(!a.has(u[0])||!a.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(e[s],s,new Set);return r;function l(u,c,d){if(d.has(u)){var h;try{h=", node was:"+JSON.stringify(u)}catch{h=""}throw new Error("Cyclic dependency"+h)}if(!a.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[c]){i[c]=!0;var f=o.get(u)||new Set;if(f=Array.from(f),c=f.length){d.add(u);do{var m=f[--c];l(m,a.get(m),d)}while(c);d.delete(u)}r[--n]=u}}}function Y7(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var i=e[n];t.add(i[0]),t.add(i[1])}return Array.from(t)}function Q7(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var i=e[n];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function X7(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var J7=T_.exports;const Z7=Cd(J7),eW=Object.prototype.toString,tW=Error.prototype.toString,nW=RegExp.prototype.toString,rW=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",iW=/^Symbol\((.*)\)(.*)$/;function sW(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function ME(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return sW(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return rW.call(e).replace(iW,"Symbol($1)");const r=eW.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+tW.call(e)+"]":r==="RegExp"?nW.call(e):null}function ei(e,t){let n=ME(e,t);return n!==null?n:JSON.stringify(e,function(r,i){let s=ME(this[r],t);return s!==null?s:i},2)}function NR(e){return e==null?[]:[].concat(e)}let DR,$R,LR,oW=/\$\{\s*(\w+)\s*\}/g;DR=Symbol.toStringTag;class FE{constructor(t,n,r,i){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[DR]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],NR(t).forEach(s=>{if(Tt.isError(s)){this.errors.push(...s.errors);const o=s.inner.length?s.inner:[s];this.inner.push(...o)}else this.errors.push(s)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}$R=Symbol.hasInstance;LR=Symbol.toStringTag;class Tt extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(oW,(i,s)=>ei(n[s])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,i,s){const o=new FE(t,n,r,i);if(s)return o;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[LR]="Error",this.name=o.name,this.message=o.message,this.type=o.type,this.value=o.value,this.path=o.path,this.errors=o.errors,this.inner=o.inner,Error.captureStackTrace&&Error.captureStackTrace(this,Tt)}static[$R](t){return FE[Symbol.hasInstance](t)||super[Symbol.hasInstance](t)}}let In={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${ei(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${ei(n,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${ei(n,!0)}\``+i}},St={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},Ir={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},dm={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},aW={isValue:"${path} field must be ${value}"},hm={noUnknown:"${path} field has unspecified keys: ${unknown}"},lW={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},uW={notType:e=>{const{path:t,value:n,spec:r}=e,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${t} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${ei(n,!0)}\``;if(n.length>i)return`${t} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${ei(n,!0)}\``}return Tt.formatError(In.notType,e)}};Object.assign(Object.create(null),{mixed:In,string:St,number:Ir,date:dm,object:hm,array:lW,boolean:aW,tuple:uW});const I_=e=>e&&e.__isYupSchema__;class Ed{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new Ed(t,(a,l)=>{var u;let c=o(...a)?i:s;return(u=c==null?void 0:c(l))!=null?u:l})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,t,n);if(i===void 0||i===t)return t;if(!I_(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const Nu={context:"$",value:"."};class _s{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Nu.context,this.isValue=this.key[0]===Nu.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Nu.context:this.isValue?Nu.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&Vi.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let i=this.isContext?r:this.isValue?t:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}_s.prototype.__isYupRef=!0;const nr=e=>e==null;function xs(e){function t({value:n,path:r="",options:i,originalValue:s,schema:o},a,l){const{name:u,test:c,params:d,message:h,skipAbsent:f}=e;let{parent:m,context:v,abortEarly:S=o.spec.abortEarly,disableStackTrace:g=o.spec.disableStackTrace}=i;function p(H){return _s.isRef(H)?H.getValue(n,m,v):H}function y(H={}){const Ke=Object.assign({value:n,originalValue:s,label:o.spec.label,path:H.path||r,spec:o.spec,disableStackTrace:H.disableStackTrace||g},d,H.params);for(const Nt of Object.keys(Ke))Ke[Nt]=p(Ke[Nt]);const Te=new Tt(Tt.formatError(H.message||h,Ke),n,Ke.path,H.type||u,Ke.disableStackTrace);return Te.params=Ke,Te}const _=S?a:l;let I={path:r,parent:m,type:u,from:i.from,createError:y,resolve:p,options:i,originalValue:s,schema:o};const E=H=>{Tt.isError(H)?_(H):H?l(null):_(y())},C=H=>{Tt.isError(H)?_(H):a(H)};if(f&&nr(n))return E(!0);let $;try{var j;if($=c.call(I,n,I),typeof((j=$)==null?void 0:j.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${I.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve($).then(E,C)}}catch(H){C(H);return}E($)}return t.OPTIONS=e,t}function cW(e,t,n,r=n){let i,s,o;return t?(Vi.forEach(t,(a,l,u)=>{let c=l?a.slice(1,a.length-1):a;e=e.resolve({context:r,parent:i,value:n});let d=e.type==="tuple",h=u?parseInt(c,10):0;if(e.innerType||d){if(d&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&h>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `);i=n,n=n&&n[h],e=d?e.spec.types[h]:e.innerType}if(!u){if(!e.fields||!e.fields[c])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e.type}")`);i=n,n=n&&n[c],e=e.fields[c]}s=c,o=l?"["+a+"]":"."+a}),{schema:e,parent:i,parentPath:s}):{parent:i,parentPath:t,schema:e}}class Sd extends Set{describe(){const t=[];for(const n of this.values())t.push(_s.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new Sd(this.values())}merge(t,n){const r=this.clone();return t.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function Vs(e,t=new Map){if(I_(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=Vs(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,i]of e.entries())n.set(r,Vs(i,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(Vs(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,i]of Object.entries(e))n[r]=Vs(i,t)}else throw Error(`Unable to clone ${e}`);return n}class _n{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Sd,this._blacklist=new Sd,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(In.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=Vs(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{t.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,i,s;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=t.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),i=n.assert==="ignore-optionality",s=r._cast(t,n);if(n.assert!==!1&&!r.isType(s)){if(i&&nr(s))return s;let o=ei(t),a=ei(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((i,s)=>s.call(this,i,t,this),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,i){let{path:s,originalValue:o=t,strict:a=this.spec.strict}=n,l=t;a||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let c of Object.values(this.internalTests))c&&u.push(c);this.runTests({path:s,value:l,originalValue:o,options:n,tests:u},r,c=>{if(c.length)return i(c,l);this.runTests({path:s,value:l,originalValue:o,options:n,tests:this.tests},r,i)})}runTests(t,n,r){let i=!1,{tests:s,value:o,originalValue:a,path:l,options:u}=t,c=v=>{i||(i=!0,n(v,o))},d=v=>{i||(i=!0,r(v,o))},h=s.length,f=[];if(!h)return d([]);let m={value:o,originalValue:a,path:l,options:u,schema:this};for(let v=0;v<s.length;v++){const S=s[v];S(m,c,function(p){p&&(Array.isArray(p)?f.push(...p):f.push(p)),--h<=0&&d(f)})}}asNestedTest({key:t,index:n,parent:r,parentPath:i,originalParent:s,options:o}){const a=t??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let u=r[a];const c=Object.assign({},o,{strict:!0,parent:r,value:u,originalValue:s[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${l?a:`"${a}"`}]`:(i?`${i}.`:"")+t});return(d,h,f)=>this.resolve(c)._validate(u,c,h,f)}validate(t,n){var r;let i=this.resolve(Object.assign({},n,{value:t})),s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((o,a)=>i._validate(t,n,(l,u)=>{Tt.isError(l)&&(l.value=u),a(l)},(l,u)=>{l.length?a(new Tt(l,u,void 0,void 0,s)):o(u)}))}validateSync(t,n){var r;let i=this.resolve(Object.assign({},n,{value:t})),s,o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(t,Object.assign({},n,{sync:!0}),(a,l)=>{throw Tt.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new Tt(a,t,void 0,void 0,o);s=l}),s}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(Tt.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(Tt.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):Vs(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=xs({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=xs({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=In.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=In.notNull){return this.nullability(!1,t)}required(t=In.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=In.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=xs(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),i=NR(t).map(s=>new _s(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof n=="function"?new Ed(i,n):Ed.fromOptions(i,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=xs({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=In.oneOf){let r=this.clone();return t.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=xs({message:n,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(t,n=In.notOneOf){let r=this.clone();return t.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=xs({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:i,optional:s,nullable:o}=n.spec;return{meta:i,label:r,optional:s,nullable:o,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,c)=>c.findIndex(d=>d.name===l.name)===u)}}}_n.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])_n.prototype[`${e}At`]=function(t,n,r={}){const{parent:i,parentPath:s,schema:o}=cW(this,t,n,r.context);return o[e](i&&i[s],Object.assign({},r,{parent:i,path:t}))};for(const e of["equals","is"])_n.prototype[e]=_n.prototype.oneOf;for(const e of["not","nope"])_n.prototype[e]=_n.prototype.notOneOf;const dW=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function hW(e){const t=fm(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;if(t.z===void 0&&t.plusMinus===void 0)return new Date(t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond).valueOf();let n=0;return t.z!=="Z"&&t.plusMinus!==void 0&&(n=t.hourOffset*60+t.minuteOffset,t.plusMinus==="+"&&(n=0-n)),Date.UTC(t.year,t.month,t.day,t.hour,t.minute+n,t.second,t.millisecond)}function fm(e){var t,n;const r=dW.exec(e);return r?{year:Hn(r[1]),month:Hn(r[2],1)-1,day:Hn(r[3],1),hour:Hn(r[4]),minute:Hn(r[5]),second:Hn(r[6]),millisecond:r[7]?Hn(r[7].substring(0,3)):0,precision:(t=(n=r[7])==null?void 0:n.length)!=null?t:void 0,z:r[8]||void 0,plusMinus:r[9]||void 0,hourOffset:Hn(r[10]),minuteOffset:Hn(r[11])}:null}function Hn(e,t=0){return Number(e)||t}let fW=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,pW=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,gW=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,mW="^\\d{4}-\\d{2}-\\d{2}",yW="\\d{2}:\\d{2}:\\d{2}",vW="(([+-]\\d{2}(:?\\d{2})?)|Z)",_W=new RegExp(`${mW}T${yW}(\\.\\d+)?${vW}$`),wW=e=>nr(e)||e===e.trim(),EW={}.toString();function ro(){return new MR}class MR extends _n{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const i=t!=null&&t.toString?t.toString():t;return i===EW?t:i})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||In.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=St.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=St.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=St.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||St.matches,params:{regex:t},skipAbsent:!0,test:o=>o===""&&r||o.search(t)!==-1})}email(t=St.email){return this.matches(fW,{name:"email",message:t,excludeEmptyString:!0})}url(t=St.url){return this.matches(pW,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=St.uuid){return this.matches(gW,{name:"uuid",message:t,excludeEmptyString:!1})}datetime(t){let n="",r,i;return t&&(typeof t=="object"?{message:n="",allowOffset:r=!1,precision:i=void 0}=t:n=t),this.matches(_W,{name:"datetime",message:n||St.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:n||St.datetime_offset,params:{allowOffset:r},skipAbsent:!0,test:s=>{if(!s||r)return!0;const o=fm(s);return o?!!o.z:!1}}).test({name:"datetime_precision",message:n||St.datetime_precision,params:{precision:i},skipAbsent:!0,test:s=>{if(!s||i==null)return!0;const o=fm(s);return o?o.precision===i:!1}})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=St.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:wW})}lowercase(t=St.lowercase){return this.transform(n=>nr(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>nr(n)||n===n.toLowerCase()})}uppercase(t=St.uppercase){return this.transform(n=>nr(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>nr(n)||n===n.toUpperCase()})}}ro.prototype=MR.prototype;let SW=e=>e!=+e;function CW(){return new FR}class FR extends _n{constructor(){super({type:"number",check(t){return t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&!SW(t)}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce)return t;let i=t;if(typeof i=="string"){if(i=i.replace(/\s/g,""),i==="")return NaN;i=+i}return r.isType(i)||i===null?i:parseFloat(i)})})}min(t,n=Ir.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r>=this.resolve(t)}})}max(t,n=Ir.max){return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(r){return r<=this.resolve(t)}})}lessThan(t,n=Ir.lessThan){return this.test({message:n,name:"max",exclusive:!0,params:{less:t},skipAbsent:!0,test(r){return r<this.resolve(t)}})}moreThan(t,n=Ir.moreThan){return this.test({message:n,name:"min",exclusive:!0,params:{more:t},skipAbsent:!0,test(r){return r>this.resolve(t)}})}positive(t=Ir.positive){return this.moreThan(0,t)}negative(t=Ir.negative){return this.lessThan(0,t)}integer(t=Ir.integer){return this.test({name:"integer",message:t,skipAbsent:!0,test:n=>Number.isInteger(n)})}truncate(){return this.transform(t=>nr(t)?t:t|0)}round(t){var n;let r=["ceil","floor","round","trunc"];if(t=((n=t)==null?void 0:n.toLowerCase())||"round",t==="trunc")return this.truncate();if(r.indexOf(t.toLowerCase())===-1)throw new TypeError("Only valid options for round() are: "+r.join(", "));return this.transform(i=>nr(i)?i:Math[t](i))}}CW.prototype=FR.prototype;let TW=new Date(""),IW=e=>Object.prototype.toString.call(e)==="[object Date]";class qh extends _n{constructor(){super({type:"date",check(t){return IW(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)||t===null?t:(t=hW(t),isNaN(t)?qh.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(_s.isRef(t))r=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(t,n=dm.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(t,n=dm.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}qh.INVALID_DATE=TW;qh.prototype;function xW(e,t=[]){let n=[],r=new Set,i=new Set(t.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=Vi.split(o)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(e)){let a=e[o];r.add(o),_s.isRef(a)&&a.isSibling?s(a.path,o):I_(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return Z7.array(Array.from(r),n).reverse()}function jE(e,t){let n=1/0;return e.some((r,i)=>{var s;if((s=t.path)!=null&&s.includes(r))return n=i,!0}),n}function jR(e){return(t,n)=>jE(e,t)-jE(e,n)}const kW=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function oc(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=oc(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=oc(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(oc)}):"optional"in e?e.optional():e}const PW=(e,t)=>{const n=[...Vi.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),i=Vi.getter(Vi.join(n),!0)(e);return!!(i&&r in i)};let UE=e=>Object.prototype.toString.call(e)==="[object Object]";function RW(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const AW=jR([]);function x_(e){return new UR(e)}class UR extends _n{constructor(t){super({type:"object",check(n){return UE(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=AW,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let i=super._cast(t,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(d=>!this._nodes.includes(d))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),c=!1;for(const d of a){let h=s[d],f=d in i;if(h){let m,v=i[d];u.path=(n.path?`${n.path}.`:"")+d,h=h.resolve({value:v,context:n.context,parent:l});let S=h instanceof _n?h.spec:void 0,g=S==null?void 0:S.strict;if(S!=null&&S.strip){c=c||d in i;continue}m=!n.__validating||!g?h.cast(i[d],u):i[d],m!==void 0&&(l[d]=m)}else f&&!o&&(l[d]=i[d]);(f!==d in l||l[d]!==i[d])&&(c=!0)}return c?l:i}_validate(t,n={},r,i){let{from:s=[],originalValue:o=t,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...s],n.__validating=!0,n.originalValue=o,super._validate(t,n,r,(l,u)=>{if(!a||!UE(u)){i(l,u);return}o=o||u;let c=[];for(let d of this._nodes){let h=this.fields[d];!h||_s.isRef(h)||c.push(h.asNestedTest({options:n,key:d,parent:u,parentPath:n.path,originalParent:o}))}this.runTests({tests:c,value:u,originalValue:o,options:n},r,d=>{i(d.sort(this._sortErrors).concat(l),u)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=t;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=xW(t,n),r._sortErrors=jR(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),i)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return oc(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>t.includes(r)&&t.includes(i)))}omit(t){const n=[];for(const r of Object.keys(this.fields))t.includes(r)||n.push(r);return this.pick(n)}from(t,n,r){let i=Vi.getter(t,!0);return this.transform(s=>{if(!s)return s;let o=s;return PW(s,t)&&(o=Object.assign({},s),r||delete o[t],o[n]=i(s)),o})}json(){return this.transform(kW)}noUnknown(t=!0,n=hm.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=RW(this.schema,i);return!t||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=hm.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[t(i)]=n[i];return r})}camelCase(){return this.transformKeys(cp.camelCase)}snakeCase(){return this.transformKeys(cp.snakeCase)}constantCase(){return this.transformKeys(t=>cp.snakeCase(t).toUpperCase())}describe(t){const n=(t?this.resolve(t):this).clone(),r=super.describe(t);r.fields={};for(const[s,o]of Object.entries(n.fields)){var i;let a=t;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),r.fields[s]=o.describe(a)}return r}}x_.prototype=UR.prototype;const bW="/assets/google-0d1cd802.svg",zR=({close:e})=>{function t(){N3(ss,Z6).then(n=>{e()}).catch(n=>{n.code==="auth/popup-closed-by-user"?Zr.error("Popup window was closed by the user"):Zr.error("Sorry, couldn't sign in with Google. Please try again later.")})}return k.jsxs(S7,{onClick:t,children:[k.jsx(C7,{src:bW,alt:"Google"}),"Continue with Google"]})},OW=({close:e})=>{const[t,n]=w.useState(!1),[r,i]=w.useState(!1),s=a=>{const{email:l,password:u}=a;l3(ss,l,u).then(c=>{e()}).catch(c=>{const d=c.code;d==="auth/user-not-found"?Zr.error("User not found. Please check your email or sign up."):d==="auth/wrong-password"?Zr.error("Invalid password. Please try again."):Zr.error("Sorry, couldn't log in. Please try again later.")})},o=x_().shape({email:ro().email("Invalid email").required("Required"),password:ro().min(8,"Too Short!").required("Required")});return k.jsxs("div",{children:[k.jsx(SR,{children:"Log In"}),k.jsx(CR,{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."}),k.jsx(wR,{initialValues:{email:"",password:""},onSubmit:s,validationSchema:o,children:({})=>k.jsxs(TR,{children:[k.jsx(ba,{type:"email",name:"email",placeholder:t?"":"Email",onFocus:()=>n(!0)}),k.jsx(Oa,{name:"email",component:"div"}),k.jsx(ba,{type:"password",name:"password",placeholder:r?"":"Password",onFocus:()=>i(!0)}),k.jsx(Oa,{name:"password",component:"div"}),k.jsx(IR,{type:"submit",children:"Log in"})]})}),k.jsx(zR,{close:e})]})},NW=({close:e})=>{const[t,n]=w.useState(!1),[r,i]=w.useState(!1),[s,o]=w.useState(!1),a=u=>{const{email:c,password:d}=u;a3(ss,c,d).then(h=>{e()}).catch(h=>{const f=h.code;f==="auth/email-already-in-use"?Zr.error("This email is already in use. Please try another one."):f==="auth/weak-password"?Zr.error("The password is too weak. Please choose a stronger one."):Zr.error("Sorry, something went wrong! Please try again later.")})},l=x_().shape({name:ro().min(2,"Too Short!").max(20,"Too Long!").required("Required"),email:ro().email("Invalid email").required("Required"),password:ro().min(8,"Too Short!").required("Required")});return k.jsxs("div",{children:[k.jsx(SR,{children:"Registration"}),k.jsx(CR,{children:"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"}),k.jsx(wR,{initialValues:{name:"",email:"",password:""},onSubmit:a,validationSchema:l,children:({})=>k.jsxs(TR,{children:[k.jsx(ba,{name:"name",placeholder:t?"":"Name",onFocus:()=>n(!0)}),k.jsx(Oa,{name:"name",component:"div"}),k.jsx(ba,{type:"email",name:"email",placeholder:r?"":"Email",onFocus:()=>i(!0)}),k.jsx(Oa,{name:"email",component:"div"}),k.jsx(ba,{type:"password",name:"password",placeholder:s?"":"Password",onFocus:()=>o(!0)}),k.jsx(Oa,{name:"password",component:"div"}),k.jsx(IR,{type:"submit",children:"Sign up"})]})}),k.jsx(zR,{close:e})]})},KW=V.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`,qW=V.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`,YW=V.div`
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
    padding-left: 70px;
    display: block;
  }
`,QW=V.h1`
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
`,DW=V.span`
  font-style: italic;
  font-weight: 600;
  color: #fc832c;

  &:hover{
    color: ${({theme:e})=>e.primaryBlack};
  }
`,XW=V.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: -0.02em;
  margin-top: 32px;
  margin-bottom: 64px;
  text-align: center;

  @media screen and (min-width: 1400px) {
    width: 471px;
    text-align: start;
  }
`,JW=V(py)`
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
    height: 60px;
    margin-bottom: 0;
  }
`,ZW=V.div`
  position: relative;
  border-radius: 30px;
  max-width: 464px;
  height: 526px;

  @media screen and (min-width: 1140px) {
    width: 568px;
    height: 530px;
  }
`,eH=V.img`
  left: 25%;
  width: 250px;
  margin-top: 50px;

  @media screen and (min-width: 1140px) {
    margin-left: 114px;
    margin-top: 80px;
    border-radius: 10px;
    width: 464px;
    height: 526px;
  }
`;V.img`
  position: absolute;
  left: 0;
  top: 270px;
  z-index: 1;
  width: 250px;

  @media screen and (min-width: 1140px) {
    top: 354px;
    left: 105px;
    width: auto;
  }
`;V.div`
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
`;V.ul`
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
`;V.li`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;V.p`
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: -0.02em;
  font-size: 20px;

  @media screen and (min-width: 1140px) {
    font-size: 28px;
  }
`;V.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: rgba(18, 20, 23, 0.7);
  white-space: pre-line;
`;V.span`
  display: block;
`;const $W=({authUser:e})=>{const[t,n]=w.useState(!1),[r,i]=w.useState(!1),[s,o]=w.useState(!1),a=()=>{n(d=>!d)};function l(){o(!1),i(!0),a()}function u(){i(!1),o(!0),a()}const c=()=>{n(!1)};return k.jsxs(p9,{children:[k.jsxs(g9,{children:[k.jsxs(m9,{children:[k.jsx("li",{children:k.jsx(hT,{to:"/"})}),k.jsx("li",{children:k.jsxs(y9,{to:"/",children:[k.jsx(DW,{children:"psychologists."}),"services"]})})]}),k.jsx(D7,{authUser:e,onClickLogin:l,onClickRegister:u})]}),k.jsx(w.Suspense,{children:k.jsx(hO,{})}),k.jsx(a5,{position:"top-right",reverseOrder:!1}),t&&k.jsxs(I7,{toggleModal:a,children:[r&&k.jsx(OW,{close:c}),s&&k.jsx(NW,{close:c,name:"",email:"",password:""})]})]})},LW=({children:e,authUser:t})=>t?e:k.jsx(dO,{to:"/"}),zE=w.lazy(()=>s_(()=>import("./HomePage-f32f91d7.js"),[])),MW=w.lazy(()=>s_(()=>import("./Psychologists-23c4cb9b.js"),["assets/Psychologists-23c4cb9b.js","assets/Loader-fdfc6468.js"])),FW=w.lazy(()=>s_(()=>import("./FavoritesPage-0e3b5b8d.js"),["assets/FavoritesPage-0e3b5b8d.js","assets/Loader-fdfc6468.js"])),jW=()=>{const[e,t]=w.useState(ss.currentUser);return w.useEffect(()=>{const n=d3(ss,r=>{t(r||null)});return()=>{n()}},[]),k.jsx(pO,{children:k.jsxs(ks,{path:"/",element:k.jsx($W,{authUser:e}),children:[k.jsx(ks,{index:!0,element:k.jsx(zE,{})}),k.jsx(ks,{path:"teachers",element:k.jsx(MW,{authUser:e})}),k.jsx(ks,{path:"favorites",element:k.jsx(LW,{authUser:e,children:k.jsx(FW,{authUser:e})})}),k.jsx(ks,{path:"*",element:k.jsx(zE,{})})]})})},UW={primaryBlack:"#121417",primaryGray:"#8A8A89",primaryYellow:"#f37113",primaryLightYellow:"#FFDC86",lightYellow:"#fc832c",green:"#9FBAAE",lightGreen:"#CBDED3",blue:"#9FB7CE",lightBlue:"#BFD6EA",pink:"#E0A39A",lightPink:"#F2C0BD",orange:"#FBDDC8",lightOrange:"rgba(252, 131, 44, 0.2)"};hp.createRoot(document.getElementById("root")).render(k.jsx(wO,{basename:"/",children:k.jsx(HN,{store:DP,children:k.jsxs(EN,{theme:UW,children:[k.jsx(jW,{}),k.jsx(IN,{})]})})}));export{IR as B,Oa as E,c7 as F,KW as H,qW as I,DW as L,I7 as M,Lt as R,YW as S,QW as T,Zr as _,XW as a,JW as b,ZW as c,eH as d,HW as e,WW as f,rp as g,GW as h,x_ as i,k as j,ro as k,CW as l,wR as m,TR as n,ba as o,np as p,K1 as q,w as r,VW as s,V as u};
