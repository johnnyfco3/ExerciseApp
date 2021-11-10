const express = require("express");
const model = require('../models/posts')

const app = express.Router();

app 
    .get("/", (req, res, next)=>{
        model.GetAll()
        .then(post=>{
            res.send(post);
        })
        .catch(next);
    })
    .get("/search", (req, res, next)=>{
        res.send(model.Search(req.query.q));
    })
    .get("/:id", (req, res, next)=>{
        model.Get(req.params.id)
        .then(post=>{
            res.send(post);
        })
        .catch(next);
    })
    .post("/create", (req, res, next)=>{
        model.Add(req.body)
        .then(post=>{
            res.status(201).send(post);
        })
        .catch(next);
    })
    .post("/update", (req, res, next)=>{
        model.Update(req.params.id, req.body)
        .then(updatepost=>{
            res.status(201).send(updatepost);
        })
        .catch(next);
    })
    .get("/delete", (req, res, next)=>{
        model.Delete(req.params.id)
        .then(deletepost=>{
            res.status(201).send(deletepost);
        })
        .catch(next);
    })

module.exports = app;