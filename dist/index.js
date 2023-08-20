"use strict";var l=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var S=l(function(pe,A){
var J=require('@stdlib/math-base-special-sqrt/dist'),m=require('@stdlib/math-base-special-exp/dist'),F=require('@stdlib/math-base-special-ln/dist'),b=.00991256303526217;function K(e,a){var r,t,n;for(t=m(-.5*a*a),r=[],r.push(b/t),r.push(a),n=2;n<e;n++)r[n]=J(-2*F(b/r[n-1]+t)),t=m(-.5*r[n]*r[n]);return r.push(0),r}A.exports=K
});var x=l(function(ge,w){
function V(e){var a,r;for(a=[],r=0;r<e.length-1;r++)a.push(e[r+1]/e[r]);return a}w.exports=V
});var R=l(function(ye,O){
var L=require('@stdlib/math-base-special-ln/dist');function k(e,a,r){var t,n;do t=L(e())/a,n=L(e());while(-2*n<t*t);return r?t-a:a-t}O.exports=k
});var _=l(function(qe,E){
var C=require('@stdlib/math-base-special-abs/dist'),T=require('@stdlib/math-base-special-exp/dist'),H=S(),W=x(),X=R(),Z=128,N=3.442619855899,v=H(Z,N),D=W(v),Q=127;function Y(e,a){return r;function r(){for(var t,n,d,c,s,i,f;;){if(s=2*e()-1,i=a()&Q,C(s)<D[i])return s*v[i];if(i===0)return X(e,N,s<0);if(c=s*v[i],d=c*c,f=i+1,t=T(-.5*(v[i]*v[i]-d)),n=T(-.5*(v[f]*v[f]-d)),n+e()*(t-n)<1)return c}}}E.exports=Y
});var h=l(function(he,z){
var u=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),M=require('@stdlib/utils-define-nonenumerable-read-write-accessor/dist'),$=require('@stdlib/assert-is-function/dist'),ee=require('@stdlib/assert-is-plain-object/dist'),re=require('@stdlib/assert-is-boolean/dist').isPrimitive,y=require('@stdlib/assert-has-own-property/dist'),te=require('@stdlib/assert-is-uint32array/dist'),q=require('@stdlib/random-base-mt19937/dist').factory,j=require('@stdlib/utils-constant-function/dist'),ae=require('@stdlib/utils-noop/dist'),ne=require('@stdlib/math-base-special-floor/dist'),ie=require('@stdlib/constants-uint32-max/dist'),ue=require('@stdlib/array-to-json/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist'),se=_();function oe(e){var a,r,t,n;if(n={copy:!0},arguments.length){if(!ee(e))throw new TypeError(p('0oT47',e));if(y(e,"copy")&&(n.copy=e.copy,!re(e.copy)))throw new TypeError(p('0oT2o',"copy",e.copy));if(y(e,"prng")){if(!$(e.prng))throw new TypeError(p('0oT6u',"prng",e.prng));a=e.prng}else if(y(e,"state")){if(n.state=e.state,!te(e.state))throw new TypeError(p('0oT6z',"state",e.state))}else if(y(e,"seed")&&(n.seed=e.seed,e.seed===void 0))throw new TypeError(p('0oT74',"seed",e.seed))}return n.state===void 0?a===void 0?(r=q(n),a=r.normalized):(r=q({seed:ne(1+ie*a()),copy:n.copy}),n.seed=null):(r=q(n),a=r.normalized),t=se(a,r),u(t,"NAME","improved-ziggurat"),n.seed===null?(u(t,"seed",null),u(t,"seedLength",null)):(g(t,"seed",d),g(t,"seedLength",c)),e&&e.prng?(M(t,"state",j(null),ae),u(t,"stateLength",null),u(t,"byteLength",null),u(t,"toJSON",j(null))):(M(t,"state",f,B),g(t,"stateLength",s),g(t,"byteLength",i),u(t,"toJSON",G)),u(t,"PRNG",a),t;function d(){return r.seed}function c(){return r.seedLength}function s(){return r.stateLength}function i(){return r.byteLength}function f(){return r.state}function B(o){r.state=o}function G(){var o={};return o.type="PRNG",o.name=t.NAME,o.state=ue(r.state),o.params=[],o}}z.exports=oe
});var P=l(function(me,I){
var ve=h(),ce=ve();I.exports=ce
});var le=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),U=P(),de=h();le(U,"factory",de);module.exports=U;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map