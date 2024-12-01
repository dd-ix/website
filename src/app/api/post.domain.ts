import { Language } from "./api.domain";

export enum PostKind {
  News,
  Blog,
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
  image: string | null;

  // manually added in frontend
  kind: PostKind | undefined;
}

export interface Post extends SmallPost {
  body: string;
}

export interface SmallEvent {
  slug: string;
  lang: Language,
  idx: number;
  title: string;
  description: string;
  keywords: string[];
  authors: string[];
  image: string | null;
  start_time: string,
  end_time: string,
  location: string,
  link: string | null
}

export interface EventPost extends SmallEvent {
  body: string;
}
