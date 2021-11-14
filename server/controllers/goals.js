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
    .get("/wall/:handle", (req, res, next) =>{
        model.GetGoalWall(req.params.handle)
            .then(x=> res.send(x))
            .catch(next)
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
    .post("/:id", (req, res, next)=>{
        model.Update(req.params.id, req.body)
        .then(updategoal=>{
            res.status(201).send(updategoal);
        })
        .catch(next);
    })
    .get("/:id", (req, res, next)=>{
        model.Delete(req.params.id)
        .then(deletegoal=>{
            res.send({deleted: deletegoal});
        })
        .catch(next);
    })
    

module.exports = app;