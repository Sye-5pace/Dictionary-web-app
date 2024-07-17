import { Component } from '@angular/core';
import { FontService } from '../../services/font.service';

@Component({
  selector: 'app-dictionary',
  standalone: true,
  imports: [],
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.css'
})

export class DictionaryComponent {
  selectedFont$!: string;
  constructor( private fontService: FontService){}

  ngOnInit(){
    this.fontService.currentFont$.subscribe( font => {
      this.selectedFont$ = font;
    })
  }



}
