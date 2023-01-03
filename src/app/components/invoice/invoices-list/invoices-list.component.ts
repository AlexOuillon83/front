import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/models/invoice.model';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.css']
})
export class InvoicesListComponent implements OnInit {

  invoices?: Invoice[];
  currentInvoice: Invoice = {};
  currentIndex = -1;
  title = '';

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.retrieveInvoices();
  }

  retrieveInvoices(): void {
    this.invoiceService.getAll()
      .subscribe({
        next: (data) => {
          this.invoices = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveInvoices();
    this.currentInvoice = {};
    this.currentIndex = -1;
  }

  setActiveInvoice(invoice: Invoice, index: number): void {
    console.log("active ?")
    this.currentInvoice = invoice;
    this.currentIndex = index;
  }

  removeAllInvoices(): void {
    this.invoiceService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentInvoice = {};
    this.currentIndex = -1;

    this.invoiceService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.invoices = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}