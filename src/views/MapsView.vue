<script setup lang="ts">
import map_missing from "@/assets/laddermaps/missing.png";

import { Race, raceIcon, raceName } from "@/utilities/races.ts";
import { useStorage } from "@vueuse/core";
import { ladder_maps_1v1 } from "@/utilities/maps.ts";
import _isEmpty from "lodash/isEmpty";

const raceTab = useStorage("tempest/factionLadderMaps", Race.Dynasty);
const races = [Race.GDF, Race.Dynasty];

const open = (path: string) => window.open(path, "_blank");
</script>

<template>
  <main style="height: 100vh; overflow-y: auto">
    <v-container fluid class="primary-surface">
      <v-sheet class="pa-6" elevation="10" style="min-height: 90vh">
        <v-row>
          <v-col cols="12">
            <div class="text-h3">1v1 Ladder Maps</div>
            <hr />
          </v-col>
        </v-row>
        <v-tabs
          fixed-tabs
          v-model="raceTab"
          slider-color="#daa520"
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
        <v-window v-model="raceTab">
          <v-window-item v-for="race in races" :value="race">
            <v-row>
              <v-col
                cols="12"
                md="11"
                class="mx-auto"
                style="min-height: 50vh"
                v-if="_isEmpty(ladder_maps_1v1[race])">
                <v-row>
                  <v-col cols="12" class="text-center mt-5">
                    <img
                      :src="map_missing"
                      width="300"
                      style="border: 1px solid white" />
                  </v-col>
                  <v-col cols="12" class="text-center">
                    <h2 style="color: goldenrod; white-space: pre-line">
                      Useful map information for 1v1 '{{ raceName[race] }}'
                      ladder maps are not available yet. Tune in later!
                    </h2>
                    <h3>
                      If you want to help: please contact @Longjacket on the
                      official
                      <a href="https://discord.gg/tempestrising" target="_blank"
                        >tempest rising</a
                      >
                      discord!
                    </h3>
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                v-else
                cols="12"
                sm="6"
                md="5"
                lg="4"
                xl="3"
                xxl="2"
                v-for="(map, name) in ladder_maps_1v1[race]">
                <v-row>
                  <v-col cols="12"
                    ><div class="text-h5">{{ name }}</div></v-col
                  >
                  <v-col cols="12">
                    <img
                      @click="() => open(map.img)"
                      :src="map.img"
                      width="100%"
                      class="hover my-auto"
                      style="border: 1px solid goldenrod; cursor: pointer" />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
      </v-sheet>
    </v-container>
  </main>
</template>

<style scoped>
.hover {
  filter: brightness(1.2);
  &:hover {
    filter: brightness(1.5);
  }
}
</style>
