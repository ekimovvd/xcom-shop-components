<template>
    <div class="site-coins-operations">
        <h4 class="site-coins-operations__title">Операции по бонусам</h4>

        <div class="site-coins-operations__tabs">
            <button
                class="site-coins-operations__tab"
                :class="[tab.class, onTabViewClass(tab.type)]"
                v-for="tab in tabs"
                :key="tab.id"
                @click="onTab(tab.type)"
            >
                {{ tab.name }}
            </button>
        </div>

        <div class="site-coins-operations__list">
            <div
                class="site-coins-operations__item"
                v-for="operation in getOperations"
                :key="operation.id"
            >
                <p class="site-coins-operations__item-title">
                    {{ operation.name }}
                </p>
                <div class="site-coins-operations__item-info">
                    <p class="site-coins-operations__item-date">
                        {{ operation.date }}
                    </p>
                    <div class="site-coins-operations__item-coins">
                        <p class="site-coins-operations__item-amount">
                            {{ onOperation(operation.type)
                            }}{{ onCoins(operation.coins) }}
                        </p>
                        <img
                            class="site-coins-operations__item-img"
                            src="@/assets/images/coins-operations/coins.svg"
                            alt="img"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref, toRefs } from "vue";

import { onNumberWithSpaces } from "@/utils/functions.js";

const OPERATION = {
    all: "all",
    accrual: "accrual",
    writeDowns: "write-downs",
};

export default {
    name: "SiteCoinsOperations",
    props: {
        operations: {
            type: Array,
            default: () => [],
        },
    },
    setup(props) {
        const { operations } = toRefs(props);
        const tab = ref(OPERATION.all);

        const tabs = [
            {
                id: 0,
                name: "Все",
                class: "site-coins-operations__tab--all",
                type: OPERATION.all,
            },
            {
                id: 1,
                name: "Начисление",
                class: "site-coins-operations__tab--accrual",
                type: OPERATION.accrual,
            },
            {
                id: 2,
                name: "Списание",
                class: "site-coins-operations__tab--write-downs",
                type: OPERATION.writeDowns,
            },
        ];

        const getOperations = computed(() => {
            return tab.value === OPERATION.all
                ? operations.value
                : operations.value.filter(
                      (operation) => operation.type === tab.value
                  );
        });

        const onOperation = (type) => {
            switch (type) {
                case OPERATION.accrual:
                    return "+";
                case OPERATION.writeDowns:
                    return "-";
                default:
                    return "";
            }
        };

        const onCoins = (coins) => {
            return onNumberWithSpaces(coins);
        };

        const onTabViewClass = (type) => {
            return tab.value === type
                ? "site-coins-operations__tab--active"
                : "";
        };

        const onTab = (type) => {
            tab.value = type;
        };

        return {
            tabs,
            getOperations,
            onOperation,
            onCoins,
            onTabViewClass,
            onTab,
        };
    },
};
</script>

<style lang="sass">
.site-coins-operations
    font-family: 'Manrope', sans-serif

    .site-coins-operations__title
        font-weight: 700
        font-size: 20px
        line-height: 24px
        color: $main-black
        margin-bottom: 24px

    .site-coins-operations__tabs
        display: flex
        align-items: center
        margin-bottom: 24px

    .site-coins-operations__tab
        padding: 8px 12px
        background: $main-white
        border: 1px solid $grays-gray-200
        outline: none
        cursor: pointer
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 12px
        line-height: 16px
        text-align: center
        color: $grays-gray-400

    .site-coins-operations__tab--all
        border-radius: 8px 0px 0px 8px

    .site-coins-operations__tab--write-downs
        border-radius: 0px 8px 8px 0

    .site-coins-operations__tab--active
        background: $main-blue
        color: $main-white

    .site-coins-operations__list
        display: flex
        flex-direction: column
        grid-row-gap: 24px

    .site-coins-operations__item
        background: $main-white
        border: 1px solid $grays-gray-200
        border-radius: 20px
        padding: 29px 48px 29px 32px
        display: flex
        align-items: center
        justify-content: space-between

    .site-coins-operations__item-title
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $main-black

    .site-coins-operations__item-info
        display: flex
        align-items: center
        grid-column-gap: 48px

    .site-coins-operations__item-coins
        display: flex
        align-items: center
        grid-column-gap: 4px

    .site-coins-operations__item-date
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $grays-gray-400

    .site-coins-operations__item-amount
        font-weight: 500
        font-size: 20px
        line-height: 26px
        color: $main-black

@media screen and (max-width: 1024px)
    .site-coins-operations
        .site-coins-operations__title
            font-size: 18px
            line-height: 24px

        .site-coins-operations__item
            padding: 29px 24px 29px 32px

@media screen and (max-width: 768px)
    .site-coins-operations
        .site-coins-operations__item
            padding: 24px 24px 24px 16px
            flex-direction: column
            align-items: flex-start
            grid-row-gap: 21px

        .site-coins-operations__item-info
            width: 100%
            justify-content: space-between
</style>
