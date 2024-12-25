import { Product } from "../classes/Product";

export interface IInventory {

    addProduct(product: Product):void;
    removeProduct(id: string): void;
    searchProduct(prodata: string): Product  | undefined;
    listAllProduct():Product[];
}