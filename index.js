'use strict';

const
	path = require(`path`),
	fs = require(`fs`),
	fsp = fs.promises;

module.exports = jim => {
	// console

	jim.function(`console.log`, console.log);

	//path

	jim.function(`path.join`, args => path.join(...args));

	// fs

	jim.task(`fsp.writeFile`, fsp.writeFile);
	jim.task(`fsp.readFile`, filePath => {
		return fsp.readFile(filePath, `utf-8`);
	});

	jim.task(`fsp.readdir`, fsp.readdir);
	jim.task(`fs.existsSync`, fs.existsSync);
	jim.task(`fsp.mkdir`, fsp.mkdir);
	jim.task(`fsp.unlink`, fsp.unlink);
}
