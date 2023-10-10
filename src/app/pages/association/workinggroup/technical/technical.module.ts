import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnicalRoutingModule } from './technical-routing.module';
import { TechnicalComponent } from './technical.component';
import {CardComponent} from "../../../../core/card/card.component";
import {IconFrauenkircheComponent} from "../../../../icons/icon-frauenkirche/icon-frauenkirche.component";
import {IconHubComponent} from "../../../../icons/icon-hub/icon-hub.component";
import {IconMoneyComponent} from "../../../../icons/icon-money/icon-money.component";
import {IconSocialComponent} from "../../../../icons/icon-social/icon-social.component";
import {IconSwitchComponent} from "../../../../icons/icon-switch/icon-switch.component";
import {IconTalkingComponent} from "../../../../icons/icon-talking/icon-talking.component";


@NgModule({
  declarations: [
    TechnicalComponent
  ],
    imports: [
        CommonModule,
        TechnicalRoutingModule,
        CardComponent,
        IconFrauenkircheComponent,
        IconHubComponent,
        IconMoneyComponent,
        IconSocialComponent,
        IconSwitchComponent,
        IconTalkingComponent
    ]
})
export class TechnicalModule { }
