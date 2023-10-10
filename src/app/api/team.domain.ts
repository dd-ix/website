
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

function workingGroupPage(working_group: WorkingGroup) : string {
  switch (working_group) {
    case WorkingGroup.Tech:
      return "/association/tech"
    case WorkingGroup.Network:
      return "/association/technical"
    case WorkingGroup.Services:
      return "/association/technical"
    case WorkingGroup.DevOps:
      return "/association/technical"
    case WorkingGroup.Events:
      return "/association/events"
    case WorkingGroup.FinanceAndLegal:
      return "/association/finance-and-legal"
    case WorkingGroup.ClientsAndSponsors:
      return "/association/clients-and-sponsors"
    case WorkingGroup.PublicRelations:
      return "/association/public-relations"
  }
}

function displayName(working_group: WorkingGroup) : string {
  switch (working_group) {
    case WorkingGroup.Tech:
      return "Tech"
    case WorkingGroup.Network:
      return "Network"
    case WorkingGroup.Services:
      return "Services"
    case WorkingGroup.DevOps:
      return "DevOps"
    case WorkingGroup.Events:
      return "Events"
    case WorkingGroup.FinanceAndLegal:
      return "Finance and Legal"
    case WorkingGroup.ClientsAndSponsors:
      return "Clients and Sponsors"
    case WorkingGroup.PublicRelations:
      return "Public Relations"
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
  teams: WorkingGroup[]
}

export interface Socials {
  github: string | null;
  email: string | null;
  mastodon: string | null;
  website: string | null;
  linkedin: string | null;
}
