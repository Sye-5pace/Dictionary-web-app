import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})


export class FontService {
  private selectedFont = new BehaviorSubject<string>('Sans Serif');
  currentFont$ = this.selectedFont.asObservable();

  changeFont(font: string) {
    this.selectedFont.next(font);
  }
}
