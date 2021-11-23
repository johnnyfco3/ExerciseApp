const express = require("express");
const model = require('../models/goals')

const app = express.Router();

app 
    .get("/", (req, res, next)=>{
        model   .GetAll()
                .then( x=> res.send(x) )
                .catch(next) 
    })
    .get("/wall/:handle", (req, res, next) =>{
        model   .GetGoalWall(req.params.handle)
                .then( x=> res.send(x) )
                .catch(next)   
    })
    .get("/:goal_id", (req, res, next)=>{
        model   .Get(req.params.goal_id)
                .then( x=> res.send(x) )
                .catch(next)  
    })
    .post("/", (req, res, next) =>{
        model   .Add(req.body)
                .then( x=> res.status(201).send(x) )
                .catch(next)
    })
    .patch("/:id", (req, res, next)=>{
        model   .Update(req.params.id, req.body)
                .then( x=> res.send(x) )
                .catch(next) 
    })
    .delete("/:id", (req, res, next)=>{
        model   .Delete(req.params.id)
                .then( x=> res.send({ deleted: x }) )
                .catch(next) 
    })
    .post("/seed", (req, res, next)=>{
        model   .Seed()
                .then( x=> res.status(201).send("Created") )
                .catch(next)
    })

module.exports = app;