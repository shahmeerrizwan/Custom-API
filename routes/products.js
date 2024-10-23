import express from 'express'
import Products from '../models/Products.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const data = await Products.find()
  res.send({ message: 'Products fetched successfully!', data })
})

router.post('/addProduct', async (req, res) => {
  const data = req.body
  await Products.create(data)
  res.send({ message: 'Product added successfully!' })
})




export default router

