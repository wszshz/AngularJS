angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope,TestData) {
	$scope.chats=TestData.all();
	$scope.remove=function(chat){
		TestData.remove(chat);
	};
})
.controller('HomeDetailCtrl', function($scope, $stateParams, TestData) {
  	$scope.chat = TestData.get($stateParams.chatId);
})
.controller('SettingCtrl',function($scope,$rootScope,ServerData){
	$scope.settings={
		enableFriends:true
	};
	
	$scope.test=function(){
		//ServerData.Test();
		ServerData.TestFun();
	};
	
	$scope.user={
		name:'LZQ'
	};
	//接收广播
	$scope.$on('to-child',function(event,data){
		console.log('接收父级的数据：');
		console.log(data);
	});
	$rootScope.$on('to-parent',function(event,data){
		console.log('接收子级的数据：');
		console.log(data);
	});
})
.controller('TestCtrl',function($scope){
	$scope.data={
		Now:new Date()
	};
});
