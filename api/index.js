import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
import userRouter from './routes/user.route.js'

const app=express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

app.use('/api/user',userRouter)

app.listen(3000,()=>{
    console.log('Server is running on PORT 3000');
})