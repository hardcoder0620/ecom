const productSchema = require('../models/products')

const allProducts = async (req,res)=>{
    console.log(req.query,'req.query')
    const queryObj = {}
    const sortObj = {}
    const {cat}=req.query
    const {com}=req.query
    const {sort}=req.query
    const {price}=req.query
    if(cat){
        queryObj.productCat=cat
    }
    if(com){
        queryObj.productCompany=com
    }
    if(price){
        queryObj.productPrice={"$lt":price}
    }
    if(sort){
       console.log(sort)
       if(sort == 'lowToHigh'){
        sortObj.productPrice = 1
       }else{
        sortObj.productPrice = -1
       }
    }
    const productsArr = await productSchema.find(queryObj).sort(sortObj)
    res.json({"data":productsArr})
}

module.exports = {allProducts}