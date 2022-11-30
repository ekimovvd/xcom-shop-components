<template>
    <div class="site-order">
        <div class="site-order__header">
            <div class="site-order__header-group">
                <h5 class="site-order__header-title">
                    Заказ № {{ order.pk_order }} от {{ order.dtime }} октября
                </h5>
                <span
                    class="site-order__header-tag site-order__header-tag--awaiting"
                >
                    Создано
                </span>
            </div>
            <div class="site-order__header-price">
                <div class="site-order__header-price-block">
                    <div
                        class="site-order__header-price-group site-order__header-price-group--all-price"
                    >
                        <p class="site-order__header-price-label">
                            Общая сумма
                        </p>
                        <p class="site-order__header-price-label">
                            3 453 403 ₽
                        </p>
                    </div>
                    <div
                        class="site-order__header-price-group site-order__header-price-group--remained"
                    >
                        <p class="site-order__header-price-title">
                            Осталось оплатить
                        </p>
                        <p class="site-order__header-price-title">
                            3 453 403 ₽
                        </p>
                    </div>
                    <a class="site-order__header-price-link" href="#">
                        Оплатить
                    </a>
                </div>
                <!-- <p class="site-order__header-price-title">3 453 403 ₽</p> -->
            </div>
        </div>
        <div class="site-order__content">
            <div class="site-order__delivery">
                <div class="site-order__courier">
                    <div class="site-order__courier-info">
                        <div class="site-order__courier-header">
                            <h5 class="site-order__courier-header-title">
                                Доставка курьером
                            </h5>
                            <p class="site-order__courier-header-label">
                                4 октября с 10:00 до 14:00
                            </p>
                        </div>
                        <p class="site-order__courier-address">
                            Адрес: г. Москва, ул. Озерная, д. 19к2
                        </p>
                        <p class="site-order__courier-recipient">
                            Получатель: Александров Иван
                        </p>
                    </div>
                    <div class="site-order__tracker">
                        <div class="site-order__tracker-info">
                            <p class="site-order__tracker-info-label">
                                Трек-номер 1234567
                            </p>
                            <a class="site-order__tracker-info-link" href="#">
                                Отследить
                            </a>
                        </div>
                        <!-- <p class="site-order__tracker-label">
                            Здесь будет ссылка для отслеживания
                        </p> -->
                    </div>
                </div>
            </div>
            <ul class="site-order__list">
                <li
                    class="site-order__item"
                    v-for="item of getItems"
                    :key="item.pk_item"
                >
                    <div class="site-order__item-info">
                        <a class="site-order__item-info-link" href="#">
                            {{ item.model }}
                        </a>
                        <p class="site-order__item-info-label">879334</p>
                        <p class="site-order__item-info-label">
                            Intel Core i3 10100, DDR4, 8 ГБ, SSD 256 ГБ, Intel
                            UHD Graphics 630, DVD-RW, Windows 10 Pro
                        </p>
                    </div>
                    <div class="site-order__item-group">
                        <div class="site-order__item-price">
                            <div class="site-order__item-price-group">
                                <h5 class="site-order__item-price-title">
                                    {{ item.price }} ₽
                                </h5>
                                <p class="site-order__item-price-label">
                                    {{ item.amount }} шт.
                                </p>
                            </div>
                            <a class="site-order__item-price-link" href="#">
                                Рекламация
                            </a>
                        </div>
                        <div class="site-order__item-preview">
                            <img
                                class="site-order__item-preview-img"
                                src="@/assets/images/order/laptop.png"
                                alt="img"
                            />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="site-order__show-all" v-if="getIsVisibleShowAll">
            <button class="site-order__show-all-btn" @click="onShowAll">
                Еще {{ getCountMoreItems }} {{ getDeclinationItems }}
                <img
                    class="site-order__show-all-svg"
                    src="@/assets/images/order/chevron-down.svg"
                    alt="chevron-down"
                />
            </button>
        </div>
    </div>
</template>

<script>
import { computed, ref, toRefs } from "vue";

export default {
    name: "SiteOrder",
    props: {
        order: {
            type: Object,
            required: true,
        },
    },
    created() {
        window.addEventListener("resize", this.onChangeResize);
        this.onChangeResize();
    },
    setup(props) {
        const { order } = toRefs(props);
        const { items } = order.value;
        const isShowAll = ref(false);
        const screenWidth = ref(0);

        const screen = {
            main: 1440,
            medium: 1024,
            small: 768,
        };
        const countItems = {
            main: 5,
            medium: 2,
            two: 2,
            one: 1,
            default: 0,
        };

        const getItemsLength = computed(() => {
            return Object.keys(items).length;
        });

        const getIsVisibleShowAll = computed(() => {
            if (
                screenWidth.value > screen.main &&
                getItemsLength.value > countItems.main &&
                !isShowAll.value
            ) {
                return true;
            } else if (
                screenWidth.value > screen.medium &&
                screenWidth.value <= screen.main &&
                getItemsLength.value > countItems.main &&
                !isShowAll.value
            ) {
                return true;
            }
            return false;
        });

        const getItems = computed(() => {
            if (getIsVisibleShowAll.value && screenWidth.value > screen.main) {
                return Object.fromEntries(
                    Object.entries(items).slice(
                        countItems.default,
                        countItems.main
                    )
                );
            } else if (
                getIsVisibleShowAll.value &&
                screenWidth.value <= screen.main &&
                screenWidth.value > screen.medium
            ) {
                return Object.fromEntries(
                    Object.entries(items).slice(
                        countItems.default,
                        countItems.medium
                    )
                );
            } else if (
                screenWidth.value <= screen.medium &&
                screenWidth.value > screen.small
            ) {
                return Object.fromEntries(
                    Object.entries(items).slice(
                        countItems.default,
                        countItems.two
                    )
                );
            } else if (screenWidth.value <= screen.small) {
                return Object.fromEntries(
                    Object.entries(items).slice(
                        countItems.default,
                        countItems.one
                    )
                );
            }
            return items;
        });

        const getCountMoreItems = computed(() => {
            if (getIsVisibleShowAll.value && screenWidth.value > screen.main) {
                return getItemsLength.value - countItems.main;
            } else if (getIsVisibleShowAll.value) {
                return getItemsLength.value - countItems.medium;
            }
            return countItems.default;
        });

        const getDeclinationItems = computed(() => {
            const words = ["товар", "товара", "товаров"];
            return words[
                getCountMoreItems.value % 100 > 4 &&
                getCountMoreItems.value % 100 < 20
                    ? 2
                    : [2, 0, 1, 1, 1, 2][
                          getCountMoreItems.value % 10 < 5
                              ? Math.abs(getCountMoreItems.value) % 10
                              : 5
                      ]
            ];
        });

        const onShowAll = () => {
            isShowAll.value = true;
        };

        const onChangeResize = () => {
            screenWidth.value = window.innerWidth;
        };

        return {
            getIsVisibleShowAll,
            getItems,
            getCountMoreItems,
            getDeclinationItems,
            onShowAll,
            onChangeResize,
        };
    },
};
</script>

<style lang="sass">
.site-order
    background: $main-white
    border: 1px solid $grays-gray-100
    box-shadow: $large
    border-radius: 20px
    font-family: 'Manrope', sans-serif

    .site-order__header
        padding: 33px 32px 24px 32px
        background: $grays-gray-100
        display: flex
        justify-content: space-between

    .site-order__header-title
        font-weight: 700
        font-size: 16px
        line-height: 20px
        color: $main-black

    .site-order__header-tag
        padding: 4px 8px
        border-radius: 8px
        font-weight: 400
        font-size: 12px
        line-height: 16px
        margin-top: 8px
        display: inline-block

    .site-order__header-tag--created
        color: $main-white
        background: $main-blue

    .site-order__header-tag--partial
        color: $main-white
        background: $other-yellow-300-main

    .site-order__header-tag--pending
        color: $main-white
        background: $other-yellow-300-main

    .site-order__header-tag--way
        color: $main-white
        background: $main-blue

    .site-order__header-tag--awaiting
        color: $main-white
        background: $other-green-200

    .site-order__header-price-block
        display: flex
        flex-direction: column
        align-items: flex-end

    .site-order__header-price-group
        display: flex
        align-items: center
        grid-column-gap: 8px

    .site-order__header-price-group--all-price
        margin-bottom: 8px

    .site-order__header-price-title
        font-weight: 700
        font-size: 16px
        line-height: 20px
        color: $main-black

    .site-order__header-price-label
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $grays-gray-400

    .site-order__header-price-link
        padding: 8px 16px
        background: $main-blue
        border-radius: 8px
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $main-white
        margin-top: 16px

    .site-order__content
        padding: 24px 32px 32px 32px
        display: flex
        flex-direction: column
        grid-row-gap: 24px

    .site-order__courier
        display: flex
        align-items: center
        grid-column-gap: 24px

    .site-order__courier-info
        padding: 8px 16px
        border: 1px solid $main-blue
        border-radius: 8px
        display: flex
        flex-direction: column
        grid-row-gap: 4px

    .site-order__courier-header
        display: flex
        align-items: center
        grid-column-gap: 4px

    .site-order__courier-header-title
        font-weight: 700
        font-size: 16px
        line-height: 20px
        color: $main-black

    .site-order__courier-header-label
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-black

    .site-order__courier-address
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-black

    .site-order__courier-recipient
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-black

    .site-order__tracker-label
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $grays-gray-200

    .site-order__tracker-info
        display: flex
        flex-direction: column
        grid-row-gap: 8px

    .site-order__tracker-info-label
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $main-black

    .site-order__tracker-info-link
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $main-blue
        display: inline-flex

    .site-order__list
        display: flex
        flex-direction: column
        grid-row-gap: 12px

    .site-order__item
        padding: 6px 0 18px 0
        display: flex
        align-items: center
        justify-content: space-between
        border-bottom: 1px solid $grays-gray-100

    .site-order__item-group
        display: flex
        align-items: center
        grid-column-gap: 32px

    .site-order__item-info
        display: flex
        flex-direction: column
        align-items: flex-start
        grid-row-gap: 4px

    .site-order__item-info-link
        font-weight: 700
        font-size: 16px
        line-height: 20px
        color: $main-black
        display: inline-block

    .site-order__item-info-label
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-350

    .site-order__item-price
        display: flex
        flex-direction: column
        grid-row-gap: 11px
        align-items: flex-end

    .site-order__item-price-group
        display: flex
        align-items: center
        grid-column-gap: 4px

    .site-order__item-price-title
        font-weight: 700
        font-size: 16px
        line-height: 20px
        color: $main-black

    .site-order__item-price-label
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-400

    .site-order__item-price-link
        background: $main-white
        border: 1px solid $main-blue
        border-radius: 8px
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $main-blue
        padding: 8px
        text-align: center
        width: 87px

    .site-order__item-preview
        background: $grays-gray-100
        border-radius: 9px
        width: 80px
        height: 80px
        display: flex
        align-items: center
        justify-content: center

    .site-order__show-all
        padding-bottom: 32px
        display: flex
        align-items: center
        justify-content: center

    .site-order__show-all-btn
        background: none
        outline: none
        cursor: pointer
        border: none
        padding: 0
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $main-blue
        display: flex
        align-items: center
        justify-content: center
        grid-column-gap: 4px

@media screen and (max-width: 1440px)
    .site-order
        .site-order__header
            padding: 32px

        .site-order__content
            padding: 24px 16px

        .site-order__courier-info
            grid-row-gap: 5px

        .site-order__tracker
            display: none

        .site-order__tracker-label
            display: none

        .site-order__item
            padding: 0 0 6px 0

        .site-order__item-info
            width: 370px
            padding-top: 6px

        .site-order__item-price
            grid-row-gap: 30px

@media screen and (max-width: 1024px)
    .site-order
        .site-order__header
            padding-bottom: 24px

        .site-order__content
            padding: 24px 32px 32px 32px

        .site-order__item-info
            padding: 0

        .site-order__item-group
            grid-column-gap: 12px

        .site-order__show-all
            display: none

@media screen and (max-width: 768px)
    .site-order
        .site-order__header
            padding: 24px 16px
            flex-direction: column
            grid-row-gap: 8px

        .site-order__header-price-block
            align-items: flex-start

        .site-order__header-price-group--remained
            flex-direction: column
            align-items: flex-start
            grid-row-gap: 8px

        .site-order__content
            padding: 24px 16px 32px 16px

        .site-order__courier-header
            flex-direction: column
            align-items: flex-start
            grid-row-gap: 4px

        .site-order__courier-info
            grid-row-gap: 4px

        .site-order__item
            flex-direction: column
            align-items: flex-start
            padding-bottom: 8px

        .site-order__item-info
            width: 100%

        .site-order__item-group
            flex-direction: column
            align-items: flex-start
            grid-row-gap: 16px
            margin-top: 10px

        .site-order__item-price
            align-items: flex-start
            grid-row-gap: 22px
</style>
