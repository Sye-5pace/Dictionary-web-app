import { Component } from '@angular/core';
import { FontService } from '../../services/font.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dictionary',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.css'
})

export class DictionaryComponent {
  selectedFont$!: string;
  word: string = '';
  empty: boolean = true;

  constructor( private fontService: FontService, private http: HttpClient){}

  ngOnInit(){
    this.fontService.currentFont$.subscribe( font => {
      this.selectedFont$ = font;
    })
  }

  searchWord(){
    if(this.word){

    }else{
      this.empty = true;
    }
  }



}
