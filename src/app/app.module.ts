import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat'
import {  } from '@angular/fire/'
import { environment } from '../environments/environment'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeEstudarComponent } from './pages/home-estudar/home-estudar.component';
import { LoginComponent } from './pages/login/login.component';
import { PainelEstudarComponent } from './components/painel-estudar/painel-estudar.component';
import { HomeAgendaComponent } from './pages/home-agenda/home-agenda.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MenuAsideComponent } from './components/menu-aside/menu-aside.component';
import { PainelAgendaComponent } from './components/painel-agenda/painel-agenda.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { InputComponent } from './components/input/input.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthenticationService } from './services/authentication.service';
import { TiraAspasPipe } from './shared/pipes/tira-aspas.pipe';
import { ListSonsComponent } from './components/painel-estudar/list-sons/list-sons.component';
import { MenuNavComponent } from './components/nav-bar/menu-nav/menu-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeAgendaComponent,
    HomeEstudarComponent,
    LoginComponent,
    PainelEstudarComponent,
    NavBarComponent,
    MenuAsideComponent,
    PainelAgendaComponent,
    CalendarioComponent,
    AgendaComponent,
    InputComponent,
    RegisterComponent,
    TiraAspasPipe,
    ListSonsComponent,
    MenuNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
