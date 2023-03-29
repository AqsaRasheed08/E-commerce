const mongoose = require('mongoose');

//db connection
mongoose.connect('mongodb://localhost:27017/ecommerce',{useNewUrlParser: true})
const db = mongoose.connection;
db.on("error",()=>{console.log("error in connection");})
db.once('open',()=>{console.log("connected");})
//db connection