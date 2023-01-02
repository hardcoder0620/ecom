const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName :{
        type : String,
        required : true
    },
    productImgs:{
        type : Array,
        required : false
    },
    productPrice :{
        type : String,
        required: true,
    },
    productDesc:{
        type : String,
    },
    productQty:{
        type : String,
        required:true
    },
    productCat:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('product',productSchema)