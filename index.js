require('dotenv').config()

const express = require('express')

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('arkadas2001')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/signup',(req,res)=>{
    res.send('<h1>Register please</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})