const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json()); /*-----------middleware-------*/
app.use(cookieParser());

module.exports = app;
