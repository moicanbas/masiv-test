<script setup>
import { useComicStore } from '@/stores/store'

const comicStore = useComicStore()
</script>
<template>
    <div class="flex justify-center m-2">
        <Rating v-model="comicStore.rating">
            <template #onicon>
                <img src="/src/assets/custom-onicon.png" height="24" width="24" />
            </template>
            <template #officon>
                <img src="/src/assets/custom-officon.png" height="24" width="24" />
            </template>
        </Rating>
    </div>
</template>

<style lang="scss" scoped>

</style>