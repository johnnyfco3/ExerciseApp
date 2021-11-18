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
    .patch("/:id", (req, res, next)=>{
        model.Update(req.params.id, req.body)
        .then(updatepost=>{
            res.status(201).send(updatepost);
        })
        .catch(next);
    })
    .delete("/:id", (req, res, next)=>{
        model.Delete(req.params.id)
        .then(deletepost=>{
            res.send({deleted: deletepost});
        })
        .catch(next);
    })
    .post("/seed", (req, res, next)=>{
        model.Seed()
        .then(user=>{
            res.send("Created").status(201);
        })
        .catch(next)
    })

module.exports = app;