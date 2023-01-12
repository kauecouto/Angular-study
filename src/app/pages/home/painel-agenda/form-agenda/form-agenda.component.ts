import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateForm } from 'src/app/models/dateForm';

@Component({
  selector: 'app-form-agenda',
  templateUrl: './form-agenda.component.html',
  styleUrls: ['./form-agenda.component.css']
})
export class FormAgendaComponent implements OnInit {
  @Output() isALivePopUpAgenda = new EventEmitter()
  constructor() { }
  @Input() date!: DateForm
  ngOnInit(): void {
    console.log(this.date)
  }

  onEmiterClosePopUp(){
    this.isALivePopUpAgenda.emit()
  }
}
