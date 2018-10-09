import { Component, OnInit } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { Country } from '../interfaces/country';
import { CountryService } from '../service/country.service';
import { CountryInfoPipe } from '../pipes/country-info.pipe';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {

  constructor(private countryService: CountryService) { }

  text: string;
  texts: string[];
  results: string[];

  /** For Objects */
  val: Country;
  vals: Country[];
  countrys: Country[];

  ngOnInit() {
  }

  search(event) {
    this.results = ['aaa', 'bbb', 'ccc'];
  }

  searchCountrys(event) {
    this.countryService.getCountries(event.query).subscribe((res) => {
      this.countrys = res.data;
    });
  }

  searchCountriesWithPipe(event) {
    this.countryService.getCountries(event.query).subscribe((res) => {
      this.countrys = res.data.map((country) => {
        country.displayData = new CountryInfoPipe().transform(country);
        return country;
      });
    });
  }
}
