const express = require('express');
const path = require('path')
require('dotenv').config()

const usersController = require('./controllers/users')
const postsController = require('./controllers/posts')

const app = express()
const port = process.env.PORT || 3000

app
  .use('/', express.static(path.join(__dirname, '../docs')))

  /*
        Access-Control-Allow-Origin: https://foo.example
        Access-Control-Allow-Methods: POST, GET, OPTIONS
        Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
  */

  .use( (req, res, next) =>{        
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
  })
  
  .use('/users', usersController)
  .use('/posts', postsController)

app
  .get('*', (req, res)=>
  res.sendFile(path.join(__dirname, '../docs/index.html')))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});