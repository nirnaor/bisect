const fileFolderUtils = require('./FileFolderUtils.js')

const clone = (url) => {
    const bisectFolder = require("./settings.json").bisectFolderAbsolutePath
    fileFolderUtils.ensureEmptyDirectoryExists(bisectFolder)

    // const folderName = url.split("/")[1].split(".")[0]
	// const command = `cd ${bisectFolder} && git clone ${url}`

	// console.log(`will run command: ${command}`)

	// var exec = require('child_process').exec;
	// var child;

	// child = exec(command, function (error, stdout, stderr) {
		// console.log('stdout: ' + stdout);
		// console.log('stderr: ' + stderr);
		// if (error !== null) {
			// console.log('exec error: ' + error);
		// }
	// });
}
module.exports = {
    clone: clone
}
