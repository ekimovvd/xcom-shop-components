<template>
    <div class="site-product">
        <div class="site-product__tag">
            <p class="site-product__tag-label">Скидка</p>
        </div>
        <div class="site-product__preview">
            <SiteSplide class="site-product__slider" :options="splideOptions">
                <SiteSlide
                    class="site-product__slide"
                    v-for="slide in product.images"
                    :key="slide.id"
                >
                    <img
                        class="site-product__slide-svg"
                        :src="require(`@/assets/images/product/${slide.name}`)"
                        alt="Acer"
                    />
                </SiteSlide>
            </SiteSplide>
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
                <a class="site-product__info-link" :href="product.link">
                    <h6 class="site-product__info-link-label">
                        {{ product.name }}
                    </h6>
                </a>
                <div class="site-product__info-model">
                    <p class="site-product__info-text">689788</p>
                    <p class="site-product__info-text">MV7N2RU/A</p>
                </div>
                <p
                    class="site-product__info-text site-product__info-text--description"
                >
                    {{ product.description }}
                </p>
            </div>
            <div class="site-product__footer">
                <div class="site-product__price">
                    <p class="site-product__price-label-old">51 686 ₽</p>
                    <p class="site-product__price-label">43 925 ₽</p>
                </div>
                <div class="site-product__buttons">
                    <button
                        class="site-product__button site-product__button--compare"
                        @click="onToggleCompare"
                    >
                        <svg
                            class="site-product__button-svg site-product__button-svg--compare"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19 4C18.1716 4 17.5 4.67157 17.5 5.5V18.5C17.5 19.3284 18.1716 20 19 20H20C20.8284 20 21.5 19.3284 21.5 18.5V5.5C21.5 4.67157 20.8284 4 20 4H19Z"
                                stroke-width="1.5"
                            />
                            <path
                                d="M10 9.5C10 8.67157 10.6716 8 11.5 8H12.5C13.3284 8 14 8.67157 14 9.5V18.5C14 19.3284 13.3284 20 12.5 20H11.5C10.6716 20 10 19.3284 10 18.5V9.5Z"
                                stroke-width="1.5"
                            />
                            <path
                                d="M2.5 13.5C2.5 12.6716 3.17157 12 4 12H5C5.82843 12 6.5 12.6716 6.5 13.5V18.5C6.5 19.3284 5.82843 20 5 20H4C3.17157 20 2.5 19.3284 2.5 18.5V13.5Z"
                                stroke-width="1.5"
                            />
                        </svg>
                    </button>
                    <button
                        class="site-product__button site-product__button--favorite"
                        @click="onToggleFavorite"
                    >
                        <svg
                            class="site-product__button-svg site-product__button-svg--favorite"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M16.1512 17.5941C15.9835 17.7457 15.8372 17.878 15.7178 17.9893C14.6888 18.9483 13.4188 20.0873 12.6608 20.7623C12.2818 21.1003 11.7168 21.1003 11.3378 20.7623C10.5798 20.0873 9.30983 18.9483 8.28083 17.9893C8.16153 17.8781 8.01534 17.7459 7.84784 17.5945C5.60029 15.5622 -0.48331 10.0613 3.11083 5.31129C4.22083 3.84429 5.90583 2.92929 7.74383 3.00429C8.86024 3.0499 9.77326 3.40425 10.4634 3.80827C11.4676 4.39619 11.9998 5.08929 11.9998 5.08929C11.9998 5.08929 12.532 4.39619 13.5363 3.80827C14.2264 3.40425 15.1394 3.0499 16.2558 3.00429C18.0938 2.92929 19.7788 3.84429 20.8878 5.31129C24.4827 10.061 18.3992 15.5616 16.1512 17.5941ZM10.426 6.32351L10.4157 6.3115C10.396 6.28866 10.3568 6.24478 10.299 6.18637C10.2083 6.09479 10.0764 5.97218 9.90616 5.84052C9.85704 5.80253 9.80473 5.76378 9.7493 5.72481C9.25325 5.376 8.55341 5.03906 7.66229 5.00262C6.56797 4.95801 5.4772 5.49846 4.70572 6.51807C3.56561 8.02483 3.85976 9.75171 5.26465 11.8507C6.45626 13.6311 8.10336 15.125 9.15902 16.0824C9.33994 16.2465 9.5035 16.3949 9.64441 16.5262C10.3963 17.227 11.2832 18.0292 11.9993 18.6713C12.7154 18.0292 13.6023 17.227 14.3543 16.5262C14.4953 16.3947 14.659 16.2462 14.8402 16.082C15.8959 15.1244 17.5429 13.6308 18.7344 11.8507C20.1394 9.75169 20.4335 8.02499 19.2931 6.51827L19.2924 6.51737C18.5222 5.49853 17.4318 4.958 16.3374 5.00262C16.1008 5.0123 15.8776 5.04316 15.6682 5.0898C15.4348 5.14179 15.2185 5.21338 15.0195 5.2971C14.7246 5.42116 14.4679 5.57184 14.2504 5.72481C14.0029 5.89883 13.8175 6.06836 13.7006 6.18637C13.6428 6.24478 13.6037 6.28866 13.584 6.3115L13.5737 6.32351L11.9998 8.37319L10.426 6.32351Z"
                            />
                        </svg>
                    </button>
                    <button
                        class="site-product__button site-product__button--basket site-product__button--active"
                        @click="onToggleBasket"
                    >
                        <svg
                            class="site-product__button-svg site-product__button-svg--basket"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H2.62169C3.03663 3 3.40847 3.25625 3.55618 3.644L6.8539 12.3005L5.65571 13.6984C4.5437 14.9958 5.46551 17 7.17422 17H20C20.5523 17 21 16.5523 21 16C21 15.4477 20.5523 15 20 15H7.17422L8.37242 13.6021C8.45999 13.4999 8.53602 13.3905 8.60017 13.2756L8.67682 13.2169C8.78707 13.2387 8.90047 13.25 9.01576 13.25H17.6697C18.3978 13.25 19.0498 12.7992 19.307 12.118L22.2295 4.37598C22.3164 4.14558 22.2847 3.88716 22.1447 3.68459C22.0046 3.48202 21.7741 3.36111 21.5278 3.36111H5.58862L5.42516 2.93201C4.98201 1.76875 3.86651 1 2.62169 1H2Z"
                            />
                            <path
                                d="M9.91656 19.8885C9.91656 21.0544 8.97138 21.9996 7.80545 21.9996C6.63951 21.9996 5.69434 21.0544 5.69434 19.8885C5.69434 18.7225 6.63951 17.7773 7.80545 17.7773C8.97138 17.7773 9.91656 18.7225 9.91656 19.8885Z"
                            />
                            <path
                                d="M20.4722 19.8885C20.4722 21.0544 19.527 21.9996 18.3611 21.9996C17.1952 21.9996 16.25 21.0544 16.25 19.8885C16.25 18.7225 17.1952 17.7773 18.3611 17.7773C19.527 17.7773 20.4722 18.7225 20.4722 19.8885Z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { toRefs } from "vue";

export default {
    name: "site-product",
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    emits: [
        "toggleCompare",
        "toggleFavorite",
        "toggleBasket",
        "toggleQuantity",
    ],
    setup(props, { emit }) {
        const { product } = toRefs(props);

        const splideOptions = {
            rewind: true,
            type: "fade",
            arrows: false,
            classes: {
                pagination: "splide__pagination site-product__pagination",
                page: "splide__pagination__page site-product__pagination-page",
            },
        };

        const onToggleCompare = () => {
            emit("toggleCompare", product);
        };

        const onToggleFavorite = () => {
            emit("toggleFavorite", product);
        };

        const onToggleBasket = () => {
            emit("toggleBasket", product);
        };

        const onToggleQuantity = () => {
            emit("toggleQuantity");
        };

        return {
            splideOptions,
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
    position: relative
    border-radius: 24px
    font-family: 'Manrope', sans-serif
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
        border-radius: 24px 24px 0px 0px
        background: $main-white

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
        padding: 24px 24px 34px 24px
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

    .site-product__info-link
        display: inline-block

    .site-product__info-link-label
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
            font-weight: 500
            margin-top: 20px

    .site-product__footer
        display: flex
        align-items: center
        justify-content: space-between
        margin-top: 52px

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

        &.site-product__button--basket
            &.site-product__button--active
                background: $main-blue
                border-color: $main-blue

                .site-product__button-svg--basket
                    path
                        fill: $main-white

    .site-product__button-svg
        &.site-product__button-svg--compare
            path
                stroke: $grays-gray-350

        &.site-product__button-svg--favorite,
        &.site-product__button-svg--basket
            path
                fill: $grays-gray-350

@media screen and (max-width: 1440px)
    .site-product
        max-width: 222px

        .site-product__preview
            padding: 30px 0 8px 0

        .site-product__slider
            height: 134px

        .splide__list
            height: 134px

        .site-product__slide-svg
            width: 160px
            height: 134px

        .site-product__content
            padding: 24px 24px 16px 24px

        .site-product__info-link-label
            font-size: 16px
            line-height: 20px

        .site-product__info-model
            margin-top: 8px

        .site-product__info-text
            &.site-product__info-text--description
                margin-top: 16px

        .site-product__footer
            margin-top: 16px

        .site-product__buttons
            grid-column-gap: 8px

        .site-product__button--compare
            display: none

@media screen and (max-width: 1024px)
    .site-product
        max-width: 140px
        border-radius: 20px

        .site-product__preview
            padding: 40px 0 4px 0
            border-radius: 20px 20px 0 0

        .site-product__slider
            height: 99px

        .splide__list
            height: 99px

        .site-product__slide-svg
            width: 100px
            height: 99px

        .site-product__content
            padding: 11px 8px
            border-radius: 0 0 20px 20px

        .site-product__statistics
            margin-bottom: 4px

        .site-product__rating-label
            font-size: 10px
            line-height: 12px

        .site-product__feedback-label
            font-weight: 400
            font-size: 10px
            line-height: 14px

        .site-product__info-link-label
            font-size: 12px
            line-height: 16px

        .site-product__info-model
            margin-top: 4px

        .site-product__info-text
            font-size: 10px
            line-height: 14px

        .site-product__info-text
            &.site-product__info-text--description
                margin-top: 8px
                line-height: 12px

        .site-product__footer
            margin-top: 8px

        .site-product__price-label-old
            font-size: 10px
            line-height: 12px

        .site-product__price-label
            font-size: 12px
            line-height: 16px

        .site-product__buttons
            grid-column-gap: 4px

        .site-product__button
            width: 29px
            height: 29px

        .site-product__button-svg
            width: 17px
            height: 17px

@media screen and (max-width: 768px)
    .site-product
        max-width: 140px
        border-color: $grays-gray-150

        .site-product__preview
            padding-bottom: 0

        .site-product__pagination
            display: none

        .site-product__content
            padding: 11px 8px 10px 8px

        .site-product__feedback-label
            line-height: 14px

        .site-product__info-link-label
            font-size: 12px
            line-height: 16px

        .site-product__info-text
            font-size: 10px
            line-height: 14px

        .site-product__info-model
            margin-top: 8px

        .site-product__info-text
            &.site-product__info-text--description
                margin-top: 8px

        .site-product__footer
            margin-top: 8px

        .site-product__price-label-old
            font-size: 10px
            line-height: 12px
            font-weight: 500

        .site-product__price-label
            font-size: 12px
            line-height: 16px

        .site-product__button
            width: 28px
            height: 28px

        .site-product__button-svg
            width: 16px
            height: 16px
</style>
