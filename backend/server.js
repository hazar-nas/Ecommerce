// to be able use this syntax in NODE which belongs to ES6 we enabled type:module in package.json file
import  express from 'express'
import  dotenv  from 'dotenv'
import connectDB from './config/db.js'
import {notFound, errorHandler} from './middleWare/errorMiddleWare.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'


dotenv.config()

connectDB()

const app = express();

app.use(express.json()) // it allows the json in the body(bodyParser)

app.get('/', (req,res)=>{
    res.send('API is running.....')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.use(notFound)

app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)