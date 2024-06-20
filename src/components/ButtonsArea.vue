<template>
    <div class="m-1">
        <Button :label="comicStore.generate ? 'Generando' : 'Generar nuevo comic'" icon="pi pi-refresh"
            :loading="comicStore.generate" outlined @click="comicStore.searchComic"/>
    </div>
</template>

<script setup>
import { useComicStore } from '@/stores/store'

const comicStore = useComicStore()
</script>

<style lang="scss" scoped></style>