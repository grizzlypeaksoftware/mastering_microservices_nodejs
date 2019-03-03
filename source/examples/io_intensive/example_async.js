const express = require('express');
var model = require('./asynch_model.js');

const app = express();

app.get('/', (req, res) => res.send('Example CPU-Intensive Process'));

app.get('/initRequest', (req, res) => {
  res.send(model.InitRequest());
});

app.get('/getRequest', (req,res)=>{
  res.send(model.GetRequest(req.query.id));
});


app.get('/getPage', (req,res)=>{

  res.send(model.GetPagedRequest(req.query.id, req.query.pointer, req.query.num_records));
  
});



app.listen(3000, () => console.log('Example app listening on port 3000!'));