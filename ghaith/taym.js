var arr = [2,4,7,8];

var rana = arr.map((number) => number*2);

var gh = (arr) =>{
    return arr.map((number => number * 3))
};
// console.log(rana);


module.exports = {rana, gh,  arr};

