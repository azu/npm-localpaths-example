/**
 * Created by azu on 2014/10/04.
 * LICENSE : MIT
 */
"use strict";
var Utils = {};
Utils.loadFile = function (filePath) {
    require("fs").readFile(filePath, "utf-8");
};
module.exports = Utils;