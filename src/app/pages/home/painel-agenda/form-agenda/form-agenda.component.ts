import { Component, EventEmitter, Input, IterableChanges, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DataForm } from 'src/app/models/dataForm';
import { dataProfile } from 'src/app/models/dataProfile';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DataBaseService } from 'src/app/services/data-base.service';
import { __values } from 'tslib';


@Component({
  selector: 'app-form-agenda',
  templateUrl: './form-agenda.component.html',
  styleUrls: ['./form-agenda.component.css']
})
export class FormAgendaComponent implements OnInit, OnChanges {
  user!: dataProfile | any
  categorysCurrent: string[] = []
  @Input() data!: DataForm
  @Output() isALivePopUpAgenda = new EventEmitter()
  invalid: boolean = false
  constructor(private serviceDataBase: DataBaseService, private serviceAuth: AuthenticationService) { }

  ngOnInit(): void { 
    this.getUser()
  }

  ngOnChanges(): void {
    if(!this.data.key){
      this.data.dateStart = `${this.data.year}-${this.data.monthNumber}-${this.data.day}`
    }
  }
  
  getUser(){
    this.serviceDataBase.getAll(`usuários/${localStorage.getItem('key')}`).subscribe( {
      next: result => {
      this.user = result[0]
      if(this.categorysCurrent.length == 0){
        for( let i = 0; i <= Object.keys(this.user.categorysAgenda).length - 1; i++){
          this.categorysCurrent.push(this.user.categorysAgenda[i])
        } 
      }
    },
      error: err => console.error(err)
    }
    ) 
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
