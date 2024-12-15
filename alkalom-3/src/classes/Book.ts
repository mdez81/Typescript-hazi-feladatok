export class Book  {

    protected _bookId: string;
    protected _title: string;
    protected _author: string;
    protected _price: number;

    constructor(id:string, title: string, author:string, price:number){
        this._bookId = id;
        this._title = title;
        this._author = author;
        this._price = price;
    }

    get bookId () :string {
        return this._bookId;
    }

    set bookId (newId :string){
        if(newId && newId.length > 3){
            this._bookId = newId;
        }
        else {
            throw new Error("Invalid data");
        }
    }

    get title(): string {
        return this._title;
    }

    set title (newTitle :string){
        if(newTitle && newTitle.length > 3){
        this._title = newTitle;
        }
        else {
            throw new Error("Invalid data");
        }
    }

    get author():string {
        return this._author;
    }

    set author(newAauthor :string){
        if(newAauthor && newAauthor.length > 5){
        this._author = newAauthor;
        }
        else {
            throw new Error("Invalid data");
        }
    }

    get price():number {
        return this._price;
    }

    set price (newPrice :number){
        if(newPrice && newPrice > 0){
        this._price = newPrice;
        }
        else {
            throw new Error("Invalid data");
        }
    }
}