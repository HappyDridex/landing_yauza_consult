<template>
    <button class="button-main-wrapper">
        {{ buttonText }}
    </button>
</template>

<script setup>

defineProps({
    buttonText: {
        type: String,
        required: true
    }
});
</script>

<style scoped lang="scss">
.button-main-wrapper {
    color: $white;
    background: $black-muted;
    padding: 17px 48px;
    border-radius: 13px;
    display: block;
}
</style>