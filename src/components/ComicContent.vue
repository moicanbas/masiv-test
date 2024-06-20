<script setup>
import { ref, onMounted } from 'vue';
import { useComicStore } from '@/stores/store'

const comicStore = useComicStore()

onMounted(() => {
    comicStore.searchComic()
})
</script>

<template>
    <template v-if="comicStore.comic">
        <div class="resize-image mt-3">
            <div class="w-full h-full">
                <Image :src="comicStore.comic.img" :alt="comicStore.comic.alt" class="custom-image" preview />
            </div>
        </div>
        <div class="title m-3 mt-0">
            <span class="font-bold text-2xl">
                {{ comicStore.comic.title }}
            </span>
        </div>
    </template>
    <div class="p-6 w-full h-full mt-3" v-if="!comicStore.comic">
        <ProgressSpinner />
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
