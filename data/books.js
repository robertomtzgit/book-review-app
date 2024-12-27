const Book = require('../models/book');

const books = [
    new Book('9780451524935', '1984', 'George Orwell'),
    new Book('9780061120084', 'To Kill a Mockingbird', 'Harper Lee'),
    new Book('9780141439518', 'Pride and Prejudice', 'Jane Austen'),
    new Book('9780743273565', 'The Great Gatsby', 'F. Scott Fitzgerald'),
    new Book('9780316769174', 'The Catcher in the Rye', 'J.D. Salinger')
];

books[0].addReview('A chilling dystopian masterpiece.');
books[1].addReview('A powerful exploration of racial injustice.');
books[2].addReview('A timeless classic of romantic literature.');
books[3].addReview('A vivid portrayal of the American Dream.');
books[4].addReview('A coming-of-age story that resonates with readers.');

module.exports = { books };