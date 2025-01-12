import { IBook } from "./models/IBook";
import { IBorrower } from "./models/Iborrower";
import { Library } from "./services/Library";
import { LoanManager } from "./services/LoanManager";

const library = new Library();
const loanManager = new LoanManager<IBook>();

const book1: IBook = ({ _id: "1", _title: "1984", _author: "George Orwell", _category: "Fiction" });
const book2: IBook = ({ _id: "2", _title: "Sapiens", _author: "Yuval Noah Harari", _category: "Science" });
const borrower1: IBorrower = ({ id: "1", name: 'Alice', borrowedBooks: [] });

library.addBook(book1);
library.addBook(book2);
library.addBorrower(borrower1);

loanManager.borrowItem(book1._id, borrower1.id, library.borrowBook);
console.log(borrower1.borrowedBooks); 

loanManager.returnItem(book1._id, borrower1.id, library.returnBook);
console.log(borrower1.borrowedBooks); 