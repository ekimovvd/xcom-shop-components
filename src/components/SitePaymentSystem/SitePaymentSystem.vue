<template>
    <li class="site-payment-system">
        <img
            :src="require(`@/assets/images/order-payment/${paymentSystem.img}`)"
            :alt="paymentSystem.label"
            class="site-payment-system__image"
        >
    </li>
</template>

<script>
export default {
    name: "SitePaymentSystem",
    props: {
        paymentSystem: {
            type: Object,
        },
    },
}
</script>

<style lang="sass">
.site-payment-system
    display: flex
    justify-content: center
    align-items: center
</style>