import { Component, OnInit } from '@angular/core';
import { IBook } from '../model/book.interface';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadBooks, addBook, deleteBook } from '../books/book.actions';
import { selectAllBooks, selectBooksError } from '../books/books.selectors';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, FormsModule, JsonPipe],
})
export class BookListComponent implements OnInit {
  books$: Observable<IBook[]>;
  error$: Observable<string | null>;

  // Form model
  newBook: IBook = { id: '', title: '', author: '' };

  constructor(private store: Store) {
    this.books$ = this.store.select(selectAllBooks);
    this.error$ = this.store.select(selectBooksError);
  }

  ngOnInit(): void {
    this.store.dispatch(loadBooks());
  }

  onAddBook(): void {
    if (this.newBook.title && this.newBook.author) {
      this.newBook.id = this.generateId(); // Generate a unique ID for the book
      this.store.dispatch(addBook({ book: this.newBook }));
      this.resetForm();
    }
  }

  onUpdateBook(book: IBook): void {
    // Implement update logic
    // Example: this.store.dispatch(updateBook({ book }));
  }

  onDeleteBook(id: string): void {
    this.store.dispatch(deleteBook({ id }));
  }

  private resetForm(): void {
    this.newBook = { id: '', title: '', author: '' };
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9); // Simple ID generator
  }
}
