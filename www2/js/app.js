// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform,$ionicHistory,$ionicLoading,$location,$ionicPopup) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
  
  //主页面显示退出
  $ionicPlatform.registerBackButtonAction(function (e) {
        e.preventDefault();
        function showConfirm() {
            var confirmPopup = $ionicPopup.confirm({
                title: '<strong>退出应用?</strong>',
                template: '你确定要退出应用吗?',
                okText: '退出',
                cancelText: '取消'
            });
            confirmPopup.then(function (res) {
                if (res) {
                    ionic.Platform.exitApp();
                } else {
                    // Don't close
                }
            });
        }
        // Is there a page to go back to?
        if ($location.path() == '/ServiceTest') {
        	showConfirm();
        } else if ($ionicHistory.backView() ) {
            // Go back in history
            $ionicHistory.goBack();
        }
        else{
        	showConfirm();
        }
        return false;
    }, 101);
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('ServiceTest', {
    url: "/ServiceTest",
    templateUrl:'templates/ServiceTest.html',
    controller: 'ServiceTestCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/ServiceTest');

});
var services = angular.module('starter.services', []);