const express = require('express');
const { fork } = require('child_process');
const app = express();
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/intense', (req, res) => {
  const worker = fork('./worker_process');
  worker.on('message', ({ data }) => {
    res.send({data});
    worker.kill();
  });
  worker.send({ customerID: 'customer1' });
});
app.listen(3000, () => console.log('Example app listening on port 3000!'));