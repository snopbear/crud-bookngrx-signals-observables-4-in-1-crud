import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { bookReducer } from './book-list-ngrx/state/book.reducers';

import { bookSignalReducer } from './book-list-ngrx-signals/state/book-signals.reducer';
import { BookEffects } from './book-list-ngrx/state/book.effects';
import { BookSignalsEffects } from './book-list-ngrx-signals/state/book-signals.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideStore(),

    provideEffects([BookEffects]),
    provideState({ name: 'books', reducer: bookReducer }),

    provideEffects([BookSignalsEffects]),
    provideState({ name: 'booksSignal', reducer: bookSignalReducer }),
  ],
};
