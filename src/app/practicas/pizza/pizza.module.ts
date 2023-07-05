import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PizzaCompraComponent } from '../pizza-compra/pizza-compra.component';

@NgModule({
  declarations: [PizzaCompraComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [PizzaCompraComponent],
})
export class PizzaModule {}
