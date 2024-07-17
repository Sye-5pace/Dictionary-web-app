import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})


export class FontService {
  private readonly storageKey = 'currentFont';
  private selectedFont = new BehaviorSubject<string>(this.readFontStorage());
  currentFont$ = this.selectedFont.asObservable();

  changeFont(font: string) {
    this.selectedFont.next(font);
    this.setFontStorage(font);
  }

  private setFontStorage(font: string){
    localStorage.setItem(this.storageKey, font)
  }

  private readFontStorage() {
    return localStorage.getItem(this.storageKey) || 'Sans Serif';
  }
}
