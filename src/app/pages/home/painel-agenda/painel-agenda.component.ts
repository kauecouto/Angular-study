import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataForm } from 'src/app/models/dataForm';
import { Date } from '../../../models/date';

@Component({
  selector: 'app-painel-agenda',
  templateUrl: './painel-agenda.component.html',
  styleUrls: ['./painel-agenda.component.css','./painel-agenda.responsive.component.css']
})
export class PainelAgendaComponent implements OnInit {
  date!: Date
  dateForm !:DataForm
  dataFormEdit!:DataForm 
  isALivePopUpAgenda: boolean = false
  
  constructor( private route: Router) { }

  ngOnInit(): void {
    this.route.navigate(['inicio/agenda'])
  }

  emitterDate(evento: any){
    this.date = evento
    
    if(evento.day < 10 && evento.monthNumber < 10){
      this.dateForm = {
        day: `0${evento.day}`,
        month: `${evento.month}`,
        monthNumber: `0${evento.monthNumber}`,
        year: evento.year,
        hour: evento.hour
      }
    }else if(evento.day < 10){
        this.dateForm = {
          day: `0${evento.day}`,
          month: `${evento.month}`,
          monthNumber: `${evento.monthNumber}`,
          year: evento.year,
          hour: evento.hour
      }
    }else if(evento.monthNumber < 10){
      this.dateForm = {
        day: `${evento.day}`,
        month: `${evento.month}`,
        monthNumber: `0${evento.monthNumber}`,
        year: evento.year,
        hour: evento.hour
      }
    }else{
      this.dateForm = evento
    }
  }

  emitterData(evento: DataForm){
    this.dataFormEdit = evento
  }

  controlPopUp(){
    if(this.isALivePopUpAgenda == true){
      this.isALivePopUpAgenda = false
    }else{
      this.isALivePopUpAgenda = true
    }
  }

}
