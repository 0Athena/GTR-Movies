var array = [1,2,3,4];
const reducer = (accumulator, currentValue) => accumulator * currentValue;
console.log(array.reduce(reducer));

var arr = array.map((num) => num + 1);

console.log(arr);
