<template>
    <SiteHeader />
    <div class="container">
        <SiteContacts />
        <SiteSupport />
    </div>
    <SiteExperts />
    <SiteConfigurator />
    <SiteServices />
    <SiteNews :news="news" />
    <SiteStay />
    <SiteFilter
        class="filter"
        id="1"
        :list="filters"
        @toggleCheckbox="onToggleCheckbox"
        @toggleRadio="onToggleRadio"
    />
    <SiteFilterRange
        class="filter"
        :min="rangeMinValue"
        :max="rangeMaxValue"
        :minValue="0"
        :maxValue="4500"
        @changeMin="onChangeRangeMinValue"
        @changeMax="onChangeRangeMaxValue"
    />
    <SiteProducts :products="products" />
    <SiteProductHorizontal :product="products[0]" />
    <SiteFooter />
</template>

<script>
import SiteHeader from "@/components/site-header/site-header.vue";
import SiteContacts from "@/components/SiteContacts/SiteContacts.vue";
import SiteSupport from "./components/SiteSupport/SiteSupport.vue";
import SiteExperts from "@/components/site-experts/site-experts.vue";
import SiteConfigurator from "@/components/site-configurator/site-configurator.vue";
import SiteServices from "@/components/site-services/site-services.vue";
import SiteNews from "@/components/site-news/site-news.vue";
import SiteStay from "@/components/site-stay/site-stay.vue";
import SiteFilter from "@/components/site-filter/site-filter.vue";
import SiteFilterRange from "./components/site-filter-range/site-filter-range.vue";
import SiteProducts from "@/components/site-products/site-products.vue";
import SiteProductHorizontal from "@/components/site-product-horizontal/site-product-horizontal.vue";
import SiteFooter from "@/components/site-footer/site-footer.vue";

export default {
    name: "App",
    components: {
        SiteHeader,
        SiteContacts,
        SiteSupport,
        SiteExperts,
        SiteConfigurator,
        SiteServices,
        SiteNews,
        SiteStay,
        SiteFilter,
        SiteFilterRange,
        SiteProducts,
        SiteProductHorizontal,
        SiteFooter,
    },
    setup() {
        let rangeMinValue = 0;
        let rangeMaxValue = 4500;

        const news = [
            {
                id: 1,
                tags: [
                    {
                        id: 1,
                        name: "Видеокарты",
                    },
                    {
                        id: 2,
                        name: "X-pert советует",
                    },
                ],
                date: "21.06.2022",
                description:
                    "Выбор видеокарты среднего класса для игрового ПК в 2022 году",
                backgroundImage: "video-card.png",
            },
            {
                id: 2,
                tags: [
                    {
                        id: 1,
                        name: "Huawei",
                    },
                    {
                        id: 2,
                        name: "Cмартфоны",
                    },
                ],
                date: "21.06.2022",
                description:
                    "Xiaomi POCO X4 Pro 5G: новое поколение мегапопулярного смартфона",
                backgroundImage: "phones.png",
            },
            {
                id: 3,
                tags: [
                    {
                        id: 1,
                        name: "Logitech",
                    },
                    {
                        id: 2,
                        name: "X-pert советует",
                    },
                ],
                date: "21.06.2022",
                description:
                    "Logitech POP Keys: беспроводная механическая клавиатура с настраиваемыми клавишами эмодзи",
                backgroundImage: "keyboard.png",
            },
        ];

        const products = [
            {
                id: 1,
                name: "Acer Aspire 3",
                description:
                    "Intel Core i3 10100, DDR4, 8 ГБ, SSD 256 ГБ, Intel UHD Graphics 630, DVD-RW, Windows 10 Pro ",
                link: "#",
                specifications: [
                    {
                        id: 1,
                        name: "Операционная система",
                        value: "Без ОС",
                    },
                    {
                        id: 2,
                        name: "Диагональ экрана",
                        value: "15,6”",
                    },
                    {
                        id: 3,
                        name: "Разрешение экрана:",
                        value: "1900х1080",
                    },
                    {
                        id: 4,
                        name: "Производитель процессора:",
                        value: " Intel",
                    },
                    {
                        id: 5,
                        name: "Модель процессора:",
                        value: "Core i3-1005G1",
                    },
                    {
                        id: 6,
                        name: "Тактовая частота:",
                        value: "1.2 ГГц",
                    },
                ],
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
                specifications: [
                    {
                        id: 1,
                        name: "Операционная система",
                        value: "Без ОС",
                    },
                    {
                        id: 2,
                        name: "Диагональ экрана",
                        value: "15,6”",
                    },
                    {
                        id: 3,
                        name: "Разрешение экрана:",
                        value: "1900х1080",
                    },
                    {
                        id: 4,
                        name: "Производитель процессора:",
                        value: " Intel",
                    },
                    {
                        id: 5,
                        name: "Модель процессора:",
                        value: "Core i3-1005G1",
                    },
                    {
                        id: 6,
                        name: "Тактовая частота:",
                        value: "1.2 ГГц",
                    },
                ],
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
                specifications: [
                    {
                        id: 1,
                        name: "Операционная система",
                        value: "Без ОС",
                    },
                    {
                        id: 2,
                        name: "Диагональ экрана",
                        value: "15,6”",
                    },
                    {
                        id: 3,
                        name: "Разрешение экрана:",
                        value: "1900х1080",
                    },
                    {
                        id: 4,
                        name: "Производитель процессора:",
                        value: " Intel",
                    },
                    {
                        id: 5,
                        name: "Модель процессора:",
                        value: "Core i3-1005G1",
                    },
                    {
                        id: 6,
                        name: "Тактовая частота:",
                        value: "1.2 ГГц",
                    },
                ],
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
                specifications: [
                    {
                        id: 1,
                        name: "Операционная система",
                        value: "Без ОС",
                    },
                    {
                        id: 2,
                        name: "Диагональ экрана",
                        value: "15,6”",
                    },
                    {
                        id: 3,
                        name: "Разрешение экрана:",
                        value: "1900х1080",
                    },
                    {
                        id: 4,
                        name: "Производитель процессора:",
                        value: " Intel",
                    },
                    {
                        id: 5,
                        name: "Модель процессора:",
                        value: "Core i3-1005G1",
                    },
                    {
                        id: 6,
                        name: "Тактовая частота:",
                        value: "1.2 ГГц",
                    },
                ],
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
        ];

        const filters = [
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
        ];

        const onToggleCheckbox = (value) => {
            console.log("Toggle checkbox", value);
        };

        const onToggleRadio = (value) => {
            console.log("Radio toggle", value);
        };

        const onChangeRangeMinValue = (value) => {
            rangeMinValue.value = value;
        };

        const onChangeRangeMaxValue = (value) => {
            rangeMaxValue.value = value;
        };

        return {
            rangeMinValue,
            rangeMaxValue,
            news,
            products,
            filters,
            onToggleCheckbox,
            onToggleRadio,
            onChangeRangeMinValue,
            onChangeRangeMaxValue,
        };
    },
};
</script>

<style lang="sass">
.footer
    margin-top: 50px

.container
    @include container
    margin: 100px auto
</style>
