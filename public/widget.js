(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-duration:initial;--tw-ease:initial;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--tw-color-blue-100:oklch(93.2% .032 255.585);--tw-color-blue-200:oklch(88.2% .059 254.128);--tw-color-blue-400:oklch(70.7% .165 254.624);--tw-color-blue-600:oklch(54.6% .245 262.881);--tw-color-blue-700:oklch(48.8% .243 264.376);--tw-color-blue-800:oklch(42.4% .199 265.638);--tw-color-gray-200:oklch(92.8% .006 264.531);--tw-color-gray-300:oklch(87.2% .01 258.338);--tw-color-gray-400:oklch(70.7% .022 261.325);--tw-color-gray-600:oklch(44.6% .03 256.802);--tw-color-gray-800:oklch(27.8% .033 256.848);--tw-color-black:#000;--tw-color-white:#fff;--tw-spacing:.25rem;--tw-container-3xl:48rem;--tw-text-xs:.75rem;--tw-text-xs--line-height:calc(1/.75);--tw-text-sm:.875rem;--tw-text-sm--line-height:calc(1.25/.875);--tw-text-base:1rem;--tw-text-base--line-height: 1.5 ;--tw-text-lg:1.125rem;--tw-text-lg--line-height:calc(1.75/1.125);--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-font-weight-light:300;--tw-font-weight-medium:500;--tw-font-weight-semibold:600;--tw-font-weight-bold:700;--tw-radius-md:.375rem;--tw-radius-lg:.5rem;--tw-radius-2xl:1rem;--tw-ease-out:cubic-bezier(0,0,.2,1);--tw-animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--tw-default-transition-duration:.15s;--tw-default-transition-timing-function:cubic-bezier(.4,0,.2,1);--tw-default-font-family:var(--tw-font-sans);--tw-default-mono-font-family:var(--tw-font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--tw-default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--tw-default-font-feature-settings,normal);font-variation-settings:var(--tw-default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--tw-default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--tw-default-mono-font-feature-settings,normal);font-variation-settings:var(--tw-default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.tw\\:pointer-events-auto{pointer-events:auto}.tw\\:pointer-events-none{pointer-events:none}.tw\\:absolute{position:absolute}.tw\\:fixed{position:fixed}.tw\\:relative{position:relative}.tw\\:inset-0{inset:calc(var(--tw-spacing)*0)}.tw\\:top-4{top:calc(var(--tw-spacing)*4)}.tw\\:right-4{right:calc(var(--tw-spacing)*4)}.tw\\:my-4{margin-block:calc(var(--tw-spacing)*4)}.tw\\:mt-2{margin-top:calc(var(--tw-spacing)*2)}.tw\\:mb-4{margin-bottom:calc(var(--tw-spacing)*4)}.tw\\:ml-2{margin-left:calc(var(--tw-spacing)*2)}.tw\\:line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.tw\\:flex{display:flex}.tw\\:grid{display:grid}.tw\\:hidden{display:none}.tw\\:h-3{height:calc(var(--tw-spacing)*3)}.tw\\:h-4{height:calc(var(--tw-spacing)*4)}.tw\\:h-5{height:calc(var(--tw-spacing)*5)}.tw\\:h-40{height:calc(var(--tw-spacing)*40)}.tw\\:max-h-\\[90vh\\]{max-height:90vh}.tw\\:w-1\\/2{width:50%}.tw\\:w-1\\/3{width:33.3333%}.tw\\:w-3{width:calc(var(--tw-spacing)*3)}.tw\\:w-3\\/4{width:75%}.tw\\:w-4{width:calc(var(--tw-spacing)*4)}.tw\\:w-5{width:calc(var(--tw-spacing)*5)}.tw\\:w-fit{width:fit-content}.tw\\:w-full{width:100%}.tw\\:max-w-3xl{max-width:var(--tw-container-3xl)}.tw\\:flex-1{flex:1}.tw\\:flex-shrink-0{flex-shrink:0}.tw\\:transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.tw\\:animate-pulse{animation:var(--tw-animate-pulse)}.tw\\:cursor-pointer{cursor:pointer}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:flex-wrap{flex-wrap:wrap}.tw\\:items-center{align-items:center}.tw\\:justify-center{justify-content:center}.tw\\:gap-1{gap:calc(var(--tw-spacing)*1)}.tw\\:gap-2{gap:calc(var(--tw-spacing)*2)}.tw\\:gap-4{gap:calc(var(--tw-spacing)*4)}:where(.tw\\:space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--tw-spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--tw-spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.tw\\:space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--tw-spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--tw-spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}.tw\\:overflow-hidden{overflow:hidden}.tw\\:overflow-y-auto{overflow-y:auto}.tw\\:rounded{border-radius:.25rem}.tw\\:rounded-2xl{border-radius:var(--tw-radius-2xl)}.tw\\:rounded-full{border-radius:3.40282e38px}.tw\\:rounded-lg{border-radius:var(--tw-radius-lg)}.tw\\:rounded-md{border-radius:var(--tw-radius-md)}.tw\\:border{border-style:var(--tw-border-style);border-width:1px}.tw\\:border-gray-300{border-color:var(--tw-color-gray-300)}.tw\\:bg-black\\/30{background-color:var(--tw-color-black)}@supports (color:color-mix(in lab,red,red)){.tw\\:bg-black\\/30{background-color:color-mix(in oklab,var(--tw-color-black)30%,transparent)}}.tw\\:bg-blue-100{background-color:var(--tw-color-blue-100)}.tw\\:bg-blue-600{background-color:var(--tw-color-blue-600)}.tw\\:bg-gray-200{background-color:var(--tw-color-gray-200)}.tw\\:bg-gray-300{background-color:var(--tw-color-gray-300)}.tw\\:bg-white{background-color:var(--tw-color-white)}.tw\\:object-cover{object-fit:cover}.tw\\:p-2{padding:calc(var(--tw-spacing)*2)}.tw\\:p-4{padding:calc(var(--tw-spacing)*4)}.tw\\:px-3{padding-inline:calc(var(--tw-spacing)*3)}.tw\\:px-4{padding-inline:calc(var(--tw-spacing)*4)}.tw\\:py-1{padding-block:calc(var(--tw-spacing)*1)}.tw\\:py-2{padding-block:calc(var(--tw-spacing)*2)}.tw\\:py-3{padding-block:calc(var(--tw-spacing)*3)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-lg{font-size:var(--tw-text-lg);line-height:var(--tw-leading,var(--tw-text-lg--line-height))}.tw\\:text-sm{font-size:var(--tw-text-sm);line-height:var(--tw-leading,var(--tw-text-sm--line-height))}.tw\\:text-xs{font-size:var(--tw-text-xs);line-height:var(--tw-leading,var(--tw-text-xs--line-height))}.tw\\:font-bold{--tw-font-weight:var(--tw-font-weight-bold);font-weight:var(--tw-font-weight-bold)}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}.tw\\:font-medium{--tw-font-weight:var(--tw-font-weight-medium);font-weight:var(--tw-font-weight-medium)}.tw\\:font-semibold{--tw-font-weight:var(--tw-font-weight-semibold);font-weight:var(--tw-font-weight-semibold)}.tw\\:text-blue-600{color:var(--tw-color-blue-600)}.tw\\:text-blue-800{color:var(--tw-color-blue-800)}.tw\\:text-gray-400{color:var(--tw-color-gray-400)}.tw\\:text-gray-600{color:var(--tw-color-gray-600)}.tw\\:text-gray-800{color:var(--tw-color-gray-800)}.tw\\:text-white{color:var(--tw-color-white)}.tw\\:opacity-0{opacity:0}.tw\\:opacity-100{opacity:1}.tw\\:shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.tw\\:shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.tw\\:shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.tw\\:transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--tw-default-transition-timing-function));transition-duration:var(--tw-duration,var(--tw-default-transition-duration))}.tw\\:transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--tw-default-transition-timing-function));transition-duration:var(--tw-duration,var(--tw-default-transition-duration))}.tw\\:transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--tw-default-transition-timing-function));transition-duration:var(--tw-duration,var(--tw-default-transition-duration))}.tw\\:transition-shadow{transition-property:box-shadow;transition-timing-function:var(--tw-ease,var(--tw-default-transition-timing-function));transition-duration:var(--tw-duration,var(--tw-default-transition-duration))}.tw\\:transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--tw-default-transition-timing-function));transition-duration:var(--tw-duration,var(--tw-default-transition-duration))}.tw\\:duration-200{--tw-duration:.2s;transition-duration:.2s}.tw\\:duration-500{--tw-duration:.5s;transition-duration:.5s}.tw\\:duration-700{--tw-duration:.7s;transition-duration:.7s}.tw\\:ease-out{--tw-ease:var(--tw-ease-out);transition-timing-function:var(--tw-ease-out)}@media (hover:hover){.tw\\:group-hover\\:inline-block:is(:where(.tw\\:group):hover *){display:inline-block}.tw\\:group-hover\\:text-base:is(:where(.tw\\:group):hover *){font-size:var(--tw-text-base);line-height:var(--tw-leading,var(--tw-text-base--line-height))}.tw\\:group-hover\\:font-bold:is(:where(.tw\\:group):hover *){--tw-font-weight:var(--tw-font-weight-bold);font-weight:var(--tw-font-weight-bold)}.tw\\:hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y)}.tw\\:hover\\:bg-blue-200:hover{background-color:var(--tw-color-blue-200)}.tw\\:hover\\:bg-blue-700:hover{background-color:var(--tw-color-blue-700)}.tw\\:hover\\:text-black:hover{color:var(--tw-color-black)}.tw\\:hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.tw\\:focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.tw\\:focus\\:ring-blue-400:focus{--tw-ring-color:var(--tw-color-blue-400)}.tw\\:focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.tw\\:active\\:scale-95:active{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x)var(--tw-scale-y)}@media (min-width:48rem){.tw\\:md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:md\\:p-6{padding:calc(var(--tw-spacing)*6)}}}.reserved-widget{z-index:10000;font-family:system-ui,sans-serif;display:block;position:fixed;bottom:1rem;right:1rem}@keyframes pulseGlow{0%,to{box-shadow:0 0 #3b82f680}50%{box-shadow:0 0 15px #3b82f6cc}}.pulse-glow{animation:2s infinite pulseGlow}@keyframes fadeIn{0%{opacity:0;transform:translateY(.25rem)}to{opacity:1;transform:translateY(0)}}.animate-fadeIn{animation:.5s ease-out fadeIn}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@keyframes pulse{50%{opacity:.5}}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
var kc = { exports: {} }, me = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kd;
function Hy() {
  if (kd) return me;
  kd = 1;
  var z = Symbol.for("react.transitional.element"), B = Symbol.for("react.fragment");
  function p(h, L, P) {
    var vl = null;
    if (P !== void 0 && (vl = "" + P), L.key !== void 0 && (vl = "" + L.key), "key" in L) {
      P = {};
      for (var ml in L)
        ml !== "key" && (P[ml] = L[ml]);
    } else P = L;
    return L = P.ref, {
      $$typeof: z,
      type: h,
      key: vl,
      ref: L !== void 0 ? L : null,
      props: P
    };
  }
  return me.Fragment = B, me.jsx = p, me.jsxs = p, me;
}
var Fd;
function xy() {
  return Fd || (Fd = 1, kc.exports = Hy()), kc.exports;
}
var Q = xy(), Fc = { exports: {} }, X = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Id;
function qy() {
  if (Id) return X;
  Id = 1;
  var z = Symbol.for("react.transitional.element"), B = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), vl = Symbol.for("react.context"), ml = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), E = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), cl = Symbol.iterator;
  function nl(s) {
    return s === null || typeof s != "object" ? null : (s = cl && s[cl] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var ql = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Yl = Object.assign, vt = {};
  function jl(s, A, M) {
    this.props = s, this.context = A, this.refs = vt, this.updater = M || ql;
  }
  jl.prototype.isReactComponent = {}, jl.prototype.setState = function(s, A) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, A, "setState");
  }, jl.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function ou() {
  }
  ou.prototype = jl.prototype;
  function zt(s, A, M) {
    this.props = s, this.context = A, this.refs = vt, this.updater = M || ql;
  }
  var Ul = zt.prototype = new ou();
  Ul.constructor = zt, Yl(Ul, jl.prototype), Ul.isPureReactComponent = !0;
  var ot = Array.isArray, J = { H: null, A: null, T: null, S: null, V: null }, wl = Object.prototype.hasOwnProperty;
  function Vl(s, A, M, _, H, W) {
    return M = W.ref, {
      $$typeof: z,
      type: s,
      key: A,
      ref: M !== void 0 ? M : null,
      props: W
    };
  }
  function Ll(s, A) {
    return Vl(
      s.type,
      A,
      void 0,
      void 0,
      void 0,
      s.props
    );
  }
  function mt(s) {
    return typeof s == "object" && s !== null && s.$$typeof === z;
  }
  function xu(s) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(M) {
      return A[M];
    });
  }
  var _t = /\/+/g;
  function Rl(s, A) {
    return typeof s == "object" && s !== null && s.key != null ? xu("" + s.key) : A.toString(36);
  }
  function yu() {
  }
  function hu(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(yu, yu) : (s.status = "pending", s.then(
          function(A) {
            s.status === "pending" && (s.status = "fulfilled", s.value = A);
          },
          function(A) {
            s.status === "pending" && (s.status = "rejected", s.reason = A);
          }
        )), s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function Nl(s, A, M, _, H) {
    var W = typeof s;
    (W === "undefined" || W === "boolean") && (s = null);
    var G = !1;
    if (s === null) G = !0;
    else
      switch (W) {
        case "bigint":
        case "string":
        case "number":
          G = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case z:
            case B:
              G = !0;
              break;
            case U:
              return G = s._init, Nl(
                G(s._payload),
                A,
                M,
                _,
                H
              );
          }
      }
    if (G)
      return H = H(s), G = _ === "" ? "." + Rl(s, 0) : _, ot(H) ? (M = "", G != null && (M = G.replace(_t, "$&/") + "/"), Nl(H, A, M, "", function(Ct) {
        return Ct;
      })) : H != null && (mt(H) && (H = Ll(
        H,
        M + (H.key == null || s && s.key === H.key ? "" : ("" + H.key).replace(
          _t,
          "$&/"
        ) + "/") + G
      )), A.push(H)), 1;
    G = 0;
    var Kl = _ === "" ? "." : _ + ":";
    if (ot(s))
      for (var il = 0; il < s.length; il++)
        _ = s[il], W = Kl + Rl(_, il), G += Nl(
          _,
          A,
          M,
          W,
          H
        );
    else if (il = nl(s), typeof il == "function")
      for (s = il.call(s), il = 0; !(_ = s.next()).done; )
        _ = _.value, W = Kl + Rl(_, il++), G += Nl(
          _,
          A,
          M,
          W,
          H
        );
    else if (W === "object") {
      if (typeof s.then == "function")
        return Nl(
          hu(s),
          A,
          M,
          _,
          H
        );
      throw A = String(s), Error(
        "Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return G;
  }
  function S(s, A, M) {
    if (s == null) return s;
    var _ = [], H = 0;
    return Nl(s, _, "", "", function(W) {
      return A.call(M, W, H++);
    }), _;
  }
  function O(s) {
    if (s._status === -1) {
      var A = s._result;
      A = A(), A.then(
        function(M) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = M);
        },
        function(M) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = M);
        }
      ), s._status === -1 && (s._status = 0, s._result = A);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var Y = typeof reportError == "function" ? reportError : function(s) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var A = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
        error: s
      });
      if (!window.dispatchEvent(A)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", s);
      return;
    }
    console.error(s);
  };
  function al() {
  }
  return X.Children = {
    map: S,
    forEach: function(s, A, M) {
      S(
        s,
        function() {
          A.apply(this, arguments);
        },
        M
      );
    },
    count: function(s) {
      var A = 0;
      return S(s, function() {
        A++;
      }), A;
    },
    toArray: function(s) {
      return S(s, function(A) {
        return A;
      }) || [];
    },
    only: function(s) {
      if (!mt(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  }, X.Component = jl, X.Fragment = p, X.Profiler = L, X.PureComponent = zt, X.StrictMode = h, X.Suspense = N, X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J, X.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return J.H.useMemoCache(s);
    }
  }, X.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, X.cloneElement = function(s, A, M) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var _ = Yl({}, s.props), H = s.key, W = void 0;
    if (A != null)
      for (G in A.ref !== void 0 && (W = void 0), A.key !== void 0 && (H = "" + A.key), A)
        !wl.call(A, G) || G === "key" || G === "__self" || G === "__source" || G === "ref" && A.ref === void 0 || (_[G] = A[G]);
    var G = arguments.length - 2;
    if (G === 1) _.children = M;
    else if (1 < G) {
      for (var Kl = Array(G), il = 0; il < G; il++)
        Kl[il] = arguments[il + 2];
      _.children = Kl;
    }
    return Vl(s.type, H, void 0, void 0, W, _);
  }, X.createContext = function(s) {
    return s = {
      $$typeof: vl,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: P,
      _context: s
    }, s;
  }, X.createElement = function(s, A, M) {
    var _, H = {}, W = null;
    if (A != null)
      for (_ in A.key !== void 0 && (W = "" + A.key), A)
        wl.call(A, _) && _ !== "key" && _ !== "__self" && _ !== "__source" && (H[_] = A[_]);
    var G = arguments.length - 2;
    if (G === 1) H.children = M;
    else if (1 < G) {
      for (var Kl = Array(G), il = 0; il < G; il++)
        Kl[il] = arguments[il + 2];
      H.children = Kl;
    }
    if (s && s.defaultProps)
      for (_ in G = s.defaultProps, G)
        H[_] === void 0 && (H[_] = G[_]);
    return Vl(s, W, void 0, void 0, null, H);
  }, X.createRef = function() {
    return { current: null };
  }, X.forwardRef = function(s) {
    return { $$typeof: ml, render: s };
  }, X.isValidElement = mt, X.lazy = function(s) {
    return {
      $$typeof: U,
      _payload: { _status: -1, _result: s },
      _init: O
    };
  }, X.memo = function(s, A) {
    return {
      $$typeof: E,
      type: s,
      compare: A === void 0 ? null : A
    };
  }, X.startTransition = function(s) {
    var A = J.T, M = {};
    J.T = M;
    try {
      var _ = s(), H = J.S;
      H !== null && H(M, _), typeof _ == "object" && _ !== null && typeof _.then == "function" && _.then(al, Y);
    } catch (W) {
      Y(W);
    } finally {
      J.T = A;
    }
  }, X.unstable_useCacheRefresh = function() {
    return J.H.useCacheRefresh();
  }, X.use = function(s) {
    return J.H.use(s);
  }, X.useActionState = function(s, A, M) {
    return J.H.useActionState(s, A, M);
  }, X.useCallback = function(s, A) {
    return J.H.useCallback(s, A);
  }, X.useContext = function(s) {
    return J.H.useContext(s);
  }, X.useDebugValue = function() {
  }, X.useDeferredValue = function(s, A) {
    return J.H.useDeferredValue(s, A);
  }, X.useEffect = function(s, A, M) {
    var _ = J.H;
    if (typeof M == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return _.useEffect(s, A);
  }, X.useId = function() {
    return J.H.useId();
  }, X.useImperativeHandle = function(s, A, M) {
    return J.H.useImperativeHandle(s, A, M);
  }, X.useInsertionEffect = function(s, A) {
    return J.H.useInsertionEffect(s, A);
  }, X.useLayoutEffect = function(s, A) {
    return J.H.useLayoutEffect(s, A);
  }, X.useMemo = function(s, A) {
    return J.H.useMemo(s, A);
  }, X.useOptimistic = function(s, A) {
    return J.H.useOptimistic(s, A);
  }, X.useReducer = function(s, A, M) {
    return J.H.useReducer(s, A, M);
  }, X.useRef = function(s) {
    return J.H.useRef(s);
  }, X.useState = function(s) {
    return J.H.useState(s);
  }, X.useSyncExternalStore = function(s, A, M) {
    return J.H.useSyncExternalStore(
      s,
      A,
      M
    );
  }, X.useTransition = function() {
    return J.H.useTransition();
  }, X.version = "19.1.0", X;
}
var Pd;
function ui() {
  return Pd || (Pd = 1, Fc.exports = qy()), Fc.exports;
}
var Qt = ui(), Ic = { exports: {} }, ge = {}, Pc = { exports: {} }, li = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lv;
function Yy() {
  return lv || (lv = 1, function(z) {
    function B(S, O) {
      var Y = S.length;
      S.push(O);
      l: for (; 0 < Y; ) {
        var al = Y - 1 >>> 1, s = S[al];
        if (0 < L(s, O))
          S[al] = O, S[Y] = s, Y = al;
        else break l;
      }
    }
    function p(S) {
      return S.length === 0 ? null : S[0];
    }
    function h(S) {
      if (S.length === 0) return null;
      var O = S[0], Y = S.pop();
      if (Y !== O) {
        S[0] = Y;
        l: for (var al = 0, s = S.length, A = s >>> 1; al < A; ) {
          var M = 2 * (al + 1) - 1, _ = S[M], H = M + 1, W = S[H];
          if (0 > L(_, Y))
            H < s && 0 > L(W, _) ? (S[al] = W, S[H] = Y, al = H) : (S[al] = _, S[M] = Y, al = M);
          else if (H < s && 0 > L(W, Y))
            S[al] = W, S[H] = Y, al = H;
          else break l;
        }
      }
      return O;
    }
    function L(S, O) {
      var Y = S.sortIndex - O.sortIndex;
      return Y !== 0 ? Y : S.id - O.id;
    }
    if (z.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var P = performance;
      z.unstable_now = function() {
        return P.now();
      };
    } else {
      var vl = Date, ml = vl.now();
      z.unstable_now = function() {
        return vl.now() - ml;
      };
    }
    var N = [], E = [], U = 1, cl = null, nl = 3, ql = !1, Yl = !1, vt = !1, jl = !1, ou = typeof setTimeout == "function" ? setTimeout : null, zt = typeof clearTimeout == "function" ? clearTimeout : null, Ul = typeof setImmediate < "u" ? setImmediate : null;
    function ot(S) {
      for (var O = p(E); O !== null; ) {
        if (O.callback === null) h(E);
        else if (O.startTime <= S)
          h(E), O.sortIndex = O.expirationTime, B(N, O);
        else break;
        O = p(E);
      }
    }
    function J(S) {
      if (vt = !1, ot(S), !Yl)
        if (p(N) !== null)
          Yl = !0, wl || (wl = !0, Rl());
        else {
          var O = p(E);
          O !== null && Nl(J, O.startTime - S);
        }
    }
    var wl = !1, Vl = -1, Ll = 5, mt = -1;
    function xu() {
      return jl ? !0 : !(z.unstable_now() - mt < Ll);
    }
    function _t() {
      if (jl = !1, wl) {
        var S = z.unstable_now();
        mt = S;
        var O = !0;
        try {
          l: {
            Yl = !1, vt && (vt = !1, zt(Vl), Vl = -1), ql = !0;
            var Y = nl;
            try {
              t: {
                for (ot(S), cl = p(N); cl !== null && !(cl.expirationTime > S && xu()); ) {
                  var al = cl.callback;
                  if (typeof al == "function") {
                    cl.callback = null, nl = cl.priorityLevel;
                    var s = al(
                      cl.expirationTime <= S
                    );
                    if (S = z.unstable_now(), typeof s == "function") {
                      cl.callback = s, ot(S), O = !0;
                      break t;
                    }
                    cl === p(N) && h(N), ot(S);
                  } else h(N);
                  cl = p(N);
                }
                if (cl !== null) O = !0;
                else {
                  var A = p(E);
                  A !== null && Nl(
                    J,
                    A.startTime - S
                  ), O = !1;
                }
              }
              break l;
            } finally {
              cl = null, nl = Y, ql = !1;
            }
            O = void 0;
          }
        } finally {
          O ? Rl() : wl = !1;
        }
      }
    }
    var Rl;
    if (typeof Ul == "function")
      Rl = function() {
        Ul(_t);
      };
    else if (typeof MessageChannel < "u") {
      var yu = new MessageChannel(), hu = yu.port2;
      yu.port1.onmessage = _t, Rl = function() {
        hu.postMessage(null);
      };
    } else
      Rl = function() {
        ou(_t, 0);
      };
    function Nl(S, O) {
      Vl = ou(function() {
        S(z.unstable_now());
      }, O);
    }
    z.unstable_IdlePriority = 5, z.unstable_ImmediatePriority = 1, z.unstable_LowPriority = 4, z.unstable_NormalPriority = 3, z.unstable_Profiling = null, z.unstable_UserBlockingPriority = 2, z.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, z.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ll = 0 < S ? Math.floor(1e3 / S) : 5;
    }, z.unstable_getCurrentPriorityLevel = function() {
      return nl;
    }, z.unstable_next = function(S) {
      switch (nl) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = nl;
      }
      var Y = nl;
      nl = O;
      try {
        return S();
      } finally {
        nl = Y;
      }
    }, z.unstable_requestPaint = function() {
      jl = !0;
    }, z.unstable_runWithPriority = function(S, O) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var Y = nl;
      nl = S;
      try {
        return O();
      } finally {
        nl = Y;
      }
    }, z.unstable_scheduleCallback = function(S, O, Y) {
      var al = z.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? al + Y : al) : Y = al, S) {
        case 1:
          var s = -1;
          break;
        case 2:
          s = 250;
          break;
        case 5:
          s = 1073741823;
          break;
        case 4:
          s = 1e4;
          break;
        default:
          s = 5e3;
      }
      return s = Y + s, S = {
        id: U++,
        callback: O,
        priorityLevel: S,
        startTime: Y,
        expirationTime: s,
        sortIndex: -1
      }, Y > al ? (S.sortIndex = Y, B(E, S), p(N) === null && S === p(E) && (vt ? (zt(Vl), Vl = -1) : vt = !0, Nl(J, Y - al))) : (S.sortIndex = s, B(N, S), Yl || ql || (Yl = !0, wl || (wl = !0, Rl()))), S;
    }, z.unstable_shouldYield = xu, z.unstable_wrapCallback = function(S) {
      var O = nl;
      return function() {
        var Y = nl;
        nl = O;
        try {
          return S.apply(this, arguments);
        } finally {
          nl = Y;
        }
      };
    };
  }(li)), li;
}
var tv;
function By() {
  return tv || (tv = 1, Pc.exports = Yy()), Pc.exports;
}
var ti = { exports: {} }, xl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uv;
function jy() {
  if (uv) return xl;
  uv = 1;
  var z = ui();
  function B(N) {
    var E = "https://react.dev/errors/" + N;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var U = 2; U < arguments.length; U++)
        E += "&args[]=" + encodeURIComponent(arguments[U]);
    }
    return "Minified React error #" + N + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function p() {
  }
  var h = {
    d: {
      f: p,
      r: function() {
        throw Error(B(522));
      },
      D: p,
      C: p,
      L: p,
      m: p,
      X: p,
      S: p,
      M: p
    },
    p: 0,
    findDOMNode: null
  }, L = Symbol.for("react.portal");
  function P(N, E, U) {
    var cl = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: L,
      key: cl == null ? null : "" + cl,
      children: N,
      containerInfo: E,
      implementation: U
    };
  }
  var vl = z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function ml(N, E) {
    if (N === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return xl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h, xl.createPortal = function(N, E) {
    var U = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(B(299));
    return P(N, E, null, U);
  }, xl.flushSync = function(N) {
    var E = vl.T, U = h.p;
    try {
      if (vl.T = null, h.p = 2, N) return N();
    } finally {
      vl.T = E, h.p = U, h.d.f();
    }
  }, xl.preconnect = function(N, E) {
    typeof N == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, h.d.C(N, E));
  }, xl.prefetchDNS = function(N) {
    typeof N == "string" && h.d.D(N);
  }, xl.preinit = function(N, E) {
    if (typeof N == "string" && E && typeof E.as == "string") {
      var U = E.as, cl = ml(U, E.crossOrigin), nl = typeof E.integrity == "string" ? E.integrity : void 0, ql = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      U === "style" ? h.d.S(
        N,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: cl,
          integrity: nl,
          fetchPriority: ql
        }
      ) : U === "script" && h.d.X(N, {
        crossOrigin: cl,
        integrity: nl,
        fetchPriority: ql,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, xl.preinitModule = function(N, E) {
    if (typeof N == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var U = ml(
            E.as,
            E.crossOrigin
          );
          h.d.M(N, {
            crossOrigin: U,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0
          });
        }
      } else E == null && h.d.M(N);
  }, xl.preload = function(N, E) {
    if (typeof N == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var U = E.as, cl = ml(U, E.crossOrigin);
      h.d.L(N, U, {
        crossOrigin: cl,
        integrity: typeof E.integrity == "string" ? E.integrity : void 0,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0,
        type: typeof E.type == "string" ? E.type : void 0,
        fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
        referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
        imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
        imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
        media: typeof E.media == "string" ? E.media : void 0
      });
    }
  }, xl.preloadModule = function(N, E) {
    if (typeof N == "string")
      if (E) {
        var U = ml(E.as, E.crossOrigin);
        h.d.m(N, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: U,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0
        });
      } else h.d.m(N);
  }, xl.requestFormReset = function(N) {
    h.d.r(N);
  }, xl.unstable_batchedUpdates = function(N, E) {
    return N(E);
  }, xl.useFormState = function(N, E, U) {
    return vl.H.useFormState(N, E, U);
  }, xl.useFormStatus = function() {
    return vl.H.useHostTransitionStatus();
  }, xl.version = "19.1.0", xl;
}
var av;
function Gy() {
  if (av) return ti.exports;
  av = 1;
  function z() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z);
      } catch (B) {
        console.error(B);
      }
  }
  return z(), ti.exports = jy(), ti.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ev;
function Xy() {
  if (ev) return ge;
  ev = 1;
  var z = By(), B = ui(), p = Gy();
  function h(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function L(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function P(l) {
    var t = l, u = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (u = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? u : null;
  }
  function vl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function ml(l) {
    if (P(l) !== l)
      throw Error(h(188));
  }
  function N(l) {
    var t = l.alternate;
    if (!t) {
      if (t = P(l), t === null) throw Error(h(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (a = e.return, a !== null) {
          u = a;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === u) return ml(e), l;
          if (n === a) return ml(e), t;
          n = n.sibling;
        }
        throw Error(h(188));
      }
      if (u.return !== a.return) u = e, a = n;
      else {
        for (var f = !1, c = e.child; c; ) {
          if (c === u) {
            f = !0, u = e, a = n;
            break;
          }
          if (c === a) {
            f = !0, a = e, u = n;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === u) {
              f = !0, u = n, a = e;
              break;
            }
            if (c === a) {
              f = !0, a = n, u = e;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(h(189));
        }
      }
      if (u.alternate !== a) throw Error(h(190));
    }
    if (u.tag !== 3) throw Error(h(188));
    return u.stateNode.current === u ? l : t;
  }
  function E(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = E(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var U = Object.assign, cl = Symbol.for("react.element"), nl = Symbol.for("react.transitional.element"), ql = Symbol.for("react.portal"), Yl = Symbol.for("react.fragment"), vt = Symbol.for("react.strict_mode"), jl = Symbol.for("react.profiler"), ou = Symbol.for("react.provider"), zt = Symbol.for("react.consumer"), Ul = Symbol.for("react.context"), ot = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), wl = Symbol.for("react.suspense_list"), Vl = Symbol.for("react.memo"), Ll = Symbol.for("react.lazy"), mt = Symbol.for("react.activity"), xu = Symbol.for("react.memo_cache_sentinel"), _t = Symbol.iterator;
  function Rl(l) {
    return l === null || typeof l != "object" ? null : (l = _t && l[_t] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var yu = Symbol.for("react.client.reference");
  function hu(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === yu ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Yl:
        return "Fragment";
      case jl:
        return "Profiler";
      case vt:
        return "StrictMode";
      case J:
        return "Suspense";
      case wl:
        return "SuspenseList";
      case mt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case ql:
          return "Portal";
        case Ul:
          return (l.displayName || "Context") + ".Provider";
        case zt:
          return (l._context.displayName || "Context") + ".Consumer";
        case ot:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Vl:
          return t = l.displayName || null, t !== null ? t : hu(l.type) || "Memo";
        case Ll:
          t = l._payload, l = l._init;
          try {
            return hu(l(t));
          } catch {
          }
      }
    return null;
  }
  var Nl = Array.isArray, S = B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = p.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, al = [], s = -1;
  function A(l) {
    return { current: l };
  }
  function M(l) {
    0 > s || (l.current = al[s], al[s] = null, s--);
  }
  function _(l, t) {
    s++, al[s] = l.current, l.current = t;
  }
  var H = A(null), W = A(null), G = A(null), Kl = A(null);
  function il(l, t) {
    switch (_(G, t), _(W, l), _(H, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? _d(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = _d(t), l = Od(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    M(H), _(H, l);
  }
  function Ct() {
    M(H), M(W), M(G);
  }
  function qn(l) {
    l.memoizedState !== null && _(Kl, l);
    var t = H.current, u = Od(t, l.type);
    t !== u && (_(W, l), _(H, u));
  }
  function Se(l) {
    W.current === l && (M(H), M(W)), Kl.current === l && (M(Kl), ve._currentValue = Y);
  }
  var Yn = Object.prototype.hasOwnProperty, Bn = z.unstable_scheduleCallback, jn = z.unstable_cancelCallback, sv = z.unstable_shouldYield, dv = z.unstable_requestPaint, gt = z.unstable_now, vv = z.unstable_getCurrentPriorityLevel, ei = z.unstable_ImmediatePriority, ni = z.unstable_UserBlockingPriority, be = z.unstable_NormalPriority, ov = z.unstable_LowPriority, fi = z.unstable_IdlePriority, yv = z.log, hv = z.unstable_setDisableYieldValue, ba = null, Jl = null;
  function Zt(l) {
    if (typeof yv == "function" && hv(l), Jl && typeof Jl.setStrictMode == "function")
      try {
        Jl.setStrictMode(ba, l);
      } catch {
      }
  }
  var Wl = Math.clz32 ? Math.clz32 : gv, rv = Math.log, mv = Math.LN2;
  function gv(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (rv(l) / mv | 0) | 0;
  }
  var Te = 256, Ee = 4194304;
  function ru(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Ae(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? e = ru(a) : (f &= c, f !== 0 ? e = ru(f) : u || (u = c & ~l, u !== 0 && (e = ru(u))))) : (c = a & ~n, c !== 0 ? e = ru(c) : f !== 0 ? e = ru(f) : u || (u = a & ~l, u !== 0 && (e = ru(u)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : e;
  }
  function Ta(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Sv(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ci() {
    var l = Te;
    return Te <<= 1, (Te & 4194048) === 0 && (Te = 256), l;
  }
  function ii() {
    var l = Ee;
    return Ee <<= 1, (Ee & 62914560) === 0 && (Ee = 4194304), l;
  }
  function Gn(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function Ea(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function bv(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, y = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var g = 31 - Wl(u), T = 1 << g;
      c[g] = 0, i[g] = -1;
      var r = y[g];
      if (r !== null)
        for (y[g] = null, g = 0; g < r.length; g++) {
          var m = r[g];
          m !== null && (m.lane &= -536870913);
        }
      u &= ~T;
    }
    a !== 0 && si(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function si(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - Wl(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 4194090;
  }
  function di(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - Wl(u), e = 1 << a;
      e & t | l[a] & t && (l[a] |= t), u &= ~e;
    }
  }
  function Xn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Qn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function vi() {
    var l = O.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Vd(l.type));
  }
  function Tv(l, t) {
    var u = O.p;
    try {
      return O.p = l, t();
    } finally {
      O.p = u;
    }
  }
  var wt = Math.random().toString(36).slice(2), pl = "__reactFiber$" + wt, Gl = "__reactProps$" + wt, qu = "__reactContainer$" + wt, Cn = "__reactEvents$" + wt, Ev = "__reactListeners$" + wt, Av = "__reactHandles$" + wt, oi = "__reactResources$" + wt, Aa = "__reactMarker$" + wt;
  function Zn(l) {
    delete l[pl], delete l[Gl], delete l[Cn], delete l[Ev], delete l[Av];
  }
  function Yu(l) {
    var t = l[pl];
    if (t) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[qu] || u[pl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = Rd(l); l !== null; ) {
            if (u = l[pl]) return u;
            l = Rd(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Bu(l) {
    if (l = l[pl] || l[qu]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function za(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(h(33));
  }
  function ju(l) {
    var t = l[oi];
    return t || (t = l[oi] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function El(l) {
    l[Aa] = !0;
  }
  var yi = /* @__PURE__ */ new Set(), hi = {};
  function mu(l, t) {
    Gu(l, t), Gu(l + "Capture", t);
  }
  function Gu(l, t) {
    for (hi[l] = t, l = 0; l < t.length; l++)
      yi.add(t[l]);
  }
  var zv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ri = {}, mi = {};
  function _v(l) {
    return Yn.call(mi, l) ? !0 : Yn.call(ri, l) ? !1 : zv.test(l) ? mi[l] = !0 : (ri[l] = !0, !1);
  }
  function ze(l, t, u) {
    if (_v(t))
      if (u === null) l.removeAttribute(t);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + u);
      }
  }
  function _e(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + u);
    }
  }
  function Ot(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, "" + a);
    }
  }
  var wn, gi;
  function Xu(l) {
    if (wn === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        wn = t && t[1] || "", gi = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + wn + l + gi;
  }
  var Vn = !1;
  function Ln(l, t) {
    if (!l || Vn) return "";
    Vn = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var T = function() {
                throw Error();
              };
              if (Object.defineProperty(T.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(T, []);
                } catch (m) {
                  var r = m;
                }
                Reflect.construct(l, [], T);
              } else {
                try {
                  T.call();
                } catch (m) {
                  r = m;
                }
                l.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (m) {
                r = m;
              }
              (T = l()) && typeof T.catch == "function" && T.catch(function() {
              });
            }
          } catch (m) {
            if (m && r && typeof m.stack == "string")
              return [m.stack, r.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), f = n[0], c = n[1];
      if (f && c) {
        var i = f.split(`
`), y = c.split(`
`);
        for (e = a = 0; a < i.length && !i[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; e < y.length && !y[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (a === i.length || e === y.length)
          for (a = i.length - 1, e = y.length - 1; 1 <= a && 0 <= e && i[a] !== y[e]; )
            e--;
        for (; 1 <= a && 0 <= e; a--, e--)
          if (i[a] !== y[e]) {
            if (a !== 1 || e !== 1)
              do
                if (a--, e--, 0 > e || i[a] !== y[e]) {
                  var g = `
` + i[a].replace(" at new ", " at ");
                  return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g;
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      Vn = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Xu(u) : "";
  }
  function Ov(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Xu(l.type);
      case 16:
        return Xu("Lazy");
      case 13:
        return Xu("Suspense");
      case 19:
        return Xu("SuspenseList");
      case 0:
      case 15:
        return Ln(l.type, !1);
      case 11:
        return Ln(l.type.render, !1);
      case 1:
        return Ln(l.type, !0);
      case 31:
        return Xu("Activity");
      default:
        return "";
    }
  }
  function Si(l) {
    try {
      var t = "";
      do
        t += Ov(l), l = l.return;
      while (l);
      return t;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function ut(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function bi(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Mv(l) {
    var t = bi(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    ), a = "" + l[t];
    if (!l.hasOwnProperty(t) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var e = u.get, n = u.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          a = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, t, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(f) {
          a = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function Oe(l) {
    l._valueTracker || (l._valueTracker = Mv(l));
  }
  function Ti(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(), a = "";
    return l && (a = bi(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), !0) : !1;
  }
  function Me(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Dv = /[\n"\\]/g;
  function at(l) {
    return l.replace(
      Dv,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Kn(l, t, u, a, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ut(t)) : l.value !== "" + ut(t) && (l.value = "" + ut(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? Jn(l, f, ut(t)) : u != null ? Jn(l, f, ut(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + ut(c) : l.removeAttribute("name");
  }
  function Ei(l, t, u, a, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null))
        return;
      u = u != null ? "" + ut(u) : "", t = t != null ? "" + ut(t) : u, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f);
  }
  function Jn(l, t, u) {
    t === "number" && Me(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Qu(l, t, u, a) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < u.length; e++)
        t["$" + u[e]] = !0;
      for (u = 0; u < l.length; u++)
        e = t.hasOwnProperty("$" + l[u].value), l[u].selected !== e && (l[u].selected = e), e && a && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + ut(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          l[e].selected = !0, a && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ai(l, t, u) {
    if (t != null && (t = "" + ut(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + ut(u) : "";
  }
  function zi(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(h(92));
        if (Nl(a)) {
          if (1 < a.length) throw Error(h(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = ut(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a);
  }
  function Cu(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Uv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function _i(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || Uv.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function Oi(l, t, u) {
    if (t != null && typeof t != "object")
      throw Error(h(62));
    if (l = l.style, u != null) {
      for (var a in u)
        !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var e in t)
        a = t[e], t.hasOwnProperty(e) && u[e] !== a && _i(l, e, a);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && _i(l, n, t[n]);
  }
  function Wn(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var Rv = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Nv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function De(l) {
    return Nv.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var $n = null;
  function kn(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Zu = null, wu = null;
  function Mi(l) {
    var t = Bu(l);
    if (t && (l = t.stateNode)) {
      var u = l[Gl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (Kn(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), t = u.name, u.type === "radio" && t != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + at(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[Gl] || null;
                if (!e) throw Error(h(90));
                Kn(
                  a,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < u.length; t++)
              a = u[t], a.form === l.form && Ti(a);
          }
          break l;
        case "textarea":
          Ai(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && Qu(l, !!u.multiple, t, !1);
      }
    }
  }
  var Fn = !1;
  function Di(l, t, u) {
    if (Fn) return l(t, u);
    Fn = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (Fn = !1, (Zu !== null || wu !== null) && (yn(), Zu && (t = Zu, l = wu, wu = Zu = null, Mi(t), l)))
        for (t = 0; t < l.length; t++) Mi(l[t]);
    }
  }
  function _a(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[Gl] || null;
    if (a === null) return null;
    u = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        h(231, t, typeof u)
      );
    return u;
  }
  var Mt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), In = !1;
  if (Mt)
    try {
      var Oa = {};
      Object.defineProperty(Oa, "passive", {
        get: function() {
          In = !0;
        }
      }), window.addEventListener("test", Oa, Oa), window.removeEventListener("test", Oa, Oa);
    } catch {
      In = !1;
    }
  var Vt = null, Pn = null, Ue = null;
  function Ui() {
    if (Ue) return Ue;
    var l, t = Pn, u = t.length, a, e = "value" in Vt ? Vt.value : Vt.textContent, n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++) ;
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++) ;
    return Ue = e.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Re(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Ne() {
    return !0;
  }
  function Ri() {
    return !1;
  }
  function Xl(l) {
    function t(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (u = l[c], this[c] = u ? u(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Ne : Ri, this.isPropagationStopped = Ri, this;
    }
    return U(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Ne);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Ne);
      },
      persist: function() {
      },
      isPersistent: Ne
    }), t;
  }
  var gu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, pe = Xl(gu), Ma = U({}, gu, { view: 0, detail: 0 }), pv = Xl(Ma), lf, tf, Da, He = U({}, Ma, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: af,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Da && (Da && l.type === "mousemove" ? (lf = l.screenX - Da.screenX, tf = l.screenY - Da.screenY) : tf = lf = 0, Da = l), lf);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : tf;
    }
  }), Ni = Xl(He), Hv = U({}, He, { dataTransfer: 0 }), xv = Xl(Hv), qv = U({}, Ma, { relatedTarget: 0 }), uf = Xl(qv), Yv = U({}, gu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Bv = Xl(Yv), jv = U({}, gu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Gv = Xl(jv), Xv = U({}, gu, { data: 0 }), pi = Xl(Xv), Qv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Cv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Zv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function wv(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Zv[l]) ? !!t[l] : !1;
  }
  function af() {
    return wv;
  }
  var Vv = U({}, Ma, {
    key: function(l) {
      if (l.key) {
        var t = Qv[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Re(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Cv[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: af,
    charCode: function(l) {
      return l.type === "keypress" ? Re(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Re(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Lv = Xl(Vv), Kv = U({}, He, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Hi = Xl(Kv), Jv = U({}, Ma, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: af
  }), Wv = Xl(Jv), $v = U({}, gu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), kv = Xl($v), Fv = U({}, He, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Iv = Xl(Fv), Pv = U({}, gu, {
    newState: 0,
    oldState: 0
  }), lo = Xl(Pv), to = [9, 13, 27, 32], ef = Mt && "CompositionEvent" in window, Ua = null;
  Mt && "documentMode" in document && (Ua = document.documentMode);
  var uo = Mt && "TextEvent" in window && !Ua, xi = Mt && (!ef || Ua && 8 < Ua && 11 >= Ua), qi = " ", Yi = !1;
  function Bi(l, t) {
    switch (l) {
      case "keyup":
        return to.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ji(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Vu = !1;
  function ao(l, t) {
    switch (l) {
      case "compositionend":
        return ji(t);
      case "keypress":
        return t.which !== 32 ? null : (Yi = !0, qi);
      case "textInput":
        return l = t.data, l === qi && Yi ? null : l;
      default:
        return null;
    }
  }
  function eo(l, t) {
    if (Vu)
      return l === "compositionend" || !ef && Bi(l, t) ? (l = Ui(), Ue = Pn = Vt = null, Vu = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return xi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var no = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Gi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!no[l.type] : t === "textarea";
  }
  function Xi(l, t, u, a) {
    Zu ? wu ? wu.push(a) : wu = [a] : Zu = a, t = bn(t, "onChange"), 0 < t.length && (u = new pe(
      "onChange",
      "change",
      null,
      u,
      a
    ), l.push({ event: u, listeners: t }));
  }
  var Ra = null, Na = null;
  function fo(l) {
    bd(l, 0);
  }
  function xe(l) {
    var t = za(l);
    if (Ti(t)) return l;
  }
  function Qi(l, t) {
    if (l === "change") return t;
  }
  var Ci = !1;
  if (Mt) {
    var nf;
    if (Mt) {
      var ff = "oninput" in document;
      if (!ff) {
        var Zi = document.createElement("div");
        Zi.setAttribute("oninput", "return;"), ff = typeof Zi.oninput == "function";
      }
      nf = ff;
    } else nf = !1;
    Ci = nf && (!document.documentMode || 9 < document.documentMode);
  }
  function wi() {
    Ra && (Ra.detachEvent("onpropertychange", Vi), Na = Ra = null);
  }
  function Vi(l) {
    if (l.propertyName === "value" && xe(Na)) {
      var t = [];
      Xi(
        t,
        Na,
        l,
        kn(l)
      ), Di(fo, t);
    }
  }
  function co(l, t, u) {
    l === "focusin" ? (wi(), Ra = t, Na = u, Ra.attachEvent("onpropertychange", Vi)) : l === "focusout" && wi();
  }
  function io(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return xe(Na);
  }
  function so(l, t) {
    if (l === "click") return xe(t);
  }
  function vo(l, t) {
    if (l === "input" || l === "change")
      return xe(t);
  }
  function oo(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var $l = typeof Object.is == "function" ? Object.is : oo;
  function pa(l, t) {
    if ($l(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!Yn.call(t, e) || !$l(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function Li(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Ki(l, t) {
    var u = Li(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (a = l + u.textContent.length, l <= t && a >= t)
          return { node: u, offset: t - l };
        l = a;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Li(u);
    }
  }
  function Ji(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ji(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Wi(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Me(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = Me(l.document);
    }
    return t;
  }
  function cf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var yo = Mt && "documentMode" in document && 11 >= document.documentMode, Lu = null, sf = null, Ha = null, df = !1;
  function $i(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    df || Lu == null || Lu !== Me(a) || (a = Lu, "selectionStart" in a && cf(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Ha && pa(Ha, a) || (Ha = a, a = bn(sf, "onSelect"), 0 < a.length && (t = new pe(
      "onSelect",
      "select",
      null,
      t,
      u
    ), l.push({ event: t, listeners: a }), t.target = Lu)));
  }
  function Su(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var Ku = {
    animationend: Su("Animation", "AnimationEnd"),
    animationiteration: Su("Animation", "AnimationIteration"),
    animationstart: Su("Animation", "AnimationStart"),
    transitionrun: Su("Transition", "TransitionRun"),
    transitionstart: Su("Transition", "TransitionStart"),
    transitioncancel: Su("Transition", "TransitionCancel"),
    transitionend: Su("Transition", "TransitionEnd")
  }, vf = {}, ki = {};
  Mt && (ki = document.createElement("div").style, "AnimationEvent" in window || (delete Ku.animationend.animation, delete Ku.animationiteration.animation, delete Ku.animationstart.animation), "TransitionEvent" in window || delete Ku.transitionend.transition);
  function bu(l) {
    if (vf[l]) return vf[l];
    if (!Ku[l]) return l;
    var t = Ku[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in ki)
        return vf[l] = t[u];
    return l;
  }
  var Fi = bu("animationend"), Ii = bu("animationiteration"), Pi = bu("animationstart"), ho = bu("transitionrun"), ro = bu("transitionstart"), mo = bu("transitioncancel"), ls = bu("transitionend"), ts = /* @__PURE__ */ new Map(), of = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  of.push("scrollEnd");
  function yt(l, t) {
    ts.set(l, t), mu(t, [l]);
  }
  var us = /* @__PURE__ */ new WeakMap();
  function et(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = us.get(l);
      return u !== void 0 ? u : (t = {
        value: l,
        source: t,
        stack: Si(t)
      }, us.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: Si(t)
    };
  }
  var nt = [], Ju = 0, yf = 0;
  function qe() {
    for (var l = Ju, t = yf = Ju = 0; t < l; ) {
      var u = nt[t];
      nt[t++] = null;
      var a = nt[t];
      nt[t++] = null;
      var e = nt[t];
      nt[t++] = null;
      var n = nt[t];
      if (nt[t++] = null, a !== null && e !== null) {
        var f = a.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), a.pending = e;
      }
      n !== 0 && as(u, e, n);
    }
  }
  function Ye(l, t, u, a) {
    nt[Ju++] = l, nt[Ju++] = t, nt[Ju++] = u, nt[Ju++] = a, yf |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function hf(l, t, u, a) {
    return Ye(l, t, u, a), Be(l);
  }
  function Wu(l, t) {
    return Ye(l, null, null, t), Be(l);
  }
  function as(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - Wl(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function Be(l) {
    if (50 < ae)
      throw ae = 0, Tc = null, Error(h(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var $u = {};
  function go(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function kl(l, t, u, a) {
    return new go(l, t, u, a);
  }
  function rf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Dt(l, t) {
    var u = l.alternate;
    return u === null ? (u = kl(
      l.tag,
      t,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function es(l, t) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function je(l, t, u, a, e, n) {
    var f = 0;
    if (a = l, typeof l == "function") rf(l) && (f = 1);
    else if (typeof l == "string")
      f = by(
        l,
        u,
        H.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case mt:
          return l = kl(31, u, t, e), l.elementType = mt, l.lanes = n, l;
        case Yl:
          return Tu(u.children, e, n, t);
        case vt:
          f = 8, e |= 24;
          break;
        case jl:
          return l = kl(12, u, t, e | 2), l.elementType = jl, l.lanes = n, l;
        case J:
          return l = kl(13, u, t, e), l.elementType = J, l.lanes = n, l;
        case wl:
          return l = kl(19, u, t, e), l.elementType = wl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case ou:
              case Ul:
                f = 10;
                break l;
              case zt:
                f = 9;
                break l;
              case ot:
                f = 11;
                break l;
              case Vl:
                f = 14;
                break l;
              case Ll:
                f = 16, a = null;
                break l;
            }
          f = 29, u = Error(
            h(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = kl(f, u, t, e), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function Tu(l, t, u, a) {
    return l = kl(7, l, a, t), l.lanes = u, l;
  }
  function mf(l, t, u) {
    return l = kl(6, l, null, t), l.lanes = u, l;
  }
  function gf(l, t, u) {
    return t = kl(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = u, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var ku = [], Fu = 0, Ge = null, Xe = 0, ft = [], ct = 0, Eu = null, Ut = 1, Rt = "";
  function Au(l, t) {
    ku[Fu++] = Xe, ku[Fu++] = Ge, Ge = l, Xe = t;
  }
  function ns(l, t, u) {
    ft[ct++] = Ut, ft[ct++] = Rt, ft[ct++] = Eu, Eu = l;
    var a = Ut;
    l = Rt;
    var e = 32 - Wl(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - Wl(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e -= f, Ut = 1 << 32 - Wl(t) + e | u << e | a, Rt = n + l;
    } else
      Ut = 1 << n | u << e | a, Rt = l;
  }
  function Sf(l) {
    l.return !== null && (Au(l, 1), ns(l, 1, 0));
  }
  function bf(l) {
    for (; l === Ge; )
      Ge = ku[--Fu], ku[Fu] = null, Xe = ku[--Fu], ku[Fu] = null;
    for (; l === Eu; )
      Eu = ft[--ct], ft[ct] = null, Rt = ft[--ct], ft[ct] = null, Ut = ft[--ct], ft[ct] = null;
  }
  var Bl = null, ol = null, k = !1, zu = null, St = !1, Tf = Error(h(519));
  function _u(l) {
    var t = Error(h(418, ""));
    throw Ya(et(t, l)), Tf;
  }
  function fs(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[pl] = l, t[Gl] = a, u) {
      case "dialog":
        V("cancel", t), V("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        V("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ne.length; u++)
          V(ne[u], t);
        break;
      case "source":
        V("error", t);
        break;
      case "img":
      case "image":
      case "link":
        V("error", t), V("load", t);
        break;
      case "details":
        V("toggle", t);
        break;
      case "input":
        V("invalid", t), Ei(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        ), Oe(t);
        break;
      case "select":
        V("invalid", t);
        break;
      case "textarea":
        V("invalid", t), zi(t, a.value, a.defaultValue, a.children), Oe(t);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || zd(t.textContent, u) ? (a.popover != null && (V("beforetoggle", t), V("toggle", t)), a.onScroll != null && V("scroll", t), a.onScrollEnd != null && V("scrollend", t), a.onClick != null && (t.onclick = Tn), t = !0) : t = !1, t || _u(l);
  }
  function cs(l) {
    for (Bl = l.return; Bl; )
      switch (Bl.tag) {
        case 5:
        case 13:
          St = !1;
          return;
        case 27:
        case 3:
          St = !0;
          return;
        default:
          Bl = Bl.return;
      }
  }
  function xa(l) {
    if (l !== Bl) return !1;
    if (!k) return cs(l), k = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Bc(l.type, l.memoizedProps)), u = !u), u && ol && _u(l), cs(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (t === 0) {
                ol = rt(l.nextSibling);
                break l;
              }
              t--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || t++;
          l = l.nextSibling;
        }
        ol = null;
      }
    } else
      t === 27 ? (t = ol, fu(l.type) ? (l = Qc, Qc = null, ol = l) : ol = t) : ol = Bl ? rt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function qa() {
    ol = Bl = null, k = !1;
  }
  function is() {
    var l = zu;
    return l !== null && (Zl === null ? Zl = l : Zl.push.apply(
      Zl,
      l
    ), zu = null), l;
  }
  function Ya(l) {
    zu === null ? zu = [l] : zu.push(l);
  }
  var Ef = A(null), Ou = null, Nt = null;
  function Lt(l, t, u) {
    _(Ef, t._currentValue), t._currentValue = u;
  }
  function pt(l) {
    l._currentValue = Ef.current, M(Ef);
  }
  function Af(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function zf(l, t, u, a) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (c.context === t[i]) {
              n.lanes |= u, c = n.alternate, c !== null && (c.lanes |= u), Af(
                n.return,
                u,
                l
              ), a || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(h(341));
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), Af(f, u, l), f = null;
      } else f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (e = f.sibling, e !== null) {
            e.return = f.return, f = e;
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function Ba(l, t, u, a) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(h(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e.type;
          $l(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === Kl.current) {
        if (f = e.alternate, f === null) throw Error(h(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(ve) : l = [ve]);
      }
      e = e.return;
    }
    l !== null && zf(
      t,
      l,
      u,
      a
    ), t.flags |= 262144;
  }
  function Qe(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!$l(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Mu(l) {
    Ou = l, Nt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Hl(l) {
    return ss(Ou, l);
  }
  function Ce(l, t) {
    return Ou === null && Mu(l), ss(l, t);
  }
  function ss(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, Nt === null) {
      if (l === null) throw Error(h(308));
      Nt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Nt = Nt.next = t;
    return u;
  }
  var So = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(u, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, bo = z.unstable_scheduleCallback, To = z.unstable_NormalPriority, bl = {
    $$typeof: Ul,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function _f() {
    return {
      controller: new So(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ja(l) {
    l.refCount--, l.refCount === 0 && bo(To, function() {
      l.controller.abort();
    });
  }
  var Ga = null, Of = 0, Iu = 0, Pu = null;
  function Eo(l, t) {
    if (Ga === null) {
      var u = Ga = [];
      Of = 0, Iu = Dc(), Pu = {
        status: "pending",
        value: void 0,
        then: function(a) {
          u.push(a);
        }
      };
    }
    return Of++, t.then(ds, ds), t;
  }
  function ds() {
    if (--Of === 0 && Ga !== null) {
      Pu !== null && (Pu.status = "fulfilled");
      var l = Ga;
      Ga = null, Iu = 0, Pu = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Ao(l, t) {
    var u = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        u.push(e);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var e = 0; e < u.length; e++) (0, u[e])(t);
      },
      function(e) {
        for (a.status = "rejected", a.reason = e, e = 0; e < u.length; e++)
          (0, u[e])(void 0);
      }
    ), a;
  }
  var vs = S.S;
  S.S = function(l, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && Eo(l, t), vs !== null && vs(l, t);
  };
  var Du = A(null);
  function Mf() {
    var l = Du.current;
    return l !== null ? l : fl.pooledCache;
  }
  function Ze(l, t) {
    t === null ? _(Du, Du.current) : _(Du, t.pool);
  }
  function os() {
    var l = Mf();
    return l === null ? null : { parent: bl._currentValue, pool: l };
  }
  var Xa = Error(h(460)), ys = Error(h(474)), we = Error(h(542)), Df = { then: function() {
  } };
  function hs(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Ve() {
  }
  function rs(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Ve, Ve), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, gs(l), l;
      default:
        if (typeof t.status == "string") t.then(Ve, Ve);
        else {
          if (l = fl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(h(482));
          l = t, l.status = "pending", l.then(
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, gs(l), l;
        }
        throw Qa = t, Xa;
    }
  }
  var Qa = null;
  function ms() {
    if (Qa === null) throw Error(h(459));
    var l = Qa;
    return Qa = null, l;
  }
  function gs(l) {
    if (l === Xa || l === we)
      throw Error(h(483));
  }
  var Kt = !1;
  function Uf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Rf(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Jt(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Wt(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (F & 2) !== 0) {
      var e = a.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = Be(l), as(l, null, u), t;
    }
    return Ye(l, a, t, u), Be(l);
  }
  function Ca(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, di(l, u);
    }
  }
  function Nf(l, t) {
    var u = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, u === a)) {
      var e = null, n = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var f = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, u = u.next;
        } while (u !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      u = {
        baseState: a.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = t : l.next = t, u.lastBaseUpdate = t;
  }
  var pf = !1;
  function Za() {
    if (pf) {
      var l = Pu;
      if (l !== null) throw l;
    }
  }
  function wa(l, t, u, a) {
    pf = !1;
    var e = l.updateQueue;
    Kt = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, y = i.next;
      i.next = null, f === null ? n = y : f.next = y, f = i;
      var g = l.alternate;
      g !== null && (g = g.updateQueue, c = g.lastBaseUpdate, c !== f && (c === null ? g.firstBaseUpdate = y : c.next = y, g.lastBaseUpdate = i));
    }
    if (n !== null) {
      var T = e.baseState;
      f = 0, g = y = i = null, c = n;
      do {
        var r = c.lane & -536870913, m = r !== c.lane;
        if (m ? (K & r) === r : (a & r) === r) {
          r !== 0 && r === Iu && (pf = !0), g !== null && (g = g.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var j = l, x = c;
            r = t;
            var ul = u;
            switch (x.tag) {
              case 1:
                if (j = x.payload, typeof j == "function") {
                  T = j.call(ul, T, r);
                  break l;
                }
                T = j;
                break l;
              case 3:
                j.flags = j.flags & -65537 | 128;
              case 0:
                if (j = x.payload, r = typeof j == "function" ? j.call(ul, T, r) : j, r == null) break l;
                T = U({}, T, r);
                break l;
              case 2:
                Kt = !0;
            }
          }
          r = c.callback, r !== null && (l.flags |= 64, m && (l.flags |= 8192), m = e.callbacks, m === null ? e.callbacks = [r] : m.push(r));
        } else
          m = {
            lane: r,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, g === null ? (y = g = m, i = T) : g = g.next = m, f |= r;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          m = c, c = m.next, m.next = null, e.lastBaseUpdate = m, e.shared.pending = null;
        }
      } while (!0);
      g === null && (i = T), e.baseState = i, e.firstBaseUpdate = y, e.lastBaseUpdate = g, n === null && (e.shared.lanes = 0), uu |= f, l.lanes = f, l.memoizedState = T;
    }
  }
  function Ss(l, t) {
    if (typeof l != "function")
      throw Error(h(191, l));
    l.call(t);
  }
  function bs(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Ss(u[l], t);
  }
  var la = A(null), Le = A(0);
  function Ts(l, t) {
    l = Gt, _(Le, l), _(la, t), Gt = l | t.baseLanes;
  }
  function Hf() {
    _(Le, Gt), _(la, la.current);
  }
  function xf() {
    Gt = Le.current, M(la), M(Le);
  }
  var $t = 0, C = null, ll = null, gl = null, Ke = !1, ta = !1, Uu = !1, Je = 0, Va = 0, ua = null, zo = 0;
  function hl() {
    throw Error(h(321));
  }
  function qf(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!$l(l[u], t[u])) return !1;
    return !0;
  }
  function Yf(l, t, u, a, e, n) {
    return $t = n, C = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, S.H = l === null || l.memoizedState === null ? a0 : e0, Uu = !1, n = u(a, e), Uu = !1, ta && (n = As(
      t,
      u,
      a,
      e
    )), Es(l), n;
  }
  function Es(l) {
    S.H = Pe;
    var t = ll !== null && ll.next !== null;
    if ($t = 0, gl = ll = C = null, Ke = !1, Va = 0, ua = null, t) throw Error(h(300));
    l === null || Al || (l = l.dependencies, l !== null && Qe(l) && (Al = !0));
  }
  function As(l, t, u, a) {
    C = l;
    var e = 0;
    do {
      if (ta && (ua = null), Va = 0, ta = !1, 25 <= e) throw Error(h(301));
      if (e += 1, gl = ll = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      S.H = No, n = t(u, a);
    } while (ta);
    return n;
  }
  function _o() {
    var l = S.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? La(t) : t, l = l.useState()[0], (ll !== null ? ll.memoizedState : null) !== l && (C.flags |= 1024), t;
  }
  function Bf() {
    var l = Je !== 0;
    return Je = 0, l;
  }
  function jf(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function Gf(l) {
    if (Ke) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Ke = !1;
    }
    $t = 0, gl = ll = C = null, ta = !1, Va = Je = 0, ua = null;
  }
  function Ql() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return gl === null ? C.memoizedState = gl = l : gl = gl.next = l, gl;
  }
  function Sl() {
    if (ll === null) {
      var l = C.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ll.next;
    var t = gl === null ? C.memoizedState : gl.next;
    if (t !== null)
      gl = t, ll = l;
    else {
      if (l === null)
        throw C.alternate === null ? Error(h(467)) : Error(h(310));
      ll = l, l = {
        memoizedState: ll.memoizedState,
        baseState: ll.baseState,
        baseQueue: ll.baseQueue,
        queue: ll.queue,
        next: null
      }, gl === null ? C.memoizedState = gl = l : gl = gl.next = l;
    }
    return gl;
  }
  function Xf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function La(l) {
    var t = Va;
    return Va += 1, ua === null && (ua = []), l = rs(ua, l, t), t = C, (gl === null ? t.memoizedState : gl.next) === null && (t = t.alternate, S.H = t === null || t.memoizedState === null ? a0 : e0), l;
  }
  function We(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return La(l);
      if (l.$$typeof === Ul) return Hl(l);
    }
    throw Error(h(438, String(l)));
  }
  function Qf(l) {
    var t = null, u = C.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = C.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = Xf(), C.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++)
        u[a] = xu;
    return t.index++, u;
  }
  function Ht(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function $e(l) {
    var t = Sl();
    return Cf(t, ll, l);
  }
  function Cf(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(h(311));
    a.lastRenderedReducer = u;
    var e = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, a.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var c = f = null, i = null, y = t, g = !1;
      do {
        var T = y.lane & -536870913;
        if (T !== y.lane ? (K & T) === T : ($t & T) === T) {
          var r = y.revertLane;
          if (r === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }), T === Iu && (g = !0);
          else if (($t & r) === r) {
            y = y.next, r === Iu && (g = !0);
            continue;
          } else
            T = {
              lane: 0,
              revertLane: y.revertLane,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }, i === null ? (c = i = T, f = n) : i = i.next = T, C.lanes |= r, uu |= r;
          T = y.action, Uu && u(n, T), n = y.hasEagerState ? y.eagerState : u(n, T);
        } else
          r = {
            lane: T,
            revertLane: y.revertLane,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }, i === null ? (c = i = r, f = n) : i = i.next = r, C.lanes |= T, uu |= T;
        y = y.next;
      } while (y !== null && y !== t);
      if (i === null ? f = n : i.next = c, !$l(n, l.memoizedState) && (Al = !0, g && (u = Pu, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Zf(l) {
    var t = Sl(), u = t.queue;
    if (u === null) throw Error(h(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, e = u.pending, n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      $l(n, t.memoizedState) || (Al = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function zs(l, t, u) {
    var a = C, e = Sl(), n = k;
    if (n) {
      if (u === void 0) throw Error(h(407));
      u = u();
    } else u = t();
    var f = !$l(
      (ll || e).memoizedState,
      u
    );
    f && (e.memoizedState = u, Al = !0), e = e.queue;
    var c = Ms.bind(null, a, e, l);
    if (Ka(2048, 8, c, [l]), e.getSnapshot !== t || f || gl !== null && gl.memoizedState.tag & 1) {
      if (a.flags |= 2048, aa(
        9,
        ke(),
        Os.bind(
          null,
          a,
          e,
          u,
          t
        ),
        null
      ), fl === null) throw Error(h(349));
      n || ($t & 124) !== 0 || _s(a, t, u);
    }
    return u;
  }
  function _s(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = C.updateQueue, t === null ? (t = Xf(), C.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function Os(l, t, u, a) {
    t.value = u, t.getSnapshot = a, Ds(t) && Us(l);
  }
  function Ms(l, t, u) {
    return u(function() {
      Ds(t) && Us(l);
    });
  }
  function Ds(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !$l(l, u);
    } catch {
      return !0;
    }
  }
  function Us(l) {
    var t = Wu(l, 2);
    t !== null && tt(t, l, 2);
  }
  function wf(l) {
    var t = Ql();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Uu) {
        Zt(!0);
        try {
          u();
        } finally {
          Zt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ht,
      lastRenderedState: l
    }, t;
  }
  function Rs(l, t, u, a) {
    return l.baseState = u, Cf(
      l,
      ll,
      typeof a == "function" ? a : Ht
    );
  }
  function Oo(l, t, u, a, e) {
    if (Ie(l)) throw Error(h(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          n.listeners.push(f);
        }
      };
      S.T !== null ? u(!0) : n.isTransition = !1, a(n), u = t.pending, u === null ? (n.next = t.pending = n, Ns(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function Ns(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = S.T, f = {};
      S.T = f;
      try {
        var c = u(e, a), i = S.S;
        i !== null && i(f, c), ps(l, t, c);
      } catch (y) {
        Vf(l, t, y);
      } finally {
        S.T = n;
      }
    } else
      try {
        n = u(e, a), ps(l, t, n);
      } catch (y) {
        Vf(l, t, y);
      }
  }
  function ps(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(a) {
        Hs(l, t, a);
      },
      function(a) {
        return Vf(l, t, a);
      }
    ) : Hs(l, t, u);
  }
  function Hs(l, t, u) {
    t.status = "fulfilled", t.value = u, xs(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, Ns(l, u)));
  }
  function Vf(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, xs(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function xs(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function qs(l, t) {
    return t;
  }
  function Ys(l, t) {
    if (k) {
      var u = fl.formState;
      if (u !== null) {
        l: {
          var a = C;
          if (k) {
            if (ol) {
              t: {
                for (var e = ol, n = St; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = rt(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                ol = rt(
                  e.nextSibling
                ), a = e.data === "F!";
                break l;
              }
            }
            _u(a);
          }
          a = !1;
        }
        a && (t = u[0]);
      }
    }
    return u = Ql(), u.memoizedState = u.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qs,
      lastRenderedState: t
    }, u.queue = a, u = l0.bind(
      null,
      C,
      a
    ), a.dispatch = u, a = wf(!1), n = $f.bind(
      null,
      C,
      !1,
      a.queue
    ), a = Ql(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = e, u = Oo.bind(
      null,
      C,
      e,
      n,
      u
    ), e.dispatch = u, a.memoizedState = l, [t, u, !1];
  }
  function Bs(l) {
    var t = Sl();
    return js(t, ll, l);
  }
  function js(l, t, u) {
    if (t = Cf(
      l,
      t,
      qs
    )[0], l = $e(Ht)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = La(t);
      } catch (f) {
        throw f === Xa ? we : f;
      }
    else a = t;
    t = Sl();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (C.flags |= 2048, aa(
      9,
      ke(),
      Mo.bind(null, e, u),
      null
    )), [a, n, l];
  }
  function Mo(l, t) {
    l.action = t;
  }
  function Gs(l) {
    var t = Sl(), u = ll;
    if (u !== null)
      return js(t, u, l);
    Sl(), t = t.memoizedState, u = Sl();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, !1];
  }
  function aa(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = C.updateQueue, t === null && (t = Xf(), C.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function ke() {
    return { destroy: void 0, resource: void 0 };
  }
  function Xs() {
    return Sl().memoizedState;
  }
  function Fe(l, t, u, a) {
    var e = Ql();
    a = a === void 0 ? null : a, C.flags |= l, e.memoizedState = aa(
      1 | t,
      ke(),
      u,
      a
    );
  }
  function Ka(l, t, u, a) {
    var e = Sl();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    ll !== null && a !== null && qf(a, ll.memoizedState.deps) ? e.memoizedState = aa(t, n, u, a) : (C.flags |= l, e.memoizedState = aa(
      1 | t,
      n,
      u,
      a
    ));
  }
  function Qs(l, t) {
    Fe(8390656, 8, l, t);
  }
  function Cs(l, t) {
    Ka(2048, 8, l, t);
  }
  function Zs(l, t) {
    return Ka(4, 2, l, t);
  }
  function ws(l, t) {
    return Ka(4, 4, l, t);
  }
  function Vs(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function() {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function Ls(l, t, u) {
    u = u != null ? u.concat([l]) : null, Ka(4, 4, Vs.bind(null, t, l), u);
  }
  function Lf() {
  }
  function Ks(l, t) {
    var u = Sl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && qf(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function Js(l, t) {
    var u = Sl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && qf(t, a[1]))
      return a[0];
    if (a = l(), Uu) {
      Zt(!0);
      try {
        l();
      } finally {
        Zt(!1);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function Kf(l, t, u) {
    return u === void 0 || ($t & 1073741824) !== 0 ? l.memoizedState = t : (l.memoizedState = u, l = k0(), C.lanes |= l, uu |= l, u);
  }
  function Ws(l, t, u, a) {
    return $l(u, t) ? u : la.current !== null ? (l = Kf(l, u, a), $l(l, t) || (Al = !0), l) : ($t & 42) === 0 ? (Al = !0, l.memoizedState = u) : (l = k0(), C.lanes |= l, uu |= l, t);
  }
  function $s(l, t, u, a, e) {
    var n = O.p;
    O.p = n !== 0 && 8 > n ? n : 8;
    var f = S.T, c = {};
    S.T = c, $f(l, !1, t, u);
    try {
      var i = e(), y = S.S;
      if (y !== null && y(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var g = Ao(
          i,
          a
        );
        Ja(
          l,
          t,
          g,
          lt(l)
        );
      } else
        Ja(
          l,
          t,
          a,
          lt(l)
        );
    } catch (T) {
      Ja(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: T },
        lt()
      );
    } finally {
      O.p = n, S.T = f;
    }
  }
  function Do() {
  }
  function Jf(l, t, u, a) {
    if (l.tag !== 5) throw Error(h(476));
    var e = ks(l).queue;
    $s(
      l,
      e,
      t,
      Y,
      u === null ? Do : function() {
        return Fs(l), u(a);
      }
    );
  }
  function ks(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Y,
      baseState: Y,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ht,
        lastRenderedState: Y
      },
      next: null
    };
    var u = {};
    return t.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ht,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function Fs(l) {
    var t = ks(l).next.queue;
    Ja(l, t, {}, lt());
  }
  function Wf() {
    return Hl(ve);
  }
  function Is() {
    return Sl().memoizedState;
  }
  function Ps() {
    return Sl().memoizedState;
  }
  function Uo(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = lt();
          l = Jt(u);
          var a = Wt(t, l, u);
          a !== null && (tt(a, t, u), Ca(a, t, u)), t = { cache: _f() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Ro(l, t, u) {
    var a = lt();
    u = {
      lane: a,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ie(l) ? t0(t, u) : (u = hf(l, t, u, a), u !== null && (tt(u, l, a), u0(u, t, a)));
  }
  function l0(l, t, u) {
    var a = lt();
    Ja(l, t, u, a);
  }
  function Ja(l, t, u, a) {
    var e = {
      lane: a,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ie(l)) t0(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, c = n(f, u);
          if (e.hasEagerState = !0, e.eagerState = c, $l(c, f))
            return Ye(l, t, e, 0), fl === null && qe(), !1;
        } catch {
        } finally {
        }
      if (u = hf(l, t, e, a), u !== null)
        return tt(u, l, a), u0(u, t, a), !0;
    }
    return !1;
  }
  function $f(l, t, u, a) {
    if (a = {
      lane: 2,
      revertLane: Dc(),
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ie(l)) {
      if (t) throw Error(h(479));
    } else
      t = hf(
        l,
        u,
        a,
        2
      ), t !== null && tt(t, l, 2);
  }
  function Ie(l) {
    var t = l.alternate;
    return l === C || t !== null && t === C;
  }
  function t0(l, t) {
    ta = Ke = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function u0(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, di(l, u);
    }
  }
  var Pe = {
    readContext: Hl,
    use: We,
    useCallback: hl,
    useContext: hl,
    useEffect: hl,
    useImperativeHandle: hl,
    useLayoutEffect: hl,
    useInsertionEffect: hl,
    useMemo: hl,
    useReducer: hl,
    useRef: hl,
    useState: hl,
    useDebugValue: hl,
    useDeferredValue: hl,
    useTransition: hl,
    useSyncExternalStore: hl,
    useId: hl,
    useHostTransitionStatus: hl,
    useFormState: hl,
    useActionState: hl,
    useOptimistic: hl,
    useMemoCache: hl,
    useCacheRefresh: hl
  }, a0 = {
    readContext: Hl,
    use: We,
    useCallback: function(l, t) {
      return Ql().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Hl,
    useEffect: Qs,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, Fe(
        4194308,
        4,
        Vs.bind(null, t, l),
        u
      );
    },
    useLayoutEffect: function(l, t) {
      return Fe(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      Fe(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var u = Ql();
      t = t === void 0 ? null : t;
      var a = l();
      if (Uu) {
        Zt(!0);
        try {
          l();
        } finally {
          Zt(!1);
        }
      }
      return u.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, u) {
      var a = Ql();
      if (u !== void 0) {
        var e = u(t);
        if (Uu) {
          Zt(!0);
          try {
            u(t);
          } finally {
            Zt(!1);
          }
        }
      } else e = t;
      return a.memoizedState = a.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, a.queue = l, l = l.dispatch = Ro.bind(
        null,
        C,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = Ql();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = wf(l);
      var t = l.queue, u = l0.bind(null, C, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Lf,
    useDeferredValue: function(l, t) {
      var u = Ql();
      return Kf(u, l, t);
    },
    useTransition: function() {
      var l = wf(!1);
      return l = $s.bind(
        null,
        C,
        l.queue,
        !0,
        !1
      ), Ql().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = C, e = Ql();
      if (k) {
        if (u === void 0)
          throw Error(h(407));
        u = u();
      } else {
        if (u = t(), fl === null)
          throw Error(h(349));
        (K & 124) !== 0 || _s(a, t, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return e.queue = n, Qs(Ms.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, aa(
        9,
        ke(),
        Os.bind(
          null,
          a,
          n,
          u,
          t
        ),
        null
      ), u;
    },
    useId: function() {
      var l = Ql(), t = fl.identifierPrefix;
      if (k) {
        var u = Rt, a = Ut;
        u = (a & ~(1 << 32 - Wl(a) - 1)).toString(32) + u, t = "«" + t + "R" + u, u = Je++, 0 < u && (t += "H" + u.toString(32)), t += "»";
      } else
        u = zo++, t = "«" + t + "r" + u.toString(32) + "»";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: Wf,
    useFormState: Ys,
    useActionState: Ys,
    useOptimistic: function(l) {
      var t = Ql();
      t.memoizedState = t.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = u, t = $f.bind(
        null,
        C,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: Qf,
    useCacheRefresh: function() {
      return Ql().memoizedState = Uo.bind(
        null,
        C
      );
    }
  }, e0 = {
    readContext: Hl,
    use: We,
    useCallback: Ks,
    useContext: Hl,
    useEffect: Cs,
    useImperativeHandle: Ls,
    useInsertionEffect: Zs,
    useLayoutEffect: ws,
    useMemo: Js,
    useReducer: $e,
    useRef: Xs,
    useState: function() {
      return $e(Ht);
    },
    useDebugValue: Lf,
    useDeferredValue: function(l, t) {
      var u = Sl();
      return Ws(
        u,
        ll.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = $e(Ht)[0], t = Sl().memoizedState;
      return [
        typeof l == "boolean" ? l : La(l),
        t
      ];
    },
    useSyncExternalStore: zs,
    useId: Is,
    useHostTransitionStatus: Wf,
    useFormState: Bs,
    useActionState: Bs,
    useOptimistic: function(l, t) {
      var u = Sl();
      return Rs(u, ll, l, t);
    },
    useMemoCache: Qf,
    useCacheRefresh: Ps
  }, No = {
    readContext: Hl,
    use: We,
    useCallback: Ks,
    useContext: Hl,
    useEffect: Cs,
    useImperativeHandle: Ls,
    useInsertionEffect: Zs,
    useLayoutEffect: ws,
    useMemo: Js,
    useReducer: Zf,
    useRef: Xs,
    useState: function() {
      return Zf(Ht);
    },
    useDebugValue: Lf,
    useDeferredValue: function(l, t) {
      var u = Sl();
      return ll === null ? Kf(u, l, t) : Ws(
        u,
        ll.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Zf(Ht)[0], t = Sl().memoizedState;
      return [
        typeof l == "boolean" ? l : La(l),
        t
      ];
    },
    useSyncExternalStore: zs,
    useId: Is,
    useHostTransitionStatus: Wf,
    useFormState: Gs,
    useActionState: Gs,
    useOptimistic: function(l, t) {
      var u = Sl();
      return ll !== null ? Rs(u, ll, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Qf,
    useCacheRefresh: Ps
  }, ea = null, Wa = 0;
  function ln(l) {
    var t = Wa;
    return Wa += 1, ea === null && (ea = []), rs(ea, l, t);
  }
  function $a(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function tn(l, t) {
    throw t.$$typeof === cl ? Error(h(525)) : (l = Object.prototype.toString.call(t), Error(
      h(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function n0(l) {
    var t = l._init;
    return t(l._payload);
  }
  function f0(l) {
    function t(v, d) {
      if (l) {
        var o = v.deletions;
        o === null ? (v.deletions = [d], v.flags |= 16) : o.push(d);
      }
    }
    function u(v, d) {
      if (!l) return null;
      for (; d !== null; )
        t(v, d), d = d.sibling;
      return null;
    }
    function a(v) {
      for (var d = /* @__PURE__ */ new Map(); v !== null; )
        v.key !== null ? d.set(v.key, v) : d.set(v.index, v), v = v.sibling;
      return d;
    }
    function e(v, d) {
      return v = Dt(v, d), v.index = 0, v.sibling = null, v;
    }
    function n(v, d, o) {
      return v.index = o, l ? (o = v.alternate, o !== null ? (o = o.index, o < d ? (v.flags |= 67108866, d) : o) : (v.flags |= 67108866, d)) : (v.flags |= 1048576, d);
    }
    function f(v) {
      return l && v.alternate === null && (v.flags |= 67108866), v;
    }
    function c(v, d, o, b) {
      return d === null || d.tag !== 6 ? (d = mf(o, v.mode, b), d.return = v, d) : (d = e(d, o), d.return = v, d);
    }
    function i(v, d, o, b) {
      var D = o.type;
      return D === Yl ? g(
        v,
        d,
        o.props.children,
        b,
        o.key
      ) : d !== null && (d.elementType === D || typeof D == "object" && D !== null && D.$$typeof === Ll && n0(D) === d.type) ? (d = e(d, o.props), $a(d, o), d.return = v, d) : (d = je(
        o.type,
        o.key,
        o.props,
        null,
        v.mode,
        b
      ), $a(d, o), d.return = v, d);
    }
    function y(v, d, o, b) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== o.containerInfo || d.stateNode.implementation !== o.implementation ? (d = gf(o, v.mode, b), d.return = v, d) : (d = e(d, o.children || []), d.return = v, d);
    }
    function g(v, d, o, b, D) {
      return d === null || d.tag !== 7 ? (d = Tu(
        o,
        v.mode,
        b,
        D
      ), d.return = v, d) : (d = e(d, o), d.return = v, d);
    }
    function T(v, d, o) {
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
        return d = mf(
          "" + d,
          v.mode,
          o
        ), d.return = v, d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case nl:
            return o = je(
              d.type,
              d.key,
              d.props,
              null,
              v.mode,
              o
            ), $a(o, d), o.return = v, o;
          case ql:
            return d = gf(
              d,
              v.mode,
              o
            ), d.return = v, d;
          case Ll:
            var b = d._init;
            return d = b(d._payload), T(v, d, o);
        }
        if (Nl(d) || Rl(d))
          return d = Tu(
            d,
            v.mode,
            o,
            null
          ), d.return = v, d;
        if (typeof d.then == "function")
          return T(v, ln(d), o);
        if (d.$$typeof === Ul)
          return T(
            v,
            Ce(v, d),
            o
          );
        tn(v, d);
      }
      return null;
    }
    function r(v, d, o, b) {
      var D = d !== null ? d.key : null;
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return D !== null ? null : c(v, d, "" + o, b);
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case nl:
            return o.key === D ? i(v, d, o, b) : null;
          case ql:
            return o.key === D ? y(v, d, o, b) : null;
          case Ll:
            return D = o._init, o = D(o._payload), r(v, d, o, b);
        }
        if (Nl(o) || Rl(o))
          return D !== null ? null : g(v, d, o, b, null);
        if (typeof o.then == "function")
          return r(
            v,
            d,
            ln(o),
            b
          );
        if (o.$$typeof === Ul)
          return r(
            v,
            d,
            Ce(v, o),
            b
          );
        tn(v, o);
      }
      return null;
    }
    function m(v, d, o, b, D) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return v = v.get(o) || null, c(d, v, "" + b, D);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case nl:
            return v = v.get(
              b.key === null ? o : b.key
            ) || null, i(d, v, b, D);
          case ql:
            return v = v.get(
              b.key === null ? o : b.key
            ) || null, y(d, v, b, D);
          case Ll:
            var Z = b._init;
            return b = Z(b._payload), m(
              v,
              d,
              o,
              b,
              D
            );
        }
        if (Nl(b) || Rl(b))
          return v = v.get(o) || null, g(d, v, b, D, null);
        if (typeof b.then == "function")
          return m(
            v,
            d,
            o,
            ln(b),
            D
          );
        if (b.$$typeof === Ul)
          return m(
            v,
            d,
            o,
            Ce(d, b),
            D
          );
        tn(d, b);
      }
      return null;
    }
    function j(v, d, o, b) {
      for (var D = null, Z = null, R = d, q = d = 0, _l = null; R !== null && q < o.length; q++) {
        R.index > q ? (_l = R, R = null) : _l = R.sibling;
        var $ = r(
          v,
          R,
          o[q],
          b
        );
        if ($ === null) {
          R === null && (R = _l);
          break;
        }
        l && R && $.alternate === null && t(v, R), d = n($, d, q), Z === null ? D = $ : Z.sibling = $, Z = $, R = _l;
      }
      if (q === o.length)
        return u(v, R), k && Au(v, q), D;
      if (R === null) {
        for (; q < o.length; q++)
          R = T(v, o[q], b), R !== null && (d = n(
            R,
            d,
            q
          ), Z === null ? D = R : Z.sibling = R, Z = R);
        return k && Au(v, q), D;
      }
      for (R = a(R); q < o.length; q++)
        _l = m(
          R,
          v,
          q,
          o[q],
          b
        ), _l !== null && (l && _l.alternate !== null && R.delete(
          _l.key === null ? q : _l.key
        ), d = n(
          _l,
          d,
          q
        ), Z === null ? D = _l : Z.sibling = _l, Z = _l);
      return l && R.forEach(function(vu) {
        return t(v, vu);
      }), k && Au(v, q), D;
    }
    function x(v, d, o, b) {
      if (o == null) throw Error(h(151));
      for (var D = null, Z = null, R = d, q = d = 0, _l = null, $ = o.next(); R !== null && !$.done; q++, $ = o.next()) {
        R.index > q ? (_l = R, R = null) : _l = R.sibling;
        var vu = r(v, R, $.value, b);
        if (vu === null) {
          R === null && (R = _l);
          break;
        }
        l && R && vu.alternate === null && t(v, R), d = n(vu, d, q), Z === null ? D = vu : Z.sibling = vu, Z = vu, R = _l;
      }
      if ($.done)
        return u(v, R), k && Au(v, q), D;
      if (R === null) {
        for (; !$.done; q++, $ = o.next())
          $ = T(v, $.value, b), $ !== null && (d = n($, d, q), Z === null ? D = $ : Z.sibling = $, Z = $);
        return k && Au(v, q), D;
      }
      for (R = a(R); !$.done; q++, $ = o.next())
        $ = m(R, v, q, $.value, b), $ !== null && (l && $.alternate !== null && R.delete($.key === null ? q : $.key), d = n($, d, q), Z === null ? D = $ : Z.sibling = $, Z = $);
      return l && R.forEach(function(py) {
        return t(v, py);
      }), k && Au(v, q), D;
    }
    function ul(v, d, o, b) {
      if (typeof o == "object" && o !== null && o.type === Yl && o.key === null && (o = o.props.children), typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case nl:
            l: {
              for (var D = o.key; d !== null; ) {
                if (d.key === D) {
                  if (D = o.type, D === Yl) {
                    if (d.tag === 7) {
                      u(
                        v,
                        d.sibling
                      ), b = e(
                        d,
                        o.props.children
                      ), b.return = v, v = b;
                      break l;
                    }
                  } else if (d.elementType === D || typeof D == "object" && D !== null && D.$$typeof === Ll && n0(D) === d.type) {
                    u(
                      v,
                      d.sibling
                    ), b = e(d, o.props), $a(b, o), b.return = v, v = b;
                    break l;
                  }
                  u(v, d);
                  break;
                } else t(v, d);
                d = d.sibling;
              }
              o.type === Yl ? (b = Tu(
                o.props.children,
                v.mode,
                b,
                o.key
              ), b.return = v, v = b) : (b = je(
                o.type,
                o.key,
                o.props,
                null,
                v.mode,
                b
              ), $a(b, o), b.return = v, v = b);
            }
            return f(v);
          case ql:
            l: {
              for (D = o.key; d !== null; ) {
                if (d.key === D)
                  if (d.tag === 4 && d.stateNode.containerInfo === o.containerInfo && d.stateNode.implementation === o.implementation) {
                    u(
                      v,
                      d.sibling
                    ), b = e(d, o.children || []), b.return = v, v = b;
                    break l;
                  } else {
                    u(v, d);
                    break;
                  }
                else t(v, d);
                d = d.sibling;
              }
              b = gf(o, v.mode, b), b.return = v, v = b;
            }
            return f(v);
          case Ll:
            return D = o._init, o = D(o._payload), ul(
              v,
              d,
              o,
              b
            );
        }
        if (Nl(o))
          return j(
            v,
            d,
            o,
            b
          );
        if (Rl(o)) {
          if (D = Rl(o), typeof D != "function") throw Error(h(150));
          return o = D.call(o), x(
            v,
            d,
            o,
            b
          );
        }
        if (typeof o.then == "function")
          return ul(
            v,
            d,
            ln(o),
            b
          );
        if (o.$$typeof === Ul)
          return ul(
            v,
            d,
            Ce(v, o),
            b
          );
        tn(v, o);
      }
      return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, d !== null && d.tag === 6 ? (u(v, d.sibling), b = e(d, o), b.return = v, v = b) : (u(v, d), b = mf(o, v.mode, b), b.return = v, v = b), f(v)) : u(v, d);
    }
    return function(v, d, o, b) {
      try {
        Wa = 0;
        var D = ul(
          v,
          d,
          o,
          b
        );
        return ea = null, D;
      } catch (R) {
        if (R === Xa || R === we) throw R;
        var Z = kl(29, R, null, v.mode);
        return Z.lanes = b, Z.return = v, Z;
      } finally {
      }
    };
  }
  var na = f0(!0), c0 = f0(!1), it = A(null), bt = null;
  function kt(l) {
    var t = l.alternate;
    _(Tl, Tl.current & 1), _(it, l), bt === null && (t === null || la.current !== null || t.memoizedState !== null) && (bt = l);
  }
  function i0(l) {
    if (l.tag === 22) {
      if (_(Tl, Tl.current), _(it, l), bt === null) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (bt = l);
      }
    } else Ft();
  }
  function Ft() {
    _(Tl, Tl.current), _(it, it.current);
  }
  function xt(l) {
    M(it), bt === l && (bt = null), M(Tl);
  }
  var Tl = A(0);
  function un(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || Xc(u)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  function kf(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : U({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Ff = {
    enqueueSetState: function(l, t, u) {
      l = l._reactInternals;
      var a = lt(), e = Jt(a);
      e.payload = t, u != null && (e.callback = u), t = Wt(l, e, a), t !== null && (tt(t, l, a), Ca(t, l, a));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var a = lt(), e = Jt(a);
      e.tag = 1, e.payload = t, u != null && (e.callback = u), t = Wt(l, e, a), t !== null && (tt(t, l, a), Ca(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = lt(), a = Jt(u);
      a.tag = 2, t != null && (a.callback = t), t = Wt(l, a, u), t !== null && (tt(t, l, u), Ca(t, l, u));
    }
  };
  function s0(l, t, u, a, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, f) : t.prototype && t.prototype.isPureReactComponent ? !pa(u, a) || !pa(e, n) : !0;
  }
  function d0(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && Ff.enqueueReplaceState(t, t.state, null);
  }
  function Ru(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t)
        a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = U({}, u));
      for (var e in l)
        u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  var an = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function v0(l) {
    an(l);
  }
  function o0(l) {
    console.error(l);
  }
  function y0(l) {
    an(l);
  }
  function en(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function h0(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, {
        componentStack: u.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function If(l, t, u) {
    return u = Jt(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      en(l, t);
    }, u;
  }
  function r0(l) {
    return l = Jt(l), l.tag = 3, l;
  }
  function m0(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        h0(t, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      h0(t, u, a), typeof e != "function" && (au === null ? au = /* @__PURE__ */ new Set([this]) : au.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function po(l, t, u, a, e) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && Ba(
        t,
        u,
        e,
        !0
      ), u = it.current, u !== null) {
        switch (u.tag) {
          case 13:
            return bt === null ? Ac() : u.alternate === null && yl === 0 && (yl = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === Df ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), _c(l, a, e)), !1;
          case 22:
            return u.flags |= 65536, a === Df ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), _c(l, a, e)), !1;
        }
        throw Error(h(435, u.tag));
      }
      return _c(l, a, e), Ac(), !1;
    }
    if (k)
      return t = it.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== Tf && (l = Error(h(422), { cause: a }), Ya(et(l, u)))) : (a !== Tf && (t = Error(h(423), {
        cause: a
      }), Ya(
        et(t, u)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = et(a, u), e = If(
        l.stateNode,
        a,
        e
      ), Nf(l, e), yl !== 4 && (yl = 2)), !1;
    var n = Error(h(520), { cause: a });
    if (n = et(n, u), ue === null ? ue = [n] : ue.push(n), yl !== 4 && (yl = 2), t === null) return !0;
    a = et(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = If(u.stateNode, a, l), Nf(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (au === null || !au.has(n))))
            return u.flags |= 65536, e &= -e, u.lanes |= e, e = r0(e), m0(
              e,
              l,
              u,
              a
            ), Nf(u, e), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var g0 = Error(h(461)), Al = !1;
  function Ol(l, t, u, a) {
    t.child = l === null ? c0(t, null, u, a) : na(
      t,
      l.child,
      u,
      a
    );
  }
  function S0(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var c in a)
        c !== "ref" && (f[c] = a[c]);
    } else f = a;
    return Mu(t), a = Yf(
      l,
      t,
      u,
      f,
      n,
      e
    ), c = Bf(), l !== null && !Al ? (jf(l, t, e), qt(l, t, e)) : (k && c && Sf(t), t.flags |= 1, Ol(l, t, a, e), t.child);
  }
  function b0(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !rf(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, T0(
        l,
        t,
        n,
        a,
        e
      )) : (l = je(
        u.type,
        null,
        a,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !fc(l, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : pa, u(f, a) && l.ref === t.ref)
        return qt(l, t, e);
    }
    return t.flags |= 1, l = Dt(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function T0(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (pa(n, a) && l.ref === t.ref)
        if (Al = !1, t.pendingProps = a = n, fc(l, e))
          (l.flags & 131072) !== 0 && (Al = !0);
        else
          return t.lanes = l.lanes, qt(l, t, e);
    }
    return Pf(
      l,
      t,
      u,
      a,
      e
    );
  }
  function E0(l, t, u) {
    var a = t.pendingProps, e = a.children, n = l !== null ? l.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (a = n !== null ? n.baseLanes | u : u, l !== null) {
          for (e = t.child = l.child, n = 0; e !== null; )
            n = n | e.lanes | e.childLanes, e = e.sibling;
          t.childLanes = n & ~a;
        } else t.childLanes = 0, t.child = null;
        return A0(
          l,
          t,
          a,
          u
        );
      }
      if ((u & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ze(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? Ts(t, n) : Hf(), i0(t);
      else
        return t.lanes = t.childLanes = 536870912, A0(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u
        );
    } else
      n !== null ? (Ze(t, n.cachePool), Ts(t, n), Ft(), t.memoizedState = null) : (l !== null && Ze(t, null), Hf(), Ft());
    return Ol(l, t, e, u), t.child;
  }
  function A0(l, t, u, a) {
    var e = Mf();
    return e = e === null ? null : { parent: bl._currentValue, pool: e }, t.memoizedState = {
      baseLanes: u,
      cachePool: e
    }, l !== null && Ze(t, null), Hf(), i0(t), l !== null && Ba(l, t, a, !0), null;
  }
  function nn(l, t) {
    var u = t.ref;
    if (u === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(h(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function Pf(l, t, u, a, e) {
    return Mu(t), u = Yf(
      l,
      t,
      u,
      a,
      void 0,
      e
    ), a = Bf(), l !== null && !Al ? (jf(l, t, e), qt(l, t, e)) : (k && a && Sf(t), t.flags |= 1, Ol(l, t, u, e), t.child);
  }
  function z0(l, t, u, a, e, n) {
    return Mu(t), t.updateQueue = null, u = As(
      t,
      a,
      u,
      e
    ), Es(l), a = Bf(), l !== null && !Al ? (jf(l, t, n), qt(l, t, n)) : (k && a && Sf(t), t.flags |= 1, Ol(l, t, u, n), t.child);
  }
  function _0(l, t, u, a, e) {
    if (Mu(t), t.stateNode === null) {
      var n = $u, f = u.contextType;
      typeof f == "object" && f !== null && (n = Hl(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Ff, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Uf(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? Hl(f) : $u, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (kf(
        t,
        u,
        f,
        a
      ), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && Ff.enqueueReplaceState(n, n.state, null), wa(t, a, n, e), Za(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, i = Ru(u, c);
      n.props = i;
      var y = n.context, g = u.contextType;
      f = $u, typeof g == "object" && g !== null && (f = Hl(g));
      var T = u.getDerivedStateFromProps;
      g = typeof T == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || y !== f) && d0(
        t,
        n,
        a,
        f
      ), Kt = !1;
      var r = t.memoizedState;
      n.state = r, wa(t, a, n, e), Za(), y = t.memoizedState, c || r !== y || Kt ? (typeof T == "function" && (kf(
        t,
        u,
        T,
        a
      ), y = t.memoizedState), (i = Kt || s0(
        t,
        u,
        i,
        a,
        r,
        y,
        f
      )) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = y), n.props = a, n.state = y, n.context = f, a = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, Rf(l, t), f = t.memoizedProps, g = Ru(u, f), n.props = g, T = t.pendingProps, r = n.context, y = u.contextType, i = $u, typeof y == "object" && y !== null && (i = Hl(y)), c = u.getDerivedStateFromProps, (y = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== T || r !== i) && d0(
        t,
        n,
        a,
        i
      ), Kt = !1, r = t.memoizedState, n.state = r, wa(t, a, n, e), Za();
      var m = t.memoizedState;
      f !== T || r !== m || Kt || l !== null && l.dependencies !== null && Qe(l.dependencies) ? (typeof c == "function" && (kf(
        t,
        u,
        c,
        a
      ), m = t.memoizedState), (g = Kt || s0(
        t,
        u,
        g,
        a,
        r,
        m,
        i
      ) || l !== null && l.dependencies !== null && Qe(l.dependencies)) ? (y || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, m, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        m,
        i
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && r === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && r === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = m), n.props = a, n.state = m, n.context = i, a = g) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && r === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && r === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, nn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = na(
      t,
      l.child,
      null,
      e
    ), t.child = na(
      t,
      null,
      u,
      e
    )) : Ol(l, t, u, e), t.memoizedState = n.state, l = t.child) : l = qt(
      l,
      t,
      e
    ), l;
  }
  function O0(l, t, u, a) {
    return qa(), t.flags |= 256, Ol(l, t, u, a), t.child;
  }
  var lc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function tc(l) {
    return { baseLanes: l, cachePool: os() };
  }
  function uc(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= st), l;
  }
  function M0(l, t, u) {
    var a = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (Tl.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (k) {
        if (e ? kt(t) : Ft(), k) {
          var c = ol, i;
          if (i = c) {
            l: {
              for (i = c, c = St; i.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break l;
                }
                if (i = rt(
                  i.nextSibling
                ), i === null) {
                  c = null;
                  break l;
                }
              }
              c = i;
            }
            c !== null ? (t.memoizedState = {
              dehydrated: c,
              treeContext: Eu !== null ? { id: Ut, overflow: Rt } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, i = kl(
              18,
              null,
              null,
              0
            ), i.stateNode = c, i.return = t, t.child = i, Bl = t, ol = null, i = !0) : i = !1;
          }
          i || _u(t);
        }
        if (c = t.memoizedState, c !== null && (c = c.dehydrated, c !== null))
          return Xc(c) ? t.lanes = 32 : t.lanes = 536870912, null;
        xt(t);
      }
      return c = a.children, a = a.fallback, e ? (Ft(), e = t.mode, c = fn(
        { mode: "hidden", children: c },
        e
      ), a = Tu(
        a,
        e,
        u,
        null
      ), c.return = t, a.return = t, c.sibling = a, t.child = c, e = t.child, e.memoizedState = tc(u), e.childLanes = uc(
        l,
        f,
        u
      ), t.memoizedState = lc, a) : (kt(t), ac(t, c));
    }
    if (i = l.memoizedState, i !== null && (c = i.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (kt(t), t.flags &= -257, t = ec(
          l,
          t,
          u
        )) : t.memoizedState !== null ? (Ft(), t.child = l.child, t.flags |= 128, t = null) : (Ft(), e = a.fallback, c = t.mode, a = fn(
          { mode: "visible", children: a.children },
          c
        ), e = Tu(
          e,
          c,
          u,
          null
        ), e.flags |= 2, a.return = t, e.return = t, a.sibling = e, t.child = a, na(
          t,
          l.child,
          null,
          u
        ), a = t.child, a.memoizedState = tc(u), a.childLanes = uc(
          l,
          f,
          u
        ), t.memoizedState = lc, t = e);
      else if (kt(t), Xc(c)) {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var y = f.dgst;
        f = y, a = Error(h(419)), a.stack = "", a.digest = f, Ya({ value: a, source: null, stack: null }), t = ec(
          l,
          t,
          u
        );
      } else if (Al || Ba(l, t, u, !1), f = (u & l.childLanes) !== 0, Al || f) {
        if (f = fl, f !== null && (a = u & -u, a = (a & 42) !== 0 ? 1 : Xn(a), a = (a & (f.suspendedLanes | u)) !== 0 ? 0 : a, a !== 0 && a !== i.retryLane))
          throw i.retryLane = a, Wu(l, a), tt(f, l, a), g0;
        c.data === "$?" || Ac(), t = ec(
          l,
          t,
          u
        );
      } else
        c.data === "$?" ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, ol = rt(
          c.nextSibling
        ), Bl = t, k = !0, zu = null, St = !1, l !== null && (ft[ct++] = Ut, ft[ct++] = Rt, ft[ct++] = Eu, Ut = l.id, Rt = l.overflow, Eu = t), t = ac(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (Ft(), e = a.fallback, c = t.mode, i = l.child, y = i.sibling, a = Dt(i, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = i.subtreeFlags & 65011712, y !== null ? e = Dt(y, e) : (e = Tu(
      e,
      c,
      u,
      null
    ), e.flags |= 2), e.return = t, a.return = t, a.sibling = e, t.child = a, a = e, e = t.child, c = l.child.memoizedState, c === null ? c = tc(u) : (i = c.cachePool, i !== null ? (y = bl._currentValue, i = i.parent !== y ? { parent: y, pool: y } : i) : i = os(), c = {
      baseLanes: c.baseLanes | u,
      cachePool: i
    }), e.memoizedState = c, e.childLanes = uc(
      l,
      f,
      u
    ), t.memoizedState = lc, a) : (kt(t), u = l.child, l = u.sibling, u = Dt(u, {
      mode: "visible",
      children: a.children
    }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function ac(l, t) {
    return t = fn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function fn(l, t) {
    return l = kl(22, l, null, t), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function ec(l, t, u) {
    return na(t, l.child, null, u), l = ac(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function D0(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Af(l.return, t, u);
  }
  function nc(l, t, u, a, e) {
    var n = l.memoizedState;
    n === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: u,
      tailMode: e
    } : (n.isBackwards = t, n.rendering = null, n.renderingStartTime = 0, n.last = a, n.tail = u, n.tailMode = e);
  }
  function U0(l, t, u) {
    var a = t.pendingProps, e = a.revealOrder, n = a.tail;
    if (Ol(l, t, a.children, u), a = Tl.current, (a & 2) !== 0)
      a = a & 1 | 2, t.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && D0(l, u, t);
          else if (l.tag === 19)
            D0(l, u, t);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === t) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t)
              break l;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      a &= 1;
    }
    switch (_(Tl, a), e) {
      case "forwards":
        for (u = t.child, e = null; u !== null; )
          l = u.alternate, l !== null && un(l) === null && (e = u), u = u.sibling;
        u = e, u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null), nc(
          t,
          !1,
          e,
          u,
          n
        );
        break;
      case "backwards":
        for (u = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && un(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = u, u = e, e = l;
        }
        nc(
          t,
          !0,
          u,
          null,
          n
        );
        break;
      case "together":
        nc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function qt(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), uu |= t.lanes, (u & t.childLanes) === 0)
      if (l !== null) {
        if (Ba(
          l,
          t,
          u,
          !1
        ), (u & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(h(153));
    if (t.child !== null) {
      for (l = t.child, u = Dt(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Dt(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function fc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Qe(l)));
  }
  function Ho(l, t, u) {
    switch (t.tag) {
      case 3:
        il(t, t.stateNode.containerInfo), Lt(t, bl, l.memoizedState.cache), qa();
        break;
      case 27:
      case 5:
        qn(t);
        break;
      case 4:
        il(t, t.stateNode.containerInfo);
        break;
      case 10:
        Lt(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (kt(t), t.flags |= 128, null) : (u & t.child.childLanes) !== 0 ? M0(l, t, u) : (kt(t), l = qt(
            l,
            t,
            u
          ), l !== null ? l.sibling : null);
        kt(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (a = (u & t.childLanes) !== 0, a || (Ba(
          l,
          t,
          u,
          !1
        ), a = (u & t.childLanes) !== 0), e) {
          if (a)
            return U0(
              l,
              t,
              u
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), _(Tl, Tl.current), a) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, E0(l, t, u);
      case 24:
        Lt(t, bl, l.memoizedState.cache);
    }
    return qt(l, t, u);
  }
  function R0(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Al = !0;
      else {
        if (!fc(l, u) && (t.flags & 128) === 0)
          return Al = !1, Ho(
            l,
            t,
            u
          );
        Al = (l.flags & 131072) !== 0;
      }
    else
      Al = !1, k && (t.flags & 1048576) !== 0 && ns(t, Xe, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          l = t.pendingProps;
          var a = t.elementType, e = a._init;
          if (a = e(a._payload), t.type = a, typeof a == "function")
            rf(a) ? (l = Ru(a, l), t.tag = 1, t = _0(
              null,
              t,
              a,
              l,
              u
            )) : (t.tag = 0, t = Pf(
              null,
              t,
              a,
              l,
              u
            ));
          else {
            if (a != null) {
              if (e = a.$$typeof, e === ot) {
                t.tag = 11, t = S0(
                  null,
                  t,
                  a,
                  l,
                  u
                );
                break l;
              } else if (e === Vl) {
                t.tag = 14, t = b0(
                  null,
                  t,
                  a,
                  l,
                  u
                );
                break l;
              }
            }
            throw t = hu(a) || a, Error(h(306, t, ""));
          }
        }
        return t;
      case 0:
        return Pf(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 1:
        return a = t.type, e = Ru(
          a,
          t.pendingProps
        ), _0(
          l,
          t,
          a,
          e,
          u
        );
      case 3:
        l: {
          if (il(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(h(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Rf(l, t), wa(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, Lt(t, bl, a), a !== n.cache && zf(
            t,
            [bl],
            u,
            !0
          ), Za(), a = f.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = O0(
                l,
                t,
                a,
                u
              );
              break l;
            } else if (a !== e) {
              e = et(
                Error(h(424)),
                t
              ), Ya(e), t = O0(
                l,
                t,
                a,
                u
              );
              break l;
            } else {
              switch (l = t.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (ol = rt(l.firstChild), Bl = t, k = !0, zu = null, St = !0, u = c0(
                t,
                null,
                a,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (qa(), a === e) {
              t = qt(
                l,
                t,
                u
              );
              break l;
            }
            Ol(
              l,
              t,
              a,
              u
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return nn(l, t), l === null ? (u = xd(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : k || (u = t.type, l = t.pendingProps, a = En(
          G.current
        ).createElement(u), a[pl] = t, a[Gl] = l, Dl(a, u, l), El(a), t.stateNode = a) : t.memoizedState = xd(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return qn(t), l === null && k && (a = t.stateNode = Nd(
          t.type,
          t.pendingProps,
          G.current
        ), Bl = t, St = !0, e = ol, fu(t.type) ? (Qc = e, ol = rt(
          a.firstChild
        )) : ol = e), Ol(
          l,
          t,
          t.pendingProps.children,
          u
        ), nn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && k && ((e = a = ol) && (a = fy(
          a,
          t.type,
          t.pendingProps,
          St
        ), a !== null ? (t.stateNode = a, Bl = t, ol = rt(
          a.firstChild
        ), St = !1, e = !0) : e = !1), e || _u(t)), qn(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, Bc(e, n) ? a = null : f !== null && Bc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Yf(
          l,
          t,
          _o,
          null,
          null,
          u
        ), ve._currentValue = e), nn(l, t), Ol(l, t, a, u), t.child;
      case 6:
        return l === null && k && ((l = u = ol) && (u = cy(
          u,
          t.pendingProps,
          St
        ), u !== null ? (t.stateNode = u, Bl = t, ol = null, l = !0) : l = !1), l || _u(t)), null;
      case 13:
        return M0(l, t, u);
      case 4:
        return il(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = na(
          t,
          null,
          a,
          u
        ) : Ol(
          l,
          t,
          a,
          u
        ), t.child;
      case 11:
        return S0(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 7:
        return Ol(
          l,
          t,
          t.pendingProps,
          u
        ), t.child;
      case 8:
        return Ol(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 12:
        return Ol(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 10:
        return a = t.pendingProps, Lt(t, t.type, a.value), Ol(
          l,
          t,
          a.children,
          u
        ), t.child;
      case 9:
        return e = t.type._context, a = t.pendingProps.children, Mu(t), e = Hl(e), a = a(e), t.flags |= 1, Ol(l, t, a, u), t.child;
      case 14:
        return b0(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 15:
        return T0(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 19:
        return U0(l, t, u);
      case 31:
        return a = t.pendingProps, u = t.mode, a = {
          mode: a.mode,
          children: a.children
        }, l === null ? (u = fn(
          a,
          u
        ), u.ref = t.ref, t.child = u, u.return = t, t = u) : (u = Dt(l.child, a), u.ref = t.ref, t.child = u, u.return = t, t = u), t;
      case 22:
        return E0(l, t, u);
      case 24:
        return Mu(t), a = Hl(bl), l === null ? (e = Mf(), e === null && (e = fl, n = _f(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = {
          parent: a,
          cache: e
        }, Uf(t), Lt(t, bl, e)) : ((l.lanes & u) !== 0 && (Rf(l, t), wa(t, null, null, u), Za()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), Lt(t, bl, a)) : (a = n.cache, Lt(t, bl, a), a !== e.cache && zf(
          t,
          [bl],
          u,
          !0
        ))), Ol(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(h(156, t.tag));
  }
  function Yt(l) {
    l.flags |= 4;
  }
  function N0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Gd(t)) {
      if (t = it.current, t !== null && ((K & 4194048) === K ? bt !== null : (K & 62914560) !== K && (K & 536870912) === 0 || t !== bt))
        throw Qa = Df, ys;
      l.flags |= 8192;
    }
  }
  function cn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? ii() : 536870912, l.lanes |= t, sa |= t);
  }
  function ka(l, t) {
    if (!k)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var u = null; t !== null; )
            t.alternate !== null && (u = t), t = t.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var a = null; u !== null; )
            u.alternate !== null && (a = u), u = u.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
      }
  }
  function dl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t)
      for (var e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags & 65011712, a |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags, a |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function xo(l, t, u) {
    var a = t.pendingProps;
    switch (bf(t), t.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return dl(t), null;
      case 1:
        return dl(t), null;
      case 3:
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), pt(bl), Ct(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (xa(t) ? Yt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, is())), dl(t), null;
      case 26:
        return u = t.memoizedState, l === null ? (Yt(t), u !== null ? (dl(t), N0(t, u)) : (dl(t), t.flags &= -16777217)) : u ? u !== l.memoizedState ? (Yt(t), dl(t), N0(t, u)) : (dl(t), t.flags &= -16777217) : (l.memoizedProps !== a && Yt(t), dl(t), t.flags &= -16777217), null;
      case 27:
        Se(t), u = G.current;
        var e = t.type;
        if (l !== null && t.stateNode != null)
          l.memoizedProps !== a && Yt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(h(166));
            return dl(t), null;
          }
          l = H.current, xa(t) ? fs(t) : (l = Nd(e, a, u), t.stateNode = l, Yt(t));
        }
        return dl(t), null;
      case 5:
        if (Se(t), u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Yt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(h(166));
            return dl(t), null;
          }
          if (l = H.current, xa(t))
            fs(t);
          else {
            switch (e = En(
              G.current
            ), l) {
              case 1:
                l = e.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = e.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = e.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = e.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = e.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof a.is == "string" ? e.createElement("select", { is: a.is }) : e.createElement("select"), a.multiple ? l.multiple = !0 : a.size && (l.size = a.size);
                    break;
                  default:
                    l = typeof a.is == "string" ? e.createElement(u, { is: a.is }) : e.createElement(u);
                }
            }
            l[pl] = t, l[Gl] = a;
            l: for (e = t.child; e !== null; ) {
              if (e.tag === 5 || e.tag === 6)
                l.appendChild(e.stateNode);
              else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
              }
              if (e === t) break l;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                  break l;
                e = e.return;
              }
              e.sibling.return = e.return, e = e.sibling;
            }
            t.stateNode = l;
            l: switch (Dl(l, u, a), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!a.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && Yt(t);
          }
        }
        return dl(t), t.flags &= -16777217, null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && Yt(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(h(166));
          if (l = G.current, xa(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = Bl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            l[pl] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || zd(l.nodeValue, u)), l || _u(t);
          } else
            l = En(l).createTextNode(
              a
            ), l[pl] = t, t.stateNode = l;
        }
        return dl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = xa(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(h(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(h(317));
              e[pl] = t;
            } else
              qa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            dl(t), e = !1;
          } else
            e = is(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (xt(t), t) : (xt(t), null);
        }
        if (xt(t), (t.flags & 128) !== 0)
          return t.lanes = u, t;
        if (u = a !== null, l = l !== null && l.memoizedState !== null, u) {
          a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048);
        }
        return u !== l && u && (t.child.flags |= 8192), cn(t, t.updateQueue), dl(t), null;
      case 4:
        return Ct(), l === null && pc(t.stateNode.containerInfo), dl(t), null;
      case 10:
        return pt(t.type), dl(t), null;
      case 19:
        if (M(Tl), e = t.memoizedState, e === null) return dl(t), null;
        if (a = (t.flags & 128) !== 0, n = e.rendering, n === null)
          if (a) ka(e, !1);
          else {
            if (yl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = un(l), n !== null) {
                  for (t.flags |= 128, ka(e, !1), l = n.updateQueue, t.updateQueue = l, cn(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    es(u, l), u = u.sibling;
                  return _(
                    Tl,
                    Tl.current & 1 | 2
                  ), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null && gt() > vn && (t.flags |= 128, a = !0, ka(e, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (l = un(n), l !== null) {
              if (t.flags |= 128, a = !0, l = l.updateQueue, t.updateQueue = l, cn(t, l), ka(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !k)
                return dl(t), null;
            } else
              2 * gt() - e.renderingStartTime > vn && u !== 536870912 && (t.flags |= 128, a = !0, ka(e, !1), t.lanes = 4194304);
          e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
        }
        return e.tail !== null ? (t = e.tail, e.rendering = t, e.tail = t.sibling, e.renderingStartTime = gt(), t.sibling = null, l = Tl.current, _(Tl, a ? l & 1 | 2 : l & 1), t) : (dl(t), null);
      case 22:
      case 23:
        return xt(t), xf(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (dl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : dl(t), u = t.updateQueue, u !== null && cn(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && M(Du), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), pt(bl), dl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(h(156, t.tag));
  }
  function qo(l, t) {
    switch (bf(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return pt(bl), Ct(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Se(t), null;
      case 13:
        if (xt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(h(340));
          qa();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return M(Tl), null;
      case 4:
        return Ct(), null;
      case 10:
        return pt(t.type), null;
      case 22:
      case 23:
        return xt(t), xf(), l !== null && M(Du), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return pt(bl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function p0(l, t) {
    switch (bf(t), t.tag) {
      case 3:
        pt(bl), Ct();
        break;
      case 26:
      case 27:
      case 5:
        Se(t);
        break;
      case 4:
        Ct();
        break;
      case 13:
        xt(t);
        break;
      case 19:
        M(Tl);
        break;
      case 10:
        pt(t.type);
        break;
      case 22:
      case 23:
        xt(t), xf(), l !== null && M(Du);
        break;
      case 24:
        pt(bl);
    }
  }
  function Fa(l, t) {
    try {
      var u = t.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e = a.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var n = u.create, f = u.inst;
            a = n(), f.destroy = a;
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (c) {
      el(t, t.return, c);
    }
  }
  function It(l, t, u) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var f = a.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, e = t;
              var i = u, y = c;
              try {
                y();
              } catch (g) {
                el(
                  e,
                  i,
                  g
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (g) {
      el(t, t.return, g);
    }
  }
  function H0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        bs(t, u);
      } catch (a) {
        el(l, l.return, a);
      }
    }
  }
  function x0(l, t, u) {
    u.props = Ru(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (a) {
      el(l, t, a);
    }
  }
  function Ia(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(a) : u.current = a;
      }
    } catch (e) {
      el(l, t, e);
    }
  }
  function Tt(l, t) {
    var u = l.ref, a = l.refCleanup;
    if (u !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (e) {
          el(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (e) {
          el(l, t, e);
        }
      else u.current = null;
  }
  function q0(l) {
    var t = l.type, u = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? a.src = u.src : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e) {
      el(l, l.return, e);
    }
  }
  function cc(l, t, u) {
    try {
      var a = l.stateNode;
      ty(a, l.type, u, t), a[Gl] = t;
    } catch (e) {
      el(l, l.return, e);
    }
  }
  function Y0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && fu(l.type) || l.tag === 4;
  }
  function ic(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Y0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && fu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function sc(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(l), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = Tn));
    else if (a !== 4 && (a === 27 && fu(l.type) && (u = l.stateNode, t = null), l = l.child, l !== null))
      for (sc(l, t, u), l = l.sibling; l !== null; )
        sc(l, t, u), l = l.sibling;
  }
  function sn(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? u.insertBefore(l, t) : u.appendChild(l);
    else if (a !== 4 && (a === 27 && fu(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (sn(l, t, u), l = l.sibling; l !== null; )
        sn(l, t, u), l = l.sibling;
  }
  function B0(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Dl(t, a, u), t[pl] = l, t[Gl] = u;
    } catch (n) {
      el(l, l.return, n);
    }
  }
  var Bt = !1, rl = !1, dc = !1, j0 = typeof WeakSet == "function" ? WeakSet : Set, zl = null;
  function Yo(l, t) {
    if (l = l.containerInfo, qc = Dn, l = Wi(l), cf(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var a = u.getSelection && u.getSelection();
          if (a && a.rangeCount !== 0) {
            u = a.anchorNode;
            var e = a.anchorOffset, n = a.focusNode;
            a = a.focusOffset;
            try {
              u.nodeType, n.nodeType;
            } catch {
              u = null;
              break l;
            }
            var f = 0, c = -1, i = -1, y = 0, g = 0, T = l, r = null;
            t: for (; ; ) {
              for (var m; T !== u || e !== 0 && T.nodeType !== 3 || (c = f + e), T !== n || a !== 0 && T.nodeType !== 3 || (i = f + a), T.nodeType === 3 && (f += T.nodeValue.length), (m = T.firstChild) !== null; )
                r = T, T = m;
              for (; ; ) {
                if (T === l) break t;
                if (r === u && ++y === e && (c = f), r === n && ++g === a && (i = f), (m = T.nextSibling) !== null) break;
                T = r, r = T.parentNode;
              }
              T = m;
            }
            u = c === -1 || i === -1 ? null : { start: c, end: i };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Yc = { focusedElem: l, selectionRange: u }, Dn = !1, zl = t; zl !== null; )
      if (t = zl, l = t.child, (t.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = t, zl = l;
      else
        for (; zl !== null; ) {
          switch (t = zl, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, u = t, e = n.memoizedProps, n = n.memoizedState, a = u.stateNode;
                try {
                  var j = Ru(
                    u.type,
                    e,
                    u.elementType === u.type
                  );
                  l = a.getSnapshotBeforeUpdate(
                    j,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (x) {
                  el(
                    u,
                    u.return,
                    x
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, u = l.nodeType, u === 9)
                  Gc(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Gc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(h(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, zl = l;
            break;
          }
          zl = t.return;
        }
  }
  function G0(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Pt(l, u), a & 4 && Fa(5, u);
        break;
      case 1:
        if (Pt(l, u), a & 4)
          if (l = u.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              el(u, u.return, f);
            }
          else {
            var e = Ru(
              u.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              el(
                u,
                u.return,
                f
              );
            }
          }
        a & 64 && H0(u), a & 512 && Ia(u, u.return);
        break;
      case 3:
        if (Pt(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
          if (t = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                t = u.child.stateNode;
                break;
              case 1:
                t = u.child.stateNode;
            }
          try {
            bs(l, t);
          } catch (f) {
            el(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && B0(u);
      case 26:
      case 5:
        Pt(l, u), t === null && a & 4 && q0(u), a & 512 && Ia(u, u.return);
        break;
      case 12:
        Pt(l, u);
        break;
      case 13:
        Pt(l, u), a & 4 && C0(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = Vo.bind(
          null,
          u
        ), iy(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || Bt, !a) {
          t = t !== null && t.memoizedState !== null || rl, e = Bt;
          var n = rl;
          Bt = a, (rl = t) && !n ? lu(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Pt(l, u), Bt = e, rl = n;
        }
        break;
      case 30:
        break;
      default:
        Pt(l, u);
    }
  }
  function X0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, X0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Zn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var sl = null, Cl = !1;
  function jt(l, t, u) {
    for (u = u.child; u !== null; )
      Q0(l, t, u), u = u.sibling;
  }
  function Q0(l, t, u) {
    if (Jl && typeof Jl.onCommitFiberUnmount == "function")
      try {
        Jl.onCommitFiberUnmount(ba, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        rl || Tt(u, t), jt(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        rl || Tt(u, t);
        var a = sl, e = Cl;
        fu(u.type) && (sl = u.stateNode, Cl = !1), jt(
          l,
          t,
          u
        ), ce(u.stateNode), sl = a, Cl = e;
        break;
      case 5:
        rl || Tt(u, t);
      case 6:
        if (a = sl, e = Cl, sl = null, jt(
          l,
          t,
          u
        ), sl = a, Cl = e, sl !== null)
          if (Cl)
            try {
              (sl.nodeType === 9 ? sl.body : sl.nodeName === "HTML" ? sl.ownerDocument.body : sl).removeChild(u.stateNode);
            } catch (n) {
              el(
                u,
                t,
                n
              );
            }
          else
            try {
              sl.removeChild(u.stateNode);
            } catch (n) {
              el(
                u,
                t,
                n
              );
            }
        break;
      case 18:
        sl !== null && (Cl ? (l = sl, Ud(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), re(l)) : Ud(sl, u.stateNode));
        break;
      case 4:
        a = sl, e = Cl, sl = u.stateNode.containerInfo, Cl = !0, jt(
          l,
          t,
          u
        ), sl = a, Cl = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        rl || It(2, u, t), rl || It(4, u, t), jt(
          l,
          t,
          u
        );
        break;
      case 1:
        rl || (Tt(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && x0(
          u,
          t,
          a
        )), jt(
          l,
          t,
          u
        );
        break;
      case 21:
        jt(
          l,
          t,
          u
        );
        break;
      case 22:
        rl = (a = rl) || u.memoizedState !== null, jt(
          l,
          t,
          u
        ), rl = a;
        break;
      default:
        jt(
          l,
          t,
          u
        );
    }
  }
  function C0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        re(l);
      } catch (u) {
        el(t, t.return, u);
      }
  }
  function Bo(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new j0()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new j0()), t;
      default:
        throw Error(h(435, l.tag));
    }
  }
  function vc(l, t) {
    var u = Bo(l);
    t.forEach(function(a) {
      var e = Lo.bind(null, l, a);
      u.has(a) || (u.add(a), a.then(e, e));
    });
  }
  function Fl(l, t) {
    var u = t.deletions;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a], n = l, f = t, c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (fu(c.type)) {
                sl = c.stateNode, Cl = !1;
                break l;
              }
              break;
            case 5:
              sl = c.stateNode, Cl = !1;
              break l;
            case 3:
            case 4:
              sl = c.stateNode.containerInfo, Cl = !0;
              break l;
          }
          c = c.return;
        }
        if (sl === null) throw Error(h(160));
        Q0(n, f, e), sl = null, Cl = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Z0(t, l), t = t.sibling;
  }
  var ht = null;
  function Z0(l, t) {
    var u = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Fl(t, l), Il(l), a & 4 && (It(3, l, l.return), Fa(3, l), It(5, l, l.return));
        break;
      case 1:
        Fl(t, l), Il(l), a & 512 && (rl || u === null || Tt(u, u.return)), a & 64 && Bt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? a : u.concat(a))));
        break;
      case 26:
        var e = ht;
        if (Fl(t, l), Il(l), a & 512 && (rl || u === null || Tt(u, u.return)), a & 4) {
          var n = u !== null ? u.memoizedState : null;
          if (a = l.memoizedState, u === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, u = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (a) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Aa] || n[pl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(a), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Dl(n, a, u), n[pl] = l, El(n), a = n;
                      break l;
                    case "link":
                      var f = Bd(
                        "link",
                        "href",
                        e
                      ).get(a + (u.href || ""));
                      if (f) {
                        for (var c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && n.getAttribute("rel") === (u.rel == null ? null : u.rel) && n.getAttribute("title") === (u.title == null ? null : u.title) && n.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), Dl(n, a, u), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = Bd(
                        "meta",
                        "content",
                        e
                      ).get(a + (u.content || ""))) {
                        for (c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("content") === (u.content == null ? null : "" + u.content) && n.getAttribute("name") === (u.name == null ? null : u.name) && n.getAttribute("property") === (u.property == null ? null : u.property) && n.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && n.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), Dl(n, a, u), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(h(468, a));
                  }
                  n[pl] = l, El(n), a = n;
                }
                l.stateNode = a;
              } else
                jd(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Yd(
                e,
                a,
                l.memoizedProps
              );
          else
            n !== a ? (n === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : n.count--, a === null ? jd(
              e,
              l.type,
              l.stateNode
            ) : Yd(
              e,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && cc(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Fl(t, l), Il(l), a & 512 && (rl || u === null || Tt(u, u.return)), u !== null && a & 4 && cc(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Fl(t, l), Il(l), a & 512 && (rl || u === null || Tt(u, u.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            Cu(e, "");
          } catch (m) {
            el(l, l.return, m);
          }
        }
        a & 4 && l.stateNode != null && (e = l.memoizedProps, cc(
          l,
          e,
          u !== null ? u.memoizedProps : e
        )), a & 1024 && (dc = !0);
        break;
      case 6:
        if (Fl(t, l), Il(l), a & 4) {
          if (l.stateNode === null)
            throw Error(h(162));
          a = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = a;
          } catch (m) {
            el(l, l.return, m);
          }
        }
        break;
      case 3:
        if (_n = null, e = ht, ht = An(t.containerInfo), Fl(t, l), ht = e, Il(l), a & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            re(t.containerInfo);
          } catch (m) {
            el(l, l.return, m);
          }
        dc && (dc = !1, w0(l));
        break;
      case 4:
        a = ht, ht = An(
          l.stateNode.containerInfo
        ), Fl(t, l), Il(l), ht = a;
        break;
      case 12:
        Fl(t, l), Il(l);
        break;
      case 13:
        Fl(t, l), Il(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (gc = gt()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, vc(l, a)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = u !== null && u.memoizedState !== null, y = Bt, g = rl;
        if (Bt = y || e, rl = g || i, Fl(t, l), rl = g, Bt = y, Il(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (u === null || i || Bt || rl || Nu(l)), u = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (u === null) {
                i = u = t;
                try {
                  if (n = i.stateNode, e)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    c = i.stateNode;
                    var T = i.memoizedProps.style, r = T != null && T.hasOwnProperty("display") ? T.display : null;
                    c.style.display = r == null || typeof r == "boolean" ? "" : ("" + r).trim();
                  }
                } catch (m) {
                  el(i, i.return, m);
                }
              }
            } else if (t.tag === 6) {
              if (u === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (m) {
                  el(i, i.return, m);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              u === t && (u = null), t = t.return;
            }
            u === t && (u = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = l.updateQueue, a !== null && (u = a.retryQueue, u !== null && (a.retryQueue = null, vc(l, u))));
        break;
      case 19:
        Fl(t, l), Il(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, vc(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Fl(t, l), Il(l);
    }
  }
  function Il(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (Y0(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        if (u == null) throw Error(h(160));
        switch (u.tag) {
          case 27:
            var e = u.stateNode, n = ic(l);
            sn(l, n, e);
            break;
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (Cu(f, ""), u.flags &= -33);
            var c = ic(l);
            sn(l, c, f);
            break;
          case 3:
          case 4:
            var i = u.stateNode.containerInfo, y = ic(l);
            sc(
              l,
              y,
              i
            );
            break;
          default:
            throw Error(h(161));
        }
      } catch (g) {
        el(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function w0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        w0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function Pt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        G0(l, t.alternate, t), t = t.sibling;
  }
  function Nu(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          It(4, t, t.return), Nu(t);
          break;
        case 1:
          Tt(t, t.return);
          var u = t.stateNode;
          typeof u.componentWillUnmount == "function" && x0(
            t,
            t.return,
            u
          ), Nu(t);
          break;
        case 27:
          ce(t.stateNode);
        case 26:
        case 5:
          Tt(t, t.return), Nu(t);
          break;
        case 22:
          t.memoizedState === null && Nu(t);
          break;
        case 30:
          Nu(t);
          break;
        default:
          Nu(t);
      }
      l = l.sibling;
    }
  }
  function lu(l, t, u) {
    for (u = u && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, e = l, n = t, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          lu(
            e,
            n,
            u
          ), Fa(4, n);
          break;
        case 1:
          if (lu(
            e,
            n,
            u
          ), a = n, e = a.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (y) {
              el(a, a.return, y);
            }
          if (a = n, e = a.updateQueue, e !== null) {
            var c = a.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  Ss(i[e], c);
            } catch (y) {
              el(a, a.return, y);
            }
          }
          u && f & 64 && H0(n), Ia(n, n.return);
          break;
        case 27:
          B0(n);
        case 26:
        case 5:
          lu(
            e,
            n,
            u
          ), u && a === null && f & 4 && q0(n), Ia(n, n.return);
          break;
        case 12:
          lu(
            e,
            n,
            u
          );
          break;
        case 13:
          lu(
            e,
            n,
            u
          ), u && f & 4 && C0(e, n);
          break;
        case 22:
          n.memoizedState === null && lu(
            e,
            n,
            u
          ), Ia(n, n.return);
          break;
        case 30:
          break;
        default:
          lu(
            e,
            n,
            u
          );
      }
      t = t.sibling;
    }
  }
  function oc(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && ja(u));
  }
  function yc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && ja(l));
  }
  function Et(l, t, u, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        V0(
          l,
          t,
          u,
          a
        ), t = t.sibling;
  }
  function V0(l, t, u, a) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Et(
          l,
          t,
          u,
          a
        ), e & 2048 && Fa(9, t);
        break;
      case 1:
        Et(
          l,
          t,
          u,
          a
        );
        break;
      case 3:
        Et(
          l,
          t,
          u,
          a
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && ja(l)));
        break;
      case 12:
        if (e & 2048) {
          Et(
            l,
            t,
            u,
            a
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, f = n.id, c = n.onPostCommit;
            typeof c == "function" && c(
              f,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (i) {
            el(t, t.return, i);
          }
        } else
          Et(
            l,
            t,
            u,
            a
          );
        break;
      case 13:
        Et(
          l,
          t,
          u,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Et(
          l,
          t,
          u,
          a
        ) : Pa(l, t) : n._visibility & 2 ? Et(
          l,
          t,
          u,
          a
        ) : (n._visibility |= 2, fa(
          l,
          t,
          u,
          a,
          (t.subtreeFlags & 10256) !== 0
        )), e & 2048 && oc(f, t);
        break;
      case 24:
        Et(
          l,
          t,
          u,
          a
        ), e & 2048 && yc(t.alternate, t);
        break;
      default:
        Et(
          l,
          t,
          u,
          a
        );
    }
  }
  function fa(l, t, u, a, e) {
    for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l, f = t, c = u, i = a, y = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          fa(
            n,
            f,
            c,
            i,
            e
          ), Fa(8, f);
          break;
        case 23:
          break;
        case 22:
          var g = f.stateNode;
          f.memoizedState !== null ? g._visibility & 2 ? fa(
            n,
            f,
            c,
            i,
            e
          ) : Pa(
            n,
            f
          ) : (g._visibility |= 2, fa(
            n,
            f,
            c,
            i,
            e
          )), e && y & 2048 && oc(
            f.alternate,
            f
          );
          break;
        case 24:
          fa(
            n,
            f,
            c,
            i,
            e
          ), e && y & 2048 && yc(f.alternate, f);
          break;
        default:
          fa(
            n,
            f,
            c,
            i,
            e
          );
      }
      t = t.sibling;
    }
  }
  function Pa(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l, a = t, e = a.flags;
        switch (a.tag) {
          case 22:
            Pa(u, a), e & 2048 && oc(
              a.alternate,
              a
            );
            break;
          case 24:
            Pa(u, a), e & 2048 && yc(a.alternate, a);
            break;
          default:
            Pa(u, a);
        }
        t = t.sibling;
      }
  }
  var le = 8192;
  function ca(l) {
    if (l.subtreeFlags & le)
      for (l = l.child; l !== null; )
        L0(l), l = l.sibling;
  }
  function L0(l) {
    switch (l.tag) {
      case 26:
        ca(l), l.flags & le && l.memoizedState !== null && Ey(
          ht,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        ca(l);
        break;
      case 3:
      case 4:
        var t = ht;
        ht = An(l.stateNode.containerInfo), ca(l), ht = t;
        break;
      case 22:
        l.memoizedState === null && (t = l.alternate, t !== null && t.memoizedState !== null ? (t = le, le = 16777216, ca(l), le = t) : ca(l));
        break;
      default:
        ca(l);
    }
  }
  function K0(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function te(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          zl = a, W0(
            a,
            l
          );
        }
      K0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        J0(l), l = l.sibling;
  }
  function J0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        te(l), l.flags & 2048 && It(9, l, l.return);
        break;
      case 3:
        te(l);
        break;
      case 12:
        te(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, dn(l)) : te(l);
        break;
      default:
        te(l);
    }
  }
  function dn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          zl = a, W0(
            a,
            l
          );
        }
      K0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          It(8, t, t.return), dn(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, dn(t));
          break;
        default:
          dn(t);
      }
      l = l.sibling;
    }
  }
  function W0(l, t) {
    for (; zl !== null; ) {
      var u = zl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          It(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          ja(u.memoizedState.cache);
      }
      if (a = u.child, a !== null) a.return = u, zl = a;
      else
        l: for (u = l; zl !== null; ) {
          a = zl;
          var e = a.sibling, n = a.return;
          if (X0(a), a === u) {
            zl = null;
            break l;
          }
          if (e !== null) {
            e.return = n, zl = e;
            break l;
          }
          zl = n;
        }
    }
  }
  var jo = {
    getCacheForType: function(l) {
      var t = Hl(bl), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    }
  }, Go = typeof WeakMap == "function" ? WeakMap : Map, F = 0, fl = null, w = null, K = 0, I = 0, Pl = null, tu = !1, ia = !1, hc = !1, Gt = 0, yl = 0, uu = 0, pu = 0, rc = 0, st = 0, sa = 0, ue = null, Zl = null, mc = !1, gc = 0, vn = 1 / 0, on = null, au = null, Ml = 0, eu = null, da = null, va = 0, Sc = 0, bc = null, $0 = null, ae = 0, Tc = null;
  function lt() {
    if ((F & 2) !== 0 && K !== 0)
      return K & -K;
    if (S.T !== null) {
      var l = Iu;
      return l !== 0 ? l : Dc();
    }
    return vi();
  }
  function k0() {
    st === 0 && (st = (K & 536870912) === 0 || k ? ci() : 536870912);
    var l = it.current;
    return l !== null && (l.flags |= 32), st;
  }
  function tt(l, t, u) {
    (l === fl && (I === 2 || I === 9) || l.cancelPendingCommit !== null) && (oa(l, 0), nu(
      l,
      K,
      st,
      !1
    )), Ea(l, u), ((F & 2) === 0 || l !== fl) && (l === fl && ((F & 2) === 0 && (pu |= u), yl === 4 && nu(
      l,
      K,
      st,
      !1
    )), At(l));
  }
  function F0(l, t, u) {
    if ((F & 6) !== 0) throw Error(h(327));
    var a = !u && (t & 124) === 0 && (t & l.expiredLanes) === 0 || Ta(l, t), e = a ? Co(l, t) : zc(l, t, !0), n = a;
    do {
      if (e === 0) {
        ia && !a && nu(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !Xo(u)) {
          e = zc(l, t, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e = ue;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (oa(c, f).flags |= 256), f = zc(
                c,
                f,
                !1
              ), f !== 2) {
                if (hc && !i) {
                  c.errorRecoveryDisabledLanes |= n, pu |= n, e = 4;
                  break l;
                }
                n = Zl, Zl = e, n !== null && (Zl === null ? Zl = n : Zl.push.apply(
                  Zl,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          oa(l, 0), nu(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, n = e, n) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              nu(
                a,
                t,
                st,
                !tu
              );
              break l;
            case 2:
              Zl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((t & 62914560) === t && (e = gc + 300 - gt(), 10 < e)) {
            if (nu(
              a,
              t,
              st,
              !tu
            ), Ae(a, 0, !0) !== 0) break l;
            a.timeoutHandle = Md(
              I0.bind(
                null,
                a,
                u,
                Zl,
                on,
                mc,
                t,
                st,
                pu,
                sa,
                tu,
                n,
                2,
                -0,
                0
              ),
              e
            );
            break l;
          }
          I0(
            a,
            u,
            Zl,
            on,
            mc,
            t,
            st,
            pu,
            sa,
            tu,
            n,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    At(l);
  }
  function I0(l, t, u, a, e, n, f, c, i, y, g, T, r, m) {
    if (l.timeoutHandle = -1, T = t.subtreeFlags, (T & 8192 || (T & 16785408) === 16785408) && (de = { stylesheets: null, count: 0, unsuspend: Ty }, L0(t), T = Ay(), T !== null)) {
      l.cancelPendingCommit = T(
        nd.bind(
          null,
          l,
          t,
          n,
          u,
          a,
          e,
          f,
          c,
          i,
          g,
          1,
          r,
          m
        )
      ), nu(l, n, f, !y);
      return;
    }
    nd(
      l,
      t,
      n,
      u,
      a,
      e,
      f,
      c,
      i
    );
  }
  function Xo(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var a = 0; a < u.length; a++) {
          var e = u[a], n = e.getSnapshot;
          e = e.value;
          try {
            if (!$l(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = t.child, t.subtreeFlags & 16384 && u !== null)
        u.return = t, t = u;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function nu(l, t, u, a) {
    t &= ~rc, t &= ~pu, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - Wl(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && si(l, u, t);
  }
  function yn() {
    return (F & 6) === 0 ? (ee(0), !1) : !0;
  }
  function Ec() {
    if (w !== null) {
      if (I === 0)
        var l = w.return;
      else
        l = w, Nt = Ou = null, Gf(l), ea = null, Wa = 0, l = w;
      for (; l !== null; )
        p0(l.alternate, l), l = l.return;
      w = null;
    }
  }
  function oa(l, t) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, ay(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Ec(), fl = l, w = u = Dt(l.current, null), K = t, I = 0, Pl = null, tu = !1, ia = Ta(l, t), hc = !1, sa = st = rc = pu = uu = yl = 0, Zl = ue = null, mc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var e = 31 - Wl(a), n = 1 << e;
        t |= l[e], a &= ~n;
      }
    return Gt = t, qe(), u;
  }
  function P0(l, t) {
    C = null, S.H = Pe, t === Xa || t === we ? (t = ms(), I = 3) : t === ys ? (t = ms(), I = 4) : I = t === g0 ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Pl = t, w === null && (yl = 1, en(
      l,
      et(t, l.current)
    ));
  }
  function ld() {
    var l = S.H;
    return S.H = Pe, l === null ? Pe : l;
  }
  function td() {
    var l = S.A;
    return S.A = jo, l;
  }
  function Ac() {
    yl = 4, tu || (K & 4194048) !== K && it.current !== null || (ia = !0), (uu & 134217727) === 0 && (pu & 134217727) === 0 || fl === null || nu(
      fl,
      K,
      st,
      !1
    );
  }
  function zc(l, t, u) {
    var a = F;
    F |= 2;
    var e = ld(), n = td();
    (fl !== l || K !== t) && (on = null, oa(l, t)), t = !1;
    var f = yl;
    l: do
      try {
        if (I !== 0 && w !== null) {
          var c = w, i = Pl;
          switch (I) {
            case 8:
              Ec(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              it.current === null && (t = !0);
              var y = I;
              if (I = 0, Pl = null, ya(l, c, i, y), u && ia) {
                f = 0;
                break l;
              }
              break;
            default:
              y = I, I = 0, Pl = null, ya(l, c, i, y);
          }
        }
        Qo(), f = yl;
        break;
      } catch (g) {
        P0(l, g);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Nt = Ou = null, F = a, S.H = e, S.A = n, w === null && (fl = null, K = 0, qe()), f;
  }
  function Qo() {
    for (; w !== null; ) ud(w);
  }
  function Co(l, t) {
    var u = F;
    F |= 2;
    var a = ld(), e = td();
    fl !== l || K !== t ? (on = null, vn = gt() + 500, oa(l, t)) : ia = Ta(
      l,
      t
    );
    l: do
      try {
        if (I !== 0 && w !== null) {
          t = w;
          var n = Pl;
          t: switch (I) {
            case 1:
              I = 0, Pl = null, ya(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (hs(n)) {
                I = 0, Pl = null, ad(t);
                break;
              }
              t = function() {
                I !== 2 && I !== 9 || fl !== l || (I = 7), At(l);
              }, n.then(t, t);
              break l;
            case 3:
              I = 7;
              break l;
            case 4:
              I = 5;
              break l;
            case 7:
              hs(n) ? (I = 0, Pl = null, ad(t)) : (I = 0, Pl = null, ya(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (w.tag) {
                case 26:
                  f = w.memoizedState;
                case 5:
                case 27:
                  var c = w;
                  if (!f || Gd(f)) {
                    I = 0, Pl = null;
                    var i = c.sibling;
                    if (i !== null) w = i;
                    else {
                      var y = c.return;
                      y !== null ? (w = y, hn(y)) : w = null;
                    }
                    break t;
                  }
              }
              I = 0, Pl = null, ya(l, t, n, 5);
              break;
            case 6:
              I = 0, Pl = null, ya(l, t, n, 6);
              break;
            case 8:
              Ec(), yl = 6;
              break l;
            default:
              throw Error(h(462));
          }
        }
        Zo();
        break;
      } catch (g) {
        P0(l, g);
      }
    while (!0);
    return Nt = Ou = null, S.H = a, S.A = e, F = u, w !== null ? 0 : (fl = null, K = 0, qe(), yl);
  }
  function Zo() {
    for (; w !== null && !sv(); )
      ud(w);
  }
  function ud(l) {
    var t = R0(l.alternate, l, Gt);
    l.memoizedProps = l.pendingProps, t === null ? hn(l) : w = t;
  }
  function ad(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = z0(
          u,
          t,
          t.pendingProps,
          t.type,
          void 0,
          K
        );
        break;
      case 11:
        t = z0(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          K
        );
        break;
      case 5:
        Gf(t);
      default:
        p0(u, t), t = w = es(t, Gt), t = R0(u, t, Gt);
    }
    l.memoizedProps = l.pendingProps, t === null ? hn(l) : w = t;
  }
  function ya(l, t, u, a) {
    Nt = Ou = null, Gf(t), ea = null, Wa = 0;
    var e = t.return;
    try {
      if (po(
        l,
        e,
        t,
        u,
        K
      )) {
        yl = 1, en(
          l,
          et(u, l.current)
        ), w = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw w = e, n;
      yl = 1, en(
        l,
        et(u, l.current)
      ), w = null;
      return;
    }
    t.flags & 32768 ? (k || a === 1 ? l = !0 : ia || (K & 536870912) !== 0 ? l = !1 : (tu = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = it.current, a !== null && a.tag === 13 && (a.flags |= 16384))), ed(t, l)) : hn(t);
  }
  function hn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        ed(
          t,
          tu
        );
        return;
      }
      l = t.return;
      var u = xo(
        t.alternate,
        t,
        Gt
      );
      if (u !== null) {
        w = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        w = t;
        return;
      }
      w = t = l;
    } while (t !== null);
    yl === 0 && (yl = 5);
  }
  function ed(l, t) {
    do {
      var u = qo(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, w = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        w = l;
        return;
      }
      w = l = u;
    } while (l !== null);
    yl = 6, w = null;
  }
  function nd(l, t, u, a, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do
      rn();
    while (Ml !== 0);
    if ((F & 6) !== 0) throw Error(h(327));
    if (t !== null) {
      if (t === l.current) throw Error(h(177));
      if (n = t.lanes | t.childLanes, n |= yf, bv(
        l,
        u,
        n,
        f,
        c,
        i
      ), l === fl && (w = fl = null, K = 0), da = t, eu = l, va = u, Sc = n, bc = e, $0 = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Ko(be, function() {
        return dd(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = S.T, S.T = null, e = O.p, O.p = 2, f = F, F |= 4;
        try {
          Yo(l, t, u);
        } finally {
          F = f, O.p = e, S.T = a;
        }
      }
      Ml = 1, fd(), cd(), id();
    }
  }
  function fd() {
    if (Ml === 1) {
      Ml = 0;
      var l = eu, t = da, u = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || u) {
        u = S.T, S.T = null;
        var a = O.p;
        O.p = 2;
        var e = F;
        F |= 4;
        try {
          Z0(t, l);
          var n = Yc, f = Wi(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
          if (f !== c && c && c.ownerDocument && Ji(
            c.ownerDocument.documentElement,
            c
          )) {
            if (i !== null && cf(c)) {
              var y = i.start, g = i.end;
              if (g === void 0 && (g = y), "selectionStart" in c)
                c.selectionStart = y, c.selectionEnd = Math.min(
                  g,
                  c.value.length
                );
              else {
                var T = c.ownerDocument || document, r = T && T.defaultView || window;
                if (r.getSelection) {
                  var m = r.getSelection(), j = c.textContent.length, x = Math.min(i.start, j), ul = i.end === void 0 ? x : Math.min(i.end, j);
                  !m.extend && x > ul && (f = ul, ul = x, x = f);
                  var v = Ki(
                    c,
                    x
                  ), d = Ki(
                    c,
                    ul
                  );
                  if (v && d && (m.rangeCount !== 1 || m.anchorNode !== v.node || m.anchorOffset !== v.offset || m.focusNode !== d.node || m.focusOffset !== d.offset)) {
                    var o = T.createRange();
                    o.setStart(v.node, v.offset), m.removeAllRanges(), x > ul ? (m.addRange(o), m.extend(d.node, d.offset)) : (o.setEnd(d.node, d.offset), m.addRange(o));
                  }
                }
              }
            }
            for (T = [], m = c; m = m.parentNode; )
              m.nodeType === 1 && T.push({
                element: m,
                left: m.scrollLeft,
                top: m.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < T.length; c++) {
              var b = T[c];
              b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
            }
          }
          Dn = !!qc, Yc = qc = null;
        } finally {
          F = e, O.p = a, S.T = u;
        }
      }
      l.current = t, Ml = 2;
    }
  }
  function cd() {
    if (Ml === 2) {
      Ml = 0;
      var l = eu, t = da, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = S.T, S.T = null;
        var a = O.p;
        O.p = 2;
        var e = F;
        F |= 4;
        try {
          G0(l, t.alternate, t);
        } finally {
          F = e, O.p = a, S.T = u;
        }
      }
      Ml = 3;
    }
  }
  function id() {
    if (Ml === 4 || Ml === 3) {
      Ml = 0, dv();
      var l = eu, t = da, u = va, a = $0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ml = 5 : (Ml = 0, da = eu = null, sd(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (au = null), Qn(u), t = t.stateNode, Jl && typeof Jl.onCommitFiberRoot == "function")
        try {
          Jl.onCommitFiberRoot(
            ba,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = S.T, e = O.p, O.p = 2, S.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < a.length; f++) {
            var c = a[f];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          S.T = t, O.p = e;
        }
      }
      (va & 3) !== 0 && rn(), At(l), e = l.pendingLanes, (u & 4194090) !== 0 && (e & 42) !== 0 ? l === Tc ? ae++ : (ae = 0, Tc = l) : ae = 0, ee(0);
    }
  }
  function sd(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, ja(t)));
  }
  function rn(l) {
    return fd(), cd(), id(), dd();
  }
  function dd() {
    if (Ml !== 5) return !1;
    var l = eu, t = Sc;
    Sc = 0;
    var u = Qn(va), a = S.T, e = O.p;
    try {
      O.p = 32 > u ? 32 : u, S.T = null, u = bc, bc = null;
      var n = eu, f = va;
      if (Ml = 0, da = eu = null, va = 0, (F & 6) !== 0) throw Error(h(331));
      var c = F;
      if (F |= 4, J0(n.current), V0(
        n,
        n.current,
        f,
        u
      ), F = c, ee(0, !1), Jl && typeof Jl.onPostCommitFiberRoot == "function")
        try {
          Jl.onPostCommitFiberRoot(ba, n);
        } catch {
        }
      return !0;
    } finally {
      O.p = e, S.T = a, sd(l, t);
    }
  }
  function vd(l, t, u) {
    t = et(u, t), t = If(l.stateNode, t, 2), l = Wt(l, t, 2), l !== null && (Ea(l, 2), At(l));
  }
  function el(l, t, u) {
    if (l.tag === 3)
      vd(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          vd(
            t,
            l,
            u
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (au === null || !au.has(a))) {
            l = et(u, l), u = r0(2), a = Wt(t, u, 2), a !== null && (m0(
              u,
              a,
              t,
              l
            ), Ea(a, 2), At(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function _c(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Go();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else
      e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (hc = !0, e.add(u), l = wo.bind(null, l, t, u), t.then(l, l));
  }
  function wo(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, fl === l && (K & u) === u && (yl === 4 || yl === 3 && (K & 62914560) === K && 300 > gt() - gc ? (F & 2) === 0 && oa(l, 0) : rc |= u, sa === K && (sa = 0)), At(l);
  }
  function od(l, t) {
    t === 0 && (t = ii()), l = Wu(l, t), l !== null && (Ea(l, t), At(l));
  }
  function Vo(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), od(l, u);
  }
  function Lo(l, t) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var a = l.stateNode, e = l.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(h(314));
    }
    a !== null && a.delete(t), od(l, u);
  }
  function Ko(l, t) {
    return Bn(l, t);
  }
  var mn = null, ha = null, Oc = !1, gn = !1, Mc = !1, Hu = 0;
  function At(l) {
    l !== ha && l.next === null && (ha === null ? mn = ha = l : ha = ha.next = l), gn = !0, Oc || (Oc = !0, Wo());
  }
  function ee(l, t) {
    if (!Mc && gn) {
      Mc = !0;
      do
        for (var u = !1, a = mn; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - Wl(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, md(a, n));
          } else
            n = K, n = Ae(
              a,
              a === fl ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Ta(a, n) || (u = !0, md(a, n));
          a = a.next;
        }
      while (u);
      Mc = !1;
    }
  }
  function Jo() {
    yd();
  }
  function yd() {
    gn = Oc = !1;
    var l = 0;
    Hu !== 0 && (uy() && (l = Hu), Hu = 0);
    for (var t = gt(), u = null, a = mn; a !== null; ) {
      var e = a.next, n = hd(a, t);
      n === 0 ? (a.next = null, u === null ? mn = e : u.next = e, e === null && (ha = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (gn = !0)), a = e;
    }
    ee(l);
  }
  function hd(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - Wl(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & u) === 0 || (c & a) !== 0) && (e[f] = Sv(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = fl, u = K, u = Ae(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, u === 0 || l === t && (I === 2 || I === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && jn(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Ta(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && jn(a), Qn(u)) {
        case 2:
        case 8:
          u = ni;
          break;
        case 32:
          u = be;
          break;
        case 268435456:
          u = fi;
          break;
        default:
          u = be;
      }
      return a = rd.bind(null, l), u = Bn(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && jn(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function rd(l, t) {
    if (Ml !== 0 && Ml !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (rn() && l.callbackNode !== u)
      return null;
    var a = K;
    return a = Ae(
      l,
      l === fl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (F0(l, a, t), hd(l, gt()), l.callbackNode != null && l.callbackNode === u ? rd.bind(null, l) : null);
  }
  function md(l, t) {
    if (rn()) return null;
    F0(l, t, !0);
  }
  function Wo() {
    ey(function() {
      (F & 6) !== 0 ? Bn(
        ei,
        Jo
      ) : yd();
    });
  }
  function Dc() {
    return Hu === 0 && (Hu = ci()), Hu;
  }
  function gd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : De("" + l);
  }
  function Sd(l, t) {
    var u = t.ownerDocument.createElement("input");
    return u.name = t.name, u.value = t.value, l.id && u.setAttribute("form", l.id), t.parentNode.insertBefore(u, t), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function $o(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = gd(
        (e[Gl] || null).action
      ), f = a.submitter;
      f && (t = (t = f[Gl] || null) ? gd(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var c = new pe(
        "action",
        "action",
        null,
        a,
        e
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Hu !== 0) {
                  var i = f ? Sd(e, f) : new FormData(e);
                  Jf(
                    u,
                    {
                      pending: !0,
                      data: i,
                      method: e.method,
                      action: n
                    },
                    null,
                    i
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), i = f ? Sd(e, f) : new FormData(e), Jf(
                  u,
                  {
                    pending: !0,
                    data: i,
                    method: e.method,
                    action: n
                  },
                  n,
                  i
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var Uc = 0; Uc < of.length; Uc++) {
    var Rc = of[Uc], ko = Rc.toLowerCase(), Fo = Rc[0].toUpperCase() + Rc.slice(1);
    yt(
      ko,
      "on" + Fo
    );
  }
  yt(Fi, "onAnimationEnd"), yt(Ii, "onAnimationIteration"), yt(Pi, "onAnimationStart"), yt("dblclick", "onDoubleClick"), yt("focusin", "onFocus"), yt("focusout", "onBlur"), yt(ho, "onTransitionRun"), yt(ro, "onTransitionStart"), yt(mo, "onTransitionCancel"), yt(ls, "onTransitionEnd"), Gu("onMouseEnter", ["mouseout", "mouseover"]), Gu("onMouseLeave", ["mouseout", "mouseover"]), Gu("onPointerEnter", ["pointerout", "pointerover"]), Gu("onPointerLeave", ["pointerout", "pointerover"]), mu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), mu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), mu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), mu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), mu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), mu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ne = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Io = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ne)
  );
  function bd(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u], e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var c = a[f], i = c.instance, y = c.currentTarget;
            if (c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = y;
            try {
              n(e);
            } catch (g) {
              an(g);
            }
            e.currentTarget = null, n = i;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (c = a[f], i = c.instance, y = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = y;
            try {
              n(e);
            } catch (g) {
              an(g);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function V(l, t) {
    var u = t[Cn];
    u === void 0 && (u = t[Cn] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (Td(t, l, 2, !1), u.add(a));
  }
  function Nc(l, t, u) {
    var a = 0;
    t && (a |= 4), Td(
      u,
      l,
      a,
      t
    );
  }
  var Sn = "_reactListening" + Math.random().toString(36).slice(2);
  function pc(l) {
    if (!l[Sn]) {
      l[Sn] = !0, yi.forEach(function(u) {
        u !== "selectionchange" && (Io.has(u) || Nc(u, !1, l), Nc(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Sn] || (t[Sn] = !0, Nc("selectionchange", !1, t));
    }
  }
  function Td(l, t, u, a) {
    switch (Vd(t)) {
      case 2:
        var e = Oy;
        break;
      case 8:
        e = My;
        break;
      default:
        e = Lc;
    }
    u = e.bind(
      null,
      t,
      u,
      l
    ), e = void 0, !In || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), a ? e !== void 0 ? l.addEventListener(t, u, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, u, !0) : e !== void 0 ? l.addEventListener(t, u, {
      passive: e
    }) : l.addEventListener(t, u, !1);
  }
  function Hc(l, t, u, a, e) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var c = a.stateNode.containerInfo;
          if (c === e) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var i = f.tag;
              if ((i === 3 || i === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (f = Yu(c), f === null) return;
            if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              a = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    Di(function() {
      var y = n, g = kn(u), T = [];
      l: {
        var r = ts.get(l);
        if (r !== void 0) {
          var m = pe, j = l;
          switch (l) {
            case "keypress":
              if (Re(u) === 0) break l;
            case "keydown":
            case "keyup":
              m = Lv;
              break;
            case "focusin":
              j = "focus", m = uf;
              break;
            case "focusout":
              j = "blur", m = uf;
              break;
            case "beforeblur":
            case "afterblur":
              m = uf;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              m = Ni;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              m = xv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              m = Wv;
              break;
            case Fi:
            case Ii:
            case Pi:
              m = Bv;
              break;
            case ls:
              m = kv;
              break;
            case "scroll":
            case "scrollend":
              m = pv;
              break;
            case "wheel":
              m = Iv;
              break;
            case "copy":
            case "cut":
            case "paste":
              m = Gv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              m = Hi;
              break;
            case "toggle":
            case "beforetoggle":
              m = lo;
          }
          var x = (t & 4) !== 0, ul = !x && (l === "scroll" || l === "scrollend"), v = x ? r !== null ? r + "Capture" : null : r;
          x = [];
          for (var d = y, o; d !== null; ) {
            var b = d;
            if (o = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || o === null || v === null || (b = _a(d, v), b != null && x.push(
              fe(d, b, o)
            )), ul) break;
            d = d.return;
          }
          0 < x.length && (r = new m(
            r,
            j,
            null,
            u,
            g
          ), T.push({ event: r, listeners: x }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (r = l === "mouseover" || l === "pointerover", m = l === "mouseout" || l === "pointerout", r && u !== $n && (j = u.relatedTarget || u.fromElement) && (Yu(j) || j[qu]))
            break l;
          if ((m || r) && (r = g.window === g ? g : (r = g.ownerDocument) ? r.defaultView || r.parentWindow : window, m ? (j = u.relatedTarget || u.toElement, m = y, j = j ? Yu(j) : null, j !== null && (ul = P(j), x = j.tag, j !== ul || x !== 5 && x !== 27 && x !== 6) && (j = null)) : (m = null, j = y), m !== j)) {
            if (x = Ni, b = "onMouseLeave", v = "onMouseEnter", d = "mouse", (l === "pointerout" || l === "pointerover") && (x = Hi, b = "onPointerLeave", v = "onPointerEnter", d = "pointer"), ul = m == null ? r : za(m), o = j == null ? r : za(j), r = new x(
              b,
              d + "leave",
              m,
              u,
              g
            ), r.target = ul, r.relatedTarget = o, b = null, Yu(g) === y && (x = new x(
              v,
              d + "enter",
              j,
              u,
              g
            ), x.target = o, x.relatedTarget = ul, b = x), ul = b, m && j)
              t: {
                for (x = m, v = j, d = 0, o = x; o; o = ra(o))
                  d++;
                for (o = 0, b = v; b; b = ra(b))
                  o++;
                for (; 0 < d - o; )
                  x = ra(x), d--;
                for (; 0 < o - d; )
                  v = ra(v), o--;
                for (; d--; ) {
                  if (x === v || v !== null && x === v.alternate)
                    break t;
                  x = ra(x), v = ra(v);
                }
                x = null;
              }
            else x = null;
            m !== null && Ed(
              T,
              r,
              m,
              x,
              !1
            ), j !== null && ul !== null && Ed(
              T,
              ul,
              j,
              x,
              !0
            );
          }
        }
        l: {
          if (r = y ? za(y) : window, m = r.nodeName && r.nodeName.toLowerCase(), m === "select" || m === "input" && r.type === "file")
            var D = Qi;
          else if (Gi(r))
            if (Ci)
              D = vo;
            else {
              D = io;
              var Z = co;
            }
          else
            m = r.nodeName, !m || m.toLowerCase() !== "input" || r.type !== "checkbox" && r.type !== "radio" ? y && Wn(y.elementType) && (D = Qi) : D = so;
          if (D && (D = D(l, y))) {
            Xi(
              T,
              D,
              u,
              g
            );
            break l;
          }
          Z && Z(l, r, y), l === "focusout" && y && r.type === "number" && y.memoizedProps.value != null && Jn(r, "number", r.value);
        }
        switch (Z = y ? za(y) : window, l) {
          case "focusin":
            (Gi(Z) || Z.contentEditable === "true") && (Lu = Z, sf = y, Ha = null);
            break;
          case "focusout":
            Ha = sf = Lu = null;
            break;
          case "mousedown":
            df = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            df = !1, $i(T, u, g);
            break;
          case "selectionchange":
            if (yo) break;
          case "keydown":
          case "keyup":
            $i(T, u, g);
        }
        var R;
        if (ef)
          l: {
            switch (l) {
              case "compositionstart":
                var q = "onCompositionStart";
                break l;
              case "compositionend":
                q = "onCompositionEnd";
                break l;
              case "compositionupdate":
                q = "onCompositionUpdate";
                break l;
            }
            q = void 0;
          }
        else
          Vu ? Bi(l, u) && (q = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (q = "onCompositionStart");
        q && (xi && u.locale !== "ko" && (Vu || q !== "onCompositionStart" ? q === "onCompositionEnd" && Vu && (R = Ui()) : (Vt = g, Pn = "value" in Vt ? Vt.value : Vt.textContent, Vu = !0)), Z = bn(y, q), 0 < Z.length && (q = new pi(
          q,
          l,
          null,
          u,
          g
        ), T.push({ event: q, listeners: Z }), R ? q.data = R : (R = ji(u), R !== null && (q.data = R)))), (R = uo ? ao(l, u) : eo(l, u)) && (q = bn(y, "onBeforeInput"), 0 < q.length && (Z = new pi(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          g
        ), T.push({
          event: Z,
          listeners: q
        }), Z.data = R)), $o(
          T,
          l,
          y,
          u,
          g
        );
      }
      bd(T, t);
    });
  }
  function fe(l, t, u) {
    return {
      instance: l,
      listener: t,
      currentTarget: u
    };
  }
  function bn(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = _a(l, u), e != null && a.unshift(
        fe(l, e, n)
      ), e = _a(l, t), e != null && a.push(
        fe(l, e, n)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function ra(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Ed(l, t, u, a, e) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var c = u, i = c.alternate, y = c.stateNode;
      if (c = c.tag, i !== null && i === a) break;
      c !== 5 && c !== 26 && c !== 27 || y === null || (i = y, e ? (y = _a(u, n), y != null && f.unshift(
        fe(u, y, i)
      )) : e || (y = _a(u, n), y != null && f.push(
        fe(u, y, i)
      ))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var Po = /\r\n?/g, ly = /\u0000|\uFFFD/g;
  function Ad(l) {
    return (typeof l == "string" ? l : "" + l).replace(Po, `
`).replace(ly, "");
  }
  function zd(l, t) {
    return t = Ad(t), Ad(l) === t;
  }
  function Tn() {
  }
  function tl(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Cu(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Cu(l, "" + a);
        break;
      case "className":
        _e(l, "class", a);
        break;
      case "tabIndex":
        _e(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        _e(l, u, a);
        break;
      case "style":
        Oi(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          _e(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = De("" + a), l.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (u === "formAction" ? (t !== "input" && tl(l, t, "name", e.name, e, null), tl(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), tl(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), tl(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (tl(l, t, "encType", e.encType, e, null), tl(l, t, "method", e.method, e, null), tl(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = De("" + a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = Tn);
        break;
      case "onScroll":
        a != null && V("scroll", l);
        break;
      case "onScrollEnd":
        a != null && V("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(h(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(h(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = De("" + a), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "" + a) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(u, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(u) : l.setAttribute(u, a);
        break;
      case "popover":
        V("beforetoggle", l), V("toggle", l), ze(l, "popover", a);
        break;
      case "xlinkActuate":
        Ot(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Ot(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Ot(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Ot(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Ot(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Ot(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Ot(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Ot(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Ot(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        ze(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Rv.get(u) || u, ze(l, u, a));
    }
  }
  function xc(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        Oi(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(h(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(h(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Cu(l, a) : (typeof a == "number" || typeof a == "bigint") && Cu(l, "" + a);
        break;
      case "onScroll":
        a != null && V("scroll", l);
        break;
      case "onScrollEnd":
        a != null && V("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Tn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!hi.hasOwnProperty(u))
          l: {
            if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), t = u.slice(2, e ? u.length - 7 : void 0), n = l[Gl] || null, n = n != null ? n[u] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof a == "function")) {
              typeof n != "function" && n !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(t, a, e);
              break l;
            }
            u in l ? l[u] = a : a === !0 ? l.setAttribute(u, "") : ze(l, u, a);
          }
    }
  }
  function Dl(l, t, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        V("error", l), V("load", l);
        var a = !1, e = !1, n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var f = u[n];
            if (f != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(h(137, t));
                default:
                  tl(l, t, n, f, u, null);
              }
          }
        e && tl(l, t, "srcSet", u.srcSet, u, null), a && tl(l, t, "src", u.src, u, null);
        return;
      case "input":
        V("invalid", l);
        var c = n = f = e = null, i = null, y = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var g = u[a];
            if (g != null)
              switch (a) {
                case "name":
                  e = g;
                  break;
                case "type":
                  f = g;
                  break;
                case "checked":
                  i = g;
                  break;
                case "defaultChecked":
                  y = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  c = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null)
                    throw Error(h(137, t));
                  break;
                default:
                  tl(l, t, a, g, u, null);
              }
          }
        Ei(
          l,
          n,
          c,
          i,
          y,
          f,
          e,
          !1
        ), Oe(l);
        return;
      case "select":
        V("invalid", l), a = f = n = null;
        for (e in u)
          if (u.hasOwnProperty(e) && (c = u[e], c != null))
            switch (e) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                f = c;
                break;
              case "multiple":
                a = c;
              default:
                tl(l, t, e, c, u, null);
            }
        t = n, u = f, l.multiple = !!a, t != null ? Qu(l, !!a, t, !1) : u != null && Qu(l, !!a, u, !0);
        return;
      case "textarea":
        V("invalid", l), n = e = a = null;
        for (f in u)
          if (u.hasOwnProperty(f) && (c = u[f], c != null))
            switch (f) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                e = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(h(91));
                break;
              default:
                tl(l, t, f, c, u, null);
            }
        zi(l, a, e, n), Oe(l);
        return;
      case "option":
        for (i in u)
          if (u.hasOwnProperty(i) && (a = u[i], a != null))
            switch (i) {
              case "selected":
                l.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                tl(l, t, i, a, u, null);
            }
        return;
      case "dialog":
        V("beforetoggle", l), V("toggle", l), V("cancel", l), V("close", l);
        break;
      case "iframe":
      case "object":
        V("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ne.length; a++)
          V(ne[a], l);
        break;
      case "image":
        V("error", l), V("load", l);
        break;
      case "details":
        V("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        V("error", l), V("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in u)
          if (u.hasOwnProperty(y) && (a = u[y], a != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(137, t));
              default:
                tl(l, t, y, a, u, null);
            }
        return;
      default:
        if (Wn(t)) {
          for (g in u)
            u.hasOwnProperty(g) && (a = u[g], a !== void 0 && xc(
              l,
              t,
              g,
              a,
              u,
              void 0
            ));
          return;
        }
    }
    for (c in u)
      u.hasOwnProperty(c) && (a = u[c], a != null && tl(l, t, c, a, u, null));
  }
  function ty(l, t, u, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null, n = null, f = null, c = null, i = null, y = null, g = null;
        for (m in u) {
          var T = u[m];
          if (u.hasOwnProperty(m) && T != null)
            switch (m) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = T;
              default:
                a.hasOwnProperty(m) || tl(l, t, m, null, a, T);
            }
        }
        for (var r in a) {
          var m = a[r];
          if (T = u[r], a.hasOwnProperty(r) && (m != null || T != null))
            switch (r) {
              case "type":
                n = m;
                break;
              case "name":
                e = m;
                break;
              case "checked":
                y = m;
                break;
              case "defaultChecked":
                g = m;
                break;
              case "value":
                f = m;
                break;
              case "defaultValue":
                c = m;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (m != null)
                  throw Error(h(137, t));
                break;
              default:
                m !== T && tl(
                  l,
                  t,
                  r,
                  m,
                  a,
                  T
                );
            }
        }
        Kn(
          l,
          f,
          c,
          i,
          y,
          g,
          n,
          e
        );
        return;
      case "select":
        m = f = c = r = null;
        for (n in u)
          if (i = u[n], u.hasOwnProperty(n) && i != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                m = i;
              default:
                a.hasOwnProperty(n) || tl(
                  l,
                  t,
                  n,
                  null,
                  a,
                  i
                );
            }
        for (e in a)
          if (n = a[e], i = u[e], a.hasOwnProperty(e) && (n != null || i != null))
            switch (e) {
              case "value":
                r = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== i && tl(
                  l,
                  t,
                  e,
                  n,
                  a,
                  i
                );
            }
        t = c, u = f, a = m, r != null ? Qu(l, !!u, r, !1) : !!a != !!u && (t != null ? Qu(l, !!u, t, !0) : Qu(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        m = r = null;
        for (c in u)
          if (e = u[c], u.hasOwnProperty(c) && e != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                tl(l, t, c, null, a, e);
            }
        for (f in a)
          if (e = a[f], n = u[f], a.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                r = e;
                break;
              case "defaultValue":
                m = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(h(91));
                break;
              default:
                e !== n && tl(l, t, f, e, a, n);
            }
        Ai(l, r, m);
        return;
      case "option":
        for (var j in u)
          if (r = u[j], u.hasOwnProperty(j) && r != null && !a.hasOwnProperty(j))
            switch (j) {
              case "selected":
                l.selected = !1;
                break;
              default:
                tl(
                  l,
                  t,
                  j,
                  null,
                  a,
                  r
                );
            }
        for (i in a)
          if (r = a[i], m = u[i], a.hasOwnProperty(i) && r !== m && (r != null || m != null))
            switch (i) {
              case "selected":
                l.selected = r && typeof r != "function" && typeof r != "symbol";
                break;
              default:
                tl(
                  l,
                  t,
                  i,
                  r,
                  a,
                  m
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var x in u)
          r = u[x], u.hasOwnProperty(x) && r != null && !a.hasOwnProperty(x) && tl(l, t, x, null, a, r);
        for (y in a)
          if (r = a[y], m = u[y], a.hasOwnProperty(y) && r !== m && (r != null || m != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (r != null)
                  throw Error(h(137, t));
                break;
              default:
                tl(
                  l,
                  t,
                  y,
                  r,
                  a,
                  m
                );
            }
        return;
      default:
        if (Wn(t)) {
          for (var ul in u)
            r = u[ul], u.hasOwnProperty(ul) && r !== void 0 && !a.hasOwnProperty(ul) && xc(
              l,
              t,
              ul,
              void 0,
              a,
              r
            );
          for (g in a)
            r = a[g], m = u[g], !a.hasOwnProperty(g) || r === m || r === void 0 && m === void 0 || xc(
              l,
              t,
              g,
              r,
              a,
              m
            );
          return;
        }
    }
    for (var v in u)
      r = u[v], u.hasOwnProperty(v) && r != null && !a.hasOwnProperty(v) && tl(l, t, v, null, a, r);
    for (T in a)
      r = a[T], m = u[T], !a.hasOwnProperty(T) || r === m || r == null && m == null || tl(l, t, T, r, a, m);
  }
  var qc = null, Yc = null;
  function En(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function _d(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Od(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Bc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var jc = null;
  function uy() {
    var l = window.event;
    return l && l.type === "popstate" ? l === jc ? !1 : (jc = l, !0) : (jc = null, !1);
  }
  var Md = typeof setTimeout == "function" ? setTimeout : void 0, ay = typeof clearTimeout == "function" ? clearTimeout : void 0, Dd = typeof Promise == "function" ? Promise : void 0, ey = typeof queueMicrotask == "function" ? queueMicrotask : typeof Dd < "u" ? function(l) {
    return Dd.resolve(null).then(l).catch(ny);
  } : Md;
  function ny(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function fu(l) {
    return l === "head";
  }
  function Ud(l, t) {
    var u = t, a = 0, e = 0;
    do {
      var n = u.nextSibling;
      if (l.removeChild(u), n && n.nodeType === 8)
        if (u = n.data, u === "/$") {
          if (0 < a && 8 > a) {
            u = a;
            var f = l.ownerDocument;
            if (u & 1 && ce(f.documentElement), u & 2 && ce(f.body), u & 4)
              for (u = f.head, ce(u), f = u.firstChild; f; ) {
                var c = f.nextSibling, i = f.nodeName;
                f[Aa] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && f.rel.toLowerCase() === "stylesheet" || u.removeChild(f), f = c;
              }
          }
          if (e === 0) {
            l.removeChild(n), re(t);
            return;
          }
          e--;
        } else
          u === "$" || u === "$?" || u === "$!" ? e++ : a = u.charCodeAt(0) - 48;
      else a = 0;
      u = n;
    } while (u);
    re(t);
  }
  function Gc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Gc(u), Zn(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function fy(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[Aa])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = rt(l.nextSibling), l === null) break;
    }
    return null;
  }
  function cy(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = rt(l.nextSibling), l === null)) return null;
    return l;
  }
  function Xc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function iy(l, t) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete")
      t();
    else {
      var a = function() {
        t(), u.removeEventListener("DOMContentLoaded", a);
      };
      u.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function rt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
          break;
        if (t === "/$") return null;
      }
    }
    return l;
  }
  var Qc = null;
  function Rd(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (t === 0) return l;
          t--;
        } else u === "/$" && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Nd(l, t, u) {
    switch (t = En(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(h(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(h(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(h(454));
        return l;
      default:
        throw Error(h(451));
    }
  }
  function ce(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    Zn(l);
  }
  var dt = /* @__PURE__ */ new Map(), pd = /* @__PURE__ */ new Set();
  function An(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Xt = O.d;
  O.d = {
    f: sy,
    r: dy,
    D: vy,
    C: oy,
    L: yy,
    m: hy,
    X: my,
    S: ry,
    M: gy
  };
  function sy() {
    var l = Xt.f(), t = yn();
    return l || t;
  }
  function dy(l) {
    var t = Bu(l);
    t !== null && t.tag === 5 && t.type === "form" ? Fs(t) : Xt.r(l);
  }
  var ma = typeof document > "u" ? null : document;
  function Hd(l, t, u) {
    var a = ma;
    if (a && typeof t == "string" && t) {
      var e = at(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), pd.has(e) || (pd.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), Dl(t, "link", l), El(t), a.head.appendChild(t)));
    }
  }
  function vy(l) {
    Xt.D(l), Hd("dns-prefetch", l, null);
  }
  function oy(l, t) {
    Xt.C(l, t), Hd("preconnect", l, t);
  }
  function yy(l, t, u) {
    Xt.L(l, t, u);
    var a = ma;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + at(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (e += '[imagesrcset="' + at(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (e += '[imagesizes="' + at(
        u.imageSizes
      ) + '"]')) : e += '[href="' + at(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = ga(l);
          break;
        case "script":
          n = Sa(l);
      }
      dt.has(n) || (l = U(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), dt.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(ie(n)) || t === "script" && a.querySelector(se(n)) || (t = a.createElement("link"), Dl(t, "link", l), El(t), a.head.appendChild(t)));
    }
  }
  function hy(l, t) {
    Xt.m(l, t);
    var u = ma;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + at(a) + '"][href="' + at(l) + '"]', n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Sa(l);
      }
      if (!dt.has(n) && (l = U({ rel: "modulepreload", href: l }, t), dt.set(n, l), u.querySelector(e) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(se(n)))
              return;
        }
        a = u.createElement("link"), Dl(a, "link", l), El(a), u.head.appendChild(a);
      }
    }
  }
  function ry(l, t, u) {
    Xt.S(l, t, u);
    var a = ma;
    if (a && l) {
      var e = ju(a).hoistableStyles, n = ga(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = a.querySelector(
          ie(n)
        ))
          c.loading = 5;
        else {
          l = U(
            { rel: "stylesheet", href: l, "data-precedence": t },
            u
          ), (u = dt.get(n)) && Cc(l, u);
          var i = f = a.createElement("link");
          El(i), Dl(i, "link", l), i._p = new Promise(function(y, g) {
            i.onload = y, i.onerror = g;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, zn(f, t, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: c
        }, e.set(n, f);
      }
    }
  }
  function my(l, t) {
    Xt.X(l, t);
    var u = ma;
    if (u && l) {
      var a = ju(u).hoistableScripts, e = Sa(l), n = a.get(e);
      n || (n = u.querySelector(se(e)), n || (l = U({ src: l, async: !0 }, t), (t = dt.get(e)) && Zc(l, t), n = u.createElement("script"), El(n), Dl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function gy(l, t) {
    Xt.M(l, t);
    var u = ma;
    if (u && l) {
      var a = ju(u).hoistableScripts, e = Sa(l), n = a.get(e);
      n || (n = u.querySelector(se(e)), n || (l = U({ src: l, async: !0, type: "module" }, t), (t = dt.get(e)) && Zc(l, t), n = u.createElement("script"), El(n), Dl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function xd(l, t, u, a) {
    var e = (e = G.current) ? An(e) : null;
    if (!e) throw Error(h(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (t = ga(u.href), u = ju(
          e
        ).hoistableStyles, a = u.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = ga(u.href);
          var n = ju(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            ie(l)
          )) && !n._p && (f.instance = n, f.state.loading = 5), dt.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, dt.set(l, u), n || Sy(
            e,
            l,
            u,
            f.state
          ))), t && a === null)
            throw Error(h(528, ""));
          return f;
        }
        if (t && a !== null)
          throw Error(h(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Sa(u), u = ju(
          e
        ).hoistableScripts, a = u.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(h(444, l));
    }
  }
  function ga(l) {
    return 'href="' + at(l) + '"';
  }
  function ie(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function qd(l) {
    return U({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Sy(l, t, u, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Dl(t, "link", u), El(t), l.head.appendChild(t));
  }
  function Sa(l) {
    return '[src="' + at(l) + '"]';
  }
  function se(l) {
    return "script[async]" + l;
  }
  function Yd(l, t, u) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + at(u.href) + '"]'
          );
          if (a)
            return t.instance = a, El(a), a;
          var e = U({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), El(a), Dl(a, "style", e), zn(a, u.precedence, l), t.instance = a;
        case "stylesheet":
          e = ga(u.href);
          var n = l.querySelector(
            ie(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, El(n), n;
          a = qd(u), (e = dt.get(e)) && Cc(a, e), n = (l.ownerDocument || l).createElement("link"), El(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), Dl(n, "link", a), t.state.loading |= 4, zn(n, u.precedence, l), t.instance = n;
        case "script":
          return n = Sa(u.src), (e = l.querySelector(
            se(n)
          )) ? (t.instance = e, El(e), e) : (a = u, (e = dt.get(n)) && (a = U({}, u), Zc(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), El(e), Dl(e, "link", a), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(h(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, zn(a, u.precedence, l));
    return t.instance;
  }
  function zn(l, t, u) {
    for (var a = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = a.length ? a[a.length - 1] : null, n = e, f = 0; f < a.length; f++) {
      var c = a[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function Cc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Zc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var _n = null;
  function Bd(l, t, u) {
    if (_n === null) {
      var a = /* @__PURE__ */ new Map(), e = _n = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else
      e = _n, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[Aa] || n[pl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = a.get(f);
        c ? c.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function jd(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function by(l, t, u) {
    if (u === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Gd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var de = null;
  function Ty() {
  }
  function Ey(l, t, u) {
    if (de === null) throw Error(h(475));
    var a = de;
    if (t.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var e = ga(u.href), n = l.querySelector(
          ie(e)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (a.count++, a = On.bind(a), l.then(a, a)), t.state.loading |= 4, t.instance = n, El(n);
          return;
        }
        n = l.ownerDocument || l, u = qd(u), (e = dt.get(e)) && Cc(u, e), n = n.createElement("link"), El(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), Dl(n, "link", u), t.instance = n;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = On.bind(a), l.addEventListener("load", t), l.addEventListener("error", t));
    }
  }
  function Ay() {
    if (de === null) throw Error(h(475));
    var l = de;
    return l.stylesheets && l.count === 0 && wc(l, l.stylesheets), 0 < l.count ? function(t) {
      var u = setTimeout(function() {
        if (l.stylesheets && wc(l, l.stylesheets), l.unsuspend) {
          var a = l.unsuspend;
          l.unsuspend = null, a();
        }
      }, 6e4);
      return l.unsuspend = t, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function On() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) wc(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Mn = null;
  function wc(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Mn = /* @__PURE__ */ new Map(), t.forEach(zy, l), Mn = null, On.call(l));
  }
  function zy(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Mn.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Mn.set(l, u);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), a = f);
        }
        a && u.set(null, a);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = u.get(f) || a, n === a && u.set(null, e), u.set(f, e), this.count++, a = On.bind(this), e.addEventListener("load", a), e.addEventListener("error", a), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var ve = {
    $$typeof: Ul,
    Provider: null,
    Consumer: null,
    _currentValue: Y,
    _currentValue2: Y,
    _threadCount: 0
  };
  function _y(l, t, u, a, e, n, f, c) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Gn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gn(0), this.hiddenUpdates = Gn(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Xd(l, t, u, a, e, n, f, c, i, y, g, T) {
    return l = new _y(
      l,
      t,
      u,
      f,
      c,
      i,
      y,
      T
    ), t = 1, n === !0 && (t |= 24), n = kl(3, null, null, t), l.current = n, n.stateNode = l, t = _f(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: t
    }, Uf(n), l;
  }
  function Qd(l) {
    return l ? (l = $u, l) : $u;
  }
  function Cd(l, t, u, a, e, n) {
    e = Qd(e), a.context === null ? a.context = e : a.pendingContext = e, a = Jt(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = Wt(l, a, t), u !== null && (tt(u, l, t), Ca(u, l, t));
  }
  function Zd(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function Vc(l, t) {
    Zd(l, t), (l = l.alternate) && Zd(l, t);
  }
  function wd(l) {
    if (l.tag === 13) {
      var t = Wu(l, 67108864);
      t !== null && tt(t, l, 67108864), Vc(l, 67108864);
    }
  }
  var Dn = !0;
  function Oy(l, t, u, a) {
    var e = S.T;
    S.T = null;
    var n = O.p;
    try {
      O.p = 2, Lc(l, t, u, a);
    } finally {
      O.p = n, S.T = e;
    }
  }
  function My(l, t, u, a) {
    var e = S.T;
    S.T = null;
    var n = O.p;
    try {
      O.p = 8, Lc(l, t, u, a);
    } finally {
      O.p = n, S.T = e;
    }
  }
  function Lc(l, t, u, a) {
    if (Dn) {
      var e = Kc(a);
      if (e === null)
        Hc(
          l,
          t,
          a,
          Un,
          u
        ), Ld(l, a);
      else if (Uy(
        e,
        l,
        t,
        u,
        a
      ))
        a.stopPropagation();
      else if (Ld(l, a), t & 4 && -1 < Dy.indexOf(l)) {
        for (; e !== null; ) {
          var n = Bu(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = ru(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << 31 - Wl(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    At(n), (F & 6) === 0 && (vn = gt() + 500, ee(0));
                  }
                }
                break;
              case 13:
                c = Wu(n, 2), c !== null && tt(c, n, 2), yn(), Vc(n, 2);
            }
          if (n = Kc(a), n === null && Hc(
            l,
            t,
            a,
            Un,
            u
          ), n === e) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else
        Hc(
          l,
          t,
          a,
          null,
          u
        );
    }
  }
  function Kc(l) {
    return l = kn(l), Jc(l);
  }
  var Un = null;
  function Jc(l) {
    if (Un = null, l = Yu(l), l !== null) {
      var t = P(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = vl(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Un = l, null;
  }
  function Vd(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (vv()) {
          case ei:
            return 2;
          case ni:
            return 8;
          case be:
          case ov:
            return 32;
          case fi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Wc = !1, cu = null, iu = null, su = null, oe = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), du = [], Dy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Ld(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        cu = null;
        break;
      case "dragenter":
      case "dragleave":
        iu = null;
        break;
      case "mouseover":
      case "mouseout":
        su = null;
        break;
      case "pointerover":
      case "pointerout":
        oe.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ye.delete(t.pointerId);
    }
  }
  function he(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: u,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = Bu(t), t !== null && wd(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function Uy(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return cu = he(
          cu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "dragenter":
        return iu = he(
          iu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "mouseover":
        return su = he(
          su,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return oe.set(
          n,
          he(
            oe.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, ye.set(
          n,
          he(
            ye.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
    }
    return !1;
  }
  function Kd(l) {
    var t = Yu(l.target);
    if (t !== null) {
      var u = P(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = vl(u), t !== null) {
            l.blockedOn = t, Tv(l.priority, function() {
              if (u.tag === 13) {
                var a = lt();
                a = Xn(a);
                var e = Wu(u, a);
                e !== null && tt(e, u, a), Vc(u, a);
              }
            });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Rn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = Kc(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(
          u.type,
          u
        );
        $n = a, u.target.dispatchEvent(a), $n = null;
      } else
        return t = Bu(u), t !== null && wd(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function Jd(l, t, u) {
    Rn(l) && u.delete(t);
  }
  function Ry() {
    Wc = !1, cu !== null && Rn(cu) && (cu = null), iu !== null && Rn(iu) && (iu = null), su !== null && Rn(su) && (su = null), oe.forEach(Jd), ye.forEach(Jd);
  }
  function Nn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, Wc || (Wc = !0, z.unstable_scheduleCallback(
      z.unstable_NormalPriority,
      Ry
    )));
  }
  var pn = null;
  function Wd(l) {
    pn !== l && (pn = l, z.unstable_scheduleCallback(
      z.unstable_NormalPriority,
      function() {
        pn === l && (pn = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t], a = l[t + 1], e = l[t + 2];
          if (typeof a != "function") {
            if (Jc(a || u) === null)
              continue;
            break;
          }
          var n = Bu(u);
          n !== null && (l.splice(t, 3), t -= 3, Jf(
            n,
            {
              pending: !0,
              data: e,
              method: u.method,
              action: a
            },
            a,
            e
          ));
        }
      }
    ));
  }
  function re(l) {
    function t(i) {
      return Nn(i, l);
    }
    cu !== null && Nn(cu, l), iu !== null && Nn(iu, l), su !== null && Nn(su, l), oe.forEach(t), ye.forEach(t);
    for (var u = 0; u < du.length; u++) {
      var a = du[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < du.length && (u = du[0], u.blockedOn === null); )
      Kd(u), u.blockedOn === null && du.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var e = u[a], n = u[a + 1], f = e[Gl] || null;
        if (typeof n == "function")
          f || Wd(u);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Gl] || null)
              c = f.formAction;
            else if (Jc(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? u[a + 1] = c : (u.splice(a, 3), a -= 3), Wd(u);
        }
      }
  }
  function $c(l) {
    this._internalRoot = l;
  }
  Hn.prototype.render = $c.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(h(409));
    var u = t.current, a = lt();
    Cd(u, a, l, t, null, null);
  }, Hn.prototype.unmount = $c.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Cd(l.current, 2, null, l, null, null), yn(), t[qu] = null;
    }
  };
  function Hn(l) {
    this._internalRoot = l;
  }
  Hn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = vi();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < du.length && t !== 0 && t < du[u].priority; u++) ;
      du.splice(u, 0, l), u === 0 && Kd(l);
    }
  };
  var $d = B.version;
  if ($d !== "19.1.0")
    throw Error(
      h(
        527,
        $d,
        "19.1.0"
      )
    );
  O.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(h(188)) : (l = Object.keys(l).join(","), Error(h(268, l)));
    return l = N(t), l = l !== null ? E(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Ny = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xn.isDisabled && xn.supportsFiber)
      try {
        ba = xn.inject(
          Ny
        ), Jl = xn;
      } catch {
      }
  }
  return ge.createRoot = function(l, t) {
    if (!L(l)) throw Error(h(299));
    var u = !1, a = "", e = v0, n = o0, f = y0, c = null;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (c = t.unstable_transitionCallbacks)), t = Xd(
      l,
      1,
      !1,
      null,
      null,
      u,
      a,
      e,
      n,
      f,
      c,
      null
    ), l[qu] = t.current, pc(l), new $c(t);
  }, ge.hydrateRoot = function(l, t, u) {
    if (!L(l)) throw Error(h(299));
    var a = !1, e = "", n = v0, f = o0, c = y0, i = null, y = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (c = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (i = u.unstable_transitionCallbacks), u.formState !== void 0 && (y = u.formState)), t = Xd(
      l,
      1,
      !0,
      t,
      u ?? null,
      a,
      e,
      n,
      f,
      c,
      i,
      y
    ), t.context = Qd(null), u = t.current, a = lt(), a = Xn(a), e = Jt(a), e.callback = null, Wt(u, e, a), u = a, t.current.lanes = u, Ea(t, u), At(t), l[qu] = t.current, pc(l), new Hn(t);
  }, ge.version = "19.1.0", ge;
}
var nv;
function Qy() {
  if (nv) return Ic.exports;
  nv = 1;
  function z() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z);
      } catch (B) {
        console.error(B);
      }
  }
  return z(), Ic.exports = Xy(), Ic.exports;
}
var Cy = Qy();
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zy = (z) => z.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), wy = (z) => z.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (B, p, h) => h ? h.toUpperCase() : p.toLowerCase()
), fv = (z) => {
  const B = wy(z);
  return B.charAt(0).toUpperCase() + B.slice(1);
}, iv = (...z) => z.filter((B, p, h) => !!B && B.trim() !== "" && h.indexOf(B) === p).join(" ").trim(), Vy = (z) => {
  for (const B in z)
    if (B.startsWith("aria-") || B === "role" || B === "title")
      return !0;
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ly = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ky = Qt.forwardRef(
  ({
    color: z = "currentColor",
    size: B = 24,
    strokeWidth: p = 2,
    absoluteStrokeWidth: h,
    className: L = "",
    children: P,
    iconNode: vl,
    ...ml
  }, N) => Qt.createElement(
    "svg",
    {
      ref: N,
      ...Ly,
      width: B,
      height: B,
      stroke: z,
      strokeWidth: h ? Number(p) * 24 / Number(B) : p,
      className: iv("lucide", L),
      ...!P && !Vy(ml) && { "aria-hidden": "true" },
      ...ml
    },
    [
      ...vl.map(([E, U]) => Qt.createElement(E, U)),
      ...Array.isArray(P) ? P : [P]
    ]
  )
);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ai = (z, B) => {
  const p = Qt.forwardRef(
    ({ className: h, ...L }, P) => Qt.createElement(Ky, {
      ref: P,
      iconNode: B,
      className: iv(
        `lucide-${Zy(fv(z))}`,
        `lucide-${z}`,
        h
      ),
      ...L
    })
  );
  return p.displayName = fv(z), p;
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jy = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
], Wy = ai("bot", Jy);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $y = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], ky = ai("map-pin", $y);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fy = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
], Iy = ai("message-circle", Fy);
function Py({ setOpen: z }) {
  return /* @__PURE__ */ Q.jsxs(
    "button",
    {
      onClick: () => z(!0),
      className: "tw:cursor-pointer tw:bg-blue-600 tw:text-white tw:font-semibold tw:px-4 tw:py-3 tw:rounded-full tw:shadow-lg tw:transition-all tw:duration-700 tw:ease-out tw:transform tw:flex tw:items-center tw:gap-2 tw:hover:bg-blue-700 tw:active:scale-95 pulse-glow tw:group",
      children: [
        /* @__PURE__ */ Q.jsx(Iy, { className: "tw:w-5 tw:h-5" }),
        /* @__PURE__ */ Q.jsx("span", { className: "tw:transition-all tw:duration-500 tw:ease-out tw:group-hover:text-base tw:group-hover:font-bold", children: "Book Now" }),
        /* @__PURE__ */ Q.jsx("span", { className: "tw:hidden tw:group-hover:inline-block tw:transition-all tw:duration-500 tw:ease-out tw:text-xs tw:font-light tw:ml-2", children: "Explore experiences!" })
      ]
    }
  );
}
function l1({ message: z }) {
  return /* @__PURE__ */ Q.jsxs("div", { className: "tw:mb-4 tw:flex tw:items-center tw:gap-2", children: [
    /* @__PURE__ */ Q.jsx("div", { className: "tw:flex-shrink-0 tw:bg-blue-100 tw:text-blue-600 tw:p-2 tw:rounded-full tw:shadow", children: /* @__PURE__ */ Q.jsx(Wy, { className: "tw:w-4 tw:h-4" }) }),
    /* @__PURE__ */ Q.jsx("div", { className: "tw:bg-blue-100 tw:text-blue-800 tw:rounded-full tw:px-4 tw:py-2 tw:w-fit tw:shadow animate-fadeIn", children: z })
  ] });
}
function t1({
  quickChoices: z = [],
  onInputChange: B,
  onQuickSelect: p
}) {
  return /* @__PURE__ */ Q.jsxs("div", { className: "tw:my-4 tw:space-y-3", children: [
    /* @__PURE__ */ Q.jsx("div", { className: "tw:flex tw:flex-wrap tw:gap-2", children: z.map((h, L) => /* @__PURE__ */ Q.jsx(
      "button",
      {
        onClick: () => p(h),
        className: "tw:bg-gray-200 tw:hover:bg-blue-200 tw:text-gray-800 tw:text-xs tw:px-3 tw:py-1 tw:rounded-full tw:transition-colors tw:duration-200",
        children: h
      },
      L
    )) }),
    /* @__PURE__ */ Q.jsx(
      "textarea",
      {
        onChange: (h) => B(h.target.value),
        placeholder: "Type your request...",
        rows: 2,
        className: "tw:flex-1 tw:w-full tw:rounded-2xl tw:border tw:border-gray-300 tw:p-2 tw:focus:outline-none tw:focus:ring-2 tw:focus:ring-blue-400 tw:transition-shadow tw:duration-200 tw:shadow"
      }
    )
  ] });
}
function u1({ experience: z }) {
  return /* @__PURE__ */ Q.jsxs("div", { className: "tw:bg-white tw:rounded-lg tw:shadow tw:hover:shadow-lg tw:transition-transform tw:duration-200 tw:hover:scale-105 tw:overflow-hidden", children: [
    z.featuredImage ? /* @__PURE__ */ Q.jsx(
      "img",
      {
        src: z.featuredImage.url,
        alt: z.featuredImage.alt || z.title,
        className: "tw:w-full tw:h-40 tw:object-cover tw:rounded-md"
      }
    ) : /* @__PURE__ */ Q.jsx("div", { className: "tw:bg-gray-200 tw:w-full tw:h-40 tw:flex tw:items-center tw:justify-center tw:text-gray-400 tw:text-sm tw:font-medium", children: "No Image" }),
    /* @__PURE__ */ Q.jsxs("div", { className: "tw:p-4", children: [
      /* @__PURE__ */ Q.jsx("h3", { className: "tw:text-lg tw:font-bold", children: z.title }),
      /* @__PURE__ */ Q.jsx("p", { className: "tw:text-sm tw:text-gray-600 tw:line-clamp-2", children: z.description }),
      /* @__PURE__ */ Q.jsxs("div", { className: "tw:mt-2 tw:text-xs tw:text-gray-400 tw:flex tw:items-center tw:gap-1", children: [
        /* @__PURE__ */ Q.jsx(ky, { className: "tw:w-3 tw:h-3 tw:text-blue-600" }),
        /* @__PURE__ */ Q.jsx("span", { children: z.location })
      ] })
    ] })
  ] });
}
function a1() {
  return /* @__PURE__ */ Q.jsxs("div", { className: "tw:animate-pulse tw:bg-white tw:rounded-lg tw:shadow tw:p-4 tw:space-y-2", children: [
    /* @__PURE__ */ Q.jsx("div", { className: "tw:bg-gray-300 tw:h-40 tw:w-full tw:rounded" }),
    /* @__PURE__ */ Q.jsx("div", { className: "tw:h-4 tw:bg-gray-300 tw:rounded tw:w-3/4" }),
    /* @__PURE__ */ Q.jsx("div", { className: "tw:h-3 tw:bg-gray-200 tw:rounded tw:w-1/2" }),
    /* @__PURE__ */ Q.jsx("div", { className: "tw:h-3 tw:bg-gray-200 tw:rounded tw:w-1/3" })
  ] });
}
function e1({ experiences: z, loading: B }) {
  return /* @__PURE__ */ Q.jsx("div", { className: "tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:gap-4", children: B ? Array.from({ length: 4 }).map((p, h) => /* @__PURE__ */ Q.jsx(a1, {}, h)) : z == null ? void 0 : z.map((p) => /* @__PURE__ */ Q.jsx(
    u1,
    {
      experience: p
    },
    p.id
  )) });
}
const n1 = [
  "Sunbeds & Umbrellas",
  "Water Sports",
  "Romantic Sunset",
  "Family Day",
  "Snorkeling"
];
function f1({ open: z, setOpen: B, loading: p, experiences: h }) {
  return /* @__PURE__ */ Q.jsx(
    "div",
    {
      className: `tw:fixed tw:inset-0 tw:bg-black/30 tw:flex tw:items-center tw:justify-center tw:p-4 tw:transition-opacity tw:duration-500 ${z ? "tw:opacity-100 tw:pointer-events-auto" : "tw:opacity-0 tw:pointer-events-none"}`,
      children: /* @__PURE__ */ Q.jsxs(
        "div",
        {
          className: "tw:relative tw:bg-white tw:rounded-lg tw:shadow-xl tw:w-full tw:max-w-3xl tw:max-h-[90vh] tw:overflow-y-auto tw:p-4 tw:md:p-6 tw:transition-all tw:duration-500 tw:transform",
          style: {
            transform: z ? "scale(1)" : "scale(0.95)"
          },
          children: [
            /* @__PURE__ */ Q.jsx(
              "button",
              {
                onClick: () => B(!1),
                className: "tw:absolute tw:top-4 tw:right-4 tw:text-gray-600 tw:hover:text-black tw:text-2xl tw:font-bold",
                children: "×"
              }
            ),
            /* @__PURE__ */ Q.jsx(l1, { message: "👋 Book now – tell us what you want!" }),
            /* @__PURE__ */ Q.jsx(
              t1,
              {
                quickChoices: n1,
                onInputChange: (L) => console.log("User typed:", L),
                onQuickSelect: (L) => console.log("User clicked choice:", L)
              }
            ),
            /* @__PURE__ */ Q.jsx(
              e1,
              {
                experiences: h,
                loading: p
              }
            )
          ]
        }
      )
    }
  );
}
function c1({ businessId: z }) {
  const [B, p] = Qt.useState(!1), [h, L] = Qt.useState([]), [P, vl] = Qt.useState(!1), ml = window.location.hostname === "localhost" ? "http://localhost:3000" : "https://reserved.gr";
  return Qt.useEffect(() => {
    if (!B) return;
    (async () => {
      vl(!0);
      try {
        const U = await (await fetch(
          `${ml}/api/experiences?businessId=${z}`
        )).json();
        L(U);
      } catch (E) {
        console.error("Failed to fetch experiences:", E);
      } finally {
        vl(!1);
      }
    })();
  }, [B, z]), /* @__PURE__ */ Q.jsxs(Q.Fragment, { children: [
    /* @__PURE__ */ Q.jsx(
      f1,
      {
        open: B,
        setOpen: p,
        loading: P,
        experiences: h
      }
    ),
    !B && /* @__PURE__ */ Q.jsx(Py, { setOpen: p })
  ] });
}
function cv() {
  var L;
  const z = document.currentScript, B = ((L = z == null ? void 0 : z.dataset) == null ? void 0 : L.businessId) || "demo", p = document.createElement("div");
  p.className = "reserved-widget", document.body.appendChild(p), Cy.createRoot(p).render(/* @__PURE__ */ Q.jsx(c1, { businessId: B }));
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", cv) : cv();
