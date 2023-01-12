import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Date } from '../../models/date';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  hours : string[] = ['1h','2h','3h','4h',' 5h','6h','7h','8h','9h','10h','11h','12h','13h','14h','15h','16h','17h','18h','19h','20h','21h', '22h', '23h']
  @Input() date: Date = {
    day: 0,
    month: '',
    monthNumber: 0,
    year: 0
  }
  @Output() sharedRecord = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onOpenRecord(hour: string){
    let hourNumber
    if(Number(hour.slice(0, hour.length -1)) < 10){
      hourNumber = '0' + hour.slice(0, hour.length -1) + ':' + '00'
    }else{
      hourNumber = hour.slice(0, hour.length -1) + ':' + '00'
    }
    
    const data = this.date
    data.hour = hourNumber
    this.sharedRecord.emit(data)
  }
}
