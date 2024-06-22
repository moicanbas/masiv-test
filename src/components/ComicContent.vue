<script setup>
import { onMounted } from "vue";
import { useComicStore } from "@/stores/store";
import { searchNewComic } from "@/services/callToApi";
import NotFound from "@/components/NotFound.vue";

const comicStore = useComicStore();

onMounted(() => {
  searchNewComic();
});
</script>

<template>
  <template v-if="comicStore.comic">
    <div class="text-center text-sm opacity-60">
      Click on image to expand
    </div>
    <div class="resize-image mt-3 mb-0">
      <div class="w-full h-full">
        <Image
          :src="
            comicStore.comic.img
              ? comicStore.comic.img
              : '/src/assets/default_image.jpg'
          "
          :alt="comicStore.comic.alt || 'Default image'"
          class="custom-image"
          preview
        />
      </div>
    </div>
    <div class="title m-3 mt-0">
      <span class="font-bold text-2xl">
        {{ comicStore.comic.title }}
      </span>
    </div>
  </template>
  <div class="p-6 w-full h-full mt-3" v-if="!comicStore.comic">
    <NotFound v-if="comicStore.viewNotFound" />
    <ProgressSpinner v-if="!comicStore.viewNotFound" />
  </div>
</template>

<style lang="scss" scoped>
.resize-image {
  height: 52vh;
  width: auto;
}

.custom-image {
  max-width: 35vw;
  max-height: 50vh;
}
</style>
