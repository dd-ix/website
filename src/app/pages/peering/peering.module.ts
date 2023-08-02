import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PeeringRoutingModule} from './peering-routing.module';
import {PeeringLandingpageComponent} from './peering-landingpage/peering-landingpage.component';
import {PeeringPolicyComponent} from './peering-policy/peering-policy.component';
import {PeeringServicePniComponent} from './services/peering-service-pni/peering-service-pni.component';
import {PeeringServicePeeringComponent} from './services/peering-service-peering/peering-service-peering.component';
import {CardComponent} from "../../core/card/card.component";
import { PeeringPeersComponent } from './peering-peers/peering-peers.component';
import { PeeringLocationsComponent } from './peering-locations/peering-locations.component';
import {TextBlockComponent} from "../../core/text-block/text-block.component";

@NgModule({
  declarations: [
    PeeringLandingpageComponent,
    PeeringPolicyComponent,
    PeeringServicePniComponent,
    PeeringServicePeeringComponent,
    PeeringPeersComponent,
    PeeringLocationsComponent
  ],
    imports: [
        CommonModule,
        PeeringRoutingModule,
        CardComponent,
        TextBlockComponent
    ]
})
export class PeeringModule {
}
