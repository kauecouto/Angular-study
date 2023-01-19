import { Component, EventEmitter, OnInit, Output, OnChanges, DoCheck, AfterContentInit, AfterContentChecked } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { environment } from '../../../environments/environment'

import { DataBaseService } from 'src/app/services/data-base.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-aside.component.html',
  styleUrls: ['./menu-aside.component.css','./menu-aside.responsive.component.css']
})
export class MenuAsideComponent implements OnInit, AfterContentChecked {
  nameUser: any = ''
  obj: any = {
    key: '',
    userName: ''
  }
  routeActive!: string
  @Output() menu = new EventEmitter()

  constructor(private serviceDataBase: DataBaseService,
    private authService: AuthenticationService,
    private activeRoute : ActivatedRoute) { }

  ngAfterContentChecked(): void {
    this.activeRoute.snapshot.children.map(element => this.routeActive = element.url.join('')) 
    console.log(this.routeActive)
  }

  ngOnInit(): void {
    this.getUserName()
    this.activeRoute.snapshot.children.map(element => this.routeActive = element.url.join('')) 
  }

  

  onMenu(){
    this.menu.emit()
  }

  getUserName(){
    this.serviceDataBase.getAll(`usuários/${localStorage.getItem('key')}`).subscribe( {
      next: result => {
      this.obj = result[0]
      localStorage.setItem('userName', JSON.stringify(this.obj.name))},
      error: err => console.error(err)
    }
    ) 
  }


}
