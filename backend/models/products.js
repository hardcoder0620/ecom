const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName :{
        type : String,
        required : true
    }
})