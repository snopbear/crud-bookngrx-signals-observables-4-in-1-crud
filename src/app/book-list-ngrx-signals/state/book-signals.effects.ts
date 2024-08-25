import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  addBook,
  addBookSuccess,
  addBookFailure,
  deleteBook,
  deleteBookSuccess,
  deleteBookFailure,
  loadBooks,
  loadBooksSuccess,
  loadBooksFailure,
  updateBook,
  updateBookSuccess,
  updateBookFailure,
} from './book-signals.actions';
import { BookSignalsService } from '../service/book-signals.service';

@Injectable()
export class BookSignalsEffects {
  constructor(
    private actions$: Actions,
    private bookSignalsService: BookSignalsService
  ) {}

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBooks),
      mergeMap(() =>
        this.bookSignalsService.loadBooks().pipe(
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
        this.bookSignalsService.addBook(action.book).pipe(
          map((book) => addBookSuccess({ book })),
          catchError((error) => of(addBookFailure({ error })))
        )
      )
    )
  );

  updateBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateBook),
      mergeMap((action) =>
        this.bookSignalsService.updateBook(action.book).pipe(
          map((book) => updateBookSuccess({ book })),
          catchError((error) => of(updateBookFailure({ error })))
        )
      )
    )
  );

  deleteBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteBook),
      mergeMap((action) =>
        this.bookSignalsService.deleteBook(action.id).pipe(
          map(() => deleteBookSuccess({ id: action.id })),
          catchError((error) => of(deleteBookFailure({ error })))
        )
      )
    )
  );
}
