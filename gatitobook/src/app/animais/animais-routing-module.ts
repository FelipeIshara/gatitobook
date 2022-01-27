import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: ListaAnimaisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AnimaisRoutingModule {}
