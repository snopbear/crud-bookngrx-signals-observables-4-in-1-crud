import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'book-list-ngrx', pathMatch: 'full' },

  {
    path: 'book-list-ngrx',
    loadComponent: () =>
      import('./book-list-ngrx/book-list-ngrx.component').then(
        (x) => x.BookListNgrxComponent
      ),
  },
  {
    path: 'book-list-ngrx-signals',
    loadComponent: () =>
      import('./book-list-ngrx-signals/book-list-ngrx-signals.component').then(
        (x) => x.BookListSignalsComponent
      ),
  },
  {
    path: 'book-list-signals',
    loadComponent: () =>
      import('./book-list-signal/book-list-signal.component').then(
        (x) => x.BookListSignalComponent
      ),
  },
  {
    path: 'book-list-observables',
    loadComponent: () =>
      import('./book-list-observables/book-list-observables.component').then(
        (x) => x.BookListObservablesComponent
      ),
  },
];

;
