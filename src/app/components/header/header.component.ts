// import { selectCompedTodos } from './../../../../../Todo-app/src/app/store/todo/todo.selectors';
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

  constructor(private fontService: FontService){}

  ngOnInit(){
    this.fontService.currentFont$.subscribe( font => this.selectedFont = font);
  }

  onFontChange(font: string){
    this.fontService.changeFont(font)
    this.selectedFont = font;
  }

  toggleOptionsDisabled(){
    this.optionsDisabled = !this.optionsDisabled;
  }
}
