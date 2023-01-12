import { Component, OnInit } from '@angular/core';
import { Date } from '../../../components/agenda/date';

@Component({
  selector: 'app-painel-agenda',
  templateUrl: './painel-agenda.component.html',
  styleUrls: ['./painel-agenda.component.css','./painel-agenda.responsive.component.css']
})
export class PainelAgendaComponent implements OnInit {
  date: Date = {
    day: 0,
    month: '',
    year: 0
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  emitterDate(evento: any){
    this.date = evento
  }
}
