//logic - resolving apis
//get all products logic


//import product collection 
const products = require('../models/productSchema')

//import wishlist collection
const wishlists=require('../models/wishlistSchema')

exports.getallproducts= async(req,res)=>{
    //logic 
    try{
        //get all product from products collection in mongodb
        const allProducts=await products.find()
        res.status(200).json(allProducts)
    }
    catch(error){
        res.status(401).json(error)
    }
}


//view a particular product

exports.viewProduct=async (req,res)=>{
    //get id from request
    const id = req.params.id
    //logic
    try{
        //check id in mongodb
        const product = await products.findOne({id})
        if(product){
            res.status(200).json(product)
        }
        else{
            res.status(404).json("Item not found")
        }
    }
    catch(error){
        res.status(401).json(error)

    }

}

//add to wishlist logic

exports.addtowishlist=async(req,res)=>{
    //get product details fro request

    //using destructuring

    const {id,title,price,image}=req.body

    //logic
    try{
        //check if the product in te mongodb
        const item=await wishlists.findOne({id})
        if(item){
            res.status(403).json("Item already exists in wishlist")
        }
        else{
            //add the item to the wishlist
            const newProduct=new wishlists({id,title,price,image})
            //to store in the mongodb
            await newProduct.save()
            res.status(200).json("Product added to the wishlist")
        }

    }
    catch(error){
        res.status(401).json(error)

    }
}