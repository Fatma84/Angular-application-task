import { Route } from "@angular/router";
import {Dashboard2Component} from "./list/dashboard2.component";
import {UserDetailsComponent} from "./details/user-details.component";
export const ADMIN_DASHBOARD_ROUTE: Route[] = [

  {
    path: "",
    component: Dashboard2Component,
  },

  {
    path: "details/:id",
    component: UserDetailsComponent,
  },
];
