var MyPlugin = {    
    test: function(success,error,data) {	//data为json对象
        cordova.exec(success, error, "MyPlugin", "test", [data]);
    }
};

module.exports = MyPlugin;