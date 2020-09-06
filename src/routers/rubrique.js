const express = require("express")
const router = new express.Router()
// const auth = require('../middleware/auth')
const Rubrique = require("../models/rubrique")


router.post('/rubrique', async (req, res) => {
    const rubrique = await new Rubrique(req.body)
    try {
        rubrique.save()
        return res.status(201).send(rubrique)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/rubrique/:id', async (req, res) => {
    try {
        const rubrique = await Rubrique.findById({_id:req.params.id})
        if (!rubrique) {
            return res.status(200).send({message: "Aucun rubrique trouvé"})

        }
        return res.status(201).send(rubrique)
    } catch (error) {
        res.status(400).send(error)
    }
})


router.get('/rubriques', async (req, res) => {
    try {
        const rubriques = await Rubrique.find({})
        if (!rubriques) {
            return res.status(200).send([])
        }
        return res.status(201).send(rubriques)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router