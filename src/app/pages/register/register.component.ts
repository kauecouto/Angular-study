import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', './register.responsive.component.css']
})
export class RegisterComponent implements OnInit {
  name: string = ''
  email: string = ''
  password: string = ''

  constructor(public serviceAuthetication: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSignUp(email: string, password: string, name: string){
    
    this.serviceAuthetication.signUp(email, password, name)
    
  }
}
