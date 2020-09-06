const mongoose = require('mongoose')
const rubriqueSchema = new mongoose.Schema({
    Num_Rubrique: {
        type: String,
        //required: [true, 'Why no values? Always provide values!'],
    },
    Libellé_rubrique: {
        type: String,
        //required: [true, 'Why no values? Always provide values!'],
    },
    Type_Rubrique: {
        type: String,
        //required: [true, 'Why no values? Always provide values!'],
    },
    enabled: {
        type: Boolean,
        default: true
    }
},
{timestamps: true})


const rubrique = mongoose.model('rubriques', rubriqueSchema)

module.exports = rubrique