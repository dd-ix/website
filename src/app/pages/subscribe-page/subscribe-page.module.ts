import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscribePageRoutingModule } from './subscribe-page-routing.module';
import { SubscribePageComponent } from './subscribe-page.component';
import {CardComponent} from "../../core/card/card.component";
import {MailingListComponent} from "../../core/mailing-list/mailing-list.component";
import {TextFieldComponent} from "@feel/form";


@NgModule({
  declarations: [
    SubscribePageComponent
  ],
  imports: [
    CommonModule,
    SubscribePageRoutingModule,
    CardComponent,
    MailingListComponent,
    TextFieldComponent
  ]
})
export class SubscribePageModule { }
