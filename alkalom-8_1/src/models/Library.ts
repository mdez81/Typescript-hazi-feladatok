import { IBook } from "./IBook";
import { IBorrower } from "./Iborrower";
import { Borrower } from '../services/borrowTypes';


export class Library {
  
  private books: IBook[] = [];
  private borrowes : IBorrower [] = [];

  addBook(book: IBook):void {
    this.books.push(book);
  }

  addBorrower(borrower: IBorrower):void {
    this.borrowes.push(borrower);
  }

  borrowBook(bookId: string, borrowId: string):boolean {
    const book = this.books.find(bk => bk._id === bookId);
    const Borrower = this.borrowes.find(br => br.id === borrowId);

    if(book && Borrower && !Borrower.borrowedBooks.includes(book)){
      Borrower.borrowedBooks.push(book);
      return true;
    }
    return false;
  }

  returnBook(bookId: string, borrowId: string):boolean {
    const Borrower = this.borrowes.find(br => br.id === borrowId);

    if(Borrower){
      const bookIndex = Borrower.borrowedBooks.findIndex(b => b.id === bookId);
      if(bookIndex != -1) {
      return true;
    }
  }
    return false;
  }




}
