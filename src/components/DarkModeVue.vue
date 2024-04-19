<script setup>
import { useQuasar } from 'quasar';
import { ref, onMounted } from 'vue';

const $q = useQuasar();
const isDark = ref(false);

onMounted(() => {
  isDark.value = $q.dark.isActive ? true : false;
});

function darkModeFn() {
  isDark.value = !isDark.value;
  $q.dark.set(isDark.value);
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
