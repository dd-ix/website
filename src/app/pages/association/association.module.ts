import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AssociationComponent} from "./association.component";
import {CardComponent} from "../../core/card/card.component";
import {TextBlockComponent} from "../../core/text-block/text-block.component";
import {IconTalkingComponent} from "../../icons/icon-talking/icon-talking.component";
import {IconSwitchComponent} from "../../icons/icon-switch/icon-switch.component";
import {IconSocialComponent} from "../../icons/icon-social/icon-social.component";
import {IconHubComponent} from "../../icons/icon-hub/icon-hub.component";
import {IconGlobeComponent} from "../../icons/icon-globe/icon-globe.component";
import {IconFrauenkircheComponent} from "../../icons/icon-frauenkirche/icon-frauenkirche.component";
import {IconGroupComponent} from "../../icons/icon-group/icon-group.component";
import {IconMoneyComponent} from "../../icons/icon-money/icon-money.component";
import {AssociationRoutingModule} from "./association-routing.module";
import {ClientsAndSponsorsComponent} from './workinggroup/clients-and-sponsors/clients-and-sponsors.component';

@NgModule({
  declarations: [
    AssociationComponent,
    ClientsAndSponsorsComponent
  ],

  imports: [CommonModule, CardComponent, TextBlockComponent, IconTalkingComponent, IconSwitchComponent, IconSocialComponent, IconHubComponent, IconGlobeComponent, IconFrauenkircheComponent, IconGroupComponent, IconMoneyComponent, AssociationRoutingModule],
})
export class AssociationModule {
}
