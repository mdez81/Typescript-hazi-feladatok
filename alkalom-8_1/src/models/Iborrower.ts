import { IBook } from "./IBook";

export interface IBorrower {
    id:string;
    name: string;
    borrowedBooks:IBook[];
}