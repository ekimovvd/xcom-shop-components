<template>
    <div class="site-checkout-pickup">
        <div class="site-checkout-pickup__content">
            <div class="site-checkout-pickup__info">
                <h4 class="site-checkout-pickup__title">{{ pickupInfo.title }}</h4>
                <p class="site-checkout-pickup__address">
                    {{ pickupInfo.address }}
                </p>
                <p class="site-checkout-pickup__schedule">
                    {{ pickupInfo.schedule }}
                </p>
                <span class="site-checkout-pickup__cost">
                    {{ pickupInfo.cost }}
                </span>
                <p class="site-checkout-pickup__receipt-date">
                    {{ pickupInfo.receiptDate }}
                </p>
                <button class="site-checkout-pickup__change-date-button">
                    Изменить дату
                </button>
            </div>
            <div class="site-checkout-pickup__map">
                <div class="site-checkout-pickup__map-container">
                    <img class="site-checkout-pickup__map-img" src="@/assets/images/checkout/map.png" alt="map">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SiteCheckoutPickup",
    props: {
        pickupInfo: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style lang="sass">
.site-checkout-pickup

    .site-checkout-pickup__content
        display: flex
        grid-gap: 24px

    .site-checkout-pickup__title
        font-weight: 700
        font-size: 20px
        line-height: 24px
        color: $new-black
        margin: 0

    .site-checkout-pickup__address
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-400

    .site-checkout-pickup__schedule
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-400

    .site-checkout-pickup__cost
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $main-blue

    .site-checkout-pickup__receipt-date
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-400

    .site-checkout-pickup__change-date-button
        padding: 13px 32px
        background: $new-blue
        border-radius: 8px
        border: none
        outline: none
        cursor: pointer
        font-family: "Manrope", sans-serif
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $white

    .site-checkout-pickup__map-container
        height: 100%

    .site-checkout-pickup__map-img
        display: block
        max-width: 100%
        height: 100%

@media screen and (max-width: 768px)
    .site-checkout-pickup
        .site-checkout-pickup__map
            display: none
</style>