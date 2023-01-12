import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './login.responsive.component.css']
})
export class LoginComponent implements OnInit {
  email: string = ''
  password: string = ''
  success :boolean = true

  constructor( private serviceAuthetication: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSignIn(email: string, password: string){
    this.serviceAuthetication.signIn(email, password)
    .then(res => {
      this.success = res
    })
  }

  recoverPassword(email: string){
    this.serviceAuthetication.recoverPassword(email)
  }
}
