export class Product {
    protected _id: string;
    protected _name : string;
    protected _price: number;
    protected _description?: string;

    constructor(id:string, name: string, price: number, description: string){
        this._id = id;
        this._name = name;
        this._price = price;
        this._description = description;
    }

    get id (): string {
        return this._id;
    }

    set id (newId : string){
        this._id = newId;
    }

    get name (): string {
        return this._name;
    }

    set name (newName : string){
        this._name = newName;
    }

    get price (): number {
        return this._price;
    }

    set price (newPrice : number){
        this._price = newPrice;
    }

    get description (): string | undefined {
        return this._description;
    }

    set description (newDescription : string){
        this.description = newDescription;
    }

}