import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CinepolisModule } from './practicas/cinepolis/cinepolis.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistanciaModule } from './practicas/distancia/distancia.module';
import { RecistenciaModule } from './practicas/resistencia/resistencia.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CinepolisModule,
    DistanciaModule,
    RecistenciaModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
