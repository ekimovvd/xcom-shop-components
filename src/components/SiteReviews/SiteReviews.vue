<template>
    <div class="site-reviews">
        <SiteReviewsRating
            :reviews="reviews"
            :rating="rating"
            @review="onReview"
            @rating="onRating"
        />
        <div class="site-reviews__list">
            <SiteReview
                v-for="review in getReviews"
                :key="review.id"
                :review="review"
            />
            <SitePagination
                v-if="getPaginationIsShow"
                :page="currentPage"
                :pages="getPages"
                @change="onChangeCurrentPage"
            />
        </div>
    </div>
</template>

<script>
import { computed, ref, toRefs } from "vue";

import SiteReviewsRating from "@/components/SiteReviewsRating/SiteReviewsRating.vue";
import SiteReview from "@/components/SiteReview/SiteReview.vue";
import SitePagination from "@/components/SitePagination/SitePagination";

export default {
    name: "SiteReviews",
    components: {
        SiteReviewsRating,
        SiteReview,
        SitePagination,
    },
    props: {
        reviews: {
            type: Array,
            default: () => [],
        },
    },
    setup(props) {
        const { reviews } = toRefs(props);

        const currentPage = ref(0);
        const sizePage = 10;
        const rating = ref(null);

        const getReviews = computed(() => {
            let newReviews = reviews.value;

            if (rating.value) {
                newReviews = reviews.value.filter(
                    (review) => Math.floor(review.rating) === rating.value
                );
            }

            const starPage = currentPage.value * sizePage;
            const endPage = (currentPage.value + 1) * sizePage;

            return newReviews.slice(starPage, endPage);
        });

        const getReviewsLength = computed(() => {
            return reviews.value.length;
        });

        const getPaginationIsShow = computed(() => {
            return getReviews.value.length;
        });

        const getPages = computed(() => {
            return Math.ceil(getReviews.value.length / sizePage);
        });

        const onChangeCurrentPage = (page) => {
            currentPage.value = page;
        };

        const onReview = () => {
            console.log("Create Review");
        };

        const onRating = (newRating) => {
            currentPage.value = 0;
            rating.value = rating.value === newRating ? null : newRating;
        };

        return {
            currentPage,
            rating,
            getReviews,
            getReviewsLength,
            getPaginationIsShow,
            getPages,
            onChangeCurrentPage,
            onReview,
            onRating,
        };
    },
};
</script>

<style lang="sass">
.site-reviews
    display: grid
    grid-template-columns: 318px 1fr
    align-items: flex-start
    grid-column-gap: 24px

    .site-reviews__list
        display: flex
        flex-direction: column
        grid-row-gap: 24px

@media screen and (max-width: 1440px)
    .site-reviews
        grid-template-columns: 222px 1fr

@media screen and (max-width: 1024px)
    .site-reviews
        grid-template-columns: 1fr
        grid-row-gap: 24px

        .site-reviews__list
            grid-row-gap: 16px
</style>
