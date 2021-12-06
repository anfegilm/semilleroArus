const chalk = require('chalk')
const express = require('express')

const usuarios = [];

const app = express()

app.post('/user',express.json(),(req,res)=>{
  usuarios.push(req.body); 
  console.log(req.body);
  res.send({ message:"este es el post"})  
})

app.get('/home',(req,res)=>{ 
    res.send('<h1>Hola mundo</h1>')
})

app.get('/user',(req,res)=>{ 
  res.send(usuarios);
})

app.get('/page',(req,res)=>{
    res.send({ message:"hola mundo"})
})

app.listen(3000, () => {
  console.log(chalk.redBright('servidor corriendo'))
})
