import { type CentralizedHeading } from "./CentralizedHeading";

export interface NumberedCards {
  _type?: string;
  centralizedHeading: CentralizedHeading;
  cards: string[];
}