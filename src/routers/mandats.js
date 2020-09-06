const express = require("express")
const router = new express.Router()
// const auth = require('../middleware/auth')
const MAN = require("../models/mandat")


router.post('/mandat', async (req, res) => {
    const mandat = await new MAN(req.body)
    try {
        mandat.save()
        return res.status(201).send(mandat)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/mandat/:id', async (req, res) => {
    try {
        const mandat = await MAN.findById({_id:req.params.id})
        if (!mandat) {
            return res.status(200).send({message: "Aucun mandat trouvé"})

        }
        return res.status(201).send(mandat)
    } catch (error) {
        res.status(400).send(error)
    }
})


router.get('/mandats', async (req, res) => {
    try {
        const mandats = await MAN.find({})
        if (!mandats) {
            return res.status(200).send([])
        }
        return res.status(201).send(mandats)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router