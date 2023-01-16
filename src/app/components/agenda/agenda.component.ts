import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { DataEditForm } from 'src/app/models/dateEditForm';
import { DataBaseService } from 'src/app/services/data-base.service';
import { Date } from '../../models/date';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit, OnChanges{
  hours : string[] = ['1h','2h','3h','4h','5h','6h','7h','8h','9h','10h','11h','12h','13h','14h','15h','16h','17h','18h','19h','20h','21h','22h','23h']
  records!: any[]
  @Input() date: Date = {
    day:  new Date().getDate(),
    month: '',
    monthNumber: new Date().getMonth() +1,
    year: new Date().getFullYear()
  }
  url: string = `${this.date.year}-0${this.date.monthNumber}-${this.date.day}`
  @Output() sharedRecord = new EventEmitter()
  @Output() sharedRecordEdit = new EventEmitter()
  trava: number = 0

  constructor(private serviceDataBase: DataBaseService) { }
  ngOnChanges(): void {
    this.url = `${this.date.year}-0${this.date.monthNumber}-${this.date.day}`
    this.retrieveRecordAll()
  }

  ngOnInit(){
    this.retrieveRecordAll()
  }


  retrieveRecordAll(){
    this.serviceDataBase.getAll(this.url).subscribe(data => {
      this.records = data
    })
  }

  deleteRecord(name: string ,key: string){
    const excluir = confirm('Deseja realmente deletar esse item?')
    if(excluir){
      this.serviceDataBase.delete( name ,key)
    }
  }

  openPopUp(data?: DataEditForm){
    this.sharedRecordEdit.emit({...data , ...this.date})
  }
}
