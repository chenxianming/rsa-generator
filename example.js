
var rsaGenerator = require('./index.js');

rsaGenerator.generator(1024,(data) => {
    console.log(data);
});

