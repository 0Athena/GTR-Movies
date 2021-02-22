const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator *currentValue;
const reducer1 = (accumulator, currentValue) => accumulator  + currentValue;


mul =array1.reduce(reducer);
sum =array1.reduce(reducer1);

module.exports.reducer = reducer;
module.exports.reducer1 = reducer1;
module.exports.array1 = array1;
