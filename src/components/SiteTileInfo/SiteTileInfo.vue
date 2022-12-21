<template>
    <div class="site-tile-info">
        <div class="site-tile-info__header">
            <img
                class="site-tile-info__header-arrow"
                src="@/assets/images/tile-info/arrow-left.svg"
                alt="arrow-left"
            />
            <h2 class="site-tile-info__header-title">
                {{ tile.name }}
            </h2>
        </div>
        <div class="site-tile-info__buttons site-tile-info__buttons--top">
            <button
                class="site-tile-info__button"
                v-for="button in buttons"
                :key="button.id"
                @click="onButton(button.type)"
            >
                <img
                    class="site-tile-info__button-img"
                    :src="button.img"
                    alt="img"
                />
            </button>
        </div>
        <p class="site-tile-info__description">
            Коротко о товаре: {{ tile.description }}
        </p>
        <div class="site-tile-info__other">
            <div class="site-tile-info__other-group">
                <div class="site-tile-info__stars">
                    <img
                        class="site-tile-info__star"
                        v-for="star in getStars"
                        :key="star.id"
                        :src="star.img"
                        alt="star"
                    />
                </div>
                <a class="site-tile-info__rating" href="#">
                    {{ getReviews }} {{ getReviewsDecline }}
                </a>
                <div
                    class="site-tile-info__buttons site-tile-info__buttons--bottom"
                >
                    <button
                        class="site-tile-info__button"
                        v-for="button in buttons"
                        :key="button.id"
                        @click="onButton(button.type)"
                    >
                        <img
                            class="site-tile-info__button-img"
                            :src="button.img"
                            alt="img"
                        />
                    </button>
                </div>
            </div>
            <div class="site-tile-info__specification-group">
                <p class="site-tile-info__code">Код товара: {{ tile.code }}</p>
                <button
                    class="site-tile-info__specifications"
                    @click="onSpecifications"
                >
                    Все характеристики
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, toRefs } from "vue";

import { onDecline } from "@/utils/functions.js";

export default {
    name: "SiteTileInfo",
    props: {
        tile: Object,
        required: true,
    },
    setup(props) {
        const { tile } = toRefs(props);

        const buttons = [
            {
                id: 0,
                img: require("@/assets/images/tile-info/compare.svg"),
                type: "compare",
            },
            {
                id: 1,
                img: require("@/assets/images/tile-info/favorite.svg"),
                type: "favorite",
            },
            {
                id: 2,
                img: require("@/assets/images/tile-info/share.svg"),
                type: "share",
            },
        ];

        const getStars = computed(() => {
            const allStars = 5;
            const stars = [];

            for (let star = 1; star <= allStars; star++) {
                if (star <= Math.floor(tile.value.rating)) {
                    stars.push({
                        id: star,
                        img: require("@/assets/images/tile-info/star.svg"),
                    });
                } else {
                    stars.push({
                        id: star,
                        img: require("@/assets/images/tile-info/star-gray.svg"),
                    });
                }
            }

            return stars;
        });

        const getReviews = computed(() => {
            return tile.value.reviews.length;
        });

        const getReviewsDecline = computed(() => {
            return onDecline(["отзыв", "", "а", "ов"])(getReviews.value);
        });

        const onButton = (type) => {
            console.log("On Button: ", type);
        };

        const onSpecifications = () => {
            console.log("On Specifications");
        };

        return {
            buttons,
            getStars,
            getReviews,
            getReviewsDecline,
            onButton,
            onSpecifications,
        };
    },
};
</script>

<style lang="sass">
.site-tile-info
    font-family: 'Manrope', sans-serif

    .site-tile-info__header
        display: flex
        align-items: center
        grid-column-gap: 8px

    .site-tile-info__header-title
        font-weight: 700
        font-size: 32px
        line-height: 40px
        color: $main-black

    .site-tile-info__description
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-350
        margin-top: 8px

    .site-tile-info__other
        display: flex
        align-items: center
        margin-top: 8px

    .site-tile-info__other-group
        display: flex
        align-items: center
        grid-column-gap: 12px

    .site-tile-info__stars
        display: flex
        align-items: center
        grid-column-gap: 4px

    .site-tile-info__rating
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $main-blue

    .site-tile-info__buttons
        display: flex
        align-items: center
        grid-column-gap: 8px

    .site-tile-info__buttons--top
        display: none

    .site-tile-info__button
        background: none
        outline: none
        cursor: pointer
        padding: 0
        border: none

    .site-tile-info__specification-group
        display: flex
        align-items: center
        grid-column-gap: 32px
        margin-left: 32px

    .site-tile-info__code
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-350

    .site-tile-info__specifications
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $new-blue
        cursor: pointer
        outline: none
        border: none
        padding: 0
        background: none

@media screen and (max-width: 1440px)
    .site-tile-info
        .site-tile-info__header-title
            font-size: 28px
            line-height: 36px

        .site-tile-info__description
            width: 609px

@media screen and (max-width: 1024px)
    .site-tile-info
        padding-left: 32px

        .site-tile-info__header-arrow
            display: none

        .site-tile-info__description
            width: 509px

        .site-tile-info__buttons--bottom
            display: none

        .site-tile-info__buttons--top
            display: flex
            margin-top: 8px

@media screen and (max-width: 768px)
    .site-tile-info
        padding-left: 0

        .site-tile-info__header-title
            font-size: 24px
            line-height: 32px

        .site-tile-info__description
            width: 100%

        .site-tile-info__other
            flex-direction: column-reverse
            align-items: flex-start
            grid-row-gap: 8px

        .site-tile-info__specification-group
            margin-left: 0
            flex-direction: column
            grid-row-gap: 8px

        .site-tile-info__rating
            font-size: 12px
            line-height: 16px
</style>
