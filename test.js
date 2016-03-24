'use strict';

var oberr = require("./index");
var test = require('tap').test;
var assert = require("assert");


test("When err is not an error, it must be returned unharmed", function(t){
    var cases = [
        "just a silly string",
        new Date(),
        42,
        { error: "Not an Error" },
        function(){
            return "foo",
        },
        []
    ];
    
    
    cases.forEach(function(testCase){
        t.equal(testCase, oberr(testCase), "Oberr just returned the value it got");
    });
    
    t.end();
});


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
    
    var errorWithSpecificFields = new Error("Specific fields");
    errorWithSpecificFields.customField = 19;
    t.deepEqual(oberr(errorWithSpecificFields, ["message", "customField"]), {message: "Specific fields", customField: 19});
    
    var undefinedError = undefined;
    t.equal(oberr(undefinedError), undefined);
    
    t.end();
});
