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
        if (newId && newId.length > 0) {
            this._id = newId;
        }
        else {
            throw new Error("Invalid data");
        }
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        if (newName && newName.length > 4) {
            this._name = newName;
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
    get description() {
        return this._description;
    }
    set description(newDescription) {
        if (newDescription && newDescription.length > 4) {
            this.description = newDescription;
        }
        else {
            throw new Error("Invalid data");
        }
    }
}
exports.Product = Product;
