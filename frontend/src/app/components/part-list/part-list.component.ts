import {Component, OnInit, ViewChild} from '@angular/core'
import {MatPaginator, MatTableDataSource} from '@angular/material'
import {PartsService} from '../../services/parts.service'
import {Part} from '../../model/part'

@Component({
  selector: 'app-part-list',
  templateUrl: './part-list.component.html',
  styleUrls: ['./part-list.component.scss']
})
export class PartListComponent implements OnInit {

  parts: MatTableDataSource<Part>
  displayedColumns: string[] = ['partNumber', 'description', 'amount', 'manufacturer']

  @ViewChild(MatPaginator) paginator: MatPaginator

  constructor(private partsService: PartsService) {
  }

  ngOnInit() {
    this.partsService.getAll().subscribe(parts => {
      const allParts = parts as unknown
      this.parts = new MatTableDataSource(allParts as Part[])
      this.parts.paginator = this.paginator
    })
  }
}
