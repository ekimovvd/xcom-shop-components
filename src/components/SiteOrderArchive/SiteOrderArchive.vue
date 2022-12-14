<template>
    <div class="site-order-archive">
        <div class="site-order-archive__header">
            <div class="site-order-archive__info">
                <h5 class="site-order-archive__title">
                    Заказ № {{ order.pk_order }} от 3 октября
                </h5>
                <span class="site-order-archive__tag">{{ order.tag }}</span>
            </div>
            <div class="site-order-archive__amount">
                <h4 class="site-order-archive__title">{{ getAmount }} ₽</h4>
                <button class="site-order-archive__amount-button">
                    Повторить заказ
                </button>
            </div>
        </div>
        <div class="site-order-archive__footer">
            <button class="site-order-archive__footer-button">
                Список товаров
                <img
                    class="site-order-archive__footer-button-chevron"
                    src="@/assets/images/appeals-header/chevron.svg"
                    alt="chevron"
                />
            </button>
        </div>
    </div>
</template>

<script>
import { computed, toRefs } from "vue";

import { onNumberWithSpaces } from "@/utils/functions.js";

export default {
    name: "SiteOrderArchive",
    props: {
        order: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const { order } = toRefs(props);

        const getAmount = computed(() => {
            return onNumberWithSpaces(order.value.amount);
        });

        return {
            getAmount,
        };
    },
};
</script>

<style lang="sass">
.site-order-archive
    background: $main-white
    border: 1px solid $grays-gray-100
    box-shadow: $large
    border-radius: 20px
    font-family: 'Manrope', sans-serif

    .site-order-archive__header
        display: flex
        align-items: center
        justify-content: space-between
        padding: 32px 32px 24px 32px
        background: $grays-gray-100

    .site-order-archive__title
        font-weight: 700
        font-size: 16px
        line-height: 20px
        color: $main-black

    .site-order-archive__tag
        padding: 4px 8px
        background: $main-blue
        border-radius: 8px
        font-weight: 400
        font-size: 12px
        line-height: 16px
        color: $main-white
        margin-top: 8px
        display: inline-block

    .site-order-archive__amount
        text-align: right

    .site-order-archive__amount-button
        padding: 8px
        background: $main-blue
        border-radius: 8px
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $main-white
        border: none
        outline: none
        cursor: pointer
        margin-top: 8px

    .site-order-archive__footer
        padding: 32px 0
        display: flex
        align-items: center
        justify-content: center

    .site-order-archive__footer-button
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $main-blue
        background: none
        outline: none
        border: none
        display: flex
        align-items: center
        justify-content: center
        grid-column-gap: 4px
        cursor: pointer
        padding: 0

@media screen and (max-width: 1440px)
    .site-order-archive
        .site-order-archive__tag
            display: none

        .site-order-archive__footer
            padding: 24px 0 32px 0

@media screen and (max-width: 768px)
    .site-order-archive
        .site-order-archive__header
            flex-direction: column
            align-items: flex-start
            grid-row-gap: 8px
            padding: 24px 16px

        .site-order-archive__amount
            text-align: left
</style>
