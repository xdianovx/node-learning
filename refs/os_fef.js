const os = require('os');

//Даст инфу об ОС
console.log(os.platform());

//Архитектура
console.log(os.arch());

//Инфа o CPU
console.log(os.cpus());

//Инфа o свободном месте
console.log(os.freemem());

//Всего памяти
console.log(os.totalmem());

//Корневая директория компа
console.log(os.homedir());

//Сколько система работает
console.log(os.uptime());