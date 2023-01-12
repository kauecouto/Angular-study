import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isALiveMenu: boolean = true
  

  constructor(private serviceAuth : AuthenticationService,
   private router: Router) { }

  ngOnInit(): void {
    /* if(localStorage.getItem('userName') == undefined){
      this.router.navigate(['/login'])
    }else{
      this.router.navigate(['estudar'])
    } */

    if(window.innerWidth <= 830){
      this.isALiveMenu = false
    }
  }

  controlMenu(){
    if(this.isALiveMenu == true)
    this.isALiveMenu = false
    else
    this.isALiveMenu = true
  }
}
