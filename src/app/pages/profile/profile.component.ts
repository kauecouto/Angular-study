import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isALiveMenu: boolean = true
  page!:string
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPageActive()
  }

  controlMenu(){
    if(this.isALiveMenu == true)
    this.isALiveMenu = false
    else
    this.isALiveMenu = true
  }

  getPageActive(){
    setTimeout( () => {
      this.page = this.activeRoute.snapshot.url.join('')
    },10)
  }
}
