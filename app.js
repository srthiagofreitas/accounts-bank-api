import express from "express";

import { accountRouter } from "./routes/accountRouter.js";
import { db } from "./models/index.js";

const app = express();

app.use(express.json());
app.use(accountRouter);

// conectar ao mongodb pelo mongoose
(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("MongoDB conectado com sucesso");
  } catch (error) {
    console.log("Erro ao conectar ao MongoDB. " + error);
  }
})();

app.listen(3000, () => console.log("API iniciada."));
