import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HelpersService} from 'src/app/_services/generic/helpers.service';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from 'src/app/app-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NotificationService} from 'src/app/_services/generic/notification.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    HelpersService,
    HttpClient,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
