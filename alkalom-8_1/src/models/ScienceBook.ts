import { Category } from "./Category";
import { IBook } from "./IBook";



export class ScienceBook extends Category implements IBook {

    constructor(public _id:string, public _title:string, public _author:string, public _category:string, public description: string) {
        super("Science");
    }
 
    getDesription(): string {
        return `Scienence book: ${this._title} ${this.description}`;
    }
    
}