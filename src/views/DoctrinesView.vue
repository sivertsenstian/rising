<script setup lang="ts">
import credits from "@/assets/doctrines/credits.png";
import time from "@/assets/doctrines/time.png";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
momentDurationFormatSetup(moment);

import dyn_1_1 from "@/assets/doctrines/dynasty/1_1.png";
import dyn_1_2 from "@/assets/doctrines/dynasty/1_2.png";
import dyn_1_3 from "@/assets/doctrines/dynasty/1_3.png";
import dyn_1_4 from "@/assets/doctrines/dynasty/1_4.png";
import dyn_1_5 from "@/assets/doctrines/dynasty/1_5.png";
import dyn_1_6 from "@/assets/doctrines/dynasty/1_6.png";

import dyn_2_1 from "@/assets/doctrines/dynasty/2_1.png";
import dyn_2_2 from "@/assets/doctrines/dynasty/2_2.png";
import dyn_2_3 from "@/assets/doctrines/dynasty/2_3.png";
import dyn_2_4 from "@/assets/doctrines/dynasty/2_4.png";
import dyn_2_5 from "@/assets/doctrines/dynasty/2_5.png";
import dyn_2_6 from "@/assets/doctrines/dynasty/2_6.png";

import dyn_3_1 from "@/assets/doctrines/dynasty/3_1.png";
import dyn_3_2 from "@/assets/doctrines/dynasty/3_2.png";
import dyn_3_3 from "@/assets/doctrines/dynasty/3_3.png";
import dyn_3_4 from "@/assets/doctrines/dynasty/3_4.png";
import dyn_3_5 from "@/assets/doctrines/dynasty/3_5.png";
import dyn_3_6 from "@/assets/doctrines/dynasty/3_6.png";

import gdf_1_1 from "@/assets/doctrines/gdf/1_1.png";
import gdf_1_2 from "@/assets/doctrines/gdf/1_2.png";
import gdf_1_3 from "@/assets/doctrines/gdf/1_3.png";
import gdf_1_4 from "@/assets/doctrines/gdf/1_4.png";
import gdf_1_5 from "@/assets/doctrines/gdf/1_5.png";
import gdf_1_6 from "@/assets/doctrines/gdf/1_6.png";

import gdf_2_1 from "@/assets/doctrines/gdf/2_1.png";
import gdf_2_2 from "@/assets/doctrines/gdf/2_2.png";
import gdf_2_3 from "@/assets/doctrines/gdf/2_3.png";
import gdf_2_4 from "@/assets/doctrines/gdf/2_4.png";
import gdf_2_5 from "@/assets/doctrines/gdf/2_5.png";
import gdf_2_6 from "@/assets/doctrines/gdf/2_6.png";

import gdf_3_1 from "@/assets/doctrines/gdf/3_1.png";
import gdf_3_2 from "@/assets/doctrines/gdf/3_2.png";
import gdf_3_3 from "@/assets/doctrines/gdf/3_3.png";
import gdf_3_4 from "@/assets/doctrines/gdf/3_4.png";
import gdf_3_5 from "@/assets/doctrines/gdf/3_5.png";
import gdf_3_6 from "@/assets/doctrines/gdf/3_6.png";

import { ref } from "vue";
import { Race, raceIcon, raceName } from "@/utilities/races.ts";
import { useStorage } from "@vueuse/core";
import DoctrineAnnotation from "@/components/DoctrineAnnotation.vue";

const images: any = {
  [Race.Dynasty]: [
    [dyn_1_1, dyn_1_2, dyn_1_3, dyn_1_4, dyn_1_5, dyn_1_6],
    [dyn_2_1, dyn_2_2, dyn_2_3, dyn_2_4, dyn_2_5, dyn_2_6],
    [dyn_3_1, dyn_3_2, dyn_3_3, dyn_3_4, dyn_3_5, dyn_3_6],
  ],

  [Race.GDF]: [
    [gdf_1_1, gdf_1_2, gdf_1_3, gdf_1_4, gdf_1_5, gdf_1_6],
    [gdf_2_1, gdf_2_2, gdf_2_3, gdf_2_4, gdf_2_5, gdf_2_6],
    [gdf_3_1, gdf_3_2, gdf_3_3, gdf_3_4, gdf_3_5, gdf_3_6],
  ],
};

const data: any = {
  [Race.GDF]: [
    {
      name: "Comms",
      description:
        "The Comms tree enhances the combat capabilities of GDF units and structures.",
      items: [
        {
          name: "Armored Communicators",
          description:
            "All units and buildings which provide Comms have 40% increased health. The Barracks now also produces Comms.",
          units: [
            "GDF Barracks",
            "Air Control Tower",
            "Comms Rig",
            "Support Beacon",
            "Drone Command Unit",
            "Comms Officer",
          ],
          credits: 800,
          time: 40,
        },
        {
          name: "Boosted Comms",
          description:
            "Comms range is improved 50% for all Comms providers. The range of weapons or effects which produce Marking is increased 30%.",
          units: [
            "Drone Command Unit",
            "Comms Rig",
            "Comms Officer",
            "Air Control Tower",
            "Support Beacon",
            "Sentinel",
          ],
          credits: 800,
          time: 40,
        },
        {
          name: "Manufacturing",
          description:
            "All Drones have 50% more HP. All Drones rebuild 25% faster and gain TR Ability Networked Icon.png Networked.",
          units: [
            "Assassin Drone",
            "Combat Drone",
            "Brigand Drone",
            "Spy Drone",
          ],
          credits: 1500,
          time: 60,
        },
        {
          name: "Helmet Communicators",
          description:
            "All infantry units have Comms bonus unless the player is in Power Low Power mode.",
          units: [
            "Comms Officer",
            "Drone Assassin",
            "Drone Mauler",
            "Drone Operator",
            "Engineer",
            "Grenadier",
            "Field Scout",
            "Riot Medic",
            "Riot Trooper",
            "Sniper",
            "Hijacker",
          ],
          credits: 1500,
          time: 60,
        },
        {
          name: "EM Interference",
          description: "Marked enemies are now Silenced entirely. ",
          units: [
            "Sentinel",
            "Drone Command Unit",
            "Comms Officer",
            "Support Beacon",
            "Marking Mine",
          ],
          credits: 3000,
          time: 80,
        },
        {
          name: "Ambush Protocols",
          description:
            "All Drones are invisible until they attack; all units that passively stealth are now stealthed until they attack. Reduces the Intel cost of stealth abilities by 30%.",
          units: [
            "Combat Drone",
            "Brigand Drone",
            "Drone Mauler",
            "Scrambler",
            "Hijacker",
            "Assassin Drone",
            "Spy Drone",
            "Skycrane",
            "Condor",
          ],
          credits: 3000,
          time: 80,
        },
      ],
    },

    {
      name: "Mobility",
      description:
        "The Mobility tree is geared towards map control and rapid response to threats.",
      items: [
        {
          name: "Rapid Deployment",
          description:
            "Structures are called down (built) 20% faster and return 50% bonus credits when sold.",
          units: [],
          credits: 800,
          time: 40,
        },
        {
          name: "Resistant Treads",
          description:
            "Harvesters move 15% faster, gain 20% more health, and heal 5 points per 2 seconds.",
          units: [],
          credits: 800,
          time: 40,
        },
        {
          name: "Comms Rig Antenna",
          description:
            "The Comms Rig now generates a Build Radius when deployed.",
          units: [],
          credits: 1500,
          time: 60,
        },
        {
          name: "Triangulation",
          description:
            "The Support Beacon and all building sites have 50% additional health; the Beacon now lasts twice as long. The cost to place building sites is reduced by 50%. All GDF infantry now drop a Marking Mine when they die. Marking Mine damage is doubled. ",
          units: [
            "Field Scout",
            "Drone Operator",
            "Engineer",
            "Grenadier",
            "Riot Trooper",
            "Drone Mauler",
            "Drone Assassin",
            "Riot Medic",
            "Sniper",
            "Hijacker",
            "Comms Officer",
          ],
          credits: 1500,
          time: 60,
        },
        {
          name: "Aircraft Ascendance",
          description:
            "Aircraft have 100% more ammo and reload 50% faster. The Tempest Air Strike includes 2 additional jets.",
          units: ["Queller", "Peacekeeper", "Condor"],
          credits: 3000,
          time: 80,
        },
        {
          name: "Logistic Networks",
          description:
            "Support powers have 33% decreased cooldown and 33% decreased cost. Riot Drop also calls in another Riot Van with 1 Engineer, 2 Riot Troopers, and a Drone Operator.",
          units: [],
          credits: 3000,
          time: 80,
        },
      ],
    },

    {
      name: "Intel",
      description:
        "Intel tree is focused on improving the collection of Intel.",
      items: [
        {
          name: "Advanced Data Collection",
          description:
            "If Marking expires on an enemy unit without it dying, the player will gain Intel.",
          units: [],
          credits: 800,
          time: 40,
        },
        {
          name: "Pinpoint Weaknesses",
          description:
            "All lasers have 20% increased damage and tag enemies as being Marked. Field Scouts gain Networked.",
          units: ["Shieldmaiden", "Queller", "Comms Officer", "Laser Turret"],
          credits: 800,
          time: 40,
        },
        {
          name: "Efficient Intel",
          description:
            "Reduces the cooldown of any unit ability which costs Intel by 20%. Reduces the build time of any unit of building which costs Intel by 30% (stacks with other effects).",
          units: [],
          credits: 1500,
          time: 60,
        },
        {
          name: "Virulent Scanners",
          description:
            "Marked enemies attack 15% slower and take 15% additional damage from all sources.",
          units: [],
          credits: 1500,
          time: 60,
        },
        {
          name: "Investment Durability",
          description:
            "Any unit or structure which costs Intel has 25% more health.",
          units: [
            "Advanced Power Plant",
            "Haywire Turret",
            "Satellite Uplink",
            "Data Core",
            "Tempest Artillery",
            "Trebuchet",
            "Comms Officer",
            "Comms Rig",
            "Condor",
            "Drone Command Unit",
            "Drone Assassin",
            "Drone Mauler",
            "Riot Medic",
            "Riot Trooper",
            "Scrambler",
            "Shieldmaiden",
            "Sniper",
            "Hijacker",
          ],
          credits: 3000,
          time: 80,
        },
        {
          name: "Regional Networking",
          description:
            "Networked weapons deal an additional 20% damage against Marked Marked units and gain an additional 20% range. Owned units that die generate Intel for the player.",
          units: [
            "Drone Mauler",
            "Trebuchet",
            "Tempest Artillery",
            "Peacekeeper",
            "Hunter Tank",
          ],
          credits: 3000,
          time: 80,
        },
      ],
    },
  ],
  [Race.Dynasty]: [
    {
      name: "Logistics",
      description: "The Logistics tree is focused on economical growth.",
      items: [
        {
          name: "Harvester Manufacturing",
          description:
            "Harvester Wheels gain 30% health, rebuild 30% faster, and self-repair outside of combat at a rate of 5 health every 2 seconds.",
          units: ["Harvester Wheels"],
          credits: 800,
          time: 40,
        },
        {
          name: "Power Management",
          description: "The effects of all Plan Plans are increased by 30%.",
          units: [],
          credits: 800,
          time: 40,
        },
        {
          name: "Logistics Improvements",
          description:
            "Salvage Centers can convert back into Salvage Vans. Units and vehicles which repair gain 15% health (except Technicians)",
          units: [],
          credits: 1500,
          time: 60,
        },
        {
          name: "Energetic Enhancements",
          description:
            "The beneficial effects of Distribution Mode and Tempest Dynamos are increased by 20%.)",
          units: [],
          credits: 1500,
          time: 60,
        },
        {
          name: "Manpower",
          description:
            "While at least 1 Plan Plan is running, ground vehicles (aside from the Pillager) will spawn an infantry unit when they die. Most vehicles will spawn a Dynasty Guard, though the Voltaic Tank and Tempest Sphere will instead spawn an Assault Gunner. This will not function if the player is above their Population population cap or if the player is running no Plans. ",
          units: [
            "Boar",
            "MCV",
            "Porcupine MLRS",
            "Havoc",
            "Salvage Van",
            "Tempest Rig",
            "Voltaic Tank",
            "Tempest Sphere",
          ],
          credits: 3000,
          time: 80,
        },
        {
          name: "Planned Economies",
          description:
            "Each Plan Plan you have running will generate Credits 150 every 5 seconds. ",
          units: [],
          credits: 3000,
          time: 80,
        },
      ],
    },

    {
      name: "Aggression",
      description: "The Aggression favours offensive and harassment tactics. ",
      items: [
        {
          name: "Body Armor",
          description: "Infantry health is increased by 15%.",
          units: [
            "Assault Gunner",
            "Commando",
            "Demolitionist",
            "Dynasty Guard",
            "Ignitor",
            "Line Officer",
            "Missile Trooper",
            "Operative",
            "Physicist",
            "Technician",
            "Machinist",
          ],
          credits: 800,
          time: 40,
        },
        {
          name: "Training Regimen",
          description: "All units gain Veterancy 40% faster.",
          units: [],
          credits: 800,
          time: 40,
        },
        {
          name: "Stockpiles",
          description:
            "All units with ammo now have 50% more ammo and deal 15% more damage.",
          units: ["Dragonfly", "Matchstick", "Porcupine MLRS"],
          credits: 1500,
          time: 60,
        },
        {
          name: "Empowered Dynamos",
          description:
            "Tempest Dynamos now also reduces damage taken from enemy units by 40% while active.",
          units: [
            "Havoc",
            "Leveler",
            "Assault Gunner",
            "Machinist",
            "Physicist",
            "Voltaic Tank",
          ],
          credits: 1500,
          time: 60,
        },
        {
          name: "Officers",
          description:
            "Specialist creditss are reduced by 30%. Specialist/Commandos deal 30% more DPS. Specialist ability cooldowns are reduced by 30%.",
          units: [
            "Commando",
            "Machinist",
            "Operative",
            "Physicist",
            "Line Officer",
          ],
          credits: 3000,
          time: 80,
        },
        {
          name: "Leading the Charge",
          description: "All vehicles have 25% increased health.",
          units: [
            "Boar",
            "Harvester Wheel",
            "MCV",
            "Pillager",
            "Porcupine MLRS",
            "Havoc",
            "Salvage Van",
            "Tempest Rig",
            "Tempest Sphere",
            "Voltaic Tank",
          ],
          credits: 3000,
          time: 80,
        },
      ],
    },

    {
      name: "Security",
      description: "The Security tree tree favours defensive tactics.",
      items: [
        {
          name: "Ordnance Manufacturing",
          description: "Explosive areas of effect are increased by 50%.",
          units: [
            "Missile Turret",
            "Leveler",
            "Matchstick",
            "Porcupine MLRS",
            "Havoc",
            "Machine Shop Defender",
            "Physicist",
            "Anti-Tank Mine",
          ],
          credits: 800,
          time: 40,
        },
        {
          name: "Extended Life Generators",
          description:
            "Distribution Mode now deals 50% less damage to structures. Power Plants have 30% bonus health and Build Radius range.",
          units: [],
          credits: 800,
          time: 40,
        },
        {
          name: "Minefields",
          description:
            "All ground vehicles and turrets drop a mine when they die.",
          units: [
            "Boar",
            "Harvester Wheel",
            "MCV",
            "Pillager",
            "Porcupine MLRS",
            "Havoc",
            "Salvage Van",
            "Tempest Rig",
            "Tempest Sphere",
            "Voltaic Tank",
            "Flame Turret",
            "Rocket Turret",
            "SAM Site",
            "Voltaic Railgun",
            "Sensor Array",
          ],
          credits: 1500,
          time: 60,
        },
        {
          name: "Oversight",
          description:
            "All air units gain 30% health and gain 20% bonus sight range. ",
          units: ["Leveler", "Hammerhand", "Dragonfly", "Matchstick"],
          credits: 1500,
          time: 60,
        },
        {
          name: "Defensive Operations",
          description:
            "All structures now heal over time when not under attack. All structures have 25% more health. Non-turret structures that die or are sold now dispense infantry units.",
          units: [],
          credits: 3000,
          time: 80,
        },
        {
          name: "Frontline Construction",
          description:
            "MCV and Salvage Van credits is reduced 25%. MCV and Salvage Van speeds are increased 25%. Power Plants, Construction Yards, and Salvage Centers gain 75% Build Radius. All buildings are built 15% faster (this stacks with other effects). ",
          units: [],
          credits: 3000,
          time: 80,
        },
      ],
    },
  ],
};

import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const query = String(route.query.data ?? "");
let q = [];
try {
  q = JSON.parse(window.atob(query));
} catch (e) {
  q = [];
}

const copy = () => {
  const snapshot = {
    r: raceTab.value,
    p: points.value,
    t: research.value,
    s: selected.value,
  };
  const text = window.btoa(JSON.stringify(snapshot));
  navigator.clipboard.writeText(
    `${window.location.origin}/#/doctrines?data=${text}`,
  );
};

const raceTab = useStorage("tempest/factionDoctrineCalculator", Race.Dynasty);
const races = [Race.GDF, Race.Dynasty];

const selected = ref<string[]>([]);
const points = ref(11);
const research = ref(0);

const clear = () => {
  router.replace({
    ...router.currentRoute.value,
    query: undefined,
  });
};

const reset = (s = [], p = 11, r = 0) => {
  // router.replace({
  //   ...router.currentRoute.value,
  //   query: undefined,
  // });

  selected.value = s;
  points.value = p;
  research.value = r;
};

if (q?.s?.length) {
  console.log("reset stored!");

  raceTab.value = q.r;
  reset(q.s, q.p, q.t);
}
</script>

<template>
  <main style="height: 100vh; overflow-y: auto">
    <v-container fluid class="primary-surface">
      <v-sheet class="pa-6" elevation="10" style="min-height: 90vh">
        <v-row>
          <v-col cols="12">
            <div class="text-h3">Doctrine calculator</div>
            <hr />
          </v-col>
        </v-row>
        <v-tabs
          fixed-tabs
          v-model="raceTab"
          slider-color="#daa520"
          @update:model-value="() => reset()"
          class="mb-5">
          <v-tab class="text-none" v-for="race in races" :value="race">
            <img
              style="vertical-align: middle"
              width="30px"
              :src="raceIcon[race]" />
            <span
              class="text-subtitle-2 ml-1 font-weight-bold"
              style="vertical-align: middle"
              >{{ raceName[race] }}</span
            >
          </v-tab>
        </v-tabs>

        <v-row>
          <v-col>
            <table
              :class="{
                information: true,
                'mx-auto': true,
                dynasty: raceTab === Race.Dynasty,
                gdf: raceTab === Race.GDF,
              }"
              style="padding: 10px">
              <tbody>
                <tr>
                  <td>
                    <v-snackbar
                      :timeout="2000"
                      color="primary"
                      :rounded="false"
                      variant="tonal"
                      class="text-center">
                      <template v-slot:activator="{ props }">
                        <v-btn
                          v-bind="props"
                          block
                          :rounded="false"
                          variant="tonal"
                          :color="
                            raceTab === Race.Dynasty ? 'error' : 'primary'
                          "
                          @click="copy"
                          >Create a shareable link</v-btn
                        >
                      </template>
                      Link to doctrines was <strong>copied</strong> to clipboard
                    </v-snackbar>
                  </td>
                  <td
                    class="text-right"
                    style="font-size: 14px; font-weight: bold; width: 60%">
                    Time to research:
                    <span style="color: cyan; font-weight: bolder"
                      >{{
                        research > 0
                          ? `${(
                              moment.duration(research, "seconds") as any
                            ).format("mm:ss")}`
                          : "-"
                      }}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <v-btn
                      block
                      :rounded="false"
                      variant="tonal"
                      :color="raceTab === Race.Dynasty ? 'error' : 'primary'"
                      @click="() => clear()"
                      >Clear choices</v-btn
                    >
                  </td>
                  <td
                    class="text-right"
                    style="font-size: 14px; font-weight: bold">
                    Points left:
                    <span style="color: limegreen; font-weight: bolder">{{
                      points
                    }}</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table
              :class="{
                'mx-auto': true,
                dynasty: raceTab === Race.Dynasty,
                gdf: raceTab === Race.GDF,
              }">
              <thead>
                <tr>
                  <th
                    class="text-center text-subtitle-1"
                    style="font-weight: bolder; border-bottom: 3px solid white"
                    v-for="doctrines in data?.[raceTab]">
                    {{ doctrines.name }}
                  </th>
                </tr>
              </thead>
              <tr v-for="(_, i) in data?.[raceTab]?.[0]?.items">
                <td
                  v-for="(doctrine, d) in data?.[raceTab]"
                  :class="{
                    item: true,
                    unavailable:
                      (!selected.some((v) => v === `${d}${i}`) &&
                        points === 0) ||
                      (points > 0 &&
                        i > 0 &&
                        !selected.some((v) => v === `${d}${i - 1}`)),
                    selected: selected.some((v) => v === `${d}${i}`),
                  }">
                  <doctrine-annotation
                    :race="raceTab"
                    :doctrine="doctrine.items[i]">
                    <img
                      class="doctrine"
                      width="75px"
                      :src="images?.[raceTab][d][i]"
                      @click="
                        () => {
                          const exists = selected.some((v) => v === `${d}${i}`);
                          const allowed_add =
                            points > 0 &&
                            (i === 0 ||
                              selected.some((v) => v === `${d}${i - 1}`));

                          const allowed_remove = !selected.some(
                            (v) => v === `${d}${i + 1}`,
                          );
                          if (!exists && allowed_add) {
                            selected.push(`${d}${i}`);
                            points--;
                            research += doctrine.items[i].time;
                          } else if (exists && allowed_remove) {
                            selected = selected.filter((v) => v !== `${d}${i}`);
                            points++;
                            research -= doctrine.items[i].time;
                          }
                        }
                      " />
                    <span
                      v-if="selected.some((v) => v === `${d}${i}`)"
                      style="
                        color: limegreen;
                        position: relative;
                        bottom: 75px;
                        left: 0px;
                        font-size: 10px;
                        font-weight: bold;
                        width: 0;
                        height: 0;
                        display: inline-block;
                      "
                      >{{ selected.indexOf(`${d}${i}`) + 1 }}</span
                    >
                    <span class="item-name">{{ doctrine.items[i].name }}</span>
                    <span class="item-name">
                      <span style="vertical-align: middle"
                        ><img width="8px" :src="credits"
                      /></span>
                      <span
                        class="mr-2"
                        style="
                          vertical-align: middle;
                          position: relative;
                          bottom: 0.41px;
                        "
                        >{{ doctrine.items[i].credits }}</span
                      >

                      <span style="vertical-align: middle"
                        ><img width="8px" :src="time"
                      /></span>
                      <span
                        style="
                          margin-left: 3px;
                          vertical-align: middle;
                          position: relative;
                          bottom: 0.41px;
                        ">
                        {{
                          (
                            moment.duration(
                              doctrine.items[i].time,
                              "seconds",
                            ) as any
                          ).format("mm:ss")
                        }}
                      </span>
                    </span>
                  </doctrine-annotation>
                </td>
              </tr>
            </table>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </main>
</template>

<style scoped>
table {
  width: 465px;

  &.dynasty {
    background-color: rgba(44, 3, 3, 0.8);
    border: 1px solid rgb(61, 22, 24);

    .selected {
      img.doctrine {
        background-color: rgba(109, 35, 35, 0.64);
        border-radius: 10px;
        border: 2px solid rgba(194, 12, 12, 0.7);
        filter: brightness(1);
        opacity: 1;
      }
    }
  }

  &.gdf {
    background-color: rgba(3, 10, 44, 0.8);
    border: 1px solid rgb(22, 38, 61);

    .selected {
      img.doctrine {
        background-color: rgba(35, 58, 109, 0.64);
        border-radius: 10px;
        border: 2px solid rgba(12, 85, 194, 0.7);
        filter: brightness(1);
        opacity: 1;
      }
    }
  }

  transition:
    background-color 0.2s,
    border 0.3s;
  padding: 0;

  &:not(.information) {
    border-spacing: 30px;
  }

  td {
    text-align: center;
  }
}

.item img.doctrine {
  cursor: pointer;

  background-color: rgba(38, 38, 38, 0.46);
  border-radius: 10px;
  border: 2px solid #b5b5b5b2;

  filter: brightness(0.8);
  opacity: 1;

  transition:
    opacity 0.3s,
    filter 0.3s,
    background-color 0.3s,
    border 0.3s;

  &:not(.unavailable) {
    &:hover {
      filter: brightness(1.2);
      opacity: 0.8;
    }
  }
}

.unavailable {
  color: #909090;

  img.doctrine {
    cursor: not-allowed;

    background-color: rgba(66, 66, 66, 0.64);
    border-radius: 10px;
    border: 2px solid rgba(122, 115, 115, 0.7);
    filter: brightness(0.5);
    opacity: 0.8;
  }
}

.item-name {
  display: block;
  font-size: 10px;
  font-weight: bold;
  white-space: nowrap;
}
</style>
