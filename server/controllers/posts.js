const express = require("express");
const model = require('../models/posts')

const app = express.Router();

app 
    .get("/", (req, res, next)=>{
        res.send(model.GetAll());
    })
    .get("/search", (req, res, next)=>{
        res.send(model.Search(req.query.q));
    })
    .get("/:id", (req, res, next)=>{
        res.send(model.Get(req.params.id));
    })
    .post("/create", (req, res, next)=>{
        const newPost = model.Add(req.body)
        res.status(201).send(newPost);
    })
    .post("/update", (req, res, next)=>{
        const updatePost = model.Update(req.params.id, req.body)
        res.status(201).send(updatePost);
    })
    .get("/delete", (req, res, next)=>{
        const deletePost = model.Delete(req.params.id)
        res.status(201).send(deletePost);
    })

module.exports = app;