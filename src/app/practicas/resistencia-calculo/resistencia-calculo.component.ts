import { Component } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-resistencia-calculo',
  templateUrl: './resistencia-calculo.component.html',
  styleUrls: ['./resistencia-calculo.component.css'],
})
export class ResistenciaCalculoComponent {
  colorBandas = [
    { color: 'black', valor: 0 },
    { color: 'brown', valor: 1 },
    { color: 'red', valor: 2 },
    { color: 'orange', valor: 3 },
    { color: 'yellow', valor: 4 },
    { color: 'green', valor: 5 },
    { color: 'blue', valor: 6 },
    { color: 'violet', valor: 7 },
    { color: 'gray', valor: 8 },
    { color: 'white', valor: 9 },
    { color: 'darkgoldenrod', valor: 0.05 },
    { color: 'silver', valor: 0.1 },
  ];

  banda1!: number;
  banda2!: number;
  banda3!: number;
  tolerancia!: number;

  color1!: any;
  color2!: any;
  color3!: any;
  colorTolerancia!: any;

  valorNominal!: number;
  maximo!: number;
  minimo!: number;

  calcularResistencia() {
    this.color1 = this.colorBandas.find((e) => e.valor == this.banda1)?.color;
    this.color2 = this.colorBandas.find((e) => e.valor == this.banda2)?.color;
    this.color3 = this.colorBandas.find((e) => e.valor == this.banda3)?.color;
    this.colorTolerancia = this.colorBandas.find(
      (e) => e.valor == this.tolerancia
    )?.color;

    this.valorNominal = (this.banda1 * 10 + this.banda2) * 10 ** this.banda3;

    if (this.tolerancia == 0.05) {
      this.maximo = this.valorNominal + this.valorNominal * 0.05;
      this.minimo = this.valorNominal - this.valorNominal * 0.05;
    } else if (this.tolerancia == 0.1) {
      this.maximo = this.valorNominal + this.valorNominal * 0.1;
      this.minimo = this.valorNominal - this.valorNominal * 0.1;
    }
  }
}
