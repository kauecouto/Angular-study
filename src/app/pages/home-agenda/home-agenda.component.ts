import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReCaptchaEnterpriseProvider } from 'firebase/app-check';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home-agenda',
  templateUrl: './home-agenda.component.html',
  styleUrls: ['./home-agenda.component.css']
})
export class HomeAgendaComponent implements OnInit {
  isALiveMenu: boolean = true

  constructor(private serviceAuth : AuthenticationService,
   private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('userName') == undefined){
      this.router.navigate(['/login'])
    }
  }

  controlMenu(){
    if(this.isALiveMenu == true)
    this.isALiveMenu = false
    else
    this.isALiveMenu = true
  }

}
