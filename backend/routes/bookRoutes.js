const express = require("express")
const router = express.Router()
const bookController = require('../controllers/BookController')
const multer = require('../middlewares/multer-config');

router.post('/', multer, bookController.createBook)
router.get('/', bookController.getBooks)
router.get('/category/:category', bookController.getBooksByCategory)
router.get('/:id', bookController.getOneBook)
router.put('/:id', bookController.updateBook)
router.delete('/:id', bookController.deleteBook)

module.exports = router