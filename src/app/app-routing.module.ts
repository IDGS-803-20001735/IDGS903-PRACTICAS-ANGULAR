import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinepolisCompraComponent } from './practicas/cinepolis-compra/cinepolis-compra.component';
import { DistanciaPuntosComponent } from './practicas/distancia-puntos/distancia-puntos.component';
import { ResistenciaCalculoComponent } from './practicas/resistencia-calculo/resistencia-calculo.component';
import { PizzaCompraComponent } from './practicas/pizza-compra/pizza-compra.component';

const routes: Routes = [
  { path: 'Cinepolis', component: CinepolisCompraComponent },
  { path: 'Distancia', component: DistanciaPuntosComponent },
  { path: 'Resistencia', component: ResistenciaCalculoComponent },
  { path: 'Pizza', component: PizzaCompraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
