<template>
    <div class="site-reviews">
        <SiteToggle title="Отзывы" :isHidden="isHidden" @toggle="onToggle" />

        <div
            class="site-reviews__wrapper"
            :class="getWrapperViewClass"
            v-if="getWrapperIsShow"
        >
            <SiteReviewsRating
                v-if="getRatingIsShow"
                :reviews="reviews"
                :rating="rating"
                @review="onReview"
                @rating="onRating"
            />
            <SiteReviewsCreate v-if="getCreateIsShow" @create="onCreate" />
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
    </div>
</template>

<script>
import { computed, ref, toRefs } from "vue";

import SiteToggle from "@/components/site-toggle/site-toggle.vue";
import SiteReviewsRating from "@/components/SiteReviewsRating/SiteReviewsRating.vue";
import SiteReviewsCreate from "@/components/SiteReviewsCreate/SiteReviewsCreate.vue";
import SiteReview from "@/components/SiteReview/SiteReview.vue";
import SitePagination from "@/components/SitePagination/SitePagination";

export default {
    name: "SiteReviews",
    components: {
        SiteToggle,
        SiteReviewsRating,
        SiteReviewsCreate,
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

        const isHidden = ref(false);

        const currentPage = ref(0);
        const sizePage = 10;

        const rating = ref(null);

        const getRatingIsShow = computed(() => {
            return reviews.value.length;
        });

        const getCreateIsShow = computed(() => {
            return !reviews.value.length;
        });

        const getWrapperIsShow = computed(() => {
            return !isHidden.value;
        });

        const getWrapperViewClass = computed(() => {
            return !reviews.value.length ? "site-reviews__wrapper--empty" : "";
        });

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

        const onToggle = () => {
            isHidden.value = !isHidden.value;
        };

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

        const onCreate = () => {
            console.log("On Create");
        };

        return {
            isHidden,
            currentPage,
            rating,
            getRatingIsShow,
            getCreateIsShow,
            getWrapperIsShow,
            getWrapperViewClass,
            getReviews,
            getReviewsLength,
            getPaginationIsShow,
            getPages,
            onToggle,
            onChangeCurrentPage,
            onReview,
            onRating,
            onCreate,
        };
    },
};
</script>

<style lang="sass">
.site-reviews
    .site-reviews__wrapper
        display: grid
        grid-template-columns: 318px 1fr
        align-items: flex-start
        grid-column-gap: 24px
        margin-top: 64px

    .site-reviews__list
        display: flex
        flex-direction: column
        grid-row-gap: 24px

@media screen and (max-width: 1440px)
    .site-reviews
        .site-reviews__wrapper
            grid-template-columns: 222px 1fr

        .site-reviews__wrapper--empty
            grid-template-columns: 318px 1fr

@media screen and (max-width: 1024px)
    .site-reviews
        .site-reviews__wrapper
            grid-template-columns: 1fr
            grid-row-gap: 24px
            margin-top: 48px

        .site-reviews__list
            grid-row-gap: 16px

@media screen and (max-width: 768px)
    .site-reviews
        .site-reviews__wrapper
            margin-top: 32px
</style>
