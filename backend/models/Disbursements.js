const mongoose = require("mongoose");

const DisbursementSchema = new mongoose.Schema({
    applicationId: { type: mongoose.Schema.Types.ObjectId, ref: "ScholarshipApplication" },
    amount: Number,
    transactionHash: String, // txHash blockchain
    date: Date
});

module.exports = mongoose.model("Disbursement", DisbursementSchema);
