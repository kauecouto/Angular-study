import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';

import { ListSonsComponent } from './painel-estudar/list-sons/list-sons.component';
import { PainelEstudarComponent } from './painel-estudar/painel-estudar.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { PainelAgendaComponent } from './painel-agenda/painel-agenda.component';
import { FormAgendaComponent } from './painel-agenda/form-agenda/form-agenda.component';
import { SharedCompModule } from 'src/app/shared/components/shared-comp.module';


@NgModule({
  declarations: [
    HomeComponent,
    PainelEstudarComponent,
    PainelAgendaComponent,
    ListSonsComponent,
    FormAgendaComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PipesModule,
    RouterModule,
    FormsModule,
    SharedCompModule
  ],
  exports: [HomeComponent,HomeRoutingModule]
})
export class HomeModule { }
