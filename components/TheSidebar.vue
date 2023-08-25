<template>
    <aside class="sidebar-wrapper b">
        <header class="sidebar__header">
            <h3 class="sidebar__company">ЯузаКонсалт</h3>
            <button @click="emit('close')">
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M19.6875 8.3125L8.3125 19.6875M8.3125 8.3125L19.6875 19.6875"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
        </header>
        <nav class="sidebar__nav-links">
            <a class="sidebar__nav-link" href="#about" @click="emit('close')"
                >О компании</a
            >
            <a class="sidebar__nav-link" href="#services" @click="emit('close')"
                >Наши услуги</a
            >
            <a class="sidebar__nav-link" href="#prices" @click="emit('close')"
                >Цены</a
            >
            <a class="sidebar__nav-link" href="#contacts" @click="emit('close')"
                >Контакты</a
            >
        </nav>
    </aside>
</template>

<script setup>
const emit = defineEmits(["close"]);

onMounted(() => {
    document.body.style.overflow = "hidden";
});

onUnmounted(() => {
    document.body.style.overflow = "visible";
});
</script>

<style scoped lang="scss">
.sidebar-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: $white;
    z-index: 10;

    .sidebar__header {
        padding: 35px 21px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid $dark-grey;
    }
    .sidebar__company {
        font-weight: 600;
        font-size: 22px;
    }

    .sidebar__nav-links {
        display: flex;
        flex-direction: column;
        padding: 15px 23px;
        color: $black-muted;

        .sidebar__nav-link {
            font-size: 16px;
            padding: 17px 0;
            border-bottom: 1px solid #c5d2e1;
        }
    }
}
</style>
