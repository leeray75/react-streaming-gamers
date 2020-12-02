const fs = require('fs');
const package = require('../package.json')
const rimraf = require("rimraf");
const ConsoleColors = require('./console-colors');

const { FgBlue, FgRed, Bright, color } = ConsoleColors;

function deleteFolder(folder) {
    if (folder && fs.existsSync(folder)) {
        console.log(color([Bright, FgBlue], 'Deleting Folder: '), color([FgRed], folder));
        rimraf.sync(folder);
    }
}

function deleteFile(file) {
    if (fs.existsSync(file)) {
        console.log(color([Bright, FgBlue], 'Deleting File: '), color([FgRed], file));
        fs.unlinkSync(file);
    }
}

function getFilesFromPath(path, extension) {
    let dir = fs.readdirSync(path);
    return dir.filter(elm => elm.match(new RegExp(`.*\.(${extension})`, 'ig')));
}

module.exports = {
    deleteFolder,
    deleteFile,
    getFilesFromPath
}