<template>
    <div class="site-order-payment">
        <div class="site-order-payment__wrapper">
            <div class="site-order-payment__header">
                <h2 class="site-order-payment__title">Оплата заказа</h2>
                <span class="site-order-payment__subtitle">Заказ №{{ orderPaymentInfo.id }}</span>
            </div>
            <div class="site-order-payment__info">
                <div class="site-order-payment__cost">
                    <p class="site-order-payment__cost__label">Итого к оплате:</p>
                    <p class="site-order-payment__cost__value">{{ getTotalCost }} ₽</p>
                </div>
                <SitePaymentSystems :paymentSystems="paymentSystems" />
            </div>
            <SiteOrderPaymentForm :totalCost="getTotalCost" />
            <div class="site-order-payment__protection">
                <p class="site-order-payment__protection__text">
                    Платеж защищен. Данные карты передаются только в
                    зашифрованном виде по протоколу SSL, защищаются и
                    обрабатываются по стандарту безопасности PCI DSS.
                </p>
                <p class="site-order-payment__timer">
                    Осталось 20:00
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import {computed, toRefs} from "vue";
import {onNumberWithSpaces} from "@/utils/functions";
import SiteOrderPaymentForm from "@/components/SiteOrderPaymentForm/SiteOrderPaymentForm.vue";
import SitePaymentSystems from "@/components/SitePaymentSystems/SitePaymentSystems.vue";

export default {
    name: "SiteOrderPayment",
    components: {SitePaymentSystems, SiteOrderPaymentForm},
    props: {
        paymentSystems: {
            type: Array,
            default: () => [],
        },
        orderPaymentInfo: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const { orderPaymentInfo } = toRefs(props);

        const getTotalCost = computed(() => {
            return onNumberWithSpaces(orderPaymentInfo.value.cost);
        });

        return {
            getTotalCost,
        };
    },
}
</script>

<style lang="sass">
.site-order-payment
    display: flex
    align-items: center
    justify-content: center
    font-family: 'Manrope', sans-serif
    max-width: 530px
    margin: 0 auto

    .site-order-payment__wrapper
        display: flex
        flex-direction: column
        grid-row-gap: 32px
        width: 100%

    .site-order-payment__header
        display: flex
        flex-direction: column
        grid-row-gap: 8px
        text-align: center

    .site-order-payment__title
        font-weight: 700
        font-size: 32px
        line-height: 40px
        color: $main-black
        margin: 0

    .site-order-payment__subtitle
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-400

    .site-order-payment__info
        display: flex
        justify-content: space-between
        align-items: center

    .site-order-payment__cost
        display: flex
        flex-direction: column
        grid-row-gap: 4px

    .site-order-payment__cost__label
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-black
        margin: 0

    .site-order-payment__cost__value
        font-weight: 700
        font-size: 24px
        line-height: 32px
        color: $main-black
        margin: 0

    .site-order-payment__protection
        display: flex
        justify-content: space-between
        grid-gap: 20px

    .site-order-payment__protection__text
        font-weight: 400
        font-size: 12px
        line-height: 16px
        margin: 0
        color: $grays-gray-300
        text-align: left
        max-width: 260px

    .site-order-payment__timer
        font-weight: 400
        font-size: 12px
        line-height: 16px
        margin: 0
        color: $grays-gray-400
        text-align: right

@media screen and (max-width: 1024px)
    .site-order-payment
        padding: 24px

@media screen and (max-width: 768px)
    .site-order-payment

        .site-order-payment__wrapper
            grid-row-gap: 24px

        .site-order-payment__header
            text-align: left

        .site-order-payment__title
            font-size: 24px

        .site-order-payment__info
            flex-direction: column
            align-items: flex-start
            grid-row-gap: 18px

        .site-order-payment__cost__value
            font-size: 20px

        .site-order-payment__protection
            flex-direction: column
</style>