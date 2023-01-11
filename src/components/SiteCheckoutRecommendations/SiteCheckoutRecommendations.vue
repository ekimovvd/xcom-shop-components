<template>
    <div class="site-checkout-recommendations">
        <h2 class="site-checkout-recommendations__title">Рекомендуем</h2>
        <ul class="site-checkout-recommendations__list">
            <SiteProduct
                v-for="recommendation in recommendations"
                :key="recommendation.id"
                :product="recommendation"
                @toggleCompare="onToggleCompare"
                @toggleFavorite="onToggleFavorite"
                @toggleBasket="onToggleBasket"
                @toggleQuantity="onToggleQuantity"
            />
        </ul>
    </div>
</template>

<script>
import SiteProduct from "@/components/SiteProduct/SiteProduct.vue";

export default {
    name: "SiteCheckoutRecommendations",
    components: { SiteProduct },
    props: {
        recommendations: {
            type: Array,
            default: () => [],
        },
    },
    setup() {
        const onToggleCompare = (product) => {
            console.log("Toggle Compare", product);
        };

        const onToggleFavorite = (product) => {
            console.log("Toggle Favorite", product);
        };

        const onToggleBasket = (product) => {
            console.log("Toggle Basket", product);
        };

        const onToggleQuantity = (product) => {
            console.log("Toggle quantity", product);
        };

        return {
            onToggleCompare,
            onToggleFavorite,
            onToggleBasket,
            onToggleQuantity,
        };
    },
}
</script>

<style lang="sass">
.site-checkout-recommendations
    font-family: 'Manrope', sans-serif
    margin-top: 48px

    .site-checkout-recommendations__title
        font-weight: 700
        font-size: 24px
        line-height: 32px
        color: $old-black
        margin: 0

    .site-checkout-recommendations__list
        list-style: none
        padding: 0
        display: flex
        grid-gap: 24px
        flex-wrap: wrap
        margin-top: 32px

@media screen and (max-width: 768px)
    .site-checkout-recommendations
        .site-checkout-recommendations__list
            grid-gap: 12px
</style>