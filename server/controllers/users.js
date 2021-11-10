const express = require("express")
const model = require('../models/users')

const app = express.Router()

app
    .get("/", (req, res, next)=>{
        model.GetAll()
        ,then(user=>{
            res.send(user);
        })
        .catch(next);
    })
    .get("/:user_id", (req, res, next)=>{
        model.Get(req.params.user_id)
        ,then(user=>{
            res.send(user);
        })
        .catch(next);
    })
    .post("/login", (req, res, next)=>{
        model.Login(req.body.handle, req.body.password)
            .then(user=>{
                res.send(user);
        })
        .catch(next)
    })
    .post("/register", (req, res, next)=>{
        model.Add(req.body)
            .then(user=>{
                res.status(201).send(user)
        })
        .catch(next);
    })
    .post("/update", (req, res, next)=>{
        res.status(201).send(model.Update(req.params.user_id, req.body));
    })
    .get("/delete", (req, res, next)=>{
        res.status(201).send(model.Delete(req.params.user_id));
    })

module.exports = app;