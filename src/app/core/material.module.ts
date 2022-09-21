import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
/*import {
  MatDialogModule,
  MatTableModule,
  MatToolbarModule,
  MatMenuModule,
  ,
  MatProgressSpinnerModule,
} from '@angular/material';*/

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    //MatDialogModule,
    //MatTableModule,
    //MatMenuModule,
    MatIconModule,
    //MatProgressSpinnerModule,
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    //MatDialogModule,
    //MatTableModule,
    //MatMenuModule,
    MatIconModule,
    //MatProgressSpinnerModule,
  ],
})
export class CustomMaterialModule {}
