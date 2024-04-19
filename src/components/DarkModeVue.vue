<script setup>
import { useQuasar } from 'quasar';

const $q = useQuasar();

function darkModeFn() {
  $q.dark.toggle();
}
</script>
<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn
      color="white"
      text-color="black"
      label="Dark Mode"
      @click="darkModeFn"
    />
  </div>
</template>
