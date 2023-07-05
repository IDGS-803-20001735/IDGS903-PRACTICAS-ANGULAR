import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { MatCardLgImage } from '@angular/material/card';

@Component({
  selector: 'app-pizza-compra',
  templateUrl: './pizza-compra.component.html',
  styleUrls: ['./pizza-compra.component.css'],
})
export class PizzaCompraComponent {
  pizzaForm!: FormGroup;
  detalles: any = [];
  subtotal!: number;
  total!: number;

  pizza = [
    { tamanio: 'Chica', precio: 40 },
    { tamanio: 'Mediana', precio: 80 },
    { tamanio: 'Grande', precio: 120 },
  ];

  constructor(private readonly fb: FormBuilder) {
    this.pizzaForm = this.initForm();
  }

  onSubmit(): void {
    this.guardarDetalle();
  }

  guardarDetalle(): void {
    let nombre = this.pizzaForm.get('nombre')?.value;
    let direccion = this.pizzaForm.get('direccion')?.value;
    let telefono = this.pizzaForm.get('telefono')?.value;

    let tamanioPizza = this.pizzaForm.get('tamanioPizza')?.value;
    let ingredienteUno =
      this.pizzaForm.get('ingredienteUno')?.value === true ? 10 : 0;
    let ingredienteDos =
      this.pizzaForm.get('ingredienteDos')?.value === true ? 10 : 0;
    let ingredienteTres =
      this.pizzaForm.get('ingredienteTres')?.value === true ? 10 : 0;
    let numPizzas = this.pizzaForm.get('numeroPizzas')?.value;

    tamanioPizza = parseInt(tamanioPizza);
    let totalIngredientes = ingredienteUno + ingredienteDos + ingredienteTres;
    this.subtotal = tamanioPizza * numPizzas + totalIngredientes * numPizzas;

    const objeto = this.pizzaForm.value;
    objeto.subtotal = this.subtotal;
    this.detalles.push(objeto);

    this.disableInputs();
  }

  eliminarDetalle(index: number): void {
    this.detalles.splice(index, 1);
  }

  calcularTotal(): void {
    Swal.fire({
      title: '¿Estas seguro de terminar el pedido?',
      text: 'No podras agregar más pedidos',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, termina el pedido',
    }).then((result) => {
      if (result.isConfirmed) {
        this.total = this.detalles.reduce(
          (a: number, b: any) => a + b.subtotal,
          0
        );
        this.enableInputs();
        Swal.fire(
          'Pedido Terminado!',
          'Haz terminado todos los pedidos',
          'success'
        );
      }
    });
  }

  disableInputs(): void {
    this.pizzaForm.get('nombre')?.disable();
    this.pizzaForm.get('direccion')?.disable();
    this.pizzaForm.get('telefono')?.disable();
  }

  enableInputs(): void {
    this.pizzaForm.get('nombre')?.enable();
    this.pizzaForm.get('direccion')?.enable();
    this.pizzaForm.get('telefono')?.enable();

    this.limpiarFormulario();
  }

  limpiarFormulario(): void {
    this.pizzaForm.reset();
    this.detalles.splice(0, this.detalles.length);
  }

  initForm(): FormGroup {
    return this.fb.group({
      nombre: [''],
      direccion: [''],
      telefono: [''],
      tamanioPizza: [''],
      ingredienteUno: [''],
      ingredienteDos: [''],
      ingredienteTres: [''],
      numeroPizzas: [''],
    });
  }
}
