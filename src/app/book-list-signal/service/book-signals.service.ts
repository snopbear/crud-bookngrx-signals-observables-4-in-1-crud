import { Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { IBook } from '../../model/book.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookSignalsService {
  private apiUrl = 'http://localhost:3000/booksSignals';
  booksSignal = signal<IBook[]>([]); // Signal to manage book list state

  constructor(private http: HttpClient) {
    this.loadBooks(); // Initialize with data from server
  }

  // Load all books from the server
  loadBooks(): void {
    this.http.get<IBook[]>(this.apiUrl).subscribe((books) => {
      this.booksSignal.set(books);
    });
  }

  // Create a new book
  createBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(this.apiUrl, book).pipe(
      tap((newBook) => {
        this.booksSignal.update((books) => [...books, newBook]);
      })
    );
  }

  // Update a book
  updateBook(book: IBook): Observable<IBook> {
    const url = `${this.apiUrl}/${book.id}`;
    return this.http.put<IBook>(url, book).pipe(
      tap((updatedBook) => {
        this.booksSignal.update((books) =>
          books.map((b) => (b.id === updatedBook.id ? updatedBook : b))
        );
      })
    );
  }

  // Delete a book
  deleteBook(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url).pipe(
      tap(() => {
        this.booksSignal.update((books) => books.filter((b) => b.id !== id));
      })
    );
  }
}
