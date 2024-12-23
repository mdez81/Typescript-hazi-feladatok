"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, price, description) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._description = description;
    }
    get id() {
        return this._id;
    }
    set id(newId) {
        this._id = newId;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    get price() {
        return this._price;
    }
    set price(newPrice) {
        this._price = newPrice;
    }
    get description() {
        return this._description;
    }
    set description(newDescription) {
        this.description = newDescription;
    }
}
exports.Product = Product;
