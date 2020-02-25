import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicformComponent } from './components/dynamicform/dynamicform.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    DynamicformComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule,
    ],
  exports: [
    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
