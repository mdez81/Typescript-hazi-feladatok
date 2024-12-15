import  { Book } from "../classes/Book";

export interface ILibrary {

    addBook(book: Book): void;
   removeBook(id: string) :void;
   findBookByID(id: string): Book | undefined;
   listAllBooks():  void;
}