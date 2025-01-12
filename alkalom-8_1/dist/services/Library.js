"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
const myLog_1 = require("../utils/myLog");
class Library {
    constructor() {
        //private books: IBook[] = [];
        //private borrowes : IBorrower [] = [];
        this.books = new Map();
        this.borrowers = new Map();
        console.log(this.books);
        this.books = new Map();
        this.borrowers = new Map();
    }
    addBook(book) {
        this.books.set(book._id, book);
    }
    addBorrower(borrower) {
        this.borrowers.set(borrower.id, borrower);
    }
    //@Log
    borrowBook(bookId, borrowerId) {
        const book = this.books.get(bookId);
        const borrower = this.borrowers.get(borrowerId);
        if (book && borrower && !borrower.borrowedBooks.includes(book)) {
            borrower.borrowedBooks.push(book);
            return true;
        }
        return false;
    }
    returnBook(bookId, borrowId) {
        const borrower = this.borrowers.get(borrowId);
        if (borrower) {
            const bookIndex = borrower.borrowedBooks.findIndex(b => b._id === bookId);
            if (bookIndex != -1) {
                return true;
            }
        }
        return false;
    }
    searchBookBycategory(category) {
        return Array.from(this.books.values()).filter(book => book._category === category);
    }
    searchBorrowersByBook(bookId) {
        return Array.from(this.borrowers.values()).filter(borrower => borrower.borrowedBooks.some(book => book._id === bookId));
    }
    searchBooksByAuthor(auhor) {
        return Array.from(this.books.values()).filter(book => book._author === auhor);
    }
    searckBooksByStatus(isBorrowed) {
        return Array.from(this.books.values()).filter(book => {
            return isBorrowed ? Array.from(this.borrowers.values()).some(b => b.borrowedBooks.includes(book))
                : !Array.from(this.borrowers.values()).some(b => b.borrowedBooks.includes(book));
        });
    }
}
exports.Library = Library;
__decorate([
    myLog_1.Log,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Library.prototype, "addBook", null);
