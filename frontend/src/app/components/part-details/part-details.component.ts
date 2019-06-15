import {Component, OnInit} from '@angular/core'
import {Part} from '../../model/part'
import {ActivatedRoute} from '@angular/router'
import {PartsService} from '../../services/parts.service'
import {MatDialog, MatDialogConfig} from '@angular/material'
import {ElementAmountDialogComponent} from '../element-amount-dialog/element-amount-dialog.component'
import {PartUpdateResponse} from '../../model/part-update-response'

@Component({
  selector: 'app-update-magazine',
  templateUrl: './part-details.component.html',
  styleUrls: ['./part-details.component.scss']
})
export class PartDetailsComponent implements OnInit {

  fetchedPart: Part = {
    _id: '', partNumber: '', amount: null, manufacturer: '',
    minAmount: null, description: '', parameters: []
  }
  displayedColumns: string[] = ['name', 'min', 'typ', 'max', 'units']

  constructor(
    private route: ActivatedRoute,
    private partService: PartsService,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    const partNumber: string = this.route.snapshot.paramMap.get('number')
    const desc: string = this.route.snapshot.paramMap.get('desc')

    if (partNumber) {
      this.partService.getPartByNumber(partNumber).subscribe(result => {
        this.fetchedPart = result as Part
      })
    }
    if (desc) {
      this.fetchedPart = this.partService.getPartByDescription(desc)
    }
  }

  openDialog(add: boolean) {

    const dialogConfig = new MatDialogConfig()

    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true

    const dialogRef = this.dialog.open(ElementAmountDialogComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(result => {
      let value: number = +result
      if (value) {
        if (!add) {
          value = -value
        }
        this.partService.updatePartAmount(this.fetchedPart._id, value).subscribe(updateResult => {
            const partUpdateResponse = updateResult as PartUpdateResponse
            this.fetchedPart = partUpdateResponse.value as Part
          })
      }
    })
  }

  addElements() {
    this.openDialog(true)
  }

  takeElements() {
    this.openDialog(false)
  }

}
