const mongoose = require('mongoose');
const categorySchema = mongoose.Schema({
    category_id: { type: Number, require: true, trim: true},
    name: { 
        type: String, 
        require: true
    },
    icon: {
        type: String,
    },
    color:{
        type: String,
    }

},{ timestamps: true});
exports.Category = mongoose.model('Category',categorySchema);