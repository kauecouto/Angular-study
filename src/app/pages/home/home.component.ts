import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isALiveMenu: boolean = true
  page!:string

  constructor(private activeRoute : ActivatedRoute,
   private router: Router) { }
 

  ngOnInit(): void {
    if(localStorage.getItem('isLoggedIn')){
      this.router.navigate(['estudar'])
      this.activeRoute.snapshot.children.map(element => this.page = element.url.join(''))
    }else{
      this.router.navigate(['/login'])
    }       

    if(window.innerWidth <= 830){
      this.isALiveMenu = false
    }
  }

  getPageActive(){
    setTimeout( () => {
      this.activeRoute.snapshot.children.map(element => this.page = element.url.join(''))
    },10)
  }
  
  controlMenu(){
    if(this.isALiveMenu == true)
    this.isALiveMenu = false
    else
    this.isALiveMenu = true
  }
}
