import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'
import Product from '../models/productModel.js'

// @desc  Create new order
// @route POST /api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No order items')
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      taxPrice,
      shippingPrice,
      totalPrice,
    })

    // for(const item in order.orderItems) {

    //   const product = await Product.findById(item.product);

    //   item.price = product.price;

    //  }

    const createdOrder = await order.save()

    res.status(201).json(createdOrder)
  }
})



// @desc  Get order by id
// @route GET /api/orders/:id
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user','name email')
  //  The .populate() is saying to use that user model reference/link
  // to populate the found order object with the user name and email.

  if (order) {
    res.json(order)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

export { addOrderItems, getOrderById }

// user:req.user._id sayesinde tokenlı korumalı yaptım
