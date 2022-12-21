<template>
    <div class="site-tile-basket">
        <div class="site-tile-basket__header">
            <div class="site-tile-basket__header-info">
                <div class="site-tile-basket__prices">
                    <p class="site-tile-basket__price" v-if="getPriceIsShow">
                        {{ getPrice }} ₽
                    </p>
                    <p
                        class="site-tile-basket__price-old"
                        v-if="getPriceOldIsShow"
                    >
                        {{ getPriceOld }} ₽
                    </p>
                </div>
            </div>
            <div class="site-tile-basket__company">
                <img
                    class="site-tile-basket__company-img"
                    src="@/assets/images/tile-basket/acer.png"
                    alt="acer"
                />
                <div class="site-tile-basket__tooltip">
                    <div class="site-tile-basket__tooltip-wrapper">
                        <p class="site-tile-basket__tooltip-label">
                            Acer — тайваньская компания по производству
                            компьютерной техники и электроники.
                        </p>
                        <img
                            class="site-tile-basket__tooltip-triangle"
                            src="@/assets/images/tile-basket/triangle.svg"
                            alt="triangle"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="site-tile-basket__coins" v-if="getCoinsIsShow">
            <img
                class="site-tile-basket__coins-img"
                src="@/assets/images/tile-basket/coins.svg"
                alt="img"
            />
            <p class="site-tile-basket__coins-label">
                {{ getCoins }} {{ getCoinsDecline }}
            </p>
        </div>

        <div class="site-tile-basket__buttons">
            <button class="site-tile-basket__button" @click="onCart">
                Добавить в корзину
            </button>
            <button
                class="site-tile-basket__button site-tile-basket__button--outline"
                @click="onPay"
            >
                Купить в один клик
            </button>
        </div>

        <div class="site-tile-basket__warranty">
            <img
                class="site-tile-basket__warranty-img"
                src="@/assets/images/tile-basket/shield.svg"
                alt="shield"
            />
            <p class="site-tile-basket__warranty-label">
                Гарантия {{ tile.warranty }}
            </p>
        </div>

        <div class="site-tile-basket__info">
            <div class="site-tile-basket__location">
                <img
                    class="site-tile-basket__location-img"
                    src="@/assets/images/tile-basket/location.svg"
                    alt="location"
                />
                <p class="site-tile-basket__location-label">Москва</p>
                <button
                    class="site-tile-basket__location-button"
                    @click="onLocation"
                >
                    Выбрать другой город
                </button>
            </div>
            <div class="site-tile-basket__delivery">
                <img
                    class="site-tile-basket__delivery-img"
                    src="@/assets/images/tile-basket/pickpoint.svg"
                    alt="pickpoint"
                />
                <p class="site-tile-basket__delivery-label">Самовывоз</p>
                <p class="site-tile-basket__delivery-description">
                    {{ tile.pickpoint }}
                </p>
            </div>
            <div class="site-tile-basket__delivery">
                <img
                    class="site-tile-basket__delivery-img"
                    src="@/assets/images/tile-basket/delivery.svg"
                    alt="delivery"
                />
                <p class="site-tile-basket__delivery-label">
                    Доставка до двери
                </p>
                <p class="site-tile-basket__delivery-description">
                    {{ tile.delivery }}
                </p>
            </div>
            <div class="site-tile-basket__pickup">
                <img
                    class="site-tile-basket__pickup-img"
                    src="@/assets/images/tile-basket/pickup.svg"
                    alt="img"
                />
                <div class="site-tile-basket__pickup-group">
                    <p class="site-tile-basket__pickup-label">
                        Передача в транспортную компанию
                    </p>
                    <p class="site-tile-basket__pickup-description">
                        {{ tile.pickup }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, toRefs } from "vue";

import { onNumberWithSpaces, onDecline } from "@/utils/functions.js";

export default {
    name: "SiteTileBasket",
    props: {
        tile: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const { tile } = toRefs(props);

        const getPrice = computed(() => {
            return onNumberWithSpaces(tile.value.price);
        });

        const getPriceIsShow = computed(() => {
            return getPrice.value;
        });

        const getPriceOld = computed(() => {
            return onNumberWithSpaces(tile.value.priceOld);
        });

        const getPriceOldIsShow = computed(() => {
            return getPriceOld.value;
        });

        const getCoins = computed(() => {
            return onNumberWithSpaces(tile.value.coins);
        });

        const getCoinsIsShow = computed(() => {
            return getCoins.value;
        });

        const getCoinsDecline = computed(() => {
            return onDecline(["бонус", "", "а", "ов"])(getCoins.value);
        });

        const onCart = () => {
            console.log("On Cart");
        };

        const onPay = () => {
            console.log("On Pay");
        };

        const onLocation = () => {
            console.log("On Location");
        };

        return {
            getPrice,
            getPriceIsShow,
            getPriceOld,
            getPriceOldIsShow,
            getCoins,
            getCoinsIsShow,
            getCoinsDecline,
            onCart,
            onPay,
            onLocation,
        };
    },
};
</script>

<style lang="sass">
.site-tile-basket
    font-family: 'Manrope', sans-serif
    padding: 32px
    background: $main-white
    border: 1px solid $new-gray-200
    border-radius: 24px

    .site-tile-basket__header
        display: flex
        align-items: flex-start
        justify-content: space-between

    .site-tile-basket__prices
        display: flex
        align-items: center
        grid-column-gap: 12px

    .site-tile-basket__price
        font-weight: 600
        font-size: 28px
        line-height: 32px
        color: $main-black

    .site-tile-basket__price-old
        font-weight: 600
        font-size: 16px
        line-height: 22px
        color: $grays-gray-350
        text-decoration: line-through $other-red-200-main

    .site-tile-basket__company
        position: relative

    .site-tile-basket__company-img
        width: 89px

    .site-tile-basket__company .site-tile-basket__tooltip
        visibility: hidden

    .site-tile-basket__company:hover .site-tile-basket__tooltip
        visibility: visible

    .site-tile-basket__tooltip
        position: absolute
        bottom: 36px
        left: 20px
        transition: visibility 0.2s ease-in

    .site-tile-basket__tooltip-wrapper
        width: 220px
        padding: 12px 16px
        position: relative
        background: $main-white
        box-shadow: $small-down
        border-radius: 8px

    .site-tile-basket__tooltip-triangle
        position: absolute
        left: 16px
        bottom: -8px

    .site-tile-basket__tooltip-label
        font-weight: 400
        font-size: 12px
        line-height: 16px
        color: $main-black

    .site-tile-basket__coins
        display: flex
        align-items: center
        grid-column-gap: 8px
        margin-top: 16px

    .site-tile-basket__coins-label
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $secondary-blue-200

    .site-tile-basket__buttons
        display: flex
        align-items: center
        grid-column-gap: 12px
        margin-top: 40px

    .site-tile-basket__button
        padding: 13px 32px
        display: flex
        align-items: center
        justify-content: center
        background: $main-blue
        border: 1px solid $main-blue
        border-radius: 8px
        outline: none
        cursor: pointer
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-white
        width: 100%

    .site-tile-basket__button--outline
        background: transparent
        color: $main-blue

    .site-tile-basket__warranty
        display: flex
        align-items: center
        grid-column-gap: 8px
        padding: 18px 0
        border-radius: 1px
        border: 1px solid $new-gray-200
        border-right: none
        border-left: none
        margin-top: 16px

    .site-tile-basket__warranty-label
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $new-gray-500

    .site-tile-basket__info
        display: flex
        flex-direction: column
        grid-row-gap: 16px
        margin-top: 16px

    .site-tile-basket__location
        display: flex
        align-items: center

    .site-tile-basket__location-img
        margin-right: 12px

    .site-tile-basket__location-label
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $main-black
        margin-right: 4px

    .site-tile-basket__location-button
        font-family: 'Manrope', sans-serif
        font-weight: 400
        font-size: 12px
        line-height: 16px
        color: $main-blue
        cursor: pointer
        background: none
        outline: none
        border: none
        padding: 2px 0 0 0

    .site-tile-basket__delivery
        display: flex
        align-items: center

    .site-tile-basket__delivery-img
        margin-right: 12px

    .site-tile-basket__delivery-label
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $main-black
        margin-right: 4px

    .site-tile-basket__delivery-description
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-350

    .site-tile-basket__pickup
        display: flex
        align-items: center
        grid-column-gap: 12px

    .site-tile-basket__pickup-group
        display: flex
        align-items: center
        grid-column-gap: 4px

    .site-tile-basket__pickup-label
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $main-black

    .site-tile-basket__pickup-description
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-350

@media screen and (max-width: 1440px)
    .site-tile-basket
        .site-tile-basket__prices
            grid-column-gap: 4px

        .site-tile-basket__buttons
            flex-direction: column
            grid-row-gap: 12px

        .site-tile-basket__pickup-group
            flex-direction: column
            align-items: flex-start

@media screen and (max-width: 1024px)
    .site-tile-basket
        .site-tile-basket__prices
            flex-direction: column-reverse
            align-items: flex-start
            grid-row-gap: 4px

        .site-tile-basket__pickup-group
            flex-direction: row

        .site-tile-basket__tooltip
            left: auto
            right: 0

        .site-tile-basket__tooltip-triangle
            left: auto
            right: 16px

@media screen and (max-width: 768px)
    .site-tile-basket
        padding: 32px 24px

        .site-tile-basket__coins
            margin-top: 24px

        .site-tile-basket__warranty
            padding: 0
            border: none

        .site-tile-basket__pickup-group
            flex-direction: column
            grid-row-gap: 4px
</style>
