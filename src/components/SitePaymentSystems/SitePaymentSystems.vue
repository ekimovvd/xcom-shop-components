<template>
    <ul class="site-payment-systems">
        <SitePaymentSystem
            v-for="paymentSystem in paymentSystems"
            :key="paymentSystem.id"
            :paymentSystem="paymentSystem"
        />
    </ul>
</template>

<script>
import SitePaymentSystem from "@/components/SitePaymentSystem/SitePaymentSystem.vue";

export default {
    name: "SitePaymentSystems",
    components: {SitePaymentSystem},
    props: {
        paymentSystems: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="sass">
.site-payment-systems
    list-style: none
    padding: 0
    margin: 0
    display: flex
    grid-column-gap: 18px
</style>