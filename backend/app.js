const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 5000

const productsRouter = require('./routes/products')

app.get('/', (req, res) => res.send('Hello World!'))
app.use("/public", express.static(path.join(__dirname, 'public')));

app.use('/api/products',productsRouter)

const start = async ()=>{
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}

start()