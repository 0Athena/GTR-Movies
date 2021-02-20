var array = [1, 2, 6, 4]
const reducer = (accumulator, currentValue) => accumulator * currentValue;
console.log(array.reduce(reducer))

var arr = array.map((num) =>{
    return num + 1
})
console.log(arr)