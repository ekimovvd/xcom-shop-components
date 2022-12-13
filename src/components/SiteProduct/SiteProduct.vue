<template>
    <div class="site-product" :class="getProductViewClass">
        <span class="site-product__tag">
            <img
                class="site-product__tag-sale"
                v-if="getPercentIsShow"
                src="@/assets/images/product/sale.svg"
                alt="sale"
            />
            Скидка
        </span>

        <div class="site-product__preview" :class="getProductPreviewViewClass">
            <img
                v-if="getPreviewIsShow"
                class="site-product__preview-img"
                :src="getPreviewImg"
                alt="preview"
            />

            <div class="site-product__slider" v-else>
                <SiteSplide class="site-product__slider" :options="options">
                    <SiteSlide
                        class="site-product__slide"
                        v-for="image in product.images"
                        :key="image.id"
                    >
                        <img
                            class="site-product__slide-img"
                            :src="
                                require(`@/assets/images/product/${image.img}`)
                            "
                            alt="img"
                        />
                    </SiteSlide>
                </SiteSplide>
            </div>
        </div>

        <div class="site-product__content" :class="getProductContentViewClass">
            <div class="site-product__info">
                <div
                    class="site-product__header"
                    :class="getProductHeaderViewClass"
                >
                    <a class="site-product__link" :href="product.link">
                        {{ product.name }}
                    </a>

                    <div class="site-product__statistics">
                        <a
                            class="site-product__rating"
                            :class="getProductRatingViewClass"
                            href="#"
                        >
                            <img
                                class="site-product__rating-star"
                                src="@/assets/images/product/star.svg"
                                alt="star"
                            />
                            {{ product.rating }}
                        </a>

                        <a
                            class="site-product__feedback"
                            :class="getProductFeedbackViewClass"
                            href="#"
                        >
                            {{ product.feedback }} отзывов
                        </a>
                    </div>
                </div>

                <div class="site-product__model" v-if="getModelIsShow">
                    <p class="site-product__model-label">
                        {{ product.model.id }}
                    </p>
                    <p class="site-product__model-label">
                        {{ product.model.name }}
                    </p>
                </div>

                <p
                    class="site-product__description"
                    v-if="getDescriptionIsShow"
                >
                    {{ product.description }}
                </p>

                <ul class="site-product__list" v-if="getListIsShow">
                    <li
                        class="site-product__item"
                        v-for="item in product.list"
                        :key="item.id"
                    >
                        <p class="site-product__item-label">{{ item.name }}</p>
                        <p class="site-product__item-description">
                            {{ item.value }}
                        </p>
                    </li>
                </ul>
            </div>

            <div
                class="site-product__footer"
                :class="getProductFooterViewClass"
            >
                <div
                    class="site-product__price"
                    :class="getProductPriceViewClass"
                >
                    <p
                        class="site-product__price-old"
                        :class="getProductPriceOldViewClass"
                    >
                        {{ getPriceOld }} ₽
                    </p>
                    <p
                        class="site-product__price-current"
                        :class="getProductPriceCurrentViewClass"
                    >
                        {{ getPriceCurrent }} ₽
                    </p>
                </div>
                <div
                    class="site-product__buttons"
                    :class="getProductButtonsViewClass"
                >
                    <button
                        class="site-product__button site-product__button--compare"
                        :class="getProductButtonViewClass"
                        @click="onToggleCompare"
                    >
                        <img
                            class="site-product__button-icon"
                            :class="getProductButtonIconViewClass"
                            src="@/assets/images/product/compare.svg"
                            alt="icon"
                        />
                    </button>
                    <button
                        class="site-product__button"
                        :class="getProductButtonViewClass"
                        @click="onToggleFavorite"
                    >
                        <img
                            class="site-product__button-icon"
                            :class="getProductButtonIconViewClass"
                            src="@/assets/images/product/heart.svg"
                            alt="icon"
                        />
                    </button>
                    <button
                        class="site-product__button site-product__button--active"
                        :class="getProductButtonViewClass"
                        @click="onToggleBasket"
                    >
                        <img
                            class="site-product__button-icon"
                            :class="getProductButtonIconViewClass"
                            src="@/assets/images/product/cart.svg"
                            alt="icon"
                        />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, toRefs } from "vue";

import { onNumberWithSpaces } from "@/utils/functions.js";

export default {
    name: "SiteProduct",
    props: {
        product: {
            type: Object,
            required: true,
        },
        isHorizontal: {
            type: Boolean,
            default: false,
        },
    },
    emits: [
        "toggleCompare",
        "toggleFavorite",
        "toggleBasket",
        "toggleQuantity",
    ],
    setup(props, { emit }) {
        const { product, isHorizontal } = toRefs(props);

        const options = {
            arrows: false,
            perPage: 1,
        };

        const getProductViewClass = computed(() => {
            return isHorizontal.value ? "site-product--horizontal" : "";
        });

        const getProductPreviewViewClass = computed(() => {
            return isHorizontal.value
                ? "site-product__preview--horizontal"
                : "";
        });

        const getProductContentViewClass = computed(() => {
            return isHorizontal.value
                ? "site-product__content--horizontal"
                : "";
        });

        const getProductHeaderViewClass = computed(() => {
            return isHorizontal.value ? "site-product__header--horizontal" : "";
        });

        const getProductFooterViewClass = computed(() => {
            return isHorizontal.value ? "site-product__footer--horizontal" : "";
        });

        const getProductPriceViewClass = computed(() => {
            return isHorizontal.value ? "site-product__price--horizontal" : "";
        });

        const getProductPriceOldViewClass = computed(() => {
            return isHorizontal.value
                ? "site-product__price-old--horizontal"
                : "";
        });

        const getProductPriceCurrentViewClass = computed(() => {
            return isHorizontal.value
                ? "site-product__price-current--horizontal"
                : "";
        });

        const getProductButtonsViewClass = computed(() => {
            return isHorizontal.value
                ? "site-product__buttons--horizontal"
                : "";
        });

        const getProductRatingViewClass = computed(() => {
            return isHorizontal.value ? "site-product__rating--horizontal" : "";
        });

        const getProductFeedbackViewClass = computed(() => {
            return isHorizontal.value ? "site-product__rating--horizontal" : "";
        });

        const getProductButtonViewClass = computed(() => {
            return isHorizontal.value ? "site-product__button--horizontal" : "";
        });

        const getProductButtonIconViewClass = computed(() => {
            return isHorizontal.value
                ? "site-product__button-icon--horizontal"
                : "";
        });

        const getPriceOld = computed(() => {
            return onNumberWithSpaces(product.value.priceOld);
        });

        const getPriceCurrent = computed(() => {
            return onNumberWithSpaces(product.value.priceCurrent);
        });

        const getPercentIsShow = computed(() => {
            return isHorizontal.value;
        });

        const getPreviewIsShow = computed(() => {
            return isHorizontal.value;
        });

        const getPreviewImg = computed(() => {
            return require(`@/assets/images/product/${product.value.preview}`);
        });

        const getModelIsShow = computed(() => {
            return !isHorizontal.value;
        });

        const getDescriptionIsShow = computed(() => {
            return !isHorizontal.value;
        });

        const getListIsShow = computed(() => {
            return isHorizontal.value;
        });

        const onToggleCompare = () => {
            emit("toggleCompare", product.value);
        };

        const onToggleFavorite = () => {
            emit("toggleFavorite", product.value);
        };

        const onToggleBasket = () => {
            emit("toggleBasket", product.value);
        };

        const onToggleQuantity = () => {
            emit("toggleQuantity", product.value);
        };

        return {
            options,
            getProductViewClass,
            getProductPreviewViewClass,
            getProductContentViewClass,
            getProductHeaderViewClass,
            getProductFooterViewClass,
            getProductPriceViewClass,
            getProductPriceOldViewClass,
            getProductPriceCurrentViewClass,
            getProductButtonsViewClass,
            getProductRatingViewClass,
            getProductFeedbackViewClass,
            getProductButtonViewClass,
            getProductButtonIconViewClass,
            getPriceOld,
            getPriceCurrent,
            getPercentIsShow,
            getPreviewIsShow,
            getPreviewImg,
            getModelIsShow,
            getDescriptionIsShow,
            getListIsShow,
            onToggleCompare,
            onToggleFavorite,
            onToggleBasket,
            onToggleQuantity,
        };
    },
};
</script>

<style lang="sass">
.site-product
    width: 318px
    background: $main-white
    border: 1px solid $grays-gray-200
    border-radius: 24px
    font-family: 'Manrope', sans-serif
    position: relative

    &.site-product--horizontal
        width: 100%
        display: flex
        border: none
        background: $main-white

        &:hover
            box-shadow: $small-down

    .site-product__tag
        padding: 4px 8px
        background: $other-yellow-300-main
        border-radius: 8px
        font-weight: 700
        font-size: 12px
        line-height: 16px
        color: $main-white
        display: flex
        align-items: center
        position: absolute
        top: 12px
        left: 12px
        grid-column-gap: 4px

    .site-product__tag-sale
        width: 16px
        height: 16px
        display: block

    .site-product__preview
        padding: 14px 0 4px 0

    .site-product__preview--horizontal
        padding: 24px 0 24px 24px

    .site-product__preview-img
        width: 156px
        height: 156px
        display: block

    .site-product__slide
        display: flex
        align-items: center
        justify-content: center

    .site-product__slide-img
        width: 192px
        height: 170px

    .splide__pagination
        display: flex
        grid-column-gap: 4px
        bottom: 0

    .splide__pagination__page
        width: 4px
        height: 4px
        background: $grays-gray-200
        margin: 0
        display: block

    .splide__pagination__page.is-active
        background: $main-blue
        transform: scale(1)

    .site-product__content
        padding: 24px 24px 34px 24px
        background: $grays-gray-100
        border-radius: 0 0 24px 24px

    .site-product__content--horizontal
        padding: 24px 34px 24px 32px
        background: none
        width: 100%
        display: flex
        justify-content: space-between

    .site-product__header
        display: flex
        flex-direction: column-reverse
        grid-row-gap: 12px

    .site-product__header--horizontal
        flex-direction: column
        grid-row-gap: 8px

    .site-product__link
        font-weight: 700
        font-size: 14px
        line-height: 18px
        color: $main-black
        display: inline-block

    .site-product__statistics
        display: flex
        align-items: center
        grid-column-gap: 8px

    .site-product__rating
        display: inline-flex
        align-items: center
        grid-column-gap: 4px
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $other-yellow-400

    .site-product__feedback
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $grays-gray-400

    .site-product__model
        display: flex
        align-items: center
        grid-column-gap: 12px
        margin-top: 8px

    .site-product__model-label
        font-weight: 400
        font-size: 12px
        line-height: 16px
        color: $grays-gray-400

    .site-product__description
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $grays-gray-400
        margin-top: 20px

    .site-product__list
        display: grid
        grid-row-gap: 2px
        margin-top: 8px

    .site-product__item
        display: flex
        align-items: center
        grid-column-gap: 4px
        font-weight: 400
        font-size: 12px
        line-height: 16px

    .site-product__item-label
        color: $grays-gray-400

    .site-product__item-description
        color: $main-black

    .site-product__footer
        display: flex
        justify-content: space-between
        margin-top: 54px

    .site-product__footer--horizontal
        flex-direction: column-reverse
        justify-content: flex-end
        grid-row-gap: 16px
        margin-top: 0

    .site-product__price
        display: flex
        flex-direction: column

    .site-product__price--horizontal
        flex-direction: row-reverse
        grid-column-gap: 8px
        align-items: flex-end

    .site-product__price-old
        font-weight: 600
        font-size: 12px
        line-height: 16px
        color: $grays-gray-400
        text-decoration: line-through $other-red-200-main

    .site-product__price-old--horizontal
        font-weight: 400
        font-size: 14px
        line-height: 20px

    .site-product__price-current
        font-weight: 700
        font-size: 16px
        line-height: 20px
        color: $main-black

    .site-product__price-current--horizontal
        font-size: 24px
        line-height: 32px

    .site-product__buttons
        display: flex
        align-items: center
        grid-column-gap: 12px

    .site-product__buttons--horizontal
        justify-content: flex-end

    .site-product__button
        width: 40px
        height: 40px
        border: 1px solid $grays-gray-300
        border-radius: 8px
        display: flex
        align-items: center
        justify-content: center
        background: none
        outline: none
        cursor: pointer

    .site-product__button--active
        background: $main-blue
        border: 1px solid $main-blue

    .site-product__button-icon
        display: block

@media screen and (max-width: 1440px)
    .site-product
        width: 222px

        &.site-product--horizontal
            .site-product__button--compare
                display: flex

        .site-product__tag
            font-size: 10px
            line-height: 12px

        .site-product__tag-sale
            width: 12px
            height: 12px

        .site-product__preview-img
            width: 140px
            height: 140px

        .site-product__preview
            padding: 30px 0 8px 0

        .site-product__preview--horizontal
            padding: 24px 0 58px 24px

        .site-product__slide-img
            width: 160px
            height: 134px

        .site-product__content
            padding: 24px 24px 16px 24px

        .site-product__header
            grid-row-gap: 8px

        .site-product__content--horizontal
            padding: 24px 24px 66px 32px

        .site-product__description
            margin-top: 16px

        .site-product__footer
            margin-top: 16px

        .site-product__footer--horizontal
            grid-row-gap: 12px
            margin-top: 0

        .site-product__price-current--horizontal
            font-size: 22px
            line-height: 28px

        .site-product__buttons
            grid-column-gap: 8px

        .site-product__buttons--horizontal
            grid-column-gap: 12px

        .site-product__button--compare
            display: none

@media screen and (max-width: 1024px)
    .site-product
        width: 140px
        border-radius: 20px

        &.site-product--horizontal
            border-radius: 24px

        .site-product__preview-img
            width: 120px
            height: 120px

        .site-product__preview
            padding: 35px 0 4px 0

        .site-product__preview--horizontal
            padding: 24px 0 72px 24px

        .site-product__slide-img
            width: 100px
            height: 99px

        .site-product__content
            padding: 11px 8px 10px 8px
            border-radius: 0 0 20px 20px

        .site-product__content--horizontal
            padding: 24px 24px 40px 32px

        .site-product__header
            grid-row-gap: 4px

        .site-product__header--horizontal
            grid-row-gap: 8px

        .site-product__model
            margin-top: 4px

        .site-product__model-label
            font-size: 10px
            line-height: 14px

        .site-product__rating
            font-size: 10px
            line-height: 12px

        .site-product__feedback
            font-size: 10px
            line-height: 12px

        .site-product__rating--horizontal
            font-size: 12px
            line-height: 16px

        .site-product__feedback--horizontal
            font-size: 12px
            line-height: 16px

        .site-product__description
            margin-top: 8px
            font-size: 10px
            line-height: 12px

        .site-product__link
            font-size: 12px
            line-height: 16px

        .site-product__price-old
            font-size: 10px
            line-height: 12px

        .site-product__price-current
            font-size: 12px
            line-height: 16px

        .site-product__price-old--horizontal
            font-size: 14px
            line-height: 20px

        .site-product__price-current--horizontal
            font-size: 22px
            line-height: 28px

        .site-product__buttons
            grid-column-gap: 4px

        .site-product__buttons--horizontal
            grid-column-gap: 12px

        .site-product__button
            width: 29px
            height: 29px

        .site-product__button--horizontal
            width: 40px
            height: 40px

        .site-product__button-icon
            width: 17px
            height: 17px

        .site-product__button-icon--horizontal
            width: 24px
            height: 24px

@media screen and (max-width: 768px)
    .site-product
        &.site-product--horizontal
            border-radius: 16px

        .site-product__preview--horizontal
            padding: 36px 0 0 8px

        .site-product__preview-img
            width: 80px
            height: 80px

        .site-product__content--horizontal
            padding: 36px 14px 13px 16px
            flex-direction: column
            align-items: flex-start
            grid-row-gap: 12px

        .site-product__item
            grid-column-gap: 2px

        .site-product__item
            font-size: 10px
            line-height: 14px

        .site-product__price--horizontal
            justify-content: flex-end

        .site-product__price-current--horizontal
            font-size: 18px
            line-height: 24px

        .site-product__price-old--horizontal
            font-size: 12px
            line-height: 16px

        .site-product__buttons
            grid-column-gap: 4px

        .site-product__buttons--horizontal
            justify-content: flex-start
            grid-column-gap: 8px

        .site-product__button
            width: 28px
            height: 28px

        .site-product__button-icon
            width: 17px
            height: 17px
</style>
