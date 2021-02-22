var array = [1, 2, 6, 4]
// const sum = (accumulator, currentValue) => accumulator + currentValue;
// const multi = (accumulator, currentValue) => accumulator * currentValue;

var su = (accumulator, currentValue) => {
  return accumulator + currentValue;
};
// console.log(array.reduce(sum));
// console.log(array.reduce(multi));

// module.exports.array = array;
// module.exports.sum = sum;
// module.exports.multi = multi;
module.exports = {su,array};
