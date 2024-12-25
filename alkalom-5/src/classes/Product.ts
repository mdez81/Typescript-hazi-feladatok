export class Product {

    private _id: string;
    private _name : string;
    private _price: number;
    private _description?: string;

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
        if(newId && newId.length > 0){
            this._id = newId;
        }
        else {
            throw new Error("Invalid data");
        }
    }

    get name (): string {
        return this._name;
    }

    set name (newName : string){
        if(newName && newName.length > 4){
            this._name = newName;
        }
        else {
            throw new Error("Invalid data");
        }
    }

    get price (): number {
        return this._price;
    }

    set price (newPrice : number){
        if(newPrice && newPrice > 0){
            this._price = newPrice;
        }
        else {
            throw new Error("Invalid data");
        }
    }

    get description (): string | undefined {
        return this._description;
    }

    set description (newDescription : string){
        if(newDescription && newDescription.length > 4){
            this.description = newDescription;
        }
        else {
            throw new Error("Invalid data");
        }
    }
}