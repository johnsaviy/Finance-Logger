import { HasFormatter } from "../interfaces/Hasformatter";

//properties with access modifiers
export class Payment implements HasFormatter {
    constructor(
      readonly recipient: string,
      private details: string,
      public amount: number,
    ) {}
  
    format() {
      return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
  }