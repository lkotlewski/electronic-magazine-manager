import {Component, OnInit, ViewChild} from '@angular/core'
import {MatPaginator, MatTableDataSource} from '@angular/material'
import {PartsService} from '../../services/parts.service'
import {Part} from '../../model/part'
import {Router} from '@angular/router'

@Component({
  selector: 'app-part-list',
  templateUrl: './part-list.component.html',
  styleUrls: ['./part-list.component.scss']
})
export class PartListComponent implements OnInit {

  parts: MatTableDataSource<Part>
  displayedColumns: string[] = ['partNumber', 'description', 'amount', 'manufacturer', 'actions']

  @ViewChild(MatPaginator) paginator: MatPaginator

  constructor(
    private partsService: PartsService,
    private router: Router) {
  }

  ngOnInit() {
    this.partsService.getAll().subscribe(parts => {
      const allParts = parts as unknown
      this.parts = new MatTableDataSource(allParts as Part[])
      this.parts.paginator = this.paginator
    })
  }

  navigateToDetails(element: Part) {
    this.router.navigate([`part-details/by-number/${element.partNumber}`])
  }
}
