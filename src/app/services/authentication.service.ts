import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { Usuario } from '../models/usuarios';
import { DataBaseService } from './data-base.service';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user!: Usuario
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
      success = true
    })
    .catch(err => {
      console.error(err)
      success = false
    })
    return success
  }

  async signUp(email: string, password: string, name: string){
    /*  */
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
      this.serviceDataBase.update('userName', environment.userKey ,{userName: name})
    })
  }

  Loggout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('isLoggedIn')
    this.router.navigate(['/login'])
  }

  recoverPassword(email: string){
    this.firebaseAuth.sendPasswordResetEmail(email)
    .then(res => alert('Email de recuperação de senha enviado!'))
    .catch( err => alert('Email não possui conta cadastrada!'))
  }
}
