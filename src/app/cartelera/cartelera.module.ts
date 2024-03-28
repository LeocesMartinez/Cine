import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarteleraRoutingModule } from './cartelera-routing.module';
import { VerTitulosComponent } from './ver-titulos/ver-titulos.component';
import { EstrenosComponent } from './estrenos/estrenos.component';


@NgModule({
  declarations: [
    VerTitulosComponent, EstrenosComponent
  ],
  
  imports: [
    CommonModule,
    CarteleraRoutingModule
  ],
  exports:[VerTitulosComponent,EstrenosComponent]
})
export class CarteleraModule { }
