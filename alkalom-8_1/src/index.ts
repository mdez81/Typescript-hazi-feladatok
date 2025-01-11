
import { Book } from "./models/Book";
import { FictionBook } from "./models/FictionBook";
//import { IBook } from "./models/IBook";
import { Library } from "./models/Library";
import { ScienceBook } from "./models/ScienceBook";



const myLibrary = new Library<Book<string>>();
myLibrary.addBook(new ScienceBook('1',  'Php Cookbook', 'John Smith', 200));
myLibrary.addBook(new FictionBook('2', '1984',  'George Orwell', 270))

myLibrary.addUser({name: "George Bell", memberId: "001" });
myLibrary.findUser("001");

myLibrary.borrowBook('1', "001");
myLibrary.returnBook('2');