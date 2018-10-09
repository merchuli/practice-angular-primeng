import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';

// PrimeNg
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';

// Service
import { CountryService } from './service/country.service';
import { CountryInfoPipe } from './pipes/country-info.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent,
    CountryInfoPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    DropdownModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
