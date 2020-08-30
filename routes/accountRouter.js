import express from "express";

import accountController from "../controllers/accountControler.js";

const app = express();

app.post("/account", accountController.create);

app.get("/account", accountController.findAll);

app.get("/account/:id", accountController.findOne);

app.put("/account/:id", accountController.update);

app.delete("/account/:id", accountController.remove);

export { app as accountRouter };
