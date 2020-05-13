const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const detailsSchema = new Schema({
    firstName: {type: String, required:true},
    lastName: {type: String, required:true},
    company: {type: String, required:true},
    residingState: {type: String, required:true},
    gender: {type: String, required:true},
    favMovie: {type: String, required:true},
    phoneNo: {type: Number, required:true},
    favApp: {type: Object, required:true},
    weight: {type: Number, required:true}
});

module.exports = mongoose.model('Detail', detailsSchema);