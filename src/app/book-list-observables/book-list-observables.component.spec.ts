/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookListObservablesComponent } from './book-list-observables.component';

describe('BookListObservablesComponent', () => {
  let component: BookListObservablesComponent;
  let fixture: ComponentFixture<BookListObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
