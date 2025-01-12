import { Library } from '../services/Library';
import { IBook } from '../models/IBook';
import { IBorrower } from '../models/Iborrower';

describe('Library', () => {
  let library: Library;

  const mockBook1: IBook = {
    _id: '1',
    _title: '1984',
    _author: 'George Orwell',
    _category: 'Fiction',
  };

  const mockBook2: IBook = {
    _id: '2',
    _title: 'Sapiens',
    _author: 'Yuval Noah Harari',
    _category: 'Science',
  };

  const mockBorrower: IBorrower = {
    id: '1',
    name: 'John Doe',
    borrowedBooks: [],
  };

  beforeEach(() => {
    library = new Library();
  });

  it('should add a book to the library', () => {
    library.addBook(mockBook1);
    const books = library.searchBookBycategory('Fiction');
    expect(books.length).toBe(1);
    expect(books[0]).toEqual(mockBook1);
  });

  it('should add a borrower to the library', () => {
    library.addBorrower(mockBorrower);
    const borrowers = library.searchBorrowersByBook('1'); // No borrowed books yet
    expect(borrowers.length).toBe(0);
  });

  it('should allow a borrower to borrow a book', () => {
    library.addBook(mockBook1);
    library.addBorrower(mockBorrower);
    const result = library.borrowBook(mockBook1._id, mockBorrower.id);
    expect(result).toBeTrue();
    expect(mockBorrower.borrowedBooks.length).toBe(1);
    expect(mockBorrower.borrowedBooks[0]).toEqual(mockBook1);
  });

  it('should not allow a borrower to borrow a non-existent book', () => {
    library.addBorrower(mockBorrower);
    const result = library.borrowBook('999', mockBorrower.id);
    expect(result).toBeFalse();
    expect(mockBorrower.borrowedBooks.length).toBe(0);
  });

  it('should allow a borrower to return a book', () => {
    library.addBook(mockBook1);
    library.addBorrower(mockBorrower);
    library.borrowBook(mockBook1._id, mockBorrower.id);
    const result = library.returnBook(mockBook1._id, mockBorrower.id);
    expect(result).toBeTrue();
    expect(mockBorrower.borrowedBooks.length).toBe(0);
  });

  it('should search for books by category', () => {
    library.addBook(mockBook1);
    library.addBook(mockBook2);
    const fictionBooks = library.searchBookBycategory('Fiction');
    expect(fictionBooks.length).toBe(1);
    expect(fictionBooks[0]).toEqual(mockBook1);
  });

  it('should search for books by author', () => {
    library.addBook(mockBook1);
    library.addBook(mockBook2);
    const orwellBooks = library.searchBooksByAuthor('George Orwell');
    expect(orwellBooks.length).toBe(1);
    expect(orwellBooks[0]).toEqual(mockBook1);
  });

  it('should search for books by borrow status', () => {
    library.addBook(mockBook1);
    library.addBook(mockBook2);
    library.addBorrower(mockBorrower);
    library.borrowBook(mockBook1._id, mockBorrower.id);

    const borrowedBooks = library.searckBooksByStatus(true);
    const availableBooks = library.searckBooksByStatus(false);

    expect(borrowedBooks.length).toBe(1);
    expect(borrowedBooks[0]).toEqual(mockBook1);
    expect(availableBooks.length).toBe(1);
    expect(availableBooks[0]).toEqual(mockBook2);
  });
});
