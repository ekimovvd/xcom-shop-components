<template>
    <div class="site-payment-success">
        <div class="site-payment-success__wrapper">
            <img
                class="site-payment-success__img"
                src="@/assets/images/payment-success/check.svg"
                alt="check"
            />
            <h2 class="site-payment-success__title">
                Заказ №{{ order.id }} успешно создан
            </h2>
            <p
                class="site-payment-success__label site-payment-success__label--client"
            >
                Клиент: {{ order.client }}
            </p>
            <p
                class="site-payment-success__label site-payment-success__label--address"
            >
                Адрес доставки: {{ order.address }}
            </p>
            <a class="site-payment-success__orders" href="#"> Мои заказы </a>
            <a class="site-payment-success__home" href="#">На главную</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "SitePaymentSuccess",
    props: {
        order: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="sass">
.site-payment-success
    display: flex
    align-items: center
    justify-content: center
    font-family: 'Manrope', sans-serif

    .site-payment-success__wrapper
        display: flex
        flex-direction: column
        align-items: center
        text-align: center

    .site-payment-success__img
        margin-bottom: 32px

    .site-payment-success__title
        font-weight: 700
        font-size: 32px
        line-height: 40px
        color: $main-black
        margin-bottom: 16px

    .site-payment-success__label
        font-weight: 400
        font-size: 20px
        line-height: 28px
        color: $main-black

    .site-payment-success__label--client
        margin-bottom: 16px

    .site-payment-success__orders
        padding: 13px 32px
        background: $main-blue
        border-radius: 8px
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-white
        margin-top: 40px

    .site-payment-success__home
        font-family: 'Manrope'
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $main-blue
        margin-top: 16px

@media screen and (max-width: 1440px)
    .site-payment-success
        .site-payment-success__title
            font-size: 28px
            line-height: 36px

        .site-payment-success__label
            font-size: 18px
            line-height: 26px

@media screen and (max-width: 768px)
    .site-payment-success
        .site-payment-success__title
            font-size: 24px
            line-height: 32px
            margin-bottom: 32px

        .site-payment-success__label
            font-size: 16px
            line-height: 22px

        .site-payment-success__label--client
            margin-bottom: 32px

        .site-payment-success__orders
            margin-top: 32px
            width: 100%

        .site-payment-success__home
            width: 100%
</style>
