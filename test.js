'use strict';

var oberr = require("./index");
var test = require('tap').test;
var assert = require("assert");

test('Test', function (t) {
    var err = new Error("Something broke")
    t.deepEqual(Object.keys(oberr(err)), ["stack", "arguments", "type", "message"]);
    t.deepEqual(oberr(err).stack, err.stack);
    t.deepEqual(oberr(err).message, "Something broke");
    
    var errorWithCustomData = new Error("Custom error");
    errorWithCustomData.customField = 42;
    t.deepEqual(Object.keys(oberr(errorWithCustomData)), ["stack", "arguments", "type", "message", "customField"]);
    t.deepEqual(oberr(errorWithCustomData).stack, errorWithCustomData.stack);
    t.deepEqual(oberr(errorWithCustomData).message, "Custom error");
    t.deepEqual(oberr(errorWithCustomData).customField, 42);
    
    t.end();
});
