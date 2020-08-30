import express from "express";
import { accountModel } from "../models/accountModel.js";

const app = express();
app.get("/account", async (req, res) => {
  const account = await accountModel.find({});

  try {
    res.send(account);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/account", async (req, res) => {
  const account = new accountModel(req.body);

  try {
    await account.save();
    res.send(account);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/account/:id", async (req, res) => {
  try {
    const account = await accountModel.findOneAndDelete(req.params.id);

    if (!account) {
      res.status(404).send("Documento nao encontrado");
    }

    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

app.patch("/account/:id", async (req, res) => {
  try {
    const account = await accountModel.findOneAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send(account);
  } catch (err) {
    res.status(500).send(err);
  }
});

export { app as accountRouter };
