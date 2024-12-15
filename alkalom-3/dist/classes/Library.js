"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
        //return `Book${book._title} successfully added,number of books are: ${this.books.length}`;
        console.log(`Book${book.title} successfully added,number of books are: ${this.books.length}`);
    }
    removeBook(id) {
        const book = this.findBookByID(id);
        if (book) {
            this.books = this.books.filter((book) => book.bookId !== id);
            console.log(`Book "${book.title}" removed.`);
        }
        else {
            throw new Error("Invalid id");
        }
    }
    findBookByID(id) {
        return this.books.find((book) => book.bookId === id);
    }
    listAllBooks() {
        for (const book of this.books) {
            console.log(book);
        }
    }
}
exports.Library = Library;
