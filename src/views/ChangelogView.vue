<script setup lang="ts">
import _capitalize from "lodash/capitalize";
import _groupBy from "lodash/groupBy";
import { useRouter } from "vue-router";
import { useChangelogStore } from "@/stores/changelog.ts";
import _sortBy from "lodash/sortBy";
import { Race, raceIcon } from "@/utilities/races.ts";

const router = useRouter();
const store = useChangelogStore();

const races = ["gdf", "dynasty"];
</script>

<template>
  <main style="height: 100vh; overflow-y: auto">
    <v-container fluid class="primary-surface">
      <v-sheet class="pa-6" elevation="10" style="min-height: 90vh">
        <v-row
          ><v-col cols="12" class="mt-5">
            <v-row>
              <v-col cols="8">
                <span
                  class="text-h5 font-weight-bold"
                  style="vertical-align: middle">
                  Upcoming balance changes
                </span>
                <hr color="goldenrod" />
              </v-col>
              <v-col cols="4" class="text-right">
                <v-btn
                  color="primary"
                  variant="tonal"
                  @click="() => router.push('/changelog/admin')"
                  >Admin</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-progress-linear
              indeterminate
              :style="{
                visibility: store.busy || store.pending ? 'visible' : 'hidden',
              }" />
          </v-col>
          <v-col v-for="race in races" cols="12" lg="6">
            <v-col cols="12"
              ><h3>
                <img
                  style="vertical-align: middle"
                  width="30px"
                  :src="
                    raceIcon[race === 'dynasty' ? Race.Dynasty : Race.GDF]
                  " />
                <span class="ml-2" style="font-weight: bold">{{
                  _capitalize(race)
                }}</span>
              </h3></v-col
            >
            <v-col
              v-if="store.upcoming?.[race]?.length"
              cols="12"
              :style="{
                padding: 100,
                border:
                  race === 'dynasty'
                    ? '2px solid rgb(61, 22, 24)'
                    : '2px solid rgb(22, 38, 61)',
                background:
                  race === 'dynasty'
                    ? 'rgba(44, 3, 3, 0.8)'
                    : 'rgba(3, 10, 44, 0.8)',
              }">
              <v-list
                bgColor="transparent"
                v-for="(group, name) in _groupBy(
                  _sortBy(store.upcoming?.[race], 'name'),
                  'name',
                )">
                <v-list-item-title style="font-weight: bold">{{
                  _capitalize(String(name))
                }}</v-list-item-title>
                <v-list-item
                  v-for="item in _sortBy(group, 'type')"
                  density="compact">
                  <v-icon
                    style="vertical-align: middle"
                    v-if="item.type === 'buff'"
                    color="success"
                    icon="mdi-plus" />
                  <v-icon
                    v-if="item.type === 'nerf'"
                    color="error"
                    icon="mdi-minus" />
                  <v-icon
                    v-if="item.type === 'change'"
                    color="warning"
                    icon="mdi-swap-horizontal" />
                  <span style="margin-left: 5px; vertical-align: middle">{{
                    _capitalize(item.description)
                  }}</span>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col v-else class="text-center">
              <h4 v-if="!store.busy && !store.pending">
                No known changes for {{ race }}
              </h4></v-col
            >
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </main>
</template>
