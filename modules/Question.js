const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    text: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: String, required: true },
    difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'] },
});

module.exports = mongoose.model('Question', questionSchema);
