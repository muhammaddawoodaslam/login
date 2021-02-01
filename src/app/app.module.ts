import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/inmemory-db/inmemory-db.service';
import { restInterceptor } from './shared/services/http-interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AgmCoreModule } from '@agm/core';
// import { AlertModule } from './shared/_alert';
import {HttpClient} from '@angular/common/http'

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "/assets/i18n/" , ".json");
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDmLxlfRRF8aQrA6wft3vwoqzHr3lHnIKc',
      libraries: ['places']
    }),
    // AlertModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({loader: {
      provide: TranslateLoader,
      useFactory: (HttpLoaderFactory),
      deps: [HttpClient]
      }})
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: restInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
