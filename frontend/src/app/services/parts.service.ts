import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import {Part} from '../model/part'
import {Observable} from 'rxjs'
import {PartUpdateResponse} from '../model/part-update-response'


@Injectable({
  providedIn: 'root',
})
export class PartsService {

  readonly PARTS: Part[] = [
    {
      _id: '1',
      description: 'MEMS Microphones Bottom Port SISONIC Microphone',
      partNumber: 'SPV0842LR5H-1',
      amount: 3,
      minAmount: 0,
      manufacturer: 'CUI',
      parameters: [
        {name: 'Supply Voltage', min: 1.5, typ: null, max: 3.6, units: 'V'},
        {name: 'Supply Current', min: null, typ: 132, max: 165, units: 'uA'},
      ]
    }
  ]
  readonly backendUrl = 'https://eem-api.azurewebsites.net/api'

  constructor(private http: HttpClient) {
  }

  getPartByDescription(name: string): Part {
    // const params = new HttpParams().set('name', name)
    // this.http.get(`${this.backendUrl}/part`, {params: params}).subscribe(result => {
    //   return result as Part
    // })

    return this.PARTS.find(part => part.description.includes(name))
  }

  getPartByNumber(partNumber: string) {
    const params = new HttpParams().set('partNumber', partNumber)
    console.log(`${this.backendUrl}/parts/part-number/${partNumber}`)
    return this.http.get(`${this.backendUrl}/parts/part-number/${partNumber}`)
  }

  updatePartAmount(id: string, amount: number) {
    return this.http.put(`${this.backendUrl}/parts/${id}/update-amount`, {amount})
  }
}
