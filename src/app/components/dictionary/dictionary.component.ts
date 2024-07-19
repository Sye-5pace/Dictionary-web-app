import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('audioElement')
  audioElementRef!: ElementRef<HTMLAudioElement>;

  selectedFont$!: string;
  word: string = '';
  empty: boolean = false;
  searchResult! : Idictionary | undefined;
  errorMessage!: IErrorMessage;
  notFound: boolean = false;
  darkmode: boolean = false;
  wordAudio: string ='';


  constructor( private fontService: FontService, private http: HttpClient){}

  ngOnInit(){
    this.fontService.currentFont$.subscribe( font => {
      this.selectedFont$ = font;
    })
  }

  searchWord(event?: any){
    if(event?.target.innerText){
      this.word = event.target.innerText
    }
    if(this.word){
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${this.word}`;
      this.http.get(url).subscribe((response:any) => {
        this.searchResult = response[0]
        this.notFound = false;
        this.empty = false;
        this.wordAudio = this.searchResult?.phonetics?.find(phonetic => phonetic['audio'])?.['audio'] ?? "" ;
      }, err => {
        this.notFound = true;
        this.errorMessage = err.error;
      });
    }else{
      this.empty = true;
    }
  }

  playWordAudio() {
    const audioElement = this.audioElementRef.nativeElement;
    if(this.wordAudio){
      audioElement.src = this.wordAudio;
      audioElement.play().catch((error) =>{
        console.error('Error playing audio', error);
      })
    }
  }
}
