const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Get all books' });
});

router.get('/:isbn', (req, res) => {
    const { isbn } = req.params;
    res.json({ message: `Get book with ISBN: ${isbn}` });
});

module.exports = router;
