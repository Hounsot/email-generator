(function(){const V=document.createElement("link").relList;if(V&&V.supports&&V.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))ye(j);new MutationObserver(j=>{for(const $ of j)if($.type==="childList")for(const oe of $.addedNodes)oe.tagName==="LINK"&&oe.rel==="modulepreload"&&ye(oe)}).observe(document,{childList:!0,subtree:!0});function h(j){const $={};return j.integrity&&($.integrity=j.integrity),j.referrerPolicy&&($.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?$.credentials="include":j.crossOrigin==="anonymous"?$.credentials="omit":$.credentials="same-origin",$}function ye(j){if(j.ep)return;j.ep=!0;const $=h(j);fetch(j.href,$)}})();var _o={exports:{}},vr={},Co={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _s;function Pc(){if(_s)return F;_s=1;var R=Symbol.for("react.element"),V=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),ye=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),oe=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),te=Symbol.for("react.memo"),xe=Symbol.for("react.lazy"),ne=Symbol.iterator;function Z(f){return f===null||typeof f!="object"?null:(f=ne&&f[ne]||f["@@iterator"],typeof f=="function"?f:null)}var We={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$e=Object.assign,J={};function Q(f,g,L){this.props=f,this.context=g,this.refs=J,this.updater=L||We}Q.prototype.isReactComponent={},Q.prototype.setState=function(f,g){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,g,"setState")},Q.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function gt(){}gt.prototype=Q.prototype;function at(f,g,L){this.props=f,this.context=g,this.refs=J,this.updater=L||We}var qe=at.prototype=new gt;qe.constructor=at,$e(qe,Q.prototype),qe.isPureReactComponent=!0;var ke=Array.isArray,be=Object.prototype.hasOwnProperty,ze={current:null},Pe={key:!0,ref:!0,__self:!0,__source:!0};function Qe(f,g,L){var O,M={},D=null,K=null;if(g!=null)for(O in g.ref!==void 0&&(K=g.ref),g.key!==void 0&&(D=""+g.key),g)be.call(g,O)&&!Pe.hasOwnProperty(O)&&(M[O]=g[O]);var H=arguments.length-2;if(H===1)M.children=L;else if(1<H){for(var q=Array(H),De=0;De<H;De++)q[De]=arguments[De+2];M.children=q}if(f&&f.defaultProps)for(O in H=f.defaultProps,H)M[O]===void 0&&(M[O]=H[O]);return{$$typeof:R,type:f,key:D,ref:K,props:M,_owner:ze.current}}function zt(f,g){return{$$typeof:R,type:f.type,key:g,ref:f.ref,props:f.props,_owner:f._owner}}function yt(f){return typeof f=="object"&&f!==null&&f.$$typeof===R}function Kt(f){var g={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(L){return g[L]})}var st=/\/+/g;function Me(f,g){return typeof f=="object"&&f!==null&&f.key!=null?Kt(""+f.key):g.toString(36)}function et(f,g,L,O,M){var D=typeof f;(D==="undefined"||D==="boolean")&&(f=null);var K=!1;if(f===null)K=!0;else switch(D){case"string":case"number":K=!0;break;case"object":switch(f.$$typeof){case R:case V:K=!0}}if(K)return K=f,M=M(K),f=O===""?"."+Me(K,0):O,ke(M)?(L="",f!=null&&(L=f.replace(st,"$&/")+"/"),et(M,g,L,"",function(De){return De})):M!=null&&(yt(M)&&(M=zt(M,L+(!M.key||K&&K.key===M.key?"":(""+M.key).replace(st,"$&/")+"/")+f)),g.push(M)),1;if(K=0,O=O===""?".":O+":",ke(f))for(var H=0;H<f.length;H++){D=f[H];var q=O+Me(D,H);K+=et(D,g,L,q,M)}else if(q=Z(f),typeof q=="function")for(f=q.call(f),H=0;!(D=f.next()).done;)D=D.value,q=O+Me(D,H++),K+=et(D,g,L,q,M);else if(D==="object")throw g=String(f),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.");return K}function ft(f,g,L){if(f==null)return f;var O=[],M=0;return et(f,O,"","",function(D){return g.call(L,D,M++)}),O}function Te(f){if(f._status===-1){var g=f._result;g=g(),g.then(function(L){(f._status===0||f._status===-1)&&(f._status=1,f._result=L)},function(L){(f._status===0||f._status===-1)&&(f._status=2,f._result=L)}),f._status===-1&&(f._status=0,f._result=g)}if(f._status===1)return f._result.default;throw f._result}var ue={current:null},x={transition:null},P={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:x,ReactCurrentOwner:ze};function E(){throw Error("act(...) is not supported in production builds of React.")}return F.Children={map:ft,forEach:function(f,g,L){ft(f,function(){g.apply(this,arguments)},L)},count:function(f){var g=0;return ft(f,function(){g++}),g},toArray:function(f){return ft(f,function(g){return g})||[]},only:function(f){if(!yt(f))throw Error("React.Children.only expected to receive a single React element child.");return f}},F.Component=Q,F.Fragment=h,F.Profiler=j,F.PureComponent=at,F.StrictMode=ye,F.Suspense=B,F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,F.act=E,F.cloneElement=function(f,g,L){if(f==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+f+".");var O=$e({},f.props),M=f.key,D=f.ref,K=f._owner;if(g!=null){if(g.ref!==void 0&&(D=g.ref,K=ze.current),g.key!==void 0&&(M=""+g.key),f.type&&f.type.defaultProps)var H=f.type.defaultProps;for(q in g)be.call(g,q)&&!Pe.hasOwnProperty(q)&&(O[q]=g[q]===void 0&&H!==void 0?H[q]:g[q])}var q=arguments.length-2;if(q===1)O.children=L;else if(1<q){H=Array(q);for(var De=0;De<q;De++)H[De]=arguments[De+2];O.children=H}return{$$typeof:R,type:f.type,key:M,ref:D,props:O,_owner:K}},F.createContext=function(f){return f={$$typeof:oe,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},f.Provider={$$typeof:$,_context:f},f.Consumer=f},F.createElement=Qe,F.createFactory=function(f){var g=Qe.bind(null,f);return g.type=f,g},F.createRef=function(){return{current:null}},F.forwardRef=function(f){return{$$typeof:ee,render:f}},F.isValidElement=yt,F.lazy=function(f){return{$$typeof:xe,_payload:{_status:-1,_result:f},_init:Te}},F.memo=function(f,g){return{$$typeof:te,type:f,compare:g===void 0?null:g}},F.startTransition=function(f){var g=x.transition;x.transition={};try{f()}finally{x.transition=g}},F.unstable_act=E,F.useCallback=function(f,g){return ue.current.useCallback(f,g)},F.useContext=function(f){return ue.current.useContext(f)},F.useDebugValue=function(){},F.useDeferredValue=function(f){return ue.current.useDeferredValue(f)},F.useEffect=function(f,g){return ue.current.useEffect(f,g)},F.useId=function(){return ue.current.useId()},F.useImperativeHandle=function(f,g,L){return ue.current.useImperativeHandle(f,g,L)},F.useInsertionEffect=function(f,g){return ue.current.useInsertionEffect(f,g)},F.useLayoutEffect=function(f,g){return ue.current.useLayoutEffect(f,g)},F.useMemo=function(f,g){return ue.current.useMemo(f,g)},F.useReducer=function(f,g,L){return ue.current.useReducer(f,g,L)},F.useRef=function(f){return ue.current.useRef(f)},F.useState=function(f){return ue.current.useState(f)},F.useSyncExternalStore=function(f,g,L){return ue.current.useSyncExternalStore(f,g,L)},F.useTransition=function(){return ue.current.useTransition()},F.version="18.3.1",F}var Cs;function Po(){return Cs||(Cs=1,Co.exports=Pc()),Co.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zs;function Tc(){if(zs)return vr;zs=1;var R=Po(),V=Symbol.for("react.element"),h=Symbol.for("react.fragment"),ye=Object.prototype.hasOwnProperty,j=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$={key:!0,ref:!0,__self:!0,__source:!0};function oe(ee,B,te){var xe,ne={},Z=null,We=null;te!==void 0&&(Z=""+te),B.key!==void 0&&(Z=""+B.key),B.ref!==void 0&&(We=B.ref);for(xe in B)ye.call(B,xe)&&!$.hasOwnProperty(xe)&&(ne[xe]=B[xe]);if(ee&&ee.defaultProps)for(xe in B=ee.defaultProps,B)ne[xe]===void 0&&(ne[xe]=B[xe]);return{$$typeof:V,type:ee,key:Z,ref:We,props:ne,_owner:j.current}}return vr.Fragment=h,vr.jsx=oe,vr.jsxs=oe,vr}var As;function Rc(){return As||(As=1,_o.exports=Tc()),_o.exports}var ie=Rc(),Ln=Po(),Pl={},zo={exports:{}},Ie={},Ao={exports:{}},No={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ns;function Lc(){return Ns||(Ns=1,function(R){function V(x,P){var E=x.length;x.push(P);e:for(;0<E;){var f=E-1>>>1,g=x[f];if(0<j(g,P))x[f]=P,x[E]=g,E=f;else break e}}function h(x){return x.length===0?null:x[0]}function ye(x){if(x.length===0)return null;var P=x[0],E=x.pop();if(E!==P){x[0]=E;e:for(var f=0,g=x.length,L=g>>>1;f<L;){var O=2*(f+1)-1,M=x[O],D=O+1,K=x[D];if(0>j(M,E))D<g&&0>j(K,M)?(x[f]=K,x[D]=E,f=D):(x[f]=M,x[O]=E,f=O);else if(D<g&&0>j(K,E))x[f]=K,x[D]=E,f=D;else break e}}return P}function j(x,P){var E=x.sortIndex-P.sortIndex;return E!==0?E:x.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var $=performance;R.unstable_now=function(){return $.now()}}else{var oe=Date,ee=oe.now();R.unstable_now=function(){return oe.now()-ee}}var B=[],te=[],xe=1,ne=null,Z=3,We=!1,$e=!1,J=!1,Q=typeof setTimeout=="function"?setTimeout:null,gt=typeof clearTimeout=="function"?clearTimeout:null,at=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function qe(x){for(var P=h(te);P!==null;){if(P.callback===null)ye(te);else if(P.startTime<=x)ye(te),P.sortIndex=P.expirationTime,V(B,P);else break;P=h(te)}}function ke(x){if(J=!1,qe(x),!$e)if(h(B)!==null)$e=!0,Te(be);else{var P=h(te);P!==null&&ue(ke,P.startTime-x)}}function be(x,P){$e=!1,J&&(J=!1,gt(Qe),Qe=-1),We=!0;var E=Z;try{for(qe(P),ne=h(B);ne!==null&&(!(ne.expirationTime>P)||x&&!Kt());){var f=ne.callback;if(typeof f=="function"){ne.callback=null,Z=ne.priorityLevel;var g=f(ne.expirationTime<=P);P=R.unstable_now(),typeof g=="function"?ne.callback=g:ne===h(B)&&ye(B),qe(P)}else ye(B);ne=h(B)}if(ne!==null)var L=!0;else{var O=h(te);O!==null&&ue(ke,O.startTime-P),L=!1}return L}finally{ne=null,Z=E,We=!1}}var ze=!1,Pe=null,Qe=-1,zt=5,yt=-1;function Kt(){return!(R.unstable_now()-yt<zt)}function st(){if(Pe!==null){var x=R.unstable_now();yt=x;var P=!0;try{P=Pe(!0,x)}finally{P?Me():(ze=!1,Pe=null)}}else ze=!1}var Me;if(typeof at=="function")Me=function(){at(st)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,ft=et.port2;et.port1.onmessage=st,Me=function(){ft.postMessage(null)}}else Me=function(){Q(st,0)};function Te(x){Pe=x,ze||(ze=!0,Me())}function ue(x,P){Qe=Q(function(){x(R.unstable_now())},P)}R.unstable_IdlePriority=5,R.unstable_ImmediatePriority=1,R.unstable_LowPriority=4,R.unstable_NormalPriority=3,R.unstable_Profiling=null,R.unstable_UserBlockingPriority=2,R.unstable_cancelCallback=function(x){x.callback=null},R.unstable_continueExecution=function(){$e||We||($e=!0,Te(be))},R.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):zt=0<x?Math.floor(1e3/x):5},R.unstable_getCurrentPriorityLevel=function(){return Z},R.unstable_getFirstCallbackNode=function(){return h(B)},R.unstable_next=function(x){switch(Z){case 1:case 2:case 3:var P=3;break;default:P=Z}var E=Z;Z=P;try{return x()}finally{Z=E}},R.unstable_pauseExecution=function(){},R.unstable_requestPaint=function(){},R.unstable_runWithPriority=function(x,P){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var E=Z;Z=x;try{return P()}finally{Z=E}},R.unstable_scheduleCallback=function(x,P,E){var f=R.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?f+E:f):E=f,x){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=E+g,x={id:xe++,callback:P,priorityLevel:x,startTime:E,expirationTime:g,sortIndex:-1},E>f?(x.sortIndex=E,V(te,x),h(B)===null&&x===h(te)&&(J?(gt(Qe),Qe=-1):J=!0,ue(ke,E-f))):(x.sortIndex=g,V(B,x),$e||We||($e=!0,Te(be))),x},R.unstable_shouldYield=Kt,R.unstable_wrapCallback=function(x){var P=Z;return function(){var E=Z;Z=P;try{return x.apply(this,arguments)}finally{Z=E}}}}(No)),No}var Ps;function Fc(){return Ps||(Ps=1,Ao.exports=Lc()),Ao.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ts;function Oc(){if(Ts)return Ie;Ts=1;var R=Po(),V=Fc();function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ye=new Set,j={};function $(e,t){oe(e,t),oe(e+"Capture",t)}function oe(e,t){for(j[e]=t,e=0;e<t.length;e++)ye.add(t[e])}var ee=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),B=Object.prototype.hasOwnProperty,te=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xe={},ne={};function Z(e){return B.call(ne,e)?!0:B.call(xe,e)?!1:te.test(e)?ne[e]=!0:(xe[e]=!0,!1)}function We(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $e(e,t,n,r){if(t===null||typeof t>"u"||We(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function J(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Q[e]=new J(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Q[t]=new J(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Q[e]=new J(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Q[e]=new J(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Q[e]=new J(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Q[e]=new J(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Q[e]=new J(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Q[e]=new J(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Q[e]=new J(e,5,!1,e.toLowerCase(),null,!1,!1)});var gt=/[\-:]([a-z])/g;function at(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gt,at);Q[t]=new J(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gt,at);Q[t]=new J(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gt,at);Q[t]=new J(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Q[e]=new J(e,1,!1,e.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Q[e]=new J(e,1,!1,e.toLowerCase(),null,!0,!0)});function qe(e,t,n,r){var l=Q.hasOwnProperty(t)?Q[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($e(t,n,l,r)&&(n=null),r||l===null?Z(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ke=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,be=Symbol.for("react.element"),ze=Symbol.for("react.portal"),Pe=Symbol.for("react.fragment"),Qe=Symbol.for("react.strict_mode"),zt=Symbol.for("react.profiler"),yt=Symbol.for("react.provider"),Kt=Symbol.for("react.context"),st=Symbol.for("react.forward_ref"),Me=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),ft=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),x=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=x&&e[x]||e["@@iterator"],typeof e=="function"?e:null)}var E=Object.assign,f;function g(e){if(f===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);f=t&&t[1]||""}return`
`+f+e}var L=!1;function O(e,t){if(!e||L)return"";L=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var l=p.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,u=i.length-1;1<=o&&0<=u&&l[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==i[u]){var a=`
`+l[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=u);break}}}finally{L=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?g(e):""}function M(e){switch(e.tag){case 5:return g(e.type);case 16:return g("Lazy");case 13:return g("Suspense");case 19:return g("SuspenseList");case 0:case 2:case 15:return e=O(e.type,!1),e;case 11:return e=O(e.type.render,!1),e;case 1:return e=O(e.type,!0),e;default:return""}}function D(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pe:return"Fragment";case ze:return"Portal";case zt:return"Profiler";case Qe:return"StrictMode";case Me:return"Suspense";case et:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kt:return(e.displayName||"Context")+".Consumer";case yt:return(e._context.displayName||"Context")+".Provider";case st:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ft:return t=e.displayName||null,t!==null?t:D(e.type)||"Memo";case Te:t=e._payload,e=e._init;try{return D(e(t))}catch{}}return null}function K(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return D(t);case 8:return t===Qe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function q(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function De(e){var t=q(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wr(e){e._valueTracker||(e._valueTracker=De(e))}function To(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=q(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Tl(e,t){var n=t.checked;return E({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ro(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=H(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Lo(e,t){t=t.checked,t!=null&&qe(e,"checked",t,!1)}function Rl(e,t){Lo(e,t);var n=H(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ll(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ll(e,t.type,H(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ll(e,t,n){(t!=="number"||xr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fn=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Fl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return E({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Oo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(h(92));if(Fn(n)){if(1<n.length)throw Error(h(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function jo(e,t){var n=H(t.value),r=H(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Io(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Mo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ol(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Mo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kr,Do=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(kr=kr||document.createElement("div"),kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function On(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fs=["Webkit","ms","Moz","O"];Object.keys(jn).forEach(function(e){Fs.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jn[t]=jn[e]})});function Uo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jn.hasOwnProperty(e)&&jn[e]?(""+t).trim():t+"px"}function Vo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Uo(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Os=E({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jl(e,t){if(t){if(Os[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62))}}function Il(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ml=null;function Dl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ul=null,an=null,sn=null;function Bo(e){if(e=rr(e)){if(typeof Ul!="function")throw Error(h(280));var t=e.stateNode;t&&(t=$r(t),Ul(e.stateNode,e.type,t))}}function Ho(e){an?sn?sn.push(e):sn=[e]:an=e}function Wo(){if(an){var e=an,t=sn;if(sn=an=null,Bo(e),t)for(e=0;e<t.length;e++)Bo(t[e])}}function $o(e,t){return e(t)}function Qo(){}var Vl=!1;function Ko(e,t,n){if(Vl)return e(t,n);Vl=!0;try{return $o(e,t,n)}finally{Vl=!1,(an!==null||sn!==null)&&(Qo(),Wo())}}function In(e,t){var n=e.stateNode;if(n===null)return null;var r=$r(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}var Bl=!1;if(ee)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){Bl=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{Bl=!1}function js(e,t,n,r,l,i,o,u,a){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(y){this.onError(y)}}var Dn=!1,Sr=null,Er=!1,Hl=null,Is={onError:function(e){Dn=!0,Sr=e}};function Ms(e,t,n,r,l,i,o,u,a){Dn=!1,Sr=null,js.apply(Is,arguments)}function Ds(e,t,n,r,l,i,o,u,a){if(Ms.apply(this,arguments),Dn){if(Dn){var p=Sr;Dn=!1,Sr=null}else throw Error(h(198));Er||(Er=!0,Hl=p)}}function Yt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xo(e){if(Yt(e)!==e)throw Error(h(188))}function Us(e){var t=e.alternate;if(!t){if(t=Yt(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Xo(l),e;if(i===r)return Xo(l),t;i=i.sibling}throw Error(h(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,r=i;break}if(u===r){o=!0,r=l,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,r=l;break}if(u===r){o=!0,r=i,n=l;break}u=u.sibling}if(!o)throw Error(h(189))}}if(n.alternate!==r)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function Go(e){return e=Us(e),e!==null?Zo(e):null}function Zo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zo(e);if(t!==null)return t;e=e.sibling}return null}var Jo=V.unstable_scheduleCallback,qo=V.unstable_cancelCallback,Vs=V.unstable_shouldYield,Bs=V.unstable_requestPaint,se=V.unstable_now,Hs=V.unstable_getCurrentPriorityLevel,Wl=V.unstable_ImmediatePriority,bo=V.unstable_UserBlockingPriority,_r=V.unstable_NormalPriority,Ws=V.unstable_LowPriority,eu=V.unstable_IdlePriority,Cr=null,ct=null;function $s(e){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Cr,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Ys,Qs=Math.log,Ks=Math.LN2;function Ys(e){return e>>>=0,e===0?32:31-(Qs(e)/Ks|0)|0}var zr=64,Ar=4194304;function Un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Nr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~l;u!==0?r=Un(u):(i&=o,i!==0&&(r=Un(i)))}else o=n&~l,o!==0?r=Un(o):i!==0&&(r=Un(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),l=1<<n,r|=e[n],t&=~l;return r}function Xs(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gs(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-tt(i),u=1<<o,a=l[o];a===-1?(!(u&n)||u&r)&&(l[o]=Xs(u,t)):a<=t&&(e.expiredLanes|=u),i&=~u}}function $l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tu(){var e=zr;return zr<<=1,!(zr&4194240)&&(zr=64),e}function Ql(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function Zs(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-tt(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Kl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var W=0;function nu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ru,Yl,lu,iu,ou,Xl=!1,Pr=[],At=null,Nt=null,Pt=null,Bn=new Map,Hn=new Map,Tt=[],Js="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uu(e,t){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":Bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hn.delete(t.pointerId)}}function Wn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=rr(t),t!==null&&Yl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function qs(e,t,n,r,l){switch(t){case"focusin":return At=Wn(At,e,t,n,r,l),!0;case"dragenter":return Nt=Wn(Nt,e,t,n,r,l),!0;case"mouseover":return Pt=Wn(Pt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Bn.set(i,Wn(Bn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Hn.set(i,Wn(Hn.get(i)||null,e,t,n,r,l)),!0}return!1}function au(e){var t=Xt(e.target);if(t!==null){var n=Yt(t);if(n!==null){if(t=n.tag,t===13){if(t=Yo(n),t!==null){e.blockedOn=t,ou(e.priority,function(){lu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ml=r,n.target.dispatchEvent(r),Ml=null}else return t=rr(n),t!==null&&Yl(t),e.blockedOn=n,!1;t.shift()}return!0}function su(e,t,n){Tr(e)&&n.delete(t)}function bs(){Xl=!1,At!==null&&Tr(At)&&(At=null),Nt!==null&&Tr(Nt)&&(Nt=null),Pt!==null&&Tr(Pt)&&(Pt=null),Bn.forEach(su),Hn.forEach(su)}function $n(e,t){e.blockedOn===t&&(e.blockedOn=null,Xl||(Xl=!0,V.unstable_scheduleCallback(V.unstable_NormalPriority,bs)))}function Qn(e){function t(l){return $n(l,e)}if(0<Pr.length){$n(Pr[0],e);for(var n=1;n<Pr.length;n++){var r=Pr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(At!==null&&$n(At,e),Nt!==null&&$n(Nt,e),Pt!==null&&$n(Pt,e),Bn.forEach(t),Hn.forEach(t),n=0;n<Tt.length;n++)r=Tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Tt.length&&(n=Tt[0],n.blockedOn===null);)au(n),n.blockedOn===null&&Tt.shift()}var fn=ke.ReactCurrentBatchConfig,Rr=!0;function ef(e,t,n,r){var l=W,i=fn.transition;fn.transition=null;try{W=1,Gl(e,t,n,r)}finally{W=l,fn.transition=i}}function tf(e,t,n,r){var l=W,i=fn.transition;fn.transition=null;try{W=4,Gl(e,t,n,r)}finally{W=l,fn.transition=i}}function Gl(e,t,n,r){if(Rr){var l=Zl(e,t,n,r);if(l===null)pi(e,t,r,Lr,n),uu(e,r);else if(qs(l,e,t,n,r))r.stopPropagation();else if(uu(e,r),t&4&&-1<Js.indexOf(e)){for(;l!==null;){var i=rr(l);if(i!==null&&ru(i),i=Zl(e,t,n,r),i===null&&pi(e,t,r,Lr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else pi(e,t,r,null,n)}}var Lr=null;function Zl(e,t,n,r){if(Lr=null,e=Dl(r),e=Xt(e),e!==null)if(t=Yt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yo(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Lr=e,null}function fu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hs()){case Wl:return 1;case bo:return 4;case _r:case Ws:return 16;case eu:return 536870912;default:return 16}default:return 16}}var Rt=null,Jl=null,Fr=null;function cu(){if(Fr)return Fr;var e,t=Jl,n=t.length,r,l="value"in Rt?Rt.value:Rt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Fr=l.slice(e,1<r?1-r:void 0)}function Or(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jr(){return!0}function du(){return!1}function Ue(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?jr:du,this.isPropagationStopped=du,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jr)},persist:function(){},isPersistent:jr}),t}var cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=Ue(cn),Kn=E({},cn,{view:0,detail:0}),nf=Ue(Kn),bl,ei,Yn,Ir=E({},Kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ni,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yn&&(Yn&&e.type==="mousemove"?(bl=e.screenX-Yn.screenX,ei=e.screenY-Yn.screenY):ei=bl=0,Yn=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:ei}}),pu=Ue(Ir),rf=E({},Ir,{dataTransfer:0}),lf=Ue(rf),of=E({},Kn,{relatedTarget:0}),ti=Ue(of),uf=E({},cn,{animationName:0,elapsedTime:0,pseudoElement:0}),af=Ue(uf),sf=E({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ff=Ue(sf),cf=E({},cn,{data:0}),hu=Ue(cf),df={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hf[e])?!!t[e]:!1}function ni(){return mf}var gf=E({},Kn,{key:function(e){if(e.key){var t=df[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ni,charCode:function(e){return e.type==="keypress"?Or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yf=Ue(gf),vf=E({},Ir,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mu=Ue(vf),wf=E({},Kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ni}),xf=Ue(wf),kf=E({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sf=Ue(kf),Ef=E({},Ir,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_f=Ue(Ef),Cf=[9,13,27,32],ri=ee&&"CompositionEvent"in window,Xn=null;ee&&"documentMode"in document&&(Xn=document.documentMode);var zf=ee&&"TextEvent"in window&&!Xn,gu=ee&&(!ri||Xn&&8<Xn&&11>=Xn),yu=" ",vu=!1;function wu(e,t){switch(e){case"keyup":return Cf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dn=!1;function Af(e,t){switch(e){case"compositionend":return xu(t);case"keypress":return t.which!==32?null:(vu=!0,yu);case"textInput":return e=t.data,e===yu&&vu?null:e;default:return null}}function Nf(e,t){if(dn)return e==="compositionend"||!ri&&wu(e,t)?(e=cu(),Fr=Jl=Rt=null,dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gu&&t.locale!=="ko"?null:t.data;default:return null}}var Pf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ku(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pf[e.type]:t==="textarea"}function Su(e,t,n,r){Ho(r),t=Br(t,"onChange"),0<t.length&&(n=new ql("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gn=null,Zn=null;function Tf(e){Vu(e,0)}function Mr(e){var t=yn(e);if(To(t))return e}function Rf(e,t){if(e==="change")return t}var Eu=!1;if(ee){var li;if(ee){var ii="oninput"in document;if(!ii){var _u=document.createElement("div");_u.setAttribute("oninput","return;"),ii=typeof _u.oninput=="function"}li=ii}else li=!1;Eu=li&&(!document.documentMode||9<document.documentMode)}function Cu(){Gn&&(Gn.detachEvent("onpropertychange",zu),Zn=Gn=null)}function zu(e){if(e.propertyName==="value"&&Mr(Zn)){var t=[];Su(t,Zn,e,Dl(e)),Ko(Tf,t)}}function Lf(e,t,n){e==="focusin"?(Cu(),Gn=t,Zn=n,Gn.attachEvent("onpropertychange",zu)):e==="focusout"&&Cu()}function Ff(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mr(Zn)}function Of(e,t){if(e==="click")return Mr(t)}function jf(e,t){if(e==="input"||e==="change")return Mr(t)}function If(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:If;function Jn(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!B.call(t,l)||!nt(e[l],t[l]))return!1}return!0}function Au(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nu(e,t){var n=Au(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Au(n)}}function Pu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tu(){for(var e=window,t=xr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xr(e.document)}return t}function oi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Mf(e){var t=Tu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Pu(n.ownerDocument.documentElement,n)){if(r!==null&&oi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Nu(n,i);var o=Nu(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Df=ee&&"documentMode"in document&&11>=document.documentMode,pn=null,ui=null,qn=null,ai=!1;function Ru(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ai||pn==null||pn!==xr(r)||(r=pn,"selectionStart"in r&&oi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qn&&Jn(qn,r)||(qn=r,r=Br(ui,"onSelect"),0<r.length&&(t=new ql("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pn)))}function Dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hn={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionend:Dr("Transition","TransitionEnd")},si={},Lu={};ee&&(Lu=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function Ur(e){if(si[e])return si[e];if(!hn[e])return e;var t=hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lu)return si[e]=t[n];return e}var Fu=Ur("animationend"),Ou=Ur("animationiteration"),ju=Ur("animationstart"),Iu=Ur("transitionend"),Mu=new Map,Du="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lt(e,t){Mu.set(e,t),$(t,[e])}for(var fi=0;fi<Du.length;fi++){var ci=Du[fi],Uf=ci.toLowerCase(),Vf=ci[0].toUpperCase()+ci.slice(1);Lt(Uf,"on"+Vf)}Lt(Fu,"onAnimationEnd"),Lt(Ou,"onAnimationIteration"),Lt(ju,"onAnimationStart"),Lt("dblclick","onDoubleClick"),Lt("focusin","onFocus"),Lt("focusout","onBlur"),Lt(Iu,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bf=new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));function Uu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ds(r,t,void 0,e),e.currentTarget=null}function Vu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],a=u.instance,p=u.currentTarget;if(u=u.listener,a!==i&&l.isPropagationStopped())break e;Uu(l,u,p),i=a}else for(o=0;o<r.length;o++){if(u=r[o],a=u.instance,p=u.currentTarget,u=u.listener,a!==i&&l.isPropagationStopped())break e;Uu(l,u,p),i=a}}}if(Er)throw e=Hl,Er=!1,Hl=null,e}function X(e,t){var n=t[wi];n===void 0&&(n=t[wi]=new Set);var r=e+"__bubble";n.has(r)||(Bu(t,e,2,!1),n.add(r))}function di(e,t,n){var r=0;t&&(r|=4),Bu(n,e,r,t)}var Vr="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[Vr]){e[Vr]=!0,ye.forEach(function(n){n!=="selectionchange"&&(Bf.has(n)||di(n,!1,e),di(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vr]||(t[Vr]=!0,di("selectionchange",!1,t))}}function Bu(e,t,n,r){switch(fu(t)){case 1:var l=ef;break;case 4:l=tf;break;default:l=Gl}n=l.bind(null,t,n,e),l=void 0,!Bl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function pi(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;u!==null;){if(o=Xt(u),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}u=u.parentNode}}r=r.return}Ko(function(){var p=i,y=Dl(n),v=[];e:{var m=Mu.get(e);if(m!==void 0){var k=ql,_=e;switch(e){case"keypress":if(Or(n)===0)break e;case"keydown":case"keyup":k=yf;break;case"focusin":_="focus",k=ti;break;case"focusout":_="blur",k=ti;break;case"beforeblur":case"afterblur":k=ti;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=lf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=xf;break;case Fu:case Ou:case ju:k=af;break;case Iu:k=Sf;break;case"scroll":k=nf;break;case"wheel":k=_f;break;case"copy":case"cut":case"paste":k=ff;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=mu}var C=(t&4)!==0,fe=!C&&e==="scroll",c=C?m!==null?m+"Capture":null:m;C=[];for(var s=p,d;s!==null;){d=s;var w=d.stateNode;if(d.tag===5&&w!==null&&(d=w,c!==null&&(w=In(s,c),w!=null&&C.push(tr(s,w,d)))),fe)break;s=s.return}0<C.length&&(m=new k(m,_,null,n,y),v.push({event:m,listeners:C}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",m&&n!==Ml&&(_=n.relatedTarget||n.fromElement)&&(Xt(_)||_[vt]))break e;if((k||m)&&(m=y.window===y?y:(m=y.ownerDocument)?m.defaultView||m.parentWindow:window,k?(_=n.relatedTarget||n.toElement,k=p,_=_?Xt(_):null,_!==null&&(fe=Yt(_),_!==fe||_.tag!==5&&_.tag!==6)&&(_=null)):(k=null,_=p),k!==_)){if(C=pu,w="onMouseLeave",c="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(C=mu,w="onPointerLeave",c="onPointerEnter",s="pointer"),fe=k==null?m:yn(k),d=_==null?m:yn(_),m=new C(w,s+"leave",k,n,y),m.target=fe,m.relatedTarget=d,w=null,Xt(y)===p&&(C=new C(c,s+"enter",_,n,y),C.target=d,C.relatedTarget=fe,w=C),fe=w,k&&_)t:{for(C=k,c=_,s=0,d=C;d;d=mn(d))s++;for(d=0,w=c;w;w=mn(w))d++;for(;0<s-d;)C=mn(C),s--;for(;0<d-s;)c=mn(c),d--;for(;s--;){if(C===c||c!==null&&C===c.alternate)break t;C=mn(C),c=mn(c)}C=null}else C=null;k!==null&&Hu(v,m,k,C,!1),_!==null&&fe!==null&&Hu(v,fe,_,C,!0)}}e:{if(m=p?yn(p):window,k=m.nodeName&&m.nodeName.toLowerCase(),k==="select"||k==="input"&&m.type==="file")var z=Rf;else if(ku(m))if(Eu)z=jf;else{z=Ff;var A=Lf}else(k=m.nodeName)&&k.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(z=Of);if(z&&(z=z(e,p))){Su(v,z,n,y);break e}A&&A(e,m,p),e==="focusout"&&(A=m._wrapperState)&&A.controlled&&m.type==="number"&&Ll(m,"number",m.value)}switch(A=p?yn(p):window,e){case"focusin":(ku(A)||A.contentEditable==="true")&&(pn=A,ui=p,qn=null);break;case"focusout":qn=ui=pn=null;break;case"mousedown":ai=!0;break;case"contextmenu":case"mouseup":case"dragend":ai=!1,Ru(v,n,y);break;case"selectionchange":if(Df)break;case"keydown":case"keyup":Ru(v,n,y)}var N;if(ri)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else dn?wu(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(gu&&n.locale!=="ko"&&(dn||T!=="onCompositionStart"?T==="onCompositionEnd"&&dn&&(N=cu()):(Rt=y,Jl="value"in Rt?Rt.value:Rt.textContent,dn=!0)),A=Br(p,T),0<A.length&&(T=new hu(T,e,null,n,y),v.push({event:T,listeners:A}),N?T.data=N:(N=xu(n),N!==null&&(T.data=N)))),(N=zf?Af(e,n):Nf(e,n))&&(p=Br(p,"onBeforeInput"),0<p.length&&(y=new hu("onBeforeInput","beforeinput",null,n,y),v.push({event:y,listeners:p}),y.data=N))}Vu(v,t)})}function tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Br(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=In(e,n),i!=null&&r.unshift(tr(e,i,l)),i=In(e,t),i!=null&&r.push(tr(e,i,l))),e=e.return}return r}function mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hu(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var u=n,a=u.alternate,p=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&p!==null&&(u=p,l?(a=In(n,i),a!=null&&o.unshift(tr(n,a,u))):l||(a=In(n,i),a!=null&&o.push(tr(n,a,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Hf=/\r\n?/g,Wf=/\u0000|\uFFFD/g;function Wu(e){return(typeof e=="string"?e:""+e).replace(Hf,`
`).replace(Wf,"")}function Hr(e,t,n){if(t=Wu(t),Wu(e)!==t&&n)throw Error(h(425))}function Wr(){}var hi=null,mi=null;function gi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yi=typeof setTimeout=="function"?setTimeout:void 0,$f=typeof clearTimeout=="function"?clearTimeout:void 0,$u=typeof Promise=="function"?Promise:void 0,Qf=typeof queueMicrotask=="function"?queueMicrotask:typeof $u<"u"?function(e){return $u.resolve(null).then(e).catch(Kf)}:yi;function Kf(e){setTimeout(function(){throw e})}function vi(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Qn(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gn=Math.random().toString(36).slice(2),dt="__reactFiber$"+gn,nr="__reactProps$"+gn,vt="__reactContainer$"+gn,wi="__reactEvents$"+gn,Yf="__reactListeners$"+gn,Xf="__reactHandles$"+gn;function Xt(e){var t=e[dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qu(e);e!==null;){if(n=e[dt])return n;e=Qu(e)}return t}e=n,n=e.parentNode}return null}function rr(e){return e=e[dt]||e[vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function $r(e){return e[nr]||null}var xi=[],vn=-1;function Ot(e){return{current:e}}function G(e){0>vn||(e.current=xi[vn],xi[vn]=null,vn--)}function Y(e,t){vn++,xi[vn]=e.current,e.current=t}var jt={},Se=Ot(jt),Re=Ot(!1),Gt=jt;function wn(e,t){var n=e.type.contextTypes;if(!n)return jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Le(e){return e=e.childContextTypes,e!=null}function Qr(){G(Re),G(Se)}function Ku(e,t,n){if(Se.current!==jt)throw Error(h(168));Y(Se,t),Y(Re,n)}function Yu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(h(108,K(e)||"Unknown",l));return E({},n,r)}function Kr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jt,Gt=Se.current,Y(Se,e),Y(Re,Re.current),!0}function Xu(e,t,n){var r=e.stateNode;if(!r)throw Error(h(169));n?(e=Yu(e,t,Gt),r.__reactInternalMemoizedMergedChildContext=e,G(Re),G(Se),Y(Se,e)):G(Re),Y(Re,n)}var wt=null,Yr=!1,ki=!1;function Gu(e){wt===null?wt=[e]:wt.push(e)}function Gf(e){Yr=!0,Gu(e)}function It(){if(!ki&&wt!==null){ki=!0;var e=0,t=W;try{var n=wt;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,Yr=!1}catch(l){throw wt!==null&&(wt=wt.slice(e+1)),Jo(Wl,It),l}finally{W=t,ki=!1}}return null}var xn=[],kn=0,Xr=null,Gr=0,Ke=[],Ye=0,Zt=null,xt=1,kt="";function Jt(e,t){xn[kn++]=Gr,xn[kn++]=Xr,Xr=e,Gr=t}function Zu(e,t,n){Ke[Ye++]=xt,Ke[Ye++]=kt,Ke[Ye++]=Zt,Zt=e;var r=xt;e=kt;var l=32-tt(r)-1;r&=~(1<<l),n+=1;var i=32-tt(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,xt=1<<32-tt(t)+l|n<<l|r,kt=i+e}else xt=1<<i|n<<l|r,kt=e}function Si(e){e.return!==null&&(Jt(e,1),Zu(e,1,0))}function Ei(e){for(;e===Xr;)Xr=xn[--kn],xn[kn]=null,Gr=xn[--kn],xn[kn]=null;for(;e===Zt;)Zt=Ke[--Ye],Ke[Ye]=null,kt=Ke[--Ye],Ke[Ye]=null,xt=Ke[--Ye],Ke[Ye]=null}var Ve=null,Be=null,b=!1,rt=null;function Ju(e,t){var n=Je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,Be=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,Be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zt!==null?{id:xt,overflow:kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ve=e,Be=null,!0):!1;default:return!1}}function _i(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ci(e){if(b){var t=Be;if(t){var n=t;if(!qu(e,t)){if(_i(e))throw Error(h(418));t=Ft(n.nextSibling);var r=Ve;t&&qu(e,t)?Ju(r,n):(e.flags=e.flags&-4097|2,b=!1,Ve=e)}}else{if(_i(e))throw Error(h(418));e.flags=e.flags&-4097|2,b=!1,Ve=e}}}function bu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function Zr(e){if(e!==Ve)return!1;if(!b)return bu(e),b=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gi(e.type,e.memoizedProps)),t&&(t=Be)){if(_i(e))throw ea(),Error(h(418));for(;t;)Ju(e,t),t=Ft(t.nextSibling)}if(bu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Be=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Be=null}}else Be=Ve?Ft(e.stateNode.nextSibling):null;return!0}function ea(){for(var e=Be;e;)e=Ft(e.nextSibling)}function Sn(){Be=Ve=null,b=!1}function zi(e){rt===null?rt=[e]:rt.push(e)}var Zf=ke.ReactCurrentBatchConfig;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(h(309));var r=n.stateNode}if(!r)throw Error(h(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var u=l.refs;o===null?delete u[i]:u[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}function Jr(e,t){throw e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ta(e){var t=e._init;return t(e._payload)}function na(e){function t(c,s){if(e){var d=c.deletions;d===null?(c.deletions=[s],c.flags|=16):d.push(s)}}function n(c,s){if(!e)return null;for(;s!==null;)t(c,s),s=s.sibling;return null}function r(c,s){for(c=new Map;s!==null;)s.key!==null?c.set(s.key,s):c.set(s.index,s),s=s.sibling;return c}function l(c,s){return c=$t(c,s),c.index=0,c.sibling=null,c}function i(c,s,d){return c.index=d,e?(d=c.alternate,d!==null?(d=d.index,d<s?(c.flags|=2,s):d):(c.flags|=2,s)):(c.flags|=1048576,s)}function o(c){return e&&c.alternate===null&&(c.flags|=2),c}function u(c,s,d,w){return s===null||s.tag!==6?(s=vo(d,c.mode,w),s.return=c,s):(s=l(s,d),s.return=c,s)}function a(c,s,d,w){var z=d.type;return z===Pe?y(c,s,d.props.children,w,d.key):s!==null&&(s.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Te&&ta(z)===s.type)?(w=l(s,d.props),w.ref=lr(c,s,d),w.return=c,w):(w=kl(d.type,d.key,d.props,null,c.mode,w),w.ref=lr(c,s,d),w.return=c,w)}function p(c,s,d,w){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=wo(d,c.mode,w),s.return=c,s):(s=l(s,d.children||[]),s.return=c,s)}function y(c,s,d,w,z){return s===null||s.tag!==7?(s=on(d,c.mode,w,z),s.return=c,s):(s=l(s,d),s.return=c,s)}function v(c,s,d){if(typeof s=="string"&&s!==""||typeof s=="number")return s=vo(""+s,c.mode,d),s.return=c,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case be:return d=kl(s.type,s.key,s.props,null,c.mode,d),d.ref=lr(c,null,s),d.return=c,d;case ze:return s=wo(s,c.mode,d),s.return=c,s;case Te:var w=s._init;return v(c,w(s._payload),d)}if(Fn(s)||P(s))return s=on(s,c.mode,d,null),s.return=c,s;Jr(c,s)}return null}function m(c,s,d,w){var z=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return z!==null?null:u(c,s,""+d,w);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case be:return d.key===z?a(c,s,d,w):null;case ze:return d.key===z?p(c,s,d,w):null;case Te:return z=d._init,m(c,s,z(d._payload),w)}if(Fn(d)||P(d))return z!==null?null:y(c,s,d,w,null);Jr(c,d)}return null}function k(c,s,d,w,z){if(typeof w=="string"&&w!==""||typeof w=="number")return c=c.get(d)||null,u(s,c,""+w,z);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case be:return c=c.get(w.key===null?d:w.key)||null,a(s,c,w,z);case ze:return c=c.get(w.key===null?d:w.key)||null,p(s,c,w,z);case Te:var A=w._init;return k(c,s,d,A(w._payload),z)}if(Fn(w)||P(w))return c=c.get(d)||null,y(s,c,w,z,null);Jr(s,w)}return null}function _(c,s,d,w){for(var z=null,A=null,N=s,T=s=0,ge=null;N!==null&&T<d.length;T++){N.index>T?(ge=N,N=null):ge=N.sibling;var U=m(c,N,d[T],w);if(U===null){N===null&&(N=ge);break}e&&N&&U.alternate===null&&t(c,N),s=i(U,s,T),A===null?z=U:A.sibling=U,A=U,N=ge}if(T===d.length)return n(c,N),b&&Jt(c,T),z;if(N===null){for(;T<d.length;T++)N=v(c,d[T],w),N!==null&&(s=i(N,s,T),A===null?z=N:A.sibling=N,A=N);return b&&Jt(c,T),z}for(N=r(c,N);T<d.length;T++)ge=k(N,c,T,d[T],w),ge!==null&&(e&&ge.alternate!==null&&N.delete(ge.key===null?T:ge.key),s=i(ge,s,T),A===null?z=ge:A.sibling=ge,A=ge);return e&&N.forEach(function(Qt){return t(c,Qt)}),b&&Jt(c,T),z}function C(c,s,d,w){var z=P(d);if(typeof z!="function")throw Error(h(150));if(d=z.call(d),d==null)throw Error(h(151));for(var A=z=null,N=s,T=s=0,ge=null,U=d.next();N!==null&&!U.done;T++,U=d.next()){N.index>T?(ge=N,N=null):ge=N.sibling;var Qt=m(c,N,U.value,w);if(Qt===null){N===null&&(N=ge);break}e&&N&&Qt.alternate===null&&t(c,N),s=i(Qt,s,T),A===null?z=Qt:A.sibling=Qt,A=Qt,N=ge}if(U.done)return n(c,N),b&&Jt(c,T),z;if(N===null){for(;!U.done;T++,U=d.next())U=v(c,U.value,w),U!==null&&(s=i(U,s,T),A===null?z=U:A.sibling=U,A=U);return b&&Jt(c,T),z}for(N=r(c,N);!U.done;T++,U=d.next())U=k(N,c,T,U.value,w),U!==null&&(e&&U.alternate!==null&&N.delete(U.key===null?T:U.key),s=i(U,s,T),A===null?z=U:A.sibling=U,A=U);return e&&N.forEach(function(Nc){return t(c,Nc)}),b&&Jt(c,T),z}function fe(c,s,d,w){if(typeof d=="object"&&d!==null&&d.type===Pe&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case be:e:{for(var z=d.key,A=s;A!==null;){if(A.key===z){if(z=d.type,z===Pe){if(A.tag===7){n(c,A.sibling),s=l(A,d.props.children),s.return=c,c=s;break e}}else if(A.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Te&&ta(z)===A.type){n(c,A.sibling),s=l(A,d.props),s.ref=lr(c,A,d),s.return=c,c=s;break e}n(c,A);break}else t(c,A);A=A.sibling}d.type===Pe?(s=on(d.props.children,c.mode,w,d.key),s.return=c,c=s):(w=kl(d.type,d.key,d.props,null,c.mode,w),w.ref=lr(c,s,d),w.return=c,c=w)}return o(c);case ze:e:{for(A=d.key;s!==null;){if(s.key===A)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){n(c,s.sibling),s=l(s,d.children||[]),s.return=c,c=s;break e}else{n(c,s);break}else t(c,s);s=s.sibling}s=wo(d,c.mode,w),s.return=c,c=s}return o(c);case Te:return A=d._init,fe(c,s,A(d._payload),w)}if(Fn(d))return _(c,s,d,w);if(P(d))return C(c,s,d,w);Jr(c,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,s!==null&&s.tag===6?(n(c,s.sibling),s=l(s,d),s.return=c,c=s):(n(c,s),s=vo(d,c.mode,w),s.return=c,c=s),o(c)):n(c,s)}return fe}var En=na(!0),ra=na(!1),qr=Ot(null),br=null,_n=null,Ai=null;function Ni(){Ai=_n=br=null}function Pi(e){var t=qr.current;G(qr),e._currentValue=t}function Ti(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Cn(e,t){br=e,Ai=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function Xe(e){var t=e._currentValue;if(Ai!==e)if(e={context:e,memoizedValue:t,next:null},_n===null){if(br===null)throw Error(h(308));_n=e,br.dependencies={lanes:0,firstContext:e}}else _n=_n.next=e;return t}var qt=null;function Ri(e){qt===null?qt=[e]:qt.push(e)}function la(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Ri(t)):(n.next=l.next,l.next=n),t.interleaved=n,St(e,r)}function St(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Mt=!1;function Li(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ia(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,St(e,n)}return l=r.interleaved,l===null?(t.next=t,Ri(r)):(t.next=l.next,l.next=t),r.interleaved=t,St(e,n)}function el(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Kl(e,n)}}function oa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function tl(e,t,n,r){var l=e.updateQueue;Mt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var a=u,p=a.next;a.next=null,o===null?i=p:o.next=p,o=a;var y=e.alternate;y!==null&&(y=y.updateQueue,u=y.lastBaseUpdate,u!==o&&(u===null?y.firstBaseUpdate=p:u.next=p,y.lastBaseUpdate=a))}if(i!==null){var v=l.baseState;o=0,y=p=a=null,u=i;do{var m=u.lane,k=u.eventTime;if((r&m)===m){y!==null&&(y=y.next={eventTime:k,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var _=e,C=u;switch(m=t,k=n,C.tag){case 1:if(_=C.payload,typeof _=="function"){v=_.call(k,v,m);break e}v=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=C.payload,m=typeof _=="function"?_.call(k,v,m):_,m==null)break e;v=E({},v,m);break e;case 2:Mt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[u]:m.push(u))}else k={eventTime:k,lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},y===null?(p=y=k,a=v):y=y.next=k,o|=m;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;m=u,u=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(y===null&&(a=v),l.baseState=a,l.firstBaseUpdate=p,l.lastBaseUpdate=y,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);tn|=o,e.lanes=o,e.memoizedState=v}}function ua(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(h(191,l));l.call(r)}}}var ir={},pt=Ot(ir),or=Ot(ir),ur=Ot(ir);function bt(e){if(e===ir)throw Error(h(174));return e}function Fi(e,t){switch(Y(ur,t),Y(or,e),Y(pt,ir),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ol(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ol(t,e)}G(pt),Y(pt,t)}function zn(){G(pt),G(or),G(ur)}function aa(e){bt(ur.current);var t=bt(pt.current),n=Ol(t,e.type);t!==n&&(Y(or,e),Y(pt,n))}function Oi(e){or.current===e&&(G(pt),G(or))}var re=Ot(0);function nl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ji=[];function Ii(){for(var e=0;e<ji.length;e++)ji[e]._workInProgressVersionPrimary=null;ji.length=0}var rl=ke.ReactCurrentDispatcher,Mi=ke.ReactCurrentBatchConfig,en=0,le=null,de=null,he=null,ll=!1,ar=!1,sr=0,Jf=0;function Ee(){throw Error(h(321))}function Di(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function Ui(e,t,n,r,l,i){if(en=i,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,rl.current=e===null||e.memoizedState===null?tc:nc,e=n(r,l),ar){i=0;do{if(ar=!1,sr=0,25<=i)throw Error(h(301));i+=1,he=de=null,t.updateQueue=null,rl.current=rc,e=n(r,l)}while(ar)}if(rl.current=ul,t=de!==null&&de.next!==null,en=0,he=de=le=null,ll=!1,t)throw Error(h(300));return e}function Vi(){var e=sr!==0;return sr=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?le.memoizedState=he=e:he=he.next=e,he}function Ge(){if(de===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=he===null?le.memoizedState:he.next;if(t!==null)he=t,de=e;else{if(e===null)throw Error(h(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},he===null?le.memoizedState=he=e:he=he.next=e}return he}function fr(e,t){return typeof t=="function"?t(e):t}function Bi(e){var t=Ge(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=de,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=o=null,a=null,p=i;do{var y=p.lane;if((en&y)===y)a!==null&&(a=a.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var v={lane:y,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};a===null?(u=a=v,o=r):a=a.next=v,le.lanes|=y,tn|=y}p=p.next}while(p!==null&&p!==i);a===null?o=r:a.next=u,nt(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,le.lanes|=i,tn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hi(e){var t=Ge(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);nt(i,t.memoizedState)||(Fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function sa(){}function fa(e,t){var n=le,r=Ge(),l=t(),i=!nt(r.memoizedState,l);if(i&&(r.memoizedState=l,Fe=!0),r=r.queue,Wi(pa.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,cr(9,da.bind(null,n,r,l,t),void 0,null),me===null)throw Error(h(349));en&30||ca(n,t,l)}return l}function ca(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function da(e,t,n,r){t.value=n,t.getSnapshot=r,ha(t)&&ma(e)}function pa(e,t,n){return n(function(){ha(t)&&ma(e)})}function ha(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function ma(e){var t=St(e,1);t!==null&&ut(t,e,1,-1)}function ga(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:e},t.queue=e,e=e.dispatch=ec.bind(null,le,e),[t.memoizedState,e]}function cr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ya(){return Ge().memoizedState}function il(e,t,n,r){var l=ht();le.flags|=e,l.memoizedState=cr(1|t,n,void 0,r===void 0?null:r)}function ol(e,t,n,r){var l=Ge();r=r===void 0?null:r;var i=void 0;if(de!==null){var o=de.memoizedState;if(i=o.destroy,r!==null&&Di(r,o.deps)){l.memoizedState=cr(t,n,i,r);return}}le.flags|=e,l.memoizedState=cr(1|t,n,i,r)}function va(e,t){return il(8390656,8,e,t)}function Wi(e,t){return ol(2048,8,e,t)}function wa(e,t){return ol(4,2,e,t)}function xa(e,t){return ol(4,4,e,t)}function ka(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sa(e,t,n){return n=n!=null?n.concat([e]):null,ol(4,4,ka.bind(null,t,e),n)}function $i(){}function Ea(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Di(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _a(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Di(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ca(e,t,n){return en&21?(nt(n,t)||(n=tu(),le.lanes|=n,tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n)}function qf(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=Mi.transition;Mi.transition={};try{e(!1),t()}finally{W=n,Mi.transition=r}}function za(){return Ge().memoizedState}function bf(e,t,n){var r=Ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Aa(e))Na(t,n);else if(n=la(e,t,n,r),n!==null){var l=Ne();ut(n,e,r,l),Pa(n,t,r)}}function ec(e,t,n){var r=Ht(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Aa(e))Na(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,n);if(l.hasEagerState=!0,l.eagerState=u,nt(u,o)){var a=t.interleaved;a===null?(l.next=l,Ri(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=la(e,t,l,r),n!==null&&(l=Ne(),ut(n,e,r,l),Pa(n,t,r))}}function Aa(e){var t=e.alternate;return e===le||t!==null&&t===le}function Na(e,t){ar=ll=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pa(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Kl(e,n)}}var ul={readContext:Xe,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},tc={readContext:Xe,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:va,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,il(4194308,4,ka.bind(null,t,e),n)},useLayoutEffect:function(e,t){return il(4194308,4,e,t)},useInsertionEffect:function(e,t){return il(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=bf.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:ga,useDebugValue:$i,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=ga(!1),t=e[0];return e=qf.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=le,l=ht();if(b){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),me===null)throw Error(h(349));en&30||ca(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,va(pa.bind(null,r,i,e),[e]),r.flags|=2048,cr(9,da.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ht(),t=me.identifierPrefix;if(b){var n=kt,r=xt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=sr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nc={readContext:Xe,useCallback:Ea,useContext:Xe,useEffect:Wi,useImperativeHandle:Sa,useInsertionEffect:wa,useLayoutEffect:xa,useMemo:_a,useReducer:Bi,useRef:ya,useState:function(){return Bi(fr)},useDebugValue:$i,useDeferredValue:function(e){var t=Ge();return Ca(t,de.memoizedState,e)},useTransition:function(){var e=Bi(fr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:sa,useSyncExternalStore:fa,useId:za,unstable_isNewReconciler:!1},rc={readContext:Xe,useCallback:Ea,useContext:Xe,useEffect:Wi,useImperativeHandle:Sa,useInsertionEffect:wa,useLayoutEffect:xa,useMemo:_a,useReducer:Hi,useRef:ya,useState:function(){return Hi(fr)},useDebugValue:$i,useDeferredValue:function(e){var t=Ge();return de===null?t.memoizedState=e:Ca(t,de.memoizedState,e)},useTransition:function(){var e=Hi(fr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:sa,useSyncExternalStore:fa,useId:za,unstable_isNewReconciler:!1};function lt(e,t){if(e&&e.defaultProps){t=E({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Qi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return(e=e._reactInternals)?Yt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),l=Ht(e),i=Et(r,l);i.payload=t,n!=null&&(i.callback=n),t=Dt(e,i,l),t!==null&&(ut(t,e,l,r),el(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),l=Ht(e),i=Et(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Dt(e,i,l),t!==null&&(ut(t,e,l,r),el(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=Ht(e),l=Et(n,r);l.tag=2,t!=null&&(l.callback=t),t=Dt(e,l,r),t!==null&&(ut(t,e,r,n),el(t,e,r))}};function Ta(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Jn(n,r)||!Jn(l,i):!0}function Ra(e,t,n){var r=!1,l=jt,i=t.contextType;return typeof i=="object"&&i!==null?i=Xe(i):(l=Le(t)?Gt:Se.current,r=t.contextTypes,i=(r=r!=null)?wn(e,l):jt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function La(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function Ki(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Li(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Xe(i):(i=Le(t)?Gt:Se.current,l.context=wn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Qi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&al.enqueueReplaceState(l,l.state,null),tl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function An(e,t){try{var n="",r=t;do n+=M(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Yi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var lc=typeof WeakMap=="function"?WeakMap:Map;function Fa(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ml||(ml=!0,so=r),Xi(e,t)},n}function Oa(e,t,n){n=Et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Xi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Xi(e,t),typeof r!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function ja(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new lc;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=vc.bind(null,e,t,n),t.then(e,e))}function Ia(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ma(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,Dt(n,t,1))),n.lanes|=1),e)}var ic=ke.ReactCurrentOwner,Fe=!1;function Ae(e,t,n,r){t.child=e===null?ra(t,null,n,r):En(t,e.child,n,r)}function Da(e,t,n,r,l){n=n.render;var i=t.ref;return Cn(t,l),r=Ui(e,t,n,r,i,l),n=Vi(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,_t(e,t,l)):(b&&n&&Si(t),t.flags|=1,Ae(e,t,r,l),t.child)}function Ua(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!yo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Va(e,t,i,r,l)):(e=kl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Jn,n(o,r)&&e.ref===t.ref)return _t(e,t,l)}return t.flags|=1,e=$t(i,r),e.ref=t.ref,e.return=t,t.child=e}function Va(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Jn(i,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,_t(e,t,l)}return Gi(e,t,n,r,l)}function Ba(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Pn,He),He|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(Pn,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Y(Pn,He),He|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Y(Pn,He),He|=r;return Ae(e,t,l,n),t.child}function Ha(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gi(e,t,n,r,l){var i=Le(n)?Gt:Se.current;return i=wn(t,i),Cn(t,l),n=Ui(e,t,n,r,i,l),r=Vi(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,_t(e,t,l)):(b&&r&&Si(t),t.flags|=1,Ae(e,t,n,l),t.child)}function Wa(e,t,n,r,l){if(Le(n)){var i=!0;Kr(t)}else i=!1;if(Cn(t,l),t.stateNode===null)fl(e,t),Ra(t,n,r),Ki(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var a=o.context,p=n.contextType;typeof p=="object"&&p!==null?p=Xe(p):(p=Le(n)?Gt:Se.current,p=wn(t,p));var y=n.getDerivedStateFromProps,v=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function";v||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||a!==p)&&La(t,o,r,p),Mt=!1;var m=t.memoizedState;o.state=m,tl(t,r,o,l),a=t.memoizedState,u!==r||m!==a||Re.current||Mt?(typeof y=="function"&&(Qi(t,n,y,r),a=t.memoizedState),(u=Mt||Ta(t,n,u,r,m,a,p))?(v||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=p,r=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ia(e,t),u=t.memoizedProps,p=t.type===t.elementType?u:lt(t.type,u),o.props=p,v=t.pendingProps,m=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Xe(a):(a=Le(n)?Gt:Se.current,a=wn(t,a));var k=n.getDerivedStateFromProps;(y=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==v||m!==a)&&La(t,o,r,a),Mt=!1,m=t.memoizedState,o.state=m,tl(t,r,o,l);var _=t.memoizedState;u!==v||m!==_||Re.current||Mt?(typeof k=="function"&&(Qi(t,n,k,r),_=t.memoizedState),(p=Mt||Ta(t,n,p,r,m,_,a)||!1)?(y||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),o.props=r,o.state=_,o.context=a,r=p):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Zi(e,t,n,r,i,l)}function Zi(e,t,n,r,l,i){Ha(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Xu(t,n,!1),_t(e,t,i);r=t.stateNode,ic.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=En(t,e.child,null,i),t.child=En(t,null,u,i)):Ae(e,t,u,i),t.memoizedState=r.state,l&&Xu(t,n,!0),t.child}function $a(e){var t=e.stateNode;t.pendingContext?Ku(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ku(e,t.context,!1),Fi(e,t.containerInfo)}function Qa(e,t,n,r,l){return Sn(),zi(l),t.flags|=256,Ae(e,t,n,r),t.child}var Ji={dehydrated:null,treeContext:null,retryLane:0};function qi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ka(e,t,n){var r=t.pendingProps,l=re.current,i=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Y(re,l&1),e===null)return Ci(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Sl(o,r,0,null),e=on(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=qi(n),t.memoizedState=Ji,e):bi(t,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return oc(e,t,o,r,u,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,u=l.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=$t(l,a),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=$t(u,i):(i=on(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?qi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Ji,r}return i=e.child,e=i.sibling,r=$t(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function bi(e,t){return t=Sl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function sl(e,t,n,r){return r!==null&&zi(r),En(t,e.child,null,n),e=bi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function oc(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Yi(Error(h(422))),sl(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Sl({mode:"visible",children:r.children},l,0,null),i=on(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&En(t,e.child,null,o),t.child.memoizedState=qi(o),t.memoizedState=Ji,i);if(!(t.mode&1))return sl(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(h(419)),r=Yi(i,r,void 0),sl(e,t,o,r)}if(u=(o&e.childLanes)!==0,Fe||u){if(r=me,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,St(e,l),ut(r,e,l,-1))}return go(),r=Yi(Error(h(421))),sl(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=wc.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Be=Ft(l.nextSibling),Ve=t,b=!0,rt=null,e!==null&&(Ke[Ye++]=xt,Ke[Ye++]=kt,Ke[Ye++]=Zt,xt=e.id,kt=e.overflow,Zt=t),t=bi(t,r.children),t.flags|=4096,t)}function Ya(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ti(e.return,t,n)}function eo(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Xa(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(Ae(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ya(e,n,t);else if(e.tag===19)Ya(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(re,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&nl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),eo(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&nl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}eo(t,!0,n,null,i);break;case"together":eo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function _t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=$t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function uc(e,t,n){switch(t.tag){case 3:$a(t),Sn();break;case 5:aa(t);break;case 1:Le(t.type)&&Kr(t);break;case 4:Fi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;Y(qr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?Ka(e,t,n):(Y(re,re.current&1),e=_t(e,t,n),e!==null?e.sibling:null);Y(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Xa(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Y(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,Ba(e,t,n)}return _t(e,t,n)}var Ga,to,Za,Ja;Ga=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},to=function(){},Za=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,bt(pt.current);var i=null;switch(n){case"input":l=Tl(e,l),r=Tl(e,r),i=[];break;case"select":l=E({},l,{value:void 0}),r=E({},r,{value:void 0}),i=[];break;case"textarea":l=Fl(e,l),r=Fl(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wr)}jl(n,r);var o;n=null;for(p in l)if(!r.hasOwnProperty(p)&&l.hasOwnProperty(p)&&l[p]!=null)if(p==="style"){var u=l[p];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(j.hasOwnProperty(p)?i||(i=[]):(i=i||[]).push(p,null));for(p in r){var a=r[p];if(u=l!=null?l[p]:void 0,r.hasOwnProperty(p)&&a!==u&&(a!=null||u!=null))if(p==="style")if(u){for(o in u)!u.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&u[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(p,n)),n=a;else p==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(i=i||[]).push(p,a)):p==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(p,""+a):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(j.hasOwnProperty(p)?(a!=null&&p==="onScroll"&&X("scroll",e),i||u===a||(i=[])):(i=i||[]).push(p,a))}n&&(i=i||[]).push("style",n);var p=i;(t.updateQueue=p)&&(t.flags|=4)}},Ja=function(e,t,n,r){n!==r&&(t.flags|=4)};function dr(e,t){if(!b)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ac(e,t,n){var r=t.pendingProps;switch(Ei(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return Le(t.type)&&Qr(),_e(t),null;case 3:return r=t.stateNode,zn(),G(Re),G(Se),Ii(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rt!==null&&(po(rt),rt=null))),to(e,t),_e(t),null;case 5:Oi(t);var l=bt(ur.current);if(n=t.type,e!==null&&t.stateNode!=null)Za(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(h(166));return _e(t),null}if(e=bt(pt.current),Zr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[dt]=t,r[nr]=i,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(l=0;l<bn.length;l++)X(bn[l],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":Ro(r,i),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},X("invalid",r);break;case"textarea":Oo(r,i),X("invalid",r)}jl(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&Hr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Hr(r.textContent,u,e),l=["children",""+u]):j.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&X("scroll",r)}switch(n){case"input":wr(r),Fo(r,i,!0);break;case"textarea":wr(r),Io(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Wr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mo(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[dt]=t,e[nr]=r,Ga(e,t,!1,!1),t.stateNode=e;e:{switch(o=Il(n,r),n){case"dialog":X("cancel",e),X("close",e),l=r;break;case"iframe":case"object":case"embed":X("load",e),l=r;break;case"video":case"audio":for(l=0;l<bn.length;l++)X(bn[l],e);l=r;break;case"source":X("error",e),l=r;break;case"img":case"image":case"link":X("error",e),X("load",e),l=r;break;case"details":X("toggle",e),l=r;break;case"input":Ro(e,r),l=Tl(e,r),X("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=E({},r,{value:void 0}),X("invalid",e);break;case"textarea":Oo(e,r),l=Fl(e,r),X("invalid",e);break;default:l=r}jl(n,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var a=u[i];i==="style"?Vo(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Do(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&On(e,a):typeof a=="number"&&On(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(j.hasOwnProperty(i)?a!=null&&i==="onScroll"&&X("scroll",e):a!=null&&qe(e,i,a,o))}switch(n){case"input":wr(e),Fo(e,r,!1);break;case"textarea":wr(e),Io(e);break;case"option":r.value!=null&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?un(e,!!r.multiple,i,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Wr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return _e(t),null;case 6:if(e&&t.stateNode!=null)Ja(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(h(166));if(n=bt(ur.current),bt(pt.current),Zr(t)){if(r=t.stateNode,n=t.memoizedProps,r[dt]=t,(i=r.nodeValue!==n)&&(e=Ve,e!==null))switch(e.tag){case 3:Hr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dt]=t,t.stateNode=r}return _e(t),null;case 13:if(G(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(b&&Be!==null&&t.mode&1&&!(t.flags&128))ea(),Sn(),t.flags|=98560,i=!1;else if(i=Zr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(h(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(h(317));i[dt]=t}else Sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;_e(t),i=!1}else rt!==null&&(po(rt),rt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?pe===0&&(pe=3):go())),t.updateQueue!==null&&(t.flags|=4),_e(t),null);case 4:return zn(),to(e,t),e===null&&er(t.stateNode.containerInfo),_e(t),null;case 10:return Pi(t.type._context),_e(t),null;case 17:return Le(t.type)&&Qr(),_e(t),null;case 19:if(G(re),i=t.memoizedState,i===null)return _e(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)dr(i,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=nl(e),o!==null){for(t.flags|=128,dr(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(re,re.current&1|2),t.child}e=e.sibling}i.tail!==null&&se()>Tn&&(t.flags|=128,r=!0,dr(i,!1),t.lanes=4194304)}else{if(!r)if(e=nl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),dr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!b)return _e(t),null}else 2*se()-i.renderingStartTime>Tn&&n!==1073741824&&(t.flags|=128,r=!0,dr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=se(),t.sibling=null,n=re.current,Y(re,r?n&1|2:n&1),t):(_e(t),null);case 22:case 23:return mo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?He&1073741824&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),null;case 24:return null;case 25:return null}throw Error(h(156,t.tag))}function sc(e,t){switch(Ei(t),t.tag){case 1:return Le(t.type)&&Qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zn(),G(Re),G(Se),Ii(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Oi(t),null;case 13:if(G(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(re),null;case 4:return zn(),null;case 10:return Pi(t.type._context),null;case 22:case 23:return mo(),null;case 24:return null;default:return null}}var cl=!1,Ce=!1,fc=typeof WeakSet=="function"?WeakSet:Set,S=null;function Nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function no(e,t,n){try{n()}catch(r){ae(e,t,r)}}var qa=!1;function cc(e,t){if(hi=Rr,e=Tu(),oi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,a=-1,p=0,y=0,v=e,m=null;t:for(;;){for(var k;v!==n||l!==0&&v.nodeType!==3||(u=o+l),v!==i||r!==0&&v.nodeType!==3||(a=o+r),v.nodeType===3&&(o+=v.nodeValue.length),(k=v.firstChild)!==null;)m=v,v=k;for(;;){if(v===e)break t;if(m===n&&++p===l&&(u=o),m===i&&++y===r&&(a=o),(k=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=k}n=u===-1||a===-1?null:{start:u,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(mi={focusedElem:e,selectionRange:n},Rr=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var C=_.memoizedProps,fe=_.memoizedState,c=t.stateNode,s=c.getSnapshotBeforeUpdate(t.elementType===t.type?C:lt(t.type,C),fe);c.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(w){ae(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return _=qa,qa=!1,_}function pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&no(t,n,i)}l=l.next}while(l!==r)}}function dl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ro(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ba(e){var t=e.alternate;t!==null&&(e.alternate=null,ba(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[dt],delete t[nr],delete t[wi],delete t[Yf],delete t[Xf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function es(e){return e.tag===5||e.tag===3||e.tag===4}function ts(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||es(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wr));else if(r!==4&&(e=e.child,e!==null))for(lo(e,t,n),e=e.sibling;e!==null;)lo(e,t,n),e=e.sibling}function io(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(io(e,t,n),e=e.sibling;e!==null;)io(e,t,n),e=e.sibling}var ve=null,it=!1;function Ut(e,t,n){for(n=n.child;n!==null;)ns(e,t,n),n=n.sibling}function ns(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Cr,n)}catch{}switch(n.tag){case 5:Ce||Nn(n,t);case 6:var r=ve,l=it;ve=null,Ut(e,t,n),ve=r,it=l,ve!==null&&(it?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(it?(e=ve,n=n.stateNode,e.nodeType===8?vi(e.parentNode,n):e.nodeType===1&&vi(e,n),Qn(e)):vi(ve,n.stateNode));break;case 4:r=ve,l=it,ve=n.stateNode.containerInfo,it=!0,Ut(e,t,n),ve=r,it=l;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&no(n,t,o),l=l.next}while(l!==r)}Ut(e,t,n);break;case 1:if(!Ce&&(Nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){ae(n,t,u)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,Ut(e,t,n),Ce=r):Ut(e,t,n);break;default:Ut(e,t,n)}}function rs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new fc),t.forEach(function(r){var l=xc.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:ve=u.stateNode,it=!1;break e;case 3:ve=u.stateNode.containerInfo,it=!0;break e;case 4:ve=u.stateNode.containerInfo,it=!0;break e}u=u.return}if(ve===null)throw Error(h(160));ns(i,o,l),ve=null,it=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(p){ae(l,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ls(t,e),t=t.sibling}function ls(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),mt(e),r&4){try{pr(3,e,e.return),dl(3,e)}catch(C){ae(e,e.return,C)}try{pr(5,e,e.return)}catch(C){ae(e,e.return,C)}}break;case 1:ot(t,e),mt(e),r&512&&n!==null&&Nn(n,n.return);break;case 5:if(ot(t,e),mt(e),r&512&&n!==null&&Nn(n,n.return),e.flags&32){var l=e.stateNode;try{On(l,"")}catch(C){ae(e,e.return,C)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&Lo(l,i),Il(u,o);var p=Il(u,i);for(o=0;o<a.length;o+=2){var y=a[o],v=a[o+1];y==="style"?Vo(l,v):y==="dangerouslySetInnerHTML"?Do(l,v):y==="children"?On(l,v):qe(l,y,v,p)}switch(u){case"input":Rl(l,i);break;case"textarea":jo(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?un(l,!!i.multiple,k,!1):m!==!!i.multiple&&(i.defaultValue!=null?un(l,!!i.multiple,i.defaultValue,!0):un(l,!!i.multiple,i.multiple?[]:"",!1))}l[nr]=i}catch(C){ae(e,e.return,C)}}break;case 6:if(ot(t,e),mt(e),r&4){if(e.stateNode===null)throw Error(h(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(C){ae(e,e.return,C)}}break;case 3:if(ot(t,e),mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(C){ae(e,e.return,C)}break;case 4:ot(t,e),mt(e);break;case 13:ot(t,e),mt(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(ao=se())),r&4&&rs(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(p=Ce)||y,ot(t,e),Ce=p):ot(t,e),mt(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!y&&e.mode&1)for(S=e,y=e.child;y!==null;){for(v=S=y;S!==null;){switch(m=S,k=m.child,m.tag){case 0:case 11:case 14:case 15:pr(4,m,m.return);break;case 1:Nn(m,m.return);var _=m.stateNode;if(typeof _.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(C){ae(r,n,C)}}break;case 5:Nn(m,m.return);break;case 22:if(m.memoizedState!==null){us(v);continue}}k!==null?(k.return=m,S=k):us(v)}y=y.sibling}e:for(y=null,v=e;;){if(v.tag===5){if(y===null){y=v;try{l=v.stateNode,p?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=v.stateNode,a=v.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=Uo("display",o))}catch(C){ae(e,e.return,C)}}}else if(v.tag===6){if(y===null)try{v.stateNode.nodeValue=p?"":v.memoizedProps}catch(C){ae(e,e.return,C)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;y===v&&(y=null),v=v.return}y===v&&(y=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:ot(t,e),mt(e),r&4&&rs(e);break;case 21:break;default:ot(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(es(n)){var r=n;break e}n=n.return}throw Error(h(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(On(l,""),r.flags&=-33);var i=ts(e);io(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,u=ts(e);lo(e,u,o);break;default:throw Error(h(161))}}catch(a){ae(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dc(e,t,n){S=e,is(e)}function is(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||cl;if(!o){var u=l.alternate,a=u!==null&&u.memoizedState!==null||Ce;u=cl;var p=Ce;if(cl=o,(Ce=a)&&!p)for(S=l;S!==null;)o=S,a=o.child,o.tag===22&&o.memoizedState!==null?as(l):a!==null?(a.return=o,S=a):as(l);for(;i!==null;)S=i,is(i),i=i.sibling;S=l,cl=u,Ce=p}os(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,S=i):os(e)}}function os(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||dl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ua(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ua(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var y=p.memoizedState;if(y!==null){var v=y.dehydrated;v!==null&&Qn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}Ce||t.flags&512&&ro(t)}catch(m){ae(t,t.return,m)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function us(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function as(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{dl(4,t)}catch(a){ae(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){ae(t,l,a)}}var i=t.return;try{ro(t)}catch(a){ae(t,i,a)}break;case 5:var o=t.return;try{ro(t)}catch(a){ae(t,o,a)}}}catch(a){ae(t,t.return,a)}if(t===e){S=null;break}var u=t.sibling;if(u!==null){u.return=t.return,S=u;break}S=t.return}}var pc=Math.ceil,pl=ke.ReactCurrentDispatcher,oo=ke.ReactCurrentOwner,Ze=ke.ReactCurrentBatchConfig,I=0,me=null,ce=null,we=0,He=0,Pn=Ot(0),pe=0,hr=null,tn=0,hl=0,uo=0,mr=null,Oe=null,ao=0,Tn=1/0,Ct=null,ml=!1,so=null,Vt=null,gl=!1,Bt=null,yl=0,gr=0,fo=null,vl=-1,wl=0;function Ne(){return I&6?se():vl!==-1?vl:vl=se()}function Ht(e){return e.mode&1?I&2&&we!==0?we&-we:Zf.transition!==null?(wl===0&&(wl=tu()),wl):(e=W,e!==0||(e=window.event,e=e===void 0?16:fu(e.type)),e):1}function ut(e,t,n,r){if(50<gr)throw gr=0,fo=null,Error(h(185));Vn(e,n,r),(!(I&2)||e!==me)&&(e===me&&(!(I&2)&&(hl|=n),pe===4&&Wt(e,we)),je(e,r),n===1&&I===0&&!(t.mode&1)&&(Tn=se()+500,Yr&&It()))}function je(e,t){var n=e.callbackNode;Gs(e,t);var r=Nr(e,e===me?we:0);if(r===0)n!==null&&qo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&qo(n),t===1)e.tag===0?Gf(fs.bind(null,e)):Gu(fs.bind(null,e)),Qf(function(){!(I&6)&&It()}),n=null;else{switch(nu(r)){case 1:n=Wl;break;case 4:n=bo;break;case 16:n=_r;break;case 536870912:n=eu;break;default:n=_r}n=vs(n,ss.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ss(e,t){if(vl=-1,wl=0,I&6)throw Error(h(327));var n=e.callbackNode;if(Rn()&&e.callbackNode!==n)return null;var r=Nr(e,e===me?we:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xl(e,r);else{t=r;var l=I;I|=2;var i=ds();(me!==e||we!==t)&&(Ct=null,Tn=se()+500,rn(e,t));do try{gc();break}catch(u){cs(e,u)}while(!0);Ni(),pl.current=i,I=l,ce!==null?t=0:(me=null,we=0,t=pe)}if(t!==0){if(t===2&&(l=$l(e),l!==0&&(r=l,t=co(e,l))),t===1)throw n=hr,rn(e,0),Wt(e,r),je(e,se()),n;if(t===6)Wt(e,r);else{if(l=e.current.alternate,!(r&30)&&!hc(l)&&(t=xl(e,r),t===2&&(i=$l(e),i!==0&&(r=i,t=co(e,i))),t===1))throw n=hr,rn(e,0),Wt(e,r),je(e,se()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(h(345));case 2:ln(e,Oe,Ct);break;case 3:if(Wt(e,r),(r&130023424)===r&&(t=ao+500-se(),10<t)){if(Nr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=yi(ln.bind(null,e,Oe,Ct),t);break}ln(e,Oe,Ct);break;case 4:if(Wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-tt(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pc(r/1960))-r,10<r){e.timeoutHandle=yi(ln.bind(null,e,Oe,Ct),r);break}ln(e,Oe,Ct);break;case 5:ln(e,Oe,Ct);break;default:throw Error(h(329))}}}return je(e,se()),e.callbackNode===n?ss.bind(null,e):null}function co(e,t){var n=mr;return e.current.memoizedState.isDehydrated&&(rn(e,t).flags|=256),e=xl(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&po(t)),e}function po(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function hc(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!nt(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wt(e,t){for(t&=~uo,t&=~hl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function fs(e){if(I&6)throw Error(h(327));Rn();var t=Nr(e,0);if(!(t&1))return je(e,se()),null;var n=xl(e,t);if(e.tag!==0&&n===2){var r=$l(e);r!==0&&(t=r,n=co(e,r))}if(n===1)throw n=hr,rn(e,0),Wt(e,t),je(e,se()),n;if(n===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ln(e,Oe,Ct),je(e,se()),null}function ho(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(Tn=se()+500,Yr&&It())}}function nn(e){Bt!==null&&Bt.tag===0&&!(I&6)&&Rn();var t=I;I|=1;var n=Ze.transition,r=W;try{if(Ze.transition=null,W=1,e)return e()}finally{W=r,Ze.transition=n,I=t,!(I&6)&&It()}}function mo(){He=Pn.current,G(Pn)}function rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$f(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(Ei(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qr();break;case 3:zn(),G(Re),G(Se),Ii();break;case 5:Oi(r);break;case 4:zn();break;case 13:G(re);break;case 19:G(re);break;case 10:Pi(r.type._context);break;case 22:case 23:mo()}n=n.return}if(me=e,ce=e=$t(e.current,null),we=He=t,pe=0,hr=null,uo=hl=tn=0,Oe=mr=null,qt!==null){for(t=0;t<qt.length;t++)if(n=qt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}qt=null}return e}function cs(e,t){do{var n=ce;try{if(Ni(),rl.current=ul,ll){for(var r=le.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ll=!1}if(en=0,he=de=le=null,ar=!1,sr=0,oo.current=null,n===null||n.return===null){pe=1,hr=t,ce=null;break}e:{var i=e,o=n.return,u=n,a=t;if(t=we,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var p=a,y=u,v=y.tag;if(!(y.mode&1)&&(v===0||v===11||v===15)){var m=y.alternate;m?(y.updateQueue=m.updateQueue,y.memoizedState=m.memoizedState,y.lanes=m.lanes):(y.updateQueue=null,y.memoizedState=null)}var k=Ia(o);if(k!==null){k.flags&=-257,Ma(k,o,u,i,t),k.mode&1&&ja(i,p,t),t=k,a=p;var _=t.updateQueue;if(_===null){var C=new Set;C.add(a),t.updateQueue=C}else _.add(a);break e}else{if(!(t&1)){ja(i,p,t),go();break e}a=Error(h(426))}}else if(b&&u.mode&1){var fe=Ia(o);if(fe!==null){!(fe.flags&65536)&&(fe.flags|=256),Ma(fe,o,u,i,t),zi(An(a,u));break e}}i=a=An(a,u),pe!==4&&(pe=2),mr===null?mr=[i]:mr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var c=Fa(i,a,t);oa(i,c);break e;case 1:u=a;var s=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Vt===null||!Vt.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Oa(i,u,t);oa(i,w);break e}}i=i.return}while(i!==null)}hs(n)}catch(z){t=z,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(!0)}function ds(){var e=pl.current;return pl.current=ul,e===null?ul:e}function go(){(pe===0||pe===3||pe===2)&&(pe=4),me===null||!(tn&268435455)&&!(hl&268435455)||Wt(me,we)}function xl(e,t){var n=I;I|=2;var r=ds();(me!==e||we!==t)&&(Ct=null,rn(e,t));do try{mc();break}catch(l){cs(e,l)}while(!0);if(Ni(),I=n,pl.current=r,ce!==null)throw Error(h(261));return me=null,we=0,pe}function mc(){for(;ce!==null;)ps(ce)}function gc(){for(;ce!==null&&!Vs();)ps(ce)}function ps(e){var t=ys(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?hs(e):ce=t,oo.current=null}function hs(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=sc(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,ce=null;return}}else if(n=ac(n,t,He),n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);pe===0&&(pe=5)}function ln(e,t,n){var r=W,l=Ze.transition;try{Ze.transition=null,W=1,yc(e,t,n,r)}finally{Ze.transition=l,W=r}return null}function yc(e,t,n,r){do Rn();while(Bt!==null);if(I&6)throw Error(h(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Zs(e,i),e===me&&(ce=me=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gl||(gl=!0,vs(_r,function(){return Rn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ze.transition,Ze.transition=null;var o=W;W=1;var u=I;I|=4,oo.current=null,cc(e,n),ls(n,e),Mf(mi),Rr=!!hi,mi=hi=null,e.current=n,dc(n),Bs(),I=u,W=o,Ze.transition=i}else e.current=n;if(gl&&(gl=!1,Bt=e,yl=l),i=e.pendingLanes,i===0&&(Vt=null),$s(n.stateNode),je(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(ml)throw ml=!1,e=so,so=null,e;return yl&1&&e.tag!==0&&Rn(),i=e.pendingLanes,i&1?e===fo?gr++:(gr=0,fo=e):gr=0,It(),null}function Rn(){if(Bt!==null){var e=nu(yl),t=Ze.transition,n=W;try{if(Ze.transition=null,W=16>e?16:e,Bt===null)var r=!1;else{if(e=Bt,Bt=null,yl=0,I&6)throw Error(h(331));var l=I;for(I|=4,S=e.current;S!==null;){var i=S,o=i.child;if(S.flags&16){var u=i.deletions;if(u!==null){for(var a=0;a<u.length;a++){var p=u[a];for(S=p;S!==null;){var y=S;switch(y.tag){case 0:case 11:case 15:pr(8,y,i)}var v=y.child;if(v!==null)v.return=y,S=v;else for(;S!==null;){y=S;var m=y.sibling,k=y.return;if(ba(y),y===p){S=null;break}if(m!==null){m.return=k,S=m;break}S=k}}}var _=i.alternate;if(_!==null){var C=_.child;if(C!==null){_.child=null;do{var fe=C.sibling;C.sibling=null,C=fe}while(C!==null)}}S=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,S=o;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:pr(9,i,i.return)}var c=i.sibling;if(c!==null){c.return=i.return,S=c;break e}S=i.return}}var s=e.current;for(S=s;S!==null;){o=S;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,S=d;else e:for(o=s;S!==null;){if(u=S,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:dl(9,u)}}catch(z){ae(u,u.return,z)}if(u===o){S=null;break e}var w=u.sibling;if(w!==null){w.return=u.return,S=w;break e}S=u.return}}if(I=l,It(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Cr,e)}catch{}r=!0}return r}finally{W=n,Ze.transition=t}}return!1}function ms(e,t,n){t=An(n,t),t=Fa(e,t,1),e=Dt(e,t,1),t=Ne(),e!==null&&(Vn(e,1,t),je(e,t))}function ae(e,t,n){if(e.tag===3)ms(e,e,n);else for(;t!==null;){if(t.tag===3){ms(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))){e=An(n,e),e=Oa(t,e,1),t=Dt(t,e,1),e=Ne(),t!==null&&(Vn(t,1,e),je(t,e));break}}t=t.return}}function vc(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(we&n)===n&&(pe===4||pe===3&&(we&130023424)===we&&500>se()-ao?rn(e,0):uo|=n),je(e,t)}function gs(e,t){t===0&&(e.mode&1?(t=Ar,Ar<<=1,!(Ar&130023424)&&(Ar=4194304)):t=1);var n=Ne();e=St(e,t),e!==null&&(Vn(e,t,n),je(e,n))}function wc(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gs(e,n)}function xc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(t),gs(e,n)}var ys;ys=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)Fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Fe=!1,uc(e,t,n);Fe=!!(e.flags&131072)}else Fe=!1,b&&t.flags&1048576&&Zu(t,Gr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fl(e,t),e=t.pendingProps;var l=wn(t,Se.current);Cn(t,n),l=Ui(null,t,r,e,l,n);var i=Vi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Le(r)?(i=!0,Kr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Li(t),l.updater=al,t.stateNode=l,l._reactInternals=t,Ki(t,r,e,n),t=Zi(null,t,r,!0,i,n)):(t.tag=0,b&&i&&Si(t),Ae(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Sc(r),e=lt(r,e),l){case 0:t=Gi(null,t,r,e,n);break e;case 1:t=Wa(null,t,r,e,n);break e;case 11:t=Da(null,t,r,e,n);break e;case 14:t=Ua(null,t,r,lt(r.type,e),n);break e}throw Error(h(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:lt(r,l),Gi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:lt(r,l),Wa(e,t,r,l,n);case 3:e:{if($a(t),e===null)throw Error(h(387));r=t.pendingProps,i=t.memoizedState,l=i.element,ia(e,t),tl(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=An(Error(h(423)),t),t=Qa(e,t,r,n,l);break e}else if(r!==l){l=An(Error(h(424)),t),t=Qa(e,t,r,n,l);break e}else for(Be=Ft(t.stateNode.containerInfo.firstChild),Ve=t,b=!0,rt=null,n=ra(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sn(),r===l){t=_t(e,t,n);break e}Ae(e,t,r,n)}t=t.child}return t;case 5:return aa(t),e===null&&Ci(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,gi(r,l)?o=null:i!==null&&gi(r,i)&&(t.flags|=32),Ha(e,t),Ae(e,t,o,n),t.child;case 6:return e===null&&Ci(t),null;case 13:return Ka(e,t,n);case 4:return Fi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=En(t,null,r,n):Ae(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:lt(r,l),Da(e,t,r,l,n);case 7:return Ae(e,t,t.pendingProps,n),t.child;case 8:return Ae(e,t,t.pendingProps.children,n),t.child;case 12:return Ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,Y(qr,r._currentValue),r._currentValue=o,i!==null)if(nt(i.value,o)){if(i.children===l.children&&!Re.current){t=_t(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Et(-1,n&-n),a.tag=2;var p=i.updateQueue;if(p!==null){p=p.shared;var y=p.pending;y===null?a.next=a:(a.next=y.next,y.next=a),p.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Ti(i.return,n,t),u.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(h(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Ti(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Ae(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Cn(t,n),l=Xe(l),r=r(l),t.flags|=1,Ae(e,t,r,n),t.child;case 14:return r=t.type,l=lt(r,t.pendingProps),l=lt(r.type,l),Ua(e,t,r,l,n);case 15:return Va(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:lt(r,l),fl(e,t),t.tag=1,Le(r)?(e=!0,Kr(t)):e=!1,Cn(t,n),Ra(t,r,l),Ki(t,r,l,n),Zi(null,t,r,!0,e,n);case 19:return Xa(e,t,n);case 22:return Ba(e,t,n)}throw Error(h(156,t.tag))};function vs(e,t){return Jo(e,t)}function kc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,t,n,r){return new kc(e,t,n,r)}function yo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sc(e){if(typeof e=="function")return yo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===st)return 11;if(e===ft)return 14}return 2}function $t(e,t){var n=e.alternate;return n===null?(n=Je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function kl(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")yo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Pe:return on(n.children,l,i,t);case Qe:o=8,l|=8;break;case zt:return e=Je(12,n,t,l|2),e.elementType=zt,e.lanes=i,e;case Me:return e=Je(13,n,t,l),e.elementType=Me,e.lanes=i,e;case et:return e=Je(19,n,t,l),e.elementType=et,e.lanes=i,e;case ue:return Sl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yt:o=10;break e;case Kt:o=9;break e;case st:o=11;break e;case ft:o=14;break e;case Te:o=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=Je(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function on(e,t,n,r){return e=Je(7,e,r,t),e.lanes=n,e}function Sl(e,t,n,r){return e=Je(22,e,r,t),e.elementType=ue,e.lanes=n,e.stateNode={isHidden:!1},e}function vo(e,t,n){return e=Je(6,e,null,t),e.lanes=n,e}function wo(e,t,n){return t=Je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ec(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ql(0),this.expirationTimes=Ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ql(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function xo(e,t,n,r,l,i,o,u,a){return e=new Ec(e,t,n,u,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Je(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Li(i),e}function _c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ze,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ws(e){if(!e)return jt;e=e._reactInternals;e:{if(Yt(e)!==e||e.tag!==1)throw Error(h(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Le(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(h(171))}if(e.tag===1){var n=e.type;if(Le(n))return Yu(e,n,t)}return t}function xs(e,t,n,r,l,i,o,u,a){return e=xo(n,r,!0,e,l,i,o,u,a),e.context=ws(null),n=e.current,r=Ne(),l=Ht(n),i=Et(r,l),i.callback=t??null,Dt(n,i,l),e.current.lanes=l,Vn(e,l,r),je(e,r),e}function El(e,t,n,r){var l=t.current,i=Ne(),o=Ht(l);return n=ws(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dt(l,t,o),e!==null&&(ut(e,l,o,i),el(e,l,o)),o}function _l(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ks(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ko(e,t){ks(e,t),(e=e.alternate)&&ks(e,t)}var Ss=typeof reportError=="function"?reportError:function(e){console.error(e)};function So(e){this._internalRoot=e}Cl.prototype.render=So.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));El(e,t,null,null)},Cl.prototype.unmount=So.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){El(null,e,null,null)}),t[vt]=null}};function Cl(e){this._internalRoot=e}Cl.prototype.unstable_scheduleHydration=function(e){if(e){var t=iu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tt.length&&t!==0&&t<Tt[n].priority;n++);Tt.splice(n,0,e),n===0&&au(e)}};function Eo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Es(){}function Cc(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var p=_l(o);i.call(p)}}var o=xs(t,r,e,0,null,!1,!1,"",Es);return e._reactRootContainer=o,e[vt]=o.current,er(e.nodeType===8?e.parentNode:e),nn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var p=_l(a);u.call(p)}}var a=xo(e,0,!1,null,null,!1,!1,"",Es);return e._reactRootContainer=a,e[vt]=a.current,er(e.nodeType===8?e.parentNode:e),nn(function(){El(t,a,n,r)}),a}function Al(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var u=l;l=function(){var a=_l(o);u.call(a)}}El(t,o,e,l)}else o=Cc(n,t,e,l,r);return _l(o)}ru=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Un(t.pendingLanes);n!==0&&(Kl(t,n|1),je(t,se()),!(I&6)&&(Tn=se()+500,It()))}break;case 13:nn(function(){var r=St(e,1);if(r!==null){var l=Ne();ut(r,e,1,l)}}),ko(e,1)}},Yl=function(e){if(e.tag===13){var t=St(e,134217728);if(t!==null){var n=Ne();ut(t,e,134217728,n)}ko(e,134217728)}},lu=function(e){if(e.tag===13){var t=Ht(e),n=St(e,t);if(n!==null){var r=Ne();ut(n,e,t,r)}ko(e,t)}},iu=function(){return W},ou=function(e,t){var n=W;try{return W=e,t()}finally{W=n}},Ul=function(e,t,n){switch(t){case"input":if(Rl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=$r(r);if(!l)throw Error(h(90));To(r),Rl(r,l)}}}break;case"textarea":jo(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}},$o=ho,Qo=nn;var zc={usingClientEntryPoint:!1,Events:[rr,yn,$r,Ho,Wo,ho]},yr={findFiberByHostInstance:Xt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ac={bundleType:yr.bundleType,version:yr.version,rendererPackageName:yr.rendererPackageName,rendererConfig:yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Go(e),e===null?null:e.stateNode},findFiberByHostInstance:yr.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nl.isDisabled&&Nl.supportsFiber)try{Cr=Nl.inject(Ac),ct=Nl}catch{}}return Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zc,Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eo(t))throw Error(h(200));return _c(e,t,null,n)},Ie.createRoot=function(e,t){if(!Eo(e))throw Error(h(299));var n=!1,r="",l=Ss;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=xo(e,1,!1,null,null,n,!1,r,l),e[vt]=t.current,er(e.nodeType===8?e.parentNode:e),new So(t)},Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=Go(t),e=e===null?null:e.stateNode,e},Ie.flushSync=function(e){return nn(e)},Ie.hydrate=function(e,t,n){if(!zl(t))throw Error(h(200));return Al(null,e,t,!0,n)},Ie.hydrateRoot=function(e,t,n){if(!Eo(e))throw Error(h(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Ss;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=xs(t,null,e,1,n??null,l,!1,i,o),e[vt]=t.current,er(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Cl(t)},Ie.render=function(e,t,n){if(!zl(t))throw Error(h(200));return Al(null,e,t,!1,n)},Ie.unmountComponentAtNode=function(e){if(!zl(e))throw Error(h(40));return e._reactRootContainer?(nn(function(){Al(null,null,e,!1,function(){e._reactRootContainer=null,e[vt]=null})}),!0):!1},Ie.unstable_batchedUpdates=ho,Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zl(n))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return Al(e,t,n,!1,r)},Ie.version="18.3.1-next-f1338f8080-20240426",Ie}var Rs;function jc(){if(Rs)return zo.exports;Rs=1;function R(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(R)}catch(V){console.error(V)}}return R(),zo.exports=Oc(),zo.exports}var Ls;function Ic(){if(Ls)return Pl;Ls=1;var R=jc();return Pl.createRoot=R.createRoot,Pl.hydrateRoot=R.hydrateRoot,Pl}var Mc=Ic();const Dc=()=>{const[R,V]=Ln.useState(""),[h,ye]=Ln.useState(!1),[j,$]=Ln.useState("preview"),oe=Ln.useRef(null),ee=`<html>
  <head>
    <title></title>
  </head>

  <body
    style="
    max-width: 100%;
      width: 100%;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: rgb(236, 236, 236);
      cursor: auto;
    "
  >
    <table
      align="center"
      border="0"
      cellpadding="0"
      cellspacing="0"
      style="
        width: 100% !important;
        max-width: 600px;
        table-layout: fixed;
        border-collapse: collapse;
        box-sizing: border-box;
        width: 600px;
        padding-left: 0px;
        padding-right: 0px;
        padding-top: 0px;
        padding-bottom: 0px;
        background-color: rgba(255, 255, 255, 1);
      "
    >
      <tbody>
        <tr id="Header" style="vertical-align: top">
          <td
            id="Header"
            style="
              vertical-align: top;
              box-sizing: border-box;
              width: 600px;
              height: 98px;
              padding-left: 10px;
              padding-right: 10px;
              padding-top: 9px;
              padding-bottom: 9px;
              background-color: rgba(55, 57, 53, 1);
            "
          >
            <a
              href="https://parametr.space/?utm_source=unisender&amp;utm_medium=email&amp;utm_campaign=build_f"
              target="_blank"
              ><img
                src="https://static.tildacdn.com/tild6134-3430-4233-a630-633337376663/EmailLogo.png"
                style="width: 340px; height: 44px"
            /></a>
            <table
              id="Header"
              style="
                vertical-align: top;
                border-collapse: collapse;
                table-layout: fixed;
                width: 580px;
                height: auto;
              "
            >
              <tbody>
                <tr height="24" width="24"></tr>
                <tr id="Frame 1">
                  <td height="12" style="display: inline-block" width="231">
                    <img
                      src="https://static.tildacdn.com/tild3932-6134-4466-b433-376466666532/emaildescription.png"
                      style="width: 231px; height: 12px"
                    />
                  </td>
                  <td
                    height="12"
                    style="
                      padding: 0;
                      box-sizing: border-box;
                      font-family: TT Firs Neue, sans-serif;
                      font-weight: Regular;
                      font-size: 11px;
                      line-height: 12.210000157356262px;
                      text-align: right;
                      color: rgba(255, 255, 255, 1);
                      text-decoration: none;
                    "
                    width="349"
                  >
                    <a
                      href="tel:+74951411840"
                      style="
                        color: rgba(255, 255, 255, 1);
                        text-decoration: none;
                      "
                      >+7 495 141 18 40</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr id="96%" style="vertical-align: top">
          <td
            align="center"
            id="96%"
            style="
              vertical-align: top;
              box-sizing: border-box;
              width: 570px;
              height: auto;
              padding-left: 0px;
              padding-right: 0px;
              padding-top: 0px;
              padding-bottom: 0px;
            "
          >
            <table
              id="96%"
              style="
                vertical-align: top;
                border-collapse: collapse;
                table-layout: fixed;
                width: 570px;
                height: auto;
              "
            >
              <tbody>
                <tr height="20" width="20"></tr>
                <tr id="ImageWithText" style="vertical-align: top">
                  <td
                    :=""
                    id="ImageWithText"
                    style="
                      vertical-align: top;
                      box-sizing: border-box;
                      width: auto;
                      height: auto;
                      padding-left: 0px;
                      padding-right: 0px;
                      padding-top: 0px;
                      padding-bottom: 0px;
                    "
                  >
                    <table
                      id="ImageWithText"
                      style="
                        vertical-align: top;
                        border-collapse: collapse;
                        table-layout: fixed;
                        width: 570px;
                        height: auto;
                      "
                    >
                      <tbody>
                        <tr id="Text" style="vertical-align: top">
                          <td
                            :=""
                            id="Text"
                            style="
                              vertical-align: top;
                              box-sizing: border-box;
                              width: auto;
                              height: auto;
                              padding-left: 0px;
                              padding-right: 0px;
                              padding-top: 0px;
                              padding-bottom: 0px;
                              background-color: rgba(255, 255, 255, 1);
                            "
                          >
                            <table
                              id="Text"
                              style="
                                vertical-align: top;
                                border-collapse: collapse;
                                table-layout: fixed;
                                width: 570px;
                                height: auto;
                              "
                            >
                              <tbody>
                                <tr
                                  height="35"
                                  id="AAAAAAAAAAAAAAAAAAA"
                                  width="556"
                                >
                                  <td
                                    style="
                                      vertical-align: top;
                                      padding: 0;
                                      box-sizing: border-box;
                                      font-family: Arial, sans-serif;
                                      font-weight: Bold;
                                      font-size: 25px;
                                      line-height: 35px;
                                      text-align: left;
                                      color: rgba(0, 0, 0, 1);
                                    "
                                  >
                                  ${R||"[Имя]"}, добрый день!
                                  </td>
                                </tr>
                                <tr height="20" width="20"></tr>
                                <tr
                                  height="auto"
                                  id="AAAAAAAAAAAAAAAAAAA"
                                  width="556"
                                >
                                  <td
                                    style="
                                      vertical-align: top;
                                      padding: 0;
                                      box-sizing: border-box;
                                      font-family: Arial, sans-serif;
                                      font-weight: Regular;
                                      font-size: 16px;
                                      line-height: 22.399999618530273px;
                                      text-align: left;
                                      color: #999999;
                                    "
                                  >
                                  С нетерпением ждём вас в команде Parametr – молодой, амбициозной и динамично развивающейся компании.
                                  </td>
                                </tr>
                                <tr height="20" width="20"></tr>
                                <tr id="Text" style="vertical-align: top">
                                  <td
                                    :=""
                                    id="Text"
                                    style="
                                      vertical-align: top;
                                      box-sizing: border-box;
                                      width: 570px;
                                      height: 1px;
                                      padding-left: 0px;
                                      padding-right: 0px;
                                      padding-top: 0px;
                                      padding-bottom: 0px;
                                      background-color: rgba(217, 217, 217, 1);
                                    "
                                  ><table style="border-collapse:collapse; height:auto; vertical-align:top; width:570px"></table></td>
                                </tr>                
                                <tr height="20" width="20"></tr>
                                <tr
                                  height="auto"
                                  id="AAAAAAAAAAAAAAAAAAA"
                                  width="556"
                                >
                                  <td
                                    style="
                                      vertical-align: top;
                                      padding: 0;
                                      box-sizing: border-box;
                                      font-family: Arial, sans-serif;
                                      font-weight: Regular;
                                      font-size: 16px;
                                      line-height: 22.399999618530273px;
                                      text-align: left;
                                      color: #999999;
                                    "
                                  >
                                  Parametr – это девелопер полного цикла, задающий новые стандарты на рынке коммерческой недвижимости. Компетенции нашей команды включают разработку концепции, проектирование, строительство и управление готовыми объектами недвижимости.
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr height="20" width="20"></tr>
                        <tr height="245" id="Image Frame Container" width="556">
                          <td
                            :=""
                            height="245"
                            id="Image Frame Container"
                            width="556"
                          >
                            <img
                              src="https://img.hiteml.com/en/v5/user-files?userId=5206765&amp;resource=himg&amp;disposition=inline&amp;name=684opxbw76ajjep4qn6oe9f8dc4bapnk9mzzxgsdbjcgnrca9n3ke53k1x9zdh9prd88b1k5z65kb815wgkzze4yasykxbwupok8fumt8n56sxu5egpqo"
                              style="width: 570px; height: 245px"
                            />
                            <table
                              id="Image Frame Container"
                              style="
                                border-collapse: collapse;
                                table-layout: fixed;
                                width: 570px;
                                height: auto;
                              "
                            ></table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr id="Text" style="vertical-align: top">
                  <td
                    :=""
                    id="Text"
                    style="
                      vertical-align: top;
                      box-sizing: border-box;
                      width: auto;
                      height: auto;
                      padding-left: 0px;
                      padding-right: 0px;
                      padding-top: 0px;
                      padding-bottom: 0px;
                      background-color: rgba(255, 255, 255, 1);
                    "
                  >
                    <table
                      id="Text"
                      style="
                        vertical-align: top;
                        border-collapse: collapse;
                        table-layout: fixed;
                        width: 570px;
                        height: auto;
                      "
                    >
                      <tbody>
                        <tr height="20" width="20"></tr>
                        <tr id="Text" style="vertical-align: top">
                          <td
                            :=""
                            id="Text"
                            style="
                              vertical-align: top;
                              box-sizing: border-box;
                              width: 570px;
                              height: 1px;
                              padding-left: 0px;
                              padding-right: 0px;
                              padding-top: 0px;
                              padding-bottom: 0px;
                              background-color: rgba(217, 217, 217, 1);
                            "
                          ><table style="border-collapse:collapse; height:auto; vertical-align:top; width:570px"></table></td>
                        </tr>        
                        <tr height="20" width="20"></tr>        
                        <tr
                        height="35"
                        id="AAAAAAAAAAAAAAAAAAA"
                        width="556"
                      >
                        <td
                          style="
                            vertical-align: top;
                            padding: 0;
                            box-sizing: border-box;
                            font-family: Arial, sans-serif;
                            font-weight: Bold;
                            font-size: 22px;
                            line-height: 22px;
                            text-align: left;
                            color: rgba(0, 0, 0, 1);
                          "
                        >
                        Parametr входит в состав группы ПИК и ставит перед собой цель создавать продукты нового уровня.
                        </td>
                      </tr>
                      <tr height="20" width="20"></tr>        
                        <tr height="auto" id="AAAAAAAAAAAAAAAAAAA" width="556">
                          <td
                            style="
                              vertical-align: top;
                              padding: 0;
                              box-sizing: border-box;
                              font-family: Arial, sans-serif;
                              font-weight: Regular;
                              font-size: 16px;
                              line-height: 22.399999618530273px;
                              text-align: left;
                              color: #9A9A9A;
                            "
                          >
                          Именно поэтому для нашей компании мы выбрали такое название.
                          В математике «параметр» – переменная, от которой зависит решение задачи. Приставка «пара» также означает преодоление границ, выход за пределы. На рынке стандартного продукта мы предлагаем решения, которое поднимают качество работы наших резидентов на новый уровень.
                        <br>
                        <br>
                        Мы являемся многофункциональной, гибкой платформой для развития и масштабирования бизнеса наших клиентов и гордимся тем, что меняем отношение к индустриально-логистическому сегменту.                        </td>
                        </tr>
                        <tr height="20" width="20"></tr>
                        <tr height="245" id="Image Frame Container" width="556">
                          <td
                            :=""
                            height="245"
                            id="Image Frame Container"
                            width="556"
                          >
                            <img
                              src="https://img.hiteml.com/en/v5/user-files?userId=5206765&amp;resource=himg&amp;disposition=inline&amp;name=684opxbw76ajjep4qn6oe9f8dc4bapnk9mzzxgsdbjcgnrca9n3ke53k1x9zdh9prd88b1k5z65kb815wgkzze4yasykxbwupok8fumt8n56sxu5egpqo"
                              style="width: 570px; height: 245px"
                            />
                            <table
                              id="Image Frame Container"
                              style="
                                border-collapse: collapse;
                                table-layout: fixed;
                                width: 570px;
                                height: auto;
                              "
                            ></table>
                          </td>
                        </tr>
                        <tr height="20" width="20"></tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>

        <tr id="96%" style="vertical-align: top">
          <td
            align="center"
            id="96%"
            style="
              vertical-align: top;
              box-sizing: border-box;
              width: 570px;
              height: auto;
              padding-left: 0px;
              padding-right: 0px;
              padding-top: 0px;
              padding-bottom: 0px;
            "
          >
            <table
              id="96%"
              style="
                vertical-align: top;
                border-collapse: collapse;
                table-layout: fixed;
                width: 570px;
                height: auto;
              "
            >
              <tbody>
                <tr id="Text" style="vertical-align: top">
                  <td
                    :=""
                    id="Text"
                    style="
                      vertical-align: top;
                      box-sizing: border-box;
                      width: 570px;
                      height: 1px;
                      padding-left: 0px;
                      padding-right: 0px;
                      padding-top: 0px;
                      padding-bottom: 0px;
                      background-color: rgba(217, 217, 217, 1);
                    "
                  >
                    <table
                      id="Text"
                      style="
                        vertical-align: top;
                        border-collapse: collapse;
                        table-layout: fixed;
                        width: 570px;
                        height: auto;
                      "
                    ></table>
                  </td>
                </tr>
                <tr height="20" width="20"></tr>
                <tr
                height="auto"
                id="AAAAAAAAAAAAAAAAAAA"
                width="556"
              >
                <td
                  style="
                    vertical-align: top;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: Arial, sans-serif;
                    font-weight: Regular;
                    font-size: 16px;
                    line-height: 22.399999618530273px;
                    text-align: left;
                    color: #999999;
                  "
                >
                Мы рады, что к нашей команде присоединился новый сильный игрок, чтобы вместе совершенствовать и реализовывать идеи и достигать поставленных целей.              </td>
              </tr>
                <tr height="20" width="20"></tr>
                <tr height="245" id="Image Frame Container" width="556">
                  <td
                    :=""
                    height="245"
                    id="Image Frame Container"
                    width="556"
                  >
                    <img
                      src="https://img.hiteml.com/en/v5/user-files?userId=5206765&amp;resource=himg&amp;disposition=inline&amp;name=684opxbw76ajjep4qn6oe9f8dc4bapnk9mzzxgsdbjcgnrca9n3ke53k1x9zdh9prd88b1k5z65kb815wgkzze4yasykxbwupok8fumt8n56sxu5egpqo"
                      style="width: 570px; height: 245px"
                    />
                    <table
                      id="Image Frame Container"
                      style="
                        border-collapse: collapse;
                        table-layout: fixed;
                        width: 570px;
                        height: auto;
                      "
                    ></table>
                  </td>
                </tr>
                <tr height="20" width="20"></tr>
                <tr id="Text" style="vertical-align: top">
                  <td
                    :=""
                    id="Text"
                    style="
                      vertical-align: top;
                      box-sizing: border-box;
                      width: 570px;
                      height: 40px;
                      padding-left: 0px;
                      padding-right: 0px;
                      padding-top: 0px;
                      padding-bottom: 0px;
                      background-color: rgba(255, 255, 255, 1);
                    "
                  >
                    <table
                      id="Text"
                      style="
                        vertical-align: top;
                        border-collapse: collapse;
                        table-layout: fixed;
                        width: 570px;
                        height: auto;
                      "
                    >
                      <tbody>
                        <tr
                          height="40"
                          id="AAAAAAAAAAAAAAAAAAA"
                          width="556"
                          align="center"
                        >
                            <td
                              height="37"
                              style="
                                padding: 7px 20px;
                                border-radius: 20px;
                                display: inline-block;
                                background-color: #373936;
                                box-sizing: border-box;
                                font-family: Arial, sans-serif;
                                font-weight: Regular;
                                font-size: 16px;
                                line-height: 24px;
                                text-align: left;
                                color: #ffffff;
                              "
                              width="170"
                            >
                                                    <a
                              href="https://kuvekino-prom.ru/kupit-sklad-v-novoj-moskve/?utm_source=unisender&amp;utm_medium=email&amp;utm_campaign=build_f"
                              style="color: #ffffff; text-decoration: none"
                              target="_blank">
                                Смотреть видео
                                </a>
                            </td>
                        </tr>
                        <tr height="20" width="20"></tr>
                        <tr
                        height="auto"
                        id="AAAAAAAAAAAAAAAAAAA"
                        width="556"
                      >
                        <td
                          style="
                            vertical-align: top;
                            padding: 0;
                            box-sizing: border-box;
                            font-family: Arial, sans-serif;
                            font-weight: Regular;
                            font-size: 16px;
                            line-height: 22.399999618530273px;
                            text-align: left;
                            color: #999999;
                          "
                        >
                        Посмотрите видео о компании, чтобы узнать больше о том, для кого мы работаем и какие цели перед собой ставим. И подписывайтесь на нашу страничку на Я. Дзен, где мы не только делимся новостями компании, но и размещаем полезный видео-контент, интересные статьи про архитектуру, клиентов, рынок индустриальной недвижимости, мировой опыт и многое другое.
                        <br>
                        <br>
                        В случае возникновения любых вопросов, пожалуйста, обращайтесь.
                        <br>
                        <br>
                        Кузнецова Юлия,<br>
Руководитель HR-проектов <br>
Parametr<br>
T: +7 903 765 20 52<br>
E: kuznetsovaiub@pik.ru<br>
                      </td>
                      </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr height="20" width="20"></tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr id="Frame 3" style="vertical-align: top">
          <td
            :=""
            id="Frame 3"
            style="
              vertical-align: top;
              box-sizing: border-box;
              width: 600px;
              height: 217px;
              padding-left: 17px;
              padding-right: 17px;
              padding-top: 20px;
              padding-bottom: 20px;
              background-color: rgba(55, 57, 54, 1);
            "
          >
            <table
              id="Frame 3"
              style="
                vertical-align: top;
                border-collapse: collapse;
                table-layout: fixed;
                width: 566px;
                height: auto;
              "
            >
              <tbody>
                <tr id="Frame 4" style="vertical-align: top">
                  <td
                    :=""
                    id="Frame 4"
                    style="
                      vertical-align: top;
                      box-sizing: border-box;
                      width: 175px;
                      height: auto;
                      padding-left: 0px;
                      padding-right: 0px;
                      padding-top: 0px;
                      padding-bottom: 0px;
                    "
                  >
                    <table
                      id="Frame 4"
                      style="
                        vertical-align: top;
                        border-collapse: collapse;
                        table-layout: fixed;
                        width: 175px;
                        height: auto;
                      "
                    >
                      <tbody>
                        <tr id="Frame 2087324712" style="vertical-align: top">
                          <td
                            :=""
                            id="Frame 2087324712"
                            style="
                              vertical-align: top;
                              box-sizing: border-box;
                              width: 175px;
                              height: auto;
                              padding-left: 0px;
                              padding-right: 0px;
                              padding-top: 0px;
                              padding-bottom: 0px;
                            "
                          >
                            <table
                              id="Frame 2087324712"
                              style="
                                vertical-align: top;
                                border-collapse: collapse;
                                table-layout: fixed;
                                width: 175px;
                                height: auto;
                              "
                            >
                              <tbody>
                                <tr id="Text">
                                  <td
                                    height="20"
                                    style="
                                      padding: 0;
                                      display: inline-block;
                                      box-sizing: border-box;
                                      font-family: Arial, sans-serif;
                                      font-weight: Regular;
                                      font-size: 18px;
                                      line-height: 20px;
                                      text-align: left;
                                      color: #ffffff;
                                      text-decoration: none;
                                    "
                                    width="175"
                                  >
                                    <a
                                      href="tel:+74951411840"
                                      style="
                                        color: rgba(255, 255, 255, 1);
                                        text-decoration: none;
                                      "
                                      >+7 495 141 18 40</a
                                    >
                                  </td>
                                </tr>
                                <tr height="6" width="6"></tr>
                                <tr id="Text">
                                  <td
                                    height="20"
                                    style="
                                      padding: 0;
                                      display: inline-block;
                                      box-sizing: border-box;
                                      font-family: Arial, sans-serif;
                                      font-weight: Regular;
                                      font-size: 18px;
                                      line-height: 20px;
                                      text-align: left;
                                      color: #ffffff;
                                      text-decoration: none;
                                    "
                                    width="175"
                                  >
                                    <a
                                      class="goto-anchor goto-anchor"
                                      style="
                                        color: #ffffff;
                                        font-family: 'arial';
                                        font-size: 18px;
                                        line-height: 14px;
                                        text-decoration: none;
                                      "
                                      target="_blank"
                                      title="prom@pik.ru"
                                      >prom@pik.ru</a
                                    >
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr height="100" width="100"></tr>
                <tr height="15" id="AAAAAAAAAAAAAAAAAAA" width="566">
                  <td
                    style="
                      vertical-align: top;
                      padding: 0;
                      box-sizing: border-box;
                      font-family: Arial, sans-serif;
                      font-weight: Regular;
                      font-size: 12px;
                      line-height: 15px;
                      text-align: left;
                      color: #ffffff;
                    "
                  >
                    Вы получили это письмо, потому что мы считаем вас партнёром
                    или другом компании Parametr. Если вы не хотите получать
                    такие письма в дальнейшем, вы
                    <a
                      class="goto-anchor goto-anchor"
                      style="
                        color: #ffffff;
                        font-family: 'arial';
                        font-size: 12px;
                        line-height: 14px;
                        text-decoration: underline;
                      "
                      target="_blank"
                      title="Отписаться"
                      >можете отписаться</a
                    >.
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
`;Ln.useEffect(()=>{if(oe.current&&j==="preview"){const te=oe.current.contentDocument;te.open(),te.write(ee),te.close()}},[ee,j]);const B=async()=>{try{await navigator.clipboard.writeText(ee),ye(!0),setTimeout(()=>ye(!1),2e3)}catch(te){console.error("Failed to copy text: ",te)}};return ie.jsxs("div",{className:"container",children:[ie.jsx("div",{className:"left-panel",children:ie.jsxs("div",{className:"card",children:[ie.jsx("h1",{children:"Генератор приветственной рассылки"}),ie.jsxs("div",{className:"input-group",children:[ie.jsx("label",{htmlFor:"name",children:"Имя нового члена команды"}),ie.jsx("input",{id:"name",type:"text",placeholder:"Введите имя",value:R,onChange:te=>V(te.target.value)})]}),ie.jsx("button",{onClick:B,children:h?"Скопировано!":"Скопировать в буфер обмена"})]})}),ie.jsx("div",{className:"right-panel",children:ie.jsxs("div",{className:"card",children:[ie.jsxs("div",{className:"tabs",children:[ie.jsx("button",{className:`tab ${j==="preview"?"active":""}`,onClick:()=>$("preview"),children:"Превью"}),ie.jsx("button",{className:`tab ${j==="code"?"active":""}`,onClick:()=>$("code"),children:"HTML Код"})]}),ie.jsx("div",{className:"tab-content",children:j==="preview"?ie.jsx("div",{className:"iframe-container",children:ie.jsx("iframe",{ref:oe,title:"Email Preview",className:"preview-iframe"})}):ie.jsx("div",{className:"code-container",children:ie.jsx("pre",{children:ee})})})]})}),ie.jsx("style",{children:`
        .container {
          display: flex;
          gap: 20px;
          max-width: 1400px;
          margin: 0 auto;
          padding: 20px;
          min-height: 100vh;
        }
        
        .left-panel {
          width: 300px;
          flex-shrink: 0;
          .card{
          height: fit-content}
        }
        
        .right-panel {
          flex: 1;
          min-width: 0;
        }
        
        .card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 20px;
          height: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }
        
        .right-panel .card {
          padding: 0;
          overflow: hidden;
        }
        
        h1 {
          margin-top: 0;
          margin-bottom: 20px;
          font-size: 1.5rem;
        }
        
        .input-group {
          margin-bottom: 20px;
        }
        
        label {
          display: block;
          margin-bottom: 8px;
        }
        
        input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }
        
        .tabs {
          display: flex;
          border-bottom: 1px solid #ddd;
        }
        
        .tab {
          padding: 12px 24px;
          border: none;
          background: none;
          cursor: pointer;
          font-size: 14px;
          color: #666;
          border-bottom: 2px solid transparent;
        }
        
        .tab.active {
          color: #007bff;
          border-bottom-color: #007bff;
        }
        
        .tab:hover {
          color: #007bff;
        }
        
        .tab-content {
          flex: 1;
          overflow: hidden;
        }
        
        .code-container {
          background: #f5f5f5;
          padding: 20px;
          height: 100%;
          overflow: auto;
        }
        
        pre {
          margin: 0;
          white-space: pre-wrap;
          word-wrap: break-word;
          font-size: 14px;
        }
        
        button {
          width: 100%;
          padding: 12px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
        }
        
        button:not(.tab):hover {
          background: #0056b3;
        }

        .iframe-container {
          height: 100%;
          padding: 20px;
          box-sizing: border-box;
        }

        .preview-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
          }
          
          .left-panel {
            width: 100%;
          }
        }
      `})]})};function Uc(){return ie.jsx("div",{children:ie.jsx(Dc,{})})}Mc.createRoot(document.getElementById("root")).render(ie.jsx(Ln.StrictMode,{children:ie.jsx(Uc,{})}));
