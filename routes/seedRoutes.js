import express from 'express';
import ProductCollection from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter=express.Router();

seedRouter.get('/',async(req,res)=>{
    await ProductCollection.deleteMany({});

    const createProducts=await ProductCollection.insertMany(data.products);

    // res.send({createProducts});
    await User.deleteMany({});
    const createdUsers= await User.insertMany(data.users);
    res.send({createProducts,createdUsers});
});

export default seedRouter;

