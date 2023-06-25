import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis-compra',
  templateUrl: './cinepolis-compra.component.html',
  styleUrls: ['./cinepolis-compra.component.css'],
})
export class CinepolisCompraComponent {
  nombre: string = '';
  numCompradores!: number;
  totalBoletos!: number;
  numBoletos!: number;
  tarjeta: string = '';
  totalPago!: number;
  mensaje: string = '';
  total!: number;

  procesarCompra() {
    this.totalBoletos = this.numCompradores * 7;
    this.total = this.numBoletos * 12;

    if (this.totalBoletos < this.numBoletos) {
      this.mensaje = `${this.nombre} solo puedes comprar 7 boletos por persona`;
    } else {
      if (this.numBoletos > 5) {
        if (this.tarjeta == 'SI') {
          this.totalPago = this.total - this.total * 0.15;
          this.totalPago = this.totalPago - this.totalPago * 0.1;
          this.mensaje = `${this.nombre} el total a pagar es: $${this.totalPago}`;
        } else {
          this.totalPago = this.total - this.total * 0.15;
          this.mensaje = `${this.nombre} el total a pagar es: $${this.totalPago}`;
        }
      } else if (this.numBoletos >= 3 && this.numBoletos <= 5) {
        if (this.tarjeta == 'SI') {
          this.totalPago = this.total - this.total * 0.1;
          this.totalPago = this.totalPago - this.totalPago * 0.1;
          this.mensaje = `${this.nombre} el total a pagar es: $${this.totalPago}`;
        } else {
          this.totalPago = this.total - this.total * 0.1;
          this.mensaje = `${this.nombre} el total a pagar es: $${this.totalPago}`;
        }
      } else if (this.numBoletos <= 2) {
        if (this.tarjeta == 'SI') {
          this.totalPago = this.total;
          this.totalPago = this.totalPago - this.totalPago * 0.1;
          this.mensaje = `${this.nombre} el total a pagar es: $${this.totalPago}`;
        } else {
          this.totalPago = this.total;
          this.mensaje = `${this.nombre} el total a pagar es: $${this.totalPago}`;
        }
      }
    }
  }
}
