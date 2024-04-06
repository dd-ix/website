import {Route} from "@angular/router";

export const routes: Route[] = [
  {path: '', loadComponent: () => import("./association.component").then(c => c.AssociationComponent)},
]
