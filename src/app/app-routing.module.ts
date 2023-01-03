import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEstudarComponent } from './pages/home-estudar/home-estudar.component';
import { HomeAgendaComponent } from './pages/home-agenda/home-agenda.component';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path:'', redirectTo: 'estudar', pathMatch: 'full'
  },
  {
    path:'estudar', component: HomeEstudarComponent
  },
  {
    path:'agenda', component: HomeAgendaComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
