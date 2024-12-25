import { IInventory } from "../interfaces/IInventory";
import { Product } from "./Product";


export class Inventory implements IInventory {

  private productsList: Product[] = [];

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

    getItemById<T>(items:T[], id: keyof T & string, value: string){
      return items.find(item => item[id] == value);
  }
}