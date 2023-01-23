import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { DataForm } from 'src/app/models/dataForm';
import { DataBaseService } from 'src/app/services/data-base.service';
import { Date } from '../../../models/date';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit, OnChanges{
  hours : string[] = ['1h','2h','3h','4h','5h','6h','7h','8h','9h','10h','11h','12h','13h','14h','15h','16h','17h','18h','19h','20h','21h','22h','23h']
  records!: any[]
  IsALiveRecord: boolean = false
  @Input() date: Date = {
    day:  0,
    month: 0,
    monthNumber: 0,
    year: 0
  }
  dateUrl!: Date
  url: string = `${this.date.year}-0${this.date.monthNumber}-${this.date.day}`
  @Output() sharedRecordEdit = new EventEmitter()
  trava: number = 0

  constructor(private serviceDataBase: DataBaseService) { }
  ngOnChanges(): void {
    setTimeout(()=>{
      this.checkDate()
      this.url = `${this.dateUrl.year}-${this.dateUrl.monthNumber}-${this.dateUrl.day}`
      this.retrieveRecordAll()
    },10)
  }

  ngOnInit(){
    this.retrieveRecordAll()

  }


  retrieveRecordAll(){
    this.serviceDataBase.getAll(`usuários/${localStorage.getItem('key')}/Registros_Agenda/${this.url}`).subscribe(data => {
      this.records = data
      if(this.records.length == 0){
        this.IsALiveRecord = false
      }else{
        this.IsALiveRecord = true
      }
      
    })
  }

  deleteRecord(name: string ,key: string){
    const excluir = confirm('Deseja realmente deletar esse item?')
    if(excluir){
      this.serviceDataBase.delete(`usuários/${localStorage.getItem('key')}/Registros_Agenda/${name}`,key)
    }
  }

  checkDate(){
    
      if(this.date.day < 10 && this.date.monthNumber < 10){
        this.dateUrl = {
          day: `0${this.date.day}`,
          month: `${this.date.month}`,
          monthNumber: `0${this.date.monthNumber}`,
          year: this.date.year,
          hour: this.date.hour
        }
      }else if(this.date.day < 10){
          this.dateUrl = {
            day: `0${this.date.day}`,
            month: `${this.date.month}`,
            monthNumber: `${this.date.monthNumber}`,
            year: this.date.year,
            hour: this.date.hour
        }
      }else if(this.date.monthNumber < 10){
        this.dateUrl = {
          day: `${this.date.day}`,
          month: `${this.date.month}`,
          monthNumber: `0${this.date.monthNumber}`,
          year: this.date.year,
          hour: this.date.hour
        }
      }else{
        this.dateUrl = this.date
      }
  }

  openPopUp(data?: DataForm){
    this.checkDate()
    this.sharedRecordEdit.emit({...data , ...this.dateUrl})
  }
}
