/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookListNgrxComponent } from './book-list-ngrx.component';

describe('BookListComponent', () => {
  let component: BookListNgrxComponent;
  let fixture: ComponentFixture<BookListNgrxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookListNgrxComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
