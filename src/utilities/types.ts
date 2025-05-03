import { Race } from "@/utilities/races";

export interface IStepAnnotation {
  type: "None" | "Army" | "Tech" | "Information";
  text: string;
}

export interface IStep {
  id: string;
  time: string;
  food: string;
  instructions: string;
  timing: boolean;
  separator: boolean;
  annotation?: IStepAnnotation;
}
export interface ISampleGame {
  id: string;
  name?: string;
}

export interface IBuild {
  id: string;
  slug: string;
  author: string;
  originalAuthor: string;
  created: any;
  updated?: any;
  workInProgress: boolean;
  name: string;
  secret?: string;
  description: string;
  version: string;
  difficulty: string;
  viability: number;
  games: ISampleGame[];
  tags: string[];
  stars: number;
  starred?: any;
  player: Race;
  opponent: Race;
  steps: IStep[];
}
export interface IBuildOrderState {
  new: IBuild;
  edit: Partial<IBuild>;
  active: {};
  starred: { [key: string]: boolean };
  owns: { [key: string]: boolean };
}
