const chalk = require("chalk");
const express = require("express");

const app = express();

app.listen(3000, ()=>{
    console.log("servidor corriendo")
})