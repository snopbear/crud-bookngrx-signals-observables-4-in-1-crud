import { Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IBook } from '../../model/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookSignalsService {
  private apiUrl = 'http://localhost:3000/booksNgrxSignals';

  // Signals for internal state management (if needed)
  books: WritableSignal<IBook[]> = signal([]);
  loading: WritableSignal<boolean> = signal(false);
  error: WritableSignal<string | null> = signal(null);

  constructor(private http: HttpClient) {}

  // Load all books from the server and return an Observable
  loadBooks(): Observable<IBook[]> {
    this.loading.set(true);

    return this.http.get<IBook[]>(this.apiUrl).pipe(
      tap({
        next: (books) => {
          this.books.set(books); // Update internal signal
          this.loading.set(false);
        },
        error: (err) => {
          this.error.set('Failed to load books');
          this.loading.set(false);
        },
      }),
      catchError((err) => {
        this.error.set('Failed to load books');
        this.loading.set(false);
        throw err; // Rethrow the error so the caller can handle it too
      })
    );
  }

  // Add a new book
  addBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(this.apiUrl, book).pipe(
      tap((newBook) => {
        this.books.update((books) => [...books, newBook]); // Update internal signal
      }),
      catchError((err) => {
        this.error.set('Failed to add book');
        throw err;
      })
    );
  }

  // Update an existing book
  updateBook(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(`${this.apiUrl}/${book.id}`, book).pipe(
      tap((updatedBook) => {
        this.books.update((books) =>
          books.map((b) => (b.id === updatedBook.id ? updatedBook : b))
        ); // Update internal signal
      }),
      catchError((err) => {
        this.error.set('Failed to update book');
        throw err;
      })
    );
  }

  // Delete a book
  deleteBook(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        this.books.update((books) => books.filter((b) => b.id !== id)); // Update internal signal
      }),
      catchError((err) => {
        this.error.set('Failed to delete book');
        throw err;
      })
    );
  }
}
