const express = require("express")
const router = new express.Router()
// const auth = require('../middleware/auth')
const BC = require("../models/bc")


router.post('/bon', async (req, res) => {
    const bon = await new BC(req.body)
    try {
        bon.save()
        return res.status(201).send(bon)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/bon/:id', async (req, res) => {
    try {
        const bon = await BC.findById({_id:req.params.id})
        if (!bon) {
            return res.status(200).send({message: "Aucun bon trouvé"})

        }
        return res.status(201).send(bon)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/bons/:date', async (req, res) => {
    try {
        const bons = await BC.find({Exercice:req.params.date})
        if (!bons) {
            return res.status(200).send([])
        }
        return res.status(201).send(bons)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/bons', async (req, res) => {
    try {
        const bons = await BC.find({})
        if (!bons) {
            return res.status(200).send([])
        }
        return res.status(201).send(bons)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router