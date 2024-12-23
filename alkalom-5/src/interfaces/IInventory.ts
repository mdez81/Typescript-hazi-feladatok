import { Product } from "../classes/Product";

export interface IInventory {

    addProduct(product: Product):void;
    removeProduct(id: string): void;
    searchProduct(id: string,  name: string): Product  | undefined;
    listAllProduct():Product[];
}