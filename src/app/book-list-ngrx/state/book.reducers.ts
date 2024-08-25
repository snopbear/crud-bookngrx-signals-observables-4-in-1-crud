import { createReducer, on } from "@ngrx/store";
import { initialState } from "./book-state";
import { addBookSuccess, deleteBookSuccess, loadBooksSuccess, updateBookSuccess } from "./book.actions";


export const bookReducer = createReducer(
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