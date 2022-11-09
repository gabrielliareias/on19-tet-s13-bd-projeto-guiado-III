require("dotenv-safe").config()
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/dbConnect");
const consoleRoutes = require("./routes/consolesRoute");
const gamesRoutes = require ("./routes/gamesRoute");
const app = express ()

app.use(express.json())
app.use(cors())
mongoose.connect()

app.use("/gamestore/console", consoleRoutes)
app.use("/gamestore", gamesRoutes)

module.exports = app