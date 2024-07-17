import { Component } from '@angular/core';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { HeaderComponent } from './components/header/header.component';
import { FontService } from './services/font.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, DictionaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Dictionary-web-app';
  selectedFont: string = 'Sans Serif'; 

  constructor(private fontService: FontService){}

  ngOnInit(){
    this.fontService.currentFont$.subscribe(font =>{ 
      this.selectedFont = font;
    });
  }
}


