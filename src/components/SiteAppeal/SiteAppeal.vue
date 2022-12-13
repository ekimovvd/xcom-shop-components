<template>
    <div class="site-appeal">
        <div class="site-appeal__header">
            <span class="site-appeal__header-tag" :class="getTagViewClass">
                {{ getTag }}
            </span>
            <div class="site-appeal__header-group">
                <h5 class="site-appeal__header-title">
                    Сумма к возврату {{ getAmount }} ₽
                </h5>
                <button class="site-appeal__header-info">
                    <img
                        class="site-appeal__header-info-icon"
                        src="@/assets/images/appeal/info.svg"
                        alt="info"
                    />
                </button>
            </div>
        </div>
        <div class="site-appeal__buyer">
            <h5 class="site-appeal__buyer-title">№ {{ appeal.id }}</h5>
            <p class="site-appeal__buyer-label">
                {{ appeal.buyer.name }}
            </p>
            <p class="site-appeal__buyer-date">
                {{ appeal.date }}
            </p>
        </div>
        <div class="site-appeal__notification">
            <img
                class="site-appeal__notification-icon"
                src="@/assets/images/appeal/info-gray.svg"
                alt="info-gray"
            />
            <p class="site-appeal__notification-label">
                {{ appeal.notification }}
            </p>
        </div>
        <div class="site-appeal__shop" v-if="getShopIsShow">
            <h6 class="site-appeal__shop-title">Возврат товаров в магазин</h6>
            <div class="site-appeal__shop-group">
                <img
                    class="site-appeal__shop-img"
                    src="@/assets/images/appeal/shop.svg"
                    alt="img"
                />
                <div class="site-appeal__shop-info">
                    <p class="site-appeal__shop-label">Пункт выдачи</p>
                    <p class="site-appeal__shop-address">
                        {{ appeal.shop.address }}
                    </p>
                    <p class="site-appeal__shop-schedule">
                        {{ appeal.shop.schedule }}
                    </p>
                    <button class="site-appeal__shop-map" @click="onMap">
                        Показать на карте
                    </button>
                </div>
            </div>
        </div>
        <div class="site-appeal__refund">
            <h6 class="site-appeal__refund-title">Товар к возврату</h6>
            <div class="site-appeal__product" v-if="getProductIsShow">
                <div class="site-appeal__product-info">
                    <h5 class="site-appeal__product-title" href="#">
                        {{ appeal.product.name }}
                    </h5>
                    <p class="site-appeal__product-label">
                        {{ appeal.product.article }}
                    </p>
                    <p class="site-appeal__product-label">
                        {{ appeal.product.description }}
                    </p>
                </div>
                <div class="site-appeal__product-preview">
                    <img
                        class="site-appeal__product-preview-img"
                        src="@/assets/images/appeal/preview.png"
                        alt="preview"
                    />
                </div>
            </div>
            <div class="site-appeal__tile" v-if="getTileIsShow">
                <img
                    class="site-appeal__tile-img"
                    src="@/assets/images/appeal/tile.png"
                    alt="img"
                />
                <div class="site-appeal__tile-info">
                    <p class="site-appeal__tile-title">
                        Шины Nokian Hakkapeliitta 9 SUV 265/60 R18 114T XL
                    </p>
                    <p class="site-appeal__tile-label">1 шт.</p>
                </div>
            </div>
        </div>
        <div class="site-appeal__images">
            <h6 class="site-appeal__images-title">Фото товара</h6>
            <div class="site-appeal__images-list">
                <div
                    class="site-appeal__images-item"
                    v-for="image in appeal.images"
                    :key="image.id"
                >
                    <img
                        class="site-appeal__images-item-preview"
                        :src="require(`@/assets/images/appeal/${image.img}`)"
                        alt="img"
                    />
                </div>
            </div>
        </div>
        <button class="site-appeal__button" @click="onCancel">
            Отменить заявку
        </button>
    </div>
</template>

<script>
import { computed, toRefs } from "vue";

import { onNumberWithSpaces } from "@/utils/functions.js";

const TAGS = {
    consideration: "Возврат на рассмотрении",
    refund: "Ожидается возврат",
    refundCanceled: "Возврат отменен",
    returned: "Возвращено",
};

export default {
    name: "SiteAppeal",
    props: {
        appeal: {
            type: Object,
            required: true,
        },
    },
    emits: ["cancel"],
    setup(props, { emit }) {
        const { appeal } = toRefs(props);

        const getTagViewClass = computed(() => {
            return `site-appeal__header-tag--${appeal.value.tag}`;
        });
        const getTag = computed(() => {
            return TAGS[appeal.value.tag];
        });

        const getAmount = computed(() => {
            return onNumberWithSpaces(appeal.value.amount);
        });

        const getShopIsShow = computed(() => {
            return appeal.value.shop;
        });

        const getProductIsShow = computed(() => {
            return appeal.value.product;
        });

        const getTileIsShow = computed(() => {
            return appeal.value.tile;
        });

        const onCancel = () => {
            emit("cancel", appeal.value);
        };

        const onMap = () => {
            console.log("Map");
        };

        return {
            getTagViewClass,
            getTag,
            getAmount,
            getShopIsShow,
            getProductIsShow,
            getTileIsShow,
            onCancel,
            onMap,
        };
    },
};
</script>

<style lang="sass">
.site-appeal
    padding: 32px
    background: $main-white
    box-shadow: $large
    border-radius: 24px
    font-family: 'Manrope', sans-serif

    .site-appeal__header
        display: flex
        align-items: center
        justify-content: space-between

    .site-appeal__header-tag
        padding: 4px 8px
        border-radius: 8px
        font-weight: 400
        font-size: 12px
        line-height: 16px

    .site-appeal__header-tag--consideration
        color: $main-white
        background: $other-yellow-300

    .site-appeal__header-tag--refund
        color: $main-white
        background: $other-red-200-main

    .site-appeal__header-tag--refundCanceled
        color: $grays-gray-400
        background: $grays-gray-200

    .site-appeal__header-tag--returned
        color: $main-white
        background: $grays-gray-400

    .site-appeal__header-group
        display: flex
        align-items: center
        grid-column-gap: 8px

    .site-appeal__header-title
        font-weight: 700
        font-size: 16px
        line-height: 20px
        color: $main-black

    .site-appeal__header-info
        background: none
        outline: none
        cursor: pointer
        border: none
        padding: 0

    .site-appeal__header-info-icon
        display: block
        width: 16px
        height: 16px

    .site-appeal__buyer
        margin-top: 16px
        display: flex
        flex-direction: column
        grid-row-gap: 8px

    .site-appeal__buyer-title
        font-weight: 700
        font-size: 16px
        line-height: 20px
        color: $main-black

    .site-appeal__buyer-label
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $main-black

    .site-appeal__buyer-date
        font-weight: 400
        font-size: 12px
        line-height: 16px
        color: $grays-gray-400

    .site-appeal__notification
        padding: 12px 16px
        background: $grays-gray-100
        border-radius: 8px
        margin: 24px 0 32px 0
        display: inline-flex
        align-items: flex-start
        grid-column-gap: 8px
        max-width: 548px

    .site-appeal__notification-icon
        width: 16px
        height: 16px
        display: block

    .site-appeal__notification-label
        font-weight: 400
        font-size: 12px
        line-height: 16px
        color: $main-black

    .site-appeal__refund
        margin-bottom: 32px

    .site-appeal__refund-title
        font-weight: 700
        font-size: 14px
        line-height: 18px
        color: $main-black
        margin-bottom: 16px

    .site-appeal__product
        display: flex
        align-items: center
        justify-content: space-between
        grid-column-gap: 152px
        border-bottom: 1px solid $grays-gray-100
        padding-bottom: 18px

    .site-appeal__product-info
        display: flex
        flex-direction: column
        grid-row-gap: 4px

    .site-appeal__product-title
        font-weight: 700
        font-size: 16px
        line-height: 20px
        color: $main-black

    .site-appeal__product-label
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-350

    .site-appeal__product-preview
        width: 80px
        height: 80px
        background: $grays-gray-100
        border-radius: 8px
        display: flex
        align-items: center
        justify-content: center

    .site-appeal__tile
        display: flex
        align-items: flex-start
        grid-column-gap: 12px
        width: 272px
        background: $main-white
        border: 1px solid $grays-gray-200
        border-radius: 16px
        padding: 16px 35px 16px 16px

    .site-appeal__tile-img
        width: 48px
        height: 48px
        border-radius: 8px

    .site-appeal__tile-info
        display: flex
        flex-direction: column
        grid-row-gap: 8px

    .site-appeal__tile-title
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $main-black

    .site-appeal__tile-label
        font-family: 'TT Norms', sans-serif
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $grays-gray-400

    .site-appeal__images-title
        font-weight: 700
        font-size: 14px
        line-height: 18px
        color: $main-black

    .site-appeal__images-list
        margin-top: 16px
        display: flex
        align-items: center
        grid-column-gap: 8px

    .site-appeal__images-item
        border: 1px solid $grays-gray-200
        border-radius: 16px
        width: 88px
        height: 88px

    .site-appeal__shop
        margin-bottom: 32px
        width: 416px

    .site-appeal__shop-title
        font-weight: 700
        font-size: 14px
        line-height: 18px
        color: $main-black
        margin-bottom: 16px

    .site-appeal__shop-group
        display: flex
        align-items: flex-start
        grid-column-gap: 12px

    .site-appeal__shop-info
        display: flex
        flex-direction: column
        align-items: flex-start
        grid-row-gap: 4px

    .site-appeal__shop-label
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $grays-gray-400

    .site-appeal__shop-address
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-black

    .site-appeal__shop-schedule
        font-weight: 400
        font-size: 12px
        line-height: 16px
        color: $grays-gray-400
        display: inline-block
        width: 125px

    .site-appeal__shop-map
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-blue
        padding: 0
        outline: none
        border: none
        background: none
        cursor: pointer

    .site-appeal__button
        background: none
        border: none
        outline: none
        cursor: pointer
        padding: 0
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $other-red-200-main
        margin-top: 32px

@media screen and (max-width: 1440px)
    .site-appeal
        .site-appeal__product
            grid-column-gap: 116px
            padding-bottom: 6px

@media screen and (max-width: 768px)
    .site-appeal
        .site-appeal__header
            flex-direction: column
            align-items: flex-start
            grid-row-gap: 16px

        .site-appeal__header-group
            grid-column-gap: 4px

        .site-appeal__buyer-date
            font-size: 10px
            line-height: 14px

        .site-appeal__notification
            max-width: none

        .site-appeal__notification-label
            font-size: 10px
            line-height: 14px

        .site-appeal__shop
            display: none

        .site-appeal__product
            flex-direction: column
            align-items: flex-start
            grid-row-gap: 16px
            padding-bottom: 8px
            grid-column-gap: 0

        .site-appeal__tile
            padding: 16px
            width: 100%

        .site-appeal__images-item
            width: 80px
            height: 80px

        .site-appeal__images-item-preview
            width: 80px
            height: 80px
</style>
