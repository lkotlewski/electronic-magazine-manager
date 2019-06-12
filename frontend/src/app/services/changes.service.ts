import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Change} from '../model/change'

@Injectable({
  providedIn: 'root',
})
export class ChangesService {

  readonly CHANGES: Change[] = [
    {
      user: 'Łukasz Kotlewski',
      partNumber: 'SPV0842LR5H-1',
      amount: -2,
      time: new Date(2019, 5, 12)
    },
    {
      user: 'Kajetan Śpionek',
      partNumber: 'SPV084265318-1',
      amount: 2,
      time: new Date(2019, 5, 14)
    },
  ]
  readonly backendUrl = 'https://eem-api.azurewebsites.net/api'

  constructor(private http: HttpClient) {
  }

  getChanges(): Change[] {
    return this.CHANGES
  }
}
