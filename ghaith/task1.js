var array = [2, 4, 3, 6];
const sum = (accumulator, currentValue) => accumulator * currentValue;
const multi = (accumulator, currentValue) => accumulator + currentValue;
console.log(array.reduce(sum));
console.log(array.reduce(multi));
