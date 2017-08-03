const fileFolderUtils = require('./FileFolderUtils.js')
const fs = require('fs-extra')
const settings = require("./settings.json")
var exec = require('child_process').exec
var Git = require('nodegit');


const gitClone = (url, folderToCloneTo)=> {
    return Git.Clone(url, folderToCloneTo)
}

const clone = (url) => {
    return fs.emptyDir(settings.bisectFolderAbsolutePath)
        .then(() => gitClone(url, settings.bisectFolderAbsolutePath))
}
module.exports = {
    clone: clone
}
