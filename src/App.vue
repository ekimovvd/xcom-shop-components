<template>
    <SiteHeader />
    <SiteFilter
        class="filter"
        id="1"
        :values="filters"
        @toggleCheckbox="onToggleCheckbox"
    />
    <SiteProducts :products="products" />
    <SiteFooter class="footer" />
</template>

<script>
import { computed } from "vue";

import SiteHeader from "@/components/site-header/site-header.vue";
import SiteFilter from "@/components/site-filter/site-filter.vue";
import SiteProducts from "@/components/site-products/site-products.vue";
import SiteFooter from "@/components/site-footer/site-footer.vue";

export default {
    name: "App",
    components: {
        SiteHeader,
        SiteFilter,
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

        const filters = computed(() => [
            {
                id: 1,
                name: "ASUS",
                quantity: 45,
            },
            {
                id: 2,
                name: "Acer",
                quantity: 15,
            },
            {
                id: 3,
                name: "Dell",
                quantity: 35,
            },
            {
                id: 4,
                name: "Lenovo",
                quantity: 50,
            },
            {
                id: 5,
                name: "Digma",
                quantity: 50,
            },
            {
                id: 6,
                name: "Dream Machines",
                quantity: 50,
            },
            {
                id: 7,
                name: "HP",
                quantity: 50,
            },
            {
                id: 8,
                name: "Msi",
                quantity: 50,
            },
            {
                id: 9,
                name: "Msi",
                quantity: 50,
            },
            {
                id: 10,
                name: "Msi",
                quantity: 50,
            },
            {
                id: 11,
                name: "Msi",
                quantity: 50,
            },
            {
                id: 12,
                name: "Msi",
                quantity: 50,
            },
        ]);

        const onToggleCheckbox = (value) => {
            console.log("Toggle checkbox", value);
        };

        return {
            products,
            filters,
            onToggleCheckbox,
        };
    },
};
</script>

<style lang="sass">
.footer
    margin-top: 50px

.filter
    margin-left: 50px
    margin-bottom: 50px
</style>
