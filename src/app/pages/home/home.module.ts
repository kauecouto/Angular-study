import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { ListSonsComponent } from './painel-estudar/list-sons/list-sons.component';
import { PainelEstudarComponent } from './painel-estudar/painel-estudar.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { PainelAgendaComponent } from './painel-agenda/painel-agenda.component';
import { FormAgendaComponent } from './painel-agenda/form-agenda/form-agenda.component';
import { SharedCompModule } from 'src/app/shared/components/shared-comp.module';
import { PainelNotasComponent } from './painel-notas/painel-notas.component';


@NgModule({
  declarations: [
    HomeComponent,
    PainelEstudarComponent,
    PainelAgendaComponent,
    ListSonsComponent,
    FormAgendaComponent,
    PainelNotasComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PipesModule,
    RouterModule,
    FormsModule,
    SharedCompModule,
    DragDropModule
  ],
  exports: [HomeComponent,HomeRoutingModule]
})
export class HomeModule { }
