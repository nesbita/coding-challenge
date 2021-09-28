const express = require("express");
const router = express.Router();
const fs = require("fs");

// GET all reports 
router.get("/"), (req, res) => {
    // read report file
    const reports = fs.readFileSync("./reports.json")
    const reportData = JSON.parse(reports)
    // console.log(reportData)
    res.render("/", { reportData })
}

// PUT /reports/:id
router.put('/:id', (req, res) => {
    const reports = fs.readFileSync("./reports.json")
    const reportData = JSON.parse(reports)
    // find one report from the req.params.id and use the req.body to update
    reportData[req.params.id].state = req.body.state
    // remove one report from the array
    reportData.splice(req.params.id, 1)    
    // write the json file
    fs.writeFileSync('./report.json', JSON.stringify(reportData))

    // redirect to /reports
    res.redirect("/")
})
