import { Component } from '@angular/core';
import { FontService } from '../../services/font.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Idictionary, IErrorMessage } from '../../idictionary';

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
  empty: boolean = false;
  searchResult! : Idictionary[];
  errorMessage!: IErrorMessage;
  notFound: boolean = false;

  constructor( private fontService: FontService, private http: HttpClient){}

  ngOnInit(){
    this.fontService.currentFont$.subscribe( font => {
      this.selectedFont$ = font;
    })
  }

  searchWord(){
    if(this.word){
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${this.word}`;
      this.http.get(url).subscribe((response:any) => {
        this.searchResult = response[0]
        this.notFound = false;
        this.empty = false;
        console.log(this.searchResult);
      }, err => {
        this.notFound = true;
        this.errorMessage = err.error;
      });
    }else{
      this.empty = true;
    }
  }



}
