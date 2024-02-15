// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.0-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint32array@v0.2.0-esm/index.mjs";import{factory as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.2.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-uint32-max@v0.2.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.2.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.0-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.0-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.1.1-esm/index.mjs";var b=.00991256303526217;function y(t,e,s){var n,r;do{n=g(t())/e,r=g(t())}while(-2*r<n*n);return s?n-e:e-n}var x=function(t,e){var s,n,r;for(n=v(-.5*e*e),(s=[]).push(b/n),s.push(e),r=2;r<t;r++)s[r]=f(-2*g(b/s[r-1]+n)),n=v(-.5*s[r]*s[r]);return s.push(0),s}(128,3.442619855899),w=function(t){var e,s;for(e=[],s=0;s<t.length-1;s++)e.push(t[s+1]/t[s]);return e}(x);function L(t,e){return function(){var s,n,r,i,o,d,m;for(;;){if(o=2*t()-1,d=127&e(),j(o)<w[d])return o*x[d];if(0===d)return y(t,3.442619855899,o<0);if(i=o*x[d],r=i*i,m=d+1,s=v(-.5*(x[d]*x[d]-r)),(n=v(-.5*(x[m]*x[m]-r)))+t()*(s-n)<1)return i}}}function E(j){var v,f,g,b;if(b={copy:!0},arguments.length){if(!r(j))throw new TypeError(c("invalid argument. Must provide an object. Value: `%s`.",j));if(o(j,"copy")&&(b.copy=j.copy,!i(j.copy)))throw new TypeError(c("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",j.copy));if(o(j,"prng")){if(!n(j.prng))throw new TypeError(c("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",j.prng));v=j.prng}else if(o(j,"state")){if(b.state=j.state,!d(j.state))throw new TypeError(c("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",j.state))}else if(o(j,"seed")&&(b.seed=j.seed,void 0===j.seed))throw new TypeError(c("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",j.seed))}return void 0===b.state?void 0===v?v=(f=m(b)).normalized:(f=m({seed:p(1+h*v()),copy:b.copy}),b.seed=null):v=(f=m(b)).normalized,g=L(v,f),t(g,"NAME","improved-ziggurat"),null===b.seed?(t(g,"seed",null),t(g,"seedLength",null)):(e(g,"seed",y),e(g,"seedLength",x)),j&&j.prng?(s(g,"state",a(null),l),t(g,"stateLength",null),t(g,"byteLength",null),t(g,"toJSON",a(null))):(s(g,"state",N,O),e(g,"stateLength",w),e(g,"byteLength",E),t(g,"toJSON",T)),t(g,"PRNG",v),g;function y(){return f.seed}function x(){return f.seedLength}function w(){return f.stateLength}function E(){return f.byteLength}function N(){return f.state}function O(t){f.state=t}function T(){var t={type:"PRNG"};return t.name=g.NAME,t.state=u(f.state),t.params=[],t}}var N=E();t(N,"factory",E);export{N as default,E as factory};
//# sourceMappingURL=index.mjs.map