import express from "express";
import mongoose from "mongoose";

//import { studentRouter } from "./routes/studentRouter.js";

const app = express();
// conectar ao mongodb pelo mongoose
(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://thiago:cadeira*8@cluster0.rbf97.mongodb.net/igti?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
    console.log("MongoDB conectado com sucesso");
  } catch (error) {
    console.log("Erro ao conectar ao MongoDB");
  }
})();

app.use(express.json());
//app.use(accountRouter);

app.listen(3000, () => console.log("API iniciada."));
