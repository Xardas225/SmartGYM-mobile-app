<script setup lang="ts">
import BottomNavSection from '@/components/ui/BottomNavSection.vue';
import TopNavSection from '@/components/ui/TopNavSection.vue';
</script>

<template>
  <TopNavSection />
  <router-view/>
  <BottomNavSection />
</template>

<style lang="scss">
</style>
