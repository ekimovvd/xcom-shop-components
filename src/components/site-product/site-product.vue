<template>
    <div class="site-product">
        <div class="site-product__tag">
            <p class="site-product__tag-label">Скидка</p>
        </div>
        <div class="site-product__preview">
            <Splide class="site-product__slider" :options="splideOptions">
                <SplideSlide class="site-product__slide">
                    <img
                        class="site-product__slide-svg"
                        src="@/assets/images/product/acer.png"
                        alt="Acer"
                    />
                </SplideSlide>
                <SplideSlide class="site-product__slide">
                    <img
                        class="site-product__slide-svg"
                        src="@/assets/images/product/acer.png"
                        alt="Acer"
                    />
                </SplideSlide>
            </Splide>
        </div>
        <div class="site-product__content">
            <div class="site-product__statistics">
                <div class="site-product__rating">
                    <img
                        class="site-product__rating-svg"
                        src="@/assets/images/product/star.svg"
                        alt="star"
                    />
                    <p class="site-product__rating-label">4.9</p>
                </div>
                <a class="site-product__feedback" href="#">
                    <p class="site-product__feedback-label">18 отзывов</p>
                </a>
            </div>
            <div class="site-product__info">
                <a class="site-product__info-title" href="#">Acer Aspire 3</a>
                <div class="site-product__info-model">
                    <p class="site-product__info-text">689788</p>
                    <p class="site-product__info-text">MV7N2RU/A</p>
                </div>
                <p
                    class="site-product__info-text site-product__info-text--description"
                >
                    Intel Core i3 10100, DDR4, 8 ГБ, SSD 256 ГБ, Intel UHD
                    Graphics 630, DVD-RW, Windows 10 Pro
                </p>
            </div>
            <ul class="site-product__services">
                <li class="site-product__service">
                    <img
                        class="site-product__service-svg"
                        src="@/assets/images/product/delivery.svg"
                        alt="delivery"
                    />
                    <p class="site-product__service-label">Доставка завтра</p>
                </li>
                <li class="site-product__service">
                    <img
                        class="site-product__service-svg"
                        src="@/assets/images/product/package.svg"
                        alt="package"
                    />
                    <p class="site-product__service-label">Самовывоз сегодня</p>
                </li>
            </ul>
            <div class="site-product__footer">
                <div class="site-product__price">
                    <p class="site-product__price-label-old">51 686 ₽</p>
                    <p class="site-product__price-label">43 925 ₽</p>
                </div>
                <div class="site-product__buttons">
                    <button
                        class="site-product__button site-product__button--compare"
                    >
                        <img
                            class="site-product__button-svg"
                            src="@/assets/images/product/compare.svg"
                            alt="compare"
                        />
                    </button>
                    <button
                        class="site-product__button site-product__button--favorite"
                    >
                        <img
                            class="site-product__button-svg"
                            src="@/assets/images/product/favorite.svg"
                            alt="favorite"
                        />
                    </button>
                    <button
                        class="site-product__button site-product__button--basket"
                    >
                        <img
                            class="site-product__button-svg"
                            src="@/assets/images/product/basket.svg"
                            alt="basket"
                        />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

export default {
    name: "site-product",
    components: {
        Splide,
        SplideSlide,
    },
    setup() {
        const splideOptions = {
            rewind: true,
            type: "fade",
            arrows: false,
            classes: {
                pagination: "splide__pagination site-product__pagination",
                page: "splide__pagination__page site-product__pagination-page",
            },
        };

        return {
            splideOptions,
        };
    },
};
</script>

<style lang="sass">
.site-product
    position: relative
    border-radius: 24px
    font-family: 'Manrope'
    border: 1px solid $grays-gray-200
    max-width: 318px
    width: 100%

    .site-product__tag
        background: $other-yellow-400
        border-radius: 14px
        padding: 4px 8px
        display: inline-block
        position: absolute
        top: 12px
        left: 12px
        z-index: 100

    .site-product__tag-label
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $old-white

    .site-product__preview
        padding: 14px 0 4px 0

    .site-product__slider
        height: 172px

    .splide__list
        height: 172px

    .site-product__slide
        display: flex
        align-items: center
        justify-content: center

    .site-product__slide-svg
        width: 190px
        height: 172px

    .site-product__pagination
        grid-column-gap: 4px
        bottom: 0

        li
            width: 4px
            height: 4px
            display: flex
            align-items: center
            justify-content: center

    .site-product__pagination-page
        opacity: 1
        background: $grays-gray-200
        width: 4px
        height: 4px
        margin: 0

        &.is-active
            transform: scale(1)
            opacity: 1
            background: $main-blue

    .site-product__content
        padding: 34px 24px
        background: $grays-gray-100
        border-radius: 0 0 24px 24px

    .site-product__statistics
        display: flex
        align-items: center
        grid-column-gap: 8px
        margin-bottom: 12px

    .site-product__rating
        display: flex
        align-items: center

    .site-product__rating-label
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $other-yellow-400
        margin-left: 4px

    .site-product__feedback-label
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $grays-gray-400

    .site-product__info-title
        font-weight: 700
        font-size: 14px
        line-height: 18px
        color: $new-black

    .site-product__info-model
        display: flex
        align-items: center
        grid-column-gap: 12px
        margin-top: 8px

    .site-product__info-text
        font-weight: 400
        font-size: 12px
        line-height: 16px
        color: $grays-gray-400

        &.site-product__info-text--description
            margin-top: 20px

    .site-product__services
        display: flex
        flex-direction: column
        grid-row-gap: 8px
        margin-top: 20px
        margin-bottom: 32px

    .site-product__service
        display: flex
        align-items: center
        grid-column-gap: 8px

    .site-product__service-label
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $new-gray-500

    .site-product__footer
        display: flex
        align-items: center
        justify-content: space-between

    .site-product__price-label-old
        font-weight: 600
        font-size: 12px
        line-height: 16px
        color: $grays-gray-400
        text-decoration: line-through $other-red-200-main

    .site-product__price-label
        font-weight: 700
        font-size: 16px
        line-height: 20px
        color: $main-black

    .site-product__buttons
        display: flex
        align-items: center
        grid-column-gap: 12px

    .site-product__button
        display: flex
        align-items: center
        justify-content: center
        padding: 0
        background-color: $grays-gray-100
        border: 1px solid $new-gray-300
        border-radius: 8px
        cursor: pointer
        outline: none
        width: 40px
        height: 40px

        &.site-product__button--view-primary
            background: $main-blue

@media screen and (max-width: 1440px)
    .site-product
        max-width: 222px

        .site-product__preview
            padding: 32px 0 0 0

        .site-product__slider
            height: 134px

        .splide__list
            height: 134px

        .site-product__slide-svg
            width: 160px
            height: 134px

        .site-product__pagination
            display: none

        .site-product__content
            padding: 24px

        .site-product__info-title
            font-size: 16px
            line-height: 20px

        .site-product__info-model
            margin-top: 8px

        .site-product__info-text
            &.site-product__info-text--description
                display: none

        .site-product__services
            margin: 16px 0

        .site-product__buttons
            grid-column-gap: 8px

        .site-product__button--compare
            display: none

@media screen and (max-width: 1024px)
    .site-product
        .site-product__preview
            padding-top: 24px

        .site-product__slider
            height: 108px

        .splide__list
            height: 108px

        .site-product__slide-svg
            width: 128px
            height: 108px

        .site-product__content
            padding: 16px 24px

        .site-product__statistics
            margin-bottom: 8px

        .site-product__services
            margin: 12px 0

@media screen and (max-width: 768px)
    .site-product
        max-width: 216px

        .site-product__preview
            padding-top: 29px

        .site-product__slider
            height: 100px

        .splide__list
            height: 100px

        .site-product__slide-svg
            width: 120px
            height: 100px

        .site-product__content
            padding: 16px

        .site-product__rating-label
            font-size: 10px
            line-height: 12px

        .site-product__feedback-label
            font-size: 10px
            line-height: 12px

        .site-product__info-title
            font-size: 14px
            line-height: 18px

        .site-product__info-text
            font-size: 10px
            line-height: 14px

        .site-product__info-text
            &.site-product__info-text--description
                display: block
                margin-top: 8px

        .site-product__services
            display: none

        .site-product__footer
            margin-top: 12px

        .site-product__price-label-old
            font-size: 10px
            line-height: 12px
            font-weight: 500

        .site-product__price-label
            font-size: 14px
            line-height: 18px
</style>
