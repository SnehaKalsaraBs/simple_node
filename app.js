const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {

  console.log('book management github..');
})


// app.get('/show/:id', async (req, res) => {

//   try {
//     const id = req.params.id
//     const data = await Books.findById(id);
//     res.send(data);
//   }catch(error) {
//     res.status(400).send(error);
//     console.log(error);
//   }
// })

// app.post('/add', async (req, res) => {

//   try {

//     const payload = req.body;
//     await Books.create(payload);
//     res.send("Data added successfully");

//   } catch (error) {
//     res.status(400).send(error);
//     console.log(error);
//   }
// })

// app.put('/update/:id', async (req, res) => {

//   try {
//     const id = req.params.id;
//     const payload = req.body;
//     await Books.findByIdAndUpdate(id, payload);
//     res.send("Data updated successfully");

//   } catch (error) {
//     res.status(400).send(error);
//     console.log(error);
//   }
// })

// app.delete('/delete/:id', async (req, res) => {

//   try {
//     const id = req.params.id;
//     await Books.findOneAndDelete(id);
//     res.send("Data deleted successfully");

//   } catch (error) {
//     res.status(400).send(error);
//     console.log(error);
//   }
// })


const server = app.listen(5000,()=>{console.log("server listening..");})

module.exports = server;
