import { Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { IBook } from '../../model/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:3000/booksNgrx';

  // Signals for state management
  books: WritableSignal<IBook[]> = signal([]); // Signal to hold the list of books
  loading: WritableSignal<boolean> = signal(false); // Signal for loading state
  error: WritableSignal<string | null> = signal(null); // Signal for error state

  constructor(private http: HttpClient) {}

  // Load all books from the server
  loadBooks(): Observable<IBook[]> {
    this.loading.set(true);
    return this.http.get<IBook[]>(this.apiUrl).pipe(
      tap({
        next: (books) => {
          this.books.set(books);
          this.loading.set(false);
        },
        error: () => {
          this.error.set('Failed to load books');
          this.loading.set(false);
        },
      }),
      catchError((err) => {
        this.error.set('Failed to load books');
        this.loading.set(false);
        throw err;
      })
    );
  }

  // Add a new book
  addBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(this.apiUrl, book);
  }

  // Update an existing book
  updateBook(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(`${this.apiUrl}/${book.id}`, book);
  }

  // Delete a book
  deleteBook(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
