<template>
    <SiteHeader />
    <div class="catalog">
        <SiteFilters class="catalog__filters" :filters="filters" />
        <SiteProducts :products="products" />
    </div>
    <div class="user">
        <SiteUserCard :user="user" />
        <SiteUserStatus :user="user" />
        <SiteUserAdvantages :user="user" />
    </div>
    <div class="addresses">
        <SiteAddresses :addresses="addresses" />
    </div>
    <div class="counterparties">
        <SiteCounterparties :counterparties="counterparties" />
    </div>
    <div class="appeals">
        <SiteAppeals :appeals="appeals" />
        <SiteSpecialists />
    </div>
    <div class="container">
        <SiteTile :tile="tile" />
        <SiteTileServices :services="tileServices" />
        <SiteReviews :reviews="reviews" />
        <SiteQuestions :questions="questions" />
        <SiteMaterials :materials="materials" />
        <SitePaymentSuccess :order="paymentSuccess" />
        <SitePaymentError :order="paymentError" />
        <SiteNotifications />
        <SiteCoins />
        <SiteSales :sales="sales" />
        <SitePublications :publications="publications" />
        <SiteBanners :banners="banners" />
        <SiteProfileCards />
        <SiteFrequentQuestions
            title="Оформление заказа"
            :questions="frequentQuestions"
        />
        <SiteOrders />
        <SiteContacts />
        <SiteSupport />
        <SiteFeedbackSuccess />
    </div>
    <SiteExperts />
    <SiteConfigurator />
    <SiteServices />
    <SiteNews :news="news" />
    <SiteStay />
    <SiteFooter />
</template>

<script>
import SiteHeader from "@/components/site-header/site-header.vue";
import SiteFilters from "@/components/SiteFilters/SiteFilters.vue";
import SiteProducts from "@/components/SiteProducts/SiteProducts.vue";
import SiteUserCard from "@/components/SiteUserCard/SiteUserCard.vue";
import SiteUserAdvantages from "@/components/SiteUserAdvantages/SiteUserAdvantages.vue";
import SiteUserStatus from "@/components/SiteUserStatus/SiteUserStatus.vue";
import SiteAddresses from "@/components/SiteAddresses/SiteAddresses.vue";
import SiteCounterparties from "@/components/SiteCounterparties/SiteCounterparties.vue";
import SiteAppeals from "@/components/SiteAppeals/SiteAppeals.vue";
import SiteSales from "@/components/SiteSales/SiteSales.vue";
import SitePublications from "@/components/SitePublications/SitePublications.vue";
import SiteBanners from "@/components/SiteBanners/SiteBanners.vue";
import SiteProfileCards from "@/components/SiteProfileCards/SiteProfileCards.vue";
import SiteFrequentQuestions from "./components/SiteFrequentQuestions/SiteFrequentQuestions.vue";
import SiteOrders from "./components/SiteOrders/SiteOrders.vue";
import SiteContacts from "@/components/SiteContacts/SiteContacts.vue";
import SiteSupport from "./components/SiteSupport/SiteSupport.vue";
import SiteExperts from "@/components/site-experts/site-experts.vue";
import SiteConfigurator from "@/components/site-configurator/site-configurator.vue";
import SiteServices from "@/components/site-services/site-services.vue";
import SiteNews from "@/components/site-news/site-news.vue";
import SiteStay from "@/components/site-stay/site-stay.vue";
import SiteFooter from "@/components/site-footer/site-footer.vue";
import SiteCoins from "@/components/SiteCoins/SiteCoins.vue";
import SiteSpecialists from "@/components/SiteSpecialists/SiteSpecialists.vue";
import SiteFeedbackSuccess from "@/components/SiteFeedbackSuccess/SiteFeedbackSuccess.vue";
import SiteNotifications from "@/components/SiteNotifications/SiteNotifications.vue";
import SitePaymentSuccess from "@/components/SitePaymentSuccess/SitePaymentSuccess.vue";
import SitePaymentError from "@/components/SitePaymentError/SitePaymentError.vue";
import SiteReviews from "@/components/SiteReviews/SiteReviews.vue";
import SiteTile from "@/components/SiteTile/SiteTile.vue";
import SiteQuestions from "@/components/SiteQuestions/SiteQuestions.vue";
import SiteMaterials from "@/components/SiteMaterials/SiteMaterials.vue";
import SiteTileServices from "@/components/SiteTileServices/SiteTileServices.vue";

export default {
    name: "App",
    components: {
        SiteHeader,
        SiteFilters,
        SiteProducts,
        SiteUserCard,
        SiteUserAdvantages,
        SiteUserStatus,
        SiteAddresses,
        SiteCounterparties,
        SiteAppeals,
        SiteSales,
        SitePublications,
        SiteBanners,
        SiteProfileCards,
        SiteFrequentQuestions,
        SiteOrders,
        SiteContacts,
        SiteSupport,
        SiteExperts,
        SiteConfigurator,
        SiteServices,
        SiteNews,
        SiteStay,
        SiteFooter,
        SiteCoins,
        SiteSpecialists,
        SiteFeedbackSuccess,
        SiteNotifications,
        SitePaymentSuccess,
        SitePaymentError,
        SiteReviews,
        SiteTile,
        SiteQuestions,
        SiteMaterials,
        SiteTileServices,
    },
    setup() {
        const filters = [
            {
                id: 0,
                type: "checkbox",
                title: "Бренд",
                list: [
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
                ],
            },
            {
                id: 2,
                type: "range",
                title: "Цена",
                min: 0,
                max: 4500,
            },
            {
                id: 2,
                type: "radio",
                title: "Бренд",
                list: [
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
                ],
            },
        ];

        const sales = [
            {
                id: 0,
                type: "img",
                img: {
                    link: "img-1.png",
                    position: "left",
                },
                tag: {
                    label: "Специальные условия",
                    labelColor: "#282A2D",
                    backgroundColor: "#F6F8FD",
                },
                name: {
                    label: "Принимаем бонусы СПАСИБО от Сбера",
                    color: "#282A2D",
                },
                backgroundColor: "232.21deg, #46E2AE 0%, #AFE71F 100%",
                isGradient: true,
            },
            {
                id: 1,
                type: "tile",
                img: {
                    link: "img-2.png",
                    position: "center",
                },
                tag: {
                    label: "Скидка",
                    labelColor: "#157FF8",
                    backgroundColor: "#FFFFFF",
                },
                name: {
                    label: "Сплит-система Ballu",
                    color: "#ffffff",
                },
                description: "BSEP-09HN1",
                price: {
                    value: 36350,
                    backgroundColor: "#157FF8",
                    labelColor: "#FFFFFF",
                },
                priceOld: {
                    value: 36350,
                    backgroundColor: "#FFFFFF",
                    labelColor: "#B1B1BD",
                },
                backgroundColor: "52.21deg, #0DFFC5 0%, #3354FF 100%",
                isGradient: true,
            },
            {
                id: 2,
                img: {
                    link: "img-3.png",
                    position: "left",
                },
                tag: {
                    label: "Новинка",
                    labelColor: "#157FF8",
                    backgroundColor: "#FFFFFF",
                },
                name: {
                    label: "Кабель интерфейсный HDMI Filum",
                    color: "#ffffff",
                },
                description: "DS-2CD2123G2-IS(2.8MM)",
                price: {
                    value: 36350,
                    backgroundColor: "#FFFFFF",
                    labelColor: "#282A2D",
                },
                backgroundColor: "#157FF8",
                isGradient: false,
            },
            {
                id: 3,
                type: "img",
                img: {
                    link: "img-1.png",
                    position: "left",
                },
                tag: {
                    label: "Специальные условия",
                    labelColor: "#282A2D",
                    backgroundColor: "#F6F8FD",
                },
                name: {
                    label: "Принимаем бонусы СПАСИБО от Сбера",
                    color: "#282A2D",
                },
                backgroundColor: "232.21deg, #46E2AE 0%, #AFE71F 100%",
                isGradient: true,
            },
        ];
        const products = [
            {
                id: 0,
                type: "tile",
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
                priceOld: 51686,
                priceCurrent: 43925,
            },
            {
                id: 1,
                type: "tile",
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
                priceOld: 51686,
                priceCurrent: 43925,
            },
            {
                id: 2,
                type: "tile",
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
                priceOld: 51686,
                priceCurrent: 43925,
            },
            {
                id: 3,
                type: "banner",
                title: "Ноутбуки для работы",
                link: "#",
            },
            {
                id: 4,
                type: "tile",
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
                priceOld: 51686,
                priceCurrent: 43925,
            },
        ];

        const publications = [
            {
                id: 0,
                type: "video",
                preview: "preview.png",
                video: "3GNQL3alB-Y",
            },
            {
                id: 1,
                type: "image",
                label: "Lenovo представила рабочую станцию ThinkStation P360 Ultra ",
                img: "image.png",
                video: "",
                backgroundColor: "#FFCE68",
                labelColor: "#1F1C34",
            },
            {
                id: 2,
                type: "image",
                label: "Lenovo представила рабочую станцию ThinkStation P360 Ultra ",
                img: "image.png",
                video: "",
                backgroundColor: "#69696D",
                labelColor: "#FFFFFF",
            },
            {
                id: 3,
                type: "video",
                preview: "preview.png",
                video: "3GNQL3alB-Y",
                backgroundColor: "#69696D",
                labelColor: "#FFFFFF",
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
        const frequentQuestions = [
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

        const addresses = [
            {
                id: 0,
                address: "Москва, Ул Горького 123, Подъезд 3, этаж 5, кв. 445",
                body: "3",
                entrance: "1",
                floor: "7",
                flat: "739",
                comment: "Тестовый комментарий",
            },
            {
                id: 1,
                address: "Москва, Ул Горького 123, Подъезд 3, этаж 5, кв. 445",
                body: "3",
                entrance: "1",
                floor: "7",
                flat: "739",
                comment: "Тестовый комментарий",
            },
            {
                id: 2,
                address: "Москва, Ул Горького 123, Подъезд 3, этаж 5, кв. 445",
                body: "3",
                entrance: "1",
                floor: "7",
                flat: "739",
                comment: "Тестовый комментарий",
                pvz: "ПВЗ Семеновский",
            },
        ];

        const counterparties = [
            {
                id: 0,
                name: "ООО Компания",
                inn: "ИНН 7785426321",
                checkpoint: "checkpoint",
                address: "Москва, Ул Горького 123, Подъезд 3, этаж 5, кв. 445",
            },
            {
                id: 1,
                name: "ООО Компания",
                inn: "ИНН 7785426321",
                checkpoint: "checkpoint",
                address: "Москва, Ул Горького 123, Подъезд 3, этаж 5, кв. 445",
            },
            {
                id: 2,
                name: "ООО Компания",
                inn: "ИНН 7785426321",
                checkpoint: "checkpoint",
                address: "Москва, Ул Горького 123, Подъезд 3, этаж 5, кв. 445",
            },
        ];

        const appeals = [
            {
                id: 1,
                type: "Ремонт",
                reason: "Следы использования",
                description: "Хочу вернуть данную технику",
                date: "28.03.2021",
                tag: "consideration",
                buyer: {
                    name: "Контакты покупателя: Александров Иван, ООО “Компания”",
                },
                product: {
                    name: "Ноутбук Acer EX215-32-C4FB Extensa",
                    article: "879334",
                    description:
                        "Intel Core i3 10100, DDR4, 8 ГБ, SSD 256 ГБ, Intel UHD Graphics 630, DVD-RW, Windows 10 Pro",
                },
                images: [
                    {
                        id: 0,
                        img: "product.png",
                    },
                    {
                        id: 1,
                        img: "product.png",
                    },
                ],
                amount: 39940,
                notification:
                    "Продавец рассмотрит заявку и примет решение по возврату до 25 марта включительно. Точка, куда нужно будет принести товары будет указана на странице заявки после подтверждения возврата продавцом.",
                shop: {
                    address:
                        "143442, Московская обл, Красногорский р-н, Пятницкое ш автодорога, 7-й км тер, дом № 2",
                    schedule: "Пн - Пт: 9:00 - 20:00 Вс - Сб: 10:00 - 18:00",
                },
            },
            {
                id: 2,
                type: "Ремонт",
                reason: "Следы использования",
                description: "Хочу вернуть данную технику",
                date: "28.03.2021",
                tag: "refund",
                buyer: {
                    name: "Контакты покупателя: Александров Иван, ООО “Компания”",
                },
                product: {
                    name: "Ноутбук Acer EX215-32-C4FB Extensa",
                    article: "879334",
                    description:
                        "Intel Core i3 10100, DDR4, 8 ГБ, SSD 256 ГБ, Intel UHD Graphics 630, DVD-RW, Windows 10 Pro",
                },
                images: [
                    {
                        id: 0,
                        img: "product.png",
                    },
                    {
                        id: 1,
                        img: "product.png",
                    },
                ],
                amount: 39940,
                notification:
                    "Продавец рассмотрит заявку и примет решение по возврату до 25 марта включительно. Точка, куда нужно будет принести товары будет указана на странице заявки после подтверждения возврата продавцом.",
            },
            {
                id: 3,
                type: "Ремонт",
                reason: "Следы использования",
                description: "Хочу вернуть данную технику",
                date: "28.03.2021",
                tag: "refundCanceled",
                buyer: {
                    name: "Контакты покупателя: Александров Иван, ООО “Компания”",
                },
                tile: {
                    name: "Шины Nokian Hakkapeliitta 9 SUV 265/60 R18 114T XL",
                    quantity: 1,
                },
                images: [
                    {
                        id: 0,
                        img: "product.png",
                    },
                    {
                        id: 1,
                        img: "product.png",
                    },
                ],
                amount: 39940,
                notification: "Товары не были возвращены продавцу",
                shop: {
                    address:
                        "143442, Московская обл, Красногорский р-н, Пятницкое ш автодорога, 7-й км тер, дом № 2",
                    schedule: "Пн - Пт: 9:00 - 20:00 Вс - Сб: 10:00 - 18:00",
                },
            },
            {
                id: 4,
                type: "Ремонт",
                reason: "Следы использования",
                description: "Хочу вернуть данную технику",
                date: "28.03.2021",
                tag: "returned",
                buyer: {
                    name: "Контакты покупателя: Александров Иван, ООО “Компания”",
                },
                product: {
                    name: "Ноутбук Acer EX215-32-C4FB Extensa",
                    article: "879334",
                    description:
                        "Intel Core i3 10100, DDR4, 8 ГБ, SSD 256 ГБ, Intel UHD Graphics 630, DVD-RW, Windows 10 Pro",
                },
                images: [
                    {
                        id: 0,
                        img: "product.png",
                    },
                    {
                        id: 1,
                        img: "product.png",
                    },
                ],
                amount: 39940,
                notification:
                    "Продавец рассмотрит заявку и примет решение по возврату до 25 марта включительно. Точка, куда нужно будет принести товары будет указана на странице заявки после подтверждения возврата продавцом.",
            },
        ];

        const user = {
            name: "Николай Иванов",
            coins: 10000,
            phone: "+7 (903) 221 86 17",
            email: "ivanov@gmail.com",
            status: {
                name: "Профессионал",
                amount: 100500,
            },
            nextStatus: {
                name: "Эксперт",
                amount: 511000,
            },
        };

        const paymentSuccess = {
            id: 48758754753,
            client: "Александров Александр, 89032218617",
            address: "Москва, ул. Народного Ополчения, д.53, кв. 70",
        };

        const paymentError = {
            id: 48758754753,
            description: "Не удалось оплатить заказ",
        };

        const reviews = [
            {
                id: 1,
                name: "Петр",
                rating: 3.2,
                date: "08 июня 2021 г.",
                comment: "",
            },
            {
                id: 2,
                name: "Александр",
                rating: 4.9,
                date: "08 июня 2021 г.",
                comment:
                    "Cчитаю ноутбук отличным преобретением. В целом, это тот же Acer Aspire 3, только в матовом корпусе. Aspire 3 будет практичнее, потому что там корпус из структурированного пластика и там остается меньше отпечатков и пыли, но серия Extensa выглядит солиднее, а иногда и чуть дешевле. Не сразу привык к клавиатуре. Нажатия немного отличаются, от прошлого ноутбука Cчитаю ноутбук отличным преобретением! В целом, это тот же Acer Aspire 3, только в матовом корпусе. Aspire 3 будет практичнее, потому что там корпус из структурированного пластика и там остается меньше отпечатков и пыли, но серия Extensa выглядит солиднее, а иногда и чуть дешевле. Не сразу привык к клавиатуре. Нажатия немного отличаются, от прошлого ноутбука",
            },
            {
                id: 3,
                name: "Петр",
                rating: 3.8,
                date: "08 июня 2021 г.",
                comment:
                    "Экранчик не очень, а к остальному претензий нет. Шустрый, много места на диска, много оперативы, винда установлена. В общем все что нужно для работы.",
            },
            {
                id: 4,
                name: "Петр",
                rating: 2.8,
                date: "08 июня 2021 г.",
                comment:
                    "Экранчик не очень, а к остальному претензий нет. Шустрый, много места на диска, много оперативы, винда установлена. В общем все что нужно для работы.",
            },
            {
                id: 5,
                name: "Петр",
                rating: 5,
                date: "08 июня 2021 г.",
                comment:
                    "Экранчик не очень, а к остальному претензий нет. Шустрый, много места на диска, много оперативы, винда установлена. В общем все что нужно для работы.",
            },
            {
                id: 6,
                name: "Петр",
                rating: 5,
                date: "08 июня 2021 г.",
                comment:
                    "Экранчик не очень, а к остальному претензий нет. Шустрый, много места на диска, много оперативы, винда установлена. В общем все что нужно для работы.",
            },
            {
                id: 7,
                name: "Петр",
                rating: 1.2,
                date: "08 июня 2021 г.",
                comment:
                    "Экранчик не очень, а к остальному претензий нет. Шустрый, много места на диска, много оперативы, винда установлена. В общем все что нужно для работы.",
            },
            {
                id: 8,
                name: "Петр",
                rating: 2.8,
                date: "08 июня 2021 г.",
                comment:
                    "Экранчик не очень, а к остальному претензий нет. Шустрый, много места на диска, много оперативы, винда установлена. В общем все что нужно для работы.",
            },
            {
                id: 9,
                name: "Петр",
                rating: 2.8,
                date: "08 июня 2021 г.",
                comment:
                    "Экранчик не очень, а к остальному претензий нет. Шустрый, много места на диска, много оперативы, винда установлена. В общем все что нужно для работы.",
            },
            {
                id: 10,
                name: "Петр",
                rating: 2.8,
                date: "08 июня 2021 г.",
                comment:
                    "Экранчик не очень, а к остальному претензий нет. Шустрый, много места на диска, много оперативы, винда установлена. В общем все что нужно для работы.",
            },
            {
                id: 11,
                name: "Петр",
                rating: 2.8,
                date: "08 июня 2021 г.",
                comment:
                    "Экранчик не очень, а к остальному претензий нет. Шустрый, много места на диска, много оперативы, винда установлена. В общем все что нужно для работы.",
            },
            {
                id: 12,
                name: "Петр",
                rating: 2.8,
                date: "08 июня 2021 г.",
                comment:
                    "Экранчик не очень, а к остальному претензий нет. Шустрый, много места на диска, много оперативы, винда установлена. В общем все что нужно для работы.",
            },
            {
                id: 13,
                name: "Петр",
                rating: 2.8,
                date: "08 июня 2021 г.",
                comment:
                    "Экранчик не очень, а к остальному претензий нет. Шустрый, много места на диска, много оперативы, винда установлена. В общем все что нужно для работы.",
            },
            {
                id: 14,
                name: "Петр",
                rating: 2.8,
                date: "08 июня 2021 г.",
                comment:
                    "Экранчик не очень, а к остальному претензий нет. Шустрый, много места на диска, много оперативы, винда установлена. В общем все что нужно для работы.",
            },
        ];

        const tile = {
            name: "Право на использование (электронно) Dr.Web Desktop Security Suite Комплексная Защита, ЦУ, 75 ПК, продление 1 год для мед.учрежд.",
            description:
                "Intel Core i3 10100, DDR4, 8 ГБ, SSD 256 ГБ, Intel UHD Graphics 630, DVD-RW, Windows 10 Pro",
            rating: 3.7,
            code: 879334,
            price: 111628,
            priceOld: 115240,
            coins: 1117,
            warranty: "12 месяцев",
            pickpoint: "сегодня",
            delivery: "завтра",
            pickup: "03.10.2022",
            available: true,
            reviews: [
                {
                    id: 0,
                    comment: "Test comment",
                },
            ],
            previews: [
                {
                    id: 0,
                    type: "3d",
                },
                {
                    id: 1,
                    type: "video",
                },
                {
                    id: 2,
                    type: "img",
                    img: require("@/assets/images/tile-img/preview-1.png"),
                },
                {
                    id: 3,
                    type: "img",
                    img: require("@/assets/images/tile-img/preview-2.png"),
                },
                {
                    id: 4,
                    type: "img",
                    img: require("@/assets/images/tile-img/preview-1.png"),
                },
                {
                    id: 5,
                    type: "img",
                    img: require("@/assets/images/tile-img/preview-2.png"),
                },
            ],
            tags: [
                {
                    id: 0,
                    label: "NEW",
                    style: "yellow",
                },
                {
                    id: 1,
                    label: "-20%",
                    style: "red",
                },
                {
                    id: 2,
                    label: "Скидка 🔥",
                    style: "blue",
                },
                {
                    id: 3,
                    label: "NEW",
                    style: "green",
                },
                {
                    id: 4,
                    label: "Cashback",
                    style: "yellow",
                },
                {
                    id: 5,
                    label: "NEW",
                    style: "yellow",
                },
                {
                    id: 6,
                    label: "-20%",
                    style: "red",
                },
                {
                    id: 7,
                    label: "Скидка 🔥",
                    style: "blue",
                },
                {
                    id: 8,
                    label: "NEW",
                    style: "green",
                },
                {
                    id: 9,
                    label: "Cashback",
                    style: "yellow",
                },
            ],
        };

        const questions = [
            {
                id: 0,
                name: "Александр",
                date: "08 июня 2021 г.",
                label: "Ноут разборный? Возможно увеличить оперативку и ssd?",
            },
            {
                id: 1,
                name: "Эксперт Xcom",
                date: "08 июня 2021 г.",
                label: "Разборный,ssd можно заменить на больший по объёму",
            },
        ];

        const materials = [
            {
                id: 0,
                name: "Инструкция для Acer Aspire 3A315-36",
                size: "4.4 Мб",
                link: "#",
            },
            {
                id: 1,
                name: "Сертификат: персональные данные",
                size: "",
                link: "#",
            },
        ];

        const tileServices = [
            {
                id: 0,
                name: "Продление гарантии",
                amount: 4600,
                variants: [
                    {
                        id: 0,
                        label: "+1 год",
                    },
                    {
                        id: 1,
                        label: "+2 года",
                    },
                    {
                        id: 2,
                        label: "+3 года",
                    },
                ],
            },
            {
                id: 0,
                name: "Продление страховки",
                amount: 6600,
                variants: [
                    {
                        id: 0,
                        label: "+1 год",
                    },
                    {
                        id: 1,
                        label: "+2 года",
                    },
                    {
                        id: 2,
                        label: "+3 года",
                    },
                ],
            },
            {
                id: 0,
                name: "Установка ПО",
                amount: 4600,
                variants: [],
            },
            {
                id: 0,
                name: "Страховой полис",
                amount: 4600,
                variants: [],
            },
        ];

        return {
            filters,
            products,
            sales,
            publications,
            banners,
            frequentQuestions,
            news,
            addresses,
            counterparties,
            appeals,
            user,
            paymentSuccess,
            paymentError,
            reviews,
            tile,
            questions,
            materials,
            tileServices,
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

.catalog
    @include container
    display: flex
    align-items: flex-start
    grid-column-gap: 24px

.catalog__filters
    @media screen and (max-width: 1024px)
        display: none

.user
    @include container
    display: flex
    flex-wrap: wrap
    grid-gap: 24px

.addresses
    @include container

.appeals
    @include container

.counterparties
    @include container
</style>
