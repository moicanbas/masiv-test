<script setup>
import { useComicStore } from '@/stores/store'
import { ratingComic } from '@/composables/utils';

const comicStore = useComicStore()

</script>
<template>
    <div class="flex justify-center m-2" v-if="comicStore.comic">
        <Rating v-model="comicStore.rating" @change="ratingComic">
            <template #onicon>
                <img src="/src/assets/custom-onicon.png" height="24" width="24" />
            </template>
            <template #officon>
                <img src="/src/assets/custom-officon.png" height="24" width="24" />
            </template>
        </Rating>
    </div>
</template>

<style lang="scss" scoped></style>