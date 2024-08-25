import { Component, OnInit } from '@angular/core';
import { BookObservablesService } from './service/book-observables.service';
import { Observable } from 'rxjs';
import { IBook } from '../model/book.interface';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-list-observables',
  templateUrl: './book-list-observables.component.html',
  styleUrls: ['./book-list-observables.component.css'],
  standalone: true,
  imports: [NgIf, NgFor, FormsModule,AsyncPipe],
})
export class BookListObservablesComponent implements OnInit {
  books$!: Observable<IBook[]>; // Observable for books fetched from the server
  newBook: IBook = {
    id: '',
    title: '',
    author: '',
  };

  constructor(private bookService: BookObservablesService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  // Load books from the service
  loadBooks(): void {
    this.books$ = this.bookService.getBooks();
  }

  addBook(): void {
    if (this.newBook.title && this.newBook.author) {
      const bookToCreate = { ...this.newBook, id: this.generateId() }; // Create a new book with a generated ID
      this.bookService.createBook(bookToCreate).subscribe(() => {
        this.loadBooks(); // Reload the book list after adding a new book
        this.resetForm(); // Reset the form fields
      });
    }
  }

  editBook(book: IBook): void {
    this.newBook = { ...book }; // Load the book details into the form for editing
  }

  updateBook(): void {
    this.bookService.updateBook(this.newBook).subscribe(() => {
      this.loadBooks(); // Reload the book list after updating the book
      this.resetForm(); // Reset the form fields
    });
  }

  deleteBook(id: string): void {
    this.bookService.deleteBook(id).subscribe(() => {
      this.loadBooks(); // Reload the book list after deleting a book
    });
  }

  resetForm(): void {
    this.newBook = { id: '', title: '', author: '' }; // Clear the form fields
  }

  generateId(): string {
    return Math.random().toString(36).substr(2, 9); // Generate a random ID for new books
  }
}
