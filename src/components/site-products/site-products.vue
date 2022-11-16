<template>
    <div class="site-products">
        <div class="site-products__container">
            <div class="site-products__header">
                <h2 class="site-products__title">Ноутбуки</h2>
                <div class="site-products__group">
                    <a class="site-products__view-all" href="#">
                        <p class="site-products__view-all-label">
                            Смотреть все
                        </p>
                    </a>
                    <div class="site-products__arrows">
                        <button class="site-products__arrow">
                            <img
                                class="site-products__arrow-svg"
                                src="@/assets/images/products/chevron-left.svg"
                                alt="arrow-left"
                            />
                        </button>
                        <button class="site-products__arrow">
                            <img
                                class="site-products__arrow-svg"
                                src="@/assets/images/products/chevron-right.svg"
                                alt="arrow-right"
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div class="site-products__list">
                <SiteProduct
                    v-for="product in products"
                    :key="product.id"
                    :product="product"
                    @toggleCompare="onToggleCompare"
                    @toggleFavorite="onToggleFavorite"
                    @toggleBasket="onToggleBasket"
                    @toggleQuantity="onToggleQuantity"
                />
            </div>
        </div>
    </div>
</template>

<script>
import SiteProduct from "@/components/site-product/site-product.vue";

export default {
    name: "site-products",
    components: {
        SiteProduct,
    },
    props: {
        products: {
            type: Array,
            default: () => [],
        },
    },
    setup() {
        const onToggleCompare = (product) => {
            console.log("Toggle Compare", product.value);
        };

        const onToggleFavorite = (product) => {
            console.log("Toggle Favorite", product.value);
        };

        const onToggleBasket = (product) => {
            console.log("Toggle Basket", product.value);
        };

        const onToggleQuantity = () => {
            console.log("Toggle quantity");
        };

        return {
            onToggleCompare,
            onToggleFavorite,
            onToggleBasket,
            onToggleQuantity,
        };
    },
};
</script>

<style lang="sass">
.site-products
    &__container
        width: 1344px
        margin: 0 auto

    .site-products__header
        font-family: 'Manrope', sans-serif
        display: flex
        align-items: center
        justify-content: space-between

    .site-products__title
        font-weight: 700
        font-size: 40px
        line-height: 48px
        color: $old-black

    .site-products__group
        display: flex
        align-items: center

    .site-products__view-all
        padding: 8px
        background: $main-white
        border: 1px solid $main-blue
        border-radius: 8px

    .site-products__view-all-label
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $main-blue

    .site-products__arrows
        display: flex
        align-items: center
        grid-column-gap: 12px
        margin-left: 48px

    .site-products__arrow
        border-radius: 100%
        width: 44px
        height: 44px
        padding: 0
        outline: none
        border: none
        background: rgba(255, 255, 255, 0.8)
        cursor: pointer
        display: flex
        align-items: center
        justify-content: center

        &:hover
            background: $main-white
            box-shadow: $small-down

    .site-products__list
        margin-top: 64px
        display: flex
        flex-wrap: wrap
        grid-column-gap: 24px

@media screen and (max-width: 1440px)
    .site-products
        .site-products__container
            width: 960px

        .site-products__title
            font-size: 32px
            line-height: 40px

        .site-products__arrows
            display: none

        .site-products__list
            margin-top: 48px

@media screen and (max-width: 1024px)
    .site-products
        .site-products__container
            width: 632px

@media screen and (max-width: 768px)
    .site-products
        .site-products__container
            width: 292px

        .site-products__title
            font-size: 28px
            line-height: 36px

        .site-products__list
            margin-top: 32px
            grid-column-gap: 12px
            grid-row-gap: 12px
</style>
