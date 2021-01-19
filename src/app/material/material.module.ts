import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


@NgModule({
  declarations: [],
  exports: [MatButtonModule, MatCheckboxModule],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    CommonModule
  ]
})
export class MaterialModule { }
