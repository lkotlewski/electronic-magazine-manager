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
  MatDialogModule, MatPaginatorModule, MatTooltipModule
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
    MatPaginatorModule,
    MatTooltipModule
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
    MatPaginatorModule,
    MatTooltipModule
  ]
})
export class MaterialModule {
}
