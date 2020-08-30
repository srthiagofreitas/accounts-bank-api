import mongoose from "mongoose";

// criando o modelo schema
const accountSchema = mongoose.Schema({
  agencia: {
    type: Number,
    require: true,
  },
  conta: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  balance: {
    type: Number,
    require: true,
    min: 0,
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

// definindo o modelo da coleção (o student depois do accountSchema é para força o mongo a criar a collection no singular)
const accountModel = mongoose.model("accounts", accountSchema);

export { accountModel };
