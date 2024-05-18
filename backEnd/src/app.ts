//const express = require('express')
import express  from "express";

const app = express();

const port = 3000;

//routes
import home from"../routes/home";


app.use('/', home);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})