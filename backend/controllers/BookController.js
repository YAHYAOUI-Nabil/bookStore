const asyncHandler = require('express-async-handler')
const Book = require('../models/BookModel')
const User = require('../models/userModel')
const fs = require('fs');

exports.createBook = asyncHandler(async(req,res) => {
    
    if(!req.body.title || !req.body.description){
        res.status(400)
        throw new Error ('Please add all fields')
    }
    const book = await Book.create({
        title: req.body.title,
        description: req.body.description,
        details: req.body.details,
        author: req.body.author,
        format: req.body.format,
        category: req.body.category,
        price: req.body.price,
        quantity: req.body.quantity,
        imageUrl:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    })
    res.status(201).json(book)
})
exports.getBooks = asyncHandler(async(req,res) => {
    const books = await Book.find()
    res.status(200).json({books})
})
exports.getBooksByCategory = asyncHandler(async(req,res) => {
    const books = await Book.find({category:req.params.category})
    res.status(200).json({books})
})
exports.getOneBook = asyncHandler(async(req,res) => {
    const book = await Book.findById(req.params.id)
    res.status(200).json({book})
})
exports.updateBook = asyncHandler(async(req,res) => {})
exports.deleteBook = asyncHandler(async(req,res) => {})