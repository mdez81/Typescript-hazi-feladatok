import { IRental } from './IRental';
import { Borrower } from '../services/borrowTypes';
import { Log } from '../utils/myLog';
//import { Book} from "../services/borrowTypes";

export class Library<T > implements IRental<T> {
  private books: T[] = [];
  private users: Borrower[] = [];

  @Log
  addBook(item: T): void {
    this.books.push(item);
    console.log('Book added successfully.');
  }

  modifyBook(id: string, updatedItem: Partial<T>): boolean {
    const book = this.books.find(bk => (bk as any).id === id); // Type assertion
    if (book) {
      Object.assign(book, updatedItem);
      console.log(`Book with ID ${id} modified successfully with updates: ${JSON.stringify(updatedItem)}.`);
      return true;
    }
    console.log(`Book with ID ${id} not found.`);
    return false;
  }

  deleteBook(id: string): boolean {
    const initialLength = this.books.length;
    this.books = this.books.filter(bk => (bk as any).id !== id); // Type assertion
    if (this.books.length < initialLength) {
      console.log(`Book with ID ${id} deleted successfully.`);
      return true;
    }
    console.log(`Book with ID ${id} not found.`);
    return false;
  }

 findBook(id: string): T | undefined {
  const book = this.books.find(bk => {
    if (bk && typeof bk === "object" && "id" in bk) {
      return (bk as any).id === id;
    }
    return false;
  });

  if (book) {
    console.log(`Found book with ID ${id}: ${JSON.stringify(book)}.`);
  } else {
    console.log(`Book with ID ${id} not found.`);
  }
  return book;
}

  borrowBook(id: string, userId: string): boolean {
    const book = this.findBook(id);
    if (book && !(book as any).isBorrowed) { // Type assertion
      (book as any).isBorrowed = true; // Type assertion
      console.log(`Book with ID ${id} has been borrowed by user ${userId}.`);
      return true;
    }
    if (book) {
      console.log(`Book with ID ${id} is already borrowed.`);
    }
    return false;
  }

  returnBook(id: string): boolean {
    const book = this.findBook(id);
    if (book && (book as any).isBorrowed) { // Type assertion
      (book as any).isBorrowed = false; // Type assertion
      console.log(`Book with ID ${id} has been returned.`);
      return true;
    }
    if (book) {
      console.log(`Book with ID ${id} was not borrowed.`);
    }
    return false;
  }

  addUser(user: Borrower): void {
    this.users.push(user);
    console.log(`User with ID ${user.memberId} added successfully.`);
  }

  // Find a user by their memberId
  findUser(userId: string): Borrower | undefined {
    const user = this.users.find(u => u.memberId === userId);
    if (user) {
      console.log(`Found user with ID ${userId}: ${JSON.stringify(user)}.`);
    } else {
      console.log(`User with ID ${userId} not found.`);
    }
    return user;
  }
}
