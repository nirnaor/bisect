var fs = require("fs-extra");
var path = require("path");

var rmdir = function(dir) {
    var list = fs.readdirSync(dir);
    for(var i = 0; i < list.length; i++) {
        var filename = path.join(dir, list[i]);
        var stat = fs.statSync(filename);

        if(filename == "." || filename == "..") {
            // pass these files
        } else if(stat.isDirectory()) {
            // rmdir recursively
            rmdir(filename);
        } else {
            // rm fiilename
            fs.unlinkSync(filename);
        }
    }
    fs.rmdirSync(dir);
};


const ensureEmptyDirectoryExists = (path)=> {
    console.log('ensureEmptyDirectoryExists: ' + path);
    fs.pathExists(path).
        then(exist => {
            if (exist) {
                fs.remove(path)
            }
        })
}


module.exports = {
    ensureEmptyDirectoryExists: ensureEmptyDirectoryExists
}
