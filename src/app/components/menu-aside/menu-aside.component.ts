import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-aside.component.html',
  styleUrls: ['./menu-aside.component.css']
})
export class MenuAsideComponent implements OnInit {
  nameUser: any = ''
  constructor() { }

  ngOnInit(): void {
    this.nameUser = localStorage.getItem('userName')
  }

}
