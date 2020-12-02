const utils = require('./utils');
const { deleteFile, deleteFolder, getFilesFromPath } = utils;

deleteFile('./package-lock.json');
deleteFolder("./node_modules");

