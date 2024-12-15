"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(userId, name, email) {
        this._userId = userId;
        this._name = name;
        this._email = email;
        this.borrowedBooks = [];
    }
    get userId() {
        return this._userId;
    }
    set userId(newUserId) {
        if (this.userId && this.userId.length > 3) {
            this._userId = newUserId;
        }
        else {
            throw new Error("Invalid data");
        }
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        if (this.name && this.name.length > 3) {
            this._name = newName;
        }
        else {
            throw new Error("Invalid data");
        }
    }
    get email() {
        return this._email;
    }
    set email(newemail) {
        if (this.email && this.email.length > 5) {
            this._email = newemail;
        }
        else {
            throw new Error("Invalid data");
        }
    }
    borrowBook(library, bookId) {
        const book = library.findBookByID(bookId);
        if (book) {
            this.borrowedBooks.push(book);
            console.log(`Book ${book.title} borrowed by ${this._name}`);
        }
        else {
            console.log(`Book wit id: ${bookId} not found`);
        }
    }
}
exports.User = User;
