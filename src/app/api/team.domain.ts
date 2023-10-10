export interface TeamMember {
  nick: string | null;
  name: string;
  description: string;
  image: string;
  ripe_handle: string | null;
  socials: Socials;
  vorstand: boolean;
}

export interface Socials {
  github: string | null;
  email: string | null;
  mastodon: string | null;
  website: string | null;
  linkedin: string | null;
}
