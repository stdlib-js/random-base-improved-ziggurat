<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Improved Ziggurat Method

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Standard normally distributed pseudorandom numbers using the [Improved Ziggurat][ziggurat-algorithm] method.



<section class="usage">

## Usage

```javascript
import randn from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-improved-ziggurat@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-improved-ziggurat@deno/mod.js';
```

#### randn()

Returns a standard normally distributed pseudorandom number.

```javascript
var r = randn();
// returns <number>
```

#### randn.factory( \[options] )

Returns a pseudorandom number generator (PRNG) for generating standard normally distributed pseudorandom numbers.

```javascript
var rand = randn.factory();
```

The function accepts the following `options`:

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the returned pseudorandom number generator, one must seed the provided `prng` (assuming the provided `prng` is seedable).
-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned generator has exclusive control over its internal state. Default: `true`.

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom numbers, set the `prng` option.

```javascript
import minstd from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@deno/mod.js';

var rand = randn.factory({
    'prng': minstd.normalized
});

var r = rand();
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = randn.factory({
    'seed': 12345
});

var r1 = rand1();
// returns <number>

var rand2 = randn.factory({
    'seed': 12345
});

var r2 = rand2();
// returns <number>

var bool = ( r1 === r2 );
// returns true
```

To return a generator having a specific initial state, set the generator `state` option.

```javascript
var rand;
var bool;
var r;
var i;

// Generate pseudorandom numbers, thus progressing the generator state:
for ( i = 0; i < 1000; i++ ) {
    r = randn();
}

// Create a new PRNG initialized to the current state of `randn`:
rand = randn.factory({
    'state': randn.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand() === randn() );
// returns true
```

#### randn.NAME

The generator name.

```javascript
var str = randn.NAME;
// returns 'improved-ziggurat'
```

#### randn.PRNG

The underlying pseudorandom number generator for uniformly distributed numbers on the interval `[0,1)`.

```javascript
var prng = randn.PRNG;
// returns <Function>
```

#### randn.seed

The value used to seed `randn()`.

```javascript
var rand;
var r;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    r = randn();
}

// Generate the same pseudorandom values...
rand = randn.factory({
    'seed': randn.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = randn.factory({
    'prng': Math.random
});

var seed = rand.seed;
// returns null
```

#### randn.seedLength

Length of generator seed.

```javascript
var len = randn.seedLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = randn.factory({
    'prng': Math.random
});

var len = rand.seedLength;
// returns null
```

#### randn.state

Writable property for getting and setting the generator state.

```javascript
var r = randn();
// returns <number>

r = randn();
// returns <number>

// ...

// Get a copy of the current state:
var state = randn.state;
// returns <Uint32Array>

r = randn();
// returns <number>

r = randn();
// returns <number>

// Reset the state:
randn.state = state;

// Replay the last two pseudorandom numbers:
r = randn();
// returns <number>

r = randn();
// returns <number>

// ...
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = randn.factory({
    'prng': Math.random
});

var state = rand.state;
// returns null
```

#### randn.stateLength

Length of generator state.

```javascript
var len = randn.stateLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = randn.factory({
    'prng': Math.random
});

var len = rand.stateLength;
// returns null
```

#### randn.byteLength

Size (in bytes) of generator state.

```javascript
var sz = randn.byteLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = randn.factory({
    'prng': Math.random
});

var sz = rand.byteLength;
// returns null
```

#### randn.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = randn.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

If provided a PRNG for uniformly distributed numbers, this method returns `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = randn.factory({
    'prng': Math.random
});

var o = rand.toJSON();
// returns null
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If PRNG state is "shared" (meaning a state array was provided during PRNG creation and **not** copied) and one sets the generator state to a state array having a different length, the PRNG does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize PRNG output according to the new shared state array, the state array for **each** relevant PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the generator state to a state array of the same length, the PRNG state is updated (along with the state of all other PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randn from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-improved-ziggurat@deno/mod.js';

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( randn() );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = randn.factory({
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = randn.factory({
    'seed': randn.seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Doornik, Jurgen A. 2005. "An Improved Ziggurat Method to Generate Normal Random Samples." [&lt;https://www.doornik.com/research/ziggurat.pdf>][@doornik:2005].
-   Marsaglia, George, and Wai Wan Tsang. 2000. "The Ziggurat Method for Generating Random Variables." _Journal of Statistical Software_ 5 (1): 1–7. doi:[10.18637/jss.v005.i08][@marsaglia:2000b].
-   Marsaglia, George. 1964. "Generating a Variable from the Tail of the Normal Distribution." _Technometrics_ 6 (1): 101–2. doi:[10.1080/00401706.1964.10490150][@marsaglia:1964b].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random-iter/improved-ziggurat`][@stdlib/random/iter/improved-ziggurat]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a standard normal distribution using the Improved Ziggurat algorithm.</span>
-   <span class="package-name">[`@stdlib/random-streams/improved-ziggurat`][@stdlib/random/streams/improved-ziggurat]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a standard normal distribution using the Improved Ziggurat algorithm.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-base-improved-ziggurat.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-base-improved-ziggurat

[test-image]: https://github.com/stdlib-js/random-base-improved-ziggurat/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/random-base-improved-ziggurat/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-base-improved-ziggurat/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-base-improved-ziggurat?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-base-improved-ziggurat.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-base-improved-ziggurat/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-base-improved-ziggurat/tree/deno
[deno-readme]: https://github.com/stdlib-js/random-base-improved-ziggurat/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/random-base-improved-ziggurat/tree/umd
[umd-readme]: https://github.com/stdlib-js/random-base-improved-ziggurat/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/random-base-improved-ziggurat/tree/esm
[esm-readme]: https://github.com/stdlib-js/random-base-improved-ziggurat/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/random-base-improved-ziggurat/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-base-improved-ziggurat/main/LICENSE

[ziggurat-algorithm]: https://en.wikipedia.org/wiki/Ziggurat_algorithm

[@doornik:2005]: https://www.doornik.com/research/ziggurat.pdf

[@marsaglia:2000b]: http://dx.doi.org/10.18637/jss.v005.i08

[@marsaglia:1964b]: https://doi.org/10.1080/00401706.1964.10490150

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32/tree/deno

<!-- <related-links> -->

[@stdlib/random/iter/improved-ziggurat]: https://github.com/stdlib-js/random-iter-improved-ziggurat/tree/deno

[@stdlib/random/streams/improved-ziggurat]: https://github.com/stdlib-js/random-streams-improved-ziggurat/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
