<template>
    <ul class="site-checkout-order__products">
        <SiteCheckoutOrderProduct
            v-for="productItem in productList"
            :key="productItem.id"
            :productItem="productItem"
        />
    </ul>
</template>

<script>
import SiteCheckoutOrderProduct from "@/components/SiteCheckoutOrderProduct/SiteCheckoutOrderProduct.vue";

export default {
    name: "SiteCheckoutOrderProducts",
    components: {SiteCheckoutOrderProduct},
    props: {
        productList: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="sass">
.site-checkout-order__products
    list-style: none
    padding: 0
    display: flex
    flex-direction: column
    grid-row-gap: 24px
</style>