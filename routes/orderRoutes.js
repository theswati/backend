import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from "../models/orderModel.js";
import {isAuth} from "../utils.js";

const orderRouter=express.Router();
orderRouter.post(
    '/',
    isAuth,
    expressAsyncHandler(async(req,res)=>{
        // console.log("hellooooo")
        console.log(req.body)
        const newOrder=new Order({
            orderItems:req.body.orderItems.map((x)=>({...x,product:x._id})),

            shippingAddress:req.body.shippingAddress,
            paymentMethod:req.body.payment,
            itemsPrice:req.body.itemsPrice,
            shippingPrice:req.body.shippingPrice,
            taxPrice:req.body.taxPrice,
            totalPrice:req.body.totalPrice,
            user:req.user._id
        })

        console.log(newOrder)

           const order=await newOrder.save();
        
        console.log("Helllll0")
        res.status(201).send({message:'New Order Created',order})
    })
);

orderRouter.get(
    '/:id',
    isAuth,
    expressAsyncHandler(async(req,res)=>{
        const order=await Order.findById(req.params.id)
        if(order){
            res.send(order);
        }
        else{
            res.status(404).send({message:'Order Not Found'})
        }
        
    })
)

export default orderRouter;