<template>
    <div class="swiper-buttons">
        <UiSwiperButton arrow-left @button-was-clicked="swiper.slidePrev()" />
        <UiSwiperButton arrow-right @button-was-clicked="swiper.slideNext()" />
    </div>
</template>

<script setup>
import { useSwiper } from "swiper/vue";
const swiper = useSwiper();
</script>

<style scoped>
.swiper-buttons {
    display: flex;
    gap: 11px;
}
</style>
