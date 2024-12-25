import { Inventory } from "../classes/Inventory";
import { Order } from "../classes/Order";
import { Product } from "../classes/Product";


export class User {

    constructor(public userId:string, public name:string, public email:string){}

    placeOrder(products: Product[], inventory: Inventory): Order | null {
        const unaviableProducts = products.filter(product => !inventory.searchProduct(product.id));

       if(unaviableProducts.length > 0){
        console.log("this products are unavibale now" + unaviableProducts);
        return null;
       }
       else {
        return new Order(this.userId, products);
       }
    }


}