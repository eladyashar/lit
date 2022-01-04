const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    answers: {
        type: [String],
        required:true
    },
    correctAnswer: {
        type: Number,
        required: true
    },
    video: {
        type: String,
        required:true
    }

})

const Question = mongoose.model('question',questionSchema);

module.exports = Question;