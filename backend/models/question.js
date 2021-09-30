const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    name: {type: String, required: true, default: null},
    mobileNo: {type: Number,  required: true, default: null},
    query: {type: String, required: true, default: null}
});

module.exports = mongoose.model('question', questionSchema);