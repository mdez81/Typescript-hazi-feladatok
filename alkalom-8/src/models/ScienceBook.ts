import { Book } from "./Book";

export class ScienceBook extends Book<string> {

    constructor(id: string, title:string, author:string, public pageNumber?: number){
        super(id,  title, author, "Science");
    }
}