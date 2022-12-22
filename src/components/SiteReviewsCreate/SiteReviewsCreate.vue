<template>
    <div class="site-reviews-create">
        <p class="site-reviews-create__label">Нет оценок</p>
        <button class="site-reviews-create__button" @click="onCreate">
            Оставить отзыв
        </button>
    </div>
</template>

<script>
export default {
    name: "SiteReviewsCreate",
    emits: ["create"],
    setup(props, { emit }) {
        const onCreate = () => {
            emit("create");
        };

        return {
            onCreate,
        };
    },
};
</script>

<style lang="sass">
.site-reviews-create
    padding: 24px 12px
    background: $old-white
    border: 1px solid $new-gray-200
    border-radius: 12px

    .site-reviews-create__label
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 20px
        line-height: 24px
        color: $main-black

    .site-reviews-create__button
        padding: 13px 32px
        background: $main-blue
        border-radius: 8px
        width: 100%
        cursor: pointer
        outline: none
        border: none
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-white
        margin-top: 32px

@media screen and (max-width: 1024px)
    .site-reviews-create
        .site-reviews-create__label
            font-size: 18px
            line-height: 24px
</style>
