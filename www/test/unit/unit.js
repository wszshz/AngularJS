describe('test example:', function() {
	var exp;
	//每个it运行之前
	beforeEach(function(){
		exp=12;
	});
	//每个it运行之后
	afterEach(function(){
		exp=12;
	});
	describe('number compare1:',function(){
	  it('12 should === 12', function() {
	  	expect(exp).toBe(12);
	  });
	  it('12 should == 12', function() {
	  	expect(exp).toEqual(12);
	  });
	  it('12 should != 10', function() {
	  	expect(exp).not.toEqual(10);
	  });
	});
});
