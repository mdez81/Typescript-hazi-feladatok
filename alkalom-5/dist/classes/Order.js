"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const OrderState_1 = require("../enums/OrderState");
class Order {
    constructor(orderId, productList) {
        this._productsList = [];
        this._orderId = orderId;
        this._productsList = productList;
        this._orderState = OrderState_1.OrderState.new;
    }
    get orderId() {
        return this.orderId;
    }
    set orderId(newOrderId) {
        this.orderId = newOrderId;
    }
    get productsList() {
        return this.productsList;
    }
    set prodoctsList(newProductList) {
        this.prodoctsList = newProductList;
    }
    get orderSate() {
        return this.orderSate;
    }
    set orderSate(newOrderStae) {
        this.orderSate = newOrderStae;
    }
    sumOrders() {
        return this.prodoctsList.reduce((sum, product) => sum + product.price, 0);
    }
}
exports.Order = Order;
