import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatTableModule,
  MatDialogModule, MatPaginatorModule
} from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule
  ]
})
export class MaterialModule {
}
