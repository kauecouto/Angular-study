import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  User: any = {
    name: ''
  }
  isALiveForm: boolean = false
  page!:string
  nameForm!: string 
  constructor(private activeRoute: ActivatedRoute,
    private serviceDataBase: DataBaseService,
    private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.getPageActive()
    this.getUser()
  
  }

  controlMenu(nameEdit?:string){
    if(nameEdit)
    this.nameForm = nameEdit

    if(this.isALiveForm == false){
      this.isALiveForm = true
    }else{
      this.isALiveForm = false
    }
    
  }

  getPageActive(){
    setTimeout( () => {
      this.page = this.activeRoute.snapshot.url.join('')
      this.page = `${this.page.slice(0,1).toUpperCase()}${this.page.slice(1)}`
    },10)
  }

  getUser(){
    this.serviceDataBase.getAll(`usuários/${localStorage.getItem('key')}`).subscribe( {
      next: result => {
      this.User = result[0]
      localStorage.setItem('userName', JSON.stringify(this.User.name))
      
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

  recoverPassword(){
    const comfirma = confirm('Deseja realmente recuperar sua senha?')
    if(comfirma){
      this.auth.recoverPassword(this.User.email)
    }
  }
}
