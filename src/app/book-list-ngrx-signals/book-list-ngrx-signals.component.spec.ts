/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookListSignalsComponent } from './book-list-ngrx-signals.component';

describe('BookListSignalsComponent', () => {
  let component: BookListSignalsComponent;
  let fixture: ComponentFixture<BookListSignalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListSignalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
