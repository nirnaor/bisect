const fs = require('fs-extra')
const settings = require("./settings.json")
let Git = require('nodegit');


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
