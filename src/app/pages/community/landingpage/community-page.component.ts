import { Component } from '@angular/core';
import { CardComponent } from "../../../core/card/card.component";
import { API_URL } from "../../../api/api.domain";
import { IconLinuxComponent } from "../../../icons/icon-linux/icon-linux.component";
import { IconGitComponent } from "../../../icons/icon-git/icon-git.component";
import { IconFediComponent } from "../../../icons/icon-fedi/icon-fedi.component";

@Component({
  selector: 'app-landingpage',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.scss'],
  imports: [
    CardComponent,
    IconLinuxComponent,
    IconGitComponent,
    IconFediComponent,
  ]
})
export class CommunityPageComponent {
  protected readonly API_URL = API_URL;
}
