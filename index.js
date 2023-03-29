const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
const dbConnect = require('./config/dbConnect');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

const static_path = path.join(__dirname, "Frontend"); 
app.use(express.static(static_path))

app.get('/',(req, res)=>{
    res.sendFile(path.join(static_path, "index.html"));
});
app.get('/cart',(req, res)=>{
    res.sendFile(path.join(static_path, "cart.html"));
});
app.get('/login-register',(req, res)=>{
    res.sendFile(path.join(static_path, "login-register.html"));
});
app.get('/order-tracking',(req, res)=>{
    res.sendFile(path.join(static_path, "order-tracking.html"));
});
app.get('/product-details',(req, res)=>{
    res.sendFile(path.join(static_path, "product-details.html"));
});
app.get('/shop',(req, res)=>{
    res.sendFile(path.join(static_path, "shop.html"));
});
app.get('/wishlist',(req, res)=>{
    res.sendFile(path.join(static_path, "wishlist.html"));
});



app.listen(PORT,()=>{
    console.log(`Server is up and running on ${PORT} ...`);
}) 