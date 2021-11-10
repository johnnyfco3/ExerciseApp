const express = require("express");
const model = require('../models/track')

const app = express.Router();

app 
    .get("/", (req, res, next)=>{
        model.GetAll()
        .then(track=>{
            res.send(track);
        })
        .catch(next);
    })
    .get("/:track_id", (req, res, next)=>{
        model.Get(req.params.track_id)
        .then(track=>{
            res.send(track);
        })
        .catch(next);
    })
    .post("/create", (req, res, next)=>{
        model.Add(req.body)
        .then(track=>{
            res.status(201).send(track);
        })
        .catch(next);
    })
    .post("/update", (req, res, next)=>{
        model.Update(req.params.id, req.body)
        .then(updatetrack=>{
            res.status(201).send(updatetrack);
        })
        .catch(next);
    })
    .get("/delete", (req, res, next)=>{
        model.Delete(req.params.id)
        .then(deletetrack=>{
            res.status(201).send(deletetrack);
        })
        .catch(next);
    })

module.exports = app;