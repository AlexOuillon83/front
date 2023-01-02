import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/models/invoice.model';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {

  invoice: Invoice = {
    memo: '',
    sender: undefined,
    receiver: undefined,
    amount: undefined,
    token_id: undefined,
    status: '',
  };
  submitted = false;

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
  }

  saveInvoice(): void {
    const data = {
      memo: this.invoice.memo,
      sender: this.invoice.sender,
      receiver: this.invoice.receiver,
      amount: this.invoice.amount,
      token_id: this.invoice.token_id,
      status: this.invoice.status,
    };

    this.invoiceService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newInvoice(): void {
    this.submitted = false;
    this.invoice = {
      memo: '',
      sender: undefined,
      receiver: undefined,
      amount: undefined,
      token_id: undefined,
      status: '',
    };
  }

}