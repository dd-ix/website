import {Language} from "./api.domain";

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
}

export interface Post extends SmallPost {
  body: string;
}
