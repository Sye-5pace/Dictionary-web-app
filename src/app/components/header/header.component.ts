import { ThemeService } from './../../services/theme.service';
import { Component,  } from '@angular/core';
import { FontService } from '../../services/font.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {
  selectedFont: string = 'Sans Serif'
  optionsDisabled: boolean = false;
  darkmode: boolean = false;

  constructor(private fontService: FontService, private themeService: ThemeService){}

  ngOnInit(){
    this.fontService.currentFont$.subscribe( font => this.selectedFont = font);
    this.themeService.currentTheme$.subscribe( theme => this.darkmode = theme )
  }

  onFontChange(font: string){
    this.fontService.changeFont(font)
    this.selectedFont = font;
  }

  toggleTheme(){
    this.themeService.toggleTheme();
  }

  toggleOptionsDisabled(){
    this.optionsDisabled = !this.optionsDisabled;
  }
}
