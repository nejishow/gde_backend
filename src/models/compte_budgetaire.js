const mongoose = require('mongoose')
const compte_budgetaireSchema = new mongoose.Schema({
    Num_compte: {
        type: String,
        //required: [true, 'Why no values? Always provide values!'],
    },
    Libellé: {
        type: String,
        //required: [true, 'Why no values? Always provide values!'],
    },
    idRubrique: {
        type: mongoose.Schema.Types.ObjectId,
        //required: true
    },
    Rubrique: {
        type: String,
        //required: [true, 'Why no values? Always provide values!'],
    },
    enabled: {
        type: Boolean,
        default: true
    }
},
{timestamps: true})


const CB = mongoose.model('compte_budgetaires', compte_budgetaireSchema)

module.exports = CB