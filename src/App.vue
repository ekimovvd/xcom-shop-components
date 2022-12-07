<template>
    <SiteHeader />
    <div class="container">
        <SiteProducts :products="products" />
        <SitePublications :publications="publications" />
        <SiteBanners :banners="banners" />
        <SiteBanner
            :banner="{
                title: 'Ноутбуки для работы',
                link: '#',
            }"
        />
        <SiteBanner
            :banner="{
                title: 'Ноутбуки для работы',
                link: '#',
            }"
            :is-horizontal="true"
        />
        <SiteProfileCards />
        <SiteQuestions title="Оформление заказа" :questions="questions" />
        <SiteOrders />
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
    <SiteFooter />
</template>

<script>
import SitePublications from "@/components/SitePublications/SitePublications.vue";
import SiteBanners from "@/components/SiteBanners/SiteBanners.vue";
import SiteHeader from "@/components/site-header/site-header.vue";
import SiteBanner from "@/components/SiteBanner/SiteBanner.vue";
import SiteProfileCards from "@/components/SiteProfileCards/SiteProfileCards.vue";
import SiteQuestions from "./components/SiteQuestions/SiteQuestions.vue";
import SiteOrders from "./components/SiteOrders/SiteOrders.vue";
import SiteContacts from "@/components/SiteContacts/SiteContacts.vue";
import SiteSupport from "./components/SiteSupport/SiteSupport.vue";
import SiteExperts from "@/components/site-experts/site-experts.vue";
import SiteConfigurator from "@/components/site-configurator/site-configurator.vue";
import SiteServices from "@/components/site-services/site-services.vue";
import SiteNews from "@/components/site-news/site-news.vue";
import SiteStay from "@/components/site-stay/site-stay.vue";
import SiteFilter from "@/components/site-filter/site-filter.vue";
import SiteFilterRange from "./components/site-filter-range/site-filter-range.vue";
import SiteProducts from "@/components/SiteProducts/SiteProducts.vue";
import SiteFooter from "@/components/site-footer/site-footer.vue";

export default {
    name: "App",
    components: {
        SitePublications,
        SiteBanners,
        SiteHeader,
        SiteBanner,
        SiteProfileCards,
        SiteQuestions,
        SiteOrders,
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
        SiteFooter,
    },
    setup() {
        let rangeMinValue = 0;
        let rangeMaxValue = 4500;

        const products = [
            {
                id: 0,
                preview: "acer.png",
                images: [
                    {
                        id: 0,
                        img: "acer.png",
                    },
                    {
                        id: 1,
                        img: "acer.png",
                    },
                    {
                        id: 2,
                        img: "acer.png",
                    },
                ],
                name: "Acer Aspire 3",
                link: "#",
                rating: "4.9",
                feedback: "18",
                model: {
                    id: "689788",
                    name: "MV7N2RU/A",
                },
                description:
                    "Intel Core i3 10100, DDR4, 8 ГБ, SSD 256 ГБ, Intel UHD Graphics 630, DVD-RW, Windows 10 Pro",
                list: [
                    {
                        id: 0,
                        name: "Операционная система:",
                        value: "Без ОС",
                    },
                    {
                        id: 1,
                        name: "Диагональ экрана:",
                        value: "15,6”",
                    },
                    {
                        id: 2,
                        name: "Разрешение экрана:",
                        value: "1900х1080",
                    },
                    {
                        id: 3,
                        name: "Производитель процессора:",
                        value: "Intel",
                    },
                    {
                        id: 4,
                        name: "Модель процессора:",
                        value: "Core i3-1005G1",
                    },
                    {
                        id: 5,
                        name: "Тактовая частота:",
                        value: "1.2 ГГц",
                    },
                ],
                priceOld: "51 686",
                priceCurrent: "43 925",
            },
        ];

        const publications = [
            {
                id: 0,
                type: "video",
                img: "preview.png",
                video: "3GNQL3alB-Y",
            },
            {
                id: 1,
                type: "image",
                label: "Lenovo представила рабочую станцию ThinkStation P360 Ultra ",
                img: "publication-1.png",
                video: "",
            },
            {
                id: 2,
                type: "image",
                label: "Lenovo представила рабочую станцию ThinkStation P360 Ultra ",
                img: "publication-2.png",
                video: "",
            },
            {
                id: 3,
                type: "video",
                img: "preview.png",
                video: "3GNQL3alB-Y",
            },
        ];
        const banners = [
            {
                id: 0,
                img: "banner-1.png",
            },
            {
                id: 2,
                img: "banner-2.png",
            },
            {
                id: 3,
                img: "banner-3.png",
            },
        ];
        const questions = [
            {
                id: 0,
                name: "Порядок оформления заказа",
                description:
                    "Как правильно и в каком порядке, оформить заказ на сайте",
            },
            {
                id: 1,
                name: "Способы оформления заказа",
                description: "Какие есть виды и способы оформления заказа",
            },
            {
                id: 2,
                name: "Как сделать заказ на другое лицо",
                description:
                    "Как сделать заказ на другое лицо, если на свое не хочется",
            },
            {
                id: 3,
                name: "Как отменить заказ",
                description: "Как и когда можно отменить заказ на сайте",
            },
            {
                id: 4,
                name: "Как выбрать менеджера",
                description: "Как выбрать менеджера который нравится тебе",
            },
        ];
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
            products,
            publications,
            banners,
            questions,
            rangeMinValue,
            rangeMaxValue,
            news,
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
