const utils = require('./utils');
const ConsoleColors = require('./console-colors');
const { deleteFile, deleteFolder, getFilesFromPath } = utils;
const { FgBlue, FgRed, FgGreen, Bright, color } = ConsoleColors;
const fs = require('fs');
const package = require('../package.json');
const {version} = package;
const versions = version.split(".");
const major = versions[0];
const minor = versions[1];
const patch = versions[2];

const gradleFile = 'gradle.properties';

const gradleTemplate = `
applicationName=brandplay
versionMajor=${major}
versionMinor=${minor}
versionBuild=${patch}
buildType=SNAPSHOT
csdProduct=true
csdBuildDirectory=${major}
nodeEnv=8
`
deleteFile(`./${gradleFile}`);
fs.writeFile(gradleFile,gradleTemplate.trim(), function(err){
	if(err){
		console.error("[Post Version] Error:\n",err)
		throw err;
	}
	else {
		console.log(color([Bright, FgBlue], 'Created File: '), color([Bright,FgGreen], gradleFile));
	}
})

