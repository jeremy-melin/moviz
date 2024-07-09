import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideHttpClient(), 
    provideAnimationsAsync(), 
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
