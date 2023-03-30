const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    category_id: { type: Number, require: true, trim: true},
    category_name: { type: String, require: true, trim: true},

},{ timestamps: true});
module.exports = mongoose.model('category',categorySchema);