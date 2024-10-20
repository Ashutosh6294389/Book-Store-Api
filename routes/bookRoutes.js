const express = require('express');
const {
  getAllBooks, addBook, getBookById, updateBook, deleteBook,
} = require('../controllers/bookController');

const router = express.Router();

router.get('/', getAllBooks);
router.post('/add', addBook);
router.get('/:id', getBookById);
router.put('/:id/update', updateBook);
router.delete('/:id/delete', deleteBook);

module.exports = router;