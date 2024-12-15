"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(id, title, author, price) {
        this._bookId = id;
        this._title = title;
        this._author = author;
        this._price = price;
    }
    get bookId() {
        return this._bookId;
    }
    set bookId(newId) {
        if (newId && newId.length > 3) {
            this._bookId = newId;
        }
        else {
            throw new Error("Invalid data");
        }
    }
    get title() {
        return this._title;
    }
    set title(newTitle) {
        if (newTitle && newTitle.length > 3) {
            this._title = newTitle;
        }
        else {
            throw new Error("Invalid data");
        }
    }
    get author() {
        return this._author;
    }
    set author(newAauthor) {
        if (newAauthor && newAauthor.length > 5) {
            this._author = newAauthor;
        }
        else {
            throw new Error("Invalid data");
        }
    }
    get price() {
        return this._price;
    }
    set price(newPrice) {
        if (newPrice && newPrice > 0) {
            this._price = newPrice;
        }
        else {
            throw new Error("Invalid data");
        }
    }
}
exports.Book = Book;
