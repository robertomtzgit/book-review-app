const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// GET /books
router.get('/', (req, res) => {
    res.json(global.books);
});

// GET /books/:isbn
router.get('/:isbn', (req, res) => {
    const book = global.books.find(b => b.isbn === req.params.isbn);
    if (book) {
    res.json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// GET /books/author/:author
router.get('/author/:author', (req, res) => {
    const authorBooks = global.books.filter(b => b.author.toLowerCase().includes(req.params.author.toLowerCase()));
    if (authorBooks.length > 0) {
        res.json(authorBooks);
    } else {
        res.status(404).json({ message: 'No books found for this author' });
    }
});

// GET /books/title/:title
router.get('/title/:title', (req, res) => {
    const titleBooks = global.books.filter(b => b.title.toLowerCase().includes(req.params.title.toLowerCase()));
    if (titleBooks.length > 0) {
        res.json(titleBooks);
    } else {
        res.status(404).json({ message: 'No books found with this title' });
    }
});

// GET /books/:isbn/reviews
router.get('/:isbn/reviews', (req, res) => {
    const book = global.books.find(b => b.isbn === req.params.isbn);
    if (book) {
        res.json(book.reviews);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// POST /books/:isbn/reviews
router.post('/:isbn/reviews', auth, (req, res) => {
    const book = global.books.find(b => b.isbn === req.params.isbn);
    if (book) {
        const newReview = req.body.review;
        book.addReview(newReview);
        res.status(201).json({ message: 'Review added successfully' });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// PUT /books/:isbn/reviews
router.put('/:isbn/reviews', auth, (req, res) => {
    const book = global.books.find(b => b.isbn === req.params.isbn);
    if (book) {
        const { index, review } = req.body;
        if (book.updateReview(index, review)) {
        res.json({ message: 'Review updated successfully' });
        } else {
        res.status(400).json({ message: 'Invalid review index' });
        }
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// DELETE /books/:isbn/reviews/:index
router.delete('/:isbn/reviews/:index', auth, (req, res) => {
    const book = global.books.find(b => b.isbn === req.params.isbn);
    if (book) {
        const index = parseInt(req.params.index);
        if (book.removeReview(index)) {
            res.json({ message: 'Review deleted successfully' });
        } else {
            res.status(400).json({ message: 'Invalid review index' });
        }
    } else {
    res.status(404).json({ message: 'Book not found' });
    }
});

module.exports = router;