import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule, MatSidenavModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule
  ],
  exports: [
    MatSidenavModule,
    MatIconModule
  ]
})
export class MaterialModule {
}
