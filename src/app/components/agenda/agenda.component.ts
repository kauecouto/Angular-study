import { Component, Input, OnInit } from '@angular/core';
import { Date } from './date';

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
    year: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  

}
