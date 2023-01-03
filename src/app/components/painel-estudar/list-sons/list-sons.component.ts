import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-sons',
  templateUrl: './list-sons.component.html',
  styleUrls: ['./list-sons.component.css']
})
export class ListSonsComponent implements OnInit {
  @Output() musica = new EventEmitter()
  musicClass = [false , false, false]
  openPopUp: boolean = false
  currentVolume: number = 1
  @Output() volume = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    this.currentVolume = Number(localStorage.getItem('volumeMusic'))
  }

  changeMusic(music: string, clase: number){
    switch(clase){
      case 0 : {
        this.musicClass[clase] = true
        this.musicClass[1] = false
        this.musicClass[2] = false
      }break;
      case 1 : {
        
        this.musicClass[0] = false
        this.musicClass[clase] = true
        this.musicClass[2] = false
      }break;
      case 2 : {
        this.musicClass[0] = false
        this.musicClass[1] = false
        this.musicClass[clase] = true
      }break;

    }
    this.musica.emit(music)
  }

  changeVolume(){
    this.volume.emit(this.currentVolume)
  }

  controlPopUp(){
    if(this.openPopUp == true)
    this.openPopUp = false
    else
    this.openPopUp = true
  }
}
