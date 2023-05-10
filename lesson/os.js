const os = require('os');
const cluster = require('cluster');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);


if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length - 2; i++) {
    cluster.fork()
  }

  cluster.on('exit', worker => {
    console.log(worker);
    console.log(`Worker pid=${worker.process.pid} killed`);
    cluster.fork();
  })
} else {
  console.log(`Worker with pid=${process.pid}`);

  setInterval(() => {
    console.log(`Worker pid=${process.pid} dosn't work`);
  }, 5000);
}

// const cpus = os.cpus();

// for (let i = 0; i < cpus.length - 2; i++) {
//   const CPUcore = cpus[i];
//   console.log('Start another one js process');
// }
