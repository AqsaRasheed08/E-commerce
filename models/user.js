const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock:{
        type: Number,
        require: true
    }
})
userSchema.virtual('id').get(function(){
    return this._id.toHexString();
});
userSchema.set('toJSON',{
    virtual: true,
});
exports.User = mongoose.model('User', userSchema)