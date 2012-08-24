// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.

(function() {
	"use strict";

	var engine = require("./difference.js");

	exports.setUp = function(done) {
		engine.initialize(10);
		done();
	};

	exports.test_calculatesDifferenceFromInitialValue = function(test) {
		var difference = engine.difference(3);
		test.equals(difference, 7, "difference");
		test.done();
	};

	exports.test_neverReturnsLessThanZero = function(test) {
		var difference = engine.difference(30);
		test.equals(difference, 0, "never less than zero");
		test.done();
	};
}());