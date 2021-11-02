const express = require("express");
const model = require('../models/goals')

const app = express.Router();

app 
    .get("/", (req, res, next)=>{
        res.send(model.GetAll());
    })
    .get("/:id", (req, res, next)=>{
        res.send(model.Get(req.params.id));
    })

module.exports = app;