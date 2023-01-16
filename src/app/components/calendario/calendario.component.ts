import { Component, EventEmitter, OnInit, Output, OnChanges, AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit, OnChanges {
  monthsBR: string[] = ['Janeiro', 'fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'] 
  listDays: number[] = []
  listMonths : number[] = []
  firstDayIndex: number = 0
  getlastDayThisMonth: number = 0
  nextDays: number = 0
  dateFull : Date = new Date()
  currentDay: number = this.dateFull.getDate()
  currentMonth = this.dateFull.getMonth()
  month = this.currentMonth
  year = this.dateFull.getFullYear()
  currentYear: number = this.year
  monthElement: string = ''
  isAliveLastRow = false
  @Output() sharedDate = new EventEmitter()

  constructor() {
    
  }
  
  ngOnInit(): void {
    this.getDaysCalendar(this.currentMonth,this.year)
    this.sharedDate.emit({
      day: this.dateFull.getDate(),
      month: this.monthsBR[this.currentMonth],
      monthNumber: this.currentMonth +1,
      year: this.year
    })
  }

  ngOnChanges(): void {
    this.sharedDate.emit({
      day: this.dateFull.getDate(),
      month: this.monthsBR[this.currentMonth],
      monthNumber: this.currentMonth +1,
      year: this.year
    })
  }

  onSharedDate(day: number, month: number, year: number){
    this.sharedDate.emit({
        day: day,
        month: this.monthsBR[month],
        monthNumber: month +1,
        year: this.currentYear
    })
  }

  getDaysCalendar(mes: number, ano: number){
    this.monthElement = this.monthsBR[mes]
    this.currentYear = ano
    
    this.firstDayIndex = new Date(ano, mes, 1).getDay()
    const lastDayIndex = new Date(ano, mes + 1, 1).getDay()
    this.nextDays = 7 - lastDayIndex 
    this.getlastDayThisMonth = new Date(ano , mes + 1, 0).getDate()
    

    this.listDays = []
    this.listMonths = []

    for(var i = 1 - this.firstDayIndex, index = 0; i <= this.getlastDayThisMonth + this.nextDays; i++ ,index++){
      let date = new Date(ano, mes, i)
      this.listDays.push(date.getDate())
      this.listMonths.push(mes)
    } 
  }

  nextMonth(){
    this.month++
    if(this.month > 11){
      this.month = 0
      this.currentYear++
    }
    this.getDaysCalendar(this.month, this.currentYear)
  }

  previousMonth(){
    this.month--
    if(this.month < 0){
      this.month = 11
      this.currentYear--
    }
    this.getDaysCalendar(this.month, this.currentYear)
    
  }

  
}

