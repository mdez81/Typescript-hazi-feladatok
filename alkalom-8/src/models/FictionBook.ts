import { Book } from "./Book";

export class FictionBook extends Book<string> {

    constructor(id: string, title:string, author:string, public pageNumber?: number){
        super(id,  title, author, "Fiction");
    }
}