import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './component/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactsComponent } from './component/contacts/contacts.component';
import { ProfilContactComponent } from './component/profil-contact/profil-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ContactsComponent,
    ProfilContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
