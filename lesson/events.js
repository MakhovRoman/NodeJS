const Emmiter = require('events');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({path: path.resolve(__dirname, '..', '.env')});

const emmiter = new Emmiter();

emmiter.on('message', (data, second, third) => {
  console.log('You send message: ' + data);
  console.log('Second argument: ' + second);
})

const MESSAGE = process.env.MESSAGE || '';

if (MESSAGE) {
  emmiter.emit('message', MESSAGE, 123)
} else {
  emmiter.emit('message', "You don't declare event");
}
