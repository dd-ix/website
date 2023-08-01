import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PeeringLandingpageComponent} from "./peering-landingpage/peering-landingpage.component";
import {PeeringPolicyComponent} from "./peering-policy/peering-policy.component";
import {PeeringServicePniComponent} from "./services/peering-service-pni/peering-service-pni.component";
import {PeeringServicePeeringComponent} from "./services/peering-service-peering/peering-service-peering.component";
import {PeeringPeersComponent} from "./peering-peers/peering-peers.component";
import {PeeringLocationsComponent} from "./peering-locations/peering-locations.component";

const routes: Routes = [
  {path: '', component: PeeringLandingpageComponent},
  {path: 'policy', component: PeeringPolicyComponent},
  {path: 'services/pni', component: PeeringServicePniComponent},
  {path: 'services/peering', component: PeeringServicePeeringComponent},
  {path: 'peers', component: PeeringPeersComponent},
  {path: 'locations', component: PeeringLocationsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeeringRoutingModule {
}
