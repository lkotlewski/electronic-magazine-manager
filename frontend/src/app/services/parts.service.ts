import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root',
})
export class PartsService {
  readonly backendUrl = 'https://eem-api.azurewebsites.net/api'

  constructor(private http: HttpClient) {
  }

  getPartByDescription(desc: string) {
    return this.http.get(`${this.backendUrl}/parts/description/${desc}`)
  }

  getPartByNumber(partNumber: string) {
    return this.http.get(`${this.backendUrl}/parts/part-number/${partNumber}`)
  }

  updatePartAmount(id: string, amount: number) {
    return this.http.put(`${this.backendUrl}/parts/${id}/update-amount`, {amount})
  }

  getAll() {
    return this.http.get(`${this.backendUrl}/parts/`)
  }
}

