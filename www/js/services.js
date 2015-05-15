angular.module('starter.services', [])

.factory('TestData', function() {
  // 测试数据
  var chats = [{
    id: 0,
    name: '小明',
    lastText: 'duang,duang,duang?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: '隔壁老王',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: '白小飞',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: '王大锤',
    lastText: '不要在意这些细节',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('ServerData',function($http,$ionicPopup){
	var request=function(method,action,data,callback){
		$http({
			method:method,
			url: "http://192.168.1.210:8091/K11SVC/" + action,
			data:data
		}).then(function(response){
				if(callback){
					callback(response.data);
				}
		},function(err){
				$ionicPopup.alert({
					template:"错误状态" + err.status+"："+err.statusText,
					title:'请求错误'
				});
		});
	};
	
	var testFun=function(data){
		var injector = angular.injector(["ng"]);
      	var $q = injector.get("$q");
       	var deferred = $q.defer();
       	if (data) {
       		deferred.resolve('cg');	//成功
       	} else{
    		deferred.reject('sb');	//失败
       	}
       	return deferred.promise;
	};
	
	return{
		Test:function(){
			var msg='asdf';
			request('get','K11Service.svc/Test2',null,function(data){
				$ionicPopup.alert({template:data.success,title:'test'});
			});
			//$ionicPopup.alert({template:msg,title:'test'});
		},
		TestFun:function(){	//使用promise的方法
			var i=0;
			testFun(true).then(function(data){
				console.log(i++)
				console.log(data);
				return testFun(false);	//继续第二次调用
			},function(data){
				console.log(data);
				return testFun(true);
			}).then(function(data){
				console.log(i++)
				console.log(data);
			},function(data){
				console.log(data);
			});
		}
	}
});
