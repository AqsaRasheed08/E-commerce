const {Router} = require('express');
const { single } = require('../middlewares/MulterMiddleware');
const uploadMiddleware = require('../middlewares/MulterMiddleware');
const prod_image = require('../models/prod_image');
const router = Router();


router.get('/api/get', async(req, res)=>{
    const allphotos = await prod_image.find().sort({ createdAt: "descending"});
    res.send(allphotos);
});

router.post('/api/save', uploadMiddleware.single('photo'),(req, res)=>{
    const photo = req.file.filename;

    console.log(photo);

    prod_image.create({ photo }).then((data)=>{
        console.log("uploaded successfully ...");
        console.log(data);
        res.send(data);
    })
    .catch((err)=> console.log(err));

})

module.exports= router