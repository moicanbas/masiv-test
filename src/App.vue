<script setup>
import ComicCard from '@/components/ComicCard.vue';
</script>

<template>
    <div class="flex-column py-7 pt-3 text-center">
        <div class="text-7xl">
            I <span class="text-red-600">&hearts;</span> Comics
        </div>
        <div class="lead-xl font-light">
            See random comics and rating if you want !
        </div>
        <ComicCard />
    </div>
</template>

<style scoped></style>
