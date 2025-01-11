import { Library } from "./Library";
import { Book } from "./Book";
import { BorrowTransaction, Borrower } from "../services/borrowTypes";

describe("Library Class", () => {
  let library: Library<Book<string>>;
  const testBook: Book<string> = { _id: "1", _title: "Test Book", _author: "Author", _category:"science", _isBorrowed: false };
  const testUser: Borrower = { name: "John Doe", memberId: "U1" };

  beforeEach(() => {
    library = new Library<Book<string>>();
  });

  it("should add a book to the library", () => {
    library.addBook(testBook);
    const foundBook = library.findBook("1");
    expect(foundBook).toEqual(testBook);
  });

  it("should modify an existing book", () => {
    library.addBook(testBook);
    library.modifyBook("1", { _title: "Updated Test Book" });
    const foundBook = library.findBook("1");
    expect(foundBook?._title).toEqual("Updated Test Book");
  });

  it("should delete a book from the library", () => {
    library.addBook(testBook);
    const isDeleted = library.deleteBook("1");
    expect(isDeleted).toBeTrue();
    const foundBook = library.findBook("1");
    expect(foundBook).toBeUndefined();
  });

  it("should add a user to the library", () => {
    library.addUser(testUser);
    const foundUser = library.findUser("U1");
    expect(foundUser).toEqual(testUser);
  });

  it("should borrow a book for a user", () => {
    library.addBook(testBook);
    library.addUser(testUser);
    const isBorrowed = library.borrowBook("1", "U1");
    expect(isBorrowed).toBeTrue();
    const foundBook = library.findBook("1");
    expect(foundBook?._isBorrowed).toBeTrue();
  });

  it("should return a borrowed book", () => {
    library.addBook(testBook);
    library.addUser(testUser);
    library.borrowBook("1", "U1");
    const isReturned = library.returnBook("1");
    expect(isReturned).toBeTrue();
    const foundBook = library.findBook("1");
    expect(foundBook?._isBorrowed).toBeFalse();
  });

  it("should not allow borrowing a book that is already borrowed", () => {
    library.addBook(testBook);
    library.addUser(testUser);
    library.borrowBook("1", "U1");
    const isBorrowedAgain = library.borrowBook("1", "U1");
    expect(isBorrowedAgain).toBeFalse();
  });

  it("should handle borrowing transactions correctly", () => {
    library.addBook(testBook);
    library.addUser(testUser);
    library.borrowBook("1", "U1");
    const transactionLog = (library as any).borrowing; // Accessing private member for test
    expect(transactionLog.length).toBe(1);
    expect(transactionLog[0]).toEqual(jasmine.objectContaining({
      memberId: "U1",
      bookId: "1",
      name: "John Doe"
    }));
  });
});
