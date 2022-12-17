<template>
    <div class="site-review">
        <h5 class="site-review__title">{{ review.name }}</h5>
        <div class="site-review__rating">
            <img
                class="site-review__rating-img"
                src="@/assets/images/review/star.svg"
                alt="star"
            />
            <p class="site-review__rating-label">{{ review.rating }}</p>
        </div>
        <div class="site-review__stars">
            <img
                class="site-review__rating-img"
                v-for="star in getStars"
                :key="star.id"
                :src="star.img"
                alt="star"
            />
        </div>
        <p class="site-review__date">{{ review.date }}</p>
        <div class="site-review__comment" v-if="getCommentIsShow">
            <p class="site-review__comment-label" ref="comment">
                {{ getComment }}
            </p>
            <button
                class="site-review__comment-all"
                v-if="getIsReadAll"
                @click="onCommentAll"
            >
                Читать полностью
            </button>
        </div>
    </div>
</template>

<script>
import { computed, ref, toRefs } from "vue";

export default {
    name: "SiteReview",
    props: {
        review: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const { review } = toRefs(props);

        const isReadAll = ref(false);

        const commentMaxLength = 400;

        const getCommentIsShow = computed(() => {
            return review.value.comment;
        });

        const getComment = computed(() => {
            return getIsReadAll.value
                ? `${review.value.comment.substr(0, commentMaxLength)}...`
                : review.value.comment;
        });

        const getIsReadAll = computed(() => {
            return (
                !isReadAll.value &&
                review.value.comment.length > commentMaxLength
            );
        });

        const getStars = computed(() => {
            const stars = [];
            const allStars = 5;

            for (let star = 0; star < allStars; star++) {
                stars.push({
                    id: star,
                    img:
                        star < Math.floor(review.value.rating)
                            ? require("@/assets/images/review/star.svg")
                            : require("@/assets/images/review/star-gray.svg"),
                });
            }

            return stars;
        });

        const onCommentAll = () => {
            isReadAll.value = true;
        };

        return {
            review,
            getComment,
            getCommentIsShow,
            getIsReadAll,
            getStars,
            onCommentAll,
        };
    },
};
</script>

<style lang="sass">
.site-review
    padding: 24px 32px 32px 32px
    background: $main-white
    box-shadow: $small-down
    border-radius: 24px
    font-family: 'Manrope', sans-serif

    .site-review__title
        font-weight: 700
        font-size: 16px
        line-height: 20px
        color: $main-black

    .site-review__rating
        display: flex
        align-items: center
        grid-column-gap: 4px
        margin: 8px 0

    .site-review__rating-label
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $other-yellow-400

    .site-review__rating-img
        width: 16px
        height: 16px
        display: block

    .site-review__stars
        display: none
        align-items: center
        margin: 8px 0

    .site-review__date
        font-weight: 400
        font-size: 10px
        line-height: 14px
        color: $grays-gray-400

    .site-review__comment
        margin-top: 16px

    .site-review__comment-label
        font-family: 'Manrope', sans-serif
        font-weight: 400
        font-size: 16px
        line-height: 22px
        color: $main-black

    .site-review__comment-label--hidden
        height: 44px

    .site-review__comment-all
        font-family: 'Manrope'
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $main-blue
        background: none
        outline: none
        cursor: pointer
        padding: 0
        border: none
        margin-top: 8px

@media screen and (max-width: 1440px)
    .site-review
        padding: 24px 40px 32px 32px

        .site-review__rating
            display: none

        .site-review__stars
            display: flex

@media screen and (max-width: 1024px)
    .site-review
        padding: 24px 32px 32px 32px
</style>
