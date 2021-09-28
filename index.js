const express = require("express")
const app = express()
const fs = require("fs")
const PORT = 3001

app.get("/", (req, res) => {
    res.send("Express is working")
})

app.listen(3001, function () {
    console.log("Listening on 3001 🐻")
})