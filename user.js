const user = {
    name: 'Elena',
    age: 25
}

module.exports = {
    user: 'David',
    sayHello() {
        console.log(this.user + " говорит привет");
    }
}