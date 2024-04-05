import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {PeeringRoutingModule} from './peering-routing.module';
import {PeeringLandingpageComponent} from './peering-landingpage/peering-landingpage.component';
import {PeeringPolicyComponent} from './peering-policy/peering-policy.component';
import {PeeringServicePniComponent} from './services/peering-service-pni/peering-service-pni.component';
import {PeeringServicePeeringComponent} from './services/peering-service-peering/peering-service-peering.component';
import {CardComponent} from "../../core/card/card.component";
import {PeeringPeersComponent} from './peering-peers/peering-peers.component';
import {PeeringLocationsComponent} from './peering-locations/peering-locations.component';
import {TextBlockComponent} from "../../core/text-block/text-block.component";
import {IconSwitchComponent} from "../../icons/icon-switch/icon-switch.component";
import {IconAntennaComponent} from "../../icons/icon-antenna/icon-antenna.component";
import {IconRatingComponent} from "../../icons/icon-rating/icon-rating.component";
import {IconDirectionsComponent} from "../../icons/icon-directions/icon-directions.component";
import {IconMoneyComponent} from "../../icons/icon-money/icon-money.component";
import {ButtonComponent} from "@feel/form";
import {IconSendComponent} from "../../icons/icon-send/icon-send.component";
import {IconPopMapComponent} from "../../icons/icon-pop-map/icon-pop-map.component";

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
        TextBlockComponent,
        IconSwitchComponent,
        IconAntennaComponent,
        IconRatingComponent,
        IconDirectionsComponent,
        IconMoneyComponent,
        NgOptimizedImage,
        ButtonComponent,
        IconSendComponent,
        IconPopMapComponent
    ]
})
export class PeeringModule {
}
