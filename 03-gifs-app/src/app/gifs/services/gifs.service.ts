import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apikey: string = '6Qwp3sEWbgxcmfwC7BZVJchbRSfVeC4a';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs'

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
   }

  get tagsHistory() {
    return [...this._tagsHistory]
  }

  private organizaHistory(tag: string): void {
    tag.toLowerCase();

    if(this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTad) => oldTad !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 10);

    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if(!localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!)

    if(this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

  public searchTag(tag: string): void {
    if(tag.length === 0) return;
    this.organizaHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('limit', '10')
      .set('q', tag)

    // fetch('https://api.giphy.com/v1/stickers/search?api_key=6Qwp3sEWbgxcmfwC7BZVJchbRSfVeC4a&q=valorant&limit=1')
    //   .then(resp => resp.json())
    //   .then(data => console.log(data));

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
    .subscribe((res: SearchResponse) => {
      this.gifList = res.data
      console.log({gifs: this.gifList});

    })
  }

}
