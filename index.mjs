// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint32array@v0.1.1-esm/index.mjs";import{factory as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.1.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-uint32-max@v0.1.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.1.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.1.1-esm/index.mjs";var b=.00991256303526217;function y(e,t,s){var n,r;do{n=g(e())/t,r=g(e())}while(-2*r<n*n);return s?n-t:t-n}var x=function(e,t){var s,n,r;for(n=u(-.5*t*t),(s=[]).push(b/n),s.push(t),r=2;r<e;r++)s[r]=v(-2*g(b/s[r-1]+n)),n=u(-.5*s[r]*s[r]);return s.push(0),s}(128,3.442619855899),w=function(e){var t,s;for(t=[],s=0;s<e.length-1;s++)t.push(e[s+1]/e[s]);return t}(x);function T(e,t){return function(){var s,n,r,i,o,d,m;for(;;){if(o=2*e()-1,d=127&t(),f(o)<w[d])return o*x[d];if(0===d)return y(e,3.442619855899,o<0);if(i=o*x[d],r=i*i,m=d+1,s=u(-.5*(x[d]*x[d]-r)),(n=u(-.5*(x[m]*x[m]-r)))+e()*(s-n)<1)return i}}}function L(f){var u,v,g,b;if(b={copy:!0},arguments.length){if(!r(f))throw new TypeError(c("0oT47,Gz",f));if(o(f,"copy")&&(b.copy=f.copy,!i(f.copy)))throw new TypeError(c("0oT2o,GE","copy",f.copy));if(o(f,"prng")){if(!n(f.prng))throw new TypeError(c("0oT6u,JI","prng",f.prng));u=f.prng}else if(o(f,"state")){if(b.state=f.state,!d(f.state))throw new TypeError(c("0oT6z,JJ","state",f.state))}else if(o(f,"seed")&&(b.seed=f.seed,void 0===f.seed))throw new TypeError(c("0oT74,JK","seed",f.seed))}return void 0===b.state?void 0===u?u=(v=m(b)).normalized:(v=m({seed:a(1+h*u()),copy:b.copy}),b.seed=null):u=(v=m(b)).normalized,g=T(u,v),e(g,"NAME","improved-ziggurat"),null===b.seed?(e(g,"seed",null),e(g,"seedLength",null)):(t(g,"seed",y),t(g,"seedLength",x)),f&&f.prng?(s(g,"state",l(null),p),e(g,"stateLength",null),e(g,"byteLength",null),e(g,"toJSON",l(null))):(s(g,"state",E,J),t(g,"stateLength",w),t(g,"byteLength",L),e(g,"toJSON",N)),e(g,"PRNG",u),g;function y(){return v.seed}function x(){return v.seedLength}function w(){return v.stateLength}function L(){return v.byteLength}function E(){return v.state}function J(e){v.state=e}function N(){var e={type:"PRNG"};return e.name=g.NAME,e.state=j(v.state),e.params=[],e}}var E=L();e(E,"factory",L);export{E as default,L as factory};
//# sourceMappingURL=index.mjs.map
