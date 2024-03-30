import { Component, Input } from '@angular/core';
import { CountriesService } from '../../services/contry.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  template: '',
  styles: ``
})
export class ByCountryPageComponent {

  @Input()
  public countries: Country[] = []

  constructor(private countriesService: CountriesService) {}

  // searchByCountry(term: string): void {
  //   this.countriesService.searchCountry(term).subscribe(countries => {
  //     this.countries = countries;
  //   })
  // }

}
