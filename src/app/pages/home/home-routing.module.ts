import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PainelAgendaComponent } from './painel-agenda/painel-agenda.component';
import { PainelEstudarComponent } from './painel-estudar/painel-estudar.component';
import { PainelNotasComponent } from './painel-notas/painel-notas.component';

const routes: Routes = [
    { path: 'inicio' , component: HomeComponent, children: [
      {path: 'estudar', component: PainelEstudarComponent },
      {path: 'agenda', component: PainelAgendaComponent },
      {path: 'notas', component: PainelNotasComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
