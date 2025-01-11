import { Category } from "./Category";


export class FictionBook extends Category {

    constructor(public description:string){
        super("Fiction");
    }
}