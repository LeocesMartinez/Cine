import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'cartelera', loadChildren:() => import('./cartelera/cartelera.module').then(mod => mod.CarteleraModule)}

];
