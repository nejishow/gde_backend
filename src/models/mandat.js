const mongoose = require('mongoose')
const mandatSchema = new mongoose.Schema({
        Num_cmd: {
          type: String,
          //required: [true, 'Why no values? Always provide values!'],
        },
        Num_Mandat: {
            type: String,
            //required: [true, 'Why no values? Always provide values!'],
          },
        Date_Mandat: {
          type: String,
          //required: [true, 'Why no values? Always provide values!'],
        },
        Objet_depense: {
          type: String,
        },
        Num_facture: {
          type: String,
        },
        Num_cheque: {
            type: String,
          },
          Num_CB: {
            type: String,
          },
        Montant_mandat: {
          type: String,
          //required: [true, 'Why no values? Always provide values!'],
        },
        PJ: {
          type: String,
        },
        Code_Paiement: {
          type: String,
        },
        enabled: {
          type: Boolean,
          default: true,
        },
        Paye: {
            type: Boolean,
            default: true,
          },
      },
      { timestamps: true }
    );

const MANDAT = mongoose.model('mandats', mandatSchema)

module.exports = MANDAT