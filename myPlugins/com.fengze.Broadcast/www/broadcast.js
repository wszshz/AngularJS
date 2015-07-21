var broadcast = { 
    registerBroadCast: function(success,error) {
        cordova.exec(success, error, "broadcast", "registerBroadCast", []);
    },
    sendBroadCast: function(success,error) {
        cordova.exec(success, error, "broadcast", "sendBroadCast", []);
    }
};

module.exports = broadcast;