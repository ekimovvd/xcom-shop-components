<template>
    <SiteSlide
        class="site-checkout-payment__slide"
        :class="getActivePaymentMethodClass"
    >
        <button
            class="site-checkout-payment__slide-button"
            @click="onSelectingPaymentMethod(paymentMethod)"
        >
            <img
                class="site-checkout-payment__slide-icon"
                :src="require(`@/assets/images/checkout/${paymentMethod.icon}`)"
                alt="payment icon"
            />
            <span class="site-checkout-payment__slide-label">
                {{ paymentMethod.title }}
            </span>
        </button>
    </SiteSlide>
</template>

<script>
import {computed, toRefs} from "vue";

export default {
    name: "SiteCheckoutPaymentMethod",
    props: {
        paymentMethod: {
            type: Object,
        },
        isSelectedPaymentMethod: {
            type: Boolean,
            default: false,
        }
    },
    emits: ["selectPaymentMethod"],
    setup(props, { emit }) {
        const { isSelectedPaymentMethod } = toRefs(props);

        const onSelectingPaymentMethod = (paymentMethod) => {
            emit("selectPaymentMethod", paymentMethod);
        };

        const getActivePaymentMethodClass = computed(() => {
            return isSelectedPaymentMethod.value ? "site-checkout-payment__slide--active" : "";
        });

        return {
            onSelectingPaymentMethod,
            getActivePaymentMethodClass,
        };
    },
}
</script>

<style lang="sass">
.site-checkout-payment__slide
    border-radius: 24px
    border: 1px solid $new-gray-200
    &--active
        border-color: $main-blue

    .site-checkout-payment__slide-button
        display: flex
        align-items: center
        justify-content: center
        flex-direction: column
        border: none
        background: transparent
        font-family: 'Manrope', sans-serif
        text-decoration: none
        cursor: pointer
        color: $new-black
        padding: 16px 24px
        height: 100%
        width: 100%

    .site-checkout-payment__slide-icon
        display: block

    .site-checkout-payment__slide-label
        font-weight: 700
        font-size: 12px
        color: $main-black
        text-align: center
        margin: 10px 0 0
</style>