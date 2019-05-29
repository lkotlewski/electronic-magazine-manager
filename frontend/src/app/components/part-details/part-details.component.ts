import {Component, OnInit} from '@angular/core'
import {Part} from '../../model/part'
import {ActivatedRoute} from '@angular/router'
import {PartsService} from '../../services/parts.service'

@Component({
  selector: 'app-update-magazine',
  templateUrl: './part-details.component.html',
  styleUrls: ['./part-details.component.scss']
})
export class PartDetailsComponent implements OnInit {

  fetchedPart: Part
  displayedColumns: string[] = ['name', 'min', 'typ', 'max', 'units']

  constructor(
    private route: ActivatedRoute,
    private partService: PartsService) {
  }

  ngOnInit() {
    const partNumber: string = this.route.snapshot.paramMap.get('number')
    const desc: string = this.route.snapshot.paramMap.get('desc')

    if (partNumber) {
      this.fetchedPart = this.partService.getPartByNumber(partNumber)
    }
    if (desc) {
      this.fetchedPart = this.partService.getPartByDescription(desc)
    }
  }

}
