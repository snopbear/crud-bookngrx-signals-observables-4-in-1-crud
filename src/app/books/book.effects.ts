import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  loadBooks,
  loadBooksSuccess,
  loadBooksFailure,
  addBook,
  addBookSuccess,
  addBookFailure,
  updateBook,
  updateBookSuccess,
  updateBookFailure,
  deleteBook,
  deleteBookSuccess,
  deleteBookFailure,
} from './book.actions';
import { IBook } from '../model/book.interface';
import { BookService } from '../service/book.service';

@Injectable()
export class BookEffects {
  actions$ = inject(Actions);
  bookService = inject(BookService);

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBooks),
      mergeMap(() =>
        this.bookService.loadBooks().pipe(
          map((books) => loadBooksSuccess({ books })),
          catchError((error) => of(loadBooksFailure({ error })))
        )
      )
    )
  );

  addBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addBook),
      mergeMap((action) =>
        this.bookService.addBook(action.book).pipe(
          map((newBook) => addBookSuccess({ book: newBook })),
          catchError((error) => of(addBookFailure({ error })))
        )
      )
    )
  );

  updateBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateBook),
      mergeMap((action) =>
        this.bookService.updateBook(action.book).pipe(
          map((updatedBook) => updateBookSuccess({ book: updatedBook })),
          catchError((error) => of(updateBookFailure({ error })))
        )
      )
    )
  );

  deleteBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteBook),
      mergeMap((action) =>
        this.bookService.deleteBook(action.id).pipe(
          map(() => deleteBookSuccess({ id: action.id })),
          catchError((error) => of(deleteBookFailure({ error })))
        )
      )
    )
  );
}