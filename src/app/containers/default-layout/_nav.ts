import { INavData } from '@coreui/angular';
import { MatIconModule } from '@angular/material/icon';


export const navItems: INavData[] = [
  {
    name: 'Home',
    url: '/dashboard',
    iconComponent: { name: 'cil-home' },
  },
  {
    name: 'Transactions',
    url: '/transactions',
    iconComponent: { name: 'cil-list' },
  },
  {
    name: 'Payments',
    url: '/payments',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Requests',
        url: '/requests',
      },
      {
        name: 'Recipients',
        url: '/recipients'
      },
      {
        name: 'Wire Drawdowns',
        url: '/wire-drawdowns'
      },
    ]
  },
  {
    name: 'Cards',
    url: '/cards',
    iconComponent: { name: 'cil-cursor' },
  },
  {
    name: 'Capital',
    url: '/capitals',
    iconComponent: { name: 'cil-notes' },
  },
  {
    name: 'Accounts',
    url: '/accounts',
    iconComponent: { name: 'cil-home' },
  },
];
