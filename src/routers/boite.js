const express = require("express")
const router = new express.Router()
const auth = require('../middleware/auth')
const Boite = require("../models/boite")


router.post('/boite', auth, auth, async (req, res) => {
    const boite = new boite(req.body)
    try {
        boite.save()
        return res.status(201).send(boite)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router