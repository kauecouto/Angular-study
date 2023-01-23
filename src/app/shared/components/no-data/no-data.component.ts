import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.css']
})
export class NoDataComponent implements OnInit {
  @Input() text: string = 'Seu dia está vazio'
  constructor() { }

  ngOnInit(): void {
  }

}
