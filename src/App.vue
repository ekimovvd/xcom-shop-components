<template>
    <SiteHeader />
    <SiteProducts :products="products" />
    <SiteFooter />
</template>

<script>
import { computed } from "vue";

import SiteHeader from "@/components/site-header/site-header.vue";
import SiteProducts from "@/components/site-products/site-products.vue";
import SiteFooter from "./components/site-footer/site-footer.vue";

export default {
    name: "App",
    components: {
        SiteHeader,
        SiteProducts,
        SiteFooter,
    },
    setup() {
        const products = computed(() => [
            {
                id: 1,
                name: "Acer Aspire 3",
                description:
                    "Intel Core i3 10100, DDR4, 8 ГБ, SSD 256 ГБ, Intel UHD Graphics 630, DVD-RW, Windows 10 Pro ",
                link: "#",
                images: [
                    {
                        id: 1,
                        name: "acer.png",
                    },
                    {
                        id: 2,
                        name: "acer.png",
                    },
                ],
            },
            {
                id: 2,
                name: "Macbook pro 14",
                description:
                    "Intel Core i3 10100, DDR4, 8 ГБ, SSD 256 ГБ, Intel UHD Graphics 630, DVD-RW, Windows 10 Pro ",
                link: "#",
                images: [
                    {
                        id: 1,
                        name: "acer.png",
                    },
                    {
                        id: 2,
                        name: "acer.png",
                    },
                ],
            },
            {
                id: 3,
                name: "Lenovo",
                description:
                    "Intel Core i3 10100, DDR4, 8 ГБ, SSD 256 ГБ, Intel UHD Graphics 630, DVD-RW, Windows 10 Pro ",
                link: "#",
                images: [
                    {
                        id: 1,
                        name: "acer.png",
                    },
                    {
                        id: 2,
                        name: "acer.png",
                    },
                ],
            },
            {
                id: 4,
                name: "Msi",
                description:
                    "Intel Core i3 10100, DDR4, 8 ГБ, SSD 256 ГБ, Intel UHD Graphics 630, DVD-RW, Windows 10 Pro ",
                link: "#",
                images: [
                    {
                        id: 1,
                        name: "acer.png",
                    },
                    {
                        id: 2,
                        name: "acer.png",
                    },
                ],
            },
        ]);

        return {
            products,
        };
    },
};
</script>

<style lang="sass">
.product
    margin-left: 48px
</style>
