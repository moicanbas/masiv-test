<script setup>
import { useComicStore } from '@/stores/store'
import { rateCurrentComic } from '@/composables/utils';

const comicStore = useComicStore()

</script>
<template>
    <div class="flex justify-center m-1 grid" v-if="comicStore.comic">
        <Rating v-model="comicStore.rating" @change="rateCurrentComic"
            v-tooltip="comicStore.comic ? 'Give a rating' : 'Change rating'">
            <template #onicon>
                <img src="/src/assets/custom-onicon.png" height="24" width="24" />
            </template>
            <template #officon>
                <img src="/src/assets/custom-officon.png" height="24" width="24" />
            </template>
        </Rating>
        <div class="text-sm mt-3">
            Rating {{ comicStore.rating || 0 }}/5
        </div>
    </div>
</template>

<style lang="scss" scoped></style>