
// Unit tests for: removeBook


import { Store } from '@ngrx/store';

import { removeBook } from '../../books/book.actions';

import { IBook } from '../../model/book.interface';

import { BookListComponent } from '../book-list.component';

import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';


describe('BookListComponent.removeBook() removeBook method', () => {
  let component: BookListComponent;
  let store: Store<{ books: IBook[] }>;

  beforeEach(() => {
    const storeMock = {
      dispatch: jest.fn(),
      select: jest.fn().mockReturnValue(of([]))
    };

    TestBed.configureTestingModule({
      providers: [
        BookListComponent,
        { provide: Store, useValue: storeMock }
      ]
    });

    component = TestBed.inject(BookListComponent);
    store = TestBed.inject(Store);
  });

  describe('Happy Path', () => {
    it('should dispatch removeBook action with correct bookId', () => {
      // Arrange: Set up the bookId to be removed
      const bookId = '123';

      // Act: Call the removeBook method
      component.removeBook(bookId);

      // Assert: Verify that the removeBook action was dispatched with the correct bookId
      expect(store.dispatch).toHaveBeenCalledWith(removeBook({ bookId }));
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty bookId gracefully', () => {
      // Arrange: Set up an empty bookId
      const bookId = '';

      // Act: Call the removeBook method
      component.removeBook(bookId);

      // Assert: Verify that the removeBook action was dispatched even with an empty bookId
      expect(store.dispatch).toHaveBeenCalledWith(removeBook({ bookId }));
    });

    it('should handle null bookId gracefully', () => {
      // Arrange: Set up a null bookId
      const bookId = null;

      // Act: Call the removeBook method
      component.removeBook(bookId);

      // Assert: Verify that the removeBook action was dispatched with a null bookId
      expect(store.dispatch).toHaveBeenCalledWith(removeBook({ bookId }));
    });

    it('should handle undefined bookId gracefully', () => {
      // Arrange: Set up an undefined bookId
      const bookId = undefined;

      // Act: Call the removeBook method
      component.removeBook(bookId);

      // Assert: Verify that the removeBook action was dispatched with an undefined bookId
      expect(store.dispatch).toHaveBeenCalledWith(removeBook({ bookId }));
    });
  });
});

// End of unit tests for: removeBook
