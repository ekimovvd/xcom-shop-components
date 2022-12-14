<template>
    <div class="site-payment-error">
        <div class="site-payment-error__wrapper">
            <img
                class="site-payment-error__img"
                src="@/assets/images/payment-error/cross.svg"
                alt="cross"
            />
            <p class="site-payment-error__order">Заказ №{{ order.id }}</p>
            <h2 class="site-payment-error__title">{{ order.description }}</h2>
            <p class="site-payment-error__label">
                Время ожидания оплаты истекло
            </p>
            <a class="site-payment-error__link" href="#"> Вернуться в заказ </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "SitePaymentError",
    props: {
        order: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="sass">
.site-payment-error
    display: flex
    align-items: center
    justify-content: center

    .site-payment-error__wrapper
        display: flex
        flex-direction: column
        align-items: center
        text-align: center

    .site-payment-error__img
        margin-bottom: 32px

    .site-payment-error__title
        font-family: 'Manrope', sans-serif
        font-weight: 700
        font-size: 32px
        line-height: 40px
        color: $main-black
        margin: 16px 0

    .site-payment-error__order
        font-family: 'Manrope', sans-serif
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-400

    .site-payment-error__label
        font-family: 'TT Norms', sans-serif
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-400

    .site-payment-error__link
        padding: 13px 32px
        background: $main-blue
        border-radius: 8px
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-white
        margin-top: 40px

@media screen and (max-width: 1440px)
    .site-payment-error
        .site-payment-error__title
            font-size: 28px
            line-height: 36px

@media screen and (max-width: 768px)
    .site-payment-error
        .site-payment-error__title
            font-size: 24px
            line-height: 32px

        .site-payment-error__link
            width: 100%
</style>
