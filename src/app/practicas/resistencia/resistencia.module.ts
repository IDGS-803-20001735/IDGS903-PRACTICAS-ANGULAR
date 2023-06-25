import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ResistenciaCalculoComponent } from '../resistencia-calculo/resistencia-calculo.component';

@NgModule({
  declarations: [ResistenciaCalculoComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
  ],
  exports: [ResistenciaCalculoComponent],
})
export class RecistenciaModule {}
