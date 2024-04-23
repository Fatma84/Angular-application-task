import { Route } from '@angular/router';

export const ADMIN_ROUTE: Route[] = [
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.routes').then((m) => m.ADMIN_DASHBOARD_ROUTE),
  },
];

