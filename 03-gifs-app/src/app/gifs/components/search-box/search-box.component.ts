import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @Output()
  public onNewTag: EventEmitter<string[]> = new EventEmitter()

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {};

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);


    if(this.gifsService.tagsHistory.length === 0) return;

    this.onNewTag.emit(this.gifsService.tagsHistory);

    this.tagInput.nativeElement.value = '';
  }
}
