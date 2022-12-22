import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MessagesModule, MessageModule, ConfirmDialogModule
  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    MessageService, ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
