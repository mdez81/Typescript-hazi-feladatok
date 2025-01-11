export interface IRental<T> {
    addBook(item: T): void;
    modifyBook(id: string, updatedItem: Partial<T>): boolean;
    deleteBook(id: string): boolean;
    findBook(id: string): T | undefined;
    borrowBook(id: string, borrowerId: string): boolean;
    returnBook(id: string): boolean;
  }