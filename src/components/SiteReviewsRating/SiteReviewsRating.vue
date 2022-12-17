<template>
    <div class="site-reviews-rating">
        <h4 class="site-reviews-rating__title">Оценка {{ getEstimation }}</h4>
        <p class="site-reviews-rating__label">
            на основе {{ getReviewsLength }} {{ getReviewsDecline }}
        </p>
        <div class="site-reviews-rating__list">
            <div
                class="site-reviews-rating__item"
                v-for="rating in getRating"
                :key="rating.rating"
            >
                <div class="site-reviews-rating__item-stars">
                    <img
                        class="site-reviews-rating__item-star"
                        v-for="star in rating.stars"
                        :key="star.id"
                        :src="star.img"
                        alt="star"
                    />
                </div>
                <div
                    class="site-reviews-rating__item-bar"
                    :class="rating.bar"
                ></div>
                <button
                    class="site-reviews-rating__item-label"
                    :class="onRatingViewClass(rating.rating)"
                    @click="onRating(rating.rating)"
                >
                    {{ rating.label }}
                </button>
            </div>
        </div>
        <button class="site-reviews-rating__review" @click="onReview">
            Оставить отзыв
        </button>
    </div>
</template>

<script>
import { computed, toRefs } from "vue";

import { onDecline } from "@/utils/functions.js";

export default {
    name: "SiteReviewsRating",
    props: {
        reviews: {
            type: Array,
            default: () => [],
        },
        rating: {
            type: Number,
            default: null,
        },
    },
    emits: ["rating", "review"],
    setup(props, { emit }) {
        const { reviews, rating } = toRefs(props);

        const getReviewsLength = computed(() => {
            return reviews.value.length;
        });

        const getReviewsDecline = computed(() => {
            return onDecline(["отзыв", "", "а", "ов"])(getReviewsLength);
        });

        const getEstimation = computed(() => {
            let estimation = 0;

            reviews.value.forEach((review) => {
                estimation += review.rating;
            });

            return estimation
                ? Math.floor(estimation / getReviewsLength.value)
                : estimation;
        });

        const getAllReviews = computed(() => {
            const allReviews = {};

            reviews.value.forEach((review) => {
                const rating = Math.floor(review.rating);
                allReviews[rating] = allReviews[rating]
                    ? (allReviews[rating] += 1)
                    : 1;
            });

            return allReviews;
        });

        const getRating = computed(() => {
            const allRatings = 5;
            const allStars = 5;
            let counter = 0;

            const ratings = [];

            for (let rating = 0; rating < allRatings; rating++) {
                const currentRating = getAllReviews.value[allStars - counter];

                ratings.push({
                    rating: allRatings - counter,
                    stars: [],
                    label: `${currentRating ? currentRating : 0} ${onDecline([
                        "отзыв",
                        "",
                        "а",
                        "ов",
                    ])(currentRating)}`,
                    bar: currentRating
                        ? "site-reviews-rating__item-bar--active"
                        : "",
                });

                for (let star = 0; star < allStars; star++) {
                    if (star < allStars - counter) {
                        ratings[rating].stars.push({
                            id: star,
                            img: require("@/assets/images/reviews-rating/star.svg"),
                        });
                    } else {
                        ratings[rating].stars.push({
                            id: star,
                            img: require("@/assets/images/reviews-rating/star-gray.svg"),
                        });
                    }
                }
                counter++;
            }

            return ratings;
        });

        const onRatingViewClass = (currentRating) => {
            return rating.value === currentRating
                ? "site-reviews-rating__item-label--active"
                : "";
        };

        const onReview = () => {
            emit("review");
        };

        const onRating = (rating) => {
            emit("rating", rating);
        };

        return {
            getReviewsLength,
            getReviewsDecline,
            getRating,
            getEstimation,
            onRatingViewClass,
            onReview,
            onRating,
        };
    },
};
</script>

<style lang="sass">
.site-reviews-rating
    padding: 24px 12px
    background: $old-white
    border: 1px solid $new-gray-200
    border-radius: 12px
    font-family: 'Manrope', sans-serif

    .site-reviews-rating__title
        font-weight: 500
        font-size: 20px
        line-height: 24px
        color: $main-black
        margin-bottom: 8px

    .site-reviews-rating__label
        font-weight: 500
        font-size: 12px
        line-height: 18px
        color: $new-gray-400

    .site-reviews-rating__list
        display: flex
        flex-direction: column
        grid-row-gap: 8px
        margin-top: 24px

    .site-reviews-rating__item
        display: flex
        align-items: center

    .site-reviews-rating__item-stars
        display: flex
        align-items: center
        grid-column-gap: 2px

    .site-reviews-rating__item-star
        width: 16px
        height: 16px
        display: block

    .site-reviews-rating__item-bar
        width: 100px
        height: 4px
        background: #DDE6ED
        border-radius: 2px
        margin-left: 16px

    .site-reviews-rating__item-bar--active
        background: $other-yellow-300-main

    .site-reviews-rating__item-label
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 12px
        line-height: 18px
        color: $new-gray-400
        margin-left: auto
        background: none
        outline: none
        cursor: pointer
        border: none
        padding: 0

    .site-reviews-rating__item-label--active
        color: $main-blue

    .site-reviews-rating__review
        padding: 13px 32px
        background: $main-blue
        border-radius: 8px
        margin-top: 32px
        width: 100%
        border: none
        outline: none
        cursor: pointer
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-white

@media screen and (max-width: 1440px)
    .site-reviews-rating
        .site-reviews-rating__title
            font-weight: 700
            font-size: 18px
            line-height: 24px
            margin-bottom: 4px

        .site-reviews-rating__label
            font-size: 12px
            line-height: 16px

        .site-reviews-rating__list
            margin-top: 16px

        .site-reviews-rating__item-bar
            width: 31px
            margin-left: 11px

        .site-reviews-rating__review
            margin-top: 24px

@media screen and (max-width: 1024px)
    .site-reviews-rating
        .site-reviews-rating__list
            width: 200px

@media screen and (max-width: 768px)
    .site-reviews-rating
        .site-reviews-rating__list
            width: 100%
</style>
