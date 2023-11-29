import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultFooterComponent, DefaultHeaderComponent, DefaultLayoutComponent } from './containers';
import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule
} from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MyModalComponent } from './my-modal/my-modal.component';
import { BottomPopoverComponent } from './bottom-popover/bottom-popover.component';
import { PaySomeoneComponent } from './pay-someone/pay-someone.component';
import { AddReceiveFundsComponent } from './add-receive-funds/add-receive-funds.component';
import { PaymentRequestComponent } from './payment-request/payment-request.component';
import { TransferFundsComponent } from './transfer-funds/transfer-funds.component';
import { PaymentsComponent } from './payments/payments.component';
import { TransactionsComponent } from "./transactions/transactions.component";
import { RequestsComponent } from './requests/requests.component';
import { RecipientsComponent } from './recipients/recipients.component';
import { WireDrawdownsComponent } from './wire-drawdowns/wire-drawdowns.component';
import { CardsComponent } from './cards/cards.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CapitalsComponent } from './capitals/capitals.component';
import { SendMoneyTransferFundsComponent } from './send-money-transfer-funds/send-money-transfer-funds.component';
import { FundTransferReviewsComponent } from './fund-transfer-reviews/fund-transfer-reviews.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AddRecipientDetailsComponent } from './add-recipient-details/add-recipient-details.component';
import { WiredrwdownsRecipientDetailsComponent } from './wiredrwdowns-recipient-details/wiredrwdowns-recipient-details.component';
import { PaysomeoneUserDetailsComponent } from './paysomeone-user-details/paysomeone-user-details.component';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS, SearchBarComponent, MyModalComponent, BottomPopoverComponent, PaySomeoneComponent, AddReceiveFundsComponent, PaymentRequestComponent, TransferFundsComponent, PaymentsComponent,TransactionsComponent, RequestsComponent, RecipientsComponent, WireDrawdownsComponent, CardsComponent, AccountsComponent, CapitalsComponent, SendMoneyTransferFundsComponent, FundTransferReviewsComponent, AddRecipientDetailsComponent, WiredrwdownsRecipientDetailsComponent, PaysomeoneUserDetailsComponent, PaymentComponent],
  imports: [
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatTabsModule,
    MatTreeModule,
    MatCardModule,
    MatListModule,
    MatSlideToggleModule,
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    CardModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    FormsModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    IconSetService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
