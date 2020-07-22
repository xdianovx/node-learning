//урок про HTTP
const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url);

    res.write('<h1> fsdfsdf </h1>')

    //обязательно закрыть
    res.end()
})


server.listen(3000, () => {
    console.log('ЗАпущен');
})