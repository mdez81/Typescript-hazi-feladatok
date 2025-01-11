import { FictionBook } from "../models/FictionBook";
import { ScienceBook } from "../models/ScienceBook";

export type Book = FictionBook | ScienceBook;

export type Borrower = { name: string; memberId: string };
export type BorrowTransaction = Borrower & { bookId: string; borrowDate: Date };