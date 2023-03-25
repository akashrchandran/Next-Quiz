const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WordSchema = new Schema( {
    word: {
        type:String,
        required: [true, 'Definition field required']
    },
    def: {
        type:String,
        required: [true, 'Definition field required']
    }
});
// First argument is the model name, second is Schema, third is collection name
const Word = mongoose.model('word', WordSchema, "word");

module.exports = Word;