const fs = require('fs')


console.log('CHECK PERMISSIONS')
console.log('--------------------------------')

//check existing folder
console.log('existing folder')
checkPermissions('./data/')

//check mounted folders
console.log('mounted wr folder')
checkPermissions('./data_wr/')

console.log('mounted ro folder')
checkPermissions('./data_ro/')

function checkPermissions(path) {
	console.log('path:', path)

	try {
		fs.accessSync(path, fs.constants.X_OK);
		console.log('execute', 'success')
	}
	catch (err) {
		console.error('execute', 'error', err.message)
	}

	try {
		fs.accessSync(path, fs.constants.R_OK);
		console.log('read', 'success')
	}
	catch (err) {
		console.error('read', 'error', err.message)
	}

	try {
		fs.accessSync(path, fs.constants.W_OK);
		console.log('write', 'success')
	}
	catch (err) {
		console.error('write', 'error', err.message)
	}

	console.log('--------------------------------')
}



console.log()
console.log()
console.log('WRITE DUMMY FILE')
console.log('--------------------------------')

//try to write dummy file
console.log('existing folder')
writeDummy('./data/dummy.txt')

//mounted folders
console.log('mounted wr folder')
writeDummy('./data_wr/dummy.txt')

console.log('mounted ro folder')
writeDummy('./data_ro/dummy.txt')

function writeDummy(path) {
	console.log('path:', path)

	try {
		fs.writeFileSync(path, 'IM DUMMY');
		console.log('success')
	}
	catch (err) {
		console.error('error', err.message)
	}
	console.log('--------------------------------')
}



console.log()
console.log()
console.log('READ DUMMY FILE')
console.log('--------------------------------')

//try to read dummy file
console.log('existing folder')
readDummy('./data/dummy.txt')

//mounted folders
console.log('mounted wr folder')
readDummy('./data_wr/dummy.txt')

console.log('mounted ro folder')
readDummy('./data_ro/dummy.txt')


function readDummy(path) {
	console.log('path:', path)

	try {
		console.log('success', fs.readFileSync(path).toString())
	}
	catch (err) {
		console.error('error', err.message)
	}
	console.log('--------------------------------')
}