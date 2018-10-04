import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// PrimeNg
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
