import { Component, OnInit, OnDestroy } from '@angular/core';
import { dataProfile } from 'src/app/models/dataProfile';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'app-estudar',
  templateUrl: './painel-estudar.component.html',
  styleUrls: ['./painel-estudar.component.css', './painel-estudar.reponsive.component.css']
})
export class PainelEstudarComponent implements OnInit, OnDestroy {
  user!: dataProfile | any
  minutes: number = 25
  seconds: number = 0
  
  timer_iniciar : any
  timer_interval : any 
  paused: boolean = false

  btnIniciarActive : boolean = true
  classRotate: string = ''
  isStudy!: boolean

  somStorage = localStorage.getItem('music-pomo')?.slice(1, -1)
  som: any =  new Audio('../../../assets/audio/lo-fi.mp3')
  alarme : any = new Audio('../../../assets/audio/som-alarme.mp3')
  volume: number = 1
  constructor(private serviceDataBase: DataBaseService) { }

  ngOnInit(): void {
    this.getUser()
    this.som = new Audio(this.somStorage)
    this.volume = Number(localStorage.getItem('volumeMusic'))
    this.som.volume = this.volume
  }

  getUser(){
    this.serviceDataBase.getAll(`usuários/${localStorage.getItem('key')}`).subscribe( {
      next: result => {
      this.user = result[0]
      if(this.user.timePomo > 0){
        this.minutes = this.user.timePomo
      }
      
    },
      error: err => console.error(err)
    }
    ) 
  }

  changeMusic(evento: string){
    localStorage.setItem('music-pomo',JSON.stringify(evento))
    this.som.pause()
    this.pausar()
    this.som = new Audio(evento)
  }

  changeVolume(evento: number){
    localStorage.setItem('volumeMusic', JSON.stringify(evento))
    this.volume = evento
    this.som.volume = this.volume
  }

  ngOnDestroy(): void {
    this.som.pause()
  }

  timer(){
    if(this.seconds === 0){
      this.seconds = 59
      this.minutes -= 1
    }else{
      this.seconds -= 1
    }

    if(this.minutes < 0){
      this.alarme.play()
      this.btnIniciarActive = true
      this.classRotate = ''
      
      if(this.isStudy == true){
        clearInterval(this.timer_iniciar)
        this.onInterval()
        alert('tempo acabou!')
      }else{
        clearInterval(this.timer_interval)
        this.iniciar()
        alert('tempo acabou!')
      }

    }
  }

  iniciar(){
    if(this.paused == false){
      this.minutes -= 1
      this.seconds = 59
    }

    this.timer_iniciar = setInterval(() => {
      this.timer()
    },1000)
    this.paused = false
    this.btnIniciarActive = false     
    this.classRotate = 'active-rotating'
    this.isStudy = true
    this.som.play()
  }

  resetar(){
    if(this.user.timePomo > 0){
      this.minutes = this.user.timePomo
    }else{
      this.minutes = 25
    }
    
    this.seconds = 0
    this.btnIniciarActive = true
    clearInterval(this.timer_interval)
    clearInterval(this.timer_iniciar)
    this.classRotate = ''
    this.som.pause()
  }

  pausar(){
    clearInterval(this.timer_interval)
    clearInterval(this.timer_iniciar)
    this.paused = true
    this.btnIniciarActive = true
    this.classRotate = ''
    this.som.pause()
  }

  onInterval(){
    if(this.user.pausaPomo > 0){
      this.minutes = this.user.pausaPomo -1
    }else{
      this.minutes = 4
    }
    this.seconds = 59
    this.timer_interval = setInterval(() => {
      this.timer()
    },1000)
    this.classRotate = 'active-rotating-interval'
    this.isStudy = false
    this.som.play()
  }
}
