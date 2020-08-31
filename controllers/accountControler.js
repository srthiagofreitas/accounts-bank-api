import { db } from "../models/index.js";

const Account = db.accounts;

const create = async (req, res) => {
  const account = new Account({
    agencia: req.body.agencia,
    conta: req.body.conta,
    name: req.body.name,
    balance: req.body.balance,
  });

  try {
    const data = await account.save();

    res.send(data);
  } catch (error) {
    res.status(500).send("Erro ao incluir conta " + error);
  }
};

const createDeposit = async (req, res) => {
  const { agencia, conta, depositValue } = req.body;
  try {
    const account = await Account.findOne({ agencia, conta });

    if (account) {
      account.balance += parseFloat(depositValue);
    }

    await Account.updateOne({ _id: account._id }, account);

    //const account = await Account.create({});
    res.formatter.ok(account);
  } catch (error) {
    res.status(500).send("Erro ao criar novo deposito " + error);
  }
};

const findAll = async (req, res) => {
  try {
    const data = await Account.find({});

    res.send(data);
  } catch (error) {
    res.status(500).send("Erro ao buscar todas as contas. " + error);
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Account.findById({ _id: id });

    if (!data) {
      res.send("Nao encontrato o podcast id: " + id);
    } else {
      res.send(data);
    }
  } catch (error) {
    res.status(500).send("Erro ao buscar o podcast id: " + id + " " + error);
  }
};

const update = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Account.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    if (!data) {
      res.send("Nao encontrato o podcast id: " + id);
    } else {
      res.send(data);
    }
  } catch (error) {
    res.status(500).send("Erro ao atualizar o podcast id: " + id + " " + error);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Account.findByIdAndRemove({ _id: id });

    if (!data) {
      res.send("Nao encontrato o podcast id: " + id);
    } else {
      res.send("Podcast excluido com sucesso");
    }
  } catch (error) {
    res.status(500).send("Erro ao excluir o podcast id: " + id + " " + error);
  }
};

export default { create, createDeposit, findAll, findOne, update, remove };
