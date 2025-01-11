import { IBook } from "./IBook";

export class Book<T> implements IBook {

    _id: string;
    _title: string;
    _author: string;
    _category:T;
    _isBorrowed: boolean;

    constructor( id:string, title:string, author:string, category:T){
       this._id = id;
       this._title = title;
       this._author = author;
       this._category = category;
       this._isBorrowed = false;
    }
   

  
   

}