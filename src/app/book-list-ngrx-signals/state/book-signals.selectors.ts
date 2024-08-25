import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BooksSignalsState } from './book-signals-state';

export const selectBooksState = createFeatureSelector<BooksSignalsState>('books');

export const selectAllBooks = createSelector(
  selectBooksState,
  (state: BooksSignalsState) => state.books
);

export const selectBooksError = createSelector(
  selectBooksState,
  (state: BooksSignalsState) => state.error
);
