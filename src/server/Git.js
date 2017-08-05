const fs = require('fs-extra')
const path = require('path')
const settings = require('./settings.json')
let Git = require('nodegit')


const gitClone = (url, folderToCloneTo)=> {
    return Git.Clone(url, folderToCloneTo) // eslint-disable-line new-cap
}

const clone = (url, type) => {
    const bisectFolder = settings.bisectFolderAbsolutePath
    const repoFolder = path.join(bisectFolder, type)
    return fs.ensureDir(bisectFolder)
        .then(()=>fs.emptyDir(repoFolder))
        .then(() => gitClone(url, repoFolder))
}

module.exports = {
    clone: clone,
}
