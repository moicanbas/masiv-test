<template>
  <div class="m-1">
    <Button
      :label="generate ? 'Generating' : 'Generate random comic'"
      icon="pi pi-refresh"
      :loading="generate"
      outlined
      @click="searchNewComic"
    />
  </div>
</template>

<script setup>
import { useComicStore } from "@/stores/store";
import { searchNewComic } from "@/services/callToApi";

const { generate } = useComicStore();
</script>

<style lang="scss" scoped></style>
