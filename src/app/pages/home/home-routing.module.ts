import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PainelAgendaComponent } from './painel-agenda/painel-agenda.component';
import { PainelEstudarComponent } from './painel-estudar/painel-estudar.component';

const routes: Routes = [
    { path: 'inicio' , component: HomeComponent, children: [
      {path: 'estudar', component: PainelEstudarComponent },
      {path: 'agenda', component: PainelAgendaComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
