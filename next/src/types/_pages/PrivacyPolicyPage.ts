import { type Node } from "../_global/Node";
import { type Seo } from "../_global/Seo";

export interface PrivacyPolicyPage {
  _type?: string;
  page: {
    _type?: string;
    content: Node[];
    hero_Title: string;
    seo?: Seo;
  }
}