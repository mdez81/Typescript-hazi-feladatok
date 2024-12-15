/*class Book  {

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


interface ILibrary {

      addBook(book: Book): void;
     removeBook(id: string) :void;
     findBookByID(id: string): Book | undefined;
     listAllBooks():  void;
}



class Library implements ILibrary {

   protected books: Book[];

    constructor(){
        this.books = [];
    }

    addBook(book: Book): void {
            this.books.push(book);
            //return `Book${book._title} successfully added,number of books are: ${this.books.length}`;
            console.log( `Book${book.title} successfully added,number of books are: ${this.books.length}`);          
    }

    removeBook(id: string): void {
        const book = this.findBookByID(id);
        if(book){
            this.books = this.books.filter((book) => book.bookId !== id);
            console.log(`Book "${book.title}" removed.`);
        } else {
            throw new Error("Invalid id");
        } 
    }

    findBookByID(id: string): Book | undefined {
        return this.books.find((book) =>book.bookId === id );
    }

    listAllBooks(): void {
        for (const book of this.books) {
            console.log(book);
        }
    }

}



class User {

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
}*/

import  { Book } from "./classes/Book";
import { Library } from "./classes/Library";
import { User } from "./classes/User";

const library = new Library();
const book1 = new Book("0596101015", "Php cookbook", "David Sklar", 3400);
//book1.bookId = "000";
console.log(book1.bookId);


const book2 = new Book("67890", "JavaScript Mastery", "Author2", 2500);
const user1 = new User("765", "John Smith", "js76@MediaList.com");

library.addBook(book1);
library.addBook(book2);

library.listAllBooks();

library.removeBook("67890");
library.listAllBooks();

user1.borrowBook(library, "0596101015");