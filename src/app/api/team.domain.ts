export interface TeamMember {
  name: string;
  description: string;
  image: string;
  socials: Socials;
}

export interface Socials {
  github: string;
  email: string;
  mastodon: string;
  website: string;
}
