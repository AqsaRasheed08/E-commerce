const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock:{
        type: Number,
        require: true
    }
})

orderSchema.virtual('id').get(function(){
    return this._id.toHexString();
});
orderSchema.set('toJSON',{
    virtual: true,
});
exports.Order = mongoose.model('Order', orderSchema)