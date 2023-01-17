import { Component, EventEmitter, Input, IterableChanges, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DataEditForm } from 'src/app/models/dateEditForm';
import { DateForm } from 'src/app/models/dateForm';
import { DataBaseService } from 'src/app/services/data-base.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-form-agenda',
  templateUrl: './form-agenda.component.html',
  styleUrls: ['./form-agenda.component.css']
})
export class FormAgendaComponent implements OnInit, OnChanges {
  @Input() data!: DateForm
  @Output() isALivePopUpAgenda = new EventEmitter()
  invalid: boolean = false
  constructor(private serviceDataBase: DataBaseService) { }

  ngOnInit(): void { 
    
  }

  ngOnChanges(): void {
    if(!this.data.key){
      this.data.dateStart = `${this.data.year}-0${this.data.monthNumber}-${this.data.day}`
    }
  }
    
  onEmiterClosePopUp(){
    this.isALivePopUpAgenda.emit()
  }

  insertRecordDB(){
    console.log(this.data)
    console.log(Object.values(this.data).length)
    if(Object.values(this.data).length >= 11){
      this.invalid = false        
      if(this.data.key){
            this.serviceDataBase.update(`${this.data.dateStart}`, this.data.key, {
              title: this.data.title,
              description: this.data.description,
              category:  this.data.category,
              color: this.data.color,
              dateStart: this.data.dateStart,
              hourStart:  this.data.hourStart,
              hourFinish:  this.data.hourFinish})
            this.onEmiterClosePopUp()
        }else{
            this.serviceDataBase.insert(`${this.data.dateStart}`,{
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
    

    console.log()
    
  }
}
