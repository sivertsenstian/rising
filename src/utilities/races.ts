export enum Race {
  Random = 0,
  GDF = 1,
  Dynasty = 2,
}

export const raceName: any = {
  [Race.GDF]: "GDF",
  [Race.Dynasty]: "Dynasty",
  [Race.Random]: "Any",
};

import dynasty from "@/assets/race/dynasty.png";
import gdf from "@/assets/race/gdf.png";
import random from "@/assets/race/random.png";

export const raceIcon: any = {
  [Race.GDF]: gdf,
  [Race.Dynasty]: dynasty,
  [Race.Random]: random,
};
