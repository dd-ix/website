import {Route} from "@angular/router";

export const routes: Route[] = [
  {path: '', loadComponent: () => import("./network.component").then(c => c.NetworkComponent)},
  {path: 'route-server', loadComponent: () => import("./route-server/route-server.component").then(c => c.RouteServerComponent)},
];

