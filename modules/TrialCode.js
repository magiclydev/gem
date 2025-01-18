const mongoose = require('mongoose');

const trialCodeSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    used: { type: Boolean, default: false },
    expiryDate: Date,
    usageLimit: Number,
});

module.exports = mongoose.model('TrialCode', trialCodeSchema);
