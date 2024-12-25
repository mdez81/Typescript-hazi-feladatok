
import { Inventory } from "./classes/Inventory";
import { Order } from "./classes/Order";
import { Product } from "./classes/Product";
import { User } from "./classes/User";
import { OrderState } from "./enums/OrderState";

const inventory = new Inventory();
const product1 = new Product("1", "Acer hl-100", 300000, "Acer gamer laptop");
const product2 = new Product("2", "Nokia C-41", 320000, "Nokia smart phone");
inventory.addProduct(product1);
inventory.addProduct(product2);

console.log(inventory.listAllProduct());

console.log(inventory.searchProduct("1"));
console.log(inventory.searchProduct("Nokia C-41"));
console.log(inventory.searchProduct("Nokia C-40"));

const user = new User("100", "Lary King", "lk89@mail.com");
user.placeOrder([product1, product2], inventory);

const order1 = new Order("001", [product1, product2]);
order1.orderSate = OrderState.under_processing
console.log(order1.orderSate);

console.log(order1.sumOrders());

const productsList = inventory.listAllProduct();
const searchedById = inventory.getItemById(productsList, "id", "2");
console.log(searchedById);



