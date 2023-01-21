import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {
  @Input() openPopUp: boolean = false

  constructor(public serviceAuthetication: AuthenticationService) { }

  ngOnInit(): void {
  }

  loggout(){
    this.serviceAuthetication.Loggout()
  }
}
