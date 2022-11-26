const express = require ('express');

const app = express();

const connectDB = require('./db/connect');

const port = 8000;

app.use(express.json());


//-----Routes---------//
app.use('/', require('./routes/product'));

//-----Start Port---------//
const start = async () => {
    try {
      await connectDB("mongodb://localhost/product")
      app.listen(port, console.log(`server is running on ${port}...`))
    } catch (error) {
      console.log(error)
    }
  }
  start();