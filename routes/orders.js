const {order, Order} = require('../models/order');
const express = require('express');
const { route } = require('./categories');
const router = express.Router();

router.get('/' , async (req, res)=>{
    const orderList = await order.find();

    if(!orderList){
        res.status(500).json({success: false })
    }
    res.send(orderList);
})

router.post('/', async (req, res)=>{
    const orderItemsIds = Promise.all(req.body.orderItems.map(async orderItem =>{
        let newOrderItem = new OrderItem({
            quantity: orderItem.quantity,
            product: orderItem.product
        })
        newOrderItem = await newOrderItem.save();

        return newOrderItem._id;
    }))
    const orderItemsIdsResolved = await orderItemsIds;
    console.log(orderItemsIdsResolved);

    let order = new Order({
        orderItems: orderItemsIdsResolved,
        shippingAddress1: req.body.shippingAddress1,
        shippingAddress2: req.body.shippingAddress2,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        phone: req.body.phone,
        status: req.body.status,
        totalPrice: req.body.totalPrice,
        user: req.body.user
    })
// postmen video 14:40
// localhost:5000/orders
// go for authentication  and then copy token
    // "orderItems": " ",
    // "shippingAddress1": " ",
    // "shippingAddress2": " ",
    // "city": " ",
    // "zip": " ",
    // "country": " ",
    // "phone": " ",
    // "status": " ",
    // "totalPrice": " ",
    // "user": " "
    order = await order.save();

    if(!order)
    return res.status(404).send('the order cannot be created')

    res.send(order);
})

module.exports= router;