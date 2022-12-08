<template>
    <div class="site-addresses-empty">
        <div class="site-addresses-empty__wrapper">
            <img
                class="site-addresses-empty__img"
                src="@/assets/images/addresses-empty/map.png"
                alt="map"
            />
            <h4 class="site-addresses-empty__title">
                Вы пока не добавили адреса
            </h4>
            <p class="site-addresses-empty__label">
                Вы можете сохранить свой домашний адрес или адрес сервисного
                центра. Сохраненные адреса помогут ускорить процесс оформления
                заказа.
            </p>
            <button class="site-addresses-empty__button">
                <img
                    class="site-addresses-empty__button-icon"
                    src="@/assets/images/addresses-empty/plus.svg"
                    alt="plus"
                />
                Добавить адрес
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "SiteAddressesEmpty",
};
</script>

<style lang="sass">
.site-addresses-empty
    display: flex
    align-items: center
    justify-content: center
    font-family: 'Manrope', sans-serif
    text-align: center

    .site-addresses-empty__wrapper
        width: 360px

    .site-addresses-empty__img
        margin: 0 auto 24px auto
        width: 200px
        height: 200px

    .site-addresses-empty__title
        font-weight: 700
        font-size: 20px
        line-height: 24px
        color: $main-black
        margin-bottom: 16px

    .site-addresses-empty__label
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-400

    .site-addresses-empty__button
        display: flex
        align-items: center
        justify-content: center
        cursor: pointer
        background: none
        padding: 13px 32px
        border: 1px solid $main-blue
        border-radius: 8px
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-blue
        grid-column-gap: 8px
        margin: 40px auto 0 auto

@media screen and (max-width: 1440px)
    .site-addresses-empty
        .site-addresses-empty__title
            font-size: 18px

@media screen and (max-width: 768px)
    .site-addresses-empty
        .site-addresses-empty__wrapper
            width: 100%

        .site-addresses-empty__button
            width: 100%
            margin: 40px 0 0 0
</style>
