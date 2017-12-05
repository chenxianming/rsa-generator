var exec = require('child_process').exec;

module.exports = {
    generator:(size,callback) => {
        var obj = {};
        
        ( () => new Promise( (resolve,reject) => {

            exec(`mkdir pem`,(err,stdout,stderr) => {
                resolve();
            });

        } ) )().then( () => new Promise( (resolve,reject) => {

            exec(`cd pem && openssl genrsa -out rsa_${size}_priv.pem ${size}`,(err,stdout,stderr) => {
                if(err){
                    throw err;
                }

                resolve();
            });

        } ) ).then( () => new Promise( (resolve,reject) => {

            exec(`cd pem && cat rsa_${size}_priv.pem #if you are on mac you can | pbcopy to copy to the clipboard`,(err,stdout,stderr) => {
                if(err){
                    throw err;
                }

                obj.private = stdout;
                
                resolve();
            });

        } ) ).then( () => new Promise( (resolve,reject) => {

            exec(`cd pem && openssl rsa -pubout -in rsa_${size}_priv.pem -out rsa_${size}_pub.pem`,(err,stdout,stderr) => {
                if(err){
                    throw err;
                }

                resolve();
            });

        } ) ).then( () => new Promise( (resolve,reject) => {

            exec(`cd pem && cat rsa_${size}_pub.pem`,(err,stdout,stderr) => {
                if(err){
                    throw err;
                }
                
                obj.public = stdout;
                
                callback(obj);
            });

        } ) ).catch( (e) => {
            
            callback({
                msg:'generator failed.'
            });
        } )
        
    }
}