import { Race } from "@/utilities/races.ts";

import map_missing from "@/assets/laddermaps/missing.png";

import alt_1v1 from "@/assets/laddermaps/1v1/dynasty/alt.jpg";
import bo_1v1 from "@/assets/laddermaps/1v1/dynasty/bo.jpg";
import oo_1v1 from "@/assets/laddermaps/1v1/dynasty/oo.jpg";
import rtr_1v1 from "@/assets/laddermaps/1v1/dynasty/rtr.jpg";
import cra_1v1 from "@/assets/laddermaps/1v1/dynasty/cra.jpg";
import eh_1v1 from "@/assets/laddermaps/1v1/dynasty/eh.jpg";
import rt_1v1 from "@/assets/laddermaps/1v1/dynasty/rt.jpg";
import tl_1v1 from "@/assets/laddermaps/1v1/dynasty/tl.jpg";
import alp_1v1 from "@/assets/laddermaps/1v1/dynasty/alp.jpg";
import cj_1v1 from "@/assets/laddermaps/1v1/dynasty/cj.jpg";

import gdf_alt_1v1 from "@/assets/laddermaps/1v1/gdf/alt.jpg";
// import gdf_bo_1v1 from "@/assets/laddermaps/1v1/gdf/bo.jpg";
import gdf_oo_1v1 from "@/assets/laddermaps/1v1/gdf/oo.jpg";
import gdf_rtr_1v1 from "@/assets/laddermaps/1v1/gdf/rtr.jpg";
// import gdf_cra_1v1 from "@/assets/laddermaps/1v1/gdf/cra.jpg";
import gdf_eh_1v1 from "@/assets/laddermaps/1v1/gdf/eh.jpg";
import gdf_rt_1v1 from "@/assets/laddermaps/1v1/gdf/rt.jpg";
import gdf_tl_1v1 from "@/assets/laddermaps/1v1/gdf/tl.jpg";
// import gdf_alp_1v1 from "@/assets/laddermaps/1v1/gdf/alp.jpg";
import gdf_cj_1v1 from "@/assets/laddermaps/1v1/gdf/cj.jpg";

export const ladder_maps_1v1: any = {
  [Race.GDF]: {
    Altitude: { img: gdf_alt_1v1, games: [] },
    "Bridges Out": { img: map_missing, games: [] },
    "Overgrown Oassis": { img: gdf_oo_1v1, games: [] },
    "Road To Ruin": { img: gdf_rtr_1v1, games: [] },
    Cracking: { img: map_missing, games: [] },
    "Emptied Hopes": { img: gdf_eh_1v1, games: [] },
    "River Temple": { img: gdf_rt_1v1, games: [] },
    "Tropical Logging": { img: gdf_tl_1v1, games: [] },
    Alps: { img: map_missing, games: [] },
    "Central Junction": { img: gdf_cj_1v1, games: [] },
  },
  [Race.Dynasty]: {
    Altitude: { img: alt_1v1, games: [] },
    "Bridges Out": { img: bo_1v1, games: [] },
    "Overgrown Oassis": { img: oo_1v1, games: [] },
    "Road To Ruin": { img: rtr_1v1, games: [] },
    Cracking: { img: cra_1v1, games: [] },
    "Emptied Hopes": { img: eh_1v1, games: [] },
    "River Temple": { img: rt_1v1, games: [] },
    "Tropical Logging": { img: tl_1v1, games: [] },
    Alps: { img: alp_1v1, games: [] },
    "Central Junction": { img: cj_1v1, games: [] },
  },
};
