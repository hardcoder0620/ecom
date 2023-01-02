const productSchema = require('../models/products')

const allProducts = async (req,res)=>{
    console.log(req.query)
    const queryObj = {}
    const {cat}=req.query
    if(cat){
        queryObj.productCat=cat
    }
    const productsArr = await productSchema.find(queryObj)
    res.json({"data":productsArr})
}

module.exports = {allProducts}