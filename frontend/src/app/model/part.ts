import {Parameter} from './parameter'

export class Part {
  id: string
  partNumber: string
  description: string
  amount: number
  minAmount: number
  manufacturer: string
  parameters: Parameter[]
}
