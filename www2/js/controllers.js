angular.module('starter.controllers', [])

.controller('ServiceTestCtrl', function($scope,$rootScope,$ionicLoading,DataServer) {
	$scope.GetReceipts=function(){
		DataServer.GetReceipts();
	};
});
