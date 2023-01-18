require('dotenv').config();
const express = require('express');
const mongoDB = require('./config/config');
const app = express();
const port = process.env.PORT;
const api = require('./routes/index');
const morgan=require('morgan')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan())
app.use("/player/api", api);
app.listen(port, () => {
    console.log("App is Running on port ", port);
});


mongoDB();