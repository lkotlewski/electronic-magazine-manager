import {Parameter} from './parameter'

export class Part {
  _id: string
  partNumber: string
  description: string
  amount: number
  minAmount: number
  manufacturer: string
  parameters: Parameter[]
}
