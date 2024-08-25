import { IBook } from "../../model/book.interface";


export interface BooksState {
  books: IBook[];
  error: any;
}

export const initialState: BooksState = {
  books: [],
  error: null,
};
