class Book {
    constructor(isbn, title, author) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.reviews = [];
    }

    addReview(review) {
        this.reviews.push(review);
    }

    updateReview(index, newReview) {
        if (index >= 0 && index < this.reviews.length) {
            this.reviews[index] = newReview;
            return true;
        }
        return false;
    }

    removeReview(index) {
        if (index >= 0 && index < this.reviews.length) {
            this.reviews.splice(index, 1);
            return true;
        }
        return false;
    }
}

module.exports = Book;