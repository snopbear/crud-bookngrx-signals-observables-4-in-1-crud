import { Component, OnInit } from '@angular/core';
import { BookSignalsService } from './service/book-signals.service';
import { IBook } from '../model/book.interface';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-book-list-signal',
  templateUrl: './book-list-signal.component.html',
  styleUrls: ['./book-list-signal.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf,NgFor],
})
export class BookListSignalComponent {
  books = this.bookService.booksSignal;

  newBook: IBook = {
    id: '',
    title: '',
    author: '',
  };

  constructor(private bookService: BookSignalsService) {}

  ngOnInit(): void {
    this.bookService.loadBooks(); // Load books on component init
  }

  addBook(): void {
    if (this.newBook.title && this.newBook.author) {
      this.newBook.id = this.generateId(); // Generate a new ID for the book
      this.bookService.createBook({ ...this.newBook }).subscribe(() => {
        this.newBook = { id: '', title: '', author: '' }; // Reset the form
      });
    }
  }

  editBook(book: IBook): void {
    this.newBook = { ...book }; // Set the form to the selected book for editing
  }

  updateBook(): void {
    this.bookService.updateBook({ ...this.newBook }).subscribe(() => {
      this.newBook = { id: '', title: '', author: '' }; // Reset the form
    });
  }

  deleteBook(id: string): void {
    this.bookService.deleteBook(id).subscribe();
  }

  generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
