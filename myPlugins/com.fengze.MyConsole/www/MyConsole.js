var exec = require('cordova/exec');  
var MyConsole={
	log: function(callback,err) {  
        exec(function(winParam){  
            callback(winParam);  
        }, function(errParam){  
            err(errParam);  
        }, "MyConsole", "log", []);  
    },  
    err: function(callback,err) {  
        exec(function(winParam){  
            callback(winParam);  
        }, function(errParam){  
            err(errParam);  
        }, "MyConsole", "err", []);  
    }
};
module.exports = MyConsole;