const mongoose = require("mongoose");

const SponsorSchema = new mongoose.Schema({
    companyName: String,
    email: String,
    totalFund: Number, //số tiền tài trợ
    walletAddress: String
});

module.exports = mongoose.model("Sponsor", SponsorSchema);
