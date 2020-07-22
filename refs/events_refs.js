const eventEmitter = require('events');


class Logger extends eventEmitter {
    log(message) {
        this.emit('message', `${message} ${Date.now()}`)
    }
}

const logger = new Logger();

// logger.log('Hi'); - Если раньше, то не сможем принять!

logger.on('message', (data) => {
    console.log(data);
})

logger.log('Hi');