import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../../model/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookObservablesService {
  private apiUrl = 'http://localhost:3000/booksObservables';

  constructor(private http: HttpClient) {}

  // Get all books
  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.apiUrl);
  }

  // Create a new book
  createBook(book: IBook): Observable<IBook> {
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
