const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes");
const artistRoutes = require("./routes/artist.routes");

const app = express();

app.use(express.json()); /*-----------middleware-------*/
app.use(cookieParser());

app.use("/api/auth", authRoutes); // prefix to use the API's of authRoutes
app.use("/api/auth/", artistRoutes);

module.exports = app;
