<template>
    <div class="site-question">
        <h5 class="site-question__title">{{ question.name }}</h5>
        <p class="site-question__date">{{ question.date }}</p>
        <p class="site-question__label">
            {{ question.label }}
        </p>
    </div>
</template>

<script>
export default {
    name: "SiteQuestion",
    props: {
        question: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="sass">
.site-question
    font-family: 'Manrope', sans-serif

    .site-question__title
        font-weight: 700
        font-size: 16px
        line-height: 20px
        color: $main-black

    .site-question__date
        font-weight: 400
        font-size: 10px
        line-height: 14px
        color: $grays-gray-400
        margin-top: 8px

    .site-question__label
        font-weight: 400
        font-size: 16px
        line-height: 22px
        color: $main-black
        margin-top: 16px
</style>
