const express = require('express');
const cors = require('cors');
// const path = require('path');
const dbConnect = require('./config/dbConnect');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const PORT = process.env.PORT || 5000;
require('dotenv').config()


//middleware
app.use(morgan('tiny'));
app.use(cors());
app.options('*', cors());
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));


//Routes
const categoriesRouter = require('./routes/categories');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const ordersRouter = require('./routes/orders');


app.use(`/categories`, categoriesRouter)
app.use(`/products`, productsRouter)
app.use(`/users`, usersRouter)
app.use(`/orders`, ordersRouter)


// const static_path = path.join(__dirname, "Frontend"); 
// app.use(express.static(static_path))

// app.get('/',(req, res)=>{
//     res.sendFile(path.join(static_path, "index.html"));
// });
// app.get('/cart',(req, res)=>{
//     res.sendFile(path.join(static_path, "cart.html"));
// });
// app.get('/login-register',(req, res)=>{
//     res.sendFile(path.join(static_path, "login-register.html"));
// });
// app.get('/order-tracking',(req, res)=>{
//     res.sendFile(path.join(static_path, "order-tracking.html"));
// });
// app.get('/product-details',(req, res)=>{
//     res.sendFile(path.join(static_path, "product-details.html"));
// });
// app.get('/shop',(req, res)=>{
//     res.sendFile(path.join(static_path, "shop.html"));
// });
// app.get('/wishlist',(req, res)=>{
//     res.sendFile(path.join(static_path, "wishlist.html"));
// });


app.listen(PORT,()=>{
    console.log(`Server is up and running on ${PORT} ...`);
}) 