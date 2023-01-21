import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda/agenda.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { InputComponent } from './input/input.component';
import { MenuAsideComponent } from './menu-aside/menu-aside.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NoDataComponent } from './no-data/no-data.component';
import { MenuNavComponent } from './nav-bar/menu-nav/menu-nav.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormProfileEditComponent } from './form-profile-edit/form-profile-edit.component';




@NgModule({
  declarations: [
    AgendaComponent,
    CalendarioComponent,
    InputComponent,
    MenuAsideComponent,
    NavBarComponent,
    MenuNavComponent,
    NoDataComponent,
    FormProfileEditComponent,
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ], 
  exports: [
    AgendaComponent,
    CalendarioComponent,
    InputComponent,
    MenuAsideComponent,
    NavBarComponent,
    MenuNavComponent,
    NoDataComponent,
    FormProfileEditComponent,
  ]
})
export class SharedCompModule { }
