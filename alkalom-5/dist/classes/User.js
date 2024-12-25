"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Order_1 = require("../classes/Order");
class User {
    constructor(userId, name, email) {
        this.userId = userId;
        this.name = name;
        this.email = email;
    }
    placeOrder(products, inventory) {
        const unaviableProducts = products.filter(product => !inventory.searchProduct(product.id));
        if (unaviableProducts.length > 0) {
            console.log("this products are unavibale now" + unaviableProducts);
            return null;
        }
        else {
            return new Order_1.Order(this.userId, products);
        }
    }
}
exports.User = User;
