const fs = require('fs');
const path = require('path');

//Первый параметр всегда error
/*
fs.mkdir(path.join(__dirname, 'nodes'), (err) => {
    if(err) throw new Error(err);

});*/


//Сойздаем файл
fs.writeFile(
    path.join(__dirname, 'nodes', 'node.txt'),
    'Hello World',
    (err) => {
        if (err) throw new Error(err);
        console.log('Файл создан')
        //Добавляем в файл
        fs.appendFile(
            path.join(__dirname, 'nodes', 'node.txt'),
            'Новый контент',
            (err) => {
                if (err) throw new Error(err);
                console.log(' Файл обновлен')
                fs.readFile(
                    path.join(__dirname, 'nodes', 'node.txt'),
                    'utf-8',
                    (err, data) => {
                        if (err) throw new Error(err);
                        console.log(data);
                    }
                );
            }
        )


    }
);

//Читаем файл Без указания кодировки вернется буфер. Buffer.from(data).toString()
// fs.readFile(
//     path.join(__dirname, 'nodes', 'node.txt'),
//     'utf-8',
//     (err, data) => {
//         if (err) throw new Error(err);
//         console.log(data);
//     }
// );