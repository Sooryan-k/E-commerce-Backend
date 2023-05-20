//To define routes for client request,create routes folder and router.js file

//import express
const express=require('express')

//import productController
const productController= require('../controllers/productController')

//import wishlist controller
const wishlistsController=require('../controllers/wishlistController')

//import cart controller
const cartController=require('../controllers/cartController')

//using express create an object for router class in order to setup path
const router=new express.Router()

//Resolving client requests
//api-getallproduct request

router.get('/products/all-products',productController.getallproducts)

//api- get particular product
router.get('/products/view-product/:id',productController.viewProduct)

//api - Add product to  wishlist 
router.post('/wishlist/add-to-wishlist',wishlistsController.addtowishlist)

//api- get wishlist product
router.get('/wishlist/get-wishlist',wishlistsController.getwishlistitems)

//api-remove wishlist item
router.delete('/wishlist/remove-wishlist-item/:id',wishlistsController.removewishlistitems)

//api -add to cart
router.post('/cart/add-to-cart',cartController.addtocart)

//api-get cart item
router.get('/cart/get-item',cartController.getcart)

//api-remove item from cart
router.delete('/cart/remove-item/:id',cartController.removecartitems)

//api-increment quantity
router.get('/cart/increment-count/:id',cartController.incrementcount)

//api-decrement quantity
router.get('/cart/decrement-count/:id',cartController.decrementcount)

//export router
module.exports=router