import express from 'express'
// import Mongoose library to deal with mongoDB...
import mongoose from 'mongoose'
//import dotenv library to secure my credentials...
import dotenv from 'dotenv'
// for handling cross origin requests
import cors from 'cors'
// import routes...
import authenticationRoutes from './routes/authenticationRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'


// app configuration...
const app = express();
const Port = process.env.PORT || 5000 ;
dotenv.config(); // configuration of dotenv...


// midlewares...
app.use(cors()); // to handle cross origin requests...
app.use(express.json());


// database configuration...
const Connection = ()=>{
    mongoose.connect(process.env.MONGO).then(() => {
        console.log('connected to db successfuly')
    }).catch((error) => { throw error })
}



// api routes...
app.use('/api/auth', authenticationRoutes)
app.use('/api/carts', cartRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)


// listen to server...
app.listen(Port, () => {
    Connection()
    console.log(`Server running successfuly on Port ${Port}`)
})