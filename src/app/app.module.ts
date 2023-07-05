import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CinepolisModule } from './practicas/cinepolis/cinepolis.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistanciaModule } from './practicas/distancia/distancia.module';
import { RecistenciaModule } from './practicas/resistencia/resistencia.module';
import { MenuComponent } from './practicas/menu/menu.component';
import { PizzaModule } from './practicas/pizza/pizza.module';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CinepolisModule,
    DistanciaModule,
    RecistenciaModule,
    PizzaModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
