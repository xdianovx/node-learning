//Модуль path

const path = require('path')


console.log(path.basename(__filename));

console.log(path.parse(__filename));

console.log(path.join(__dirname, '../assets/pip.txt'));

console.log(path.resolve(__dirname, '../assets', 'pip.txt'));