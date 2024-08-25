import { IBook } from '../../model/book.interface';

export interface BooksSignalsState {
  books: IBook[];
  error: any;
}

export const initialState: BooksSignalsState = {
  books: [],
  error: null,
};
