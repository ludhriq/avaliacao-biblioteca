<script setup>
import { RouterView, useRoute } from 'vue-router';
import Toast from 'primevue/toast';
import { ref } from 'vue';
import { isArray } from '@/utils/utils.js';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const menus = [
    {
        label: 'Home',
        icon: 'pi pi-home',
        path: '/home',
    },
    {
        label: 'Books',
        icon: 'pi pi-book',
        path: '/book',
    },
    {
        label: 'Authors',
        icon: 'pi pi-user',
        path: '/author',
    },
    {
        label: 'Publishers',
        icon: 'pi pi-building',
        path: '/publisher',
    },
];
</script>

<template>
    <div class="flex flex-col w-full h-screen">
        <div class="w-full p-3 text-3xl border-b-2 h-16 flex items-center justify-between">
            <span>Header</span>
            <button class="burger-menu md:hidden" @click="toggleMenu">
                <i class="pi pi-bars"></i>
            </button>
        </div>

        <div class="flex h-full">
            <div class="w-32 border-r-2 h-full px-3 py-4 mobile-menu"
                :class="{ 'hidden': !isMenuOpen, 'md:block': true }">
                <ul class="menu space-y-2">
                    <RouterLink :to="menu.path" v-for="menu of menus" :key="menu.path">
                        <li class="menu-item">
                            <i :class="menu.icon" />
                            <span>{{ menu.label }}</span>
                        </li>
                    </RouterLink>
                </ul>
            </div>

            <div class="p-4 w-full h-full">
                <RouterView />
            </div>
        </div>
    </div>

    <Toast position="bottom-center">
        <template #message="{ message }">
            <span
                :class="['p-toast-message-icon', 'pi', { 'pi-check': message.severity === 'success' }, { 'pi-exclamation-triangle': message.severity === 'warning' }, { 'pi-times': message.severity === 'error' }, { 'pi-info-circle': message.severity === 'info' }]"></span>
            <div class="p-toast-message-text">
                <span class="p-toast-summary">{{ message.summary }}</span>
                <div class="p-toast-detail">
                    <template v-if="!isArray(message.detail)">
                        <span class="text-black">{{ message.detail }}</span>
                    </template>
                    <p v-else class="m-0" v-for="(item, index) in message.detail" :key="index">
                        {{ item }}
                    </p>
                </div>
            </div>
        </template>
    </Toast>
</template>

<style scoped lang="less">
.menu {
    &-item {
        display: flex;
        align-items: baseline;
        cursor: pointer;
        user-select: none;
        border-radius: .3rem;
        padding: 8px 2px 0 6px;
        padding-bottom: 6px;
        transition-duration: 200ms;

        span {
            margin-left: 3px;
        }

        &:hover {
            background-color: var(--color-background-inverted);
            color: var(--color-text-inverted);
        }
    }
}

.burger-menu {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
}

.mobile-menu {
    display: none;
}


@media (max-width: 768px) {
    .mobile-menu {
        position: absolute;
        background-color: white;
        z-index: 10;
        top: 0;
        left: 0;
        width: 200px;
        height: 100vh;
        display: block;
        transform: translateX(-100%);
        transition: transform 0.3s ease-in-out;
    }

    .mobile-menu.hidden {
        transform: translateX(-100%);
    }

    .mobile-menu:not(.hidden) {
        transform: translateX(0);
    }
}

@media (min-width: 768px) {
    .mobile-menu {
        display: block !important;
    }
}
</style>
