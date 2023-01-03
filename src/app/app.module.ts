import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// INVOICE COMPONENTS IMPORT
import { InvoiceDetailsComponent } from './components/invoice/invoice-details/invoice-details.component';
import { AddInvoiceComponent } from './components/invoice/add-invoice/add-invoice.component';
import { InvoicesListComponent } from './components/invoice/invoices-list/invoices-list.component';

// PAYMENT COMPONENTS IMPORT
import { PaymentDetailsComponent } from './components/payment/payment-details/payment-details.component';
import { AddPaymentComponent } from './components/payment/add-payment/add-payment.component';
import { PaymentListComponent } from './components/payment/payment-list/payment-list.component';
import { HomeInvoiceComponent } from './components/invoice/home-invoice/home-invoice.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WalletComponent } from './components/wallet/wallet.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    InvoiceDetailsComponent,
    AddInvoiceComponent,
    InvoicesListComponent,
    PaymentDetailsComponent,
    AddPaymentComponent,
    PaymentListComponent,
    HomeInvoiceComponent,
    NavbarComponent,
    WalletComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
