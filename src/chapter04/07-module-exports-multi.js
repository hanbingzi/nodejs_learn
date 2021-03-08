var sum = function(a,b){
    return parseInt(a) + parseInt(b);
}
var subtract = function(a,b){
    return parseInt(a) - parseInt(b);
}
var multiply = function(a,b){
    return parseInt(a) * parseInt(b);
}
var divide = function(a,b){
    return parseInt(a) / parseInt(b);
}

// 导出成员
module.exports = {
    sum : sum,
    subtract : subtract,
    multiply : multiply,
    divide : divide
}
