import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaySomeoneComponent } from './pay-someone/pay-someone.component';
import { AddReceiveFundsComponent } from './add-receive-funds/add-receive-funds.component';
import { PaymentRequestComponent } from './payment-request/payment-request.component';
import { TransferFundsComponent } from './transfer-funds/transfer-funds.component';
import { PaymentsComponent } from './payments/payments.component';
import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { TablesComponent } from './views/base/tables/tables.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { RequestsComponent } from './requests/requests.component';
import { RecipientsComponent } from './recipients/recipients.component';
import { WireDrawdownsComponent } from './wire-drawdowns/wire-drawdowns.component';
import { CardsComponent } from './cards/cards.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CapitalsComponent } from './capitals/capitals.component';
import { SendMoneyTransferFundsComponent } from './send-money-transfer-funds/send-money-transfer-funds.component';
import { FundTransferReviewsComponent } from './fund-transfer-reviews/fund-transfer-reviews.component';
import { AddRecipientDetailsComponent } from './add-recipient-details/add-recipient-details.component';
import { WiredrwdownsRecipientDetailsComponent } from './wiredrwdowns-recipient-details/wiredrwdowns-recipient-details.component';
import { PaysomeoneUserDetailsComponent } from './paysomeone-user-details/paysomeone-user-details.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  { path: 'pay-someone', component: PaySomeoneComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'add-receive-funds', component: AddReceiveFundsComponent },
  { path: 'payment-request', component: PaymentRequestComponent },
  { path: 'transfer-funds', component: TransferFundsComponent },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'transactions',
        component: TransactionsComponent,
        data: {
          title: 'Transactions',
        },
      },
      {
        path: 'requests',
        component: RequestsComponent,
        data: {
          title: 'Requests',
        },
      },
      {
        path: 'payments',
        component: PaymentsComponent,
        data: {
          title: 'Payments',
        },
      },
      {
        path: 'recipients',
        component: RecipientsComponent,
        data: {
          title: 'Recipients',
        },
      },
      {
        path: 'wire-drawdowns',
        component: WireDrawdownsComponent,
        data: {
          title: 'Wire Drawdowns',
        },
      },
      {
        path: 'capitals',
        component: CapitalsComponent,
        data: {
          title: 'Capitals',
        },
      },

      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Tables',
        },
      },
      {
        path: 'cards',
        component: CardsComponent,
        data: {
          title: 'Cards',
        },
      },
      {
        path: 'accounts',
        component: AccountsComponent,
        data: {
          title: 'Accounts',
        },
      },
      {
        path: 'send-money-transfer-funds',
        component: SendMoneyTransferFundsComponent,
      },
      {
        path: 'fund-transfer-reviews',
        component: FundTransferReviewsComponent,
      },
      {
        path: 'add-recipient-details',
        component: AddRecipientDetailsComponent,
      },
      {
        path: 'wiredrwdowns-recipient-details',
        component: WiredrwdownsRecipientDetailsComponent,
      },
      {
        path: 'paysomeone-user-details',
        component: PaysomeoneUserDetailsComponent,
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule),
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule),
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule),
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule),
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule),
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then(
            (m) => m.NotificationsModule
          ),
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule),
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule),
      },
    ],
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404',
    },
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500',
    },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page',
    },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page',
    },
  },
  { path: '**', redirectTo: 'dashboard' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

