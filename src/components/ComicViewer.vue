<template>
  <div class="rounded overflow-hidden">
    <div class="grid justify-center align-center">
      <ConfettiExplosion v-if="comicStore.viewConfetti" />
      <ComicContent />
      <ComicRating />
      <ButtonsArea />
    </div>
  </div>
</template>

<script setup>
import ComicContent from "@/components/ComicContent.vue";
import ComicRating from "@/components/ComicRating.vue";
import ButtonsArea from "@/components/ButtonsArea.vue";

import { useComicStore } from "@/stores/store";

const comicStore = useComicStore();
</script>

<style lang="scss" scoped></style>
