services.factory('DataServer',function(Common) {
		return {
			GetReceipts: function() {
				var data = {
					membercode:'122',
					status:'10',
					data:{
						startTime:'2014-12-01',
						endTime:'2015-12-01'
					}
				};
				Common.RequestUrl('post', 'http://192.168.1.208:8093/K11SVC/GetReceipts', data, function(res) {
					console.log(res);
				})
			}
		};
	});