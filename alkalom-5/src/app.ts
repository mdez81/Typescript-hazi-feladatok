import { Inventory } from "./classes/Inventory";
import { Product } from "./classes/Product";
import { User } from "./classes/User";

const inventory = new Inventory;
const product1 = new Product("1", "Acer hl-100", 300000, "Acer gamer laptop");
const product2 = new Product("2", "Nokia C-41", 320000, "Nokia smart phone");
inventory.addProduct(product1);
inventory.addProduct(product2);

const user = new User("100", "Lary King", "lk89@mail.com");
user.placeOrder([product1, product2], inventory);

