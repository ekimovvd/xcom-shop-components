<template>
    <div class="site-questions">
        <div class="site-questions__input">
            <input
                class="site-questions__input-field"
                type="text"
                placeholder="Поиск"
            />
            <img
                class="site-questions__input-search"
                src="@/assets/images/questions/search.svg"
                alt="search"
            />
        </div>
        <h5 class="site-questions__title">{{ title }}</h5>
        <ul class="site-questions__list">
            <SiteQuestion
                v-for="question in questions"
                :key="question.id"
                :question="question"
            />
        </ul>
    </div>
</template>

<script>
import SiteQuestion from "@/components/SiteQuestion/SiteQuestion.vue";

export default {
    name: "SiteQustions",
    components: {
        SiteQuestion,
    },
    props: {
        title: {
            type: String,
            default: "",
        },
        questions: {
            type: Array,
            default: () => [],
        },
    },
};
</script>

<style lang="sass">
.site-questions
    font-family: 'Manrope', sans-serif

    .site-questions__input
        position: relative
        margin-bottom: 32px

    .site-questions__input-field
        background: $grays-gray-100
        border-radius: 8px
        border: none
        outline: none
        padding: 12px 44px 12px 24px
        width: 100%
        font-family: 'Manrope', sans-serif
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-400

        &::placeholder
            opacity: 1

    .site-questions__input-search
        position: absolute
        top: 50%
        right: 10px
        transform: translateY(-50%)

    .site-questions__title
        font-weight: 700
        font-size: 20px
        line-height: 24px
        color: $main-black

    .site-questions__list
        display: flex
        flex-wrap: wrap
        grid-gap: 24px
        align-items: flex-start
        margin-top: 24px

@media screen and (max-width: 1440px)
    .site-questions
        .site-questions__title
            font-size: 18px

@media screen and (max-width: 1024px)
    .site-questions
        .site-questions__input
            display: none
</style>
