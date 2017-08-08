"use strict";

var 
    FS = require('fs'),
    PATH = require('path');


module.exports = {
    getDirectories: function(srcpath) {
        return FS.readdirSync(srcpath)
            .filter(file => FS.lstatSync(PATH.join(srcpath, file)).isDirectory())
    },

    createDir: function (dirPath) {
        try {
            FS.mkdirSync(dirPath);
        } catch(E) {
            console.log("Errorrrr: ", E);
        }
    },

    isDateFormat: function(dateStr) {
        var regex = /201[7,8]-[0,1][0-9]-[0-3][0-9]/;
        if(dateStr && dateStr.match(regex))
            return true;
        return false;
    },

    cloneFiles: function(source, destination) {
        if(FS.existsSync(source))
            FS.createReadStream(source).pipe(FS.createWriteStream(destination));   
    }

}