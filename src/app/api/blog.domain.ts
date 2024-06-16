import {Language} from "./api.domain";

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
}

export interface Post extends SmallBlogPost {
  body: string;
}

export interface SmallEvent {
  slug: string;
  lang: Language,
  idx: number;
  title: string;
  published: string;
  description: string;
  keywords: string[];
  authors: string[];
  image: string | null;
  start_time: string,
  end_time: string,
  location: string
}

export interface Event extends SmallEvent {
  body: string;
}

enum Type {
  Blog,
  Event
}

export interface PostOrEvent {
  type: Type
  slug: string;
  lang: Language,
  idx: number;
  title: string;
  description: string;
  start_time: string,
  end_time: string,
  location: string
}

