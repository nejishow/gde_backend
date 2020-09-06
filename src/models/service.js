const mongoose = require('mongoose')
const serviceSchema = new mongoose.Schema({
    Code_service: {
        type: String,
        //required: [true, 'Why no values? Always provide values!'],
    },
    Nom_service: {
        type: String,
        //required: [true, 'Why no values? Always provide values!'],
    },
    enabled: {
        type: Boolean,
        default: true
    }
},
{timestamps: true})


const SERVICE = mongoose.model('services', serviceSchema)

module.exports = SERVICE