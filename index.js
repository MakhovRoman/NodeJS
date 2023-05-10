// const crypto = require('crypto');

// const start = Date.now();

// crypto.pbkdf2('123ttt', '5', 1000000, 64, 'sha512', () => {
//   console.log('1 end', Date.now() - start);
// })

// crypto.pbkdf2('123ttt', '5', 1000000, 64, 'sha512', () => {
//   console.log('2 end', Date.now() - start);
// })

// crypto.pbkdf2('123ttt', '5', 1000000, 64, 'sha512', () => {
//   console.log('3 end', Date.now() - start);
// })

// crypto.pbkdf2('123ttt', '5', 1000000, 64, 'sha512', () => {
//   console.log('4 end', Date.now() - start);
// })

// crypto.pbkdf2('123ttt', '5', 1000000, 64, 'sha512', () => {
//   console.log('5 end', Date.now() - start);
// })

const http = require('http');
const EventEmitter = require('events');
const PORT = process.env.PORT || 5000;
const Router = require('./framework/Router')
const Application = require('./framework/Application')



const app = new Application();

const router = new Router();

router.get('/users', (req, res) => {
  res.end('YOU SEND REQUEST TO /USERS')
});

router.get('/posts', (req, res) => {
  res.end('YOU SEND REQUEST TO /POSTS')
})

app.addRouter(router);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT} `))

// const server = http.createServer((req, res) => {
//   // res.writeHead(200, {
//   //   'Content-type': 'application/json'
//   // })
//   // if (req.url === '/users') {
//   //   return res.end(JSON.stringify([
//   //     {id: 1, name: 'Roman'},
//   //     {id: 2, name: 'Dasha'}
//   //   ]));
//   // }
//   // if (req.url === '/posts') {
//   //   return res.end('POSTS');
//   // }
//   const emitted = emitter.emit(`[${req.url}]:[${req.method}]`, req, res);
//   if(!emitted) {
//     res.end()
//   }

// })
