let sum = function (a, b) {
    return parseInt(a) + parseInt(b);
}
let subtract = function (a, b) {
    return parseInt(a) - parseInt(b);
}
let multiply = function (a, b) {
    return parseInt(a) * parseInt(b);
}
let divide = function (a, b) {
    return parseInt(a) / parseInt(b);
}

// 导出成员
exports.sum = sum;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
