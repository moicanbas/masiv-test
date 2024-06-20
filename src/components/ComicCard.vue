<template>
    <div class="rounded overflow-hidden bg-surface-100 p-5">
        <div class="card flex justify-center">
             <!-- Inicio Titulo del comic -->
             <div class="title">
     
             </div>
             <!-- Fin Titulo del comic -->
             <!-- Inicio Imagen del comic -->
             <ComicContent />
             <!-- Fin Imagen del comic -->
              <!-- Inicio calificación del comic -->
             <ComicRating />
             <!-- Fin calificación del comic -->
             <ButtonsArea />
             <!-- Fin calificación del comic -->
         </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ComicContent from '@/components/ComicContent.vue';
import ComicRating from '@/components/ComicRating.vue';
import ButtonsArea from '@/components/ButtonsArea.vue';

</script>

<style lang="scss" scoped></style>