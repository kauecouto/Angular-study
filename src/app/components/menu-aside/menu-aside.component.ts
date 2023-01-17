import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { environment } from '../../../environments/environment'

import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-aside.component.html',
  styleUrls: ['./menu-aside.component.css','./menu-aside.responsive.component.css']
})
export class MenuAsideComponent implements OnInit {
  nameUser: any = ''
  obj: any = {
    key: '',
    userName: ''
  }
  @Output() menu = new EventEmitter()

  constructor(private serviceDataBase: DataBaseService,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.getUserName()
  }

  onMenu(){
    this.menu.emit()
  }

  getUserName(){
    this.serviceDataBase.getAll('userName').subscribe( {
      next: result => {
      this.obj = result[0]
      environment.userKey =  this.obj.key
      localStorage.setItem('userName', JSON.stringify(this.obj.name))},
      error: err => console.error(err)
    }
    ) 
  }


}
