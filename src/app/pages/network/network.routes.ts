import {Route} from "@angular/router";

export const routes: Route[] = [
  {path: '', loadComponent: () => import("./network.component").then(c => c.NetworkComponent)},
  {path: 'bird', loadComponent: () => import("./bird/bird.component").then(c => c.BirdComponent)},
];

