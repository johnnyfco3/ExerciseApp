const express = require("express");
const model = require('../models/goals')

const app = express.Router();

app 
    .get("/", (req, res, next)=>{
        res.send(model.GetAll());
    })
    .get("/:goal_id", (req, res, next)=>{
        res.send(model.Get(req.params.goal_id));
    })
    .post("/create", (req, res, next)=>{
        res.status(201).send(model.Add(req.body));
    })
    .post("/update", (req, res, next)=>{
        res.status(201).send(model.Update(req.params.goal_id, req.body));
    })
    .get("/delete", (req, res, next)=>{
        res.status(201).send(model.Delete(req.params.goal_id));
    })

module.exports = app;