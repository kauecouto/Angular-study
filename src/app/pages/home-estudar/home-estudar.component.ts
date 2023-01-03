import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-estudar.component.html',
  styleUrls: ['./home-estudar.component.css']
})
export class HomeEstudarComponent implements OnInit {

  constructor(private serviceAuth : AuthenticationService,
    private router: Router) { }
 
    ngOnInit(): void {
      if(localStorage.getItem('userName') == undefined){
        this.router.navigate(['/login'])
      }
    }
 

}
