const Book = require('../models/Book');

// GET all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// POST add a new book
const addBook = async (req, res) => {
  const { title, author, publishYear, price, genre } = req.body;
  try {
    const newBook = new Book({ title, author, publishYear, price, genre });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET a specific book by ID
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(400).json({ message: 'Invalid ID' });
  }
};

// PUT update book details
const updateBook = async (req, res) => {
  const { title, author, publishYear, price, genre } = req.body;
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, {
      title, author, publishYear, price, genre,
    }, { new: true });

    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE a book
const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Invalid ID' });
  }
};

module.exports = {
  getAllBooks,
  addBook,
  getBookById,
  updateBook,
  deleteBook,
};