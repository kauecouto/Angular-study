import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiraAspasPipe } from './tira-aspas.pipe';

@NgModule({
  declarations: [
    TiraAspasPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TiraAspasPipe
  ]
})
export class PipesModule { }
