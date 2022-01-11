const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {

  res.send('book management github..');
})

const server = app.listen(5000,()=>{console.log("server listening..");})

module.exports = server;
