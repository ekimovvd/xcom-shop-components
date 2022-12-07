<template>
    <div class="site-products">
        <component
            v-for="product in products"
            :key="product.id"
            :product="product"
            :banner="product"
            :is="onComponent(product)"
            @toggleCompare="onToggleCompare"
            @toggleFavorite="onToggleFavorite"
            @toggleBasket="onToggleBasket"
            @toggleQuantity="onToggleQuantity"
        ></component>
    </div>
</template>

<script>
import SiteProduct from "@/components/SiteProduct/SiteProduct.vue";
import SiteBanner from "@/components/SiteBanner/SiteBanner.vue";

export default {
    name: "SiteProducts",
    components: {
        SiteProduct,
        SiteBanner,
    },
    props: {
        products: {
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

        const onComponent = ({ type }) => {
            switch (type) {
                case "tile":
                    return SiteProduct;
                case "banner":
                    return SiteBanner;
                default:
                    return "";
            }
        };

        return {
            onToggleCompare,
            onToggleFavorite,
            onToggleBasket,
            onToggleQuantity,
            onComponent,
        };
    },
};
</script>

<style lang="sass">
.site-products
    display: flex
    flex-wrap: wrap
    grid-gap: 24px

@media screen and (max-width: 768px)
    .site-products
        grid-column-gap: 12px
        grid-row-gap: 20px
</style>
