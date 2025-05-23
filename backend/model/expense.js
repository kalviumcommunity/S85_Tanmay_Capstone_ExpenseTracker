const mongoose = require("mongoose");


const ExpenseSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    description: { type: String },
    date: { type: Date, default: Date.now }
  });
  

  module.exports=ExpenseSchema;