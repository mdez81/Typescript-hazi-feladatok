
import { Book } from "./src/models/Book";
import { FictionBook } from "./src/models/FictionBook";
import { Library } from "./src/models/Library";
import { ScienceBook } from "./src/models/ScienceBook";



const myLibrary = new Library<Book<string>>();

myLibrary.addBook(new ScienceBook("1",  "Php Cookbook", "John Smith", 200));
myLibrary.addBook(new FictionBook("2",  "1984", "George Orwell", 300));
myLibrary.addBook({ _id: "3", _title: "The Great Gatsby", _author: "F. Scott Fitzgerald", _category: "Fiction", _isBorrowed: true });

myLibrary.findBook("2");
myLibrary.findBook("3");

myLibrary.addUser({name: "George Bell", memberId: "001" });
myLibrary.findUser("001");

myLibrary.borrowBook('1', "001");
myLibrary.returnBook('2');