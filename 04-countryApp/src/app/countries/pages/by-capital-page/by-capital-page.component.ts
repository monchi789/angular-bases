import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CountriesService } from '../../services/contry.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  @Input()
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  // @Output()
  // public onNewTag: EventEmitter<string[]> = new EventEmitter()



  searchByCapital(term: string): void {
    this.countriesService.searchCapital(term).subscribe(countries => {
      this.countries = countries;
    })
  }
}
