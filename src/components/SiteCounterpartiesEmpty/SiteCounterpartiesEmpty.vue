<template>
    <div class="site-counterparties-empty">
        <div class="site-counterparties-empty__wrapper">
            <img
                class="site-counterparties-empty__img"
                src="@/assets/images/counterparties-empty/print.png"
                alt="print"
            />
            <h4 class="site-counterparties-empty__title">
                Вы пока не добавили контрагента
            </h4>
            <p class="site-counterparties-empty__label">
                Вы можете сохранить данные и реквизиты контрагента. Сохраненные
                данные помогут ускорить процесс оформления заказа.
            </p>
            <button class="site-counterparties-empty__button">
                <img
                    class="site-counterparties-empty__button-icon"
                    src="@/assets/images/counterparties-empty/plus.svg"
                    alt="plus"
                />
                Добавить контрагента
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "SiteCounterpartiesEmpty",
};
</script>

<style lang="sass">
.site-counterparties-empty
    display: flex
    align-items: center
    justify-content: center
    font-family: 'Manrope', sans-serif
    text-align: center

    .site-counterparties-empty__wrapper
        width: 360px

    .site-counterparties-empty__img
        margin: 0 auto 24px auto
        display: block

    .site-counterparties-empty__title
        font-weight: 700
        font-size: 20px
        line-height: 24px
        color: $main-black
        margin-bottom: 16px

    .site-counterparties-empty__label
        font-size: 14px
        line-height: 20px
        color: $grays-gray-400

    .site-counterparties-empty__button
        display: flex
        align-items: center
        justify-content: center
        grid-column-gap: 8px
        margin: 40px auto 0 auto
        padding: 13px 32px
        border: 1px solid $main-blue
        border-radius: 8px
        background: none
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-blue
        cursor: pointer

@media screen and (max-width: 1024px)
    .site-counterparties-empty
        .site-counterparties-empty__title
            font-size: 18px

@media screen and (max-width: 768px)
    .site-counterparties-empty
        .site-counterparties-empty__wrapper
            width: 100%

        .site-counterparties-empty__button
            width: 100%
            margin: 40px 0 0 0
</style>
