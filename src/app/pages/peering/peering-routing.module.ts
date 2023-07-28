import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PeeringLandingpageComponent} from "./peering-landingpage/peering-landingpage.component";
import {PeeringPolicyComponent} from "./peering-policy/peering-policy.component";
import {PeeringServicePniComponent} from "./services/peering-service-pni/peering-service-pni.component";
import {PeeringServicePeeringComponent} from "./services/peering-service-peering/peering-service-peering.component";

const routes: Routes = [
  {path: '', component: PeeringLandingpageComponent},
  {path: 'policy', component: PeeringPolicyComponent},
  {path: 'services/pni', component: PeeringServicePniComponent},
  {path: 'services/peering', component: PeeringServicePeeringComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeeringRoutingModule {
}
