/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var pow = require( '@stdlib/math-base-special-pow' );
var randi = require( '@stdlib/random-base-randi' );
var isUint8ClampedArray = require( '@stdlib/assert-is-uint8clampedarray' );
var pkg = require( './../package.json' ).name;
var Uint8ClampedArray = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var data;
	var arr;
	var i;

	data = [];
	for ( i = 0; i < len; i++ ) {
		data.push( randi() );
	}
	arr = new Uint8ClampedArray( data );

	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var out;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			arr[ i%len ] = randi();
			out = arr.sort();
			if ( typeof out !== 'object' ) {
				b.fail( 'should return an object' );
			}
		}
		b.toc();
		if ( !isUint8ClampedArray( out ) ) {
			b.fail( 'should return a Uint8ClampedArray' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var len;
	var min;
	var max;
	var f;
	var i;

	min = 1; // 10^min
	max = 5; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );
		f = createBenchmark( len );
		bench( pkg+':sort:len='+len, f );
	}
}

main();
