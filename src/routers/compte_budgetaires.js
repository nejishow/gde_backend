const express = require("express")
const router = new express.Router()
// const auth = require('../middleware/auth')
const CB = require("../models/compte_budgetaire")


router.post('/compteB', async (req, res) => {
    const compteB = await new CB(req.body)
    try {
        compteB.save()
        return res.status(201).send(compteB)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/compteB/:id', async (req, res) => {
    try {
        const compteB = await CB.findById({_id:req.params.id})
        if (!compteB) {
            return res.status(200).send({message: "Aucun compteB trouvé"})

        }
        return res.status(201).send(compteB)
    } catch (error) {
        res.status(400).send(error)
    }
})


router.get('/compteBs', async (req, res) => {
    try {
        const compteBs = await CB.find({})
        if (!compteBs) {
            return res.status(200).send([])
        }
        return res.status(201).send(compteBs)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router