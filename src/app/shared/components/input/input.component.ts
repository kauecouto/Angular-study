import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() title: string = 'Email'
  @Input() type: string = 'text'
  @Input() placeholder: string = 'Email'
  @Input() image: string = '../../../assets/image/email.png'
  @Output() text: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
