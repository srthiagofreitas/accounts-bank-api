import mongoose from "mongoose";
import accountModel from "./accountModel.js";

const db = {};

db.url = process.env.MONGO_URL;
db.mongoose = mongoose;
db.accounts = accountModel(mongoose);

export { db };
