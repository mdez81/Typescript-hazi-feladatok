"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const OrderState_1 = require("../enums/OrderState");
class Order {
    constructor(orderId, productsList) {
        this._productsList = [];
        this._orderId = orderId;
        this._productsList = productsList;
        this._orderState = OrderState_1.OrderState.new;
    }
    get orderId() {
        return this._orderId;
    }
    set orderId(newOrderId) {
        if (newOrderId && newOrderId.length > 0) {
            this.orderId = newOrderId;
        }
        else {
            throw new Error("Invalid data");
        }
    }
    get productsList() {
        return this._productsList;
    }
    set prodoctsList(newProductList) {
        if (newProductList && newProductList.length > 0) {
            this._productsList = newProductList;
        }
        else {
            throw new Error("Invalid data");
        }
    }
    get orderSate() {
        return this._orderState;
    }
    set orderSate(newOrderState) {
        if (newOrderState && newOrderState.length > 0) {
            this._orderState = newOrderState;
        }
        else {
            throw new Error("Invalid data");
        }
    }
    sumOrders() {
        return this._productsList.reduce((sum, product) => sum + product.price, 0);
    }
}
exports.Order = Order;
