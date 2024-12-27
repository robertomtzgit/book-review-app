const express = require('express');
const bodyParser = require('body-parser');
const booksRoutes = require('./routes/books');
const authRoutes = require('./routes/auth');
const { books } = require('./data/books');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

global.books = books;

app.use('/books', booksRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});