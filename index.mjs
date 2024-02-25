// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint32array@v0.2.1-esm/index.mjs";import{factory as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@v0.2.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-uint32-max@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.2.1-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.2.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.1-esm/index.mjs";var b=.00991256303526217;function y(e,t,s){var n,r;do{n=g(e())/t,r=g(e())}while(-2*r<n*n);return s?n-t:t-n}var x=3.442619855899,w=function(e,t){var s,n,r;for(n=u(-.5*t*t),(s=[]).push(b/n),s.push(t),r=2;r<e;r++)s[r]=v(-2*g(b/s[r-1]+n)),n=u(-.5*s[r]*s[r]);return s.push(0),s}(128,x),T=function(e){var t,s;for(t=[],s=0;s<e.length-1;s++)t.push(e[s+1]/e[s]);return t}(w),L=127;function E(v){var g,b,E,N;if(N={copy:!0},arguments.length){if(!r(v))throw new TypeError(c("0oT47",v));if(o(v,"copy")&&(N.copy=v.copy,!i(v.copy)))throw new TypeError(c("0oT2o","copy",v.copy));if(o(v,"prng")){if(!n(v.prng))throw new TypeError(c("0oT6u","prng",v.prng));g=v.prng}else if(o(v,"state")){if(N.state=v.state,!d(v.state))throw new TypeError(c("0oT6z","state",v.state))}else if(o(v,"seed")&&(N.seed=v.seed,void 0===v.seed))throw new TypeError(c("0oT74","seed",v.seed))}return void 0===N.state?void 0===g?g=(b=m(N)).normalized:(b=m({seed:a(1+h*g()),copy:N.copy}),N.seed=null):g=(b=m(N)).normalized,E=function(e,t){return function(){for(var s,n,r,i,o,d,m;;){if(o=2*e()-1,d=t()&L,f(o)<T[d])return o*w[d];if(0===d)return y(e,x,o<0);if(r=(i=o*w[d])*i,m=d+1,s=u(-.5*(w[d]*w[d]-r)),(n=u(-.5*(w[m]*w[m]-r)))+e()*(s-n)<1)return i}}}(g,b),e(E,"NAME","improved-ziggurat"),null===N.seed?(e(E,"seed",null),e(E,"seedLength",null)):(t(E,"seed",(function(){return b.seed})),t(E,"seedLength",(function(){return b.seedLength}))),v&&v.prng?(s(E,"state",l(null),p),e(E,"stateLength",null),e(E,"byteLength",null),e(E,"toJSON",l(null))):(s(E,"state",(function(){return b.state}),(function(e){b.state=e})),t(E,"stateLength",(function(){return b.stateLength})),t(E,"byteLength",(function(){return b.byteLength})),e(E,"toJSON",(function(){var e={type:"PRNG"};return e.name=E.NAME,e.state=j(b.state),e.params=[],e}))),e(E,"PRNG",g),E}var N=E();e(N,"factory",E);export{N as default,E as factory};
//# sourceMappingURL=index.mjs.map
