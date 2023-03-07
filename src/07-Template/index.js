const template = require('art-template');
const html = template(__dirname + '/user.art', {
    name: '张三',
    age: 19
});
console.log(html);
