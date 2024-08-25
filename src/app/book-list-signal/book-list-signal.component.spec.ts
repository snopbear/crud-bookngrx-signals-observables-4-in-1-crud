/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookListSignalComponent } from './book-list-signal.component';

describe('BookListSignalComponent', () => {
  let component: BookListSignalComponent;
  let fixture: ComponentFixture<BookListSignalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListSignalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
