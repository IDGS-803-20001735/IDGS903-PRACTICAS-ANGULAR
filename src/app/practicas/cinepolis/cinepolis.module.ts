import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CinepolisCompraComponent } from '../cinepolis-compra/cinepolis-compra.component';

@NgModule({
  declarations: [CinepolisCompraComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
  ],
  exports: [CinepolisCompraComponent],
})
export class CinepolisModule {}
