"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FictionBook = void 0;
const Category_1 = require("./Category");
class FictionBook extends Category_1.Category {
    constructor(_id, _title, _author, _category, description) {
        super("Fiction");
        this._id = _id;
        this._title = _title;
        this._author = _author;
        this._category = _category;
        this.description = description;
    }
    getDesription() {
        return `Fiction book: ${this._title} ${this.description}`;
    }
}
exports.FictionBook = FictionBook;
