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

      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[18, 18]"
      >
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
      </q-page-scroller>
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
