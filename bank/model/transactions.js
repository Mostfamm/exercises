const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const transactionSchema  = new Schema({
    amount: Number,
    category: String,
    vendor: String
});

const Transactions = mongoose.model("transactions", transactionSchema );

module.exports = Transactions;


