<template>
    <button class="swiper-button" @click="emit('button-was-clicked')">
        <IconsChevronLeft v-if="arrowLeft" />
        <IconsChevronRight v-if="arrowRight" />
    </button>
</template>

<script setup>
const emit = defineEmits(["button-was-clicked"]);
defineProps({
    arrowLeft: {
        type: Boolean,
        required: false,
    },
    arrowRight: {
        type: Boolean,
        required: false,
    },
});
</script>

<style scoped lang="scss">
.swiper-button {
    border-radius: 50%;
    padding: 20px;
    aspect-ratio: 1;
    &:hover {
        background-color: $light-grey;
    }
}
</style>
