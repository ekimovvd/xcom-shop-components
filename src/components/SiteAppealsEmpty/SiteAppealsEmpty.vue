<template>
    <div class="site-appeals-empty">
        <div class="site-appeals-empty__wrapper">
            <img
                class="site-appeals-empty__img"
                src="@/assets/images/appeals-empty/bubble-and-pencil.png"
                alt="bubble-and-pencil"
            />
            <h4 class="site-appeals-empty__title">У вас пока нет обращений</h4>
            <p class="site-appeals-empty__label">
                Вы можете создать обращение из заказа, если хотите вернуть все
                или часть товаров.
            </p>
            <button class="site-appeals-empty__button">
                Создать обращение
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "SiteAppealsEmpty",
};
</script>

<style lang="sass">
.site-appeals-empty
    display: flex
    align-items: center
    justify-content: center
    text-align: center
    font-family: 'Manrope', sans-serif

    .site-appeals-empty__wrapper
        width: 360px

    .site-appeals-empty__img
        margin: 0 auto 24px auto

    .site-appeals-empty__title
        font-weight: 700
        font-size: 24px
        line-height: 32px
        color: $main-black
        margin-bottom: 16px

    .site-appeals-empty__label
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-400

    .site-appeals-empty__button
        padding: 13px 32px
        background: $main-blue
        border-radius: 8px
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-white
        border: none
        outline: none
        cursor: pointer
        margin-top: 40px
        width: 100%

@media screen and (max-width: 1440px)
    .site-appeals-empty
        .site-appeals-empty__title
            font-size: 18px
            line-height: 24px

@media screen and (max-width: 768px)
    .site-appeals-empty
        .site-appeals-empty__wrapper
            width: 100%
</style>
