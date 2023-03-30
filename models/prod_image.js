const mongoose = require('mongoose');
const prod_imageSchema = new mongoose.Schema({
    photo: {
        type: String,
        required: true,
    },
},{timestamps: true});

module.exports = mongoose.model("product_image", prod_imageSchema);