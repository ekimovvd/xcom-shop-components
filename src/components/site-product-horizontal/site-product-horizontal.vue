<template>
    <div class="site-product-horizontal">
        <div class="site-product-horizontal__tag">
            <img
                class="site-product-horizontal__tag-svg"
                src="@/assets/images/product-horizontal/sale.svg"
                alt="sale"
            />
            <p class="site-product-horizontal__tag-label">Акция</p>
        </div>
        <div class="site-product-horizontal__content">
            <div class="site-product-horizontal__preview">
                <img
                    class="site-product-horizontal__preview-img"
                    src="@/assets/images/product-horizontal/laptop.png"
                    alt="img"
                />
            </div>
            <div class="site-product-horizontal__group">
                <div class="site-product-horizontal__info">
                    <h6 class="site-product-horizontal__title">
                        {{ product.name }}
                    </h6>
                    <div class="site-product-horizontal__statistics">
                        <div class="site-product-horizontal__rating">
                            <img
                                class="site-product-horizontal__rating-svg"
                                src="@/assets/images/product-horizontal/star.svg"
                                alt="star"
                            />
                            <p class="site-product-horizontal__rating-label">
                                4.9
                            </p>
                        </div>
                        <a class="site-product-horizontal__feedback" href="#">
                            <p class="site-product-horizontal__feedback-label">
                                18 отзывов
                            </p>
                        </a>
                    </div>
                    <ul class="site-product-horizontal__specifications">
                        <li
                            class="site-product-horizontal__specification"
                            v-for="specification in product.specifications"
                            :key="specification.id"
                        >
                            <p
                                class="site-product-horizontal__specification-label"
                            >
                                {{ specification.name }}
                            </p>
                            <p
                                class="site-product-horizontal__specification-value"
                            >
                                {{ specification.value }}
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="site-product-horizontal__block">
                    <div class="site-product-horizontal__buttons">
                        <button
                            class="site-product-horizontal__button site-product-horizontal__button--compare"
                            @click="onCompare"
                        >
                            <svg
                                class="site-product-horizontal__button-svg site-product-horizontal__button-svg--compare"
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
                            class="site-product-horizontal__button site-product-horizontal__button--favorite"
                            @click="onFavorite"
                        >
                            <svg
                                class="site-product-horizontal__button-svg site-product-horizontal__button-svg--favorite"
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
                            class="site-product-horizontal__button site-product-horizontal__button--basket site-product-horizontal__button--active"
                            @click="onBasket"
                        >
                            <svg
                                class="site-product-horizontal__button-svg site-product-horizontal__button-svg--basket"
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
                    <div class="site-product-horizontal__prices">
                        <p class="site-product-horizontal__price">12 950 ₽</p>
                        <p class="site-product-horizontal__price-old">
                            15 302 ₽
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { toRefs } from "vue";

export default {
    name: "site-product-horizontal",
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
            onToggleCompare,
            onToggleFavorite,
            onToggleBasket,
            onToggleQuantity,
        };
    },
};
</script>

<style lang="sass">
.site-product-horizontal
    position: relative
    font-family: 'Manrope', sans-serif
    padding: 24px 34px 40px 24px
    background: $main-white
    border-radius: 24px

    &:hover
        box-shadow: $small-down


    .site-product-horizontal__tag
        display: inline-flex
        align-items: center
        justify-content: center
        padding: 6px 10px
        background: $other-yellow-300-main
        border-radius: 8px
        position: absolute
        top: 12px
        left: 12px

    .site-product-horizontal__tag-label
        font-weight: 700
        font-size: 12px
        line-height: 16px
        color: $main-white
        margin-left: 4px

    .site-product-horizontal__content
        display: flex

    .site-product-horizontal__group
        display: flex
        width: 100%
        margin-left: 32px

    .site-product-horizontal__preview,
    .site-product-horizontal__preview-img
        width: 156px
        height: 156px

    .site-product-horizontal__title
        font-weight: 700
        font-size: 14px
        line-height: 18px
        color: $main-black

    .site-product-horizontal__statistics
        display: flex
        align-items: center
        grid-column-gap: 8px
        margin-top: 8px

    .site-product-horizontal__rating
        display: flex
        align-items: center
        grid-column-gap: 4px

    .site-product-horizontal__rating-label
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $other-yellow-400

    .site-product-horizontal__feedback-label
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $grays-gray-400

    .site-product-horizontal__specifications
        display: flex
        flex-direction: column
        grid-row-gap: 2px
        margin-top: 8px

    .site-product-horizontal__specification
        display: flex
        align-items: center
        font-weight: 400
        font-size: 12px
        line-height: 16px

    .site-product-horizontal__specification-label
        color: $grays-gray-400

    .site-product-horizontal__specification-value
        color: $main-black
        margin-left: 4px

    .site-product-horizontal__block
        margin-left: auto
        display: flex
        flex-direction: column
        grid-row-gap: 16px

    .site-product-horizontal__buttons
        display: flex
        align-items: center
        grid-column-gap: 12px

    .site-product-horizontal__button
        width: 40px
        height: 40px
        border: 1px solid $grays-gray-300
        border-radius: 8px
        display: flex
        align-items: center
        justify-content: center
        background: transparent
        cursor: pointer
        padding: 0

        &.site-product-horizontal__button--basket
            &.site-product-horizontal__button--active
                background: $main-blue
                border-color: $main-blue

                .site-product-horizontal__button-svg--basket
                    path
                        fill: $main-white

    .site-product-horizontal__button-svg
        &.site-product-horizontal__button-svg--compare
            path
                stroke: $grays-gray-350

        &.site-product-horizontal__button-svg--favorite,
        &.site-product-horizontal__button-svg--basket
            path
                fill: $grays-gray-350

    .site-product-horizontal__prices
        display: flex
        align-items: flex-end
        grid-column-gap: 8px

    .site-product-horizontal__price
        font-weight: 700
        font-size: 24px
        line-height: 32px
        color: $main-black

    .site-product-horizontal__price-old
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-400
        text-decoration: line-through $other-red-200-main

@media screen and (max-width: 1440px)
    .site-product-horizontal
        padding: 24px 28px 58px 24px

        .site-product-horizontal__tag
            padding: 4px 8px

        .site-product-horizontal__tag-svg
            width: 12px
            height: 12px

        .site-product-horizontal__tag-label
            font-size: 10px
            line-height: 12px

        .site-product-horizontal__preview,
        .site-product-horizontal__preview-img
            width: 140px
            height: 140px

        .site-product-horizontal__info
            width: 260px

        .site-product-horizontal__block
            grid-row-gap: 12px

        .site-product-horizontal__price
            font-size: 22px
            line-height: 28px

@media screen and (max-width: 1024px)
    .site-product-horizontal
        padding: 24px 28px 40px 24px

        .site-product-horizontal__preview,
        .site-product-horizontal__preview-img
            width: 120px
            height: 120px

        .site-product-horizontal__info
            width: 232px

        .site-product-horizontal__title
            font-size: 12px
            line-height: 16px

@media screen and (max-width: 768px)
    .site-product-horizontal
        padding: 36px 8px 13px 8px
        border-radius: 16px

        .site-product-horizontal__tag
            top: 8px
            left: 8px

        .site-product-horizontal__preview,
        .site-product-horizontal__preview-img
            width: 80px
            height: 80px

        .site-product-horizontal__group
            flex-direction: column
            grid-row-gap: 12px
            margin-left: 22px

        .site-product-horizontal__info
            width: 100%

        .site-product-horizontal__rating-label
            font-size: 10px
            line-height: 12px

        .site-product-horizontal__feedback-label
            font-size: 10px
            line-height: 14px

        .site-product-horizontal__specification
            font-size: 10px
            line-height: 14px

        .site-product-horizontal__specification-value
            margin-left: 2px

        .site-product-horizontal__block
            margin-left: 0

        .site-product-horizontal__buttons
            grid-column-gap: 8px

        .site-product-horizontal__button
            width: 29px
            height: 29px

        .site-product-horizontal__button-svg
            width: 17px
            height: 17px

        .site-product-horizontal__prices
            align-items: center

        .site-product-horizontal__price
            font-size: 18px
            line-height: 24px

        .site-product-horizontal__price-old
            font-size: 12px
            line-height: 16px
</style>
