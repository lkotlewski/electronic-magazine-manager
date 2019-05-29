import {Component, ElementRef, ViewChild} from '@angular/core'
import {Router} from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @ViewChild('partNumber') partNumber: ElementRef
  @ViewChild('description') description: ElementRef

  constructor(
    private router: Router
  ) {
  }

  search() {
    if (this.partNumber.nativeElement.value) {
      this.router.navigate([`part-details/by-number/${this.partNumber.nativeElement.value}`])
    }
    if (this.description.nativeElement.value) {
      this.router.navigate([`part-details/by-desc/${this.description.nativeElement.value}`])
    }
  }

  resetPartNumberInput() {
    this.partNumber.nativeElement.value = ''
  }

  resetDescriptionInput() {
    this.description.nativeElement.value = ''
  }
}
