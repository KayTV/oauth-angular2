import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryStoreService } from './api/in-memory-store.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './homepage/homepage.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryStoreService),
    routing
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
