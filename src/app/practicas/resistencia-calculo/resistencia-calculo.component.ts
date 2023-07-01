import { Component } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-resistencia-calculo',
  templateUrl: './resistencia-calculo.component.html',
  styleUrls: ['./resistencia-calculo.component.css'],
})
export class ResistenciaCalculoComponent {
  colorBandas = [
    { color: '#17202A', valor: 0, nombre: 'NEGRO' },
    { color: '#935116', valor: 1, nombre: 'MARRÓN' },
    { color: '#EF5350', valor: 2, nombre: 'ROJO' },
    { color: '#FFA726', valor: 3, nombre: 'NARANJA' },
    { color: '#F7DC6F', valor: 4, nombre: 'AMARILLO' },
    { color: '#58D68D', valor: 5, nombre: 'VERDE' },
    { color: '#0066CC', valor: 6, nombre: 'AZUL' },
    { color: '#D7BDE2', valor: 7, nombre: 'VIOLETA' },
    { color: '#7B7D7D', valor: 8, nombre: 'GRIS' },
    { color: '#FFFFFF', valor: 9, nombre: 'BLANCO' },
    { color: '#D4AF37', valor: 0.05, nombre: 'DORADO' },
    { color: '#C0C0C0', valor: 0.1, nombre: 'PLATEADO' },
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

    let valor1 = this.banda1 + this.banda2;
    let valor2 = this.banda3;

    this.valorNominal = valor1 * Math.pow(10, valor2);

    if (this.tolerancia == 0.05) {
      this.maximo = this.valorNominal + this.valorNominal * 0.05;
      this.minimo = this.valorNominal - this.valorNominal * 0.05;
    } else if (this.tolerancia == 0.1) {
      this.maximo = this.valorNominal + this.valorNominal * 0.1;
      this.minimo = this.valorNominal - this.valorNominal * 0.1;
    }
  }
}
