const mongoose = require("mongoose");
const b_commandesSchema = new mongoose.Schema(
  {
    Num_cmd: {
      type: String,
      //required: [true, 'Why no values? Always provide values!'],
    },
    Date_cmd: {
      type: String,
      //required: [true, 'Why no values? Always provide values!'],
    },
    Code_service: {
      type: String,
      //required: [true, 'Why no values? Always provide values!'],
    },
    idService: {
      type: mongoose.Schema.Types.ObjectId,
      //required: true
    },
    Code_fournisseur: {
      type: String,
      //required: [true, 'Why no values? Always provide values!'],
    },
    idFournisseur: {
      type: mongoose.Schema.Types.ObjectId,
      //required: true
    },
    Devises: {
      type: String,
    },
    Taux: {
      type: String,
    },
    Objet_cmd: {
      type: String,
    },
    Num_compte: {
      type: String,
    },
    idCompte: {
      type: mongoose.Schema.Types.ObjectId,
      //required: true
    },
    Exercice: {
      type: String,
    },
    Montant: {
      type: String,
      //required: [true, 'Why no values? Always provide values!'],
    },
    PJ: {
      type: String,
    },
    Etat: {
      type: String,
    },
    enabled: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const BONS = mongoose.model("bon_commandes", b_commandesSchema);

module.exports = BONS;
