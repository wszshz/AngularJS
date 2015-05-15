//自定义过滤器
angular.module('starter.filters',[])
.filter('myfilter',function(){
	return function(input,parm){
		if(input){
			return '我的过滤器，参数：'+parm+'; '+input;
		}
	};
});
