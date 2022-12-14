<template>
    <div class="site-appeals-header">
        <div class="site-appeals-header__group">
            <img
                class="site-appeals-header__arrow"
                src="@/assets/images/appeals-header/arrow-left.svg"
                alt="arrow"
            />
            <h2 class="site-appeals-header__title">Мои обращения</h2>
        </div>
        <div class="site-appeals-header__tabs" v-if="getTabsIsShow">
            <button
                class="site-appeals-header__tab"
                :class="onTabViewClass(tab.id)"
                v-for="tab in getTabs"
                :key="tab.id"
                @click="onTab(tab.id)"
            >
                {{ tab.name }}
            </button>
        </div>
    </div>
</template>

<script>
import { computed, ref, toRefs } from "vue";

export default {
    name: "SiteAppealsHeader",
    props: {
        isTabs: {
            type: Boolean,
            required: true,
        },
    },
    setup(props) {
        const { isTabs } = toRefs(props);
        const tab = ref(0);

        const getTabs = computed(() => {
            return [
                {
                    id: 0,
                    name: "Все",
                },
                {
                    id: 1,
                    name: "Открытые",
                },
            ];
        });

        const getTabsIsShow = computed(() => {
            return isTabs.value;
        });

        const onTabViewClass = (id) => {
            return tab.value === id ? "site-appeals-header__tab--active" : "";
        };

        const onTab = (id) => {
            tab.value = id;
        };

        return {
            tab,
            getTabs,
            getTabsIsShow,
            onTabViewClass,
            onTab,
        };
    },
};
</script>

<style lang="sass">
.site-appeals-header
    display: flex
    flex-direction: column
    grid-row-gap: 24px

    .site-appeals-header__group
        display: flex
        align-items: center
        grid-column-gap: 12px

    .site-appeals-header__title
        font-family: 'Manrope', sans-serif
        font-weight: 700
        font-size: 32px
        line-height: 40px
        color: #070707

    .site-appeals-header__arrow
        display: none

    .site-appeals-header__tabs
        display: flex
        align-items: center
        grid-column-gap: 8px

    .site-appeals-header__tab
        padding: 13px 24px
        border: 1px solid $grays-gray-200
        border-radius: 22px
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $grays-gray-400
        background: transparent
        outline: none
        cursor: pointer

    .site-appeals-header__tab--active
        color: $main-white
        background: $main-blue
        border-color: $main-blue

@media screen and (max-width: 1440px)
    .site-appeals-header
        .site-appeals-header__title
            font-size: 28px
            line-height: 36px

@media screen and (max-width: 768px)
    .site-appeals-header
        .site-appeals-header__title
            font-size: 24px
            line-height: 32px
</style>
