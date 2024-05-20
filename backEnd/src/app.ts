//const express = require('express')
import express  from "express";
import cors  from "cors";

const app = express();

const port = 3000;

//routes
import home from"../routes/home";
import user from"../routes/user";

app.use(cors({
  origin:['http://localhost:5000']
}));

app.use('/', home);
app.use('/user', user);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})