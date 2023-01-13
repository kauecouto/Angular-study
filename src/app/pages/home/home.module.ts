import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';

import { ListSonsComponent } from './painel-estudar/list-sons/list-sons.component';
import { PainelEstudarComponent } from './painel-estudar/painel-estudar.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenuAsideComponent } from '../../components/menu-aside/menu-aside.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { MenuNavComponent } from './nav-bar/menu-nav/menu-nav.component';

import { PainelAgendaComponent } from './painel-agenda/painel-agenda.component';
import { AgendaComponent } from 'src/app/components/agenda/agenda.component';
import { CalendarioComponent } from 'src/app/components/calendario/calendario.component';
import { FormAgendaComponent } from './painel-agenda/form-agenda/form-agenda.component';


@NgModule({
  declarations: [
    HomeComponent,
    MenuNavComponent,
    NavBarComponent,
    PainelEstudarComponent,
    PainelAgendaComponent,
    MenuAsideComponent,
    ListSonsComponent,
    AgendaComponent,
    CalendarioComponent,
    FormAgendaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PipesModule,
    RouterModule,
    FormsModule,
    
  ],
  exports: [HomeComponent,HomeRoutingModule]
})
export class HomeModule { }
