import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-aside.component.html',
  styleUrls: ['./menu-aside.component.css','./menu-aside.responsive.component.css']
})
export class MenuAsideComponent implements OnInit {
  nameUser: any = ''
  @Output() menu = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    this.nameUser = localStorage.getItem('userName')
  }

  onMenu(){
    this.menu.emit()
  }

}
