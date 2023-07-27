import {Language} from "./api.domain";

export interface TextBlock {
  slug: string;
  lang: Language,
  body: string;
}
