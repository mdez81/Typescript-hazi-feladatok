import { IBook } from "../models/IBook";
import { IBorrower } from "../models/Iborrower";
import { Log } from "../utils/myLog";

export class Library {
  
  //private books: IBook[] = [];
  //private borrowes : IBorrower [] = [];

  private books: Map<string, IBook> = new Map();
  private borrowers : Map<string, IBorrower> = new Map();

  constructor() {
    console.log(this.books);
    
    this.books = new Map();
    this.borrowers = new Map();
  }



  @Log
  addBook(book: IBook):void {
    this.books.set(book._id, book);
  }

  addBorrower(borrower: IBorrower):void {
    this.borrowers.set(borrower.id, borrower);
  }

  //@Log
  borrowBook(bookId: string, borrowerId: string):boolean {
    const book = this.books.get(bookId);
    const borrower = this.borrowers.get(borrowerId);

    if(book && borrower && !borrower.borrowedBooks.includes(book)){
      borrower.borrowedBooks.push(book);
      return true;
    }
    return false;
  }

  returnBook(bookId: string, borrowId: string):boolean {
    const borrower = this.borrowers.get(borrowId);

    if(borrower){
      const bookIndex = borrower.borrowedBooks.findIndex(b => b._id === bookId);
      if(bookIndex != -1) {
      return true;
    }
  }
    return false;
  }

  searchBookBycategory(category: string): IBook[] {
    return Array.from(this.books.values()).filter(book => book._category === category);
  }

  searchBorrowersByBook(bookId: string): IBorrower[]{
    return Array.from(this.borrowers.values()).filter(borrower => borrower.borrowedBooks.some(book => book._id === bookId));

  }

  searchBooksByAuthor(auhor: string): IBook[]{
    return Array.from(this.books.values()).filter(book => book._author === auhor);
  }


  searckBooksByStatus(isBorrowed: boolean): IBook[]{
        return Array.from(this.books.values()).filter(book => {
          return isBorrowed ?  Array.from(this.borrowers.values()).some(b => b.borrowedBooks.includes(book)) 
          : !Array.from(this.borrowers.values()).some(b => b.borrowedBooks.includes(book));
  });
  }

}
