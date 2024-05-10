import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter=express.Router();

seedRouter.get('/',async(req,res)=>{
    await ProductCollection.deleteMany({});

    const createProducts=await Product.insertMany(data.products);

    // res.send({createProducts});
    await User.remove({});
    const createdUsers=await User.insertMany(data.users);
    res.send({createdProducts,createdUsers});
});

export default seedRouter;

