angular.module('starter.services', [])

.factory('Common', function($http,$ionicLoading) {
  	var platform = (!window.hasOwnProperty("cordova") ? "web" : (cordova.platformId=="android"?"AND":"IOS"));
  	var lastTryLogin = new Date();
  	var oprTooFast=function(){
  		var now = new Date();
		if (now-lastTryLogin<5) {
			if (callback) {
				callback({
					"success":false,
					"msg":"太快了，操作慢点"
				});
			}else{
				$ionicLoading.show({template: "太快了，操作慢点",duration: 2000});
			}
			return true;
		}
		return false;
  	};
 	  	
	var request=function(method,action,data,callback){
		$http({
			method:method,
			url: fz.getServerUrl() + "/K11SVC/" + action,
			data:data
		}).then(function(response){
			if(callback){
				callback(response.data);
			}
		},function(err){
			$ionicPopup.alert({
				template:"错误状态" + err.status+"："+err.statusText,
				itle:'请求错误'
			});
		});
	};
	
	
  	return {
  		//获取app的应用平台
    	GetPlatform:function(){
    		return platform;
    	},
    	//验证是否操作太快
		OprTooFast:function(callback){
			return oprTooFast(callback);
		},
		//请求资源，例如：Request('post','Login',{user:'test'},callback);
		Request:function(method,action,data,callback){
			return request(method,action,data,callback);
		},
		//弹框提示
		Alert:function(msg){
			$ionicLoading.show({template: msg,duration: 2000});
		}
  	};
});
