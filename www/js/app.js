angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','starter.filters','starter.directives','ngMessages'])
.run(function($ionicPlatform) {
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
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
	//解决tabs的在安卓上显示在顶部的问题
	$ionicConfigProvider.platform.ios.tabs.style('standard');
        $ionicConfigProvider.platform.ios.tabs.position('bottom');
        $ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('standard');

        $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
        $ionicConfigProvider.platform.android.navBar.alignTitle('left');

        $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
        $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');        

        $ionicConfigProvider.platform.ios.views.transition('ios');
        $ionicConfigProvider.platform.android.views.transition('android');
	
  $stateProvider
  //设置一个抽象的模板，使用该模板的views会调用该模板的内容
  //这里的url对应views的上一层目录
    .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/app-tabs.html"
  })
  .state('app.home', {
    url: '/home',
    views: {
      'app-home': {
        templateUrl: 'templates/app/home.html',
        controller: 'HomeCtrl'
      }
    }
  })
  .state('app.home-detail', {
      url: '/home/:chatId',
      views: {
        'app-home': {
          templateUrl: 'templates/app/home-detail.html',
          controller: 'HomeDetailCtrl'
        }
      }
    })
  .state('app.setting',{
  	url:'/setting',
  	views:{
  		'app-setting':{
  			templateUrl:'templates/app/setting.html',
  			controller:'SettingCtrl'
  		}
  	}
  })
  .state('app.test',{
  	url:'/test',
  	views:{
  		'app-test':{
  			templateUrl:'templates/app/test.html',
  			controller:'TestCtrl'
  		}
  	}
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
