<template>
    <li class="site-checkout-order__product">
        <div class="site-checkout-order__product-content">
            <div class="site-checkout-order__product-content__wrapper">
                <div class="site-checkout-order__product-preview">
                    <img
                        :src="require(`@/assets/images/checkout/${productItem.preview}`)"
                        alt="preview"
                        class="site-checkout-order__product-preview__img"
                    />
                </div>
                <div class="site-checkout-order__product-info">
                    <div class="site-checkout-order__product-info__wrapper">
                        <div class="site-checkout-order__product-header">
                            <a href="#" class="site-checkout-order__product-link">{{ productItem.name }}</a>
                        </div>
                        <div class="site-checkout-order__product-text">
                            <div class="site-checkout-order__product-model">
                                <p class="site-checkout-order__product-model__label">{{ productItem.model.id }}</p>
                                <p class="site-checkout-order__product-model__label">{{ productItem.model.name }}</p>
                            </div>
                            <p class="site-checkout-order__product-description">
                                {{ productItem.description }}
                            </p>
                        </div>
                    </div>

                    <div class="site-checkout-order__product-actions">
                        <div class="site-checkout-order__product-price">{{ getCurrentPrice }} ₽</div>
                        <div class="site-checkout-order__product-interactions">
                            <SiteProductCounter :isError="false" />
                            <div class="site-checkout-order__product-delete">
                                <button class="site-checkout-order__product-delete-button">
                                    <img
                                        src="@/assets/images/checkout/trash.svg"
                                        alt="trash"
                                        class="site-checkout-order__product-delete-icon"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SiteProductErrorBlock
                v-if="false"
                text="Товар недоступен в таком количестве."
            />
        </div>
    </li>
</template>

<script>
import {computed, toRefs} from "vue";
import {onNumberWithSpaces} from "@/utils/functions";
import SiteProductCounter from "@/components/SiteProductCounter/SiteProductCounter.vue";
import SiteProductErrorBlock from "@/components/SiteProductErrorBlock/SiteProductErrorBlock.vue";

export default {
    name: "SiteCheckoutOrderProduct",
    components: {SiteProductErrorBlock, SiteProductCounter},
    props: {
        productItem: {
            type: Object,
            required: true,
        }
    },
    setup(props) {
        const { productItem } = toRefs(props);

        const getOldPrice = computed(() => {
            return onNumberWithSpaces(productItem.value.priceOld);
        });

        const getCurrentPrice = computed(() => {
            return onNumberWithSpaces(productItem.value.priceCurrent);
        });

        return {
            getOldPrice,
            getCurrentPrice,
        };
    },
}
</script>

<style lang="sass">
.site-checkout-order__product
    border-bottom: 1px solid $new-gray-200
    padding-bottom: 10px
    font-family: 'Manrope', sans-serif

    .site-checkout-order__product-content
        display: flex
        grid-gap: 16px
        flex-wrap: wrap

    .site-checkout-order__product-content__wrapper
        display: flex
        grid-gap: 16px

    .site-checkout-order__product-preview
        background: #F9F9FD
        border-radius: 9px
        padding: 0 5px
        max-height: 80px
        display: flex
        align-items: center
        justify-content: center

    .site-checkout-order__product-preview__img
        &--error
            opacity: .4


    .site-checkout-order__product-info
        display: flex
        grid-gap: 10px

    .site-checkout-order__product-info__wrapper
        display: flex
        grid-gap: 10px
        flex-direction: column

    .site-checkout-order__product-link
        font-weight: 500
        font-size: 16px
        line-height: 20px
        text-decoration: none
        color: black

    .site-checkout-order__product-model
        display: flex
        grid-gap: 20px

    .site-checkout-order__product-model__label
        margin: 0
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-350

    .site-checkout-order__product-text
        display: flex
        grid-gap: 10px
        flex-direction: column

    .site-checkout-order__product-description
        margin: 0
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-350

    .site-checkout-order__product-actions
        display: flex
        flex-direction: column
        grid-row-gap: 16px
        align-items: flex-end

    .site-checkout-order__product-price
        font-weight: 700
        font-size: 20px
        line-height: 24px
        color: $main-black

    .site-checkout-order__product-delete
        display: none

    .site-checkout-order__product-delete-button
        border: none
        background: none
        cursor: pointer
        padding: 0

@media screen and (max-width: 1440px)
    .site-checkout-order__product
        .site-checkout-order__product-info
            flex-direction: column
            grid-gap: 16px

        .site-checkout-order__product-model
            flex-direction: column
            grid-gap: 4px

        .site-checkout-order__product-actions
            align-items: flex-start
            grid-row-gap: 10px

@media screen and (max-width: 1024px)
    .site-checkout-order__product
        .site-checkout-order__product-info
            flex-direction: row
            grid-gap: 10px

        .site-checkout-order__product-model
            flex-direction: row
            grid-gap: 24px

        .site-checkout-order__product-actions
            grid-row-gap: 16px
            align-items: flex-end

        .site-checkout-order__product-interactions
            display: flex
            flex-direction: column
            grid-gap: 16px
            align-items: flex-end

        .site-checkout-order__product-delete
            display: block

@media screen and (max-width: 768px)
    .site-checkout-order__product
        .site-checkout-order__product-info
            flex-direction: column
            grid-gap: 16px

        .site-checkout-order__product-link
            font-size: 14px

        .site-checkout-order__product-actions
            align-items: stretch
            grid-row-gap: 10px

        .site-checkout-order__product-interactions
            display: flex
            align-items: center
            justify-content: space-between
            flex-direction: row
</style>