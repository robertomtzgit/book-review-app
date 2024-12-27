const axios = require('axios');

// Task 10: Get all books using an async callback function
async function getAllBooks(callback) {
    try {
        const response = await axios.get('http://localhost:3000/books');
        callback(null, response.data);
    } catch (error) {
        callback(error, null);
    }
}

// Task 11: Search by ISBN using Promises
function getBookByISBN(isbn) {
    return axios.get(`http://localhost:3000/books/${isbn}`)
        .then(response => response.data)
        .catch(error => {
        throw error;
    });
}

// Task 12: Search by Author
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`http://localhost:3000/books/author/${author}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Task 13: Search by title
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`http://localhost:3000/books/title/${title}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

console.log("Task 10: Get all books");
getAllBooks((error, books) => {
    if (error) {
        console.error(error);
    } else {
        console.log(books);
    }
});

console.log("\nTask 11: Search by ISBN");
getBookByISBN('9780451524935')
    .then(book => console.log(book))
    .catch(error => console.error(error));

console.log("\nTask 12: Search by Author");
getBooksByAuthor('George Orwell')
    .then(books => console.log(books))
    .catch(error => console.error(error));

console.log("\nTask 13: Search by Title");
getBooksByTitle('1984')
    .then(books => console.log(books))
    .catch(error => console.error(error));