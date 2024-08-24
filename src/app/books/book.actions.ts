import { createAction, props } from '@ngrx/store';
import { IBook } from '../model/book.interface';

export const loadBooks = createAction('[Books] Load Books');
export const loadBooksSuccess = createAction(
  '[Books] Load Books Success',
  props<{ books: IBook[] }>()
);
export const loadBooksFailure = createAction(
  '[Books] Load Books Failure',
  props<{ error: any }>()
);

export const addBook = createAction(
  '[Books] Add Book',
  props<{ book: IBook }>()
);
export const addBookSuccess = createAction(
  '[Books] Add Book Success',
  props<{ book: IBook }>()
);
export const addBookFailure = createAction(
  '[Books] Add Book Failure',
  props<{ error: any }>()
);

export const updateBook = createAction(
  '[Books] Update Book',
  props<{ book: IBook }>()
);
export const updateBookSuccess = createAction(
  '[Books] Update Book Success',
  props<{ book: IBook }>()
);
export const updateBookFailure = createAction(
  '[Books] Update Book Failure',
  props<{ error: any }>()
);

export const deleteBook = createAction(
  '[Books] Delete Book',
  props<{ id: string }>()
);
export const deleteBookSuccess = createAction(
  '[Books] Delete Book Success',
  props<{ id: string }>()
);
export const deleteBookFailure = createAction(
  '[Books] Delete Book Failure',
  props<{ error: any }>()
);