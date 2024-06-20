<template>
    <div class="m-1">
        <Button :label="comicStore.generate ? 'Generando' : 'Generar nuevo comic'" icon="pi pi-refresh"
            :loading="comicStore.generate" outlined @click="updateComic"/>
    </div>
</template>

<script setup>
import axios from 'axios';
import { useComicStore } from '@/stores/store'
import { generateRandomNumber } from '@/composables/utils';

const comicStore = useComicStore()

const updateComic = async () => {
    comicStore.comic = null
    comicStore.rating = null
    comicStore.generate = true
    try {
        const numberComic = generateRandomNumber()
        const response = await axios.get(`${comicStore.urlSearch}/${numberComic}/info.0.json`)
        comicStore.comic = response.data
    } catch (error) {
        toastErrorMessage(error)
    } finally {
        comicStore.generate = false
    }
}
</script>

<style lang="scss" scoped></style>