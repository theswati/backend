import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";

dotenv.config();

mongoose
   .connect(process.env.MONGO_URI)
   .then(()=>{
    console.log('connected to db')
})

.catch((err)=>{
    console.log(err.message)
})

const app=express();

// app.get("/api/products",(req,res)=>{
//     res.send(data.products)
//     });

// app.get('/api/products/slug/:slug',(req,res)=>{
//         const product=data.products.find((x)=>x.slug===req.params.slug)
//         if (product){
//             res.send(product)
//         }
//         else{
//             res.status(404).send({message:"Product not found"})
//         }
// });


// app.get('/api/products/:id',(req,res)=>{
//     const product=data.products.find((x)=>x._id===req.params.id)
//       console.log(product)
//         if (product){
//             res.send(product)
//         }
//         else{
//             res.status(404).send({message:"Product not found"})
//         }
// })


app.use('/api/seed',seedRouter);
app.use('/api/products',productRouter);

    const port=process.env.PORT ||5001;

    app.listen(port,()=>{
        console.log(`server at http://localhost:${port}`)
    });


    // ecom , 1CyNt0VO8BWlFcBm