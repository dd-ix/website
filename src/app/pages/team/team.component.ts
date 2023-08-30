import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamService} from "../../api/team.service";
import {API_URL} from "../../api/api.domain";
import {CardComponent} from "../../core/card/card.component";
import {IconGithubComponent} from "../../icons/icon-github/icon-github.component";
import {IconMastodonComponent} from "../../icons/icon-mastodon/icon-mastodon.component";
import {IconGlobeComponent} from "../../icons/icon-globe/icon-globe.component";
import {IconMailComponent} from "../../icons/icon-mail/icon-mail.component";

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, CardComponent, IconGithubComponent, IconMastodonComponent, IconGlobeComponent, IconMailComponent],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  protected readonly team = this.teamService.getTeam();

  constructor(
    private teamService: TeamService,
  ) {
  }

  protected buildMemberImage(image: string): string {
    return `${API_URL}/team/assets/${image}`;
  }

  protected buildMastodonLink(mastodon: string): string {
    console.log(mastodon);
    const match = /(@.+)@(.+)/.exec(mastodon);
    if (!match) {
      throw new Error("Invalid mastodon name: " + mastodon);
    }

    return `https://${match[2]}/${match[1]}`;
  }
}
