import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBook } from '../model/book.interface';
import { selectAllBooks, selectBooksError } from './state/book-signals.selectors';
import {
  addBook,
  deleteBook,
  loadBooks,
  updateBook,
} from './state/book-signals.actions';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { BookSignalsService } from './service/book-signals.service';


@Component({
  selector: 'app-book-list-signals',
  templateUrl: './book-list-ngrx-signals.component.html',
  styleUrls: ['./book-list-ngrx-signals.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, AsyncPipe],
})
export class BookListSignalsComponent implements OnInit {
  books$: Observable<IBook[]> = this.store.pipe(select(selectAllBooks));
  error$: Observable<string | null> = this.store.pipe(select(selectBooksError));
  newBook: IBook = { id: '', title: '', author: '' };

  constructor(
    private store: Store,
    private bookSignalService: BookSignalsService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadBooks()); // Load books on init
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
    this.store.dispatch(updateBook({ book }));
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
