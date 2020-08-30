export default (mongoose) => {
  const schema = mongoose.Schema({
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
  const account = mongoose.model("accounts", schema, "accounts");

  return account;
};
