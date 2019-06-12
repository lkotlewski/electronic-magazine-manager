import {Component, OnInit} from '@angular/core'
import {Change} from '../../model/change'
import {ChangesService} from '../../services/changes.service'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  changes: Change[]
  displayedColumns: string[] = ['user', 'partNumber', 'amount', 'time']

  constructor( private changesService: ChangesService) {
  }

  ngOnInit() {
     this.changes = this.changesService.getChanges()
  }

}
