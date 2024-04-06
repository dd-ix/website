export enum WorkingGroup {
  Tech = "Tech",
  Network = "Network",
  Services = "Services",
  DevOps = "DevOps",
  Events = "Events",
  FinanceAndLegal = "FinanceAndLegal",
  ClientsAndSponsors = "ClientsAndSponsors",
  PublicRelations = "PublicRelations"
}

export function workingGroupDisplayName(working_group: WorkingGroup): string {
  switch (working_group) {
    case WorkingGroup.Tech:
      return $localize`Tech`
    case WorkingGroup.Network:
      return $localize`Network`
    case WorkingGroup.Services:
      return $localize`Services`
    case WorkingGroup.DevOps:
      return $localize`DevOps`
    case WorkingGroup.Events:
      return $localize`Events`
    case WorkingGroup.FinanceAndLegal:
      return $localize`Finance and Legal`
    case WorkingGroup.ClientsAndSponsors:
      return $localize`Clients and Sponsors`
    case WorkingGroup.PublicRelations:
      return $localize`Public Relations`
  }
}


export interface TeamMember {
  nick: string | null;
  name: string;
  description: string;
  image: string;
  ripe_handle: string | null;
  socials: Socials;
  vorstand: boolean;
  working_groups: WorkingGroup[]
}

export interface Socials {
  github: string | null;
  email: string | null;
  mastodon: string | null;
  website: string | null;
  linkedin: string | null;
}
