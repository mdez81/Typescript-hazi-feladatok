"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inventory_1 = require("./classes/inventory");
const Order_1 = require("./classes/Order");
const Product_1 = require("./classes/Product");
const User_1 = require("./classes/User");
const OrderState_1 = require("./enums/OrderState");
const inventory = new inventory_1.Inventory();
const product1 = new Product_1.Product("1", "Acer hl-100", 300000, "Acer gamer laptop");
const product2 = new Product_1.Product("2", "Nokia C-41", 320000, "Nokia smart phone");
inventory.addProduct(product1);
inventory.addProduct(product2);
console.log(inventory.listAllProduct());
console.log(inventory.searchProduct("1"));
console.log(inventory.searchProduct("Nokia C-41"));
console.log(inventory.searchProduct("Nokia C-40"));
const user = new User_1.User("100", "Lary King", "lk89@mail.com");
user.placeOrder([product1, product2], inventory);
const order1 = new Order_1.Order("001", [product1, product2]);
order1.orderSate = OrderState_1.OrderState.under_processing;
console.log(order1.orderSate);
console.log(order1.sumOrders());
const productsList = inventory.listAllProduct();
const searchedById = inventory.getItemById(productsList, "id", "2");
console.log(searchedById);
