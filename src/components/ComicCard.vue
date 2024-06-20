<template>
    <div class="rounded overflow-hidden bg-surface-100">
        <div class="grid justify-center align-center">
            <ComicContent />
            <ComicRating />
            <ButtonsArea />
        </div>
    </div>
</template>

<script setup>
import ComicContent from '@/components/ComicContent.vue';
import ComicRating from '@/components/ComicRating.vue';
import ButtonsArea from '@/components/ButtonsArea.vue';

</script>

<style lang="scss" scoped></style>