var add=require('../calc.js').add;
var subtract=require('../calc.js').subtract;
var multiply=require('../calc.js').multiply;
var divide=require('../calc.js').divide;
var expect=require('chai').expect;

describe.only('加法函数测试',function(){
  before(function(){
    console.log('before');
  });
  after(function(){
    console.log('after');
  });
  beforeEach(function(){
    console.log('beforeEach');
  });
  afterEach(function(){
    console.log('afterEach');
  });
  it('1+abc=NaN',function(){
    expect(isNaN(add(1,'abc'))).to.be.ok;
  });
  it('0+0=0',function(){
    expect(add(0,0)).to.be.equal(0);
  }); 
  it('0+1=1',function(){
    expect(add(0,1)).to.be.equal(1);
  });
  it('1+1=2',function(){
    expect(add(1,1)).to.be.equal(2);
  });
})
describe('减法函数测试',function(){
  it('1-1=0',function(){
    expect(subtract(1,1)).to.be.equal(0);
  })
})
describe('乘法函数测试',function(){
  it('2*2=4',function(){
    expect(multiply(2,2)).to.be.equal(4);
  })
})
describe('除法函数测试',function(){ 
  it('4/2=2',function(){
    expect(divide(4,2)).to.be.equal(2);
  })
})
