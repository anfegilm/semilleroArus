const chalk = require('chalk')
const express = require('express')

const app = express()

app.get('/home',(req,res)=>{
    res.send('<h1>Hola mundo</h1>')
})

app.get('/page',(req,res)=>{
    res.send({ message:"hola mundo"})
})

app.listen(3000, () => {
  console.log(chalk.redBright('servidor corriendo'))
})
