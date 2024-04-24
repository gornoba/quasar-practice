<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      reveal
      elevated
      :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'"
    >
      <q-toolbar>
        <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" />
        <q-toolbar-title>
          <div>
            <span class="q-pr-sm">여기는 헤더</span
            ><q-icon name="ion-logo-youtube"></q-icon>
          </div>
        </q-toolbar-title>
        <q-btn
          flat
          @click="drawerRight = !drawerRight"
          round
          dense
          icon="menu"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawerLeft"
      show-if-above
      :width="200"
      :breakpoint="700"
      elevated
    >
      <q-list>
        <q-item clickable v-close-popup>
          <q-item-section>
            <router-link to="typography">Typography</router-link>
            <router-link to="color-palette">Color Palette</router-link>
            <router-link to="dark-mode">Dark Mode</router-link>
            <router-link to="spacing">Spacing</router-link>
            <router-link to="shadow">Shadow</router-link>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />

      <q-page-sticky expand position="top">
        <q-toolbar class="bg-accent text-white">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <q-toolbar-title> Page Title </q-toolbar-title>
        </q-toolbar>
      </q-page-sticky>

      <q-page-sticky position="top-left" :offset="[18, 18]">
        <q-btn round color="accent" icon="arrow_back" class="rotate-45" />
      </q-page-sticky>
      <q-page-sticky position="top" :offset="[0, 18]">
        <q-btn round color="accent" icon="arrow_back" class="rotate-90" />
      </q-page-sticky>
      <q-page-sticky position="top-right" :offset="[18, 18]">
        <q-btn round color="accent" icon="arrow_upward" class="rotate-45" />
      </q-page-sticky>
      <q-page-sticky position="right" :offset="[18, 0]">
        <q-btn round color="accent" icon="arrow_upward" class="rotate-90" />
      </q-page-sticky>
      <q-page-sticky position="left" :offset="[18, 0]">
        <q-btn round color="accent" icon="arrow_back" />
      </q-page-sticky>
      <q-page-sticky position="bottom-left" :offset="[18, 18]">
        <q-btn round color="accent" icon="arrow_forward" class="rotate-135" />
      </q-page-sticky>
      <q-page-sticky position="bottom" :offset="[0, 18]">
        <q-btn round color="accent" icon="arrow_forward" class="rotate-90" />
      </q-page-sticky>
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn round color="accent" icon="arrow_forward" class="rotate-45" />
      </q-page-sticky>
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-3 text-primary">
      여기는 푸터 <q-icon name="laptop_chromebook" />
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const drawerLeft = ref(false);
const drawerRight = ref(false);
</script>
