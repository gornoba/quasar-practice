<template>
  <div class="q-pa-md">
    <div
      class="flex inline shadow-box flex-center"
      v-for="n in 24"
      :key="n"
      :class="`shadow-${n}`"
    >
      .shadow-{{ n }}
    </div>
    <br />
    <br />
    <div
      class="flex inline shadow-box flex-center"
      v-for="n in 24"
      :key="n"
      :class="`shadow-up-${n}`"
    >
      .shadow-{{ n }}
    </div>
    <div class="q-pa-md q-gutter-md">
      <div
        class="inset-shadow flex inline shadow-box flex-center doc-inset-shadow"
      >
        .inset-shadow
      </div>

      <div
        class="inset-shadow-down flex inline shadow-box flex-center doc-inset-shadow"
      >
        .inset-shadow-down
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.shadow-box
  width: 90px
  height: 90px
  margin: 25px
  border-radius: 50%
  font-size: 12px


.doc-inset-shadow
  width: 120px
  height: 120px
  border: 1px solid #eee
  padding: 4px
</style>
