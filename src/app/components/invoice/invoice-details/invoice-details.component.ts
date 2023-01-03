import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from 'src/app/models/invoice.model';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css']
})
export class InvoiceDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentInvoice: Invoice = {
    id: undefined,
    memo: '',
    sender: undefined,
    receiver: undefined,
    amount: undefined,
    token_id: undefined,
    status: ''
  };
  
  message = '';

  constructor(
    private invoiceService: InvoiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getInvoice(this.route.snapshot.params["id"]);
    }
  }

  getInvoice(id: string): void {
    this.invoiceService.get(id)
      .subscribe({
        next: (data) => {
          this.currentInvoice = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: string): void {
    const data = {
      id: this.currentInvoice.id,
      memo: this.currentInvoice.memo,
      sender : this.currentInvoice.sender,
      receiver : this.currentInvoice.receiver,
      amount: this.currentInvoice.amount,
      status: this.currentInvoice.status,
    };

    this.message = '';

    this.invoiceService.update(this.currentInvoice.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentInvoice.status = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updateInvoice(): void {
    this.message = '';

    this.invoiceService.update(this.currentInvoice.id, this.currentInvoice)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This invoice was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteInvoice(): void {
    this.invoiceService.delete(this.currentInvoice.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/invoices']);
        },
        error: (e) => console.error(e)
      });
  }

}