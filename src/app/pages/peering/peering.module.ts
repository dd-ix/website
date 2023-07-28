import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PeeringRoutingModule} from './peering-routing.module';
import {PeeringLandingpageComponent} from './peering-landingpage/peering-landingpage.component';
import {PeeringPolicyComponent} from './peering-policy/peering-policy.component';
import {PeeringServicePniComponent} from './services/peering-service-pni/peering-service-pni.component';
import {PeeringServicePeeringComponent} from './services/peering-service-peering/peering-service-peering.component';

@NgModule({
  declarations: [
    PeeringLandingpageComponent,
    PeeringPolicyComponent,
    PeeringServicePniComponent,
    PeeringServicePeeringComponent
  ],
  imports: [
    CommonModule,
    PeeringRoutingModule
  ]
})
export class PeeringModule {
}
