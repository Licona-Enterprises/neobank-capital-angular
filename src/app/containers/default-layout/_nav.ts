import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Home',
    url: '/dashboard',
    iconComponent: { name: 'cil-home' },
    // badge: {
    //   color: 'info',
    //   text: 'NEW'
    // }
  },
  {
    name: 'Transactions',
    url: '/transactions',
    iconComponent: { name: 'cil-list' },
  },
  // {
  //   name: 'Transactions',
  //   url: '/tables',
  //   iconComponent: { name: 'cil-list' },
  // },
    //  {
    //     name: 'Button groups',
    //     url: '/buttons/button-groups'
    //   },
  // {
  //   title: true,
  //   name: 'Theme'
  // },
  // {
  //   name: 'Colors',
  //   url: '/theme/colors',
  //   iconComponent: { name: 'cil-drop' }
  // },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   linkProps: { fragment: 'someAnchor' },
  //   iconComponent: { name: 'cil-pencil' }
  // },
  // {
  //   name: 'Components',
  //   title: true
  // },
  {
    name: 'Payments',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Requests',
        url: '/base/accordion'
      },
      {
        name: 'Recipients',
        url: '/base/breadcrumbs'
      },
      {
        name: 'Wire Drawdowns',
        url: '/base/cards'
      },
    ]
  },
  {
    name: 'Cards',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    // children: [
    //   {
    //     name: 'Buttons',
    //     url: '/buttons/buttons'
    //   },
    //   {
    //     name: 'Button groups',
    //     url: '/buttons/button-groups'
    //   },
    //   {
    //     name: 'Dropdowns',
    //     url: '/buttons/dropdowns'
    //   }
    // ]
  },
  {
    name: 'Capital',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    // children: [
    //   {
    //     name: 'Form Control',
    //     url: '/forms/form-control'
    //   },
    //   {
    //     name: 'Select',
    //     url: '/forms/select'
    //   },
    //   {
    //     name: 'Checks & Radios',
    //     url: '/forms/checks-radios'
    //   },
    //   {
    //     name: 'Range',
    //     url: '/forms/range'
    //   },
    //   {
    //     name: 'Input Group',
    //     url: '/forms/input-group'
    //   },
    //   {
    //     name: 'Floating Labels',
    //     url: '/forms/floating-labels'
    //   },
    //   {
    //     name: 'Layout',
    //     url: '/forms/layout'
    //   },
    //   {
    //     name: 'Validation',
    //     url: '/forms/validation'
    //   }
    // ]
  },
  {
    name: 'Accounts',
    url: '/charts',
    iconComponent: { name: 'cil-home' },
  },
  // {
  //   name: 'Icons',
  //   iconComponent: { name: 'cil-star' },
  //   url: '/icons',
  //   children: [
  //     {
  //       name: 'CoreUI Free',
  //       url: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'FREE'
  //       }
  //     },
  //     {
  //       name: 'CoreUI Flags',
  //       url: '/icons/flags'
  //     },
  //     {
  //       name: 'CoreUI Brands',
  //       url: '/icons/brands'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   iconComponent: { name: 'cil-bell' },
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges'
  //     },
  //     {
  //       name: 'Modal',
  //       url: '/notifications/modal'
  //     },
  //     {
  //       name: 'Toast',
  //       url: '/notifications/toasts'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   iconComponent: { name: 'cil-calculator' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   title: true,
  //   name: 'Extras'
  // },
  // {
  //   name: 'Pages',
  //   url: '/login',
  //   iconComponent: { name: 'cil-star' },
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500'
  //     }
  //   ]
  // },
  // {
  //   title: true,
  //   name: 'Links',
  //   class: 'py-0'
  // },
  // {
  //   name: 'Docs',
  //   url: 'https://coreui.io/angular/docs/templates/installation',
  //   iconComponent: { name: 'cil-description' },
  //   attributes: { target: '_blank', class: '-text-dark' },
  //   class: 'mt-auto'
  // },
  // {
  //   name: 'Try CoreUI PRO',
  //   url: 'https://coreui.io/product/angular-dashboard-template/',
  //   iconComponent: { name: 'cil-layers' },
  //   attributes: { target: '_blank' }
  // }
];
