import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { IconGithubComponent } from '../../icons/icon-github/icon-github.component';
import { IconGlobeComponent } from '../../icons/icon-globe/icon-globe.component';
import { IconLinkedinComponent } from '../../icons/icon-linkedin/icon-linkedin.component';
import { IconMailComponent } from '../../icons/icon-mail/icon-mail.component';
import { IconMastodonComponent } from '../../icons/icon-mastodon/icon-mastodon.component';
import { IconRipeComponent } from '../../icons/icon-ripe/icon-ripe.component';
import { TeamMember, WorkingGroup, workingGroupDisplayName } from '../../api/team.domain';
import { API_URL } from '../../api/api.domain';

@Component({
  selector: 'app-team-member',
  imports: [
    CardComponent,
    IconGithubComponent,
    IconGlobeComponent,
    IconLinkedinComponent,
    IconMailComponent,
    IconMastodonComponent,
    IconRipeComponent,
    NgOptimizedImage
  ],
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent {

  @Input()
  public member?: TeamMember;

  protected buildMemberImage(image: string): string {
    return new URL(`${API_URL}/team/assets/${image}`).toString();
  }

  protected buildMastodonLink(mastodon: string): string {
    const match = /(@.+)@(.+)/.exec(mastodon);
    if (!match) {
      throw new Error("Invalid mastodon name: " + mastodon);
    }

    return `https://${match[2]}/${match[1]}`;
  }

  protected domain(website: string): string {
    return new URL(website).hostname;
  }

  protected getWorkingGroupName(working_group: WorkingGroup): string {
    return workingGroupDisplayName(working_group);
  }
}
