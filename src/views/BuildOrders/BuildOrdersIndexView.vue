<script setup lang="ts">
import buildOfTheWeek_GDF from "@assets/buildorders/botw_gdf.jpg";
import buildOfTheWeek_Dynasty from "@assets/buildorders/botw_dynasty.jpg";
import trending_0 from "@assets/buildorders/trending.jpg";
import trending_1 from "@assets/buildorders/trending_1.jpg";
import trending_2 from "@assets/buildorders/trending_2.jpg";
import trending_3 from "@assets/buildorders/trending_3.jpg";
import trending_4 from "@assets/buildorders/trending_4.jpg";
import trending_5 from "@assets/buildorders/trending_5.jpg";
import moment from "moment";
import { getVersionColor, useBuildsStore } from "@/stores/builds";
import { raceName, raceIcon, Race } from "@/utilities/races";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import _take from "lodash/take";
import _skip from "lodash/drop";

import { useStorage } from "@vueuse/core";
import ViabilitySlider from "@/components/ViabilitySlider.vue";
import _isNil from "lodash/isNil";
import _first from "lodash/first";
import _isEmpty from "lodash/isEmpty";

const itemsPerPage = useStorage("rising/itemsPerPage", 10);
const currentPage = useStorage("rising/currentPage", 1);
const player = useStorage("rising/filterPlayer", Race.Random);
const opponent = useStorage("rising/filterOpponent", Race.Random);
const search = ref();

const builds = useBuildsStore();
const router = useRouter();

const races = [Race.Random, Race.GDF, Race.Dynasty];

const buildOfTheWeek: { [key: number]: string } = {
  [Race.GDF]: buildOfTheWeek_GDF,
  [Race.Dynasty]: buildOfTheWeek_Dynasty,
  [Race.Random]: buildOfTheWeek_GDF,
};

const trending = [
  trending_0,
  trending_1,
  trending_2,
  trending_3,
  trending_4,
  trending_5,
];

// Render helpers
const getRating = (stars: number) => {
  if (stars <= 0) return "grey";
  else if (stars === 1) return `orange`;
  else if (stars < 5) return `orange-lighten-${stars - 1}`;
  else if (stars === 5) return `yellow`;
  else if (stars < 10) return `yellow-lighten-${stars - 5}`;
  else if (stars < 14) return `green-lighten-${4 - (stars - 10)}`;
  else return "green";
};

const items = computed(() => {
  let result = builds.buildorders;

  if (player.value > 0) {
    result = result.filter((b) => b.player === player.value);
  }

  if (opponent.value > 0) {
    result = result.filter(
      (b) => b.opponent === opponent.value || b.opponent === Race.Random,
    );
  }

  return result;
});

const popular = computed(() => {
  const starred = builds.buildorders
    .filter((b) => !_isNil(b.starred))
    .sort((a, b) =>
      moment(b.starred?.toDate ? b.starred.toDate() : b.starred).diff(
        moment(a.starred?.toDate ? a.starred.toDate() : a.starred),
      ),
    );

  return _first(starred);
});

const shuffle = (array: any[], seed: number) => {
  let m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(random(seed) * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
    ++seed;
  }

  return array;
};

const random = (seed: number) => {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
};

const weekly = computed(() => {
  const all = builds.buildorders.filter((b) => b.stars > 0);
  const sorted = shuffle(all, random(moment().isoWeek()));
  return sorted[0]?.id === popular.value?.id ? sorted[1] : sorted[0];
});
</script>

<template>
  <main style="height: 100vh; overflow-y: auto">
    <v-container fluid class="primary-surface">
      <v-sheet class="pa-8" elevation="5" style="min-height: 90vh">
        <v-row
          ><v-col cols="12" class="mt-5">
            <v-row>
              <v-col cols="8">
                <div class="text-h5 font-weight-bold">
                  Tempest Rising Build Orders
                </div>
              </v-col>
              <v-col cols="4" class="text-right">
                <v-btn
                  color="primary"
                  variant="tonal"
                  @click="() => router.push('/buildorders/new')"
                  >Create Build Order</v-btn
                >
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-fade-transition>
                  <v-card
                    v-if="weekly?.id"
                    link
                    :href="`/#/buildorders/${weekly.slug}`">
                    <v-img
                      :src="buildOfTheWeek[weekly.player]"
                      position="top"
                      class="align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="200px"
                      cover>
                      <v-card-title class="text-white font-weight-bold">
                        Build Of The Week:
                        <span class="text-warning">{{
                          weekly.name
                        }}</span></v-card-title
                      >
                    </v-img>
                    <v-card-actions>
                      <div style="white-space: nowrap">
                        <img
                          style="vertical-align: middle"
                          width="25px"
                          :src="raceIcon[weekly.player]" />
                        <span
                          style="vertical-align: text-bottom"
                          class="font-weight-bold mx-1"
                          >vs</span
                        >
                        <img
                          style="vertical-align: middle"
                          width="25px"
                          :src="raceIcon[weekly.opponent]" />
                      </div>
                      <v-btn
                        color="primary"
                        :text="`By ${weekly.originalAuthor?.length ? weekly.originalAuthor : weekly.author}`"></v-btn>
                    </v-card-actions>
                  </v-card>
                </v-fade-transition>
              </v-col>
              <v-col cols="6">
                <v-fade-transition>
                  <v-card
                    v-if="popular?.id"
                    link
                    :href="`/#/buildorders/${popular.slug}`">
                    <v-img
                      :src="
                        _first(
                          shuffle(
                            trending,
                            random(
                              popular.starred?.toDate
                                ? popular.starred.toDate().getTime()
                                : moment(popular.starred).toDate().getTime(),
                            ),
                          ),
                        )
                      "
                      class="align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="200px"
                      position="top"
                      cover>
                      <v-card-title class="text-white font-weight-bold">
                        Currently Trending:
                        <span class="text-warning">{{
                          popular.name
                        }}</span></v-card-title
                      >
                    </v-img>
                    <v-card-actions>
                      <div style="white-space: nowrap">
                        <img
                          style="vertical-align: middle"
                          width="25px"
                          :src="raceIcon[popular.player]" />
                        <span
                          style="vertical-align: text-bottom"
                          class="font-weight-bold mx-1"
                          >vs</span
                        >
                        <img
                          style="vertical-align: middle"
                          width="25px"
                          :src="raceIcon[popular.opponent]" />
                      </div>
                      <v-btn color="primary" :text="`By ${popular.originalAuthor?.length ? popular.originalAuthor : popular.author}`" />
                    </v-card-actions>
                  </v-card>
                </v-fade-transition>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="8">
                <div class="text-subtitle-2 font-weight-bold mt-6 mb-2">
                  Matchup: {{ raceName[player] }} vs. {{ raceName[opponent] }}
                </div>
                <v-btn-toggle rounded="0" variant="plain">
                  <v-btn
                    v-for="race in races"
                    :title="raceName[race]"
                    compact
                    size="small"
                    :active="false"
                    :variant="player === race ? 'text' : 'plain'"
                    :style="{
                      padding: 0,
                    }"
                    @click="
                      () =>
                        player === race
                          ? (player = Race.Random)
                          : (player = race)
                    ">
                    <img
                      :src="raceIcon[race]"
                      :width="player === race ? '45px' : '35px'" />
                  </v-btn>
                </v-btn-toggle>
                <span class="text-overline font-weight-bold mx-3">VS</span>
                <v-btn-toggle rounded="0" variant="plain">
                  <v-btn
                    v-for="race in races"
                    :title="raceName[race]"
                    compact
                    size="small"
                    :active="false"
                    :variant="opponent === race ? 'text' : 'plain'"
                    :style="{
                      padding: 0,
                    }"
                    @click="
                      () =>
                        opponent === race
                          ? (opponent = Race.Random)
                          : (opponent = race)
                    ">
                    <img
                      :src="raceIcon[race]"
                      :width="opponent === race ? '45px' : '35px'" />
                  </v-btn>
                </v-btn-toggle>
              </v-col>
              <v-col cols="4" class="align-content-end">
                <v-text-field
                  v-model="search"
                  label="Search..."
                  prepend-inner-icon="mdi-magnify"
                  variant="underlined"
                  hide-details
                  single-line
                  clearable></v-text-field>
              </v-col>
            </v-row>
            <v-data-table
              v-model:items-per-page="itemsPerPage"
              :loading="builds.pending"
              :search="search"
              :page="currentPage"
              @update:page="(newPage: number) => (currentPage = newPage)"
              hover
              class="build-orders mt-3"
              @click:row="
                (_: any, row: any) => router.push(`/buildorders/${row.item.slug}`)
              "
              :row-props="
                (data) => ({
                  class: { 'work-in-progress': data.item.workInProgress },
                })
              "
              :items="items"
              :headers="[
                { title: 'Name', value: 'name', key: 'name' },
                { title: 'Player', value: 'player', key: 'player' },
                { title: 'Opponent', value: 'opponent', key: 'opponent' },
                { title: 'Rating', value: 'stars', key: 'stars' },
                {
                  title: 'Difficulty',
                  value: 'difficulty',
                  key: 'difficulty',
                },
                {
                  title: 'Viability',
                  value: 'viability',
                  key: 'viability',
                },
                {
                  title: 'Tags',
                  value: 'tags',
                  key: 'tags',
                },
                {
                  title: 'Patch',
                  value: 'version',
                  key: 'version',
                },
                { title: 'Author', value: 'author', key: 'author' },
                {
                  title: 'Updated',
                  value: 'created',
                  key: 'created',
                  sortRaw: (a, b) => {
                    const ax = a?.updated ?? a.created;
                    const bx = b?.updated ?? b.created;

                    const am = (
                      ax?.toDate ? moment(ax.toDate()) : moment(ax)
                    ).valueOf();

                    const bm = (
                      bx?.toDate ? moment(bx.toDate()) : moment(bx)
                    ).valueOf();
                    return am - bm;
                  },
                },
              ]"
              :sort-by="[{ key: 'stars', order: 'desc' }]">
              <template v-slot:top>
                <div
                  title="reset filters"
                  class="text-right text-grey filter"
                  v-if="[player, opponent].some((v) => v !== Race.Random)"
                  @click="
                    () => {
                      player = Race.Random;
                      opponent = Race.Random;
                    }
                  ">
                  <v-icon size="small" icon="mdi-filter" color="primary" />
                  <span class="ml-1" style="vertical-align: bottom"
                    >data is filtered</span
                  >
                </div>
                <div v-else>&nbsp;</div>
              </template>

              <template v-slot:item.name="{ value, item }">
                <v-icon
                  class="mr-2"
                  v-if="item.workInProgress"
                  title="Work In Progress - This build order is still being worked on"
                  color="warning"
                  icon="mdi-hard-hat" />
                <span style="vertical-align: middle">{{ value }}</span>
              </template>

              <template v-slot:item.player="{ value }">
                <div style="white-space: nowrap">
                  <img
                    style="vertical-align: middle"
                    width="25px"
                    :src="raceIcon[value]" />
                  {{ raceName[value] }}
                </div>
              </template>

              <template v-slot:item.opponent="{ value }">
                <div style="white-space: nowrap">
                  <img
                    style="vertical-align: middle"
                    width="25px"
                    :src="raceIcon[value]" />
                  {{ raceName[value] }}
                </div>
              </template>

              <template v-slot:item.stars="{ value }">
                <v-chip
                  variant="tonal"
                  label
                  size="small"
                  :color="getRating(value)"
                  append-icon="mdi-star">
                  {{ value }}
                </v-chip>
              </template>

              <template v-slot:item.difficulty="{ value }">
                <v-chip
                  v-if="value"
                  variant="tonal"
                  label
                  size="small"
                  :title="value"
                  :color="
                    value === builds.difficulties[0]
                      ? 'green'
                      : value === builds.difficulties[1]
                        ? 'orange'
                        : 'red'
                  ">
                  <v-icon icon="mdi-weight-lifter" />
                </v-chip>
              </template>

              <template v-slot:item.viability="{ value }">
                <viability-slider v-if="value" :icon="value" />
              </template>

              <template v-slot:item.tags="{ value }">
                <v-chip-group column variant="tonal">
                  <v-chip
                    v-for="tag in _take(value, 2)"
                    :text="String(tag)"
                    size="small">
                  </v-chip>
                  <v-chip
                    v-if="value?.length > 2"
                    :title="
                      _skip(value, 2)
                        .map((v) => `'${v}'`)
                        .join(', ')
                    "
                    :text="`+${value.length - 2} more`"
                    size="small">
                  </v-chip>
                </v-chip-group>
              </template>
              <template v-slot:item.author="{ value, item }">
                <span style="white-space: nowrap">{{
                  _isEmpty(item.originalAuthor)
                    ? value
                    : `${item.originalAuthor} // Maintainer: ${value}`
                }}</span>
              </template>

              <template v-slot:item.version="{ value }">
                <span :class="getVersionColor(value)">{{ value }}</span>
              </template>

              <template v-slot:item.created="{ value, item }">
                <div style="white-space: nowrap">
                  {{
                    !_isNil(item.updated)
                      ? (item.updated?.toDate
                          ? moment(item.updated.toDate())
                          : moment(item.updated)
                        ).fromNow()
                      : (value?.toDate
                          ? moment(value.toDate())
                          : moment(value)
                        ).fromNow()
                  }}
                </div>
              </template>
              <template v-slot:loading>
                <v-skeleton-loader
                  :type="`table-row@${itemsPerPage}`"></v-skeleton-loader>
              </template>
            </v-data-table> </v-col
        ></v-row>
        <v-row>
          <v-col cols="12">
            <v-alert
              text="
03.05
-------
- Initial release of build order site!

Thanks for testing out the build order builder!
It's still a work in progress, so issues might arise.
If you have any feedback - don't hesitate to contact me @Longjacket in the tempest rising discord <3
"
              title="Recent changes"
              type="info"
              variant="tonal"
              style="white-space: pre-wrap; border: 1px solid"
              border-color="primary"></v-alert>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </main>
</template>

<style lang="css">
.build-orders div.text-grey.filter > span:hover {
  cursor: pointer;
  color: rgba(var(--v-theme-secondary), 1);
}

.v-alert__content {
  height: 250px;
  overflow-y: auto;
}

@media screen and (max-width: 600px) {
  .v-data-table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .v-data-table td {
    border-bottom: thin solid
      rgba(var(--v-border-color), var(--v-border-opacity));
    display: block;
    text-align: right;
    line-height: 48px;
  }

  .v-data-table td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
  }

  .v-data-table td:last-child {
    border-bottom: 0;
  }

  .v-data-table tr:not(:first-child) > td:first-child {
    border-top: medium solid
      rgba(var(--v-border-color), var(--v-border-opacity));
  }
}

tbody tr.work-in-progress {
  td:first-child {
    border-left: 2px solid rgba(var(--v-theme-warning), 1);
  }
  background: rgba(var(--v-theme-warning), 0.1);
}
</style>
