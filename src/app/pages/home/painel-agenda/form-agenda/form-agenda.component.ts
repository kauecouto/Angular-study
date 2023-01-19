import { Component, EventEmitter, Input, IterableChanges, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DataForm } from 'src/app/models/dataForm';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DataBaseService } from 'src/app/services/data-base.service';
import { __values } from 'tslib';


@Component({
  selector: 'app-form-agenda',
  templateUrl: './form-agenda.component.html',
  styleUrls: ['./form-agenda.component.css']
})
export class FormAgendaComponent implements OnInit, OnChanges {
  @Input() data!: DataForm
  @Output() isALivePopUpAgenda = new EventEmitter()
  invalid: boolean = false
  constructor(private serviceDataBase: DataBaseService, private serviceAuth: AuthenticationService) { }

  ngOnInit(): void { 
    
  }

  ngOnChanges(): void {
    if(!this.data.key){
      this.data.dateStart = `${this.data.year}-${this.data.monthNumber}-${this.data.day}`
    }
  }
    
  onEmiterClosePopUp(){
    this.isALivePopUpAgenda.emit()
  }

  insertRecordDB(){
    if(Object.values(this.data).length >= 11){
      this.invalid = false        
      if(this.data.key){
            this.serviceDataBase.update(`usuários/${localStorage.getItem('key')}/Registros_Agenda/${this.data.dateStart}`, this.data.key, {
              title: this.data.title,
              description: this.data.description,
              category:  this.data.category,
              color: this.data.color,
              dateStart: this.data.dateStart,
              hourStart:  this.data.hourStart,
              hourFinish:  this.data.hourFinish})
            this.onEmiterClosePopUp()
        }else{
            this.serviceDataBase.insert(`usuários/${localStorage.getItem('key')}/Registros_Agenda/${this.data.dateStart}`,{
              title: this.data.title,
              description: this.data.description,
              category:  this.data.category,
              color: this.data.color,
              dateStart: this.data.dateStart,
              hourStart:  this.data.hourStart,
              hourFinish:  this.data.hourFinish})
            this.onEmiterClosePopUp()
            }
    }else{
      this.invalid = true
    }    
  }
}
