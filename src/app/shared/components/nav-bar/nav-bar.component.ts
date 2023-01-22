import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user!: any
  openPopUp: boolean = false

  constructor(private serviceDataBase: DataBaseService) { }

  ngOnInit(): void {
    this.getUser()
  }

  controlPopUp(){
    if(this.openPopUp == true)
    this.openPopUp = false
    else
    this.openPopUp = true
  }

  getUser(){
    this.serviceDataBase.getAll(`usuários/${localStorage.getItem('key')}`).subscribe( {
      next: result => {
      this.user = result[0]
      localStorage.setItem('userName', JSON.stringify(this.user.name))},
      error: err => console.error(err)
    }
    ) 
  }
}
