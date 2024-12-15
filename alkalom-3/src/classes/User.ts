import  { Book } from "../classes/Book";
import { Library } from "../classes/Library";


export class User {

    protected _userId: string;
    protected _name: string;
    protected _email: string;
    borrowedBooks: Book[];

    constructor(userId: string, name: string, email: string){
        this._userId = userId;
        this._name = name;
        this._email = email;
        this.borrowedBooks = [];
    }

    get userId (): string{
        return this._userId;
    }

    set userId(newUserId: string){
        if(this.userId && this.userId.length > 3){
            this._userId = newUserId;
        }
        else {
            throw new Error("Invalid data");
        }   
    }

    get name(): string{
        return this._name;
    }

    set name(newName: string){
        if(this.name && this.name.length > 3){
            this._name = newName;
        }
        else {
            throw new Error("Invalid data");
        }   
    }

    get email(): string{
        return this._email;
    }

    set email(newemail: string){
        if(this.email && this.email.length > 5){
            this._email = newemail;
        }   
        else {
            throw new Error("Invalid data");
        }
    }
    


     borrowBook(library: Library, bookId: string): void {
        const book = library.findBookByID(bookId);
        if(book){
            this.borrowedBooks.push(book);
            console.log(`Book ${book.title} borrowed by ${this._name}`);
        } else {
            console.log(`Book wit id: ${bookId} not found`);      
        }
    }
}