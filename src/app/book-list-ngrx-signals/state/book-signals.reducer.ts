import { createReducer, on } from '@ngrx/store';
import {  initialState } from './book-signals-state';
import {
  addBookSuccess,
  deleteBookSuccess,
  loadBooksSuccess,
  updateBookSuccess,
} from './book-signals.actions';

export const bookSignalReducer = createReducer(
  initialState,
  on(loadBooksSuccess, (state, { books }) => ({ ...state, books })),
  on(addBookSuccess, (state, { book }) => ({
    ...state,
    books: [...state.books, book],
  })),
  on(updateBookSuccess, (state, { book }) => ({
    ...state,
    books: state.books.map((b) => (b.id === book.id ? book : b)),
  })),
  on(deleteBookSuccess, (state, { id }) => ({
    ...state,
    books: state.books.filter((b) => b.id !== id),
  }))
);
