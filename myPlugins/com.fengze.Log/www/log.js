var fzLog = {    
    Log: function(success,faild,data) {
        cordova.exec(success, faild, "fzLog", "Log", [data]);
    }
};

module.exports = fzLog;

/* 使用例子：
 $fzLog.Log(null,null,{text:res,path:"/sdcard/LZQ/text.txt"});
 * */