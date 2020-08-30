import mongoose from "mongoose";
import accountModel from "./accountModel.js";

const db = {};

//db.url = process.env.MONGO_URL;
db.url =
  "mongodb+srv://thiago:cadeira*8@cluster0.rbf97.mongodb.net/igti?retryWrites=true&w=majority";
db.mongoose = mongoose;
db.accounts = accountModel(mongoose);

export { db };
