"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
//import { IInventory } from "@classes/IInventory";
class Inventory {
    constructor() {
        this.productsList = [];
    }
    addProduct(product) {
        this.productsList.push(product);
    }
    removeProduct(id) {
        this.productsList.filter(product => product.id !== id);
    }
    searchProduct(prodData) {
        return this.productsList.find(product => product.id == prodData || product.name == prodData);
    }
    listAllProduct() {
        return this.productsList;
    }
}
exports.Inventory = Inventory;
