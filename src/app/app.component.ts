import { Component } from '@angular/core';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { HeaderComponent } from './components/header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, DictionaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dictionary-web-app';

  

}
