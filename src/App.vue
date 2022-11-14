<template>
    <SiteHeader />
    <SiteProduct class="product" />
    <SiteFooter />
</template>

<script>
import SiteHeader from "@/components/site-header/site-header.vue";
import SiteProduct from "@/components/site-product/site-product.vue";
import SiteFooter from "./components/site-footer/site-footer.vue";

export default {
    name: "App",
    components: {
        SiteHeader,
        SiteProduct,
        SiteFooter,
    },
};
</script>

<style lang="sass">
.product
    width: 318px
    margin-left: 48px
</style>
