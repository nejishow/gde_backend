const mongoose = require('mongoose')
const budgetSchema = new mongoose.Schema({
    Num_Auto: {
        type: String,
        //required: [true, 'Why no values? Always provide values!'],
    },
    Num_Compte: {
        type: String,
        //required: [true, 'Why no values? Always provide values!'],
    },
    Exercice: {
        type: String,
        //required: [true, 'Why no values? Always provide values!'],
    },
    Budget: {
        type: String,
        //required: [true, 'Why no values? Always provide values!'],
    },
    enabled: {
        type: Boolean,
        default: true
    }
},
{timestamps: true})


const budget = mongoose.model('budgets', budgetSchema)

module.exports = budget