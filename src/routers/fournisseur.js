const express = require("express")
const router = new express.Router()
// const auth = require('../middleware/auth')
const FR = require("../models/founisseur")


router.post('/fournisseur', async (req, res) => {
    const fournisseur = await new FR(req.body)
    try {
        fournisseur.save()
        return res.status(201).send(fournisseur)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/fournisseur/:id', async (req, res) => {
    try {
        const fournisseur = await FR.findById({_id:req.params.id})
        if (!fournisseur) {
            return res.status(200).send({message: "Aucun fournisseur trouvé"})

        }
        return res.status(201).send(fournisseur)
    } catch (error) {
        res.status(400).send(error)
    }
})


router.get('/fournisseurs', async (req, res) => {
    try {
        const fournisseurs = await FR.find({})
        if (!fournisseurs) {
            return res.status(200).send([])
        }
        return res.status(201).send(fournisseurs)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router