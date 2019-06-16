import {Component, OnInit, ViewChild} from '@angular/core'
import {Change} from '../../model/change'
import {ChangesService} from '../../services/changes.service'
import {MatPaginator, MatTableDataSource} from '@angular/material'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  changes: MatTableDataSource<Change>
  displayedColumns: string[] = ['user', 'partNumber', 'amount', 'time']

  @ViewChild(MatPaginator) paginator: MatPaginator

  constructor( private changesService: ChangesService) {
  }

  ngOnInit() {
    this.changesService.getChanges().subscribe(changes => {
      const allChanges = changes as unknown
      this.changes = new MatTableDataSource(allChanges as Change[])
      this.changes.paginator = this.paginator
    })
  }
}
