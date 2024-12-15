import {ILibrary} from "../interfaces/ILibrary";
import  { Book } from "../classes/Book";


export class Library implements ILibrary {

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