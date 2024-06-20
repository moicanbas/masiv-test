<template>
    <div v-if="comic">
        <img :src="comic.img" :alt="comic.alt">
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { toastSuccessMessage, toastErrorMessage } from '@/composables/utils';
import { useComicStore } from '@/stores/store'

const comicStore = useComicStore()
const comic = ref()

const searchComic = async () => {
    try{
        const response = await axios.get(`${comicStore.urlSearch}/info.0.json`)
        comic.value = response.data
        toastSuccessMessage('excelente')    
    }catch(error){
        toastErrorMessage(error)
    }finally{

    }
}

onMounted(()=>{
    searchComic()
})
</script>

<style lang="scss" scoped></style>