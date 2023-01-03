require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const connectDb = require('./db/connect')
const app = express()
const port = process.env.PORT || 5000


const productsRouter = require('./routes/products')
const productSchema = require('./models/products')

const products = require('./productSample')

app.get('/', (req, res) => res.send('Hello World!'))
// app.use(cors({ origin: 'http://localhost:3000' }))
app.use(cors())

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//  });

app.use("/public", express.static(path.join(__dirname, 'public')));

app.use('/api/products', productsRouter)

const start = async () => {
    await connectDb(process.env.mongo_uri)
    // productSchema.create(products) 
    // productSchema.deleteMany({},()=>{ 
    // console.log('deleted') 
    // }) 

    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}

start()