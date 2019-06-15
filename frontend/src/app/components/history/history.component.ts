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
     this.changes = new MatTableDataSource(this.changesService.getChanges())
     this.changes.paginator = this.paginator
  }

}
