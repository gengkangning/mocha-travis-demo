/**
 * 计算两个数 x 和 y 的和
 * @param {number} x 第一个求和的数
 * @param {number} y 第二个求和的数
 * @return {number} 返回 x+y 的求和结果
 */
function add(x,y){
  if(((typeof x)==='number')&&((typeof y)==='number')){
    return x*y;
  }else{
    return NaN;
  }
}
function subtract(x,y){
  return x-y;
}
function multiply(x,y){
  return x*y;
}
function divide(x,y){
  return x/y;
}
module.exports.add=add;
module.exports.subtract=subtract;
module.exports.multiply=multiply;
module.exports.divide=divide;
