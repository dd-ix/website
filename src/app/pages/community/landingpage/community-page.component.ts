import {Component} from '@angular/core';
import {CardComponent} from "../../../core/card/card.component";
import {ButtonComponent} from "@feel/form";
import {IconSendComponent} from "../../../icons/icon-send/icon-send.component";
import {IconPopMapComponent} from "../../../icons/icon-pop-map/icon-pop-map.component";
import {API_URL} from "../../../api/api.domain";
import {IconAntennaComponent} from "../../../icons/icon-antenna/icon-antenna.component";
import {IconDirectionsComponent} from "../../../icons/icon-directions/icon-directions.component";
import {IconSwitchComponent} from "../../../icons/icon-switch/icon-switch.component";
import {IconInterLinkComponent} from "../../../icons/icon-inter-link/icon-inter-link.component";
import {IconLinuxComponent} from "../../../icons/icon-linux/icon-linux.component";
import {AsyncPipe, NgForOf} from "@angular/common";
import {TeamMemberComponent} from "../../team/team-member/team-member.component";
import {IconGitComponent} from "../../../icons/icon-git/icon-git.component";
import {IconFediComponent} from "../../../icons/icon-fedi/icon-fedi.component";

@Component({
    selector: 'app-landingpage',
    templateUrl: './community-page.component.html',
    styleUrls: ['./community-page.component.scss'],
  imports: [
    CardComponent,
    ButtonComponent,
    IconSendComponent,
    IconPopMapComponent,
    IconAntennaComponent,
    IconDirectionsComponent,
    IconSwitchComponent,
    IconInterLinkComponent,
    IconLinuxComponent,
    AsyncPipe,
    NgForOf,
    TeamMemberComponent,
    IconGitComponent,
    IconFediComponent,
  ]
})
export class CommunityPageComponent {
  protected readonly API_URL = API_URL;
}
