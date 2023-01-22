import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { Usuario } from '../models/usuarios';
import { DataBaseService } from './data-base.service';
import { environment } from '../../environments/environment'
import { VirtualTimeScheduler } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: Usuario = {
    key : '',
    name : '',
    email: '',
    password: ''
  }
  isLoggedIn: string | null = JSON.stringify(localStorage.getItem('isLoggedIn')?.slice(1, -1))

  constructor(private firebaseAuth: AngularFireAuth,
    private router: Router,
    private serviceDataBase: DataBaseService
  ) { }

  async signIn(email: string, password: string){
    let success: boolean = false
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('user', JSON.stringify(res.user))
      this.router.navigate(['/inicio/estudar'])
      this.user.key = email.replace(/,/g, "").replace(/\./g, "").replace(/\@/g, "")
      localStorage.setItem('key' ,this.user.key)
      success = true

    })
    .catch(err => {
      console.error(err)
      success = false
    }) 
    return success
   
  }

  async signUp(email: string, password: string, name: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      localStorage.setItem('isLoggedIn', 'true')
      this.user = {
        key: '',
        name: name,
        email: email,
        password: password
      }
      localStorage.setItem('user', JSON.stringify(res.user))
      this.router.navigate(['/inicio/estudar'])
      this.user.key = email.replace(/,/g, "").replace(/\./g, "").replace(/\@/g, "")
      localStorage.setItem('key' ,this.user.key)
      localStorage.setItem('userName', name)
      this.serviceDataBase.insert(`usuários/${this.user.key}`,{
        name: name,
        email: email,
        fotoProfile: 'https://firebasestorage.googleapis.com/v0/b/projeto-study-2ed9d.appspot.com/o/imagens%2Fimagem-perfil.png?alt=media&token=a2dc237f-f568-448e-8933-1e9591795851',
        theme: 'claro',
        timePomo: 25,
        pausaPomo: 5,
        categorysAgenda: ['Reunião','Lazer','Trabalho','Estudo','Tarefa']
      })
    })
  }

  Loggout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('isLoggedIn')
    this.router.navigate(['/login'])
  }

  recoverPassword(email: string){
    this.firebaseAuth.sendPasswordResetEmail(email)
    .then(res => alert(`Email de recuperação de senha enviado para ${email}`))
    .catch( err => alert('Email não possui conta cadastrada!'))
  }
}
