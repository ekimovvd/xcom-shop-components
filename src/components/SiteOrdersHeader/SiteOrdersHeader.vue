<template>
    <div class="site-orders-header">
        <div class="site-orders-header__group">
            <h2 class="site-orders-header__title">Мои заказы</h2>
            <p class="site-orders-header__label">{{ label }}</p>
        </div>
        <div class="site-orders-header__tabs">
            <button
                class="site-orders-header__tab"
                :class="[onTabViewClass(tab.id), tab.class]"
                v-for="tab in tabs"
                :key="tab.id"
                @click="onTab(tab.id)"
            >
                {{ tab.name }}
            </button>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: "SiteOrdersHeader",
    props: {
        label: {
            type: Number,
            default: 0,
        },
    },
    setup() {
        const tab = ref(0);

        const tabs = [
            {
                id: 0,
                name: "Активные",
                class: "site-orders-header__tab--active",
            },
            {
                id: 1,
                name: "Завершенные",
                class: "site-orders-header__tab--completed",
            },
        ];

        const onTab = (id) => {
            tab.value = id;
        };

        const onTabViewClass = (id) => {
            return tab.value === id ? "site-orders-header__tab--selected" : "";
        };

        return {
            tabs,
            onTab,
            onTabViewClass,
        };
    },
};
</script>

<style lang="sass">
.site-orders-header
    display: flex
    align-items: center
    justify-content: space-between
    font-family: 'Manrope', sans-serif

    .site-orders-header__group
        display: flex
        align-items: center
        grid-column-gap: 12px

    .site-orders-header__title
        font-weight: 700
        font-size: 32px
        line-height: 40px
        color: #070707

    .site-orders-header__label
        font-weight: 700
        font-size: 32px
        line-height: 40px
        color: $grays-gray-300

    .site-orders-header__tabs
        display: flex
        align-items: center

    .site-orders-header__tab
        display: flex
        justify-content: center
        align-items: center
        padding: 13px 16px
        background: $main-white
        border: 1px solid $grays-gray-200
        cursor: pointer
        outline: none
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $grays-gray-400

    .site-orders-header__tab--active
        border-radius: 8px 0px 0px 8px

    .site-orders-header__tab--completed
        border-radius: 0px 8px 8px 0px

    .site-orders-header__tab--selected
        color: $main-white
        background: $main-blue

@media screen and (max-width: 1024px)
    .site-orders-header
        .site-orders-header__title
            font-size: 28px
            line-height: 36px

        .site-orders-header__label
            font-size: 28px
            line-height: 36px

@media screen and (max-width: 768px)
    .site-orders-header
        flex-direction: column
        align-items: flex-start
        grid-row-gap: 16px

        .site-orders-header__title
            font-size: 24px
            line-height: 32px

        .site-orders-header__label
            font-size: 24px
            line-height: 32px
</style>
