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
    .get("/wall/:handle", (req, res, next) =>{
        model   .GetTrackWall(req.params.handle)
                .then( x=> res.send(x) )
                .catch(next);    
    })
    .get("/:track_id", (req, res, next)=>{
        model.Get(req.params.track_id)
        .then(track=>{
            res.send(track);
        })
        .catch(next);
    })
    .get("/byhandle/:handle", (req, res, next) =>{
        model.GetByHandle(req.params.handle)
            .then(user=>{ 
                res.send(user);
            })
            .catch(next) 
    })
    .post("/", (req, res, next)=>{
        model.Add(req.body)
        .then(track=>{
            res.status(201).send(track);
        })
        .catch(next);
    })
    .patch("/:id", (req, res, next)=>{
        model.Update(req.params.id, req.body)
        .then(updatetrack=>{
            res.status(201).send(updatetrack);
        })
        .catch(next);
    })
    .delete("/:id", (req, res, next)=>{
        model.Delete(req.params.id)
        .then(deletetrack=>{
            res.send({deleted: deletetrack});
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