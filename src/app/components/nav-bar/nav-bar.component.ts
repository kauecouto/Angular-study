import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  openPopUp: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  controlPopUp(){
    if(this.openPopUp == true)
    this.openPopUp = false
    else
    this.openPopUp = true
  }
}
