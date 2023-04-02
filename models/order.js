const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    orderItems:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderItem',
        required: true
    }],
    ShippingAddress1:{
        type: String,
        required: true
    },
    ShippingAddress2:{
        type: String,
    },
    city:{
        type: String,
        required: true
    },
    zip:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true,
        default: 'Pending',
    },
    totalPrice:{
        type: Number,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    dateOrdered:{
        type: Date,
        default: Date.now(),
    }
})

orderSchema.virtual('id').get(function(){
    return this._id.toHexString();
});
orderSchema.set('toJSON',{
    virtual: true,
});
exports.Order = mongoose.model('Order', orderSchema)