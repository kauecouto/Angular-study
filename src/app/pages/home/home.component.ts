import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { dataProfile } from 'src/app/models/dataProfile';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  User!: dataProfile | any
  isALiveMenu: boolean = true
  page!:string

  constructor(private activeRoute : ActivatedRoute,
   private router: Router,
   private serviceDataBase: DataBaseService) { }
 

  ngOnInit(): void {
    if(localStorage.getItem('isLoggedIn')){
      this.router.navigate(['estudar'])
      this.getPageActive()
    }else{
      this.router.navigate(['/login'])
    }       
    this.getUser()
    if(window.innerWidth <= 830){
      this.isALiveMenu = false
    }
  }

  getPageActive(){
    setTimeout( () => {
      this.activeRoute.snapshot.children.map(element => this.page = element.url.join(''))
      this.page = `${this.page.slice(0,1).toUpperCase()}${this.page.slice(1)}`
    },10)
  }
  
  controlMenu(){
    if(this.isALiveMenu == true)
    this.isALiveMenu = false
    else
    this.isALiveMenu = true
  }

  getUser(){
    this.serviceDataBase.getAll(`usuários/${localStorage.getItem('key')}`).subscribe( {
      next: result => {
      this.User = result[0]
      if(this.User.theme == 'escuro'){
        document.body.classList.add('dark-theme')
      }else{
        document.body.classList.remove('dark-theme')
      }
    },
      error: err => console.error(err)
    }
    ) 
  }
}
