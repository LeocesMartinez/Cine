import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerTitulosComponent } from './ver-titulos/ver-titulos.component';
import { EstrenosComponent } from './estrenos/estrenos.component';

const routes: Routes = [
  {
    path:'', component:VerTitulosComponent
  },
    
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarteleraRoutingModule { }
