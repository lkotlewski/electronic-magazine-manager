import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class ChangesService {

  readonly backendUrl = 'https://eem-api.azurewebsites.net/api'

  constructor(private http: HttpClient) {
  }

  getChanges() {
    return this.http.get(`${this.backendUrl}/transactions/`)
  }
}
