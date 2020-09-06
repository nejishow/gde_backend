const express = require("express")
const router = new express.Router()
// const auth = require('../middleware/auth')
const SV = require("../models/service")


router.post('/service', async (req, res) => {
    const service = await new SV(req.body)
    try {
        service.save()
        return res.status(201).send(service)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/service/:id', async (req, res) => {
    try {
        const service = await SV.findById({_id:req.params.id})
        if (!service) {
            return res.status(200).send({message: "Aucun service trouvé"})

        }
        return res.status(201).send(service)
    } catch (error) {
        res.status(400).send(error)
    }
})


router.get('/services', async (req, res) => {
    try {
        const services = await SV.find({})
        if (!services) {
            return res.status(200).send([])
        }
        return res.status(201).send(services)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router