<script setup lang="ts">

</script>

<template>
  <div style="margin-bottom: 10px">
    Layout
  </div>
  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component :is="Component" :key="route.path" />
    </keep-alive>
  </router-view>
</template>

<style scoped lang="scss">

</style>
