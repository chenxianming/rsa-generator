
# rsa-generator

[![NPM version](https://img.shields.io/npm/v/rsa-generator.svg)](https://www.npmjs.com/package/rsa-generator)
[![License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/dt/rsa-generator.svg)](https://www.npmjs.com/package/rsa-generator)
[![node](https://img.shields.io/node/v/rsa-generator.svg)](https://nodejs.org/en/download/)

>async generating rsa private/public key on linux os (fast rsa key generator)


Example

    var rsaGenerator = require('rsa-generator'),
        size = 1024;

    rsaGenerator.generator(size,(data) => {
        console.log(data);
    });



