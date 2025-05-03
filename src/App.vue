<script setup lang="ts">
import { useDisplay, useTheme } from "vuetify";
import { RouterView, useRoute } from "vue-router";
import bgLightUrl from "@/assets/bg_light.jpg";
import bgDarkUrl from "@/assets/bg_dark.jpg";
import logo from "@/assets/logo.png";
import { computed, ref } from "vue";
const { mobile } = useDisplay();

const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}

const route = useRoute();

const drawer = ref(!mobile.value);
</script>

<template>
  <v-app>
    <v-app-bar v-if="$vuetify.display.mobile">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
      <v-toolbar-title>Ape Science</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
        expand-on-hover
        rail
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined">
      <v-list>
        <v-list-item
            :prepend-avatar="logo"
            title="APE SCIENCE"
            subtitle="Tempest Rising Research Facility"></v-list-item>
      </v-list>
      <v-list-item
          color="green"
          prepend-icon="mdi-castle"
          title="Build Orders"
          router
          to="/buildorders"></v-list-item>
      <v-list-item
          color="green"
          prepend-icon="mdi-handshake-outline"
          title="About"
          router
          to="/about"></v-list-item>
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-item
            color="yellow"
            prepend-icon="mdi-lightbulb"
            :title="isDark ? 'Light' : 'Dark'"
            @click="toggleTheme">
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <div
          class="container"
          :style="{
          overflow: 'hidden',
          background: 'url(' + (isDark ? bgDarkUrl : bgLightUrl) + ')',
          backgroundPosition: 'center center',
        }">
        <RouterView :key="route.fullPath" />
      </div>
    </v-main>
  </v-app>
</template>

<style scoped>
div.container {
  height: 100vh;
  background-attachment: fixed !important;
  background-size: cover !important;
}

.v-list-group__items .v-list-item {
  padding-inline-start: 15px !important;
}
</style>
