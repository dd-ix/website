import { Language } from "./api.domain";

export interface SmallBlogPost {
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
  blog: boolean | undefined;
  news: boolean | undefined;
}

export interface Post extends SmallBlogPost {
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
