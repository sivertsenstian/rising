<script setup lang="ts">
import MarkdownViewer from "@/components/MarkdownViewer.vue";
import logo from "@/assets/logo.png";

const model = defineModel<string>({
  default: `
  # Hello and welcome to my page!
  Hello, I'm Longjacket. I like to code and make things.
  I also like to play RTS Games. I am good at one of these things.

  I also play warcraft 3! Check out the sister page at <a href="https://www.wc3.no" target="_blank">wc3.no!</a>
  `,
});
</script>

<template>
  <main style="height: 100vh; overflow-y: auto">
    <v-container fluid class="primary-surface">
      <v-sheet class="pa-6" elevation="10" style="min-height: 90vh">
        <v-row>
          <v-col cols="12" class="text-center ma-0 pa-0">
            <img :src="logo" alt="APE SCIENCE - TEMPEST RISING RESEARCH FACILITY" />
            <div class="text-h5 font-weight-bold">
              APE SCIENCE - TEMPEST RISING RESEARCH FACILITY
            </div>
          </v-col>
          <v-col cols="12">
            <markdown-viewer v-model="model" />
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </main>
</template>
