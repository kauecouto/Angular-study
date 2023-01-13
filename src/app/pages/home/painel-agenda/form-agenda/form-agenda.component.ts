import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DateForm } from 'src/app/models/dateForm';
import { DataBaseService } from 'src/app/services/data-base.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-form-agenda',
  templateUrl: './form-agenda.component.html',
  styleUrls: ['./form-agenda.component.css']
})
export class FormAgendaComponent implements OnInit, OnChanges {
  @Input() date!: DateForm
  title!: string 
  description: string = ''
  category!: string 
  color!: string
  dateStart!: string 
  dateFinish!: string
  hourStart!: string 
  hourFinish!: string 
  @Output() isALivePopUpAgenda = new EventEmitter()
  constructor(private serviceDataBase: DataBaseService) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
      this.dateStart = `${this.date.year}-${this.date.monthNumber}-${this.date.day}`
      this.hourStart = `${this.date.hour}`
      console.log(this.dateStart , this.hourStart)
    }
    
  onEmiterClosePopUp(){
    this.isALivePopUpAgenda.emit()
  }

  insertRecordDB(){
    this.serviceDataBase.insert('Registro_Agenda',{
      title: this.title,
      description: this.description,
      category:  this.category,
      color: this.color,
      dateStart: this.dateStart,
      dateFinish: this.dateFinish,
      hourStart:  this.hourStart,
      hourFinish:  this.hourFinish
    })
  }

}
