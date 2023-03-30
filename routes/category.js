const express = require('express');
const Category = require('../models/category');
const router = express.Router();

router.post('/category/create', (req, res )=>{
    const categoryObj ={
        category_name: req.body.category_name
    }

})