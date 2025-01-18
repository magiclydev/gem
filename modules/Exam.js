const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
    timeLimit: { type: Number, required: true }, // in minutes
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Exam', examSchema);
