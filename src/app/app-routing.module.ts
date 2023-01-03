import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { InvoicesListComponent } from './components/invoice/invoices-list/invoices-list.component';
import { PaymentListComponent } from './components/payment/payment-list/payment-list.component';
import { InvoiceDetailsComponent } from './components/invoice/invoice-details/invoice-details.component';
import { AddInvoiceComponent } from './components/invoice/add-invoice/add-invoice.component';
import { HomeInvoiceComponent } from './components/invoice/home-invoice/home-invoice.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },
  { path: 'home-invoice', component: HomeInvoiceComponent },
  { path: 'invoices', component: InvoicesListComponent },
  { path: 'add-invoices', component: AddInvoiceComponent },
  { path: 'invoices/:id', component: InvoiceDetailsComponent },
  { path: 'payments', component: PaymentListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
