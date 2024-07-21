import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  private theme = new BehaviorSubject<boolean>(this.readThemeStorage());
  currentTheme$ = this.theme.asObservable();
  private readonly themeKey = 'theme';

  constructor() { }

  toggleTheme() {
    const newTheme = !this.theme.getValue();
    this.theme.next(newTheme);
    this.setThemeStorage(newTheme);
  }


  private setThemeStorage(theme: boolean) {
    localStorage.setItem(this.themeKey, theme.toString());
    console.log(theme)
  }

  private readThemeStorage() {
    const themeString = localStorage.getItem(this.themeKey);
    return themeString  ? false:  Boolean(themeString);
  }
}



