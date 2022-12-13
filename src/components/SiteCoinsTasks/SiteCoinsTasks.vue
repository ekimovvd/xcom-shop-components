<template>
    <div class="site-coins-tasks">
        <div class="site-coins-tasks__header" :class="getHeaderViewClass">
            <h4 class="site-coins-tasks__header-title">
                Выполняйте задания - получайте бонусы!
            </h4>
            <button
                class="site-coins-tasks__header-toggle"
                :class="getToggleViewClass"
                @click="onToggle"
            >
                <img
                    class="site-coins-tasks__header-toggle-chevron"
                    src="@/assets/images/coins-tasks/chevron-down.svg"
                    alt="chevron"
                />
            </button>
        </div>
        <div class="site-coins-tasks__content" v-if="getContentIsShow">
            <div class="site-coins-tasks__list">
                <div
                    class="site-coins-tasks__item"
                    v-for="task in tasks"
                    :key="task.id"
                >
                    <img
                        class="site-coins-tasks__item-img"
                        :src="task.img"
                        alt="img"
                    />
                    <div class="site-coins-tasks__item-block">
                        <div class="site-coins-tasks__item-info">
                            <h5 class="site-coins-tasks__item-title">
                                {{ task.name }}
                            </h5>
                            <p class="site-coins-tasks__item-label">
                                {{ task.description }}
                            </p>
                        </div>
                        <div class="site-coins-tasks__item-group">
                            <p class="site-coins-tasks__item-amount">
                                +{{ onCoins(task.coins) }}
                            </p>
                            <img
                                class="site-coins-tasks__item-coins"
                                src="@/assets/images/coins-tasks/coins.svg"
                                alt="coins"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from "vue";

import { onNumberWithSpaces } from "@/utils/functions.js";

export default {
    name: "SiteCoinsTasks",
    props: {
        tasks: {
            type: Array,
            default: () => [],
        },
    },
    setup() {
        const toggle = ref(true);

        const getHeaderViewClass = computed(() => {
            return !toggle.value ? "site-coins-tasks__header--hidden" : "";
        });

        const getContentIsShow = computed(() => {
            return toggle.value;
        });

        const getToggleViewClass = computed(() => {
            return !toggle.value
                ? "site-coins-tasks__header-toggle--hidden"
                : "";
        });

        const onToggle = () => {
            toggle.value = !toggle.value;
        };

        const onCoins = (coins) => {
            return onNumberWithSpaces(coins);
        };

        return {
            getHeaderViewClass,
            getContentIsShow,
            getToggleViewClass,
            onToggle,
            onCoins,
        };
    },
};
</script>

<style lang="sass">
.site-coins-tasks
    font-family: 'Manrope', sans-serif

    .site-coins-tasks__header
        padding: 24px 32px 24px 24px
        display: flex
        align-items: center
        justify-content: space-between
        border: 1px solid $main-blue
        border-radius: 16px 16px 0 0

    .site-coins-tasks__header--hidden
        border-radius: 16px

    .site-coins-tasks__header-title
        font-weight: 500
        font-size: 20px
        line-height: 26px
        color: $main-black

    .site-coins-tasks__header-toggle
        background: $grays-gray-100
        outline: none
        padding: 0
        display: flex
        align-items: center
        justify-content: center
        border: none
        width: 32px
        height: 32px
        cursor: pointer
        border-radius: 50%
        width: 32px
        height: 32px
        min-width: 32px

    .site-coins-tasks__header-toggle--hidden
        transform: rotate(-180deg)

    .site-coins-tasks__content
        border: 1px solid $main-blue
        border-top: none
        border-radius: 0 0 16px 16px

    .site-coins-tasks__list
        display: flex
        flex-direction: column

    .site-coins-tasks__item
        padding: 24px 48px 24px 24px
        display: flex
        align-items: center
        grid-column-gap: 32px
        border-bottom: 1px solid $grays-gray-200

        &:last-child
            border-bottom: none

    .site-coins-tasks__item-title
        font-weight: 700
        font-size: 16px
        line-height: 20px
        color: $main-black
        margin-bottom: 8px

    .site-coins-tasks__item-label
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $grays-gray-350

    .site-coins-tasks__item-block
        display: flex
        align-items: center
        justify-content: space-between
        width: 100%

    .site-coins-tasks__item-group
        display: flex
        align-items: center
        grid-column-gap: 8px

    .site-coins-tasks__item-amount
        font-weight: 500
        font-size: 20px
        line-height: 26px
        color: $main-black

@media screen and (max-width: 1024px)
    .site-coins-tasks
        .site-coins-tasks__header-title
            font-size: 18px
            line-height: 24px

        .site-coins-tasks__item-label
            width: 330px

@media screen and (max-width: 768px)
    .site-coins-tasks
        .site-coins-tasks__header
            padding: 16px

        .site-coins-tasks__item
            padding: 24px 16px

        .site-coins-tasks__item-block
            flex-direction: column
            align-items: flex-start
            grid-row-gap: 12px

        .site-coins-tasks__item-label
            width: 100%
</style>
