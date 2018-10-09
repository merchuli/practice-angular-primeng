import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../interfaces/country';

@Pipe({
  name: 'countryInfo'
})
export class CountryInfoPipe implements PipeTransform {

  transform(value: Country, args?: any): string {
    return `[${value.code}] - ${value.name}`;
  }

}
