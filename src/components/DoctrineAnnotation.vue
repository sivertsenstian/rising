<script setup lang="ts">
import { Race, raceName } from "@/utilities/races.ts";

interface Props {
  race: Race;
  doctrine?: any;
}
defineProps<Props>();
</script>

<template>
  <v-menu
    v-if="doctrine"
    :open-on-hover="true"
    :close-on-content-click="false"
    open-delay="750"
    location="end"
    max-width="400px">
    <template v-slot:activator="{ props }">
      <div v-bind="props"><slot></slot></div>
    </template>

    <v-card min-width="300">
      <v-list>
        <v-list-item
          density="compact"
          :subtitle="`${raceName[race]} Doctrine`"
          :title="doctrine.name">
          <template v-slot:prepend>
            <v-btn
              :class="`text-${race === Race.Dynasty ? 'red' : 'blue'}`"
              icon="mdi-information-outline"
              variant="text"></v-btn>
          </template>
        </v-list-item>
      </v-list>
      <v-divider />

      <section class="pa-5" style="white-space: pre-line">
        {{ doctrine.description }}
      </section>
      <v-divider />

      <section
        class="pa-5"
        style="white-space: pre-line"
        v-if="doctrine.units.length">
        <strong>Affects:</strong> {{ doctrine.units.join(", ") }}
      </section>
      <v-divider v-if="doctrine.units.length" />
    </v-card>
  </v-menu>
</template>
