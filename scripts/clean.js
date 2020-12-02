const utils = require('./utils');
const package = require("../package.json");

const { deleteFile, deleteFolder, getFilesFromPath } = utils;
let cleanFolders = ["dist", "build"]

const fs = require('fs');

// Remove build folders matching *.*.* 
const regex = RegExp(/^\d+.\d+.\d+$/i);
let buildFolders = fs.readdirSync('./').filter( fName => {
	return regex.test(fName)
})
cleanFolders = cleanFolders.concat(buildFolders);
console.log("Attempt to clean folders:",cleanFolders);
cleanFolders.forEach( folder => {
	deleteFolder(folder);
})

