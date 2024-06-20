<template>
    <div class="rounded overflow-hidden bg-surface-100">
        <div class="grid justify-center align-center">
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