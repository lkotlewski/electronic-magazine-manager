import {Component, ElementRef, OnInit, ViewChild} from '@angular/core'
import {MatDialogRef} from '@angular/material'

@Component({
  selector: 'app-element-amount-dialog',
  templateUrl: './element-amount-dialog.component.html',
  styleUrls: ['./element-amount-dialog.component.scss']
})
export class ElementAmountDialogComponent implements OnInit {

  @ViewChild('amount') amount: ElementRef

  constructor(public dialogRef: MatDialogRef<ElementAmountDialogComponent>) { }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close(this.amount.nativeElement.value)
  }

  close() {
    this.dialogRef.close()
  }

}
