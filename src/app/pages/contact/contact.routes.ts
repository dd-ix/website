import {Route} from "@angular/router";

export const routes: Route[] = [
  {path: '', loadComponent: () => import("./contact.component").then(c => c.ContactComponent)},
]
