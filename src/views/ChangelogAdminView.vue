<script setup lang="ts">
import { ref } from "vue";

import { useChangelogStore } from "@/stores/changelog.ts";
import router from "@/router";
import _sortBy from "lodash/sortBy";
import _first from "lodash/first";

const store = useChangelogStore();

const secret = ref<string>("");
const claimed = ref<boolean>();

const confirm = (msg: string) => window.confirm(msg);

const types = [
  { text: "Buff", value: "buff" },
  { text: "Nerf", value: "nerf" },
  { text: "Change", value: "change" },
];

const races = ["gdf", "dynasty"];
</script>

<template>
  <main style="height: 100vh; overflow-y: auto">
    <v-container fluid style="opacity: 0.9">
      <v-sheet
        class="pa-8"
        elevation="5"
        style="min-height: 90vh"
        v-if="store.canEdit()">
        <v-btn
          prepend-icon="mdi-arrow-left"
          color="secondary"
          variant="text"
          @click="() => router.push('/changelog')"
          >Go Back</v-btn
        >
        <v-form>
          <v-row
            ><v-col cols="12" class="mt-5">
              <v-row>
                <v-col cols="8">
                  <span
                    class="text-h5 font-weight-bold"
                    style="vertical-align: middle">
                    Administrate changelog
                  </span>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-progress-linear
                indeterminate
                :style="{
                  visibility:
                    store.busy || store.pending ? 'visible' : 'hidden',
                }" />
            </v-col>
            <v-col cols="6" v-for="race in races">
              <v-col cols="12">
                <v-table fixed-header density="comfortable">
                  <thead>
                    <tr>
                      <th class="text-center" style="width: 10px">#</th>
                      <th>Name</th>
                      <th style="min-width: 150px">Description</th>
                      <th>Type</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tr
                    v-for="(element, index) in _sortBy(
                      store.upcoming?.[race] ?? [],
                      ['created', 'name', 'type'],
                    )">
                    <td class="text-center">
                      <strong style="position: relative; bottom: 10px">{{
                        index + 1
                      }}</strong>
                    </td>
                    <td>
                      <v-text-field
                        variant="filled"
                        @blur="() => store.update(store.upcoming)"
                        v-model="element.name"></v-text-field>
                    </td>
                    <td>
                      <v-text-field
                        variant="filled"
                        @blur="() => store.update(store.upcoming)"
                        v-model="element.description"></v-text-field>
                    </td>
                    <td>
                      <v-select
                        variant="filled"
                        :items="types"
                        item-title="text"
                        item-value="value"
                        label="Type"
                        v-model="element.type"
                        @update:model-value="
                          () => store.update(store.upcoming)
                        " />
                    </td>
                    <td>
                      <v-btn
                        title="Delete Change"
                        icon="mdi-delete-alert-outline"
                        color="red-lighten-1"
                        variant="text"
                        size="large"
                        @click="
                          () => {
                            const d = confirm(
                              `This will remove the change '${element.description}'. Are you sure?`,
                            );
                            if (d) {
                              store.remove(store.upcoming, race, element);
                            }
                          }
                        " />
                    </td>
                  </tr>
                </v-table>
              </v-col>
              <v-col cols="12" class="text-center">
                <v-btn
                  @click="() => store.add(store.upcoming, race)"
                  color="success"
                  variant="tonal">
                  Add {{ race }} Change
                </v-btn>
              </v-col>
            </v-col>
          </v-row>
        </v-form>
      </v-sheet>

      <v-sheet class="pa-8" elevation="5" style="min-height: 90vh" v-else>
        <v-btn
          prepend-icon="mdi-arrow-left"
          color="secondary"
          variant="text"
          @click="() => router.push('/changelog')"
          >Go Back</v-btn
        >
        <v-form>
          <v-row
            ><v-col cols="8">
              <div class="text-h5 font-weight-bold">
                Changelog - Administrator
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="text-center">
              <v-icon
                style="font-size: 200px; width: 200px; height: 200px"
                size="x-large"
                color="grey"
                icon="mdi-alert-decagram-outline" />
              <div class="text-h4 text-red-lighten-2 my-3">
                Unable to administrate CHANGELOG
              </div>
              <div class="text-h5 text-grey">
                You can only administrate the CHANGELOG if you have SPECIAL
                PERMITION
              </div>
            </v-col>
            <v-col cols="12" class="text-center text-grey mt-5">
              <v-col cols="12">
                If you believe <i>you</i> are worthy, you can attempt to claim
                it.
              </v-col>
              <v-col cols="4" offset="4">
                <v-text-field
                  hide-details
                  label="Secret"
                  density="compact"
                  variant="underlined"
                  v-model="secret">
                  <template v-slot:append>
                    <v-btn
                      @click="async () => (claimed = await store.claim(secret))"
                      color="success"
                      variant="tonal"
                      prepend-icon="mdi-shield-lock-open-outline">
                      Claim
                    </v-btn>
                  </template>
                </v-text-field>
              </v-col>
            </v-col>
          </v-row>
        </v-form>
      </v-sheet>
    </v-container>
  </main>
</template>
