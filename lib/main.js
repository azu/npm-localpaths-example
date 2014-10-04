/**
 * Created by azu on 2014/10/04.
 * LICENSE : MIT
 */
"use strict";
var main = {};
main.help = function () {
    var message = require("example-utils").loadFile(__filename + ".txt");
    console.log(message);
};
module.exports = main;