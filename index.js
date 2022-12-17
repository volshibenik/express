const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();

const path = require('path');

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
})

const json = {
  a: 22,
  b:44
}

router.get('/json', (req, res) => {
  res.json(json);
})


app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})