const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/about', function (req, res) {
  res.send('About page hey ye')
})

app.get('/profile', function (req, res,next) {
  return next(new Error("Console: Something went wrong"));
})

app.use((err,req,res,next)=>{
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000)