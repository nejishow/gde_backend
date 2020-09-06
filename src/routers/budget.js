const express = require("express")
const router = new express.Router()
// const auth = require('../middleware/auth')
const Budget = require("../models/budget")


router.post('/budget', async (req, res) => {
    const budget = await new Budget(req.body)
    try {
        budget.save()
        return res.status(201).send(budget)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/budget/:id', async (req, res) => {
    try {
        const budget = await Budget.findById({_id:req.params.id})
        if (!budget) {
            return res.status(200).send({message: "Aucun budget trouvé"})

        }
        return res.status(201).send(budget)
    } catch (error) {
        res.status(400).send(error)
    }
})


router.get('/budgets', async (req, res) => {
    try {
        const budgets = await Budget.find({})
        if (!budgets) {
            return res.status(200).send([])
        }
        return res.status(201).send(budgets)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router