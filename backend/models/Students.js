const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    studentId: String,
    fullName: String,
    email: String,
    className: String,
    department: String, //khoa
    gpa: Number,
    walletAddress: String, // địa chỉ ví nhận học bổngS
    status: String // Đang học – Tốt nghiệp
});

module.exports = mongoose.model("Student", StudentSchema);
