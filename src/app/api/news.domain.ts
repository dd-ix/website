export enum Language {
  ENGLISH = 'en',
  GERMAN = 'de',
}

export interface SmallPost {
  slug: string;
  lang: Language,
  idx: number;
  title: string;
  published: string;
  modified: string | null;
  description: string;
  keywords: string[];
  authors: string[];
}

export interface Post extends SmallPost {
  body: string;
}
