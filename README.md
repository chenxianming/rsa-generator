
# rsa-generator

>async rsa private/public key generating on linux os (fast rsa key generator)


Example

	var rsaGenerator = require('rsa-generator'),
	    size = 1024;

	rsaGenerator.generator(size,(data) => {
		console.log(data);
	});





