const mongoose = require('mongoose')
const fournisseurSchema = new mongoose.Schema({
    Code_fournisseur: {
        type: String,
        //required: [true, 'Why no values? Always provide values!'],
    },
    Nom_fournisseur: {
        type: String,
        //required: [true, 'Why no values? Always provide values!'],
    },
    Tel_fournisseur: {
        type: String,
        //required: [true, 'Why no values? Always provide values!'],
    },
    enabled: {
        type: Boolean,
        default: true
    },
    Addresse_Fournisseur: {
        type: String,
    }
},
{timestamps: true})


const FOURNISSEUR = mongoose.model('fournisseurs', fournisseurSchema)

module.exports = FOURNISSEUR