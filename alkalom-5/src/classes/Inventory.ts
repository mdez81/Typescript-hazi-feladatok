import { IInventory } from "../interfaces/IInventory";
import { Product } from "./Product";
//import { IInventory } from "@classes/IInventory";

export class Inventory implements IInventory {

    protected productsList: Product[] = [];

    addProduct(product: Product): void {
        this.productsList.push(product);
    }

    removeProduct(id: string): void {
      this.productsList.filter(product => product.id !== id);
    }

    searchProduct(prodData: string): Product | undefined {
     return this.productsList.find(product => product.id == prodData || product.name == prodData);
    }

    listAllProduct(): Product[] {
      return this.productsList;
    }

   






    
}