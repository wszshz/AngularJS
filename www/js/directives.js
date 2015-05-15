angular.module('starter.directives', [])
.directive('valAge',function(){
	//指令命名使用驼峰法，前台调用：val-Age
	return{
		require:'ngModel',
		link:function(scope,element,attrs,ngModel){
			ngModel.$parsers.push(function(val){
				ngModel.$setValidity('over',true);	//通过验证
				if(!val||val<=200) return;
				ngModel.$setValidity('over',false);
				return val;
			})
		}
	}
}).directive('myDirective',function(){
	//自定义指令
	return{
		restrict:'A',
		replace:true,
		scope:{
			myUrl:'@'
		},
		//template:'<a href="{{myUrl}}">自定义指令</a>'
		template:'<a my-Url="{{test}}">自定义指令</a>'
	};
})
.directive("testDir",function($ionicLoading,$rootScope){
        	return{
        		restrict:'A',
        		template:'<a id="forget" href="#">{{user.name}}?</a>',
        		replace:true,
//      		require:'^ngModel',
//      		scope:{
//      			ngModel:'='
//      		},
				//先运行controller,然后compile与link 2选1运行
        		controller:function($scope,$element){
        			$scope.user.name="test";
        			console.log('controller:');
        		},
        		link:function(scope,element,attr){
        			console.log('link:');
        			element.bind('click',function(){
        				$ionicLoading.show({template: scope.user.name,duration: 1000});
        				//使用广播
        				$rootScope.$broadcast('to-child', scope.user.name);	//向子级发布广播
        				scope.$emit('to-parent',scope.user.name);	//向父级发布广播
        				
        				//使用jqlite，不过不建议使用
        				var test = angular.element(document.querySelector('#forget')).text();
        				console.log(test);
        			});
        		},
//      		compile:function(element,attrs,transclude){
//      			return{
//      				pre:function preLink(scope,element,attrs){
//      					console.log('pre:');
//      				},
//      				post:function postLink(scope,element,attrs){
//      					console.log('post:');
//      				}
//      			}
//      		}
        	}
});