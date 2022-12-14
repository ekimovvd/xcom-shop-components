<template>
    <div class="site-feedback-success">
        <div class="site-feedback-success__wrapper">
            <img
                class="site-feedback-success__img"
                src="@/assets/images/feedback-success/documents.png"
                alt="img"
            />
            <h2 class="site-feedback-success__title">
                Ваша заявка принята на рассмотрение
            </h2>
            <p class="site-feedback-success__label">
                В указанное время наш менеджер свяжется с вами.
            </p>
            <button class="site-feedback-success__button" @click="onCancel">
                Понятно
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "SiteFeedbackSuccess",
    emits: ["cancel"],
    setup(props, { emit }) {
        const onCancel = () => {
            emit("cancel");
        };

        return {
            onCancel,
        };
    },
};
</script>

<style lang="sass">
.site-feedback-success
    margin: 100px 0
    padding: 64px 0
    background: $grays-gray-100
    border-radius: 20px
    display: flex
    align-items: center
    justify-content: center
    font-family: 'Manrope', sans-serif

    .site-feedback-success__wrapper
        display: flex
        flex-direction: column
        align-items: center

    .site-feedback-success__img
        width: 200px
        height: 200px
        margin-bottom: 24px

    .site-feedback-success__title
        font-weight: 700
        font-size: 32px
        line-height: 40px
        color: $main-black
        margin-bottom: 24px

    .site-feedback-success__label
        font-family: 'Manrope', sans-serif
        font-weight: 400
        font-size: 16px
        line-height: 22px
        color: $grays-gray-350

    .site-feedback-success__button
        padding: 13px 32px
        background: $main-blue
        border-radius: 8px
        border: none
        outline: none
        cursor: pointer
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-white
        margin-top: 24px

@media screen and (max-width: 1440px)
    .site-feedback-success
        .site-feedback-success__title
            font-size: 28px
            line-height: 36px

@media screen and (max-width: 768px)
    .site-feedback-success
        padding: 24px

        .site-feedback-success__title
            font-size: 24px
            line-height: 32px
            margin-bottom: 16px

        .site-feedback-success__button
            width: 100%
</style>
