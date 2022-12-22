<template>
    <div class="site-questions-create">
        <p class="site-questions-create__label">
            Задавайте вопросы и эксперты помогут вам найти ответ
        </p>
        <button class="site-questions-create__button">Задать вопрос</button>
    </div>
</template>

<script>
export default {
    name: "SiteQuestionsCreate",
};
</script>

<style lang="sass">
.site-questions-create
    padding: 24px 12px
    background: $old-white
    border: 1px solid $new-gray-200
    border-radius: 12px

    .site-questions-create__label
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 20px
        line-height: 24px
        color: $main-black

    .site-questions-create__button
        padding: 15px 21px
        background: $main-blue
        border-radius: 8px
        font-family: 'Manrope', sans-serif
        font-weight: 600
        font-size: 14px
        line-height: 18px
        color: $main-white
        border: none
        outline: none
        cursor: pointer
        width: 100%
        margin-top: 32px

@media screen and (max-width: 1440px)
    .site-questions-create
        padding: 24px 16px

        .site-questions-create__label
            font-size: 18px
            line-height: 24px
</style>
