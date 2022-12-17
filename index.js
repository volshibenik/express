const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
})

const json = {
  a: 22,
  b:44
}

app.get('/json', (req, res) => {
  res.json(json);
})


app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})