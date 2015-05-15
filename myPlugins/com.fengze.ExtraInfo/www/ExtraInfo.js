var getExtra = {    
    get: function(success, fail) {
        cordova.exec(success, fail, "ExtraInfo", "getExtra", []);
    }    
};

module.exports = getExtra;