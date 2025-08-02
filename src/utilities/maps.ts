import {Race} from "@/utilities/races.ts";

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

export const ladder_maps_1v1: any = {
    [Race.GDF]: {},
    [Race.Dynasty]: {
        "Altitude": { img: alt_1v1, games: [] },
        "Bridges Out": { img: bo_1v1, games: [] },
        "Overgrown Oassis": { img: oo_1v1, games: [] },
        "Road To Ruin": { img: rtr_1v1, games: [] },
        "Cracking": { img: cra_1v1, games: [] },
        "Emptied Hopes": { img: eh_1v1, games: [] },
        "River Temple": { img: rt_1v1, games: [] },
        "Tropical Logging": { img: tl_1v1, games: [] },
        "Alps": { img: alp_1v1, games: [] },
        "Central Junction": { img: cj_1v1, games: [] },
    }
}
