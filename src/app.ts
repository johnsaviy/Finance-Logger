//classes

// class Invoice {
//      client: string;
//      details: string;
//     amount: number;
//   constructor( c: string, d: string, a: number) {
//     this.client = c
//     this.details = d
//     this.amount = a
//   }

//   format() {
//     return `${this.client} owes £${this.amount} for ${this.details}`;
//   }
// }

import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplates.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/Hasformatter.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('John', 'Web work', 400);
// docTwo = new Payment('John', 'Design work', 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo)

// console.log(docs);

// const invOne = new Invoice("mario", "work on the website", 300);
// const invTwo = new Invoice("Esty", "design on the website", 500);

// // console.log(invOne.format());
// // console.log(invTwo.format());

// let invoices: Invoice[] = [];

// invoices.push(invTwo);
// invoices.push(invOne);

// // console.log(invoice);

// invoices.forEach((inv) => {
//   console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
// });

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// console.log(form.children);

//inputs

const type = document.querySelector("#type") as HTMLSelectElement;

const tofrom = document.querySelector("#tofrom") as HTMLInputElement;

const details = document.querySelector("#details") as HTMLInputElement;

const amount = document.querySelector("#amount") as HTMLInputElement;


// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul)




form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
 
  
  list.render(doc,  type.value, 'end');

});
