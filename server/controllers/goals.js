const express = require("express");
const model = require('../models/goals')

const app = express.Router();

app 
    .get("/", (req, res, next)=>{
        model.GetAll()
        .then(goal=>{
            res.send(goal);
        })
        .catch(next);
    })
    .get("/:goal_id", (req, res, next)=>{
        model.Get(req.params.goal_id)
        .then(goal=>{
            res.send(goal);
        })
        .catch(next);
    })
    .post("/create", (req, res, next)=>{
        model.Add(req.body)
        .then(goal=>{
            res.status(201).send(goal);
        })
        .catch(next);
    })
    .post("/update", (req, res, next)=>{
        model.Update(req.params.goal_id, req.body)
        .then(updategoal=>{
            res.status(201).send(updategoal);
        })
        .catch(next);
    })
    .get("/delete", (req, res, next)=>{
        model.Delete(req.params.goal_id)
        .then(deletegoal=>{
            res.status(201).send(deletegoal);
        })
        .catch(next);
    })

module.exports = app;