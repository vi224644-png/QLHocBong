const mongoose = require("mongoose");

const ScholarshipApplicationSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
    academicYear: String,
    scholarshipType: String,
    fileIPFS: String, // link IPFS
    submittedAt: Date,
    status: String // chờ duyệt – đã duyệt – bị từ chối
});

module.exports = mongoose.model("ScholarshipApplication", ScholarshipApplicationSchema);
