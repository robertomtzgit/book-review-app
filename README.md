# Book Review API

This is a RESTful API for managing a book review application. It allows users to search for books, view reviews, add new reviews, and more.

## Features

- Search books by ISBN, author, and title
- View book reviews
- User registration and authentication with JWT
- Add, modify, and delete reviews (requires authentication)
- Pre-loaded book database

## Technologies Used

- Node.js
- Express.js
- JSON Web Tokens (JWT) for authentication
- bcryptjs for password hashing

## Installation

1. Clone this repository
2. Run `npm install` to install dependencies
3. Create a `.env` file in the project root and add your JWT secret key: `JWT_SECRET=your_secret_key`
4. Run `npm start` to start the server

## Usage

### Endpoints

- `GET /books`: Get all books
- `GET /books/:isbn`: Get a book by ISBN
- `GET /books/author/:author`: Get books by author
- `GET /books/title/:title`: Get books by title
- `GET /books/:isbn/reviews`: Get reviews for a book
- `POST /auth/register`: Register a new user
- `POST /auth/login`: Login
- `POST /books/:isbn/reviews`: Add a review (requires authentication)
- `PUT /books/:isbn/reviews`: Modify a review (requires authentication)
- `DELETE /books/:isbn/reviews/:index`: Delete a review (requires authentication)

### Usage Example

```javascript
// Get all books
fetch('http://localhost:3000/books')
.then(response => response.json())
.then(data => console.log(data));

// Register a new user
fetch('http://localhost:3000/auth/register', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ username: 'user', password: 'password' })
})
.then(response => response.json())
.then(data => console.log(data));
```

## Contributing

Contributions are welcome. Please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
